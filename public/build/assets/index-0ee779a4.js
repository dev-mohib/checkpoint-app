import{j as e,q as x,r as N,W as h,a as t,F as d,b as i,d as s}from"./app-81b7f5e0.js";import{A as f,B as g}from"./AppLayout-19679ced.js";import{N as c}from"./icons-82df6a6d.js";import{M as p,A as y}from"./attachEntityModal-a9035b1e.js";const w={q:"",searchBy:"name",collection:"organization"},o=()=>{const{instructor:r,isEmpty:l}=x().props,a=JSON.parse(localStorage.getItem("rememberInstructorAttach")??JSON.stringify(w));N.useState(a);const{get:n,delete:m}=h(),u=()=>{m("/instructor/"+r.id,{onSuccess:()=>{console.log("organization deleted")},onError:b=>console.log("Found an error ",b)})};return l?t(d,{children:[e(i,{title:"Instructors"}),e("div",{className:"min-h-screen flex-c-c text-3xl font-extrabold",children:"Instructor not found"})]}):t(d,{children:[e(i,{title:r.users.name}),t(p,{id:"deleteInstrucrorModal",title:"Delete Organization",children:[e("h1",{children:"Do you really want to delete this Instructors?"}),t("div",{className:"w-full flex justify-end",children:[e("div",{onClick:u,className:"btn btn-error m-2",children:"YES!"}),e("button",{className:"btn btn-ghost my-2",children:"CANCEL"})]})]}),e(y,{id:r.id,routeName:"instructor"}),t("div",{className:"w-full flex justify-between",children:[e(g,{list:[{title:"Home",href:"/dashboard"},{title:"Instructor",href:"/instructor"},{title:r.users.name,href:null}]}),e(v,{id:r.id})]}),e("div",{className:"flex-c-c mt-16",children:t("table",{className:"table table-sm  bg-base-100 shadow-md",children:[e("thead",{children:t("tr",{className:"bg-primary",children:[e("td",{className:"font-extrabold text-lg text-base-100 ",children:"Details"}),e("td",{})]})}),t("tbody",{children:[t("tr",{className:"",children:[e("td",{children:"Name"}),e("td",{children:r.users.name})]}),t("tr",{children:[e("td",{children:"Username"}),e("td",{children:r.users.username})]}),t("tr",{children:[e("td",{children:"Email"}),e("td",{children:r.users.email})]}),t("tr",{children:[e("td",{children:"Address"}),e("td",{children:r.users.address})]}),t("tr",{children:[e("td",{children:"Contact"}),e("td",{children:r.users.contact_number})]}),t("tr",{children:[e("td",{children:"Qualification"}),e("td",{children:r.qualification})]})]})]})}),r.students&&e(A,{students:r.students}),r.organization&&e(I,{organizations:r.organization}),r.checkpoints&&e(C,{checkpoints:r.checkpoints})]})},v=({id:r})=>{const l=n=>{a(route("instructor.show",{id:r,collection:n,searchBy:"name",q:""}))},{get:a}=h();return t("details",{className:"dropdown z-30",children:[e("summary",{className:"m-1 btn pr-28 btn-primary",children:"Actions"}),t("ul",{className:"p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52",children:[e("li",{children:e("a",{onClick:()=>l("organization"),children:"Attach Organization"})}),e("li",{children:e("a",{onClick:()=>l("student"),children:"Attach Student"})}),e("li",{children:e("a",{onClick:()=>l("checkpoint"),children:"Attach Checkpoint"})}),e("li",{children:e(s,{href:route("instructor.showEdit",{id:r}),children:"Edit Instructor"})}),e("li",{onClick:n=>{document.getElementById("deleteInstrucrorModal").showModal()},children:e("a",{className:"text-red-600 hover:text-red-600",children:"Delete Instructor"})})]})]})},I=({organizations:r})=>t(d,{children:[e("h1",{className:"py-4 text-secondary font-extrabold",children:"Organizations"}),r.length>0?t("table",{className:"table bg-base-100 shadow-md",children:[e("thead",{children:t("tr",{className:"text-base-100 bg-primary",children:[e("td",{className:"font-extrabold text-lg ",children:"Name"}),e("td",{className:"font-extrabold text-lg ",children:"Email"}),e("td",{className:"font-extrabold text-lg ",children:"Address"}),e("td",{className:"font-extrabold text-lg "})]})}),e("tbody",{children:r.map((l,a)=>t("tr",{className:"hover",children:[e("td",{children:t("div",{className:"flex items-center space-x-3 ml-3 my-3",children:[e("div",{className:"avatar",children:e("div",{className:"mask mask-squircle w-10 h-10",children:e("img",{src:l.logo,alt:"Avatar"})})}),e("div",{children:e("div",{className:"font-bold",children:l.name})})]})}),e("td",{children:l.users.email}),e("td",{children:l.users.address}),e("td",{children:e(s,{href:route("organization.show",{id:l.id}),children:e(c,{className:"w-6 h-6 hover:opacity-50"})})})]},l.id))})]}):t("div",{className:"w-full border-2 shadow-md",children:[e("div",{className:"bg-primary h-16 w-full"}),e("div",{className:"w-full flex-c-c h-32 font-bold text-2xl",children:"No Organizations"})]})]}),A=({students:r})=>t(d,{children:[e("h1",{className:"py-4 text-secondary font-extrabold",children:"Students"}),r.length>0?t("table",{className:"table bg-base-100 shadow-md",children:[e("thead",{children:t("tr",{className:"text-base-100 bg-primary",children:[e("td",{className:"font-extrabold text-lg",children:"Name"}),e("td",{className:"font-extrabold text-lg",children:"Email"}),e("td",{className:"font-extrabold text-lg",children:"Address"}),e("td",{className:"font-extrabold text-lg"})]})}),e("tbody",{children:r.map((l,a)=>t("tr",{className:"hover",children:[e("td",{children:l.users.name}),e("td",{children:l.users.email}),e("td",{children:l.users.address}),e("td",{children:e(s,{href:route("student.index"),children:e(c,{className:"w-6 h-6 hover:opacity-50"})})})]},l.id))})]}):t("div",{className:"w-full border-2 shadow-md",children:[e("div",{className:"bg-primary h-16 w-full"}),e("div",{className:"w-full flex-c-c h-32 font-bold text-2xl",children:"No Students"})]})]}),C=({checkpoints:r})=>t(d,{children:[e("h1",{className:"py-4 text-secondary font-extrabold",children:"Checkpoints"}),r.length>0?t("table",{className:"table bg-base-100 shadow-md",children:[e("thead",{children:t("tr",{className:"text-base-100 bg-primary",children:[e("td",{className:"font-extrabold text-lg ",children:"Name"}),e("td",{className:"font-extrabold text-lg ",children:"Validity"}),e("td",{className:"font-extrabold text-lg ",children:"Grades"}),e("td",{className:"font-extrabold text-lg "})]})}),e("tbody",{children:r.map((l,a)=>t("tr",{className:"hover",children:[e("td",{children:l.name}),e("td",{children:l.validity_period}),t("td",{children:[l.achieved_gradepoints,"/",l.total_gradepoints]}),e("td",{children:e(s,{href:route("checkpoint.index"),children:e(c,{className:"w-6 h-6 hover:opacity-50"})})})]},l.id))})]}):t("div",{className:"w-full border-2 shadow-md",children:[e("div",{className:"bg-primary h-16 w-full"}),e("div",{className:"w-full flex-c-c h-32 font-bold text-2xl",children:"No Checkpoints"})]})]}),O=()=>e(f,{AdminComponent:e(o,{}),OrganizationComponent:e(o,{})});export{O as default};