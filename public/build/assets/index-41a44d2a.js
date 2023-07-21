import{j as e,q as N,r as l,W as h,a as t,b as o,F as s,d as c}from"./app-81b7f5e0.js";import{A as f,B as p}from"./AppLayout-19679ced.js";import{N as m}from"./icons-82df6a6d.js";import{M as y,A as v}from"./attachEntityModal-a9035b1e.js";const w={q:"",searchBy:"name",collection:"organization"},i=()=>{const{student:a,searchData:d,showModal:n,isEmpty:r}=N().props;console.log({searchData:d});const u=JSON.parse(localStorage.getItem("rememberStudentAttach")??JSON.stringify(w));l.useState(u),l.useState(""),l.useState("Organization");const{data:C,get:O,processing:k,delete:b}=h(),g=()=>{b("/Student/"+a.id,{onSuccess:()=>{console.log("organization deleted")},onError:x=>console.log("Found an error ",x)})};return l.useEffect(()=>{n&&document.getElementById("AttachEntityModal").showModal()},[]),r?t("div",{children:[e(o,{title:"Students"}),e("div",{className:"min-h-screen flex-c-c text-3xl font-extrabold",children:"Student not found"})]}):t("div",{children:[e(o,{title:a.users.name}),t(y,{id:"deleteInstrucrorModal",title:"Delete Organization",children:[e("h1",{children:"Do you really want to delete this Students?"}),t("div",{className:"w-full flex justify-end",children:[e("div",{onClick:g,className:"btn btn-error m-2",children:"YES!"}),e("button",{className:"btn btn-ghost my-2",children:"CANCEL"})]})]}),e(v,{id:a.id,routeName:"student"}),t("div",{className:"w-full flex justify-between",children:[e(p,{list:[{title:"Home",href:"/dashboard"},{title:"Student",href:"/student"},{title:a.users.name,href:null}]}),e(A,{id:a.id})]}),e("div",{className:"flex-c-c mt-16",children:t("table",{className:"table table-sm  bg-base-100 shadow-md",children:[e("thead",{children:t("tr",{className:"bg-primary",children:[e("td",{className:"font-extrabold text-lg text-base-100 ",children:"Details"}),e("td",{})]})}),t("tbody",{children:[t("tr",{className:"",children:[e("td",{children:"Name"}),e("td",{children:a.users.name})]}),t("tr",{children:[e("td",{children:"Username"}),e("td",{children:a.users.username})]}),t("tr",{children:[e("td",{children:"Email"}),e("td",{children:a.users.email})]}),t("tr",{children:[e("td",{children:"Address"}),e("td",{children:a.users.address})]}),t("tr",{children:[e("td",{children:"Contact"}),e("td",{children:a.users.contact_number})]}),t("tr",{children:[e("td",{children:"Qualification"}),e("td",{children:a.qualification})]})]})]})}),a.organizations.length>0?t(s,{children:[e("h1",{className:"py-4 text-secondary font-extrabold",children:"Belongs to (Organization's)"}),e(E,{organizations:a.organizations})]}):e(s,{}),a.checkpoints.length>0&&t(s,{children:[e("h1",{className:"py-4 text-secondary font-extrabold",children:"Checkpoints (Assigned)"}),e(S,{checkpoints:a.checkpoints})]})]})},A=({id:a})=>{const d=r=>{n(route("student.show",{id:a,collection:r,searchBy:"name",q:""}))},{get:n}=h();return t("details",{className:"dropdown z-30",children:[e("summary",{className:"m-1 btn pr-28 btn-primary",children:"Actions"}),t("ul",{className:"p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52",children:[e("li",{children:e("a",{onClick:()=>d("organization"),children:"Attach Organization"})}),e("li",{children:e("a",{onClick:()=>d("student"),children:"Attach Instructor"})}),e("li",{children:e("a",{onClick:()=>d("checkpoint"),children:"Attach Checkpoint"})}),e("li",{children:e(c,{href:route("student.showEdit",{id:a}),children:"Edit Student"})}),e("li",{onClick:r=>{document.getElementById("deleteInstrucrorModal").showModal()},children:e("a",{className:"text-red-600 hover:text-red-600",children:"Delete Instructor"})})]})]})},E=({organizations:a})=>t("table",{className:"table bg-base-100 shadow-md",children:[e("thead",{children:t("tr",{className:"text-base-100 bg-primary",children:[e("td",{className:"font-extrabold text-lg ",children:"Name"}),e("td",{className:"font-extrabold text-lg ",children:"Email"}),e("td",{className:"font-extrabold text-lg ",children:"Address"}),e("td",{className:"font-extrabold text-lg "})]})}),e("tbody",{children:a.map((d,n)=>t("tr",{className:"hover",children:[e("td",{children:t("div",{className:"flex items-center space-x-3 ml-3 my-3",children:[e("div",{className:"avatar",children:e("div",{className:"mask mask-squircle w-10 h-10",children:e("img",{src:d.logo,alt:"Avatar"})})}),e("div",{children:e("div",{className:"font-bold",children:d.name})})]})}),e("td",{children:d.users.email}),e("td",{children:d.users.address}),e("td",{children:e(c,{href:route("organization.show",{id:d.id}),children:e(m,{className:"w-6 h-6 hover:opacity-50"})})})]},d.id))})]}),S=({checkpoints:a})=>t("table",{className:"table bg-base-100 shadow-md",children:[e("thead",{children:t("tr",{className:"text-base-100 bg-primary",children:[e("td",{className:"font-extrabold text-lg ",children:"Name"}),e("td",{className:"font-extrabold text-lg ",children:"Validity"}),e("td",{className:"font-extrabold text-lg ",children:"Grades"}),e("td",{className:"font-extrabold text-lg "})]})}),e("tbody",{children:a.map((d,n)=>t("tr",{className:"hover",children:[e("td",{children:d.name}),e("td",{children:d.validity_period}),t("td",{children:[d.achieved_gradepoints,"/",d.total_gradepoints]}),e("td",{children:e(c,{href:route("checkpoint.index"),children:e(m,{className:"w-6 h-6 hover:opacity-50"})})})]},d.id))})]}),D=()=>e(f,{AdminComponent:e(i,{}),OrganizationComponent:e(i,{}),InstructorComponent:e(i,{})});export{D as default};
