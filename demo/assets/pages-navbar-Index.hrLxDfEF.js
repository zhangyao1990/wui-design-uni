import{d as e,r as t,H as a,v as s,q as l,m as i,a9 as r,o,c as n,w as c,e as d,x as u,n as f,p as _,f as p,t as h,g as b,F as m,y as w,u as x,i as v,L as g,a as k,b as y,ar as $,af as C}from"./index-Fj9ozFXB.js";import{f as I,l as T,m as D,w as z,t as j,o as A,J as H,h as L,b as S,c as B,d as V,a as G}from"./page-wraper.D4oaE4iN.js";import{_ as q}from"./demo-block.e8_LucGp.js";import{_ as F}from"./wui-search.DkQpwZeD.js";import"./useTranslate.DD004H4V.js";const J=S(e({name:"wui-navbar",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...I,title:String,leftText:String,rightText:String,leftArrow:T(!1),bordered:T(!0),fixed:T(!1),placeholder:T(!1),zIndex:D(500),safeAreaInsetTop:T(!1),leftDisabled:T(!1),rightDisabled:T(!1)},emits:["click-left","click-right"],setup(e,{emit:k}){const y=e,$=k,C=t(""),{statusBarHeight:I}=a();s([()=>y.fixed,()=>y.placeholder],(()=>{V()}),{deep:!0,immediate:!1});const T=l((()=>{const e={};return y.fixed&&j(y.zIndex)&&(e["z-index"]=y.zIndex),y.safeAreaInsetTop&&(e["padding-top"]=L(I||0)),`${A(e)};${y.customStyle}`}));function D(){y.leftDisabled||$("click-left")}function S(){y.rightDisabled||$("click-right")}i((()=>{y.fixed&&y.placeholder&&r((()=>{V()}))}));const{proxy:B}=g();function V(){y.fixed&&y.placeholder&&H(".wui-navbar",!1,B).then((e=>{C.value=e.height}))}return(e,t)=>{const a=v;return o(),n(a,{style:w({height:x(L)(C.value)})},{default:c((()=>[d(a,{class:f(`wui-navbar ${e.customClass} ${e.fixed?"is-fixed":""} ${e.bordered?"is-border":""}`),style:w(T.value)},{default:c((()=>[d(a,{class:"wui-navbar__content"},{default:c((()=>[e.$slots.capsule?(o(),n(a,{key:0,class:"wui-navbar__capsule"},{default:c((()=>[u(e.$slots,"capsule",{},void 0,!0)])),_:3})):e.$slots.left?(o(),n(a,{key:2,class:f("wui-navbar__left "+(e.leftDisabled?"is-disabled":"")),onClick:D},{default:c((()=>[u(e.$slots,"left",{},void 0,!0)])),_:3},8,["class"])):(o(),n(a,{key:1,class:f("wui-navbar__left "+(e.leftDisabled?"is-disabled":"")),onClick:D},{default:c((()=>[e.leftArrow?(o(),n(z,{key:0,name:"arrow-left","custom-class":"wui-navbar__arrow"})):_("",!0),e.leftText?(o(),n(a,{key:1,class:"wui-navbar__text"},{default:c((()=>[p(h(e.leftText),1)])),_:1})):_("",!0)])),_:1},8,["class"])),d(a,{class:"wui-navbar__title"},{default:c((()=>[u(e.$slots,"title",{},void 0,!0),!e.$slots.title&&e.title?(o(),b(m,{key:0},[p(h(e.title),1)],64)):_("",!0)])),_:3}),e.$slots.right||e.rightText?(o(),n(a,{key:3,class:f("wui-navbar__right "+(e.rightDisabled?"is-disabled":"")),onClick:S},{default:c((()=>[u(e.$slots,"right",{},void 0,!0),!e.$slots.right&&e.rightText?(o(),n(a,{key:0,class:"wui-navbar__text","hover-class":"wui-navbar__text--hover","hover-stay-time":70},{default:c((()=>[p(h(e.rightText),1)])),_:1})):_("",!0)])),_:3},8,["class"])):_("",!0)])),_:3})])),_:3},8,["class","style"])])),_:3},8,["style"])}}}),[["__scopeId","data-v-f74192ef"]]),N=S(e({name:"wui-navbar-capsule",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},emits:["back","back-home"],setup(e,{emit:t}){const a=t;function s(){a("back")}function l(){a("back-home")}return(e,t)=>{const a=v;return o(),n(a,{class:"wui-navbar-capsule"},{default:c((()=>[d(z,{onClick:s,name:"chevron-left","custom-class":"wui-navbar-capsule__icon"}),d(z,{onClick:l,name:"home","custom-class":"wui-navbar-capsule__icon"})])),_:1})}}}),[["__scopeId","data-v-d4485ff4"]]),R=S(e({__name:"Index",setup(e){const a=t(""),{show:s}=B();function l(){$({})}function i(){s("按钮")}function r(){$({})}function n(){C({url:"/pages/index/Index"})}return(e,t)=>{const s=k(y("wui-toast"),V),u=k(y("wui-navbar"),J),f=k(y("demo-block"),q),_=k(y("wui-icon"),z),p=k(y("wui-navbar-capsule"),N),h=k(y("wui-search"),F),w=v,x=k(y("page-wraper"),G);return o(),b(m,null,[d(s),d(x,null,{default:c((()=>[d(u,{fixed:"",placeholder:"",title:"Navbar 导航条","left-arrow":"",safeAreaInsetTop:"",onClickLeft:l}),d(f,{title:"基础用法",transparent:""},{default:c((()=>[d(u,{title:"标题"})])),_:1}),d(f,{title:"返回上级",transparent:""},{default:c((()=>[d(u,{title:"标题","left-text":"返回","left-arrow":"",onClickLeft:l})])),_:1}),d(f,{title:"右侧按钮",transparent:""},{default:c((()=>[d(u,{title:"标题","left-text":"返回","left-arrow":"","right-text":"按钮",onClickLeft:l,onClickRight:i})])),_:1}),d(f,{title:"使用插槽",transparent:""},{default:c((()=>[d(u,{title:"标题",onClickLeft:l},{left:c((()=>[d(_,{name:"arrow-left",size:"24px",class:"wui-navbar__arrow"})])),right:c((()=>[d(_,{name:"search",size:"18"})])),_:1})])),_:1}),d(f,{title:"禁用按钮",transparent:""},{default:c((()=>[d(u,{title:"标题","left-text":"返回","right-text":"按钮","left-arrow":"","left-disabled":"","right-disabled":""})])),_:1}),d(f,{title:"胶囊样式",transparent:""},{default:c((()=>[d(u,{title:"标题","left-text":"返回","right-text":"设置","left-arrow":""},{capsule:c((()=>[d(p,{onBack:r,onBackHome:n})])),_:1})])),_:1}),d(f,{title:"带搜索栏",transparent:""},{default:c((()=>[d(u,{"left-text":"返回","right-text":"设置","left-arrow":""},{title:c((()=>[d(w,{class:"search-box"},{default:c((()=>[d(h,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),"hide-cancel":"","placeholder-left":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(w,{style:{height:"500rpx"}})])),_:1})],64)}}}),[["__scopeId","data-v-648676a0"]]);export{R as default};
