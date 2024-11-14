import{d as e,r as a,q as t,v as l,a as r,b as s,o as n,c as o,w as i,e as u,x as d,n as m,y as c,g as f,f as w,t as p,F as h,p as v,u as g,h as _,i as y}from"./index-Fj9ozFXB.js";import{_ as k,a as b}from"./wui-tabs.BdQBx6rl.js";import{_ as Y}from"./wui-tag.FnFzGO7e.js";import{f as D,z as C,i as x,m as $,l as F,N as M,O as S,g as V,w as T,U as O,r as j,P as W,B as z,a3 as I,R as q,b as A}from"./page-wraper.D4oaE4iN.js";import{w as R,i as L,g as N}from"./wui-calendar-view.Dqk8qAkQ.js";import{_ as P}from"./wui-action-sheet.CAoENr5P.js";import{_ as U}from"./wui-button.CIriDmop.js";import{d as B}from"./dayjs.I2ACVbW5.js";import{u as H}from"./useTranslate.DD004H4V.js";const G=A(e({name:"wui-calendar",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...D,modelValue:C([Number,Array,null]),type:x("date"),minDate:$(new Date((new Date).getFullYear(),(new Date).getMonth()-6,(new Date).getDate()).getTime()),maxDate:$(new Date((new Date).getFullYear(),(new Date).getMonth()+6,(new Date).getDate(),23,59,59).getTime()),firstDayOfWeek:$(0),formatter:Function,maxRange:Number,rangePrompt:String,allowSameDay:F(!1),defaultTime:{type:[String,Array]},timeFilter:Function,hideSecond:F(!1),label:String,labelWidth:String,useLabelSlot:F(!1),useDefaultSlot:F(!1),disabled:F(!1),readonly:F(!1),placeholder:String,title:String,alignRight:F(!1),error:F(!1),required:F(!1),size:String,center:F(!1),closeOnClickModal:F(!0),zIndex:$(15),showConfirm:F(!0),confirmText:String,displayFormat:Function,innerDisplayFormat:Function,ellipsis:F(!1),showTypeSwitch:F(!1),shortcuts:M(),onShortcutsClick:Function,safeAreaInsetBottom:F(!0),beforeConfirm:Function,prop:String,rules:M(),customViewClass:x(""),customLabelClass:x(""),customValueClass:x(""),immediateChange:F(!1)},emits:["cancel","change","update:modelValue","confirm","open"],setup(e,{expose:D,emit:C}){const{translate:x}=H("calendar"),$=(e,a)=>{switch(a){case"date":return B(e).format("YYYY-MM-DD");case"dates":return e.map((e=>B(e).format("YYYY-MM-DD"))).join(", ");case"daterange":return`${e[0]?B(e[0]).format("YYYY-MM-DD"):x("startTime")} ${x("to")} ${e[1]?B(e[1]).format("YYYY-MM-DD"):x("endTime")}`;case"datetime":return B(e).format("YYYY-MM-DD HH:mm:ss");case"datetimerange":return`${e[0]?B(e[0]).format(x("timeFormat")):x("startTime")} ${x("to")}\n${e[1]?B(e[1]).format(x("timeFormat")):x("endTime")}`;case"week":{const a=new Date(e).getFullYear(),t=N(e);return x("weekFormat",a,I(t))}case"weekrange":{const a=new Date(e[0]).getFullYear(),t=N(e[0]),l=new Date(e[1]).getFullYear(),r=N(e[1]);return`${e[0]?x("weekFormat",a,I(t)):x("startWeek")} - ${e[1]?x("weekFormat",l,I(r)):x("endWeek")}`}case"month":return B(e).format("YYYY / MM");case"monthrange":return`${e[0]?B(e[0]).format("YYYY / MM"):x("startMonth")} ${x("to")} ${e[1]?B(e[1]).format("YYYY / MM"):x("endMonth")}`}},F=(e,a,t)=>{switch(t){case"daterange":return e?B(e).format(x("dateFormat")):x("end"===a?"endTime":"startTime");case"datetimerange":return e?B(e).format(x("timeFormat")):x("end"===a?"endTime":"startTime");case"weekrange":{if(!e)return x("end"===a?"endWeek":"startWeek");const t=new Date(e).getFullYear(),l=N(e);return x("weekFormat",t,I(l))}case"monthrange":return e?B(e).format(x("monthFormat")):x("end"===a?"endMonth":"startMonth")}},M=e,A=C,G=a(!1),Z=a(null),E=a(null),J=a(338),K=a(!0),Q=a(0),X=a(0),ee=a("date"),ae=a(),te=a(!1),le=S(),re=a(),se=a(),ne=t((()=>{const[e,a]=O(j(Z.value)?Z.value:[]);return[e,a].map(((e,a)=>(M.innerDisplayFormat||F)(e,0===a?"start":"end",ee.value)))})),oe=t((()=>!j(M.modelValue)&&M.modelValue||j(M.modelValue)&&M.modelValue.length?(M.displayFormat||$)(M.modelValue,ae.value||ee.value):""));l((()=>M.modelValue),((e,a)=>{q(e,a)||(Z.value=O(e),K.value=pe(e))}),{immediate:!0}),l((()=>M.type),((e,a)=>{if(M.showTypeSwitch){const a=["date","week","month"],t=["daterange","weekrange","monthrange"],l=e.indexOf("range")>-1?t.indexOf(e)||0:a.indexOf(e);Q.value=l}J.value=M.showConfirm?338:400,ee.value=O(e)}),{deep:!0,immediate:!0}),l((()=>M.showConfirm),(e=>{J.value=e?338:400}),{deep:!0,immediate:!0});const{parent:ie}=V(W),ue=t((()=>ie&&M.prop&&ie.errorMessages&&ie.errorMessages[M.prop]?ie.errorMessages[M.prop]:"")),de=t((()=>{let e=!1;if(ie&&ie.props.rules){const a=ie.props.rules;for(const t in a)Object.prototype.hasOwnProperty.call(a,t)&&t===M.prop&&Array.isArray(a[t])&&(e=a[t].some((e=>e.required)))}return M.required||M.rules.some((e=>e.required))||e})),me=t((()=>e=>L(e)));function ce(){const{disabled:e,readonly:a}=M;e||a||(te.value=!0,G.value=!0,E.value=O(Z.value),X.value=Q.value,ae.value=ee.value,z((()=>{re.value&&re.value&&re.value.$.exposed.scrollIntoView()})),setTimeout((()=>{M.showTypeSwitch&&(se.value.scrollIntoView(),se.value.updateLineStyle(!1))}),250),A("open"))}function fe(){G.value=!1,setTimeout((()=>{Z.value=O(E.value),Q.value=X.value,ee.value=ae.value||"date",K.value=pe(E.value)}),250),A("cancel")}function we({index:e}){const a=M.type.indexOf("range")>-1?["daterange","weekrange","monthrange"][e]:["date","week","month"][e];Q.value=e,ee.value=a}function pe(e){let a=!1;return(!(M.type.indexOf("range")>-1)||j(e)&&e[0]&&e[1]&&e)&&("dates"!==M.type||j(e)&&0!==e.length&&e)&&e||(a=!0),a}function he({value:e}){Z.value=O(e),K.value=pe(e),A("change",{value:e}),M.showConfirm||K.value||ve()}function ve(){M.beforeConfirm?M.beforeConfirm({value:Z.value,resolve:e=>{e&&ge()}}):ge()}function ge(){G.value=!1,ae.value=ee.value,A("update:modelValue",Z.value),A("confirm",{value:Z.value})}return D({close:fe,open:ce}),(e,a)=>{const t=y,l=r(s("wui-tab"),k),D=r(s("wui-tabs"),b),C=r(s("wui-tag"),Y);return n(),o(t,{class:m(`wui-calendar ${g(le).border.value?"is-border":""} ${e.customClass}`)},{default:i((()=>[u(t,{class:"wui-calendar__field",onClick:ce},{default:i((()=>[e.useDefaultSlot?d(e.$slots,"default",{key:0},void 0,!0):(n(),o(t,{key:1,class:m(`wui-calendar__cell ${e.disabled?"is-disabled":""} ${e.readonly?"is-readonly":""} ${e.alignRight?"is-align-right":""} ${e.error?"is-error":""} ${e.size?"is-"+e.size:""} ${e.center?"is-center":""}`)},{default:i((()=>[e.label||e.useLabelSlot?(n(),o(t,{key:0,class:m(`wui-calendar__label ${de.value?"is-required":""} ${e.customLabelClass}`),style:c(e.labelWidth?"min-width:"+e.labelWidth+";max-width:"+e.labelWidth+";":"")},{default:i((()=>[e.label?(n(),f(h,{key:0},[w(p(e.label),1)],64)):d(e.$slots,"label",{key:1},void 0,!0)])),_:3},8,["class","style"])):v("",!0),u(t,{class:"wui-calendar__body"},{default:i((()=>[u(t,{class:"wui-calendar__value-wraper"},{default:i((()=>[u(t,{class:m(`wui-calendar__value ${e.ellipsis?"is-ellipsis":""} ${e.customValueClass} ${oe.value?"":"wui-calendar__value--placeholder"}`)},{default:i((()=>[w(p(oe.value||e.placeholder||g(x)("placeholder")),1)])),_:1},8,["class"]),e.disabled||e.readonly?v("",!0):(n(),o(T,{key:0,"custom-class":"wui-calendar__arrow",name:"arrow-right"}))])),_:1}),ue.value?(n(),o(t,{key:0,class:"wui-calendar__error-message"},{default:i((()=>[w(p(ue.value),1)])),_:1})):v("",!0)])),_:1})])),_:3},8,["class"]))])),_:3}),u(P,{modelValue:G.value,"onUpdate:modelValue":a[2]||(a[2]=e=>G.value=e),duration:250,"close-on-click-modal":e.closeOnClickModal,"safe-area-inset-bottom":e.safeAreaInsetBottom,"z-index":e.zIndex,onClose:fe},{default:i((()=>[u(t,{class:"wui-calendar__header"},{default:i((()=>[e.showTypeSwitch||0!==e.shortcuts.length?v("",!0):(n(),o(t,{key:0,class:"wui-calendar__title"},{default:i((()=>[w(p(e.title||g(x)("title")),1)])),_:1})),e.showTypeSwitch?(n(),o(t,{key:1,class:"wui-calendar__tabs"},{default:i((()=>[u(D,{ref_key:"calendarTabs",ref:se,modelValue:Q.value,"onUpdate:modelValue":a[0]||(a[0]=e=>Q.value=e),onChange:we},{default:i((()=>[u(l,{title:g(x)("day"),name:g(x)("day")},null,8,["title","name"]),u(l,{title:g(x)("week"),name:g(x)("week")},null,8,["title","name"]),u(l,{title:g(x)("month"),name:g(x)("month")},null,8,["title","name"])])),_:1},8,["modelValue"])])),_:1})):v("",!0),e.shortcuts.length>0?(n(),o(t,{key:2,class:"wui-calendar__shortcuts"},{default:i((()=>[(n(!0),f(h,null,_(e.shortcuts,((e,a)=>(n(),o(C,{key:a,"custom-class":"wui-calendar__tag",type:"primary",plain:"",round:"",onClick:e=>function(e){M.onShortcutsClick&&"function"==typeof M.onShortcutsClick&&(Z.value=O(M.onShortcutsClick({item:M.shortcuts[e],index:e})),K.value=pe(Z.value)),M.showConfirm||ve()}(a)},{default:i((()=>[w(p(e.text),1)])),_:2},1032,["onClick"])))),128))])),_:1})):v("",!0),u(T,{"custom-class":"wui-calendar__close",name:"add",onClick:fe})])),_:1}),te.value?(n(),o(t,{key:0,class:m(`wui-calendar__view  ${ee.value.indexOf("range")>-1?"is-range":""} ${e.showConfirm?"is-show-confirm":""}`)},{default:i((()=>[me.value(e.type)?(n(),o(t,{key:0,class:m("wui-calendar__range-label "+("monthrange"===e.type?"is-monthrange":""))},{default:i((()=>[u(t,{class:m("wui-calendar__range-label-item "+(Z.value&&g(j)(Z.value)&&Z.value[0]?"":"is-placeholder")),style:{"text-align":"right"}},{default:i((()=>[w(p(ne.value[0]),1)])),_:1},8,["class"]),u(t,{class:"wui-calendar__range-sperator"},{default:i((()=>[w("/")])),_:1}),u(t,{class:m("wui-calendar__range-label-item "+(Z.value&&g(j)(Z.value)&&Z.value[1]?"":"is-placeholder"))},{default:i((()=>[w(p(ne.value[1]),1)])),_:1},8,["class"])])),_:1},8,["class"])):v("",!0),u(R,{ref_key:"calendarView",ref:re,modelValue:Z.value,"onUpdate:modelValue":a[1]||(a[1]=e=>Z.value=e),type:ee.value,"min-date":e.minDate,"max-date":e.maxDate,"first-day-of-week":e.firstDayOfWeek,formatter:e.formatter,"panel-height":J.value,"max-range":e.maxRange,"range-prompt":e.rangePrompt,"allow-same-day":e.allowSameDay,"default-time":e.defaultTime,"time-filter":e.timeFilter,"hide-second":e.hideSecond,"show-panel-title":!me.value(e.type),"immediate-change":e.immediateChange,onChange:he},null,8,["modelValue","type","min-date","max-date","first-day-of-week","formatter","panel-height","max-range","range-prompt","allow-same-day","default-time","time-filter","hide-second","show-panel-title","immediate-change"])])),_:1},8,["class"])):v("",!0),e.showConfirm?(n(),o(t,{key:1,class:"wui-calendar__confirm"},{default:i((()=>[u(U,{block:"",disabled:K.value,onClick:ve},{default:i((()=>[w(p(e.confirmText||g(x)("confirm")),1)])),_:1},8,["disabled"])])),_:1})):v("",!0)])),_:1},8,["modelValue","close-on-click-modal","safe-area-inset-bottom","z-index"])])),_:3},8,["class"])}}}),[["__scopeId","data-v-c6648a2c"]]);export{G as _};
