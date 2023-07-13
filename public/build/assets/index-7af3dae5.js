import{r as i,R as j,W as q,a as l,j as e,b as D}from"./app-39d91d90.js";import{B as E}from"./breadcrumb-4e85d0d0.js";import{A as z}from"./AppLayout-ffa5fd90.js";import{P as L,F as P}from"./react-filepond.esm-891f4ed7.js";import{X as A}from"./xmark-4595bd87.js";import{M as _}from"./modal-8c6739c9.js";import"./icons-94bc5c1b.js";const K=({activeMenu:p,title:g,auth:f,showSearch:v=!1,searchData:c=[],ziggy:N})=>{const[d,o]=i.useState(""),[m,y]=i.useState("name"),[w,x]=j.useState([]),k={name:"",email:"",address:"",contact_number:"",username:"",password:"",qualification:"",selectedOrgs:[]},u=localStorage.getItem("rememberInstructor"),{data:t,setData:r,post:I,get:C}=q(u?JSON.parse(u):k),O=a=>{a.preventDefault(),I(route("instructor.store")),localStorage.removeItem("rememberInstructor")},S=a=>{a.preventDefault(),localStorage.setItem("rememberInstructor",JSON.stringify(t)),C(route("instructor.create",{query:d,searchBy:m}))};i.useEffect(()=>{var a,s;if(o(((a=N.query)==null?void 0:a.query)??""),v)try{(s=document.getElementById("selectOrgModal"))==null||s.showModal()}catch{}localStorage.removeItem("rememberInstructor")},[]);const F=(a,s)=>{var b,h;if(t.selectedOrgs.find(n=>n.id==s))try{(b=document.getElementById("selectOrgModal"))==null||b.close()}catch{}else{r("selectedOrgs",[...t.selectedOrgs,{id:s,name:a}]);try{(h=document.getElementById("selectOrgModal"))==null||h.close()}catch{}}},M=a=>{r("selectedOrgs",t.selectedOrgs.filter(s=>s.id!==a))};return l(z,{activeMenu:p,title:g,auth:f,children:[e(D,{title:"Create Instructor"}),e(E,{list:[{title:"Home",href:"/dashboard"},{title:"Instructor",href:"/instructor"},{title:"Create New",href:null}]}),l(_,{id:"selectOrgModal",title:"Select Organization",className:"w-11/12 max-w-5xl",children:[l("div",{className:"join my-5 border-2 border-primary",children:[l("div",{className:"input-group flex-r-c",children:[e("input",{value:d,onChange:a=>o(a.target.value),className:"input input-bordered join-item",placeholder:"Search..."}),e("div",{onClick:()=>o(""),className:"btn bg-base-100 hover:bg-base-100 join-item",children:e(A,{})})]}),l("select",{className:"select select-bordered join-item",value:m,onChange:a=>y(a.target.value),children:[e("option",{disabled:!0,selected:!0,value:"all",children:"Search By"}),e("option",{value:"name",children:"Organization Name"}),e("option",{value:"id",children:"Organization ID"})]}),e("div",{className:"indicator ",children:e("div",{onClick:S,className:"btn join-item btn-primary",children:"Search"})})]}),e("div",{className:"w-full bg-base-200 my-5",children:c.length>0?e("div",{className:"overflow-y-auto",style:{maxHeight:350},children:c.map(a=>l("div",{className:"flex items-center space-x-3 py-6 px-5 hover:bg-base-300 cursor-pointer",onClick:()=>F(a.name,a.id),children:[e("div",{className:"avatar",children:e("div",{className:"mask mask-squircle w-10 h-10",children:e("img",{src:a.logo,alt:"Avatar"})})}),e("div",{className:"font-bold",children:a.name})]},a.id))}):e("div",{className:"h-full flex-c-c"})})]}),e("div",{className:"w-full mx-auto mt-8",children:l("div",{className:"bg-base-100 p-8 rounded-lg shadow-md",children:[e("h2",{className:"text-2xl font-semibold mb-6",children:"Create Instructor"}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"name",children:"Name"}),e("input",{type:"text",id:"name",name:"name",placeholder:"Hauck PLC",className:"input border-2 border-base-200 input-ghost w-full",value:t.name,onChange:a=>r("name",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"address",children:"Address"}),e("textarea",{id:"address",name:"address",rows:2,className:"input border-2 border-base-200 input-ghost w-full",value:t.address,onChange:a=>r("address",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"address",children:"Qaulifications"}),e("input",{type:"text",id:"qualification",name:"qualification",placeholder:"MSc. Data Science..",className:"input border-2 border-base-200 input-ghost w-full",value:t.qualification,onChange:a=>r("qualification",a.target.value)})]}),l("div",{className:"mb-6 flex",children:[l("div",{className:"mr-2",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"contact",children:"Contact"}),e("input",{type:"tel",id:"contact",name:"contact",placeholder:"+42",className:"input border-2 border-base-200 input-ghost w-full",value:t.contact_number,onChange:a=>r("contact_number",a.target.value)})]}),l("div",{className:"ml-2",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"logo",children:"Logo"}),e("input",{type:"file",id:"logo",name:"logo",accept:"image/*",className:"file-input  w-full  file-input-primary"})]})]}),l("div",{children:[e("h1",{className:"block text-gray-700 font-semibold mb-2",children:"Belongs to ( Organizations )"}),l("div",{className:"p-3 w-full border-2 rounded-lg bg-base-200 flex items-center flex-wrap",children:[t.selectedOrgs.map(a=>l("div",{className:"m-1 badge badge-primary  gap-1 rounded py-4 pl-3 pr-1",children:[e("p",{className:"font-bold text-md",children:a.name}),e("svg",{onClick:s=>M(a.id),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-4 h-4 stroke-current cursor-pointer",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]},a.id)),e("div",{className:"m-2 my-1",onClick:()=>{var a;(a=document.getElementById("selectOrgModal"))==null||a.showModal()},children:e(L,{className:"w-6 h-6 cursor-pointer hover:opacity-70"})})]})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"email",children:"Email"}),e("input",{type:"email",id:"email",name:"email",className:"input border-2 border-base-200 input-ghost w-full",value:t.email,onChange:a=>r("email",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"username",children:"Username"}),e("input",{type:"text",id:"username",name:"username",className:"input border-2 border-base-200 input-ghost w-full",value:t.username,onChange:a=>r("username",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"password",children:"Password"}),e("input",{type:"password",id:"password",name:"password",className:"winput border-2 border-base-200 input-ghost w-full",value:t.password,onChange:a=>r("password",a.target.value)})]}),e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"logo",children:"Registration Document"}),e(P,{files:w,onupdatefiles:x,allowMultiple:!0,maxFiles:3,server:"/api/upload/organization-document",name:"organization-document",labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'}),e("div",{className:"flex justify-end",children:e("button",{className:"btn btn-primary",onClick:O,children:"Submit"})})]})})]})};export{K as default};
