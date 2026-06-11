var m1=Object.create;var __=Object.defineProperty;var g1=Object.getOwnPropertyDescriptor;var _1=Object.getOwnPropertyNames;var v1=Object.getPrototypeOf,x1=Object.prototype.hasOwnProperty;var ap=(e,t)=>()=>(e&&(t=e(e=0)),t);var Ui=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var y1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of _1(t))!x1.call(e,s)&&s!==n&&__(e,s,{get:()=>t[s],enumerable:!(i=g1(t,s))||i.enumerable});return e};var Xa=(e,t,n)=>(n=e!=null?m1(v1(e)):{},y1(t||!e||!e.__esModule?__(n,"default",{value:e,enumerable:!0}):n,e));var C_=Ui(kt=>{"use strict";var lp=Symbol.for("react.transitional.element"),S1=Symbol.for("react.portal"),M1=Symbol.for("react.fragment"),b1=Symbol.for("react.strict_mode"),E1=Symbol.for("react.profiler"),T1=Symbol.for("react.consumer"),A1=Symbol.for("react.context"),w1=Symbol.for("react.forward_ref"),C1=Symbol.for("react.suspense"),R1=Symbol.for("react.memo"),M_=Symbol.for("react.lazy"),D1=Symbol.for("react.activity"),v_=Symbol.iterator;function U1(e){return e===null||typeof e!="object"?null:(e=v_&&e[v_]||e["@@iterator"],typeof e=="function"?e:null)}var b_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E_=Object.assign,T_={};function Ur(e,t,n){this.props=e,this.context=t,this.refs=T_,this.updater=n||b_}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function A_(){}A_.prototype=Ur.prototype;function cp(e,t,n){this.props=e,this.context=t,this.refs=T_,this.updater=n||b_}var up=cp.prototype=new A_;up.constructor=cp;E_(up,Ur.prototype);up.isPureReactComponent=!0;var x_=Array.isArray;function op(){}var Pe={H:null,A:null,T:null,S:null},w_=Object.prototype.hasOwnProperty;function hp(e,t,n){var i=n.ref;return{$$typeof:lp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function N1(e,t){return hp(e.type,t,e.props)}function fp(e){return typeof e=="object"&&e!==null&&e.$$typeof===lp}function L1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var y_=/\/+/g;function rp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?L1(""+e.key):t.toString(36)}function I1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(op,op):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Dr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case lp:case S1:r=!0;break;case M_:return r=e._init,Dr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+rp(e,0):i,x_(s)?(n="",r!=null&&(n=r.replace(y_,"$&/")+"/"),Dr(s,t,n,"",function(c){return c})):s!=null&&(fp(s)&&(s=N1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(y_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(x_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+rp(i,l),r+=Dr(i,t,n,a,s);else if(l=U1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+rp(i,l++),r+=Dr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Dr(I1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function uu(e,t,n){if(e==null)return e;var i=[],s=0;return Dr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function O1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var S_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},P1={map:uu,forEach:function(e,t,n){uu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uu(e,function(){t++}),t},toArray:function(e){return uu(e,function(t){return t})||[]},only:function(e){if(!fp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};kt.Activity=D1;kt.Children=P1;kt.Component=Ur;kt.Fragment=M1;kt.Profiler=E1;kt.PureComponent=cp;kt.StrictMode=b1;kt.Suspense=C1;kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Pe;kt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Pe.H.useMemoCache(e)}};kt.cache=function(e){return function(){return e.apply(null,arguments)}};kt.cacheSignal=function(){return null};kt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=E_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!w_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return hp(e.type,s,i)};kt.createContext=function(e){return e={$$typeof:A1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:T1,_context:e},e};kt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)w_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return hp(e,a,s)};kt.createRef=function(){return{current:null}};kt.forwardRef=function(e){return{$$typeof:w1,render:e}};kt.isValidElement=fp;kt.lazy=function(e){return{$$typeof:M_,_payload:{_status:-1,_result:e},_init:O1}};kt.memo=function(e,t){return{$$typeof:R1,type:e,compare:t===void 0?null:t}};kt.startTransition=function(e){var t=Pe.T,n={};Pe.T=n;try{var i=e(),s=Pe.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(op,S_)}catch(a){S_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Pe.T=t}};kt.unstable_useCacheRefresh=function(){return Pe.H.useCacheRefresh()};kt.use=function(e){return Pe.H.use(e)};kt.useActionState=function(e,t,n){return Pe.H.useActionState(e,t,n)};kt.useCallback=function(e,t){return Pe.H.useCallback(e,t)};kt.useContext=function(e){return Pe.H.useContext(e)};kt.useDebugValue=function(){};kt.useDeferredValue=function(e,t){return Pe.H.useDeferredValue(e,t)};kt.useEffect=function(e,t){return Pe.H.useEffect(e,t)};kt.useEffectEvent=function(e){return Pe.H.useEffectEvent(e)};kt.useId=function(){return Pe.H.useId()};kt.useImperativeHandle=function(e,t,n){return Pe.H.useImperativeHandle(e,t,n)};kt.useInsertionEffect=function(e,t){return Pe.H.useInsertionEffect(e,t)};kt.useLayoutEffect=function(e,t){return Pe.H.useLayoutEffect(e,t)};kt.useMemo=function(e,t){return Pe.H.useMemo(e,t)};kt.useOptimistic=function(e,t){return Pe.H.useOptimistic(e,t)};kt.useReducer=function(e,t,n){return Pe.H.useReducer(e,t,n)};kt.useRef=function(e){return Pe.H.useRef(e)};kt.useState=function(e){return Pe.H.useState(e)};kt.useSyncExternalStore=function(e,t,n){return Pe.H.useSyncExternalStore(e,t,n)};kt.useTransition=function(){return Pe.H.useTransition()};kt.version="19.2.7"});var fl=Ui((W3,R_)=>{"use strict";R_.exports=C_()});var z_=Ui(Ge=>{"use strict";function gp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<hu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Xi(e){return e.length===0?null:e[0]}function du(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>hu(o,n))l<s&&0>hu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>hu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function hu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ge.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(D_=performance,Ge.unstable_now=function(){return D_.now()}):(dp=Date,U_=dp.now(),Ge.unstable_now=function(){return dp.now()-U_});var D_,dp,U_,ms=[],Zs=[],B1=1,gi=null,Tn=3,_p=!1,dl=!1,pl=!1,vp=!1,I_=typeof setTimeout=="function"?setTimeout:null,O_=typeof clearTimeout=="function"?clearTimeout:null,N_=typeof setImmediate<"u"?setImmediate:null;function fu(e){for(var t=Xi(Zs);t!==null;){if(t.callback===null)du(Zs);else if(t.startTime<=e)du(Zs),t.sortIndex=t.expirationTime,gp(ms,t);else break;t=Xi(Zs)}}function xp(e){if(pl=!1,fu(e),!dl)if(Xi(ms)!==null)dl=!0,Lr||(Lr=!0,Nr());else{var t=Xi(Zs);t!==null&&yp(xp,t.startTime-e)}}var Lr=!1,ml=-1,P_=5,B_=-1;function F_(){return vp?!0:!(Ge.unstable_now()-B_<P_)}function pp(){if(vp=!1,Lr){var e=Ge.unstable_now();B_=e;var t=!0;try{t:{dl=!1,pl&&(pl=!1,O_(ml),ml=-1),_p=!0;var n=Tn;try{e:{for(fu(e),gi=Xi(ms);gi!==null&&!(gi.expirationTime>e&&F_());){var i=gi.callback;if(typeof i=="function"){gi.callback=null,Tn=gi.priorityLevel;var s=i(gi.expirationTime<=e);if(e=Ge.unstable_now(),typeof s=="function"){gi.callback=s,fu(e),t=!0;break e}gi===Xi(ms)&&du(ms),fu(e)}else du(ms);gi=Xi(ms)}if(gi!==null)t=!0;else{var a=Xi(Zs);a!==null&&yp(xp,a.startTime-e),t=!1}}break t}finally{gi=null,Tn=n,_p=!1}t=void 0}}finally{t?Nr():Lr=!1}}}var Nr;typeof N_=="function"?Nr=function(){N_(pp)}:typeof MessageChannel<"u"?(mp=new MessageChannel,L_=mp.port2,mp.port1.onmessage=pp,Nr=function(){L_.postMessage(null)}):Nr=function(){I_(pp,0)};var mp,L_;function yp(e,t){ml=I_(function(){e(Ge.unstable_now())},t)}Ge.unstable_IdlePriority=5;Ge.unstable_ImmediatePriority=1;Ge.unstable_LowPriority=4;Ge.unstable_NormalPriority=3;Ge.unstable_Profiling=null;Ge.unstable_UserBlockingPriority=2;Ge.unstable_cancelCallback=function(e){e.callback=null};Ge.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P_=0<e?Math.floor(1e3/e):5};Ge.unstable_getCurrentPriorityLevel=function(){return Tn};Ge.unstable_next=function(e){switch(Tn){case 1:case 2:case 3:var t=3;break;default:t=Tn}var n=Tn;Tn=t;try{return e()}finally{Tn=n}};Ge.unstable_requestPaint=function(){vp=!0};Ge.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Tn;Tn=e;try{return t()}finally{Tn=n}};Ge.unstable_scheduleCallback=function(e,t,n){var i=Ge.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:B1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,gp(Zs,e),Xi(ms)===null&&e===Xi(Zs)&&(pl?(O_(ml),ml=-1):pl=!0,yp(xp,n-i))):(e.sortIndex=s,gp(ms,e),dl||_p||(dl=!0,Lr||(Lr=!0,Nr()))),e};Ge.unstable_shouldYield=F_;Ge.unstable_wrapCallback=function(e){var t=Tn;return function(){var n=Tn;Tn=t;try{return e.apply(this,arguments)}finally{Tn=n}}}});var V_=Ui((Y3,H_)=>{"use strict";H_.exports=z_()});var k_=Ui(In=>{"use strict";var F1=fl();function G_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Js(){}var Ln={d:{f:Js,r:function(){throw Error(G_(522))},D:Js,C:Js,L:Js,m:Js,X:Js,S:Js,M:Js},p:0,findDOMNode:null},z1=Symbol.for("react.portal");function H1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z1,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var gl=F1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function pu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ln;In.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(G_(299));return H1(e,t,null,n)};In.flushSync=function(e){var t=gl.T,n=Ln.p;try{if(gl.T=null,Ln.p=2,e)return e()}finally{gl.T=t,Ln.p=n,Ln.d.f()}};In.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ln.d.C(e,t))};In.prefetchDNS=function(e){typeof e=="string"&&Ln.d.D(e)};In.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=pu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Ln.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Ln.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};In.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=pu(t.as,t.crossOrigin);Ln.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ln.d.M(e)};In.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=pu(n,t.crossOrigin);Ln.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};In.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=pu(t.as,t.crossOrigin);Ln.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ln.d.m(e)};In.requestFormReset=function(e){Ln.d.r(e)};In.unstable_batchedUpdates=function(e,t){return e(t)};In.useFormState=function(e,t,n){return gl.H.useFormState(e,t,n)};In.useFormStatus=function(){return gl.H.useHostTransitionStatus()};In.version="19.2.7"});var q_=Ui((J3,W_)=>{"use strict";function X_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X_)}catch(e){console.error(e)}}X_(),W_.exports=k_()});var sM=Ui(zh=>{"use strict";var ln=V_(),vx=fl(),V1=q_();function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function xx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nc(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Y_(e){if(nc(e)!==e)throw Error(j(188))}function G1(e){var t=e.alternate;if(!t){if(t=nc(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Y_(s),e;if(a===i)return Y_(s),t;a=a.sibling}throw Error(j(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Mx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Mx(e),t!==null)return t;e=e.sibling}return null}var ze=Object.assign,k1=Symbol.for("react.element"),mu=Symbol.for("react.transitional.element"),El=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),bx=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),Ex=Symbol.for("react.consumer"),bs=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),em=Symbol.for("react.suspense"),nm=Symbol.for("react.suspense_list"),Km=Symbol.for("react.memo"),Ks=Symbol.for("react.lazy"),im=Symbol.for("react.activity"),X1=Symbol.for("react.memo_cache_sentinel"),Z_=Symbol.iterator;function _l(e){return e===null||typeof e!="object"?null:(e=Z_&&e[Z_]||e["@@iterator"],typeof e=="function"?e:null)}var W1=Symbol.for("react.client.reference");function sm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===W1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zr:return"Fragment";case tm:return"Profiler";case bx:return"StrictMode";case em:return"Suspense";case nm:return"SuspenseList";case im:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case El:return"Portal";case bs:return e.displayName||"Context";case Ex:return(e._context.displayName||"Context")+".Consumer";case Jm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Km:return t=e.displayName||null,t!==null?t:sm(e.type)||"Memo";case Ks:t=e._payload,e=e._init;try{return sm(e(t))}catch{}}return null}var Tl=Array.isArray,It=vx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge=V1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ka={pending:!1,data:null,method:null,action:null},am=[],Hr=-1;function Ji(e){return{current:e}}function pn(e){0>Hr||(e.current=am[Hr],am[Hr]=null,Hr--)}function Ie(e,t){Hr++,am[Hr]=e.current,e.current=t}var Zi=Ji(null),Gl=Ji(null),oa=Ji(null),Zu=Ji(null);function Ju(e,t){switch(Ie(oa,t),Ie(Gl,e),Ie(Zi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ex(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ex(t),e=XS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pn(Zi),Ie(Zi,e)}function so(){pn(Zi),pn(Gl),pn(oa)}function rm(e){e.memoizedState!==null&&Ie(Zu,e);var t=Zi.current,n=XS(t,e.type);t!==n&&(Ie(Gl,e),Ie(Zi,n))}function Ku(e){Gl.current===e&&(pn(Zi),pn(Gl)),Zu.current===e&&(pn(Zu),$l._currentValue=Ka)}var Sp,J_;function qa(e){if(Sp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sp=t&&t[1]||"",J_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Sp+e+J_}var Mp=!1;function bp(e,t){if(!e||Mp)return"";Mp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{Mp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?qa(n):""}function q1(e,t){switch(e.tag){case 26:case 27:case 5:return qa(e.type);case 16:return qa("Lazy");case 13:return e.child!==t&&t!==null?qa("Suspense Fallback"):qa("Suspense");case 19:return qa("SuspenseList");case 0:case 15:return bp(e.type,!1);case 11:return bp(e.type.render,!1);case 1:return bp(e.type,!0);case 31:return qa("Activity");default:return""}}function K_(e){try{var t="",n=null;do t+=q1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var om=Object.prototype.hasOwnProperty,Qm=ln.unstable_scheduleCallback,Ep=ln.unstable_cancelCallback,Y1=ln.unstable_shouldYield,Z1=ln.unstable_requestPaint,ei=ln.unstable_now,J1=ln.unstable_getCurrentPriorityLevel,Tx=ln.unstable_ImmediatePriority,Ax=ln.unstable_UserBlockingPriority,Qu=ln.unstable_NormalPriority,K1=ln.unstable_LowPriority,wx=ln.unstable_IdlePriority,Q1=ln.log,j1=ln.unstable_setDisableYieldValue,ic=null,ni=null;function na(e){if(typeof Q1=="function"&&j1(e),ni&&typeof ni.setStrictMode=="function")try{ni.setStrictMode(ic,e)}catch{}}var ii=Math.clz32?Math.clz32:eE,$1=Math.log,tE=Math.LN2;function eE(e){return e>>>=0,e===0?32:31-($1(e)/tE|0)|0}var gu=256,_u=262144,vu=4194304;function Ya(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ya(i):(r&=o,r!==0?s=Ya(r):n||(n=o&~e,n!==0&&(s=Ya(n))))):(o=i&~a,o!==0?s=Ya(o):r!==0?s=Ya(r):n||(n=i&~e,n!==0&&(s=Ya(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function sc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cx(){var e=vu;return vu<<=1,(vu&62914560)===0&&(vu=4194304),e}function Tp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ac(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function iE(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-ii(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&Rx(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Rx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ii(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Dx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ii(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Ux(e,t){var n=t&-t;return n=(n&42)!==0?1:jm(n),(n&(e.suspendedLanes|t))!==0?0:n}function jm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $m(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nx(){var e=ge.p;return e!==0?e:(e=window.event,e===void 0?32:eM(e.type))}function Q_(e,t){var n=ge.p;try{return ge.p=e,t()}finally{ge.p=n}}var ya=Math.random().toString(36).slice(2),vn="__reactFiber$"+ya,Yn="__reactProps$"+ya,go="__reactContainer$"+ya,lm="__reactEvents$"+ya,sE="__reactListeners$"+ya,aE="__reactHandles$"+ya,j_="__reactResources$"+ya,rc="__reactMarker$"+ya;function t0(e){delete e[vn],delete e[Yn],delete e[lm],delete e[sE],delete e[aE]}function Vr(e){var t=e[vn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[go]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rx(e);e!==null;){if(n=e[vn])return n;e=rx(e)}return t}e=n,n=e.parentNode}return null}function _o(e){if(e=e[vn]||e[go]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Al(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function Qr(e){var t=e[j_];return t||(t=e[j_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function dn(e){e[rc]=!0}var Lx=new Set,Ix={};function rr(e,t){ao(e,t),ao(e+"Capture",t)}function ao(e,t){for(Ix[e]=t,e=0;e<t.length;e++)Lx.add(t[e])}var rE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$_={},tv={};function oE(e){return om.call(tv,e)?!0:om.call($_,e)?!1:rE.test(e)?tv[e]=!0:($_[e]=!0,!1)}function Lu(e,t,n){if(oE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function xu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function gs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function vi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ox(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cm(e){if(!e._valueTracker){var t=Ox(e)?"checked":"value";e._valueTracker=lE(e,t,""+e[t])}}function Px(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ox(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ju(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var cE=/[\n"\\]/g;function Si(e){return e.replace(cE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function um(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vi(t)):e.value!==""+vi(t)&&(e.value=""+vi(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?hm(e,r,vi(t)):n!=null?hm(e,r,vi(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+vi(o):e.removeAttribute("name")}function Bx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){cm(e);return}n=n!=null?""+vi(n):"",t=t!=null?""+vi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),cm(e)}function hm(e,t,n){t==="number"&&ju(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function jr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+vi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Fx(e,t,n){if(t!=null&&(t=""+vi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+vi(n):""}function zx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(Tl(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=vi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),cm(e)}function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var uE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ev(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||uE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Hx(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&ev(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&ev(e,a,t[a])}function e0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Iu(e){return fE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Es(){}var fm=null;function n0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gr=null,$r=null;function nv(e){var t=_o(e);if(t&&(e=t.stateNode)){var n=e[Yn]||null;t:switch(e=t.stateNode,t.type){case"input":if(um(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Si(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Yn]||null;if(!s)throw Error(j(90));um(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Px(i)}break t;case"textarea":Fx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&jr(e,!!n.multiple,t,!1)}}}var Ap=!1;function Vx(e,t,n){if(Ap)return e(t,n);Ap=!0;try{var i=e(t);return i}finally{if(Ap=!1,(Gr!==null||$r!==null)&&(Oh(),Gr&&(t=Gr,e=$r,$r=Gr=null,nv(t),e)))for(t=0;t<e.length;t++)nv(e[t])}}function kl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Yn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Rs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dm=!1;if(Rs)try{Ir={},Object.defineProperty(Ir,"passive",{get:function(){dm=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{dm=!1}var Ir,ia=null,i0=null,Ou=null;function Gx(){if(Ou)return Ou;var e,t=i0,n=t.length,i,s="value"in ia?ia.value:ia.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Ou=s.slice(e,1<i?1-i:void 0)}function Pu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yu(){return!0}function iv(){return!1}function Zn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?yu:iv,this.isPropagationStopped=iv,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yu)},persist:function(){},isPersistent:yu}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eh=Zn(or),oc=ze({},or,{view:0,detail:0}),dE=Zn(oc),wp,Cp,vl,Th=ze({},oc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:s0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vl&&(vl&&e.type==="mousemove"?(wp=e.screenX-vl.screenX,Cp=e.screenY-vl.screenY):Cp=wp=0,vl=e),wp)},movementY:function(e){return"movementY"in e?e.movementY:Cp}}),sv=Zn(Th),pE=ze({},Th,{dataTransfer:0}),mE=Zn(pE),gE=ze({},oc,{relatedTarget:0}),Rp=Zn(gE),_E=ze({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),vE=Zn(_E),xE=ze({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yE=Zn(xE),SE=ze({},or,{data:0}),av=Zn(SE),ME={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},EE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=EE[e])?!!t[e]:!1}function s0(){return TE}var AE=ze({},oc,{key:function(e){if(e.key){var t=ME[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:s0,charCode:function(e){return e.type==="keypress"?Pu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wE=Zn(AE),CE=ze({},Th,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rv=Zn(CE),RE=ze({},oc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:s0}),DE=Zn(RE),UE=ze({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),NE=Zn(UE),LE=ze({},Th,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),IE=Zn(LE),OE=ze({},or,{newState:0,oldState:0}),PE=Zn(OE),BE=[9,13,27,32],a0=Rs&&"CompositionEvent"in window,Rl=null;Rs&&"documentMode"in document&&(Rl=document.documentMode);var FE=Rs&&"TextEvent"in window&&!Rl,kx=Rs&&(!a0||Rl&&8<Rl&&11>=Rl),ov=" ",lv=!1;function Xx(e,t){switch(e){case"keyup":return BE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function zE(e,t){switch(e){case"compositionend":return Wx(t);case"keypress":return t.which!==32?null:(lv=!0,ov);case"textInput":return e=t.data,e===ov&&lv?null:e;default:return null}}function HE(e,t){if(kr)return e==="compositionend"||!a0&&Xx(e,t)?(e=Gx(),Ou=i0=ia=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kx&&t.locale!=="ko"?null:t.data;default:return null}}var VE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!VE[e.type]:t==="textarea"}function qx(e,t,n,i){Gr?$r?$r.push(i):$r=[i]:Gr=i,t=gh(t,"onChange"),0<t.length&&(n=new Eh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Dl=null,Xl=null;function GE(e){VS(e,0)}function Ah(e){var t=Al(e);if(Px(t))return e}function uv(e,t){if(e==="change")return t}var Yx=!1;Rs&&(Rs?(Mu="oninput"in document,Mu||(Dp=document.createElement("div"),Dp.setAttribute("oninput","return;"),Mu=typeof Dp.oninput=="function"),Su=Mu):Su=!1,Yx=Su&&(!document.documentMode||9<document.documentMode));var Su,Mu,Dp;function hv(){Dl&&(Dl.detachEvent("onpropertychange",Zx),Xl=Dl=null)}function Zx(e){if(e.propertyName==="value"&&Ah(Xl)){var t=[];qx(t,Xl,e,n0(e)),Vx(GE,t)}}function kE(e,t,n){e==="focusin"?(hv(),Dl=t,Xl=n,Dl.attachEvent("onpropertychange",Zx)):e==="focusout"&&hv()}function XE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ah(Xl)}function WE(e,t){if(e==="click")return Ah(t)}function qE(e,t){if(e==="input"||e==="change")return Ah(t)}function YE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ai=typeof Object.is=="function"?Object.is:YE;function Wl(e,t){if(ai(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!om.call(t,s)||!ai(e[s],t[s]))return!1}return!0}function fv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dv(e,t){var n=fv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=fv(n)}}function Jx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ju(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ju(e.document)}return t}function r0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ZE=Rs&&"documentMode"in document&&11>=document.documentMode,Xr=null,pm=null,Ul=null,mm=!1;function pv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mm||Xr==null||Xr!==ju(i)||(i=Xr,"selectionStart"in i&&r0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ul&&Wl(Ul,i)||(Ul=i,i=gh(pm,"onSelect"),0<i.length&&(t=new Eh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Xr)))}function Wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wr={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},Up={},Qx={};Rs&&(Qx=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function lr(e){if(Up[e])return Up[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qx)return Up[e]=t[n];return e}var jx=lr("animationend"),$x=lr("animationiteration"),ty=lr("animationstart"),JE=lr("transitionrun"),KE=lr("transitionstart"),QE=lr("transitioncancel"),ey=lr("transitionend"),ny=new Map,gm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gm.push("scrollEnd");function Ii(e,t){ny.set(e,t),rr(t,[e])}var $u=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],qr=0,o0=0;function wh(){for(var e=qr,t=o0=qr=0;t<e;){var n=_i[t];_i[t++]=null;var i=_i[t];_i[t++]=null;var s=_i[t];_i[t++]=null;var a=_i[t];if(_i[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&iy(n,s,a)}}function Ch(e,t,n,i){_i[qr++]=e,_i[qr++]=t,_i[qr++]=n,_i[qr++]=i,o0|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function l0(e,t,n,i){return Ch(e,t,n,i),th(e)}function cr(e,t){return Ch(e,null,null,t),th(e)}function iy(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-ii(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function th(e){if(50<Hl)throw Hl=0,Bm=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Yr={};function jE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,t,n,i){return new jE(e,t,n,i)}function c0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function As(e,t){var n=e.alternate;return n===null?(n=$n(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function sy(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bu(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")c0(e)&&(r=1);else if(typeof e=="string")r=eA(e,n,Zi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case im:return e=$n(31,n,t,s),e.elementType=im,e.lanes=a,e;case zr:return Qa(n.children,s,a,t);case bx:r=8,s|=24;break;case tm:return e=$n(12,n,t,s|2),e.elementType=tm,e.lanes=a,e;case em:return e=$n(13,n,t,s),e.elementType=em,e.lanes=a,e;case nm:return e=$n(19,n,t,s),e.elementType=nm,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bs:r=10;break t;case Ex:r=9;break t;case Jm:r=11;break t;case Km:r=14;break t;case Ks:r=16,i=null;break t}r=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=$n(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Qa(e,t,n,i){return e=$n(7,e,i,t),e.lanes=n,e}function Np(e,t,n){return e=$n(6,e,null,t),e.lanes=n,e}function ay(e){var t=$n(18,null,null,0);return t.stateNode=e,t}function Lp(e,t,n){return t=$n(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mv=new WeakMap;function Mi(e,t){if(typeof e=="object"&&e!==null){var n=mv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:K_(t)},mv.set(e,t),t)}return{value:e,source:t,stack:K_(t)}}var Zr=[],Jr=0,eh=null,ql=0,xi=[],yi=0,ga=null,Wi=1,qi="";function Ss(e,t){Zr[Jr++]=ql,Zr[Jr++]=eh,eh=e,ql=t}function ry(e,t,n){xi[yi++]=Wi,xi[yi++]=qi,xi[yi++]=ga,ga=e;var i=Wi;e=qi;var s=32-ii(i)-1;i&=~(1<<s),n+=1;var a=32-ii(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Wi=1<<32-ii(t)+s|n<<s|i,qi=a+e}else Wi=1<<a|n<<s|i,qi=e}function u0(e){e.return!==null&&(Ss(e,1),ry(e,1,0))}function h0(e){for(;e===eh;)eh=Zr[--Jr],Zr[Jr]=null,ql=Zr[--Jr],Zr[Jr]=null;for(;e===ga;)ga=xi[--yi],xi[yi]=null,qi=xi[--yi],xi[yi]=null,Wi=xi[--yi],xi[yi]=null}function oy(e,t){xi[yi++]=Wi,xi[yi++]=qi,xi[yi++]=ga,Wi=t.id,qi=t.overflow,ga=e}var xn=null,Fe=null,re=!1,la=null,bi=!1,_m=Error(j(519));function _a(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yl(Mi(t,e)),_m}function gv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[vn]=e,t[Yn]=i,n){case"dialog":te("cancel",t),te("close",t);break;case"iframe":case"object":case"embed":te("load",t);break;case"video":case"audio":for(n=0;n<Ql.length;n++)te(Ql[n],t);break;case"source":te("error",t);break;case"img":case"image":case"link":te("error",t),te("load",t);break;case"details":te("toggle",t);break;case"input":te("invalid",t),Bx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":te("invalid",t);break;case"textarea":te("invalid",t),zx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||kS(t.textContent,n)?(i.popover!=null&&(te("beforetoggle",t),te("toggle",t)),i.onScroll!=null&&te("scroll",t),i.onScrollEnd!=null&&te("scrollend",t),i.onClick!=null&&(t.onclick=Es),t=!0):t=!1,t||_a(e,!0)}function _v(e){for(xn=e.return;xn;)switch(xn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:xn=xn.return}}function Or(e){if(e!==xn)return!1;if(!re)return _v(e),re=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Gm(e.type,e.memoizedProps)),n=!n),n&&Fe&&_a(e),_v(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Fe=ax(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Fe=ax(e)}else t===27?(t=Fe,Sa(e.type)?(e=qm,qm=null,Fe=e):Fe=t):Fe=xn?Ti(e.stateNode.nextSibling):null;return!0}function er(){Fe=xn=null,re=!1}function Ip(){var e=la;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),la=null),e}function Yl(e){la===null?la=[e]:la.push(e)}var vm=Ji(null),ur=null,Ts=null;function js(e,t,n){Ie(vm,t._currentValue),t._currentValue=n}function ws(e){e._currentValue=vm.current,pn(vm)}function xm(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ym(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),xm(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(j(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),xm(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function vo(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=s.type;ai(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Zu.current){if(r=s.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push($l):e=[$l])}s=s.return}e!==null&&ym(t,e,n,i),t.flags|=262144}function nh(e){for(e=e.firstContext;e!==null;){if(!ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){ur=e,Ts=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return ly(ur,e)}function bu(e,t){return ur===null&&nr(e),ly(e,t)}function ly(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ts===null){if(e===null)throw Error(j(308));Ts=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ts=Ts.next=t;return n}var $E=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},tT=ln.unstable_scheduleCallback,eT=ln.unstable_NormalPriority,nn={$$typeof:bs,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function f0(){return{controller:new $E,data:new Map,refCount:0}}function lc(e){e.refCount--,e.refCount===0&&tT(eT,function(){e.controller.abort()})}var Nl=null,Sm=0,oo=0,to=null;function nT(e,t){if(Nl===null){var n=Nl=[];Sm=0,oo=B0(),to={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Sm++,t.then(vv,vv),t}function vv(){if(--Sm===0&&Nl!==null){to!==null&&(to.status="fulfilled");var e=Nl;Nl=null,oo=0,to=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function iT(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var xv=It.S;It.S=function(e,t){MS=ei(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&nT(e,t),xv!==null&&xv(e,t)};var ja=Ji(null);function d0(){var e=ja.current;return e!==null?e:Le.pooledCache}function Fu(e,t){t===null?Ie(ja,ja.current):Ie(ja,t.pool)}function cy(){var e=d0();return e===null?null:{parent:nn._currentValue,pool:e}}var xo=Error(j(460)),p0=Error(j(474)),Rh=Error(j(542)),ih={then:function(){}};function yv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function uy(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Es,Es),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Mv(e),e;default:if(typeof t.status=="string")t.then(Es,Es);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Mv(e),e}throw $a=t,xo}}function Za(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?($a=n,xo):n}}var $a=null;function Sv(){if($a===null)throw Error(j(459));var e=$a;return $a=null,e}function Mv(e){if(e===xo||e===Rh)throw Error(j(483))}var eo=null,Zl=0;function Eu(e){var t=Zl;return Zl+=1,eo===null&&(eo=[]),uy(eo,e,t)}function xl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tu(e,t){throw t.$$typeof===k1?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hy(e){function t(h,m){if(e){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h){for(var m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function s(h,m){return h=As(h,m),h.index=0,h.sibling=null,h}function a(h,m,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=67108866,m):x):(h.flags|=67108866,m)):(h.flags|=1048576,m)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,m,x,M){return m===null||m.tag!==6?(m=Np(x,h.mode,M),m.return=h,m):(m=s(m,x),m.return=h,m)}function l(h,m,x,M){var w=x.type;return w===zr?f(h,m,x.props.children,M,x.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ks&&Za(w)===m.type)?(m=s(m,x.props),xl(m,x),m.return=h,m):(m=Bu(x.type,x.key,x.props,null,h.mode,M),xl(m,x),m.return=h,m)}function c(h,m,x,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Lp(x,h.mode,M),m.return=h,m):(m=s(m,x.children||[]),m.return=h,m)}function f(h,m,x,M,w){return m===null||m.tag!==7?(m=Qa(x,h.mode,M,w),m.return=h,m):(m=s(m,x),m.return=h,m)}function p(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Np(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mu:return x=Bu(m.type,m.key,m.props,null,h.mode,x),xl(x,m),x.return=h,x;case El:return m=Lp(m,h.mode,x),m.return=h,m;case Ks:return m=Za(m),p(h,m,x)}if(Tl(m)||_l(m))return m=Qa(m,h.mode,x,null),m.return=h,m;if(typeof m.then=="function")return p(h,Eu(m),x);if(m.$$typeof===bs)return p(h,bu(h,m),x);Tu(h,m)}return null}function u(h,m,x,M){var w=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return w!==null?null:o(h,m,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case mu:return x.key===w?l(h,m,x,M):null;case El:return x.key===w?c(h,m,x,M):null;case Ks:return x=Za(x),u(h,m,x,M)}if(Tl(x)||_l(x))return w!==null?null:f(h,m,x,M,null);if(typeof x.then=="function")return u(h,m,Eu(x),M);if(x.$$typeof===bs)return u(h,m,bu(h,x),M);Tu(h,x)}return null}function d(h,m,x,M,w){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return h=h.get(x)||null,o(m,h,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case mu:return h=h.get(M.key===null?x:M.key)||null,l(m,h,M,w);case El:return h=h.get(M.key===null?x:M.key)||null,c(m,h,M,w);case Ks:return M=Za(M),d(h,m,x,M,w)}if(Tl(M)||_l(M))return h=h.get(x)||null,f(m,h,M,w,null);if(typeof M.then=="function")return d(h,m,x,Eu(M),w);if(M.$$typeof===bs)return d(h,m,x,bu(m,M),w);Tu(m,M)}return null}function _(h,m,x,M){for(var w=null,E=null,C=m,v=m=0,A=null;C!==null&&v<x.length;v++){C.index>v?(A=C,C=null):A=C.sibling;var D=u(h,C,x[v],M);if(D===null){C===null&&(C=A);break}e&&C&&D.alternate===null&&t(h,C),m=a(D,m,v),E===null?w=D:E.sibling=D,E=D,C=A}if(v===x.length)return n(h,C),re&&Ss(h,v),w;if(C===null){for(;v<x.length;v++)C=p(h,x[v],M),C!==null&&(m=a(C,m,v),E===null?w=C:E.sibling=C,E=C);return re&&Ss(h,v),w}for(C=i(C);v<x.length;v++)A=d(C,h,v,x[v],M),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?v:A.key),m=a(A,m,v),E===null?w=A:E.sibling=A,E=A);return e&&C.forEach(function(R){return t(h,R)}),re&&Ss(h,v),w}function S(h,m,x,M){if(x==null)throw Error(j(151));for(var w=null,E=null,C=m,v=m=0,A=null,D=x.next();C!==null&&!D.done;v++,D=x.next()){C.index>v?(A=C,C=null):A=C.sibling;var R=u(h,C,D.value,M);if(R===null){C===null&&(C=A);break}e&&C&&R.alternate===null&&t(h,C),m=a(R,m,v),E===null?w=R:E.sibling=R,E=R,C=A}if(D.done)return n(h,C),re&&Ss(h,v),w;if(C===null){for(;!D.done;v++,D=x.next())D=p(h,D.value,M),D!==null&&(m=a(D,m,v),E===null?w=D:E.sibling=D,E=D);return re&&Ss(h,v),w}for(C=i(C);!D.done;v++,D=x.next())D=d(C,h,v,D.value,M),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?v:D.key),m=a(D,m,v),E===null?w=D:E.sibling=D,E=D);return e&&C.forEach(function(P){return t(h,P)}),re&&Ss(h,v),w}function g(h,m,x,M){if(typeof x=="object"&&x!==null&&x.type===zr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case mu:t:{for(var w=x.key;m!==null;){if(m.key===w){if(w=x.type,w===zr){if(m.tag===7){n(h,m.sibling),M=s(m,x.props.children),M.return=h,h=M;break t}}else if(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ks&&Za(w)===m.type){n(h,m.sibling),M=s(m,x.props),xl(M,x),M.return=h,h=M;break t}n(h,m);break}else t(h,m);m=m.sibling}x.type===zr?(M=Qa(x.props.children,h.mode,M,x.key),M.return=h,h=M):(M=Bu(x.type,x.key,x.props,null,h.mode,M),xl(M,x),M.return=h,h=M)}return r(h);case El:t:{for(w=x.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(h,m.sibling),M=s(m,x.children||[]),M.return=h,h=M;break t}else{n(h,m);break}else t(h,m);m=m.sibling}M=Lp(x,h.mode,M),M.return=h,h=M}return r(h);case Ks:return x=Za(x),g(h,m,x,M)}if(Tl(x))return _(h,m,x,M);if(_l(x)){if(w=_l(x),typeof w!="function")throw Error(j(150));return x=w.call(x),S(h,m,x,M)}if(typeof x.then=="function")return g(h,m,Eu(x),M);if(x.$$typeof===bs)return g(h,m,bu(h,x),M);Tu(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,m!==null&&m.tag===6?(n(h,m.sibling),M=s(m,x),M.return=h,h=M):(n(h,m),M=Np(x,h.mode,M),M.return=h,h=M),r(h)):n(h,m)}return function(h,m,x,M){try{Zl=0;var w=g(h,m,x,M);return eo=null,w}catch(C){if(C===xo||C===Rh)throw C;var E=$n(29,C,null,h.mode);return E.lanes=M,E.return=h,E}}}var ir=hy(!0),fy=hy(!1),Qs=!1;function m0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(me&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=th(e),iy(e,null,n),t}return Ch(e,i,t,n),th(e)}function Ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Dx(e,n)}}function Op(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bm=!1;function Il(){if(bm){var e=to;if(e!==null)throw e}}function Ol(e,t,n,i){bm=!1;var s=e.updateQueue;Qs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(ie&u)===u:(i&u)===u){u!==0&&u===oo&&(bm=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,S=o;u=t;var g=n;switch(S.tag){case 1:if(_=S.payload,typeof _=="function"){p=_.call(g,p,u);break t}p=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,u=typeof _=="function"?_.call(g,p,u):_,u==null)break t;p=ze({},p,u);break t;case 2:Qs=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),xa|=r,e.lanes=r,e.memoizedState=p}}function dy(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function py(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)dy(n[e],t)}var lo=Ji(null),sh=Ji(0);function bv(e,t){e=Ls,Ie(sh,e),Ie(lo,t),Ls=e|t.baseLanes}function Em(){Ie(sh,Ls),Ie(lo,lo.current)}function g0(){Ls=sh.current,pn(lo),pn(sh)}var ri=Ji(null),Ei=null;function $s(e){var t=e.alternate;Ie(Qe,Qe.current&1),Ie(ri,e),Ei===null&&(t===null||lo.current!==null||t.memoizedState!==null)&&(Ei=e)}function Tm(e){Ie(Qe,Qe.current),Ie(ri,e),Ei===null&&(Ei=e)}function my(e){e.tag===22?(Ie(Qe,Qe.current),Ie(ri,e),Ei===null&&(Ei=e)):ta(e)}function ta(){Ie(Qe,Qe.current),Ie(ri,ri.current)}function jn(e){pn(ri),Ei===e&&(Ei=null),pn(Qe)}var Qe=Ji(0);function ah(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Xm(n)||Wm(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ds=0,qt=null,we=null,tn=null,rh=!1,no=!1,sr=!1,oh=0,Jl=0,io=null,sT=0;function Je(){throw Error(j(321))}function _0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ai(e[n],t[n]))return!1;return!0}function v0(e,t,n,i,s,a){return Ds=a,qt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,It.H=e===null||e.memoizedState===null?qy:R0,sr=!1,a=n(i,s),sr=!1,no&&(a=_y(t,n,i,s)),gy(e),a}function gy(e){It.H=Kl;var t=we!==null&&we.next!==null;if(Ds=0,tn=we=qt=null,rh=!1,Jl=0,io=null,t)throw Error(j(300));e===null||sn||(e=e.dependencies,e!==null&&nh(e)&&(sn=!0))}function _y(e,t,n,i){qt=e;var s=0;do{if(no&&(io=null),Jl=0,no=!1,25<=s)throw Error(j(301));if(s+=1,tn=we=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}It.H=Yy,a=t(n,i)}while(no);return a}function aT(){var e=It.H,t=e.useState()[0];return t=typeof t.then=="function"?cc(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(qt.flags|=1024),t}function x0(){var e=oh!==0;return oh=0,e}function y0(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function S0(e){if(rh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}rh=!1}Ds=0,tn=we=qt=null,no=!1,Jl=oh=0,io=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?qt.memoizedState=tn=e:tn=tn.next=e,tn}function je(){if(we===null){var e=qt.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=tn===null?qt.memoizedState:tn.next;if(t!==null)tn=t,we=e;else{if(e===null)throw qt.alternate===null?Error(j(467)):Error(j(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},tn===null?qt.memoizedState=tn=e:tn=tn.next=e}return tn}function Dh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cc(e){var t=Jl;return Jl+=1,io===null&&(io=[]),e=uy(io,e,t),t=qt,(tn===null?t.memoizedState:tn.next)===null&&(t=t.alternate,It.H=t===null||t.memoizedState===null?qy:R0),e}function Uh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cc(e);if(e.$$typeof===bs)return yn(e)}throw Error(j(438,String(e)))}function M0(e){var t=null,n=qt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=qt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Dh(),qt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=X1;return t.index++,n}function Us(e,t){return typeof t=="function"?t(e):t}function zu(e){var t=je();return b0(t,we,e)}function b0(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ie&p)===p:(Ds&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===oo&&(f=!0);else if((Ds&u)===u){c=c.next,u===oo&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,qt.lanes|=u,xa|=u;p=c.action,sr&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,qt.lanes|=p,xa|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!ai(a,e.memoizedState)&&(sn=!0,f&&(n=to,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Pp(e){var t=je(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);ai(a,t.memoizedState)||(sn=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function vy(e,t,n){var i=qt,s=je(),a=re;if(a){if(n===void 0)throw Error(j(407));n=n()}else n=t();var r=!ai((we||s).memoizedState,n);if(r&&(s.memoizedState=n,sn=!0),s=s.queue,E0(Sy.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||tn!==null&&tn.memoizedState.tag&1){if(i.flags|=2048,co(9,{destroy:void 0},yy.bind(null,i,s,n,t),null),Le===null)throw Error(j(349));a||(Ds&127)!==0||xy(i,t,n)}return n}function xy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=qt.updateQueue,t===null?(t=Dh(),qt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yy(e,t,n,i){t.value=n,t.getSnapshot=i,My(t)&&by(e)}function Sy(e,t,n){return n(function(){My(t)&&by(e)})}function My(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ai(e,n)}catch{return!0}}function by(e){var t=cr(e,2);t!==null&&qn(t,e,2)}function Am(e){var t=On();if(typeof e=="function"){var n=e;if(e=n(),sr){na(!0);try{n()}finally{na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:e},t}function Ey(e,t,n,i){return e.baseState=n,b0(e,we,typeof i=="function"?i:Us)}function rT(e,t,n,i,s){if(Lh(e))throw Error(j(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};It.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Ty(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Ty(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=It.T,r={};It.T=r;try{var o=n(s,i),l=It.S;l!==null&&l(r,o),Ev(e,t,o)}catch(c){wm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),It.T=a}}else try{a=n(s,i),Ev(e,t,a)}catch(c){wm(e,t,c)}}function Ev(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Tv(e,t,i)},function(i){return wm(e,t,i)}):Tv(e,t,n)}function Tv(e,t,n){t.status="fulfilled",t.value=n,Ay(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ty(e,n)))}function wm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Ay(t),t=t.next;while(t!==i)}e.action=null}function Ay(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function wy(e,t){return t}function Av(e,t){if(re){var n=Le.formState;if(n!==null){t:{var i=qt;if(re){if(Fe){e:{for(var s=Fe,a=bi;s.nodeType!==8;){if(!a){s=null;break e}if(s=Ti(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Fe=Ti(s.nextSibling),i=s.data==="F!";break t}}_a(i)}i=!1}i&&(t=n[0])}}return n=On(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wy,lastRenderedState:t},n.queue=i,n=ky.bind(null,qt,i),i.dispatch=n,i=Am(!1),a=C0.bind(null,qt,!1,i.queue),i=On(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=rT.bind(null,qt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function wv(e){var t=je();return Cy(t,we,e)}function Cy(e,t,n){if(t=b0(e,t,wy)[0],e=zu(Us)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=cc(t)}catch(r){throw r===xo?Rh:r}else i=t;t=je();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(qt.flags|=2048,co(9,{destroy:void 0},oT.bind(null,s,n),null)),[i,a,e]}function oT(e,t){e.action=t}function Cv(e){var t=je(),n=we;if(n!==null)return Cy(t,n,e);je(),t=t.memoizedState,n=je();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function co(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=qt.updateQueue,t===null&&(t=Dh(),qt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Ry(){return je().memoizedState}function Hu(e,t,n,i){var s=On();qt.flags|=e,s.memoizedState=co(1|t,{destroy:void 0},n,i===void 0?null:i)}function Nh(e,t,n,i){var s=je();i=i===void 0?null:i;var a=s.memoizedState.inst;we!==null&&i!==null&&_0(i,we.memoizedState.deps)?s.memoizedState=co(t,a,n,i):(qt.flags|=e,s.memoizedState=co(1|t,a,n,i))}function Rv(e,t){Hu(8390656,8,e,t)}function E0(e,t){Nh(2048,8,e,t)}function lT(e){qt.flags|=4;var t=qt.updateQueue;if(t===null)t=Dh(),qt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Dy(e){var t=je().memoizedState;return lT({ref:t,nextImpl:e}),function(){if((me&2)!==0)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function Uy(e,t){return Nh(4,2,e,t)}function Ny(e,t){return Nh(4,4,e,t)}function Ly(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Iy(e,t,n){n=n!=null?n.concat([e]):null,Nh(4,4,Ly.bind(null,t,e),n)}function T0(){}function Oy(e,t){var n=je();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&_0(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Py(e,t){var n=je();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&_0(t,i[1]))return i[0];if(i=e(),sr){na(!0);try{e()}finally{na(!1)}}return n.memoizedState=[i,t],i}function A0(e,t,n){return n===void 0||(Ds&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=ES(),qt.lanes|=e,xa|=e,n)}function By(e,t,n,i){return ai(n,t)?n:lo.current!==null?(e=A0(e,n,i),ai(e,t)||(sn=!0),e):(Ds&42)===0||(Ds&1073741824)!==0&&(ie&261930)===0?(sn=!0,e.memoizedState=n):(e=ES(),qt.lanes|=e,xa|=e,t)}function Fy(e,t,n,i,s){var a=ge.p;ge.p=a!==0&&8>a?a:8;var r=It.T,o={};It.T=o,C0(e,!1,t,n);try{var l=s(),c=It.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=iT(l,i);Pl(e,t,f,si(e))}else Pl(e,t,i,si(e))}catch(p){Pl(e,t,{then:function(){},status:"rejected",reason:p},si())}finally{ge.p=a,r!==null&&o.types!==null&&(r.types=o.types),It.T=r}}function cT(){}function Cm(e,t,n,i){if(e.tag!==5)throw Error(j(476));var s=zy(e).queue;Fy(e,s,t,Ka,n===null?cT:function(){return Hy(e),n(i)})}function zy(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ka,baseState:Ka,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:Ka},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Hy(e){var t=zy(e);t.next===null&&(t=e.alternate.memoizedState),Pl(e,t.next.queue,{},si())}function w0(){return yn($l)}function Vy(){return je().memoizedState}function Gy(){return je().memoizedState}function uT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=si();e=ca(n);var i=ua(t,e,n);i!==null&&(qn(i,t,n),Ll(i,t,n)),t={cache:f0()},e.payload=t;return}t=t.return}}function hT(e,t,n){var i=si();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Lh(e)?Xy(t,n):(n=l0(e,t,n,i),n!==null&&(qn(n,e,i),Wy(n,t,i)))}function ky(e,t,n){var i=si();Pl(e,t,n,i)}function Pl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lh(e))Xy(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,ai(o,r))return Ch(e,t,s,0),Le===null&&wh(),!1}catch{}if(n=l0(e,t,s,i),n!==null)return qn(n,e,i),Wy(n,t,i),!0}return!1}function C0(e,t,n,i){if(i={lane:2,revertLane:B0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Lh(e)){if(t)throw Error(j(479))}else t=l0(e,n,i,2),t!==null&&qn(t,e,2)}function Lh(e){var t=e.alternate;return e===qt||t!==null&&t===qt}function Xy(e,t){no=rh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wy(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Dx(e,n)}}var Kl={readContext:yn,use:Uh,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};Kl.useEffectEvent=Je;var qy={readContext:yn,use:Uh,useCallback:function(e,t){return On().memoizedState=[e,t===void 0?null:t],e},useContext:yn,useEffect:Rv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Hu(4194308,4,Ly.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hu(4194308,4,e,t)},useInsertionEffect:function(e,t){Hu(4,2,e,t)},useMemo:function(e,t){var n=On();t=t===void 0?null:t;var i=e();if(sr){na(!0);try{e()}finally{na(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=On();if(n!==void 0){var s=n(t);if(sr){na(!0);try{n(t)}finally{na(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=hT.bind(null,qt,e),[i.memoizedState,e]},useRef:function(e){var t=On();return e={current:e},t.memoizedState=e},useState:function(e){e=Am(e);var t=e.queue,n=ky.bind(null,qt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:T0,useDeferredValue:function(e,t){var n=On();return A0(n,e,t)},useTransition:function(){var e=Am(!1);return e=Fy.bind(null,qt,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=qt,s=On();if(re){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Le===null)throw Error(j(349));(ie&127)!==0||xy(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Rv(Sy.bind(null,i,a,e),[e]),i.flags|=2048,co(9,{destroy:void 0},yy.bind(null,i,a,n,t),null),n},useId:function(){var e=On(),t=Le.identifierPrefix;if(re){var n=qi,i=Wi;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=oh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=sT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:w0,useFormState:Av,useActionState:Av,useOptimistic:function(e){var t=On();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=C0.bind(null,qt,!0,n),n.dispatch=t,[e,t]},useMemoCache:M0,useCacheRefresh:function(){return On().memoizedState=uT.bind(null,qt)},useEffectEvent:function(e){var t=On(),n={impl:e};return t.memoizedState=n,function(){if((me&2)!==0)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},R0={readContext:yn,use:Uh,useCallback:Oy,useContext:yn,useEffect:E0,useImperativeHandle:Iy,useInsertionEffect:Uy,useLayoutEffect:Ny,useMemo:Py,useReducer:zu,useRef:Ry,useState:function(){return zu(Us)},useDebugValue:T0,useDeferredValue:function(e,t){var n=je();return By(n,we.memoizedState,e,t)},useTransition:function(){var e=zu(Us)[0],t=je().memoizedState;return[typeof e=="boolean"?e:cc(e),t]},useSyncExternalStore:vy,useId:Vy,useHostTransitionStatus:w0,useFormState:wv,useActionState:wv,useOptimistic:function(e,t){var n=je();return Ey(n,we,e,t)},useMemoCache:M0,useCacheRefresh:Gy};R0.useEffectEvent=Dy;var Yy={readContext:yn,use:Uh,useCallback:Oy,useContext:yn,useEffect:E0,useImperativeHandle:Iy,useInsertionEffect:Uy,useLayoutEffect:Ny,useMemo:Py,useReducer:Pp,useRef:Ry,useState:function(){return Pp(Us)},useDebugValue:T0,useDeferredValue:function(e,t){var n=je();return we===null?A0(n,e,t):By(n,we.memoizedState,e,t)},useTransition:function(){var e=Pp(Us)[0],t=je().memoizedState;return[typeof e=="boolean"?e:cc(e),t]},useSyncExternalStore:vy,useId:Vy,useHostTransitionStatus:w0,useFormState:Cv,useActionState:Cv,useOptimistic:function(e,t){var n=je();return we!==null?Ey(n,we,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:M0,useCacheRefresh:Gy};Yy.useEffectEvent=Dy;function Bp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=si(),s=ca(i);s.payload=t,n!=null&&(s.callback=n),t=ua(e,s,i),t!==null&&(qn(t,e,i),Ll(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=si(),s=ca(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ua(e,s,i),t!==null&&(qn(t,e,i),Ll(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=si(),i=ca(n);i.tag=2,t!=null&&(i.callback=t),t=ua(e,i,n),t!==null&&(qn(t,e,n),Ll(t,e,n))}};function Dv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Wl(n,i)||!Wl(s,a):!0}function Uv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Rm.enqueueReplaceState(t,t.state,null)}function ar(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ze({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Zy(e){$u(e)}function Jy(e){console.error(e)}function Ky(e){$u(e)}function lh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Nv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Dm(e,t,n){return n=ca(n),n.tag=3,n.payload={element:null},n.callback=function(){lh(e,t)},n}function Qy(e){return e=ca(e),e.tag=3,e}function jy(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Nv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Nv(t,n,i),typeof s!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function fT(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&vo(t,n,s,!0),n=ri.current,n!==null){switch(n.tag){case 31:case 13:return Ei===null?dh():n.alternate===null&&Ke===0&&(Ke=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===ih?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Zp(e,i,s)),!1;case 22:return n.flags|=65536,i===ih?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Zp(e,i,s)),!1}throw Error(j(435,n.tag))}return Zp(e,i,s),dh(),!1}if(re)return t=ri.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==_m&&(e=Error(j(422),{cause:i}),Yl(Mi(e,n)))):(i!==_m&&(t=Error(j(423),{cause:i}),Yl(Mi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Mi(i,n),s=Dm(e.stateNode,i,s),Op(e,s),Ke!==4&&(Ke=2)),!1;var a=Error(j(520),{cause:i});if(a=Mi(a,n),zl===null?zl=[a]:zl.push(a),Ke!==4&&(Ke=2),t===null)return!0;i=Mi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Dm(n.stateNode,i,e),Op(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ha===null||!ha.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Qy(s),jy(s,e,n,i),Op(n,s),!1}n=n.return}while(n!==null);return!1}var D0=Error(j(461)),sn=!1;function _n(e,t,n,i){t.child=e===null?fy(t,null,n,i):ir(t,e.child,n,i)}function Lv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return nr(t),i=v0(e,t,n,r,a,s),o=x0(),e!==null&&!sn?(y0(e,t,s),Ns(e,t,s)):(re&&o&&u0(t),t.flags|=1,_n(e,t,i,s),t.child)}function Iv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!c0(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,$y(e,t,a,i,s)):(e=Bu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!U0(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Wl,n(r,i)&&e.ref===t.ref)return Ns(e,t,s)}return t.flags|=1,e=As(a,i),e.ref=t.ref,e.return=t,t.child=e}function $y(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Wl(a,i)&&e.ref===t.ref)if(sn=!1,t.pendingProps=i=a,U0(e,s))(e.flags&131072)!==0&&(sn=!0);else return t.lanes=e.lanes,Ns(e,t,s)}return Um(e,t,n,i,s)}function tS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Ov(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fu(t,a!==null?a.cachePool:null),a!==null?bv(t,a):Em(),my(t);else return i=t.lanes=536870912,Ov(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Fu(t,a.cachePool),bv(t,a),ta(t),t.memoizedState=null):(e!==null&&Fu(t,null),Em(),ta(t));return _n(e,t,s,n),t.child}function wl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ov(e,t,n,i,s){var a=d0();return a=a===null?null:{parent:nn._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Fu(t,null),Em(),my(t),e!==null&&vo(e,t,i,!0),t.childLanes=s,null}function Vu(e,t){return t=ch({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Pv(e,t,n){return ir(t,e.child,null,n),e=Vu(t,t.pendingProps),e.flags|=2,jn(t),t.memoizedState=null,e}function dT(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(i.mode==="hidden")return e=Vu(t,i),t.lanes=536870912,wl(null,e);if(Tm(t),(e=Fe)?(e=qS(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},n=ay(e),n.return=t,t.child=n,xn=t,Fe=null)):e=null,e===null)throw _a(t);return t.lanes=536870912,null}return Vu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Tm(t),s)if(t.flags&256)t.flags&=-257,t=Pv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(sn||vo(e,t,n,!1),s=(n&e.childLanes)!==0,sn||s){if(i=Le,i!==null&&(r=Ux(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,cr(e,r),qn(i,e,r),D0;dh(),t=Pv(e,t,n)}else e=a.treeContext,Fe=Ti(r.nextSibling),xn=t,re=!0,la=null,bi=!1,e!==null&&oy(t,e),t=Vu(t,i),t.flags|=4096;return t}return e=As(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Um(e,t,n,i,s){return nr(t),n=v0(e,t,n,i,void 0,s),i=x0(),e!==null&&!sn?(y0(e,t,s),Ns(e,t,s)):(re&&i&&u0(t),t.flags|=1,_n(e,t,n,s),t.child)}function Bv(e,t,n,i,s,a){return nr(t),t.updateQueue=null,n=_y(t,i,n,s),gy(e),i=x0(),e!==null&&!sn?(y0(e,t,a),Ns(e,t,a)):(re&&i&&u0(t),t.flags|=1,_n(e,t,n,a),t.child)}function Fv(e,t,n,i,s){if(nr(t),t.stateNode===null){var a=Yr,r=n.contextType;typeof r=="object"&&r!==null&&(a=yn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},m0(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?yn(r):Yr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Bp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Rm.enqueueReplaceState(a,a.state,null),Ol(t,i,a,s),Il(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=ar(n,o);a.props=l;var c=a.context,f=n.contextType;r=Yr,typeof f=="object"&&f!==null&&(r=yn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Uv(t,a,i,r),Qs=!1;var u=t.memoizedState;a.state=u,Ol(t,i,a,s),Il(),c=t.memoizedState,o||u!==c||Qs?(typeof p=="function"&&(Bp(t,n,p,i),c=t.memoizedState),(l=Qs||Dv(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Mm(e,t),r=t.memoizedProps,f=ar(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=Yr,typeof c=="object"&&c!==null&&(l=yn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Uv(t,a,i,l),Qs=!1,u=t.memoizedState,a.state=u,Ol(t,i,a,s),Il();var d=t.memoizedState;r!==p||u!==d||Qs||e!==null&&e.dependencies!==null&&nh(e.dependencies)?(typeof o=="function"&&(Bp(t,n,o,i),d=t.memoizedState),(f=Qs||Dv(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&nh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Gu(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=ir(t,e.child,null,s),t.child=ir(t,null,n,s)):_n(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Ns(e,t,s),e}function zv(e,t,n,i){return er(),t.flags|=256,_n(e,t,n,i),t.child}var Fp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zp(e){return{baseLanes:e,cachePool:cy()}}function Hp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ti),e}function eS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(s?$s(t):ta(t),(e=Fe)?(e=qS(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},n=ay(e),n.return=t,t.child=n,xn=t,Fe=null)):e=null,e===null)throw _a(t);return Wm(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(ta(t),s=t.mode,o=ch({mode:"hidden",children:o},s),i=Qa(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=zp(n),i.childLanes=Hp(e,r,n),t.memoizedState=Fp,wl(null,i)):($s(t),Nm(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?($s(t),t.flags&=-257,t=Vp(e,t,n)):t.memoizedState!==null?(ta(t),t.child=e.child,t.flags|=128,t=null):(ta(t),o=i.fallback,s=t.mode,i=ch({mode:"visible",children:i.children},s),o=Qa(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ir(t,e.child,null,n),i=t.child,i.memoizedState=zp(n),i.childLanes=Hp(e,r,n),t.memoizedState=Fp,t=wl(null,i));else if($s(t),Wm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(j(419)),i.stack="",i.digest=r,Yl({value:i,source:null,stack:null}),t=Vp(e,t,n)}else if(sn||vo(e,t,n,!1),r=(n&e.childLanes)!==0,sn||r){if(r=Le,r!==null&&(i=Ux(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,cr(e,i),qn(r,e,i),D0;Xm(o)||dh(),t=Vp(e,t,n)}else Xm(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Fe=Ti(o.nextSibling),xn=t,re=!0,la=null,bi=!1,e!==null&&oy(t,e),t=Nm(t,i.children),t.flags|=4096);return t}return s?(ta(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=As(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=As(c,o):(o=Qa(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,wl(null,i),i=t.child,o=e.child.memoizedState,o===null?o=zp(n):(s=o.cachePool,s!==null?(l=nn._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=cy(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Hp(e,r,n),t.memoizedState=Fp,wl(e.child,i)):($s(t),n=e.child,e=n.sibling,n=As(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Nm(e,t){return t=ch({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ch(e,t){return e=$n(22,e,null,t),e.lanes=0,e}function Vp(e,t,n){return ir(t,e.child,null,n),e=Nm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),xm(e.return,t,n)}function Gp(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function nS(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Qe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ie(Qe,r),_n(e,t,i,n),i=re?ql:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hv(e,n,t);else if(e.tag===19)Hv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ah(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Gp(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ah(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Gp(t,!0,n,null,a,i);break;case"together":Gp(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ns(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(vo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=As(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=As(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function U0(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nh(e)))}function pT(e,t,n){switch(t.tag){case 3:Ju(t,t.stateNode.containerInfo),js(t,nn,e.memoizedState.cache),er();break;case 27:case 5:rm(t);break;case 4:Ju(t,t.stateNode.containerInfo);break;case 10:js(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tm(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?($s(t),t.flags|=128,null):(n&t.child.childLanes)!==0?eS(e,t,n):($s(t),e=Ns(e,t,n),e!==null?e.sibling:null);$s(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(vo(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return nS(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ie(Qe,Qe.current),i)break;return null;case 22:return t.lanes=0,tS(e,t,n,t.pendingProps);case 24:js(t,nn,e.memoizedState.cache)}return Ns(e,t,n)}function iS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)sn=!0;else{if(!U0(e,n)&&(t.flags&128)===0)return sn=!1,pT(e,t,n);sn=(e.flags&131072)!==0}else sn=!1,re&&(t.flags&1048576)!==0&&ry(t,ql,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Za(t.elementType),t.type=e,typeof e=="function")c0(e)?(i=ar(e,i),t.tag=1,t=Fv(null,t,e,i,n)):(t.tag=0,t=Um(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Jm){t.tag=11,t=Lv(null,t,e,i,n);break t}else if(s===Km){t.tag=14,t=Iv(null,t,e,i,n);break t}}throw t=sm(e)||e,Error(j(306,t,""))}}return t;case 0:return Um(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ar(i,t.pendingProps),Fv(e,t,i,s,n);case 3:t:{if(Ju(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Mm(e,t),Ol(t,i,null,n);var r=t.memoizedState;if(i=r.cache,js(t,nn,i),i!==a.cache&&ym(t,[nn],n,!0),Il(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=zv(e,t,i,n);break t}else if(i!==s){s=Mi(Error(j(424)),t),Yl(s),t=zv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Fe=Ti(e.firstChild),xn=t,re=!0,la=null,bi=!0,n=fy(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),i===s){t=Ns(e,t,n);break t}_n(e,t,i,n)}t=t.child}return t;case 26:return Gu(e,t),e===null?(n=lx(t.type,null,t.pendingProps,null))?t.memoizedState=n:re||(n=t.type,e=t.pendingProps,i=_h(oa.current).createElement(n),i[vn]=t,i[Yn]=e,Sn(i,n,e),dn(i),t.stateNode=i):t.memoizedState=lx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rm(t),e===null&&re&&(i=t.stateNode=YS(t.type,t.pendingProps,oa.current),xn=t,bi=!0,s=Fe,Sa(t.type)?(qm=s,Fe=Ti(i.firstChild)):Fe=s),_n(e,t,t.pendingProps.children,n),Gu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((s=i=Fe)&&(i=GT(i,t.type,t.pendingProps,bi),i!==null?(t.stateNode=i,xn=t,Fe=Ti(i.firstChild),bi=!1,s=!0):s=!1),s||_a(t)),rm(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Gm(s,a)?i=null:r!==null&&Gm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=v0(e,t,aT,null,null,n),$l._currentValue=s),Gu(e,t),_n(e,t,i,n),t.child;case 6:return e===null&&re&&((e=n=Fe)&&(n=kT(n,t.pendingProps,bi),n!==null?(t.stateNode=n,xn=t,Fe=null,e=!0):e=!1),e||_a(t)),null;case 13:return eS(e,t,n);case 4:return Ju(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ir(t,null,i,n):_n(e,t,i,n),t.child;case 11:return Lv(e,t,t.type,t.pendingProps,n);case 7:return _n(e,t,t.pendingProps,n),t.child;case 8:return _n(e,t,t.pendingProps.children,n),t.child;case 12:return _n(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,js(t,t.type,i.value),_n(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,nr(t),s=yn(s),i=i(s),t.flags|=1,_n(e,t,i,n),t.child;case 14:return Iv(e,t,t.type,t.pendingProps,n);case 15:return $y(e,t,t.type,t.pendingProps,n);case 19:return nS(e,t,n);case 31:return dT(e,t,n);case 22:return tS(e,t,n,t.pendingProps);case 24:return nr(t),i=yn(nn),e===null?(s=d0(),s===null&&(s=Le,a=f0(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},m0(t),js(t,nn,s)):((e.lanes&n)!==0&&(Mm(e,t),Ol(t,null,null,n),Il()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),js(t,nn,i)):(i=a.cache,js(t,nn,i),i!==s.cache&&ym(t,[nn],n,!0))),_n(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function _s(e){e.flags|=4}function kp(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(wS())e.flags|=8192;else throw $a=ih,p0}else e.flags&=-16777217}function Vv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!KS(t))if(wS())e.flags|=8192;else throw $a=ih,p0}function Au(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Cx():536870912,e.lanes|=t,uo|=t)}function yl(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function mT(e,t,n){var i=t.pendingProps;switch(h0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ws(nn),so(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Or(t)?_s(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ip())),Be(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(_s(t),a!==null?(Be(t),Vv(t,a)):(Be(t),kp(t,s,null,i,n))):a?a!==e.memoizedState?(_s(t),Be(t),Vv(t,a)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&_s(t),Be(t),kp(t,s,e,i,n)),null;case 27:if(Ku(t),n=oa.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Be(t),null}e=Zi.current,Or(t)?gv(t,e):(e=YS(s,i,n),t.stateNode=e,_s(t))}return Be(t),null;case 5:if(Ku(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Be(t),null}if(a=Zi.current,Or(t))gv(t,a);else{var r=_h(oa.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[vn]=t,a[Yn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(Sn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&_s(t)}}return Be(t),kp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=oa.current,Or(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=xn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[vn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||kS(e.nodeValue,n)),e||_a(t,!0)}else e=_h(e).createTextNode(i),e[vn]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Or(t),n!==null){if(e===null){if(!i)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[vn]=t}else er(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=Ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(jn(t),t):(jn(t),null);if((t.flags&128)!==0)throw Error(j(558))}return Be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Or(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[vn]=t}else er(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),s=!1}else s=Ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(jn(t),t):(jn(t),null)}return jn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Au(t,t.updateQueue),Be(t),null);case 4:return so(),e===null&&F0(t.stateNode.containerInfo),Be(t),null;case 10:return ws(t.type),Be(t),null;case 19:if(pn(Qe),i=t.memoizedState,i===null)return Be(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)yl(i,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ah(e),a!==null){for(t.flags|=128,yl(i,!1),e=a.updateQueue,t.updateQueue=e,Au(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)sy(n,e),n=n.sibling;return Ie(Qe,Qe.current&1|2),re&&Ss(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ei()>hh&&(t.flags|=128,s=!0,yl(i,!1),t.lanes=4194304)}else{if(!s)if(e=ah(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Au(t,e),yl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!re)return Be(t),null}else 2*ei()-i.renderingStartTime>hh&&n!==536870912&&(t.flags|=128,s=!0,yl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ei(),e.sibling=null,n=Qe.current,Ie(Qe,s?n&1|2:n&1),re&&Ss(t,i.treeForkCount),e):(Be(t),null);case 22:case 23:return jn(t),g0(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Au(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&pn(ja),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ws(nn),Be(t),null;case 25:return null;case 30:return null}throw Error(j(156,t.tag))}function gT(e,t){switch(h0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ws(nn),so(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ku(t),null;case 31:if(t.memoizedState!==null){if(jn(t),t.alternate===null)throw Error(j(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pn(Qe),null;case 4:return so(),null;case 10:return ws(t.type),null;case 22:case 23:return jn(t),g0(),e!==null&&pn(ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ws(nn),null;case 25:return null;default:return null}}function sS(e,t){switch(h0(t),t.tag){case 3:ws(nn),so();break;case 26:case 27:case 5:Ku(t);break;case 4:so();break;case 31:t.memoizedState!==null&&jn(t);break;case 13:jn(t);break;case 19:pn(Qe);break;case 10:ws(t.type);break;case 22:case 23:jn(t),g0(),e!==null&&pn(ja);break;case 24:ws(nn)}}function uc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){Ee(t,t.return,o)}}function va(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){Ee(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){Ee(t,t.return,f)}}function aS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{py(t,n)}catch(i){Ee(e,e.return,i)}}}function rS(e,t,n){n.props=ar(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ee(e,t,i)}}function Bl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){Ee(e,t,s)}}function Yi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Ee(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ee(e,t,s)}else n.current=null}function oS(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Ee(e,e.return,s)}}function Xp(e,t,n){try{var i=e.stateNode;PT(i,e.type,n,t),i[Yn]=t}catch(s){Ee(e,e.return,s)}}function lS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function Wp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||lS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lm(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Es));else if(i!==4&&(i===27&&Sa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Lm(e,t,n),e=e.sibling;e!==null;)Lm(e,t,n),e=e.sibling}function uh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Sa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(uh(e,t,n),e=e.sibling;e!==null;)uh(e,t,n),e=e.sibling}function cS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Sn(t,i,n),t[vn]=e,t[Yn]=n}catch(a){Ee(e,e.return,a)}}var Ms=!1,en=!1,qp=!1,Gv=typeof WeakSet=="function"?WeakSet:Set,fn=null;function _T(e,t){if(e=e.containerInfo,Hm=Sh,e=Kx(e),r0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,p=e,u=null;e:for(;;){for(var d;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++f===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vm={focusedElem:e,selectionRange:n},Sh=!1,fn=t;fn!==null;)if(t=fn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,fn=e;else for(;fn!==null;){switch(t=fn,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=ar(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(S){Ee(n,n.return,S)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)km(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":km(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(j(163))}if(e=t.sibling,e!==null){e.return=t.return,fn=e;break}fn=t.return}}function uS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:xs(e,n),i&4&&uc(5,n);break;case 1:if(xs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ee(n,n.return,r)}else{var s=ar(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ee(n,n.return,r)}}i&64&&aS(n),i&512&&Bl(n,n.return);break;case 3:if(xs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{py(e,t)}catch(r){Ee(n,n.return,r)}}break;case 27:t===null&&i&4&&cS(n);case 26:case 5:xs(e,n),t===null&&i&4&&oS(n),i&512&&Bl(n,n.return);break;case 12:xs(e,n);break;case 31:xs(e,n),i&4&&dS(e,n);break;case 13:xs(e,n),i&4&&pS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=AT.bind(null,n),XT(e,n))));break;case 22:if(i=n.memoizedState!==null||Ms,!i){t=t!==null&&t.memoizedState!==null||en,s=Ms;var a=en;Ms=i,(en=t)&&!a?ys(e,n,(n.subtreeFlags&8772)!==0):xs(e,n),Ms=s,en=a}break;case 30:break;default:xs(e,n)}}function hS(e){var t=e.alternate;t!==null&&(e.alternate=null,hS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&t0(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,Xn=!1;function vs(e,t,n){for(n=n.child;n!==null;)fS(e,t,n),n=n.sibling}function fS(e,t,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 26:en||Yi(n,t),vs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:en||Yi(n,t);var i=ke,s=Xn;Sa(n.type)&&(ke=n.stateNode,Xn=!1),vs(e,t,n),Vl(n.stateNode),ke=i,Xn=s;break;case 5:en||Yi(n,t);case 6:if(i=ke,s=Xn,ke=null,vs(e,t,n),ke=i,Xn=s,ke!==null)if(Xn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(n.stateNode)}catch(a){Ee(n,t,a)}else try{ke.removeChild(n.stateNode)}catch(a){Ee(n,t,a)}break;case 18:ke!==null&&(Xn?(e=ke,ix(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),mo(e)):ix(ke,n.stateNode));break;case 4:i=ke,s=Xn,ke=n.stateNode.containerInfo,Xn=!0,vs(e,t,n),ke=i,Xn=s;break;case 0:case 11:case 14:case 15:va(2,n,t),en||va(4,n,t),vs(e,t,n);break;case 1:en||(Yi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&rS(n,t,i)),vs(e,t,n);break;case 21:vs(e,t,n);break;case 22:en=(i=en)||n.memoizedState!==null,vs(e,t,n),en=i;break;default:vs(e,t,n)}}function dS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{mo(e)}catch(n){Ee(t,t.return,n)}}}function pS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{mo(e)}catch(n){Ee(t,t.return,n)}}function vT(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Gv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Gv),t;default:throw Error(j(435,e.tag))}}function wu(e,t){var n=vT(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=wT.bind(null,e,i);i.then(s,s)}})}function Gn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Sa(o.type)){ke=o.stateNode,Xn=!1;break t}break;case 5:ke=o.stateNode,Xn=!1;break t;case 3:case 4:ke=o.stateNode.containerInfo,Xn=!0;break t}o=o.return}if(ke===null)throw Error(j(160));fS(a,r,s),ke=null,Xn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)mS(t,e),t=t.sibling}var Li=null;function mS(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(t,e),kn(e),i&4&&(va(3,e,e.return),uc(3,e),va(5,e,e.return));break;case 1:Gn(t,e),kn(e),i&512&&(en||n===null||Yi(n,n.return)),i&64&&Ms&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Li;if(Gn(t,e),kn(e),i&512&&(en||n===null||Yi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[rc]||a[vn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),Sn(a,i,n),a[vn]=e,dn(a),i=a;break t;case"link":var r=ux("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),Sn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=ux("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),Sn(a,i,n),s.head.appendChild(a);break;default:throw Error(j(468,i))}a[vn]=e,dn(a),i=a}e.stateNode=i}else hx(s,e.type,e.stateNode);else e.stateNode=cx(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?hx(s,e.type,e.stateNode):cx(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Xp(e,e.memoizedProps,n.memoizedProps)}break;case 27:Gn(t,e),kn(e),i&512&&(en||n===null||Yi(n,n.return)),n!==null&&i&4&&Xp(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Gn(t,e),kn(e),i&512&&(en||n===null||Yi(n,n.return)),e.flags&32){s=e.stateNode;try{ro(s,"")}catch(_){Ee(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Xp(e,s,n!==null?n.memoizedProps:s)),i&1024&&(qp=!0);break;case 6:if(Gn(t,e),kn(e),i&4){if(e.stateNode===null)throw Error(j(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){Ee(e,e.return,_)}}break;case 3:if(Wu=null,s=Li,Li=vh(t.containerInfo),Gn(t,e),Li=s,kn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(t.containerInfo)}catch(_){Ee(e,e.return,_)}qp&&(qp=!1,gS(e));break;case 4:i=Li,Li=vh(e.stateNode.containerInfo),Gn(t,e),kn(e),Li=i;break;case 12:Gn(t,e),kn(e);break;case 31:Gn(t,e),kn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wu(e,i)));break;case 13:Gn(t,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ih=ei()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wu(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Ms,f=en;if(Ms=c||s,en=f||l,Gn(t,e),en=f,Ms=c,kn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||Ms||en||Ja(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){Ee(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){Ee(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;s?sx(d,!0):sx(l.stateNode,!1)}catch(_){Ee(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,wu(e,n))));break;case 19:Gn(t,e),kn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wu(e,i)));break;case 30:break;case 21:break;default:Gn(t,e),kn(e)}}function kn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(lS(i)){n=i;break}i=i.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var s=n.stateNode,a=Wp(e);uh(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(ro(r,""),n.flags&=-33);var o=Wp(e);uh(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Wp(e);Lm(e,c,l);break;default:throw Error(j(161))}}catch(f){Ee(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gS(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uS(e,t.alternate,t),t=t.sibling}function Ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),Ja(t);break;case 1:Yi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&rS(t,t.return,n),Ja(t);break;case 27:Vl(t.stateNode);case 26:case 5:Yi(t,t.return),Ja(t);break;case 22:t.memoizedState===null&&Ja(t);break;case 30:Ja(t);break;default:Ja(t)}e=e.sibling}}function ys(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:ys(s,a,n),uc(4,a);break;case 1:if(ys(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){Ee(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)dy(l[s],o)}catch(c){Ee(i,i.return,c)}}n&&r&64&&aS(a),Bl(a,a.return);break;case 27:cS(a);case 26:case 5:ys(s,a,n),n&&i===null&&r&4&&oS(a),Bl(a,a.return);break;case 12:ys(s,a,n);break;case 31:ys(s,a,n),n&&r&4&&dS(s,a);break;case 13:ys(s,a,n),n&&r&4&&pS(s,a);break;case 22:a.memoizedState===null&&ys(s,a,n),Bl(a,a.return);break;case 30:break;default:ys(s,a,n)}t=t.sibling}}function N0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&lc(n))}function L0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&lc(e))}function Ni(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_S(e,t,n,i),t=t.sibling}function _S(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ni(e,t,n,i),s&2048&&uc(9,t);break;case 1:Ni(e,t,n,i);break;case 3:Ni(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&lc(e)));break;case 12:if(s&2048){Ni(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){Ee(t,t.return,l)}}else Ni(e,t,n,i);break;case 31:Ni(e,t,n,i);break;case 13:Ni(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?Ni(e,t,n,i):Fl(e,t):a._visibility&2?Ni(e,t,n,i):(a._visibility|=2,Br(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&N0(r,t);break;case 24:Ni(e,t,n,i),s&2048&&L0(t.alternate,t);break;default:Ni(e,t,n,i)}}function Br(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Br(a,r,o,l,s),uc(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Br(a,r,o,l,s):Fl(a,r):(f._visibility|=2,Br(a,r,o,l,s)),s&&c&2048&&N0(r.alternate,r);break;case 24:Br(a,r,o,l,s),s&&c&2048&&L0(r.alternate,r);break;default:Br(a,r,o,l,s)}t=t.sibling}}function Fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Fl(n,i),s&2048&&N0(i.alternate,i);break;case 24:Fl(n,i),s&2048&&L0(i.alternate,i);break;default:Fl(n,i)}t=t.sibling}}var Cl=8192;function Pr(e,t,n){if(e.subtreeFlags&Cl)for(e=e.child;e!==null;)vS(e,t,n),e=e.sibling}function vS(e,t,n){switch(e.tag){case 26:Pr(e,t,n),e.flags&Cl&&e.memoizedState!==null&&nA(n,Li,e.memoizedState,e.memoizedProps);break;case 5:Pr(e,t,n);break;case 3:case 4:var i=Li;Li=vh(e.stateNode.containerInfo),Pr(e,t,n),Li=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Cl,Cl=16777216,Pr(e,t,n),Cl=i):Pr(e,t,n));break;default:Pr(e,t,n)}}function xS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Sl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];fn=i,SS(i,e)}xS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yS(e),e=e.sibling}function yS(e){switch(e.tag){case 0:case 11:case 15:Sl(e),e.flags&2048&&va(9,e,e.return);break;case 3:Sl(e);break;case 12:Sl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ku(e)):Sl(e);break;default:Sl(e)}}function ku(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];fn=i,SS(i,e)}xS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),ku(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ku(t));break;default:ku(t)}e=e.sibling}}function SS(e,t){for(;fn!==null;){var n=fn;switch(n.tag){case 0:case 11:case 15:va(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:lc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,fn=i;else t:for(n=e;fn!==null;){i=fn;var s=i.sibling,a=i.return;if(hS(i),i===n){fn=null;break t}if(s!==null){s.return=a,fn=s;break t}fn=a}}}var xT={getCacheForType:function(e){var t=yn(nn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return yn(nn).controller.signal}},yT=typeof WeakMap=="function"?WeakMap:Map,me=0,Le=null,ee=null,ie=0,be=0,Qn=null,sa=!1,yo=!1,I0=!1,Ls=0,Ke=0,xa=0,tr=0,O0=0,ti=0,uo=0,zl=null,Wn=null,Im=!1,Ih=0,MS=0,hh=1/0,fh=null,ha=null,on=0,fa=null,ho=null,Cs=0,Om=0,Pm=null,bS=null,Hl=0,Bm=null;function si(){return(me&2)!==0&&ie!==0?ie&-ie:It.T!==null?B0():Nx()}function ES(){if(ti===0)if((ie&536870912)===0||re){var e=_u;_u<<=1,(_u&3932160)===0&&(_u=262144),ti=e}else ti=536870912;return e=ri.current,e!==null&&(e.flags|=32),ti}function qn(e,t,n){(e===Le&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(fo(e,0),aa(e,ie,ti,!1)),ac(e,n),((me&2)===0||e!==Le)&&(e===Le&&((me&2)===0&&(tr|=n),Ke===4&&aa(e,ie,ti,!1)),Ki(e))}function TS(e,t,n){if((me&6)!==0)throw Error(j(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||sc(e,t),s=i?bT(e,t):Yp(e,t,!0),a=i;do{if(s===0){yo&&!i&&aa(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!ST(n)){s=Yp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=zl;var l=o.current.memoizedState.isDehydrated;if(l&&(fo(o,r).flags|=256),r=Yp(o,r,!1),r!==2){if(I0&&!l){o.errorRecoveryDisabledLanes|=a,tr|=a,s=4;break t}a=Wn,Wn=s,a!==null&&(Wn===null?Wn=a:Wn.push.apply(Wn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){fo(e,0),aa(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t)break;case 6:aa(i,t,ti,!sa);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(s=Ih+300-ei(),10<s)){if(aa(i,t,ti,!sa),bh(i,0,!0)!==0)break t;Cs=t,i.timeoutHandle=WS(kv.bind(null,i,n,Wn,fh,Im,t,ti,tr,uo,sa,a,"Throttled",-0,0),s);break t}kv(i,n,Wn,fh,Im,t,ti,tr,uo,sa,a,null,-0,0)}}break}while(!0);Ki(e)}function kv(e,t,n,i,s,a,r,o,l,c,f,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Es},vS(t,a,p);var _=(a&62914560)===a?Ih-ei():(a&4194048)===a?MS-ei():0;if(_=iA(p,_),_!==null){Cs=a,e.cancelPendingCommit=_(Wv.bind(null,e,t,a,n,i,s,r,o,l,f,p,null,u,d)),aa(e,a,r,!c);return}}Wv(e,t,a,n,i,s,r,o,l)}function ST(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!ai(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function aa(e,t,n,i){t&=~O0,t&=~tr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-ii(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Rx(e,n,t)}function Oh(){return(me&6)===0?(hc(0,!1),!1):!0}function P0(){if(ee!==null){if(be===0)var e=ee.return;else e=ee,Ts=ur=null,S0(e),eo=null,Zl=0,e=ee;for(;e!==null;)sS(e.alternate,e),e=e.return;ee=null}}function fo(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,zT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Cs=0,P0(),Le=e,ee=n=As(e.current,null),ie=t,be=0,Qn=null,sa=!1,yo=sc(e,t),I0=!1,uo=ti=O0=tr=xa=Ke=0,Wn=zl=null,Im=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-ii(i),a=1<<s;t|=e[s],i&=~a}return Ls=t,wh(),n}function AS(e,t){qt=null,It.H=Kl,t===xo||t===Rh?(t=Sv(),be=3):t===p0?(t=Sv(),be=4):be=t===D0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qn=t,ee===null&&(Ke=1,lh(e,Mi(t,e.current)))}function wS(){var e=ri.current;return e===null?!0:(ie&4194048)===ie?Ei===null:(ie&62914560)===ie||(ie&536870912)!==0?e===Ei:!1}function CS(){var e=It.H;return It.H=Kl,e===null?Kl:e}function RS(){var e=It.A;return It.A=xT,e}function dh(){Ke=4,sa||(ie&4194048)!==ie&&ri.current!==null||(yo=!0),(xa&134217727)===0&&(tr&134217727)===0||Le===null||aa(Le,ie,ti,!1)}function Yp(e,t,n){var i=me;me|=2;var s=CS(),a=RS();(Le!==e||ie!==t)&&(fh=null,fo(e,t)),t=!1;var r=Ke;t:do try{if(be!==0&&ee!==null){var o=ee,l=Qn;switch(be){case 8:P0(),r=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(t=!0);var c=be;if(be=0,Qn=null,Kr(e,o,l,c),n&&yo){r=0;break t}break;default:c=be,be=0,Qn=null,Kr(e,o,l,c)}}MT(),r=Ke;break}catch(f){AS(e,f)}while(!0);return t&&e.shellSuspendCounter++,Ts=ur=null,me=i,It.H=s,It.A=a,ee===null&&(Le=null,ie=0,wh()),r}function MT(){for(;ee!==null;)DS(ee)}function bT(e,t){var n=me;me|=2;var i=CS(),s=RS();Le!==e||ie!==t?(fh=null,hh=ei()+500,fo(e,t)):yo=sc(e,t);t:do try{if(be!==0&&ee!==null){t=ee;var a=Qn;e:switch(be){case 1:be=0,Qn=null,Kr(e,t,a,1);break;case 2:case 9:if(yv(a)){be=0,Qn=null,Xv(t);break}t=function(){be!==2&&be!==9||Le!==e||(be=7),Ki(e)},a.then(t,t);break t;case 3:be=7;break t;case 4:be=5;break t;case 7:yv(a)?(be=0,Qn=null,Xv(t)):(be=0,Qn=null,Kr(e,t,a,7));break;case 5:var r=null;switch(ee.tag){case 26:r=ee.memoizedState;case 5:case 27:var o=ee;if(r?KS(r):o.stateNode.complete){be=0,Qn=null;var l=o.sibling;if(l!==null)ee=l;else{var c=o.return;c!==null?(ee=c,Ph(c)):ee=null}break e}}be=0,Qn=null,Kr(e,t,a,5);break;case 6:be=0,Qn=null,Kr(e,t,a,6);break;case 8:P0(),Ke=6;break t;default:throw Error(j(462))}}ET();break}catch(f){AS(e,f)}while(!0);return Ts=ur=null,It.H=i,It.A=s,me=n,ee!==null?0:(Le=null,ie=0,wh(),Ke)}function ET(){for(;ee!==null&&!Y1();)DS(ee)}function DS(e){var t=iS(e.alternate,e,Ls);e.memoizedProps=e.pendingProps,t===null?Ph(e):ee=t}function Xv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bv(n,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Bv(n,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:S0(t);default:sS(n,t),t=ee=sy(t,Ls),t=iS(n,t,Ls)}e.memoizedProps=e.pendingProps,t===null?Ph(e):ee=t}function Kr(e,t,n,i){Ts=ur=null,S0(t),eo=null,Zl=0;var s=t.return;try{if(fT(e,s,t,n,ie)){Ke=1,lh(e,Mi(n,e.current)),ee=null;return}}catch(a){if(s!==null)throw ee=s,a;Ke=1,lh(e,Mi(n,e.current)),ee=null;return}t.flags&32768?(re||i===1?e=!0:yo||(ie&536870912)!==0?e=!1:(sa=e=!0,(i===2||i===9||i===3||i===6)&&(i=ri.current,i!==null&&i.tag===13&&(i.flags|=16384))),US(t,e)):Ph(t)}function Ph(e){var t=e;do{if((t.flags&32768)!==0){US(t,sa);return}e=t.return;var n=mT(t.alternate,t,Ls);if(n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);Ke===0&&(Ke=5)}function US(e,t){do{var n=gT(e.alternate,e);if(n!==null){n.flags&=32767,ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ee=e;return}ee=e=n}while(e!==null);Ke=6,ee=null}function Wv(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do Bh();while(on!==0);if((me&6)!==0)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));if(a=t.lanes|t.childLanes,a|=o0,iE(e,n,a,r,o,l),e===Le&&(ee=Le=null,ie=0),ho=t,fa=e,Cs=n,Om=a,Pm=s,bS=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,CT(Qu,function(){return PS(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=It.T,It.T=null,s=ge.p,ge.p=2,r=me,me|=4;try{_T(e,t,n)}finally{me=r,ge.p=s,It.T=i}}on=1,NS(),LS(),IS()}}function NS(){if(on===1){on=0;var e=fa,t=ho,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=It.T,It.T=null;var i=ge.p;ge.p=2;var s=me;me|=4;try{mS(t,e);var a=Vm,r=Kx(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Jx(o.ownerDocument.documentElement,o)){if(l!==null&&r0(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),_=o.textContent.length,S=Math.min(l.start,_),g=l.end===void 0?S:Math.min(l.end,_);!d.extend&&S>g&&(r=g,g=S,S=r);var h=dv(o,S),m=dv(o,g);if(h&&m&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var x=p.createRange();x.setStart(h.node,h.offset),d.removeAllRanges(),S>g?(d.addRange(x),d.extend(m.node,m.offset)):(x.setEnd(m.node,m.offset),d.addRange(x))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var M=p[o];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Sh=!!Hm,Vm=Hm=null}finally{me=s,ge.p=i,It.T=n}}e.current=t,on=2}}function LS(){if(on===2){on=0;var e=fa,t=ho,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=It.T,It.T=null;var i=ge.p;ge.p=2;var s=me;me|=4;try{uS(e,t.alternate,t)}finally{me=s,ge.p=i,It.T=n}}on=3}}function IS(){if(on===4||on===3){on=0,Z1();var e=fa,t=ho,n=Cs,i=bS;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?on=5:(on=0,ho=fa=null,OS(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ha=null),$m(n),t=t.stateNode,ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=It.T,s=ge.p,ge.p=2,It.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{It.T=t,ge.p=s}}(Cs&3)!==0&&Bh(),Ki(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Bm?Hl++:(Hl=0,Bm=e):Hl=0,hc(0,!1)}}function OS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,lc(t)))}function Bh(){return NS(),LS(),IS(),PS()}function PS(){if(on!==5)return!1;var e=fa,t=Om;Om=0;var n=$m(Cs),i=It.T,s=ge.p;try{ge.p=32>n?32:n,It.T=null,n=Pm,Pm=null;var a=fa,r=Cs;if(on=0,ho=fa=null,Cs=0,(me&6)!==0)throw Error(j(331));var o=me;if(me|=4,yS(a.current),_S(a,a.current,r,n),me=o,hc(0,!1),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(ic,a)}catch{}return!0}finally{ge.p=s,It.T=i,OS(e,t)}}function qv(e,t,n){t=Mi(n,t),t=Dm(e.stateNode,t,2),e=ua(e,t,2),e!==null&&(ac(e,2),Ki(e))}function Ee(e,t,n){if(e.tag===3)qv(e,e,n);else for(;t!==null;){if(t.tag===3){qv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ha===null||!ha.has(i))){e=Mi(n,e),n=Qy(2),i=ua(t,n,2),i!==null&&(jy(n,i,t,e),ac(i,2),Ki(i));break}}t=t.return}}function Zp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new yT;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(I0=!0,s.add(n),e=TT.bind(null,e,t,n),t.then(e,e))}function TT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(ie&n)===n&&(Ke===4||Ke===3&&(ie&62914560)===ie&&300>ei()-Ih?(me&2)===0&&fo(e,0):O0|=n,uo===ie&&(uo=0)),Ki(e)}function BS(e,t){t===0&&(t=Cx()),e=cr(e,t),e!==null&&(ac(e,t),Ki(e))}function AT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),BS(e,n)}function wT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),BS(e,n)}function CT(e,t){return Qm(e,t)}var ph=null,Fr=null,Fm=!1,mh=!1,Jp=!1,ra=0;function Ki(e){e!==Fr&&e.next===null&&(Fr===null?ph=Fr=e:Fr=Fr.next=e),mh=!0,Fm||(Fm=!0,DT())}function hc(e,t){if(!Jp&&mh){Jp=!0;do for(var n=!1,i=ph;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-ii(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Yv(i,a))}else a=ie,a=bh(i,i===Le?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||sc(i,a)||(n=!0,Yv(i,a));i=i.next}while(n);Jp=!1}}function RT(){FS()}function FS(){mh=Fm=!1;var e=0;ra!==0&&FT()&&(e=ra);for(var t=ei(),n=null,i=ph;i!==null;){var s=i.next,a=zS(i,t);a===0?(i.next=null,n===null?ph=s:n.next=s,s===null&&(Fr=n)):(n=i,(e!==0||(a&3)!==0)&&(mh=!0)),i=s}on!==0&&on!==5||hc(e,!1),ra!==0&&(ra=0)}function zS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-ii(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=nE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Le,n=ie,n=bh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(be===2||be===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ep(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||sc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ep(i),$m(n)){case 2:case 8:n=Ax;break;case 32:n=Qu;break;case 268435456:n=wx;break;default:n=Qu}return i=HS.bind(null,e),n=Qm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ep(i),e.callbackPriority=2,e.callbackNode=null,2}function HS(e,t){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bh()&&e.callbackNode!==n)return null;var i=ie;return i=bh(e,e===Le?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(TS(e,i,t),zS(e,ei()),e.callbackNode!=null&&e.callbackNode===n?HS.bind(null,e):null)}function Yv(e,t){if(Bh())return null;TS(e,t,!0)}function DT(){HT(function(){(me&6)!==0?Qm(Tx,RT):FS()})}function B0(){if(ra===0){var e=oo;e===0&&(e=gu,gu<<=1,(gu&261888)===0&&(gu=256)),ra=e}return ra}function Zv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Iu(""+e)}function Jv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function UT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Zv((s[Yn]||null).action),r=i.submitter;r&&(t=(t=r[Yn]||null)?Zv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Eh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ra!==0){var l=r?Jv(s,r):new FormData(s);Cm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?Jv(s,r):new FormData(s),Cm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Cu=0;Cu<gm.length;Cu++)Ru=gm[Cu],Kv=Ru.toLowerCase(),Qv=Ru[0].toUpperCase()+Ru.slice(1),Ii(Kv,"on"+Qv);var Ru,Kv,Qv,Cu;Ii(jx,"onAnimationEnd");Ii($x,"onAnimationIteration");Ii(ty,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(JE,"onTransitionRun");Ii(KE,"onTransitionStart");Ii(QE,"onTransitionCancel");Ii(ey,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ql));function VS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){$u(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){$u(f)}s.currentTarget=null,a=l}}}}function te(e,t){var n=t[lm];n===void 0&&(n=t[lm]=new Set);var i=e+"__bubble";n.has(i)||(GS(t,e,2,!1),n.add(i))}function Kp(e,t,n){var i=0;t&&(i|=4),GS(n,e,i,t)}var Du="_reactListening"+Math.random().toString(36).slice(2);function F0(e){if(!e[Du]){e[Du]=!0,Lx.forEach(function(n){n!=="selectionchange"&&(NT.has(n)||Kp(n,!1,e),Kp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Du]||(t[Du]=!0,Kp("selectionchange",!1,t))}}function GS(e,t,n,i){switch(eM(t)){case 2:var s=rA;break;case 8:s=oA;break;default:s=G0}n=s.bind(null,t,n,e),s=void 0,!dm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Qp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Vr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Vx(function(){var c=a,f=n0(n),p=[];t:{var u=ny.get(e);if(u!==void 0){var d=Eh,_=e;switch(e){case"keypress":if(Pu(n)===0)break t;case"keydown":case"keyup":d=wE;break;case"focusin":_="focus",d=Rp;break;case"focusout":_="blur",d=Rp;break;case"beforeblur":case"afterblur":d=Rp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=sv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=mE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=DE;break;case jx:case $x:case ty:d=vE;break;case ey:d=NE;break;case"scroll":case"scrollend":d=dE;break;case"wheel":d=IE;break;case"copy":case"cut":case"paste":d=yE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=rv;break;case"toggle":case"beforetoggle":d=PE}var S=(t&4)!==0,g=!S&&(e==="scroll"||e==="scrollend"),h=S?u!==null?u+"Capture":null:u;S=[];for(var m=c,x;m!==null;){var M=m;if(x=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||x===null||h===null||(M=kl(m,h),M!=null&&S.push(jl(m,M,x))),g)break;m=m.return}0<S.length&&(u=new d(u,_,null,n,f),p.push({event:u,listeners:S}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==fm&&(_=n.relatedTarget||n.fromElement)&&(Vr(_)||_[go]))break t;if((d||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,d?(_=n.relatedTarget||n.toElement,d=c,_=_?Vr(_):null,_!==null&&(g=nc(_),S=_.tag,_!==g||S!==5&&S!==27&&S!==6)&&(_=null)):(d=null,_=c),d!==_)){if(S=sv,M="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=rv,M="onPointerLeave",h="onPointerEnter",m="pointer"),g=d==null?u:Al(d),x=_==null?u:Al(_),u=new S(M,m+"leave",d,n,f),u.target=g,u.relatedTarget=x,M=null,Vr(f)===c&&(S=new S(h,m+"enter",_,n,f),S.target=x,S.relatedTarget=g,M=S),g=M,d&&_)e:{for(S=LT,h=d,m=_,x=0,M=h;M;M=S(M))x++;M=0;for(var w=m;w;w=S(w))M++;for(;0<x-M;)h=S(h),x--;for(;0<M-x;)m=S(m),M--;for(;x--;){if(h===m||m!==null&&h===m.alternate){S=h;break e}h=S(h),m=S(m)}S=null}else S=null;d!==null&&jv(p,u,d,S,!1),_!==null&&g!==null&&jv(p,g,_,S,!0)}}t:{if(u=c?Al(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var E=uv;else if(cv(u))if(Yx)E=qE;else{E=XE;var C=kE}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&e0(c.elementType)&&(E=uv):E=WE;if(E&&(E=E(e,c))){qx(p,E,n,f);break t}C&&C(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&hm(u,"number",u.value)}switch(C=c?Al(c):window,e){case"focusin":(cv(C)||C.contentEditable==="true")&&(Xr=C,pm=c,Ul=null);break;case"focusout":Ul=pm=Xr=null;break;case"mousedown":mm=!0;break;case"contextmenu":case"mouseup":case"dragend":mm=!1,pv(p,n,f);break;case"selectionchange":if(ZE)break;case"keydown":case"keyup":pv(p,n,f)}var v;if(a0)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else kr?Xx(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(kx&&n.locale!=="ko"&&(kr||A!=="onCompositionStart"?A==="onCompositionEnd"&&kr&&(v=Gx()):(ia=f,i0="value"in ia?ia.value:ia.textContent,kr=!0)),C=gh(c,A),0<C.length&&(A=new av(A,e,null,n,f),p.push({event:A,listeners:C}),v?A.data=v:(v=Wx(n),v!==null&&(A.data=v)))),(v=FE?zE(e,n):HE(e,n))&&(A=gh(c,"onBeforeInput"),0<A.length&&(C=new av("onBeforeInput","beforeinput",null,n,f),p.push({event:C,listeners:A}),C.data=v)),UT(p,e,c,n,f)}VS(p,t)})}function jl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=kl(e,n),s!=null&&i.unshift(jl(e,s,a)),s=kl(e,t),s!=null&&i.push(jl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function LT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=kl(n,a),c!=null&&r.unshift(jl(n,c,l))):s||(c=kl(n,a),c!=null&&r.push(jl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var IT=/\r\n?/g,OT=/\u0000|\uFFFD/g;function $v(e){return(typeof e=="string"?e:""+e).replace(IT,`
`).replace(OT,"")}function kS(e,t){return t=$v(t),$v(e)===t}function Ae(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ro(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ro(e,""+i);break;case"className":xu(e,"class",i);break;case"tabIndex":xu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":xu(e,n,i);break;case"style":Hx(e,i,a);break;case"data":if(t!=="object"){xu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Iu(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",s.name,s,null),Ae(e,t,"formEncType",s.formEncType,s,null),Ae(e,t,"formMethod",s.formMethod,s,null),Ae(e,t,"formTarget",s.formTarget,s,null)):(Ae(e,t,"encType",s.encType,s,null),Ae(e,t,"method",s.method,s,null),Ae(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Iu(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Es);break;case"onScroll":i!=null&&te("scroll",e);break;case"onScrollEnd":i!=null&&te("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Iu(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":te("beforetoggle",e),te("toggle",e),Lu(e,"popover",i);break;case"xlinkActuate":gs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":gs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":gs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":gs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":gs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":gs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":gs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":gs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":gs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Lu(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=hE.get(n)||n,Lu(e,n,i))}}function zm(e,t,n,i,s,a){switch(n){case"style":Hx(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ro(e,i):(typeof i=="number"||typeof i=="bigint")&&ro(e,""+i);break;case"onScroll":i!=null&&te("scroll",e);break;case"onScrollEnd":i!=null&&te("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Es);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ix.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Yn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Lu(e,n,i)}}}function Sn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":te("error",e),te("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:Ae(e,t,a,r,n,null)}}s&&Ae(e,t,"srcSet",n.srcSet,n,null),i&&Ae(e,t,"src",n.src,n,null);return;case"input":te("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(j(137,t));break;default:Ae(e,t,i,f,n,null)}}Bx(e,a,o,l,c,r,s,!1);return;case"select":te("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Ae(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?jr(e,!!i,t,!1):n!=null&&jr(e,!!i,n,!0);return;case"textarea":te("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:Ae(e,t,r,o,n,null)}zx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ae(e,t,l,i,n,null));return;case"dialog":te("beforetoggle",e),te("toggle",e),te("cancel",e),te("close",e);break;case"iframe":case"object":te("load",e);break;case"video":case"audio":for(i=0;i<Ql.length;i++)te(Ql[i],e);break;case"image":te("error",e),te("load",e);break;case"details":te("toggle",e);break;case"embed":case"source":case"link":te("error",e),te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:Ae(e,t,c,i,n,null)}return;default:if(e0(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&zm(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Ae(e,t,o,i,n,null))}function PT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||Ae(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":f=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(j(137,t));break;default:d!==p&&Ae(e,t,u,d,i,p)}}um(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||Ae(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&Ae(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?jr(e,!!n,u,!1):!!i!=!!n&&(t!=null?jr(e,!!n,t,!0):jr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ae(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(j(91));break;default:s!==a&&Ae(e,t,r,s,i,a)}Fx(e,u,d);return;case"option":for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:Ae(e,t,_,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":Ae(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)u=n[S],n.hasOwnProperty(S)&&u!=null&&!i.hasOwnProperty(S)&&Ae(e,t,S,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(j(137,t));break;default:Ae(e,t,c,u,i,d)}return;default:if(e0(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&zm(e,t,g,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||zm(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&Ae(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||Ae(e,t,p,u,i,d)}function tx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&tx(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&tx(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hm=null,Vm=null;function _h(e){return e.nodeType===9?e:e.ownerDocument}function ex(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function XS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jp=null;function FT(){var e=window.event;return e&&e.type==="popstate"?e===jp?!1:(jp=e,!0):(jp=null,!1)}var WS=typeof setTimeout=="function"?setTimeout:void 0,zT=typeof clearTimeout=="function"?clearTimeout:void 0,nx=typeof Promise=="function"?Promise:void 0,HT=typeof queueMicrotask=="function"?queueMicrotask:typeof nx<"u"?function(e){return nx.resolve(null).then(e).catch(VT)}:WS;function VT(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function ix(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),mo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Vl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Vl(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[rc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Vl(e.ownerDocument.body);n=s}while(n);mo(t)}function sx(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function km(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":km(n),t0(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function GT(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[rc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Ti(e.nextSibling),e===null)break}return null}function kT(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ti(e.nextSibling),e===null))return null;return e}function qS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ti(e.nextSibling),e===null))return null;return e}function Xm(e){return e.data==="$?"||e.data==="$~"}function Wm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function XT(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ti(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var qm=null;function ax(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ti(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function rx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function YS(e,t,n){switch(t=_h(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function Vl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);t0(e)}var Ai=new Map,ox=new Set;function vh(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Is=ge.d;ge.d={f:WT,r:qT,D:YT,C:ZT,L:JT,m:KT,X:jT,S:QT,M:$T};function WT(){var e=Is.f(),t=Oh();return e||t}function qT(e){var t=_o(e);t!==null&&t.tag===5&&t.type==="form"?Hy(t):Is.r(e)}var So=typeof document>"u"?null:document;function ZS(e,t,n){var i=So;if(i&&typeof t=="string"&&t){var s=Si(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),ox.has(s)||(ox.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Sn(t,"link",e),dn(t),i.head.appendChild(t)))}}function YT(e){Is.D(e),ZS("dns-prefetch",e,null)}function ZT(e,t){Is.C(e,t),ZS("preconnect",e,t)}function JT(e,t,n){Is.L(e,t,n);var i=So;if(i&&e&&t){var s='link[rel="preload"][as="'+Si(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Si(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Si(n.imageSizes)+'"]')):s+='[href="'+Si(e)+'"]';var a=s;switch(t){case"style":a=po(e);break;case"script":a=Mo(e)}Ai.has(a)||(e=ze({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ai.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(fc(a))||t==="script"&&i.querySelector(dc(a))||(t=i.createElement("link"),Sn(t,"link",e),dn(t),i.head.appendChild(t)))}}function KT(e,t){Is.m(e,t);var n=So;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Si(i)+'"][href="'+Si(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Mo(e)}if(!Ai.has(a)&&(e=ze({rel:"modulepreload",href:e},t),Ai.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(dc(a)))return}i=n.createElement("link"),Sn(i,"link",e),dn(i),n.head.appendChild(i)}}}function QT(e,t,n){Is.S(e,t,n);var i=So;if(i&&e){var s=Qr(i).hoistableStyles,a=po(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(fc(a)))o.loading=5;else{e=ze({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ai.get(a))&&z0(e,n);var l=r=i.createElement("link");dn(l),Sn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Xu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function jT(e,t){Is.X(e,t);var n=So;if(n&&e){var i=Qr(n).hoistableScripts,s=Mo(e),a=i.get(s);a||(a=n.querySelector(dc(s)),a||(e=ze({src:e,async:!0},t),(t=Ai.get(s))&&H0(e,t),a=n.createElement("script"),dn(a),Sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function $T(e,t){Is.M(e,t);var n=So;if(n&&e){var i=Qr(n).hoistableScripts,s=Mo(e),a=i.get(s);a||(a=n.querySelector(dc(s)),a||(e=ze({src:e,async:!0,type:"module"},t),(t=Ai.get(s))&&H0(e,t),a=n.createElement("script"),dn(a),Sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function lx(e,t,n,i){var s=(s=oa.current)?vh(s):null;if(!s)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=po(n.href),n=Qr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=po(n.href);var a=Qr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(fc(e)))&&!a._p&&(r.instance=a,r.state.loading=5),Ai.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ai.set(e,n),a||tA(s,e,n,r.state))),t&&i===null)throw Error(j(528,""));return r}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Mo(n),n=Qr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function po(e){return'href="'+Si(e)+'"'}function fc(e){return'link[rel="stylesheet"]['+e+"]"}function JS(e){return ze({},e,{"data-precedence":e.precedence,precedence:null})}function tA(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Sn(t,"link",n),dn(t),e.head.appendChild(t))}function Mo(e){return'[src="'+Si(e)+'"]'}function dc(e){return"script[async]"+e}function cx(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Si(n.href)+'"]');if(i)return t.instance=i,dn(i),i;var s=ze({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),dn(i),Sn(i,"style",s),Xu(i,n.precedence,e),t.instance=i;case"stylesheet":s=po(n.href);var a=e.querySelector(fc(s));if(a)return t.state.loading|=4,t.instance=a,dn(a),a;i=JS(n),(s=Ai.get(s))&&z0(i,s),a=(e.ownerDocument||e).createElement("link"),dn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Sn(a,"link",i),t.state.loading|=4,Xu(a,n.precedence,e),t.instance=a;case"script":return a=Mo(n.src),(s=e.querySelector(dc(a)))?(t.instance=s,dn(s),s):(i=n,(s=Ai.get(a))&&(i=ze({},n),H0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),dn(s),Sn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Xu(i,n.precedence,e));return t.instance}function Xu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function z0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function H0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wu=null;function ux(e,t,n){if(Wu===null){var i=new Map,s=Wu=new Map;s.set(n,i)}else s=Wu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[rc]||a[vn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function hx(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function eA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function KS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=po(i.href),a=t.querySelector(fc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,dn(a);return}a=t.ownerDocument||t,i=JS(i),(s=Ai.get(s))&&z0(i,s),a=a.createElement("link"),dn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Sn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=xh.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var $p=0;function iA(e,t){return e.stylesheets&&e.count===0&&qu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&qu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&$p===0&&($p=62500*BT());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>$p?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function xh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yh=null;function qu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yh=new Map,t.forEach(sA,e),yh=null,xh.call(e))}function sA(e,t){if(!(t.state.loading&4)){var n=yh.get(e);if(n)var i=n.get(null);else{n=new Map,yh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=xh.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var $l={$$typeof:bs,Provider:null,Consumer:null,_currentValue:Ka,_currentValue2:Ka,_threadCount:0};function aA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tp(0),this.hiddenUpdates=Tp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function QS(e,t,n,i,s,a,r,o,l,c,f,p){return e=new aA(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=$n(3,null,null,t),e.current=a,a.stateNode=e,t=f0(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},m0(a),e}function jS(e){return e?(e=Yr,e):Yr}function $S(e,t,n,i,s,a){s=jS(s),i.context===null?i.context=s:i.pendingContext=s,i=ca(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ua(e,i,t),n!==null&&(qn(n,e,t),Ll(n,e,t))}function fx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function V0(e,t){fx(e,t),(e=e.alternate)&&fx(e,t)}function tM(e){if(e.tag===13||e.tag===31){var t=cr(e,67108864);t!==null&&qn(t,e,67108864),V0(e,67108864)}}function dx(e){if(e.tag===13||e.tag===31){var t=si();t=jm(t);var n=cr(e,t);n!==null&&qn(n,e,t),V0(e,t)}}var Sh=!0;function rA(e,t,n,i){var s=It.T;It.T=null;var a=ge.p;try{ge.p=2,G0(e,t,n,i)}finally{ge.p=a,It.T=s}}function oA(e,t,n,i){var s=It.T;It.T=null;var a=ge.p;try{ge.p=8,G0(e,t,n,i)}finally{ge.p=a,It.T=s}}function G0(e,t,n,i){if(Sh){var s=Ym(i);if(s===null)Qp(e,t,i,Mh,n),px(e,i);else if(cA(s,e,t,n,i))i.stopPropagation();else if(px(e,i),t&4&&-1<lA.indexOf(e)){for(;s!==null;){var a=_o(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ya(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ii(r);o.entanglements[1]|=l,r&=~l}Ki(a),(me&6)===0&&(hh=ei()+500,hc(0,!1))}}break;case 31:case 13:o=cr(a,2),o!==null&&qn(o,a,2),Oh(),V0(a,2)}if(a=Ym(i),a===null&&Qp(e,t,i,Mh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Qp(e,t,i,null,n)}}function Ym(e){return e=n0(e),k0(e)}var Mh=null;function k0(e){if(Mh=null,e=Vr(e),e!==null){var t=nc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=yx(t),e!==null)return e;e=null}else if(n===31){if(e=Sx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Mh=e,null}function eM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J1()){case Tx:return 2;case Ax:return 8;case Qu:case K1:return 32;case wx:return 268435456;default:return 32}default:return 32}}var Zm=!1,da=null,pa=null,ma=null,tc=new Map,ec=new Map,ea=[],lA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function px(e,t){switch(e){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":tc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ec.delete(t.pointerId)}}function Ml(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=_o(t),t!==null&&tM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function cA(e,t,n,i,s){switch(t){case"focusin":return da=Ml(da,e,t,n,i,s),!0;case"dragenter":return pa=Ml(pa,e,t,n,i,s),!0;case"mouseover":return ma=Ml(ma,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return tc.set(a,Ml(tc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,ec.set(a,Ml(ec.get(a)||null,e,t,n,i,s)),!0}return!1}function nM(e){var t=Vr(e.target);if(t!==null){var n=nc(t);if(n!==null){if(t=n.tag,t===13){if(t=yx(n),t!==null){e.blockedOn=t,Q_(e.priority,function(){dx(n)});return}}else if(t===31){if(t=Sx(n),t!==null){e.blockedOn=t,Q_(e.priority,function(){dx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ym(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);fm=i,n.target.dispatchEvent(i),fm=null}else return t=_o(n),t!==null&&tM(t),e.blockedOn=n,!1;t.shift()}return!0}function mx(e,t,n){Yu(e)&&n.delete(t)}function uA(){Zm=!1,da!==null&&Yu(da)&&(da=null),pa!==null&&Yu(pa)&&(pa=null),ma!==null&&Yu(ma)&&(ma=null),tc.forEach(mx),ec.forEach(mx)}function Uu(e,t){e.blockedOn===t&&(e.blockedOn=null,Zm||(Zm=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,uA)))}var Nu=null;function gx(e){Nu!==e&&(Nu=e,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,function(){Nu===e&&(Nu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(k0(i||n)===null)continue;break}var a=_o(n);a!==null&&(e.splice(t,3),t-=3,Cm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function mo(e){function t(l){return Uu(l,e)}da!==null&&Uu(da,e),pa!==null&&Uu(pa,e),ma!==null&&Uu(ma,e),tc.forEach(t),ec.forEach(t);for(var n=0;n<ea.length;n++){var i=ea[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ea.length&&(n=ea[0],n.blockedOn===null);)nM(n),n.blockedOn===null&&ea.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Yn]||null;if(typeof a=="function")r||gx(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Yn]||null)o=r.formAction;else if(k0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),gx(n)}}}function iM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function X0(e){this._internalRoot=e}Fh.prototype.render=X0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=si();$S(n,i,e,t,null,null)};Fh.prototype.unmount=X0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$S(e.current,2,null,e,null,null),Oh(),t[go]=null}};function Fh(e){this._internalRoot=e}Fh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ea.length&&t!==0&&t<ea[n].priority;n++);ea.splice(n,0,e),n===0&&nM(e)}};var _x=vx.version;if(_x!=="19.2.7")throw Error(j(527,_x,"19.2.7"));ge.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=G1(t),e=e!==null?Mx(e):null,e=e===null?null:e.stateNode,e};var hA={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:It,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(bl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!bl.isDisabled&&bl.supportsFiber))try{ic=bl.inject(hA),ni=bl}catch{}var bl;zh.createRoot=function(e,t){if(!xx(e))throw Error(j(299));var n=!1,i="",s=Zy,a=Jy,r=Ky;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=QS(e,1,!1,null,null,n,i,null,s,a,r,iM),e[go]=t.current,F0(e),new X0(t)};zh.hydrateRoot=function(e,t,n){if(!xx(e))throw Error(j(299));var i=!1,s="",a=Zy,r=Jy,o=Ky,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=QS(e,1,!0,t,n??null,i,s,l,a,r,o,iM),t.context=jS(null),n=t.current,i=si(),i=jm(i),s=ca(i),s.callback=null,ua(n,s,i),n=i,t.current.lanes=n,ac(t,n),Ki(t),e[go]=t.current,F0(e),new Fh(t)};zh.version="19.2.7"});var oM=Ui((Q3,rM)=>{"use strict";function aM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aM)}catch(e){console.error(e)}}aM(),rM.exports=sM()});function fA(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function dA(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function wc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function vb(){let e=wc("canvas");return e.style.display="block",e}function Cc(...e){let t="THREE."+e.shift();Go?Go("log",t,...e):console.log(t,...e)}function xb(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Dt(...e){e=xb(e);let t="THREE."+e.shift();if(Go)Go("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Nt(...e){e=xb(e);let t="THREE."+e.shift();if(Go)Go("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Lf(...e){let t=e.join(" ");t in lM||(lM[t]=!0,Dt(...e))}function yb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}function Ca(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[e&255]+An[e>>8&255]+An[e>>16&255]+An[e>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[n&63|128]+An[n>>8&255]+"-"+An[n>>16&255]+An[n>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function oe(e,t,n){return Math.max(t,Math.min(n,e))}function pA(e,t){return(e%t+t)%t}function W0(e,t,n){return(1-n)*e+n*t}function $i(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Ce(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}function mA(){let e={enabled:!0,workingColorSpace:Tc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===xe&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===xe&&(s.r=Ho(s.r),s.g=Ho(s.g),s.b=Ho(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ws?Ac:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Lf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Lf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Tc]:{primaries:t,whitePoint:i,transfer:Ac,toXYZ:uM,fromXYZ:hM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:i,transfer:xe,toXYZ:uM,fromXYZ:hM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),e}function Hs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ho(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function Z0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Of.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}function Q0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function ag(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){fr.fromArray(e,a);let o=s.x*Math.abs(fr.x)+s.y*Math.abs(fr.y)+s.z*Math.abs(fr.z),l=t.dot(fr),c=n.dot(fr),f=i.dot(fr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}function Jh(e,t,n,i,s,a){Po.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(xc.x=a*Po.x-s*Po.y,xc.y=s*Po.x+a*Po.y):xc.copy(Po),e.copy(t),e.x+=xc.x,e.y+=xc.y,e.applyMatrix4(bb)}function RA(e,t,n,i,s,a,r,o){let l;if(t.side===Fn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Vs,o),l===null)return null;sf.copy(o),sf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(sf);return c<n.near||c>n.far?null:{distance:c,point:sf.clone(),object:e}}function af(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,$h),e.getVertexPosition(l,tf),e.getVertexPosition(c,ef);let f=RA(e,t,n,i,$h,tf,ef,EM);if(f){let p=new O;ts.getBarycoord(EM,$h,tf,ef,p),s&&(f.uv=ts.getInterpolatedAttribute(s,o,l,c,p,new Xt)),a&&(f.uv1=ts.getInterpolatedAttribute(a,o,l,c,p,new Xt)),r&&(f.normal=ts.getInterpolatedAttribute(r,o,l,c,p,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};ts.getNormal($h,tf,ef,u.normal),f.face=u,f.barycoord=p}return f}function cf(e,t,n,i,s,a,r){let o=e.geometry.attributes.position;if(zf.fromBufferAttribute(o,s),Hf.fromBufferAttribute(o,a),n.distanceSqToSegment(zf,Hf,pg,CM)>i)return;pg.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(pg);if(!(c<t.near||c>t.far))return{distance:c,point:CM.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}function NM(e,t,n,i,s,a,r){let o=Mg.distanceSqToPoint(e);if(o<n){let l=new O;Mg.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}function Tr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(LM(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(LM(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Dn(e){let t={};for(let n=0;n<e.length;n++){let i=Tr(e[n]);for(let s in i)t[s]=i[s]}return t}function LM(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function IA(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function qg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}function mf(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function zM(e,t){return e.distance-t.distance}function Ag(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)Ag(a[r],t,n,!0)}}function Jg(e,t,n,i){let s=WA(i);switch(n){case kg:return e*t;case hd:return e*t/s.components*s.byteLength;case fd:return e*t/s.components*s.byteLength;case Fa:return e*t*2/s.components*s.byteLength;case dd:return e*t*2/s.components*s.byteLength;case Xg:return e*t*3/s.components*s.byteLength;case Ri:return e*t*4/s.components*s.byteLength;case pd:return e*t*4/s.components*s.byteLength;case Qc:case jc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $c:case tu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gd:case vd:return Math.max(e,16)*Math.max(t,8)/4;case md:case _d:return Math.max(e,8)*Math.max(t,8)/2;case xd:case yd:case Md:case bd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Sd:case eu:case Ed:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Td:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ld:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Id:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Od:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case zd:case Hd:case Vd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Gd:case kd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case nu:case Xd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WA(e){switch(e){case Jn:case zg:return{byteLength:1,components:1};case tl:case Hg:case cs:return{byteLength:2,components:1};case cd:case ud:return{byteLength:2,components:4};case Gi:case ld:case Ci:return{byteLength:4,components:1};case Vg:case Gg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}var HM,Cg,VM,Zc,GM,$o,Vs,Fn,zn,ls,gr,Xs,Rg,Dg,kM,Ra,XM,WM,qM,YM,ZM,JM,KM,QM,yf,Sf,jM,$M,tb,eb,nb,ib,sb,ab,rb,Mf,bf,Ef,_r,Tf,Af,wf,Cf,sd,ob,lb,Vi,Ug,Ng,Lg,Ig,Og,Pg,Bg,Fg,Oa,Er,ad,rd,Jc,Rf,es,Df,gn,cb,Kc,bn,od,Pa,Jn,zg,Hg,tl,ld,Gi,Ci,cs,cd,ud,el,Vg,Gg,kg,Xg,Ri,ns,Ba,hd,fd,Fa,dd,pd,Qc,jc,$c,tu,md,gd,_d,vd,xd,yd,Sd,Md,bd,eu,Ed,Td,Ad,wd,Cd,Rd,Dd,Ud,Nd,Ld,Id,Od,Pd,Bd,Fd,zd,Hd,Vd,Gd,kd,nu,Xd,Ec,Uf,vf,_g,vg,xg,yg,ub,Wd,hb,Ws,ci,Tc,Ac,xe,mr,Sg,fb,db,pb,qd,mb,gb,Yd,_b,Nf,Wg,Fi,Vo,lM,Go,Sb,is,An,xf,If,Xt,ss,O,q0,cM,zt,Y0,uM,hM,se,bo,Of,gA,ko,_A,J0,Bn,Ye,Pf,hi,Rc,Bf,Te,Eo,Oi,vA,xA,Ma,Hh,oi,fM,dM,Gs,Xo,yA,pM,To,Os,Vh,pc,SA,MA,mM,gM,_M,vM,bA,Ao,K0,$e,ui,EA,Wo,Mb,ba,Gh,Ht,wn,Dc,Uc,Pi,Ps,j0,Bs,wo,Co,xM,$0,tg,eg,ng,ig,sg,ts,as,Fs,Bi,kh,Ro,Do,Uo,Ea,Ta,hr,mc,Xh,Wh,fr,an,qh,TA,rn,Nc,Lc,Oe,AA,gc,rg,rs,wA,wi,og,No,li,_c,mn,Ze,Ff,Pn,Ic,CA,zi,vr,Lo,vc,Io,Oo,Po,xc,bb,Yh,yc,Zh,yM,lg,SM,qo,zs,cg,Kh,Aa,ug,Qh,hg,xr,Cn,MM,dr,jh,bM,$h,tf,ef,fg,nf,EM,sf,ce,Oc,Pc,Bo,TM,rf,AM,DA,Sc,Mc,Bc,dg,UA,NA,ji,pr,LA,of,Yo,os,zf,Hf,wM,bc,lf,pg,CM,Zo,RM,DM,Da,Ua,UM,Mg,uf,hf,yr,Fc,Jo,ks,Vf,zc,Rn,Sr,ff,df,mg,pf,Mr,Hi,Hc,Ko,Eb,OA,PA,fi,Gf,di,kf,Xf,Na,Wf,qf,Yf,Zf,pi,La,Jf,Kf,Qf,Vc,Ia,jf,$f,Tb,td,br,Gc,gg,IM,OM,ed,gf,_f,Qi,kc,wa,PM,BM,Mn,bg,Xc,Qo,Eg,jo,Wc,Fo,zo,nd,id,Yg,BA,Zg,FA,zA,HA,VA,GA,kA,XA,Tg,He,j3,FM,qc,wg,Yc,Kg=ap(()=>{HM=0,Cg=1,VM=2,Zc=1,GM=2,$o=3,Vs=0,Fn=1,zn=2,ls=0,gr=1,Xs=2,Rg=3,Dg=4,kM=5,Ra=100,XM=101,WM=102,qM=103,YM=104,ZM=200,JM=201,KM=202,QM=203,yf=204,Sf=205,jM=206,$M=207,tb=208,eb=209,nb=210,ib=211,sb=212,ab=213,rb=214,Mf=0,bf=1,Ef=2,_r=3,Tf=4,Af=5,wf=6,Cf=7,sd=0,ob=1,lb=2,Vi=0,Ug=1,Ng=2,Lg=3,Ig=4,Og=5,Pg=6,Bg=7,Fg=300,Oa=301,Er=302,ad=303,rd=304,Jc=306,Rf=1e3,es=1001,Df=1002,gn=1003,cb=1004,Kc=1005,bn=1006,od=1007,Pa=1008,Jn=1009,zg=1010,Hg=1011,tl=1012,ld=1013,Gi=1014,Ci=1015,cs=1016,cd=1017,ud=1018,el=1020,Vg=35902,Gg=35899,kg=1021,Xg=1022,Ri=1023,ns=1026,Ba=1027,hd=1028,fd=1029,Fa=1030,dd=1031,pd=1033,Qc=33776,jc=33777,$c=33778,tu=33779,md=35840,gd=35841,_d=35842,vd=35843,xd=36196,yd=37492,Sd=37496,Md=37488,bd=37489,eu=37490,Ed=37491,Td=37808,Ad=37809,wd=37810,Cd=37811,Rd=37812,Dd=37813,Ud=37814,Nd=37815,Ld=37816,Id=37817,Od=37818,Pd=37819,Bd=37820,Fd=37821,zd=36492,Hd=36494,Vd=36495,Gd=36283,kd=36284,nu=36285,Xd=36286,Ec=2300,Uf=2301,vf=2302,_g=2303,vg=2400,xg=2401,yg=2402,ub=3200,Wd=0,hb=1,Ws="",ci="srgb",Tc="srgb-linear",Ac="linear",xe="srgb",mr=7680,Sg=519,fb=512,db=513,pb=514,qd=515,mb=516,gb=517,Yd=518,_b=519,Nf=35044,Wg="300 es",Fi=2e3,Vo=2001;lM={},Go=null;Sb={[Mf]:bf,[Ef]:wf,[Tf]:Cf,[_r]:Af,[bf]:Mf,[wf]:Ef,[Cf]:Tf,[Af]:_r},is=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xf=Math.PI/180,If=180/Math.PI;Xt=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ss=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],_=a[r+2],S=a[r+3];if(p!==S||l!==u||c!==d||f!==_){let g=l*u+c*d+f*_+p*S;g<0&&(u=-u,d=-d,_=-_,S=-S,g=-g);let h=1-o;if(g<.9995){let m=Math.acos(g),x=Math.sin(m);h=Math.sin(h*m)/x,o=Math.sin(o*m)/x,l=l*h+u*o,c=c*h+d*o,f=f*h+_*o,p=p*h+S*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+_*o,p=p*h+S*o;let m=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=m,c*=m,f*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],_=a[r+3];return t[n]=o*_+f*p+l*d-c*u,t[n+1]=l*_+f*u+c*p-o*d,t[n+2]=c*_+f*d+o*u-l*p,t[n+3]=f*_-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p-u*d*_;break;case"YXZ":this._x=u*f*p+c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p+u*d*_;break;case"ZXY":this._x=u*f*p-c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p-u*d*_;break;case"ZYX":this._x=u*f*p-c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p+u*d*_;break;case"YZX":this._x=u*f*p+c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p-u*d*_;break;case"XZY":this._x=u*f*p-c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p+u*d*_;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(cM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(cM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return q0.copy(this).projectOnVector(t),this.sub(q0)}reflect(t){return this.sub(q0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},q0=new O,cM=new ss,zt=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],_=i[8],S=s[0],g=s[3],h=s[6],m=s[1],x=s[4],M=s[7],w=s[2],E=s[5],C=s[8];return a[0]=r*S+o*m+l*w,a[3]=r*g+o*x+l*E,a[6]=r*h+o*M+l*C,a[1]=c*S+f*m+p*w,a[4]=c*g+f*x+p*E,a[7]=c*h+f*M+p*C,a[2]=u*S+d*m+_*w,a[5]=u*g+d*x+_*E,a[8]=u*h+d*M+_*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,_=n*p+i*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=p*S,t[1]=(s*c-f*i)*S,t[2]=(o*i-s*r)*S,t[3]=u*S,t[4]=(f*n-s*l)*S,t[5]=(s*a-o*n)*S,t[6]=d*S,t[7]=(i*l-c*n)*S,t[8]=(r*n-i*a)*S,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Y0.makeScale(t,n)),this}rotate(t){return this.premultiply(Y0.makeRotation(-t)),this}translate(t,n){return this.premultiply(Y0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Y0=new zt,uM=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hM=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se=mA();Of=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{bo===void 0&&(bo=wc("canvas")),bo.width=t.width,bo.height=t.height;let s=bo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=bo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=wc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Hs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hs(n[i]/255)*255):n[i]=Hs(n[i]);return{data:n,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gA=0,ko=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=Ca(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Z0(s[r].image)):a.push(Z0(s[r]))}else a=Z0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};_A=0,J0=new O,Bn=class e extends is{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=es,s=es,a=bn,r=Pa,o=Ri,l=Jn,c=e.DEFAULT_ANISOTROPY,f=Ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=Ca(),this.name="",this.source=new ko(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(J0).x}get height(){return this.source.getSize(J0).y}get depth(){return this.source.getSize(J0).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Dt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rf:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case Df:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rf:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case Df:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Fg;Bn.DEFAULT_ANISOTROPY=1;Ye=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],_=l[9],S=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+S)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,M=(d+1)/2,w=(h+1)/2,E=(f+u)/4,C=(p+S)/4,v=(_+g)/4;return x>M&&x>w?x<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(x),s=E/i,a=C/i):M>w?M<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),i=E/s,a=v/s):w<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(w),i=C/a,s=v/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-_)*(g-_)+(p-S)*(p-S)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(p-S)/m,this.z=(u-f)/m,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this.w=oe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this.w=oe(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pf=class extends is{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ye(0,0,t,n),this.scissorTest=!1,this.viewport=new Ye(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Bn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new ko(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Pf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Rc=class extends Bn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Bf=class extends Bn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Te=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,_,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,_,S,g)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,_,S,g){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=_,h[11]=S,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Eo.setFromMatrixColumn(t,0).length(),a=1/Eo.setFromMatrixColumn(t,1).length(),r=1/Eo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,_=o*f,S=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+_*c,n[5]=u-S*c,n[9]=-o*l,n[2]=S-u*c,n[6]=_+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,_=c*f,S=c*p;n[0]=u+S*o,n[4]=_*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-_,n[6]=S+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,_=c*f,S=c*p;n[0]=u-S*o,n[4]=-r*p,n[8]=_+d*o,n[1]=d+_*o,n[5]=r*f,n[9]=S-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,_=o*f,S=o*p;n[0]=l*f,n[4]=_*c-d,n[8]=u*c+S,n[1]=l*p,n[5]=S*c+u,n[9]=d*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,_=o*l,S=o*c;n[0]=l*f,n[4]=S-u*p,n[8]=_*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+_,n[10]=u-S*p}else if(t.order==="XZY"){let u=r*l,d=r*c,_=o*l,S=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+S,n[5]=r*f,n[9]=d*p-_,n[2]=_*p-d,n[6]=o*f,n[10]=S*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vA,t,xA)}lookAt(t,n,i){let s=this.elements;return oi.subVectors(t,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Ma.crossVectors(i,oi),Ma.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Ma.crossVectors(i,oi)),Ma.normalize(),Hh.crossVectors(oi,Ma),s[0]=Ma.x,s[4]=Hh.x,s[8]=oi.x,s[1]=Ma.y,s[5]=Hh.y,s[9]=oi.y,s[2]=Ma.z,s[6]=Hh.z,s[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],_=i[2],S=i[6],g=i[10],h=i[14],m=i[3],x=i[7],M=i[11],w=i[15],E=s[0],C=s[4],v=s[8],A=s[12],D=s[1],R=s[5],P=s[9],V=s[13],W=s[2],N=s[6],B=s[10],F=s[14],st=s[3],et=s[7],lt=s[11],Tt=s[15];return a[0]=r*E+o*D+l*W+c*st,a[4]=r*C+o*R+l*N+c*et,a[8]=r*v+o*P+l*B+c*lt,a[12]=r*A+o*V+l*F+c*Tt,a[1]=f*E+p*D+u*W+d*st,a[5]=f*C+p*R+u*N+d*et,a[9]=f*v+p*P+u*B+d*lt,a[13]=f*A+p*V+u*F+d*Tt,a[2]=_*E+S*D+g*W+h*st,a[6]=_*C+S*R+g*N+h*et,a[10]=_*v+S*P+g*B+h*lt,a[14]=_*A+S*V+g*F+h*Tt,a[3]=m*E+x*D+M*W+w*st,a[7]=m*C+x*R+M*N+w*et,a[11]=m*v+x*P+M*B+w*lt,a[15]=m*A+x*V+M*F+w*Tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],_=t[3],S=t[7],g=t[11],h=t[15],m=l*d-c*u,x=o*d-c*p,M=o*u-l*p,w=r*d-c*f,E=r*u-l*f,C=r*p-o*f;return n*(S*m-g*x+h*M)-i*(_*m-g*w+h*E)+s*(_*x-S*w+h*C)-a*(_*M-S*E+g*C)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],_=t[12],S=t[13],g=t[14],h=t[15],m=n*o-i*r,x=n*l-s*r,M=n*c-a*r,w=i*l-s*o,E=i*c-a*o,C=s*c-a*l,v=f*S-p*_,A=f*g-u*_,D=f*h-d*_,R=p*g-u*S,P=p*h-d*S,V=u*h-d*g,W=m*V-x*P+M*R+w*D-E*A+C*v;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/W;return t[0]=(o*V-l*P+c*R)*N,t[1]=(s*P-i*V-a*R)*N,t[2]=(S*C-g*E+h*w)*N,t[3]=(u*E-p*C-d*w)*N,t[4]=(l*D-r*V-c*A)*N,t[5]=(n*V-s*D+a*A)*N,t[6]=(g*M-_*C-h*x)*N,t[7]=(f*C-u*M+d*x)*N,t[8]=(r*P-o*D+c*v)*N,t[9]=(i*D-n*P-a*v)*N,t[10]=(_*E-S*M+h*m)*N,t[11]=(p*M-f*E-d*m)*N,t[12]=(o*A-r*R-l*v)*N,t[13]=(n*R-i*A+s*v)*N,t[14]=(S*x-_*w-g*m)*N,t[15]=(f*w-p*x+u*m)*N,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,_=a*p,S=r*f,g=r*p,h=o*p,m=l*c,x=l*f,M=l*p,w=i.x,E=i.y,C=i.z;return s[0]=(1-(S+h))*w,s[1]=(d+M)*w,s[2]=(_-x)*w,s[3]=0,s[4]=(d-M)*E,s[5]=(1-(u+h))*E,s[6]=(g+m)*E,s[7]=0,s[8]=(_+x)*C,s[9]=(g-m)*C,s[10]=(1-(u+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinant();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Eo.set(s[0],s[1],s[2]).length(),o=Eo.set(s[4],s[5],s[6]).length(),l=Eo.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Oi.copy(this);let c=1/r,f=1/o,p=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=f,Oi.elements[5]*=f,Oi.elements[6]*=f,Oi.elements[8]*=p,Oi.elements[9]*=p,Oi.elements[10]*=p,n.setFromRotationMatrix(Oi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Fi,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),_,S;if(l)_=a/(r-a),S=r*a/(r-a);else if(o===Fi)_=-(r+a)/(r-a),S=-2*r*a/(r-a);else if(o===Vo)_=-r/(r-a),S=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Fi,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),_,S;if(l)_=1/(r-a),S=r/(r-a);else if(o===Fi)_=-2/(r-a),S=-(r+a)/(r-a);else if(o===Vo)_=-1/(r-a),S=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Eo=new O,Oi=new Te,vA=new O(0,0,0),xA=new O(1,1,1),Ma=new O,Hh=new O,oi=new O,fM=new Te,dM=new ss,Gs=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-oe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-oe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return fM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return dM.setFromEuler(this),this.setFromQuaternion(dM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gs.DEFAULT_ORDER="XYZ";Xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yA=0,pM=new O,To=new ss,Os=new Te,Vh=new O,pc=new O,SA=new O,MA=new ss,mM=new O(1,0,0),gM=new O(0,1,0),_M=new O(0,0,1),vM={type:"added"},bA={type:"removed"},Ao={type:"childadded",child:null},K0={type:"childremoved",child:null},$e=class e extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new O,n=new Gs,i=new ss,s=new O(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new zt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return To.setFromAxisAngle(t,n),this.quaternion.multiply(To),this}rotateOnWorldAxis(t,n){return To.setFromAxisAngle(t,n),this.quaternion.premultiply(To),this}rotateX(t){return this.rotateOnAxis(mM,t)}rotateY(t){return this.rotateOnAxis(gM,t)}rotateZ(t){return this.rotateOnAxis(_M,t)}translateOnAxis(t,n){return pM.copy(t).applyQuaternion(this.quaternion),this.position.add(pM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(mM,t)}translateY(t){return this.translateOnAxis(gM,t)}translateZ(t){return this.translateOnAxis(_M,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Os.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Vh.copy(t):Vh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),pc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Os.lookAt(pc,Vh,this.up):Os.lookAt(Vh,pc,this.up),this.quaternion.setFromRotationMatrix(Os),s&&(Os.extractRotation(s.matrixWorld),To.setFromRotationMatrix(Os),this.quaternion.premultiply(To.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vM),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(bA),K0.child=t,this.dispatchEvent(K0),K0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Os.multiply(t.parent.matrixWorld)),t.applyMatrix4(Os),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vM),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pc,t,SA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pc,MA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};$e.DEFAULT_UP=new O(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ui=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},EA={type:"move"},Wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let S of t.hand.values()){let g=n.getJointPose(S,i),h=this._getHandJoint(c,S);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(EA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ui;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Mb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ba={h:0,s:0,l:0},Gh={h:0,s:0,l:0};Ht=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=se.workingColorSpace){return this.r=t,this.g=n,this.b=i,se.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=se.workingColorSpace){if(t=pA(t,1),n=oe(n,0,1),i=oe(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Q0(r,a,t+1/3),this.g=Q0(r,a,t),this.b=Q0(r,a,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,n=ci){function i(a){a!==void 0&&parseFloat(a)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ci){let i=Mb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=Ho(t.r),this.g=Ho(t.g),this.b=Ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return se.workingToColorSpace(wn.copy(this),t),Math.round(oe(wn.r*255,0,255))*65536+Math.round(oe(wn.g*255,0,255))*256+Math.round(oe(wn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=se.workingColorSpace){se.workingToColorSpace(wn.copy(this),n);let i=wn.r,s=wn.g,a=wn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=se.workingColorSpace){return se.workingToColorSpace(wn.copy(this),n),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=ci){se.workingToColorSpace(wn.copy(this),t);let n=wn.r,i=wn.g,s=wn.b;return t!==ci?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ba),this.setHSL(ba.h+t,ba.s+n,ba.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ba),t.getHSL(Gh);let i=W0(ba.h,Gh.h,n),s=W0(ba.s,Gh.s,n),a=W0(ba.l,Gh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Ht;Ht.NAMES=Mb;Dc=class e{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=n}clone(){return new e(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Uc=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gs,this.environmentIntensity=1,this.environmentRotation=new Gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Pi=new O,Ps=new O,j0=new O,Bs=new O,wo=new O,Co=new O,xM=new O,$0=new O,tg=new O,eg=new O,ng=new Ye,ig=new Ye,sg=new Ye,ts=class e{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Pi.subVectors(t,n),s.cross(Pi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Pi.subVectors(s,n),Ps.subVectors(i,n),j0.subVectors(t,n);let r=Pi.dot(Pi),o=Pi.dot(Ps),l=Pi.dot(j0),c=Ps.dot(Ps),f=Ps.dot(j0),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,_=(r*f-o*l)*u;return a.set(1-d-_,_,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Bs)===null?!1:Bs.x>=0&&Bs.y>=0&&Bs.x+Bs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Bs.x),l.addScaledVector(r,Bs.y),l.addScaledVector(o,Bs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return ng.setScalar(0),ig.setScalar(0),sg.setScalar(0),ng.fromBufferAttribute(t,n),ig.fromBufferAttribute(t,i),sg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(ng,a.x),r.addScaledVector(ig,a.y),r.addScaledVector(sg,a.z),r}static isFrontFacing(t,n,i,s){return Pi.subVectors(i,n),Ps.subVectors(t,n),Pi.cross(Ps).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ps.subVectors(this.a,this.b),Pi.cross(Ps).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;wo.subVectors(s,i),Co.subVectors(a,i),$0.subVectors(t,i);let l=wo.dot($0),c=Co.dot($0);if(l<=0&&c<=0)return n.copy(i);tg.subVectors(t,s);let f=wo.dot(tg),p=Co.dot(tg);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(wo,r);eg.subVectors(t,a);let d=wo.dot(eg),_=Co.dot(eg);if(_>=0&&d<=_)return n.copy(a);let S=d*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Co,o);let g=f*_-d*p;if(g<=0&&p-f>=0&&d-_>=0)return xM.subVectors(a,s),o=(p-f)/(p-f+(d-_)),n.copy(s).addScaledVector(xM,o);let h=1/(g+S+u);return r=S*h,o=u*h,n.copy(i).addScaledVector(wo,r).addScaledVector(Co,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},as=class{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Bi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Bi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Bi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Bi):Bi.fromBufferAttribute(a,r),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kh.copy(i.boundingBox)),kh.applyMatrix4(t.matrixWorld),this.union(kh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mc),Xh.subVectors(this.max,mc),Ro.subVectors(t.a,mc),Do.subVectors(t.b,mc),Uo.subVectors(t.c,mc),Ea.subVectors(Do,Ro),Ta.subVectors(Uo,Do),hr.subVectors(Ro,Uo);let n=[0,-Ea.z,Ea.y,0,-Ta.z,Ta.y,0,-hr.z,hr.y,Ea.z,0,-Ea.x,Ta.z,0,-Ta.x,hr.z,0,-hr.x,-Ea.y,Ea.x,0,-Ta.y,Ta.x,0,-hr.y,hr.x,0];return!ag(n,Ro,Do,Uo,Xh)||(n=[1,0,0,0,1,0,0,0,1],!ag(n,Ro,Do,Uo,Xh))?!1:(Wh.crossVectors(Ea,Ta),n=[Wh.x,Wh.y,Wh.z],ag(n,Ro,Do,Uo,Xh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fs=[new O,new O,new O,new O,new O,new O,new O,new O],Bi=new O,kh=new as,Ro=new O,Do=new O,Uo=new O,Ea=new O,Ta=new O,hr=new O,mc=new O,Xh=new O,Wh=new O,fr=new O;an=new O,qh=new Xt,TA=0,rn=class extends is{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Nf,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qh.fromBufferAttribute(this,n),qh.applyMatrix3(t),this.setXY(n,qh.x,qh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix3(t),this.setXYZ(n,an.x,an.y,an.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(t),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(t),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.transformDirection(t),this.setXYZ(n,an.x,an.y,an.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=$i(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=$i(n,this.array)),n}setX(t,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=$i(n,this.array)),n}setY(t,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=$i(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=$i(n,this.array)),n}setW(t,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Ce(n,this.array),i=Ce(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Ce(n,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Ce(n,this.array),i=Ce(i,this.array),s=Ce(s,this.array),a=Ce(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nf&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},Nc=class extends rn{constructor(t,n,i){super(new Uint16Array(t),n,i)}},Lc=class extends rn{constructor(t,n,i){super(new Uint32Array(t),n,i)}},Oe=class extends rn{constructor(t,n,i){super(new Float32Array(t),n,i)}},AA=new as,gc=new O,rg=new O,rs=class{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):AA.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gc.subVectors(t,this.center);let n=gc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(gc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gc.copy(t.center).add(rg)),this.expandByPoint(gc.copy(t.center).sub(rg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wA=0,wi=new Te,og=new $e,No=new O,li=new as,_c=new as,mn=new O,Ze=class e extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fA(t)?Lc:Nc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new zt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,n,i){return wi.makeTranslation(t,n,i),this.applyMatrix4(wi),this}scale(t,n,i){return wi.makeScale(t,n,i),this.applyMatrix4(wi),this}lookAt(t){return og.lookAt(t),og.updateMatrix(),this.applyMatrix4(og.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];li.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];_c.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(li.min,_c.min),li.expandByPoint(mn),mn.addVectors(li.max,_c.max),li.expandByPoint(mn)):(li.expandByPoint(_c.min),li.expandByPoint(_c.max))}li.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)mn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(mn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)mn.fromBufferAttribute(o,c),l&&(No.fromBufferAttribute(t,c),mn.add(No)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new O,l[v]=new O;let c=new O,f=new O,p=new O,u=new Xt,d=new Xt,_=new Xt,S=new O,g=new O;function h(v,A,D){c.fromBufferAttribute(i,v),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,D),u.fromBufferAttribute(a,v),d.fromBufferAttribute(a,A),_.fromBufferAttribute(a,D),f.sub(c),p.sub(c),d.sub(u),_.sub(u);let R=1/(d.x*_.y-_.x*d.y);isFinite(R)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(p,-d.y).multiplyScalar(R),g.copy(p).multiplyScalar(d.x).addScaledVector(f,-_.x).multiplyScalar(R),o[v].add(S),o[A].add(S),o[D].add(S),l[v].add(g),l[A].add(g),l[D].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let v=0,A=m.length;v<A;++v){let D=m[v],R=D.start,P=D.count;for(let V=R,W=R+P;V<W;V+=3)h(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let x=new O,M=new O,w=new O,E=new O;function C(v){w.fromBufferAttribute(s,v),E.copy(w);let A=o[v];x.copy(A),x.sub(w.multiplyScalar(w.dot(A))).normalize(),M.crossVectors(E,A);let R=M.dot(l[v])<0?-1:1;r.setXYZW(v,x.x,x.y,x.z,R)}for(let v=0,A=m.length;v<A;++v){let D=m[v],R=D.start,P=D.count;for(let V=R,W=R+P;V<W;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new O,a=new O,r=new O,o=new O,l=new O,c=new O,f=new O,p=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),S=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,g),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)mn.fromBufferAttribute(t,n),mn.normalize(),t.setXYZ(n,mn.x,mn.y,mn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,_=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*f;for(let h=0;h<f;h++)u[_++]=c[d++]}return new rn(u,f,p)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ff=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Nf,this.updateRanges=[],this.version=0,this.uuid=Ca()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ca()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ca()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pn=new O,Ic=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Pn.fromBufferAttribute(this,n),Pn.applyMatrix4(t),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Pn.fromBufferAttribute(this,n),Pn.applyNormalMatrix(t),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Pn.fromBufferAttribute(this,n),Pn.transformDirection(t),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=$i(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=$i(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=$i(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=$i(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=$i(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ce(n,this.array),i=Ce(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ce(n,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ce(n,this.array),i=Ce(i,this.array),s=Ce(s,this.array),a=Ce(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){Cc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return new rn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Cc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},CA=0,zi=class extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=gr,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=Ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Dt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Vs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==Sf&&(i.blendDst=this.blendDst),this.blendEquation!==Ra&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vr=class extends zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vc=new O,Io=new O,Oo=new O,Po=new Xt,xc=new Xt,bb=new Te,Yh=new O,yc=new O,Zh=new O,yM=new Xt,lg=new Xt,SM=new Xt,qo=class extends $e{constructor(t=new vr){if(super(),this.isSprite=!0,this.type="Sprite",Lo===void 0){Lo=new Ze;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ff(n,5);Lo.setIndex([0,1,2,0,2,3]),Lo.setAttribute("position",new Ic(i,3,0,!1)),Lo.setAttribute("uv",new Ic(i,2,3,!1))}this.geometry=Lo,this.material=t,this.center=new Xt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Io.setFromMatrixScale(this.matrixWorld),bb.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Oo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Io.multiplyScalar(-Oo.z);let i=this.material.rotation,s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));let r=this.center;Jh(Yh.set(-.5,-.5,0),Oo,r,Io,s,a),Jh(yc.set(.5,-.5,0),Oo,r,Io,s,a),Jh(Zh.set(.5,.5,0),Oo,r,Io,s,a),yM.set(0,0),lg.set(1,0),SM.set(1,1);let o=t.ray.intersectTriangle(Yh,yc,Zh,!1,vc);if(o===null&&(Jh(yc.set(-.5,.5,0),Oo,r,Io,s,a),lg.set(0,1),o=t.ray.intersectTriangle(Yh,Zh,yc,!1,vc),o===null))return;let l=t.ray.origin.distanceTo(vc);l<t.near||l>t.far||n.push({distance:l,point:vc.clone(),uv:ts.getInterpolation(vc,Yh,yc,Zh,yM,lg,SM,new Xt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};zs=new O,cg=new O,Kh=new O,Aa=new O,ug=new O,Qh=new O,hg=new O,xr=class{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=zs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(zs.copy(this.origin).addScaledVector(this.direction,n),zs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){cg.copy(t).add(n).multiplyScalar(.5),Kh.copy(n).sub(t).normalize(),Aa.copy(this.origin).sub(cg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Kh),o=Aa.dot(this.direction),l=-Aa.dot(Kh),c=Aa.lengthSq(),f=Math.abs(1-r*r),p,u,d,_;if(f>0)if(p=r*l-o,u=r*o-l,_=a*f,p>=0)if(u>=-_)if(u<=_){let S=1/f;p*=S,u*=S,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(cg).addScaledVector(Kh,u),d}intersectSphere(t,n){zs.subVectors(t.center,this.origin);let i=zs.dot(this.direction),s=zs.dot(zs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,zs)!==null}intersectTriangle(t,n,i,s,a){ug.subVectors(n,t),Qh.subVectors(i,t),hg.crossVectors(ug,Qh);let r=this.direction.dot(hg),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Aa.subVectors(this.origin,t);let l=o*this.direction.dot(Qh.crossVectors(Aa,Qh));if(l<0)return null;let c=o*this.direction.dot(ug.cross(Aa));if(c<0||l+c>r)return null;let f=-o*Aa.dot(hg);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gs,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},MM=new Te,dr=new xr,jh=new rs,bM=new O,$h=new O,tf=new O,ef=new O,fg=new O,nf=new O,EM=new O,sf=new O,ce=class extends $e{constructor(t=new Ze,n=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){nf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(fg.fromBufferAttribute(p,t),r?nf.addScaledVector(fg,f):nf.addScaledVector(fg.sub(n),f))}n.add(nf)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jh.copy(i.boundingSphere),jh.applyMatrix4(a),dr.copy(t.ray).recast(t.near),!(jh.containsPoint(dr.origin)===!1&&(dr.intersectSphere(jh,bM)===null||dr.origin.distanceToSquared(bM)>(t.far-t.near)**2))&&(MM.copy(a).invert(),dr.copy(t.ray).applyMatrix4(MM),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,dr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,S=u.length;_<S;_++){let g=u[_],h=r[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=m,w=x;M<w;M+=3){let E=o.getX(M),C=o.getX(M+1),v=o.getX(M+2);s=af(this,h,t,i,c,f,p,E,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let g=_,h=S;g<h;g+=3){let m=o.getX(g),x=o.getX(g+1),M=o.getX(g+2);s=af(this,r,t,i,c,f,p,m,x,M),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,S=u.length;_<S;_++){let g=u[_],h=r[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=m,w=x;M<w;M+=3){let E=M,C=M+1,v=M+2;s=af(this,h,t,i,c,f,p,E,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let g=_,h=S;g<h;g+=3){let m=g,x=g+1,M=g+2;s=af(this,r,t,i,c,f,p,m,x,M),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};Oc=class extends Bn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=gn,f=gn,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pc=class extends rn{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bo=new Te,TM=new Te,rf=[],AM=new as,DA=new Te,Sc=new ce,Mc=new rs,Bc=class extends ce{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Pc(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,DA)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new as),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Bo),AM.copy(t.boundingBox).applyMatrix4(Bo),this.boundingBox.union(AM)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Bo),Mc.copy(t.boundingSphere).applyMatrix4(Bo),this.boundingSphere.union(Mc)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,n){let i=this.matrixWorld,s=this.count;if(Sc.geometry=this.geometry,Sc.material=this.material,Sc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mc.copy(this.boundingSphere),Mc.applyMatrix4(i),t.ray.intersectsSphere(Mc)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Bo),TM.multiplyMatrices(i,Bo),Sc.matrixWorld=TM,Sc.raycast(t,rf);for(let r=0,o=rf.length;r<o;r++){let l=rf[r];l.instanceId=a,l.object=this,n.push(l)}rf.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new Pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Oc(new Float32Array(s*this.count),s,this.count,hd,Ci));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},dg=new O,UA=new O,NA=new zt,ji=class{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=dg.subVectors(i,n).cross(UA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(dg),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||NA.getNormalMatrix(t),s=this.coplanarPoint(dg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},pr=new rs,LA=new Xt(.5,.5),of=new O,Yo=class{constructor(t=new ji,n=new ji,i=new ji,s=new ji,a=new ji,r=new ji){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Fi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],_=a[8],S=a[9],g=a[10],h=a[11],m=a[12],x=a[13],M=a[14],w=a[15];if(s[0].setComponents(c-r,d-f,h-_,w-m).normalize(),s[1].setComponents(c+r,d+f,h+_,w+m).normalize(),s[2].setComponents(c+o,d+p,h+S,w+x).normalize(),s[3].setComponents(c-o,d-p,h-S,w-x).normalize(),i)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(c-l,d-u,h-g,w-M).normalize();else if(s[4].setComponents(c-l,d-u,h-g,w-M).normalize(),n===Fi)s[5].setComponents(c+l,d+u,h+g,w+M).normalize();else if(n===Vo)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){pr.center.set(0,0,0);let n=LA.distanceTo(t.center);return pr.radius=.7071067811865476+n,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(of.x=s.normal.x>0?t.max.x:t.min.x,of.y=s.normal.y>0?t.max.y:t.min.y,of.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(of)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},os=class extends zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},zf=new O,Hf=new O,wM=new Te,bc=new xr,lf=new rs,pg=new O,CM=new O,Zo=class extends $e{constructor(t=new Ze,n=new os){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)zf.fromBufferAttribute(n,s-1),Hf.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=zf.distanceTo(Hf);t.setAttribute("lineDistance",new Oe(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lf.copy(i.boundingSphere),lf.applyMatrix4(s),lf.radius+=a,t.ray.intersectsSphere(lf)===!1)return;wM.copy(s).invert(),bc.copy(t.ray).applyMatrix4(wM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){let d=Math.max(0,r.start),_=Math.min(f.count,r.start+r.count);for(let S=d,g=_-1;S<g;S+=c){let h=f.getX(S),m=f.getX(S+1),x=cf(this,t,bc,l,h,m,S);x&&n.push(x)}if(this.isLineLoop){let S=f.getX(_-1),g=f.getX(d),h=cf(this,t,bc,l,S,g,_-1);h&&n.push(h)}}else{let d=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let S=d,g=_-1;S<g;S+=c){let h=cf(this,t,bc,l,S,S+1,S);h&&n.push(h)}if(this.isLineLoop){let S=cf(this,t,bc,l,_-1,d,_-1);S&&n.push(S)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};RM=new O,DM=new O,Da=class extends Zo{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let s=0,a=n.count;s<a;s+=2)RM.fromBufferAttribute(n,s),DM.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+RM.distanceTo(DM);t.setAttribute("lineDistance",new Oe(i,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ua=class extends zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},UM=new Te,Mg=new xr,uf=new rs,hf=new O,yr=class extends $e{constructor(t=new Ze,n=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uf.copy(i.boundingSphere),uf.applyMatrix4(s),uf.radius+=a,t.ray.intersectsSphere(uf)===!1)return;UM.copy(s).invert(),Mg.copy(t.ray).applyMatrix4(UM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let u=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let _=u,S=d;_<S;_++){let g=c.getX(_);hf.fromBufferAttribute(p,g),NM(hf,g,l,s,t,n,this)}}else{let u=Math.max(0,r.start),d=Math.min(p.count,r.start+r.count);for(let _=u,S=d;_<S;_++)hf.fromBufferAttribute(p,_),NM(hf,_,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};Fc=class extends Bn{constructor(t=[],n=Oa,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Jo=class extends Bn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ks=class extends Bn{constructor(t,n,i=Gi,s,a,r,o=gn,l=gn,c,f=ns,p=1){if(f!==ns&&f!==Ba)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ko(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Vf=class extends ks{constructor(t,n=Gi,i=Oa,s,a,r=gn,o=gn,l,c=ns){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zc=class extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Rn=class e extends Ze{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(p,2));function _(S,g,h,m,x,M,w,E,C,v,A){let D=M/C,R=w/v,P=M/2,V=w/2,W=E/2,N=C+1,B=v+1,F=0,st=0,et=new O;for(let lt=0;lt<B;lt++){let Tt=lt*R-V;for(let Ct=0;Ct<N;Ct++){let ne=Ct*D-P;et[S]=ne*m,et[g]=Tt*x,et[h]=W,c.push(et.x,et.y,et.z),et[S]=0,et[g]=0,et[h]=E>0?1:-1,f.push(et.x,et.y,et.z),p.push(Ct/C),p.push(1-lt/v),F+=1}}for(let lt=0;lt<v;lt++)for(let Tt=0;Tt<C;Tt++){let Ct=u+Tt+N*lt,ne=u+Tt+N*(lt+1),pe=u+(Tt+1)+N*(lt+1),Ft=u+(Tt+1)+N*lt;l.push(Ct,ne,Ft),l.push(ne,pe,Ft),st+=6}o.addGroup(d,st,A),d+=st,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Sr=class e extends Ze{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let f=[],p=[],u=[],d=[],_=0,S=[],g=i/2,h=0;m(),r===!1&&(t>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(d,2));function m(){let M=new O,w=new O,E=0,C=(n-t)/i;for(let v=0;v<=a;v++){let A=[],D=v/a,R=D*(n-t)+t;for(let P=0;P<=s;P++){let V=P/s,W=V*l+o,N=Math.sin(W),B=Math.cos(W);w.x=R*N,w.y=-D*i+g,w.z=R*B,p.push(w.x,w.y,w.z),M.set(N,C,B).normalize(),u.push(M.x,M.y,M.z),d.push(V,1-D),A.push(_++)}S.push(A)}for(let v=0;v<s;v++)for(let A=0;A<a;A++){let D=S[A][v],R=S[A+1][v],P=S[A+1][v+1],V=S[A][v+1];(t>0||A!==0)&&(f.push(D,R,V),E+=3),(n>0||A!==a-1)&&(f.push(R,P,V),E+=3)}c.addGroup(h,E,0),h+=E}function x(M){let w=_,E=new Xt,C=new O,v=0,A=M===!0?t:n,D=M===!0?1:-1;for(let P=1;P<=s;P++)p.push(0,g*D,0),u.push(0,D,0),d.push(.5,.5),_++;let R=_;for(let P=0;P<=s;P++){let W=P/s*l+o,N=Math.cos(W),B=Math.sin(W);C.x=A*B,C.y=g*D,C.z=A*N,p.push(C.x,C.y,C.z),u.push(0,D,0),E.x=N*.5+.5,E.y=B*.5*D+.5,d.push(E.x,E.y),_++}for(let P=0;P<s;P++){let V=w+P,W=R+P;M===!0?f.push(W,W+1,V):f.push(W+1,W,V),v+=3}c.addGroup(h,v,M===!0?1:2),h+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ff=new O,df=new O,mg=new O,pf=new ts,Mr=class extends Ze{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){let s=Math.pow(10,4),a=Math.cos(xf*n),r=t.getIndex(),o=t.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],f=["a","b","c"],p=new Array(3),u={},d=[];for(let _=0;_<l;_+=3){r?(c[0]=r.getX(_),c[1]=r.getX(_+1),c[2]=r.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:S,b:g,c:h}=pf;if(S.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),pf.getNormal(mg),p[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,p[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,p[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let m=0;m<3;m++){let x=(m+1)%3,M=p[m],w=p[x],E=pf[f[m]],C=pf[f[x]],v=`${M}_${w}`,A=`${w}_${M}`;A in u&&u[A]?(mg.dot(u[A].normal)<=a&&(d.push(E.x,E.y,E.z),d.push(C.x,C.y,C.z)),u[A]=null):v in u||(u[v]={index0:c[m],index1:c[x],normal:mg.clone()})}}for(let _ in u)if(u[_]){let{index0:S,index1:g}=u[_];ff.fromBufferAttribute(o,S),df.fromBufferAttribute(o,g),d.push(ff.x,ff.y,ff.z),d.push(df.x,df.y,df.z)}this.setAttribute("position",new Oe(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Hi=class e extends Ze{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],_=[],S=[],g=[];for(let h=0;h<f;h++){let m=h*u-r;for(let x=0;x<c;x++){let M=x*p-a;_.push(M,-m,0),S.push(0,0,1),g.push(x/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let x=m+c*h,M=m+c*(h+1),w=m+1+c*(h+1),E=m+1+c*h;d.push(x,M,E),d.push(M,w,E)}this.setIndex(d),this.setAttribute("position",new Oe(_,3)),this.setAttribute("normal",new Oe(S,3)),this.setAttribute("uv",new Oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Hc=class e extends Ze{constructor(t=.5,n=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],f=[],p=t,u=(n-t)/s,d=new O,_=new Xt;for(let S=0;S<=s;S++){for(let g=0;g<=i;g++){let h=a+g/i*r;d.x=p*Math.cos(h),d.y=p*Math.sin(h),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/n+1)/2,_.y=(d.y/n+1)/2,f.push(_.x,_.y)}p+=u}for(let S=0;S<s;S++){let g=S*(i+1);for(let h=0;h<i;h++){let m=h+g,x=m,M=m+i+1,w=m+i+2,E=m+1;o.push(x,M,E),o.push(M,w,E)}}this.setIndex(o),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ko=class e extends Ze{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,f=[],p=new O,u=new O,d=[],_=[],S=[],g=[];for(let h=0;h<=i;h++){let m=[],x=h/i,M=0;h===0&&r===0?M=.5/n:h===i&&l===Math.PI&&(M=-.5/n);for(let w=0;w<=n;w++){let E=w/n;p.x=-t*Math.cos(s+E*a)*Math.sin(r+x*o),p.y=t*Math.cos(r+x*o),p.z=t*Math.sin(s+E*a)*Math.sin(r+x*o),_.push(p.x,p.y,p.z),u.copy(p).normalize(),S.push(u.x,u.y,u.z),g.push(E+M,1-x),m.push(c++)}f.push(m)}for(let h=0;h<i;h++)for(let m=0;m<n;m++){let x=f[h][m+1],M=f[h][m],w=f[h+1][m],E=f[h+1][m+1];(h!==0||r>0)&&d.push(x,M,E),(h!==i-1||l<Math.PI)&&d.push(M,w,E)}this.setIndex(d),this.setAttribute("position",new Oe(_,3)),this.setAttribute("normal",new Oe(S,3)),this.setAttribute("uv",new Oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};Eb={clone:Tr,merge:Dn},OA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OA,this.fragmentShader=PA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=IA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Gf=class extends fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},di=class extends zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wd,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gs,this.combine=sd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kf=class extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xf=class extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};Na=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wf=class extends Na{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vg,endingEnd:vg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case xg:a=t,o=2*n-i;break;case yg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xg:r=t,l=2*i-n;break;case yg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(i-n)/(s-n),S=_*_,g=S*_,h=-u*g+2*u*S-u*_,m=(1+u)*g+(-1.5-2*u)*S+(-.5+u)*_+1,x=(-1-d)*g+(1.5+d)*S+.5*_,M=d*g-d*S;for(let w=0;w!==o;++w)a[w]=h*r[f+w]+m*r[c+w]+x*r[l+w]+M*r[p+w];return a}},qf=class extends Na{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},Yf=class extends Na{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zf=class extends Na{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.settings||this.DefaultSettings_,p=f.inTangents,u=f.outTangents;if(!p||!u){let S=(i-n)/(s-n),g=1-S;for(let h=0;h!==o;++h)a[h]=r[c+h]*g+r[l+h]*S;return a}let d=o*2,_=t-1;for(let S=0;S!==o;++S){let g=r[c+S],h=r[l+S],m=_*d+S*2,x=u[m],M=u[m+1],w=t*d+S*2,E=p[w],C=p[w+1],v=(i-n)/(s-n),A,D,R,P,V;for(let W=0;W<8;W++){A=v*v,D=A*v,R=1-v,P=R*R,V=P*R;let B=V*n+3*P*v*x+3*R*A*E+D*s-i;if(Math.abs(B)<1e-10)break;let F=3*P*(x-n)+6*R*v*(E-x)+3*A*(s-E);if(Math.abs(F)<1e-10)break;v=v-B/F,v=Math.max(0,Math.min(1,v))}a[S]=V*g+3*P*v*M+3*R*A*C+D*h}return a}},pi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mf(n,this.TimeBufferType),this.values=mf(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:mf(t.times,Array),values:mf(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Yf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Zf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.settings=this.settings),n}setInterpolation(t){let n;switch(t){case Ec:n=this.InterpolantFactoryMethodDiscrete;break;case Uf:n=this.InterpolantFactoryMethodLinear;break;case vf:n=this.InterpolantFactoryMethodSmooth;break;case _g:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Dt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ec;case this.InterpolantFactoryMethodLinear:return Uf;case this.InterpolantFactoryMethodSmooth:return vf;case this.InterpolantFactoryMethodBezier:return _g}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Nt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&dA(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===vf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let _=0;_!==i;++_){let S=n[p+_];if(S!==n[u+_]||S!==n[d+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Uf;La=class extends pi{constructor(t,n,i){super(t,n,i)}};La.prototype.ValueTypeName="bool";La.prototype.ValueBufferType=Array;La.prototype.DefaultInterpolation=Ec;La.prototype.InterpolantFactoryMethodLinear=void 0;La.prototype.InterpolantFactoryMethodSmooth=void 0;Jf=class extends pi{constructor(t,n,i,s){super(t,n,i,s)}};Jf.prototype.ValueTypeName="color";Kf=class extends pi{constructor(t,n,i,s){super(t,n,i,s)}};Kf.prototype.ValueTypeName="number";Qf=class extends Na{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)ss.slerpFlat(a,0,r,c-o,r,c,l);return a}},Vc=class extends pi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Qf(this.times,this.values,this.getValueSize(),t)}};Vc.prototype.ValueTypeName="quaternion";Vc.prototype.InterpolantFactoryMethodSmooth=void 0;Ia=class extends pi{constructor(t,n,i){super(t,n,i)}};Ia.prototype.ValueTypeName="string";Ia.prototype.ValueBufferType=Array;Ia.prototype.DefaultInterpolation=Ec;Ia.prototype.InterpolantFactoryMethodLinear=void 0;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;jf=class extends pi{constructor(t,n,i,s){super(t,n,i,s)}};jf.prototype.ValueTypeName="vector";$f=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],_=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tb=new $f,td=class{constructor(t){this.manager=t!==void 0?t:Tb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};td.DEFAULT_MATERIAL_NAME="__DEFAULT";br=class extends $e{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Gc=class extends br{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},gg=new Te,IM=new O,OM=new O,ed=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;IM.setFromMatrixPosition(t.matrixWorld),n.position.copy(IM),OM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(OM),n.updateMatrixWorld(),gg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gg,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Vo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gg)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},gf=new O,_f=new ss,Qi=new O,kc=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(gf,_f,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gf,_f,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(gf,_f,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gf,_f,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wa=new O,PM=new Xt,BM=new Xt,Mn=class extends kc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=If*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return If*2*Math.atan(Math.tan(xf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wa.x,wa.y).multiplyScalar(-t/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wa.x,wa.y).multiplyScalar(-t/wa.z)}getViewSize(t,n){return this.getViewBounds(t,PM,BM),n.subVectors(BM,PM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(xf*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},bg=class extends ed{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}},Xc=class extends br{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new bg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},Qo=class extends kc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Eg=class extends ed{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jo=class extends br{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Eg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},Wc=class extends br{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}},Fo=-90,zo=1,nd=class extends $e{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(Fo,zo,t,n);s.layers=this.layers,this.add(s);let a=new Mn(Fo,zo,t,n);a.layers=this.layers,this.add(a);let r=new Mn(Fo,zo,t,n);r.layers=this.layers,this.add(r);let o=new Mn(Fo,zo,t,n);o.layers=this.layers,this.add(o);let l=new Mn(Fo,zo,t,n);l.layers=this.layers,this.add(l);let c=new Mn(Fo,zo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},id=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Yg="\\[\\]\\.:\\/",BA=new RegExp("["+Yg+"]","g"),Zg="[^"+Yg+"]",FA="[^"+Yg.replace("\\.","")+"]",zA=/((?:WC+[\/:])*)/.source.replace("WC",Zg),HA=/(WCOD+)?/.source.replace("WCOD",FA),VA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zg),GA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zg),kA=new RegExp("^"+zA+HA+VA+GA+"$"),XA=["material","materials","bones","map"],Tg=class{constructor(t,n,i){let s=i||He.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},He=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(BA,"")}static parseTrackName(t){let n=kA.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);XA.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=Tg;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];j3=new Float32Array(1),FM=new Te,qc=class{constructor(t,n,i=0,s=1/0){this.ray=new xr(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Nt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return FM.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(FM),this}intersectObject(t,n=!0,i=[]){return Ag(t,this,i,n),i.sort(zM),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)Ag(t[s],this,i,n);return i.sort(zM),i}};wg=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}},Yc=class extends Da{constructor(t=10,n=10,i=4473924,s=8947848){i=new Ht(i),s=new Ht(s);let a=n/2,r=t/n,o=t/2,l=[],c=[];for(let u=0,d=0,_=-o;u<=n;u++,_+=r){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);let S=u===a?i:s;S.toArray(c,d),d+=3,S.toArray(c,d),d+=3,S.toArray(c,d),d+=3,S.toArray(c,d),d+=3}let f=new Ze;f.setAttribute("position",new Oe(l,3)),f.setAttribute("color",new Oe(c,3));let p=new os({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184")});function Zb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function YA(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<p.length;d++){let _=p[u],S=p[d];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,p[u]=S)}p.length=u+1;for(let d=0,_=p.length;d<_;d++){let S=p[d];e.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}function RC(e,t,n,i,s,a){let r=new Ht(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let M=m.backgroundBlurriness>0;x=t.get(x,M)}return x}function _(m){let x=!1,M=d(m);M===null?g(r,o):M&&M.isColor&&(g(M,1),x=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function S(m,x){let M=d(x);M&&(M.isCubeTexture||M.mapping===Jc)?(c===void 0&&(c=new ce(new Rn(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Tr(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(CC.makeRotationFromEuler(x.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jb),c.material.toneMapped=se.getTransfer(M.colorSpace)!==xe,(f!==M||p!==M.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ce(new Hi(2,2),new fi({name:"BackgroundMaterial",uniforms:Tr(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=se.getTransfer(M.colorSpace)!==xe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=M,p=M.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(Zd,qg(e)),n.buffers.color.setClear(Zd.r,Zd.g,Zd.b,x,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,x=1){r.set(m),o=x,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:_,addToRenderList:S,dispose:h}}function DC(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(R,P,V,W,N){let B=!1,F=p(R,W,V,P);a!==F&&(a=F,c(a.object)),B=d(R,W,V,N),B&&_(R,W,V,N),N!==null&&t.update(N,e.ELEMENT_ARRAY_BUFFER),(B||r)&&(r=!1,M(R,P,V,W),N!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return e.createVertexArray()}function c(R){return e.bindVertexArray(R)}function f(R){return e.deleteVertexArray(R)}function p(R,P,V,W){let N=W.wireframe===!0,B=i[P.id];B===void 0&&(B={},i[P.id]=B);let F=R.isInstancedMesh===!0?R.id:0,st=B[F];st===void 0&&(st={},B[F]=st);let et=st[V.id];et===void 0&&(et={},st[V.id]=et);let lt=et[N];return lt===void 0&&(lt=u(l()),et[N]=lt),lt}function u(R){let P=[],V=[],W=[];for(let N=0;N<n;N++)P[N]=0,V[N]=0,W[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:W,object:R,attributes:{},index:null}}function d(R,P,V,W){let N=a.attributes,B=P.attributes,F=0,st=V.getAttributes();for(let et in st)if(st[et].location>=0){let Tt=N[et],Ct=B[et];if(Ct===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(Ct=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(Ct=R.instanceColor)),Tt===void 0||Tt.attribute!==Ct||Ct&&Tt.data!==Ct.data)return!0;F++}return a.attributesNum!==F||a.index!==W}function _(R,P,V,W){let N={},B=P.attributes,F=0,st=V.getAttributes();for(let et in st)if(st[et].location>=0){let Tt=B[et];Tt===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor));let Ct={};Ct.attribute=Tt,Tt&&Tt.data&&(Ct.data=Tt.data),N[et]=Ct,F++}a.attributes=N,a.attributesNum=F,a.index=W}function S(){let R=a.newAttributes;for(let P=0,V=R.length;P<V;P++)R[P]=0}function g(R){h(R,0)}function h(R,P){let V=a.newAttributes,W=a.enabledAttributes,N=a.attributeDivisors;V[R]=1,W[R]===0&&(e.enableVertexAttribArray(R),W[R]=1),N[R]!==P&&(e.vertexAttribDivisor(R,P),N[R]=P)}function m(){let R=a.newAttributes,P=a.enabledAttributes;for(let V=0,W=P.length;V<W;V++)P[V]!==R[V]&&(e.disableVertexAttribArray(V),P[V]=0)}function x(R,P,V,W,N,B,F){F===!0?e.vertexAttribIPointer(R,P,V,N,B):e.vertexAttribPointer(R,P,V,W,N,B)}function M(R,P,V,W){S();let N=W.attributes,B=V.getAttributes(),F=P.defaultAttributeValues;for(let st in B){let et=B[st];if(et.location>=0){let lt=N[st];if(lt===void 0&&(st==="instanceMatrix"&&R.instanceMatrix&&(lt=R.instanceMatrix),st==="instanceColor"&&R.instanceColor&&(lt=R.instanceColor)),lt!==void 0){let Tt=lt.normalized,Ct=lt.itemSize,ne=t.get(lt);if(ne===void 0)continue;let pe=ne.buffer,Ft=ne.type,$=ne.bytesPerElement,St=Ft===e.INT||Ft===e.UNSIGNED_INT||lt.gpuType===ld;if(lt.isInterleavedBufferAttribute){let dt=lt.data,Rt=dt.stride,Ot=lt.offset;if(dt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<et.locationSize;Ut++)h(et.location+Ut,dt.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ut=0;Ut<et.locationSize;Ut++)g(et.location+Ut);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let Ut=0;Ut<et.locationSize;Ut++)x(et.location+Ut,Ct/et.locationSize,Ft,Tt,Rt*$,(Ot+Ct/et.locationSize*Ut)*$,St)}else{if(lt.isInstancedBufferAttribute){for(let dt=0;dt<et.locationSize;dt++)h(et.location+dt,lt.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let dt=0;dt<et.locationSize;dt++)g(et.location+dt);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let dt=0;dt<et.locationSize;dt++)x(et.location+dt,Ct/et.locationSize,Ft,Tt,Ct*$,Ct/et.locationSize*dt*$,St)}}else if(F!==void 0){let Tt=F[st];if(Tt!==void 0)switch(Tt.length){case 2:e.vertexAttrib2fv(et.location,Tt);break;case 3:e.vertexAttrib3fv(et.location,Tt);break;case 4:e.vertexAttrib4fv(et.location,Tt);break;default:e.vertexAttrib1fv(et.location,Tt)}}}}m()}function w(){A();for(let R in i){let P=i[R];for(let V in P){let W=P[V];for(let N in W){let B=W[N];for(let F in B)f(B[F].object),delete B[F];delete W[N]}}delete i[R]}}function E(R){if(i[R.id]===void 0)return;let P=i[R.id];for(let V in P){let W=P[V];for(let N in W){let B=W[N];for(let F in B)f(B[F].object),delete B[F];delete W[N]}}delete i[R.id]}function C(R){for(let P in i){let V=i[P];for(let W in V){let N=V[W];if(N[R.id]===void 0)continue;let B=N[R.id];for(let F in B)f(B[F].object),delete B[F];delete N[R.id]}}}function v(R){for(let P in i){let V=i[P],W=R.isInstancedMesh===!0?R.id:0,N=V[W];if(N!==void 0){for(let B in N){let F=N[B];for(let st in F)f(F[st].object),delete F[st];delete N[B]}delete V[W],Object.keys(V).length===0&&delete i[P]}}}function A(){D(),r=!0,a!==s&&(a=s,c(a.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:g,disableUnusedAttributes:m}}function UC(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function NC(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Ri&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let v=C===cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Jn&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ci&&!v)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Dt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:M,maxSamples:w,samples:E}}function LC(e){let t=this,n=null,i=0,s=!1,a=!1,r=new ji,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let _=p.clippingPlanes,S=p.clipIntersection,g=p.clipShadows,h=e.get(p);if(!s||_===null||_.length===0||a&&!g)a?f(null):c();else{let m=a?0:i,x=m*4,M=h.clippingState||null;l.value=M,M=f(_,u,x,d);for(let w=0;w!==x;++w)M[w]=n[w];h.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,_){let S=p!==null?p.length:0,g=null;if(S!==0){if(g=l.value,_!==!0||g===null){let h=d+S*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,M=d;x!==S;++x,M+=4)r.copy(p[x]).applyMatrix4(m,o),r.normal.toArray(g,M),g[M+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}function PC(e){let t=[],n=[],i=[],s=e,a=e-za+1+Ab.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-za?l=Ab[r-e+za-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),f=-c,p=1+c,u=[f,f,p,f,p,p,f,f,p,p,f,p],d=6,_=6,S=3,g=2,h=1,m=new Float32Array(S*_*d),x=new Float32Array(g*_*d),M=new Float32Array(h*_*d);for(let E=0;E<d;E++){let C=E%3*2/3-1,v=E>2?0:-1,A=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];m.set(A,S*_*E),x.set(u,g*_*E);let D=[E,E,E,E,E,E];M.set(D,h*_*E)}let w=new Ze;w.setAttribute("position",new rn(m,S)),w.setAttribute("uv",new rn(x,g)),w.setAttribute("faceIndex",new rn(M,h)),i.push(new ce(w,null)),s>za&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Cb(e,t,n){let i=new hi(e,t,n);return i.texture.mapping=Jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function BC(e,t,n){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$d(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function FC(e,t,n){let i=new Float32Array(Ar),s=new O(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Rb(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Db(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function $d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zC(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===ad||d===rd)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let S=new Qd(_.height);return S.fromEquirectangularTexture(e,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,_=d===ad||d===rd,S=d===Oa||d===Er;if(_||S){let g=n.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Kd(e)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return _&&m&&m.height>0||S&&m&&l(m)?(i===null&&(i=new Kd(e)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function o(u,d){return d===ad?u.mapping=Oa:d===rd&&(u.mapping=Er),u}function l(u){let d=0,_=6;for(let S=0;S<_;S++)u[S]!==void 0&&d++;return d===_}function c(u){let d=u.target;d.removeEventListener("dispose",c);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let _=n.get(d);_!==void 0&&(n.delete(d),_.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function HC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Lf("WebGLRenderer: "+i+" extension not supported."),s}}}function VC(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,_=p.attributes.position,S=0;if(_===void 0)return;if(d!==null){let m=d.array;S=d.version;for(let x=0,M=m.length;x<M;x+=3){let w=m[x+0],E=m[x+1],C=m[x+2];u.push(w,E,E,C,C,w)}}else{let m=_.array;S=_.version;for(let x=0,M=m.length/3-1;x<M;x+=3){let w=x+0,E=x+1,C=x+2;u.push(w,E,E,C,C,w)}}let g=new(_.count>=65535?Lc:Nc)(u,1);g.version=S;let h=a.get(p);h&&t.remove(h),a.set(p,g)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function GC(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let S=0;for(let g=0;g<d;g++)S+=u[g];n.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function kC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Nt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function XC(e,t,n){let i=new WeakMap,s=new Ye;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let A=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],x=0;d===!0&&(x=1),_===!0&&(x=2),S===!0&&(x=3);let M=o.attributes.position.count*x,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*w*4*p),C=new Rc(E,M,w,p);C.type=Ci,C.needsUpdate=!0;let v=x*4;for(let D=0;D<p;D++){let R=g[D],P=h[D],V=m[D],W=M*w*4*D;for(let N=0;N<R.count;N++){let B=N*v;d===!0&&(s.fromBufferAttribute(R,N),E[W+B+0]=s.x,E[W+B+1]=s.y,E[W+B+2]=s.z,E[W+B+3]=0),_===!0&&(s.fromBufferAttribute(P,N),E[W+B+4]=s.x,E[W+B+5]=s.y,E[W+B+6]=s.z,E[W+B+7]=0),S===!0&&(s.fromBufferAttribute(V,N),E[W+B+8]=s.x,E[W+B+9]=s.y,E[W+B+10]=s.z,E[W+B+11]=V.itemSize===4?s.w:1)}}u={count:p,texture:C,size:new Xt(M,w)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function WC(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}function YC(e,t,n,i,s){let a=new hi(t,n,{type:e,depthBuffer:i,stencilBuffer:s,depthTexture:i?new ks(t,n):void 0}),r=new hi(t,n,{type:cs,depthBuffer:!1,stencilBuffer:!1}),o=new Ze;o.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let l=new Gf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ce(o,l),f=new Qo(-1,1,1,-1,0,1),p=null,u=null,d=!1,_,S=null,g=[],h=!1;this.setSize=function(m,x){a.setSize(m,x),r.setSize(m,x);for(let M=0;M<g.length;M++){let w=g[M];w.setSize&&w.setSize(m,x)}},this.setEffects=function(m){g=m,h=g.length>0&&g[0].isRenderPass===!0;let x=a.width,M=a.height;for(let w=0;w<g.length;w++){let E=g[w];E.setSize&&E.setSize(x,M)}},this.begin=function(m,x){if(d||m.toneMapping===Vi&&g.length===0)return!1;if(S=x,x!==null){let M=x.width,w=x.height;(a.width!==M||a.height!==w)&&this.setSize(M,w)}return h===!1&&m.setRenderTarget(a),_=m.toneMapping,m.toneMapping=Vi,!0},this.hasRenderPass=function(){return h},this.end=function(m,x){m.toneMapping=_,d=!0;let M=a,w=r;for(let E=0;E<g.length;E++){let C=g[E];if(C.enabled!==!1&&(C.render(m,w,M,x),C.needsSwap!==!1)){let v=M;M=w,w=v}}if(p!==m.outputColorSpace||u!==m.toneMapping){p=m.outputColorSpace,u=m.toneMapping,l.defines={},se.getTransfer(p)===xe&&(l.defines.SRGB_TRANSFER="");let E=qC[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(S),m.render(c,f),S=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),r.dispose(),o.dispose(),l.dispose()}}function sl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Ub[s];if(a===void 0&&(a=new Float32Array(s),Ub[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function cn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function un(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function tp(e,t){let n=Nb[t];n===void 0&&(n=new Int32Array(t),Nb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function ZC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function JC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2fv(this.addr,t),un(n,t)}}function KC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(cn(n,t))return;e.uniform3fv(this.addr,t),un(n,t)}}function QC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4fv(this.addr,t),un(n,t)}}function jC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;Ob.set(i),e.uniformMatrix2fv(this.addr,!1,Ob),un(n,i)}}function $C(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;Ib.set(i),e.uniformMatrix3fv(this.addr,!1,Ib),un(n,i)}}function tR(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;Lb.set(i),e.uniformMatrix4fv(this.addr,!1,Lb),un(n,i)}}function eR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function nR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2iv(this.addr,t),un(n,t)}}function iR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3iv(this.addr,t),un(n,t)}}function sR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4iv(this.addr,t),un(n,t)}}function aR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function rR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2uiv(this.addr,t),un(n,t)}}function oR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3uiv(this.addr,t),un(n,t)}}function lR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4uiv(this.addr,t),un(n,t)}}function cR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(i_.compareFunction=n.isReversedDepthBuffer()?Yd:qd,a=i_):a=Kb,n.setTexture2D(t||a,s)}function uR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||jb,s)}function hR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||$b,s)}function fR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Qb,s)}function dR(e){switch(e){case 5126:return ZC;case 35664:return JC;case 35665:return KC;case 35666:return QC;case 35674:return jC;case 35675:return $C;case 35676:return tR;case 5124:case 35670:return eR;case 35667:case 35671:return nR;case 35668:case 35672:return iR;case 35669:case 35673:return sR;case 5125:return aR;case 36294:return rR;case 36295:return oR;case 36296:return lR;case 35678:case 36198:case 36298:case 36306:case 35682:return cR;case 35679:case 36299:case 36307:return uR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return fR}}function pR(e,t){e.uniform1fv(this.addr,t)}function mR(e,t){let n=sl(t,this.size,2);e.uniform2fv(this.addr,n)}function gR(e,t){let n=sl(t,this.size,3);e.uniform3fv(this.addr,n)}function _R(e,t){let n=sl(t,this.size,4);e.uniform4fv(this.addr,n)}function vR(e,t){let n=sl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function xR(e,t){let n=sl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function yR(e,t){let n=sl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function SR(e,t){e.uniform1iv(this.addr,t)}function MR(e,t){e.uniform2iv(this.addr,t)}function bR(e,t){e.uniform3iv(this.addr,t)}function ER(e,t){e.uniform4iv(this.addr,t)}function TR(e,t){e.uniform1uiv(this.addr,t)}function AR(e,t){e.uniform2uiv(this.addr,t)}function wR(e,t){e.uniform3uiv(this.addr,t)}function CR(e,t){e.uniform4uiv(this.addr,t)}function RR(e,t,n){let i=this.cache,s=t.length,a=tp(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=i_:r=Kb;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function DR(e,t,n){let i=this.cache,s=t.length,a=tp(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||jb,a[r])}function UR(e,t,n){let i=this.cache,s=t.length,a=tp(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||$b,a[r])}function NR(e,t,n){let i=this.cache,s=t.length,a=tp(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Qb,a[r])}function LR(e){switch(e){case 5126:return pR;case 35664:return mR;case 35665:return gR;case 35666:return _R;case 35674:return vR;case 35675:return xR;case 35676:return yR;case 5124:case 35670:return SR;case 35667:case 35671:return MR;case 35668:case 35672:return bR;case 35669:case 35673:return ER;case 5125:return TR;case 36294:return AR;case 36295:return wR;case 36296:return CR;case 35678:case 36198:case 36298:case 36306:case 35682:return RR;case 35679:case 36299:case 36307:return DR;case 35680:case 36300:case 36308:case 36293:return UR;case 36289:case 36303:case 36311:case 36292:return NR}}function Pb(e,t){e.seq.push(t),e.map[t.id]=t}function IR(e,t,n){let i=e.name,s=i.length;for(e_.lastIndex=0;;){let a=e_.exec(i),r=e_.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Pb(n,c===void 0?new s_(o,e,t):new a_(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new r_(o),Pb(n,p)),n=p}}}function Bb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}function BR(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function FR(e){se._getMatrix(Fb,se.workingColorSpace,e);let t=`mat3( ${Fb.elements.map(n=>n.toFixed(4))} )`;switch(se.getTransfer(e)){case Ac:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function zb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+BR(e.getShaderSource(t),o)}else return a}function zR(e,t){let n=FR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function VR(e,t){let n=HR[t];return n===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function GR(){se.getLuminanceCoefficients(Jd);let e=Jd.x.toFixed(4),t=Jd.y.toFixed(4),n=Jd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(au).join(`
`)}function XR(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function WR(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function au(e){return e!==""}function Hb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function o_(e){return e.replace(qR,ZR)}function ZR(e,t){let n=Kt[t];if(n===void 0){let i=YR.get(t);if(i!==void 0)n=Kt[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return o_(n)}function Gb(e){return e.replace(JR,KR)}function KR(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function kb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jR(e){return QR[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function t3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":$R[e.envMapMode]||"ENVMAP_TYPE_CUBE"}function n3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":e3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function s3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":i3[e.combine]||"ENVMAP_BLENDING_NONE"}function a3(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function r3(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=jR(n),c=t3(n),f=n3(n),p=s3(n),u=a3(n),d=kR(n),_=XR(a),S=s.createProgram(),g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(au).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(au).join(`
`),h.length>0&&(h+=`
`)):(g=[kb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(au).join(`
`),h=[kb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?Kt.tonemapping_pars_fragment:"",n.toneMapping!==Vi?VR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,zR("linearToOutputTexel",n.outputColorSpace),GR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(au).join(`
`)),r=o_(r),r=Hb(r,n),r=Vb(r,n),o=o_(o),o=Hb(o,n),o=Vb(o,n),r=Gb(r),o=Gb(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let x=m+g+r,M=m+h+o,w=Bb(s,s.VERTEX_SHADER,x),E=Bb(s,s.FRAGMENT_SHADER,M);s.attachShader(S,w),s.attachShader(S,E),n.index0AttributeName!==void 0?s.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(R){if(e.debug.checkShaderErrors){let P=s.getProgramInfoLog(S)||"",V=s.getShaderInfoLog(w)||"",W=s.getShaderInfoLog(E)||"",N=P.trim(),B=V.trim(),F=W.trim(),st=!0,et=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(st=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,S,w,E);else{let lt=zb(s,w,"vertex"),Tt=zb(s,E,"fragment");Nt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+lt+`
`+Tt)}else N!==""?Dt("WebGLProgram: Program Info Log:",N):(B===""||F==="")&&(et=!1);et&&(R.diagnostics={runnable:st,programLog:N,vertexShader:{log:B,prefix:g},fragmentShader:{log:F,prefix:h}})}s.deleteShader(w),s.deleteShader(E),v=new il(s,S),A=WR(s,S)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(S,OR)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=PR++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=E,this}function l3(e){return e===Fa||e===eu||e===nu}function c3(e,t,n,i,s,a){let r=new Xo,o=new l_,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,A,D,R,P,V){let W=R.fog,N=P.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,st=t.get(v.envMap||B,F),et=st&&st.mapping===Jc?st.image.height:null,lt=d[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Dt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ct=Tt!==void 0?Tt.length:0,ne=0;N.morphAttributes.position!==void 0&&(ne=1),N.morphAttributes.normal!==void 0&&(ne=2),N.morphAttributes.color!==void 0&&(ne=3);let pe,Ft,$,St;if(lt){let Lt=hs[lt];pe=Lt.vertexShader,Ft=Lt.fragmentShader}else pe=v.vertexShader,Ft=v.fragmentShader,o.update(v),$=o.getVertexShaderID(v),St=o.getFragmentShaderID(v);let dt=e.getRenderTarget(),Rt=e.state.buffers.depth.getReversed(),Ot=P.isInstancedMesh===!0,Ut=P.isBatchedMesh===!0,Re=!!v.map,Zt=!!v.matcap,he=!!st,De=!!v.aoMap,Wt=!!v.lightMap,We=!!v.bumpMap,fe=!!v.normalMap,Un=!!v.displacementMap,L=!!v.emissiveMap,Ue=!!v.metalnessMap,Jt=!!v.roughnessMap,Se=v.anisotropy>0,_t=v.clearcoat>0,Ne=v.dispersion>0,T=v.iridescence>0,y=v.sheen>0,z=v.transmission>0,K=Se&&!!v.anisotropyMap,at=_t&&!!v.clearcoatMap,ct=_t&&!!v.clearcoatNormalMap,rt=_t&&!!v.clearcoatRoughnessMap,Y=T&&!!v.iridescenceMap,Q=T&&!!v.iridescenceThicknessMap,xt=y&&!!v.sheenColorMap,Et=y&&!!v.sheenRoughnessMap,pt=!!v.specularMap,ft=!!v.specularColorMap,Pt=!!v.specularIntensityMap,Vt=z&&!!v.transmissionMap,jt=z&&!!v.thicknessMap,U=!!v.gradientMap,it=!!v.alphaMap,Z=v.alphaTest>0,vt=!!v.alphaHash,ut=!!v.extensions,nt=Vi;v.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(nt=e.toneMapping);let wt={shaderID:lt,shaderType:v.type,shaderName:v.name,vertexShader:pe,fragmentShader:Ft,defines:v.defines,customVertexShaderID:$,customFragmentShaderID:St,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ut,batchingColor:Ut&&P._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&P.instanceColor!==null,instancingMorph:Ot&&P.morphTexture!==null,outputColorSpace:dt===null?e.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Re,matcap:Zt,envMap:he,envMapMode:he&&st.mapping,envMapCubeUVHeight:et,aoMap:De,lightMap:Wt,bumpMap:We,normalMap:fe,displacementMap:Un,emissiveMap:L,normalMapObjectSpace:fe&&v.normalMapType===hb,normalMapTangentSpace:fe&&v.normalMapType===Wd,packedNormalMap:fe&&v.normalMapType===Wd&&l3(v.normalMap.format),metalnessMap:Ue,roughnessMap:Jt,anisotropy:Se,anisotropyMap:K,clearcoat:_t,clearcoatMap:at,clearcoatNormalMap:ct,clearcoatRoughnessMap:rt,dispersion:Ne,iridescence:T,iridescenceMap:Y,iridescenceThicknessMap:Q,sheen:y,sheenColorMap:xt,sheenRoughnessMap:Et,specularMap:pt,specularColorMap:ft,specularIntensityMap:Pt,transmission:z,transmissionMap:Vt,thicknessMap:jt,gradientMap:U,opaque:v.transparent===!1&&v.blending===gr&&v.alphaToCoverage===!1,alphaMap:it,alphaTest:Z,alphaHash:vt,combine:v.combine,mapUv:Re&&_(v.map.channel),aoMapUv:De&&_(v.aoMap.channel),lightMapUv:Wt&&_(v.lightMap.channel),bumpMapUv:We&&_(v.bumpMap.channel),normalMapUv:fe&&_(v.normalMap.channel),displacementMapUv:Un&&_(v.displacementMap.channel),emissiveMapUv:L&&_(v.emissiveMap.channel),metalnessMapUv:Ue&&_(v.metalnessMap.channel),roughnessMapUv:Jt&&_(v.roughnessMap.channel),anisotropyMapUv:K&&_(v.anisotropyMap.channel),clearcoatMapUv:at&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(v.sheenRoughnessMap.channel),specularMapUv:pt&&_(v.specularMap.channel),specularColorMapUv:ft&&_(v.specularColorMap.channel),specularIntensityMapUv:Pt&&_(v.specularIntensityMap.channel),transmissionMapUv:Vt&&_(v.transmissionMap.channel),thicknessMapUv:jt&&_(v.thicknessMap.channel),alphaMapUv:it&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(fe||Se),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(Re||it),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&fe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Rt,skinning:P.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:nt,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&se.getTransfer(v.map.colorSpace)===xe,decodeVideoTextureEmissive:L&&v.emissiveMap.isVideoTexture===!0&&se.getTransfer(v.emissiveMap.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zn,flipSided:v.side===Fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ut&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&v.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function g(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)A.push(D),A.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(h(A,v),m(A,v),A.push(e.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function h(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function m(v,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),v.push(r.mask)}function x(v){let A=d[v.type],D;if(A){let R=hs[A];D=Eb.clone(R.uniforms)}else D=v.uniforms;return D}function M(v,A){let D=f.get(A);return D!==void 0?++D.usedTimes:(D=new r3(e,A,v,s),c.push(D),f.set(A,D)),D}function w(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:x,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:C}}function u3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function h3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Xb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Wb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,S,g,h){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:_,materialVariant:r(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:h},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=_,m.materialVariant=r(u),m.groupOrder=S,m.renderOrder=u.renderOrder,m.z=g,m.group=h),t++,m}function l(u,d,_,S,g,h){let m=o(u,d,_,S,g,h);_.transmission>0?i.push(m):_.transparent===!0?s.push(m):n.push(m)}function c(u,d,_,S,g,h){let m=o(u,d,_,S,g,h);_.transmission>0?i.unshift(m):_.transparent===!0?s.unshift(m):n.unshift(m)}function f(u,d){n.length>1&&n.sort(u||h3),i.length>1&&i.sort(d||Xb),s.length>1&&s.sort(d||Xb)}function p(){for(let u=t,d=e.length;u<d;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function f3(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Wb,e.set(i,[r])):s>=a.length?(r=new Wb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function d3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new O,color:new Ht};break;case"SpotLight":n={position:new O,direction:new O,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":n={color:new Ht,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function p3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}function g3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function _3(e){let t=new d3,n=p3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,a=new Te,r=new Te;function o(c){let f=0,p=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,_=0,S=0,g=0,h=0,m=0,x=0,M=0,w=0,E=0,C=0;c.sort(g3);for(let A=0,D=c.length;A<D;A++){let R=c[A],P=R.color,V=R.intensity,W=R.distance,N=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Fa?N=R.shadow.map.texture:N=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=P.r*V,p+=P.g*V,u+=P.b*V;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],V);C++}else if(R.isDirectionalLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let F=R.shadow,st=n.get(R);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,i.directionalShadow[d]=st,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=R.shadow.matrix,m++}i.directional[d]=B,d++}else if(R.isSpotLight){let B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(P).multiplyScalar(V),B.distance=W,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[S]=B;let F=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,F.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[S]=F.matrix,R.castShadow){let st=n.get(R);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,i.spotShadow[S]=st,i.spotShadowMap[S]=N,M++}S++}else if(R.isRectAreaLight){let B=t.get(R);B.color.copy(P).multiplyScalar(V),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=B,g++}else if(R.isPointLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let F=R.shadow,st=n.get(R);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,st.shadowCameraNear=F.camera.near,st.shadowCameraFar=F.camera.far,i.pointShadow[_]=st,i.pointShadowMap[_]=N,i.pointShadowMatrix[_]=R.shadow.matrix,x++}i.point[_]=B,_++}else if(R.isHemisphereLight){let B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(V),B.groundColor.copy(R.groundColor).multiplyScalar(V),i.hemi[h]=B,h++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let v=i.hash;(v.directionalLength!==d||v.pointLength!==_||v.spotLength!==S||v.rectAreaLength!==g||v.hemiLength!==h||v.numDirectionalShadows!==m||v.numPointShadows!==x||v.numSpotShadows!==M||v.numSpotMaps!==w||v.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=S,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,v.directionalLength=d,v.pointLength=_,v.spotLength=S,v.rectAreaLength=g,v.hemiLength=h,v.numDirectionalShadows=m,v.numPointShadows=x,v.numSpotShadows=M,v.numSpotMaps=w,v.numLightProbes=C,i.version=m3++)}function l(c,f){let p=0,u=0,d=0,_=0,S=0,g=f.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){let x=c[h];if(x.isDirectionalLight){let M=i.directional[p];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(x.isSpotLight){let M=i.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(x.isRectAreaLight){let M=i.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),r.identity(),a.copy(x.matrixWorld),a.premultiply(g),r.extractRotation(a),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){let M=i.point[u];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){let M=i.hemi[S];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function qb(e){let t=new _3(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function v3(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new qb(e),t.set(s,[o])):a>=r.length?(o=new qb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}function b3(e,t,n){let i=new Yo,s=new Xt,a=new Xt,r=new Ye,o=new kf,l=new Xf,c={},f=n.maxTextureSize,p={[Vs]:Fn,[Fn]:Vs,[zn]:zn},u=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:x3,fragmentShader:y3}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new Ze;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ce(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let h=this.type;this.render=function(E,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===GM&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zc);let A=e.getRenderTarget(),D=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),P=e.state;P.setBlending(ls),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let V=h!==this.type;V&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(N=>N.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,N=E.length;W<N;W++){let B=E[W],F=B.shadow;if(F===void 0){Dt("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let st=F.getFrameExtents();s.multiply(st),a.copy(F.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/st.x),s.x=a.x*st.x,F.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/st.y),s.y=a.y*st.y,F.mapSize.y=a.y));let et=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=et,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===$o){if(B.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new hi(s.x,s.y,{format:Fa,type:cs,minFilter:bn,magFilter:bn,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new ks(s.x,s.y,Ci),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=ns,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=gn,F.map.depthTexture.magFilter=gn}else B.isPointLight?(F.map=new Qd(s.x),F.map.depthTexture=new Vf(s.x,Gi)):(F.map=new hi(s.x,s.y),F.map.depthTexture=new ks(s.x,s.y,Gi)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=ns,this.type===Zc?(F.map.depthTexture.compareFunction=et?Yd:qd,F.map.depthTexture.minFilter=bn,F.map.depthTexture.magFilter=bn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=gn,F.map.depthTexture.magFilter=gn);F.camera.updateProjectionMatrix()}let lt=F.map.isWebGLCubeRenderTarget?6:1;for(let Tt=0;Tt<lt;Tt++){if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,Tt),e.clear();else{Tt===0&&(e.setRenderTarget(F.map),e.clear());let Ct=F.getViewport(Tt);r.set(a.x*Ct.x,a.y*Ct.y,a.x*Ct.z,a.y*Ct.w),P.viewport(r)}if(B.isPointLight){let Ct=F.camera,ne=F.matrix,pe=B.distance||Ct.far;pe!==Ct.far&&(Ct.far=pe,Ct.updateProjectionMatrix()),su.setFromMatrixPosition(B.matrixWorld),Ct.position.copy(su),n_.copy(Ct.position),n_.add(S3[Tt]),Ct.up.copy(M3[Tt]),Ct.lookAt(n_),Ct.updateMatrixWorld(),ne.makeTranslation(-su.x,-su.y,-su.z),Yb.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Yb,Ct.coordinateSystem,Ct.reversedDepth)}else F.updateMatrices(B);i=F.getFrustum(),M(C,v,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===$o&&m(F,v),F.needsUpdate=!1}h=this.type,g.needsUpdate=!1,e.setRenderTarget(A,D,R)};function m(E,C){let v=t.update(S);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hi(s.x,s.y,{format:Fa,type:cs})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(C,null,v,u,S,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(C,null,v,d,S,null)}function x(E,C,v,A){let D=null,R=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)D=R;else if(D=v.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let P=D.uuid,V=C.uuid,W=c[P];W===void 0&&(W={},c[P]=W);let N=W[V];N===void 0&&(N=D.clone(),W[V]=N,C.addEventListener("dispose",w)),D=N}if(D.visible=C.visible,D.wireframe=C.wireframe,A===$o?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:p[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let P=e.properties.get(D);P.light=v}return D}function M(E,C,v,A,D){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===$o)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let V=t.update(E),W=E.material;if(Array.isArray(W)){let N=V.groups;for(let B=0,F=N.length;B<F;B++){let st=N[B],et=W[st.materialIndex];if(et&&et.visible){let lt=x(E,et,A,D);E.onBeforeShadow(e,E,C,v,V,lt,st),e.renderBufferDirect(v,null,V,lt,E,st),E.onAfterShadow(e,E,C,v,V,lt,st)}}}else if(W.visible){let N=x(E,W,A,D);E.onBeforeShadow(e,E,C,v,V,N,null),e.renderBufferDirect(v,null,V,N,E,null),E.onAfterShadow(e,E,C,v,V,N,null)}}let P=E.children;for(let V=0,W=P.length;V<W;V++)M(P[V],C,v,A,D)}function w(E){E.target.removeEventListener("dispose",w);for(let v in c){let A=c[v],D=E.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function E3(e,t){function n(){let U=!1,it=new Ye,Z=null,vt=new Ye(0,0,0,0);return{setMask:function(ut){Z!==ut&&!U&&(e.colorMask(ut,ut,ut,ut),Z=ut)},setLocked:function(ut){U=ut},setClear:function(ut,nt,wt,Lt,Ve){Ve===!0&&(ut*=Lt,nt*=Lt,wt*=Lt),it.set(ut,nt,wt,Lt),vt.equals(it)===!1&&(e.clearColor(ut,nt,wt,Lt),vt.copy(it))},reset:function(){U=!1,Z=null,vt.set(-1,0,0,0)}}}function i(){let U=!1,it=!1,Z=null,vt=null,ut=null;return{setReversed:function(nt){if(it!==nt){let wt=t.get("EXT_clip_control");nt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),it=nt;let Lt=ut;ut=null,this.setClear(Lt)}},getReversed:function(){return it},setTest:function(nt){nt?dt(e.DEPTH_TEST):Rt(e.DEPTH_TEST)},setMask:function(nt){Z!==nt&&!U&&(e.depthMask(nt),Z=nt)},setFunc:function(nt){if(it&&(nt=Sb[nt]),vt!==nt){switch(nt){case Mf:e.depthFunc(e.NEVER);break;case bf:e.depthFunc(e.ALWAYS);break;case Ef:e.depthFunc(e.LESS);break;case _r:e.depthFunc(e.LEQUAL);break;case Tf:e.depthFunc(e.EQUAL);break;case Af:e.depthFunc(e.GEQUAL);break;case wf:e.depthFunc(e.GREATER);break;case Cf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}vt=nt}},setLocked:function(nt){U=nt},setClear:function(nt){ut!==nt&&(ut=nt,it&&(nt=1-nt),e.clearDepth(nt))},reset:function(){U=!1,Z=null,vt=null,ut=null,it=!1}}}function s(){let U=!1,it=null,Z=null,vt=null,ut=null,nt=null,wt=null,Lt=null,Ve=null;return{setTest:function(_e){U||(_e?dt(e.STENCIL_TEST):Rt(e.STENCIL_TEST))},setMask:function(_e){it!==_e&&!U&&(e.stencilMask(_e),it=_e)},setFunc:function(_e,Vn,mi){(Z!==_e||vt!==Vn||ut!==mi)&&(e.stencilFunc(_e,Vn,mi),Z=_e,vt=Vn,ut=mi)},setOp:function(_e,Vn,mi){(nt!==_e||wt!==Vn||Lt!==mi)&&(e.stencilOp(_e,Vn,mi),nt=_e,wt=Vn,Lt=mi)},setLocked:function(_e){U=_e},setClear:function(_e){Ve!==_e&&(e.clearStencil(_e),Ve=_e)},reset:function(){U=!1,it=null,Z=null,vt=null,ut=null,nt=null,wt=null,Lt=null,Ve=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,_=[],S=null,g=!1,h=null,m=null,x=null,M=null,w=null,E=null,C=null,v=new Ht(0,0,0),A=0,D=!1,R=null,P=null,V=null,W=null,N=null,B=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,st=0,et=e.getParameter(e.VERSION);et.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(et)[1]),F=st>=1):et.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),F=st>=2);let lt=null,Tt={},Ct=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),pe=new Ye().fromArray(Ct),Ft=new Ye().fromArray(ne);function $(U,it,Z,vt){let ut=new Uint8Array(4),nt=e.createTexture();e.bindTexture(U,nt),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let wt=0;wt<Z;wt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(it,0,e.RGBA,1,1,vt,0,e.RGBA,e.UNSIGNED_BYTE,ut):e.texImage2D(it+wt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ut);return nt}let St={};St[e.TEXTURE_2D]=$(e.TEXTURE_2D,e.TEXTURE_2D,1),St[e.TEXTURE_CUBE_MAP]=$(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[e.TEXTURE_2D_ARRAY]=$(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),St[e.TEXTURE_3D]=$(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),dt(e.DEPTH_TEST),r.setFunc(_r),We(!1),fe(Cg),dt(e.CULL_FACE),De(ls);function dt(U){f[U]!==!0&&(e.enable(U),f[U]=!0)}function Rt(U){f[U]!==!1&&(e.disable(U),f[U]=!1)}function Ot(U,it){return u[U]!==it?(e.bindFramebuffer(U,it),u[U]=it,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=it),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=it),!0):!1}function Ut(U,it){let Z=_,vt=!1;if(U){Z=d.get(it),Z===void 0&&(Z=[],d.set(it,Z));let ut=U.textures;if(Z.length!==ut.length||Z[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,wt=ut.length;nt<wt;nt++)Z[nt]=e.COLOR_ATTACHMENT0+nt;Z.length=ut.length,vt=!0}}else Z[0]!==e.BACK&&(Z[0]=e.BACK,vt=!0);vt&&e.drawBuffers(Z)}function Re(U){return S!==U?(e.useProgram(U),S=U,!0):!1}let Zt={[Ra]:e.FUNC_ADD,[XM]:e.FUNC_SUBTRACT,[WM]:e.FUNC_REVERSE_SUBTRACT};Zt[qM]=e.MIN,Zt[YM]=e.MAX;let he={[ZM]:e.ZERO,[JM]:e.ONE,[KM]:e.SRC_COLOR,[yf]:e.SRC_ALPHA,[nb]:e.SRC_ALPHA_SATURATE,[tb]:e.DST_COLOR,[jM]:e.DST_ALPHA,[QM]:e.ONE_MINUS_SRC_COLOR,[Sf]:e.ONE_MINUS_SRC_ALPHA,[eb]:e.ONE_MINUS_DST_COLOR,[$M]:e.ONE_MINUS_DST_ALPHA,[ib]:e.CONSTANT_COLOR,[sb]:e.ONE_MINUS_CONSTANT_COLOR,[ab]:e.CONSTANT_ALPHA,[rb]:e.ONE_MINUS_CONSTANT_ALPHA};function De(U,it,Z,vt,ut,nt,wt,Lt,Ve,_e){if(U===ls){g===!0&&(Rt(e.BLEND),g=!1);return}if(g===!1&&(dt(e.BLEND),g=!0),U!==kM){if(U!==h||_e!==D){if((m!==Ra||w!==Ra)&&(e.blendEquation(e.FUNC_ADD),m=Ra,w=Ra),_e)switch(U){case gr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Xs:e.blendFunc(e.ONE,e.ONE);break;case Rg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Dg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Nt("WebGLState: Invalid blending: ",U);break}else switch(U){case gr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Xs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Rg:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dg:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",U);break}x=null,M=null,E=null,C=null,v.set(0,0,0),A=0,h=U,D=_e}return}ut=ut||it,nt=nt||Z,wt=wt||vt,(it!==m||ut!==w)&&(e.blendEquationSeparate(Zt[it],Zt[ut]),m=it,w=ut),(Z!==x||vt!==M||nt!==E||wt!==C)&&(e.blendFuncSeparate(he[Z],he[vt],he[nt],he[wt]),x=Z,M=vt,E=nt,C=wt),(Lt.equals(v)===!1||Ve!==A)&&(e.blendColor(Lt.r,Lt.g,Lt.b,Ve),v.copy(Lt),A=Ve),h=U,D=!1}function Wt(U,it){U.side===zn?Rt(e.CULL_FACE):dt(e.CULL_FACE);let Z=U.side===Fn;it&&(Z=!Z),We(Z),U.blending===gr&&U.transparent===!1?De(ls):De(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let vt=U.stencilWrite;o.setTest(vt),vt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),L(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?dt(e.SAMPLE_ALPHA_TO_COVERAGE):Rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function We(U){R!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),R=U)}function fe(U){U!==HM?(dt(e.CULL_FACE),U!==P&&(U===Cg?e.cullFace(e.BACK):U===VM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Rt(e.CULL_FACE),P=U}function Un(U){U!==V&&(F&&e.lineWidth(U),V=U)}function L(U,it,Z){U?(dt(e.POLYGON_OFFSET_FILL),(W!==it||N!==Z)&&(W=it,N=Z,r.getReversed()&&(it=-it),e.polygonOffset(it,Z))):Rt(e.POLYGON_OFFSET_FILL)}function Ue(U){U?dt(e.SCISSOR_TEST):Rt(e.SCISSOR_TEST)}function Jt(U){U===void 0&&(U=e.TEXTURE0+B-1),lt!==U&&(e.activeTexture(U),lt=U)}function Se(U,it,Z){Z===void 0&&(lt===null?Z=e.TEXTURE0+B-1:Z=lt);let vt=Tt[Z];vt===void 0&&(vt={type:void 0,texture:void 0},Tt[Z]=vt),(vt.type!==U||vt.texture!==it)&&(lt!==Z&&(e.activeTexture(Z),lt=Z),e.bindTexture(U,it||St[U]),vt.type=U,vt.texture=it)}function _t(){let U=Tt[lt];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ne(){try{e.compressedTexImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function y(){try{e.texSubImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function z(){try{e.texSubImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function K(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function at(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function ct(){try{e.texStorage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function rt(){try{e.texStorage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function Y(){try{e.texImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function Q(){try{e.texImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function xt(U){return p[U]!==void 0?p[U]:e.getParameter(U)}function Et(U,it){p[U]!==it&&(e.pixelStorei(U,it),p[U]=it)}function pt(U){pe.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function ft(U){Ft.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Ft.copy(U))}function Pt(U,it){let Z=c.get(it);Z===void 0&&(Z=new WeakMap,c.set(it,Z));let vt=Z.get(U);vt===void 0&&(vt=e.getUniformBlockIndex(it,U.name),Z.set(U,vt))}function Vt(U,it){let vt=c.get(it).get(U);l.get(it)!==vt&&(e.uniformBlockBinding(it,vt,U.__bindingPointIndex),l.set(it,vt))}function jt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},lt=null,Tt={},u={},d=new WeakMap,_=[],S=null,g=!1,h=null,m=null,x=null,M=null,w=null,E=null,C=null,v=new Ht(0,0,0),A=0,D=!1,R=null,P=null,V=null,W=null,N=null,pe.set(0,0,e.canvas.width,e.canvas.height),Ft.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:dt,disable:Rt,bindFramebuffer:Ot,drawBuffers:Ut,useProgram:Re,setBlending:De,setMaterial:Wt,setFlipSided:We,setCullFace:fe,setLineWidth:Un,setPolygonOffset:L,setScissorTest:Ue,activeTexture:Jt,bindTexture:Se,unbindTexture:_t,compressedTexImage2D:Ne,compressedTexImage3D:T,texImage2D:Y,texImage3D:Q,pixelStorei:Et,getParameter:xt,updateUBOMapping:Pt,uniformBlockBinding:Vt,texStorage2D:ct,texStorage3D:rt,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:K,compressedTexSubImage3D:at,scissor:pt,viewport:ft,reset:jt}}function T3(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,f=new WeakMap,p=new Set,u,d=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,y){return _?new OffscreenCanvas(T,y):wc("canvas")}function g(T,y,z){let K=1,at=Ne(T);if((at.width>z||at.height>z)&&(K=z/Math.max(at.width,at.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ct=Math.floor(K*at.width),rt=Math.floor(K*at.height);u===void 0&&(u=S(ct,rt));let Y=y?S(ct,rt):u;return Y.width=ct,Y.height=rt,Y.getContext("2d").drawImage(T,0,0,ct,rt),Dt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+ct+"x"+rt+")."),Y}else return"data"in T&&Dt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),T;return T}function h(T){return T.generateMipmaps}function m(T){e.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(T,y,z,K,at,ct=!1){if(T!==null){if(e[T]!==void 0)return e[T];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let rt;K&&(rt=t.get("EXT_texture_norm16"),rt||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===e.RED&&(z===e.FLOAT&&(Y=e.R32F),z===e.HALF_FLOAT&&(Y=e.R16F),z===e.UNSIGNED_BYTE&&(Y=e.R8),z===e.UNSIGNED_SHORT&&rt&&(Y=rt.R16_EXT),z===e.SHORT&&rt&&(Y=rt.R16_SNORM_EXT)),y===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.R8UI),z===e.UNSIGNED_SHORT&&(Y=e.R16UI),z===e.UNSIGNED_INT&&(Y=e.R32UI),z===e.BYTE&&(Y=e.R8I),z===e.SHORT&&(Y=e.R16I),z===e.INT&&(Y=e.R32I)),y===e.RG&&(z===e.FLOAT&&(Y=e.RG32F),z===e.HALF_FLOAT&&(Y=e.RG16F),z===e.UNSIGNED_BYTE&&(Y=e.RG8),z===e.UNSIGNED_SHORT&&rt&&(Y=rt.RG16_EXT),z===e.SHORT&&rt&&(Y=rt.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RG8UI),z===e.UNSIGNED_SHORT&&(Y=e.RG16UI),z===e.UNSIGNED_INT&&(Y=e.RG32UI),z===e.BYTE&&(Y=e.RG8I),z===e.SHORT&&(Y=e.RG16I),z===e.INT&&(Y=e.RG32I)),y===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),z===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),z===e.UNSIGNED_INT&&(Y=e.RGB32UI),z===e.BYTE&&(Y=e.RGB8I),z===e.SHORT&&(Y=e.RGB16I),z===e.INT&&(Y=e.RGB32I)),y===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),z===e.UNSIGNED_INT&&(Y=e.RGBA32UI),z===e.BYTE&&(Y=e.RGBA8I),z===e.SHORT&&(Y=e.RGBA16I),z===e.INT&&(Y=e.RGBA32I)),y===e.RGB&&(z===e.UNSIGNED_SHORT&&rt&&(Y=rt.RGB16_EXT),z===e.SHORT&&rt&&(Y=rt.RGB16_SNORM_EXT),z===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),y===e.RGBA){let Q=ct?Ac:se.getTransfer(at);z===e.FLOAT&&(Y=e.RGBA32F),z===e.HALF_FLOAT&&(Y=e.RGBA16F),z===e.UNSIGNED_BYTE&&(Y=Q===xe?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT&&rt&&(Y=rt.RGBA16_EXT),z===e.SHORT&&rt&&(Y=rt.RGBA16_SNORM_EXT),z===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function w(T,y){let z;return T?y===null||y===Gi||y===el?z=e.DEPTH24_STENCIL8:y===Ci?z=e.DEPTH32F_STENCIL8:y===tl&&(z=e.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gi||y===el?z=e.DEPTH_COMPONENT24:y===Ci?z=e.DEPTH_COMPONENT32F:y===tl&&(z=e.DEPTH_COMPONENT16),z}function E(T,y){return h(T)===!0||T.isFramebufferTexture&&T.minFilter!==gn&&T.minFilter!==bn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function C(T){let y=T.target;y.removeEventListener("dispose",C),A(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&p.delete(y)}function v(T){let y=T.target;y.removeEventListener("dispose",v),R(y)}function A(T){let y=i.get(T);if(y.__webglInit===void 0)return;let z=T.source,K=d.get(z);if(K){let at=K[y.__cacheKey];at.usedTimes--,at.usedTimes===0&&D(T),Object.keys(K).length===0&&d.delete(z)}i.remove(T)}function D(T){let y=i.get(T);e.deleteTexture(y.__webglTexture);let z=T.source,K=d.get(z);delete K[y.__cacheKey],r.memory.textures--}function R(T){let y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let at=0;at<y.__webglFramebuffer[K].length;at++)e.deleteFramebuffer(y.__webglFramebuffer[K][at]);else e.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)e.deleteFramebuffer(y.__webglFramebuffer[K]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=T.textures;for(let K=0,at=z.length;K<at;K++){let ct=i.get(z[K]);ct.__webglTexture&&(e.deleteTexture(ct.__webglTexture),r.memory.textures--),i.remove(z[K])}i.remove(T)}let P=0;function V(){P=0}function W(){return P}function N(T){P=T}function B(){let T=P;return T>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function F(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function st(T,y){let z=i.get(T);if(T.isVideoTexture&&Se(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let K=T.image;if(K===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(z,T,y);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+y)}function et(T,y){let z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Rt(z,T,y);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+y)}function lt(T,y){let z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Rt(z,T,y);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+y)}function Tt(T,y){let z=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&z.__version!==T.version){Ot(z,T,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+y)}let Ct={[Rf]:e.REPEAT,[es]:e.CLAMP_TO_EDGE,[Df]:e.MIRRORED_REPEAT},ne={[gn]:e.NEAREST,[cb]:e.NEAREST_MIPMAP_NEAREST,[Kc]:e.NEAREST_MIPMAP_LINEAR,[bn]:e.LINEAR,[od]:e.LINEAR_MIPMAP_NEAREST,[Pa]:e.LINEAR_MIPMAP_LINEAR},pe={[fb]:e.NEVER,[_b]:e.ALWAYS,[db]:e.LESS,[qd]:e.LEQUAL,[pb]:e.EQUAL,[Yd]:e.GEQUAL,[mb]:e.GREATER,[gb]:e.NOTEQUAL};function Ft(T,y){if(y.type===Ci&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===bn||y.magFilter===od||y.magFilter===Kc||y.magFilter===Pa||y.minFilter===bn||y.minFilter===od||y.minFilter===Kc||y.minFilter===Pa)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,Ct[y.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,Ct[y.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,Ct[y.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,ne[y.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,ne[y.minFilter]),y.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===gn||y.minFilter!==Kc&&y.minFilter!==Pa||y.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function $(T,y){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",C));let K=y.source,at=d.get(K);at===void 0&&(at={},d.set(K,at));let ct=F(y);if(ct!==T.__cacheKey){at[ct]===void 0&&(at[ct]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,z=!0),at[ct].usedTimes++;let rt=at[T.__cacheKey];rt!==void 0&&(at[T.__cacheKey].usedTimes--,rt.usedTimes===0&&D(y)),T.__cacheKey=ct,T.__webglTexture=at[ct].texture}return z}function St(T,y,z){return Math.floor(Math.floor(T/z)/y)}function dt(T,y,z,K){let ct=T.updateRanges;if(ct.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,z,K,y.data);else{ct.sort((Et,pt)=>Et.start-pt.start);let rt=0;for(let Et=1;Et<ct.length;Et++){let pt=ct[rt],ft=ct[Et],Pt=pt.start+pt.count,Vt=St(ft.start,y.width,4),jt=St(pt.start,y.width,4);ft.start<=Pt+1&&Vt===jt&&St(ft.start+ft.count-1,y.width,4)===Vt?pt.count=Math.max(pt.count,ft.start+ft.count-pt.start):(++rt,ct[rt]=ft)}ct.length=rt+1;let Y=n.getParameter(e.UNPACK_ROW_LENGTH),Q=n.getParameter(e.UNPACK_SKIP_PIXELS),xt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let Et=0,pt=ct.length;Et<pt;Et++){let ft=ct[Et],Pt=Math.floor(ft.start/4),Vt=Math.ceil(ft.count/4),jt=Pt%y.width,U=Math.floor(Pt/y.width),it=Vt,Z=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,jt),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,jt,U,it,Z,z,K,y.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Y),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(e.UNPACK_SKIP_ROWS,xt)}}function Rt(T,y,z){let K=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=e.TEXTURE_3D);let at=$(T,y),ct=y.source;n.bindTexture(K,T.__webglTexture,e.TEXTURE0+z);let rt=i.get(ct);if(ct.version!==rt.__version||at===!0){if(n.activeTexture(e.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Z=se.getPrimaries(se.workingColorSpace),vt=y.colorSpace===Ws?null:se.getPrimaries(y.colorSpace),ut=y.colorSpace===Ws||Z===vt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=g(y.image,!1,s.maxTextureSize);Q=_t(y,Q);let xt=a.convert(y.format,y.colorSpace),Et=a.convert(y.type),pt=M(y.internalFormat,xt,Et,y.normalized,y.colorSpace,y.isVideoTexture);Ft(K,y);let ft,Pt=y.mipmaps,Vt=y.isVideoTexture!==!0,jt=rt.__version===void 0||at===!0,U=ct.dataReady,it=E(y,Q);if(y.isDepthTexture)pt=w(y.format===Ba,y.type),jt&&(Vt?n.texStorage2D(e.TEXTURE_2D,1,pt,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,pt,Q.width,Q.height,0,xt,Et,null));else if(y.isDataTexture)if(Pt.length>0){Vt&&jt&&n.texStorage2D(e.TEXTURE_2D,it,pt,Pt[0].width,Pt[0].height);for(let Z=0,vt=Pt.length;Z<vt;Z++)ft=Pt[Z],Vt?U&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,ft.width,ft.height,xt,Et,ft.data):n.texImage2D(e.TEXTURE_2D,Z,pt,ft.width,ft.height,0,xt,Et,ft.data);y.generateMipmaps=!1}else Vt?(jt&&n.texStorage2D(e.TEXTURE_2D,it,pt,Q.width,Q.height),U&&dt(y,Q,xt,Et)):n.texImage2D(e.TEXTURE_2D,0,pt,Q.width,Q.height,0,xt,Et,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Vt&&jt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,it,pt,Pt[0].width,Pt[0].height,Q.depth);for(let Z=0,vt=Pt.length;Z<vt;Z++)if(ft=Pt[Z],y.format!==Ri)if(xt!==null)if(Vt){if(U)if(y.layerUpdates.size>0){let ut=Jg(ft.width,ft.height,y.format,y.type);for(let nt of y.layerUpdates){let wt=ft.data.subarray(nt*ut/ft.data.BYTES_PER_ELEMENT,(nt+1)*ut/ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,nt,ft.width,ft.height,1,xt,wt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ft.width,ft.height,Q.depth,xt,ft.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,pt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ft.width,ft.height,Q.depth,xt,Et,ft.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Z,pt,ft.width,ft.height,Q.depth,0,xt,Et,ft.data)}else{Vt&&jt&&n.texStorage2D(e.TEXTURE_2D,it,pt,Pt[0].width,Pt[0].height);for(let Z=0,vt=Pt.length;Z<vt;Z++)ft=Pt[Z],y.format!==Ri?xt!==null?Vt?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,ft.width,ft.height,xt,ft.data):n.compressedTexImage2D(e.TEXTURE_2D,Z,pt,ft.width,ft.height,0,ft.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?U&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,ft.width,ft.height,xt,Et,ft.data):n.texImage2D(e.TEXTURE_2D,Z,pt,ft.width,ft.height,0,xt,Et,ft.data)}else if(y.isDataArrayTexture)if(Vt){if(jt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,it,pt,Q.width,Q.height,Q.depth),U)if(y.layerUpdates.size>0){let Z=Jg(Q.width,Q.height,y.format,y.type);for(let vt of y.layerUpdates){let ut=Q.data.subarray(vt*Z/Q.data.BYTES_PER_ELEMENT,(vt+1)*Z/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,vt,Q.width,Q.height,1,xt,Et,ut)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,xt,Et,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,pt,Q.width,Q.height,Q.depth,0,xt,Et,Q.data);else if(y.isData3DTexture)Vt?(jt&&n.texStorage3D(e.TEXTURE_3D,it,pt,Q.width,Q.height,Q.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,xt,Et,Q.data)):n.texImage3D(e.TEXTURE_3D,0,pt,Q.width,Q.height,Q.depth,0,xt,Et,Q.data);else if(y.isFramebufferTexture){if(jt)if(Vt)n.texStorage2D(e.TEXTURE_2D,it,pt,Q.width,Q.height);else{let Z=Q.width,vt=Q.height;for(let ut=0;ut<it;ut++)n.texImage2D(e.TEXTURE_2D,ut,pt,Z,vt,0,xt,Et,null),Z>>=1,vt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let Z=e.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),Q.parentNode!==Z){Z.appendChild(Q),p.add(y),Z.onpaint=Lt=>{let Ve=Lt.changedElements;for(let _e of p)Ve.includes(_e.image)&&(_e.needsUpdate=!0)},Z.requestPaint();return}let vt=0,ut=e.RGBA,nt=e.RGBA,wt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,vt,ut,nt,wt,Q),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Vt&&jt){let Z=Ne(Pt[0]);n.texStorage2D(e.TEXTURE_2D,it,pt,Z.width,Z.height)}for(let Z=0,vt=Pt.length;Z<vt;Z++)ft=Pt[Z],Vt?U&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,xt,Et,ft):n.texImage2D(e.TEXTURE_2D,Z,pt,xt,Et,ft);y.generateMipmaps=!1}else if(Vt){if(jt){let Z=Ne(Q);n.texStorage2D(e.TEXTURE_2D,it,pt,Z.width,Z.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,xt,Et,Q)}else n.texImage2D(e.TEXTURE_2D,0,pt,xt,Et,Q);h(y)&&m(K),rt.__version=ct.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Ot(T,y,z){if(y.image.length!==6)return;let K=$(T,y),at=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+z);let ct=i.get(at);if(at.version!==ct.__version||K===!0){n.activeTexture(e.TEXTURE0+z);let rt=se.getPrimaries(se.workingColorSpace),Y=y.colorSpace===Ws?null:se.getPrimaries(y.colorSpace),Q=y.colorSpace===Ws||rt===Y?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let xt=y.isCompressedTexture||y.image[0].isCompressedTexture,Et=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let nt=0;nt<6;nt++)!xt&&!Et?pt[nt]=g(y.image[nt],!0,s.maxCubemapSize):pt[nt]=Et?y.image[nt].image:y.image[nt],pt[nt]=_t(y,pt[nt]);let ft=pt[0],Pt=a.convert(y.format,y.colorSpace),Vt=a.convert(y.type),jt=M(y.internalFormat,Pt,Vt,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,it=ct.__version===void 0||K===!0,Z=at.dataReady,vt=E(y,ft);Ft(e.TEXTURE_CUBE_MAP,y);let ut;if(xt){U&&it&&n.texStorage2D(e.TEXTURE_CUBE_MAP,vt,jt,ft.width,ft.height);for(let nt=0;nt<6;nt++){ut=pt[nt].mipmaps;for(let wt=0;wt<ut.length;wt++){let Lt=ut[wt];y.format!==Ri?Pt!==null?U?Z&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,Lt.width,Lt.height,Pt,Lt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,jt,Lt.width,Lt.height,0,Lt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,Lt.width,Lt.height,Pt,Vt,Lt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,jt,Lt.width,Lt.height,0,Pt,Vt,Lt.data)}}}else{if(ut=y.mipmaps,U&&it){ut.length>0&&vt++;let nt=Ne(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,vt,jt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Et){U?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,pt[nt].width,pt[nt].height,Pt,Vt,pt[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,jt,pt[nt].width,pt[nt].height,0,Pt,Vt,pt[nt].data);for(let wt=0;wt<ut.length;wt++){let Ve=ut[wt].image[nt].image;U?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,Ve.width,Ve.height,Pt,Vt,Ve.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,jt,Ve.width,Ve.height,0,Pt,Vt,Ve.data)}}else{U?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Pt,Vt,pt[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,jt,Pt,Vt,pt[nt]);for(let wt=0;wt<ut.length;wt++){let Lt=ut[wt];U?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,Pt,Vt,Lt.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,jt,Pt,Vt,Lt.image[nt])}}}h(y)&&m(e.TEXTURE_CUBE_MAP),ct.__version=at.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Ut(T,y,z,K,at,ct){let rt=a.convert(z.format,z.colorSpace),Y=a.convert(z.type),Q=M(z.internalFormat,rt,Y,z.normalized,z.colorSpace),xt=i.get(y),Et=i.get(z);if(Et.__renderTarget=y,!xt.__hasExternalTextures){let pt=Math.max(1,y.width>>ct),ft=Math.max(1,y.height>>ct);at===e.TEXTURE_3D||at===e.TEXTURE_2D_ARRAY?n.texImage3D(at,ct,Q,pt,ft,y.depth,0,rt,Y,null):n.texImage2D(at,ct,Q,pt,ft,0,rt,Y,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),Jt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,at,Et.__webglTexture,0,Ue(y)):(at===e.TEXTURE_2D||at>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,at,Et.__webglTexture,ct),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Re(T,y,z){if(e.bindRenderbuffer(e.RENDERBUFFER,T),y.depthBuffer){let K=y.depthTexture,at=K&&K.isDepthTexture?K.type:null,ct=w(y.stencilBuffer,at),rt=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Jt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ue(y),ct,y.width,y.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ue(y),ct,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,ct,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,rt,e.RENDERBUFFER,T)}else{let K=y.textures;for(let at=0;at<K.length;at++){let ct=K[at],rt=a.convert(ct.format,ct.colorSpace),Y=a.convert(ct.type),Q=M(ct.internalFormat,rt,Y,ct.normalized,ct.colorSpace);Jt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ue(y),Q,y.width,y.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ue(y),Q,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,Q,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Zt(T,y,z){let K=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=i.get(y.depthTexture);if(at.__renderTarget=y,(!at.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(at.__webglInit===void 0&&(at.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),at.__webglTexture===void 0){at.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,at.__webglTexture),Ft(e.TEXTURE_CUBE_MAP,y.depthTexture);let xt=a.convert(y.depthTexture.format),Et=a.convert(y.depthTexture.type),pt;y.depthTexture.format===ns?pt=e.DEPTH_COMPONENT24:y.depthTexture.format===Ba&&(pt=e.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,y.width,y.height,0,xt,Et,null)}}else st(y.depthTexture,0);let ct=at.__webglTexture,rt=Ue(y),Y=K?e.TEXTURE_CUBE_MAP_POSITIVE_X+z:e.TEXTURE_2D,Q=y.depthTexture.format===Ba?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===ns)Jt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,Y,ct,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,Q,Y,ct,0);else if(y.depthTexture.format===Ba)Jt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,Y,ct,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,Q,Y,ct,0);else throw new Error("Unknown depthTexture format")}function he(T){let y=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let K=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){let at=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",at)};K.addEventListener("dispose",at),y.__depthDisposeCallback=at}y.__boundDepthTexture=K}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let K=0;K<6;K++)Zt(y.__webglFramebuffer[K],T,K);else{let K=T.texture.mipmaps;K&&K.length>0?Zt(y.__webglFramebuffer[0],T,0):Zt(y.__webglFramebuffer,T,0)}else if(z){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=e.createRenderbuffer(),Re(y.__webglDepthbuffer[K],T,!1);else{let at=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,ct),e.framebufferRenderbuffer(e.FRAMEBUFFER,at,e.RENDERBUFFER,ct)}}else{let K=T.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Re(y.__webglDepthbuffer,T,!1);else{let at=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ct),e.framebufferRenderbuffer(e.FRAMEBUFFER,at,e.RENDERBUFFER,ct)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(T,y,z){let K=i.get(T);y!==void 0&&Ut(K.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&he(T)}function Wt(T){let y=T.texture,z=i.get(T),K=i.get(y);T.addEventListener("dispose",v);let at=T.textures,ct=T.isWebGLCubeRenderTarget===!0,rt=at.length>1;if(rt||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=y.version,r.memory.textures++),ct){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let Q=0;Q<y.mipmaps.length;Q++)z.__webglFramebuffer[Y][Q]=e.createFramebuffer()}else z.__webglFramebuffer[Y]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)z.__webglFramebuffer[Y]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(rt)for(let Y=0,Q=at.length;Y<Q;Y++){let xt=i.get(at[Y]);xt.__webglTexture===void 0&&(xt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&Jt(T)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<at.length;Y++){let Q=at[Y];z.__webglColorRenderbuffer[Y]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);let xt=a.convert(Q.format,Q.colorSpace),Et=a.convert(Q.type),pt=M(Q.internalFormat,xt,Et,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),ft=Ue(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,ft,pt,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),Re(z.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ct){n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),Ft(e.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Ut(z.__webglFramebuffer[Y][Q],T,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else Ut(z.__webglFramebuffer[Y],T,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);h(y)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(rt){for(let Y=0,Q=at.length;Y<Q;Y++){let xt=at[Y],Et=i.get(xt),pt=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(pt,Et.__webglTexture),Ft(pt,xt),Ut(z.__webglFramebuffer,T,xt,e.COLOR_ATTACHMENT0+Y,pt,0),h(xt)&&m(pt)}n.unbindTexture()}else{let Y=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Y,K.__webglTexture),Ft(Y,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Ut(z.__webglFramebuffer[Q],T,y,e.COLOR_ATTACHMENT0,Y,Q);else Ut(z.__webglFramebuffer,T,y,e.COLOR_ATTACHMENT0,Y,0);h(y)&&m(Y),n.unbindTexture()}T.depthBuffer&&he(T)}function We(T){let y=T.textures;for(let z=0,K=y.length;z<K;z++){let at=y[z];if(h(at)){let ct=x(T),rt=i.get(at).__webglTexture;n.bindTexture(ct,rt),m(ct),n.unbindTexture()}}}let fe=[],Un=[];function L(T){if(T.samples>0){if(Jt(T)===!1){let y=T.textures,z=T.width,K=T.height,at=e.COLOR_BUFFER_BIT,ct=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=i.get(T),Y=y.length>1;if(Y)for(let xt=0;xt<y.length;xt++)n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let Q=T.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let xt=0;xt<y.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(at|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(at|=e.STENCIL_BUFFER_BIT)),Y){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,rt.__webglColorRenderbuffer[xt]);let Et=i.get(y[xt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Et,0)}e.blitFramebuffer(0,0,z,K,0,0,z,K,at,e.NEAREST),l===!0&&(fe.length=0,Un.length=0,fe.push(e.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(fe.push(ct),Un.push(ct),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Un)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Y)for(let xt=0;xt<y.length;xt++){n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,rt.__webglColorRenderbuffer[xt]);let Et=i.get(y[xt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,Et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function Ue(T){return Math.min(s.maxSamples,T.samples)}function Jt(T){let y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Se(T){let y=r.render.frame;f.get(T)!==y&&(f.set(T,y),T.update())}function _t(T,y){let z=T.colorSpace,K=T.format,at=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Tc&&z!==Ws&&(se.getTransfer(z)===xe?(K!==Ri||at!==Jn)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",z)),y}function Ne(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.getTextureUnits=W,this.setTextureUnits=N,this.setTexture2D=st,this.setTexture2DArray=et,this.setTexture3D=lt,this.setTextureCube=Tt,this.rebindTextures=De,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function A3(e,t){function n(i,s=Ws){let a,r=se.getTransfer(s);if(i===Jn)return e.UNSIGNED_BYTE;if(i===cd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===ud)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Vg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Gg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===zg)return e.BYTE;if(i===Hg)return e.SHORT;if(i===tl)return e.UNSIGNED_SHORT;if(i===ld)return e.INT;if(i===Gi)return e.UNSIGNED_INT;if(i===Ci)return e.FLOAT;if(i===cs)return e.HALF_FLOAT;if(i===kg)return e.ALPHA;if(i===Xg)return e.RGB;if(i===Ri)return e.RGBA;if(i===ns)return e.DEPTH_COMPONENT;if(i===Ba)return e.DEPTH_STENCIL;if(i===hd)return e.RED;if(i===fd)return e.RED_INTEGER;if(i===Fa)return e.RG;if(i===dd)return e.RG_INTEGER;if(i===pd)return e.RGBA_INTEGER;if(i===Qc||i===jc||i===$c||i===tu)if(r===xe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Qc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Qc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$c)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===md||i===gd||i===_d||i===vd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===md)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_d)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xd||i===yd||i===Sd||i===Md||i===bd||i===eu||i===Ed)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===xd||i===yd)return r===xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Sd)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Md)return a.COMPRESSED_R11_EAC;if(i===bd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===eu)return a.COMPRESSED_RG11_EAC;if(i===Ed)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Td||i===Ad||i===wd||i===Cd||i===Rd||i===Dd||i===Ud||i===Nd||i===Ld||i===Id||i===Od||i===Pd||i===Bd||i===Fd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Td)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ad)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wd)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cd)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rd)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dd)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ud)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nd)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ld)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pd)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bd)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zd||i===Hd||i===Vd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===zd)return r===xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gd||i===kd||i===nu||i===Xd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Gd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===kd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===el?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}function D3(e,t){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,qg(e)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,m,x,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(g,h):h.isMeshLambertMaterial?(a(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(g,h),p(g,h)):h.isMeshPhongMaterial?(a(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(g,h),u(g,h),h.isMeshPhysicalMaterial&&d(g,h,M)):h.isMeshMatcapMaterial?(a(g,h),_(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),S(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(r(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,m,x):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Fn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Fn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let m=t.get(h),x=m.envMap,M=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(R3.makeRotationFromEuler(M)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(t1),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function r(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function d(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Fn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function S(g,h){let m=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function U3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){let M=x.program;i.uniformBlockBinding(m,M)}function c(m,x){let M=s[m.id];M===void 0&&(_(m),M=f(m),s[m.id]=M,m.addEventListener("dispose",g));let w=x.program;i.updateUBOMapping(m,w);let E=t.render.frame;a[m.id]!==E&&(u(m),a[m.id]=E)}function f(m){let x=p();m.__bindingPointIndex=x;let M=e.createBuffer(),w=m.__size,E=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,w,E),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,M),M}function p(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){let x=s[m.id],M=m.uniforms,w=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let E=0,C=M.length;E<C;E++){let v=Array.isArray(M[E])?M[E]:[M[E]];for(let A=0,D=v.length;A<D;A++){let R=v[A];if(d(R,E,A,w)===!0){let P=R.__offset,V=Array.isArray(R.value)?R.value:[R.value],W=0;for(let N=0;N<V.length;N++){let B=V[N],F=S(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,e.bufferSubData(e.UNIFORM_BUFFER,P+W,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):ArrayBuffer.isView(B)?R.__data.set(new B.constructor(B.buffer,B.byteOffset,R.__data.length)):(B.toArray(R.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,P,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(m,x,M,w){let E=m.value,C=x+"_"+M;if(w[C]===void 0)return typeof E=="number"||typeof E=="boolean"?w[C]=E:ArrayBuffer.isView(E)?w[C]=E.slice():w[C]=E.clone(),!0;{let v=w[C];if(typeof E=="number"||typeof E=="boolean"){if(v!==E)return w[C]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(v.equals(E)===!1)return v.copy(E),!0}}return!1}function _(m){let x=m.uniforms,M=0,w=16;for(let C=0,v=x.length;C<v;C++){let A=Array.isArray(x[C])?x[C]:[x[C]];for(let D=0,R=A.length;D<R;D++){let P=A[D],V=Array.isArray(P.value)?P.value:[P.value];for(let W=0,N=V.length;W<N;W++){let B=V[W],F=S(B),st=M%w,et=st%F.boundary,lt=st+et;M+=et,lt!==0&&w-lt<F.storage&&(M+=w-lt),P.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=F.storage}}}let E=M%w;return E>0&&(M+=w-E),m.__size=M,m.__cache={},this}function S(m){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){let x=m.target;x.removeEventListener("dispose",g);let M=r.indexOf(x.__bindingPointIndex);r.splice(M,1),e.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function h(){for(let m in s)e.deleteBuffer(s[m]);r=[],s={},a={}}return{bind:l,update:c,dispose:h}}function L3(){return us===null&&(us=new Oc(N3,16,16,Fa,cs),us.name="DFG_LUT",us.minFilter=bn,us.magFilter=bn,us.wrapS=es,us.wrapT=es,us.generateMipmaps=!1,us.needsUpdate=!0),us}var ZA,JA,KA,QA,jA,$A,tw,ew,nw,iw,sw,aw,rw,ow,lw,cw,uw,hw,fw,dw,pw,mw,gw,_w,vw,xw,yw,Sw,Mw,bw,Ew,Tw,Aw,ww,Cw,Rw,Dw,Uw,Nw,Lw,Iw,Ow,Pw,Bw,Fw,zw,Hw,Vw,Gw,kw,Xw,Ww,qw,Yw,Zw,Jw,Kw,Qw,jw,$w,t2,e2,n2,i2,s2,a2,r2,o2,l2,c2,u2,h2,f2,d2,p2,m2,g2,_2,v2,x2,y2,S2,M2,b2,E2,T2,A2,w2,C2,R2,D2,U2,N2,L2,I2,O2,P2,B2,F2,z2,H2,V2,G2,k2,X2,W2,q2,Y2,Z2,J2,K2,Q2,j2,$2,tC,eC,nC,iC,sC,aC,rC,oC,lC,cC,uC,hC,fC,dC,pC,mC,gC,_C,vC,xC,yC,SC,MC,bC,EC,TC,AC,wC,Kt,yt,hs,Zd,CC,Jb,za,Ab,Ar,IC,iu,wb,Qg,jg,$g,t_,OC,Kd,Qd,qC,Kb,i_,Qb,jb,$b,Ub,Nb,Lb,Ib,Ob,s_,a_,r_,e_,il,OR,PR,Fb,HR,Jd,qR,YR,JR,QR,$R,e3,i3,o3,l_,c_,m3,x3,y3,S3,M3,Yb,su,n_,w3,C3,u_,h_,R3,t1,N3,us,jd,e1=ap(()=>{Kg();Kg();ZA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$A=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ew=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,iw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ow=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_w=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Aw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ww=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ow=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ww=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,E2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,U2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,L2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,F2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Y2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_C=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:ZA,alphahash_pars_fragment:JA,alphamap_fragment:KA,alphamap_pars_fragment:QA,alphatest_fragment:jA,alphatest_pars_fragment:$A,aomap_fragment:tw,aomap_pars_fragment:ew,batching_pars_vertex:nw,batching_vertex:iw,begin_vertex:sw,beginnormal_vertex:aw,bsdfs:rw,iridescence_fragment:ow,bumpmap_pars_fragment:lw,clipping_planes_fragment:cw,clipping_planes_pars_fragment:uw,clipping_planes_pars_vertex:hw,clipping_planes_vertex:fw,color_fragment:dw,color_pars_fragment:pw,color_pars_vertex:mw,color_vertex:gw,common:_w,cube_uv_reflection_fragment:vw,defaultnormal_vertex:xw,displacementmap_pars_vertex:yw,displacementmap_vertex:Sw,emissivemap_fragment:Mw,emissivemap_pars_fragment:bw,colorspace_fragment:Ew,colorspace_pars_fragment:Tw,envmap_fragment:Aw,envmap_common_pars_fragment:ww,envmap_pars_fragment:Cw,envmap_pars_vertex:Rw,envmap_physical_pars_fragment:Hw,envmap_vertex:Dw,fog_vertex:Uw,fog_pars_vertex:Nw,fog_fragment:Lw,fog_pars_fragment:Iw,gradientmap_pars_fragment:Ow,lightmap_pars_fragment:Pw,lights_lambert_fragment:Bw,lights_lambert_pars_fragment:Fw,lights_pars_begin:zw,lights_toon_fragment:Vw,lights_toon_pars_fragment:Gw,lights_phong_fragment:kw,lights_phong_pars_fragment:Xw,lights_physical_fragment:Ww,lights_physical_pars_fragment:qw,lights_fragment_begin:Yw,lights_fragment_maps:Zw,lights_fragment_end:Jw,lightprobes_pars_fragment:Kw,logdepthbuf_fragment:Qw,logdepthbuf_pars_fragment:jw,logdepthbuf_pars_vertex:$w,logdepthbuf_vertex:t2,map_fragment:e2,map_pars_fragment:n2,map_particle_fragment:i2,map_particle_pars_fragment:s2,metalnessmap_fragment:a2,metalnessmap_pars_fragment:r2,morphinstance_vertex:o2,morphcolor_vertex:l2,morphnormal_vertex:c2,morphtarget_pars_vertex:u2,morphtarget_vertex:h2,normal_fragment_begin:f2,normal_fragment_maps:d2,normal_pars_fragment:p2,normal_pars_vertex:m2,normal_vertex:g2,normalmap_pars_fragment:_2,clearcoat_normal_fragment_begin:v2,clearcoat_normal_fragment_maps:x2,clearcoat_pars_fragment:y2,iridescence_pars_fragment:S2,opaque_fragment:M2,packing:b2,premultiplied_alpha_fragment:E2,project_vertex:T2,dithering_fragment:A2,dithering_pars_fragment:w2,roughnessmap_fragment:C2,roughnessmap_pars_fragment:R2,shadowmap_pars_fragment:D2,shadowmap_pars_vertex:U2,shadowmap_vertex:N2,shadowmask_pars_fragment:L2,skinbase_vertex:I2,skinning_pars_vertex:O2,skinning_vertex:P2,skinnormal_vertex:B2,specularmap_fragment:F2,specularmap_pars_fragment:z2,tonemapping_fragment:H2,tonemapping_pars_fragment:V2,transmission_fragment:G2,transmission_pars_fragment:k2,uv_pars_fragment:X2,uv_pars_vertex:W2,uv_vertex:q2,worldpos_vertex:Y2,background_vert:Z2,background_frag:J2,backgroundCube_vert:K2,backgroundCube_frag:Q2,cube_vert:j2,cube_frag:$2,depth_vert:tC,depth_frag:eC,distance_vert:nC,distance_frag:iC,equirect_vert:sC,equirect_frag:aC,linedashed_vert:rC,linedashed_frag:oC,meshbasic_vert:lC,meshbasic_frag:cC,meshlambert_vert:uC,meshlambert_frag:hC,meshmatcap_vert:fC,meshmatcap_frag:dC,meshnormal_vert:pC,meshnormal_frag:mC,meshphong_vert:gC,meshphong_frag:_C,meshphysical_vert:vC,meshphysical_frag:xC,meshtoon_vert:yC,meshtoon_frag:SC,points_vert:MC,points_frag:bC,shadow_vert:EC,shadow_frag:TC,sprite_vert:AC,sprite_frag:wC},yt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},hs={basic:{uniforms:Dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Dn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Dn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Dn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Dn([yt.points,yt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Dn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Dn([yt.common,yt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Dn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Dn([yt.sprite,yt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Dn([yt.common,yt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Dn([yt.lights,yt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};hs.physical={uniforms:Dn([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};Zd={r:0,b:0,g:0},CC=new Te,Jb=new zt;Jb.set(-1,0,0,0,1,0,0,0,1);za=4,Ab=[.125,.215,.35,.446,.526,.582],Ar=20,IC=256,iu=new Qo,wb=new Ht,Qg=null,jg=0,$g=0,t_=!1,OC=new O,Kd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=OC}=a;Qg=this._renderer.getRenderTarget(),jg=this._renderer.getActiveCubeFace(),$g=this._renderer.getActiveMipmapLevel(),t_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Db(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qg,jg,$g),this._renderer.xr.enabled=t_,t.scissorTest=!1,nl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Oa||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qg=this._renderer.getRenderTarget(),jg=this._renderer.getActiveCubeFace(),$g=this._renderer.getActiveMipmapLevel(),t_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:cs,format:Ri,colorSpace:Tc,depthBuffer:!1},s=Cb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cb(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PC(a)),this._blurMaterial=FC(a,t,n),this._ggxMaterial=BC(a,t,n)}return s}_compileMaterial(t){let n=new ce(new Ze,t);this._renderer.compile(n,iu)}_sceneToCubeUV(t,n,i,s,a){let l=new Mn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(wb),p.toneMapping=Vi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ce(new Rn,new Cn({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,g=S.material,h=!1,m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,h=!0):(g.color.copy(wb),h=!0);for(let x=0;x<6;x++){let M=x%3;M===0?(l.up.set(0,c[x],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[x],a.y,a.z)):M===1?(l.up.set(0,0,c[x]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[x],a.z)):(l.up.set(0,c[x],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[x]));let w=this._cubeSize;nl(s,M*w,x>2?w:0,w,w),p.setRenderTarget(s),h&&p.render(S,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Oa||t.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Db()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,iu)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=0+c*1.25,d=p*u,{_lodMax:_}=this,S=this._sizeLods[i],g=3*S*(i>_-za?i-_+za:0),h=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-n,nl(a,g,h,3*S,2*S),s.setRenderTarget(a),s.render(o,iu),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,nl(t,g,h,3*S,2*S),s.setRenderTarget(t),s.render(o,iu)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");let f=3,p=this._lodMeshes[s];p.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Ar-1),S=a/_,g=isFinite(a)?1+Math.floor(f*S):Ar;g>Ar&&Dt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ar}`);let h=[],m=0;for(let C=0;C<Ar;++C){let v=C/S,A=Math.exp(-v*v/2);h.push(A),C===0?m+=A:C<g&&(m+=2*A)}for(let C=0;C<h.length;C++)h[C]=h[C]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-i;let M=this._sizeLods[s],w=3*M*(s>x-za?s-x+za:0),E=4*(this._cubeSize-M);nl(n,w,E,3*M,2*M),l.setRenderTarget(n),l.render(p,iu)}};Qd=class extends hi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Fc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rn(5,5,5),a=new fi({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:ls});a.uniforms.tEquirect.value=n;let r=new ce(s,a),o=n.minFilter;return n.minFilter===Pa&&(n.minFilter=bn),new nd(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};qC={[Ug]:"LINEAR_TONE_MAPPING",[Ng]:"REINHARD_TONE_MAPPING",[Lg]:"CINEON_TONE_MAPPING",[Ig]:"ACES_FILMIC_TONE_MAPPING",[Pg]:"AGX_TONE_MAPPING",[Bg]:"NEUTRAL_TONE_MAPPING",[Og]:"CUSTOM_TONE_MAPPING"};Kb=new Bn,i_=new ks(1,1),Qb=new Rc,jb=new Bf,$b=new Fc,Ub=[],Nb=[],Lb=new Float32Array(16),Ib=new Float32Array(9),Ob=new Float32Array(4);s_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dR(n.type)}},a_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LR(n.type)}},r_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},e_=/(\w+)(\])?(\[|\.)?/g;il=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);IR(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};OR=37297,PR=0;Fb=new zt;HR={[Ug]:"Linear",[Ng]:"Reinhard",[Lg]:"Cineon",[Ig]:"ACESFilmic",[Pg]:"AgX",[Bg]:"Neutral",[Og]:"Custom"};Jd=new O;qR=/^[ \t]*#include +<([\w\d./]+)>/gm;YR=new Map;JR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;QR={[Zc]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};$R={[Oa]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE",[Jc]:"ENVMAP_TYPE_CUBE_UV"};e3={[Er]:"ENVMAP_MODE_REFRACTION"};i3={[sd]:"ENVMAP_BLENDING_MULTIPLY",[ob]:"ENVMAP_BLENDING_MIX",[lb]:"ENVMAP_BLENDING_ADD"};o3=0,l_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new c_(t),n.set(t,i)),i}},c_=class{constructor(t){this.id=o3++,this.code=t,this.usedTimes=0}};m3=0;x3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,S3=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],M3=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Yb=new Te,su=new O,n_=new O;w3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,u_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new zc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new fi({vertexShader:w3,fragmentShader:C3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ce(new Hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},h_=class extends is{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,_=null,S=typeof XRWebGLBinding<"u",g=new u_,h={},m=n.getContextAttributes(),x=null,M=null,w=[],E=[],C=new Xt,v=null,A=new Mn;A.viewport=new Ye;let D=new Mn;D.viewport=new Ye;let R=[A,D],P=new id,V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let St=w[$];return St===void 0&&(St=new Wo,w[$]=St),St.getTargetRaySpace()},this.getControllerGrip=function($){let St=w[$];return St===void 0&&(St=new Wo,w[$]=St),St.getGripSpace()},this.getHand=function($){let St=w[$];return St===void 0&&(St=new Wo,w[$]=St),St.getHandSpace()};function N($){let St=E.indexOf($.inputSource);if(St===-1)return;let dt=w[St];dt!==void 0&&(dt.update($.inputSource,$.frame,c||r),dt.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",F);for(let $=0;$<w.length;$++){let St=E[$];St!==null&&(E[$]=null,w[$].disconnect(St))}V=null,W=null,g.reset();for(let $ in h)delete h[$];t.setRenderTarget(x),d=null,u=null,p=null,s=null,M=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await n.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Rt=null,Ot=null;m.depth&&(Ot=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,dt=m.stencil?Ba:ns,Rt=m.stencil?el:Gi);let Ut={colorFormat:n.RGBA8,depthFormat:Ot,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new hi(u.textureWidth,u.textureHeight,{format:Ri,type:Jn,depthTexture:new ks(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,dt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new hi(d.framebufferWidth,d.framebufferHeight,{format:Ri,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F($){for(let St=0;St<$.removed.length;St++){let dt=$.removed[St],Rt=E.indexOf(dt);Rt>=0&&(E[Rt]=null,w[Rt].disconnect(dt))}for(let St=0;St<$.added.length;St++){let dt=$.added[St],Rt=E.indexOf(dt);if(Rt===-1){for(let Ut=0;Ut<w.length;Ut++)if(Ut>=E.length){E.push(dt),Rt=Ut;break}else if(E[Ut]===null){E[Ut]=dt,Rt=Ut;break}if(Rt===-1)break}let Ot=w[Rt];Ot&&Ot.connect(dt)}}let st=new O,et=new O;function lt($,St,dt){st.setFromMatrixPosition(St.matrixWorld),et.setFromMatrixPosition(dt.matrixWorld);let Rt=st.distanceTo(et),Ot=St.projectionMatrix.elements,Ut=dt.projectionMatrix.elements,Re=Ot[14]/(Ot[10]-1),Zt=Ot[14]/(Ot[10]+1),he=(Ot[9]+1)/Ot[5],De=(Ot[9]-1)/Ot[5],Wt=(Ot[8]-1)/Ot[0],We=(Ut[8]+1)/Ut[0],fe=Re*Wt,Un=Re*We,L=Rt/(-Wt+We),Ue=L*-Wt;if(St.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ue),$.translateZ(L),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ot[10]===-1)$.projectionMatrix.copy(St.projectionMatrix),$.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{let Jt=Re+L,Se=Zt+L,_t=fe-Ue,Ne=Un+(Rt-Ue),T=he*Zt/Se*Jt,y=De*Zt/Se*Jt;$.projectionMatrix.makePerspective(_t,Ne,T,y,Jt,Se),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Tt($,St){St===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(St.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let St=$.near,dt=$.far;g.texture!==null&&(g.depthNear>0&&(St=g.depthNear),g.depthFar>0&&(dt=g.depthFar)),P.near=D.near=A.near=St,P.far=D.far=A.far=dt,(V!==P.near||W!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),V=P.near,W=P.far),P.layers.mask=$.layers.mask|6,A.layers.mask=P.layers.mask&-5,D.layers.mask=P.layers.mask&-3;let Rt=$.parent,Ot=P.cameras;Tt(P,Rt);for(let Ut=0;Ut<Ot.length;Ut++)Tt(Ot[Ut],Rt);Ot.length===2?lt(P,A,D):P.projectionMatrix.copy(A.projectionMatrix),Ct($,P,Rt)};function Ct($,St,dt){dt===null?$.matrix.copy(St.matrixWorld):($.matrix.copy(dt.matrixWorld),$.matrix.invert(),$.matrix.multiply(St.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(St.projectionMatrix),$.projectionMatrixInverse.copy(St.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=If*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function($){return h[$]};let ne=null;function pe($,St){if(f=St.getViewerPose(c||r),_=St,f!==null){let dt=f.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Rt=!1;dt.length!==P.cameras.length&&(P.cameras.length=0,Rt=!0);for(let Zt=0;Zt<dt.length;Zt++){let he=dt[Zt],De=null;if(d!==null)De=d.getViewport(he);else{let We=p.getViewSubImage(u,he);De=We.viewport,Zt===0&&(t.setRenderTargetTextures(M,We.colorTexture,We.depthStencilTexture),t.setRenderTarget(M))}let Wt=R[Zt];Wt===void 0&&(Wt=new Mn,Wt.layers.enable(Zt),Wt.viewport=new Ye,R[Zt]=Wt),Wt.matrix.fromArray(he.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(he.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(De.x,De.y,De.width,De.height),Zt===0&&(P.matrix.copy(Wt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Rt===!0&&P.cameras.push(Wt)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=i.getBinding();let Zt=p.getDepthInformation(dt[0]);Zt&&Zt.isValid&&Zt.texture&&g.init(Zt,s.renderState)}if(Ot&&Ot.includes("camera-access")&&S){t.state.unbindTexture(),p=i.getBinding();for(let Zt=0;Zt<dt.length;Zt++){let he=dt[Zt].camera;if(he){let De=h[he];De||(De=new zc,h[he]=De);let Wt=p.getCameraImage(he);De.sourceTexture=Wt}}}}for(let dt=0;dt<w.length;dt++){let Rt=E[dt],Ot=w[dt];Rt!==null&&Ot!==void 0&&Ot.update(Rt,St,c||r)}ne&&ne($,St),St.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:St}),_=null}let Ft=new Zb;Ft.setAnimationLoop(pe),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}},R3=new Te,t1=new zt;t1.set(-1,0,0,0,1,0,0,0,1);N3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),us=null;jd=class{constructor(t={}){let{canvas:n=vb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Jn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;let S=d,g=new Set([pd,dd,fd]),h=new Set([Jn,Gi,tl,el,cd,ud]),m=new Uint32Array(4),x=new Int32Array(4),M=new O,w=null,E=null,C=[],v=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,R=!1,P=null;this._outputColorSpace=ci;let V=0,W=0,N=null,B=-1,F=null,st=new Ye,et=new Ye,lt=null,Tt=new Ht(0),Ct=0,ne=n.width,pe=n.height,Ft=1,$=null,St=null,dt=new Ye(0,0,ne,pe),Rt=new Ye(0,0,ne,pe),Ot=!1,Ut=new Yo,Re=!1,Zt=!1,he=new Te,De=new O,Wt=new Ye,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Un(){return N===null?Ft:1}let L=i;function Ue(b,I){return n.getContext(b,I)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"184"}`),n.addEventListener("webglcontextlost",nt,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",Lt,!1),L===null){let I="webgl2";if(L=Ue(I,b),L===null)throw Ue(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Nt("WebGLRenderer: "+b.message),b}let Jt,Se,_t,Ne,T,y,z,K,at,ct,rt,Y,Q,xt,Et,pt,ft,Pt,Vt,jt,U,it,Z;function vt(){Jt=new HC(L),Jt.init(),U=new A3(L,Jt),Se=new NC(L,Jt,t,U),_t=new E3(L,Jt),Se.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),Ne=new kC(L),T=new u3,y=new T3(L,Jt,_t,T,Se,U,Ne),z=new zC(D),K=new YA(L),it=new DC(L,K),at=new VC(L,K,Ne,it),ct=new WC(L,at,K,it,Ne),Pt=new XC(L,Se,y),Et=new LC(T),rt=new c3(D,z,Jt,Se,it,Et),Y=new D3(D,T),Q=new f3,xt=new v3(Jt),ft=new RC(D,z,_t,ct,_,l),pt=new b3(D,ct,Se),Z=new U3(L,Ne,Se,_t),Vt=new UC(L,Jt,Ne),jt=new GC(L,Jt,Ne),Ne.programs=rt.programs,D.capabilities=Se,D.extensions=Jt,D.properties=T,D.renderLists=Q,D.shadowMap=pt,D.state=_t,D.info=Ne}vt(),S!==Jn&&(A=new YC(S,n.width,n.height,s,a));let ut=new h_(D,L);this.xr=ut,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=Jt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Jt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ft},this.setPixelRatio=function(b){b!==void 0&&(Ft=b,this.setSize(ne,pe,!1))},this.getSize=function(b){return b.set(ne,pe)},this.setSize=function(b,I,X=!0){if(ut.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,pe=I,n.width=Math.floor(b*Ft),n.height=Math.floor(I*Ft),X===!0&&(n.style.width=b+"px",n.style.height=I+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(ne*Ft,pe*Ft).floor()},this.setDrawingBufferSize=function(b,I,X){ne=b,pe=I,Ft=X,n.width=Math.floor(b*X),n.height=Math.floor(I*X),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(S===Jn){Nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){Dt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(st)},this.getViewport=function(b){return b.copy(dt)},this.setViewport=function(b,I,X,G){b.isVector4?dt.set(b.x,b.y,b.z,b.w):dt.set(b,I,X,G),_t.viewport(st.copy(dt).multiplyScalar(Ft).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,I,X,G){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,I,X,G),_t.scissor(et.copy(Rt).multiplyScalar(Ft).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(b){_t.setScissorTest(Ot=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){St=b},this.getClearColor=function(b){return b.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,X=!0){let G=0;if(b){let k=!1;if(N!==null){let H=N.texture.format;k=g.has(H)}if(k){let H=N.texture.type,q=h.has(H),J=ft.getClearColor(),ot=ft.getClearAlpha(),tt=J.r,At=J.g,bt=J.b;q?(m[0]=tt,m[1]=At,m[2]=bt,m[3]=ot,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=tt,x[1]=At,x[2]=bt,x[3]=ot,L.clearBufferiv(L.COLOR,0,x))}else G|=L.COLOR_BUFFER_BIT}I&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),P=b},this.dispose=function(){n.removeEventListener("webglcontextlost",nt,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),ft.dispose(),Q.dispose(),xt.dispose(),T.dispose(),z.dispose(),ct.dispose(),it.dispose(),Z.dispose(),rt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ha),ut.removeEventListener("sessionend",qs),ki.stop()};function nt(b){b.preventDefault(),Cc("WebGLRenderer: Context Lost."),R=!0}function wt(){Cc("WebGLRenderer: Context Restored."),R=!1;let b=Ne.autoReset,I=pt.enabled,X=pt.autoUpdate,G=pt.needsUpdate,k=pt.type;vt(),Ne.autoReset=b,pt.enabled=I,pt.autoUpdate=X,pt.needsUpdate=G,pt.type=k}function Lt(b){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ve(b){let I=b.target;I.removeEventListener("dispose",Ve),_e(I)}function _e(b){Vn(b),T.remove(b)}function Vn(b){let I=T.get(b).programs;I!==void 0&&(I.forEach(function(X){rt.releaseProgram(X)}),b.isShaderMaterial&&rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,X,G,k,H){I===null&&(I=We);let q=k.isMesh&&k.matrixWorld.determinant()<0,J=ul(b,I,X,G,k);_t.setMaterial(G,q);let ot=X.index,tt=1;if(G.wireframe===!0){if(ot=at.getWireframeAttribute(X),ot===void 0)return;tt=2}let At=X.drawRange,bt=X.attributes.position,gt=At.start*tt,$t=(At.start+At.count)*tt;H!==null&&(gt=Math.max(gt,H.start*tt),$t=Math.min($t,(H.start+H.count)*tt)),ot!==null?(gt=Math.max(gt,0),$t=Math.min($t,ot.count)):bt!=null&&(gt=Math.max(gt,0),$t=Math.min($t,bt.count));let ue=$t-gt;if(ue<0||ue===1/0)return;it.setup(k,G,J,X,ot);let le,Qt=Vt;if(ot!==null&&(le=K.get(ot),Qt=jt,Qt.setIndex(le)),k.isMesh)G.wireframe===!0?(_t.setLineWidth(G.wireframeLinewidth*Un()),Qt.setMode(L.LINES)):Qt.setMode(L.TRIANGLES);else if(k.isLine){let Yt=G.linewidth;Yt===void 0&&(Yt=1),_t.setLineWidth(Yt*Un()),k.isLineSegments?Qt.setMode(L.LINES):k.isLineLoop?Qt.setMode(L.LINE_LOOP):Qt.setMode(L.LINE_STRIP)}else k.isPoints?Qt.setMode(L.POINTS):k.isSprite&&Qt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Yt=k._multiDrawStarts,ht=k._multiDrawCounts,Gt=k._multiDrawCount,Bt=ot?K.get(ot).bytesPerElement:1,qe=T.get(G).currentProgram.getUniforms();for(let mt=0;mt<Gt;mt++)qe.setValue(L,"_gl_DrawID",mt),Qt.render(Yt[mt]/Bt,ht[mt])}else if(k.isInstancedMesh)Qt.renderInstances(gt,ue,k.count);else if(X.isInstancedBufferGeometry){let Yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ht=Math.min(X.instanceCount,Yt);Qt.renderInstances(gt,ue,ht)}else Qt.render(gt,ue)};function mi(b,I,X){b.transparent===!0&&b.side===zn&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,ka(b,I,X),b.side=Vs,b.needsUpdate=!0,ka(b,I,X),b.side=zn):ka(b,I,X)}this.compile=function(b,I,X=null){X===null&&(X=b),E=xt.get(X),E.init(I),v.push(E),X.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),b!==X&&b.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights();let G=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let H=k.material;if(H)if(Array.isArray(H))for(let q=0;q<H.length;q++){let J=H[q];mi(J,X,k),G.add(J)}else mi(H,X,k),G.add(H)}),E=v.pop(),G},this.compileAsync=function(b,I,X=null){let G=this.compile(b,I,X);return new Promise(k=>{function H(){if(G.forEach(function(q){T.get(q).currentProgram.isReady()&&G.delete(q)}),G.size===0){k(b);return}setTimeout(H,10)}Jt.get("KHR_parallel_shader_compile")!==null?H():setTimeout(H,10)})};let ds=null;function Kn(b){ds&&ds(b)}function Ha(){ki.stop()}function qs(){ki.start()}let ki=new Zb;ki.setAnimationLoop(Kn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(b){ds=b,ut.setAnimationLoop(b),b===null?ki.stop():ki.start()},ut.addEventListener("sessionstart",Ha),ut.addEventListener("sessionend",qs),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(b,I);let X=ut.enabled===!0&&ut.isPresenting===!0,G=A!==null&&(N===null||X)&&A.begin(D,N);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(I),I=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,I,N),E=xt.get(b,v.length),E.init(I),E.state.textureUnits=y.getTextureUnits(),v.push(E),he.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ut.setFromProjectionMatrix(he,Fi,I.reversedDepth),Zt=this.localClippingEnabled,Re=Et.init(this.clippingPlanes,Zt),w=Q.get(b,C.length),w.init(),C.push(w),ut.enabled===!0&&ut.isPresenting===!0){let q=D.xr.getDepthSensingMesh();q!==null&&En(q,I,-1/0,D.sortObjects)}En(b,I,0,D.sortObjects),w.finish(),D.sortObjects===!0&&w.sort($,St),fe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,fe&&ft.addToRenderList(w,b),this.info.render.frame++,Re===!0&&Et.beginShadows();let k=E.state.shadowsArray;if(pt.render(k,b,I),Re===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&A.hasRenderPass())===!1){let q=w.opaque,J=w.transmissive;if(E.setupLights(),I.isArrayCamera){let ot=I.cameras;if(J.length>0)for(let tt=0,At=ot.length;tt<At;tt++){let bt=ot[tt];ol(q,J,b,bt)}fe&&ft.render(b);for(let tt=0,At=ot.length;tt<At;tt++){let bt=ot[tt];rl(w,b,bt,bt.viewport)}}else J.length>0&&ol(q,J,b,I),fe&&ft.render(b),rl(w,b,I)}N!==null&&W===0&&(y.updateMultisampleRenderTarget(N),y.updateRenderTargetMipmap(N)),G&&A.end(D),b.isScene===!0&&b.onAfterRender(D,b,I),it.resetDefaultState(),B=-1,F=null,v.pop(),v.length>0?(E=v[v.length-1],y.setTextureUnits(E.state.textureUnits),Re===!0&&Et.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,P!==null&&P.renderEnd()};function En(b,I,X,G){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ut.intersectsSprite(b)){G&&Wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(he);let q=ct.update(b),J=b.material;J.visible&&w.push(b,q,J,X,Wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ut.intersectsObject(b))){let q=ct.update(b),J=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Wt.copy(b.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),Wt.copy(q.boundingSphere.center)),Wt.applyMatrix4(b.matrixWorld).applyMatrix4(he)),Array.isArray(J)){let ot=q.groups;for(let tt=0,At=ot.length;tt<At;tt++){let bt=ot[tt],gt=J[bt.materialIndex];gt&&gt.visible&&w.push(b,q,gt,X,Wt.z,bt)}}else J.visible&&w.push(b,q,J,X,Wt.z,null)}}let H=b.children;for(let q=0,J=H.length;q<J;q++)En(H[q],I,X,G)}function rl(b,I,X,G){let{opaque:k,transmissive:H,transparent:q}=b;E.setupLightsView(X),Re===!0&&Et.setGlobalState(D.clippingPlanes,X),G&&_t.viewport(st.copy(G)),k.length>0&&Va(k,I,X),H.length>0&&Va(H,I,X),q.length>0&&Va(q,I,X),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function ol(b,I,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let gt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new hi(1,1,{generateMipmaps:!0,type:gt?cs:Jn,minFilter:Pa,samples:Math.max(4,Se.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace})}let H=E.state.transmissionRenderTarget[G.id],q=G.viewport||st;H.setSize(q.z*D.transmissionResolutionScale,q.w*D.transmissionResolutionScale);let J=D.getRenderTarget(),ot=D.getActiveCubeFace(),tt=D.getActiveMipmapLevel();D.setRenderTarget(H),D.getClearColor(Tt),Ct=D.getClearAlpha(),Ct<1&&D.setClearColor(16777215,.5),D.clear(),fe&&ft.render(X);let At=D.toneMapping;D.toneMapping=Vi;let bt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),Re===!0&&Et.setGlobalState(D.clippingPlanes,G),Va(b,X,G),y.updateMultisampleRenderTarget(H),y.updateRenderTargetMipmap(H),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let $t=0,ue=I.length;$t<ue;$t++){let le=I[$t],{object:Qt,geometry:Yt,material:ht,group:Gt}=le;if(ht.side===zn&&Qt.layers.test(G.layers)){let Bt=ht.side;ht.side=Fn,ht.needsUpdate=!0,Ga(Qt,X,G,Yt,ht,Gt),ht.side=Bt,ht.needsUpdate=!0,gt=!0}}gt===!0&&(y.updateMultisampleRenderTarget(H),y.updateRenderTargetMipmap(H))}D.setRenderTarget(J,ot,tt),D.setClearColor(Tt,Ct),bt!==void 0&&(G.viewport=bt),D.toneMapping=At}function Va(b,I,X){let G=I.isScene===!0?I.overrideMaterial:null;for(let k=0,H=b.length;k<H;k++){let q=b[k],{object:J,geometry:ot,group:tt}=q,At=q.material;At.allowOverride===!0&&G!==null&&(At=G),J.layers.test(X.layers)&&Ga(J,I,X,ot,At,tt)}}function Ga(b,I,X,G,k,H){b.onBeforeRender(D,I,X,G,k,H),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(D,I,X,G,b,H),k.transparent===!0&&k.side===zn&&k.forceSinglePass===!1?(k.side=Fn,k.needsUpdate=!0,D.renderBufferDirect(X,I,G,k,b,H),k.side=Vs,k.needsUpdate=!0,D.renderBufferDirect(X,I,G,k,b,H),k.side=zn):D.renderBufferDirect(X,I,G,k,b,H),b.onAfterRender(D,I,X,G,k,H)}function ka(b,I,X){I.isScene!==!0&&(I=We);let G=T.get(b),k=E.state.lights,H=E.state.shadowsArray,q=k.state.version,J=rt.getParameters(b,k.state,H,I,X,E.state.lightProbeGridArray),ot=rt.getProgramCacheKey(J),tt=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;let At=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=z.get(b.envMap||G.environment,At),G.envMapRotation=G.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,tt===void 0&&(b.addEventListener("dispose",Ve),tt=new Map,G.programs=tt);let bt=tt.get(ot);if(bt!==void 0){if(G.currentProgram===bt&&G.lightsStateVersion===q)return ae(b,J),bt}else J.uniforms=rt.getUniforms(b),P!==null&&b.isNodeMaterial&&P.build(b,X,J),b.onBeforeCompile(J,D),bt=rt.acquireProgram(J,ot),tt.set(ot,bt),G.uniforms=J.uniforms;let gt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(gt.clippingPlanes=Et.uniform),ae(b,J),G.needsLights=hl(b),G.lightsStateVersion=q,G.needsLights&&(gt.ambientLightColor.value=k.state.ambient,gt.lightProbe.value=k.state.probe,gt.directionalLights.value=k.state.directional,gt.directionalLightShadows.value=k.state.directionalShadow,gt.spotLights.value=k.state.spot,gt.spotLightShadows.value=k.state.spotShadow,gt.rectAreaLights.value=k.state.rectArea,gt.ltc_1.value=k.state.rectAreaLTC1,gt.ltc_2.value=k.state.rectAreaLTC2,gt.pointLights.value=k.state.point,gt.pointLightShadows.value=k.state.pointShadow,gt.hemisphereLights.value=k.state.hemi,gt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,gt.spotLightMatrix.value=k.state.spotLightMatrix,gt.spotLightMap.value=k.state.spotLightMap,gt.pointShadowMatrix.value=k.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=bt,G.uniformsList=null,bt}function ll(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=il.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function ae(b,I){let X=T.get(b);X.outputColorSpace=I.outputColorSpace,X.batching=I.batching,X.batchingColor=I.batchingColor,X.instancing=I.instancing,X.instancingColor=I.instancingColor,X.instancingMorph=I.instancingMorph,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function cl(b,I){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let X=0,G=b.length;X<G;X++){let k=b[X];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function ul(b,I,X,G,k){I.isScene!==!0&&(I=We),y.resetTextureUnits();let H=I.fog,q=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,J=N===null?D.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:se.workingColorSpace,ot=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,tt=z.get(G.envMap||q,ot),At=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,bt=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),gt=!!X.morphAttributes.position,$t=!!X.morphAttributes.normal,ue=!!X.morphAttributes.color,le=Vi;G.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(le=D.toneMapping);let Qt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Yt=Qt!==void 0?Qt.length:0,ht=T.get(G),Gt=E.state.lights;if(Re===!0&&(Zt===!0||b!==F)){let Me=b===F&&G.id===B;Et.setState(G,b,Me)}let Bt=!1;G.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==Gt.state.version||ht.outputColorSpace!==J||k.isBatchedMesh&&ht.batching===!1||!k.isBatchedMesh&&ht.batching===!0||k.isBatchedMesh&&ht.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ht.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ht.instancing===!1||!k.isInstancedMesh&&ht.instancing===!0||k.isSkinnedMesh&&ht.skinning===!1||!k.isSkinnedMesh&&ht.skinning===!0||k.isInstancedMesh&&ht.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ht.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ht.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ht.instancingMorph===!1&&k.morphTexture!==null||ht.envMap!==tt||G.fog===!0&&ht.fog!==H||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==Et.numPlanes||ht.numIntersection!==Et.numIntersection)||ht.vertexAlphas!==At||ht.vertexTangents!==bt||ht.morphTargets!==gt||ht.morphNormals!==$t||ht.morphColors!==ue||ht.toneMapping!==le||ht.morphTargetsCount!==Yt||!!ht.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Bt=!0):(Bt=!0,ht.__version=G.version);let qe=ht.currentProgram;Bt===!0&&(qe=ka(G,I,k),P&&G.isNodeMaterial&&P.onUpdateProgram(G,qe,ht));let mt=!1,Nn=!1,Ys=!1,ve=qe.getUniforms(),de=ht.uniforms;if(_t.useProgram(qe.program)&&(mt=!0,Nn=!0,Ys=!0),G.id!==B&&(B=G.id,Nn=!0),ht.needsLights){let Me=cl(E.state.lightProbeGridArray,k);ht.lightProbeGrid!==Me&&(ht.lightProbeGrid=Me,Nn=!0)}if(mt||F!==b){_t.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ve.setValue(L,"projectionMatrix",b.projectionMatrix),ve.setValue(L,"viewMatrix",b.matrixWorldInverse);let Di=ve.map.cameraPosition;Di!==void 0&&Di.setValue(L,De.setFromMatrixPosition(b.matrixWorld)),Se.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ve.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),F!==b&&(F=b,Nn=!0,Ys=!0)}if(ht.needsLights&&(Gt.state.directionalShadowMap.length>0&&ve.setValue(L,"directionalShadowMap",Gt.state.directionalShadowMap,y),Gt.state.spotShadowMap.length>0&&ve.setValue(L,"spotShadowMap",Gt.state.spotShadowMap,y),Gt.state.pointShadowMap.length>0&&ve.setValue(L,"pointShadowMap",Gt.state.pointShadowMap,y)),k.isSkinnedMesh){ve.setOptional(L,k,"bindMatrix"),ve.setOptional(L,k,"bindMatrixInverse");let Me=k.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ve.setValue(L,"boneTexture",Me.boneTexture,y))}k.isBatchedMesh&&(ve.setOptional(L,k,"batchingTexture"),ve.setValue(L,"batchingTexture",k._matricesTexture,y),ve.setOptional(L,k,"batchingIdTexture"),ve.setValue(L,"batchingIdTexture",k._indirectTexture,y),ve.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(L,"batchingColorTexture",k._colorsTexture,y));let ps=X.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&Pt.update(k,X,qe),(Nn||ht.receiveShadow!==k.receiveShadow)&&(ht.receiveShadow=k.receiveShadow,ve.setValue(L,"receiveShadow",k.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(de.envMapIntensity.value=I.environmentIntensity),de.dfgLUT!==void 0&&(de.dfgLUT.value=L3()),Nn){if(ve.setValue(L,"toneMappingExposure",D.toneMappingExposure),ht.needsLights&&lu(de,Ys),H&&G.fog===!0&&Y.refreshFogUniforms(de,H),Y.refreshMaterialUniforms(de,G,Ft,pe,E.state.transmissionRenderTarget[b.id]),ht.needsLights&&ht.lightProbeGrid){let Me=ht.lightProbeGrid;de.probesSH.value=Me.texture,de.probesMin.value.copy(Me.boundingBox.min),de.probesMax.value.copy(Me.boundingBox.max),de.probesResolution.value.copy(Me.resolution)}il.upload(L,ll(ht),de,y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(il.upload(L,ll(ht),de,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ve.setValue(L,"center",k.center),ve.setValue(L,"modelViewMatrix",k.modelViewMatrix),ve.setValue(L,"normalMatrix",k.normalMatrix),ve.setValue(L,"modelMatrix",k.matrixWorld),G.uniformsGroups!==void 0){let Me=G.uniformsGroups;for(let Di=0,Rr=Me.length;Di<Rr;Di++){let g_=Me[Di];Z.update(g_,qe),Z.bind(g_,qe)}}return qe}function lu(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function hl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,I,X){let G=T.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),T.get(b.texture).__webglTexture=I,T.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){let X=T.get(b);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0};let cu=L.createFramebuffer();this.setRenderTarget=function(b,I=0,X=0){N=b,V=I,W=X;let G=null,k=!1,H=!1;if(b){let J=T.get(b);if(J.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(L.FRAMEBUFFER,J.__webglFramebuffer),st.copy(b.viewport),et.copy(b.scissor),lt=b.scissorTest,_t.viewport(st),_t.scissor(et),_t.setScissorTest(lt),B=-1;return}else if(J.__webglFramebuffer===void 0)y.setupRenderTarget(b);else if(J.__hasExternalTextures)y.rebindTextures(b,T.get(b.texture).__webglTexture,T.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let At=b.depthTexture;if(J.__boundDepthTexture!==At){if(At!==null&&T.has(At)&&(b.width!==At.image.width||b.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(b)}}let ot=b.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(H=!0);let tt=T.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(tt[I])?G=tt[I][X]:G=tt[I],k=!0):b.samples>0&&y.useMultisampledRTT(b)===!1?G=T.get(b).__webglMultisampledFramebuffer:Array.isArray(tt)?G=tt[X]:G=tt,st.copy(b.viewport),et.copy(b.scissor),lt=b.scissorTest}else st.copy(dt).multiplyScalar(Ft).floor(),et.copy(Rt).multiplyScalar(Ft).floor(),lt=Ot;if(X!==0&&(G=cu),_t.bindFramebuffer(L.FRAMEBUFFER,G)&&_t.drawBuffers(b,G),_t.viewport(st),_t.scissor(et),_t.setScissorTest(lt),k){let J=T.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,J.__webglTexture,X)}else if(H){let J=I;for(let ot=0;ot<b.textures.length;ot++){let tt=T.get(b.textures[ot]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ot,tt.__webglTexture,X,J)}}else if(b!==null&&X!==0){let J=T.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,J.__webglTexture,X)}B=-1},this.readRenderTargetPixels=function(b,I,X,G,k,H,q,J=0){if(!(b&&b.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ot=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&q!==void 0&&(ot=ot[q]),ot){_t.bindFramebuffer(L.FRAMEBUFFER,ot);try{let tt=b.textures[J],At=tt.format,bt=tt.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+J),!Se.textureFormatReadable(At)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(bt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-G&&X>=0&&X<=b.height-k&&L.readPixels(I,X,G,k,U.convert(At),U.convert(bt),H)}finally{let tt=N!==null?T.get(N).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(b,I,X,G,k,H,q,J=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ot=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&q!==void 0&&(ot=ot[q]),ot)if(I>=0&&I<=b.width-G&&X>=0&&X<=b.height-k){_t.bindFramebuffer(L.FRAMEBUFFER,ot);let tt=b.textures[J],At=tt.format,bt=tt.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+J),!Se.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.bufferData(L.PIXEL_PACK_BUFFER,H.byteLength,L.STREAM_READ),L.readPixels(I,X,G,k,U.convert(At),U.convert(bt),0);let $t=N!==null?T.get(N).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,$t);let ue=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yb(L,ue,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,H),L.deleteBuffer(gt),L.deleteSync(ue),H}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,X=0){let G=Math.pow(2,-X),k=Math.floor(b.image.width*G),H=Math.floor(b.image.height*G),q=I!==null?I.x:0,J=I!==null?I.y:0;y.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,q,J,k,H),_t.unbindTexture()};let sp=L.createFramebuffer(),Cr=L.createFramebuffer();this.copyTextureToTexture=function(b,I,X=null,G=null,k=0,H=0){let q,J,ot,tt,At,bt,gt,$t,ue,le=b.isCompressedTexture?b.mipmaps[H]:b.image;if(X!==null)q=X.max.x-X.min.x,J=X.max.y-X.min.y,ot=X.isBox3?X.max.z-X.min.z:1,tt=X.min.x,At=X.min.y,bt=X.isBox3?X.min.z:0;else{let de=Math.pow(2,-k);q=Math.floor(le.width*de),J=Math.floor(le.height*de),b.isDataArrayTexture?ot=le.depth:b.isData3DTexture?ot=Math.floor(le.depth*de):ot=1,tt=0,At=0,bt=0}G!==null?(gt=G.x,$t=G.y,ue=G.z):(gt=0,$t=0,ue=0);let Qt=U.convert(I.format),Yt=U.convert(I.type),ht;I.isData3DTexture?(y.setTexture3D(I,0),ht=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(y.setTexture2DArray(I,0),ht=L.TEXTURE_2D_ARRAY):(y.setTexture2D(I,0),ht=L.TEXTURE_2D),_t.activeTexture(L.TEXTURE0),_t.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),_t.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_t.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);let Gt=_t.getParameter(L.UNPACK_ROW_LENGTH),Bt=_t.getParameter(L.UNPACK_IMAGE_HEIGHT),qe=_t.getParameter(L.UNPACK_SKIP_PIXELS),mt=_t.getParameter(L.UNPACK_SKIP_ROWS),Nn=_t.getParameter(L.UNPACK_SKIP_IMAGES);_t.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),_t.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),_t.pixelStorei(L.UNPACK_SKIP_PIXELS,tt),_t.pixelStorei(L.UNPACK_SKIP_ROWS,At),_t.pixelStorei(L.UNPACK_SKIP_IMAGES,bt);let Ys=b.isDataArrayTexture||b.isData3DTexture,ve=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){let de=T.get(b),ps=T.get(I),Me=T.get(de.__renderTarget),Di=T.get(ps.__renderTarget);_t.bindFramebuffer(L.READ_FRAMEBUFFER,Me.__webglFramebuffer),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Rr=0;Rr<ot;Rr++)Ys&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(b).__webglTexture,k,bt+Rr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(I).__webglTexture,H,ue+Rr)),L.blitFramebuffer(tt,At,q,J,gt,$t,q,J,L.DEPTH_BUFFER_BIT,L.NEAREST);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||T.has(b)){let de=T.get(b),ps=T.get(I);_t.bindFramebuffer(L.READ_FRAMEBUFFER,sp),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,Cr);for(let Me=0;Me<ot;Me++)Ys?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,de.__webglTexture,k,bt+Me):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,de.__webglTexture,k),ve?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ps.__webglTexture,H,ue+Me):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ps.__webglTexture,H),k!==0?L.blitFramebuffer(tt,At,q,J,gt,$t,q,J,L.COLOR_BUFFER_BIT,L.NEAREST):ve?L.copyTexSubImage3D(ht,H,gt,$t,ue+Me,tt,At,q,J):L.copyTexSubImage2D(ht,H,gt,$t,tt,At,q,J);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ve?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(ht,H,gt,$t,ue,q,J,ot,Qt,Yt,le.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(ht,H,gt,$t,ue,q,J,ot,Qt,le.data):L.texSubImage3D(ht,H,gt,$t,ue,q,J,ot,Qt,Yt,le):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,gt,$t,q,J,Qt,Yt,le.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,gt,$t,le.width,le.height,Qt,le.data):L.texSubImage2D(L.TEXTURE_2D,H,gt,$t,q,J,Qt,Yt,le);_t.pixelStorei(L.UNPACK_ROW_LENGTH,Gt),_t.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt),_t.pixelStorei(L.UNPACK_SKIP_PIXELS,qe),_t.pixelStorei(L.UNPACK_SKIP_ROWS,mt),_t.pixelStorei(L.UNPACK_SKIP_IMAGES,Nn),H===0&&I.generateMipmaps&&L.generateMipmap(ht),_t.unbindTexture()},this.initRenderTarget=function(b){T.get(b).__webglFramebuffer===void 0&&y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){V=0,W=0,N=null,_t.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),n.unpackColorSpace=se._getUnpackColorSpace()}}});var i1=Ui(ep=>{"use strict";var O3=Symbol.for("react.transitional.element"),P3=Symbol.for("react.fragment");function n1(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:O3,type:e,key:i,ref:t!==void 0?t:null,props:n}}ep.Fragment=P3;ep.jsx=n1;ep.jsxs=n1});var ru=Ui((gL,s1)=>{"use strict";s1.exports=i1()});function r1(e){let t=[[0,[0,240,255]],[.45,[184,134,11]],[.75,[255,107,26]],[1,[255,42,42]]],n=Xe(e,0,1);for(let i=0;i<t.length-1;i++){let[s,a]=t[i],[r,o]=t[i+1];if(n>=s&&n<=r){let l=(n-s)/(r-s),c=[0,1,2].map(f=>Math.round(a[f]+(o[f]-a[f])*l));return c[0]<<16|c[1]<<8|c[2]}}return 16722474}function c1(e,t,n){let i=p_*(n/25),s=e*1e3,a=t*1e3*9.81,r=Math.PI**2*i/(4*fs*fs),o=a/r,l=1/Math.max(.05,1-o),c=s*fs**3/(3*i)*l*1e3,f=(t/500*.62+e/150*.55)*Math.pow(25/n,.85)*1.08,p=[{id:"defl",label:"\u03B4 \u2264 H/500",txt:`${c.toFixed(1)}mm / ${a1.toFixed(0)}mm`,ratio:c/a1},{id:"sigma",label:"\u03C3/\u03C3y \u2264 1.0",txt:`${f.toFixed(2)} / 1.00`,ratio:f},{id:"stab",label:"P/Pcr \u2264 0.25",txt:`${o.toFixed(3)} / 0.25`,ratio:o/.25}].map(u=>({...u,ok:u.ratio<=1,margin:(1-u.ratio)*100}));return{dEff:c,util:f,stab:o,amp:l,checks:p,allOk:p.every(u=>u.ok),nFail:p.filter(u=>!u.ok).length}}function o1(e,t){for(let n=10;n<=50;n+=.5)if(c1(e,t,n).allOk)return n;return null}function u1(e){return e<5?{name:"NONE",ko:"\uCCB4\uAC10 \uC5C6\uC74C",col:"#00F0FF",hex:61695}:e<15?{name:"PERCEPTIBLE",ko:"\uC9C4\uB3D9 \uAC10\uC9C0",col:"#B8860B",hex:12092939}:e<35?{name:"DISCOMFORT",ko:"\uBD88\uCF8C\xB7\uBCF4\uD589 \uACE4\uB780",col:"#FF6B1A",hex:16739098}:e<70?{name:"HAZARD",ko:"\uC804\uB3C4(\uB118\uC5B4\uC9D0) \uC704\uD5D8",col:"#FF4040",hex:16728128}:{name:"SEVERE",ko:"\uBD80\uC0C1 \uC704\uD5D8",col:"#FF2A2A",hex:16722474}}function F3(e,t){let n=u1(t),i=Xe((t-35)/100,0,.85),s=Math.round(e*Xe((t-5)/40,0,1)),a=Math.round(e*i),r=Math.round(e*i*.3);return{lvl:n,pFall:i,nAffect:s,nFall:a,nInjury:r}}function z3(e,t){let n=Xe((t-60)/120,0,.8),i=Math.round(e*n*.1),s=Xe((t-45)/120,0,.7),a=Math.round(e*s*.14),r=t>75?Xe((t-75)/180,0,.22):0,o=r>0?Math.max(1,Math.round(e*.12*r)):0,l=t>25,c=l?Math.round(e*.08):0;return{pGlass:n,nGlass:i,pFurn:s,nFurn:a,pEject:r,nEject:o,evLock:l,nTrap:c}}function l1(e,t,n){let i=Math.round(20+t/500*50),s=1+Xe(n,0,120)/60,a=n>25,r=60,o=18*s,l=i/1.1*(a?1.35:1),c=e*hn/.45*s,f=r+o+l+c,p=h1-f,u=p>180?"SAFE":p>60?"WARN":"CRITICAL";return{occ:i,slow:s,evLock:a,tPre:r,tWalk:o,tQueue:l,tDescent:c,rset:f,margin:p,status:u}}function ip(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function d_(e="0,240,255"){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),i=n.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,`rgba(${e},0.9)`),i.addColorStop(.4,`rgba(${e},0.25)`),i.addColorStop(1,`rgba(${e},0)`),n.fillStyle=i,n.fillRect(0,0,64,64),new Jo(t)}function V3(){let e=document.createElement("canvas");e.width=128,e.height=56;let t=e.getContext("2d");return t.fillStyle="rgba(3,30,18,0.9)",t.fillRect(0,0,128,56),t.strokeStyle="#29FF9E",t.lineWidth=3,t.strokeRect(3,3,122,50),t.fillStyle="#29FF9E",t.font="bold 30px monospace",t.textAlign="center",t.textBaseline="middle",t.fillText("EXIT",64,30),new Jo(e)}function m_(){let[e,t]=(0,ye.useState)(wr.wind.def),[n,i]=(0,ye.useState)(wr.dead.def),[s,a]=(0,ye.useState)(wr.thickness.def),[r,o]=(0,ye.useState)([]),[l,c]=(0,ye.useState)(null),[f,p]=(0,ye.useState)({mg:0,fallen:0,ejected:0,furn:0,glass:0}),u=(0,ye.useMemo)(()=>c1(e,n,s),[e,n,s]),d=(0,ye.useMemo)(()=>o1(e,n),[e,n]),_=Math.round(f.mg),S=(0,ye.useMemo)(()=>l!==null?l1(l,n,_):null,[l,n,_]),g=(0,ye.useMemo)(()=>S?F3(S.occ,_):null,[S,_]),h=(0,ye.useMemo)(()=>S?z3(S.occ,_):null,[S,_]),m=(0,ye.useRef)(null),x=(0,ye.useRef)(null),M=(0,ye.useRef)({wind:e,dead:n,thk:s}),w=(0,ye.useRef)(u),E=(0,ye.useRef)(null),C=(0,ye.useRef)(!0);M.current={wind:e,dead:n,thk:s},w.current=u;let v=(0,ye.useCallback)((V,W="dim")=>{o(N=>[...N.slice(-60),{line:V,tone:W,id:Math.random()}])},[]);(0,ye.useEffect)(()=>{let V=setTimeout(()=>{let W=w.current,N=M.current;v(`\u03B4_eff=${W.dEff.toFixed(1)}mm  \u03C3=${W.util.toFixed(2)}  P/Pcr=${W.stab.toFixed(3)}`,"cyan"),W.checks.forEach(F=>v(`[${F.ok?"PASS":"FAIL"}] ${F.label}  m=${F.margin.toFixed(0)}%`,F.ok?"dim":"warn"));let B=o1(N.wind,N.dead);v(B===null?"REQ THK: \uBC94\uC704 \uCD08\uACFC":`REQ THK \u2265 ${B.toFixed(1)}mm (\uD604\uC7AC ${N.thk}mm ${N.thk>=B?"OK":"\uBD80\uC871"})`,B!==null&&N.thk>=B?"cyan":"warn")},150);return()=>clearTimeout(V)},[e,n,s,v]),(0,ye.useEffect)(()=>{C.current!==u.allOk&&(v(u.allOk?"\u2605 STATUS \u2192 ALL CHECKS PASS":`\u2605 STATUS \u2192 DESIGN NG (${u.nFail}/3)`,u.allOk?"cyan":"warn"),C.current=u.allOk)},[u,v]),(0,ye.useEffect)(()=>{v("STRUCT//SIM v5.0 \u2014 ACCIDENT CHAIN MODE","cyan"),v("DRAG=\uD68C\uC804 WHEEL/PINCH=\uC90C \uCE35 \uD0ED=FLOOR DIVE","dim"),v("CHAIN: \uC804\uB3C4\u2192\uAC00\uAD6C\u2192\uC720\uB9AC\uD30C\uC190\u2192\uCC3D\uC678\uCD94\uB77D\u2192EV\uC815\uC9C0","dim")},[v]),(0,ye.useEffect)(()=>{x.current&&(x.current.scrollTop=x.current.scrollHeight)},[r]);let A=(0,ye.useCallback)(()=>{E.current=null,c(null),v("FLOOR DIVE EXIT \u2192 OVERVIEW","dim")},[v]);(0,ye.useEffect)(()=>{let V=m.current;if(!V)return;let W=V.clientWidth,N=V.clientHeight,B=new jd({antialias:!0});B.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.setSize(W,N),B.setClearColor(260,1),V.appendChild(B.domElement),B.domElement.style.touchAction="none";let F=new Uc;F.fog=new Dc(776,.0014);let st=new Mn(50,W/N,.5,4e3),et={theta:-.55,phi:1.16,radius:330,target:new O(0,95,0)},lt={theta:-.55,phi:1.16,radius:330,target:new O(0,95,0)},Tt=0;F.add(new Wc(2504778,1)),F.add(new Gc(2771552,329740,.8));let Ct=new jo(10275034,.75);Ct.position.set(-140,240,170),F.add(Ct);let ne=new jo(679854,.5);ne.position.set(180,120,-200),F.add(ne);let pe=new Xc(61695,.7,700);pe.position.set(0,240,0),F.add(pe);{let q=new Float32Array(2100),J=ip(99);for(let tt=0;tt<700;tt++){let At=J()*Math.PI*2,bt=Math.acos(J()*.85),gt=1400+J()*400;q[tt*3]=gt*Math.sin(bt)*Math.cos(At),q[tt*3+1]=Math.abs(gt*Math.cos(bt))+10,q[tt*3+2]=gt*Math.sin(bt)*Math.sin(At)}let ot=new Ze;ot.setAttribute("position",new rn(q,3)),F.add(new yr(ot,new Ua({color:10149864,size:1.6,transparent:!0,opacity:.6,sizeAttenuation:!1})))}let Ft=new ce(new Hi(1200,1200),new di({color:67082,emissive:66568}));Ft.rotation.x=-Math.PI/2,Ft.position.y=-.25,F.add(Ft);let $=new Yc(1e3,64,61695,61695);$.material.transparent=!0,$.material.opacity=.07,F.add($);let St=d_(),dt=new ce(new Hi(180,180),new Cn({map:St,transparent:!0,opacity:.35,blending:Xs,depthWrite:!1}));dt.rotation.x=-Math.PI/2,dt.position.y=.05,F.add(dt);let Rt=ip(20260611);for(let H=0;H<30;H++){let q=14+Rt()*24,J=14+Rt()*24,ot=18+Rt()*80,tt=Rt()*Math.PI*2,At=160+Rt()*300,bt=new ce(new Rn(q,ot,J),new di({color:530208,emissive:199698}));bt.position.set(Math.cos(tt)*At,ot/2,Math.sin(tt)*At),F.add(bt);let gt=new Da(new Mr(bt.geometry),new os({color:61695,transparent:!0,opacity:.07}));gt.position.copy(bt.position),F.add(gt)}let Ot=[],Ut=[];for(let H=0;H<Hn;H++){let q=H/Hn,J=al(q),ot=ou(q),tt=new ui;tt.position.y=H*hn;let At=H>=Hn-2,bt=new di({color:At?1191999:662058,emissive:At?664112:201246,transparent:!0,opacity:.45}),gt=new ce(new Rn(J,hn-.4,ot),bt);gt.position.y=hn/2,gt.userData.floor=H,tt.add(gt),Ut.push(gt);let $t=l1(H,wr.dead.def,0),ue=new os({color:H3($t.status),transparent:!0,opacity:H%10===0?.4:.18}),le=new Da(new Mr(gt.geometry),ue);le.position.y=hn/2,tt.add(le);let Qt=new di({color:1194576,emissive:H%10===0?666686:401968,transparent:!0,opacity:.95}),Yt=new ce(new Rn(J+.9,.35,ot+.9),Qt);tt.add(Yt);let ht=new ce(new Rn(10,hn-.2,8),new di({color:861235,emissive:268324,transparent:!0,opacity:.9}));ht.position.y=hn/2,tt.add(ht),F.add(tt),Ot.push({g:tt,glassMat:bt,edgeMat:ue,slabMat:Qt})}let Re=new Cn({color:16739098,transparent:!0,opacity:.95}),Zt=new Cn({color:61695,transparent:!0,opacity:.95});B3.forEach(H=>{let q=Ot[H],J=H/Hn,ot=al(J),tt=ou(J),At=(bt,gt,$t,ue)=>{let le=Math.hypot(gt-bt,hn),Qt=new ce(new Rn(.8,le,.8),$t);Qt.position.set((bt+gt)/2,hn/2,ue),Qt.rotation.z=Math.atan2(gt-bt,hn),q.g.add(Qt)};[tt/2-.6,-(tt/2-.6)].forEach(bt=>{At(-ot/2,-5,Zt,bt),At(-5,-ot/2,Re,bt),At(5,ot/2,Re,bt),At(ot/2,5,Zt,bt)})});let he=new os({color:61695,transparent:!0,opacity:.9}),De=[[-1,-1],[1,-1],[-1,1],[1,1]].map(([H,q])=>{let J=new Ze;J.setAttribute("position",new rn(new Float32Array((Hn+1)*3),3));let ot=new Zo(J,he);return F.add(ot),{line:ot,cx:H,cz:q}}),Wt=[],We=ip(7);for(let H=1;H<Hn;H++)for(let q=0;q<6;q++)We()<.34&&Wt.push({f:H,fx:(q+.5)/6-.5,side:We()<.5?1:-1,warm:We()<.7});let fe=new Bc(new Hi(2.1,2.3),new Cn({transparent:!0,opacity:.95,side:zn}),Wt.length),Un=new Ht(16761976),L=new Ht(9889535);Wt.forEach((H,q)=>fe.setColorAt(q,H.warm?Un:L)),fe.instanceColor&&(fe.instanceColor.needsUpdate=!0),F.add(fe);let Ue=new ui,Jt=new ce(new Hc(5.5,6.3,36),new Cn({color:2752414,transparent:!0,opacity:.55,side:zn}));Jt.rotation.x=-Math.PI/2,Jt.position.set(-7,.3,0),Ue.add(Jt),[[-1.6,0,.5,4.4],[1.6,0,.5,4.4],[0,0,3.2,.5]].forEach(([H,q,J,ot])=>{let tt=new ce(new Rn(J,.12,ot),new Cn({color:2752414,transparent:!0,opacity:.5}));tt.position.set(-7+H,.32,q),Ue.add(tt)});let Se=new ce(new Sr(.25,.8,18,6),new Cn({color:10146529,transparent:!0,opacity:.75}));Se.position.set(8,9,0),Ue.add(Se);let _t=new Cn({color:16722474}),Ne=new ce(new Ko(1,10,10),_t);Ne.position.set(8,18.6,0),Ue.add(Ne);let T=new qo(new vr({map:d_("255,42,42"),transparent:!0,opacity:.9,blending:Xs,depthWrite:!1}));T.position.copy(Ne.position),Ue.add(T),F.add(Ue);let y=170,z=new Float32Array(y*3),K=[];for(let H=0;H<y;H++)K.push({y:6+Math.random()*190,z:-42+Math.random()*84,v:.8+Math.random()*.5}),z[H*3]=-200-Math.random()*150,z[H*3+1]=K[H].y,z[H*3+2]=K[H].z;let at=new Ze;at.setAttribute("position",new rn(z,3));let ct=new yr(at,new Ua({color:16739098,size:1.7,transparent:!0,opacity:.75,blending:Xs,depthWrite:!1}));F.add(ct);let rt=new ui;rt.visible=!1;let Y=new ce(new Hi(40,30),new di({color:794672,emissive:398367,side:zn}));Y.rotation.x=-Math.PI/2,rt.add(Y);let Q=new ce(new Rn(10,3.4,8),new Cn({color:2752414,transparent:!0,opacity:.32}));Q.position.y=1.7,rt.add(Q);let xt=new Da(new Mr(Q.geometry),new os({color:2752414}));xt.position.copy(Q.position),rt.add(xt);let Et=new ce(new Hi(5,2.2),new Cn({map:V3(),transparent:!0,side:zn}));Et.position.set(0,4.4,0),rt.add(Et);let pt=new qo(new vr({map:d_("41,255,158"),transparent:!0,opacity:.6,blending:Xs,depthWrite:!1}));pt.scale.setScalar(10),pt.position.set(0,4.4,0),rt.add(pt);let ft=new di({color:1456202,emissive:598060,transparent:!0,opacity:.85});[[0,-7.5,36,.4],[0,7.5,36,.4],[-12,-11,.4,7],[0,-11,.4,7],[12,-11,.4,7],[-12,11,.4,7],[0,11,.4,7],[12,11,.4,7]].forEach(([H,q,J,ot])=>{let tt=new ce(new Rn(J,2.8,ot),ft);tt.position.set(H,1.4,q),rt.add(tt)});let Pt=new ui,Vt=new di({color:2770520,emissive:1056554}),jt=ip(42),U=[];for(let H=0;H<12;H++){let q=jt()<.5,J=new ce(new Rn(q?2.2:1.3,q?.55:.85,q?1.5:.9),Vt),ot=q?.3:.45;J.position.set((jt()-.5)*32,ot,(jt()<.5?-1:1)*(9.5+jt()*3.5)),Pt.add(J),U.push({m:J,baseY:ot,tipped:!1,dir:jt()<.5?1:-1})}rt.add(Pt);let it={ejected:0,furn:0,glass:0,glassL:!1,glassR:!1},Z=90,vt=new Float32Array(Z*3),ut=[];for(let H=0;H<Z;H++)ut.push(new O),vt[H*3+1]=-999;let nt=new Ze;nt.setAttribute("position",new rn(vt,3));let wt=new yr(nt,new Ua({color:10217727,size:.5,transparent:!0,opacity:0,blending:Xs,depthWrite:!1}));rt.add(wt);let Lt=0,Ve=H=>{for(let q=0;q<Z;q++)vt[q*3]=(Math.random()-.5)*30,vt[q*3+1]=.5+Math.random()*2.5,vt[q*3+2]=H*14.5,ut[q].set((Math.random()-.5)*4,1+Math.random()*3,H*(2.5+Math.random()*5));nt.attributes.position.needsUpdate=!0,Lt=1.6},_e=16,Vn=[],mi=()=>new di({color:16761976,emissive:7031328});for(let H=0;H<_e;H++){let q=new ui,J=mi(),ot=new ce(new Sr(.26,.3,.95,8),J);ot.position.y=.95;let tt=new ce(new Ko(.21,8,8),J);tt.position.y=1.62;let At=new ce(new Sr(.09,.09,.5,6),J);At.position.set(-.12,.25,0);let bt=At.clone();bt.position.x=.12,q.add(ot,tt,At,bt);let gt={g:q,mat:J,legL:At,legR:bt,state:"walk",fallT:0,phase:Math.random()*Math.PI*2,vel:new O};Vn.push(gt),rt.add(q)}let ds=H=>{H.g.position.set((Math.random()-.5)*32,0,(Math.random()<.5?-1:1)*(9.5+Math.random()*3.5)),H.g.rotation.set(0,0,0),H.state="walk",H.mat.color.setHex(16761976),H.mat.emissive.setHex(7031328)};Vn.forEach(ds),F.add(rt);let Kn=new Map,Ha=0,qs=null,ki=0,En=B.domElement,rl=new qc,ol=H=>{if(En.setPointerCapture(H.pointerId),Kn.set(H.pointerId,[H.clientX,H.clientY]),Tt=performance.now(),Kn.size===1&&(qs=[H.clientX,H.clientY],ki=performance.now()),Kn.size===2){let q=[...Kn.values()];Ha=Math.hypot(q[0][0]-q[1][0],q[0][1]-q[1][1])}},Va=H=>{if(!Kn.has(H.pointerId))return;let q=Kn.get(H.pointerId);if(Kn.set(H.pointerId,[H.clientX,H.clientY]),Tt=performance.now(),Kn.size===1)lt.theta-=(H.clientX-q[0])*.006,lt.phi=Xe(lt.phi-(H.clientY-q[1])*.005,.2,1.52);else if(Kn.size===2){let J=[...Kn.values()],ot=Math.hypot(J[0][0]-J[1][0],J[0][1]-J[1][1]);Ha>0&&(lt.radius=Xe(lt.radius*Ha/ot,30,800)),Ha=ot}},Ga=H=>{if(Kn.delete(H.pointerId),qs&&performance.now()-ki<350&&Math.hypot(H.clientX-qs[0],H.clientY-qs[1])<8){let J=En.getBoundingClientRect(),ot=new Xt((H.clientX-J.left)/J.width*2-1,-((H.clientY-J.top)/J.height)*2+1);rl.setFromCamera(ot,st);let tt=rl.intersectObjects(Ut)[0];tt&&(E.current=tt.object.userData.floor,c(tt.object.userData.floor))}qs=null},ka=H=>{H.preventDefault(),Tt=performance.now(),lt.radius=Xe(lt.radius*(1+H.deltaY*.001),30,800)};En.addEventListener("pointerdown",ol),En.addEventListener("pointermove",Va),En.addEventListener("pointerup",Ga),En.addEventListener("pointercancel",Ga),En.addEventListener("wheel",ka,{passive:!1});let ll=new ResizeObserver(()=>{W=V.clientWidth,N=V.clientHeight,st.aspect=W/N,st.updateProjectionMatrix(),B.setSize(W,N)});ll.observe(V);let ae={x:0,v:0,aI:0,aPk:0,t:0,lastTel:0,lastUi:0,lastSel:-2},cl=1/120,ul=0,lu=performance.now(),hl,cu=!0,sp=40,Cr=new $e,b=H=>{let q=M.current;ae.t+=H;let J=p_*(q.thk/25),ot=q.wind*1e3,tt=Math.PI**2*J/(4*fs*fs),At=q.dead*1e3*9.81,bt=1/Math.max(.05,1-At/tt),gt=q.wind>0?.085*(Math.sin(ae.t*1.7)+.55*Math.sin(ae.t*4.3+1.2)+.3*Math.sin(ae.t*7.1+.4))*(q.wind/150):0,$t=ot*fs**3/(3*J)*bt*(1+gt),ue=1.4*Math.sqrt(J/p_/(q.dead/250)),le=ue*ue*($t-ae.x)-2*.07*ue*ae.v;ae.v+=le*H,ae.x+=ae.v*H,ae.aI=le,ae.aPk=Math.max(ae.aPk*Math.exp(-H/2.2),Math.abs(le))},I=H=>ae.x*f_(Xe(H/fs,0,1))*sp,X=H=>ae.aPk*f_(H/Hn)/9.81*1e3,G=H=>ae.aI*f_(H/Hn)/9.81*1e3,k=H=>{if(!cu)return;let q=(H-lu)/1e3;for(lu=H,q=Math.min(q,.05),ul+=q;ul>=cl;)b(cl),ul-=cl;let J=M.current,ot=w.current,tt=E.current,At=Xe(ot.util,0,1);tt===null&&H-Tt>4e3&&(lt.theta+=.05*q);for(let Yt=0;Yt<Hn;Yt++){let ht=Ot[Yt];ht.g.position.x=I(Yt*hn);let Gt=tt!==null&&Yt===tt,Bt=tt!==null&&!Gt;ht.glassMat.opacity+=((Bt?.04:Gt?.08:.45)-ht.glassMat.opacity)*.15,ht.slabMat.opacity+=((Bt?.07:.95)-ht.slabMat.opacity)*.15,ht.edgeMat.opacity+=((Bt?.03:Gt?.95:Yt%10===0?.4:.18)-ht.edgeMat.opacity)*.15}Ue.position.x=I(fs),he.color.setHex(r1(At)),De.forEach(({line:Yt,cx:ht,cz:Gt})=>{let Bt=Yt.geometry.attributes.position;for(let qe=0;qe<=Hn;qe++){let mt=qe/Hn,Nn=qe*hn;Bt.setXYZ(qe,ht*al(mt)/2+I(Nn),Nn,Gt*ou(mt)/2)}Bt.needsUpdate=!0}),he.opacity=tt!==null?.12:.9,Wt.forEach((Yt,ht)=>{let Gt=Yt.f/Hn;Cr.position.set(Yt.fx*al(Gt)*.9+I(Yt.f*hn),Yt.f*hn+hn/2,Yt.side*(ou(Gt)/2+.15)),Cr.rotation.set(0,Yt.side>0?0:Math.PI,0),Cr.updateMatrix(),fe.setMatrixAt(ht,Cr.matrix)}),fe.instanceMatrix.needsUpdate=!0,fe.material.opacity+=((tt!==null?.05:.95)-fe.material.opacity)*.15;let bt=Math.max(0,Math.sin(ae.t*2.6));_t.color.setRGB(1,.16*(1-bt),.16*(1-bt)),Ne.scale.setScalar(.6+bt*.6),T.scale.setScalar(4+bt*9),T.material.opacity=.25+bt*.65;let gt=J.dead/500,$t=J.wind/150,ue=Math.pow(25/J.thk,.7);if(Re.color.setHex(r1(.45+Xe(($t*.75+gt*.45)*ue,0,1)*.55)),Zt.color.setHex(Xe($t*.95*ue,0,1)>.6?3968255:61695),J.wind>.5){ct.visible=!0;let Yt=40+J.wind*1.4,ht=at.attributes.position;for(let Gt=0;Gt<y;Gt++){let Bt=ht.getX(Gt)+Yt*K[Gt].v*q,qe=K[Gt].y,mt=Xe(qe/fs,0,1);Bt>-al(mt)/2+I(qe)&&(Bt=-200-Math.random()*120),ht.setX(Gt,Bt)}ht.needsUpdate=!0,ct.material.opacity=.3+J.wind/150*.6}else ct.visible=!1;let le=0;if(tt!==null){let Yt=tt/Hn;rt.visible=!0,rt.position.set(I(tt*hn),tt*hn+.4,0),rt.scale.set(al(Yt)/40,1,ou(Yt)/30);let ht=G(tt),Gt=X(tt),Bt=Xe(-ht*.004,-.45,.45),qe=Xe((Gt-35)/100,0,.85);if(Gt>60){let mt=Xe((Gt-60)/120,0,.8);!it.glassL&&Math.random()<mt*q*.55&&(it.glassL=!0,it.glass++,Ve(-1)),!it.glassR&&Math.random()<mt*q*.55&&(it.glassR=!0,it.glass++,Ve(1))}if(Lt>0){Lt-=q;for(let mt=0;mt<Z;mt++)ut[mt].y-=9.81*q,vt[mt*3]+=ut[mt].x*q,vt[mt*3+1]+=ut[mt].y*q,vt[mt*3+2]+=ut[mt].z*q;nt.attributes.position.needsUpdate=!0,wt.material.opacity=Xe(Lt/1.6,0,1)}else wt.material.opacity=0;U.forEach(mt=>{!mt.tipped&&Gt>45&&Math.random()<Xe((Gt-45)/120,0,.7)*q*.4&&(mt.tipped=!0,it.furn++);let Nn=mt.tipped?mt.dir*1.35:Bt*.5;mt.m.rotation.z+=(Nn-mt.m.rotation.z)*Math.min(1,6*q),mt.m.position.y+=((mt.tipped?mt.baseY*.55:mt.baseY)-mt.m.position.y)*Math.min(1,6*q)}),Vn.forEach(mt=>{if(mt.state==="ejected"){mt.vel.y-=9.81*q*1.5,mt.g.position.addScaledVector(mt.vel,q),mt.g.rotation.x+=4.5*q,mt.g.rotation.z+=3.2*q,rt.position.y+mt.g.position.y<=.5&&ds(mt);return}if(mt.state==="fallen"){le++,mt.fallT+=q,mt.fallT>6&&ds(mt);return}let Nn=Math.abs(mt.g.position.z)>11.5,Ys=mt.g.position.z>0?it.glassR:it.glassL;if(Gt>75&&Nn&&Ys&&Math.random()<Xe((Gt-75)/180,0,.22)*q*.9){mt.state="ejected",it.ejected++,mt.vel.set((Math.random()-.5)*2,2.5,Math.sign(mt.g.position.z)*(4+Math.random()*3)),mt.mat.color.setHex(16722474),mt.mat.emissive.setHex(6689812);return}if(Gt>35&&Math.random()<qe*q*.7){mt.state="fallen",mt.fallT=0,mt.g.rotation.z=Math.PI/2*(ht>=0?-1:1),mt.g.position.y=.35,mt.mat.color.setHex(16726586),mt.mat.emissive.setHex(6689812);return}let ve=1/(1+Gt/60),de=new O(-mt.g.position.x,0,-mt.g.position.z);if(de.length()<5.5){ds(mt);return}if(de.normalize(),Gt>15){let Di=Math.sin(ae.t*5+mt.phase)*Xe((Gt-15)/40,0,1)*1.6;de.x+=-de.z*Di*q*8,de.z+=de.x*Di*q*8,de.normalize()}mt.g.position.addScaledVector(de,3*ve*q),mt.g.position.y=0,mt.g.rotation.y=Math.atan2(de.x,de.z),mt.g.rotation.z=Bt;let Me=Math.sin(ae.t*7*ve+mt.phase)*.35;mt.legL.rotation.x=Me,mt.legR.rotation.x=-Me,Gt>35?(mt.mat.color.setHex(16747082),mt.mat.emissive.setHex(5909008)):Gt>15?(mt.mat.color.setHex(16757598),mt.mat.emissive.setHex(6175768)):(mt.mat.color.setHex(16761976),mt.mat.emissive.setHex(7031328))}),lt.target.set(I(tt*hn),tt*hn+2,0),ae.lastSel!==tt&&(lt.radius=58,lt.phi=.92,ae.lastSel=tt,it.ejected=0,it.furn=0,it.glass=0,it.glassL=!1,it.glassR=!1,U.forEach(mt=>{mt.tipped=!1}),Vn.forEach(ds),wt.material.opacity=0,Lt=0)}else rt.visible=!1,ae.lastSel!==-2&&(lt.target.set(0,95,0),lt.radius=330,lt.phi=1.16,ae.lastSel=-2);let Qt=1-Math.exp(-6*q);if(et.theta+=(lt.theta-et.theta)*Qt,et.phi+=(lt.phi-et.phi)*Qt,et.radius+=(lt.radius-et.radius)*Qt,et.target.lerp(lt.target,Qt),st.position.set(et.target.x+et.radius*Math.sin(et.phi)*Math.sin(et.theta),et.target.y+et.radius*Math.cos(et.phi),et.target.z+et.radius*Math.sin(et.phi)*Math.cos(et.theta)),st.lookAt(et.target),ae.t-ae.lastUi>.45){ae.lastUi=ae.t;let Yt=X(tt!==null?tt:Hn);p({mg:Yt,fallen:le,ejected:it.ejected,furn:it.furn,glass:it.glass})}ae.t-ae.lastTel>2&&(ae.lastTel=ae.t,v(`t=${ae.t.toFixed(1).padStart(6)}s \u03B4=${(ae.x*1e3).toFixed(1).padStart(7)}mm a_pk=${X(Hn).toFixed(1)}mg \u2192 ${ot.allOk?"PASS":"NG"}`,ot.allOk?"dim":"warn")),B.render(F,st),hl=requestAnimationFrame(k)};return hl=requestAnimationFrame(k),()=>{cu=!1,cancelAnimationFrame(hl),ll.disconnect(),En.removeEventListener("pointerdown",ol),En.removeEventListener("pointermove",Va),En.removeEventListener("pointerup",Ga),En.removeEventListener("pointercancel",Ga),En.removeEventListener("wheel",ka),B.dispose(),V.removeChild(B.domElement)}},[v]),(0,ye.useEffect)(()=>{l!==null&&S&&g&&v(`\u25BC FLOOR DIVE ${l}F  OCC=${S.occ}  a=${_}mg [${g.lvl.name}]  RSET=${S.rset.toFixed(0)}s`,g.lvl.name==="NONE"?"cyan":"warn")},[l]);let D=({cfg:V,value:W,onChange:N,accent:B})=>(0,Mt.jsxs)("div",{style:{marginBottom:12},children:[(0,Mt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",fontSize:10,letterSpacing:1.5,color:"rgba(0,240,255,0.55)",marginBottom:5},children:[(0,Mt.jsx)("span",{children:V.label}),(0,Mt.jsxs)("span",{style:{color:B,fontSize:11},children:[W.toFixed(0).padStart(3,"\xA0")," ",V.unit]})]}),(0,Mt.jsx)("input",{type:"range",className:"fui-slider",min:V.min,max:V.max,step:1,value:W,onChange:F=>N(Number(F.target.value)),style:{"--accent":B}})]}),R={cyan:"#00F0FF",amber:"#B8860B",warn:"#FF6B1A",dim:"rgba(160,200,210,0.55)"},P=u1(f.mg);return(0,Mt.jsxs)("div",{className:"layout",style:{display:"grid",gridTemplateColumns:"302px 1fr",width:"100%",height:"100vh",background:"#000",fontFamily:"'JetBrains Mono','SF Mono','Courier New',monospace",color:"#cfeef5",overflow:"hidden"},children:[(0,Mt.jsx)("style",{children:`
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
      `}),(0,Mt.jsxs)("div",{className:"panel",style:{borderRight:"1px solid rgba(0,240,255,0.18)",display:"flex",flexDirection:"column",padding:"13px 14px 8px",minWidth:0,minHeight:0,overflowY:"auto"},children:[(0,Mt.jsxs)("div",{style:{fontSize:13,letterSpacing:3,color:"#00F0FF",textShadow:"0 0 10px rgba(0,240,255,0.6)"},children:["STRUCT//SIM ",(0,Mt.jsx)("span",{style:{fontSize:9,color:"#FF6B1A"},children:"v5.0 ACCIDENT"})]}),(0,Mt.jsx)("div",{style:{fontSize:8.5,color:"rgba(255,255,255,0.35)",letterSpacing:1,marginBottom:11},children:"DRAG \uD68C\uC804 \xB7 PINCH \uC90C \xB7 \uCE35 \uD0ED = FLOOR DIVE"}),(0,Mt.jsx)(D,{cfg:wr.wind,value:e,onChange:t,accent:"#FF6B1A"}),(0,Mt.jsx)(D,{cfg:wr.dead,value:n,onChange:i,accent:"#B8860B"}),(0,Mt.jsx)(D,{cfg:wr.thickness,value:s,onChange:a,accent:"#00F0FF"}),(0,Mt.jsxs)("div",{style:{border:`1px solid ${u.allOk?"rgba(0,240,255,0.25)":"rgba(255,42,42,0.5)"}`,padding:"8px 10px",marginBottom:8},children:[(0,Mt.jsx)("div",{style:{fontSize:10,letterSpacing:1.5,marginBottom:5,color:u.allOk?"#00F0FF":"#FF2A2A"},children:u.allOk?"\u25C6 ALL CHECKS PASS":`\u25C6 DESIGN NG (${u.nFail}/3)`}),u.checks.map(V=>(0,Mt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",fontSize:8.5,marginBottom:2},children:[(0,Mt.jsxs)("span",{style:{color:V.ok?"rgba(0,240,255,0.8)":"#FF2A2A"},children:["\u25A0 ",V.label]}),(0,Mt.jsx)("span",{style:{color:"rgba(255,255,255,0.45)"},children:V.txt})]},V.id)),(0,Mt.jsxs)("div",{style:{marginTop:5,paddingTop:4,borderTop:"1px dashed rgba(255,255,255,0.12)",fontSize:8.5,color:d!==null&&s>=d?"rgba(0,240,255,0.85)":"#FF6B1A"},children:["REQ THK ",d===null?": \uBC94\uC704 \uCD08\uACFC":`\u2265 ${d.toFixed(1)}mm`,(0,Mt.jsxs)("span",{style:{float:"right",color:"rgba(255,255,255,0.4)"},children:["\uAF2D\uB300\uAE30 a_pk ",f.mg.toFixed(1),"mg"]})]})]}),l!==null&&S&&g&&h&&(0,Mt.jsxs)("div",{style:{border:`1px solid ${g.lvl.col}66`,padding:"8px 10px",marginBottom:8,background:"rgba(0,240,255,0.02)"},children:[(0,Mt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:5},children:[(0,Mt.jsxs)("span",{style:{fontSize:11,color:"#29FF9E",letterSpacing:1},children:["\u25BC ",l,"F INTERIOR"]}),(0,Mt.jsx)("button",{className:"fui-btn",onClick:A,style:{background:"transparent",border:"1px solid rgba(255,255,255,0.25)",color:"rgba(255,255,255,0.6)",fontFamily:"inherit",fontSize:8,padding:"2px 7px",cursor:"pointer"},children:"EXIT \u2715"})]}),(0,Mt.jsxs)("div",{style:{fontSize:9,letterSpacing:1.5,color:g.lvl.col,marginBottom:4},children:["\u25C8 BODY IMPACT \u2014 ",g.lvl.name," ",(0,Mt.jsxs)("span",{style:{color:"rgba(255,255,255,0.5)"},children:["(",g.lvl.ko,")"]})]}),(0,Mt.jsxs)("div",{style:{fontSize:9,lineHeight:1.7,color:"rgba(255,255,255,0.65)"},children:[(0,Mt.jsxs)("div",{children:["\uCE35 \uD53C\uD06C \uAC00\uC18D\uB3C4 ",(0,Mt.jsxs)("span",{style:{float:"right",color:g.lvl.col},children:[f.mg.toFixed(1)," milli-g"]})]}),(0,Mt.jsx)("div",{style:{height:4,background:"rgba(255,255,255,0.08)",margin:"3px 0 5px"},children:(0,Mt.jsx)("div",{style:{height:"100%",width:`${Xe(f.mg/100,0,1)*100}%`,background:g.lvl.col,boxShadow:`0 0 6px ${g.lvl.col}`,transition:"width .3s"}})}),(0,Mt.jsxs)("div",{children:["\uC7AC\uC2E4 \uC778\uC6D0(\uCD94\uC815) ",(0,Mt.jsxs)("span",{style:{float:"right",color:"#FFC478"},children:[S.occ,"\uBA85"]})]}),(0,Mt.jsxs)("div",{children:["\uC804\uB3C4 \uC704\uD5D8 ",(0,Mt.jsxs)("span",{style:{float:"right",color:g.nFall>0?"#FF6B1A":"inherit"},children:[(g.pFall*100).toFixed(0),"% \xB7 ",g.nFall,"\uBA85"]})]})]}),(0,Mt.jsx)("div",{style:{fontSize:9,letterSpacing:1.5,color:"#FF6B1A",margin:"6px 0 3px",borderTop:"1px dashed rgba(255,255,255,0.12)",paddingTop:5},children:"\u25C8 ACCIDENT FORECAST"}),(0,Mt.jsxs)("div",{style:{fontSize:9,lineHeight:1.7,color:"rgba(255,255,255,0.65)"},children:[(0,Mt.jsxs)("div",{children:["\uAC00\uAD6C \uC804\uB3C4 \uCDA9\uB3CC ",(0,Mt.jsxs)("span",{style:{float:"right",color:h.nFurn>0?"#FFB35E":"inherit"},children:[(h.pFurn*100).toFixed(0),"% \xB7 \uBD80\uC0C1 ~",h.nFurn,"\uBA85"]})]}),(0,Mt.jsxs)("div",{children:["\uC720\uB9AC \uD30C\uC190\xB7\uD30C\uD3B8 ",(0,Mt.jsxs)("span",{style:{float:"right",color:h.nGlass>0?"#FF6B1A":"inherit"},children:[(h.pGlass*100).toFixed(0),"% \xB7 \uBD80\uC0C1 ~",h.nGlass,"\uBA85"]})]}),(0,Mt.jsxs)("div",{children:["\uCC3D\uC678 \uCD94\uB77D \uC704\uD5D8 ",(0,Mt.jsxs)("span",{style:{float:"right",color:h.nEject>0?"#FF2A2A":"inherit"},children:[(h.pEject*100).toFixed(0),"% \xB7 ~",h.nEject,"\uBA85"]})]}),(0,Mt.jsxs)("div",{children:["EV \uC548\uC804\uC815\uC9C0 ",(0,Mt.jsx)("span",{style:{float:"right",color:h.evLock?"#FF6B1A":"rgba(255,255,255,0.4)"},children:h.evLock?`\uC815\uC9C0 \xB7 \uAC07\uD798 ~${h.nTrap}\uBA85`:"\uC815\uC0C1 \uC6B4\uD589"})]}),(0,Mt.jsxs)("div",{style:{marginTop:3,padding:"3px 5px",background:"rgba(255,42,42,0.07)",border:"1px solid rgba(255,42,42,0.2)"},children:["\uC138\uC158 \uBC1C\uC0DD: \uC804\uB3C4 ",(0,Mt.jsx)("span",{style:{color:"#FF6B1A"},children:f.fallen})," ","\xB7 \uAC00\uAD6C ",(0,Mt.jsx)("span",{style:{color:"#FFB35E"},children:f.furn})," ","\xB7 \uC720\uB9AC ",(0,Mt.jsx)("span",{style:{color:"#9BE8FF"},children:f.glass})," ","\xB7 \uCD94\uB77D ",(0,Mt.jsx)("span",{style:{color:"#FF2A2A",textShadow:f.ejected>0?"0 0 8px #FF2A2A":"none"},children:f.ejected})]})]}),(0,Mt.jsxs)("div",{style:{fontSize:9,lineHeight:1.75,color:"rgba(255,255,255,0.65)",borderTop:"1px dashed rgba(255,255,255,0.12)",marginTop:5,paddingTop:5},children:[(0,Mt.jsxs)("div",{children:["\uBCF4\uD589\uC18D\uB3C4 \uC800\uD558 ",(0,Mt.jsxs)("span",{style:{float:"right",color:S.slow>1.3?"#FF6B1A":"inherit"},children:["\xD7",(1/S.slow).toFixed(2)]})]}),(0,Mt.jsxs)("div",{children:["\uACC4\uB2E8 \uB300\uAE30\uC5F4",S.evLock?" (EV\uC815\uC9C0)":""," ",(0,Mt.jsxs)("span",{style:{float:"right",color:S.evLock?"#FF6B1A":"inherit"},children:[S.tQueue.toFixed(0),"s"]})]}),(0,Mt.jsxs)("div",{children:["RSET (\uBCF4\uC815) ",(0,Mt.jsxs)("span",{style:{float:"right",color:"#00F0FF"},children:[S.rset.toFixed(0),"s"]})]}),(0,Mt.jsxs)("div",{style:{fontSize:10},children:["GOLDEN TIME \uC5EC\uC720",(0,Mt.jsxs)("span",{style:{float:"right",color:np(S.status),textShadow:`0 0 8px ${np(S.status)}`},children:[S.margin.toFixed(0),"s [",S.status,"]"]})]}),(0,Mt.jsx)("div",{style:{height:4,background:"rgba(255,255,255,0.08)",marginTop:4},children:(0,Mt.jsx)("div",{style:{height:"100%",width:`${Xe(S.rset/h1,0,1)*100}%`,background:np(S.status),boxShadow:`0 0 6px ${np(S.status)}`}})}),(0,Mt.jsx)("div",{style:{fontSize:7.5,color:"rgba(255,255,255,0.3)",marginTop:4},children:"\u203B ISO 10137\uD615/SFPE\uD615 \uB2E8\uC21C\uD654 \uCD94\uC815(\uC2DC\uC5F0\uC6A9) \u2014 \uC2E4\uC81C \uC548\uC804 \uAC80\uD1A0 \uBD88\uAC00"})]})]}),(0,Mt.jsx)("div",{style:{fontSize:9,letterSpacing:2,color:"rgba(0,240,255,0.5)",marginBottom:5},children:"\u259A AI LOG / SOLVER STREAM"}),(0,Mt.jsx)("div",{ref:x,style:{flex:1,overflowY:"auto",border:"1px solid rgba(0,240,255,0.12)",background:"rgba(0,240,255,0.02)",padding:"7px 9px",fontSize:8.5,lineHeight:1.7,minHeight:70},children:r.map(V=>(0,Mt.jsxs)("div",{className:"log-line",style:{color:R[V.tone]},children:[(0,Mt.jsx)("span",{style:{color:"rgba(0,240,255,0.3)"},children:"> "}),V.line]},V.id))})]}),(0,Mt.jsxs)("div",{className:"stage",style:{position:"relative",minWidth:0,minHeight:0},children:[(0,Mt.jsx)("div",{ref:m,style:{position:"absolute",inset:0}}),(0,Mt.jsx)("div",{style:{position:"absolute",top:10,left:0,right:0,textAlign:"center",fontSize:9,letterSpacing:3,color:"rgba(0,240,255,0.4)",pointerEvents:"none"},children:"TRUE-3D \xB7 ACCIDENT CHAIN \xB7 TAP FLOOR \u2192 DIVE \xB7 EXAG \xD740"}),l!==null&&(0,Mt.jsxs)("div",{style:{position:"absolute",bottom:14,left:0,right:0,textAlign:"center",fontSize:10,letterSpacing:2,color:P.col,pointerEvents:"none",textShadow:`0 0 10px ${P.col}`},children:[l,"F \u2014 ",P.ko," (",f.mg.toFixed(1),"mg) \xB7 \uC804\uB3C4 ",f.fallen," \xB7 \uCD94\uB77D ",f.ejected]})]})]})}var ye,Mt,Hn,hn,fs,p_,a1,B3,wr,Xe,f_,al,ou,h1,np,H3,f1=ap(()=>{ye=Xa(fl());e1();Mt=Xa(ru()),Hn=50,hn=4,fs=200,p_=67e10,a1=fs*1e3/500,B3=[15,35],wr={wind:{min:0,max:150,def:40,unit:"kN",label:"WIND LOAD"},dead:{min:100,max:500,def:250,unit:"ton",label:"DEAD LOAD"},thickness:{min:10,max:50,def:25,unit:"mm",label:"MEMBER THK"}},Xe=(e,t,n)=>Math.max(t,Math.min(n,e)),f_=e=>(3*e*e-e*e*e)/2,al=e=>40-12*e,ou=e=>30-8*e;h1=600;np=e=>e==="SAFE"?"#00F0FF":e==="WARN"?"#FF6B1A":"#FF2A2A",H3=e=>e==="SAFE"?61695:e==="WARN"?16739098:16722474});var G3=Ui(()=>{var xL=Xa(fl()),d1=Xa(oM());f1();var p1=Xa(ru());(0,d1.createRoot)(document.getElementById("root")).render((0,p1.jsx)(m_,{}))});export default G3();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
