function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=a(e,n,r,c);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function d(){return h(" ")}function m(){return h("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function v(t){return b(t," ")}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e=document.body){return Array.from(e.querySelectorAll(t))}let x;function E(t){x=t}function S(){if(!x)throw new Error("Function called outside component initialization");return x}const R=[],A=[],P=[],j=[],L=Promise.resolve();let k=!1;function N(t){P.push(t)}let q=!1;const C=new Set;function O(){if(!q){q=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];E(e),U(e.$$)}for(R.length=0;A.length;)A.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];C.has(e)||(C.add(e),e())}P.length=0}while(R.length);for(;j.length;)j.pop()();k=!1,q=!1,C.clear()}}function U(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const T=new Set;let I;function B(){I={r:0,c:[],p:I}}function D(){I.r||o(I.c),I=I.p}function J(t,e){t&&t.i&&(T.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),I.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function K(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function V(t){t&&t.c()}function Y(t,e){t&&t.l(e)}function z(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),N(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(N)}function F(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(R.push(t),k||(k=!0,L.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,n,s,c,a,i,l=[-1]){const u=x;E(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(h.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),d&&G(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),n.target){if(n.hydrate){const t=$(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&J(e.$$.fragment),z(e,n.target,n.anchor),O()}E(u)}class X{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=[];function Z(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!Q.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Q.push(n,e)}if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const tt={};class et extends X{constructor(t){super(),W(this,t,null,null,c,{})}}function nt(t){let e,n,r,o;e=new et({});const s=t[1].default,c=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(s,t,t[0],null);return{c(){V(e.$$.fragment),n=d(),r=p("main"),c&&c.c(),this.h()},l(t){Y(e.$$.fragment,t),n=v(t),r=y(t,"MAIN",{class:!0});var o=$(r);c&&c.l(o),o.forEach(f),this.h()},h(){g(r,"class","svelte-1xi7ew8")},m(t,s){z(e,t,s),u(t,n,s),u(t,r,s),c&&c.m(r,null),o=!0},p(t,[e]){c&&c.p&&1&e&&i(c,s,t,t[0],e,null,null)},i(t){o||(J(e.$$.fragment,t),J(c,t),o=!0)},o(t){H(e.$$.fragment,t),H(c,t),o=!1},d(t){F(e,t),t&&f(n),t&&f(r),c&&c.d(t)}}}function rt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ot extends X{constructor(t){super(),W(this,t,rt,nt,c,{})}}function st(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=h(r)},l(t){e=y(t,"PRE",{});var o=$(e);n=b(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&w(n,r)},d(t){t&&f(e)}}}function ct(e){let n,r,o,s,c,a,i,x,E,S=e[1].message+"";document.title=n=e[0];let R=e[2]&&e[1].stack&&st(e);return{c(){r=d(),o=p("h1"),s=h(e[0]),c=d(),a=p("p"),i=h(S),x=d(),R&&R.c(),E=m(),this.h()},l(t){_('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=v(t),o=y(t,"H1",{class:!0});var n=$(o);s=b(n,e[0]),n.forEach(f),c=v(t),a=y(t,"P",{class:!0});var l=$(a);i=b(l,S),l.forEach(f),x=v(t),R&&R.l(t),E=m(),this.h()},h(){g(o,"class","svelte-jpshsi"),g(a,"class","svelte-jpshsi")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,a,e),l(a,i),u(t,x,e),R&&R.m(t,e),u(t,E,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&w(s,t[0]),2&e&&S!==(S=t[1].message+"")&&w(i,S),t[2]&&t[1].stack?R?R.p(t,e):(R=st(t),R.c(),R.m(E.parentNode,E)):R&&(R.d(1),R=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(c),t&&f(a),t&&f(x),R&&R.d(t),t&&f(E)}}}function at(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class it extends X{constructor(t){super(),W(this,t,at,ct,c,{status:0,error:1})}}function lt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&V(n.$$.fragment),r=m()},l(t){n&&Y(n.$$.fragment,t),r=m()},m(t,e){n&&z(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?K(s,[M(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){B();const t=n;H(t.$$.fragment,1,0,()=>{F(t,1)}),D()}c?(n=new c(a()),V(n.$$.fragment),J(n.$$.fragment,1),z(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&J(n.$$.fragment,t),o=!0)},o(t){n&&H(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&F(n,t)}}}function ut(t){let e,n;return e=new it({props:{error:t[0],status:t[1]}}),{c(){V(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function ft(t){let e,n,r,o;const s=[ut,lt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(B(),H(c[i],1,1,()=>{c[i]=null}),D(),n=c[e],n||(n=c[e]=s[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){o||(J(n),o=!0)},o(t){H(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function pt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ft]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ot({props:s}),{c(){V(n.$$.fragment)},l(t){Y(n.$$.fragment,t)},m(t,e){z(n,t,e),r=!0},p(t,[e]){const r=12&e?K(o,[4&e&&{segment:t[2][0]},8&e&&M(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(J(n.$$.fragment,t),r=!0)},o(t){H(n.$$.fragment,t),r=!1},d(t){F(n,t)}}}function ht(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,S().$$.after_update.push(u),f=tt,p=r,S().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class dt extends X{constructor(t){super(),W(this,t,ht,pt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const mt=[],gt=[{js:()=>import("./index.b5a07f95.js"),css:["client.50cea961.css"]},{js:()=>import("./about.e32d7866.js"),css:["client.50cea961.css"]}],$t=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]}];const yt="undefined"!=typeof __SAPPER__&&__SAPPER__;let bt,vt,wt,_t=!1,xt=[],Et="{}";const St={page:function(t){const e=Z(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:Z(null),session:Z(yt&&yt.session)};let Rt,At;St.session.subscribe(async t=>{if(Rt=t,!_t)return;At=!0;const e=Ot(new URL(location.href)),n=vt={},{redirect:r,props:o,branch:s}=await Bt(e);n===vt&&await It(r,s,o,e.page)});let Pt,jt=null;let Lt,kt=1;const Nt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},qt={};function Ct(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ot(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(yt.baseUrl))return null;let e=t.pathname.slice(yt.baseUrl.length);if(""===e&&(e="/"),!mt.some(t=>t.test(e)))for(let n=0;n<$t.length;n+=1){const r=$t[n],o=r.pattern.exec(e);if(o){const n=Ct(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Ut(){return{x:pageXOffset,y:pageYOffset}}async function Tt(t,e,n,r){if(e)Lt=e;else{const t=Ut();qt[Lt]=t,e=Lt=++kt,qt[Lt]=n?t:{x:0,y:0}}Lt=e,bt&&St.preloading.set(!0);const o=jt&&jt.href===t.href?jt.promise:Bt(t);jt=null;const s=vt={},{redirect:c,props:a,branch:i}=await o;if(s===vt&&(await It(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=qt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}qt[Lt]=t,t&&scrollTo(t.x,t.y)}}async function It(t,e,n,r){if(t)return function(t,e={noscroll:!1,replaceState:!1}){const n=Ot(new URL(t,document.baseURI));return n?(Nt[e.replaceState?"replaceState":"pushState"]({id:Lt},"",t),Tt(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});St.page.set(r),St.preloading.set(!1),bt?bt.$set(n):(n.stores={page:{subscribe:St.page.subscribe},preloading:{subscribe:St.preloading.subscribe},session:St.session},n.level0={props:await wt},n.notify=St.page.notify,bt=new dt({target:Pt,props:n,hydrate:!0})),xt=e,Et=JSON.stringify(r.query),_t=!0,At=!1}async function Bt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!wt){const t=()=>{};wt=yt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Rt)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Et)return!0;const o=xt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!At&&!u&&xt[a]&&xt[a].part===e.i)return xt[a];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Dt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(gt[e.i]);let m;return m=_t||!yt.preloaded[a+1]?d?await d.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Rt):{}:yt.preloaded[a+1],s["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function Dt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Jt(t){const e=Ot(new URL(t,document.baseURI));if(e)return jt&&t===jt.href||function(t,e){jt={href:t,promise:e}}(t,Bt(e)),jt.promise}let Ht;function Kt(t){clearTimeout(Ht),Ht=setTimeout(()=>{Mt(t)},20)}function Mt(t){const e=Yt(t.target);e&&"prefetch"===e.rel&&Jt(e.href)}function Vt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Yt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ot(o);if(s){Tt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Nt.pushState({id:Lt},"",o.href)}}function Yt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function zt(t){if(qt[Lt]=Ut(),t.state){const e=Ot(new URL(location.href));e?Tt(e,t.state.id):location.href=location.href}else kt=kt+1,function(t){Lt=t}(kt),Nt.replaceState({id:Lt},"",location.href)}var Ft;Ft={target:document.querySelector("#sapper")},"scrollRestoration"in Nt&&(Nt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Nt.scrollRestoration="auto"}),addEventListener("load",()=>{Nt.scrollRestoration="manual"}),function(t){Pt=t}(Ft.target),addEventListener("click",Vt),addEventListener("popstate",zt),addEventListener("touchstart",Mt),addEventListener("mousemove",Kt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Nt.replaceState({id:kt},"",e);const n=new URL(location.href);if(yt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=yt;wt||(wt=s&&s[0]),It(null,[],{error:a,status:c,session:o,level0:{props:wt},level1:{props:{status:c,error:a},component:it},segments:s},{host:e,path:n,query:Ct(r),params:{}})}();const r=Ot(n);return r?Tt(r,kt,!0,t):void 0});export{X as S,d as a,y as b,v as c,f as d,p as e,$ as f,b as g,u as h,W as i,l as j,t as n,_ as q,c as s,h as t};
