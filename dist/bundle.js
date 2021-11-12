(()=>{"use strict";var e={771:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(81),s=t.n(a),o=t(645),r=t.n(o),c=t(667),i=t.n(c),d=new URL(t(724),t.b),l=new URL(t(973),t.b),p=r()(s()),m=i()(d),u=i()(l);p.push([e.id,"@font-face {\n  font-family: myfont;\n  src: url("+m+");\n}\n\n* {\n  font-family: 'myfont', 'Courier New', Courier, monospace;\n}\n\nbody {\n  background: linear-gradient(90deg, #000000 0%, #e386ff2f 50%, #000000 100%), url("+u+") center no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nnav {\n  background: linear-gradient(#000000 0%, #000000 70%, #02020200 100%);\n}\n\n.shadowbackground {\n  background-color: #000000a6;\n  border-radius: 30px;\n  margin: 0;\n}\n\n.AboutImg {\n  max-width: 500px;\n  width: 100%;\n  margin: 10px auto 10px auto;\n  border-radius: 30px;\n}\n\n.bg-transparentblack {\n  background-color: rgba(0, 0, 0, 0.432);\n  border-radius: 30px;\n}\n\n.menuBtn {\n  width: 25px;\n}\n\n#linkContainer {\n  list-style: none;\n}\n\nbutton {\n  color: #81f6fa;\n}\n\n.active {\n  color: white;\n  font-weight: 900;\n}\n\n.projectImg {\n  aspect-ratio: 1;\n}\n\n.mobileLinks {\n  background-color: #00000000;\n  position: block;\n  border-radius: 20px;\n  padding: 20px;\n}\n\n@media (max-width: 768px) {\n  .mobileLinks {\n    position: absolute;\n    background-color: #000000be;\n    right: 0;\n    top: 60px;\n  }\n\n  .mobileLinks button {\n    margin: 20px 0 20px 0;\n  }\n}\n\n.outline-red {\n  box-shadow: 0 0 7px 2px red;\n}\n",""]);const b=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,s,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(r[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},r=[],c=0;c<e.length;c++){var i=e[c],d=a.base?i[0]+a.base:i[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var m=t(p),u={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var b=s(u,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:b,references:1})}r.push(p)}return r}function s(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,s){var o=a(e=e||[],s=s||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var c=t(o[r]);n[c].references--}for(var i=a(e,s),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=i}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var s=void 0!==t.layer;s&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,s&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},179:(e,n,t)=>{e.exports=t.p+"21eeb0d85514986ffe7f.png"},939:(e,n,t)=>{e.exports=t.p+"db386a42cdb5cf6055e1.png"},631:(e,n,t)=>{e.exports=t.p+"4bbf1cd2ea55271d863e.jpg"},420:(e,n,t)=>{e.exports=t.p+"e11fc0c8df799c995efb.png"},973:(e,n,t)=>{e.exports=t.p+"45fa8b2fd7fe410e6af4.jpg"},408:(e,n,t)=>{e.exports=t.p+"286fb9b60d98b025943e.jpg"},95:(e,n,t)=>{e.exports=t.p+"ef7111f215268c27e896.png"},62:(e,n,t)=>{e.exports=t.p+"f9c9e8be93c6bfc56241.png"},14:(e,n,t)=>{e.exports=t.p+"161891d7a93d4ed70034.png"},271:(e,n,t)=>{e.exports=t.p+"672a6381059233c57d8f.png"},421:(e,n,t)=>{e.exports=t.p+"8bd656e2e6906bcda324.png"},995:(e,n,t)=>{e.exports=t.p+"450a73e481e76b6a2b06.gif"},167:(e,n,t)=>{e.exports=t.p+"9bb4f0131f6bbfeea473.png"},137:(e,n,t)=>{e.exports=t.p+"f81cdeb90c1f54e72b62.png"},835:(e,n,t)=>{e.exports=t.p+"956f0b58508214df351d.png"},695:(e,n,t)=>{e.exports=t.p+"1343aadc8535bb3f56f7.png"},621:(e,n,t)=>{e.exports=t.p+"f7fe6119e3ff48138dc6.png"},724:(e,n,t)=>{e.exports=t.p+"02afb26fe72fcc052988.ttf"}},n={};function t(a){var s=n[a];if(void 0!==s)return s.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),a=t(795),s=t.n(a),o=t(569),r=t.n(o),c=t(565),i=t.n(c),d=t(216),l=t.n(d),p=t(589),m=t.n(p),u=t(771),b={};b.styleTagTransform=m(),b.setAttributes=i(),b.insert=r().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=l(),n()(u.Z,b),u.Z&&u.Z.locals&&u.Z.locals,document.getElementById("container").classList.add("mt-5","pt-1");const g=document.createElement("div");g.classList.add("my-5"),container.appendChild(g);const f=container;var v=t(271);const h=()=>{g.innerHTML="";const e=document.createElement("div");e.innerHTML=`\n    <div class="row m-0">\n      <div class="col-12 col-md-5 order-md-2 p-4">\n        <img class="shadow-lg rounded-circle w-100" src="${v}">\n      </div>\n      <div class="col-12 col-md-7 order-md-1 pt-7">\n        <div class="text-center">\n          <p class="text-white fs-1 my-0">Jose Alberto Arriaga Ramos</p>\n          <div class="border"></div>\n          <p class="text-white fs-3 my-0">Full Stack Software Developer</p>\n        </div>\n        <div class="text-center">\n          <span class="badge bg-info">HTML5</span>\n          <span class="badge bg-info">CSS</span>\n          <span class="badge bg-info">BOOTSTRAP</span>\n          <span class="badge bg-info">RUBY</span>\n          <span class="badge bg-info">RAILS</span>\n          <span class="badge bg-info">JAVASCRIPT</span>\n          <span class="badge bg-info">REACT</span>\n          <span class="badge bg-info">REDUX</span>\n        </div>\n        <div class="text-white text-center mt-5">\n          <p class="fs-3">I love to code and I'm always ready to solve new challenges and learn new ways to solve the problems I found.</p>\n        </div>\n        <div class="d-flex justify-content-center">\n          <a class="btn btn-outline-light" href="https://docs.google.com/document/d/1AINJ2zR6U2j3eEWaSuTKL-SMAYRwPZsLuh1VXfxH3as/edit" target="_blank">Get my resume</a>\n        </div>\n      </div>\n      <div class=" col-12 order-3 text-white text-center mt-3 shadowbackground">\n        <p class="fs-2">"Programming isn't about what you know. It's about what you can figure out." -Chris Pine-</p>\n      </div>\n    </div>\n  `,g.appendChild(e)};var x=t(631),w=t(408);var y=t(137),k=t(420),L=t(421),C=t(695),I=t(995),A=t(621);var T=t(14),E=t(835),S=t(939);const R=document.createElement("div");R.classList.add("d-none");const j=document.createElement("p");j.textContent="Sending your message, please wait! ",j.classList.add("fs-3","my-2"),R.appendChild(j);const M=document.createElement("div");M.classList.add("spinner-border","text-success"),R.appendChild(M);const _=document.createElement("span");_.classList.add("visually-hidden"),_.textContent="Loading...",M.appendChild(_);const B=document.createElement("div");B.classList.add("d-none");const H=document.createElement("p");H.classList.add("fs-3","my-2"),H.textContent="Thanks for your message I will reach back to you as soon as I can!",B.appendChild(H);const P=new Image;P.src=S,B.appendChild(P);const $=document.createElement("div");$.classList.add("d-none");const N=document.createElement("p");N.classList.add("fs-3","my-2"),N.textContent="There was an error and your message was not sent please try again later and refresh the page!",$.appendChild(N);const U=new Image;U.src=E,$.appendChild(U);const J=R;var O=t(95),W=t(167),Y=t(62),X=t(179);const Z=()=>{g.innerHTML="";const e=document.createElement("div");e.classList.add("shadowbackground","m-0","rounded","row"),e.innerHTML=`\n    <h1 class="col-12 fs-1 text-white text-center">\n        Contact\n    </h1>\n    <div class="col-12 col-md-6 row">\n      <p class="col-12 text-white text-center fs-2">Social Media</p>\n      <div class="col-12 d-flex flex-row justify-content-center">\n        <a class="mx-3 h-100" href="https://github.com/JAAR91" target="_blank"><img class="m-0" src="${O}"></a>\n        <a class="mx-3" href="https://twitter.com/91_jaar" target="_blank"><img class="m-0" src="${W}"></a>\n        <a class="mx-3" class="m-3"a href="https://www.linkedin.com/in/jaar/" target="_blank"><img class="m-0" src="${Y}"></a>\n        <a class="mx-3" href="https://angel.co/u/jaar91" target="_blank"><img class="m-0" src="${X}"></a>\n      </div>\n      <div class="col-12 d-flex flex-row justify-content-center align-items-center">\n        <p class="text-white text-center fs-3 m-0 p-0">Email: </p>\n        <a class="link-info m-0 fs-3" href="mailto:jaarriagaramos@gmail.com" target="_blank">jaarriagaramos@gmail.com</a>\n      </div>\n\n      <div class="col-12 d-flex flex-row justify-content-center align-items-center my-2">\n        <p class="text-white text-center fs-3 m-0 p-0">Resume: </p>\n        <a class="link-info m-0 fs-3" href="https://docs.google.com/document/d/1AINJ2zR6U2j3eEWaSuTKL-SMAYRwPZsLuh1VXfxH3as/edit" target="_blank">Google Docs</a>\n      </div>\n    </div>\n\n  `,e.append((()=>{const e=document.createElement("div");e.classList.add("px-5");const n=document.createElement("div");e.appendChild(n);const t=document.createElement("p");t.textContent="Send me a message:",t.classList.add("fs-2","text-white","mb-4"),n.appendChild(t);const a=document.createElement("input");a.classList.add("form-control","my-3"),a.type="text",a.placeholder="First name and last name",n.appendChild(a);const s=document.createElement("input");s.classList.add("form-control","my-3"),s.type="email",s.placeholder="Email",n.appendChild(s);const o=document.createElement("textarea");o.classList.add("form-control","my-3"),o.rows="6",o.placeholder="Message",n.appendChild(o);const r=document.createElement("button");r.classList.add("btn","btn-dark"),r.type="click",r.textContent="Send Message",r.disabled=!0,n.appendChild(r);let c=0,i=!1,d=0;return n.childNodes.forEach((e=>{"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName||e.addEventListener("keydown",(e=>{switch(e.target.type){case"text":c=e.target.value.length,c>4?e.target.classList.remove("outline-red"):e.target.classList.add("outline-red");break;case"email":i=(e=>/\S+@\S+\.\S+/.test(e))(e.target.value),i?e.target.classList.remove("outline-red"):e.target.classList.add("outline-red");break;case"textarea":d=e.target.value.length,d>10?e.target.classList.remove("outline-red"):e.target.classList.add("outline-red")}c>4&&i&&d>10?(r.disabled=!1,r.classList.add("btn-success"),r.classList.remove("btn-dark")):(r.disabled=!0,r.classList.add("btn-dark"),r.classList.remove("btn-success"))}))})),e.appendChild(J),e.appendChild(B),e.appendChild($),r.addEventListener("click",(()=>{n.classList.add("d-none"),J.classList.remove("d-none"),(async(e,n,t)=>{await fetch("https://formspree.io/f/xdoyqoze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:n,message:t})}).then((e=>{200===e.status?(J.classList.add("d-none"),B.classList.remove("d-none")):(J.classList.add("d-none"),$.classList.remove("d-none"))})).catch((()=>{J.classList.add("d-none"),$.classList.remove("d-none")}))})(a.value,s.value,o.value),a.value="",s.value="",o.value=""})),e.classList.add("col-12","col-md-6","p-3"),e})()),g.appendChild(e)};f.appendChild((()=>{const e=document.createElement("nav");e.classList.add("navbar","navbar-expand-lg","navbar-dark","m-0","fixed-top"),e.innerHTML=`\n    <div class="container d-flex flex-row justify-content-between">\n      <button class="navbar-brand bg-transparent border-0 fs-3 nav-link" type="click">J.A.A.R.</button>\n      <div>\n        <div class="">\n          <button class="bg-transparent border-0"><img id="navMenuBtn" class="menuBtn d-md-none" src="${T}"></button>\n          <ul class="d-none mobileLinks d-md-flex flex-row me-auto mb-2 mb-lg-0 text-secondary" id="linkContainer">\n            <li>\n              <button class="bg-transparent border-0 active">Home</button>\n            </li>\n            <li>\n              <button class="bg-transparent border-0">Projects</button>\n            </li>\n            <li>\n              <button class="bg-transparent border-0">About</button>\n            </li>\n            <li>\n              <button class="bg-transparent border-0">Contact</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  `;let n=!1;const t=e=>{document.getElementById("linkContainer").childNodes.forEach((n=>{const t=n.childNodes[1];t&&(t.textContent===e?t.classList.add("active"):t.classList.remove("active"))}))},a=()=>{n&&(document.getElementById("linkContainer").classList.add("d-none"),n=!1)};return e.addEventListener("click",(e=>{switch(e.target.textContent){case"J.A.A.R.":break;case"Home":t("Home"),h(),a();break;case"Projects":t("Projects"),(()=>{g.innerHTML="";const e=document.createElement("div");e.innerHTML=`\n    <div class="row m-0">\n      <h1 class="fs-1 text-white text-center">My Projects</h1>\n\n      <div class="col-12 col-lg-6 p-2">\n        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">\n          <div class="row m-0">\n            <img class="col-12 col-md-6 rounded-3 projectImg" src="${y}">\n            <div class="col-12 col-md-6 d-flex flex-column">\n              <p class="fs-3 m-0">Twitter Clone</p>\n              <div class="d-flex">\n                <span class="badge bg-danger">RUBY</span>\n                <span class="badge bg-danger mx-1">RUBY ON RAILS</span>\n              </div>\n              <span>Clone website of Twitter. With log-in and out system, follow users, post text and images, and comment posts. The project was made with ruby on rails.</span>\n              <a class="link link-info my-1" href="https://github.com/JAAR91/twitter" target="_blank">See repository</a>\n              <button class="btn btn-outline-info">More info</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-lg-6 p-2">\n        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">\n          <div class="row m-0">\n            <img class="col-12 col-md-6 rounded-3 order-md-2 projectImg" src="${k}">\n            <div class="col-12 col-md-6 d-flex flex-column order-md-1">\n              <p class="fs-3 m-0">Covid Tracker</p>\n              <div class="d-flex">\n                <span class="badge bg-warning ">React</span>\n                <span class="badge bg-warning  mx-1">Redux</span>\n              </div>\n              <span>\n                App that allows you to keep track of the covid-19 pandemic by country and by date. You can check information by contry and some countries contain information for city. \n              </span>\n              <a class="link link-info my-1" href="https://github.com/JAAR91/covid-tracker" target="_blank">See repository</a>\n              <button class="btn btn-outline-info">More info</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-lg-6 p-2">\n        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">\n          <div class="row m-0">\n            <img class="col-12 col-md-6 rounded-3 order-lg-2 projectImg" src="${L}">\n            <div class="col-12 col-md-6 d-flex flex-column order-md-1">\n              <p class="fs-3 m-0">Space Travelers Hub</p>\n              <div class="d-flex">\n                <span class="badge bg-warning ">JavaScript</span>\n                <span class="badge bg-warning  mx-1">Webpack</span>\n              </div>\n              <span>\n                Keep track of rockets and missions from SpaceX company. \n              </span>\n              <a class="link link-info my-1" href="https://github.com/AdedayoOpeyemi/space_travelers_hub" target="_blank">See repository</a>\n              <button class="btn btn-outline-info">More info</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-lg-6 p-2">\n        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">\n          <div class="row m-0">\n            <img class="col-12 col-md-6 rounded-3 order-md-2 order-lg-1 projectImg" src="${C}">\n            <div class="col-12 col-md-6 d-flex flex-column order-md-1 order-lg-2">\n              <p class="fs-3 m-0">WEBFLIX</p>\n              <div class="d-flex">\n                <span class="badge bg-danger">RUBY</span>\n                <span class="badge bg-danger mx-1">RUBY ON RAILS</span>\n              </div>\n              <span>\n                Keep track of the TV shows you watch, see comments and give likes to your favorites shows.\n              </span>\n              <a class="link link-info my-1" href="https://github.com/DanSam5K/Webflix-Index" target="_blank">See repository</a>\n              <button class="btn btn-outline-info">More info</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-lg-6 p-2">\n        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">\n          <div class="row m-0">\n            <img class="col-12 col-md-6 rounded-3 projectImg" src="${I}">\n            <div class="col-12 col-md-6 d-flex flex-column">\n              <p class="fs-3 m-0">TIC TAC TOE</p>\n              <div class="d-flex">\n                <span class="badge bg-danger">RUBY</span>\n              </div>\n              <span>\n                A Tic Tac Toe game made with ruby.\n              </span>\n              <a class="link link-info my-1" href="https://github.com/JAAR91/tictactoewithRSpec" target="_blank">See repository</a>\n              <button class="btn btn-outline-info">More info</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-lg-6 p-2">\n        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">\n          <div class="row m-0">\n            <img class="col-12 col-md-6 rounded-3 order-md-2 projectImg" src="${A}">\n            <div class="col-12 col-md-6 d-flex flex-column order-md-1">\n              <p class="fs-3 m-0">Movies WEB Scraper</p>\n              <div class="d-flex">\n                <span class="badge bg-danger ">Ruby</span>\n              </div>\n              <span>\n              Web scrapper made with ruby. It get all the movies store on Wikipedia.\n              </span>\n              <a class="link link-info my-1" href="https://github.com/JAAR91/Web_Scraper_Ruby" target="_blank">See repository</a>\n              <button class="btn btn-outline-info">More info</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  `,g.appendChild(e)})(),a();break;case"About":t("About"),(()=>{g.innerHTML="";const e=document.createElement("div");e.innerHTML=`\n    <div class="d-flex flex-column m-0 p-4 bg-transparentblack w-100">\n      <h1 class="fs-1 text-white text-center">About</h1>\n      <p class="fs-4 text-white text-center">\n        Hello, my name is Jose. I am a full-stack web developer that uses Javascript, React, Redux, and Ruby on Rails. After taking the mission of learning Unreal Script all by myself. \n        I couldn't stop thinking that I love to code. So I decided to become a website developer. I love to build ideas into web applications. Then I decided to take things to the next level.\n      </p>\n      <img class="AboutImg" src="${x}">\n      <p class="fs-4 text-white text-center">\n        I completed the coursework at Microverse. A remote software development school. That teaches pair programming with developers from all around the world building real-world projects. \n        There I've spent the last twelve months immersed in remote development. Building entire websites with excellent UI. Like a Twitter clone using ruby on rails. A weather website that \n        shows the current weather information on any location you search. And a fully working react and redux app. That helps you keep track of Space X missions and rockets using its API.\n      </p>\n      <img class="AboutImg" src="${w}">\n      <p class="fs-4 text-white text-center">\n        During the time I spent in Microverse. I gained soft skills like working on teams, pair-programming, remote development. In Addition to that, I already know about effective communication, \n        problem-solving, and multi-tasking.\n      </p>\n      <p class="fs-4 text-white text-center">\n        I'm currently looking for a job that provides the challenges I need to grow up in my developer career.\n      </p>\n    </div>\n  `,g.appendChild(e)})(),a();break;case"Contact":t("Contact"),Z(),a()}"navMenuBtn"===e.target.id&&(document.getElementById("linkContainer").classList.toggle("d-none"),n=!n)})),e})()),h()})()})();