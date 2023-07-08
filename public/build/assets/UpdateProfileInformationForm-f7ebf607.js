import{q as v,W as g,a,j as e,d as x}from"./app-4885bbf9.js";import{T as m,I as l}from"./TextInput-1277f51f.js";import{I as o}from"./InputLabel-30105e25.js";import{P as y}from"./PrimaryButton-9b0d9759.js";import{$ as N}from"./transition-4a79ec33.js";function P({mustVerifyEmail:c,status:d,className:u=""}){const r=v().props.auth.user,{data:i,setData:s,patch:f,errors:n,processing:h,recentlySuccessful:p}=g({name:r.name,email:r.email});return a("section",{className:u,children:[a("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information 2"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),a("form",{onSubmit:t=>{t.preventDefault(),f(route("profile.update"))},className:"mt-6 space-y-6",children:[a("div",{children:[e(o,{htmlFor:"name",value:"Name"}),e(m,{id:"name",className:"mt-1 block w-full",value:i.name,onChange:t=>s("name",t.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e(l,{className:"mt-2",message:n.name})]}),a("div",{children:[e(o,{htmlFor:"email",value:"Email"}),e(m,{id:"email",type:"email",className:"mt-1 block w-full",value:i.email,onChange:t=>s("email",t.target.value),required:!0,autoComplete:"username"}),e(l,{className:"mt-2",message:n.email})]}),c&&r.email_verified_at===null&&a("div",{children:[a("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e(x,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),d==="verification-link-sent"&&e("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),a("div",{className:"flex items-center gap-4",children:[e(y,{disabled:h,children:"Save"}),e(N,{show:p,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{P as default};