import{r,a,j as e,d as n}from"./app-4885bbf9.js";import{C as c,N as y}from"./icons-a6ae82bc.js";const w=({organizations:s,query:l})=>{const[i,d]=r.useState(l.name??""),[m,o]=r.useState(l.username??""),[p,h]=r.useState(l.email??""),[b,u]=r.useState(l.address??""),[N,x]=r.useState(l.id??""),g=()=>{var t;(t=document.getElementById("CreateNewOrgModel"))==null||t.showModal()};return a("div",{className:" p-4",children:[a("div",{className:"flex-r-b",children:[e("div",{}),e(n,{href:route("organization.create"),className:"btn btn-primary m-4 cursor-pointer",onClick:g,children:"Add New"})]}),e("div",{children:a("table",{className:"table table-sm bg-base-100 shadow-md",children:[e("thead",{children:a("tr",{children:[a("th",{className:"py-2 px-4 bg-primary",children:[e("div",{className:"flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200",children:"Name"}),a("div",{className:"input-group",children:[e("input",{className:"input border-none input-xs w-full",placeholder:"Search...",type:"text",value:i,onChange:t=>d(t.target.value)}),e("button",{onClick:()=>d(""),className:"btn px-2 bg-base-100  btn-xs py-1",children:e(c,{className:"w-4 h-4"})})]})]}),a("th",{className:"py-2 px-4 bg-primary",children:[e("div",{className:"flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200",children:"Username"}),a("div",{className:"input-group",children:[e("input",{className:"input border-none input-xs w-full",placeholder:"Search...",type:"text",value:m,onChange:t=>o(t.target.value)}),e("button",{onClick:()=>o(""),className:"btn px-2 bg-base-100  btn-xs py-1",children:e(c,{className:"w-4 h-4"})})]})]}),a("th",{className:"py-2 px-4 bg-primary",children:[e("div",{className:"flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200",children:"Email"}),a("div",{className:"input-group",children:[e("input",{className:"input border-none input-xs w-full",placeholder:"Search...",type:"text",value:p,onChange:t=>h(t.target.value)}),e("button",{onClick:()=>h(""),className:"btn px-2 bg-base-100  btn-xs py-1",children:e(c,{className:"w-4 h-4"})})]})]}),a("th",{className:"py-2 px-4 bg-primary",children:[e("div",{className:"flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200",children:"Address"}),a("div",{className:"input-group",children:[e("input",{className:"input border-none input-xs w-full",placeholder:"Search...",type:"text",value:b,onChange:t=>u(t.target.value)}),e("button",{onClick:()=>u(""),className:"btn px-2 bg-base-100 btn-xs py-1",children:e(c,{className:"w-4 h-4"})})]})]}),a("th",{className:"py-2 px-4 bg-primary",children:[e("div",{className:"flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200",children:"ID"}),a("div",{className:"input-group",children:[e("input",{className:"input border-none input-xs w-full",style:{minWidth:50},placeholder:"Search...",type:"text",value:N,onChange:t=>x(t.target.value)}),e("button",{onClick:()=>x(""),className:"btn px-2 bg-base-100  btn-xs py-1",children:e(c,{className:"w-4 h-4"})})]})]}),e("th",{className:"bg-primary",children:e("div",{className:"flex-r-c",children:e(n,{href:route("organization.index",{name:i,email:p,id:N,address:b,username:m}),className:"btn btn-secondary btn-sm  mt-4 mr-4",children:"Search"})})})]})}),a("tbody",{children:[s.data.map((t,v)=>a("tr",{className:"cursor-pointer hover",children:[e("td",{children:a("div",{className:"flex items-center space-x-3 ml-3 my-3",children:[e("div",{className:"avatar",children:e("div",{className:"mask mask-squircle w-10 h-10",children:e("img",{src:t.logo,alt:"Avatar"})})}),e("div",{children:e("div",{className:"font-bold",children:t.name})})]})}),e("td",{className:"py-2 px-4",children:t.users.username}),e("td",{className:"py-2 px-4",children:t.users.email}),e("td",{className:"py-2 px-4",children:t.users.address}),e("td",{className:"py-2 px-4",children:t.id}),e("td",{className:"py-2 px-4",children:e("div",{className:"w-full flex-c-c",children:e(n,{href:route("organization.show",{id:t.id}),children:e(y,{className:"w-6 h-6 hover:opacity-60"})})})})]},v)),a("tr",{className:"",children:[a("td",{className:"py-4 text-lg font-extrabold bg-primary text-base-100",children:[a("b",{className:"",children:[s.from," to ",s.to]})," of ",s.total]}),e("td",{className:"bg-primary"}),e("td",{className:"bg-primary"}),e("td",{className:"bg-primary"}),e("td",{className:"bg-primary"}),e("td",{className:"py-4 text-lg font-extrabold bg-primary pr-6",children:a("div",{className:"join",children:[s.prev_page_url?e(n,{href:route("organization.index",{page:s.current_page-1}),children:e("button",{className:"join-item btn btn-sm",children:"«"})}):e("button",{className:"join-item btn btn-sm",children:"«"}),a("button",{className:"join-item btn btn-sm",children:["Page ",s.current_page]}),s.next_page_url?e(n,{href:route("organization.index",{page:s.current_page+1}),children:e("button",{className:"join-item btn btn-sm",children:"»"})}):e("button",{className:"join-item btn btn-sm",children:"»"})]})})]})]})]})})]})};export{w as default};