import{a as o,j as t,b as a}from"./app-fffb7e5e.js";import{A as i}from"./AppLayout-675d5b01.js";import m from"./instructor_table-3b2f59f6.js";import{B as n}from"./breadcrumb-5f973b85.js";import"./icons-e45bfe1f.js";const p=({activeMenu:e,title:s,ziggy:h,auth:l,instructors:r})=>!r||r.length==0?o(i,{activeMenu:e,title:s,auth:l,children:[t(a,{title:"Instructors"}),t(n,{list:[{title:"Home",href:"/dashboard"},{title:"Instructors",href:null}]}),t("div",{className:"flex-c-c",style:{height:"70vh"},children:t("h1",{className:"text-3xl font-extrabold text-center",children:"No instructors"})})]}):o(i,{activeMenu:e,title:s,auth:l,children:[t(a,{title:"Instructors"}),t(n,{list:[{title:"Home",href:"/dashboard"},{title:"Instructors",href:null}]}),t(m,{instructors:r,query:h.query})]});export{p as default};