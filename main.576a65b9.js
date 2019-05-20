!function(e){function t(t){for(var r,i,o=t[0],a=t[1],s=0,c=[];s<o.length;s++)i=o[s],n[i]&&c.push(n[i][0]),n[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(l&&l(t);c.length;)c.shift()()}var r={},n={0:0};function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,i){r=n[e]=[t,i]});t.push(r[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+""+({}[e]||e)+"."+{1:"daaea2d6",2:"7395a61f"}[e]+".js"}(e),a=function(t){s.onerror=s.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+i+": "+o+")");a.type=i,a.request=o,r[1](a)}n[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=a;i(i.s=3)}([function(e,t,r){e.exports=r(1)},function(e,t,r){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,o=Object.create(i.prototype),a=new C(n||[]);return o._invoke=function(e,t,r){var n=h;return function(i,o){if(n===d)throw new Error("Generator is already running");if(n===f){if("throw"===i)throw o;return N()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=P(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?f:p,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=f,r.method="throw",r.arg=l.arg)}}}(e,r,a),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",p="suspendedYield",d="executing",f="completed",v={};function y(){}function g(){}function m(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(O([])));_&&_!==n&&i.call(_,a)&&(w=_);var x=m.prototype=y.prototype=Object.create(w);function k(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function S(e){var r;this._invoke=function(n,o){function a(){return new Promise(function(r,a){!function r(n,o,a,s){var l=u(e[n],e,o);if("throw"!==l.type){var c=l.arg,h=c.value;return h&&"object"===t(h)&&i.call(h,"__await")?Promise.resolve(h.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):Promise.resolve(h).then(function(e){c.value=e,a(c)},function(e){return r("throw",e,a,s)})}s(l.arg)}(n,o,r,a)})}return r=r?r.then(a,a):a()}}function P(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,P(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,v;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:r,done:!0}}return g.prototype=x.constructor=m,m.constructor=g,m[l]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(S.prototype),S.prototype[s]=function(){return this},e.AsyncIterator=S,e.async=function(t,r,n,i){var o=new S(c(t,r,n,i));return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},k(x),x[l]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return s.type="throw",s.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),v}},e}("object"===t(e)?e.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}}).call(this,r(2)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict";r.r(t);
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
var n=new WeakMap,i=function(e){return"function"==typeof e&&n.has(e)},o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=t;i!==r;){var o=i.nextSibling;e.insertBefore(i,n),i=o}},s=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t;n!==r;){var i=n.nextSibling;e.removeChild(n),n=i}},l={},c={};
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
var u="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(u,"--\x3e"),p=new RegExp("".concat(u,"|").concat(h)),d=function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parts=[],this.element=r;var i=-1,o=0,a=[];!function e(r){for(var s=r.content,l=document.createTreeWalker(s,133,null,!1),c=0;l.nextNode();){i++;var h=l.currentNode;if(1===h.nodeType){if(h.hasAttributes()){for(var d=h.attributes,f=0,g=0;g<d.length;g++)d[g].value.indexOf(u)>=0&&f++;for(;f-- >0;){var m=t.strings[o],w=y.exec(m)[2],b=w.toLowerCase()+"$lit$",_=h.getAttribute(b).split(p);n.parts.push({type:"attribute",index:i,name:w,strings:_}),h.removeAttribute(b),o+=_.length-1}}"TEMPLATE"===h.tagName&&e(h)}else if(3===h.nodeType){var x=h.data;if(x.indexOf(u)>=0){for(var k=h.parentNode,S=x.split(p),P=S.length-1,E=0;E<P;E++)k.insertBefore(""===S[E]?v():document.createTextNode(S[E]),h),n.parts.push({type:"node",index:++i});""===S[P]?(k.insertBefore(v(),h),a.push(h)):h.data=S[P],o+=P}}else if(8===h.nodeType)if(h.data===u){var j=h.parentNode;null!==h.previousSibling&&i!==c||(i++,j.insertBefore(v(),h)),c=i,n.parts.push({type:"node",index:i}),null===h.nextSibling?h.data="":(a.push(h),i--),o++}else for(var C=-1;-1!==(C=h.data.indexOf(u,C+1));)n.parts.push({type:"node",index:-1})}}(r);for(var s=0,l=a;s<l.length;s++){var c=l[s];c.parentNode.removeChild(c)}},f=function(e){return-1!==e.index},v=function(){return document.createComment("")},y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function g(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}
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
var w=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._parts=[],this.template=t,this.processor=r,this.options=n}var t,r,n;return t=e,(r=[{key:"update",value:function(e){var t=0,r=!0,n=!1,i=void 0;try{for(var o,a=this._parts[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=o.value;void 0!==s&&s.setValue(e[t]),t++}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}var l=!0,c=!1,u=void 0;try{for(var h,p=this._parts[Symbol.iterator]();!(l=(h=p.next()).done);l=!0){var d=h.value;void 0!==d&&d.commit()}}catch(e){c=!0,u=e}finally{try{l||null==p.return||p.return()}finally{if(c)throw u}}}},{key:"_clone",value:function(){var e=this,t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=this.template.parts,n=0,i=0;return function t(o){for(var a=document.createTreeWalker(o,133,null,!1),s=a.nextNode();n<r.length&&null!==s;){var l=r[n];if(f(l))if(i===l.index){if("node"===l.type){var c=e.processor.handleTextExpression(e.options);c.insertAfterNode(s.previousSibling),e._parts.push(c)}else{var u;(u=e._parts).push.apply(u,g(e.processor.handleAttributeExpressions(s,l.name,l.strings,e.options)))}n++}else i++,"TEMPLATE"===s.nodeName&&t(s.content),s=a.nextNode();else e._parts.push(void 0),n++}}(t),o&&(document.adoptNode(t),customElements.upgrade(t)),t}}])&&m(t.prototype,r),n&&m(t,n),e}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t,r){return t&&_(e.prototype,t),r&&_(e,r),e}
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
 */var k=function(){function e(t,r,n,i){b(this,e),this.strings=t,this.values=r,this.type=n,this.processor=i}return x(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",r=0;r<e;r++){var n=this.strings[r],i=y.exec(n);t+=i?n.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+u:n+h}return t+this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}();function S(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e,t,r){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,r){return t&&N(e.prototype,t),r&&N(e,r),e}function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
 */var R=function(e){return null===e||!("object"===T(e)||"function"==typeof e)},L=function(){function e(t,r,n){O(this,e),this.dirty=!0,this.element=t,this.name=r,this.strings=n,this.parts=[];for(var i=0;i<n.length-1;i++)this.parts[i]=this._createPart()}return A(e,[{key:"_createPart",value:function(){return new $(this)}},{key:"_getValue",value:function(){for(var e=this.strings,t=e.length-1,r="",n=0;n<t;n++){r+=e[n];var i=this.parts[n];if(void 0!==i){var o=i.value;if(null!=o&&(Array.isArray(o)||"string"!=typeof o&&o[Symbol.iterator])){var a=!0,s=!1,l=void 0;try{for(var c,u=o[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var h=c.value;r+="string"==typeof h?h:String(h)}}catch(e){s=!0,l=e}finally{try{a||null==u.return||u.return()}finally{if(s)throw l}}}else r+="string"==typeof o?o:String(o)}}return r+=e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),$=function(){function e(t){O(this,e),this.value=void 0,this.committer=t}return A(e,[{key:"setValue",value:function(e){e===l||R(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;i(this.value);){var e=this.value;this.value=l,e(this)}this.value!==l&&this.committer.commit()}}]),e}(),M=function(){function e(t){O(this,e),this.value=void 0,this._pendingValue=void 0,this.options=t}return A(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(v()),this.endNode=e.appendChild(v())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e._insert(this.startNode=v()),e._insert(this.endNode=v())}},{key:"insertAfterPart",value:function(e){e._insert(this.startNode=v()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this._pendingValue=e}},{key:"commit",value:function(){for(;i(this._pendingValue);){var e=this._pendingValue;this._pendingValue=l,e(this)}var t=this._pendingValue;t!==l&&(R(t)?t!==this.value&&this._commitText(t):t instanceof k?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===c?(this.value=c,this.clear()):this._commitText(t))}},{key:"_insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"_commitNode",value:function(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}},{key:"_commitText",value:function(e){var t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}},{key:"_commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof w&&this.value.template===t)this.value.update(e.values);else{var r=new w(t,e.processor,this.options),n=r._clone();r.update(e.values),this._commitNode(n),this.value=r}}},{key:"_commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var r,n=this.value,i=0,o=!0,a=!1,s=void 0;try{for(var l,c=t[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var u=l.value;void 0===(r=n[i])&&(r=new e(this.options),n.push(r),0===i?r.appendIntoPart(this):r.insertAfterPart(n[i-1])),r.setValue(u),r.commit(),i++}}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}i<n.length&&(n.length=i,this.clear(r&&r.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;s(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),z=function(){function e(t,r,n){if(O(this,e),this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=n}return A(e,[{key:"setValue",value:function(e){this._pendingValue=e}},{key:"commit",value:function(){for(;i(this._pendingValue);){var e=this._pendingValue;this._pendingValue=l,e(this)}if(this._pendingValue!==l){var t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=l}}}]),e}(),V=function(e){function t(e,r,n){var i;return O(this,t),(i=S(this,E(t).call(this,e,r,n))).single=2===n.length&&""===n[0]&&""===n[1],i}return j(t,L),A(t,[{key:"_createPart",value:function(){return new q(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:P(E(t.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),t}(),q=function(e){function t(){return O(this,t),S(this,E(t).apply(this,arguments))}return j(t,$),t}(),F=!1;try{var H={get capture(){return F=!0,!1}};window.addEventListener("test",H,H),window.removeEventListener("test",H,H)}catch(e){}var I=function(){function e(t,r,n){var i=this;O(this,e),this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=n,this._boundHandleEvent=function(e){return i.handleEvent(e)}}return A(e,[{key:"setValue",value:function(e){this._pendingValue=e}},{key:"commit",value:function(){for(;i(this._pendingValue);){var e=this._pendingValue;this._pendingValue=l,e(this)}if(this._pendingValue!==l){var t=this._pendingValue,r=this.value,n=null==t||null!=r&&(t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive),o=null!=t&&(null==r||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),o&&(this._options=U(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=l}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),U=function(e){return e&&(F?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)};function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}
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
var W=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"handleAttributeExpressions",value:function(e,t,r,n){var i=t[0];return"."===i?new V(e,t.slice(1),r).parts:"@"===i?[new I(e,t.slice(1),n.eventContext)]:"?"===i?[new z(e,t.slice(1),r)]:new L(e,t,r).parts}},{key:"handleTextExpression",value:function(e){return new M(e)}}])&&B(t.prototype,r),n&&B(t,n),e}());
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
function G(e){var t=D.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},D.set(e.type,t));var r=t.stringsArray.get(e.strings);if(void 0!==r)return r;var n=e.strings.join(u);return void 0===(r=t.keyString.get(n))&&(r=new d(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}var D=new Map,J=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");var Y=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return new k(e,r,"html",W)},K=133;function X(e,t){for(var r=e.element.content,n=e.parts,i=document.createTreeWalker(r,K,null,!1),o=Q(n),a=n[o],s=-1,l=0,c=[],u=null;i.nextNode();){s++;var h=i.currentNode;for(h.previousSibling===u&&(u=null),t.has(h)&&(c.push(h),null===u&&(u=h)),null!==u&&l++;void 0!==a&&a.index===s;)a.index=null!==u?-1:a.index-l,a=n[o=Q(n,o)]}c.forEach(function(e){return e.parentNode.removeChild(e)})}var Z=function(e){for(var t=11===e.nodeType?0:1,r=document.createTreeWalker(e,K,null,!1);r.nextNode();)t++;return t},Q=function(e){for(var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){var r=e[t];if(f(r))return t}return-1};
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
var ee=function(e,t){return"".concat(e,"--").concat(t)},te=!0;void 0===window.ShadyCSS?te=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),te=!1);var re=function(e){return function(t){var r=ee(t.type,e),n=D.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},D.set(r,n));var i=n.stringsArray.get(t.strings);if(void 0!==i)return i;var o=t.strings.join(u);if(void 0===(i=n.keyString.get(o))){var a=t.getTemplateElement();te&&window.ShadyCSS.prepareTemplateDom(a,e),i=new d(t,a),n.keyString.set(o,i)}return n.stringsArray.set(t.strings,i),i}},ne=["html","svg"],ie=new Set,oe=function(e,t,r){ie.add(r);var n=e.querySelectorAll("style");if(0!==n.length){for(var i=document.createElement("style"),o=0;o<n.length;o++){var a=n[o];a.parentNode.removeChild(a),i.textContent+=a.textContent}if(function(e){ne.forEach(function(t){var r=D.get(ee(t,e));void 0!==r&&r.keyString.forEach(function(e){var t=e.element.content,r=new Set;Array.from(t.querySelectorAll("style")).forEach(function(e){r.add(e)}),X(e,r)})})}(r),function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e.element.content,i=e.parts;if(null!=r)for(var o=document.createTreeWalker(n,K,null,!1),a=Q(i),s=0,l=-1;o.nextNode();)for(l++,o.currentNode===r&&(s=Z(t),r.parentNode.insertBefore(t,r));-1!==a&&i[a].index===l;){if(s>0){for(;-1!==a;)i[a].index+=s,a=Q(i,a);return}a=Q(i,a)}else n.appendChild(t)}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,r),window.ShadyCSS.nativeShadow){var s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);var l=new Set;l.add(i),X(t,l)}}else window.ShadyCSS.prepareTemplateStyles(t.element,r)},ae=r(0),se=r.n(ae);function le(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,i)}function he(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function pe(e,t){return!t||"object"!==ce(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function de(e){var t="function"==typeof Map?new Map:void 0;return(de=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return fe(e,arguments,ye(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ve(n,e)})(e)}function fe(e,t,r){return(fe=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&ve(i,r.prototype),i}).apply(null,arguments)}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}
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
 */window.JSCompiler_renameProperty=function(e,t){return e};var ge={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},me=function(e,t){return t!==e&&(t==t||e==e)},we={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:me},be=Promise.resolve(!0),_e=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=pe(this,ye(t).call(this)))._updateState=0,e._instanceProperties=void 0,e._updatePromise=be,e._hasConnectedResolver=void 0,e._changedProperties=new Map,e._reflectingProperties=void 0,e.initialize(),e}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(t,de(HTMLElement)),r=t,n=[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach(function(t,r){if(e.hasOwnProperty(r)){var n=e[r];delete e[r],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(r,n)}})}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach(function(t,r){return e[r]=t}),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,r){t!==r&&this._attributeToProperty(e,r)}},{key:"_propertyToAttribute",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:we,n=this.constructor,i=n._attributeNameForProperty(e,r);if(void 0!==i){var o=n._propertyValueToAttribute(t,r);if(void 0===o)return;this._updateState=8|this._updateState,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var r=this.constructor,n=r._attributeToPropertyMap.get(e);if(void 0!==n){var i=r._classProperties.get(n)||we;this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(t,i),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(e,t){var r=!0;if(void 0!==e){var n=this.constructor,i=n._classProperties.get(e)||we;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}},{key:"requestUpdate",value:function(e,t){return this._requestUpdate(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:function(){var e,t=(e=se.a.mark(function e(){var t,r,n,i,o=this;return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,n=this._updatePromise,this._updatePromise=new Promise(function(e,n){t=e,r=n}),e.prev=3,e.next=6,n;case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:if(this._hasConnected){e.next=13;break}return e.next=13,new Promise(function(e){return o._hasConnectedResolver=e});case 13:if(e.prev=13,null==(i=this.performUpdate())){e.next=18;break}return e.next=18,i;case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13),r(e.t1);case 23:t(!this._hasRequestedUpdate);case 24:case"end":return e.stop()}},e,this,[[3,8],[13,20]])}),function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){ue(o,n,i,a,s,"next",e)}function s(e){ue(o,n,i,a,s,"throw",e)}a(void 0)})});return function(){return t.apply(this,arguments)}}()},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(function(e,r){return t._propertyToAttribute(r,t[r],e)}),this._reflectingProperties=void 0)}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}},{key:"_hasConnected",get:function(){return 32&this._updateState}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._updatePromise}}],i=[{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(function(t,r){return e._classProperties.set(r,t)})}}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:we;if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var r="symbol"===ce(e)?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get:function(){return this[r]},set:function(t){var n=this[e];this[r]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))||!this.finalized){var e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,r=[].concat(le(Object.getOwnPropertyNames(t)),le("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[])),n=!0,i=!1,o=void 0;try{for(var a,s=r[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var l=a.value;this.createProperty(l,t[l])}}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}}}},{key:"_attributeNameForProperty",value:function(e,t){var r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:me)(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var r=t.type,n=t.converter||ge,i="function"==typeof n?n:n.fromAttribute;return i?i(e,r):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var r=t.type,n=t.converter;return(n&&n.toAttribute||ge.toAttribute)(e,r)}}},{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach(function(r,n){var i=e._attributeNameForProperty(n,r);void 0!==i&&(e._attributeToPropertyMap.set(i,n),t.push(i))}),t}}],n&&he(r.prototype,n),i&&he(r,i),t}();_e.finalized=!0;
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
var xe=function(e,t){return"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer:function(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher:function(r){r.createProperty(t.key,e)}}:Object.assign({},t,{finisher:function(r){r.createProperty(t.key,e)}})},ke=function(e,t,r){t.constructor.createProperty(r,e)};function Se(e){return function(t,r){return void 0!==r?ke(e,t,r):xe(e,t)}}
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
var Pe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();function Ee(e){return(Ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function je(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ce(e,t){return!t||"object"!==Ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Oe(e,t,r){return(Oe="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ne(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function Ne(e){return(Ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");var Te=function(e){return e.flat?e.flat(1/0):function e(t){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=0,i=t.length;n<i;n++){var o=t[n];Array.isArray(o)?e(o,r):r.push(o)}return r}(e)},Re=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ce(this,Ne(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(t,_e),r=t,i=[{key:"finalize",value:function(){Oe(Ne(t),"finalize",this).call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}},{key:"_getUniqueStyles",value:function(){var e=this.styles,t=[];Array.isArray(e)?Te(e).reduceRight(function(e,t){return e.add(t),e},new Set).forEach(function(e){return t.unshift(e)}):e&&t.push(e);return t}}],(n=[{key:"initialize",value:function(){Oe(Ne(t.prototype),"initialize",this).call(this),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Pe?this.renderRoot.adoptedStyleSheets=e.map(function(e){return e.styleSheet}):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(function(e){return e.cssText}),this.localName))}},{key:"connectedCallback",value:function(){Oe(Ne(t.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var r=this;Oe(Ne(t.prototype),"update",this).call(this,e);var n=this.render();n instanceof k&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(function(e){var t=document.createElement("style");t.textContent=e.cssText,r.renderRoot.appendChild(t)}))}},{key:"render",value:function(){}}])&&je(r.prototype,n),i&&je(r,i),t}();Re.finalized=!0,Re.render=function(e,t,r){var n=r.scopeName,i=J.has(t),o=t instanceof ShadowRoot&&te&&e instanceof k,a=o&&!ie.has(n),l=a?document.createDocumentFragment():t;if(function(e,t,r){var n=J.get(t);void 0===n&&(s(t,t.firstChild),J.set(t,n=new M(Object.assign({templateFactory:G},r))),n.appendInto(t)),n.setValue(e),n.commit()}(e,l,Object.assign({templateFactory:re(n)},r)),a){var c=J.get(l);J.delete(l),c.value instanceof w&&oe(l,c.value.template,n),s(t,t.firstChild),t.appendChild(l),J.set(t,c)}!i&&o&&window.ShadyCSS.styleElement(t.host)};var Le,$e={Errors:{GenericError:class extends Error{constructor(){super(...arguments),this.elara=!1,this.continue=!0,this.reload=!0}},NotFound:class extends Error{constructor(){super(...arguments),this.elara=!0,this.continue=!0,this.reload=!1}},Prototype:class extends Error{constructor(){super(...arguments),this.elara=!1,this.continue=!0,this.reload=!1}}}},Me=function(e,t){var r=e.startNode.parentNode,n=void 0===t?e.endNode:t.startNode,i=r.insertBefore(v(),n);r.insertBefore(v(),n);var o=new M(e.options);return o.insertAfterNode(i),o},ze=function(e,t){return e.setValue(t),e.commit(),e},Ve=function(e,t,r){var n=e.startNode.parentNode,i=r?r.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&a(n,t.startNode,o,i)},qe=function(e){s(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},Fe=function(e,t,r){for(var n=new Map,i=t;i<=r;i++)n.set(e[i],i);return n},He=new WeakMap,Ie=new WeakMap,Ue=(Le=function(e,t,r){var n;return void 0===r?r=t:void 0!==t&&(n=t),function(t){if(!(t instanceof M))throw new Error("repeat can only be used in text bindings");var i,o,a=He.get(t)||[],s=Ie.get(t)||[],l=[],c=[],u=[],h=0,p=!0,d=!1,f=void 0;try{for(var v,y=e[Symbol.iterator]();!(p=(v=y.next()).done);p=!0){var g=v.value;u[h]=n?n(g,h):h,c[h]=r(g,h),h++}}catch(e){d=!0,f=e}finally{try{p||null==y.return||y.return()}finally{if(d)throw f}}for(var m=0,w=a.length-1,b=0,_=c.length-1;m<=w&&b<=_;)if(null===a[m])m++;else if(null===a[w])w--;else if(s[m]===u[b])l[b]=ze(a[m],c[b]),m++,b++;else if(s[w]===u[_])l[_]=ze(a[w],c[_]),w--,_--;else if(s[m]===u[_])l[_]=ze(a[m],c[_]),Ve(t,a[m],l[_+1]),m++,_--;else if(s[w]===u[b])l[b]=ze(a[w],c[b]),Ve(t,a[w],a[m]),w--,b++;else if(void 0===i&&(i=Fe(u,b,_),o=Fe(s,m,w)),i.has(s[m]))if(i.has(s[w])){var x=o.get(u[b]),k=void 0!==x?a[x]:null;if(null===k){var S=Me(t,a[m]);ze(S,c[b]),l[b]=S}else l[b]=ze(k,c[b]),Ve(t,k,a[m]),a[x]=null;b++}else qe(a[w]),w--;else qe(a[m]),m++;for(;b<=_;){var P=Me(t,l[_+1]);ze(P,c[b]),l[b++]=P}for(;m<=w;){var E=a[m++];null!==E&&qe(E)}He.set(t,l),Ie.set(t,u)}},function(){var e=Le.apply(void 0,arguments);return n.set(e,!0),e});
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
 */var Be={type:"oauth",key:"437be1c1aa051344aa05",secret:"b8e34932aba7ce334d4c3cd9d1f1f406d64756cb"},We=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},Ge=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}l((n=n.apply(e,t||[])).next())})};class De extends Re{constructor(){super(...arguments),this.repositories=[],this.currentPage=null,this.page=0,this.inError=!1,this.chunksLength=6}firstUpdated(){return Ge(this,void 0,void 0,function*(){this._spinner.active=!0;const e=new XMLHttpRequest;e.open("GET","https://cors-anywhere.herokuapp.com/https://api.github.com/users/ghostfly/repos",!0),e.setRequestHeader("type",Be.type),e.setRequestHeader("key",Be.key),e.setRequestHeader("secret",Be.secret),e.send();const t=()=>{if(!this._spinner)return;this._spinner.active=!1;const e=this._spinner.parentElement;e.removeChild(this._spinner),this.shadowRoot.removeChild(e)},r=()=>{t(),this.inError=!0};e.onerror=r,e.onreadystatechange=(()=>Ge(this,void 0,void 0,function*(){if(4==e.readyState&&200==e.status){const r=JSON.parse(e.responseText).filter(e=>!e.fork).sort((e,t)=>new Date(t.created_at)-new Date(e.created_at));this.repositories=this._chunk(r,this.chunksLength),this.currentPage=this.repositories[this.page],t(),yield this.updateComplete,this._pulse()}403===e.status&&r()}))})}_chunk(e,t){const r=[],n=e.length;let i=0;for(;i<n;)r.push(e.slice(i,i+=t));return r}render(){return Y`
        <style>
        .github-card {
            cursor: pointer;
            width: 85%;
            padding: 2.5vh 5%;
            display: inline-block;
            border-radius: 5px;
            color: var(--text-color);
            border: 1px solid rgb(0, 0, 0, 0.08);
            box-shadow: 0px 0px 0px rgb(0, 0, 0, 0);
            transition: 0.4s ease-in-out;
            margin: 2vh 0px;
            transform: scale(1);
            font-family: var(--elara-font-display);
            transition: transform, border .3s;
        }

        .github-card:hover {
            border: 1px solid rgb(0, 0, 0, 0.3);
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
            cursor: pointer;
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
        </style>
        <div class="loader">
            <paper-spinner></paper-spinner>
        </div>
        ${this.inError?Y`<p>Can't load GitHub repositories.. 😢 <br />You can check on <a class="link" href="https://github.com/ghostfly/">GitHub</a> directly !</p>`:Y``}
        ${this.currentPage?Y`
        <div class="two-cols">
            ${Ue(this.currentPage,e=>Y`
                <section class="github-card" @click=${()=>{window.open(e.html_url)}}>
                    <div class="title">${e.name}</div>
                    <div class="description">${e.description}</div>
                    <div class="bottom">
                        <span>${e.language}</span>
                        <span><iron-icon icon="stars"></iron-icon> ${e.stargazers_count}</span>
                        <span><iron-icon icon="subdirectory-arrow-right"></iron-icon> ${e.forks}</span>
                    </div>
                </section>
                `)}
        </div>
        ${this._pagination}
        `:Y``}
        <a class="next" @click=${()=>{location.hash="#!about"}}>> About</a>
        `}_pulse(){this.shadowRoot.querySelectorAll(".two-cols section").forEach(e=>{e.animate({opacity:[.5,1],transform:["scale(.95)","scale(1)"]},{duration:600})})}get _pagination(){return Y`
        <div class="pagination">
            ${this.page+1} / ${this.repositories.length}
            ${this._back} 
            ${this._next}
        </div>`}get _back(){return Y`
        <a role="button" disabled=${0===this.page} @click=${()=>Ge(this,void 0,void 0,function*(){this.page--,this.currentPage=this.repositories[this.page],yield this.updateComplete,this._pulse()})}>
            <paper-icon-button aria-label="Previous page" icon="arrow-back"></paper-icon-button>
        </a>
        `}get _next(){return Y`
        <a role="button" disabled=${this.page+1===this.repositories.length} @click=${()=>Ge(this,void 0,void 0,function*(){this.page++,this.currentPage=this.repositories[this.page],yield this.updateComplete,this._pulse()})}>
            <paper-icon-button aria-label="Next page" icon="arrow-forward"></paper-icon-button>
        </a>
        `}get _spinner(){return this.shadowRoot.querySelector("paper-spinner")}}De.is="ui-github-work",We([Se({type:Array})],De.prototype,"repositories",void 0),We([Se({type:Array})],De.prototype,"currentPage",void 0),We([Se({type:Number,reflect:!0})],De.prototype,"page",void 0),We([Se({type:Boolean,reflect:!0})],De.prototype,"inError",void 0),customElements.define(De.is,De);class Je extends Re{render(){return Y`
        <style>
        :host {
            cursor: pointer;
        }

        .profile {
            width: 24vw;
            padding: 4vh 3vw;
            height: 92vh;
            z-index: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            background: var(--background-image) center center;
            background-size: cover;
            background-repeat: no-repeat;
            position: fixed;
            color: #fff;
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
        
        .profile > .pic {
            width: 20vw;
            height: 20vw;
            border-radius: 3px;
        }
        </style>
        <div role="link" class="profile" @click=${()=>{location.hash="#!home"}}>
            <iron-image class="pic" sizing="contain" fade src="/assets/me.svg"></iron-image>
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
        </div>
        `}}Je.is="ui-profile",customElements.define(Je.is,Je);class Ye extends Re{get head(){return{title:"Work",description:"",type:"page",image:"",slug:"#!home"}}render(){return Y`
        <style>
        h1 {
            font-family: var(--elara-font-display);
            user-select: none;
        }
        h1::first-letter { font-size: 1.3em; }
        </style>
        <div class="home">
            <h1>Work</h1>
            <ui-github-work></ui-github-work>
        </div>
        `}}Ye.is="ui-home",customElements.define(Ye.is,Ye);var Ke=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class Xe extends Re{constructor(){super(...arguments),this.inError=!1,this.isSuccess=!1}get head(){return{title:"Contact",description:"",type:"page",image:"",slug:"#!contact"}}get _links(){return[{label:"Github",link:"https://github.com/Ghostfly",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>`},{label:"Medium",link:"https://medium.com/@ghostfly1",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.962 7.257l-5.457 8.867-3.923-6.375 3.126-5.08c.112-.183.32-.287.527-.287.05 0 .1.008.15.02.038.01.077.023.113.04l5.43 2.716.006.002.01.008c.027.02.036.057.018.087zM9.86 8.592v5.783l5.14 2.57-5.14-8.353zm5.912 8.74l4.23 2.114c.552.275.998.083.998-.43V8.836l-5.228 8.495zM8.968 7.177l-5.303-2.65c-.096-.05-.187-.072-.27-.072-.232 0-.395.18-.395.482v11.45c0 .306.224.67.498.806l4.67 2.335c.12.06.235.087.338.087.29 0 .494-.225.494-.602V7.23c0-.022-.012-.042-.032-.052z"/></g></svg>`},{label:"Facebook",link:"https://www.facebook.com/gh0std3v",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.007 3H3.993C3.445 3 3 3.445 3 3.993v16.013c0 .55.445.994.993.994h8.62v-6.97H10.27V11.31h2.346V9.31c0-2.325 1.42-3.59 3.494-3.59.993 0 1.847.073 2.096.106v2.43h-1.438c-1.128 0-1.346.537-1.346 1.324v1.734h2.69l-.35 2.717h-2.34V21h4.587c.548 0 .993-.445.993-.993V3.993c0-.548-.445-.993-.993-.993z"/></g></svg>`},{label:"Instagram",link:"https://www.instagram.com/gh0stfly_",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 4.622c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.234.052-3.638.052s-2.688-.01-3.637-.052c-.877-.04-1.354-.187-1.67-.31-.42-.163-.72-.358-1.036-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638s.01-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.42.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052M12 3c-2.444 0-2.75.01-3.71.054s-1.613.196-2.185.418c-.592.23-1.094.538-1.594 1.04-.5.5-.807 1-1.037 1.593-.223.572-.375 1.226-.42 2.184C3.01 9.25 3 9.555 3 12s.01 2.75.054 3.71.196 1.613.418 2.186c.23.592.538 1.094 1.038 1.594s1.002.808 1.594 1.038c.572.222 1.227.375 2.185.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054 1.613-.196 2.186-.418c.592-.23 1.094-.538 1.594-1.038s.808-1.002 1.038-1.594c.222-.572.375-1.227.418-2.185.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71-.196-1.613-.418-2.186c-.23-.592-.538-1.094-1.038-1.594s-1.002-.808-1.594-1.038c-.572-.222-1.227-.375-2.185-.418C14.75 3.01 14.445 3 12 3zm0 4.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08c.596 0 1.08-.484 1.08-1.08s-.483-1.08-1.08-1.08z"/></g></svg>`},{label:"Twitter",link:"https://twitter.com/gh0std3v",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-2.534 6.71c.004.1.007.198.007.298 0 3.045-2.318 6.556-6.556 6.556-1.3 0-2.512-.38-3.532-1.035.18.02.364.03.55.03 1.08 0 2.073-.367 2.862-.985-1.008-.02-1.86-.685-2.152-1.6.14.027.285.04.433.04.21 0 .414-.027.607-.08-1.054-.212-1.848-1.143-1.848-2.26v-.028c.31.173.666.276 1.044.288-.617-.413-1.024-1.118-1.024-1.918 0-.422.114-.818.312-1.158 1.136 1.393 2.834 2.31 4.75 2.406-.04-.17-.06-.344-.06-.525 0-1.27 1.03-2.303 2.303-2.303.664 0 1.262.28 1.683.728.525-.103 1.018-.295 1.463-.56-.172.54-.537.99-1.013 1.276.466-.055.91-.18 1.323-.362-.31.46-.7.867-1.15 1.192z"/></g></svg>`},{label:"YouTube",link:"https://www.youtube.com/user/xSpirit6/videos",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"/></g></svg>`},{label:"Phone",link:"tel:+33668717002",svg:Y`<iron-icon icon="communication:call"></iron-icon>`}]}render(){return Y`
        <style>
        h1 { user-select: none; font-family: var(--elara-font-display); }
        h1::first-letter { font-size: 1.3em; }

        .contact { height: 100%; }

        paper-input, paper-textarea {
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

        .github svg { fill: #24292e }
        .twitter svg { fill: #1da1f2 }
        .youtube svg { fill: #ff0000 }
        .facebook svg { fill: #3b5998 }
        .instagram svg { fill: #333 }
        .medium svg { fill: #3CB371 }

        .prev { cursor: pointer; font-weight: bold; transition: color .3s; }
        .prev:hover { color: var(--elara-primary); }

        form paper-button[disabled] {
            opacity: .7;
        }
        </style>
        <div class="contact">
            <h1>${this.head.title}</h1>
            <form id="form">
                <paper-input id="name" label="Full name" min-length="4" required></paper-input>
                <paper-input id="email" label="Email" min-length="4" required></paper-input>
                <paper-textarea id="message" char-counter label="Message" min-length="4" required></paper-textarea>
                <paper-button class="send" @click=${this._doSend}>Send</paper-button>
            </form>
            ${this.isSuccess?Y`Thanks for your message ! I will try to reply as soon as possible 😀 `:Y``}
            ${this.inError?Y`An error occured, please retry later. 😔`:Y``}
            <div class="clearfix"></div>
            <a class="prev" @click=${()=>{location.hash="#!projects"}}>< Projects</a>
            <div class="grid networks">
                ${Ue(this._links,e=>this._makeLink(e.label,e.link,e.svg))}
            </div>
        </div>
        `}_makeLink(e,t,r){return Y`
            <div aria-label=${e} class="item ${e.toLowerCase()}" @click=${()=>{window.open(t,"_blank")}} role="link">
                ${r}
            </div>
        `}_doSend(e){const t=this.shadowRoot.querySelector("#form"),r=e.target,n=this.shadowRoot.querySelector("#name"),i=this.shadowRoot.querySelector("#email"),o=this.shadowRoot.querySelector("#message");let a=!0;const s=[n,i,o];if(s.forEach(e=>(e=>e.validate())(e)?e.invalid=!1:e.invalid=!0),s.forEach(e=>{e.invalid&&a&&(a=!1)}),a){r.disabled=!0,s.forEach(e=>e.disabled=!0);const e=new FormData;e.append("name",n.value),e.append("email",i.value),e.append("message",o.value);const a=new XMLHttpRequest;a.open("POST","https://script.google.com/macros/s/AKfycbzdhNONz-1pGAlOktko4o5riYGErccxRfk8LsqTxq0ws31wKZ0/exec"),a.onreadystatechange=(()=>{200===a.status&&(this.isSuccess=!0,t.classList.add("sended"))}),a.onerror=(()=>{this.inError=!0}),a.send(e)}}}Xe.is="ui-contact",Ke([Se({type:Boolean,reflect:!0})],Xe.prototype,"inError",void 0),Ke([Se({type:Boolean,reflect:!0})],Xe.prototype,"isSuccess",void 0),customElements.define(Xe.is,Xe);class Ze extends Re{get head(){return{title:"About",description:"",type:"page",image:"",slug:"#!about"}}render(){return Y`
        <style>
            h1, h2 { user-select: none; font-family: var(--elara-font-display); }
            h1::first-letter { font-size: 1.3em; }
            h2::first-letter { font-size: 1.2em }
            .cv { color: var(--elara-secondary); cursor: pointer; }
            .about { margin-bottom: 2em }
            .prev, .next { cursor: pointer; font-weight: bold; transition: color .3s;}
            .next { float: right }
            .prev:hover, .next:hover {
                color: var(--elara-primary);
            }
        </style>
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
                    <a role="link" class="cv" @click=${()=>{window.open("/assets/resume.pdf")}}>CV</a>.</p>
                </div>
            </div>
        </div>
        <a class="prev" @click=${()=>{location.hash="#!home"}}>< Work</a>
        <a class="next" @click=${()=>{location.hash="#!projects"}}>> Projects</a>
        `}}Ze.is="ui-about",customElements.define(Ze.is,Ze);class Qe extends Re{get head(){return{title:"Projects",description:"",type:"page",image:"",slug:"#!projects"}}get projects(){return[{name:"Dandy Costard",slug:"dandy",image:"/assets/projects/dandy.svg",repository:null,status:"Work in progress",url:null,tags:["E-Commerce","Elara","Custom menswear","ThreeJS"]},{name:"Ghostfly.dev",slug:"ghostfly",image:"/assets/me.svg",repository:"https://github.com/Ghostfly/ghostfly.dev/tree/master",status:"Work in progress",url:null,tags:["Elara","LitElement","Github Pages"]},{name:"Persin Conseil",slug:"persin",image:"/assets/projects/persin.jpg",status:"published",repository:"https://github.com/Ghostfly/persin-conseil",url:"https://www.persin.fr",tags:["Lit-Element","Elara","Workbox"]},{name:"Dobrunia Design",slug:"react",image:"/assets/projects/dobrunia.png",status:"published",repository:null,url:"https://www.dobruniadesign.com",tags:["React","HapiJS","Material-UI"]},{name:"Cheno",slug:"cheno",image:"/assets/projects/cheno.svg",status:"published",repository:null,url:"https://www.cheno.fr",tags:["Slim Framework","HTML5","CSS3"]},{name:"Renouveau Sociétal",slug:"rs",image:"/assets/projects/rs.png",status:"published",repository:null,url:"https://www.renouveausocietal.fr",tags:["WordPress","Handmade template"]},{name:"G-Addiction",slug:"g-addiction",image:"/assets/projects/g-addiction.png",status:"published",repository:null,url:"https://www.g-addiction.com",tags:["WordPress","chosen template"]},{name:"Who?",slug:"who",status:"...",repository:null,image:"/assets/projects/who.svg",tags:["?"]}]}render(){return Y`
        <style>
            h1, h2 { user-select: none; font-family: var(--elara-font-display); }
            h1::first-letter { font-size: 1.3em; }
            h2::first-letter { font-size: 1.2em }

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

            .project.with-link {
                cursor: pointer;
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

            .hidden-content .status {
                position: absolute;
                bottom: 20px;
            }

            .hidden-content iron-image {
                height: 150px;
                width: 150px;
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
        </style>
        <div class="projects">
            <h1>${this.head.title}</h1>

            ${Ue(this.projects,e=>Y`
                <section class="project ${e.slug} ${e.url?"with-link":"normal"}" role="${e.url?"link":"row"}" @click=${()=>{e.url&&window.open(e.url)}}>
                    <div class="hidden-content grid">
                        <div class="left">
                            <h3>${e.name}</h3>
                            <div class="tags">
                                ${e.tags.join(", ")}
                            </div>
                            <div class="status">
                                ${e.repository?Y`<svg @click=${()=>{window.open(e.repository)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>`:Y``}
                                ${e.status}
                            </div>
                        </div>
                        <div class="right">
                            <iron-image sizing="contain" src="${e.image}" fade></iron-image>
                        </div>
                    </div>
                </section>
            `)}
            <a class="prev" @click=${()=>{location.hash="#!home"}}>< About</a>
            <a class="next" @click=${()=>{location.hash="#!contact"}}>> Contact</a>
        </div>
        `}}Qe.is="ui-projects",customElements.define(Qe.is,Qe);var et=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class tt extends Re{constructor(){super(...arguments),this.height=300,this.width=300}firstUpdated(){const e=this._canvas.getContext("2d");window.requestAnimationFrame(()=>{this._tree(e,600,600,80,-Math.PI/2,13,13)})}render(){return Y`<canvas id="tree" style="position: fixed;" height="${this.height}" width="${this.width}"></canvas>`}_tree(e,t,r,n,i,o,a){const s=Math.random;let l,c,u,h;const p=2*Math.PI/4;e.beginPath(),e.moveTo(t,r),u=t+n*Math.cos(i),h=r+n*Math.sin(i),e.lineCap="round",e.lineWidth=a,e.lineTo(u,h),e.strokeStyle=o<=2?"#1095a9":"#333",e.stroke();const d=o-1;if(!d)return;const f=2*s()+1;a*=.7;for(let t=0;t<f;t++)c=i+s()*p-.5*p,l=n*(.7+.3*s()),this._tree(e,u,h,l,c,d,a)}get _canvas(){return this.shadowRoot.querySelector("#tree")}}tt.is="ui-tree",et([Se({type:Number,reflect:!0})],tt.prototype,"height",void 0),et([Se({type:Number,reflect:!0})],tt.prototype,"width",void 0),customElements.define(tt.is,tt);var rt=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class nt extends Re{constructor(e){super(),this.asked=e}render(){return Y`
		<style>
            h1, p {
                user-select: none;
                z-index: 1;
            }

            a {
                color: var(--elara-primary);
                text-decoration: none;
                cursor: pointer;
            }
        </style>
        <div>
            <h1>You are lost !</h1>
            <p>You asked for : ${this.asked}.</p>
            <a @click=${()=>{location.hash="#!home"}}><iron-icon icon="home"></iron-icon> Homepage</a>
            <ui-tree .width=${1366} .height=${768}></ui-tree>
        </div>
        `}}nt.is="ui-not-found",rt([Se({type:String,reflect:!0})],nt.prototype,"asked",void 0),customElements.define(nt.is,nt);var it=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};Promise.all([r.e(1),r.e(2)]).then(r.bind(null,59));class ot extends Re{createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){super.connectedCallback(),this._onHashChangeListener=this._onHashChange.bind(this),window.addEventListener("hashchange",this._onHashChangeListener,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._onHashChangeListener)}_onHashChange(e){const t=e.newURL.replace(location.origin+"/","").split("/")[0];let r=null;if(t){const e=new URL(location.origin+"/"+t).hash.replace("#!","");r=e||"home"}else r="home";this.route!==r&&(this.content.innerHTML="",this.load(r))}load(e){const t="%s | Léonard C.",r=customElements.get("ui-"+e);this.route=e,this.content.classList.remove("full-width");const n=customElements.get("ui-not-found"),i=r?new r:new n(e);if(i.head&&i.head.title?document.title=t.replace("%s",i.head.title):document.title="Léonard C.",!0!==i.isFullWidth||this.content.classList.contains("full-width")?i.isFullWidth||this.content.classList.remove("full-width"):this.content.classList.add("full-width"),this.content.appendChild(i),i instanceof n)throw new $e.Errors.NotFound(e);document.body.scrollTop=0;const o=window.requestAnimationFrame(()=>{if(!i.shadowRoot)return void cancelAnimationFrame(o);const e=i.shadowRoot.querySelector("div");e?e.animate({opacity:[.5,1],transform:["scale(.95)","scale(1)"]},{duration:600}):cancelAnimationFrame(o)})}firstUpdated(){const e=new HashChangeEvent("hashchange",{newURL:location.hash,oldURL:null});this._onHashChange(e)}render(){return Y`
			<style>
			:host {
            	--background-image: url('https://source.unsplash.com/collection/1727869/1366x768');
        	}
				
			.content {
				background: var(--elara-lightgray);
				color: var(--elara-darkgray);
				display: inline-block;

				font-family: var(--elara-font-primary);
				opacity: 1;
				margin: 0;

				height: 92vh;
				width: 62vw;
				max-width: 100vw;

				padding: 4vh 3vw;
				padding-left: 33vw;
				margin-right: 1em;
			}

			.content.full-width { margin: 0; padding: 0 }

			@media (min-width: 1033px){}
			</style>
			<ui-profile></ui-profile>
			<div id="content" class="content"></div>
		`}get content(){return this.shadowRoot.querySelector("#content")}}ot.is="elara-app",it([Se({reflect:!0,type:String})],ot.prototype,"route",void 0),customElements.define(ot.is,ot)}]);
//# sourceMappingURL=main.576a65b9.js.map