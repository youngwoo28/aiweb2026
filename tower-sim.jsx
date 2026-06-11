import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import * as THREE from "three";

/* ════════════════════════════════════════════════════════════════
   STRUCT//SIM v5.0 — ACCIDENT CHAIN EDITION
   · 흔들림 연쇄 사고 시뮬레이션:
     전도(실내) → 가구 전도 충돌 → 유리 파손(파편 버스트)
     → 창외 추락(탄도 낙하) → 엘리베이터 정지(계단 전용)
   · 사고 예보(ACCIDENT FORECAST) + 세션 실시간 발생 카운트
   · 층 가속도 기반 인체 등급 / 골든타임 보정 / 구조 판정 유지
   ════════════════════════════════════════════════════════════════ */
const NF = 50, FH = 4, L = 200, EI0 = 6.7e11;
const DLIM = (L * 1000) / 500;
const OUTRIGGERS = [15, 35];
const PARAMS = {
  wind:      { min: 0,   max: 150, def: 40,  unit: "kN",  label: "WIND LOAD" },
  dead:      { min: 100, max: 500, def: 250, unit: "ton", label: "DEAD LOAD" },
  thickness: { min: 10,  max: 50,  def: 25,  unit: "mm",  label: "MEMBER THK" },
};

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const shapeFn = s => (3*s*s - s*s*s) / 2;
const wOf = s => 40 - 12*s;
const dOf = s => 30 - 8*s;

function stressColorHex(u) {
  const stops = [[0,[0,240,255]],[0.45,[184,134,11]],[0.75,[255,107,26]],[1,[255,42,42]]];
  const t = clamp(u, 0, 1);
  for (let i = 0; i < stops.length-1; i++) {
    const [a,ca] = stops[i], [b,cb] = stops[i+1];
    if (t >= a && t <= b) {
      const k = (t-a)/(b-a);
      const c = [0,1,2].map(j => Math.round(ca[j]+(cb[j]-ca[j])*k));
      return (c[0]<<16)|(c[1]<<8)|c[2];
    }
  }
  return 0xff2a2a;
}

function evalDesign(wind, dead, thk) {
  const EI = EI0*(thk/25);
  const F = wind*1e3;
  const Pn = dead*1000*9.81;
  const Pcr = Math.PI**2*EI/(4*L*L);
  const stab = Pn/Pcr;
  const amp = 1/Math.max(0.05, 1-stab);
  const dEff = (F*L**3/(3*EI))*amp*1000;
  const util = (dead/500*0.62 + wind/150*0.55)*Math.pow(25/thk, 0.85)*1.08;
  const checks = [
    { id:"defl",  label:"δ ≤ H/500",    txt:`${dEff.toFixed(1)}mm / ${DLIM.toFixed(0)}mm`, ratio: dEff/DLIM },
    { id:"sigma", label:"σ/σy ≤ 1.0",   txt:`${util.toFixed(2)} / 1.00`,                   ratio: util },
    { id:"stab",  label:"P/Pcr ≤ 0.25", txt:`${stab.toFixed(3)} / 0.25`,                   ratio: stab/0.25 },
  ].map(c => ({ ...c, ok: c.ratio <= 1, margin: (1-c.ratio)*100 }));
  return { dEff, util, stab, amp, checks, allOk: checks.every(c=>c.ok), nFail: checks.filter(c=>!c.ok).length };
}
function requiredThk(wind, dead) {
  for (let t = 10; t <= 50; t += 0.5) if (evalDesign(wind, dead, t).allOk) return t;
  return null;
}

/* ── 인체 영향 등급 (ISO 10137형 단순화, milli-g) ── */
function harmLevel(mg) {
  if (mg < 5)  return { name: "NONE",        ko: "체감 없음",        col: "#00F0FF", hex: 0x00f0ff };
  if (mg < 15) return { name: "PERCEPTIBLE", ko: "진동 감지",        col: "#B8860B", hex: 0xb8860b };
  if (mg < 35) return { name: "DISCOMFORT",  ko: "불쾌·보행 곤란",   col: "#FF6B1A", hex: 0xff6b1a };
  if (mg < 70) return { name: "HAZARD",      ko: "전도(넘어짐) 위험", col: "#FF4040", hex: 0xff4040 };
  return        { name: "SEVERE",      ko: "부상 위험",        col: "#FF2A2A", hex: 0xff2a2a };
}
function harmCalc(occ, mg) {
  const lvl = harmLevel(mg);
  const pFall = clamp((mg - 35)/100, 0, 0.85);
  const nAffect = Math.round(occ * clamp((mg - 5)/40, 0, 1));
  const nFall = Math.round(occ * pFall);
  const nInjury = Math.round(occ * pFall * 0.3);
  return { lvl, pFall, nAffect, nFall, nInjury };
}

/* ── 사고 연쇄 예측 (시연용 통계 추정) ── */
function accidentCalc(occ, mg) {
  const pGlass = clamp((mg - 60) / 120, 0, 0.8);            // 유리 파손 확률
  const nGlass = Math.round(occ * pGlass * 0.10);           // 파편 부상
  const pFurn  = clamp((mg - 45) / 120, 0, 0.7);            // 가구 전도 확률
  const nFurn  = Math.round(occ * pFurn * 0.14);            // 가구 충돌 부상
  const pEject = mg > 75 ? clamp((mg - 75) / 180, 0, 0.22) : 0;  // 파손창 인접자 추락
  const nEject = pEject > 0 ? Math.max(1, Math.round(occ * 0.12 * pEject)) : 0;
  const evLock = mg > 25;                                   // 엘리베이터 안전정지
  const nTrap  = evLock ? Math.round(occ * 0.08) : 0;       // 갇힘 추정
  return { pGlass, nGlass, pFurn, nFurn, pEject, nEject, evLock, nTrap };
}

/* ── 피난 골든타임 (가속도 → 보행저하 + EV정지 → 대기열 가중) ── */
const ASET = 600;
function evacCalc(floor, dead, mg) {
  const occ = Math.round(20 + (dead/500)*50);
  const slow = 1 + clamp(mg, 0, 120)/60;
  const evLock = mg > 25;
  const tPre = 60;
  const tWalk = 18 * slow;
  const tQueue = (occ / 1.1) * (evLock ? 1.35 : 1);          // 계단 전용 전환 가중
  const tDescent = (floor*FH/0.45) * slow;
  const rset = tPre + tWalk + tQueue + tDescent;
  const margin = ASET - rset;
  const status = margin > 180 ? "SAFE" : margin > 60 ? "WARN" : "CRITICAL";
  return { occ, slow, evLock, tPre, tWalk, tQueue, tDescent, rset, margin, status };
}
const statusCss = s => s === "SAFE" ? "#00F0FF" : s === "WARN" ? "#FF6B1A" : "#FF2A2A";
const statusHex = s => s === "SAFE" ? 0x00f0ff : s === "WARN" ? 0xff6b1a : 0xff2a2a;

function mulberry32(a){return function(){a|=0;a=(a+0x6D2B79F5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296;};}

/* 글로우 스프라이트 텍스처 */
function makeGlowTex(rgb = "0,240,255") {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const x = c.getContext("2d");
  const g = x.createRadialGradient(32,32,0,32,32,32);
  g.addColorStop(0, `rgba(${rgb},0.9)`);
  g.addColorStop(0.4, `rgba(${rgb},0.25)`);
  g.addColorStop(1, `rgba(${rgb},0)`);
  x.fillStyle = g;
  x.fillRect(0,0,64,64);
  return new THREE.CanvasTexture(c);
}
function makeExitTex() {
  const c = document.createElement("canvas");
  c.width = 128; c.height = 56;
  const x = c.getContext("2d");
  x.fillStyle = "rgba(3,30,18,0.9)";
  x.fillRect(0,0,128,56);
  x.strokeStyle = "#29FF9E"; x.lineWidth = 3;
  x.strokeRect(3,3,122,50);
  x.fillStyle = "#29FF9E";
  x.font = "bold 30px monospace";
  x.textAlign = "center"; x.textBaseline = "middle";
  x.fillText("EXIT", 64, 30);
  return new THREE.CanvasTexture(c);
}

export default function TowerSim3DHuman() {
  const [wind, setWind] = useState(PARAMS.wind.def);
  const [dead, setDead] = useState(PARAMS.dead.def);
  const [thk,  setThk]  = useState(PARAMS.thickness.def);
  const [logs, setLogs] = useState([]);
  const [selFloor, setSelFloor] = useState(null);
  const [live, setLive] = useState({ mg: 0, fallen: 0, ejected: 0, furn: 0, glass: 0 });

  const verdict = useMemo(() => evalDesign(wind, dead, thk), [wind, dead, thk]);
  const reqThk  = useMemo(() => requiredThk(wind, dead), [wind, dead]);
  const mgQ = Math.round(live.mg);
  const evac = useMemo(() => selFloor !== null ? evacCalc(selFloor, dead, mgQ) : null, [selFloor, dead, mgQ]);
  const harm = useMemo(() => evac ? harmCalc(evac.occ, mgQ) : null, [evac, mgQ]);
  const accid = useMemo(() => evac ? accidentCalc(evac.occ, mgQ) : null, [evac, mgQ]);

  const mountRef = useRef(null);
  const logRef   = useRef(null);
  const paramsRef = useRef({ wind, dead, thk });
  const verdictRef = useRef(verdict);
  const selRef = useRef(null);
  const prevOkRef = useRef(true);

  paramsRef.current = { wind, dead, thk };
  verdictRef.current = verdict;

  const pushLog = useCallback((line, tone = "dim") => {
    setLogs(prev => [...prev.slice(-60), { line, tone, id: Math.random() }]);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      const v = verdictRef.current, p = paramsRef.current;
      pushLog(`δ_eff=${v.dEff.toFixed(1)}mm  σ=${v.util.toFixed(2)}  P/Pcr=${v.stab.toFixed(3)}`, "cyan");
      v.checks.forEach(c => pushLog(`[${c.ok?"PASS":"FAIL"}] ${c.label}  m=${c.margin.toFixed(0)}%`, c.ok?"dim":"warn"));
      const rq = requiredThk(p.wind, p.dead);
      pushLog(rq===null ? "REQ THK: 범위 초과" :
        `REQ THK ≥ ${rq.toFixed(1)}mm (현재 ${p.thk}mm ${p.thk>=rq?"OK":"부족"})`, rq!==null&&p.thk>=rq?"cyan":"warn");
    }, 150);
    return () => clearTimeout(t);
  }, [wind, dead, thk, pushLog]);

  useEffect(() => {
    if (prevOkRef.current !== verdict.allOk) {
      pushLog(verdict.allOk ? "★ STATUS → ALL CHECKS PASS" : `★ STATUS → DESIGN NG (${verdict.nFail}/3)`, verdict.allOk?"cyan":"warn");
      prevOkRef.current = verdict.allOk;
    }
  }, [verdict, pushLog]);

  useEffect(() => {
    pushLog("STRUCT//SIM v5.0 — ACCIDENT CHAIN MODE", "cyan");
    pushLog("DRAG=회전 WHEEL/PINCH=줌 층 탭=FLOOR DIVE", "dim");
    pushLog("CHAIN: 전도→가구→유리파손→창외추락→EV정지", "dim");
  }, [pushLog]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [logs]);

  const exitFloor = useCallback(() => {
    selRef.current = null;
    setSelFloor(null);
    pushLog("FLOOR DIVE EXIT → OVERVIEW", "dim");
  }, [pushLog]);

  /* ════════════ THREE.JS ════════════ */
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let W = mount.clientWidth, H = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000104, 1);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.touchAction = "none";

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000308, 0.0014);

    const camera = new THREE.PerspectiveCamera(50, W/H, 0.5, 4000);
    const cam  = { theta: -0.55, phi: 1.16, radius: 330, target: new THREE.Vector3(0, 95, 0) };
    const goal = { theta: -0.55, phi: 1.16, radius: 330, target: new THREE.Vector3(0, 95, 0) };
    let lastInteract = 0;

    /* 조명 */
    scene.add(new THREE.AmbientLight(0x26384a, 1.0));
    scene.add(new THREE.HemisphereLight(0x2a4a60, 0x05080c, 0.8));
    const key = new THREE.DirectionalLight(0x9cc8da, 0.75);
    key.position.set(-140, 240, 170);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x0a5fae, 0.5);
    rim.position.set(180, 120, -200);
    scene.add(rim);
    const cyanPt = new THREE.PointLight(0x00f0ff, 0.7, 700);
    cyanPt.position.set(0, 240, 0);
    scene.add(cyanPt);

    /* 별하늘 */
    {
      const n = 700, pos = new Float32Array(n*3);
      const r = mulberry32(99);
      for (let i = 0; i < n; i++) {
        const th = r()*Math.PI*2, ph = Math.acos(r()*0.85);
        const rad = 1400 + r()*400;
        pos[i*3]   = rad*Math.sin(ph)*Math.cos(th);
        pos[i*3+1] = Math.abs(rad*Math.cos(ph)) + 10;
        pos[i*3+2] = rad*Math.sin(ph)*Math.sin(th);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      scene.add(new THREE.Points(g, new THREE.PointsMaterial({
        color: 0x9adfe8, size: 1.6, transparent: true, opacity: 0.6, sizeAttenuation: false,
      })));
    }

    /* 지면 + 그리드 + 타워 글로우 패드 */
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(1200, 1200),
      new THREE.MeshLambertMaterial({ color: 0x01060a, emissive: 0x010408 })
    );
    ground.rotation.x = -Math.PI/2; ground.position.y = -0.25;
    scene.add(ground);
    const grid = new THREE.GridHelper(1000, 64, 0x00f0ff, 0x00f0ff);
    grid.material.transparent = true; grid.material.opacity = 0.07;
    scene.add(grid);
    const glowTex = makeGlowTex();
    const pad = new THREE.Mesh(
      new THREE.PlaneGeometry(180, 180),
      new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    pad.rotation.x = -Math.PI/2; pad.position.y = 0.05;
    scene.add(pad);

    /* 배경 스카이라인 */
    const rng = mulberry32(20260611);
    for (let i = 0; i < 30; i++) {
      const bw = 14+rng()*24, bd = 14+rng()*24, bh = 18+rng()*80;
      const ang = rng()*Math.PI*2, dist = 160+rng()*300;
      const b = new THREE.Mesh(
        new THREE.BoxGeometry(bw, bh, bd),
        new THREE.MeshLambertMaterial({ color: 0x081720, emissive: 0x030c12 })
      );
      b.position.set(Math.cos(ang)*dist, bh/2, Math.sin(ang)*dist);
      scene.add(b);
      const e = new THREE.LineSegments(
        new THREE.EdgesGeometry(b.geometry),
        new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.07 })
      );
      e.position.copy(b.position);
      scene.add(e);
    }

    /* ════ 타워 ════ */
    const floors = [];
    const raycastTargets = [];
    for (let f = 0; f < NF; f++) {
      const s = f/NF, w = wOf(s), d = dOf(s);
      const g = new THREE.Group();
      g.position.y = f*FH;
      const mech = f >= NF-2;

      const glassMat = new THREE.MeshLambertMaterial({
        color: mech ? 0x12303f : 0x0a1a2a, emissive: mech ? 0x0a2230 : 0x03121e,
        transparent: true, opacity: 0.45,
      });
      const glass = new THREE.Mesh(new THREE.BoxGeometry(w, FH-0.4, d), glassMat);
      glass.position.y = FH/2;
      glass.userData.floor = f;
      g.add(glass);
      raycastTargets.push(glass);

      const ev = evacCalc(f, PARAMS.dead.def, 0);
      const edgeMat = new THREE.LineBasicMaterial({ color: statusHex(ev.status), transparent: true, opacity: f%10===0 ? 0.4 : 0.18 });
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(glass.geometry), edgeMat);
      edges.position.y = FH/2;
      g.add(edges);

      const slabMat = new THREE.MeshLambertMaterial({
        color: 0x123a50, emissive: f%10===0 ? 0x0a2c3e : 0x062230,
        transparent: true, opacity: 0.95,
      });
      const slab = new THREE.Mesh(new THREE.BoxGeometry(w+0.9, 0.35, d+0.9), slabMat);
      g.add(slab);

      const core = new THREE.Mesh(
        new THREE.BoxGeometry(10, FH-0.2, 8),
        new THREE.MeshLambertMaterial({ color: 0x0d2433, emissive: 0x041824, transparent: true, opacity: 0.9 })
      );
      core.position.y = FH/2;
      g.add(core);

      scene.add(g);
      floors.push({ g, glassMat, edgeMat, slabMat });
    }

    /* 아웃리거 X */
    const compMat = new THREE.MeshBasicMaterial({ color: 0xff6b1a, transparent: true, opacity: 0.95 });
    const tensMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.95 });
    OUTRIGGERS.forEach(fl => {
      const fo = floors[fl];
      const s = fl/NF, w = wOf(s), d = dOf(s);
      const mk = (x0, x1, mat, z) => {
        const len = Math.hypot(x1-x0, FH);
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.8, len, 0.8), mat);
        m.position.set((x0+x1)/2, FH/2, z);
        m.rotation.z = Math.atan2(x1-x0, FH);
        fo.g.add(m);
      };
      [d/2-0.6, -(d/2-0.6)].forEach(z => {
        mk(-w/2, -5, tensMat, z); mk(-5, -w/2, compMat, z);
        mk(5, w/2, compMat, z);   mk(w/2, 5, tensMat, z);
      });
    });

    /* 모서리 LED + 글로우 스프라이트 코너 */
    const ledMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.9 });
    const ledLines = [[-1,-1],[1,-1],[-1,1],[1,1]].map(([cx,cz]) => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array((NF+1)*3), 3));
      const line = new THREE.Line(geo, ledMat);
      scene.add(line);
      return { line, cx, cz };
    });

    /* 창문 조명 */
    const winData = [];
    const winRng = mulberry32(7);
    for (let f = 1; f < NF; f++) {
      for (let m = 0; m < 6; m++) {
        if (winRng() < 0.34) winData.push({ f, fx: (m+0.5)/6-0.5, side: winRng()<0.5?1:-1, warm: winRng()<0.7 });
      }
    }
    const winMesh = new THREE.InstancedMesh(
      new THREE.PlaneGeometry(2.1, 2.3),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.95, side: THREE.DoubleSide }),
      winData.length
    );
    const cWarm = new THREE.Color(0xffc478), cCool = new THREE.Color(0x96e6ff);
    winData.forEach((wd, i) => winMesh.setColorAt(i, wd.warm ? cWarm : cCool));
    if (winMesh.instanceColor) winMesh.instanceColor.needsUpdate = true;
    scene.add(winMesh);

    /* 옥상: 헬리패드 + 첨탑 + 비콘 + 글로우 */
    const roofGrp = new THREE.Group();
    const heli = new THREE.Mesh(
      new THREE.RingGeometry(5.5, 6.3, 36),
      new THREE.MeshBasicMaterial({ color: 0x29ff9e, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
    );
    heli.rotation.x = -Math.PI/2; heli.position.set(-7, 0.3, 0);
    roofGrp.add(heli);
    [[-1.6,0,0.5,4.4],[1.6,0,0.5,4.4],[0,0,3.2,0.5]].forEach(([hx,hz,bw,bd]) => {
      const hbar = new THREE.Mesh(new THREE.BoxGeometry(bw, 0.12, bd),
        new THREE.MeshBasicMaterial({ color: 0x29ff9e, transparent: true, opacity: 0.5 }));
      hbar.position.set(-7+hx, 0.32, hz);
      roofGrp.add(hbar);
    });
    const spire = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.8, 18, 6),
      new THREE.MeshBasicMaterial({ color: 0x9ad2e1, transparent: true, opacity: 0.75 })
    );
    spire.position.set(8, 9, 0);
    roofGrp.add(spire);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff2a2a });
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(1.0, 10, 10), beaconMat);
    beacon.position.set(8, 18.6, 0);
    roofGrp.add(beacon);
    const beaconGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeGlowTex("255,42,42"), transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    beaconGlow.position.copy(beacon.position);
    roofGrp.add(beaconGlow);
    scene.add(roofGrp);

    /* 풍하중 파티클 */
    const PN = 170;
    const pPos = new Float32Array(PN*3);
    const pSeed = [];
    for (let i = 0; i < PN; i++) {
      pSeed.push({ y: 6+Math.random()*190, z: -42+Math.random()*84, v: 0.8+Math.random()*0.5 });
      pPos[i*3] = -200-Math.random()*150;
      pPos[i*3+1] = pSeed[i].y;
      pPos[i*3+2] = pSeed[i].z;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pts = new THREE.Points(pGeo, new THREE.PointsMaterial({
      color: 0xff6b1a, size: 1.7, transparent: true, opacity: 0.75,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    scene.add(pts);

    /* ════ 내부 (FLOOR DIVE) ════ */
    const interior = new THREE.Group();
    interior.visible = false;
    const inFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 30),
      new THREE.MeshLambertMaterial({ color: 0x0c2030, emissive: 0x06141f, side: THREE.DoubleSide })
    );
    inFloor.rotation.x = -Math.PI/2;
    interior.add(inFloor);
    /* 코어 계단실 */
    const stair = new THREE.Mesh(
      new THREE.BoxGeometry(10, 3.4, 8),
      new THREE.MeshBasicMaterial({ color: 0x29ff9e, transparent: true, opacity: 0.32 })
    );
    stair.position.y = 1.7;
    interior.add(stair);
    const stairEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(stair.geometry),
      new THREE.LineBasicMaterial({ color: 0x29ff9e })
    );
    stairEdge.position.copy(stair.position);
    interior.add(stairEdge);
    /* EXIT 사인 */
    const exitSign = new THREE.Mesh(
      new THREE.PlaneGeometry(5, 2.2),
      new THREE.MeshBasicMaterial({ map: makeExitTex(), transparent: true, side: THREE.DoubleSide })
    );
    exitSign.position.set(0, 4.4, 0);
    interior.add(exitSign);
    const exitGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeGlowTex("41,255,158"), transparent: true, opacity: 0.6,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    exitGlow.scale.setScalar(10);
    exitGlow.position.set(0, 4.4, 0);
    interior.add(exitGlow);
    /* 벽 */
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x16384a, emissive: 0x09202c, transparent: true, opacity: 0.85 });
    [[0,-7.5,36,0.4],[0,7.5,36,0.4],
     [-12,-11,0.4,7],[0,-11,0.4,7],[12,-11,0.4,7],
     [-12,11,0.4,7],[0,11,0.4,7],[12,11,0.4,7]].forEach(([x,z,wx,wz]) => {
      const wm = new THREE.Mesh(new THREE.BoxGeometry(wx, 2.8, wz), wallMat);
      wm.position.set(x, 1.4, z);
      interior.add(wm);
    });
    /* 가구 (전도 상태 추적) */
    const furnGroup = new THREE.Group();
    const furnMat = new THREE.MeshLambertMaterial({ color: 0x2a4658, emissive: 0x101f2a });
    const fRng = mulberry32(42);
    const furniture = [];
    for (let i = 0; i < 12; i++) {
      const isBed = fRng() < 0.5;
      const fb = new THREE.Mesh(
        new THREE.BoxGeometry(isBed ? 2.2 : 1.3, isBed ? 0.55 : 0.85, isBed ? 1.5 : 0.9),
        furnMat
      );
      const baseY = isBed ? 0.3 : 0.45;
      fb.position.set((fRng()-0.5)*32, baseY, (fRng()<0.5?-1:1)*(9.5+fRng()*3.5));
      furnGroup.add(fb);
      furniture.push({ m: fb, baseY, tipped: false, dir: fRng() < 0.5 ? 1 : -1 });
    }
    interior.add(furnGroup);

    /* 유리 파편 버스트 + 세션 사고 카운터 */
    const session = { ejected: 0, furn: 0, glass: 0, glassL: false, glassR: false };
    const SHN = 90;
    const shPos = new Float32Array(SHN*3);
    const shVel = [];
    for (let i = 0; i < SHN; i++) { shVel.push(new THREE.Vector3()); shPos[i*3+1] = -999; }
    const shGeo = new THREE.BufferGeometry();
    shGeo.setAttribute("position", new THREE.BufferAttribute(shPos, 3));
    const shards = new THREE.Points(shGeo, new THREE.PointsMaterial({
      color: 0x9be8ff, size: 0.5, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    interior.add(shards);
    let shLife = 0;
    const burstShards = (zSide) => {
      for (let i = 0; i < SHN; i++) {
        shPos[i*3]   = (Math.random()-0.5)*30;
        shPos[i*3+1] = 0.5 + Math.random()*2.5;
        shPos[i*3+2] = zSide*14.5;
        shVel[i].set((Math.random()-0.5)*4, 1+Math.random()*3, zSide*(2.5+Math.random()*5));
      }
      shGeo.attributes.position.needsUpdate = true;
      shLife = 1.6;
    };

    /* ── 휴머노이드 재실자 (몸통+머리+다리) ── */
    const HUMANS = 16;
    const humans = [];
    const mkHumanMat = () => new THREE.MeshLambertMaterial({ color: 0xffc478, emissive: 0x6b4a20 });
    for (let i = 0; i < HUMANS; i++) {
      const hg = new THREE.Group();
      const mat = mkHumanMat();
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.3, 0.95, 8), mat);
      body.position.y = 0.95;
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.21, 8, 8), mat);
      head.position.y = 1.62;
      const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.5, 6), mat);
      legL.position.set(-0.12, 0.25, 0);
      const legR = legL.clone();
      legR.position.x = 0.12;
      hg.add(body, head, legL, legR);
      const h = {
        g: hg, mat, legL, legR,
        state: "walk",        // walk | fallen | ejected
        fallT: 0, phase: Math.random()*Math.PI*2,
        vel: new THREE.Vector3(),
      };
      humans.push(h);
      interior.add(hg);
    }
    const respawnHuman = (h) => {
      h.g.position.set((Math.random()-0.5)*32, 0, (Math.random()<0.5?-1:1)*(9.5+Math.random()*3.5));
      h.g.rotation.set(0,0,0);
      h.state = "walk";
      h.mat.color.setHex(0xffc478);
      h.mat.emissive.setHex(0x6b4a20);
    };
    humans.forEach(respawnHuman);
    scene.add(interior);

    /* ════ 컨트롤 ════ */
    const pointers = new Map();
    let pinchD0 = 0, downXY = null, downT = 0;
    const el = renderer.domElement;
    const raycaster = new THREE.Raycaster();

    const onDown = (e) => {
      el.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, [e.clientX, e.clientY]);
      lastInteract = performance.now();
      if (pointers.size === 1) { downXY = [e.clientX, e.clientY]; downT = performance.now(); }
      if (pointers.size === 2) {
        const a = [...pointers.values()];
        pinchD0 = Math.hypot(a[0][0]-a[1][0], a[0][1]-a[1][1]);
      }
    };
    const onMove = (e) => {
      if (!pointers.has(e.pointerId)) return;
      const prev = pointers.get(e.pointerId);
      pointers.set(e.pointerId, [e.clientX, e.clientY]);
      lastInteract = performance.now();
      if (pointers.size === 1) {
        goal.theta -= (e.clientX - prev[0]) * 0.006;
        goal.phi = clamp(goal.phi - (e.clientY - prev[1]) * 0.005, 0.2, 1.52);
      } else if (pointers.size === 2) {
        const a = [...pointers.values()];
        const d = Math.hypot(a[0][0]-a[1][0], a[0][1]-a[1][1]);
        if (pinchD0 > 0) goal.radius = clamp(goal.radius * pinchD0/d, 30, 800);
        pinchD0 = d;
      }
    };
    const onUp = (e) => {
      pointers.delete(e.pointerId);
      if (downXY && performance.now() - downT < 350) {
        const dxp = Math.hypot(e.clientX-downXY[0], e.clientY-downXY[1]);
        if (dxp < 8) {
          const r = el.getBoundingClientRect();
          const ndc = new THREE.Vector2(
            ((e.clientX-r.left)/r.width)*2-1,
            -((e.clientY-r.top)/r.height)*2+1
          );
          raycaster.setFromCamera(ndc, camera);
          const hit = raycaster.intersectObjects(raycastTargets)[0];
          if (hit) {
            selRef.current = hit.object.userData.floor;
            setSelFloor(hit.object.userData.floor);
          }
        }
      }
      downXY = null;
    };
    const onWheel = (e) => {
      e.preventDefault();
      lastInteract = performance.now();
      goal.radius = clamp(goal.radius*(1+e.deltaY*0.001), 30, 800);
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("wheel", onWheel, { passive: false });

    const ro = new ResizeObserver(() => {
      W = mount.clientWidth; H = mount.clientHeight;
      camera.aspect = W/H; camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    });
    ro.observe(mount);

    /* ════ 루프 ════ */
    const st = { x: 0, v: 0, aI: 0, aPk: 0, t: 0, lastTel: 0, lastUi: 0, lastSel: -2 };
    const FIXED = 1/120;
    let acc = 0, prevT = performance.now(), raf, running = true;
    const EXAG = 40;
    const dummy = new THREE.Object3D();

    const stepPhys = (dt) => {
      const p = paramsRef.current;
      st.t += dt;
      const EI = EI0*(p.thk/25);
      const F = p.wind*1e3;
      const Pcr = Math.PI**2*EI/(4*L*L);
      const Pn = p.dead*1000*9.81;
      const amp = 1/Math.max(0.05, 1-Pn/Pcr);
      const gust = p.wind > 0
        ? 0.085*(Math.sin(st.t*1.7) + 0.55*Math.sin(st.t*4.3+1.2) + 0.3*Math.sin(st.t*7.1+0.4))*(p.wind/150) : 0;
      const target = (F*L**3/(3*EI))*amp*(1+gust);
      const omega = 1.4*Math.sqrt((EI/EI0)/(p.dead/250));
      const a = omega*omega*(target-st.x) - 2*0.07*omega*st.v;
      st.v += a*dt; st.x += st.v*dt;
      st.aI = a;
      st.aPk = Math.max(st.aPk*Math.exp(-dt/2.2), Math.abs(a));   // 피크 엔벨로프
    };
    const bendX = yM => st.x*shapeFn(clamp(yM/L,0,1))*EXAG;
    const floorMg = f => st.aPk*shapeFn(f/NF)/9.81*1000;          // 층 가속도 milli-g
    const floorMgInst = f => st.aI*shapeFn(f/NF)/9.81*1000;

    const animate = (now) => {
      if (!running) return;
      let dt = (now-prevT)/1000; prevT = now;
      dt = Math.min(dt, 0.05);
      acc += dt;
      while (acc >= FIXED) { stepPhys(FIXED); acc -= FIXED; }

      const p = paramsRef.current, vd = verdictRef.current;
      const sel = selRef.current;
      const utilNow = clamp(vd.util, 0, 1);

      /* 오토 오빗 (4초 무입력 + 전체뷰) */
      if (sel === null && now - lastInteract > 4000) goal.theta += 0.05*dt;

      /* 층 휨/페이드 */
      for (let f = 0; f < NF; f++) {
        const fo = floors[f];
        fo.g.position.x = bendX(f*FH);
        const isSel = sel !== null && f === sel;
        const fade = sel !== null && !isSel;
        fo.glassMat.opacity += ((fade?0.04 : isSel?0.08 : 0.45) - fo.glassMat.opacity)*0.15;
        fo.slabMat.opacity  += ((fade?0.07 : 0.95) - fo.slabMat.opacity)*0.15;
        fo.edgeMat.opacity  += ((fade?0.03 : isSel?0.95 : (f%10===0?0.4:0.18)) - fo.edgeMat.opacity)*0.15;
      }
      roofGrp.position.x = bendX(L);

      /* LED */
      ledMat.color.setHex(stressColorHex(utilNow));
      ledLines.forEach(({ line, cx, cz }) => {
        const pos = line.geometry.attributes.position;
        for (let i = 0; i <= NF; i++) {
          const s = i/NF, yM = i*FH;
          pos.setXYZ(i, cx*wOf(s)/2 + bendX(yM), yM, cz*dOf(s)/2);
        }
        pos.needsUpdate = true;
      });
      ledMat.opacity = sel !== null ? 0.12 : 0.9;

      /* 창문 */
      winData.forEach((wd, i) => {
        const s = wd.f/NF;
        dummy.position.set(wd.fx*wOf(s)*0.9 + bendX(wd.f*FH), wd.f*FH+FH/2, wd.side*(dOf(s)/2+0.15));
        dummy.rotation.set(0, wd.side > 0 ? 0 : Math.PI, 0);
        dummy.updateMatrix();
        winMesh.setMatrixAt(i, dummy.matrix);
      });
      winMesh.instanceMatrix.needsUpdate = true;
      winMesh.material.opacity += ((sel !== null ? 0.05 : 0.95) - winMesh.material.opacity)*0.15;

      /* 비콘 */
      const blink = Math.max(0, Math.sin(st.t*2.6));
      beaconMat.color.setRGB(1, 0.16*(1-blink), 0.16*(1-blink));
      beacon.scale.setScalar(0.6+blink*0.6);
      beaconGlow.scale.setScalar(4+blink*9);
      beaconGlow.material.opacity = 0.25+blink*0.65;

      /* 아웃리거 색 */
      const dN = p.dead/500, wN = p.wind/150;
      const thkA = Math.pow(25/p.thk, 0.7);
      compMat.color.setHex(stressColorHex(0.45 + clamp((wN*0.75+dN*0.45)*thkA,0,1)*0.55));
      tensMat.color.setHex(clamp((wN*0.95)*thkA,0,1) > 0.6 ? 0x3c8cff : 0x00f0ff);

      /* 파티클 */
      if (p.wind > 0.5) {
        pts.visible = true;
        const speed = 40+p.wind*1.4;
        const pos = pGeo.attributes.position;
        for (let i = 0; i < PN; i++) {
          let x = pos.getX(i) + speed*pSeed[i].v*dt;
          const y = pSeed[i].y, s = clamp(y/L,0,1);
          if (x > -wOf(s)/2 + bendX(y)) x = -200-Math.random()*120;
          pos.setX(i, x);
        }
        pos.needsUpdate = true;
        pts.material.opacity = 0.3 + (p.wind/150)*0.6;
      } else pts.visible = false;

      /* ════ FLOOR DIVE: 내부 + 인체 반응 ════ */
      let fallenCount = 0;
      if (sel !== null) {
        const s = sel/NF;
        interior.visible = true;
        interior.position.set(bendX(sel*FH), sel*FH+0.4, 0);
        interior.scale.set(wOf(s)/40, 1, dOf(s)/30);

        const mgI = floorMgInst(sel);            // 순간 가속도 (부호 포함)
        const mgP = floorMg(sel);                // 피크 가속도
        const lean = clamp(-mgI*0.004, -0.45, 0.45);
        const pFallNow = clamp((mgP-35)/100, 0, 0.85);

        /* ── 유리 파손 (양측 독립, 1회성) ── */
        if (mgP > 60) {
          const pG = clamp((mgP-60)/120, 0, 0.8);
          if (!session.glassL && Math.random() < pG*dt*0.55) { session.glassL = true; session.glass++; burstShards(-1); }
          if (!session.glassR && Math.random() < pG*dt*0.55) { session.glassR = true; session.glass++; burstShards(1); }
        }
        /* 파편 비행 */
        if (shLife > 0) {
          shLife -= dt;
          for (let i = 0; i < SHN; i++) {
            shVel[i].y -= 9.81*dt;
            shPos[i*3]   += shVel[i].x*dt;
            shPos[i*3+1] += shVel[i].y*dt;
            shPos[i*3+2] += shVel[i].z*dt;
          }
          shGeo.attributes.position.needsUpdate = true;
          shards.material.opacity = clamp(shLife/1.6, 0, 1);
        } else shards.material.opacity = 0;

        /* ── 가구: 평시 관성 기울어짐 → 임계 초과 시 전도 ── */
        furniture.forEach(fu => {
          if (!fu.tipped && mgP > 45 && Math.random() < clamp((mgP-45)/120, 0, 0.7)*dt*0.4) {
            fu.tipped = true; session.furn++;
          }
          const tz = fu.tipped ? fu.dir*1.35 : lean*0.5;
          fu.m.rotation.z += (tz - fu.m.rotation.z)*Math.min(1, 6*dt);
          fu.m.position.y += ((fu.tipped ? fu.baseY*0.55 : fu.baseY) - fu.m.position.y)*Math.min(1, 6*dt);
        });

        humans.forEach(h => {
          /* 창외 추락: 탄도 낙하 */
          if (h.state === "ejected") {
            h.vel.y -= 9.81*dt*1.5;
            h.g.position.addScaledVector(h.vel, dt);
            h.g.rotation.x += 4.5*dt;
            h.g.rotation.z += 3.2*dt;
            if (interior.position.y + h.g.position.y <= 0.5) respawnHuman(h);
            return;
          }
          if (h.state === "fallen") {
            fallenCount++;
            h.fallT += dt;
            if (h.fallT > 6) respawnHuman(h);
            return;
          }
          /* 파손창 인접 + SEVERE → 추락 발생 */
          const nearEdge = Math.abs(h.g.position.z) > 11.5;
          const sideBroken = h.g.position.z > 0 ? session.glassR : session.glassL;
          if (mgP > 75 && nearEdge && sideBroken &&
              Math.random() < clamp((mgP-75)/180, 0, 0.22)*dt*0.9) {
            h.state = "ejected";
            session.ejected++;
            h.vel.set((Math.random()-0.5)*2, 2.5, Math.sign(h.g.position.z)*(4+Math.random()*3));
            h.mat.color.setHex(0xff2a2a);
            h.mat.emissive.setHex(0x661414);
            return;
          }
          /* 전도 판정 */
          if (mgP > 35 && Math.random() < pFallNow*dt*0.7) {
            h.state = "fallen"; h.fallT = 0;
            h.g.rotation.z = Math.PI/2 * (mgI >= 0 ? -1 : 1);
            h.g.position.y = 0.35;
            h.mat.color.setHex(0xff3a3a);
            h.mat.emissive.setHex(0x661414);
            return;
          }
          /* 보행: 계단으로, 흔들림에 따라 감속+비틀거림 */
          const slow = 1/(1 + mgP/60);
          const dir = new THREE.Vector3(-h.g.position.x, 0, -h.g.position.z);
          const dist = dir.length();
          if (dist < 5.5) { respawnHuman(h); return; }
          dir.normalize();
          /* 비틀거림(횡방향 흔들림) */
          if (mgP > 15) {
            const sway = Math.sin(st.t*5 + h.phase) * clamp((mgP-15)/40, 0, 1) * 1.6;
            dir.x += -dir.z*sway*dt*8;
            dir.z +=  dir.x*sway*dt*8;
            dir.normalize();
          }
          h.g.position.addScaledVector(dir, 3.0*slow*dt);
          h.g.position.y = 0;
          /* 진행방향 + 관성 기울어짐 */
          h.g.rotation.y = Math.atan2(dir.x, dir.z);
          h.g.rotation.z = lean;
          /* 걷기 모션 */
          const step = Math.sin(st.t*7*slow + h.phase)*0.35;
          h.legL.rotation.x = step;
          h.legR.rotation.x = -step;
          /* 상태색 */
          if (mgP > 35) { h.mat.color.setHex(0xff8a4a); h.mat.emissive.setHex(0x5a2a10); }
          else if (mgP > 15) { h.mat.color.setHex(0xffb35e); h.mat.emissive.setHex(0x5e3c18); }
          else { h.mat.color.setHex(0xffc478); h.mat.emissive.setHex(0x6b4a20); }
        });

        goal.target.set(bendX(sel*FH), sel*FH+2, 0);
        if (st.lastSel !== sel) {
          goal.radius = 58; goal.phi = 0.92; st.lastSel = sel;
          /* 세션 리셋 */
          session.ejected = 0; session.furn = 0; session.glass = 0;
          session.glassL = false; session.glassR = false;
          furniture.forEach(fu => { fu.tipped = false; });
          humans.forEach(respawnHuman);
          shards.material.opacity = 0; shLife = 0;
        }
      } else {
        interior.visible = false;
        if (st.lastSel !== -2) {
          goal.target.set(0, 95, 0);
          goal.radius = 330; goal.phi = 1.16;
          st.lastSel = -2;
        }
      }

      /* 카메라 */
      const k = 1 - Math.exp(-6*dt);
      cam.theta += (goal.theta-cam.theta)*k;
      cam.phi   += (goal.phi-cam.phi)*k;
      cam.radius+= (goal.radius-cam.radius)*k;
      cam.target.lerp(goal.target, k);
      camera.position.set(
        cam.target.x + cam.radius*Math.sin(cam.phi)*Math.sin(cam.theta),
        cam.target.y + cam.radius*Math.cos(cam.phi),
        cam.target.z + cam.radius*Math.sin(cam.phi)*Math.cos(cam.theta)
      );
      camera.lookAt(cam.target);

      /* UI 동기화 (0.45s) */
      if (st.t - st.lastUi > 0.45) {
        st.lastUi = st.t;
        const mgUi = sel !== null ? floorMg(sel) : floorMg(NF);
        setLive({
          mg: mgUi, fallen: fallenCount,
          ejected: session.ejected, furn: session.furn, glass: session.glass,
        });
      }
      /* 텔레메트리 (2s) */
      if (st.t - st.lastTel > 2.0) {
        st.lastTel = st.t;
        pushLog(`t=${st.t.toFixed(1).padStart(6)}s δ=${(st.x*1000).toFixed(1).padStart(7)}mm a_pk=${floorMg(NF).toFixed(1)}mg → ${vd.allOk?"PASS":"NG"}`, vd.allOk?"dim":"warn");
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("wheel", onWheel);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [pushLog]);

  useEffect(() => {
    if (selFloor !== null && evac && harm) {
      pushLog(`▼ FLOOR DIVE ${selFloor}F  OCC=${evac.occ}  a=${mgQ}mg [${harm.lvl.name}]  RSET=${evac.rset.toFixed(0)}s`, harm.lvl.name === "NONE" ? "cyan" : "warn");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selFloor]);

  /* ── UI ── */
  const Slider = ({ cfg, value, onChange, accent }) => (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, letterSpacing: 1.5, color: "rgba(0,240,255,0.55)", marginBottom: 5 }}>
        <span>{cfg.label}</span>
        <span style={{ color: accent, fontSize: 11 }}>{value.toFixed(0).padStart(3, "\u00A0")} {cfg.unit}</span>
      </div>
      <input type="range" className="fui-slider"
        min={cfg.min} max={cfg.max} step={1} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ "--accent": accent }} />
    </div>
  );

  const toneColor = { cyan: "#00F0FF", amber: "#B8860B", warn: "#FF6B1A", dim: "rgba(160,200,210,0.55)" };
  const lvl = harmLevel(live.mg);

  return (
    <div className="layout" style={{
      display: "grid", gridTemplateColumns: "302px 1fr",
      width: "100%", height: "100vh", background: "#000",
      fontFamily: "'JetBrains Mono','SF Mono','Courier New',monospace",
      color: "#cfeef5", overflow: "hidden",
    }}>
      <style>{`
        @media (max-width: 700px) {
          .layout { grid-template-columns: 1fr !important; grid-template-rows: 50% 50%; }
          .panel { order: 2; border-right: none !important; border-top: 1px solid rgba(0,240,255,0.18); }
          .stage { order: 1; }
        }
        .fui-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 2px;
          background: rgba(0,240,255,0.2); outline: none; cursor: pointer; }
        .fui-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none;
          width: 12px; height: 18px; background: var(--accent, #00F0FF);
          clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%);
          box-shadow: 0 0 8px var(--accent, #00F0FF); }
        .fui-slider::-moz-range-thumb { width: 12px; height: 18px; border: none;
          background: var(--accent, #00F0FF); box-shadow: 0 0 8px var(--accent, #00F0FF); }
        .log-line { animation: fadeIn .25s ease; white-space: pre; }
        @keyframes fadeIn { from { opacity: 0; transform: translateX(-4px); } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) { .log-line { animation: none; } }
        .fui-btn:hover { background: rgba(0,240,255,0.08) !important; }
      `}</style>

      {/* ═══ 좌측 패널 ═══ */}
      <div className="panel" style={{
        borderRight: "1px solid rgba(0,240,255,0.18)",
        display: "flex", flexDirection: "column", padding: "13px 14px 8px",
        minWidth: 0, minHeight: 0, overflowY: "auto",
      }}>
        <div style={{ fontSize: 13, letterSpacing: 3, color: "#00F0FF", textShadow: "0 0 10px rgba(0,240,255,0.6)" }}>
          STRUCT//SIM <span style={{ fontSize: 9, color: "#FF6B1A" }}>v5.0 ACCIDENT</span>
        </div>
        <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.35)", letterSpacing: 1, marginBottom: 11 }}>
          DRAG 회전 · PINCH 줌 · 층 탭 = FLOOR DIVE
        </div>

        <Slider cfg={PARAMS.wind}      value={wind} onChange={setWind} accent="#FF6B1A" />
        <Slider cfg={PARAMS.dead}      value={dead} onChange={setDead} accent="#B8860B" />
        <Slider cfg={PARAMS.thickness} value={thk}  onChange={setThk}  accent="#00F0FF" />

        {/* 구조 판정 */}
        <div style={{
          border: `1px solid ${verdict.allOk ? "rgba(0,240,255,0.25)" : "rgba(255,42,42,0.5)"}`,
          padding: "8px 10px", marginBottom: 8,
        }}>
          <div style={{ fontSize: 10, letterSpacing: 1.5, marginBottom: 5, color: verdict.allOk ? "#00F0FF" : "#FF2A2A" }}>
            {verdict.allOk ? "◆ ALL CHECKS PASS" : `◆ DESIGN NG (${verdict.nFail}/3)`}
          </div>
          {verdict.checks.map(c => (
            <div key={c.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 8.5, marginBottom: 2 }}>
              <span style={{ color: c.ok ? "rgba(0,240,255,0.8)" : "#FF2A2A" }}>■ {c.label}</span>
              <span style={{ color: "rgba(255,255,255,0.45)" }}>{c.txt}</span>
            </div>
          ))}
          <div style={{
            marginTop: 5, paddingTop: 4, borderTop: "1px dashed rgba(255,255,255,0.12)", fontSize: 8.5,
            color: reqThk !== null && thk >= reqThk ? "rgba(0,240,255,0.85)" : "#FF6B1A",
          }}>
            REQ THK {reqThk === null ? ": 범위 초과" : `≥ ${reqThk.toFixed(1)}mm`}
            <span style={{ float: "right", color: "rgba(255,255,255,0.4)" }}>
              꼭대기 a_pk {live.mg.toFixed(1)}mg
            </span>
          </div>
        </div>

        {/* FLOOR DIVE + 인체/사고 예측 */}
        {selFloor !== null && evac && harm && accid && (
          <div style={{
            border: `1px solid ${harm.lvl.col}66`,
            padding: "8px 10px", marginBottom: 8, background: "rgba(0,240,255,0.02)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span style={{ fontSize: 11, color: "#29FF9E", letterSpacing: 1 }}>▼ {selFloor}F INTERIOR</span>
              <button className="fui-btn" onClick={exitFloor} style={{
                background: "transparent", border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.6)", fontFamily: "inherit", fontSize: 8,
                padding: "2px 7px", cursor: "pointer",
              }}>EXIT ✕</button>
            </div>

            {/* 인체 영향 */}
            <div style={{ fontSize: 9, letterSpacing: 1.5, color: harm.lvl.col, marginBottom: 4 }}>
              ◈ BODY IMPACT — {harm.lvl.name} <span style={{ color: "rgba(255,255,255,0.5)" }}>({harm.lvl.ko})</span>
            </div>
            <div style={{ fontSize: 9, lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>
              <div>층 피크 가속도 <span style={{ float: "right", color: harm.lvl.col }}>{live.mg.toFixed(1)} milli-g</span></div>
              <div style={{ height: 4, background: "rgba(255,255,255,0.08)", margin: "3px 0 5px" }}>
                <div style={{
                  height: "100%", width: `${clamp(live.mg/100,0,1)*100}%`,
                  background: harm.lvl.col, boxShadow: `0 0 6px ${harm.lvl.col}`,
                  transition: "width .3s",
                }} />
              </div>
              <div>재실 인원(추정) <span style={{ float: "right", color: "#FFC478" }}>{evac.occ}명</span></div>
              <div>전도 위험 <span style={{ float: "right", color: harm.nFall > 0 ? "#FF6B1A" : "inherit" }}>{(harm.pFall*100).toFixed(0)}% · {harm.nFall}명</span></div>
            </div>

            {/* 사고 예보 */}
            <div style={{ fontSize: 9, letterSpacing: 1.5, color: "#FF6B1A", margin: "6px 0 3px", borderTop: "1px dashed rgba(255,255,255,0.12)", paddingTop: 5 }}>
              ◈ ACCIDENT FORECAST
            </div>
            <div style={{ fontSize: 9, lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>
              <div>가구 전도 충돌 <span style={{ float: "right", color: accid.nFurn > 0 ? "#FFB35E" : "inherit" }}>{(accid.pFurn*100).toFixed(0)}% · 부상 ~{accid.nFurn}명</span></div>
              <div>유리 파손·파편 <span style={{ float: "right", color: accid.nGlass > 0 ? "#FF6B1A" : "inherit" }}>{(accid.pGlass*100).toFixed(0)}% · 부상 ~{accid.nGlass}명</span></div>
              <div>창외 추락 위험 <span style={{ float: "right", color: accid.nEject > 0 ? "#FF2A2A" : "inherit" }}>{(accid.pEject*100).toFixed(0)}% · ~{accid.nEject}명</span></div>
              <div>EV 안전정지 <span style={{ float: "right", color: accid.evLock ? "#FF6B1A" : "rgba(255,255,255,0.4)" }}>{accid.evLock ? `정지 · 갇힘 ~${accid.nTrap}명` : "정상 운행"}</span></div>
              <div style={{ marginTop: 3, padding: "3px 5px", background: "rgba(255,42,42,0.07)", border: "1px solid rgba(255,42,42,0.2)" }}>
                세션 발생: 전도 <span style={{ color: "#FF6B1A" }}>{live.fallen}</span>
                {" "}· 가구 <span style={{ color: "#FFB35E" }}>{live.furn}</span>
                {" "}· 유리 <span style={{ color: "#9BE8FF" }}>{live.glass}</span>
                {" "}· 추락 <span style={{ color: "#FF2A2A", textShadow: live.ejected > 0 ? "0 0 8px #FF2A2A" : "none" }}>{live.ejected}</span>
              </div>
            </div>

            {/* 골든타임 (흔들림+EV정지 보정) */}
            <div style={{ fontSize: 9, lineHeight: 1.75, color: "rgba(255,255,255,0.65)", borderTop: "1px dashed rgba(255,255,255,0.12)", marginTop: 5, paddingTop: 5 }}>
              <div>보행속도 저하 <span style={{ float: "right", color: evac.slow > 1.3 ? "#FF6B1A" : "inherit" }}>×{(1/evac.slow).toFixed(2)}</span></div>
              <div>계단 대기열{evac.evLock ? " (EV정지)" : ""} <span style={{ float: "right", color: evac.evLock ? "#FF6B1A" : "inherit" }}>{evac.tQueue.toFixed(0)}s</span></div>
              <div>RSET (보정) <span style={{ float: "right", color: "#00F0FF" }}>{evac.rset.toFixed(0)}s</span></div>
              <div style={{ fontSize: 10 }}>
                GOLDEN TIME 여유
                <span style={{ float: "right", color: statusCss(evac.status), textShadow: `0 0 8px ${statusCss(evac.status)}` }}>
                  {evac.margin.toFixed(0)}s [{evac.status}]
                </span>
              </div>
              <div style={{ height: 4, background: "rgba(255,255,255,0.08)", marginTop: 4 }}>
                <div style={{
                  height: "100%", width: `${clamp(evac.rset/ASET,0,1)*100}%`,
                  background: statusCss(evac.status), boxShadow: `0 0 6px ${statusCss(evac.status)}`,
                }} />
              </div>
              <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>
                ※ ISO 10137형/SFPE형 단순화 추정(시연용) — 실제 안전 검토 불가
              </div>
            </div>
          </div>
        )}

        <div style={{ fontSize: 9, letterSpacing: 2, color: "rgba(0,240,255,0.5)", marginBottom: 5 }}>
          ▚ AI LOG / SOLVER STREAM
        </div>
        <div ref={logRef} style={{
          flex: 1, overflowY: "auto", border: "1px solid rgba(0,240,255,0.12)",
          background: "rgba(0,240,255,0.02)", padding: "7px 9px",
          fontSize: 8.5, lineHeight: 1.7, minHeight: 70,
        }}>
          {logs.map(l => (
            <div key={l.id} className="log-line" style={{ color: toneColor[l.tone] }}>
              <span style={{ color: "rgba(0,240,255,0.3)" }}>{"> "}</span>{l.line}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ 3D 스테이지 ═══ */}
      <div className="stage" style={{ position: "relative", minWidth: 0, minHeight: 0 }}>
        <div ref={mountRef} style={{ position: "absolute", inset: 0 }} />
        <div style={{
          position: "absolute", top: 10, left: 0, right: 0, textAlign: "center",
          fontSize: 9, letterSpacing: 3, color: "rgba(0,240,255,0.4)", pointerEvents: "none",
        }}>
          TRUE-3D · ACCIDENT CHAIN · TAP FLOOR → DIVE · EXAG ×40
        </div>
        {selFloor !== null && (
          <div style={{
            position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center",
            fontSize: 10, letterSpacing: 2, color: lvl.col, pointerEvents: "none",
            textShadow: `0 0 10px ${lvl.col}`,
          }}>
            {selFloor}F — {lvl.ko} ({live.mg.toFixed(1)}mg) · 전도 {live.fallen} · 추락 {live.ejected}
          </div>
        )}
      </div>
    </div>
  );
}
