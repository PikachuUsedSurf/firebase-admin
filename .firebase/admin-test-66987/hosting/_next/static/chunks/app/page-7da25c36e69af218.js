(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2184:(e,r,t)=>{Promise.resolve().then(t.bind(t,6304))},6304:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>_});var a=t(7437),s=t(2265),n=t(9842);let d=(0,t(5236).ZF)({apiKey:"AIzaSyD9FxrF7RngtBg31IbadwWXOs-o3qP-DuE",authDomain:"admin-test-66987.firebaseapp.com",projectId:"admin-test-66987",storageBucket:"admin-test-66987.appspot.com",messagingSenderId:"54906517812",appId:"1:54906517812:web:21cd644bc5507a3ed88d61",measurementId:"G-HL2PC41X5D"}),l=(0,n.ad)(d);var i=t(2974),o=t(2218),c=t(4839),u=t(6164);function m(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,u.m6)((0,c.W)(r))}let f=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),p=s.forwardRef((e,r)=>{let{className:t,variant:s,size:n,asChild:d=!1,...l}=e,o=d?i.g7:"button";return(0,a.jsx)(o,{className:m(f({variant:s,size:n,className:t})),ref:r,...l})});p.displayName="Button";let x=s.forwardRef((e,r)=>{let{className:t,type:s,...n}=e;return(0,a.jsx)("input",{type:s,className:m("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...n})});x.displayName="Input";var g=t(7200);let h=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),v=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(g.f,{ref:r,className:m(h(),t),...s})});v.displayName=g.f.displayName;let y=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:m("rounded-xl border bg-card text-card-foreground shadow",t),...s})});y.displayName="Card";let b=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:m("flex flex-col space-y-1.5 p-6",t),...s})});b.displayName="CardHeader";let N=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("h3",{ref:r,className:m("font-semibold leading-none tracking-tight",t),...s})});N.displayName="CardTitle",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("p",{ref:r,className:m("text-sm text-muted-foreground",t),...s})}).displayName="CardDescription";let j=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:m("p-6 pt-0",t),...s})});j.displayName="CardContent",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:m("flex items-center p-6 pt-0",t),...s})}).displayName="CardFooter";let w=(0,o.j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),C=s.forwardRef((e,r)=>{let{className:t,variant:s,...n}=e;return(0,a.jsx)("div",{ref:r,role:"alert",className:m(w({variant:s}),t),...n})});C.displayName="Alert",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("h5",{ref:r,className:m("mb-1 font-medium leading-none tracking-tight",t),...s})}).displayName="AlertTitle";let R=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:m("text-sm [&_p]:leading-relaxed",t),...s})});R.displayName="AlertDescription";var k=t(7087);function _(){let[e,r]=(0,s.useState)([]),[t,d]=(0,s.useState)(""),[i,o]=(0,s.useState)(!0),[c,u]=(0,s.useState)(null),[m,f]=(0,s.useState)(!1);(0,s.useEffect)(()=>{g()},[]);let g=async()=>{o(!0),u(null);try{let e=(0,n.hJ)(l,"country"),t=(0,n.IO)(e),a=(await (0,n.PL)(t)).docs.map(e=>({id:e.id,name:e.data().name}));r(a)}catch(e){console.error("Error fetching locations: ",e),u("Failed to fetch locations. Please try again later.")}finally{o(!1)}},h=async e=>{e.preventDefault(),f(!0),u(null);try{await (0,n.ET)((0,n.hJ)(l,"country"),{name:t}),d(""),g()}catch(e){console.error("Error adding document: ",e),u("Failed to add location. Please try again.")}finally{f(!1)}};return(0,a.jsxs)("div",{className:"container mx-auto p-4",children:[(0,a.jsxs)(y,{className:"mb-8",children:[(0,a.jsx)(b,{children:(0,a.jsx)(N,{children:"Add New Country"})}),(0,a.jsx)(j,{children:(0,a.jsxs)("form",{onSubmit:h,className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(v,{htmlFor:"name",children:"Country Name"}),(0,a.jsx)(x,{type:"text",id:"name",value:t,onChange:e=>d(e.target.value),required:!0,placeholder:"Enter country name"})]}),(0,a.jsx)(p,{type:"submit",disabled:m,children:m?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(k.Z,{className:"mr-2 h-4 w-4 animate-spin"}),"Adding..."]}):"Add Country"})]})})]}),c&&(0,a.jsx)(C,{variant:"destructive",className:"mb-4",children:(0,a.jsx)(R,{children:c})}),(0,a.jsxs)(y,{children:[(0,a.jsx)(b,{children:(0,a.jsx)(N,{children:"Countries List"})}),(0,a.jsx)(j,{children:i?(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(k.Z,{className:"h-8 w-8 animate-spin"})}):e.length>0?(0,a.jsx)("ul",{className:"space-y-2",children:e.map(e=>(0,a.jsx)("li",{className:"text-lg",children:e.name},e.id))}):(0,a.jsx)("p",{className:"text-center text-muted-foreground",children:"No countries added yet."})})]})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[358,382,130,215,744],()=>r(2184)),_N_E=e.O()}]);