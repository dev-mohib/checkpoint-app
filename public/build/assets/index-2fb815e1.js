import{a,j as t,b as o}from"./app-4885bbf9.js";import{A as i}from"./AppLayout-e25d1d8a.js";import h from"./org_table-26d90ffc.js";import{B as s}from"./breadcrumb-88575053.js";import"./icons-a6ae82bc.js";const g=({activeMenu:r,title:l,organizations:e,ziggy:n,to:m,from:d,total:f})=>(console.log({organizations:e}),!e||e.length==0?a(i,{activeMenu:r,title:l,children:[t(o,{title:"Organization"}),t(s,{list:[{title:"Home",href:"/dashboard"},{title:"Organizations",href:null}]}),t("div",{className:"flex-c-c",style:{height:"70vh"},children:t("h1",{className:"text-3xl font-extrabold text-center",children:"No Organizations"})})]}):a(i,{activeMenu:r,title:l,children:[t(o,{title:"Organization"}),t(s,{list:[{title:"Home",href:"/dashboard"},{title:"Organizations",href:null}]}),t(h,{organizations:e,query:n.query})]}));export{g as default};