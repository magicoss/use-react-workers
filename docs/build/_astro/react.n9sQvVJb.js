import{r as n}from"./index.LFf77hJu.js";var j={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=n,W=Symbol.for("react.element"),T=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,x=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,s){var r,u={},i=null,a=null;s!==void 0&&(i=""+s),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)$.call(t,r)&&!M.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)u[r]===void 0&&(u[r]=t[r]);return{$$typeof:W,type:e,key:i,ref:a,props:u,_owner:x.current}}U.Fragment=T;U.jsx=N;U.jsxs=N;j.exports=U;var Y=j.exports;const P=e=>e.length===0?"":`importScripts(${e.map(s=>`'${s}'`).toString()})`,S=(e,t,s)=>{const r=`
    ${P(t)};
    onmessage=(${F})({
      fn: ${e},
      transferable: '${s}'
    })
  `,u=new Blob([r],{type:"text/javascript"});return URL.createObjectURL(u)},A=S,F=e=>async t=>{const[s]=t.data;try{const r=await Promise.resolve(e.fn(...s)),u=a=>"ArrayBuffer"in self&&a instanceof ArrayBuffer||"MessagePort"in self&&a instanceof MessagePort||"ImageBitmap"in self&&a instanceof ImageBitmap||"OffscreenCanvas"in self&&a instanceof OffscreenCanvas,i=e.transferable==="auto"&&u(r)?[r]:[];postMessage(["idle",r],i)}catch(r){postMessage(["error",r])}};var c=(e=>(e.IDLE="idle",e.RUNNING="running",e.ERROR="error",e.EXPIRED="expired",e.KILLED="killed",e))(c||{}),y=(e=>(e.AUTO="auto",e.NONE="none",e))(y||{});const h={timeout:void 0,remoteDependencies:[],autoTerminate:!0,transferable:y.AUTO},C={resolve:()=>null,reject:()=>null},G=(e,t=h)=>{const{autoTerminate:s,transferable:r,remoteDependencies:u,timeout:i}={...h,...t},[a,l]=n.useState(c.IDLE),o=n.useRef(),b=n.useRef(C),k=n.useRef(),p=n.useCallback(()=>{var f;(f=o.current)!=null&&f._url&&(o.current.terminate(),URL.revokeObjectURL(o.current._url),b.current=C,o.current=void 0,clearTimeout(k.current))},[]),R=n.useCallback(f=>{s&&p(),l(f)},[s,p,l]),g=n.useCallback(()=>{const f=A(e,u,r),m=new Worker(f);return m._url=f,m.onmessage=v=>{const[I,O]=v.data;switch(I){case c.IDLE:b.current.resolve(O),R(c.IDLE);break;default:b.current.reject(O),R(c.ERROR);break}},m.onerror=v=>{b.current.reject(v),R(c.ERROR)},i&&(k.current=setTimeout(()=>{p(),l(c.EXPIRED)},i)),m},[e,t,p]),E=n.useCallback((...f)=>new Promise((m,v)=>{var I;b.current={resolve:m,reject:v};const O=r===y.AUTO?f.filter(L=>"ArrayBuffer"in window&&L instanceof ArrayBuffer||"MessagePort"in window&&L instanceof MessagePort||"ImageBitmap"in window&&L instanceof ImageBitmap||"OffscreenCanvas"in window&&L instanceof OffscreenCanvas):[];(I=o.current)==null||I.postMessage([[...f]],O),l(c.RUNNING)}),[r]),_=n.useCallback((...f)=>{try{if(a===c.RUNNING)throw new Error("[useWorkerFunc] You can only run one instance of the worker at a time, if you want to run more than one in parallel, create another instance with the hook useWorkerFunc(). Read more: https://github.com/jpwallace22/use-react-workers");return(s||!o.current)&&(o.current=g()),E(...f)}catch(m){return console.error(m),Promise.reject(`Web worker "${e.name}" is already running`)}},[a,s,E,g,e]),d=n.useCallback(()=>{p(),l(c.KILLED)},[p,l]),w={status:a,terminate:d};return n.useEffect(()=>{p()},[p]),[_,w]},q=(e,t)=>{const[s,r]=n.useState(t),[u,i]=G(e),a=async(...l)=>{const o=await u(...l);r(o)};return n.useEffect(()=>()=>i.terminate(),[]),[s,a,i]},K=(e,t)=>{const s=`
    ${P(t)};
    onmessage=(${X})({
      fn: ${e},
    })
  `,r=new Blob([s],{type:"text/javascript"});return URL.createObjectURL(r)},X=({fn:e})=>async t=>{const[s]=t.data;e(...s)},D={timeout:void 0,remoteDependencies:[],autoTerminate:!1,transferable:y.AUTO},J=(e,t=D)=>{const{autoTerminate:s,transferable:r,remoteDependencies:u,timeout:i}={...D,...t},[a,l]=n.useState(c.IDLE),o=n.useRef(),b=n.useRef(),k=n.useCallback(()=>{var d;(d=o.current)!=null&&d._url&&(o.current.terminate(),URL.revokeObjectURL(o.current._url),o.current=void 0,clearTimeout(b.current))},[]),p=n.useCallback(()=>{const d=K(e,u),w=new Worker(d);return w._url=d,i&&(b.current=setTimeout(()=>{k(),l(c.EXPIRED)},i)),w},[e,t,k]),R=n.useCallback((...d)=>{var w;(!o.current||a!==c.RUNNING)&&(o.current=p(),l(c.RUNNING));const f=r===y.AUTO?d.filter(m=>"ArrayBuffer"in window&&m instanceof ArrayBuffer||"MessagePort"in window&&m instanceof MessagePort||"ImageBitmap"in window&&m instanceof ImageBitmap||"OffscreenCanvas"in window&&m instanceof OffscreenCanvas):[];(w=o.current)==null||w.postMessage([[...d]],f)},[p,r,a]),g=n.useCallback(d=>{if(o.current)try{o.current.onmessage=w=>{d(w),s&&(k(),l(c.IDLE))}}catch(w){throw new Error(w)}finally{s&&(k(),l(c.IDLE))}},[s,k]),E=n.useCallback(()=>{k(),l(c.KILLED)},[k,l]),_=n.useMemo(()=>({postMessage:R,onMessage:g,terminate:E,status:a}),[R,g,E,a]);return n.useEffect(()=>{k()},[k]),_},z={src:"/use-react-workers/_astro/react.h3aPdYU7.svg",width:35.93,height:32,format:"svg"};export{q as a,G as b,Y as j,z as r,J as u};
