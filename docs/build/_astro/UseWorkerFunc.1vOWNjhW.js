import{b as l,j as t,r as u}from"./react.n9sQvVJb.js";import{r as o}from"./index.LFf77hJu.js";function s(e){return e<=1?e:s(e-1)+s(e-2)}let n=0;function m(){const e=document.querySelector(".logo");n+=2,e&&(e.style.transform=`rotate(${n%360}deg)`)}function f(){const[e,r]=o.useState(0),[c,{status:i}]=l(s);return o.useEffect(()=>{const a=setInterval(m,100);return()=>clearInterval(a)},[]),t.jsxs("div",{className:"not-content my-8 mx-auto w-fit text-center",children:[t.jsx("div",{children:t.jsx("img",{src:u.src,className:"logo react w-80 mb-8",alt:"React logo"})}),t.jsxs("div",{className:"grid gap-4",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Fib Number:"})," ",e]}),t.jsxs("div",{className:"flex gap-4 justify-center",children:[t.jsx("button",{className:"btn",onClick:()=>{r(0),setTimeout(()=>r(s(45)),1)},children:"Without Worker"}),t.jsx("button",{className:"btn primary",onClick:async()=>{r(0),r(await c(45))},children:"With Worker"})]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Worker Status:"})," ",i]})]})]})}export{f as UseWorkerFunc};
