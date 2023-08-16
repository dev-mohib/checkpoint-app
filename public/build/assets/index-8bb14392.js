import{R as p,q as f,W as v,a as l,j as e,b as N,F as c}from"./app-ddf6f56e.js";import{E as d}from"./ErrorMessage-d385f61f.js";import{A as y,B as g}from"./AppLayout-58c4514d.js";import"./react-filepond.esm-5e7266d8.js";const k=()=>{p.useState(Date.now()),p.useState([]);const{checkpoint:t}=f().props,b={name:t.name,description:t.description,validity_period:t.validity_period,type:t.type},m=localStorage.getItem("rememberCheckpoint"),{data:r,setData:n,post:u,errors:s}=v(m?JSON.parse(m):b),h=a=>{a.preventDefault(),u(route("checkpoint.store")),localStorage.removeItem("rememberCheckpoint")},i=({label:a})=>l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"instructorInput",children:a}),e("input",{type:"text",id:"name",name:"name",placeholder:"Filled by instrtuctor",className:"input border-2 border-base-200 input-ghost w-full input-disabled"})]}),o=({label:a})=>e("div",{className:"mb-6",children:l("div",{className:"form-control w-full max-w-xs",children:[e("label",{className:"label font-bold",children:l("span",{className:" font-normal",children:[l("span",{className:"font-bold ",children:[a,": "]}),"(Uploaded by Instructor)"]})}),e("input",{type:"file",className:"file-input file-input-bordered w-full max-w-xs file-input-disabled",placeholder:"Not Allowed"})]})});return l(y,{children:[e(N,{title:"Create Student"}),e(g,{list:[{title:"Home",href:"/dashboard"},{title:"Checkpoint",href:"/checkpoint"},{title:"Edit",href:null}]}),e("div",{className:"w-full mx-auto mt-8",children:l("div",{className:"bg-base-100 p-8 rounded-lg shadow-md",children:[e("h2",{className:"text-2xl font-semibold mb-6",children:"Edit Checkpoint"}),l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"name",children:"Name"}),e(d,{message:s.name}),e("input",{type:"text",id:"name",name:"name",placeholder:"Human Computer Interaction",className:"input border-2 border-base-200 input-ghost w-full",value:r.name,onChange:a=>n("name",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"description",children:"Description"}),e(d,{message:s.description}),e("textarea",{id:"description",name:"description",rows:2,placeholder:"Computer Science Subject",className:"input border-2 border-base-200 input-ghost w-full",value:r.description,onChange:a=>n("description",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"Type",children:"Type"}),e(d,{message:s.type}),l("select",{className:"select select-bordered w-full max-w-xs",onChange:a=>n("type",a.target.value),children:[e("option",{disabled:!0,children:"Select Checkpoint Type"}),e("option",{selected:t.type=="General",value:"General",children:"General"}),e("option",{selected:t.type=="Grade Based",value:"Grade Based",children:"Grade Based"}),e("option",{selected:t.type=="Completion",value:"Completion",children:"Completion"})]})]}),r.type=="General"?l(c,{children:[e(i,{label:"Instructor Input"}),e(i,{label:"Instructor Recommendation"}),e(o,{label:"Images"})]}):r.type=="Grade Based"?l(c,{children:[e(i,{label:"Instructor Input"}),e(i,{label:"Instructor Recommendation"}),e(i,{label:"Grade Points"}),e(o,{label:"Images"})]}):r.type=="Completion"?l(c,{children:[l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"validity_period",children:"Validity Period"}),e(d,{message:s.validity_period}),l("select",{className:"select select-bordered w-full max-w-xs",onChange:a=>n("validity_period",a.target.value),children:[e("option",{selected:!0,disabled:!0,children:"Select Validity Period"}),e("option",{value:"1 Year",children:"1 Year"}),e("option",{value:"2 Years",children:"2 Years"}),e("option",{value:"3 Years",children:"3 Years"}),e("option",{value:"Permanent",children:"Permanent"})]})]}),e(o,{label:"Badge"}),e(o,{label:"Certificate"})]}):null,e("div",{className:"flex justify-end",children:e("button",{className:"btn btn-primary",onClick:h,children:"Submit"})})]})})]})};export{k as default};
