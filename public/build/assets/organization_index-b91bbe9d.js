import{q as h,r as m,a as r,j as e,d as c}from"./app-6ac0cb59.js";import{F as p,f as u}from"./index-10bee6ed.js";import{A as b}from"./arrow_forward-80f7ca6d.js";import{s as N}from"./constants-471e02cc.js";const y=()=>{const{organizations:t,ziggy:s}=h().props,[d,l]=m.useState(""),[i,n]=m.useState("name");return m.useEffect(()=>{const a=`${s==null?void 0:s.query.filter}`;a=="name"?(n(a),l(s==null?void 0:s.query.name)):a=="email"?(n(a),l(s==null?void 0:s.query.email)):a=="address"?(n(a),l(s==null?void 0:s.query.address)):a=="id"?(n(a),l(s==null?void 0:s.query.id)):n("all")},[]),r("div",{className:" p-4",children:[r("div",{className:"flex-r-b",children:[r("div",{className:"join my-5 border-2 border-primary",children:[r("div",{className:"input-group flex-r-c",children:[e("input",{value:d,onChange:a=>l(a.target.value),className:"input input-bordered join-item",placeholder:"Search..."}),e("button",{onClick:()=>l(""),className:"btn bg-base-100 hover:bg-base-100 join-item",children:e(p,{icon:u})})]}),r("select",{className:"select select-bordered join-item",value:i,onChange:a=>n(a.target.value),children:[e("option",{disabled:!0,selected:!0,value:"all",children:"Search By"}),e("option",{value:"name",children:"Name"}),e("option",{value:"id",children:"ID"}),e("option",{value:"email",children:"Email"}),e("option",{value:"username",children:"Username"})]}),e("div",{className:"indicator ",children:e(c,{href:route("organization.index",{name:i=="name"?d:"",email:i=="email"?d:"",username:i=="username"?d:"",id:i=="id"?d:"",filter:i}),className:"btn join-item btn-primary",children:"Search"})})]}),e(c,{href:route("organization.create"),className:"btn btn-primary m-4 cursor-pointer",children:"Add New"})]}),e("div",{children:t.data.length>0?r("table",{className:"table table-sm bg-base-100 shadow-md",children:[e("thead",{children:r("tr",{className:"py-2 px-4 bg-primary text-sm font-extrabold m-1 text-base-200",children:[e("th",{children:"Name"}),e("th",{className:"",children:"Username"}),e("th",{children:"Email"}),e("th",{children:"Address"}),e("th",{children:"ID"}),e("th",{})]})}),r("tbody",{children:[t.data.map((a,o)=>r("tr",{className:"cursor-pointer hover",children:[e("td",{children:r("div",{className:"flex items-center space-x-3 ml-3 my-3",children:[e("div",{className:"avatar",children:e("div",{className:"mask mask-squircle w-10 h-10",children:e("img",{src:N("organization-logo",a.logo),alt:"Avatar"})})}),e("div",{children:e("div",{className:"font-bold",children:a.name})})]})}),e("td",{className:"py-2 px-4",children:a.users.username}),e("td",{className:"py-2 px-4",children:a.users.email}),e("td",{className:"py-2 px-4",children:a.users.address}),e("td",{className:"py-2 px-4",children:a.id}),e("td",{className:"py-2 px-4",children:e("div",{className:"w-full flex-c-c",children:e(c,{href:route("organization.show",{id:a.id}),children:e(b,{className:"dark:stroke-white",width:"25px",height:"35px"})})})})]},o)),r("tr",{className:"",children:[r("td",{className:"py-4 text-lg font-extrabold bg-primary text-base-100",children:[r("b",{className:"",children:[t.from," to ",t.to]})," of ",t.total]}),e("td",{className:"bg-primary"}),e("td",{className:"bg-primary"}),e("td",{className:"bg-primary"}),e("td",{className:"bg-primary"}),e("td",{className:"py-4 text-lg font-extrabold bg-primary pr-6",children:r("div",{className:"join",children:[t.prev_page_url?e(c,{href:route("organization.index",{page:t.current_page-1}),children:e("button",{className:"join-item btn btn-sm",children:"«"})}):e("button",{className:"join-item btn btn-sm",children:"«"}),r("button",{className:"join-item btn btn-sm",children:["Page ",t.current_page]}),t.next_page_url?e(c,{href:route("organization.index",{page:t.current_page+1}),children:e("button",{className:"join-item btn btn-sm",children:"»"})}):e("button",{className:"join-item btn btn-sm",children:"»"})]})})]})]})]}):r("div",{className:"w-full border-2 shadow-sm",children:[e("div",{className:"bg-primary h-16 w-full"}),e("div",{className:"w-full flex-c-c h-96 font-bold text-2xl",children:"No Organizations"})]})})]})};export{y as default};