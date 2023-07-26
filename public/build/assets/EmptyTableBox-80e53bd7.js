import{j as e,a,q as b,R as v,W as y,r as m,F as x,d as N}from"./app-eece0f73.js";const f=({className:n="w-6 h-6",stroke:c="black",fill:s="none"})=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:s,viewBox:"0 0 24 24",strokeWidth:1.5,stroke:c,className:n,children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),w=({id:n,children:c,title:s,className:t=""})=>e("dialog",{id:n,className:"modal",children:a("form",{method:"dialog",className:`modal-box ${t}`,children:[e("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",children:"✕"}),e("h3",{className:"font-bold text-lg",children:s}),e("div",{children:c})]})}),E=({id:n,routeName:c="organization"})=>{const{searchData:s=[],ziggy:t}=b().props,[r,d]=v.useState("");console.log({searchData:s});const{put:u}=y(),[l,i]=m.useState({q:(t==null?void 0:t.query.q)??"",searchBy:(t==null?void 0:t.query.searchBy)??"name",collection:(t==null?void 0:t.query.collection)??"instructor"}),p=()=>{document.getElementById(`AttachEntityModal-${c}`).close(),u(route(c+".attachEntity",{id:n,entityId:r,entityType:(t==null?void 0:t.query.collection)??""}))};return m.useEffect(()=>{s.length>0&&document.getElementById(`AttachEntityModal-${c}`).showModal()},[]),e(w,{id:`AttachEntityModal-${c}`,title:`Select ${l.collection}`,className:"w-11/12 max-w-5xl",children:r?a("div",{className:"flex flex-col w-full py-10 px-10",children:[a("h1",{children:["Do you want to Attach this ",l.collection,"?"]}),a("div",{className:"w-full flex justify-end",children:[e("div",{onClick:p,className:"btn btn-success m-2 cursor-pointer",children:"YES!"}),e("div",{onClick:()=>d(""),className:"btn btn-ghost my-2 cursor-pointer",children:"CANCEL"})]})]}):a(x,{children:[a("div",{className:"join my-5 border-2 border-primary",children:[a("div",{className:"input-group flex-r-c",children:[e("input",{value:l.q,onChange:o=>i({...l,q:o.target.value}),className:"input input-bordered join-item",placeholder:"Search..."}),e("div",{onClick:()=>i({...l,q:""}),className:"btn bg-base-100 hover:bg-base-100 join-item",children:e(f,{})})]}),a("select",{className:"select select-bordered join-item capitalize",value:l.searchBy,onChange:o=>i({...l,searchBy:o.target.value}),children:[e("option",{disabled:!0,selected:!0,value:"all",children:"Search By"}),a("option",{value:"name",className:"capitalize",children:[l.collection," name"]}),a("option",{value:"id",className:"capitalize",children:[" ",l.collection," ID"]})]}),e("div",{className:"indicator ",children:e(N,{href:route(c+".show",{id:n,searchBy:l.searchBy,collection:l.collection,q:l.q}),className:"btn join-item btn-primary",children:"Search"})})]}),e("div",{className:"w-full bg-base-200 my-5",children:s.length>0?e("div",{className:"overflow-y-auto",style:{maxHeight:350},children:s.map(o=>{var h;return a("div",{className:"flex items-center space-x-3 py-6 px-5 hover:bg-base-300 cursor-pointer",onClick:()=>d(o.id),children:[((h=t==null?void 0:t.query)==null?void 0:h.collection)=="organization"&&e("div",{className:"avatar",children:e("div",{className:"mask mask-squircle w-10 h-10",children:e("img",{src:o.logo??"/organization.png",alt:"Avatar"})})}),e("div",{className:"font-bold",children:o.name})]},o.id)})}):e("div",{className:"h-full flex-c-c"})})]})})},q=({text:n="Not Added"})=>e("div",{className:"h-32 flex-c-c bg-base-100 shadow-md",children:e("h1",{className:"text-gray-400 font-extrabold text-lg",children:n})});export{E as A,q as E,w as M};