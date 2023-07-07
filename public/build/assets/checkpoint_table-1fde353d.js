import{r as d,a as s,j as e,d as g}from"./app-0f84a12f.js";import{N}from"./icons-d6bc4937.js";const y=[{name:"John",username:"Doe",email:"john.doe@example.com",address:"New York",logo:"/laptop.jpg"},{name:"Jane",username:"Smith",email:"jane.smith@example.com",address:"London",logo:"/laptop.jpg"},{name:"Michael",username:"Johnson",email:"michael.johnson@example.com",address:"Paris",logo:"/laptop.jpg"},{name:"Emily",username:"Brown",email:"emily.brown@example.com",address:"Berlin",logo:"/laptop.jpg"},{name:"David",username:"Wilson",email:"david.wilson@example.com",address:"Tokyo",logo:"/laptop.jpg"},{name:"Sarah",username:"Anderson",email:"sarah.anderson@example.com",address:"Sydney",logo:"/laptop.jpg"},{name:"Christopher",username:"Thomas",email:"christopher.thomas@example.com",address:"Toronto",logo:"/laptop.jpg"},{name:"Olivia",username:"Robinson",email:"olivia.robinson@example.com",address:"Chicago",logo:"/laptop.jpg"},{name:"Daniel",username:"Walker",email:"daniel.walker@example.com",address:"Los Angeles",logo:"/laptop.jpg"},{name:"Sophia",username:"Harris",email:"sophia.harris@example.com",address:"Melbourne",logo:"/laptop.jpg"}],C=()=>{const[u,f]=d.useState(y),[t,x]=d.useState(null),[l,p]=d.useState("asc"),[r,i]=d.useState({name:"",username:"",email:"",address:"",logo:"/laptop.jpg"}),o=a=>{t===a?p(l==="asc"?"desc":"asc"):(x(a),p("asc"))};let m=[...u];Object.keys(r).forEach(a=>{const n=r[a].toLowerCase();n&&(m=m.filter(c=>c[a].toLowerCase().includes(n)))}),t&&m.sort((a,n)=>{const c=a[t],h=n[t];return c<h?l==="asc"?-1:1:c>h?l==="asc"?1:-1:0});const b=()=>{var a;(a=document.getElementById("CreateNewOrgModel"))==null||a.showModal()};return s("div",{className:"container mx-auto p-4",children:[s("div",{className:"w-full flex-r-b",children:[e(v,{}),e(g,{href:route("organization.create"),className:"btn btn-primary mx-2 cursor-pointer",onClick:b,children:"Add New"})]}),s("table",{className:"table table-lg bg-base-100 ",children:[e("thead",{children:s("tr",{className:"",children:[s("th",{className:"py-2 px-4 bg-primary rounded-tl-3xl",children:[s("div",{className:"flex items-center cursor-pointer text-sm font-extrabold m-2 text-base-200",onClick:()=>o("name"),children:["Name"," ",e("b",{className:"ml-1 text-secondary",children:t==="name"&&l==="asc"?"↑":"↓"})]}),e("input",{className:"input input-bordered mt-2 px-2 py-1 input-sm",placeholder:"Search...",type:"text",value:r.name,onChange:a=>i({...r,name:a.target.value})})]}),s("th",{className:"py-2 px-4 bg-primary",children:[s("div",{className:"flex items-center cursor-pointer text-sm font-extrabold m-2 text-base-200",onClick:()=>o("username"),children:["Username"," ",e("b",{className:"ml-1 text-secondary",children:t==="username"&&l==="asc"?"↑":"↓"})]}),e("input",{className:"input input-bordered mt-2 px-2 py-1 input-sm",placeholder:"Search...",type:"text",value:r.username,onChange:a=>i({...r,username:a.target.value})})]}),s("th",{className:"py-2 px-4 bg-primary",children:[s("div",{className:"flex items-center cursor-pointer text-sm font-extrabold m-2 text-base-200",onClick:()=>o("email"),children:["Email"," ",e("b",{className:"ml-1 text-secondary",children:t==="email"&&l==="asc"?"↑":"↓"})]}),e("input",{className:"input input-bordered mt-2 px-2 py-1 input-sm",placeholder:"Search...",type:"text",value:r.email,onChange:a=>i({...r,email:a.target.value})})]}),s("th",{className:"py-2 px-4 bg-primary",children:[s("div",{className:"flex items-center cursor-pointer text-sm font-extrabold m-2 text-base-200",onClick:()=>o("address"),children:["Address"," ",e("b",{className:"ml-1 text-secondary",children:t==="address"&&l==="asc"?"↑":"↓"})]}),e("input",{className:"input input-bordered mt-2 px-2 py-1 input-sm",placeholder:"Search...",type:"text",value:r.address,onChange:a=>i({...r,address:a.target.value})})]}),e("th",{className:"bg-primary rounded-tr-3xl"})]})}),s("tbody",{children:[m.map((a,n)=>s("tr",{className:"hover cursor-pointer px-7",children:[s("div",{className:"flex items-center space-x-3 ml-3 my-3",children:[e("div",{className:"avatar",children:e("div",{className:"mask mask-squircle w-10 h-10",children:e("img",{src:a.logo,alt:"Avatar"})})}),s("div",{children:[e("div",{className:"font-bold",children:a.name}),e("div",{className:"text-sm opacity-50",children:"test"})]})]}),e("td",{className:"py-2 px-4",children:a.username}),e("td",{className:"py-2 px-4",children:a.email}),e("td",{className:"py-2 px-4",children:a.address}),e("td",{children:e(N,{className:"w-8 h-8 hover:opacity-60"})})]},n)),s("tr",{className:"",children:[s("td",{className:"py-4 text-lg font-extrabold bg-primary rounded-bl-3xl",children:[e("b",{className:"",children:"1 to 10"})," of 180"]}),e("td",{className:"bg-primary"}),e("td",{className:"bg-primary"}),e("td",{className:"py-4 text-lg font-extrabold bg-primary",children:s("div",{className:"join",children:[e("button",{className:"join-item btn",children:"«"}),e("button",{className:"join-item btn",children:"Page 1"}),e("button",{className:"join-item btn",children:"»"})]})}),e("td",{className:"bg-primary rounded-br-3xl"})]})]})]})]})},v=()=>s("div",{className:"join my-5",children:[e("div",{children:e("div",{children:e("input",{className:"input input-bordered join-item",placeholder:"Search..."})})}),s("select",{className:"select select-bordered join-item",children:[e("option",{disabled:!0,selected:!0,children:"Search By"}),e("option",{children:"Name"}),e("option",{children:"ID"}),e("option",{children:"Email"}),e("option",{children:"Username"})]}),e("div",{className:"indicator",children:e("button",{className:"btn join-item btn-success",children:"Search"})})]});export{C as default};
