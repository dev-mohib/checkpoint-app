import{j as e,r as i,a as n,d as s,F as c}from"./app-fa08ede2.js";const o=a=>e("img",{...a,src:"https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/external-dashboard-user-interface-tanah-basah-detailed-outline-tanah-basah.png",alt:"external-dashboard-user-interface-tanah-basah-detailed-outline-tanah-basah"}),d=a=>e("img",{...a,src:"https://img.icons8.com/dotty/80/mind-map.png",alt:"parallel-tasks"}),h=a=>e("img",{...a,src:"https://img.icons8.com/ios/50/teacher.png",alt:"teacher"}),m=a=>e("img",{...a,src:"https://img.icons8.com/ios/50/student-male--v1.png",alt:"student-male--v1"}),b=a=>e("img",{...a,src:"https://img.icons8.com/ios/50/test-passed--v1.png",alt:"test-passed--v1"}),u=a=>e("img",{...a,src:"https://img.icons8.com/fluency/48/graduation-cap.png",alt:"graduation-cap"}),p=a=>e("img",{...a,src:"https://img.icons8.com/external-others-zufarizal-robiyanto/64/external-dark-mutuline-weather-others-zufarizal-robiyanto.png",alt:"external-dark-mutuline-weather-others-zufarizal-robiyanto"}),g=a=>e("img",{...a,src:"https://img.icons8.com/external-global-made-by-made/50/external-Light-ui-and-ux-global-made-by-made-2.png",alt:"idea"}),N=a=>e("img",{...a,src:"https://img.icons8.com/windows/96/user.png",alt:"user"}),x=a=>e("img",{...a,src:"https://img.icons8.com/ios/50/appointment-reminders--v1.png",alt:"appointment-reminders--v1"}),w=a=>e("img",{...a,src:"https://img.icons8.com/external-jumpicon-line-ayub-irawan/64/external-_18-user-interface-jumpicon-(line)-jumpicon-line-ayub-irawan.png",alt:"external-_18-user-interface-jumpicon-(line)-jumpicon-line-ayub-irawan"}),f=({page:a="Checkpoint"})=>{const[r,t]=i.useState(!1);return e("div",{className:"fixed bg-purple-300 Navbar z-40",children:n("div",{className:"navbar bg-white",children:[e("div",{className:"ml-4 cursor-pointer mr-1",children:e("label",{htmlFor:"dashboardSideBar",className:"drawer-button lg:hidden",children:e(w,{className:"w-7 h-7 cursor-pointer"})})}),e("div",{className:"flex",children:e("a",{className:"normal-case text-xl font-extrabold",children:a.toLocaleUpperCase()})}),n("div",{className:"flex-grow justify-end",children:[e("label",{onClick:()=>t(l=>!l),className:"btn btn-ghost btn-circle avatar flex flex-row justify-center items-center",children:r?e(g,{className:"w-7 rounded-full h-7"}):e(p,{className:"w-7 rounded-full h-7"})}),n("div",{className:"dropdown dropdown-end",children:[e("label",{tabIndex:0,className:"btn btn-ghost btn-circle",children:n("div",{className:"indicator",children:[e(x,{className:"w-7 h-7"}),e("span",{className:"badge badge-sm indicator-item",children:"8"})]})}),e("div",{tabIndex:0,className:"mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow",children:n("div",{className:"card-body",children:[e("span",{className:"font-bold text-lg",children:"8 Items"}),e("span",{className:"text-info",children:"Subtotal: $999"}),e("div",{className:"card-actions",children:e("button",{className:"btn btn-primary btn-block",children:"View cart"})})]})})]}),n("div",{className:"dropdown dropdown-end",children:[e("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar flex flex-row justify-center items-center",children:e(N,{className:"w-7 rounded-full h-7"})}),n("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:[e("li",{children:e(s,{href:route("profile.edit"),className:"justify-between",children:"Profile"})}),e("li",{children:e("a",{children:"Settings"})}),e("li",{children:e(s,{href:route("logout"),method:"post",children:"Logout"})})]})]})]})]})})},v=({page:a})=>e("div",{className:"fixed h-screen z-50",children:n("div",{className:"drawer lg:drawer-open",children:[e("input",{id:"dashboardSideBar",type:"checkbox",className:"drawer-toggle"}),n("div",{className:"drawer-side p-0",children:[e("label",{htmlFor:"dashboardSideBar",className:"drawer-overlay"}),n("div",{className:"w-72 h-full bg-white",children:[n("div",{className:"pt-3 flex items-center pl-5 w-full ",children:[e(u,{className:"w-12 h-12"}),e("h1",{className:"font-sans text-xl",children:"Checkpoint"})]}),n("ul",{className:"menu w-full rounded-none px-0 text-xl mt-14",children:[e("li",{className:`${a=="dashboard"?"border-l-4 border-l-purple-600 bg-base-200":""}`,children:n(s,{href:route("dashboard"),children:[e(o,{className:"w-6 h-6"}),"Dashboard"]})}),e("li",{className:`${a=="organization"?"border-l-4 border-l-purple-600 bg-base-200":""}`,children:n(s,{href:route("organization.index"),children:[e(d,{className:"w-6 h-6"}),"Oraganizations"]})}),e("li",{className:`${a=="instructor"?"border-l-4 border-l-purple-600 bg-base-200":""}`,children:n(s,{href:route("instructor.index"),children:[e(h,{className:"w-6 h-6"}),"Instructors"]})}),e("li",{className:`${a=="student"?"border-l-4 border-l-purple-600 bg-base-200":""}`,children:n(s,{href:route("student.index"),children:[e(m,{className:"w-6 h-6"}),"Students"]})}),e("li",{className:`${a=="checkpoint"?"border-l-4 border-l-purple-600 bg-base-200":""}`,children:n(s,{href:route("checkpoint.index"),children:[e(b,{className:"w-6 h-6"}),"Checkpoints"]})})]})]})]})]})}),y=({children:a,page:r})=>e(c,{children:n("div",{className:"flex justify-between w-screen mainLayout",children:[e("div",{className:"Sidebar",children:e(v,{page:r})}),n("div",{className:"Navbar",children:[e(f,{page:r}),e("div",{className:"px-5 bg-base-200 min-h-screen pt-20",children:a})]})]})}),k=y;export{k as A};