import{d as x,e as y,B as w,g as c,h as v,i as l,j as d,c as e,k as r,b as t,m as C,a6 as k,l as s,a7 as m}from"./index-7765e4e9.js";const E={class:"scroll-y"},q=s("div",{class:"mt-20px mb-5px font-bold"},"throw unhandledrejection",-1),B=s("div",{class:"mt-20px mb-5px font-bold"},"throw console.error",-1),j=s("div",{class:"mt-20px mb-5px font-bold"},"throw normalError",-1),L=s("div",{class:"mt-20px mb-5px font-bold"},"throw req cross origin",-1),N=s("div",{class:"mt-20px mb-5px font-bold"},"throw req 404 error",-1),V=s("div",{class:"mt-20px mb-5px font-bold"},"throw image load error",-1),O={key:0,src:"http://img.png"},P=x({}),z=Object.assign(P,{__name:"error-generator",setup(S){const p=y();w(()=>p.settings||{});const _=()=>{new Promise((a,i)=>{i("reject promise")}).then(a=>{console.log("ok")})};c(null);const u=()=>{console.error("console.error")},h=()=>{throw new Error(` throw new Error("")
`)},f=()=>{m({baseURL:"https://github.jzfai.top/micro-service-test",url:"/integration-front/brand/updateBy",data:{id:"fai"},method:"put",isParams:!0,bfLoading:!0}).then(()=>{})},b=()=>{m({url:"/integration-front/brand/updateBy1",data:{id:"fai"},method:"put",isParams:!0,bfLoading:!0}).then(a=>{})},n=c(!1),g=()=>{n.value=!n.value};return(a,i)=>{const o=v("el-button");return l(),d("div",E,[q,e(o,{type:"primary",onClick:_},{default:r(()=>[t("unhandledrejection")]),_:1}),B,e(o,{type:"primary",onClick:u},{default:r(()=>[t("console.error")]),_:1}),j,e(o,{type:"primary",onClick:h},{default:r(()=>[t("normalError")]),_:1}),L,e(o,{type:"primary",onClick:f},{default:r(()=>[t("reqCrossOrigin")]),_:1}),N,e(o,{type:"primary",onClick:b},{default:r(()=>[t("req404")]),_:1}),V,e(o,{type:"primary",onClick:g},{default:r(()=>[t("imageLoadError")]),_:1}),C(n)?(l(),d("img",O)):k("",!0)])}}});export{z as default};
