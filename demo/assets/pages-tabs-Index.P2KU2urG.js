import{c as e,d as a,a as l,b as t}from"./page-wraper.D4oaE4iN.js";import{d as u,r as n,a as d,b as o,o as s,c as i,w as m,e as r,g as f,h as _,F as p,f as c,t as v,i as V}from"./index-Fj9ozFXB.js";import{_ as g}from"./wui-button.CIriDmop.js";import{_ as k,a as b}from"./wui-tabs.BdQBx6rl.js";import{_ as h}from"./demo-block.e8_LucGp.js";import"./wui-sticky-box.80Vveh1P.js";import"./wui-resize.BoPAPGnY.js";import"./useChildren.CNqwIpWf.js";import"./useTouch.BQUFjmn2.js";import"./useTranslate.DD004H4V.js";const w=t(u({__name:"Index",setup(t){const u=n(["这","是","一","个","例子"]),w=n("一"),y=n(0),C=n(0),j=n(1),$=n(2),U=n(0),x=n(0),z=n(0),I=n(0),T=e();function F({index:e,name:a}){console.log("event",{index:e,name:a}),T.show(`点击了标签${a}`)}function J(e){console.log("change",e)}return(e,t)=>{const n=d(o("wui-toast"),a),T=d(o("wui-button"),g),K=V,R=d(o("wui-tab"),k),q=d(o("wui-tabs"),b),A=d(o("demo-block"),h),B=d(o("page-wraper"),l);return s(),i(B,null,{default:m((()=>[r(n),r(A,{title:"基本用法",transparent:""},{default:m((()=>[r(q,{modelValue:y.value,"onUpdate:modelValue":t[1]||(t[1]=e=>y.value=e),onChange:J},{default:m((()=>[(s(),f(p,null,_(4,(e=>r(R,{key:e,title:`标签${e}`},{default:m((()=>[r(K,{class:"content"},{default:m((()=>[c(" 内容"+v(y.value+1)+" ",1),r(K,null,{default:m((()=>[r(T,{onClick:t[0]||(t[0]=e=>y.value<3?y.value++:y.value=0)},{default:m((()=>[c("下一个")])),_:1})])),_:1})])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(A,{title:"name匹配",transparent:""},{default:m((()=>[r(q,{modelValue:w.value,"onUpdate:modelValue":t[2]||(t[2]=e=>w.value=e),onChange:J},{default:m((()=>[(s(!0),f(p,null,_(u.value,(e=>(s(),i(R,{key:e,title:`${e}`,name:e},{default:m((()=>[r(K,{class:"content"},{default:m((()=>[c("内容"+v(w.value),1)])),_:1})])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(A,{title:"粘性布局",transparent:""},{default:m((()=>[r(q,{modelValue:C.value,"onUpdate:modelValue":t[3]||(t[3]=e=>C.value=e),sticky:"",onChange:J},{default:m((()=>[(s(),f(p,null,_(4,(e=>r(R,{key:e,title:`标签${e}`},{default:m((()=>[r(K,{class:"content"},{default:m((()=>[c("内容"+v(C.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(A,{title:"禁用tab",transparent:""},{default:m((()=>[r(q,{modelValue:j.value,"onUpdate:modelValue":t[4]||(t[4]=e=>j.value=e),onChange:J},{default:m((()=>[(s(),f(p,null,_(4,(e=>r(R,{key:e,title:`标签${e}`,disabled:1===e},{default:m((()=>[r(K,{class:"content"},{default:m((()=>[c("内容"+v(j.value+1),1)])),_:1})])),_:2},1032,["title","disabled"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(A,{title:"点击事件",transparent:""},{default:m((()=>[r(q,{modelValue:$.value,"onUpdate:modelValue":t[5]||(t[5]=e=>$.value=e),onClick:F,onChange:J},{default:m((()=>[(s(),f(p,null,_(4,(e=>r(R,{key:e,title:`标签${e}`},{default:m((()=>[r(K,{class:"content"},{default:m((()=>[c("内容"+v($.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(A,{title:"切换动画",transparent:""},{default:m((()=>[r(q,{modelValue:I.value,"onUpdate:modelValue":t[6]||(t[6]=e=>I.value=e),animated:"",onChange:J},{default:m((()=>[(s(),f(p,null,_(4,(e=>r(R,{key:e,title:`标签${e}`},{default:m((()=>[r(K,{class:"content"},{default:m((()=>[c("内容"+v(I.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(A,{title:"手势滑动",transparent:""},{default:m((()=>[r(q,{modelValue:U.value,"onUpdate:modelValue":t[7]||(t[7]=e=>U.value=e),swipeable:"",animated:"",onChange:J},{default:m((()=>[(s(),f(p,null,_(4,(e=>r(R,{key:e,title:`标签${e}`},{default:m((()=>[r(K,{class:"content"},{default:m((()=>[c("内容"+v(U.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(A,{title:"数量大于6时可滚动",transparent:""},{default:m((()=>[r(q,{modelValue:x.value,"onUpdate:modelValue":t[8]||(t[8]=e=>x.value=e),"lazy-render":"",onChange:J},{default:m((()=>[(s(),f(p,null,_(7,(e=>r(R,{key:e,title:`标签${e}`},{default:m((()=>[r(K,{class:"content"},{default:m((()=>[c("内容"+v(x.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(A,{title:"数量大于10时出现导航地图",transparent:""},{default:m((()=>[r(q,{modelValue:z.value,"onUpdate:modelValue":t[9]||(t[9]=e=>z.value=e),onChange:J},{default:m((()=>[(s(),f(p,null,_(11,(e=>r(R,{key:e,title:`标签${e}`},{default:m((()=>[r(K,{class:"large"},{default:m((()=>[c("内容"+v(z.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-3418d2de"]]);export{w as default};