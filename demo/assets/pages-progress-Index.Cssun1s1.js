import{d as e,r as t,q as r,v as a,o as s,c as o,w as l,e as n,n as c,y as u,f as i,t as p,p as g,i as d,a as m,b as f}from"./index-Fj9ozFXB.js";import{f as b,m as _,l as v,w as h,o as w,q as y,r as x,b as k,a as N}from"./page-wraper.D4oaE4iN.js";import{_ as T}from"./demo-block.e8_LucGp.js";const j=k(e({name:"wui-progress",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...b,percentage:_(0),hideText:v(!1),color:{type:[String,Array,Object],default:"linear-gradient(315deg, rgba(81,124,240,1) 0%,rgba(118,158,245,1) 100%)"},duration:_(30),status:String},setup(e){const m=e,f=t(""),b=t(0),_=t(0),v=t("");let k=null;const N=r((()=>{const e={background:f.value,width:b.value+"%","transition-duration":_.value*m.duration*.001+"s"};return w(e)}));function T(e,t){if(k)return;const{duration:r}=m;_.value=Math.abs(e-b.value),setTimeout((()=>{b.value=e,f.value=t,k=setTimeout((()=>{clearTimeout(k),k=null,j()}),_.value*r)}),50)}function j(){const{percentage:e,color:t}=m;if(b.value===e||!e)return;let r=x(t)?t:[t];if(0===r.length)throw Error("The colorArray is empty");const a=r.every((e=>"string"==typeof e)),s=r.every((e=>e.hasOwnProperty("color")&&e.hasOwnProperty("percentage")));if(!a&&!s)throw Error("Color must be String or Object with color and percentage");if(s&&r.some((({percentage:e})=>Number.isNaN(parseInt(e)))))throw Error("All the percentage must can be formatted to Number");const o=parseInt(""+100/r.length),l=s?r.sort(((e,t)=>e.percentage-t.percentage)):r.map(((e,t)=>({color:e,percentage:(t+1)*o})));b.value>e?l.some((t=>{if(e<=t.percentage)return T(e,t.color),!0})):l.some(((t,r)=>{if(b.value<t.percentage&&t.percentage<=e)return T(t.percentage,t.color),!0;r===l.length-1&&T(e,t.color)}))}return a((()=>m.percentage),(e=>{(Number.isNaN(e)||e<0||e>100)&&console.error("The value of percentage must be between 0 and 100"),j()})),a((()=>m.color),(()=>{j()}),{deep:!0,immediate:!0}),a((()=>m.status),(()=>{!function(){const{status:e}=m;let t=[];e&&t.push(`is-${e}`),v.value=t.join(" ")}()}),{deep:!0,immediate:!0}),a((()=>m.duration),(e=>{y(e)}),{deep:!0,immediate:!0}),(e,t)=>{const r=d;return s(),o(r,{class:c(`wui-progress ${e.customClass}`),style:u(e.customStyle)},{default:l((()=>[n(r,{class:"wui-progress__outer"},{default:l((()=>[n(r,{class:c(`wui-progress__inner ${v.value}`),style:u(N.value)},null,8,["class","style"])])),_:1}),e.hideText?e.status?(s(),o(h,{key:1,"custom-class":`wui-progress__label wui-progress__icon ${v.value}`,name:"danger"==e.status?"close-outline":"check-outline",color:"string"==typeof e.color?e.color:""},null,8,["custom-class","name","color"])):g("",!0):(s(),o(r,{key:0,class:"wui-progress__label"},{default:l((()=>[i(p(e.percentage)+"%",1)])),_:1}))])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-11a3d8b1"]]),I=e({__name:"Index",setup(e){const r=t([{color:"yellow",percentage:30},{color:"red",percentage:60},{color:"blue",percentage:80},{color:"black",percentage:90}]),a=t(100);return(e,t)=>{const c=m(f("wui-progress"),j),u=m(f("demo-block"),T),i=m(f("page-wraper"),N);return s(),o(i,null,{default:l((()=>[n(u,{title:"基本用法"},{default:l((()=>[n(c,{percentage:30})])),_:1}),n(u,{title:"不显示进度文字"},{default:l((()=>[n(c,{percentage:60,"hide-text":""})])),_:1}),n(u,{title:"进度条状态"},{default:l((()=>[n(c,{percentage:100,"hide-text":"",status:"success"}),n(c,{percentage:80,"hide-text":"",status:"danger"})])),_:1}),n(u,{title:"修改颜色"},{default:l((()=>[n(c,{percentage:80,color:"#00c740"})])),_:1}),n(u,{title:"颜色数组"},{default:l((()=>[n(c,{percentage:100,color:["#00c740","#ffb300","#e2231a","#0083ff"]}),n(c,{percentage:a.value,color:r.value},null,8,["percentage","color"])])),_:1})])),_:1})}}});export{I as default};
