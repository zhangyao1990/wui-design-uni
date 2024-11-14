import{d as t,r as e,q as a,v as i,o as l,c as s,w as o,g as r,h as p,F as n,x as u,n as d,y as h,i as c,a as x,b as w,e as m,f as g}from"./index-Fj9ozFXB.js";import{i as y,N as f,l as _,K as v,h as k,b,e as z,a as j}from"./page-wraper.D4oaE4iN.js";import{_ as C}from"./demo-block.e8_LucGp.js";import{_ as $,a as A}from"./wui-grid.Bk314pCp.js";import"./wui-badge.Dv0sSjha.js";import"./useChildren.CNqwIpWf.js";const L=b(t({name:"wui-skeleton",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{theme:y("text"),rowCol:f(),loading:_(!0),animation:{type:String,default:""},customClass:{type:[String,Array,Object],default:""},customStyle:{type:Object,default:()=>({})}},setup(t){const x={avatar:[{type:"circle",height:"64px",width:"64px"}],image:[{type:"rect",height:"64px",width:"64px"}],text:[1,[{width:"24%",height:"16px",marginRight:"16px"},{width:"76%",height:"16px"}]],paragraph:[1,1,1,{width:"55%"}]},w=t,m=e([]),g=a((()=>m.value.map((t=>{if(v(t))return[{class:y({type:"text"}),style:{}}];if(Array.isArray(t))return t.map((t=>({...t,class:y(t),style:f(t)})));const e=t;return[{...e,class:y(e),style:f(e)}]}))));function y(t){return["wui-skeleton__col",`wui-skeleton--type-${t.type||"text"}`,{[`wui-skeleton--animation-${w.animation}`]:w.animation}]}function f(t){const e={},a=["size","width","height","margin","background","marginLeft","marginRight","borderRadius","backgroundColor"];for(const i of a)if(Object.prototype.hasOwnProperty.call(t,i)){const a=k(t[i]);"size"===i?(e.width=a,e.height=a):e[i]=a}return e}i((()=>w.rowCol),(t=>{m.value=[...Array.isArray(t)&&t.length?w.rowCol:x[w.theme]]}),{immediate:!0});const _=a((()=>null==w.loading||!0===w.loading));return(t,e)=>{const a=c;return l(),s(a,{class:d(`wui-skeleton ${t.customClass}`),style:h(t.customStyle)},{default:o((()=>[_.value?(l(),s(a,{key:0,class:"wui-skeleton__content"},{default:o((()=>[(l(!0),r(n,null,p(g.value,((t,e)=>(l(),s(a,{class:"wui-skeleton__row",key:`row-${e}`},{default:o((()=>[(l(!0),r(n,null,p(t,((t,e)=>(l(),s(a,{key:`col-${e}`,class:d(t.class),style:h(t.style)},null,8,["class","style"])))),128))])),_:2},1024)))),128))])),_:1})):(l(),s(a,{key:1},{default:o((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3}))])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-52c6ccfd"]]),O=t({__name:"Index",setup(t){const a=[{title:"头像骨架屏",value:"avatar"},{title:"图片骨架屏",value:"image"},{title:"文本骨架屏",value:"text"},{title:"段落骨架屏",value:"paragraph"}],i=[[{width:"48px",height:"48px"},{width:"48px",height:"48px"},{width:"48px",height:"48px"},{width:"48px",height:"48px"},{width:"48px",height:"48px"}],[{width:"48px",height:"16px"},{width:"48px",height:"16px"},{width:"48px",height:"16px"},{width:"48px",height:"16px"},{width:"48px",height:"16px"}]],u=[{height:"171px"},1,{width:"107px"},[{width:"93px"},{width:"32px",marginLeft:"41px"}]],d=e(!0);return(t,e)=>{const h=x(w("wui-skeleton"),L),y=x(w("demo-block"),C),f=c,_=x(w("wui-switch"),z),v=x(w("wui-grid-item"),$),k=x(w("wui-grid"),A),b=x(w("page-wraper"),j);return l(),s(b,null,{default:o((()=>[(l(),r(n,null,p(a,(t=>m(y,{key:t.value,title:t.title},{default:o((()=>[m(h,{theme:t.value},null,8,["theme"])])),_:2},1032,["title"]))),64)),m(y,{title:"宫格骨架屏"},{default:o((()=>[m(h,{"row-col":i})])),_:1}),m(y,{title:"单元格骨架屏"},{default:o((()=>[m(f,{style:{display:"flex"}},{default:o((()=>[m(h,{"row-col":[{size:"48px",type:"circle"}]}),m(h,{"custom-style":{width:"100%",marginLeft:"12px"},"row-col":[{width:"50%"},{width:"100%"}]})])),_:1}),m(f,{style:{display:"flex","margin-top":"20px"}},{default:o((()=>[m(h,{"row-col":[{size:"48px",type:"rect"}]}),m(h,{"custom-style":{width:"100%",marginLeft:"12px"},"row-col":[{width:"50%"},{width:"100%"}]})])),_:1})])),_:1}),m(y,{title:"图片组合骨架屏"},{default:o((()=>[m(h,{"row-col":u}),m(h,{"custom-style":{marginTop:"20px"},"row-col":u})])),_:1}),m(y,{title:"渐变加载动画"},{default:o((()=>[m(h,{animation:"gradient",theme:"paragraph"})])),_:1}),m(y,{title:"闪烁加载动画"},{default:o((()=>[m(f,{style:{display:"flex"}},{default:o((()=>[m(h,{"row-col":[{size:"48px",type:"circle"}]}),m(h,{"custom-style":{width:"100%",marginLeft:"12px"},animation:"flashed",theme:"paragraph"})])),_:1})])),_:1}),m(y,{title:"插槽内容"},{default:o((()=>[m(f,{style:{"margin-bottom":"10px"}},{default:o((()=>[g("切换显示")])),_:1}),m(_,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=t=>d.value=t)},null,8,["modelValue"]),m(f,{style:{height:"20px"}}),m(h,{"row-col":i,loading:d.value},{default:o((()=>[m(k,null,{default:o((()=>[m(v,{"icon-size":"32px",icon:"picture",text:"文字"}),m(v,{"icon-size":"32px",icon:"picture",text:"文字"}),m(v,{"icon-size":"32px",icon:"picture",text:"文字"}),m(v,{"icon-size":"32px",icon:"picture",text:"文字"}),m(v,{"icon-size":"32px",icon:"picture",text:"文字"})])),_:1})])),_:1},8,["loading"])])),_:1})])),_:1})}}});export{O as default};