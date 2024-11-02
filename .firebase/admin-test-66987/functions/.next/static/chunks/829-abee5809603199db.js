"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[829],{8634:(e,t,r)=>{r.d(t,{I:()=>i,db:()=>l});var a=r(5236),s=r(9842),n=r(5735);let d=(0,a.ZF)({apiKey:"AIzaSyD9FxrF7RngtBg31IbadwWXOs-o3qP-DuE",authDomain:"admin-test-66987.firebaseapp.com",projectId:"admin-test-66987",storageBucket:"admin-test-66987.appspot.com",messagingSenderId:"54906517812",appId:"1:54906517812:web:21cd644bc5507a3ed88d61",measurementId:"G-HL2PC41X5D"}),i=(0,n.v0)(d),l=(0,s.ad)(d)},9829:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var a=r(7437),s=r(2265),n=r(9842),d=r(8634),i=r(9733),l=r(7209),o=r(402),c=r(8185),u=r(7992);let m=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let h=(0,s.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:n=2,absoluteStrokeWidth:d,className:i="",children:l,iconNode:o,...c}=e;return(0,s.createElement)("svg",{ref:t,...p,width:a,height:a,stroke:r,strokeWidth:d?24*Number(n)/Number(a):n,className:f("lucide",i),...c},[...o.map(e=>{let[t,r]=e;return(0,s.createElement)(t,r)}),...Array.isArray(l)?l:[l]])}),x=(e,t)=>{let r=(0,s.forwardRef)((r,a)=>{let{className:n,...d}=r;return(0,s.createElement)(h,{ref:a,iconNode:t,className:f("lucide-".concat(m(e)),n),...d})});return r.displayName="".concat(e),r},g=x("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),v=x("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),y=x("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),b=x("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),j=x("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);function N(){let[e,t]=(0,s.useState)([]),[r,m]=(0,s.useState)(""),[f,p]=(0,s.useState)(!0),[h,x]=(0,s.useState)(null),[N,w]=(0,s.useState)(!1);(0,s.useEffect)(()=>{k()},[]);let k=async()=>{p(!0),x(null);try{let e=(0,n.hJ)(d.db,"country"),r=(0,n.IO)(e),a=(await (0,n.PL)(r)).docs.map(e=>({id:e.id,name:e.data().name,isEditing:!1}));t(a)}catch(e){console.error("Error fetching locations: ",e),x("Failed to fetch locations. Please try again later.")}finally{p(!1)}},C=async e=>{e.preventDefault(),w(!0),x(null);try{await (0,n.ET)((0,n.hJ)(d.db,"country"),{name:r}),m(""),k()}catch(e){console.error("Error adding document: ",e),x("Failed to add location. Please try again.")}finally{w(!1)}},E=r=>{t(e.map(e=>e.id===r?{...e,isEditing:!0}:e))},z=async(r,a)=>{x(null);try{let s=(0,n.JU)(d.db,"country",r);await (0,n.r7)(s,{name:a}),t(e.map(e=>e.id===r?{...e,name:a,isEditing:!1}:e))}catch(e){console.error("Error updating document: ",e),x("Failed to update location. Please try again.")}},R=async r=>{x(null);try{await (0,n.oe)((0,n.JU)(d.db,"country",r)),t(e.filter(e=>e.id!==r))}catch(e){console.error("Error deleting document: ",e),x("Failed to delete location. Please try again.")}},A=r=>{t(e.map(e=>e.id===r?{...e,isEditing:!1}:e))};return(0,a.jsxs)("div",{className:"container mx-auto p-4",children:[(0,a.jsxs)(c.Zb,{className:"mb-8",children:[(0,a.jsx)(c.Ol,{children:(0,a.jsx)(c.ll,{children:"Add New Country"})}),(0,a.jsx)(c.aY,{children:(0,a.jsxs)("form",{onSubmit:C,className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(o._,{htmlFor:"name",children:"Country Name"}),(0,a.jsx)(l.I,{type:"text",id:"name",value:r,onChange:e=>m(e.target.value),required:!0,placeholder:"Enter country name"})]}),(0,a.jsx)(i.z,{type:"submit",disabled:N,children:N?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{className:"mr-2 h-4 w-4 animate-spin"}),"Adding..."]}):"Add Country"})]})})]}),h&&(0,a.jsx)(u.bZ,{variant:"destructive",className:"mb-4",children:(0,a.jsx)(u.X,{children:h})}),(0,a.jsxs)(c.Zb,{children:[(0,a.jsx)(c.Ol,{children:(0,a.jsx)(c.ll,{children:"Countries List"})}),(0,a.jsx)(c.aY,{children:f?(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(g,{className:"h-8 w-8 animate-spin"})}):e.length>0?(0,a.jsx)("ul",{className:"space-y-2",children:e.map(r=>(0,a.jsxs)("li",{className:"flex items-center justify-between",children:[r.isEditing?(0,a.jsx)(l.I,{type:"text",value:r.name,onChange:a=>t(e.map(e=>e.id===r.id?{...e,name:a.target.value}:e)),className:"mr-2"}):(0,a.jsx)("span",{className:"text-lg",children:r.name}),(0,a.jsx)("div",{children:r.isEditing?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.z,{onClick:()=>z(r.id,r.name),size:"sm",className:"mr-2",children:(0,a.jsx)(v,{className:"h-4 w-4"})}),(0,a.jsx)(i.z,{onClick:()=>A(r.id),variant:"outline",size:"sm",children:(0,a.jsx)(y,{className:"h-4 w-4"})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.z,{onClick:()=>E(r.id),variant:"outline",size:"sm",className:"mr-2",children:(0,a.jsx)(b,{className:"h-4 w-4"})}),(0,a.jsx)(i.z,{onClick:()=>R(r.id),variant:"destructive",size:"sm",children:(0,a.jsx)(j,{className:"h-4 w-4"})})]})})]},r.id))}):(0,a.jsx)("p",{className:"text-center text-muted-foreground",children:"No countries added yet."})})]})]})}},7992:(e,t,r)=>{r.d(t,{X:()=>o,bZ:()=>l});var a=r(7437),s=r(2265),n=r(2218),d=r(9354);let i=(0,n.j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),l=s.forwardRef((e,t)=>{let{className:r,variant:s,...n}=e;return(0,a.jsx)("div",{ref:t,role:"alert",className:(0,d.cn)(i({variant:s}),r),...n})});l.displayName="Alert",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h5",{ref:t,className:(0,d.cn)("mb-1 font-medium leading-none tracking-tight",r),...s})}).displayName="AlertTitle";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,d.cn)("text-sm [&_p]:leading-relaxed",r),...s})});o.displayName="AlertDescription"},9733:(e,t,r)=>{r.d(t,{z:()=>o});var a=r(7437),s=r(2265),n=r(2974),d=r(2218),i=r(9354);let l=(0,d.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef((e,t)=>{let{className:r,variant:s,size:d,asChild:o=!1,...c}=e,u=o?n.g7:"button";return(0,a.jsx)(u,{className:(0,i.cn)(l({variant:s,size:d,className:r})),ref:t,...c})});o.displayName="Button"},8185:(e,t,r)=>{r.d(t,{Ol:()=>i,SZ:()=>o,Zb:()=>d,aY:()=>c,eW:()=>u,ll:()=>l});var a=r(7437),s=r(2265),n=r(9354);let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...s})});d.displayName="Card";let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...s})});i.displayName="CardHeader";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",r),...s})});l.displayName="CardTitle";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r),...s})});o.displayName="CardDescription";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",r),...s})});c.displayName="CardContent";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r),...s})});u.displayName="CardFooter"},7209:(e,t,r)=>{r.d(t,{I:()=>d});var a=r(7437),s=r(2265),n=r(9354);let d=s.forwardRef((e,t)=>{let{className:r,type:s,...d}=e;return(0,a.jsx)("input",{type:s,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...d})});d.displayName="Input"},402:(e,t,r)=>{r.d(t,{_:()=>o});var a=r(7437),s=r(2265),n=r(7200),d=r(2218),i=r(9354);let l=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.f,{ref:t,className:(0,i.cn)(l(),r),...s})});o.displayName=n.f.displayName},9354:(e,t,r)=>{r.d(t,{cn:()=>n});var a=r(4839),s=r(6164);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}}]);