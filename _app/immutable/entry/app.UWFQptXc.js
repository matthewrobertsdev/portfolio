import{s as q,a as B,p as h,g as U,i as E,f as g,q as j,r as M,e as W,c as z,b as F,o as D,u as d,t as G,d as H,j as J,v as I,w as v,x as K}from"../chunks/scheduler.GqJZMtd-.js";import{S as Q,i as X,b as w,e as L,t as b,g as y,c as k,a as O,m as R,d as P}from"../chunks/index.q3r7dXMJ.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},T={},p=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");s=Promise.all(n.map(t=>{if(t=Z(t,i),t in T)return;T[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!i)for(let u=c.length-1;u>=0;u--){const m=c[u];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Y,r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r)return new Promise((u,m)=>{o.addEventListener("load",u),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return s.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},re={};function $(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=v(s,c(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),E(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){y();const l=e;w(l.$$.fragment,1,0,()=>{P(l,1)}),L()}s?(e=v(s,c(t)),t[12](e),k(e.$$.fragment),b(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[12](null),e&&P(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=v(s,c(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),E(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){y();const l=e;w(l.$$.fragment,1,0,()=>{P(l,1)}),L()}s?(e=v(s,c(t)),t[11](e),k(e.$$.fragment),b(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[11](null),e&&P(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function c(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=v(s,c(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),E(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){y();const l=e;w(l.$$.fragment,1,0,()=>{P(l,1)}),L()}s?(e=v(s,c(t)),t[10](e),k(e.$$.fragment),b(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[10](null),e&&P(e,t)}}}function V(a){let e,n=a[6]&&A(a);return{c(){e=W("div"),n&&n.c(),this.h()},l(i){e=z(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=F(e);n&&n.l(s),s.forEach(g),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,s){E(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function A(a){let e;return{c(){e=G(a[7])},l(n){e=H(n,a[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&J(e,n[7])},d(n){n&&g(e)}}}function te(a){let e,n,i,s,c;const t=[x,$],r=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=r[e]=t[e](a);let _=a[5]&&V(a);return{c(){n.c(),i=B(),_&&_.c(),s=h()},l(o){n.l(o),i=U(o),_&&_.l(o),s=h()},m(o,u){r[e].m(o,u),E(o,i,u),_&&_.m(o,u),E(o,s,u),c=!0},p(o,[u]){let m=e;e=l(o),e===m?r[e].p(o,u):(y(),w(r[m],1,1,()=>{r[m]=null}),L(),n=r[e],n?n.p(o,u):(n=r[e]=t[e](o),n.c()),b(n,1),n.m(i.parentNode,i)),o[5]?_?_.p(o,u):(_=V(o),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(o){c||(b(n),c=!0)},o(o){w(n),c=!1},d(o){o&&(g(i),g(s)),r[e].d(o),_&&_.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:_=null}=e;j(i.page.notify);let o=!1,u=!1,m=null;M(()=>{const f=i.page.subscribe(()=>{o&&(n(6,u=!0),K().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,o=!0),f});function N(f){I[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,_=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,c,r,l,_,o,u,m,i,s,N,S,C]}class oe extends Q{constructor(e){super(),X(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.C_Y18N85.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>p(()=>import("../nodes/1.PIF1SvdF.js"),__vite__mapDeps([7,1,2,4,5,3]),import.meta.url),()=>p(()=>import("../nodes/2.b3yaXdlb.js"),__vite__mapDeps([8,1,2,9]),import.meta.url),()=>p(()=>import("../nodes/3.zAHvGFjm.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),()=>p(()=>import("../nodes/4.0jUJFcB6.js"),__vite__mapDeps([12,13,1,2,14]),import.meta.url),()=>p(()=>import("../nodes/5.0Y2XRswG.js"),__vite__mapDeps([15,13,1,2,3,16]),import.meta.url),()=>p(()=>import("../nodes/6.N8kyNfoM.js"),__vite__mapDeps([17,1,2,18,19,20]),import.meta.url),()=>p(()=>import("../nodes/7.W2E1SWYL.js"),__vite__mapDeps([21,1,2,18,19,22]),import.meta.url)],le=[],fe={"/":[2],"/apps":[3],"/clients":[4],"/notes":[5],"/notes/dark-mode":[6],"/notes/flexbox-interactive-demo":[7]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.C_Y18N85.js","../chunks/scheduler.GqJZMtd-.js","../chunks/index.q3r7dXMJ.js","../chunks/paths.mZtdBGh1.js","../chunks/stores.Db3WTypj.js","../chunks/entry.o3CUrgcy.js","../assets/0.m9335KO4.css","../nodes/1.PIF1SvdF.js","../nodes/2.b3yaXdlb.js","../assets/2.QLW12PEL.css","../nodes/3.zAHvGFjm.js","../assets/3.96sSqvCB.css","../nodes/4.0jUJFcB6.js","../chunks/environment.30ImaL5r.js","../assets/4.H4wgx3fA.css","../nodes/5.0Y2XRswG.js","../assets/5.QUPdK02c.css","../nodes/6.N8kyNfoM.js","../chunks/material-darker.bkMuHEPm.js","../assets/material-darker.OLJkl-ln.css","../assets/6.tm0HwC3B.css","../nodes/7.W2E1SWYL.js","../assets/7.FAflzUGO.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
