import{d as e,r as s,q as l,m as t,O as a,o,c as i,w as r,e as c,x as u,u as n,n as h,y as p,L as d,i as v,a6 as w}from"./index-Fj9ozFXB.js";import{f,i as g,I as _,h as m,o as z,b as x}from"./page-wraper.D4oaE4iN.js";const y=x(e({name:"wui-resize",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...f,customContainerClass:g("")},emits:["resize"],setup(e,{emit:f}){const g=e,x=f,y=s(0),b=s(0),C=s(0),$=s(0),S=s(0),H=s(0),I=s(0),W=l((()=>{const e={width:m(H.value),height:m(S.value)};return`${z(e)};${g.customStyle}`}));let j=()=>{};const{proxy:E}=d(),R=s(`resize${_()}`);function q({lastWidth:e,lastHeight:s}){y.value=1e5+s,b.value=3*S.value+s,C.value=1e5+e,$.value=3*H.value+e}return t((()=>{a().in(E).select(`#${R.value}`).boundingClientRect().exec((([e])=>{let s=e.height,l=e.width;S.value=s,H.value=l,j=()=>{a().in(E).select(`#${R.value}`).boundingClientRect().exec((([e])=>{if(0==I.value++){const s={};["bottom","top","left","right","height","width"].forEach((l=>{s[l]=e[l]})),x("resize",s)}if(I.value<3)return;const t=e.height,a=e.width;S.value=t,H.value=a;const o=[];if(t!==s&&(s=t,o.push(1)),a!==l&&(l=a,o.push(1)),0!==o.length){const s={};["bottom","top","left","right","height","width"].forEach((l=>{s[l]=e[l]})),x("resize",s)}q({lastWidth:l,lastHeight:s})}))},q({lastWidth:l,lastHeight:s})}))})),(e,s)=>{const l=v,t=w;return o(),i(l,{class:h(`wui-resize ${e.customClass}`),style:p(W.value)},{default:r((()=>[c(l,{id:R.value,class:h(`wui-resize__container ${e.customContainerClass}`)},{default:r((()=>[u(e.$slots,"default",{},void 0,!0),c(t,{class:"wui-resize__wrapper","scroll-y":!0,"scroll-top":y.value,"scroll-x":!0,"scroll-left":C.value,onScroll:n(j)},{default:r((()=>[c(l,{class:"wui-resize__wrapper--placeholder",style:{height:"100000px",width:"100000px"}})])),_:1},8,["scroll-top","scroll-left","onScroll"]),c(t,{class:"wui-resize__wrapper","scroll-y":!0,"scroll-top":b.value,"scroll-x":!0,"scroll-left":$.value,onScroll:n(j)},{default:r((()=>[c(l,{class:"wui-resize__wrapper--placeholder",style:{height:"250%",width:"250%"}})])),_:1},8,["scroll-top","scroll-left","onScroll"])])),_:3},8,["id","class"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-123bccb0"]]);export{y as w};
