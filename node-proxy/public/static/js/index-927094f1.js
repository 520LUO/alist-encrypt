import{d as g,g as x,e as F,F as $,r as B,h as p,G as P,i,j as m,H as f,b as n,c as t,k as o,m as a,I as U}from"./index-7765e4e9.js";const D={class:"scroll-y"},I={class:"mt-10px mb-10px font-bold"},L={class:"mt-10px mb-10px font-bold"},N={class:"mt-30px font-bold mb-10px"},T=g({}),R=g({...T,__name:"index",setup(j){const h=x("right"),v=F(),{settings:q,userInfo:k}=v,{setTheme:c,theme:E,setSize:V,size:G,setLanguage:y}=$();V("default");const w=b=>{y(b)},s=B({username:"",password:"",newpassword:""}),C=x();s.username=k.username;const S=()=>{U(s)};return(b,e)=>{const r=p("el-button"),u=p("el-input"),d=p("el-form-item"),z=p("el-form"),_=P("lang");return i(),m("div",D,[f((i(),m("div",I,[n("主题切换")])),[[_]]),t(r,{onClick:e[0]||(e[0]=l=>a(c)("lighting-theme"))},{default:o(()=>[n("lighting-theme")]),_:1}),t(r,{onClick:e[1]||(e[1]=l=>a(c)("dark"))},{default:o(()=>[n("dark-theme")]),_:1}),f((i(),m("div",L,[n("switch language")])),[[_]]),t(r,{onClick:e[2]||(e[2]=l=>w("en"))},{default:o(()=>[n("en")]),_:1}),t(r,{onClick:e[3]||(e[3]=l=>w("zh"))},{default:o(()=>[n("zh")]),_:1}),f((i(),m("div",N,[n("账号设置")])),[[_]]),t(z,{ref_key:"refSearchForm",ref:C,"label-position":h.value,"label-width":"60px",model:a(s)},{default:o(()=>[t(d,{prop:"username",label:"用户名"},{default:o(()=>[t(u,{modelValue:a(s).username,"onUpdate:modelValue":e[4]||(e[4]=l=>a(s).username=l),disabled:"true",style:{"max-width":"260px"},placeholder:"username"},null,8,["modelValue"])]),_:1}),t(d,{prop:"password",label:"原密码"},{default:o(()=>[t(u,{modelValue:a(s).password,"onUpdate:modelValue":e[5]||(e[5]=l=>a(s).password=l),style:{"max-width":"260px"},type:"password",placeholder:"password"},null,8,["modelValue"])]),_:1}),t(d,{prop:"newpassword",label:"新密码"},{default:o(()=>[t(u,{modelValue:a(s).newpassword,"onUpdate:modelValue":e[6]||(e[6]=l=>a(s).newpassword=l),style:{"max-width":"260px"},type:"password",placeholder:"password"},null,8,["modelValue"])]),_:1}),t(d,null,{default:o(()=>[t(r,{type:"primary",onClick:S},{default:o(()=>[n("修改")]),_:1})]),_:1})]),_:1},8,["label-position","model"])])}}});export{R as default};
