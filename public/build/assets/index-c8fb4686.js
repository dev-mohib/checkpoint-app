import{j as e,q as m,W as c,a,b,d as n,F as i}from"./app-81b7f5e0.js";import{A as g,B as x}from"./AppLayout-19679ced.js";import{N as s}from"./icons-82df6a6d.js";import{M as u,A as N}from"./attachEntityModal-a9035b1e.js";const f=()=>{const{isFound:r,organization:t,logoUrl:d}=m().props;console.log({logoUrl:d});const{delete:l}=c(),o=()=>{l("/organization/"+t.id,{onSuccess:()=>{console.log("organization deleted")},onError:h=>console.log("Found an error ",h)})};return r?a("div",{children:[a(u,{id:"deleteOrgModal",title:"Delete Organization",children:[e("h1",{children:"Do you really want to delete this organization?"}),a("div",{className:"w-full flex justify-end",children:[e("div",{onClick:o,className:"btn btn-error m-2",children:"YES!"}),e("button",{className:"btn btn-ghost my-2",children:"CANCEL"})]})]}),e(N,{id:t.id,routeName:"organization"}),a("div",{className:"w-full flex justify-between",children:[e(x,{list:[{title:"Home",href:"/dashboard"},{title:"Organizations",href:"/organization"},{title:t.name,href:null}]}),e(p,{id:t.id})]}),a("div",{className:"flex-c-c",children:[e("div",{className:"avatar",children:e("div",{className:"w-24 rounded-full",children:e("img",{src:d??"/organization.png"})})}),e("h1",{className:"py-2 text-secondary font-extrabold",children:t.name}),a("table",{className:"table table-sm  bg-base-100 shadow-md",children:[e("thead",{children:a("tr",{className:"bg-primary",children:[e("td",{className:"font-extrabold text-lg text-base-100 ",children:"Details"}),e("td",{})]})}),a("tbody",{children:[a("tr",{className:"",children:[e("td",{children:"Name"}),e("td",{children:t.name})]}),a("tr",{children:[e("td",{children:"Username"}),e("td",{children:t.users.username})]}),a("tr",{children:[e("td",{children:"Email"}),e("td",{children:t.users.email})]}),a("tr",{children:[e("td",{children:"Address"}),e("td",{children:t.users.address})]}),a("tr",{children:[e("td",{children:"Contact"}),e("td",{children:t.users.contact_number})]})]})]})]}),t.instructors&&e(y,{instructors:t.instructors}),t.students&&e(w,{students:t.students}),t.checkpoints&&e(v,{checkpoints:t.checkpoints})]}):a("div",{children:[e(b,{title:"Organization"}),e("div",{className:"min-h-screen flex-c-c text-3xl font-extrabold",children:"Organization not found"})]})},p=({id:r})=>{const t=l=>{d(route("organization.show",{id:r,collection:l,searchBy:"name",q:""}))},{get:d}=c();return a("details",{className:"dropdown z-30",children:[e("summary",{className:"m-1 btn pr-28 btn-primary",children:"Actions"}),a("ul",{className:"p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52",children:[e("li",{children:e("a",{onClick:()=>t("instructor"),children:"Attach Instructor"})}),e("li",{children:e("a",{onClick:()=>t("student"),children:"Attach Student"})}),e("li",{children:e("a",{onClick:()=>t("checkpoint"),children:"Attach Checkpoint"})}),e("li",{children:e(n,{href:route("organization.showEdit",{id:r}),children:"Edit Organization"})}),e("li",{onClick:l=>{document.getElementById("deleteOrgModal").showModal()},children:e("a",{className:"text-red-600 hover:text-red-600",children:"Delete Organization"})})]})]})},y=({instructors:r})=>{if(r.length>0)return a(i,{children:[e("h1",{className:"py-4 text-secondary font-extrabold",children:"Instructors"}),a("table",{className:"table bg-base-100 shadow-md",children:[e("thead",{children:a("tr",{className:"text-base-100 bg-primary",children:[e("td",{className:"font-extrabold text-lg ",children:"Name"}),e("td",{className:"font-extrabold text-lg ",children:"Email"}),e("td",{className:"font-extrabold text-lg ",children:"Address"}),e("td",{className:"font-extrabold text-lg "})]})}),e("tbody",{children:r.map((t,d)=>a("tr",{className:"hover",children:[e("td",{children:t.users.name}),e("td",{children:t.users.email}),e("td",{children:t.users.address}),e("td",{children:e(n,{href:route("instructor.show",{id:t.id}),children:e(s,{className:"w-6 h-6 hover:opacity-50"})})})]},t.id))})]})]})},w=({students:r})=>{if(r.length>0)return a(i,{children:[e("h1",{className:"py-4 text-secondary font-extrabold",children:"Students"}),a("table",{className:"table bg-base-100 shadow-md",children:[e("thead",{children:a("tr",{className:"text-base-100 bg-primary",children:[e("td",{className:"font-extrabold text-lg ",children:"Name"}),e("td",{className:"font-extrabold text-lg ",children:"Email"}),e("td",{className:"font-extrabold text-lg ",children:"Address"}),e("td",{className:"font-extrabold text-lg "})]})}),e("tbody",{children:r.map((t,d)=>a("tr",{className:"hover",children:[e("td",{children:t.users.name}),e("td",{children:t.users.email}),e("td",{children:t.users.address}),e("td",{children:e(n,{href:route("student.index"),children:e(s,{className:"w-6 h-6 hover:opacity-50"})})})]},t.id))})]})]})},v=({checkpoints:r})=>a(i,{children:[e("h1",{className:"py-4 text-secondary font-extrabold",children:"Checkpoints"}),a("table",{className:"table bg-base-100 shadow-md",children:[e("thead",{children:a("tr",{className:"text-base-100 bg-primary",children:[e("td",{className:"font-extrabold text-lg ",children:"Name"}),e("td",{className:"font-extrabold text-lg ",children:"Validity"}),e("td",{className:"font-extrabold text-lg ",children:"Grades"}),e("td",{className:"font-extrabold text-lg "})]})}),e("tbody",{children:r.map((t,d)=>a("tr",{className:"hover",children:[e("td",{children:t.name}),e("td",{children:t.validity_period}),a("td",{children:[t.achieved_gradepoints,"/",t.total_gradepoints]}),e("td",{children:e(n,{href:route("checkpoint.index"),children:e(s,{className:"w-6 h-6 hover:opacity-50"})})})]},t.id))})]})]}),E=()=>e(g,{AdminComponent:e(f,{})});export{E as default};