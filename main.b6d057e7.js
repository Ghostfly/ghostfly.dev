!function(e){function t(t){for(var n,i,o=t[0],a=t[1],s=0,l=[];s<o.length;s++)i=o[s],r[i]&&l.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);l.length;)l.shift()()}var n={},r={0:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,i){n=r[e]=[t,i]});t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+""+({}[e]||e)+"."+{1:"1b43990b",2:"7966b734"}[e]+".js"}(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",c.name="ChunkLoadError",c.type=i,c.request=o,n[1](c)}r[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var c=a;i(i.s=3)}([function(e,t,n){e.exports=n(1)},function(e,t,n){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=function(e,t,n){var r=h;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return R()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?f:d,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h="suspendedStart",d="suspendedYield",p="executing",f="completed",v={};function g(){}function y(){}function m(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(j([])));_&&_!==r&&i.call(_,a)&&(w=_);var x=m.prototype=g.prototype=Object.create(w);function k(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function S(e){var n;this._invoke=function(r,o){function a(){return new Promise(function(n,a){!function n(r,o,a,s){var c=u(e[r],e,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===t(h)&&i.call(h,"__await")?Promise.resolve(h.__await).then(function(e){n("next",e,a,s)},function(e){n("throw",e,a,s)}):Promise.resolve(h).then(function(e){l.value=e,a(l)},function(e){return n("throw",e,a,s)})}s(c.arg)}(r,o,n,a)})}return n=n?n.then(a,a):a()}}function P(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,P(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,v;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:R}}function R(){return{value:n,done:!0}}return y.prototype=x.constructor=m,m.constructor=y,m[c]=y.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(S.prototype),S.prototype[s]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,i){var o=new S(l(t,n,r,i));return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},k(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return s.type="throw",s.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),v}},e}("object"===t(e)?e.exports:{});try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}}).call(this,n(2)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";n.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var r=new WeakMap,i=function(e){return"function"==typeof e&&r.has(e)},o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;t!==n;){var i=t.nextSibling;e.insertBefore(t,r),t=i}},s=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}},c={},l={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var u="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(u,"--\x3e"),d=new RegExp("".concat(u,"|").concat(h)),p=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parts=[],this.element=n;for(var r=[],i=[],o=document.createTreeWalker(n.content,133,null,!1),a=0,s=-1,c=0,l=t.strings,h=t.values.length;c<h;){var p=o.nextNode();if(null!==p){if(s++,1===p.nodeType){if(p.hasAttributes()){for(var v=p.attributes,m=v.length,w=0,b=0;b<m;b++)f(v[b].name,"$lit$")&&w++;for(;w-- >0;){var _=l[c],x=y.exec(_)[2],k=x.toLowerCase()+"$lit$",S=p.getAttribute(k);p.removeAttribute(k);var P=S.split(d);this.parts.push({type:"attribute",index:s,name:x,strings:P}),c+=P.length-1}}"TEMPLATE"===p.tagName&&(i.push(p),o.currentNode=p.content)}else if(3===p.nodeType){var C=p.data;if(C.indexOf(u)>=0){for(var E=p.parentNode,O=C.split(d),j=O.length-1,R=0;R<j;R++){var L=void 0,N=O[R];if(""===N)L=g();else{var T=y.exec(N);null!==T&&f(T[2],"$lit$")&&(N=N.slice(0,T.index)+T[1]+T[2].slice(0,-"$lit$".length)+T[3]),L=document.createTextNode(N)}E.insertBefore(L,p),this.parts.push({type:"node",index:++s})}""===O[j]?(E.insertBefore(g(),p),r.push(p)):p.data=O[j],c+=j}}else if(8===p.nodeType)if(p.data===u){var $=p.parentNode;null!==p.previousSibling&&s!==a||(s++,$.insertBefore(g(),p)),a=s,this.parts.push({type:"node",index:s}),null===p.nextSibling?p.data="":(r.push(p),s--),c++}else for(var A=-1;-1!==(A=p.data.indexOf(u,A+1));)this.parts.push({type:"node",index:-1}),c++}else o.currentNode=i.pop()}for(var M=0,z=r;M<z.length;M++){var I=z[M];I.parentNode.removeChild(I)}},f=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},v=function(e){return-1!==e.index},g=function(){return document.createComment("")},y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var b=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.__parts=[],this.template=t,this.processor=n,this.options=r}var t,n,r;return t=e,(n=[{key:"update",value:function(e){var t=0,n=!0,r=!1,i=void 0;try{for(var o,a=this.__parts[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;void 0!==s&&s.setValue(e[t]),t++}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}var c=!0,l=!1,u=void 0;try{for(var h,d=this.__parts[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var p=h.value;void 0!==p&&p.commit()}}catch(e){l=!0,u=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw u}}}},{key:"_clone",value:function(){for(var e,t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1),a=0,s=0,c=i.nextNode();a<r.length;)if(e=r[a],v(e)){for(;s<e.index;)s++,"TEMPLATE"===c.nodeName&&(n.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=n.pop(),c=i.nextNode());if("node"===e.type){var l=this.processor.handleTextExpression(this.options);l.insertAfterNode(c.previousSibling),this.__parts.push(l)}else{var u;(u=this.__parts).push.apply(u,m(this.processor.handleAttributeExpressions(c,e.name,e.strings,this.options)))}a++}else this.__parts.push(void 0),a++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}])&&w(t.prototype,n),r&&w(t,r),e}();function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),e}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var S=function(){function e(t,n,r,i){_(this,e),this.strings=t,this.values=n,this.type=r,this.processor=i}return k(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,r=0;r<e;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=y.exec(i);t+=null===a?i+(n?u:h):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+u}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}();function P(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t,n){return t&&L(e.prototype,t),n&&L(e,n),e}function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var $=function(e){return null===e||!("object"===T(e)||"function"==typeof e)},A=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},M=function(){function e(t,n,r){R(this,e),this.dirty=!0,this.element=t,this.name=n,this.strings=r,this.parts=[];for(var i=0;i<r.length-1;i++)this.parts[i]=this._createPart()}return N(e,[{key:"_createPart",value:function(){return new z(this)}},{key:"_getValue",value:function(){for(var e=this.strings,t=e.length-1,n="",r=0;r<t;r++){n+=e[r];var i=this.parts[r];if(void 0!==i){var o=i.value;if($(o)||!A(o))n+="string"==typeof o?o:String(o);else{var a=!0,s=!1,c=void 0;try{for(var l,u=o[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var h=l.value;n+="string"==typeof h?h:String(h)}}catch(e){s=!0,c=e}finally{try{a||null==u.return||u.return()}finally{if(s)throw c}}}}}return n+=e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),z=function(){function e(t){R(this,e),this.value=void 0,this.committer=t}return N(e,[{key:"setValue",value:function(e){e===c||$(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;i(this.value);){var e=this.value;this.value=c,e(this)}this.value!==c&&this.committer.commit()}}]),e}(),I=function(){function e(t){R(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return N(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;i(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=c,e(this)}var t=this.__pendingValue;t!==c&&($(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):A(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{var n=new b(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r=this.value,i=0,o=!0,a=!1,s=void 0;try{for(var c,l=t[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var u=c.value;void 0===(n=r[i])&&(n=new e(this.options),r.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(r[i-1])),n.setValue(u),n.commit(),i++}}catch(e){a=!0,s=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw s}}i<r.length&&(r.length=i,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;s(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),U=function(){function e(t,n,r){if(R(this,e),this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=n,this.strings=r}return N(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;i(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=c,e(this)}if(this.__pendingValue!==c){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=c}}}]),e}(),V=function(e){function t(e,n,r){var i;return R(this,t),(i=P(this,E(t).call(this,e,n,r))).single=2===r.length&&""===r[0]&&""===r[1],i}return O(t,M),N(t,[{key:"_createPart",value:function(){return new F(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:C(E(t.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),t}(),F=function(e){function t(){return R(this,t),P(this,E(t).apply(this,arguments))}return O(t,z),t}(),q=!1;try{var H={get capture(){return q=!0,!1}};window.addEventListener("test",H,H),window.removeEventListener("test",H,H)}catch(e){}var B=function(){function e(t,n,r){var i=this;R(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=n,this.eventContext=r,this.__boundHandleEvent=function(e){return i.handleEvent(e)}}return N(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;i(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=c,e(this)}if(this.__pendingValue!==c){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),o=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=D(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=c}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),D=function(e){return e&&(q?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)};function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var G=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new V(e,t.slice(1),n).parts:"@"===i?[new B(e,t.slice(1),r.eventContext)]:"?"===i?[new U(e,t.slice(1),n)]:new M(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new I(e)}}])&&W(t.prototype,n),r&&W(t,r),e}());
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function J(e){var t=Y.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Y.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(u);return void 0===(n=t.keyString.get(r))&&(n=new p(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var Y=new Map,K=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");var Q=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new S(e,n,"html",G)},Z=133;function X(e,t){for(var n=e.element.content,r=e.parts,i=document.createTreeWalker(n,Z,null,!1),o=te(r),a=r[o],s=-1,c=0,l=[],u=null;i.nextNode();){s++;var h=i.currentNode;for(h.previousSibling===u&&(u=null),t.has(h)&&(l.push(h),null===u&&(u=h)),null!==u&&c++;void 0!==a&&a.index===s;)a.index=null!==u?-1:a.index-c,a=r[o=te(r,o)]}l.forEach(function(e){return e.parentNode.removeChild(e)})}var ee=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,Z,null,!1);n.nextNode();)t++;return t},te=function(e){for(var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){var n=e[t];if(v(n))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var ne=function(e,t){return"".concat(e,"--").concat(t)},re=!0;void 0===window.ShadyCSS?re=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),re=!1);var ie=function(e){return function(t){var n=ne(t.type,e),r=Y.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Y.set(n,r));var i=r.stringsArray.get(t.strings);if(void 0!==i)return i;var o=t.strings.join(u);if(void 0===(i=r.keyString.get(o))){var a=t.getTemplateElement();re&&window.ShadyCSS.prepareTemplateDom(a,e),i=new p(t,a),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i}},oe=["html","svg"],ae=new Set,se=function(e,t,n){ae.add(n);var r=e.querySelectorAll("style"),i=r.length;if(0!==i){for(var o=document.createElement("style"),a=0;a<i;a++){var s=r[a];s.parentNode.removeChild(s),o.textContent+=s.textContent}!function(e){oe.forEach(function(t){var n=Y.get(ne(t,e));void 0!==n&&n.keyString.forEach(function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(function(e){n.add(e)}),X(e,n)})})}(n);var c=t.element.content;!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,i=e.parts;if(null!=n)for(var o=document.createTreeWalker(r,Z,null,!1),a=te(i),s=0,c=-1;o.nextNode();)for(c++,o.currentNode===n&&(s=ee(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===c;){if(s>0){for(;-1!==a;)i[a].index+=s,a=te(i,a);return}a=te(i,a)}else r.appendChild(t)}(t,o,c.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n);var l=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else{c.insertBefore(o,c.firstChild);var u=new Set;u.add(o),X(t,u)}}else window.ShadyCSS.prepareTemplateStyles(t.element,n)},ce=n(0),le=n.n(ce);function ue(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e,t){return!t||"object"!==he(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ve(e){var t="function"==typeof Map?new Map:void 0;return(ve=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return ge(e,arguments,me(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),ye(r,e)})(e)}function ge(e,t,n){return(ge=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&ye(i,n.prototype),i}).apply(null,arguments)}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */window.JSCompiler_renameProperty=function(e,t){return e};var we={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},be=function(e,t){return t!==e&&(t==t||e==e)},_e={attribute:!0,type:String,converter:we,reflect:!1,hasChanged:be},xe=Promise.resolve(!0),ke=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=fe(this,me(t).call(this)))._updateState=0,e._instanceProperties=void 0,e._updatePromise=xe,e._hasConnectedResolver=void 0,e._changedProperties=new Map,e._reflectingProperties=void 0,e.initialize(),e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(t,ve(HTMLElement)),n=t,r=[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach(function(t,n){if(e.hasOwnProperty(n)){var r=e[n];delete e[n],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(n,r)}})}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach(function(t,n){return e[n]=t}),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this._attributeToProperty(e,n)}},{key:"_propertyToAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_e,r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){var o=r._propertyValueToAttribute(t,n);if(void 0===o)return;this._updateState=8|this._updateState,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){var i=n._classProperties.get(r)||_e;this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,i),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(e,t){var n=!0;if(void 0!==e){var r=this.constructor,i=r._classProperties.get(e)||_e;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}},{key:"requestUpdate",value:function(e,t){return this._requestUpdate(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:function(){var e,t=(e=le.a.mark(function e(){var t,n,r,i,o=this;return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,r=this._updatePromise,this._updatePromise=new Promise(function(e,r){t=e,n=r}),e.prev=3,e.next=6,r;case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:if(this._hasConnected){e.next=13;break}return e.next=13,new Promise(function(e){return o._hasConnectedResolver=e});case 13:if(e.prev=13,null==(i=this.performUpdate())){e.next=18;break}return e.next=18,i;case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13),n(e.t1);case 23:t(!this._hasRequestedUpdate);case 24:case"end":return e.stop()}},e,this,[[3,8],[13,20]])}),function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){de(o,r,i,a,s,"next",e)}function s(e){de(o,r,i,a,s,"throw",e)}a(void 0)})});return function(){return t.apply(this,arguments)}}()},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(function(e,n){return t._propertyToAttribute(n,t[n],e)}),this._reflectingProperties=void 0)}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}},{key:"_hasConnected",get:function(){return 32&this._updateState}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._updatePromise}}],i=[{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(function(t,n){return e._classProperties.set(n,t)})}}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_e;if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var n="symbol"===he(e)?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get:function(){return this[n]},set:function(t){var r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))||!this.finalized){var e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,n=[].concat(ue(Object.getOwnPropertyNames(t)),ue("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[])),r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value;this.createProperty(c,t[c])}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}}},{key:"_attributeNameForProperty",value:function(e,t){var n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:be)(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var n=t.type,r=t.converter||we,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var n=t.type,r=t.converter;return(r&&r.toAttribute||we.toAttribute)(e,n)}}},{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach(function(n,r){var i=e._attributeNameForProperty(r,n);void 0!==i&&(e._attributeToPropertyMap.set(i,r),t.push(i))}),t}}],r&&pe(n.prototype,r),i&&pe(n,i),t}();ke.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var Se=function(e,t){return"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer:function(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher:function(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher:function(n){n.createProperty(t.key,e)}})},Pe=function(e,t,n){t.constructor.createProperty(n,e)};function Ce(e){return function(t,n){return void 0!==n?Pe(e,t,n):Se(e,t)}}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Oe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),Re=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n!==je)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}var t,n,r;return t=e,(n=[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(Oe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}])&&Ee(t.prototype,n),r&&Ee(t,r),e}(),Le=function(e){return new Re(String(e),je)},Ne=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n.reduce(function(t,n,r){return t+function(e){if(e instanceof Re)return e.cssText;if("number"==typeof e)return e;throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(e,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))}(n)+e[r+1]},e[0]);return new Re(i,je)};function Te(e){return(Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ae(e,t){return!t||"object"!==Te(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Me(e,t,n){return(Me="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ze(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function ze(e){return(ze=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ie(e,t){return(Ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");var Ue=function(e){return e.flat?e.flat(1/0):function e(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=0,i=t.length;r<i;r++){var o=t[r];Array.isArray(o)?e(o,n):n.push(o)}return n}(e)},Ve=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ae(this,ze(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ie(e,t)}(t,ke),n=t,i=[{key:"finalize",value:function(){Me(ze(t),"finalize",this).call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}},{key:"_getUniqueStyles",value:function(){var e=this.styles,t=[];Array.isArray(e)?Ue(e).reduceRight(function(e,t){return e.add(t),e},new Set).forEach(function(e){return t.unshift(e)}):e&&t.push(e);return t}}],(r=[{key:"initialize",value:function(){Me(ze(t.prototype),"initialize",this).call(this),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Oe?this.renderRoot.adoptedStyleSheets=e.map(function(e){return e.styleSheet}):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(function(e){return e.cssText}),this.localName))}},{key:"connectedCallback",value:function(){Me(ze(t.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var n=this;Me(ze(t.prototype),"update",this).call(this,e);var r=this.render();r instanceof S&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(function(e){var t=document.createElement("style");t.textContent=e.cssText,n.renderRoot.appendChild(t)}))}},{key:"render",value:function(){}}])&&$e(n.prototype,r),i&&$e(n,i),t}();function Fe(e){return{effect:{opacity:[.5,1],transform:["scale(.95)","scale(1)"]},options:{duration:e}}}function qe(e,t){return{effect:{opacity:t?[0,1]:[1,0]},options:{duration:e}}}Ve.finalized=!0,Ve.render=function(e,t,n){var r=n.scopeName,i=K.has(t),o=re&&11===t.nodeType&&!!t.host&&e instanceof S,a=o&&!ae.has(r),c=a?document.createDocumentFragment():t;if(function(e,t,n){var r=K.get(t);void 0===r&&(s(t,t.firstChild),K.set(t,r=new I(Object.assign({templateFactory:J},n))),r.appendInto(t)),r.setValue(e),r.commit()}(e,c,Object.assign({templateFactory:ie(r)},n)),a){var l=K.get(c);K.delete(c),l.value instanceof b&&se(c,l.value.template,r),s(t,t.firstChild),t.appendChild(c),K.set(t,l)}!i&&o&&window.ShadyCSS.styleElement(t.host)};var He=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})};const Be={Bootstrap:{promise:(e,t)=>{const n=[];for(const r of e){const e=new Promise(e=>{const n=t.querySelector(r),i=new MutationObserver(t=>{t.length&&"attributes"==t[0].type&&"loaded"===t[0].attributeName&&(i.disconnect(),e())});i.observe(n,{attributes:!0})});n.push(e)}return Promise.all(n)},load:(e,t,n,r)=>He(void 0,void 0,void 0,function*(){const i="%s | Léonard C.",o=customElements.get("ui-"+e);t.classList.remove("full-width");const a=customElements.get("ui-not-found"),s=o?new o:new a(e);if(s.head&&s.head.title?document.title=i.replace("%s",s.head.title):document.title="Léonard C.",!0!==s.isFullWidth||t.classList.contains("full-width")?s.isFullWidth||t.classList.remove("full-width"):t.classList.add("full-width"),t.appendChild(s),s instanceof a)throw new Be.Errors.NotFound(e);window.scrollTo(0,0),n.shown&&null===r&&(yield Be.UI.elara().menu(!0));const c=window.requestAnimationFrame(()=>{if(!s.shadowRoot)return void cancelAnimationFrame(c);const e=s.shadowRoot.querySelector("div");if(!e)return void cancelAnimationFrame(c);const t=Fe(300);e.animate(t.effect,t.options)})})},Constants:{modes:{default:"day"}},Routing:{redirect:(e,t="_blank")=>!!window.open(e,t),navigate:e=>(location.hash=`#!${e}`,!0),hashChange(e){let t=e.newURL.replace(location.origin+location.pathname,"").split("#!").filter(Boolean),n=null;n=0===t.length?t.shift():t.pop();if(e.oldURL===e.newURL)return null;const r=customElements.get("ui-"+n);return r&&!0===r.hasRouting?n:e.newURL!==location.origin+location.pathname&&n?n:"home"}},UI:{processing:{toDataURL:e=>new Promise((t,n)=>{const r=new Image;r.crossOrigin="Anonymous",r.src=e,setTimeout(()=>{!1===r.complete&&(console.warn("Elara ::: Image loading was too slow, rejecting"),r.src="",n())},1200),r.onload=()=>{const e=document.createElement("canvas"),n=e.getContext("2d");e.height=r.naturalHeight,e.width=r.naturalWidth,n.drawImage(r,0,0),t(e.toDataURL("image/jpeg"))},r.onerror=()=>{n()}})},queries:{DARK:"(prefers-color-scheme: dark)",LIGHT:"(prefers-color-scheme: light)"},modes:{localStorageKey:"night-mode"},typography:{heading:Ne`h1, h2 { user-select: none; font-family: var(--elara-font-display); } h1::first-letter { font-size: 1.3em; } h2::first-letter { font-size: 1.2em }`},elara:()=>document.querySelector("elara-app"),mode:()=>localStorage.getItem(Be.UI.modes.localStorageKey),nightSwitchClick:(e,t)=>He(void 0,void 0,void 0,function*(){e.preventDefault(),e.stopPropagation();const n=!Be.UI.isSunny()?"day":"night";return localStorage.setItem(Be.UI.modes.localStorageKey,n),yield t.requestUpdate(),Be.UI.elara().askModeChange(n)}),applyVariablesFor:e=>{const t=document.documentElement;return"night"===e?(t.style.setProperty("--elara-background-color","#373737"),t.style.setProperty("--elara-font-color","#f0f0f0"),t.style.setProperty("--elara-font-hover","#9e9e9e")):(t.style.removeProperty("--elara-background-color"),t.style.removeProperty("--elara-font-color"),t.style.removeProperty("--elara-font-hover")),!0},hasSwitched:()=>null!==Be.UI.mode(),isSunny:()=>"day"===Be.UI.mode(),dayOrNight:()=>Be.UI.hasSwitched()?Be.UI.isSunny()?"day":"night":Be.UI.isDarkOS()?"day":"night",isDarkOS:()=>window.matchMedia?window.matchMedia(Be.UI.queries.DARK).matches:(console.warn("Elara:: Night mode not supported at the moment"),!1)},Mailing:{error:"An error occured, please retry later. 😔",success:"Thanks for your message ! I will try to reply as soon as possible 😀",contact:(e,t)=>He(void 0,void 0,void 0,function*(){let n=!0;const r=[e.name,e.email,e.message];if(r.forEach(e=>(e=>e.validate())(e)?e.invalid=!1:e.invalid=!0),r.forEach(e=>{e.invalid&&n&&(n=!1)}),!n)return n;e.submit.disabled=!0,r.forEach(e=>e.disabled=!0);const i=new FormData;return i.append("name",e.name.value),i.append("email",e.email.value),i.append("message",e.message.value),new Promise((n,r)=>{const o=new XMLHttpRequest;o.open("POST",t),o.onreadystatechange=()=>{200===o.status&&(e.form.classList.add("sended"),n(!0))},o.onerror=o.onabort=()=>{r(!1)},o.send(i)})})},Errors:{GenericError:class extends Error{constructor(){super(...arguments),this.elara=!1,this.continue=!0,this.reload=!0}},NotFound:class extends Error{constructor(){super(...arguments),this.elara=!0,this.continue=!0,this.reload=!1}},Prototype:class extends Error{constructor(){super(...arguments),this.elara=!1,this.continue=!0,this.reload=!1}}},Colors:{social:{github:"#24292e",twitter:"#1da1f2",youtube:"#ff0000",linkedin:"#0073b0",facebook:"#3b5998",instagram:"#333",medium:"#3CB371"}}};var De=Be;class We extends Ve{get head(){return{title:null,description:null,type:null,image:null,slug:null}}static get styles(){return[De.UI.typography.heading]}}var Ge=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})};class Je extends We{connectedCallback(){super.connectedCallback(),De.UI.applyVariablesFor(De.UI.dayOrNight()),this._onHashChangeListener=this._onHashChange.bind(this),window.addEventListener("hashchange",this._onHashChangeListener,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._onHashChangeListener)}createRenderRoot(){return this.attachShadow({mode:"open"})}_onHashChange(e){return Ge(this,void 0,void 0,function*(){const t=De.Routing.hashChange(e);this.route=t,this._content.innerHTML="",yield this.load(t)})}load(e){return Ge(this,void 0,void 0,function*(){return De.Bootstrap.load(e,this._content,this._menu,this._menuFade)})}askModeChange(e){return De.UI.applyVariablesFor(e)}get _content(){return this.shadowRoot.querySelector("#content")}get _menu(){return this.shadowRoot.querySelector("#menu")}}(function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);o>3&&a&&Object.defineProperty(t,n,a)})([Ce({reflect:!0,type:String})],Je.prototype,"route",void 0);class Ye extends Ve{}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var Ke,Qe=function(e,t){var n=e.startNode.parentNode,r=void 0===t?e.endNode:t.startNode,i=n.insertBefore(g(),r);n.insertBefore(g(),r);var o=new I(e.options);return o.insertAfterNode(i),o},Ze=function(e,t){return e.setValue(t),e.commit(),e},Xe=function(e,t,n){var r=e.startNode.parentNode,i=n?n.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&a(r,t.startNode,o,i)},et=function(e){s(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},tt=function(e,t,n){for(var r=new Map,i=t;i<=n;i++)r.set(e[i],i);return r},nt=new WeakMap,rt=new WeakMap,it=(Ke=function(e,t,n){var r;return void 0===n?n=t:void 0!==t&&(r=t),function(t){if(!(t instanceof I))throw new Error("repeat can only be used in text bindings");var i,o,a=nt.get(t)||[],s=rt.get(t)||[],c=[],l=[],u=[],h=0,d=!0,p=!1,f=void 0;try{for(var v,g=e[Symbol.iterator]();!(d=(v=g.next()).done);d=!0){var y=v.value;u[h]=r?r(y,h):h,l[h]=n(y,h),h++}}catch(e){p=!0,f=e}finally{try{d||null==g.return||g.return()}finally{if(p)throw f}}for(var m=0,w=a.length-1,b=0,_=l.length-1;m<=w&&b<=_;)if(null===a[m])m++;else if(null===a[w])w--;else if(s[m]===u[b])c[b]=Ze(a[m],l[b]),m++,b++;else if(s[w]===u[_])c[_]=Ze(a[w],l[_]),w--,_--;else if(s[m]===u[_])c[_]=Ze(a[m],l[_]),Xe(t,a[m],c[_+1]),m++,_--;else if(s[w]===u[b])c[b]=Ze(a[w],l[b]),Xe(t,a[w],a[m]),w--,b++;else if(void 0===i&&(i=tt(u,b,_),o=tt(s,m,w)),i.has(s[m]))if(i.has(s[w])){var x=o.get(u[b]),k=void 0!==x?a[x]:null;if(null===k){var S=Qe(t,a[m]);Ze(S,l[b]),c[b]=S}else c[b]=Ze(k,l[b]),Xe(t,k,a[m]),a[x]=null;b++}else et(a[w]),w--;else et(a[m]),m++;for(;b<=_;){var P=Qe(t,c[_+1]);Ze(P,l[b]),c[b++]=P}for(;m<=w;){var C=a[m++];null!==C&&et(C)}nt.set(t,c),rt.set(t,u)}},function(){var e=Ke.apply(void 0,arguments);return r.set(e,!0),e}),ot=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},at=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})};class st extends Ye{constructor(){super(...arguments),this.repositories=[],this.currentPage=null,this.page=0,this.inError=!1,this.chunksLength=6}firstUpdated(){return at(this,void 0,void 0,function*(){this._spinner.active=!0;const e=new XMLHttpRequest;e.open("POST","https://api.github.com/graphql",!0),e.setRequestHeader("Authorization","bearer "+atob("ZDQ0Y2JmYjVlOGRiOTRjMjJkNThlYjg4ZjFlNjIyODM4YzQ1N2Q3Mg==")),e.send(JSON.stringify({query:'{ search(query: "user:ghostfly is:public", type: REPOSITORY, first: 100) { repositoryCount edges { node { ... on Repository { name stargazers { totalCount } description forkCount createdAt url primaryLanguage {name} }}}}}'}));const t=()=>{if(!this._spinner)return;this._spinner.active=!1;const e=this._spinner.parentElement;e.removeChild(this._spinner),this.shadowRoot.removeChild(e)},n=()=>{t(),this.inError=!0};e.onerror=n,e.onreadystatechange=()=>at(this,void 0,void 0,function*(){if(4==e.readyState&&200==e.status){const n=JSON.parse(e.responseText).data.search.edges.sort((e,t)=>new Date(t.node.createdAt)-new Date(e.node.createdAt));this.repositories=this._chunk(n,this.chunksLength),this.currentPage=this.repositories[this.page],t(),yield this.updateComplete,this._pulse()}403===e.status&&n()})})}_chunk(e,t){const n=[],r=e.length;let i=0;for(;i<r;)n.push(e.slice(i,i+=t));return n}static get styles(){return Ne`
        .github-card {
            cursor: pointer;
            width: 85%;
            padding: 2.5vh 5%;
            display: inline-block;
            border-radius: 5px;
            color: var(--elara-font-color);
            border: 1px solid var(--elara-font-color);
            box-shadow: 0px 0px 0px rgb(0, 0, 0, 0);
            transition: 0.4s ease-in-out;
            margin: 2vh 0px;
            transform: scale(1);
            font-family: var(--elara-font-display);
            transition: transform, border .3s;
        }

        .github-card:hover {
            border: 1px solid var(--elara-font-hover);
        }

        .title {
            font-size: 24px;
            font-weight: bold;
            margin: 1vh 0px;
        }

        .description {
            font-size: 18px;
            margin: 2vh 0px;
            font-weight: bold;
        }

        .bottom {
            margin: 1vh 0px;
            font-size: 14px;
        }

        .bottom > span {
            margin-right: 20px;
            font-weight: bold;
        }

        @media (min-width: 500px){
            .two-cols {
                columns: 2;
            }
        }

        .pagination {
            display: flex;
            align-items: center;
            justify-content: space-between;
            user-select: none;
        }

        .next {
            display: flex;
            cursor: pointer;
            justify-content: flex-end;
            font-weight: bold;
            transition: color .3s;
        }

        .next:hover {
            color: var(--elara-primary);
        }

        .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 50vh;
        }

        .link {
            color: var(--elara-secondary);
            text-decoration: none;
            transition: color .3s;
        }
        .link:hover {
            color: var(--elara-primary);
        }
        a[disabled='true'] {
            pointer-events: none;
            opacity: .7;
        }
        `}_card(e){return Q`
        <section class="github-card" @click=${()=>De.Routing.redirect(e.node.url)}}>
            <div class="title">${e.node.name}</div>
            ${e.node.description?Q`<div class="description">${e.node.description}</div>`:Q``}
            <div class="bottom">
                <span>${e.node.primaryLanguage?e.node.primaryLanguage.name:""}</span>
                <span><iron-icon icon="stars"></iron-icon> ${e.node.stargazers.totalCount}</span>
                <span><iron-icon icon="subdirectory-arrow-right"></iron-icon> ${e.node.forkCount}</span>
            </div>
        </section>
        `}render(){return Q`
        <div class="loader">
            <paper-spinner></paper-spinner>
        </div>
        ${this.inError?Q`<p>Can't load GitHub repositories.. 😢 <br />You can check on <a class="link" href="https://github.com/ghostfly/">GitHub</a> directly !</p>`:Q``}
        ${this.currentPage?Q`
        <div class="two-cols">
            ${it(this.currentPage,this._card)}
        </div>
        ${this._pagination}
        `:Q``}
        <a class="next" @click=${()=>De.Routing.navigate("about")}>> About</a>
        `}_pulse(){const e=this.shadowRoot.querySelectorAll(".two-cols section"),t=Fe(600);e.forEach(e=>{e.animate(t.effect,t.options)})}get _pagination(){return Q`
        <div class="pagination">
            ${this.page+1} / ${this.repositories.length}
            ${this._back} 
            ${this._next}
        </div>`}get _back(){return Q`
        <a role="button" disabled=${0===this.page} @click=${()=>at(this,void 0,void 0,function*(){this.page--,this.currentPage=this.repositories[this.page],yield this.updateComplete,this._pulse()})}>
            <paper-icon-button aria-label="Previous page" icon="arrow-back"></paper-icon-button>
        </a>
        `}get _next(){return Q`
        <a role="button" disabled=${this.page+1===this.repositories.length} @click=${()=>at(this,void 0,void 0,function*(){this.page++,this.currentPage=this.repositories[this.page],yield this.updateComplete,this._pulse()})}>
            <paper-icon-button aria-label="Next page" icon="arrow-forward"></paper-icon-button>
        </a>
        `}get _spinner(){return this.shadowRoot.querySelector("paper-spinner")}}st.is="ui-github-work",ot([Ce({type:Array})],st.prototype,"repositories",void 0),ot([Ce({type:Array})],st.prototype,"currentPage",void 0),ot([Ce({type:Number,reflect:!0})],st.prototype,"page",void 0),ot([Ce({type:Boolean,reflect:!0})],st.prototype,"inError",void 0),customElements.define(st.is,st);var ct=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},lt=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})};class ut extends Ye{constructor(){super(...arguments),this.loaded=!1}connectedCallback(){super.connectedCallback(),this._hashChangeListener=this._onHashChange.bind(this),window.addEventListener("hashchange",this._hashChangeListener)}_onProfilePictureLoaded(e){if(!e.detail)return;const t=e.target;if(e.detail.value){const e=qe(500,!0);t.animate(e.effect,e.options),t.classList.add("shown"),t.removeEventListener("loaded-changed",this._onProfilePictureLoaded)}}firstUpdated(){return lt(this,void 0,void 0,function*(){try{this.picture.addEventListener("loaded-changed",this._onProfilePictureLoaded);const e=yield De.UI.processing.toDataURL("https://source.unsplash.com/collection/1727869/1366x768");if(this.loaded=!0,this.container.style.backgroundImage=`url('${e}')`,this.picture.loaded)return void this._onProfilePictureLoaded({target:this.picture,detail:{value:!0}})}catch(e){const t=yield De.UI.processing.toDataURL("/assets/fallback.jpeg");this.container.style.backgroundImage=`url('${t}')`,this.loaded=!0}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._hashChangeListener)}_onHashChange(e){const t=De.Routing.hashChange(e);this.route=t}static get styles(){return[...We.styles,Ne`
        .profile {
            width: 24vw;
            padding: 4vh 3vw;
            height: 92vh;
            z-index: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            background: var(--elara-darkgray) center center;
            background-size: cover;
            background-repeat: no-repeat;
            position: fixed;
            color: #fff;
            user-select: none;
            z-index: 999;
        }

        .profile.is-link {
            cursor: pointer;
        }

        .profile .bio > div {
            font-weight: bold;
            font-size: 1.2em;
            margin: 1.5vh 0px;
        }

        .profile::after {
            content: '';
            background-color: rgba(0,0,0, .3);
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
        }

        iron-image, .bio {
            z-index: 1;
        }

        iron-image {
            visibility: hidden;
        }

        iron-image.shown {
            visibility: visible;
        }
        
        .profile > .pic {
            width: 20vw;
            height: 20vw;
            border-radius: 3px;
        }
        svg {
            height: 30px;
            width: 30px;
            fill: white;
        }

        .night-switch {
            position: absolute;
            left: 20px;
            bottom: 20px;
            z-index: 3;
        }

        .day-night{
            cursor: pointer;
        }`]}render(){return Q`
        <div role="link" id="container" class="profile ${"home"!==this.route&&this.route?"is-link":""}" @click=${()=>De.Routing.navigate("home")}>
            <iron-image id="pic" class="pic" sizing="contain" src="/assets/me.svg"></iron-image>
            <div class="bio">
                <div class="username">
                    <span>Léonard C. > @ghostfly</span>
                </div>
                <div class="current-job">Full-stack Developer</div>
                <div class="about">
                    <span>Nice, France</span>
                    <br />
                    <span>Focusing 🎯</span>
                </div>
            </div>

            <div class="night-switch" @click=${e=>lt(this,void 0,void 0,function*(){return De.UI.nightSwitchClick(e,this)})}>${this._nightToggle()}</div>
        </div>
        `}_nightToggle(){return"day"===De.UI.dayOrNight()?this._day:this._night}get _day(){return Q`
        <svg class="day-night" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000">
            <g><path d="M715.9,424.2c-18.2-33.3-52.9-67.9-99.8-84.8c-46.4-17.4-104.7-16-153.5,10.3c-49.9,24.7-85.2,80.2-84.9,136.3c-0.7,55.5,30.1,110.2,77.6,131.4c46.7,21.9,98.5,10.9,128.6-13.6c32.3-24.8,40.9-59.6,40.8-80.5c-0.3-39.2-21.3-74.5-52.8-88.1c-30.7-13.6-65.4-7.1-87.1,12.8c-23,19.8-27.9,54.2-13.9,78.8c12.2,26.4,49.8,36.3,72.7,17.6c-26.2,14.1-55.5-1.1-61.8-22.8c-8.3-21.3-0.7-45.6,16.3-57.4c34.6-28,98.6-3.4,97.8,58.7c0,15.2-6.3,40.3-29.7,58.1c-22.6,18.6-62.9,27.2-98.9,10.3c-36-15.6-61.3-59.5-60.9-104.9c0.1-45.9,27.9-90.3,69.6-111.2c41.3-22.3,90.7-23.5,130.1-8.8c39.9,14.5,68.9,43.1,84.9,72.3c34.9,59.1,22.8,104.8,23.7,103.7c-0.2-1.1-1,45.4-47.1,96.2c-43.8,48.5-135.9,104.2-229.3,72.5c-89-29.9-167.9-121.6-159.7-206.4c3.3-86.4,53.1-145.4,77.7-167.6c47.6-43.3,99-58.2,146.9-58c48.4,0.4,94.8,14.1,145.3,40.5c-45.5-34.1-91.4-56-144.3-61.6c-52.3-5.5-113.6,8.9-167.4,57.9c-27.9,25.3-83.1,90-87.1,187.7c-3.2,47.3,14.7,103.4,49.9,142.6c33,40.7,77.6,76.6,130,92.3c52,17.1,108.1,11.4,153-6.9C627.6,712.8,663.4,686,689,658c52.3-57.2,54.3-113.6,54.3-112.1C742.4,547.6,755.9,491.4,715.9,424.2z"/><path d="M858.7,141.3c0,0-48.5,22.6-92.4,66.5c-43.9,43.9-66.5,92.4-66.5,92.4s48.5-22.7,92.4-66.5C836.1,189.8,858.7,141.3,858.7,141.3z"/><path d="M141.3,858.7c0,0,48.5-22.7,92.4-66.5c43.9-43.9,66.5-92.4,66.5-92.4s-48.5,22.6-92.4,66.5C164,810.2,141.3,858.7,141.3,858.7z"/><path d="M886.2,415.4c59.9-16.1,103.8-46.7,103.8-46.7s-53.3-4.6-113.3,11.4c-59.9,16.1-103.8,46.7-103.8,46.7S826.3,431.5,886.2,415.4z"/><path d="M113.8,584.6C53.9,600.6,10,631.3,10,631.3s53.3,4.6,113.3-11.4c60-16.1,103.8-46.7,103.8-46.7S173.8,568.5,113.8,584.6z"/><path d="M772.9,573.1c0,0,43.9,30.7,103.8,46.7c60,16.1,113.3,11.4,113.3,11.4s-43.9-30.7-103.8-46.7C826.3,568.5,772.9,573.1,772.9,573.1z"/><path d="M227.1,426.9c0,0-43.9-30.7-103.8-46.7C63.3,364.1,10,368.7,10,368.7s43.9,30.7,103.8,46.7C173.8,431.5,227.1,426.9,227.1,426.9z"/><path d="M699.8,699.8c0,0,22.7,48.5,66.5,92.4c43.9,43.9,92.4,66.5,92.4,66.5s-22.7-48.5-66.5-92.4C748.3,722.4,699.8,699.8,699.8,699.8z"/><path d="M300.2,300.2c0,0-22.6-48.5-66.5-92.4c-43.9-43.9-92.4-66.5-92.4-66.5s22.6,48.5,66.5,92.4C251.7,277.5,300.2,300.2,300.2,300.2z"/><path d="M573.1,772.9c0,0-4.6,53.3,11.4,113.3c16.1,59.9,46.7,103.8,46.7,103.8s4.6-53.3-11.4-113.3C603.8,816.8,573.1,772.9,573.1,772.9z"/><path d="M426.9,227.1c0,0,4.6-53.3-11.4-113.3C399.4,53.9,368.7,10,368.7,10s-4.6,53.3,11.4,113.3C396.2,183.2,426.9,227.1,426.9,227.1z"/><path d="M380.1,876.7c-16.1,60-11.4,113.3-11.4,113.3s30.7-43.9,46.7-103.8c16.1-60,11.4-113.3,11.4-113.3S396.2,816.8,380.1,876.7z"/><path d="M619.9,123.3C635.9,63.3,631.3,10,631.3,10s-30.7,43.9-46.7,103.8c-16.1,59.9-11.4,113.3-11.4,113.3S603.8,183.2,619.9,123.3z"/></g>
        </svg>`}get _night(){return Q`
        <svg class="day-night" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 1277.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1277.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M6455 11974 c-1577 -130 -2666 -545 -3649 -1390 -336 -289 -783 -767 -981 -1050 -751 -1070 -1060 -2448 -870 -3874 40 -298 138 -727 230 -1010 276 -847 694 -1560 1293 -2207 161 -174 608 -585 767 -705 769 -581 1810 -969 2905 -1082 929 -96 1857 22 2664 341 547 216 1006 499 1516 937 152 130 529 511 650 655 658 793 1031 1650 1194 2746 43 288 62 468 96 910 25 331 25 347 -10 195 -329 -1462 -1508 -2919 -2925 -3615 -811 -398 -1692 -540 -2625 -425 -970 121 -1866 519 -2504 1113 -154 143 -421 429 -543 582 -512 641 -853 1400 -992 2210 -52 302 -65 473 -65 810 0 446 40 776 145 1200 122 492 350 1042 561 1357 700 1048 1337 1655 2082 1984 323 142 703 249 1071 299 257 36 254 41 -10 19z"/>
            </g>
        </svg>
        `}get picture(){return this.shadowRoot.querySelector("#pic")}get container(){return this.shadowRoot.querySelector("#container")}}ut.is="ui-profile",ct([Ce({type:String,reflect:!0})],ut.prototype,"route",void 0),ct([Ce({type:Boolean,reflect:!0})],ut.prototype,"loaded",void 0),customElements.define(ut.is,ut);class ht extends We{get head(){return{title:"Work",description:"",type:"page",image:"",slug:"#!home"}}render(){return Q`
        <div class="home">
            <h1>Work</h1>
            <ui-github-work></ui-github-work>
        </div>
        `}}ht.is="ui-home",customElements.define(ht.is,ht);var dt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},pt=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})};class ft extends We{constructor(){super(...arguments),this.inError=!1,this.isSuccess=!1,this.isOnline=window.navigator.onLine}connectedCallback(){super.connectedCallback(),this._onlineStatusListener=this._onStatusChange.bind(this),window.addEventListener("online",this._onlineStatusListener),window.addEventListener("offline",this._onlineStatusListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("online",this._onlineStatusListener),window.removeEventListener("offline",this._onlineStatusListener)}_onStatusChange(e){const t=e.type;this.isOnline="online"===t}get head(){return{title:"Contact",description:"",type:"page",image:"",slug:"#!contact"}}get _links(){return[{label:"Github",link:"https://github.com/Ghostfly",svg:Q`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>`},{label:"Medium",link:"https://medium.com/@ghostfly1",svg:Q`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.962 7.257l-5.457 8.867-3.923-6.375 3.126-5.08c.112-.183.32-.287.527-.287.05 0 .1.008.15.02.038.01.077.023.113.04l5.43 2.716.006.002.01.008c.027.02.036.057.018.087zM9.86 8.592v5.783l5.14 2.57-5.14-8.353zm5.912 8.74l4.23 2.114c.552.275.998.083.998-.43V8.836l-5.228 8.495zM8.968 7.177l-5.303-2.65c-.096-.05-.187-.072-.27-.072-.232 0-.395.18-.395.482v11.45c0 .306.224.67.498.806l4.67 2.335c.12.06.235.087.338.087.29 0 .494-.225.494-.602V7.23c0-.022-.012-.042-.032-.052z"/></g></svg>`},{label:"LinkedIn",link:"https://fr.linkedin.com/in/leonardcherouvrier/en",svg:Q`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.34 18.338H5.666v-8.59H8.34v8.59zM7.003 8.574c-.857 0-1.55-.694-1.55-1.548 0-.855.692-1.548 1.55-1.548.854 0 1.547.694 1.547 1.548 0 .855-.692 1.548-1.546 1.548zm11.335 9.764h-2.67V14.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.6 1.086-1.6 2.206v4.248h-2.668v-8.59h2.56v1.174h.036c.357-.675 1.228-1.387 2.527-1.387 2.703 0 3.203 1.78 3.203 4.092v4.71z"/></g></svg>`},{label:"Facebook",link:"https://www.facebook.com/gh0std3v",svg:Q`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.007 3H3.993C3.445 3 3 3.445 3 3.993v16.013c0 .55.445.994.993.994h8.62v-6.97H10.27V11.31h2.346V9.31c0-2.325 1.42-3.59 3.494-3.59.993 0 1.847.073 2.096.106v2.43h-1.438c-1.128 0-1.346.537-1.346 1.324v1.734h2.69l-.35 2.717h-2.34V21h4.587c.548 0 .993-.445.993-.993V3.993c0-.548-.445-.993-.993-.993z"/></g></svg>`},{label:"Instagram",link:"https://www.instagram.com/gh0stfly_",svg:Q`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 4.622c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.234.052-3.638.052s-2.688-.01-3.637-.052c-.877-.04-1.354-.187-1.67-.31-.42-.163-.72-.358-1.036-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638s.01-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.42.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052M12 3c-2.444 0-2.75.01-3.71.054s-1.613.196-2.185.418c-.592.23-1.094.538-1.594 1.04-.5.5-.807 1-1.037 1.593-.223.572-.375 1.226-.42 2.184C3.01 9.25 3 9.555 3 12s.01 2.75.054 3.71.196 1.613.418 2.186c.23.592.538 1.094 1.038 1.594s1.002.808 1.594 1.038c.572.222 1.227.375 2.185.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054 1.613-.196 2.186-.418c.592-.23 1.094-.538 1.594-1.038s.808-1.002 1.038-1.594c.222-.572.375-1.227.418-2.185.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71-.196-1.613-.418-2.186c-.23-.592-.538-1.094-1.038-1.594s-1.002-.808-1.594-1.038c-.572-.222-1.227-.375-2.185-.418C14.75 3.01 14.445 3 12 3zm0 4.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08c.596 0 1.08-.484 1.08-1.08s-.483-1.08-1.08-1.08z"/></g></svg>`},{label:"Twitter",link:"https://twitter.com/gh0std3v",svg:Q`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-2.534 6.71c.004.1.007.198.007.298 0 3.045-2.318 6.556-6.556 6.556-1.3 0-2.512-.38-3.532-1.035.18.02.364.03.55.03 1.08 0 2.073-.367 2.862-.985-1.008-.02-1.86-.685-2.152-1.6.14.027.285.04.433.04.21 0 .414-.027.607-.08-1.054-.212-1.848-1.143-1.848-2.26v-.028c.31.173.666.276 1.044.288-.617-.413-1.024-1.118-1.024-1.918 0-.422.114-.818.312-1.158 1.136 1.393 2.834 2.31 4.75 2.406-.04-.17-.06-.344-.06-.525 0-1.27 1.03-2.303 2.303-2.303.664 0 1.262.28 1.683.728.525-.103 1.018-.295 1.463-.56-.172.54-.537.99-1.013 1.276.466-.055.91-.18 1.323-.362-.31.46-.7.867-1.15 1.192z"/></g></svg>`},{label:"YouTube",link:"https://www.youtube.com/user/xSpirit6/videos",svg:Q`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"/></g></svg>`},{label:"Phone",link:"tel:+33668717002",svg:Q`<iron-icon icon="communication:call"></iron-icon>`}]}static get styles(){return[...We.styles,Ne`
                h1 { user-select: none; font-family: var(--elara-font-display); }
                h1::first-letter { font-size: 1.3em; }

                .contact { height: 100%; }

                paper-input, paper-textarea {
                    --paper-input-container-input-color: var(--elara-font-color);
                    --paper-input-container-focus-color: var(--elara-primary);
                }

                paper-button {
                    background-color: var(--elara-primary);
                    color: white;
                    margin: 1em 0;
                }

                .send {
                    float: right;
                    clear: both;
                }
                
                .grid {
                    display: flex;
                    flex-wrap: wrap;
                }

                .grid > .item {
                    display: flex;
                    flex: 1 0 5em;
                    margin: 0.5em;
                    justify-content: center;
                    align-items: center;
                }
                
                .clearfix { clear: both }

                .networks { height: 50%; }

                .networks svg, .networks iron-icon {
                    cursor: pointer;
                    min-width: 50px;
                }

                .github svg { ${Le(`fill: ${De.Colors.social.github}`)}}
                .twitter svg { ${Le(`fill: ${De.Colors.social.twitter}`)}}
                .youtube svg { ${Le(`fill: ${De.Colors.social.youtube}`)}}
                .linkedin svg { ${Le(`fill: ${De.Colors.social.linkedin}`)}}
                .facebook svg { ${Le(`fill: ${De.Colors.social.facebook}`)}}
                .instagram svg { ${Le(`fill: ${De.Colors.social.instagram}`)}}
                .medium svg { ${Le(`fill: ${De.Colors.social.medium}`)}}

                .prev { cursor: pointer; font-weight: bold; transition: color .3s; }
                .prev:hover { color: var(--elara-primary); }

                form paper-button[disabled] {
                    opacity: .7;
                }

                .disconnected {
                    margin: 1.5em;
                }
        `]}render(){return Q`
        <div class="contact">
            <h1>${this.head.title}</h1>
            ${!0===this.isOnline?Q`
            <form id="form">
                <paper-input id="name" label="Full name" min-length="4" required></paper-input>
                <paper-input id="email" label="Email" min-length="4" required></paper-input>
                <paper-textarea id="message" char-counter label="Message" min-length="4" required></paper-textarea>
                <paper-button class="send" @click=${this._doSend}>Send</paper-button>
            </form>
            `:Q`
            <div class="disconnected">
                <p>No internet, no mailing !</p>
                <p>Use links below to reach me on another computer 😌</p>
            </div>
            `}
            ${this.isSuccess?Q`${De.Mailing.success}`:Q``}
            ${this.inError?Q`${De.Mailing.error}`:Q``}
            <div class="clearfix"></div>
            <a class="prev" @click=${()=>De.Routing.navigate("projects")}>< Projects</a>
            <div class="grid networks">
                ${it(this._links,e=>this._makeLink(e.label,e.link,e.svg))}
            </div>
        </div>
        `}_makeLink(e,t,n){return Q`
            <div aria-label=${e} class="item ${e.toLowerCase()}" @click=${()=>{De.Routing.redirect(t)}} role="link">
                ${n}
            </div>
        `}_doSend(e){return pt(this,void 0,void 0,function*(){const t={form:this.shadowRoot.querySelector("#form"),submit:e.target,name:this.shadowRoot.querySelector("#name"),email:this.shadowRoot.querySelector("#email"),message:this.shadowRoot.querySelector("#message")};try{(yield De.Mailing.contact(t,"https://script.google.com/macros/s/AKfycbzdhNONz-1pGAlOktko4o5riYGErccxRfk8LsqTxq0ws31wKZ0/exec"))?(this.inError=!1,this.isSuccess=!0):(this.isSuccess=!1,this.inError=!1)}catch(e){this.inError=!0}})}}ft.is="ui-contact",dt([Ce({type:Boolean,reflect:!0})],ft.prototype,"inError",void 0),dt([Ce({type:Boolean,reflect:!0})],ft.prototype,"isSuccess",void 0),dt([Ce({type:Boolean,reflect:!0})],ft.prototype,"isOnline",void 0),customElements.define(ft.is,ft);class vt extends We{get head(){return{title:"About",description:"",type:"page",image:"",slug:"#!about"}}static get styles(){return[...We.styles,Ne`
            .cv { color: var(--elara-secondary); cursor: pointer; }
            .about { margin-bottom: 2em }
            .prev, .next { cursor: pointer; font-weight: bold; transition: color .3s;}
            .prev:hover, .next:hover {
                color: var(--elara-primary);
            }
            .pagination {
                display: flex;
                justify-content: space-between;
            }
        `]}render(){return Q`
        <div class="about">
            <h1>${this.head.title}</h1>
            <div class="row">
                <h2>Passionate since my childhood</h2>
                <div>When I was about six years old, I tried to bring back to life abandoned computers, often succeeding which allowed me to present myself in a computer store for internship opening my eyes on IT in general and offering me a significant view on reality." </div>
            </div>
            <div class="row">
                <h2>And after 12 years old</h2>
                <div>I realized the importance of IT for me, created my first website (Cheno.fr) which has been refurbished since, and discovered gradually that creation / design of interfaces, websites, apps and any other creative project was what I always sought, setting my future goals in life. After that, I tried as much as possible to learn by myself the computer science logic." </div>
            </div>
            <div class="row">
                <h2>Towards studies</h2>
                <div>
                    <p>After a rather unusual path, I ended up in a post baccalauréat IT diploma called BTS SIO, successfully validated. Bringing me to Miage, combining my computer aspirations, and my attraction for entrepreneurship. I've always dreamed of building my own business, in Nice, Holland.. Giving me the opportunity to create my own job and keep my creativity as sharp as possible. Just stayin' motivated.</p><p>Besides if you want to read it, here is my current 
                    <a role="link" class="cv" @click=${()=>De.Routing.redirect("/assets/resume.pdf")}>CV</a>.</p>
                </div>
            </div>
            <div class="pagination">
                <a class="prev" @click=${()=>De.Routing.navigate("home")}>< Work</a>
                <a class="next" @click=${()=>De.Routing.navigate("projects")}>> Projects</a>
            </div>
        </div>
        `}}vt.is="ui-about",customElements.define(vt.is,vt);var gt=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})};class yt extends We{get head(){return{title:"Projects",description:"",type:"page",image:"",slug:"#!projects"}}get projects(){return[{name:"Dobrunia Design",slug:"dobrunia",image:"/assets/projects/dobrunia.png",status:"published",repository:null,url:"https://www.dobruniadesign.com",tags:["Élara","WordPress","Design"]},{name:"LMC.Today",slug:"lmc",image:"/assets/projects/lmctoday.png",repository:"https://github.com/ghostfly/lmc-today",status:"published",url:"https://lmc.today",tags:["Élara","Futuristic","media"]},{name:"Listen With Me",slug:"lwm",image:null,repository:null,status:"Work in progress",url:"https://lwm.io",tags:["YouTube","Collaborative","Listening"]},{name:"Dandy Costard",slug:"dandy",image:"/assets/projects/dandy.svg",repository:null,status:"Work in progress",url:null,tags:["E-Commerce","Elara","Custom menswear","ThreeJS"]},{name:"Ghostfly.dev",slug:"ghostfly",image:"/assets/me.svg",repository:"https://github.com/Ghostfly/ghostfly.dev/tree/master",status:"Work in progress",url:null,tags:["Elara","LitElement","Github Pages"]},{name:"Persin Conseil",slug:"persin",image:"/assets/projects/persin.jpg",status:"published",repository:"https://github.com/Ghostfly/persin-conseil",url:"https://www.persin.fr",tags:["Lit-Element","Elara","Workbox"]},{name:"Cheno",slug:"cheno",image:"/assets/projects/cheno.svg",status:"published",repository:null,url:"https://www.cheno.fr",tags:["Slim Framework","HTML5","CSS3"]},{name:"Renouveau Sociétal",slug:"rs",image:"/assets/projects/rs.png",status:"published",repository:null,url:"https://www.renouveausocietal.fr",tags:["WordPress","Handmade template"]},{name:"G-Addiction",slug:"g-addiction",image:"/assets/projects/g-addiction.png",status:"published",repository:null,url:"https://www.g-addiction.com",tags:["WordPress","chosen template"]},{name:"Who?",slug:"who",status:"...",repository:null,url:null,image:"/assets/projects/who.svg",tags:["?"]}]}_onIronImageLoaded(e){return gt(this,void 0,void 0,function*(){if(!e.detail)return;const t=e.target;if(e.detail.value){const e=qe(500,!0);t.classList.add("shown");const n=t.animate(e.effect,e.options);yield n.finished,t.removeEventListener("loaded-changed",this._onIronImageLoaded)}})}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return gt(this,void 0,void 0,function*(){e.connectedCallback.call(this),yield this.updateComplete,this.images=this.shadowRoot.querySelectorAll("iron-image"),this.images.forEach(e=>{e.addEventListener("loaded-changed",this._onIronImageLoaded)})})}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return[...We.styles,Ne`
                .prev, .next { cursor: pointer; font-weight: bold; transition: color .3s;}
                .next { float: right }
                .prev:hover, .next:hover {
                    color: var(--elara-primary);
                }

                .projects { margin-bottom: 2em; }
                .project h3 {
                    font-family: var(--elara-font-display); 
                    font-weight: bold;
                }

                .project {
                    display: flex;
                    flex-direction: column;
                    min-height: 50px;
                    margin: 1em;
                    padding: .5em;
                    cursor: default;
                    user-select: none;
                    border-bottom: 1px solid var(--elara-darkgray)
                }

                .with-link {
                    color: var(--elara-font-color);
                    cursor: pointer;
                    transition: color .3s;
                }

                .with-link:hover {
                    color: var(--elara-font-hover);
                }

                .project .hidden-content {
                    position: relative;
                    min-height: 100px;
                }

                .grid {
                    display: flex;
                    flex-wrap: wrap;
                    margin: -0.5em;
                }

                .grid > div {
                    flex: 1 0 5em;
                    margin: 0.5em;
                }

                .hidden-content .right {
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-end;
                }

                .hidden-content iron-image {
                    height: 150px;
                    width: 150px;
                    visibility: hidden;
                }

                iron-image.shown {
                    visibility: visible;
                }

                .hidden-content svg {
                    height: 1em;
                    width: 1em;
                }

                .hidden-content .left > .tags, .hidden-content .left > .status {
                    opacity: 0;
                    transition: opacity .4s;
                }

                .hidden-content:hover .left > .tags, .hidden-content:hover .left > .status  {
                    opacity: 1;
                }

                .project.who {
                    border-bottom: none;
                }
        `]}_card(e){return Q`
        <section class="project">
            <div class="hidden-content grid">
                <div class="left">
                    <h3 class="${e.slug} ${e.url?"with-link":"normal"}" role="${e.url?"link":"title"}"  @click=${()=>{e.url&&De.Routing.redirect(e.url)}}>${e.name}</h3>
                    <div class="tags">
                        ${e.tags.join(", ")}
                    </div>
                    <br />
                    <div class="status">
                        ${e.repository?Q`<svg @click=${()=>{De.Routing.redirect(e.repository)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>`:Q``}
                        ${e.status}
                    </div>
                </div>
                <div class="right">
                    ${e.image?Q`
                    <iron-image sizing="contain" src="${e.image}"></iron-image>
                    `:Q``}
                </div>
            </div>
        </section>`}render(){return Q`
        <div class="projects">
            <h1>${this.head.title}</h1>
            ${it(this.projects,this._card)}
            <a class="prev" @click=${()=>De.Routing.navigate("about")}>< About</a>
            <a class="next" @click=${()=>De.Routing.navigate("contact")}>> Contact</a>
        </div>
        `}}yt.is="ui-projects",customElements.define(yt.is,yt);var mt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};class wt extends Ye{constructor(){super(...arguments),this.height=300,this.width=300}firstUpdated(){const e=this._canvas.getContext("2d");window.requestAnimationFrame(()=>{this._tree(e,600,600,80,-Math.PI/2,13,13)})}static get styles(){return Ne`
        #tree {
            position: fixed;
        }
        `}render(){return Q`<canvas id="tree" height="${this.height}" width="${this.width}"></canvas>`}_tree(e,t,n,r,i,o,a){const s=Math.random;let c,l,u,h;const d=2*Math.PI/4;e.beginPath(),e.moveTo(t,n),u=t+r*Math.cos(i),h=n+r*Math.sin(i),e.lineCap="round",e.lineWidth=a,e.lineTo(u,h),e.strokeStyle=o<=2?"#1b1b1b":"night"===De.UI.dayOrNight()?"#f0f0f0":"#333",e.stroke();const p=o-1;if(!p)return;const f=2*s()+1;a*=.7;for(let t=0;t<f;t++)l=i+s()*d-.5*d,c=r*(.7+.3*s()),this._tree(e,u,h,c,l,p,a)}get _canvas(){return this.shadowRoot.querySelector("#tree")}}wt.is="ui-tree",mt([Ce({type:Number,reflect:!0})],wt.prototype,"height",void 0),mt([Ce({type:Number,reflect:!0})],wt.prototype,"width",void 0),customElements.define(wt.is,wt);var bt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};class _t extends Ye{constructor(e){super(),this.asked=e}static get styles(){return Ne`
        h1, p {
            user-select: none;
            z-index: 1;
        }

        a {
            color: var(--elara-primary);
            text-decoration: none;
            cursor: pointer;
        }
        `}render(){return Q`
        <div>
            <h1>You are lost !</h1>
            <p>You asked for : ${this.asked}.</p>
            <a @click=${()=>De.Routing.navigate("home")}><iron-icon icon="home"></iron-icon> Homepage</a>
            <ui-tree .width=${1366} .height=${768}></ui-tree>
        </div>
        `}}_t.is="ui-not-found",bt([Ce({type:String,reflect:!0})],_t.prototype,"asked",void 0),customElements.define(_t.is,_t);var xt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};class kt extends Ye{constructor(){super(...arguments),this.items=[],this.route=null,this.shown=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return Ne`
        .menu {
			position: absolute;
			top: 0;
			right: 0;
			height: 45px;
			width: 45px;
			color: var(--elara-font-color);
			counter-reset: menuitem;
			z-index: 0;
        }
        
		.menu-content {
			position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
			background-color: #000;
			padding-left: 35vw;
			color: var(--elara-lightgray);
			display: none;
			transition: opacity .4s;
		}

		.menu-content .item {
			cursor: pointer;
			position: relative;
			font-size: 5vw;
			color: var(--elara-lightgray);
			text-transform: lowercase;
			margin: 0.5rem 0;
			padding: 0 0.5rem;
			transition: color 0.3s;
			text-decoration: none;
			user-select: none;
		}

		@media (max-width: 600px){
			.menu-content .item {
				font-size: 10vw;
			}
		}

		.menu-content .item::before {
			counter-increment: menuitem;
			content: counters(menuitem, "");
			position: absolute;
			font-size: 0.85rem;
			top: 25%;
			left: -1.25rem;
			color: var(--elara-darkgray);
		}

		.menu-content .item::after {
			content: '';
			width: 100%;
			top: 50%;
			height: 6px;
			background: #f20c40;
			position: absolute;
			left: 0;
			opacity: 0;
			transform: scale3d(0,1,1);
			transition: transform 0.3s, opacity 0.3s;
			transform-origin: 100% 50%;
		}

		.menu-content .item:hover, .menu-content .item.active {
			color: #5a5a5a;
		}

		.menu-content .item:hover::after, .menu-content .item.active::after {
			opacity: 1;
			transform: scale3d(1,1,1);
		}

		.menu-content.shown {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
        `}render(){return Q`
        <div id="menu" class="menu-content ${!0===this.shown?"shown":""}">
            <paper-icon-button class="menu" icon="close" aria-label="Close menu" @click=${()=>De.UI.elara().menu(!0)}></paper-icon-button>
            ${it(this.items,e=>this._link(e))}
		</div>
        `}_link({route:e,name:t}){return Q`
		<a class="item ${this.route===e?"active":""}" @click=${()=>De.UI.elara().show(e)}>${t}</a>
		`}}kt.is="ui-menu",xt([Ce({type:Array,reflect:!1})],kt.prototype,"items",void 0),xt([Ce({type:String,reflect:!0})],kt.prototype,"route",void 0),xt([Ce({type:Boolean,reflect:!0})],kt.prototype,"shown",void 0),customElements.define(kt.is,kt),n.d(t,"ElaraApp",function(){return Pt});var St=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})};Promise.all([n.e(1),n.e(2)]).then(n.bind(null,59));class Pt extends Je{get loadables(){return["ui-profile"]}get bootstrap(){return De.Bootstrap.promise(this.loadables,this.shadowRoot)}show(e){return St(this,void 0,void 0,function*(){De.Routing.navigate(e),yield this._hideMenu()})}menu(e){return St(this,void 0,void 0,function*(){return e?this._hideMenu():this._showMenu()})}firstUpdated(){const e=new HashChangeEvent("hashchange",{newURL:location.hash,oldURL:null});this._onHashChange(e)}static get styles(){return[Ne`
		.content, .menu-content {
			background: var(--elara-background-color);
			color: var(--elara-font-color);
			display: inline-block;

			font-family: var(--elara-font-primary);
			opacity: 1;
			margin: 0;

			height: 92vh;
			width: 62vw;
			max-width: 100vw;

			padding: 4vh 3vw;
			padding-left: 33vw;
		}

		.content.hidden {
			opacity: 0;
			z-index: 0;
			visibility: hidden;
		}

		.menu {
			position: absolute;
			top: 0;
			right: 0;
			height: 45px;
			width: 45px;
			color: var(--elara-font-color);
			z-index: 0;
		}

		.content.full-width { margin: 0; padding: 0 }

		@media (min-width: 1033px){}
		`]}get links(){return[{route:"home",name:"Work"},{route:"about",name:"About"},{route:"projects",name:"Projects"},{route:"contact",name:"Contact"}]}render(){return Q`
			<ui-profile></ui-profile>
			<paper-icon-button id="handle" class="menu" icon="menu" aria-label="Menu" @click=${this._showMenu}></paper-icon-button>
			<div id="content" class="content"></div>
			<ui-menu id="menu" .items=${this.links} .route=${this.route}></ui-menu>
		`}_showMenu(){return St(this,void 0,void 0,function*(){if(this._menu.shown)return void(yield this._hideMenu());if(this._menuFade)return;this._content.classList.contains("hidden")||this._content.classList.add("hidden"),!1===this._menu.shown&&(this._menu.shown=!0);const e=qe(300,!0);this._menuFade=this._menu.animate(e.effect,e.options),yield this._menuFade.finished,this._menuFade=null})}_hideMenu(){return St(this,void 0,void 0,function*(){if(this._menuFade)return;const e=qe(300,!1);this._menuFade=this._menu.animate(e.effect,e.options),yield this._menuFade.finished,this._content.classList.remove("hidden"),this._menu.shown=!1,this._menuFade=null})}}Pt.is="elara-app",customElements.define(Pt.is,Pt)}]);
//# sourceMappingURL=main.b6d057e7.js.map