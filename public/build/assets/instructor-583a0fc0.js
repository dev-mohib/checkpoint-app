import{R as c,r as G,q as B,W as F,a as l,j as e,b as S}from"./app-ddf6f56e.js";import{E as d}from"./ErrorMessage-d385f61f.js";import{A as D,B as M}from"./AppLayout-58c4514d.js";import{X as $}from"./xmark-a8002054.js";import{F as p}from"./react-filepond.esm-5e7266d8.js";const R=()=>{const[o]=c.useState(Date.now()),[h,g]=G.useState(1),[f,v]=c.useState([]),[N,k]=c.useState([]),[y,I]=c.useState([]),{checkpoint:t}=B().props;c.useState(t.images??[]);const _={id:t.id,name:t.name,description:t.description,validity_period:t.validity_period,type:t.type,badge:t.badge,certificate:t.certificate,achieved_gradepoints:t.achieved_gradepoints,instructor_recommendation:t.instructor_recommendation,instructor_input:t.instructor_input,images:t.images.map(a=>({src:a,action:null}))},u=localStorage.getItem("rememberCheckpoint"),{data:i,setData:r,put:C,errors:n}=F(u?JSON.parse(u):_),w=a=>{a.preventDefault(),console.log({data:i}),C(route("checkpoint.edit")),localStorage.removeItem("rememberCheckpoint")},b=({label:a,placeholder:s="Not Allowed"})=>l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"instructorInput",children:a}),e("input",{type:"text",name:"name",disabled:!0,placeholder:s,className:"input border-2 border-base-200 input-ghost w-full input-disabled"})]});return l(D,{children:[e(S,{title:"Create Student"}),e(M,{list:[{title:"Home",href:"/dashboard"},{title:"Checkpoint",href:"/checkpoint"},{title:"Edit",href:null}]}),e("div",{className:"w-full mx-auto mt-8",children:l("div",{className:"bg-base-100 p-8 rounded-lg shadow-md",children:[e("h2",{className:"text-2xl font-semibold mb-6",children:"Edit Checkpoint (Instructor)"}),e("div",{className:"mb-6",children:e(b,{placeholder:i.name,label:"Name"})}),e("div",{className:"mb-6",children:e(b,{placeholder:i.description,label:"Description"})}),l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"Type",children:"Type"}),e(d,{message:n.type}),l("select",{className:"select select-disabled select-bordered w-full max-w-xs",onChange:a=>r("type",a.target.value),children:[e("option",{disabled:!0,children:"Select Checkpoint Type"}),e("option",{disabled:!0,selected:t.type=="General",value:"General",children:"General"}),e("option",{disabled:!0,selected:t.type=="Grade Based",value:"Grade Based",children:"Grade Based"}),e("option",{disabled:!0,selected:t.type=="Completion",value:"Completion",children:"Completion"})]})]}),l("div",{children:[e("label",{className:"block font-semibold mb-2",children:"Images"}),e("div",{className:"flex",children:i.images.map((a,s)=>!a.action&&l("div",{onClick:()=>{r("images",i.images.map((m,x)=>({src:m.src,action:s==x?"remove":m.action})))},className:"m-2 relative",children:[e("div",{className:"absolute right-2 top-2 cursor-pointer hover:opacity-60",children:e($,{})}),e("img",{src:`/storage/checkpoint-image/${a.src}`,alt:a.src,className:"h-28 w-28"})]},s))}),e("label",{className:"block font-semibold mb-2",htmlFor:"checkpoint-image",children:"Upload More Images"}),e(p,{files:N,onupdatefiles:k,allowMultiple:!0,maxFiles:5-(t==null?void 0:t.images.length),server:`/api/upload/checkpoint-image?key=IMG-${o}-${h}`,name:"checkpoint-image",labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',onprocessfile:(a,s)=>{!a&&i.images.length<=5&&(r("images",[...i.images,{src:"IMG-"+o+"-"+h+"."+s.fileExtension,action:"add"}]),g(m=>m+1))}})]}),l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"instructor_input",children:"Instructor Input"}),e(d,{message:n.name}),e("input",{type:"text",id:"instructor_input",name:"instructor_input",placeholder:"Human Computer Interaction",className:"input border-2 border-base-200 input-ghost w-full",value:i.instructor_input,onChange:a=>r("instructor_input",a.target.value)})]}),l("div",{className:"mb-6",children:[e("label",{className:"block font-semibold mb-2",htmlFor:"instructor_recommendation",children:"Instructor Recommendation"}),e(d,{message:n.instructor_recommendation}),e("input",{type:"text",id:"name",name:"instructor_recommendation",placeholder:"Instructor Recommendation",className:"input border-2 border-base-200 input-ghost w-full",value:i.instructor_recommendation,onChange:a=>r("instructor_recommendation",a.target.value)})]}),l("div",{className:`mb-6 ${i.type!=="Grade Based"&&"hidden"}`,children:[e("label",{className:"block font-semibold mb-2",htmlFor:"grade_achieve",children:"Achieved Gradepoints"}),e(d,{message:n.achieved_gradepoints}),e("input",{type:"text",id:"grade_achieve",name:"grade_achieve",placeholder:"Achieved Gradepoints",className:"input border-2 border-base-200 input-ghost w-full",value:i.achieved_gradepoints,onChange:a=>r("achieved_gradepoints",a.target.value)})]}),l("div",{className:`${i.type!=="Completion"&&"hidden"}`,children:[l("div",{className:`mb-6 ${i.type!=="Completion"&&"hidden"}`,children:[e("label",{className:"block font-semibold mb-2",htmlFor:"validity_period",children:"Validity Period"}),e(d,{message:n.validity_period}),l("select",{className:"select select-bordered w-full max-w-xs",onChange:a=>r("validity_period",a.target.value),children:[e("option",{selected:!0,disabled:!0,children:"Select Validity Period"}),e("option",{value:"1 Year",children:"1 Year"}),e("option",{value:"2 Years",children:"2 Years"}),e("option",{value:"3 Years",children:"3 Years"}),e("option",{value:"Permanent",children:"Permanent"})]})]}),i.badge&&e("div",{className:"m-2 relative w-36",children:e("img",{src:`/storage/checkpoint-badge/${t.badge}`,alt:"Badge Image",className:"h-36 w-36"})}),e("label",{className:"block font-semibold mb-2",htmlFor:"validity_period",children:"Change Badge Image"}),e(p,{files:f,onupdatefiles:v,allowMultiple:!1,server:`/api/filepond/checkpoint-badge??id=IMG-${o}`,name:"checkpoint-badge",labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',onprocessfile:(a,s)=>{a||r("badge","IMG-"+o+"."+s.fileExtension)}}),i.certificate&&e("div",{className:"m-2 relative w-36",children:e("img",{src:`/storage/checkpoint-certificate/${t.certificate}`,alt:"Badge Certificate",className:"h-36 w-36"})}),e("label",{className:"block font-semibold mb-2",htmlFor:"validity_period",children:"Change Certificate Image"}),e(p,{files:y,onupdatefiles:I,allowMultiple:!1,acceptedFileTypes:["Image/*"],server:`/api/filepond/checkpoint-certificate??id=IMG-${o}`,name:"checkpoint-certificate",labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',onprocessfile:(a,s)=>{a||r("certificate","IMG-"+o+"."+s.fileExtension)}})]}),e("div",{className:"flex justify-end",children:e("button",{className:"btn btn-primary mt-2",onClick:w,children:"Save"})})]})})]})};export{R as default};
