import{u as e,_ as l}from"./wui-message-box.B-SEOgW-.js";import{d as a,r as t,q as o,v as s,S as u,H as c,m as i,Q as r,o as d,c as n,w as m,e as v,y as p,x as f,f as V,t as h,n as _,K as w,I as y,i as k,j as x,L as b,a as g,b as S}from"./index-Fj9ozFXB.js";import{f as j,m as C,i as F,l as I,I as z,h as L,o as U,s as M,b as P,a as T}from"./page-wraper.D4oaE4iN.js";import{_ as G}from"./demo-block.e8_LucGp.js";import{_ as W}from"./wui-button.CIriDmop.js";import"./wui-input.DTYlJiLR.js";import"./useTranslate.DD004H4V.js";const $=P(a({name:"wui-circle",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...j,modelValue:C(0),size:C(100),color:{type:[String,Object],default:"#4d80f0"},layerColor:F("#EBEEF5"),fill:String,speed:C(50),text:String,strokeWidth:C(10),strokeLinecap:F("round"),clockwise:I(!0)},setup(e){const l=2*Math.PI,a=-Math.PI/2,g=e,S=t(""),j=t(0),C=t(null),F=t(1),I=t(`wui-circle${z()}`);let P=null;const T=o((()=>g.size)),G=o((()=>g.strokeWidth)),W=o((()=>{const e={width:L(g.size),height:L(g.size)};return`${U(e)};`}));s((()=>g.modelValue),(()=>{!function(){if(g.speed<=0||g.speed>1e3)return void O(g.modelValue);H(),j.value=j.value||0;const e=()=>{C.value=setTimeout((()=>{j.value!==g.modelValue?(Math.abs(j.value-g.modelValue)<1?j.value=g.modelValue:j.value<g.modelValue?j.value+=1:j.value-=1,O(j.value),e()):H()}),1e3/g.speed)};e()}()}),{immediate:!0}),s((()=>g.size),(()=>{let e=setTimeout((()=>{O(j.value),clearTimeout(e)}),50)}),{immediate:!1}),s((()=>g.color),(()=>{O(j.value)}),{immediate:!1,deep:!0}),u((()=>{F.value=c().pixelRatio})),i((()=>{j.value=g.modelValue,O(j.value)})),r((()=>{H()}));const{proxy:$}=b();function E(e,l,a,t,o){let s=G.value;const u=T.value/2;o||(s/=2);const c=u-s/2;e.strokeStyle=l,e.setStrokeStyle(l),e.setLineWidth(s),e.setLineCap(g.strokeLinecap),e.beginPath(),e.arc(u,u,c,a,t,!g.clockwise),e.stroke(),o&&(e.setLineWidth(s),e.setFillStyle(o),e.fill())}function O(e){new Promise((e=>{if(P)return e(P);P=w(I.value,$),e(P)})).then((t=>{t.clearRect(0,0,T.value,T.value),function(e){E(e,g.layerColor,0,l,g.fill)}(t);const o=(s=e,Math.min(Math.max(s,0),100));var s;0!==o?function(e,t){const o=l*(t/100),s=g.clockwise?a+o:3*Math.PI-(a+o);if(M(g.color)){const l=e.createLinearGradient(T.value,0,0,0);Object.keys(g.color).sort(((e,l)=>parseFloat(e)-parseFloat(l))).map((e=>l.addColorStop(parseFloat(e)/100,g.color[e]))),S.value=l}else S.value=g.color;E(e,S.value,a,s)}(t,o):function(e){const a=G.value,t=T.value/2;if(M(g.color)){const l=e.createLinearGradient(T.value,0,0,0);Object.keys(g.color).sort(((e,l)=>parseFloat(e)-parseFloat(l))).map((e=>l.addColorStop(parseFloat(e)/100,g.color[e]))),S.value=l}else S.value=g.color;e.beginPath(),e.arc(t,a/4,a/4,0,l),e.setFillStyle(S.value),e.fill()}(t),t.draw()}))}function H(){C.value&&clearTimeout(C.value)}return(e,l)=>{const a=y,t=k,o=x;return d(),n(t,{class:_(`wui-circle ${e.customClass}`),style:p(e.customStyle)},{default:m((()=>[v(a,{width:T.value,height:T.value,style:p(W.value),id:I.value,"canvas-id":I.value},null,8,["width","height","style","id","canvas-id"]),e.text?(d(),n(o,{key:1,class:"wui-circle__text"},{default:m((()=>[V(h(e.text),1)])),_:1})):(d(),n(t,{key:0,class:"wui-circle__text"},{default:m((()=>[f(e.$slots,"default",{},void 0,!0)])),_:3}))])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-3e713fc2"]]),E=P(a({__name:"Index",setup(a){const o=t(20),s={0:"red",100:"white"};function u(){o.value<100&&(o.value+=10)}function c(){o.value>0&&(o.value-=10)}const i=e();function r(){i.alert("操作成功")}return(e,a)=>{const t=g(S("wui-message-box"),l),i=g(S("wui-circle"),$),p=g(S("demo-block"),G),f=k,_=g(S("wui-button"),W),w=g(S("page-wraper"),T);return d(),n(f,{class:"circle"},{default:m((()=>[v(w,null,{default:m((()=>[v(t),v(p,{title:"基础用法"},{default:m((()=>[v(i,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),text:o.value+"%"},null,8,["modelValue","text"])])),_:1}),v(p,{title:"样式定制"},{default:m((()=>[v(i,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e),"stroke-width":6,text:"宽度定制"},null,8,["modelValue"]),v(i,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e),"layer-color":"#eee",color:"#ee0a24",text:"颜色定制"},null,8,["modelValue"]),v(i,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=e=>o.value=e),color:s,text:"渐变色"},null,8,["modelValue"]),v(i,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=e=>o.value=e),color:"#07c160",clockwise:!1,text:"逆时针"},null,8,["modelValue"]),v(i,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[5]||(a[5]=e=>o.value=e),size:120,text:"大小定制"},null,8,["modelValue"])])),_:1}),v(p,{title:"使用slot"},{default:m((()=>[v(i,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[6]||(a[6]=e=>o.value=e),"stroke-width":6},{default:m((()=>[v(f,{style:{color:"red"}},{default:m((()=>[V(h(o.value)+"%",1)])),_:1})])),_:1},8,["modelValue"])])),_:1}),v(p,null,{default:m((()=>[v(_,{"custom-style":"margin-right:24rpx",type:"primary",size:"small",onClick:u},{default:m((()=>[V("增加")])),_:1}),v(_,{type:"error",size:"small",onClick:c},{default:m((()=>[V("减少")])),_:1})])),_:1}),v(p,{title:"alert"},{default:m((()=>[v(_,{onClick:r},{default:m((()=>[V("alert")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-060b4706"]]);export{E as default};
