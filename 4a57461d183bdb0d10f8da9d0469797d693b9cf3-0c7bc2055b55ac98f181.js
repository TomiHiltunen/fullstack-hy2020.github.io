(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";n("sC2a"),e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},8113:function(e,t,n){},"9rSQ":function(e,t,n){"use strict";n("JHok");var a=n("xTJ+");function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){a.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},CgaS:function(e,t,n){"use strict";n("JHok"),n("6kNP"),n("8npG");var a=n("JEQr"),r=n("xTJ+"),o=n("9rSQ"),s=n("UnBK");function i(e){this.defaults=e,this.interceptors={request:new o,response:new o}}i.prototype.request=function(e){"string"==typeof e&&(e=r.merge({url:arguments[0]},arguments[1])),(e=r.merge(a,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},r.forEach(["delete","get","head","options"],(function(e){i.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){i.prototype[e]=function(t,n,a){return this.request(r.merge(a||{},{method:e,url:t,data:n}))}})),e.exports=i},CxgS:function(e,t,n){var a={"./app_gyver.svg":"3RtT","./blok.svg":"vbz4","./bonsky_digital.svg":"R52J","./bubblin.svg":"h/k6","./cinia.svg":"HcMi","./circles.svg":"198t","./codento.svg":"6QPu","./compile.svg":"SoB4","./eficode.svg":"GofF","./elisa.svg":"FOkN","./emblica.svg":"MG3U","./futurice.svg":"rc7y","./g_works.svg":"4jT8","./geometrix.svg":"0Yh9","./gofore.svg":"cP6v","./hiq.svg":"wtsH","./houston.png":"KGvF","./houston.svg":"98iT","./ilmatieteenlaitos.svg":"iv/R","./integrify.svg":"ZeDQ","./kela.svg":"Fmie","./kesko.svg":"pWwX","./kodan.svg":"WSZS","./konecranes.svg":"vf9u","./motley.svg":"GwXG","./neemia.svg":"j7GV","./netyourself.svg":"TAJx","./nextup.svg":"irX6","./nordcloud.svg":"P5/b","./nortal_oy.svg":"usXl","./nurse_buddy.svg":"ltN3","./omnia.svg":"JdcT","./perfektio.svg":"oCIo","./plan_brothers.svg":"T0Q2","./platonic_partnership.svg":"GrMt","./pori.svg":"YoUk","./relex.svg":"b17o","./rentle.svg":"U/i3","./resilient_e.svg":"yAPE","./siili.svg":"7W+i","./smartly_io.svg":"B5K9","./sympa.svg":"vcdg","./tabella.svg":"+fIx","./taito_united.svg":"m0Xi","./telia.svg":"fCc7","./terveystalo.svg":"vnHe","./tietotalo.svg":"Ua5r","./tivia.svg":"4ezL","./umbrella_interactive.svg":"4LAG","./unity.svg":"rwfy","./uoh_centre.svg":"0Yyr","./uoh_left-align.svg":"uclQ","./up_cloud.svg":"uoQp","./vero.svg":"IjjB","./vincit.svg":"LxhF","./visma.svg":"XOPh","./webscale.svg":"0GAh","./wolt.svg":"zhfB","./wunderdog.svg":"iXs1"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="CxgS"},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}}},IxoE:function(e,t,n){var a={"./app_gyver.svg":"3RtT","./blok.svg":"vbz4","./bonsky_digital.svg":"R52J","./bubblin.svg":"h/k6","./cinia.svg":"HcMi","./circles.svg":"198t","./codento.svg":"6QPu","./compile.svg":"SoB4","./eficode.svg":"GofF","./elisa.svg":"FOkN","./emblica.svg":"MG3U","./futurice.svg":"rc7y","./g_works.svg":"4jT8","./geometrix.svg":"0Yh9","./gofore.svg":"cP6v","./hiq.svg":"wtsH","./houston.svg":"98iT","./ilmatieteenlaitos.svg":"iv/R","./integrify.svg":"ZeDQ","./kela.svg":"Fmie","./kesko.svg":"pWwX","./kodan.svg":"WSZS","./konecranes.svg":"vf9u","./motley.svg":"GwXG","./neemia.svg":"j7GV","./netyourself.svg":"TAJx","./nextup.svg":"irX6","./nordcloud.svg":"P5/b","./nortal_oy.svg":"usXl","./nurse_buddy.svg":"ltN3","./omnia.svg":"JdcT","./perfektio.svg":"oCIo","./plan_brothers.svg":"T0Q2","./platonic_partnership.svg":"GrMt","./pori.svg":"YoUk","./relex.svg":"b17o","./rentle.svg":"U/i3","./resilient_e.svg":"yAPE","./siili.svg":"7W+i","./smartly_io.svg":"B5K9","./sympa.svg":"vcdg","./tabella.svg":"+fIx","./taito_united.svg":"m0Xi","./telia.svg":"fCc7","./terveystalo.svg":"vnHe","./tietotalo.svg":"Ua5r","./tivia.svg":"4ezL","./umbrella_interactive.svg":"4LAG","./unity.svg":"rwfy","./uoh_centre.svg":"0Yyr","./uoh_left-align.svg":"uclQ","./up_cloud.svg":"uoQp","./vero.svg":"IjjB","./vincit.svg":"LxhF","./visma.svg":"XOPh","./webscale.svg":"0GAh","./wolt.svg":"zhfB","./wunderdog.svg":"iXs1"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="IxoE"},J6QO:function(e,t,n){"use strict";var a=n("96qb"),r=Date.prototype.getTime,o=Date.prototype.toISOString,s=function(e){return e>9?e:"0"+e};e.exports=a((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-50000000000001))}))||!a((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(r.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),a=t<0?"-":t>9999?"+":"";return a+("00000"+Math.abs(t)).slice(a?-6:-4)+"-"+s(e.getUTCMonth()+1)+"-"+s(e.getUTCDate())+"T"+s(e.getUTCHours())+":"+s(e.getUTCMinutes())+":"+s(e.getUTCSeconds())+"."+(n>99?n:"0"+s(n))+"Z"}:o},JEQr:function(e,t,n){"use strict";(function(t){n("JHok"),n("q8oJ"),n("C9fy"),n("8npG");var a=n("xTJ+"),r=n("yK9s"),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!a.isUndefined(e)&&a.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t)&&(i=n("tQ2B")),i),transformRequest:[function(e,t){return r(t,"Content-Type"),a.isFormData(e)||a.isArrayBuffer(e)||a.isBuffer(e)||a.isStream(e)||a.isFile(e)||a.isBlob(e)?e:a.isArrayBufferView(e)?e.buffer:a.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):a.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},a.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),a.forEach(["post","put","patch"],(function(e){c.headers[e]=a.merge(o)})),e.exports=c}).call(this,n("8oxB"))},K4iA:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("RBN/");var a=n("q1tI"),r=n.n(a);var o=function(e){var t=e.className,n=e.headingLevel,a=void 0===n?"h2":n,o=e.headingFontSize,s=e.text,i=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","headingLevel","headingFontSize","text"]),c=a;return r.a.createElement(c,Object.assign({className:"sub-header "+t,style:o?{fontSize:o}:{}},i),s)};o.defaultProps={className:""}},LYNF:function(e,t,n){"use strict";var a=n("OH9c");e.exports=function(e,t,n,r,o){var s=new Error(e);return a(s,t,n,r,o)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";n("sc67"),n("pQ2P"),n("JHok"),n("q8oJ"),n("C9fy"),n("8npG"),n("sC2a");var a=n("xTJ+");function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(a.isURLSearchParams(t))o=t.toString();else{var s=[];a.forEach(t,(function(e,t){null!=e&&(a.isArray(e)?t+="[]":e=[e],a.forEach(e,(function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),o=s.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},NVOO:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("pJf4"),n("8113");var a=n("mt4B"),r=n("gcgQ"),o=n("ykJU"),s=n("jsr+"),i=n("AxK6"),c=n("Wbzz"),l=n("q1tI"),u=n.n(l),f=n("c7NW"),p=n.n(f),g=n("9Koi"),m=[{image:{name:"uoh_centre.svg",alt:"Helsingin yliopisto"},url:"https://www.helsinki.fi/"},{image:{name:"houston.svg",alt:"Houston inc."},url:"https://www.houston-inc.com/careers"},{image:{name:"terveystalo.svg",alt:"Terveystalo"},url:"https://www.terveystalo.com/"},{image:{name:"elisa.svg",alt:"Elisa"},url:"https://corporate.elisa.fi/rekrytointi/"},{image:{name:"kesko.svg",alt:"Kesko"},url:"https://www.kesko.fi/"},{image:{name:"unity.svg",alt:"Unity"},url:"https://www.instagram.com/unitytechnologies/?hl=en"},{image:{name:"konecranes.svg",alt:"Konecranes"},url:"https://careers.konecranes.com/Konecranes/"},{image:{name:"smartly_io.svg",alt:"Smartly"},url:"https://www.smartly.io/careers/"}],h=["Tivia","Relex","Smartly.io","Eficode","Sympa","Cinia","AppGyver","Codento","Taito united","Emblica","Kodan","UpCloud","Perfektio","Blok","G-Works","Webscale","Siili","Ilmatieteenlaitos","Futurice","Visma","Platonic Partnership","Omnia","Tietotalo","Circles","Nordcloud","Wunderdog","Gofore","Nortal Oy","NurseBuddy","Wolt","Pori","Motley","Bonsky Digital","Plan Brothers","Integrify","Rentle","Compile","Telia","Umbrella Interactive","Tabella","Nextup","Kela","Geometrix","Netyourself","Vincit","Vero","Hiq","Resilient E","Neemia","Bubblin"],d=function(e){var t=e.isFrontPage,l=e.lang,f=Object(g.a)().t;return u.a.createElement(a.a,{backgroundColor:t&&"white",className:"spacing--after",id:"challenge"},u.a.createElement(s.a,{className:"container",flex:!0},u.a.createElement(r.a,{centered:!0,className:"col-4 push-right-3 challenge-title",text:f("challengePage:coOperationTitle")}),u.a.createElement(s.a,{flex:!0,spaceBetween:!0,className:"col-6 push-right-2 flex-fix-aligning space-between--mobile"},m.map((function(e,t){return u.a.createElement(o.a,{key:e.url,small:!0,companyPath:e.url,image:{src:n("CxgS")("./"+e.image.name),alt:e.image.alt},className:"col-3 col-5--mobile col-5--tablet"})}))),!t&&u.a.createElement(u.a.Fragment,null,u.a.createElement(r.a,{centered:!0,className:"col-4 spacing push-right-3 challenge-title",text:f("challengePage:participantsTitle")}),u.a.createElement(s.a,{flex:!0,className:"col-9 flex-fix-aligning space-between--mobile"},h.map((function(e){return u.a.createElement(i.a,{key:e,contain:!0,src:n("IxoE")("./"+p()(e)+".svg"),alt:e,className:"company__logo push-right-1 col-3--mobile col-3--tablet"})})))),t&&u.a.createElement(s.a,{flex:!0,spaceAround:!0,className:"col-10 spacing"},u.a.createElement(c.Link,{className:"about__challenge-button",to:("en"===l?"/en":"zh"===l?"/zh":"")+"/challenge"},f("challengePage:infoButton")))))};d.defaultProps={isFrontPage:!1,lang:"fi"}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,a,r){return e.config=t,n&&(e.code=n),e.request=a,e.response=r,e}},OTTw:function(e,t,n){"use strict";n("sPse"),n("sC2a");var a=n("xTJ+");e.exports=a.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var a=e;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=a.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"RBN/":function(e,t,n){},"Rn+g":function(e,t,n){"use strict";var a=n("LYNF");e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(a("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},UnBK:function(e,t,n){"use strict";n("6kNP"),n("8npG"),n("JHok");var a=n("xTJ+"),r=n("xAGQ"),o=n("Lmem"),s=n("JEQr"),i=n("2SVd"),c=n("5oMp");function l(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return l(e),e.baseURL&&!i(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return l(e),t.data=r(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(l(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},brk1:function(e,t,n){},endd:function(e,t,n){"use strict";function a(e){this.message=e}n("q8oJ"),n("C9fy"),n("8npG"),a.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},a.prototype.__CANCEL__=!0,e.exports=a},eqyj:function(e,t,n){"use strict";n("1dPr"),n("klQ5"),n("Ll4R");var a=n("xTJ+");e.exports=a.isStandardBrowserEnv()?{write:function(e,t,n,r,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"jfS+":function(e,t,n){"use strict";n("6kNP"),n("8npG");var a=n("endd");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new a(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},m03J:function(e,t,n){e.exports=n.p+"static/haaste-60a4a9ff715e6a11931880a17e9c6ffc.svg"},mt4B:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("rXWv");var a=n("q1tI"),r=n.n(a);var o=function(e){var t=e.className,n=e.backgroundColor,a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","backgroundColor"]),o=n?{backgroundColor:n}:null;return r.a.createElement("div",Object.assign({className:"banner "+t,style:o},a))};o.defaultProps={className:""}},pEoo:function(e,t,n){"use strict";n("pJf4"),n("E5k/"),n("s13W");var a=n("q1tI"),r=n.n(a),o=n("vDqi"),s=n.n(o),i=n("LCzB"),c=n("gcgQ"),l=n("jsr+");var u=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleSubmit=function(e){e.preventDefault(),n.sendMessage()},n.handleChange=function(e){var t;n.setState(Object.assign({},n.state,((t={})[e.target.name]=e.target.value,t)))},n.sendMessage=function(){var e=n.state,t=e.name,a=e.title,r=e.organization,o=e.phone,i=e.email,c=e.question,l=new FormData;l.append("entry.1118152809",t),l.append("entry.2015280305",a),l.append("entry.578868795",r),l.append("entry.1958784460",o),l.append("entry.2042435833",i),l.append("entry.1350466445",c),s.a.post("https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSeO9jt4-iUsiFaLT5Rpwt47sNceu25te2UO7WGQ2wcUNTbBiQ/formResponse",l).then((function(){n.setState({name:"",title:"",organization:"",phone:"",email:"",question:"",formIsSent:!0})})).catch((function(){n.setState({messageError:!0})}))},n.state={showForm:!1,formIsSent:!1,name:"",title:"",organization:"",phone:"",email:"",question:""},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this,t=this.state,n=t.showForm,a=t.formIsSent,o=t.name,s=t.title,i=t.organization,u=t.phone,f=t.email,p=t.question,g=this.props.t;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(r.a.Fragment,null,a?r.a.createElement(c.a,{className:"spacing",headingFont:!0,text:g("challengePage:submitSuccessMessage")}):r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form col-10"},r.a.createElement("p",{className:"spacing--small"},g("challengePage:nameLabel"),r.a.createElement("span",{"aria-hidden":"true"},"*")),r.a.createElement("input",{required:!0,autoComplete:"off",className:"col-10",placeholder:g("challengePage:namePlaceholder"),type:"text",name:"name",value:o,onChange:this.handleChange}),r.a.createElement("p",{className:"spacing--small"},g("challengePage:titleLabel"),r.a.createElement("span",{"aria-hidden":"true"},"*")),r.a.createElement("input",{required:!0,autoComplete:"off",className:"col-10",placeholder:"CEO",type:"text",name:"title",value:s,onChange:this.handleChange}),r.a.createElement("p",{className:"spacing--small"},g("challengePage:companyLabel"),r.a.createElement("span",{"aria-hidden":"true"},"*")),r.a.createElement("input",{required:!0,autoComplete:"off",className:"col-10",placeholder:g("challengePage:companyPlaceholder"),type:"text",name:"organization",value:i,onChange:this.handleChange}),r.a.createElement("p",{className:"spacing--small"},g("challengePage:phoneLabel"),r.a.createElement("span",{"aria-hidden":"true"},"*")),r.a.createElement("input",{autoComplete:"off",className:"col-10",placeholder:"+358 40 234 5678",type:"text",name:"phone",value:u,onChange:this.handleChange}),r.a.createElement("p",{className:"spacing--small"},g("challengePage:emailLabel"),r.a.createElement("span",{"aria-hidden":"true"},"*")),r.a.createElement("input",{required:!0,autoComplete:"off",className:"col-10",placeholder:"email@domain.com",type:"email",name:"email",value:f,onChange:this.handleChange}),r.a.createElement("p",{className:"spacing--small"},g("challengePage:whereDidYouHearLabel")),r.a.createElement("input",{autoComplete:"off",className:"col-10",type:"text",name:"question",value:p,onChange:this.handleChange}),r.a.createElement("button",{className:"submit spacing spacing--after push-right-4",type:"submit"},g("challengePage:submitButton")))):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{flex:!0,spaceAround:!0,className:"col-10 spacing"},r.a.createElement("button",{className:"about__challenge-button about__challenge-button--turquoise",onClick:function(){return e.setState({showForm:!0})}},g("challengePage:registerButton")))))},a}(a.Component);t.a=Object(i.a)()(u)},pQ2P:function(e,t,n){var a=n("P8UN"),r=n("J6QO");a(a.P+a.F*(Date.prototype.toISOString!==r),"Date",{toISOString:r})},rXWv:function(e,t,n){},s13W:function(e,t,n){},tQ2B:function(e,t,n){"use strict";n("JHok"),n("sc67"),n("6kNP"),n("8npG");var a=n("xTJ+"),r=n("Rn+g"),o=n("MLWZ"),s=n("w0Vi"),i=n("OTTw"),c=n("LYNF");e.exports=function(e){return new Promise((function(t,l){var u=e.data,f=e.headers;a.isFormData(u)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var g=e.auth.username||"",m=e.auth.password||"";f.Authorization="Basic "+btoa(g+":"+m)}if(p.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};r(t,l,a),p=null}},p.onerror=function(){l(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},a.isStandardBrowserEnv()){var h=n("eqyj"),d=(e.withCredentials||i(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;d&&(f[e.xsrfHeaderName]=d)}if("setRequestHeader"in p&&a.forEach(f,(function(e,t){void 0===u&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===u&&(u=null),p.send(u)}))}},u1fg:function(e){e.exports=JSON.parse('{"white":"#ffffff","black":"#33332d","main":"#e1e1e1","violet":"#B795F3","turquoise":"#82F7EB","green":"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D","yellow":"#F7F382","pink":"#E693CB","blue":"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0","light-green":"#D4FCB5","part10-light-blue":"#AFF4FE","purple":"#D4A8E2"}')},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";n("HXzo"),n("sc67"),n("HQhv"),n("JHok");var a=n("xTJ+"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(a.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=a.trim(e.substr(0,o)).toLowerCase(),n=a.trim(e.substr(o+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,n){"use strict";n("JHok");var a=n("xTJ+");e.exports=function(e,t,n){return a.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";n("sC2a"),n("q8oJ"),n("C9fy"),n("8npG");var a=n("HSsa"),r=n("x86X"),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function i(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:r,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return i(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,a){"object"==typeof t[a]&&"object"==typeof n?t[a]=e(t[a],n):t[a]=n}for(var a=0,r=arguments.length;a<r;a++)l(arguments[a],n);return t},extend:function(e,t,n){return l(t,(function(t,r){e[r]=n&&"function"==typeof t?a(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";n("JHok");var a=n("xTJ+");e.exports=function(e,t){a.forEach(e,(function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])}))}},ykJU:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("E5k/"),n("C8Qj"),n("pJf4"),n("brk1");var a=n("AxK6"),r=n("Wbzz"),o=n("q1tI"),s=n.n(o),i=n("iAdT"),c=n("u1fg"),l=function(e,t){e.currentTarget.firstElementChild.firstElementChild.firstElementChild.src=t},u=function(e){var t=e.image,n=e.hoverImageSrc,o=e.background,u=void 0===o?"main":o,f=e.name,p=e.summary,g=e.path,m=e.companyPath,h=e.small,d=e.className,v=[];return h&&v.push("content-liftup--small"),g?s.a.createElement("div",{className:"content-liftup "+d+" "+v.join(" ")},s.a.createElement(i.a,{largeMargin:!0},s.a.createElement(r.Link,{to:g,onMouseOver:function(e){l(e,n||t.src)},onMouseOut:function(e){l(e,t.src)}},s.a.createElement(a.a,Object.assign({},t,{className:"content-liftup__image image--square-big",overlay:c[u]})))),s.a.createElement("p",{className:"content-liftup__name"},f),s.a.createElement("p",{className:"content-liftup__summary"},p)):s.a.createElement(s.a.Fragment,null,m?s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:m,className:"content-liftup "+d+" "+v.join(" ")+" no-hover"},s.a.createElement(a.a,Object.assign({},t,{contain:!0,squareBig:!0,className:"content-liftup__image"})),f&&s.a.createElement("p",{className:"content-liftup__name"},f),p&&s.a.createElement("p",{className:"content-liftup__summary"},p)):s.a.createElement("div",{className:"content-liftup "+d+" "+v.join(" ")+" no-hover"},s.a.createElement(a.a,Object.assign({},t,{contain:!0,className:"content-liftup__image image--square-big"})),f&&s.a.createElement("p",{className:"content-liftup__name"},f),p&&s.a.createElement("p",{className:"content-liftup__summary"},p)))};u.defaultProps={className:"",published:"",path:"",companyPath:""}},zuR4:function(e,t,n){"use strict";n("6kNP"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK");var a=n("xTJ+"),r=n("HSsa"),o=n("CgaS"),s=n("JEQr");function i(e){var t=new o(e),n=r(o.prototype.request,t);return a.extend(n,o.prototype,t),a.extend(n,t),n}var c=i(s);c.Axios=o,c.create=function(e){return i(a.merge(s,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=4a57461d183bdb0d10f8da9d0469797d693b9cf3-0c7bc2055b55ac98f181.js.map