import{j as e,q as d,W as c,a as l}from"./app-f63682cd.js";import{A as o}from"./AppLayout-b8073d9f.js";import"./icons-d1e7d4e3.js";const u=()=>{const{organization:t,isFound:n}=d().props;if(!t||!n)return e(o,{AdminComponent:e("div",{className:"h-screen flex-c-c",children:e("h1",{className:"text-3xl font-extrabold",children:"Not Found"})}),breadcrumb:[{title:"Home",href:"/dashboard"},{title:"Organization",href:"/organization"},{title:"Edit",href:null}]});const{data:s,setData:r,put:i,errors:b,processing:h,recentlySuccessful:p}=c({id:t.id,name:t.name,email:t.users.email,address:t.users.address,contact_number:t.users.contact_number,username:t.users.username,password:""});console.log({organization:t,isFound:n});const m=a=>{console.log("sending patch request"),i(route("organization.edit",s))};return e("div",{children:e("div",{className:"w-full mx-auto mt-8",children:l("div",{className:"bg-base-100 p-8 rounded-lg shadow-md",children:[e("h2",{className:"text-2xl font-semibold mb-6",children:"Organization Form"}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"name",children:"Name"}),e("input",{type:"text",id:"name",name:"name",placeholder:"Organization",className:"input border-2 border-base-200 input-ghost w-full",value:s.name,onChange:a=>r("name",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"address",children:"Address"}),e("textarea",{id:"address",name:"address",rows:2,className:"input border-2 border-base-200 input-ghost w-full",value:s.address,onChange:a=>r("address",a.target.value)})]}),l("div",{className:"mb-6 flex",children:[l("div",{className:"mr-2",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"contact",children:"Contact"}),e("input",{type:"tel",id:"contact",name:"contact",placeholder:"+42",className:"input border-2 border-base-200 input-ghost w-full",value:s.contact_number,onChange:a=>r("contact_number",a.target.value)})]}),l("div",{className:"ml-2",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"logo",children:"Logo"}),e("input",{type:"file",id:"logo",name:"logo",accept:"image/*",className:"file-input  w-full  "})]})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"email",children:"Email"}),e("input",{type:"email",id:"email",name:"email",className:"input border-2 border-base-200 input-ghost w-full",value:s.email,onChange:a=>r("email",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"username",children:"Username"}),e("input",{type:"text",id:"username",name:"username",className:"input border-2 border-base-200 input-ghost w-full",value:s.username,onChange:a=>r("username",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"password",children:"New Password"}),e("input",{type:"password",id:"password",name:"password",className:"winput border-2 border-base-200 input-ghost w-full",value:s.password,onChange:a=>r("password",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block text-gray-700 font-semibold mb-2",htmlFor:"image",children:"Image Upload"}),e("input",{type:"file",id:"image",name:"image",accept:"image/*",className:"w-full py-2 border rounded-lg focus:outline-none focus:border-blue-500"})]}),e("div",{className:"flex justify-end",children:e("button",{className:"btn btn-primary",onClick:m,children:"Submit"})})]})})})},v=()=>e(o,{breadcrumb:[{title:"Home",href:"/dashboard"},{title:"Organization",href:"/organization"},{title:"Edit",href:null}],AdminComponent:e(u,{})});export{v as default};
