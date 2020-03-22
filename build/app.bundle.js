!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,o){var n=o(2),i=o(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1},a=(n(i,r),i.locals?i.locals:{});t.exports=a},function(t,e,o){o(0),t.exports=o(5)},function(t,e,o){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}(),a=[];function c(t){for(var e=-1,o=0;o<a.length;o++)if(a[o].identifier===t){e=o;break}return e}function l(t,e){for(var o={},n=[],i=0;i<t.length;i++){var r=t[i],l=e.base?r[0]+e.base:r[0],s=o[l]||0,d="".concat(l," ").concat(s);o[l]=s+1;var f=c(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==f?(a[f].references++,a[f].updater(u)):a.push({identifier:d,updater:g(u,e),references:1}),n.push(d)}return n}function s(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var i=o.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,f=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function u(t,e,o,n){var i=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=f(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function p(t,e,o){var n=o.css,i=o.media,r=o.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,h=0;function g(t,e){var o,n,i;if(e.singleton){var r=h++;o=m||(m=s(e)),n=u.bind(null,o,r,!1),i=u.bind(null,o,r,!0)}else o=s(e),n=p.bind(null,o,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var o=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<o.length;n++){var i=c(o[n]);a[i].references--}for(var r=l(t,e),s=0;s<o.length;s++){var d=c(o[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}o=r}}}},function(t,e,o){(e=o(4)(!1)).push([t.i,'/*! HTML5 Boilerplate v6.0.1 | MIT License | https://html5boilerplate.com/ */html{color:#222;font-size:16px;line-height:1.4;scroll-behavior:smooth}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0}*{margin:0;padding:0;box-sizing:border-box}html{margin:0;padding:0}body{display:grid;grid-template-columns:1fr;color:#fff;font-family:roboto-condensed;font-size:16px}h1,h2,h3{font-family:badass, serif;font-weight:bolder;color:#ff8500;text-align:center}h3{color:#fff;font-size:3.5em;letter-spacing:0.09em;text-shadow:1px 1px 1px #fff;margin:0.75em auto}p{font-family:Arial, Helvetica, sans-serif;font-size:1.2em;line-height:1.6em}figcaption{font-family:Arial, Helvetica, sans-serif}ul{padding:0;list-style-type:none}a{text-decoration:none}label{font-family:roboto, sans-serif}.container{margin:0 auto;padding:0;max-width:1200px}#bot-field{display:none}.btn{background:#fff;color:#333;border-radius:15px;transition:background 0.75s ease-in-out}#showcase{background-attachment:fixed;display:flex;flex-direction:column;justify-content:center;align-content:center;width:100vw;height:100vh;background:url("/img/web-dev.jpg");background-size:cover;background-repeat:no-repeat;background-position:center bottom;text-align:center}#showcase .overlay{background-attachment:fixed;width:100%;height:100%;padding:1em 0.5em;margin:0 auto;background-color:rgba(0,0,0,0.7);box-shadow:0 5px 25px 5px #000;display:flex;flex-direction:column;justify-content:center}#showcase h1{color:#fff;font-size:4em;letter-spacing:0.05em;margin:0}#showcase p{font-family:badass, serif;font-size:3em}#showcase button{color:#fff;width:50%;background:#2471a3;display:inline-block;margin:25px auto;padding:15px 0;text-transform:uppercase;font-size:1.05em;border:2px solid #222;box-shadow:0 3px 25px #000}#showcase button a{color:#fff}#about{background:#fff;color:#333;border-top:3px solid #2471a3}#about .container{padding:1em;width:100%}#about h3{margin-bottom:0.5em;font-size:4em;color:#2471a3}#about p{font-family:Arial, Helvetica, sans-serif;text-indent:25px;margin:1em auto}#about figure{margin:0 auto;padding:0;width:100%;text-align:center}#about figure figcaption{font-family:roboto, sans-serif;font-size:1.25em;font-weight:bold;width:100%;color:#333}#about img{width:200px;height:200px;margin:1em auto;border:4px solid #ff8500;border-radius:50%;padding:10px;box-shadow:0 8px 15px #333}#services{display:grid;grid-template-columns:1fr;justify-content:center;align-content:center;background:#2471a3;color:#fff;border-top:3px solid #999}#services h3{color:#fff}#services ul{display:grid;grid-template-columns:1fr;justify-content:center;margin-bottom:1em}#services ul li{font-family:Arial, Helvetica, sans-serif;text-align:center;margin:0.5em 0;margin-bottom:2em}#services ul li img{width:75px;height:75px;margin-bottom:1.5em}#contact{display:block;background:#fff;padding:1em 0 4em;border-top:3px solid #ff8500}#contact h3{color:#ff8500}#contact form{display:flex;flex-direction:column;background:#2471a3;border:2px solid #fff;border-radius:25px;box-shadow:0 2px 15px 2px #000;padding:1.5em 2em 2em;margin-bottom:2em}#contact form label{color:#fff;font-family:roboto, sans-serif}#contact form input,#contact form textarea{margin:0.5em auto;border:1px solid #333;border-radius:5px;box-shadow:2px 2px 15px 1px #333}#contact form input{width:100%;height:3.5em}#contact form textarea{width:100%;height:25em;padding:10px 15px}#contact form #submit-btn{background:#ff8500;text-transform:uppercase;font-weight:bold;margin-top:1.25em;width:65%;height:3em;border-radius:50px;color:#fff;box-shadow:0px 5px 20px #333;font-size:1em}.footer{padding:1em 1em 2em;background:#333;color:#fff;text-align:center;border-top:5px solid #ff8500}.footer p{text-indent:0;margin-top:0.5em;font-size:1.25em}.footer ul{margin-top:1.5em;display:grid;grid-template-columns:repeat(3, 1fr);text-align:center}.footer ul li{width:auto;height:auto;margin:0 auto}.footer ul li img{width:50px;height:50px}.hidden{display:none !important}.visuallyhidden{border:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;-webkit-clip-path:none;clip-path:none;height:auto;margin:0;overflow:visible;position:static;width:auto;white-space:inherit}.invisible{visibility:hidden}.clearfix:before,.clearfix:after{content:" ";display:table}.clearfix:after{clear:both}@media (min-width: 600px){#about .container{overflow:hidden}#about figure{width:45%;float:left;border-bottom-right-radius:15px;border-bottom-left-radius:15px}#about figcaption{margin:0 auto;border-bottom-right-radius:15px;border-bottom-left-radius:15px}#about p{width:50%;float:right;padding:0;line-height:1.6em}#about div.container #cta-hire{margin-top:1em;padding:0;text-align:center}#about button{margin:2em auto;width:50%}#about #cta-hire p{width:100%;font-size:1.5em;text-align:left}#about #cta-hire p span{font-style:italic}#services ul{grid-template-columns:repeat(2, 1fr);margin:0 auto;padding-bottom:3em}#services ul li{display:flex;flex-direction:column;justify-content:center;align-content:center;align-items:center}#services ul li p{text-indent:0}#services ul li img{width:100px;height:100px}#contact{display:block}#contact .container{text-align:center}#contact form{margin:0 auto;width:60%}#contact form label{text-align:left}.footer .container{width:45%}.footer ul{width:75%;margin:1.5em auto 0;display:grid;grid-template-columns:repeat(3, 1fr);text-align:center}.footer ul li{width:auto;height:auto;margin:0 auto}.footer ul li img{width:50px;height:50px}}@media (min-width: 960px){#showcase h1{font-size:6em}#showcase button{width:20%;cursor:pointer;transition:all 0.3s ease-in-out}#showcase button:hover{transform:scale(1.075)}.btn{width:30%;height:50px}#about{padding:0 0 3.5em}#about div.container{width:75%;margin:0 auto}#about button:hover{font-weight:bolder}#about .container#cta-hire{margin:-7em 0 0;float:right}#about .container#cta-hire a:hover{text-decoration:none;text-transform:uppercase}#services ul{display:grid;grid-template-columns:repeat(4, 1fr)}#services ul li{display:flex;flex-direction:column;justify-content:center}#contact{display:block}#contact form{width:45%}#contact form input#submit-btn{width:45%;transition:all 0.3s ease-in-out}#contact form input#submit-btn:hover{transform:scale(1.05);cursor:pointer}.footer ul{width:50%;margin:1.5em auto 0;display:grid;grid-template-columns:repeat(3, 1fr);text-align:center}.footer ul li{width:auto;height:auto;margin:0 auto;border-radius:50%;padding:0.5em;transition:all 0.3s ease-in-out}.footer ul li:hover{transform:scale(1.25, 1.25)}.footer ul li img{width:50px;height:50px}}@media print{*,*:before,*:after{background:transparent !important;color:#000 !important;box-shadow:none !important;text-shadow:none !important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}pre{white-space:pre-wrap !important}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}}\n',""]),t.exports=e},function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var i=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),r=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[o].concat(r).concat([i]).join("\n")}var a,c,l;return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);n&&i[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),e.push(l))}},e}},function(t,e,o){"use strict";o.r(e);o(0);(function(t){console.log("hello, ".concat(t))})("Ryan")}]);