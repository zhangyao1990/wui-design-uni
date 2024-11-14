import{d as e,r as a,v as l,o as n,c as t,w as u,e as s,p as o,y as i,g as r,h as c,F as d,n as m,a9 as v,i as h,ab as g,f as p,t as f,L as y,ac as w}from"./index-Fj9ozFXB.js";import{f as b,l as k,i as _,m as x,N as C,r as K,T as $,s as I,p as S,U as V,V as E,R as P,t as O,b as D}from"./page-wraper.D4oaE4iN.js";function H(e,a,l){let n=K(e)?e:[e];const t=new Set(e.map($));if(1!==t.size&&t.has("object"))throw Error("The columns are correct");K(e[0])||(n=[n]);return n.map((e=>e.map((e=>{if(!I(e))return{[a]:e,[l]:e};if(!e.hasOwnProperty(a)&&!e.hasOwnProperty(l))throw Error("Can't find valueKey and labelKey in columns");return e.hasOwnProperty(l)||(e[l]=e[a]),e.hasOwnProperty(a)||(e[a]=e[l]),e}))))}const T=D(e({name:"wui-picker-view",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...b,loading:k(!1),loadingColor:_("#4D80F0"),columnsHeight:x(217),valueKey:_("value"),labelKey:_("label"),immediateChange:k(!1),modelValue:{type:[String,Number,Boolean,Array,Array,Array],default:"",required:!0},columns:C(),columnChange:Function},emits:["change","pickstart","pickend","update:modelValue"],setup(e,{expose:b,emit:k}){const _=e,x=k,C=a([]),I=a(35),D=a([]);l([()=>_.modelValue,()=>_.columns],((e,a)=>{!P(a[1],e[1])&&K(e[1])&&e[1].length>0&&(C.value=H(e[1],_.valueKey,_.labelKey)),O(e[0])&&function(e){if(0===C.value.length)return;(""===e||!O(e)||K(e)&&0===e.length)&&(e=C.value.map((e=>e[0][_.valueKey])));const a=$(e),l=["string","number","boolean","array"];-1===l.indexOf(a)&&console.error(`value must be one of ${l.toString()}`);e=(e=K(e)?e:[e]).slice(0,C.value.length);let n=V(D.value);e.forEach(((e,a)=>{let l=C.value[a].findIndex((a=>a[_.valueKey].toString()===e.toString()));l=-1===l?0:l,n=j(a,l,n)})),D.value=n.slice(0,e.length)}(e[0])}),{deep:!0,immediate:!0});const{proxy:T}=y();function j(e,a,l){const n=C.value[e];if(!n||!n[a])throw Error(`The value to select with Col:${e} Row:${a} is incorrect`);const t=V(l);if(t[e]=a,n[a].disabled){const l=n.slice(0,a).reverse().findIndex((e=>!e.disabled)),u=n.slice(a+1).findIndex((e=>!e.disabled));-1!==l?t[e]=a-1-l:-1!==u?t[e]=a+1+u:void 0===t[e]&&(t[e]=0)}return t}function A({detail:{value:e}}){const a=function(e){e=e.slice(0,C.value.length);const a=V(D.value);let l=V(D.value);e.forEach(((e,n)=>{(e=E(e,0,C.value[n].length-1))!==a[n]&&(l=j(n,e,l))}));const n=function(e,a){if(!e||!a)return-1;const l=e.findIndex(((e,l)=>e!==a[l]));return l}(l,a);if(-1===n)return;const t=l[n];return 1===l.length?t:n}(e=e.map((e=>Number(e||0))));D.value=V(e),v((()=>{D.value=function(e){let a=V(e);return e.forEach(((e,l)=>{e=E(e,0,C.value[l].length-1),a=j(l,e,a)})),a}(e),_.columnChange?_.columnChange.length<4?(_.columnChange(T.$.exposed,N(),a||0,(()=>{})),F(a||0)):_.columnChange(T.$.exposed,N(),a||0,(()=>{F(a||0)})):F(a||0)}))}function F(e){const a=L();P(a,_.modelValue)||(x("update:modelValue",a),setTimeout((()=>{x("change",{picker:T.$.exposed,value:a,index:e})}),0))}function N(){const e=D.value.map(((e,a)=>C.value[a][e]));return 1===e.length?e[0]:e}function L(){const{valueKey:e}=_,a=D.value.map(((a,l)=>C.value[l][a][e]));return 1===a.length?a[0]:a}function R(){x("pickstart")}function q(){x("pickend")}return b({getSelects:N,getValues:L,setColumnData:function(e,a,l=0){C.value[e]=H(a,_.valueKey,_.labelKey).reduce(((e,a)=>e.concat(a)),[]),D.value=j(e,l,D.value)},getColumnsData:function(){return V(C.value)},getColumnData:function(e){return C.value[e]},getColumnIndex:function(e){return D.value[e]},getLabels:function(){const{labelKey:e}=_;return D.value.map(((a,l)=>C.value[l][a][e]))},getSelectedIndex:function(){return D.value},resetColumns:function(e){K(e)&&e.length&&(C.value=H(e,_.valueKey,_.labelKey))}}),(e,a)=>{const l=h,v=w,y=g;return n(),t(l,{class:m(`wui-picker-view ${e.customClass}`),style:i(e.customStyle)},{default:u((()=>[e.loading?(n(),t(l,{key:0,class:"wui-picker-view__loading"},{default:u((()=>[s(S,{color:e.loadingColor},null,8,["color"])])),_:1})):o("",!0),s(l,{style:i(`height: ${e.columnsHeight-20}px;`)},{default:u((()=>[s(y,{"mask-class":"wui-picker-view__mask","indicator-class":"wui-picker-view__roller","indicator-style":`height: ${I.value}px;`,style:i(`height: ${e.columnsHeight-20}px;`),value:D.value,"immediate-change":e.immediateChange,onChange:A,onPickstart:R,onPickend:q},{default:u((()=>[(n(!0),r(d,null,c(C.value,((a,s)=>(n(),t(v,{key:s,class:"wui-picker-view-column"},{default:u((()=>[(n(!0),r(d,null,c(a,((a,o)=>(n(),t(l,{key:o,class:m(`wui-picker-view-column__item ${a.disabled?"wui-picker-view-column__item--disabled":""}  ${D.value[s]==o?"wui-picker-view-column__item--active":""}`),style:i(`line-height: ${I.value}px;`)},{default:u((()=>[p(f(a[e.labelKey]),1)])),_:2},1032,["class","style"])))),128))])),_:2},1024)))),128))])),_:1},8,["indicator-style","style","value","immediate-change"])])),_:1},8,["style"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-4edd9903"]]);export{H as f,T as w};