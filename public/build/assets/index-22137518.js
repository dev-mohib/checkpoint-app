import{q as p,a as l,j as e,b as m,W as g}from"./app-0f84a12f.js";import{B as i}from"./breadcrumb-c44a38ca.js";import{A as d}from"./AppLayout-bde847eb.js";import"./icons-d6bc4937.js";const k=({activeMenu:n,title:o,organization:s,isFound:c})=>{const{props:u}=p();if(!u.organization)return l(d,{activeMenu:n,title:o,children:[e(m,{title:"Edit"}),e(i,{list:[{title:"Home",href:"/dashboard"},{title:"Organization",href:"/organization"},{title:"Edit",href:null}]}),e("div",{className:"h-screen flex-c-c",children:e("h1",{className:"text-3xl font-extrabold",children:"Not Found"})})]});const{data:t,setData:r,put:b,errors:f,processing:N,recentlySuccessful:v}=g({id:s.id,name:s.name,email:s.user.email,address:s.user.address,contact_number:s.user.contact_number,username:s.user.username,password:""});console.log({organization:s,isFound:c});const h=a=>{console.log("sending patch request"),b(route("organization.edit",t))};return l(d,{activeMenu:n,title:o,children:[e(m,{title:"Edit"}),e(i,{list:[{title:"Home",href:"/dashboard"},{title:"Organization",href:"/organization"},{title:"Edit",href:null}]}),e("div",{className:"w-full mx-auto mt-8",children:l("div",{className:"bg-base-100 p-8 rounded-lg shadow-md",children:[e("h2",{className:"text-2xl font-semibold mb-6",children:"Organization Form"}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"name",children:"Name"}),e("input",{type:"text",id:"name",name:"name",placeholder:"Organization",className:"input border-2 border-base-200 input-ghost w-full",value:t.name,onChange:a=>r("name",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"address",children:"Address"}),e("textarea",{id:"address",name:"address",rows:2,className:"input border-2 border-base-200 input-ghost w-full",value:t.address,onChange:a=>r("address",a.target.value)})]}),l("div",{className:"mb-6 flex",children:[l("div",{className:"mr-2",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"contact",children:"Contact"}),e("input",{type:"tel",id:"contact",name:"contact",placeholder:"+42",className:"input border-2 border-base-200 input-ghost w-full",value:t.contact_number,onChange:a=>r("contact_number",a.target.value)})]}),l("div",{className:"ml-2",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"logo",children:"Logo"}),e("input",{type:"file",id:"logo",name:"logo",accept:"image/*",className:"file-input  w-full  "})]})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"email",children:"Email"}),e("input",{type:"email",id:"email",name:"email",className:"input border-2 border-base-200 input-ghost w-full",value:t.email,onChange:a=>r("email",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"username",children:"Username"}),e("input",{type:"text",id:"username",name:"username",className:"input border-2 border-base-200 input-ghost w-full",value:t.username,onChange:a=>r("username",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"password",children:"New Password"}),e("input",{type:"password",id:"password",name:"password",className:"winput border-2 border-base-200 input-ghost w-full",value:t.password,onChange:a=>r("password",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"image",children:"Image Upload"}),e("input",{type:"file",id:"image",name:"image",accept:"image/*",className:"w-full py-2 border rounded-lg focus:outline-none focus:border-blue-500"})]}),e("div",{className:"flex justify-end",children:e("button",{className:"btn btn-primary",onClick:h,children:"Submit"})})]})})]})};export{k as default};
