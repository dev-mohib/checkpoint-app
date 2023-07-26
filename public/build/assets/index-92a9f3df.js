import{j as e,r as u,W as h,a as l,b}from"./app-eece0f73.js";import{A as p,B as g}from"./AppLayout-75200e08.js";import{E as s}from"./ErrorMessage-a5999a25.js";import"./icons-32cd2e22.js";const d=()=>{u.useState("");const m={name:"",gender:"",address:"",contact_number:"",email:"",username:"",password:"",guardian_name:"",guardian_relationship:""},o=localStorage.getItem("rememberStudent"),{data:n,setData:r,post:i,errors:t}=h(o?JSON.parse(o):m),c=a=>{a.preventDefault(),i(route("student.store")),localStorage.removeItem("rememberStudent")};return l("div",{children:[e(b,{title:"Create Student"}),e(g,{list:[{title:"Home",href:"/dashboard"},{title:"Student",href:"/student"},{title:"Create New",href:null}]}),e("div",{className:"w-full mx-auto mt-8",children:l("div",{className:"bg-base-100 p-8 rounded-lg shadow-md",children:[e("h2",{className:"text-2xl font-semibold mb-6",children:"Create Student"}),l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"name",children:"Name"}),e(s,{message:t.name}),e("input",{type:"text",id:"name",name:"name",placeholder:"Stephan Mertz",className:"input border-2 border-base-200 input-ghost w-full",value:n.name,onChange:a=>r("name",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"address",children:"Address"}),e(s,{message:t.address}),e("textarea",{id:"address",name:"address",rows:2,placeholder:"	Apt. 750, West Reeseberg",className:"input border-2 border-base-200 input-ghost w-full",value:n.address,onChange:a=>r("address",a.target.value)})]}),l("div",{className:"mr-2 w-full",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"contact_number",children:"Contact Number"}),e(s,{message:t.contact_number}),e("input",{type:"tel",id:"contact",name:"contact",placeholder:"+92 303 5214014",className:"input border-2 border-base-200 input-ghost w-full",value:n.contact_number,onChange:a=>r("contact_number",a.target.value)})]}),l("div",{className:"mb-6 mr-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"gender",children:"Gender"}),e(s,{message:t.gender}),l("select",{className:"select select-bordered w-full max-w-xs",onChange:a=>r("gender",a.target.value),children:[e("option",{selected:!0,disabled:!0,children:"Select Gender"}),e("option",{value:"Male",children:"Male"}),e("option",{value:"Female",children:"Female"}),e("option",{value:"Other",children:"Other"})]})]}),l("div",{className:"mb-6 w-full mr-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"address",children:"Guardian Name"}),e(s,{message:t.guardian_name}),e("input",{type:"text",id:"guardian_name",name:"guardian_name",placeholder:"Sam",className:"input border-2 border-base-200 input-ghost w-full",value:n.guardian_name,onChange:a=>r("guardian_name",a.target.value)})]}),l("div",{className:"mb-6 mr-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"guardian_relationship",children:"Guardian Relationship"}),e(s,{message:t.guardian_relationship}),l("select",{className:"select select-bordered w-full max-w-xs",onChange:a=>r("guardian_relationship",a.target.value),children:[e("option",{selected:!0,disabled:!0,children:"Select Guardian Relationship"}),e("option",{value:"Parents",children:"Parents"}),e("option",{value:"Grandfather",children:"Grandfather"}),e("option",{value:"Grandmother",children:"Grandmother"}),e("option",{value:"Brother",children:"Brother"}),e("option",{value:"Sister",children:"Sister"}),e("option",{value:"Other",children:"Other"})]})]}),l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"email",children:"Email"}),e(s,{message:t.email}),e("input",{type:"email",id:"email",name:"email",placeholder:"abc@example.com",className:"input border-2 border-base-200 input-ghost w-full",value:n.email,onChange:a=>r("email",a.target.value)})]}),l("div",{className:"mb-6 w-full",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"username",children:"Username"}),e(s,{message:t.username}),e("input",{type:"text",id:"username",name:"username",placeholder:"john123",className:"input border-2 border-base-200 input-ghost w-full",value:n.username,onChange:a=>r("username",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"password",children:"Password"}),e(s,{message:t.password}),e("input",{type:"password",id:"password",name:"password",placeholder:"*****",className:"input border-2 border-base-200 input-ghost w-full",value:n.password,onChange:a=>r("password",a.target.value)})]}),e("div",{className:"flex justify-end",children:e("button",{className:"btn btn-primary",onClick:c,children:"Submit"})})]})})]})},x=()=>e(p,{AdminComponent:e(d,{}),OrganizationComponent:e(d,{})});export{x as default};