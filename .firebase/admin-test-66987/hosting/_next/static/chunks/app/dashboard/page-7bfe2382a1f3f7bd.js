(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{7737:(e,t,s)=>{Promise.resolve().then(s.bind(s,1789))},6463:(e,t,s)=>{"use strict";var u=s(1169);s.o(u,"useRouter")&&s.d(t,{useRouter:function(){return u.useRouter}})},8136:(e,t,s)=>{"use strict";s.d(t,{AuthProvider:()=>i,a:()=>o});var u=s(7437),r=s(2265),l=s(5735),n=s(8634);let a=(0,r.createContext)({user:null,loading:!0}),o=()=>(0,r.useContext)(a);function i(e){let{children:t}=e,[s,o]=(0,r.useState)(null),[i,c]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let e=(0,l.Aj)(n.I,e=>{o(e),c(!1)});return()=>e()},[]),(0,u.jsx)(a.Provider,{value:{user:s,loading:i},children:t})}},1789:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var u=s(7437),r=s(2265),l=s(6463),n=s(8136),a=s(9733),o=s(9829),i=s(8634);function c(){let{user:e,loading:t}=(0,n.a)(),s=(0,l.useRouter)();return((0,r.useEffect)(()=>{t||e||s.push("/login")},[e,t,s]),t)?(0,u.jsx)("div",{children:"Loading..."}):e?(0,u.jsxs)("div",{className:"p-4",children:[(0,u.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Welcome to the Dashboard"}),(0,u.jsxs)("p",{children:["You are logged in as: ",e.email]}),(0,u.jsx)(a.z,{onClick:()=>{i.I.signOut(),s.push("/login")},className:"mt-4",children:"Log Out"}),(0,u.jsx)(o.default,{})]}):null}}},e=>{var t=t=>e(e.s=t);e.O(0,[358,237,537,4,829,130,215,744],()=>t(7737)),_N_E=e.O()}]);