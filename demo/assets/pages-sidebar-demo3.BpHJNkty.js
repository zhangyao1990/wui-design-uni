import{_ as l,a as e}from"./wui-sidebar.BRP6ntVE.js";import{d as a,r as t,m as i,a as o,b as s,o as u,c as n,w as r,e as c,g as d,h as m,F as p,i as b,a6 as f}from"./index-Fj9ozFXB.js";import{J as v,w,_,a as g,b as h}from"./page-wraper.D4oaE4iN.js";import{_ as y}from"./wui-cell-group.CkmAaoI5.js";import"./wui-badge.Dv0sSjha.js";import"./useChildren.CNqwIpWf.js";const j=h(a({__name:"demo3",setup(a){const h=t(1),j=t(0),x=t([]),k=new Array(24).fill({title:"标题文字",label:"这是描述这是描述"},0,24),V=t([{label:"分类一",title:"标题一",icon:"thumb-up",items:k},{label:"分类二",title:"标题二",icon:"qrcode",items:k},{label:"分类三",title:"标题三",icon:"location",items:k.slice(0,18)},{label:"分类四",title:"标题四",icon:"ie",items:k.slice(0,21)},{label:"分类五",title:"标题五",icon:"github-filled",items:k},{label:"分类六",title:"标题六",icon:"chrome",items:k.slice(0,18)},{label:"分类七",title:"标题七",icon:"android",items:k}]);function C({value:l}){h.value=l,j.value=x.value[l]}function I(l){const{scrollTop:e}=l.detail;if(e<50)return void(h.value=0);const a=x.value.findIndex((l=>l>e&&l-e<=50));a>-1&&(h.value=a)}return i((()=>{v(".category",!0).then((l=>{x.value=l.map((l=>l.top||0)),j.value=l[h.value].top||0}))})),(a,t)=>{const i=o(s("wui-sidebar-item"),l),v=o(s("wui-sidebar"),e),x=o(s("wui-icon"),w),k=o(s("wui-cell"),_),q=o(s("wui-cell-group"),y),z=b,A=f,F=o(s("page-wraper"),g);return u(),n(F,null,{default:r((()=>[c(z,{class:"wraper"},{default:r((()=>[c(v,{modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=l=>h.value=l),onChange:C},{default:r((()=>[(u(!0),d(p,null,m(V.value,((l,e)=>(u(),n(i,{key:e,value:e,label:l.label,icon:l.icon},null,8,["value","label","icon"])))),128))])),_:1},8,["modelValue"]),c(A,{class:"content","scroll-y":"","scroll-with-animation":"","scroll-top":j.value,throttle:!1,onScroll:I},{default:r((()=>[(u(!0),d(p,null,m(V.value,((l,e)=>(u(),n(z,{key:e,class:"category"},{default:r((()=>[c(q,{title:l.title,border:""},{default:r((()=>[(u(!0),d(p,null,m(l.items,((l,e)=>(u(),n(k,{key:e,title:l.title,label:l.label},{default:r((()=>[c(x,{name:"github-filled",size:"24px"})])),_:2},1032,["title","label"])))),128))])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1},8,["scroll-top"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-f1290153"]]);export{j as default};
