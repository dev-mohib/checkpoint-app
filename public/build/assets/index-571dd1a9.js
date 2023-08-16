import{j as e,r as f,W as N,R as m,a as o}from"./app-ddf6f56e.js";import{E as t}from"./ErrorMessage-d385f61f.js";import{A as v}from"./AppLayout-58c4514d.js";import{F as d}from"./react-filepond.esm-5e7266d8.js";const x=()=>{const[n]=f.useState(Date.now()),{data:r,setData:s,post:c,errors:l}=N({name:"",email:"",address:"",contact_number:"",username:"",password:"",regDocRef:"",logoRef:""}),[b,p]=m.useState([]),[u,g]=m.useState([]),h=a=>{c(route("organization.store"))};return e("div",{children:e("div",{className:"w-full mx-auto mt-8",children:o("div",{className:"bg-base-100 p-8 rounded-lg shadow-md",children:[e("h2",{className:"text-2xl font-semibold mb-6",children:"Create Organization"}),o("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"name",children:"Name"}),e(t,{message:l.name}),e("input",{type:"text",id:"name",name:"name",placeholder:"Hauck PLC",className:"input border-2 border-base-200 input-ghost w-full",value:r.name,onChange:a=>s("name",a.target.value)})]}),o("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"address",children:"Address"}),e(t,{message:l.address}),e("textarea",{id:"address",name:"address",rows:2,placeholder:"Apt. 750, West Reeseberg",className:"input border-2 border-base-200 input-ghost w-full",value:r.address,onChange:a=>s("address",a.target.value)})]}),e("div",{className:"mb-6 flex",children:o("div",{className:"mr-2",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"contact",children:"Contact"}),e(t,{message:l.contact_number}),e("input",{type:"tel",id:"contact",name:"contact",placeholder:"+42 303 5214014",className:"input border-2 border-base-200 input-ghost w-full",value:r.contact_number,onChange:a=>s("contact_number",a.target.value)})]})}),e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"logo",children:"Organization Logo"}),e(t,{message:l.logoRef}),e(d,{files:u,onupdatefiles:g,acceptedFileTypes:["image/jpg","jpg",".jpg"],maxFiles:1,server:`/api/upload/organization-logo?key=IMG-${n}`,name:"organization-logo",labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',onprocessfile:(a,i)=>{a||s("logoRef","IMG-"+n+"."+i.fileExtension)}}),o("div",{children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"organization-document",children:"Registration Document"}),e(t,{message:l.regDocRef}),e(d,{files:b,onupdatefiles:p,acceptedFileTypes:["image/jpg","jpg",".jpg"],maxFiles:1,server:`/api/upload/organization-document?key=doc-${n}`,name:"organization-document",labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',onprocessfile:(a,i)=>{a||s("regDocRef","doc-"+n+"."+i.fileExtension)}})]}),o("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"email",children:"Email"}),e(t,{message:l.email}),e("input",{type:"email",id:"email",name:"email",placeholder:"abc@example.com",className:"input border-2 border-base-200 input-ghost w-full",value:r.email,onChange:a=>s("email",a.target.value)})]}),o("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"username",children:"Username"}),e(t,{message:l.username}),e("input",{type:"text",id:"username",name:"username",placeholder:"hauk.plc",className:"input border-2 border-base-200 input-ghost w-full",value:r.username,onChange:a=>s("username",a.target.value)})]}),o("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"password",children:"Password"}),e(t,{message:l.password}),e("input",{type:"password",id:"password",name:"password",placeholder:"****",className:"winput border-2 border-base-200 input-ghost w-full",value:r.password,onChange:a=>s("password",a.target.value)})]}),e("div",{className:"flex justify-end",children:e("button",{className:"btn btn-primary",onClick:h,children:"Submit"})})]})})})},C=()=>e(v,{AdminComponent:e(x,{}),breadcrumb:[{title:"Home",href:"/dashboard"},{title:"Organization",href:"/organization"},{title:"Create New",href:null}]});export{C as default};
