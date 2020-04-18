!function(t){function e(e){for(var n,o,i=e[0],a=e[1],s=0,u=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(c&&c(e);u.length;)u.shift()()}var n={},r={0:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(t){return o.p+""+({}[t]||t)+"."+{1:"22a6305a",2:"f14a7a0e"}[t]+".js"}(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}r[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=a;o(o.s=14)}([function(t,e,n){"use strict";n.d(e,"c",(function(){return $})),n.d(e,"e",(function(){return U})),n.d(e,"f",(function(){return z})),n.d(e,"d",(function(){return d.c})),n.d(e,"g",(function(){return W})),n.d(e,"b",(function(){return J})),n.d(e,"a",(function(){return ot}));var r=n(4),o=n(1);function i(t,e){for(var n=t.element.content,r=t.parts,o=document.createTreeWalker(n,133,null,!1),i=s(r),a=r[i],c=-1,u=0,l=[],d=null;o.nextNode();){c++;var h=o.currentNode;for(h.previousSibling===d&&(d=null),e.has(h)&&(l.push(h),null===d&&(d=h)),null!==d&&u++;void 0!==a&&a.index===c;)a.index=null!==d?-1:a.index-u,a=r[i=s(r,i)]}l.forEach((function(t){return t.parentNode.removeChild(t)}))}var a=function(t){for(var e=11===t.nodeType?0:1,n=document.createTreeWalker(t,133,null,!1);n.nextNode();)e++;return e},s=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=e+1;n<t.length;n++){var r=t[n];if(Object(o.d)(r))return n}return-1};var c=n(7),u=n(6),l=n(10),d=n(5);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
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
 */var f=function(t,e){return"".concat(t,"--").concat(e)},p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);var v=function(t){return function(e){var n=f(e.type,t),r=u.a.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},u.a.set(n,r));var i=r.stringsArray.get(e.strings);if(void 0!==i)return i;var a=e.strings.join(o.f);if(void 0===(i=r.keyString.get(a))){var s=e.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(s,t),i=new o.a(e,s),r.keyString.set(a,i)}return r.stringsArray.set(e.strings,i),i}},y=["html","svg"],g=new Set,m=function(t,e,n){g.add(t);var r=n?n.element:document.createElement("template"),o=e.querySelectorAll("style"),c=o.length;if(0!==c){for(var l=document.createElement("style"),d=0;d<c;d++){var h=o[d];h.parentNode.removeChild(h),l.textContent+=h.textContent}!function(t){y.forEach((function(e){var n=u.a.get(f(e,t));void 0!==n&&n.keyString.forEach((function(t){var e=t.element.content,n=new Set;Array.from(e.querySelectorAll("style")).forEach((function(t){n.add(t)})),i(t,n)}))}))}(t);var p=r.content;n?function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t.element.content,o=t.parts;if(null!=n)for(var i=document.createTreeWalker(r,133,null,!1),c=s(o),u=0,l=-1;i.nextNode();){l++;var d=i.currentNode;for(d===n&&(u=a(e),n.parentNode.insertBefore(e,n));-1!==c&&o[c].index===l;){if(u>0){for(;-1!==c;)o[c].index+=u,c=s(o,c);return}c=s(o,c)}}else r.appendChild(e)}(n,l,p.firstChild):p.insertBefore(l,p.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);var v=p.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==v)e.insertBefore(v.cloneNode(!0),e.firstChild);else if(n){p.insertBefore(l,p.firstChild);var m=new Set;m.add(l),i(n,m)}}else window.ShadyCSS.prepareTemplateStyles(r,t)},b=n(11),w=n.n(b);function _(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||k(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){var e="function"==typeof Map?new Map:void 0;return(C=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return E(t,arguments,T(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),A(r,t)})(t)}function E(t,e,n){return(E=R()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&A(o,n.prototype),o}).apply(null,arguments)}function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}
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
 */window.JSCompiler_renameProperty=function(t,e){return t};var L={toAttribute:function(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},N=function(t,e){return e!==t&&(e==e||t==t)},M={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:N},I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(c,t);var e,n,r,o,i,a,s=(e=c,function(){var t,n=T(e);if(R()){var r=T(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return P(this,t)});function c(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(t=s.call(this))._updateState=0,t._instanceProperties=void 0,t._updatePromise=new Promise((function(e){return t._enableUpdatingResolver=e})),t._changedProperties=new Map,t._reflectingProperties=void 0,t.initialize(),t}return n=c,r=[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var t=this;this.constructor._classProperties.forEach((function(e,n){if(t.hasOwnProperty(n)){var r=t[n];delete t[n],t._instanceProperties||(t._instanceProperties=new Map),t._instanceProperties.set(n,r)}}))}},{key:"_applyInstanceProperties",value:function(){var t=this;this._instanceProperties.forEach((function(e,n){return t[n]=e})),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this.enableUpdating()}},{key:"enableUpdating",value:function(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(t,e,n){e!==n&&this._attributeToProperty(t,n)}},{key:"_propertyToAttribute",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:M,r=this.constructor,o=r._attributeNameForProperty(t,n);if(void 0!==o){var i=r._propertyValueToAttribute(e,n);if(void 0===i)return;this._updateState=8|this._updateState,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(t,e){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){var o=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(e,o),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(t,e){var n=!0;if(void 0!==t){var r=this.constructor,o=r.getPropertyOptions(t);r._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}},{key:"requestUpdate",value:function(t,e){return this._requestUpdate(t,e),this.updateComplete}},{key:"_enqueueUpdate",value:(i=w.a.mark((function t(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._updateState=4|this._updateState,t.prev=1,t.next=4,this._updatePromise;case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:if(null==(e=this.performUpdate())){t.next=12;break}return t.next=12,e;case 12:return t.abrupt("return",!this._hasRequestedUpdate);case 13:case"end":return t.stop()}}),t,this,[[1,6]])})),a=function(){var t=this,e=arguments;return new Promise((function(n,r){var o=i.apply(t,e);function a(t){j(o,n,r,a,s,"next",t)}function s(t){j(o,n,r,a,s,"throw",t)}a(void 0)}))},function(){return a.apply(this,arguments)})},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var t=!1,e=this._changedProperties;try{(t=this.shouldUpdate(e))?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"_getUpdateComplete",value:function(){return this._updatePromise}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((function(t,n){return e._propertyToAttribute(n,e[n],t)})),this._reflectingProperties=void 0),this._markUpdated()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._getUpdateComplete()}}],o=[{key:"_ensureClassProperties",value:function(){var t=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((function(e,n){return t._classProperties.set(n,e)}))}}},{key:"createProperty",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M;if(this._ensureClassProperties(),this._classProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){var n="symbol"===S(t)?Symbol():"__".concat(t),r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}},{key:"getPropertyDescriptor",value:function(t,e,n){return{get:function(){return this[e]},set:function(n){var r=this[t];this[e]=n,this._requestUpdate(t,r)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){return this._classProperties&&this._classProperties.get(t)||M}},{key:"finalize",value:function(){var t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var e,n=this.properties,r=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=k(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}([].concat(_(Object.getOwnPropertyNames(n)),_("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n):[])));try{for(r.s();!(e=r.n()).done;){var o=e.value;this.createProperty(o,n[o])}}catch(t){r.e(t)}finally{r.f()}}}},{key:"_attributeNameForProperty",value:function(t,e){var n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:N;return n(t,e)}},{key:"_propertyValueFromAttribute",value:function(t,e){var n=e.type,r=e.converter||L,o="function"==typeof r?r:r.fromAttribute;return o?o(t,n):t}},{key:"_propertyValueToAttribute",value:function(t,e){if(void 0!==e.reflect){var n=e.type,r=e.converter;return(r&&r.toAttribute||L.toAttribute)(t,n)}}},{key:"observedAttributes",get:function(){var t=this;this.finalize();var e=[];return this._classProperties.forEach((function(n,r){var o=t._attributeNameForProperty(r,n);void 0!==o&&(t._attributeToPropertyMap.set(o,r),e.push(o))})),e}}],r&&O(n.prototype,r),o&&O(n,o),c}(C(HTMLElement));I.finalized=!0;
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
var $=function(t){return function(e){return"function"==typeof e?function(t,e){return window.customElements.define(t,e),e}(t,e):function(t,e){return{kind:e.kind,elements:e.elements,finisher:function(e){window.customElements.define(t,e)}}}(t,e)}};function U(t){return function(e,n){return void 0!==n?function(t,e,n){e.constructor.createProperty(n,t)}(t,e,n):function(t,e){return"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher:function(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer:function(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher:function(n){n.createProperty(e.key,t)}}}(t,e)}}function z(t){return function(e,n){var r={get:function(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==n?V(r,e,n):F(r,e)}}var V=function(t,e,n){Object.defineProperty(e,n,t)},F=function(t,e){return{kind:"method",placement:"prototype",key:e.key,descriptor:t}};function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
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
var q="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,H=Symbol(),B=function(){function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n!==H)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}var e,n,r;return e=t,(n=[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}])&&D(e.prototype,n),r&&D(e,r),t}(),W=function(t){return new B(String(t),H)},G=function(t){if(t instanceof B)return t.cssText;if("number"==typeof t)return t;throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(t,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))},J=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=n.reduce((function(e,n,r){return e+G(n)+t[r+1]}),t[0]);return new B(o,H)};function Y(t){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Z(t,e,n){return(Z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=nt(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function tt(t,e){return!e||"object"!==Y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function et(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function nt(t){return(nt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");var rt={},ot=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(a,t);var e,n,r,o,i=(e=a,function(){var t,n=nt(e);if(et()){var r=nt(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return tt(this,t)});function a(){return K(this,a),i.apply(this,arguments)}return n=a,o=[{key:"getStyles",value:function(){return this.styles}},{key:"_getUniqueStyles",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){var e=function t(e,n){return e.reduceRight((function(e,n){return Array.isArray(n)?t(n,e):(e.add(n),e)}),n)}(t,new Set),n=[];e.forEach((function(t){return n.unshift(t)})),this._styles=n}else this._styles=[t]}}}],(r=[{key:"initialize",value:function(){Z(nt(a.prototype),"initialize",this).call(this),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?q?this.renderRoot.adoptedStyleSheets=t.map((function(t){return t.styleSheet})):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((function(t){return t.cssText})),this.localName))}},{key:"connectedCallback",value:function(){Z(nt(a.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(t){var e=this,n=this.render();Z(nt(a.prototype),"update",this).call(this,t),n!==rt&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((function(t){var n=document.createElement("style");n.textContent=t.cssText,e.renderRoot.appendChild(n)})))}},{key:"render",value:function(){return rt}}])&&Q(n.prototype,r),o&&Q(n,o),a}(I);ot.finalized=!0,ot.render=function(t,e,n){if(!n||"object"!==h(n)||!n.scopeName)throw new Error("The `scopeName` option is required.");var o=n.scopeName,i=c.a.has(e),a=p&&11===e.nodeType&&!!e.host,s=a&&!g.has(o),u=s?document.createDocumentFragment():e;if(Object(c.b)(t,u,Object.assign({templateFactory:v(o)},n)),s){var d=c.a.get(u);c.a.delete(u);var f=d.value instanceof l.a?d.value.template:void 0;m(o,u,f),Object(r.b)(e,e.firstChild),e.appendChild(u),c.a.set(e,d)}!i&&a&&window.ShadyCSS.styleElement(e.host)}},function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"e",(function(){return d}));
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
var r="{{lit-".concat(String(Math.random()).slice(2),"}}"),o="\x3c!--".concat(r,"--\x3e"),i=new RegExp("".concat(r,"|").concat(o)),a="$lit$",s=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.parts=[],this.element=n;for(var o=[],s=[],u=document.createTreeWalker(n.content,133,null,!1),h=0,f=-1,p=0,v=e.strings,y=e.values.length;p<y;){var g=u.nextNode();if(null!==g){if(f++,1===g.nodeType){if(g.hasAttributes()){for(var m=g.attributes,b=m.length,w=0,_=0;_<b;_++)c(m[_].name,a)&&w++;for(;w-- >0;){var k=v[p],x=d.exec(k)[2],S=x.toLowerCase()+a,j=g.getAttribute(S);g.removeAttribute(S);var O=j.split(i);this.parts.push({type:"attribute",index:f,name:x,strings:O}),p+=O.length-1}}"TEMPLATE"===g.tagName&&(s.push(g),u.currentNode=g.content)}else if(3===g.nodeType){var P=g.data;if(P.indexOf(r)>=0){for(var C=g.parentNode,E=P.split(i),R=E.length-1,A=0;A<R;A++){var T=void 0,L=E[A];if(""===L)T=l();else{var N=d.exec(L);null!==N&&c(N[2],a)&&(L=L.slice(0,N.index)+N[1]+N[2].slice(0,-a.length)+N[3]),T=document.createTextNode(L)}C.insertBefore(T,g),this.parts.push({type:"node",index:++f})}""===E[R]?(C.insertBefore(l(),g),o.push(g)):g.data=E[R],p+=R}}else if(8===g.nodeType)if(g.data===r){var M=g.parentNode;null!==g.previousSibling&&f!==h||(f++,M.insertBefore(l(),g)),h=f,this.parts.push({type:"node",index:f}),null===g.nextSibling?g.data="":(o.push(g),f--),p++}else for(var I=-1;-1!==(I=g.data.indexOf(r,I+1));)this.parts.push({type:"node",index:-1}),p++}else u.currentNode=s.pop()}for(var $=0,U=o;$<U.length;$++){var z=U[$];z.parentNode.removeChild(z)}},c=function(t,e){var n=t.length-e.length;return n>=0&&t.slice(n)===e},u=function(t){return-1!==t.index},l=function(){return document.createComment("")},d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,n){"use strict";n.d(e,"a",(function(){return S})),n.d(e,"d",(function(){return O})),n.d(e,"b",(function(){return P})),n.d(e,"e",(function(){return C})),n.d(e,"c",(function(){return A}));var r=n(8),o=n(4),i=n(3),a=n(10),s=n(9),c=n(1);function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){return function(){var e,n=v(t);if(p()){var r=v(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f(this,e)}}function f(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e,n){return e&&b(t.prototype,e),n&&b(t,n),t}function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
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
 */var k=function(t){return null===t||!("object"===_(t)||"function"==typeof t)},x=function(t){return Array.isArray(t)||!(!t||!t[Symbol.iterator])},S=function(){function t(e,n,r){m(this,t),this.dirty=!0,this.element=e,this.name=n,this.strings=r,this.parts=[];for(var o=0;o<r.length-1;o++)this.parts[o]=this._createPart()}return w(t,[{key:"_createPart",value:function(){return new j(this)}},{key:"_getValue",value:function(){for(var t=this.strings,e=t.length-1,n="",r=0;r<e;r++){n+=t[r];var o=this.parts[r];if(void 0!==o){var i=o.value;if(k(i)||!x(i))n+="string"==typeof i?i:String(i);else{var a,s=y(i);try{for(s.s();!(a=s.n()).done;){var c=a.value;n+="string"==typeof c?c:String(c)}}catch(t){s.e(t)}finally{s.f()}}}}return n+=t[e]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),t}(),j=function(){function t(e){m(this,t),this.value=void 0,this.committer=e}return w(t,[{key:"setValue",value:function(t){t===i.a||k(t)&&t===this.value||(this.value=t,Object(r.b)(t)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;Object(r.b)(this.value);){var t=this.value;this.value=i.a,t(this)}this.value!==i.a&&this.committer.commit()}}]),t}(),O=function(){function t(e){m(this,t),this.value=void 0,this.__pendingValue=void 0,this.options=e}return w(t,[{key:"appendInto",value:function(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}},{key:"insertAfterNode",value:function(t){this.startNode=t,this.endNode=t.nextSibling}},{key:"appendIntoPart",value:function(t){t.__insert(this.startNode=Object(c.c)()),t.__insert(this.endNode=Object(c.c)())}},{key:"insertAfterPart",value:function(t){t.__insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}},{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;Object(r.b)(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=i.a,t(this)}var e=this.__pendingValue;e!==i.a&&(k(e)?e!==this.value&&this.__commitText(e):e instanceof s.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===i.b?(this.value=i.b,this.clear()):this.__commitText(e))}}},{key:"__insert",value:function(t){this.endNode.parentNode.insertBefore(t,this.endNode)}},{key:"__commitNode",value:function(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}},{key:"__commitText",value:function(t){var e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}},{key:"__commitTemplateResult",value:function(t){var e=this.options.templateFactory(t);if(this.value instanceof a.a&&this.value.template===e)this.value.update(t.values);else{var n=new a.a(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(e){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,o=this.value,i=0,a=y(e);try{for(a.s();!(r=a.n()).done;){var s=r.value;void 0===(n=o[i])&&(n=new t(this.options),o.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(o[i-1])),n.setValue(s),n.commit(),i++}}catch(t){a.e(t)}finally{a.f()}i<o.length&&(o.length=i,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Object(o.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}]),t}(),P=function(){function t(e,n,r){if(m(this,t),this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=n,this.strings=r}return w(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;Object(r.b)(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=i.a,t(this)}if(this.__pendingValue!==i.a){var e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=i.a}}}]),t}(),C=function(t){l(n,t);var e=h(n);function n(t,r,o){var i;return m(this,n),(i=e.call(this,t,r,o)).single=2===o.length&&""===o[0]&&""===o[1],i}return w(n,[{key:"_createPart",value:function(){return new E(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:u(v(n.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),n}(S),E=function(t){l(n,t);var e=h(n);function n(){return m(this,n),e.apply(this,arguments)}return n}(j),R=!1;!function(){try{var t={get capture(){return R=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}}();var A=function(){function t(e,n,r){var o=this;m(this,t),this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=n,this.eventContext=r,this.__boundHandleEvent=function(t){return o.handleEvent(t)}}return w(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;Object(r.b)(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=i.a,t(this)}if(this.__pendingValue!==i.a){var e=this.__pendingValue,n=this.value,o=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),a=null!=e&&(null==n||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),a&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=i.a}}},{key:"handleEvent",value:function(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}]),t}(),T=function(t){return t&&(R?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
var r={},o={}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return i}));
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
var r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e!==n;){var o=e.nextSibling;t.insertBefore(e,r),e=o}},i=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e!==n;){var r=e.nextSibling;t.removeChild(e),e=r}}},function(t,e,n){"use strict";n.d(e,"b",(function(){return s.a})),n.d(e,"d",(function(){return c.a})),n.d(e,"a",(function(){return r.d})),n.d(e,"e",(function(){return u.b})),n.d(e,"c",(function(){return l}));var r=n(2);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
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
var i=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"handleAttributeExpressions",value:function(t,e,n,o){var i=e[0];return"."===i?new r.e(t,e.slice(1),n).parts:"@"===i?[new r.c(t,e.slice(1),o.eventContext)]:"?"===i?[new r.b(t,e.slice(1),n)]:new r.a(t,e,n).parts}},{key:"handleTextExpression",value:function(t){return new r.d(t)}}])&&o(e.prototype,n),i&&o(e,i),t}()),a=n(9),s=n(8),c=(n(4),n(3)),u=(n(7),n(6));n(10),n(1);
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");var l=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return new a.b(t,n,"html",i)}},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var r=n(1);
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
 */function o(t){var e=i.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},i.set(t.type,e));var n=e.stringsArray.get(t.strings);if(void 0!==n)return n;var o=t.strings.join(r.f);return void 0===(n=e.keyString.get(o))&&(n=new r.a(t,t.getTemplateElement()),e.keyString.set(o,n)),e.stringsArray.set(t.strings,n),n}var i=new Map},function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var r=n(4),o=n(2),i=n(6),a=new WeakMap,s=function(t,e,n){var s=a.get(e);void 0===s&&(Object(r.b)(e,e.firstChild),a.set(e,s=new o.d(Object.assign({templateFactory:i.b},n))),s.appendInto(e)),s.setValue(t),s.commit()}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));
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
var r=new WeakMap,o=function(t){return function(){var e=t.apply(void 0,arguments);return r.set(e,!0),e}},i=function(t){return"function"==typeof t&&r.has(t)}},function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return y}));var r=n(4),o=n(1);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}
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
 */var p=" ".concat(o.f," "),v=function(){function t(e,n,r,o){d(this,t),this.strings=e,this.values=n,this.type=r,this.processor=o}return f(t,[{key:"getHTML",value:function(){for(var t=this.strings.length-1,e="",n=!1,r=0;r<t;r++){var i=this.strings[r],a=i.lastIndexOf("\x3c!--");n=(a>-1||n)&&-1===i.indexOf("--\x3e",a+1);var s=o.e.exec(i);e+=null===s?i+(n?p:o.g):i.substr(0,s.index)+s[1]+s[2]+o.b+s[3]+o.f}return e+=this.strings[t]}},{key:"getTemplateElement",value:function(){var t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}]),t}(),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(o,t);var e,n=(e=o,function(){var t,n=l(e);if(u()){var r=l(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return c(this,t)});function o(){return d(this,o),n.apply(this,arguments)}return f(o,[{key:"getHTML",value:function(){return"<svg>".concat(a(l(o.prototype),"getHTML",this).call(this),"</svg>")}},{key:"getTemplateElement",value:function(){var t=a(l(o.prototype),"getTemplateElement",this).call(this),e=t.content,n=e.firstChild;return e.removeChild(n),Object(r.c)(e,n.firstChild),t}}]),o}(v)},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(4),o=n(1);function i(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=s(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function s(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
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
var l=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.__parts=[],this.template=e,this.processor=n,this.options=r}var e,n,s;return e=t,(n=[{key:"update",value:function(t){var e,n=0,r=a(this.__parts);try{for(r.s();!(e=r.n()).done;){var o=e.value;void 0!==o&&o.setValue(t[n]),n++}}catch(t){r.e(t)}finally{r.f()}var i,s=a(this.__parts);try{for(s.s();!(i=s.n()).done;){var c=i.value;void 0!==c&&c.commit()}}catch(t){s.e(t)}finally{s.f()}}},{key:"_clone",value:function(){for(var t,e=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],a=this.template.parts,s=document.createTreeWalker(e,133,null,!1),c=0,u=0,l=s.nextNode();c<a.length;)if(t=a[c],Object(o.d)(t)){for(;u<t.index;)u++,"TEMPLATE"===l.nodeName&&(n.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=n.pop(),l=s.nextNode());if("node"===t.type){var d=this.processor.handleTextExpression(this.options);d.insertAfterNode(l.previousSibling),this.__parts.push(d)}else{var h;(h=this.__parts).push.apply(h,i(this.processor.handleAttributeExpressions(l,t.name,t.strings,this.options)))}c++}else this.__parts.push(void 0),c++;return r.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}])&&u(e.prototype,n),s&&u(e,s),t}()},function(t,e,n){t.exports=n(12)},function(t,e,n){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=function(t){"use strict";var n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new x(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function d(){}function h(){}function f(){}var p={};p[i]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==n&&r.call(y,i)&&(p=y);var g=f.prototype=d.prototype=Object.create(p);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(t,n){var o;this._invoke=function(i,a){function s(){return new n((function(o,s){!function o(i,a,s,c){var l=u(t[i],t,a);if("throw"!==l.type){var d=l.arg,h=d.value;return h&&"object"===e(h)&&r.call(h,"__await")?n.resolve(h.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):n.resolve(h).then((function(t){d.value=t,s(d)}),(function(t){return o("throw",t,s,c)}))}c(l.arg)}(i,a,o,s)}))}return o=o?o.then(s,s):s()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=g.constructor=f,f.constructor=h,f[s]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(g),g[s]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}("object"===e(t)?t.exports:{});try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}).call(this,n(13)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";n.r(e),n.d(e,"ElaraApp",(function(){return M}));var r=n(0);function o(t){return{effect:{opacity:[.5,1],transform:["scale(.95)","scale(1)"]},options:{duration:t}}}function i(t,e){return{effect:{opacity:e?[0,1]:[1,0]},options:{duration:t}}}var a=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))};const s={Bootstrap:{promise:(t,e)=>{const n=[];for(const r of t){const t=new Promise(t=>{const n=e.querySelector(r),o=new MutationObserver(e=>{e.length&&"attributes"==e[0].type&&"loaded"===e[0].attributeName&&(o.disconnect(),t())});o.observe(n,{attributes:!0})});n.push(t)}return Promise.all(n)},load:(t,e,n,r)=>a(void 0,void 0,void 0,(function*(){const i="%s | Léonard C.",a=customElements.get("ui-"+t);e.classList.remove("full-width");const c=customElements.get("ui-not-found"),u=a?new a:new c(t);if(u.head&&u.head.title?document.title=i.replace("%s",u.head.title):document.title="Léonard C.",!0!==u.isFullWidth||e.classList.contains("full-width")?u.isFullWidth||e.classList.remove("full-width"):e.classList.add("full-width"),e.appendChild(u),u instanceof c)throw new s.Errors.NotFound(t);window.scrollTo(0,0),n.shown&&null===r&&(yield s.UI.elara().menu(!0));const l=window.requestAnimationFrame(()=>{if(!u.shadowRoot)return void cancelAnimationFrame(l);const t=u.querySelector("div");if(!t)return void cancelAnimationFrame(l);const e=o(300);t.animate(e.effect,e.options)})}))},Constants:{modes:{default:"day"}},Routing:{redirect:(t,e="_blank")=>!!window.open(t,e),navigate:t=>(location.hash="#!"+t,!0),hashChange(t){const e=t.newURL.replace(location.origin+location.pathname,"").split("#!").filter(Boolean);let n=null;n=0===e.length?e.shift():e.pop();if(t.oldURL===t.newURL)return null;const r=customElements.get("ui-"+n);return r&&!0===r.hasRouting||t.newURL!==location.origin+location.pathname&&n?n:"home"}},UI:{processing:{toDataURL:t=>new Promise((e,n)=>{const r=new Image;r.crossOrigin="Anonymous",r.src=t,setTimeout(()=>{!1===r.complete&&(console.warn("Elara ::: Image loading was too slow, rejecting"),r.src="",n())},1200),r.onload=()=>{const t=document.createElement("canvas"),n=t.getContext("2d");t.height=r.naturalHeight,t.width=r.naturalWidth,n.drawImage(r,0,0),e(t.toDataURL("image/jpeg"))},r.onerror=()=>{n()}})},queries:{DARK:"(prefers-color-scheme: dark)",LIGHT:"(prefers-color-scheme: light)"},modes:{localStorageKey:"night-mode"},typography:{heading:r.b`h1, h2 { user-select: none; font-family: var(--elara-font-display); } h1::first-letter { font-size: 1.3em; } h2::first-letter { font-size: 1.2em }`},elara:()=>document.querySelector("elara-app"),mode:()=>localStorage.getItem(s.UI.modes.localStorageKey),nightSwitchClick:(t,e)=>a(void 0,void 0,void 0,(function*(){t.preventDefault(),t.stopPropagation();const n=!s.UI.isSunny()?"day":"night";return localStorage.setItem(s.UI.modes.localStorageKey,n),yield e.requestUpdate(),s.UI.elara().askModeChange(n)})),applyVariablesFor:t=>{const e=document.documentElement;return"night"===t?(e.style.setProperty("--elara-background-color","#373737"),e.style.setProperty("--elara-font-color","#f0f0f0"),e.style.setProperty("--elara-font-hover","#9e9e9e")):(e.style.removeProperty("--elara-background-color"),e.style.removeProperty("--elara-font-color"),e.style.removeProperty("--elara-font-hover")),!0},hasSwitched:()=>null!==s.UI.mode(),isSunny:()=>"day"===s.UI.mode(),dayOrNight:()=>s.UI.hasSwitched()?s.UI.isSunny()?"day":"night":s.UI.isDarkOS()?"day":"night",isDarkOS:()=>window.matchMedia?window.matchMedia(s.UI.queries.DARK).matches:(console.warn("Elara:: Night mode not supported at the moment"),!1)},Errors:{GenericError:class extends Error{constructor(){super(...arguments),this.elara=!1,this.continue=!0,this.reload=!0}},NotFound:class extends Error{constructor(){super(...arguments),this.elara=!0,this.continue=!0,this.reload=!1}},Prototype:class extends Error{constructor(){super(...arguments),this.elara=!1,this.continue=!0,this.reload=!1}}},Colors:{social:{github:"#24292e",twitter:"#1da1f2",youtube:"#ff0000",linkedin:"#0073b0",facebook:"#3b5998",instagram:"#333",medium:"#3CB371"}}};var c=s,u=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},l=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))};class d extends r.a{connectedCallback(){super.connectedCallback(),c.UI.applyVariablesFor(c.UI.dayOrNight()),this._onHashChangeListener=this._onHashChange.bind(this),window.addEventListener("hashchange",this._onHashChangeListener,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._onHashChangeListener)}createRenderRoot(){return this}_onHashChange(t){return l(this,void 0,void 0,(function*(){const e=c.Routing.hashChange(t);this.route=e,this._content.innerHTML="",yield this.load(e)}))}load(t){return l(this,void 0,void 0,(function*(){return c.Bootstrap.load(t,this._content,this._menu,this._menuFade)}))}askModeChange(t){return c.UI.applyVariablesFor(t)}get _content(){return this.querySelector("#content")}get _menu(){return this.querySelector("#menu")}}u([Object(r.e)({reflect:!0,type:String})],d.prototype,"route",void 0);class h extends r.a{}var f=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};let p=class extends h{constructor(){super(...arguments),this.active=!0}static get styles(){return r.b`
        html, body {
            margin:0;
            padding:0;
            height: 100%;
          }
          
          body {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .spinner.sm {
              width: 1rem;
              height: 1rem;
          }
          .spinner.md {
              width: 2rem;
              height: 2rem;
          }
          .spinner.lg {
              width: 3rem;
              height: 3rem;
          }
          .spinner.xl {
              width: 4rem;
              height: 4rem;
          }
          
          .spinner {
            -webkit-animation: rotator 1.4s linear infinite;
                    animation: rotator 1.4s linear infinite;
          }
          
          @-webkit-keyframes rotator {
            0% {
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(270deg);
                      transform: rotate(270deg);
            }
          }
          
          @keyframes rotator {
            0% {
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(270deg);
                      transform: rotate(270deg);
            }
          }
          .path {
            stroke-dasharray: 187;
            stroke-dashoffset: 0;
            -webkit-transform-origin: center;
                    transform-origin: center;
            -webkit-animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
                    animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
          }
          
          @-webkit-keyframes colors {
            0% {
              stroke: #4285F4;
            }
            25% {
              stroke: #DE3E35;
            }
            50% {
              stroke: #F7C223;
            }
            75% {
              stroke: #1B9A59;
            }
            100% {
              stroke: #4285F4;
            }
          }
          
          @keyframes colors {
            0% {
              stroke: #4285F4;
            }
            25% {
              stroke: #DE3E35;
            }
            50% {
              stroke: #F7C223;
            }
            75% {
              stroke: #1B9A59;
            }
            100% {
              stroke: #4285F4;
            }
          }
          @-webkit-keyframes dash {
            0% {
              stroke-dashoffset: 187;
            }
            50% {
              stroke-dashoffset: 46.75;
              -webkit-transform: rotate(135deg);
                      transform: rotate(135deg);
            }
            100% {
              stroke-dashoffset: 187;
              -webkit-transform: rotate(450deg);
                      transform: rotate(450deg);
            }
          }
          @keyframes dash {
            0% {
              stroke-dashoffset: 187;
            }
            50% {
              stroke-dashoffset: 46.75;
              -webkit-transform: rotate(135deg);
                      transform: rotate(135deg);
            }
            100% {
              stroke-dashoffset: 187;
              -webkit-transform: rotate(450deg);
                      transform: rotate(450deg);
            }
          }
          
        `}render(){return this.active?r.d`
        <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>`:r.d``}};f([Object(r.e)({type:Boolean,reflect:!1})],p.prototype,"active",void 0),p=f([Object(r.c)("elara-spinner")],p);class v extends r.a{get head(){return{title:null,description:null,type:null,image:null,slug:null}}static get styles(){return[c.UI.typography.heading]}createRenderRoot(){return this}}var y=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},g=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))};class m extends h{constructor(){super(...arguments),this.repositories=[],this.currentPage=null,this.page=0,this.inError=!1,this.chunksLength=6}firstUpdated(){return g(this,void 0,void 0,(function*(){this._spinner.active=!0;const t=new XMLHttpRequest;t.open("POST","https://api.github.com/graphql",!0),t.setRequestHeader("Authorization","bearer "+atob("ZDQ0Y2JmYjVlOGRiOTRjMjJkNThlYjg4ZjFlNjIyODM4YzQ1N2Q3Mg==")),t.send(JSON.stringify({query:'{ search(query: "user:ghostfly is:public", type: REPOSITORY, first: 100) { repositoryCount edges { node { ... on Repository { name stargazers { totalCount } description forkCount createdAt url primaryLanguage {name} }}}}}'}));const e=()=>{if(!this._spinner)return;this._spinner.active=!1;const t=this._spinner.parentElement;t.removeChild(this._spinner),this.shadowRoot.removeChild(t)},n=()=>{e(),this.inError=!0};t.onerror=n,t.onreadystatechange=()=>g(this,void 0,void 0,(function*(){if(4==t.readyState&&200==t.status){const n=JSON.parse(t.responseText).data.search.edges.sort((t,e)=>new Date(e.node.createdAt).getTime()-new Date(t.node.createdAt).getTime());this.repositories=this._chunk(n,this.chunksLength),this.currentPage=this.repositories[this.page],e(),yield this.updateComplete,this._pulse()}403===t.status&&n()}))}))}_chunk(t,e){const n=[],r=t.length;let o=0;for(;o<r;)n.push(t.slice(o,o+=e));return n}static get styles(){return r.b`
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
        `}_card(t){return r.d`
        <section class="github-card" @click=${()=>c.Routing.redirect(t.node.url)}}>
            <div class="title">${t.node.name}</div>
            ${t.node.description?r.d`<div class="description">${t.node.description}</div>`:r.d``}
            <div class="bottom">
                <span>${t.node.primaryLanguage?t.node.primaryLanguage.name:""}</span>
                <span><mwc-icon>star</mwc-icon> ${t.node.stargazers.totalCount}</span>
                <span><mwc-icon>keyboard_arrow_right</mwc-icon> ${t.node.forkCount}</span>
            </div>
        </section>
        `}render(){return r.d`
        <div class="loader">
            <elara-spinner active></elara-spinner>
        </div>
        ${this.inError?r.d`<p>Can't load GitHub repositories.. 😢 <br />You can check on <a class="link" href="https://github.com/ghostfly/">GitHub</a> directly !</p>`:r.d``}
        ${this.currentPage?r.d`
        <div class="two-cols">
            ${this.currentPage.map(t=>this._card(t))}
        </div>
        ${this._pagination}
        `:r.d``}
        <a class="next" @click=${()=>c.Routing.navigate("about")}>> About</a>
        `}_pulse(){const t=this.shadowRoot.querySelectorAll(".two-cols section"),e=o(600);t.forEach(t=>{t.animate(e.effect,e.options)})}get _pagination(){return r.d`
        <div class="pagination">
            ${this.page+1} / ${this.repositories.length}
            ${this._back} 
            ${this._next}
        </div>`}get _back(){return r.d`
        <a role="button" disabled=${0===this.page} @click=${()=>g(this,void 0,void 0,(function*(){this.page--,this.currentPage=this.repositories[this.page],yield this.updateComplete,this._pulse()}))}>
            <mwc-icon-button aria-label="Previous page" icon="keyboard_arrow_left"></mwc-icon-button>
        </a>
        `}get _next(){return r.d`
        <a role="button" disabled=${this.page+1===this.repositories.length} @click=${()=>g(this,void 0,void 0,(function*(){this.page++,this.currentPage=this.repositories[this.page],yield this.updateComplete,this._pulse()}))}>
            <mwc-icon-button aria-label="Next page" icon="keyboard_arrow_right"></mwc-icon-button>
        </a>
        `}get _spinner(){return this.shadowRoot.querySelector("elara-spinner")}}m.is="ui-github-work",y([Object(r.e)({type:Array})],m.prototype,"repositories",void 0),y([Object(r.e)({type:Array})],m.prototype,"currentPage",void 0),y([Object(r.e)({type:Number,reflect:!0})],m.prototype,"page",void 0),y([Object(r.e)({type:Boolean,reflect:!0})],m.prototype,"inError",void 0),customElements.define(m.is,m);var b=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},w=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))};class _ extends h{constructor(){super(...arguments),this.loaded=!1}connectedCallback(){super.connectedCallback(),this._hashChangeListener=this._onHashChange.bind(this),window.addEventListener("hashchange",this._hashChangeListener)}_onProfilePictureLoaded(t){const e=t.target;if(e){const t=i(500,!0);e.animate(t.effect,t.options),e.classList.add("shown"),e.removeEventListener("load",this._onProfilePictureLoaded)}}firstUpdated(){return w(this,void 0,void 0,(function*(){try{this.picture.addEventListener("load",this._onProfilePictureLoaded);const t=yield c.UI.processing.toDataURL("https://source.unsplash.com/collection/1727869/1366x768");if(this.loaded=!0,this.container.style.backgroundImage=`url('${t}')`,this.picture.complete)return void this._onProfilePictureLoaded({target:this.picture,detail:{value:!0}})}catch(t){const e=yield c.UI.processing.toDataURL("/assets/fallback.jpeg");this.container.style.backgroundImage=`url('${e}')`,this.loaded=!0}}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._hashChangeListener)}_onHashChange(t){const e=c.Routing.hashChange(t);this.route=e}static get styles(){return[...v.styles,r.b`
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

        img, .bio {
            z-index: 1;
        }

        img {
            visibility: hidden;
        }

        img.shown {
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
        }`]}render(){return r.d`
        <div role="link" id="container" class="profile ${"home"!==this.route&&this.route?"is-link":""}" @click=${()=>c.Routing.navigate("home")}>
            <img id="pic" class="pic" sizing="contain" src="/assets/me.svg"></img>
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

            <div class="night-switch" @click=${t=>w(this,void 0,void 0,(function*(){return c.UI.nightSwitchClick(t,this)}))}>${this._nightToggle()}</div>
        </div>
        `}_nightToggle(){return"day"===c.UI.dayOrNight()?this._day:this._night}get _day(){return r.d`
        <svg class="day-night" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000">
            <g><path d="M715.9,424.2c-18.2-33.3-52.9-67.9-99.8-84.8c-46.4-17.4-104.7-16-153.5,10.3c-49.9,24.7-85.2,80.2-84.9,136.3c-0.7,55.5,30.1,110.2,77.6,131.4c46.7,21.9,98.5,10.9,128.6-13.6c32.3-24.8,40.9-59.6,40.8-80.5c-0.3-39.2-21.3-74.5-52.8-88.1c-30.7-13.6-65.4-7.1-87.1,12.8c-23,19.8-27.9,54.2-13.9,78.8c12.2,26.4,49.8,36.3,72.7,17.6c-26.2,14.1-55.5-1.1-61.8-22.8c-8.3-21.3-0.7-45.6,16.3-57.4c34.6-28,98.6-3.4,97.8,58.7c0,15.2-6.3,40.3-29.7,58.1c-22.6,18.6-62.9,27.2-98.9,10.3c-36-15.6-61.3-59.5-60.9-104.9c0.1-45.9,27.9-90.3,69.6-111.2c41.3-22.3,90.7-23.5,130.1-8.8c39.9,14.5,68.9,43.1,84.9,72.3c34.9,59.1,22.8,104.8,23.7,103.7c-0.2-1.1-1,45.4-47.1,96.2c-43.8,48.5-135.9,104.2-229.3,72.5c-89-29.9-167.9-121.6-159.7-206.4c3.3-86.4,53.1-145.4,77.7-167.6c47.6-43.3,99-58.2,146.9-58c48.4,0.4,94.8,14.1,145.3,40.5c-45.5-34.1-91.4-56-144.3-61.6c-52.3-5.5-113.6,8.9-167.4,57.9c-27.9,25.3-83.1,90-87.1,187.7c-3.2,47.3,14.7,103.4,49.9,142.6c33,40.7,77.6,76.6,130,92.3c52,17.1,108.1,11.4,153-6.9C627.6,712.8,663.4,686,689,658c52.3-57.2,54.3-113.6,54.3-112.1C742.4,547.6,755.9,491.4,715.9,424.2z"/><path d="M858.7,141.3c0,0-48.5,22.6-92.4,66.5c-43.9,43.9-66.5,92.4-66.5,92.4s48.5-22.7,92.4-66.5C836.1,189.8,858.7,141.3,858.7,141.3z"/><path d="M141.3,858.7c0,0,48.5-22.7,92.4-66.5c43.9-43.9,66.5-92.4,66.5-92.4s-48.5,22.6-92.4,66.5C164,810.2,141.3,858.7,141.3,858.7z"/><path d="M886.2,415.4c59.9-16.1,103.8-46.7,103.8-46.7s-53.3-4.6-113.3,11.4c-59.9,16.1-103.8,46.7-103.8,46.7S826.3,431.5,886.2,415.4z"/><path d="M113.8,584.6C53.9,600.6,10,631.3,10,631.3s53.3,4.6,113.3-11.4c60-16.1,103.8-46.7,103.8-46.7S173.8,568.5,113.8,584.6z"/><path d="M772.9,573.1c0,0,43.9,30.7,103.8,46.7c60,16.1,113.3,11.4,113.3,11.4s-43.9-30.7-103.8-46.7C826.3,568.5,772.9,573.1,772.9,573.1z"/><path d="M227.1,426.9c0,0-43.9-30.7-103.8-46.7C63.3,364.1,10,368.7,10,368.7s43.9,30.7,103.8,46.7C173.8,431.5,227.1,426.9,227.1,426.9z"/><path d="M699.8,699.8c0,0,22.7,48.5,66.5,92.4c43.9,43.9,92.4,66.5,92.4,66.5s-22.7-48.5-66.5-92.4C748.3,722.4,699.8,699.8,699.8,699.8z"/><path d="M300.2,300.2c0,0-22.6-48.5-66.5-92.4c-43.9-43.9-92.4-66.5-92.4-66.5s22.6,48.5,66.5,92.4C251.7,277.5,300.2,300.2,300.2,300.2z"/><path d="M573.1,772.9c0,0-4.6,53.3,11.4,113.3c16.1,59.9,46.7,103.8,46.7,103.8s4.6-53.3-11.4-113.3C603.8,816.8,573.1,772.9,573.1,772.9z"/><path d="M426.9,227.1c0,0,4.6-53.3-11.4-113.3C399.4,53.9,368.7,10,368.7,10s-4.6,53.3,11.4,113.3C396.2,183.2,426.9,227.1,426.9,227.1z"/><path d="M380.1,876.7c-16.1,60-11.4,113.3-11.4,113.3s30.7-43.9,46.7-103.8c16.1-60,11.4-113.3,11.4-113.3S396.2,816.8,380.1,876.7z"/><path d="M619.9,123.3C635.9,63.3,631.3,10,631.3,10s-30.7,43.9-46.7,103.8c-16.1,59.9-11.4,113.3-11.4,113.3S603.8,183.2,619.9,123.3z"/></g>
        </svg>`}get _night(){return r.d`
        <svg class="day-night" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 1277.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1277.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M6455 11974 c-1577 -130 -2666 -545 -3649 -1390 -336 -289 -783 -767 -981 -1050 -751 -1070 -1060 -2448 -870 -3874 40 -298 138 -727 230 -1010 276 -847 694 -1560 1293 -2207 161 -174 608 -585 767 -705 769 -581 1810 -969 2905 -1082 929 -96 1857 22 2664 341 547 216 1006 499 1516 937 152 130 529 511 650 655 658 793 1031 1650 1194 2746 43 288 62 468 96 910 25 331 25 347 -10 195 -329 -1462 -1508 -2919 -2925 -3615 -811 -398 -1692 -540 -2625 -425 -970 121 -1866 519 -2504 1113 -154 143 -421 429 -543 582 -512 641 -853 1400 -992 2210 -52 302 -65 473 -65 810 0 446 40 776 145 1200 122 492 350 1042 561 1357 700 1048 1337 1655 2082 1984 323 142 703 249 1071 299 257 36 254 41 -10 19z"/>
            </g>
        </svg>
        `}get picture(){return this.shadowRoot.querySelector("#pic")}get container(){return this.shadowRoot.querySelector("#container")}}_.is="ui-profile",b([Object(r.e)({type:String,reflect:!0})],_.prototype,"route",void 0),b([Object(r.e)({type:Boolean,reflect:!0})],_.prototype,"loaded",void 0),customElements.define(_.is,_);class k extends v{get head(){return{title:"Work",description:"",type:"page",image:"",slug:"#!home"}}render(){return r.d`
        <div class="home">
            <h1>Work</h1>
            <ui-github-work></ui-github-work>
        </div>
        `}}k.is="ui-home",customElements.define(k.is,k);var x=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};let S=class extends v{get head(){return{title:"Contact",description:"",type:"page",image:"",slug:"#!contact"}}get _links(){return[{label:"Github",link:"https://github.com/Ghostfly",svg:r.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>`},{label:"Medium",link:"https://medium.com/@ghostfly1",svg:r.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.962 7.257l-5.457 8.867-3.923-6.375 3.126-5.08c.112-.183.32-.287.527-.287.05 0 .1.008.15.02.038.01.077.023.113.04l5.43 2.716.006.002.01.008c.027.02.036.057.018.087zM9.86 8.592v5.783l5.14 2.57-5.14-8.353zm5.912 8.74l4.23 2.114c.552.275.998.083.998-.43V8.836l-5.228 8.495zM8.968 7.177l-5.303-2.65c-.096-.05-.187-.072-.27-.072-.232 0-.395.18-.395.482v11.45c0 .306.224.67.498.806l4.67 2.335c.12.06.235.087.338.087.29 0 .494-.225.494-.602V7.23c0-.022-.012-.042-.032-.052z"/></g></svg>`},{label:"LinkedIn",link:"https://fr.linkedin.com/in/leonardcherouvrier/en",svg:r.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.34 18.338H5.666v-8.59H8.34v8.59zM7.003 8.574c-.857 0-1.55-.694-1.55-1.548 0-.855.692-1.548 1.55-1.548.854 0 1.547.694 1.547 1.548 0 .855-.692 1.548-1.546 1.548zm11.335 9.764h-2.67V14.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.6 1.086-1.6 2.206v4.248h-2.668v-8.59h2.56v1.174h.036c.357-.675 1.228-1.387 2.527-1.387 2.703 0 3.203 1.78 3.203 4.092v4.71z"/></g></svg>`},{label:"Facebook",link:"https://www.facebook.com/gh0std3v",svg:r.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.007 3H3.993C3.445 3 3 3.445 3 3.993v16.013c0 .55.445.994.993.994h8.62v-6.97H10.27V11.31h2.346V9.31c0-2.325 1.42-3.59 3.494-3.59.993 0 1.847.073 2.096.106v2.43h-1.438c-1.128 0-1.346.537-1.346 1.324v1.734h2.69l-.35 2.717h-2.34V21h4.587c.548 0 .993-.445.993-.993V3.993c0-.548-.445-.993-.993-.993z"/></g></svg>`},{label:"Instagram",link:"https://www.instagram.com/gh0stfly_",svg:r.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 4.622c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.234.052-3.638.052s-2.688-.01-3.637-.052c-.877-.04-1.354-.187-1.67-.31-.42-.163-.72-.358-1.036-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638s.01-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.42.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052M12 3c-2.444 0-2.75.01-3.71.054s-1.613.196-2.185.418c-.592.23-1.094.538-1.594 1.04-.5.5-.807 1-1.037 1.593-.223.572-.375 1.226-.42 2.184C3.01 9.25 3 9.555 3 12s.01 2.75.054 3.71.196 1.613.418 2.186c.23.592.538 1.094 1.038 1.594s1.002.808 1.594 1.038c.572.222 1.227.375 2.185.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054 1.613-.196 2.186-.418c.592-.23 1.094-.538 1.594-1.038s.808-1.002 1.038-1.594c.222-.572.375-1.227.418-2.185.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71-.196-1.613-.418-2.186c-.23-.592-.538-1.094-1.038-1.594s-1.002-.808-1.594-1.038c-.572-.222-1.227-.375-2.185-.418C14.75 3.01 14.445 3 12 3zm0 4.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08c.596 0 1.08-.484 1.08-1.08s-.483-1.08-1.08-1.08z"/></g></svg>`},{label:"Twitter",link:"https://twitter.com/gh0std3v",svg:r.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-2.534 6.71c.004.1.007.198.007.298 0 3.045-2.318 6.556-6.556 6.556-1.3 0-2.512-.38-3.532-1.035.18.02.364.03.55.03 1.08 0 2.073-.367 2.862-.985-1.008-.02-1.86-.685-2.152-1.6.14.027.285.04.433.04.21 0 .414-.027.607-.08-1.054-.212-1.848-1.143-1.848-2.26v-.028c.31.173.666.276 1.044.288-.617-.413-1.024-1.118-1.024-1.918 0-.422.114-.818.312-1.158 1.136 1.393 2.834 2.31 4.75 2.406-.04-.17-.06-.344-.06-.525 0-1.27 1.03-2.303 2.303-2.303.664 0 1.262.28 1.683.728.525-.103 1.018-.295 1.463-.56-.172.54-.537.99-1.013 1.276.466-.055.91-.18 1.323-.362-.31.46-.7.867-1.15 1.192z"/></g></svg>`},{label:"YouTube",link:"https://www.youtube.com/user/xSpirit6/videos",svg:r.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"/></g></svg>`},{label:"Phone",link:"tel:+33668717002",svg:r.d`<mwc-icon>phone</mwc-icon>`},{label:"E-mail",link:"mailto:leonard@ghostfly.dev",svg:r.d`<mwc-icon>mail</mwc-icon>`}]}render(){return r.d`
        <style>
        h1 { user-select: none; font-family: var(--elara-font-display); }
        h1::first-letter { font-size: 1.3em; }

        .contact { height: 100%; }

        mwc-button {
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

        .networks svg, .networks mwc-icon {
            cursor: pointer;
            min-width: 50px;
        }

        .github svg { ${Object(r.g)("fill: "+c.Colors.social.github)}}
        .twitter svg { ${Object(r.g)("fill: "+c.Colors.social.twitter)}}
        .youtube svg { ${Object(r.g)("fill: "+c.Colors.social.youtube)}}
        .linkedin svg { ${Object(r.g)("fill: "+c.Colors.social.linkedin)}}
        .facebook svg { ${Object(r.g)("fill: "+c.Colors.social.facebook)}}
        .instagram svg { ${Object(r.g)("fill: "+c.Colors.social.instagram)}}
        .medium svg { ${Object(r.g)("fill: "+c.Colors.social.medium)}}
        </style>
        <div class="contact">
            <h1>${this.head.title}</h1>
            <div class="grid networks">
                ${this._links.map(t=>this._makeLink(t.label,t.link,t.svg))}
            </div>
            <a class="prev" @click=${()=>c.Routing.navigate("projects")}>< Projects</a>
        </div>
        `}_makeLink(t,e,n){return r.d`
            <div aria-label=${t} class="item ${t.toLowerCase()}" @click=${()=>{c.Routing.redirect(e)}} role="link">
                ${n}
            </div>
        `}};S=x([Object(r.c)("ui-contact")],S);class j extends v{get head(){return{title:"About",description:"",type:"page",image:"",slug:"#!about"}}static get styles(){return[...v.styles,r.b`
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
        `]}render(){return r.d`
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
                    <a role="link" class="cv" @click=${()=>c.Routing.redirect("/assets/resume.pdf")}>CV</a>.</p>
                </div>
            </div>
            <div class="pagination">
                <a class="prev" @click=${()=>c.Routing.navigate("home")}>< Work</a>
                <a class="next" @click=${()=>c.Routing.navigate("projects")}>> Projects</a>
            </div>
        </div>
        `}}j.is="ui-about",customElements.define(j.is,j);var O=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))};class P extends v{get head(){return{title:"Projects",description:"",type:"page",image:"",slug:"#!projects"}}get projects(){return[{name:"Ghostfly.dev",slug:"ghostfly",image:"/assets/me.svg",repository:"https://github.com/Ghostfly/ghostfly.dev/tree/master",status:"Work in progress",url:null,tags:["Elara","LitElement","Github Pages"]},{name:"Dandy Costard",slug:"dandy",image:"/assets/projects/dandy.svg",repository:null,status:"Work in progress",url:null,tags:["E-Commerce","Elara","Custom menswear"]},{name:"Cheno",slug:"cheno",image:"/assets/projects/cheno.svg",status:"published",repository:null,url:"https://www.cheno.fr",tags:["Elara","HTML5","CSS3","TypeScript"]},{name:"Dobrunia Design",slug:"dobrunia",image:"/assets/projects/dobrunia.png",status:"published",repository:null,url:"https://www.dobruniadesign.com",tags:["Élara","WordPress","Design"]},{name:"Persin Conseil",slug:"persin",image:"/assets/projects/persin.jpg",status:"published",repository:"https://github.com/Ghostfly/persin-conseil",url:"https://www.persin.fr",tags:["Lit-Element","Elara","Workbox"]},{name:"G-Addiction",slug:"g-addiction",image:"/assets/projects/g-addiction.png",status:"published",repository:null,url:"https://www.g-addiction.com",tags:["WordPress","chosen template"]}]}_onImageLoaded(t){return O(this,void 0,void 0,(function*(){const e=t.target;if(e){const t=i(500,!0);e.classList.add("shown");const n=e.animate(t.effect,t.options);yield n.finished,e.removeEventListener("load",this._onImageLoaded)}}))}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return O(this,void 0,void 0,(function*(){t.connectedCallback.call(this),yield this.updateComplete,this.images=this.querySelectorAll("img"),this.images.forEach(t=>{t.addEventListener("load",this._onImageLoaded)})}))}disconnectedCallback(){super.disconnectedCallback()}_card(t){return r.d`
        <style>
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

                .hidden-content img {
                    height: 150px;
                    width: 150px;
                    visibility: hidden;
                }

                img {
                    object-fit: contain;
                } 

                img.shown {
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
        </style>
        <section class="project">
            <div class="hidden-content grid">
                <div class="left">
                    <h3 class="${t.slug} ${t.url?"with-link":"normal"}" role="${t.url?"link":"title"}"  @click=${()=>{t.url&&c.Routing.redirect(t.url)}}>${t.name}</h3>
                    <div class="tags">
                        ${t.tags.join(", ")}
                    </div>
                    <br />
                    <div class="status">
                        ${t.repository?r.d`<svg @click=${()=>{c.Routing.redirect(t.repository)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>`:r.d``}
                        ${t.status}
                    </div>
                </div>
                <div class="right">
                    ${t.image?r.d`
                    <img sizing="contain" src="${t.image}"></img>
                    `:r.d``}
                </div>
            </div>
        </section>`}render(){return r.d`
        <div class="projects">
            <h1>${this.head.title}</h1>
            ${this.projects.map(t=>this._card(t))}

            <a class="prev" @click=${()=>c.Routing.navigate("about")}>< About</a>
            <a class="next" @click=${()=>c.Routing.navigate("contact")}>> Contact</a>
        </div>
        `}}P.is="ui-projects",customElements.define(P.is,P);var C=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};class E extends h{constructor(){super(...arguments),this.height=300,this.width=300}firstUpdated(){const t=this._canvas.getContext("2d");window.requestAnimationFrame(()=>{this._tree(t,600,600,80,-Math.PI/2,13,13)})}static get styles(){return r.b`
        #tree {
            position: fixed;
        }
        `}render(){return r.d`<canvas id="tree" height="${this.height}" width="${this.width}"></canvas>`}_tree(t,e,n,r,o,i,a){const s=Math.random;let u,l;const d=2*Math.PI/4;t.beginPath(),t.moveTo(e,n);const h=e+r*Math.cos(o),f=n+r*Math.sin(o);t.lineCap="round",t.lineWidth=a,t.lineTo(h,f),t.strokeStyle=i<=2?"#1b1b1b":"night"===c.UI.dayOrNight()?"#f0f0f0":"#333",t.stroke();const p=i-1;if(!p)return;const v=2*s()+1;a*=.7;for(let e=0;e<v;e++)l=o+s()*d-.5*d,u=r*(.7+.3*s()),this._tree(t,h,f,u,l,p,a)}get _canvas(){return this.shadowRoot.querySelector("#tree")}}E.is="ui-tree",C([Object(r.e)({type:Number,reflect:!0})],E.prototype,"height",void 0),C([Object(r.e)({type:Number,reflect:!0})],E.prototype,"width",void 0),customElements.define(E.is,E);var R=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};let A=class extends h{constructor(t){super(),this.asked=t}static get styles(){return r.b`
        h1, p {
            user-select: none;
            z-index: 1;
        }

        a {
            color: var(--elara-primary);
            text-decoration: none;
            cursor: pointer;
        }
        `}render(){return r.d`
        <div>
            <h1>You are lost !</h1>
            <p>You asked for : ${this.asked}.</p>
            <a @click=${()=>c.Routing.navigate("home")}><mwc-icon icon="home"></mwc-icon> Homepage</a>
            <ui-tree .width=${1366} .height=${768}></ui-tree>
        </div>
        `}};R([Object(r.e)({type:String,reflect:!0})],A.prototype,"asked",void 0),A=R([Object(r.c)("ui-not-found")],A);var T=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};class L extends h{constructor(){super(...arguments),this.items=[],this.route=null,this.shown=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return r.b`
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
        `}render(){return r.d`
        <div id="menu" class="menu-content ${!0===this.shown?"shown":""}">
			<mwc-icon-button class="menu" icon="clear" aria-label="Close menu" @click=${()=>c.UI.elara().menu(!0)}></mwc-icon-button>
			${this.items.map(t=>this._link(t))}
		</div>
        `}_link({route:t,name:e}){return r.d`
		<a class="item ${this.route===t?"active":""}" @click=${()=>c.UI.elara().show(t)}>${e}</a>
		`}}L.is="ui-menu",T([Object(r.e)({type:Array,reflect:!1})],L.prototype,"items",void 0),T([Object(r.e)({type:String,reflect:!0})],L.prototype,"route",void 0),T([Object(r.e)({type:Boolean,reflect:!0})],L.prototype,"shown",void 0),customElements.define(L.is,L);var N=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))};Promise.all([n.e(1),n.e(2)]).then(n.bind(null,23));class M extends d{get loadables(){return[]}get bootstrap(){return c.Bootstrap.promise(this.loadables,this)}show(t){return N(this,void 0,void 0,(function*(){c.Routing.navigate(t),yield this._hideMenu()}))}menu(t){return N(this,void 0,void 0,(function*(){return t?this._hideMenu():this._showMenu()}))}firstUpdated(){const t=new HashChangeEvent("hashchange",{newURL:location.hash,oldURL:null});this._onHashChange(t)}static get styles(){return[r.b`
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
		`]}get links(){return[{route:"home",name:"Work"},{route:"about",name:"About"},{route:"projects",name:"Projects"},{route:"contact",name:"Contact"}]}render(){return r.d`
			<style>
			.content {
				position: absolute;
				width: calc(100% - 25vw - 4vh - 5vw);
				right: 10px;
			}
			</style>
			<ui-profile></ui-profile>
			<mwc-icon-button id="handle" class="menu" offIcon="menu" onIcon="clear" aria-label="Menu" @click=${this._showMenu}></mwc-icon-button>
			<div id="content" class="content"></div>
			<ui-menu id="menu" .items=${this.links} .route=${this.route}></ui-menu>
		`}_showMenu(){return N(this,void 0,void 0,(function*(){if(this._menu.shown)return void(yield this._hideMenu());if(this._menuFade)return;this._content.classList.contains("hidden")||this._content.classList.add("hidden"),!1===this._menu.shown&&(this._menu.shown=!0);const t=i(300,!0);this._menuFade=this._menu.animate(t.effect,t.options),yield this._menuFade.finished,this._menuFade=null}))}_hideMenu(){return N(this,void 0,void 0,(function*(){if(this._menuFade)return;const t=i(300,!1);this._menuFade=this._menu.animate(t.effect,t.options),yield this._menuFade.finished,this._content.classList.remove("hidden"),this._menu.shown=!1,this._menuFade=null}))}}M.is="elara-app",customElements.define(M.is,M)}]);
//# sourceMappingURL=main.2bd5aaf5.js.map