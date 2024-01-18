import{s as Ce,V as H,e as Ee,c as me,b as we,f as z,W as U,X as ye,i as oe,h as _t,n as ke,Y as V,Z as De,t as Et,d as mt,j as wt,_ as yt,p as Me,$ as kt,R as Mt,S as Ot,T as xt,U as St,a0 as Rt,q as Nt}from"./scheduler.GqJZMtd-.js";import{S as Be,i as Le,t as Pe,b as He,c as vt,a as Tt,m as At,d as It}from"./index.q3r7dXMJ.js";function je(e,t){const n={},l={},u={$$scope:1};let a=e.length;for(;a--;){const i=e[a],r=t[a];if(r){for(const s in i)s in r||(l[s]=1);for(const s in r)u[s]||(n[s]=r[s],u[s]=1);e[a]=r}else for(const s in i)u[s]=1}for(const i in l)i in n||(n[i]=void 0);return n}function Ct(e){return typeof e=="object"&&e!==null?e:{}}function Dt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ue(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],l=typeof n;(l==="object"||l==="function")&&!Object.isFrozen(n)&&Ue(n)}),e}class Oe{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function ze(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function C(e,...t){const n=Object.create(null);for(const l in e)n[l]=e[l];return t.forEach(function(l){for(const u in l)n[u]=l[u]}),n}const Bt="</span>",xe=e=>!!e.scope,Lt=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((l,u)=>`${l}${"_".repeat(u+1)}`)].join(" ")}return`${t}${e}`};class Pt{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=ze(t)}openNode(t){if(!xe(t))return;const n=Lt(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){xe(t)&&(this.buffer+=Bt)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Se=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class se{constructor(){this.rootNode=Se(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Se({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(l=>this._walk(t,l)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{se._collapse(n)}))}}class Ht extends se{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const l=t.root;n&&(l.scope=`language:${n}`),this.add(l)}toHTML(){return new Pt(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function G(e){return e?typeof e=="string"?e:e.source:null}function Ge(e){return L("(?=",e,")")}function jt(e){return L("(?:",e,")*")}function Ut(e){return L("(?:",e,")?")}function L(...e){return e.map(n=>G(n)).join("")}function zt(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function ae(...e){return"("+(zt(e).capture?"":"?:")+e.map(l=>G(l)).join("|")+")"}function Fe(e){return new RegExp(e.toString()+"|").exec("").length-1}function Gt(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Ft=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function le(e,{joinWith:t}){let n=0;return e.map(l=>{n+=1;const u=n;let a=G(l),i="";for(;a.length>0;){const r=Ft.exec(a);if(!r){i+=a;break}i+=a.substring(0,r.index),a=a.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?i+="\\"+String(Number(r[1])+u):(i+=r[0],r[0]==="("&&n++)}return i}).map(l=>`(${l})`).join(t)}const Wt=/\b\B/,We="[a-zA-Z]\\w*",ce="[a-zA-Z_]\\w*",Ke="\\b\\d+(\\.\\d+)?",Xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ze="\\b(0b[01]+)",Kt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Xt=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=L(t,/.*\b/,e.binary,/\b.*/)),C({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,l)=>{n.index!==0&&l.ignoreMatch()}},e)},F={begin:"\\\\[\\s\\S]",relevance:0},Zt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[F]},qt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[F]},Yt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Q=function(e,t,n={}){const l=C({scope:"comment",begin:e,end:t,contains:[]},n);l.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const u=ae("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return l.contains.push({begin:L(/[ ]+/,"(",u,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),l},Vt=Q("//","$"),Jt=Q("/\\*","\\*/"),Qt=Q("#","$"),$t={scope:"number",begin:Ke,relevance:0},en={scope:"number",begin:Xe,relevance:0},tn={scope:"number",begin:Ze,relevance:0},nn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[F,{begin:/\[/,end:/\]/,relevance:0,contains:[F]}]},rn={scope:"title",begin:We,relevance:0},on={scope:"title",begin:ce,relevance:0},sn={begin:"\\.\\s*"+ce,relevance:0},an=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var Y=Object.freeze({__proto__:null,APOS_STRING_MODE:Zt,BACKSLASH_ESCAPE:F,BINARY_NUMBER_MODE:tn,BINARY_NUMBER_RE:Ze,COMMENT:Q,C_BLOCK_COMMENT_MODE:Jt,C_LINE_COMMENT_MODE:Vt,C_NUMBER_MODE:en,C_NUMBER_RE:Xe,END_SAME_AS_BEGIN:an,HASH_COMMENT_MODE:Qt,IDENT_RE:We,MATCH_NOTHING_RE:Wt,METHOD_GUARD:sn,NUMBER_MODE:$t,NUMBER_RE:Ke,PHRASAL_WORDS_MODE:Yt,QUOTE_STRING_MODE:qt,REGEXP_MODE:nn,RE_STARTERS_RE:Kt,SHEBANG:Xt,TITLE_MODE:rn,UNDERSCORE_IDENT_RE:ce,UNDERSCORE_TITLE_MODE:on});function ln(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function cn(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function un(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=ln,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function gn(e,t){Array.isArray(e.illegal)&&(e.illegal=ae(...e.illegal))}function dn(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function fn(e,t){e.relevance===void 0&&(e.relevance=1)}const hn=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(l=>{delete e[l]}),e.keywords=n.keywords,e.begin=L(n.beforeMatch,Ge(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},pn=["of","and","for","in","not","or","if","then","parent","list","value"],bn="keyword";function qe(e,t,n=bn){const l=Object.create(null);return typeof e=="string"?u(n,e.split(" ")):Array.isArray(e)?u(n,e):Object.keys(e).forEach(function(a){Object.assign(l,qe(e[a],t,a))}),l;function u(a,i){t&&(i=i.map(r=>r.toLowerCase())),i.forEach(function(r){const s=r.split("|");l[s[0]]=[a,_n(s[0],s[1])]})}}function _n(e,t){return t?Number(t):En(e)?0:1}function En(e){return pn.includes(e.toLowerCase())}const Re={},B=e=>{console.error(e)},Ne=(e,...t)=>{console.log(`WARN: ${e}`,...t)},P=(e,t)=>{Re[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Re[`${e}/${t}`]=!0)},J=new Error;function Ye(e,t,{key:n}){let l=0;const u=e[n],a={},i={};for(let r=1;r<=t.length;r++)i[r+l]=u[r],a[r+l]=!0,l+=Fe(t[r-1]);e[n]=i,e[n]._emit=a,e[n]._multi=!0}function mn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw B("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),J;if(typeof e.beginScope!="object"||e.beginScope===null)throw B("beginScope must be object"),J;Ye(e,e.begin,{key:"beginScope"}),e.begin=le(e.begin,{joinWith:""})}}function wn(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw B("skip, excludeEnd, returnEnd not compatible with endScope: {}"),J;if(typeof e.endScope!="object"||e.endScope===null)throw B("endScope must be object"),J;Ye(e,e.end,{key:"endScope"}),e.end=le(e.end,{joinWith:""})}}function yn(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function kn(e){yn(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),mn(e),wn(e)}function Mn(e){function t(i,r){return new RegExp(G(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,s){s.position=this.position++,this.matchIndexes[this.matchAt]=s,this.regexes.push([s,r]),this.matchAt+=Fe(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(s=>s[1]);this.matcherRe=t(le(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const s=this.matcherRe.exec(r);if(!s)return null;const h=s.findIndex((R,O)=>O>0&&R!==void 0),m=this.matchIndexes[h];return s.splice(0,h),Object.assign(s,m)}}class l{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const s=new n;return this.rules.slice(r).forEach(([h,m])=>s.addRule(h,m)),s.compile(),this.multiRegexes[r]=s,s}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,s){this.rules.push([r,s]),s.type==="begin"&&this.count++}exec(r){const s=this.getMatcher(this.regexIndex);s.lastIndex=this.lastIndex;let h=s.exec(r);if(this.resumingScanAtSamePosition()&&!(h&&h.index===this.lastIndex)){const m=this.getMatcher(0);m.lastIndex=this.lastIndex+1,h=m.exec(r)}return h&&(this.regexIndex+=h.position+1,this.regexIndex===this.count&&this.considerAll()),h}}function u(i){const r=new l;return i.contains.forEach(s=>r.addRule(s.begin,{rule:s,type:"begin"})),i.terminatorEnd&&r.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&r.addRule(i.illegal,{type:"illegal"}),r}function a(i,r){const s=i;if(i.isCompiled)return s;[cn,dn,kn,hn].forEach(m=>m(i,r)),e.compilerExtensions.forEach(m=>m(i,r)),i.__beforeBegin=null,[un,gn,fn].forEach(m=>m(i,r)),i.isCompiled=!0;let h=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),h=i.keywords.$pattern,delete i.keywords.$pattern),h=h||/\w+/,i.keywords&&(i.keywords=qe(i.keywords,e.case_insensitive)),s.keywordPatternRe=t(h,!0),r&&(i.begin||(i.begin=/\B|\b/),s.beginRe=t(s.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(s.endRe=t(s.end)),s.terminatorEnd=G(s.end)||"",i.endsWithParent&&r.terminatorEnd&&(s.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),i.illegal&&(s.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(m){return On(m==="self"?i:m)})),i.contains.forEach(function(m){a(m,s)}),i.starts&&a(i.starts,r),s.matcher=u(s),s}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=C(e.classNameAliases||{}),a(e)}function Ve(e){return e?e.endsWithParent||Ve(e.starts):!1}function On(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return C(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Ve(e)?C(e,{starts:e.starts?C(e.starts):null}):Object.isFrozen(e)?C(e):e}var xn="11.9.0";class Sn extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const re=ze,ve=C,Te=Symbol("nomatch"),Rn=7,Je=function(e){const t=Object.create(null),n=Object.create(null),l=[];let u=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Ht};function s(o){return r.noHighlightRe.test(o)}function h(o){let d=o.className+" ";d+=o.parentNode?o.parentNode.className:"";const b=r.languageDetectRe.exec(d);if(b){const E=A(b[1]);return E||(Ne(a.replace("{}",b[1])),Ne("Falling back to no-highlight mode for this block.",o)),E?b[1]:"no-highlight"}return d.split(/\s+/).find(E=>s(E)||A(E))}function m(o,d,b){let E="",y="";typeof d=="object"?(E=o,b=d.ignoreIllegals,y=d.language):(P("10.7.0","highlight(lang, code, ...args) has been deprecated."),P("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),y=o,E=d),b===void 0&&(b=!0);const S={code:E,language:y};K("before:highlight",S);const I=S.result?S.result:R(S.language,S.code,b);return I.code=S.code,K("after:highlight",I),I}function R(o,d,b,E){const y=Object.create(null);function S(c,g){return c.keywords[g]}function I(){if(!f.keywords){k.addText(w);return}let c=0;f.keywordPatternRe.lastIndex=0;let g=f.keywordPatternRe.exec(w),p="";for(;g;){p+=w.substring(c,g.index);const _=v.case_insensitive?g[0].toLowerCase():g[0],M=S(f,_);if(M){const[T,pt]=M;if(k.addText(p),p="",y[_]=(y[_]||0)+1,y[_]<=Rn&&(q+=pt),T.startsWith("_"))p+=g[0];else{const bt=v.classNameAliases[T]||T;N(g[0],bt)}}else p+=g[0];c=f.keywordPatternRe.lastIndex,g=f.keywordPatternRe.exec(w)}p+=w.substring(c),k.addText(p)}function X(){if(w==="")return;let c=null;if(typeof f.subLanguage=="string"){if(!t[f.subLanguage]){k.addText(w);return}c=R(f.subLanguage,w,!0,_e[f.subLanguage]),_e[f.subLanguage]=c._top}else c=$(w,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(q+=c.relevance),k.__addSublanguage(c._emitter,c.language)}function x(){f.subLanguage!=null?X():I(),w=""}function N(c,g){c!==""&&(k.startScope(g),k.addText(c),k.endScope())}function fe(c,g){let p=1;const _=g.length-1;for(;p<=_;){if(!c._emit[p]){p++;continue}const M=v.classNameAliases[c[p]]||c[p],T=g[p];M?N(T,M):(w=T,I(),w=""),p++}}function he(c,g){return c.scope&&typeof c.scope=="string"&&k.openNode(v.classNameAliases[c.scope]||c.scope),c.beginScope&&(c.beginScope._wrap?(N(w,v.classNameAliases[c.beginScope._wrap]||c.beginScope._wrap),w=""):c.beginScope._multi&&(fe(c.beginScope,g),w="")),f=Object.create(c,{parent:{value:f}}),f}function pe(c,g,p){let _=Gt(c.endRe,p);if(_){if(c["on:end"]){const M=new Oe(c);c["on:end"](g,M),M.isMatchIgnored&&(_=!1)}if(_){for(;c.endsParent&&c.parent;)c=c.parent;return c}}if(c.endsWithParent)return pe(c.parent,g,p)}function ut(c){return f.matcher.regexIndex===0?(w+=c[0],1):(ie=!0,0)}function gt(c){const g=c[0],p=c.rule,_=new Oe(p),M=[p.__beforeBegin,p["on:begin"]];for(const T of M)if(T&&(T(c,_),_.isMatchIgnored))return ut(g);return p.skip?w+=g:(p.excludeBegin&&(w+=g),x(),!p.returnBegin&&!p.excludeBegin&&(w=g)),he(p,c),p.returnBegin?0:g.length}function dt(c){const g=c[0],p=d.substring(c.index),_=pe(f,c,p);if(!_)return Te;const M=f;f.endScope&&f.endScope._wrap?(x(),N(g,f.endScope._wrap)):f.endScope&&f.endScope._multi?(x(),fe(f.endScope,c)):M.skip?w+=g:(M.returnEnd||M.excludeEnd||(w+=g),x(),M.excludeEnd&&(w=g));do f.scope&&k.closeNode(),!f.skip&&!f.subLanguage&&(q+=f.relevance),f=f.parent;while(f!==_.parent);return _.starts&&he(_.starts,c),M.returnEnd?0:g.length}function ft(){const c=[];for(let g=f;g!==v;g=g.parent)g.scope&&c.unshift(g.scope);c.forEach(g=>k.openNode(g))}let Z={};function be(c,g){const p=g&&g[0];if(w+=c,p==null)return x(),0;if(Z.type==="begin"&&g.type==="end"&&Z.index===g.index&&p===""){if(w+=d.slice(g.index,g.index+1),!u){const _=new Error(`0 width match regex (${o})`);throw _.languageName=o,_.badRule=Z.rule,_}return 1}if(Z=g,g.type==="begin")return gt(g);if(g.type==="illegal"&&!b){const _=new Error('Illegal lexeme "'+p+'" for mode "'+(f.scope||"<unnamed>")+'"');throw _.mode=f,_}else if(g.type==="end"){const _=dt(g);if(_!==Te)return _}if(g.type==="illegal"&&p==="")return 1;if(ne>1e5&&ne>g.index*3)throw new Error("potential infinite loop, way more iterations than matches");return w+=p,p.length}const v=A(o);if(!v)throw B(a.replace("{}",o)),new Error('Unknown language: "'+o+'"');const ht=Mn(v);let te="",f=E||ht;const _e={},k=new r.__emitter(r);ft();let w="",q=0,D=0,ne=0,ie=!1;try{if(v.__emitTokens)v.__emitTokens(d,k);else{for(f.matcher.considerAll();;){ne++,ie?ie=!1:f.matcher.considerAll(),f.matcher.lastIndex=D;const c=f.matcher.exec(d);if(!c)break;const g=d.substring(D,c.index),p=be(g,c);D=c.index+p}be(d.substring(D))}return k.finalize(),te=k.toHTML(),{language:o,value:te,relevance:q,illegal:!1,_emitter:k,_top:f}}catch(c){if(c.message&&c.message.includes("Illegal"))return{language:o,value:re(d),illegal:!0,relevance:0,_illegalBy:{message:c.message,index:D,context:d.slice(D-100,D+100),mode:c.mode,resultSoFar:te},_emitter:k};if(u)return{language:o,value:re(d),illegal:!1,relevance:0,errorRaised:c,_emitter:k,_top:f};throw c}}function O(o){const d={value:re(o),illegal:!1,relevance:0,_top:i,_emitter:new r.__emitter(r)};return d._emitter.addText(o),d}function $(o,d){d=d||r.languages||Object.keys(t);const b=O(o),E=d.filter(A).filter(de).map(x=>R(x,o,!1));E.unshift(b);const y=E.sort((x,N)=>{if(x.relevance!==N.relevance)return N.relevance-x.relevance;if(x.language&&N.language){if(A(x.language).supersetOf===N.language)return 1;if(A(N.language).supersetOf===x.language)return-1}return 0}),[S,I]=y,X=S;return X.secondBest=I,X}function Qe(o,d,b){const E=d&&n[d]||b;o.classList.add("hljs"),o.classList.add(`language-${E}`)}function ee(o){let d=null;const b=h(o);if(s(b))return;if(K("before:highlightElement",{el:o,language:b}),o.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",o);return}if(o.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(o)),r.throwUnescapedHTML))throw new Sn("One of your code blocks includes unescaped HTML.",o.innerHTML);d=o;const E=d.textContent,y=b?m(E,{language:b,ignoreIllegals:!0}):$(E);o.innerHTML=y.value,o.dataset.highlighted="yes",Qe(o,b,y.language),o.result={language:y.language,re:y.relevance,relevance:y.relevance},y.secondBest&&(o.secondBest={language:y.secondBest.language,relevance:y.secondBest.relevance}),K("after:highlightElement",{el:o,result:y,text:E})}function $e(o){r=ve(r,o)}const et=()=>{W(),P("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function tt(){W(),P("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let ue=!1;function W(){if(document.readyState==="loading"){ue=!0;return}document.querySelectorAll(r.cssSelector).forEach(ee)}function nt(){ue&&W()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",nt,!1);function it(o,d){let b=null;try{b=d(e)}catch(E){if(B("Language definition for '{}' could not be registered.".replace("{}",o)),u)B(E);else throw E;b=i}b.name||(b.name=o),t[o]=b,b.rawDefinition=d.bind(null,e),b.aliases&&ge(b.aliases,{languageName:o})}function rt(o){delete t[o];for(const d of Object.keys(n))n[d]===o&&delete n[d]}function ot(){return Object.keys(t)}function A(o){return o=(o||"").toLowerCase(),t[o]||t[n[o]]}function ge(o,{languageName:d}){typeof o=="string"&&(o=[o]),o.forEach(b=>{n[b.toLowerCase()]=d})}function de(o){const d=A(o);return d&&!d.disableAutodetect}function st(o){o["before:highlightBlock"]&&!o["before:highlightElement"]&&(o["before:highlightElement"]=d=>{o["before:highlightBlock"](Object.assign({block:d.el},d))}),o["after:highlightBlock"]&&!o["after:highlightElement"]&&(o["after:highlightElement"]=d=>{o["after:highlightBlock"](Object.assign({block:d.el},d))})}function at(o){st(o),l.push(o)}function lt(o){const d=l.indexOf(o);d!==-1&&l.splice(d,1)}function K(o,d){const b=o;l.forEach(function(E){E[b]&&E[b](d)})}function ct(o){return P("10.7.0","highlightBlock will be removed entirely in v12.0"),P("10.7.0","Please use highlightElement now."),ee(o)}Object.assign(e,{highlight:m,highlightAuto:$,highlightAll:W,highlightElement:ee,highlightBlock:ct,configure:$e,initHighlighting:et,initHighlightingOnLoad:tt,registerLanguage:it,unregisterLanguage:rt,listLanguages:ot,getLanguage:A,registerAliases:ge,autoDetection:de,inherit:ve,addPlugin:at,removePlugin:lt}),e.debugMode=function(){u=!1},e.safeMode=function(){u=!0},e.versionString=xn,e.regex={concat:L,lookahead:Ge,either:ae,optional:Ut,anyNumberOfTimes:jt};for(const o in Y)typeof Y[o]=="object"&&Ue(Y[o]);return Object.assign(e,Y),e},j=Je({});j.newInstance=()=>Je({});var Nn=j;j.HighlightJS=j;j.default=j;const Ae=Dt(Nn);function vn(e){let t;return{c(){t=Et(e[0])},l(n){t=mt(n,e[0])},m(n,l){oe(n,t,l)},p(n,l){l&1&&wt(t,n[0])},d(n){n&&z(t)}}}function Tn(e){let t,n;return{c(){t=new yt(!1),n=Me(),this.h()},l(l){t=kt(l,!1),n=Me(),this.h()},h(){t.a=n},m(l,u){t.m(e[1],l,u),oe(l,n,u)},p(l,u){u&2&&t.p(l[1])},d(l){l&&(z(n),t.d())}}}function An(e){let t,n;function l(s,h){return s[1]?Tn:vn}let u=l(e),a=u(e),i=[{"data-language":e[2]},e[4]],r={};for(let s=0;s<i.length;s+=1)r=H(r,i[s]);return{c(){t=Ee("pre"),n=Ee("code"),a.c(),this.h()},l(s){t=me(s,"PRE",{"data-language":!0});var h=we(t);n=me(h,"CODE",{});var m=we(n);a.l(m),m.forEach(z),h.forEach(z),this.h()},h(){U(n,"hljs",!0),ye(t,r),U(t,"langtag",e[3]),U(t,"svelte-11sh29b",!0)},m(s,h){oe(s,t,h),_t(t,n),a.m(n,null)},p(s,[h]){u===(u=l(s))&&a?a.p(s,h):(a.d(1),a=u(s),a&&(a.c(),a.m(n,null))),ye(t,r=je(i,[h&4&&{"data-language":s[2]},h&16&&s[4]])),U(t,"langtag",s[3]),U(t,"svelte-11sh29b",!0)},i:ke,o:ke,d(s){s&&z(t),a.d()}}}function In(e,t,n){const l=["code","highlighted","languageName","langtag"];let u=V(t,l),{code:a}=t,{highlighted:i}=t,{languageName:r="plaintext"}=t,{langtag:s=!1}=t;return e.$$set=h=>{t=H(H({},t),De(h)),n(4,u=V(t,l)),"code"in h&&n(0,a=h.code),"highlighted"in h&&n(1,i=h.highlighted),"languageName"in h&&n(2,r=h.languageName),"langtag"in h&&n(3,s=h.langtag)},[a,i,r,s,u]}class Cn extends Be{constructor(t){super(),Le(this,t,In,An,Ce,{code:0,highlighted:1,languageName:2,langtag:3})}}const Dn=e=>({highlighted:e&8}),Ie=e=>({highlighted:e[3]});function Bn(e){let t,n;const l=[e[4],{languageName:e[0].name},{langtag:e[2]},{highlighted:e[3]},{code:e[1]}];let u={};for(let a=0;a<l.length;a+=1)u=H(u,l[a]);return t=new Cn({props:u}),{c(){vt(t.$$.fragment)},l(a){Tt(t.$$.fragment,a)},m(a,i){At(t,a,i),n=!0},p(a,i){const r=i&31?je(l,[i&16&&Ct(a[4]),i&1&&{languageName:a[0].name},i&4&&{langtag:a[2]},i&8&&{highlighted:a[3]},i&2&&{code:a[1]}]):{};t.$set(r)},i(a){n||(Pe(t.$$.fragment,a),n=!0)},o(a){He(t.$$.fragment,a),n=!1},d(a){It(t,a)}}}function Ln(e){let t;const n=e[6].default,l=Mt(n,e,e[5],Ie),u=l||Bn(e);return{c(){u&&u.c()},l(a){u&&u.l(a)},m(a,i){u&&u.m(a,i),t=!0},p(a,[i]){l?l.p&&(!t||i&40)&&Ot(l,n,a,a[5],t?St(n,a[5],i,Dn):xt(a[5]),Ie):u&&u.p&&(!t||i&31)&&u.p(a,t?i:-1)},i(a){t||(Pe(u,a),t=!0)},o(a){He(u,a),t=!1},d(a){u&&u.d(a)}}}function Pn(e,t,n){const l=["language","code","langtag"];let u=V(t,l),{$$slots:a={},$$scope:i}=t,{language:r}=t,{code:s}=t,{langtag:h=!1}=t;const m=Rt();let R="";return Nt(()=>{R&&m("highlight",{highlighted:R})}),e.$$set=O=>{t=H(H({},t),De(O)),n(4,u=V(t,l)),"language"in O&&n(0,r=O.language),"code"in O&&n(1,s=O.code),"langtag"in O&&n(2,h=O.langtag),"$$scope"in O&&n(5,i=O.$$scope)},e.$$.update=()=>{e.$$.dirty&3&&(Ae.registerLanguage(r.name,r.register),n(3,R=Ae.highlight(s,{language:r.name}).value))},[r,s,h,R,u,i,a]}class Hn extends Be{constructor(t){super(),Le(this,t,Pn,Ln,Ce,{language:0,code:1,langtag:2})}}const Yn=Hn,jn=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Un=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],zn=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],Gn=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],Fn=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],Wn=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function Kn(e){const t=e.regex,n=jn(e),l={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},u="and or not only",a=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",r=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[n.BLOCK_COMMENT,l,n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Gn.join("|")+")"},{begin:":(:)?("+Fn.join("|")+")"}]},n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Wn.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...r,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...r,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:a},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:u,attribute:zn.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...r,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Un.join("|")+")\\b"}]}}const Xn={name:"css",register:Kn},Vn=Xn;export{Yn as H,Vn as c};
