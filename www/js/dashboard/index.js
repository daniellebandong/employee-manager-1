var Le={getAllDepartments:"http://localhost:5000/api/departments/",getDepartment:a=>`http://localhost:5000/api/departments/name/${a}`,updateEmployee:(a,n)=>`http://localhost:5000/api/departments/update/id/${a}`,deleteEmployee:a=>`http://localhost:5000/api/departments/employee/id/${a}`},S=Le;var Se=async a=>await(await fetch(a)).json(),Ce=async a=>await(await fetch(a,{method:"DELETE",redirect:"follow"})).json(),Ae={getRequest:Se,deleteRequest:Ce},C=Ae;var De=function(){let a=null;function n(){let s=document.createElement("img");document.body.appendChild(s);let o=async d=>{let c=await C.deleteRequest(S.deleteEmployee(d.detail.id));console.log(c),s.dispatchEvent(new CustomEvent("removeItem",{bubbles:!0,detail:c}))},u=()=>{console.log("Turn On Edit Mode For Employee")},v=async d=>{let c=await C.getRequest(S.getDepartment(d.detail.name));s.dispatchEvent(new CustomEvent("updateDisplay",{bubbles:!0,detail:c}))};return s.addEventListener("deleteEmployee",o),s.addEventListener("editEmployee",u),s.addEventListener("sideBarSelect",v),{handle:s}}return{getInstance:function(){return a||(a=n()),a}}}(),A=De;var Z=`
    <ul class="departments"></ul>
`,K=`
   <li class="department" data-name="<%-data.name%> "><%-data.name%></li>
`;function xe(a){return document.createRange().createContextualFragment(a).firstElementChild}var T=xe;var Fe=function(){return T(Z)},Q=Fe;function Y(a,n,s){return s={path:n,exports:{},require:function(o,u){return Oe(o,u??s.path)}},a(s,s.exports),s.exports}function Oe(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var P={};function ee(a,n){for(var s=0,o=a.length-1;o>=0;o--){var u=a[o];u==="."?a.splice(o,1):u===".."?(a.splice(o,1),s++):s&&(a.splice(o,1),s--)}if(n)for(;s--;s)a.unshift("..");return a}var Me=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,N=function(a){return Me.exec(a).slice(1)};function I(){for(var a="",n=!1,s=arguments.length-1;s>=-1&&!n;s--){var o=s>=0?arguments[s]:"/";if(typeof o!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!o)continue;a=o+"/"+a,n=o.charAt(0)==="/"}return a=ee(k(a.split("/"),function(u){return!!u}),!n).join("/"),(n?"/":"")+a||"."}function B(a){var n=q(a),s=Ie(a,-1)==="/";return a=ee(k(a.split("/"),function(o){return!!o}),!n).join("/"),!a&&!n&&(a="."),a&&s&&(a+="/"),(n?"/":"")+a}function q(a){return a.charAt(0)==="/"}function te(){var a=Array.prototype.slice.call(arguments,0);return B(k(a,function(n,s){if(typeof n!="string")throw new TypeError("Arguments to path.join must be strings");return n}).join("/"))}function ne(a,n){a=I(a).substr(1),n=I(n).substr(1);function s(g){for(var _=0;_<g.length&&g[_]==="";_++);for(var w=g.length-1;w>=0&&g[w]==="";w--);return _>w?[]:g.slice(_,w-_+1)}for(var o=s(a.split("/")),u=s(n.split("/")),v=Math.min(o.length,u.length),d=v,c=0;c<v;c++)if(o[c]!==u[c]){d=c;break}for(var p=[],c=d;c<o.length;c++)p.push("..");return p=p.concat(u.slice(d)),p.join("/")}var ae="/",re=":";function ie(a){var n=N(a),s=n[0],o=n[1];return!s&&!o?".":(o&&(o=o.substr(0,o.length-1)),s+o)}function se(a,n){var s=N(a)[2];return n&&s.substr(-1*n.length)===n&&(s=s.substr(0,s.length-n.length)),s}function oe(a){return N(a)[3]}var Re={extname:oe,basename:se,dirname:ie,sep:ae,delimiter:re,relative:ne,join:te,isAbsolute:q,normalize:B,resolve:I};function k(a,n){if(a.filter)return a.filter(n);for(var s=[],o=0;o<a.length;o++)n(a[o],o,a)&&s.push(a[o]);return s}var Ie="ab".substr(-1)==="b"?function(a,n,s){return a.substr(n,s)}:function(a,n,s){return n<0&&(n=a.length+n),a.substr(n,s)},Pe=Object.freeze({__proto__:null,resolve:I,normalize:B,isAbsolute:q,join:te,relative:ne,sep:ae,delimiter:re,dirname:ie,basename:se,extname:oe,default:Re}),E=Y(function(a,n){var s=/[|\\{}()[\]^$+*?.]/g;n.escapeRegExpChars=function(c){return c?String(c).replace(s,"\\$&"):""};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},u=/[&<>'"]/g;function v(c){return o[c]||c}var d=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;n.escapeXML=function(c){return c==null?"":String(c).replace(u,v)},n.escapeXML.toString=function(){return Function.prototype.toString.call(this)+`;
`+d},n.shallowCopy=function(c,p){p=p||{};for(var g in p)c[g]=p[g];return c},n.shallowCopyFromList=function(c,p,g){for(var _=0;_<g.length;_++){var w=g[_];typeof p[w]!="undefined"&&(c[w]=p[w])}return c},n.cache={_data:{},set:function(c,p){this._data[c]=p},get:function(c){return this._data[c]},remove:function(c){delete this._data[c]},reset:function(){this._data={}}},n.hyphenToCamel=function(c){return c.replace(/-[a-z]/g,function(p){return p[1].toUpperCase()})}}),Ne="ejs",ke="Embedded JavaScript templates",qe=["template","engine","ejs"],Be="3.1.6",$e="Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",We="Apache-2.0",He={ejs:"./bin/cli.js"},Ue="./lib/ejs.js",Ve="ejs.min.js",ze="ejs.min.js",Je={type:"git",url:"git://github.com/mde/ejs.git"},Xe="https://github.com/mde/ejs/issues",Ge="https://github.com/mde/ejs",Ze={jake:"^10.6.1"},Ke={browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.4","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},Qe={node:">=0.10.0"},Ye={test:"mocha"},et={name:Ne,description:ke,keywords:qe,version:Be,author:$e,license:We,bin:He,main:Ue,jsdelivr:Ve,unpkg:ze,repository:Je,bugs:Xe,homepage:Ge,dependencies:Ze,devDependencies:Ke,engines:Qe,scripts:Ye},tt=Y(function(a,n){var s=Pe,o=!1,u=et.version,v="<",d=">",c="%",p="locals",g="ejs",_="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",w=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],ye=w.concat("cache"),H=/^\uFEFF/;n.cache=E.cache,n.fileLoader=P.readFileSync,n.localsName=p,n.promiseImpl=new Function("return this;")().Promise,n.resolveInclude=function(t,r,e){var i=s.dirname,l=s.extname,m=s.resolve,h=m(e?r:i(r),t),j=l(t);return j||(h+=".ejs"),h};function U(t,r){var e;if(r.some(function(i){return e=n.resolveInclude(t,i,!0),P.existsSync(e)}))return e}function Ee(t,r){var e,i,l=r.views,m=/^[A-Za-z]+:\\|^\//.exec(t);if(m&&m.length)t=t.replace(/^\/*/,""),Array.isArray(r.root)?e=U(t,r.root):e=n.resolveInclude(t,r.root||"/",!0);else if(r.filename&&(i=n.resolveInclude(t,r.filename),P.existsSync(i)&&(e=i)),!e&&Array.isArray(l)&&(e=U(t,l)),!e&&typeof r.includer!="function")throw new Error('Could not find the include file "'+r.escapeFunction(t)+'"');return e}function x(t,r){var e,i=t.filename,l=arguments.length>1;if(t.cache){if(!i)throw new Error("cache option requires a filename");if(e=n.cache.get(i),e)return e;l||(r=V(i).toString().replace(H,""))}else if(!l){if(!i)throw new Error("Internal EJS error: no file name or template provided");r=V(i).toString().replace(H,"")}return e=n.compile(r,t),t.cache&&n.cache.set(i,e),e}function _e(t,r,e){var i;if(e){try{i=x(t)(r)}catch(l){return e(l)}e(null,i)}else{if(typeof n.promiseImpl=="function")return new n.promiseImpl(function(l,m){try{i=x(t)(r),l(i)}catch(h){m(h)}});throw new Error("Please provide a callback function")}}function V(t){return n.fileLoader(t)}function we(t,r){var e=E.shallowCopy({},r);if(e.filename=Ee(t,e),typeof r.includer=="function"){var i=r.includer(t,e.filename);if(i&&(i.filename&&(e.filename=i.filename),i.template))return x(e,i.template)}return x(e)}function z(t,r,e,i,l){var m=r.split(`
`),h=Math.max(i-3,0),j=Math.min(m.length,i+3),b=l(e),L=m.slice(h,j).map(function(O,M){var F=M+h+1;return(F==i?" >> ":"    ")+F+"| "+O}).join(`
`);throw t.path=b,t.message=(b||"ejs")+":"+i+`
`+L+`

`+t.message,t}function J(t){return t.replace(/;(\s*$)/,"$1")}n.compile=function(r,e){var i;return e&&e.scope&&(o||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),o=!0),e.context||(e.context=e.scope),delete e.scope),i=new f(r,e),i.compile()},n.render=function(t,r,e){var i=r||{},l=e||{};return arguments.length==2&&E.shallowCopyFromList(l,i,w),x(l,t)(i)},n.renderFile=function(){var t=Array.prototype.slice.call(arguments),r=t.shift(),e,i={filename:r},l,m;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(l=t.shift(),t.length?E.shallowCopy(i,t.pop()):(l.settings&&(l.settings.views&&(i.views=l.settings.views),l.settings["view cache"]&&(i.cache=!0),m=l.settings["view options"],m&&E.shallowCopy(i,m)),E.shallowCopyFromList(i,l,ye)),i.filename=r):l={},_e(i,l,e)},n.Template=f,n.clearCache=function(){n.cache.reset()};function f(t,r){r=r||{};var e={};this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",e.client=r.client||!1,e.escapeFunction=r.escape||r.escapeFunction||E.escapeXML,e.compileDebug=r.compileDebug!==!1,e.debug=!!r.debug,e.filename=r.filename,e.openDelimiter=r.openDelimiter||n.openDelimiter||v,e.closeDelimiter=r.closeDelimiter||n.closeDelimiter||d,e.delimiter=r.delimiter||n.delimiter||c,e.strict=r.strict||!1,e.context=r.context,e.cache=r.cache||!1,e.rmWhitespace=r.rmWhitespace,e.root=r.root,e.includer=r.includer,e.outputFunctionName=r.outputFunctionName,e.localsName=r.localsName||n.localsName||p,e.views=r.views,e.async=r.async,e.destructuredLocals=r.destructuredLocals,e.legacyInclude=typeof r.legacyInclude!="undefined"?!!r.legacyInclude:!0,e.strict?e._with=!1:e._with=typeof r._with!="undefined"?r._with:!0,this.opts=e,this.regex=this.createRegex()}f.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},f.prototype={createRegex:function(){var t=_,r=E.escapeRegExpChars(this.opts.delimiter),e=E.escapeRegExpChars(this.opts.openDelimiter),i=E.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,r).replace(/</g,e).replace(/>/g,i),new RegExp(t)},compile:function(){var t,r,e=this.opts,i="",l="",m=e.escapeFunction,h,j=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),i+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName&&(i+="  var "+e.outputFunctionName+` = __append;
`),e.destructuredLocals&&e.destructuredLocals.length){for(var b="  var __locals = ("+e.localsName+` || {}),
`,L=0;L<e.destructuredLocals.length;L++){var O=e.destructuredLocals[L];L>0&&(b+=`,
  `),b+=O+" = __locals."+O}i+=b+`;
`}e._with!==!1&&(i+="  with ("+e.localsName+` || {}) {
`,l+=`  }
`),l+=`  return __output;
`,this.source=i+this.source+l}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+j+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+m.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+z.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+j+`
`);try{if(e.async)try{h=new Function("return (async function(){}).constructor;")()}catch(y){throw y instanceof SyntaxError?new Error("This environment does not support async/await"):y}else h=Function;r=new h(e.localsName+", escapeFn, include, rethrow",t)}catch(y){throw y instanceof SyntaxError&&(e.filename&&(y.message+=" in "+e.filename),y.message+=` while compiling ejs

`,y.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,y.message+="https://github.com/RyanZim/EJS-Lint",e.async||(y.message+=`
`,y.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),y}var M=e.client?r:function(X){var Te=function(je,G){var R=E.shallowCopy({},X);return G&&(R=E.shallowCopy(R,G)),we(je,e)(R)};return r.apply(e.context,[X||{},m,Te,z])};if(e.filename&&typeof Object.defineProperty=="function"){var F=e.filename,be=s.basename(F,s.extname(F));try{Object.defineProperty(M,"name",{value:be,writable:!1,enumerable:!1,configurable:!0})}catch(y){}}return M},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var r=this,e=this.parseTemplateText(),i=this.opts.delimiter,l=this.opts.openDelimiter,m=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(h,j){var b;if(h.indexOf(l+i)===0&&h.indexOf(l+i+i)!==0&&(b=e[j+2],!(b==i+m||b=="-"+i+m||b=="_"+i+m)))throw new Error('Could not find matching close tag for "'+h+'".');r.scanLine(h)})},parseTemplateText:function(){for(var t=this.templateText,r=this.regex,e=r.exec(t),i=[],l;e;)l=e.index,l!==0&&(i.push(t.substring(0,l)),t=t.slice(l)),i.push(e[0]),t=t.slice(e[0].length),e=r.exec(t);return t&&i.push(t),i},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var r=this,e=this.opts.delimiter,i=this.opts.openDelimiter,l=this.opts.closeDelimiter,m=0;switch(m=t.split(`
`).length-1,t){case i+e:case i+e+"_":this.mode=f.modes.EVAL;break;case i+e+"=":this.mode=f.modes.ESCAPED;break;case i+e+"-":this.mode=f.modes.RAW;break;case i+e+"#":this.mode=f.modes.COMMENT;break;case i+e+e:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(i+e+e,i+e)+`")
`;break;case e+e+l:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+l,e+l)+`")
`;break;case e+l:case"-"+e+l:case"_"+e+l:this.mode==f.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case f.modes.EVAL:case f.modes.ESCAPED:case f.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case f.modes.EVAL:this.source+="    ; "+t+`
`;break;case f.modes.ESCAPED:this.source+="    ; __append(escapeFn("+J(t)+`))
`;break;case f.modes.RAW:this.source+="    ; __append("+J(t)+`)
`;break;case f.modes.COMMENT:break;case f.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}r.opts.compileDebug&&m&&(this.currentLine+=m,this.source+="    ; __line = "+this.currentLine+`
`)}},n.escapeXML=E.escapeXML,n.__express=n.renderFile,n.VERSION=u,n.name=g,typeof window!="undefined"&&(window.ejs=n)}),le=tt;function nt(a,n){return le.render(a,{data:n})}var D=nt;var at=A.getInstance(),ce=new CustomEvent("sideBarSelect",{bubbles:!0,detail:{name:null}}),it=function(a){let n=D(K,a),s=T(n);return s.addEventListener("click",rt),s},rt=a=>{ce.detail.name=a.currentTarget.dataset.name,at.handle.dispatchEvent(ce)},ue=it;var st=document.querySelector("#sidebar"),ot=function(){return{init:function(n){let s=Q();n.forEach(o=>{let u=ue(o);s.append(u)}),st.append(s)}}},me=ot;var lt=`
<aside class="manager" data-id="<%-data.id%> ">
<img src="<%-data.avatar%>" alt="" />
<ul>
  <li class="fullname"><%-data.firstname%> <%-data.lastname%></li>
  <li class="email">email: <%-data.email%></li>
  <li class="cell-number">cell:<%-data.cellNumber%></li>
</ul>
</aside>  
`,ct=`
<aside class="managers">
<header><h2>manager</h2></header>
</aside>  
`,ut={parentTemplate:ct,childTemplate:lt},$=ut;var mt=a=>{let n=document.querySelector("#managers"),s=a.filter(u=>u.role),o=T($.parentTemplate);return s.forEach(u=>{let v=D($.childTemplate,u),d=T(v);o.appendChild(d)}),o},de=mt;var pe=`
<aside class="employees"></aside>
`,fe=`
 

<ul class="employee" data-id="<%-data.id%>">
<li>
  <img src="<%-data.avatar%>" width="90px" alt="" />
</li>

<li class="fullname">
    <label> firstname </label>
  <input id="firstname" type="text" value="<%-data.firstname%>" >
 
</li>

 
<li class="lastname"> 
<label> lastname </label>
<input id="lasttname" type="text" value="<%-data.lastname%>">
</li>
 


<li>
<label> salary</label>
<input id="salary" type="text" value="<%-data.salary%>">
</li>
 


<li class="vacation"><label> vacation days</label>
  <input id="vacation" type="text" value="<%-data.vacation%>" >
</li>
 
<li class="controls" data-id="<%-data.id%>">
<img id="edit" class="icon" src="assets/svgs/edit.svg" width="24px" alt="">
  <img id="delete" class="icon" src="assets/svgs/delete.svg" width:="24px" alt="">
</li>

 
</ul>
 

`;var W=A.getInstance(),dt=function(a){let n=T(pe),s=a.filter(u=>!u.role),o=u=>{switch(u.target.id){case"delete":W.handle.dispatchEvent(new CustomEvent("deleteEmployee",{bubbles:!0,detail:{id:u.currentTarget.dataset.id}})),n.removeChild(u.currentTarget.parentElement);break;case"edit":W.handle.dispatchEvent(new CustomEvent("editEmployee",{bubbles:!0,detail:{id:u.currentTarget.dataset.id}}));break;case"save":W.handle.dispatchEvent(new CustomEvent("saveEmployee",{bubbles:!0,detail:{id:u.currentTarget.dataset.id}}));break}};return s.forEach(u=>{let v=D(fe,u),d=T(v);d.querySelector(".controls").addEventListener("click",o),n.appendChild(d)}),n},he=dt;var pt=()=>{let a=document.querySelector("#panel"),n=document.querySelector("#widget-heading"),s=null,o=null,u=d=>{n.textContent=`${d[0].department} department`,s=a.appendChild(de(d)),o=a.appendChild(he(d))};return{updateDisplay:d=>{let c=document.querySelector(".managers");a.removeChild(s),a.removeChild(o),u(d)},view:a,init:u}},ve=pt;var ge=ve(),ft=me(),ht=A.getInstance();ht.handle.addEventListener("updateDisplay",a=>{ge.updateDisplay(a.detail)});var vt=async function(){let a=await C.getRequest(S.getAllDepartments);console.log(a);let n=await C.getRequest(S.getDepartment("training"));console.log(n),ft.init(a),ge.init(n)};vt();
/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */
