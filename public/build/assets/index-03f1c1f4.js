import{R as c,W as u,a as l,j as e,b}from"./app-81b7f5e0.js";import{A as p,B as h}from"./AppLayout-19679ced.js";import{F as g}from"./react-filepond.esm-1144d1cd.js";import"./icons-82df6a6d.js";const y=()=>{const[o,n]=c.useState([]),i={name:"",email:"",address:"",contact_number:"",username:"",password:"",qualification:""},r=localStorage.getItem("rememberStudent"),{data:t,setData:s,post:m,get:f}=u(r?JSON.parse(r):i),d=a=>{a.preventDefault(),m(route("student.store")),localStorage.removeItem("rememberStudent")};return l(p,{children:[e(b,{title:"Create Student"}),e(h,{list:[{title:"Home",href:"/dashboard"},{title:"Student",href:"/student"},{title:"Create New",href:null}]}),e("div",{className:"w-full mx-auto mt-8",children:l("div",{className:"bg-base-100 p-8 rounded-lg shadow-md",children:[e("h2",{className:"text-2xl font-semibold mb-6",children:"Create Student"}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"name",children:"Name"}),e("input",{type:"text",id:"name",name:"name",placeholder:"Hauck PLC",className:"input border-2 border-base-200 input-ghost w-full",value:t.name,onChange:a=>s("name",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"address",children:"Address"}),e("textarea",{id:"address",name:"address",rows:2,className:"input border-2 border-base-200 input-ghost w-full",value:t.address,onChange:a=>s("address",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"address",children:"Qaulifications"}),e("input",{type:"text",id:"qualification",name:"qualification",placeholder:"MSc. Data Science..",className:"input border-2 border-base-200 input-ghost w-full",value:t.qualification,onChange:a=>s("qualification",a.target.value)})]}),l("div",{className:"mb-6 flex",children:[l("div",{className:"mr-2",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"contact",children:"Contact"}),e("input",{type:"tel",id:"contact",name:"contact",placeholder:"+42",className:"input border-2 border-base-200 input-ghost w-full",value:t.contact_number,onChange:a=>s("contact_number",a.target.value)})]}),l("div",{className:"ml-2",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"logo",children:"Logo"}),e("input",{type:"file",id:"logo",name:"logo",accept:"image/*",className:"file-input  w-full  file-input-primary"})]})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"email",children:"Email"}),e("input",{type:"email",id:"email",name:"email",className:"input border-2 border-base-200 input-ghost w-full",value:t.email,onChange:a=>s("email",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"username",children:"Username"}),e("input",{type:"text",id:"username",name:"username",className:"input border-2 border-base-200 input-ghost w-full",value:t.username,onChange:a=>s("username",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"password",children:"Password"}),e("input",{type:"password",id:"password",name:"password",className:"winput border-2 border-base-200 input-ghost w-full",value:t.password,onChange:a=>s("password",a.target.value)})]}),e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"logo",children:"Registration Document"}),e(g,{files:o,onupdatefiles:n,allowMultiple:!0,maxFiles:3,server:"/api/upload/organization-document",name:"organization-document",labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'}),e("div",{className:"flex justify-end",children:e("button",{className:"btn btn-primary",onClick:d,children:"Submit"})})]})})]})};export{y as default};
