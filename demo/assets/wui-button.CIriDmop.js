import{d as e,r as a,q as s,v as o,o as t,c as n,w as i,e as r,y as l,p as d,x as c,n as p,i as g,Z as u}from"./index-Fj9ozFXB.js";import{f as m,l as f,i as h,w as v,A as b,b as y}from"./page-wraper.D4oaE4iN.js";const w=y(e({name:"wui-button",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...m,plain:f(!1),round:f(!0),disabled:f(!1),hairline:f(!1),block:f(!1),type:h("primary"),size:h("medium"),icon:String,classPrefix:h("wui-icon"),loading:f(!1),loadingColor:String,openType:String,hoverStopPropagation:Boolean,lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,appParameter:String,showMessageCard:Boolean,buttonId:String,scope:String},emits:["click","getuserinfo","contact","getphonenumber","error","launchapp","opensetting","chooseavatar","agreeprivacyauthorization"],setup(e,{emit:m}){const f=e,h=m,y=a(20),w=a(70),k=a(""),S=s((()=>`background-image: url(${k.value});`));function _(e){f.disabled||f.loading||h("click",e)}function x(e){"phoneNumber"===f.scope?P(e):"userInfo"===f.scope&&C(e)}function C(e){h("getuserinfo",e.detail)}function M(e){h("contact",e.detail)}function P(e){h("getphonenumber",e.detail)}function z(e){h("error",e.detail)}function I(e){h("launchapp",e.detail)}function G(e){h("opensetting",e.detail)}function $(e){h("chooseavatar",e.detail)}function F(e){h("agreeprivacyauthorization",e.detail)}return o((()=>f.loading),(()=>{!function(){const{loadingColor:e,type:a,plain:s}=f;let o=e;if(!o)switch(a){case"primary":o="#4D80F0";break;case"success":o="#34d19d";break;case"info":case"default":o="#333";break;case"warning":o="#f0883a";break;case"error":o="#fa4350"}const t=((e="#4D80F0",a=!0)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="a"><stop stop-color="${a?e:"#fff"}" offset="0%" stop-opacity="0"/><stop stop-color="${a?e:"#fff"}" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${a?"#fff":e}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#a)" stroke-width="3.5" stroke-linecap="round"/></g></svg>`)(o,!s);k.value=`"data:image/svg+xml;base64,${b(t)}"`}()}),{deep:!0,immediate:!0}),(e,a)=>{const s=g,o=u;return t(),n(o,{id:e.buttonId,"hover-class":""+(e.disabled||e.loading?"":"wui-button--active"),style:l(e.customStyle),class:p(["wui-button","is-"+e.type,"is-"+e.size,e.round?"is-round":"",e.hairline?"is-hairline":"",e.plain?"is-plain":"",e.disabled?"is-disabled":"",e.block?"is-block":"",e.loading?"is-loading":"",e.customClass]),"hover-start-time":y.value,"hover-stay-time":w.value,"open-type":e.disabled||e.loading?void 0:e.openType,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"app-parameter":e.appParameter,"show-message-card":e.showMessageCard,"session-from":e.sessionFrom,lang:e.lang,"hover-stop-propagation":e.hoverStopPropagation,scope:e.scope,onClick:_,onGetAuthorize:x,onGetuserinfo:C,onContact:M,onGetphonenumber:P,onError:z,onLaunchapp:I,onOpensetting:G,onChooseavatar:$,onAgreeprivacyauthorization:F},{default:i((()=>[e.loading?(t(),n(s,{key:0,class:"wui-button__loading"},{default:i((()=>[r(s,{class:"wui-button__loading-svg",style:l(S.value)},null,8,["style"])])),_:1})):e.icon?(t(),n(v,{key:1,"custom-class":"wui-button__icon",name:e.icon,classPrefix:e.classPrefix},null,8,["name","classPrefix"])):d("",!0),r(s,{class:"wui-button__text"},{default:i((()=>[c(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["id","hover-class","style","class","hover-start-time","hover-stay-time","open-type","send-message-title","send-message-path","send-message-img","app-parameter","show-message-card","session-from","lang","hover-stop-propagation","scope"])}}}),[["__scopeId","data-v-0a495909"]]);export{w as _};
