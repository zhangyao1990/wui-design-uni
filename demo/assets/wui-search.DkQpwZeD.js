import{d as e,r as a,v as l,m as s,q as u,o as c,c as t,w as o,e as n,x as r,y as i,f as d,t as h,u as v,p as f,n as m,j as p,i as _,_ as w}from"./index-Fj9ozFXB.js";import{f as x,i as y,l as b,m as g,B as C,w as k,o as V,b as S}from"./page-wraper.D4oaE4iN.js";import{u as $}from"./useTranslate.DD004H4V.js";const j=S(e({name:"wui-search",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...x,modelValue:y(""),useSuffixSlot:b(!1),placeholder:String,cancelTxt:String,light:b(!1),hideCancel:b(!1),disabled:b(!1),maxlength:g(-1),placeholderLeft:b(!1),focus:b(!1),focusWhenClear:b(!1)},emits:["update:modelValue","change","clear","search","focus","blur","cancel"],setup(e,{emit:x}){const y=e,b=x,{translate:g}=$("search"),S=a(!1),j=a(!1),L=a(""),I=a(!0),T=a(!1);l((()=>y.modelValue),(e=>{L.value=e,e&&(j.value=!0)}),{immediate:!0}),l((()=>y.focus),(e=>{if(e){if(y.disabled)return;F()}})),s((()=>{y.focus&&F()}));const W=u((()=>`wui-search  ${y.light?"is-light":""}  ${y.hideCancel?"is-without-cancel":""} ${y.customClass}`)),B=u((()=>{const e={display:""===L.value&&I.value?"flex":"none"};return V(e)}));function q(e){j.value=e,C((()=>{S.value=e}))}function F(){y.disabled||C().then((()=>C())).then((()=>C())).then((()=>{I.value=!1,q(!0)}))}function G(e){L.value=e.detail.value,b("update:modelValue",e.detail.value),b("change",{value:e.detail.value})}function H(){L.value="",T.value=!0,y.focusWhenClear&&(S.value=!1),C().then((()=>C())).then((()=>C())).then((()=>{y.focusWhenClear?(I.value=!1,q(!0)):(I.value=!0,q(!1)),b("change",{value:""}),b("update:modelValue",""),b("clear")}))}function U({detail:{value:e}}){b("search",{value:e})}function z(){T.value?T.value=!1:(I.value=!1,b("focus",{value:L.value}))}function A(){T.value||(I.value=!L.value,j.value=!I.value,S.value=!1,b("blur",{value:L.value}))}function D(){b("cancel",{value:L.value})}return(e,a)=>{const l=p,s=_,u=w;return c(),t(s,{class:m(W.value),style:i(e.customStyle)},{default:o((()=>[n(s,{class:"wui-search__block"},{default:o((()=>[r(e.$slots,"prefix",{},void 0,!0),n(s,{class:"wui-search__field"},{default:o((()=>[e.placeholderLeft?f("",!0):(c(),t(s,{key:0,style:i(B.value),class:"wui-search__cover",onClick:F},{default:o((()=>[n(k,{name:"search","custom-class":"wui-search__search-icon"}),n(l,{class:"wui-search__placeholder-txt"},{default:o((()=>[d(h(e.placeholder||v(g)("search")),1)])),_:1})])),_:1},8,["style"])),j.value||L.value||e.placeholderLeft?(c(),t(k,{key:1,name:"search","custom-class":"wui-search__search-left-icon"})):f("",!0),j.value||L.value||e.placeholderLeft?(c(),t(u,{key:2,placeholder:e.placeholder||v(g)("search"),"placeholder-class":"wui-search__placeholder-txt","confirm-type":"search",modelValue:L.value,"onUpdate:modelValue":a[0]||(a[0]=e=>L.value=e),class:"wui-search__input",onFocus:z,onInput:G,onBlur:A,onConfirm:U,disabled:e.disabled,maxlength:e.maxlength,focus:S.value},null,8,["placeholder","modelValue","disabled","maxlength","focus"])):f("",!0),L.value?(c(),t(k,{key:3,"custom-class":"wui-search__clear wui-search__clear-icon",name:"error-fill",onClick:H})):f("",!0)])),_:1})])),_:3}),e.hideCancel?f("",!0):r(e.$slots,"suffix",{key:0},(()=>[n(s,{class:"wui-search__cancel",onClick:D},{default:o((()=>[d(h(e.cancelTxt||v(g)("cancel")),1)])),_:1})]),!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-fb767b5c"]]);export{j as _};