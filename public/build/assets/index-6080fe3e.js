import{j as t,q as s,W as h,a as r,F as o,b as l,d as f}from"./app-eece0f73.js";import{A as p,B as b}from"./AppLayout-75200e08.js";import{M as g,A as y}from"./EmptyTableBox-80e53bd7.js";import{S as N}from"./StudentsTableView-177c6227.js";import{O as x}from"./OrganizationTableView-d69c6ecd.js";import{C as w}from"./CheckpointTableView-1fe31e50.js";import"./icons-32cd2e22.js";const d=()=>{const{instructor:e,isEmpty:i,auth:n}=s().props,{get:a,delete:c}=h(),m=()=>{c("/instructor/"+e.id,{onSuccess:()=>{console.log("organization deleted")},onError:u=>console.log("Found an error ",u)})};return i?r(o,{children:[t(l,{title:"Instructors"}),t("div",{className:"min-h-screen flex-c-c text-3xl font-extrabold",children:"Instructor not found"})]}):r(o,{children:[t(l,{title:e.users.name}),r(g,{id:"deleteInstrucrorModal",title:"Delete Organization",children:[t("h1",{children:"Do you really want to delete this Instructors?"}),r("div",{className:"w-full flex justify-end",children:[t("div",{onClick:m,className:"btn btn-error m-2",children:"YES!"}),t("button",{className:"btn btn-ghost my-2",children:"CANCEL"})]})]}),t(y,{id:e.id,routeName:"instructor"}),r("div",{className:"w-full flex justify-between",children:[t(b,{list:[{title:"Home",href:"/dashboard"},{title:"Instructor",href:"/instructor"},{title:e.users.name,href:null}]}),t(I,{id:e.id})]}),t("div",{className:"flex-c-c mt-16",children:r("table",{className:"table table-sm  bg-base-100 shadow-md",children:[t("thead",{children:r("tr",{className:"bg-primary",children:[t("td",{className:"font-extrabold text-lg text-base-100 ",children:"Details"}),t("td",{})]})}),r("tbody",{children:[r("tr",{children:[t("td",{children:"Name"}),t("td",{children:e.users.name})]}),r("tr",{children:[t("td",{children:"Gender"}),t("td",{children:e.users.gender??"Not Spcified"})]}),r("tr",{children:[t("td",{children:"Username"}),t("td",{children:e.users.username})]}),r("tr",{children:[t("td",{children:"Email"}),t("td",{children:e.users.email})]}),r("tr",{children:[t("td",{children:"Address"}),t("td",{children:e.users.address})]}),r("tr",{children:[t("td",{children:"Contact"}),t("td",{children:e.users.contact_number})]}),r("tr",{children:[t("td",{children:"Qualification"}),t("td",{children:e.qualification})]}),r("tr",{children:[t("td",{children:"Access Validity Start"}),t("td",{children:e.access_validity_start})]}),r("tr",{children:[t("td",{children:"Access Validity End"}),t("td",{children:e.access_validity_end})]})]})]})}),r("div",{children:[t("h1",{className:"py-4 text-secondary font-extrabold",children:"Photo Identification"}),r("div",{className:"flex-r-b w-1/2",children:[r("div",{children:[t("img",{className:"h-36",src:`/storage/instructor-photo-front/${e.photo_id_front}`,alt:"Instructor Photo ID Front"}),t("h1",{className:"w-full text-center my-3",children:"Front"})]}),r("div",{children:[t("img",{className:"h-36",src:`/storage/instructor-photo-back/${e.photo_id_back}`,alt:"Instructor Photo ID Front"}),t("h1",{className:"w-full text-center my-3",children:"Back"})]})]})]}),t(N,{students:e.students,canDetach:n.role=="admin"||n.role=="organization",collection:{name:"instructor",id:e.id}}),t(x,{organizations:e.organizations,canDetach:n.role=="admin"||n.role=="organization",collection:{name:"instructor",id:e.id}}),t(w,{checkpoints:e.checkpoints,canDetach:n.role=="admin"||n.role=="organization",collection:{name:"instructor",id:e.id}})]})},I=({id:e})=>{const{role:i}=s().props.auth,n=c=>{a(route("instructor.show",{id:e,collection:c,searchBy:"name",q:""}))},{get:a}=h();return r("details",{className:"dropdown z-30",children:[t("summary",{className:"m-1 btn pr-28 btn-primary",children:"Actions"}),r("ul",{className:"p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52",children:[i=="admin"&&t("li",{children:t("a",{onClick:()=>n("organization"),children:"Attach Organization"})}),(i=="admin"||i=="organization")&&t("li",{children:t("a",{onClick:()=>n("student"),children:"Attach Student"})}),(i=="admin"||i=="organization")&&t("li",{children:t("a",{onClick:()=>n("checkpoint"),children:"Attach Checkpoint"})}),t("li",{children:t(f,{href:route("instructor.showEdit",{id:e}),children:"Edit Instructor"})}),t("li",{onClick:c=>{document.getElementById("deleteInstrucrorModal").showModal()},children:t("a",{className:"text-red-600 hover:text-red-600",children:"Delete Instructor"})})]})]})},_=()=>t(p,{AdminComponent:t(d,{}),OrganizationComponent:t(d,{})});export{_ as default};
