!function(e){function t(t){for(var n,i,o=t[0],a=t[1],s=0,l=[];s<o.length;s++)i=o[s],r[i]&&l.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);l.length;)l.shift()()}var n={},r={0:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,i){n=r[e]=[t,i]});t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+""+({}[e]||e)+"."+{1:"478b4da0",2:"e8636302"}[e]+".js"}(e),a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+i+": "+o+")");a.type=i,a.request=o,n[1](a)}r[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var c=a;i(i.s=3)}([function(e,t,n){e.exports=n(1)},function(e,t,n){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,o=Object.create(i.prototype),a=new E(r||[]);return o._invoke=function(e,t,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?f:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",f="completed",v={};function y(){}function m(){}function g(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(O([])));_&&_!==r&&i.call(_,a)&&(w=_);var x=g.prototype=y.prototype=Object.create(w);function k(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function S(e){var n;this._invoke=function(r,o){function a(){return new Promise(function(n,a){!function n(r,o,a,s){var c=u(e[r],e,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===t(h)&&i.call(h,"__await")?Promise.resolve(h.__await).then(function(e){n("next",e,a,s)},function(e){n("throw",e,a,s)}):Promise.resolve(h).then(function(e){l.value=e,a(l)},function(e){return n("throw",e,a,s)})}s(c.arg)}(r,o,n,a)})}return n=n?n.then(a,a):a()}}function P(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,P(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,v;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:n,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,g[c]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(S.prototype),S.prototype[s]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,i){var o=new S(l(t,n,r,i));return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},k(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return s.type="throw",s.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),v}},e}("object"===t(e)?e.exports:{});try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}}).call(this,n(2)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";n.r(t);
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
var r=new WeakMap,i=function(e){return"function"==typeof e&&r.has(e)},o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=t;i!==n;){var o=i.nextSibling;e.insertBefore(i,r),i=o}},s=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;r!==n;){var i=r.nextSibling;e.removeChild(r),r=i}},c={},l={};
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
var u="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(u,"--\x3e"),p=new RegExp("".concat(u,"|").concat(h)),d=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parts=[],this.element=n;var i=-1,o=0,a=[];!function e(n){for(var s=n.content,c=document.createTreeWalker(s,133,null,!1),l=0;c.nextNode();){i++;var h=c.currentNode;if(1===h.nodeType){if(h.hasAttributes()){for(var d=h.attributes,f=0,m=0;m<d.length;m++)d[m].value.indexOf(u)>=0&&f++;for(;f-- >0;){var g=t.strings[o],w=y.exec(g)[2],b=w.toLowerCase()+"$lit$",_=h.getAttribute(b).split(p);r.parts.push({type:"attribute",index:i,name:w,strings:_}),h.removeAttribute(b),o+=_.length-1}}"TEMPLATE"===h.tagName&&e(h)}else if(3===h.nodeType){var x=h.data;if(x.indexOf(u)>=0){for(var k=h.parentNode,S=x.split(p),P=S.length-1,C=0;C<P;C++)k.insertBefore(""===S[C]?v():document.createTextNode(S[C]),h),r.parts.push({type:"node",index:++i});""===S[P]?(k.insertBefore(v(),h),a.push(h)):h.data=S[P],o+=P}}else if(8===h.nodeType)if(h.data===u){var j=h.parentNode;null!==h.previousSibling&&i!==l||(i++,j.insertBefore(v(),h)),l=i,r.parts.push({type:"node",index:i}),null===h.nextSibling?h.data="":(a.push(h),i--),o++}else for(var E=-1;-1!==(E=h.data.indexOf(u,E+1));)r.parts.push({type:"node",index:-1})}}(n);for(var s=0,c=a;s<c.length;s++){var l=c[s];l.parentNode.removeChild(l)}},f=function(e){return-1!==e.index},v=function(){return document.createComment("")},y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}
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
var w=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._parts=[],this.template=t,this.processor=n,this.options=r}var t,n,r;return t=e,(n=[{key:"update",value:function(e){var t=0,n=!0,r=!1,i=void 0;try{for(var o,a=this._parts[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;void 0!==s&&s.setValue(e[t]),t++}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}var c=!0,l=!1,u=void 0;try{for(var h,p=this._parts[Symbol.iterator]();!(c=(h=p.next()).done);c=!0){var d=h.value;void 0!==d&&d.commit()}}catch(e){l=!0,u=e}finally{try{c||null==p.return||p.return()}finally{if(l)throw u}}}},{key:"_clone",value:function(){var e=this,t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=this.template.parts,r=0,i=0;return function t(o){for(var a=document.createTreeWalker(o,133,null,!1),s=a.nextNode();r<n.length&&null!==s;){var c=n[r];if(f(c))if(i===c.index){if("node"===c.type){var l=e.processor.handleTextExpression(e.options);l.insertAfterNode(s.previousSibling),e._parts.push(l)}else{var u;(u=e._parts).push.apply(u,m(e.processor.handleAttributeExpressions(s,c.name,c.strings,e.options)))}r++}else i++,"TEMPLATE"===s.nodeName&&t(s.content),s=a.nextNode();else e._parts.push(void 0),r++}}(t),o&&(document.adoptNode(t),customElements.upgrade(t)),t}}])&&g(t.prototype,n),r&&g(t,r),e}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}
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
 */var k=function(){function e(t,n,r,i){b(this,e),this.strings=t,this.values=n,this.type=r,this.processor=i}return x(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=0;n<e;n++){var r=this.strings[n],i=y.exec(r);t+=i?r.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+u:r+h}return t+this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}();function S(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e,t,n){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return t&&N(e.prototype,t),n&&N(e,n),e}function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
 */var A=function(e){return null===e||!("object"===R(e)||"function"==typeof e)},T=function(){function e(t,n,r){O(this,e),this.dirty=!0,this.element=t,this.name=n,this.strings=r,this.parts=[];for(var i=0;i<r.length-1;i++)this.parts[i]=this._createPart()}return L(e,[{key:"_createPart",value:function(){return new M(this)}},{key:"_getValue",value:function(){for(var e=this.strings,t=e.length-1,n="",r=0;r<t;r++){n+=e[r];var i=this.parts[r];if(void 0!==i){var o=i.value;if(null!=o&&(Array.isArray(o)||"string"!=typeof o&&o[Symbol.iterator])){var a=!0,s=!1,c=void 0;try{for(var l,u=o[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var h=l.value;n+="string"==typeof h?h:String(h)}}catch(e){s=!0,c=e}finally{try{a||null==u.return||u.return()}finally{if(s)throw c}}}else n+="string"==typeof o?o:String(o)}}return n+=e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),M=function(){function e(t){O(this,e),this.value=void 0,this.committer=t}return L(e,[{key:"setValue",value:function(e){e===c||A(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;i(this.value);){var e=this.value;this.value=c,e(this)}this.value!==c&&this.committer.commit()}}]),e}(),$=function(){function e(t){O(this,e),this.value=void 0,this._pendingValue=void 0,this.options=t}return L(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(v()),this.endNode=e.appendChild(v())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e._insert(this.startNode=v()),e._insert(this.endNode=v())}},{key:"insertAfterPart",value:function(e){e._insert(this.startNode=v()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this._pendingValue=e}},{key:"commit",value:function(){for(;i(this._pendingValue);){var e=this._pendingValue;this._pendingValue=c,e(this)}var t=this._pendingValue;t!==c&&(A(t)?t!==this.value&&this._commitText(t):t instanceof k?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===l?(this.value=l,this.clear()):this._commitText(t))}},{key:"_insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"_commitNode",value:function(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}},{key:"_commitText",value:function(e){var t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}},{key:"_commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof w&&this.value.template===t)this.value.update(e.values);else{var n=new w(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}},{key:"_commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r=this.value,i=0,o=!0,a=!1,s=void 0;try{for(var c,l=t[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var u=c.value;void 0===(n=r[i])&&(n=new e(this.options),r.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(r[i-1])),n.setValue(u),n.commit(),i++}}catch(e){a=!0,s=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw s}}i<r.length&&(r.length=i,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;s(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),z=function(){function e(t,n,r){if(O(this,e),this.value=void 0,this._pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=n,this.strings=r}return L(e,[{key:"setValue",value:function(e){this._pendingValue=e}},{key:"commit",value:function(){for(;i(this._pendingValue);){var e=this._pendingValue;this._pendingValue=c,e(this)}if(this._pendingValue!==c){var t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=c}}}]),e}(),V=function(e){function t(e,n,r){var i;return O(this,t),(i=S(this,C(t).call(this,e,n,r))).single=2===r.length&&""===r[0]&&""===r[1],i}return j(t,T),L(t,[{key:"_createPart",value:function(){return new q(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:P(C(t.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),t}(),q=function(e){function t(){return O(this,t),S(this,C(t).apply(this,arguments))}return j(t,M),t}(),H=!1;try{var I={get capture(){return H=!0,!1}};window.addEventListener("test",I,I),window.removeEventListener("test",I,I)}catch(e){}var F=function(){function e(t,n,r){var i=this;O(this,e),this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=n,this.eventContext=r,this._boundHandleEvent=function(e){return i.handleEvent(e)}}return L(e,[{key:"setValue",value:function(e){this._pendingValue=e}},{key:"commit",value:function(){for(;i(this._pendingValue);){var e=this._pendingValue;this._pendingValue=c,e(this)}if(this._pendingValue!==c){var t=this._pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),o=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),o&&(this._options=U(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=c}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),U=function(e){return e&&(H?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)};function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}
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
var W=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new V(e,t.slice(1),n).parts:"@"===i?[new F(e,t.slice(1),r.eventContext)]:"?"===i?[new z(e,t.slice(1),n)]:new T(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new $(e)}}])&&B(t.prototype,n),r&&B(t,r),e}());
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
function D(e){var t=G.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},G.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(u);return void 0===(n=t.keyString.get(r))&&(n=new d(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var G=new Map,J=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");var Y=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new k(e,n,"html",W)},Q=133;function Z(e,t){for(var n=e.element.content,r=e.parts,i=document.createTreeWalker(n,Q,null,!1),o=X(r),a=r[o],s=-1,c=0,l=[],u=null;i.nextNode();){s++;var h=i.currentNode;for(h.previousSibling===u&&(u=null),t.has(h)&&(l.push(h),null===u&&(u=h)),null!==u&&c++;void 0!==a&&a.index===s;)a.index=null!==u?-1:a.index-c,a=r[o=X(r,o)]}l.forEach(function(e){return e.parentNode.removeChild(e)})}var K=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,Q,null,!1);n.nextNode();)t++;return t},X=function(e){for(var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){var n=e[t];if(f(n))return t}return-1};
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
var ee=function(e,t){return"".concat(e,"--").concat(t)},te=!0;void 0===window.ShadyCSS?te=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),te=!1);var ne=function(e){return function(t){var n=ee(t.type,e),r=G.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},G.set(n,r));var i=r.stringsArray.get(t.strings);if(void 0!==i)return i;var o=t.strings.join(u);if(void 0===(i=r.keyString.get(o))){var a=t.getTemplateElement();te&&window.ShadyCSS.prepareTemplateDom(a,e),i=new d(t,a),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i}},re=["html","svg"],ie=new Set,oe=function(e,t,n){ie.add(n);var r=e.querySelectorAll("style");if(0!==r.length){for(var i=document.createElement("style"),o=0;o<r.length;o++){var a=r[o];a.parentNode.removeChild(a),i.textContent+=a.textContent}if(function(e){re.forEach(function(t){var n=G.get(ee(t,e));void 0!==n&&n.keyString.forEach(function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(function(e){n.add(e)}),Z(e,n)})})}(n),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,i=e.parts;if(null!=n)for(var o=document.createTreeWalker(r,Q,null,!1),a=X(i),s=0,c=-1;o.nextNode();)for(c++,o.currentNode===n&&(s=K(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===c;){if(s>0){for(;-1!==a;)i[a].index+=s,a=X(i,a);return}a=X(i,a)}else r.appendChild(t)}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){var s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);var c=new Set;c.add(i),Z(t,c)}}else window.ShadyCSS.prepareTemplateStyles(t.element,n)},ae=n(0),se=n.n(ae);function ce(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t){return!t||"object"!==le(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function de(e){var t="function"==typeof Map?new Map:void 0;return(de=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return fe(e,arguments,ye(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),ve(r,e)})(e)}function fe(e,t,n){return(fe=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&ve(i,n.prototype),i}).apply(null,arguments)}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}
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
 */window.JSCompiler_renameProperty=function(e,t){return e};var me={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ge=function(e,t){return t!==e&&(t==t||e==e)},we={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:ge},be=Promise.resolve(!0),_e=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=pe(this,ye(t).call(this)))._updateState=0,e._instanceProperties=void 0,e._updatePromise=be,e._hasConnectedResolver=void 0,e._changedProperties=new Map,e._reflectingProperties=void 0,e.initialize(),e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(t,de(HTMLElement)),n=t,r=[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach(function(t,n){if(e.hasOwnProperty(n)){var r=e[n];delete e[n],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(n,r)}})}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach(function(t,n){return e[n]=t}),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this._attributeToProperty(e,n)}},{key:"_propertyToAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:we,r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){var o=r._propertyValueToAttribute(t,n);if(void 0===o)return;this._updateState=8|this._updateState,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){var i=n._classProperties.get(r)||we;this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,i),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(e,t){var n=!0;if(void 0!==e){var r=this.constructor,i=r._classProperties.get(e)||we;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}},{key:"requestUpdate",value:function(e,t){return this._requestUpdate(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:function(){var e,t=(e=se.a.mark(function e(){var t,n,r,i,o=this;return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,r=this._updatePromise,this._updatePromise=new Promise(function(e,r){t=e,n=r}),e.prev=3,e.next=6,r;case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:if(this._hasConnected){e.next=13;break}return e.next=13,new Promise(function(e){return o._hasConnectedResolver=e});case 13:if(e.prev=13,null==(i=this.performUpdate())){e.next=18;break}return e.next=18,i;case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13),n(e.t1);case 23:t(!this._hasRequestedUpdate);case 24:case"end":return e.stop()}},e,this,[[3,8],[13,20]])}),function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){ue(o,r,i,a,s,"next",e)}function s(e){ue(o,r,i,a,s,"throw",e)}a(void 0)})});return function(){return t.apply(this,arguments)}}()},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(function(e,n){return t._propertyToAttribute(n,t[n],e)}),this._reflectingProperties=void 0)}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}},{key:"_hasConnected",get:function(){return 32&this._updateState}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._updatePromise}}],i=[{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(function(t,n){return e._classProperties.set(n,t)})}}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:we;if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var n="symbol"===le(e)?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get:function(){return this[n]},set:function(t){var r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))||!this.finalized){var e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,n=[].concat(ce(Object.getOwnPropertyNames(t)),ce("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[])),r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value;this.createProperty(c,t[c])}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}}},{key:"_attributeNameForProperty",value:function(e,t){var n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:ge)(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var n=t.type,r=t.converter||me,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var n=t.type,r=t.converter;return(r&&r.toAttribute||me.toAttribute)(e,n)}}},{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach(function(n,r){var i=e._attributeNameForProperty(r,n);void 0!==i&&(e._attributeToPropertyMap.set(i,r),t.push(i))}),t}}],r&&he(n.prototype,r),i&&he(n,i),t}();_e.finalized=!0;
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
var xe=function(e,t){return"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer:function(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher:function(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher:function(n){n.createProperty(t.key,e)}})},ke=function(e,t,n){t.constructor.createProperty(n,e)};function Se(e){return function(t,n){return void 0!==n?ke(e,t,n):xe(e,t)}}
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
var Pe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();function Ce(e){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function je(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,t){return!t||"object"!==Ce(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Oe(e,t,n){return(Oe="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ne(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function Ne(e){return(Ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Le(e,t){return(Le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");var Re=function(e){return e.flat?e.flat(1/0):function e(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=0,i=t.length;r<i;r++){var o=t[r];Array.isArray(o)?e(o,n):n.push(o)}return n}(e)},Ae=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ee(this,Ne(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Le(e,t)}(t,_e),n=t,i=[{key:"finalize",value:function(){Oe(Ne(t),"finalize",this).call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}},{key:"_getUniqueStyles",value:function(){var e=this.styles,t=[];Array.isArray(e)?Re(e).reduceRight(function(e,t){return e.add(t),e},new Set).forEach(function(e){return t.unshift(e)}):e&&t.push(e);return t}}],(r=[{key:"initialize",value:function(){Oe(Ne(t.prototype),"initialize",this).call(this),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Pe?this.renderRoot.adoptedStyleSheets=e.map(function(e){return e.styleSheet}):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(function(e){return e.cssText}),this.localName))}},{key:"connectedCallback",value:function(){Oe(Ne(t.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var n=this;Oe(Ne(t.prototype),"update",this).call(this,e);var r=this.render();r instanceof k&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(function(e){var t=document.createElement("style");t.textContent=e.cssText,n.renderRoot.appendChild(t)}))}},{key:"render",value:function(){}}])&&je(n.prototype,r),i&&je(n,i),t}();Ae.finalized=!0,Ae.render=function(e,t,n){var r=n.scopeName,i=J.has(t),o=t instanceof ShadowRoot&&te&&e instanceof k,a=o&&!ie.has(r),c=a?document.createDocumentFragment():t;if(function(e,t,n){var r=J.get(t);void 0===r&&(s(t,t.firstChild),J.set(t,r=new $(Object.assign({templateFactory:D},n))),r.appendInto(t)),r.setValue(e),r.commit()}(e,c,Object.assign({templateFactory:ne(r)},n)),a){var l=J.get(c);J.delete(c),l.value instanceof w&&oe(c,l.value.template,r),s(t,t.firstChild),t.appendChild(c),J.set(t,l)}!i&&o&&window.ShadyCSS.styleElement(t.host)};var Te,Me={Errors:{GenericError:class extends Error{constructor(){super(...arguments),this.elara=!1,this.continue=!0,this.reload=!0}},NotFound:class extends Error{constructor(){super(...arguments),this.elara=!0,this.continue=!0,this.reload=!1}},Prototype:class extends Error{constructor(){super(...arguments),this.elara=!1,this.continue=!0,this.reload=!1}}}},$e=function(e,t){var n=e.startNode.parentNode,r=void 0===t?e.endNode:t.startNode,i=n.insertBefore(v(),r);n.insertBefore(v(),r);var o=new $(e.options);return o.insertAfterNode(i),o},ze=function(e,t){return e.setValue(t),e.commit(),e},Ve=function(e,t,n){var r=e.startNode.parentNode,i=n?n.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&a(r,t.startNode,o,i)},qe=function(e){s(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},He=function(e,t,n){for(var r=new Map,i=t;i<=n;i++)r.set(e[i],i);return r},Ie=new WeakMap,Fe=new WeakMap,Ue=(Te=function(e,t,n){var r;return void 0===n?n=t:void 0!==t&&(r=t),function(t){if(!(t instanceof $))throw new Error("repeat can only be used in text bindings");var i,o,a=Ie.get(t)||[],s=Fe.get(t)||[],c=[],l=[],u=[],h=0,p=!0,d=!1,f=void 0;try{for(var v,y=e[Symbol.iterator]();!(p=(v=y.next()).done);p=!0){var m=v.value;u[h]=r?r(m,h):h,l[h]=n(m,h),h++}}catch(e){d=!0,f=e}finally{try{p||null==y.return||y.return()}finally{if(d)throw f}}for(var g=0,w=a.length-1,b=0,_=l.length-1;g<=w&&b<=_;)if(null===a[g])g++;else if(null===a[w])w--;else if(s[g]===u[b])c[b]=ze(a[g],l[b]),g++,b++;else if(s[w]===u[_])c[_]=ze(a[w],l[_]),w--,_--;else if(s[g]===u[_])c[_]=ze(a[g],l[_]),Ve(t,a[g],c[_+1]),g++,_--;else if(s[w]===u[b])c[b]=ze(a[w],l[b]),Ve(t,a[w],a[g]),w--,b++;else if(void 0===i&&(i=He(u,b,_),o=He(s,g,w)),i.has(s[g]))if(i.has(s[w])){var x=o.get(u[b]),k=void 0!==x?a[x]:null;if(null===k){var S=$e(t,a[g]);ze(S,l[b]),c[b]=S}else c[b]=ze(k,l[b]),Ve(t,k,a[g]),a[x]=null;b++}else qe(a[w]),w--;else qe(a[g]),g++;for(;b<=_;){var P=$e(t,c[_+1]);ze(P,l[b]),c[b++]=P}for(;g<=w;){var C=a[g++];null!==C&&qe(C)}Ie.set(t,c),Fe.set(t,u)}},function(){var e=Te.apply(void 0,arguments);return r.set(e,!0),e}),Be=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},We=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})};
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
 */class De extends Ae{constructor(){super(...arguments),this.repositories=[],this.currentPage=null,this.page=0,this.inError=!1,this.chunksLength=6}firstUpdated(){return We(this,void 0,void 0,function*(){this._spinner.active=!0;const e=new XMLHttpRequest;e.open("POST","https://api.github.com/graphql",!0),e.setRequestHeader("Authorization","bearer "+atob("ZDQ0Y2JmYjVlOGRiOTRjMjJkNThlYjg4ZjFlNjIyODM4YzQ1N2Q3Mg==")),e.send(JSON.stringify({query:'{ search(query: "user:ghostfly is:public", type: REPOSITORY, first: 100) { repositoryCount edges { node { ... on Repository { name stargazers { totalCount } description forkCount createdAt url primaryLanguage {name} }}}}}'}));const t=()=>{if(!this._spinner)return;this._spinner.active=!1;const e=this._spinner.parentElement;e.removeChild(this._spinner),this.shadowRoot.removeChild(e)},n=()=>{t(),this.inError=!0};e.onerror=n,e.onreadystatechange=(()=>We(this,void 0,void 0,function*(){if(4==e.readyState&&200==e.status){const n=JSON.parse(e.responseText).data.search.edges.sort((e,t)=>new Date(t.node.createdAt)-new Date(e.node.createdAt));this.repositories=this._chunk(n,this.chunksLength),this.currentPage=this.repositories[this.page],t(),yield this.updateComplete,this._pulse()}403===e.status&&n()}))})}_chunk(e,t){const n=[],r=e.length;let i=0;for(;i<r;)n.push(e.slice(i,i+=t));return n}render(){return Y`
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
        </style>
        <div class="loader">
            <paper-spinner></paper-spinner>
        </div>
        ${this.inError?Y`<p>Can't load GitHub repositories.. 😢 <br />You can check on <a class="link" href="https://github.com/ghostfly/">GitHub</a> directly !</p>`:Y``}
        ${this.currentPage?Y`
        <div class="two-cols">
            ${Ue(this.currentPage,e=>Y`
                <section class="github-card" @click=${()=>{window.open(e.node.url)}}>
                    <div class="title">${e.node.name}</div>
                    <div class="description">${e.node.description}</div>
                    <div class="bottom">
                        <span>${e.node.primaryLanguage?e.node.primaryLanguage.name:""}</span>
                        <span><iron-icon icon="stars"></iron-icon> ${e.node.stargazers.totalCount}</span>
                        <span><iron-icon icon="subdirectory-arrow-right"></iron-icon> ${e.node.forkCount}</span>
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
        <a role="button" disabled=${0===this.page} @click=${()=>We(this,void 0,void 0,function*(){this.page--,this.currentPage=this.repositories[this.page],yield this.updateComplete,this._pulse()})}>
            <paper-icon-button aria-label="Previous page" icon="arrow-back"></paper-icon-button>
        </a>
        `}get _next(){return Y`
        <a role="button" disabled=${this.page+1===this.repositories.length} @click=${()=>We(this,void 0,void 0,function*(){this.page++,this.currentPage=this.repositories[this.page],yield this.updateComplete,this._pulse()})}>
            <paper-icon-button aria-label="Next page" icon="arrow-forward"></paper-icon-button>
        </a>
        `}get _spinner(){return this.shadowRoot.querySelector("paper-spinner")}}De.is="ui-github-work",Be([Se({type:Array})],De.prototype,"repositories",void 0),Be([Se({type:Array})],De.prototype,"currentPage",void 0),Be([Se({type:Number,reflect:!0})],De.prototype,"page",void 0),Be([Se({type:Boolean,reflect:!0})],De.prototype,"inError",void 0),customElements.define(De.is,De);var Ge=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},Je=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})};class Ye extends Ae{constructor(){super(...arguments),this.loaded=!1}connectedCallback(){super.connectedCallback(),this.route=location.hash,this._hashChangeListener=this._onHashChange.bind(this),window.addEventListener("hashchange",this._hashChangeListener)}firstUpdated(){return Je(this,void 0,void 0,function*(){const e=yield this._toDataURL("https://source.unsplash.com/collection/1727869/1366x768");this.container.style.backgroundImage=`url('${e}')`})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._hashChangeListener)}_toDataURL(e){return new Promise(t=>{const n=new Image;n.crossOrigin="Anonymous",n.onload=(()=>{const e=document.createElement("canvas"),r=e.getContext("2d");e.height=n.naturalHeight,e.width=n.naturalWidth,r.drawImage(n,0,0),this.loaded=!0,t(e.toDataURL("image/jpeg"))}),n.src=e})}_onHashChange(e){e.newURL?this.route=new URL(e.newURL).hash:this.route=null}render(){return Y`
        <style>
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
        
        .profile > .pic {
            width: 20vw;
            height: 20vw;
            border-radius: 3px;
        }
        </style>
        <div role="link" id="container" class="profile ${"#!home"!==this.route&&this.route?"is-link":""}" @click=${()=>{location.hash="#!home"}}>
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
        `}get container(){return this.shadowRoot.querySelector("#container")}}Ye.is="ui-profile",Ge([Se({type:String,reflect:!0})],Ye.prototype,"route",void 0),Ge([Se({type:Boolean,reflect:!0})],Ye.prototype,"loaded",void 0),customElements.define(Ye.is,Ye);class Qe extends Ae{get head(){return{title:"Work",description:"",type:"page",image:"",slug:"#!home"}}render(){return Y`
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
        `}}Qe.is="ui-home",customElements.define(Qe.is,Qe);var Ze=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};class Ke extends Ae{constructor(){super(...arguments),this.inError=!1,this.isSuccess=!1}get head(){return{title:"Contact",description:"",type:"page",image:"",slug:"#!contact"}}get _links(){return[{label:"Github",link:"https://github.com/Ghostfly",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>`},{label:"Medium",link:"https://medium.com/@ghostfly1",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.962 7.257l-5.457 8.867-3.923-6.375 3.126-5.08c.112-.183.32-.287.527-.287.05 0 .1.008.15.02.038.01.077.023.113.04l5.43 2.716.006.002.01.008c.027.02.036.057.018.087zM9.86 8.592v5.783l5.14 2.57-5.14-8.353zm5.912 8.74l4.23 2.114c.552.275.998.083.998-.43V8.836l-5.228 8.495zM8.968 7.177l-5.303-2.65c-.096-.05-.187-.072-.27-.072-.232 0-.395.18-.395.482v11.45c0 .306.224.67.498.806l4.67 2.335c.12.06.235.087.338.087.29 0 .494-.225.494-.602V7.23c0-.022-.012-.042-.032-.052z"/></g></svg>`},{label:"LinkedIn",link:"https://fr.linkedin.com/in/leonardcherouvrier/en",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.34 18.338H5.666v-8.59H8.34v8.59zM7.003 8.574c-.857 0-1.55-.694-1.55-1.548 0-.855.692-1.548 1.55-1.548.854 0 1.547.694 1.547 1.548 0 .855-.692 1.548-1.546 1.548zm11.335 9.764h-2.67V14.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.6 1.086-1.6 2.206v4.248h-2.668v-8.59h2.56v1.174h.036c.357-.675 1.228-1.387 2.527-1.387 2.703 0 3.203 1.78 3.203 4.092v4.71z"/></g></svg>`},{label:"Facebook",link:"https://www.facebook.com/gh0std3v",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.007 3H3.993C3.445 3 3 3.445 3 3.993v16.013c0 .55.445.994.993.994h8.62v-6.97H10.27V11.31h2.346V9.31c0-2.325 1.42-3.59 3.494-3.59.993 0 1.847.073 2.096.106v2.43h-1.438c-1.128 0-1.346.537-1.346 1.324v1.734h2.69l-.35 2.717h-2.34V21h4.587c.548 0 .993-.445.993-.993V3.993c0-.548-.445-.993-.993-.993z"/></g></svg>`},{label:"Instagram",link:"https://www.instagram.com/gh0stfly_",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 4.622c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.234.052-3.638.052s-2.688-.01-3.637-.052c-.877-.04-1.354-.187-1.67-.31-.42-.163-.72-.358-1.036-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638s.01-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.42.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052M12 3c-2.444 0-2.75.01-3.71.054s-1.613.196-2.185.418c-.592.23-1.094.538-1.594 1.04-.5.5-.807 1-1.037 1.593-.223.572-.375 1.226-.42 2.184C3.01 9.25 3 9.555 3 12s.01 2.75.054 3.71.196 1.613.418 2.186c.23.592.538 1.094 1.038 1.594s1.002.808 1.594 1.038c.572.222 1.227.375 2.185.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054 1.613-.196 2.186-.418c.592-.23 1.094-.538 1.594-1.038s.808-1.002 1.038-1.594c.222-.572.375-1.227.418-2.185.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71-.196-1.613-.418-2.186c-.23-.592-.538-1.094-1.038-1.594s-1.002-.808-1.594-1.038c-.572-.222-1.227-.375-2.185-.418C14.75 3.01 14.445 3 12 3zm0 4.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08c.596 0 1.08-.484 1.08-1.08s-.483-1.08-1.08-1.08z"/></g></svg>`},{label:"Twitter",link:"https://twitter.com/gh0std3v",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-2.534 6.71c.004.1.007.198.007.298 0 3.045-2.318 6.556-6.556 6.556-1.3 0-2.512-.38-3.532-1.035.18.02.364.03.55.03 1.08 0 2.073-.367 2.862-.985-1.008-.02-1.86-.685-2.152-1.6.14.027.285.04.433.04.21 0 .414-.027.607-.08-1.054-.212-1.848-1.143-1.848-2.26v-.028c.31.173.666.276 1.044.288-.617-.413-1.024-1.118-1.024-1.918 0-.422.114-.818.312-1.158 1.136 1.393 2.834 2.31 4.75 2.406-.04-.17-.06-.344-.06-.525 0-1.27 1.03-2.303 2.303-2.303.664 0 1.262.28 1.683.728.525-.103 1.018-.295 1.463-.56-.172.54-.537.99-1.013 1.276.466-.055.91-.18 1.323-.362-.31.46-.7.867-1.15 1.192z"/></g></svg>`},{label:"YouTube",link:"https://www.youtube.com/user/xSpirit6/videos",svg:Y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"/></g></svg>`},{label:"Phone",link:"tel:+33668717002",svg:Y`<iron-icon icon="communication:call"></iron-icon>`}]}render(){return Y`
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
        .linkedin svg { fill: #0073b0 }
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
        `}_makeLink(e,t,n){return Y`
            <div aria-label=${e} class="item ${e.toLowerCase()}" @click=${()=>{window.open(t,"_blank")}} role="link">
                ${n}
            </div>
        `}_doSend(e){const t=this.shadowRoot.querySelector("#form"),n=e.target,r=this.shadowRoot.querySelector("#name"),i=this.shadowRoot.querySelector("#email"),o=this.shadowRoot.querySelector("#message");let a=!0;const s=[r,i,o];if(s.forEach(e=>(e=>e.validate())(e)?e.invalid=!1:e.invalid=!0),s.forEach(e=>{e.invalid&&a&&(a=!1)}),a){n.disabled=!0,s.forEach(e=>e.disabled=!0);const e=new FormData;e.append("name",r.value),e.append("email",i.value),e.append("message",o.value);const a=new XMLHttpRequest;a.open("POST","https://script.google.com/macros/s/AKfycbzdhNONz-1pGAlOktko4o5riYGErccxRfk8LsqTxq0ws31wKZ0/exec"),a.onreadystatechange=(()=>{200===a.status&&(this.isSuccess=!0,t.classList.add("sended"))}),a.onerror=(()=>{this.inError=!0}),a.send(e)}}}Ke.is="ui-contact",Ze([Se({type:Boolean,reflect:!0})],Ke.prototype,"inError",void 0),Ze([Se({type:Boolean,reflect:!0})],Ke.prototype,"isSuccess",void 0),customElements.define(Ke.is,Ke);class Xe extends Ae{get head(){return{title:"About",description:"",type:"page",image:"",slug:"#!about"}}render(){return Y`
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
            <a class="prev" @click=${()=>{location.hash="#!home"}}>< Work</a>
            <a class="next" @click=${()=>{location.hash="#!projects"}}>> Projects</a>
        </div>
        `}}Xe.is="ui-about",customElements.define(Xe.is,Xe);class et extends Ae{get head(){return{title:"Projects",description:"",type:"page",image:"",slug:"#!projects"}}get projects(){return[{name:"Dandy Costard",slug:"dandy",image:"/assets/projects/dandy.svg",repository:null,status:"Work in progress",url:null,tags:["E-Commerce","Elara","Custom menswear","ThreeJS"]},{name:"Ghostfly.dev",slug:"ghostfly",image:"/assets/me.svg",repository:"https://github.com/Ghostfly/ghostfly.dev/tree/master",status:"Work in progress",url:null,tags:["Elara","LitElement","Github Pages"]},{name:"Persin Conseil",slug:"persin",image:"/assets/projects/persin.jpg",status:"published",repository:"https://github.com/Ghostfly/persin-conseil",url:"https://www.persin.fr",tags:["Lit-Element","Elara","Workbox"]},{name:"Dobrunia Design",slug:"react",image:"/assets/projects/dobrunia.png",status:"published",repository:null,url:"https://www.dobruniadesign.com",tags:["React","HapiJS","Material-UI"]},{name:"Cheno",slug:"cheno",image:"/assets/projects/cheno.svg",status:"published",repository:null,url:"https://www.cheno.fr",tags:["Slim Framework","HTML5","CSS3"]},{name:"Renouveau Sociétal",slug:"rs",image:"/assets/projects/rs.png",status:"published",repository:null,url:"https://www.renouveausocietal.fr",tags:["WordPress","Handmade template"]},{name:"G-Addiction",slug:"g-addiction",image:"/assets/projects/g-addiction.png",status:"published",repository:null,url:"https://www.g-addiction.com",tags:["WordPress","chosen template"]},{name:"Who?",slug:"who",status:"...",repository:null,image:"/assets/projects/who.svg",tags:["?"]}]}render(){return Y`
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

            .with-link {
                color: var(--elara-link);
                cursor: pointer;
                transition: color .3s;
            }

            .with-link:hover {
                color: var(--elara-primary);
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
                <section class="project">
                    <div class="hidden-content grid">
                        <div class="left">
                            <h3 class="${e.slug} ${e.url?"with-link":"normal"}" role="${e.url?"link":"title"}"  @click=${()=>{e.url&&window.open(e.url)}}>${e.name}</h3>
                            <div class="tags">
                                ${e.tags.join(", ")}
                            </div>
                            <br />
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
            <a class="prev" @click=${()=>{location.hash="#!about"}}>< About</a>
            <a class="next" @click=${()=>{location.hash="#!contact"}}>> Contact</a>
        </div>
        `}}et.is="ui-projects",customElements.define(et.is,et);var tt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};class nt extends Ae{constructor(){super(...arguments),this.height=300,this.width=300}firstUpdated(){const e=this._canvas.getContext("2d");window.requestAnimationFrame(()=>{this._tree(e,600,600,80,-Math.PI/2,13,13)})}render(){return Y`<canvas id="tree" style="position: fixed;" height="${this.height}" width="${this.width}"></canvas>`}_tree(e,t,n,r,i,o,a){const s=Math.random;let c,l,u,h;const p=2*Math.PI/4;e.beginPath(),e.moveTo(t,n),u=t+r*Math.cos(i),h=n+r*Math.sin(i),e.lineCap="round",e.lineWidth=a,e.lineTo(u,h),e.strokeStyle=o<=2?"#1095a9":"#333",e.stroke();const d=o-1;if(!d)return;const f=2*s()+1;a*=.7;for(let t=0;t<f;t++)l=i+s()*p-.5*p,c=r*(.7+.3*s()),this._tree(e,u,h,c,l,d,a)}get _canvas(){return this.shadowRoot.querySelector("#tree")}}nt.is="ui-tree",tt([Se({type:Number,reflect:!0})],nt.prototype,"height",void 0),tt([Se({type:Number,reflect:!0})],nt.prototype,"width",void 0),customElements.define(nt.is,nt);var rt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};class it extends Ae{constructor(e){super(),this.asked=e}render(){return Y`
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
        `}}it.is="ui-not-found",rt([Se({type:String,reflect:!0})],it.prototype,"asked",void 0),customElements.define(it.is,it),n.d(t,"ElaraApp",function(){return st});var ot=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},at=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})};Promise.all([n.e(1),n.e(2)]).then(n.bind(null,59));class st extends Ae{createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){super.connectedCallback(),this._onHashChangeListener=this._onHashChange.bind(this),window.addEventListener("hashchange",this._onHashChangeListener,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._onHashChangeListener)}_onHashChange(e){const t=e.newURL.replace(location.origin+"/","").split("/")[0];let n=null;if(t){const e=new URL(location.origin+"/"+t).hash.replace("#!","");n=e||"home"}else n="home";this.route!==n&&(this.content.innerHTML="",this.load(n))}load(e){const t="%s | Léonard C.",n=customElements.get("ui-"+e);this.route=e,this.content.classList.remove("full-width");const r=customElements.get("ui-not-found"),i=n?new n:new r(e);if(i.head&&i.head.title?document.title=t.replace("%s",i.head.title):document.title="Léonard C.",!0!==i.isFullWidth||this.content.classList.contains("full-width")?i.isFullWidth||this.content.classList.remove("full-width"):this.content.classList.add("full-width"),this.content.appendChild(i),i instanceof r)throw new Me.Errors.NotFound(e);window.scrollTo(0,0),this._hideMenu();const o=window.requestAnimationFrame(()=>{if(!i.shadowRoot)return void cancelAnimationFrame(o);const e=i.shadowRoot.querySelector("div");e?e.animate({opacity:[.5,1],transform:["scale(.95)","scale(1)"]},{duration:600}):cancelAnimationFrame(o)})}firstUpdated(){const e=new HashChangeEvent("hashchange",{newURL:location.hash,oldURL:null});this._onHashChange(e)}render(){return Y`
			<style>				
			.content, .menu-content {
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
			}

			.menu {
				position: absolute;
				top: 0;
				right: 0;
				height: 45px;
				width: 45px;
				counter-reset: menuitem;
				z-index: 1;
			}

			.menu-content {
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

			.content.hidden {
				display: none;
			}

			.content.full-width { margin: 0; padding: 0 }

			@media (min-width: 1033px){}
			</style>
			<ui-profile></ui-profile>
			<paper-icon-button class="menu" icon="menu" aria-label="Menu" @click=${this._showMenu}></paper-icon-button>
			<div id="content" class="content"></div>
			<div id="menu" class="menu-content">
				<paper-icon-button class="menu" icon="close" aria-label="Close menu" @click=${this._hideMenu}></paper-icon-button>
				<a class="item ${"home"===this.route?"active":""}" @click=${()=>this._showLink("home")}>Work</a>
				<a class="item ${"about"===this.route?"active":""}" @click=${()=>this._showLink("about")}>About</a>
				<a class="item ${"projects"===this.route?"active":""}" @click=${()=>this._showLink("projects")}>Projects</a>
				<a class="item ${"contact"===this.route?"active":""}" @click=${()=>this._showLink("contact")}>Contact</a>
			</div>
		`}get loadableElements(){return["ui-profile"]}get bootstrap(){const e=[];for(const t of this.loadableElements){const n=new Promise(e=>{const n=this.shadowRoot.querySelector(t),r=new MutationObserver(t=>{t.length&&"attributes"==t[0].type&&"loaded"===t[0].attributeName&&(r.disconnect(),e())});r.observe(n,{attributes:!0})});e.push(n)}return Promise.all(e)}_showLink(e){this._hideMenu(),location.hash="#!"+e}_showMenu(){return at(this,void 0,void 0,function*(){this.content.classList.contains("hidden")||this.content.classList.add("hidden"),this.menu.classList.contains("hidden")||this.menu.classList.add("shown"),this.menu.animate({opacity:[0,1]},{duration:500})})}_hideMenu(){return at(this,void 0,void 0,function*(){const e=this.menu.animate({opacity:[1,0]},{duration:300});yield e.finished,this.content.classList.remove("hidden"),this.menu.classList.remove("shown")})}get content(){return this.shadowRoot.querySelector("#content")}get menu(){return this.shadowRoot.querySelector("#menu")}}st.is="elara-app",ot([Se({reflect:!0,type:String})],st.prototype,"route",void 0),customElements.define(st.is,st)}]);
//# sourceMappingURL=main.2d827695.js.map