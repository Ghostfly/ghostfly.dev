!function(e){function t(t){for(var n,r,o=t[0],s=t[1],a=0,l=[];a<o.length;a++)r=o[a],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);l.length;)l.shift()()}var n={},i={0:0};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(e){return r.p+""+({}[e]||e)+"."+{1:"ff7bf008",2:"6bc268a6"}[e]+".js"}(e);var c=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var c=s;r(r.s=11)}([function(e,t,n){"use strict";n.d(t,"c",(function(){return x})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return C})),n.d(t,"d",(function(){return h.c})),n.d(t,"g",(function(){return N})),n.d(t,"b",(function(){return M})),n.d(t,"a",(function(){return T}));var i=n(4),r=n(1);function o(e,t){const{element:{content:n},parts:i}=e,r=document.createTreeWalker(n,133,null,!1);let o=a(i),s=i[o],c=-1,l=0;const d=[];let h=null;for(;r.nextNode();){c++;const e=r.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(d.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==s&&s.index===c;)s.index=null!==h?-1:s.index-l,o=a(i,o),s=i[o]}d.forEach(e=>e.parentNode.removeChild(e))}const s=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},a=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(Object(r.d)(t))return n}return-1};var c=n(7),l=n(6),d=n(10),h=n(5);
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
const u=(e,t)=>`${e}--${t}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const f=e=>t=>{const n=u(t.type,e);let i=l.a.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},l.a.set(n,i));let o=i.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(r.f);if(o=i.keyString.get(s),void 0===o){const n=t.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(n,e),o=new r.a(t,n),i.keyString.set(s,o)}return i.stringsArray.set(t.strings,o),o},g=["html","svg"],m=new Set,v=(e,t,n)=>{m.add(e);const i=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:c}=r;if(0===c)return void window.ShadyCSS.prepareTemplateStyles(i,e);const d=document.createElement("style");for(let e=0;e<c;e++){const t=r[e];t.parentNode.removeChild(t),d.textContent+=t.textContent}(e=>{g.forEach(t=>{const n=l.a.get(u(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),o(e,n)})})})(e);const h=i.content;n?function(e,t,n=null){const{element:{content:i},parts:r}=e;if(null==n)return void i.appendChild(t);const o=document.createTreeWalker(i,133,null,!1);let c=a(r),l=0,d=-1;for(;o.nextNode();){for(d++,o.currentNode===n&&(l=s(t),n.parentNode.insertBefore(t,n));-1!==c&&r[c].index===d;){if(l>0){for(;-1!==c;)r[c].index+=l,c=a(r,c);return}c=a(r,c)}}}(n,d,h.firstChild):h.insertBefore(d,h.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const p=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)t.insertBefore(p.cloneNode(!0),t.firstChild);else if(n){h.insertBefore(d,h.firstChild);const e=new Set;e.add(d),o(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const y={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},w=(e,t)=>t!==e&&(t==t||e==e),b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};class _ extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const i=this._attributeNameForProperty(n,t);void 0!==i&&(this._attributeToPropertyMap.set(i,n),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=b){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||b}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=w){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||y,r="function"==typeof i?i:i.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||y.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=b){const i=this.constructor,r=i._attributeNameForProperty(e,n);if(void 0!==r){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const i=this.constructor,r=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}_.finalized=!0;
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
const x=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),k=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function S(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):k(e,t)}function C(e){return(t,n)=>{const i={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==n?P(i,t,n):j(i,t)}}const P=(e,t,n)=>{Object.defineProperty(t,n,e)},j=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});
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
const O="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,E=Symbol();class R{constructor(e,t){if(t!==E)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(O?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const N=e=>new R(String(e),E),M=(e,...t)=>{const n=t.reduce((t,n,i)=>t+(e=>{if(e instanceof R)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[i+1],e[0]);return new R(n,E)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const $={};class T extends _{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),i=[];n.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?O?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==$&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return $}}T.finalized=!0,T.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,o=c.a.has(t),s=p&&11===t.nodeType&&!!t.host,a=s&&!m.has(r),l=a?document.createDocumentFragment():t;if(Object(c.b)(e,l,Object.assign({templateFactory:f(r)},n)),a){const e=c.a.get(l);c.a.delete(l);const n=e.value instanceof d.a?e.value.template:void 0;v(r,l,n),Object(i.b)(t,t.firstChild),t.appendChild(l),c.a.set(t,e)}!o&&s&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return h}));
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
const i=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${r}`),s="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],a=document.createTreeWalker(t.content,133,null,!1);let l=0,u=-1,p=0;const{strings:f,values:{length:g}}=e;for(;p<g;){const e=a.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)c(t[e].name,s)&&i++;for(;i-- >0;){const t=f[p],n=h.exec(t)[2],i=n.toLowerCase()+s,r=e.getAttribute(i);e.removeAttribute(i);const a=r.split(o);this.parts.push({type:"attribute",index:u,name:n,strings:a}),p+=a.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,r=t.split(o),a=r.length-1;for(let t=0;t<a;t++){let n,o=r[t];if(""===o)n=d();else{const e=h.exec(o);null!==e&&c(e[2],s)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-s.length)+e[3]),n=document.createTextNode(o)}i.insertBefore(n,e),this.parts.push({type:"node",index:++u})}""===r[a]?(i.insertBefore(d(),e),n.push(e)):e.data=r[a],p+=a}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&u!==l||(u++,t.insertBefore(d(),e)),l=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(n.push(e),u--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const c=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},l=e=>-1!==e.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return y}));var i=n(8),r=n(4),o=n(3),s=n(10),a=n(9),c=n(1);
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
const l=e=>null===e||!("object"==typeof e||"function"==typeof e),d=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class h{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new u(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let i=0;i<t;i++){n+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(l(e)||!d(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===o.a||l(e)&&e===this.value||(this.value=e,Object(i.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(i.b)(this.value);){const e=this.value;this.value=o.a,e(this)}this.value!==o.a&&this.committer.commit()}}class p{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(c.c)()),this.endNode=e.appendChild(Object(c.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Object(c.c)()),e.__insert(this.endNode=Object(c.c)())}insertAfterPart(e){e.__insert(this.startNode=Object(c.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}const e=this.__pendingValue;e!==o.a&&(l(e)?e!==this.value&&this.__commitText(e):e instanceof a.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):d(e)?this.__commitIterable(e):e===o.b?(this.value=o.b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof s.a&&this.value.template===t)this.value.update(e.values);else{const n=new s.a(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const r of e)n=t[i],void 0===n&&(n=new p(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){Object(r.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class f{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=o.a}}class g extends h{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends u{}let v=!1;(()=>{try{const e={get capture(){return v=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class y{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=w(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=o.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const w=e=>e&&(v?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));
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
const i={},r={}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));
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
const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,n=null,i=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,i),t=n}},o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}}},function(e,t,n){"use strict";n.d(t,"b",(function(){return s.a})),n.d(t,"d",(function(){return a.a})),n.d(t,"a",(function(){return i.d})),n.d(t,"e",(function(){return c.b})),n.d(t,"c",(function(){return l}));var i=n(2);
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
 */const r=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];if("."===o){return new i.e(e,t.slice(1),n).parts}return"@"===o?[new i.c(e,t.slice(1),r.eventContext)]:"?"===o?[new i.b(e,t.slice(1),n)]:new i.a(e,t,n).parts}handleTextExpression(e){return new i.d(e)}};var o=n(9),s=n(8),a=(n(4),n(3)),c=(n(7),n(6));n(10),n(1);
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const l=(e,...t)=>new o.b(e,t,"html",r)},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(1);
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
 */function r(e){let t=o.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},o.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(i.f);return n=t.keyString.get(r),void 0===n&&(n=new i.a(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const o=new Map},function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var i=n(4),r=n(2),o=n(6);
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
const s=new WeakMap,a=(e,t,n)=>{let a=s.get(t);void 0===a&&(Object(i.b)(t,t.firstChild),s.set(t,a=new r.d(Object.assign({templateFactory:o.b},n))),a.appendInto(t)),a.setValue(e),a.commit()}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));
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
const i=new WeakMap,r=e=>(...t)=>{const n=e(...t);return i.set(n,!0),n},o=e=>"function"==typeof e&&i.has(e)},function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var i=n(4),r=n(1);
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
const o=` ${r.f} `;class s{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],s=e.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===e.indexOf("--\x3e",s+1);const a=r.e.exec(e);t+=null===a?e+(n?o:r.g):e.substr(0,a.index)+a[1]+a[2]+r.b+a[3]+r.f}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class a extends s{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),Object(i.c)(t,n.firstChild),e}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(4),r=n(1);
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
class o{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let s,a=0,c=0,l=o.nextNode();for(;a<n.length;)if(s=n[a],Object(r.d)(s)){for(;c<s.index;)c++,"TEMPLATE"===l.nodeName&&(t.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=t.pop(),l=o.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));a++}else this.__parts.push(void 0),a++;return i.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,n){"use strict";n.r(t),n.d(t,"ElaraApp",(function(){return A}));var i=n(0);function r(e){return{effect:{opacity:[.5,1],transform:["scale(.95)","scale(1)"]},options:{duration:e}}}function o(e,t){return{effect:{opacity:t?[0,1]:[1,0]},options:{duration:e}}}var s=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))};const a={Bootstrap:{promise:(e,t)=>{const n=[];for(const i of e){const e=new Promise(e=>{const n=t.querySelector(i),r=new MutationObserver(t=>{t.length&&"attributes"==t[0].type&&"loaded"===t[0].attributeName&&(r.disconnect(),e())});r.observe(n,{attributes:!0})});n.push(e)}return Promise.all(n)},load:(e,t,n,i)=>s(void 0,void 0,void 0,(function*(){const o="%s | Léonard C.",s=customElements.get("ui-"+e);t.classList.remove("full-width");const c=customElements.get("ui-not-found"),l=s?new s:new c(e);if(l.head&&l.head.title?document.title=o.replace("%s",l.head.title):document.title="Léonard C.",!0!==l.isFullWidth||t.classList.contains("full-width")?l.isFullWidth||t.classList.remove("full-width"):t.classList.add("full-width"),t.appendChild(l),l instanceof c)throw new a.Errors.NotFound(e);window.scrollTo(0,0),n.shown&&null===i&&(yield a.UI.elara().menu(!0));const d=window.requestAnimationFrame(()=>{if(!l.shadowRoot)return void cancelAnimationFrame(d);const e=l.querySelector("div");if(!e)return void cancelAnimationFrame(d);const t=r(300);e.animate(t.effect,t.options)})}))},Constants:{modes:{default:"day"}},Routing:{redirect:(e,t="_blank")=>!!window.open(e,t),navigate:e=>(location.hash="#!"+e,!0),hashChange(e){const t=e.newURL.replace(location.origin+location.pathname,"").split("#!").filter(Boolean);let n=null;n=0===t.length?t.shift():t.pop();if(e.oldURL===e.newURL)return null;const i=customElements.get("ui-"+n);return i&&!0===i.hasRouting||e.newURL!==location.origin+location.pathname&&n?n:"home"}},UI:{processing:{toDataURL:e=>new Promise((t,n)=>{const i=new Image;i.crossOrigin="Anonymous",i.src=e,setTimeout(()=>{!1===i.complete&&(console.warn("Elara ::: Image loading was too slow, rejecting"),i.src="",n())},1200),i.onload=()=>{const e=document.createElement("canvas"),n=e.getContext("2d");e.height=i.naturalHeight,e.width=i.naturalWidth,n.drawImage(i,0,0),t(e.toDataURL("image/jpeg"))},i.onerror=()=>{n()}})},queries:{DARK:"(prefers-color-scheme: dark)",LIGHT:"(prefers-color-scheme: light)"},modes:{localStorageKey:"night-mode"},typography:{heading:i.b`h1, h2 { user-select: none; font-family: var(--elara-font-display); } h1::first-letter { font-size: 1.3em; } h2::first-letter { font-size: 1.2em }`},elara:()=>document.querySelector("elara-app"),mode:()=>localStorage.getItem(a.UI.modes.localStorageKey),nightSwitchClick:(e,t)=>s(void 0,void 0,void 0,(function*(){e.preventDefault(),e.stopPropagation();const n=!a.UI.isSunny()?"day":"night";return localStorage.setItem(a.UI.modes.localStorageKey,n),yield t.requestUpdate(),a.UI.elara().askModeChange(n)})),applyVariablesFor:e=>{const t=document.documentElement;return"night"===e?(t.style.setProperty("--elara-background-color","#373737"),t.style.setProperty("--elara-font-color","#f0f0f0"),t.style.setProperty("--elara-font-hover","#9e9e9e")):(t.style.removeProperty("--elara-background-color"),t.style.removeProperty("--elara-font-color"),t.style.removeProperty("--elara-font-hover")),!0},hasSwitched:()=>null!==a.UI.mode(),isSunny:()=>"day"===a.UI.mode(),dayOrNight:()=>a.UI.hasSwitched()?a.UI.isSunny()?"day":"night":a.UI.isDarkOS()?"day":"night",isDarkOS:()=>window.matchMedia?window.matchMedia(a.UI.queries.DARK).matches:(console.warn("Elara:: Night mode not supported at the moment"),!1)},Errors:{GenericError:class extends Error{constructor(){super(...arguments),this.elara=!1,this.continue=!0,this.reload=!0}},NotFound:class extends Error{constructor(){super(...arguments),this.elara=!0,this.continue=!0,this.reload=!1}},Prototype:class extends Error{constructor(){super(...arguments),this.elara=!1,this.continue=!0,this.reload=!1}}},Colors:{social:{github:"#24292e",twitter:"#1da1f2",youtube:"#ff0000",linkedin:"#0073b0",facebook:"#3b5998",instagram:"#333",medium:"#3CB371"}}};var c=a,l=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},d=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))};class h extends i.a{connectedCallback(){super.connectedCallback(),c.UI.applyVariablesFor(c.UI.dayOrNight()),this._onHashChangeListener=this._onHashChange.bind(this),window.addEventListener("hashchange",this._onHashChangeListener,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._onHashChangeListener)}createRenderRoot(){return this}_onHashChange(e){return d(this,void 0,void 0,(function*(){const t=c.Routing.hashChange(e);this.route=t,this._content.innerHTML="",yield this.load(t)}))}load(e){return d(this,void 0,void 0,(function*(){return c.Bootstrap.load(e,this._content,this._menu,this._menuFade)}))}askModeChange(e){return c.UI.applyVariablesFor(e)}get _content(){return this.querySelector("#content")}get _menu(){return this.querySelector("#menu")}}l([Object(i.e)({reflect:!0,type:String})],h.prototype,"route",void 0);class u extends i.a{}var p=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let f=class extends u{constructor(){super(...arguments),this.active=!0}static get styles(){return i.b`
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
          
        `}render(){return this.active?i.d`
        <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>`:i.d``}};p([Object(i.e)({type:Boolean,reflect:!1})],f.prototype,"active",void 0),f=p([Object(i.c)("elara-spinner")],f);class g extends i.a{get head(){return{title:null,description:null,type:null,image:null,slug:null}}static get styles(){return[c.UI.typography.heading]}createRenderRoot(){return this}}var m=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},v=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))};class y extends u{constructor(){super(...arguments),this.repositories=[],this.currentPage=null,this.page=0,this.inError=!1,this.chunksLength=6}firstUpdated(){return v(this,void 0,void 0,(function*(){this._spinner.active=!0;const e=new XMLHttpRequest;e.open("POST","https://api.github.com/graphql",!0),e.setRequestHeader("Authorization","bearer "+atob("ZDQ0Y2JmYjVlOGRiOTRjMjJkNThlYjg4ZjFlNjIyODM4YzQ1N2Q3Mg==")),e.send(JSON.stringify({query:'{ search(query: "user:ghostfly is:public", type: REPOSITORY, first: 100) { repositoryCount edges { node { ... on Repository { name stargazers { totalCount } description forkCount createdAt url primaryLanguage {name} }}}}}'}));const t=()=>{if(!this._spinner)return;this._spinner.active=!1;const e=this._spinner.parentElement;e.removeChild(this._spinner),this.shadowRoot.removeChild(e)},n=()=>{t(),this.inError=!0};e.onerror=n,e.onreadystatechange=()=>v(this,void 0,void 0,(function*(){if(4==e.readyState&&200==e.status){const n=JSON.parse(e.responseText).data.search.edges.sort((e,t)=>new Date(t.node.createdAt).getTime()-new Date(e.node.createdAt).getTime());this.repositories=this._chunk(n,this.chunksLength),this.currentPage=this.repositories[this.page],t(),yield this.updateComplete,this._pulse()}403===e.status&&n()}))}))}_chunk(e,t){const n=[],i=e.length;let r=0;for(;r<i;)n.push(e.slice(r,r+=t));return n}static get styles(){return i.b`
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
        `}_card(e){return i.d`
        <section class="github-card" @click=${()=>c.Routing.redirect(e.node.url)}}>
            <div class="title">${e.node.name}</div>
            ${e.node.description?i.d`<div class="description">${e.node.description}</div>`:i.d``}
            <div class="bottom">
                <span>${e.node.primaryLanguage?e.node.primaryLanguage.name:""}</span>
                <span><mwc-icon>star</mwc-icon> ${e.node.stargazers.totalCount}</span>
                <span><mwc-icon>keyboard_arrow_right</mwc-icon> ${e.node.forkCount}</span>
            </div>
        </section>
        `}render(){return i.d`
        <div class="loader">
            <elara-spinner active></elara-spinner>
        </div>
        ${this.inError?i.d`<p>Can't load GitHub repositories.. 😢 <br />You can check on <a class="link" href="https://github.com/ghostfly/">GitHub</a> directly !</p>`:i.d``}
        ${this.currentPage?i.d`
        <div class="two-cols">
            ${this.currentPage.map(e=>this._card(e))}
        </div>
        ${this._pagination}
        `:i.d``}
        <a class="next" @click=${()=>c.Routing.navigate("about")}>> About</a>
        `}_pulse(){const e=this.shadowRoot.querySelectorAll(".two-cols section"),t=r(600);e.forEach(e=>{e.animate(t.effect,t.options)})}get _pagination(){return i.d`
        <div class="pagination">
            ${this.page+1} / ${this.repositories.length}
            ${this._back} 
            ${this._next}
        </div>`}get _back(){return i.d`
        <a role="button" disabled=${0===this.page} @click=${()=>v(this,void 0,void 0,(function*(){this.page--,this.currentPage=this.repositories[this.page],yield this.updateComplete,this._pulse()}))}>
            <mwc-icon-button aria-label="Previous page" icon="keyboard_arrow_left"></mwc-icon-button>
        </a>
        `}get _next(){return i.d`
        <a role="button" disabled=${this.page+1===this.repositories.length} @click=${()=>v(this,void 0,void 0,(function*(){this.page++,this.currentPage=this.repositories[this.page],yield this.updateComplete,this._pulse()}))}>
            <mwc-icon-button aria-label="Next page" icon="keyboard_arrow_right"></mwc-icon-button>
        </a>
        `}get _spinner(){return this.shadowRoot.querySelector("elara-spinner")}}y.is="ui-github-work",m([Object(i.e)({type:Array})],y.prototype,"repositories",void 0),m([Object(i.e)({type:Array})],y.prototype,"currentPage",void 0),m([Object(i.e)({type:Number,reflect:!0})],y.prototype,"page",void 0),m([Object(i.e)({type:Boolean,reflect:!0})],y.prototype,"inError",void 0),customElements.define(y.is,y);var w=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},b=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))};class _ extends u{constructor(){super(...arguments),this.loaded=!1}connectedCallback(){super.connectedCallback(),this._hashChangeListener=this._onHashChange.bind(this),window.addEventListener("hashchange",this._hashChangeListener)}_onProfilePictureLoaded(e){const t=e.target;if(t){const e=o(500,!0);t.animate(e.effect,e.options),t.classList.add("shown"),t.removeEventListener("load",this._onProfilePictureLoaded)}}firstUpdated(){return b(this,void 0,void 0,(function*(){try{this.picture.addEventListener("load",this._onProfilePictureLoaded);const e=yield c.UI.processing.toDataURL("https://source.unsplash.com/collection/1727869/1366x768");if(this.loaded=!0,this.container.style.backgroundImage=`url('${e}')`,this.picture.complete)return void this._onProfilePictureLoaded({target:this.picture,detail:{value:!0}})}catch(e){const t=yield c.UI.processing.toDataURL("/assets/fallback.jpeg");this.container.style.backgroundImage=`url('${t}')`,this.loaded=!0}}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._hashChangeListener)}_onHashChange(e){const t=c.Routing.hashChange(e);this.route=t}static get styles(){return[...g.styles,i.b`
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
        }`]}render(){return i.d`
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

            <div class="night-switch" @click=${e=>b(this,void 0,void 0,(function*(){return c.UI.nightSwitchClick(e,this)}))}>${this._nightToggle()}</div>
        </div>
        `}_nightToggle(){return"day"===c.UI.dayOrNight()?this._day:this._night}get _day(){return i.d`
        <svg class="day-night" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000">
            <g><path d="M715.9,424.2c-18.2-33.3-52.9-67.9-99.8-84.8c-46.4-17.4-104.7-16-153.5,10.3c-49.9,24.7-85.2,80.2-84.9,136.3c-0.7,55.5,30.1,110.2,77.6,131.4c46.7,21.9,98.5,10.9,128.6-13.6c32.3-24.8,40.9-59.6,40.8-80.5c-0.3-39.2-21.3-74.5-52.8-88.1c-30.7-13.6-65.4-7.1-87.1,12.8c-23,19.8-27.9,54.2-13.9,78.8c12.2,26.4,49.8,36.3,72.7,17.6c-26.2,14.1-55.5-1.1-61.8-22.8c-8.3-21.3-0.7-45.6,16.3-57.4c34.6-28,98.6-3.4,97.8,58.7c0,15.2-6.3,40.3-29.7,58.1c-22.6,18.6-62.9,27.2-98.9,10.3c-36-15.6-61.3-59.5-60.9-104.9c0.1-45.9,27.9-90.3,69.6-111.2c41.3-22.3,90.7-23.5,130.1-8.8c39.9,14.5,68.9,43.1,84.9,72.3c34.9,59.1,22.8,104.8,23.7,103.7c-0.2-1.1-1,45.4-47.1,96.2c-43.8,48.5-135.9,104.2-229.3,72.5c-89-29.9-167.9-121.6-159.7-206.4c3.3-86.4,53.1-145.4,77.7-167.6c47.6-43.3,99-58.2,146.9-58c48.4,0.4,94.8,14.1,145.3,40.5c-45.5-34.1-91.4-56-144.3-61.6c-52.3-5.5-113.6,8.9-167.4,57.9c-27.9,25.3-83.1,90-87.1,187.7c-3.2,47.3,14.7,103.4,49.9,142.6c33,40.7,77.6,76.6,130,92.3c52,17.1,108.1,11.4,153-6.9C627.6,712.8,663.4,686,689,658c52.3-57.2,54.3-113.6,54.3-112.1C742.4,547.6,755.9,491.4,715.9,424.2z"/><path d="M858.7,141.3c0,0-48.5,22.6-92.4,66.5c-43.9,43.9-66.5,92.4-66.5,92.4s48.5-22.7,92.4-66.5C836.1,189.8,858.7,141.3,858.7,141.3z"/><path d="M141.3,858.7c0,0,48.5-22.7,92.4-66.5c43.9-43.9,66.5-92.4,66.5-92.4s-48.5,22.6-92.4,66.5C164,810.2,141.3,858.7,141.3,858.7z"/><path d="M886.2,415.4c59.9-16.1,103.8-46.7,103.8-46.7s-53.3-4.6-113.3,11.4c-59.9,16.1-103.8,46.7-103.8,46.7S826.3,431.5,886.2,415.4z"/><path d="M113.8,584.6C53.9,600.6,10,631.3,10,631.3s53.3,4.6,113.3-11.4c60-16.1,103.8-46.7,103.8-46.7S173.8,568.5,113.8,584.6z"/><path d="M772.9,573.1c0,0,43.9,30.7,103.8,46.7c60,16.1,113.3,11.4,113.3,11.4s-43.9-30.7-103.8-46.7C826.3,568.5,772.9,573.1,772.9,573.1z"/><path d="M227.1,426.9c0,0-43.9-30.7-103.8-46.7C63.3,364.1,10,368.7,10,368.7s43.9,30.7,103.8,46.7C173.8,431.5,227.1,426.9,227.1,426.9z"/><path d="M699.8,699.8c0,0,22.7,48.5,66.5,92.4c43.9,43.9,92.4,66.5,92.4,66.5s-22.7-48.5-66.5-92.4C748.3,722.4,699.8,699.8,699.8,699.8z"/><path d="M300.2,300.2c0,0-22.6-48.5-66.5-92.4c-43.9-43.9-92.4-66.5-92.4-66.5s22.6,48.5,66.5,92.4C251.7,277.5,300.2,300.2,300.2,300.2z"/><path d="M573.1,772.9c0,0-4.6,53.3,11.4,113.3c16.1,59.9,46.7,103.8,46.7,103.8s4.6-53.3-11.4-113.3C603.8,816.8,573.1,772.9,573.1,772.9z"/><path d="M426.9,227.1c0,0,4.6-53.3-11.4-113.3C399.4,53.9,368.7,10,368.7,10s-4.6,53.3,11.4,113.3C396.2,183.2,426.9,227.1,426.9,227.1z"/><path d="M380.1,876.7c-16.1,60-11.4,113.3-11.4,113.3s30.7-43.9,46.7-103.8c16.1-60,11.4-113.3,11.4-113.3S396.2,816.8,380.1,876.7z"/><path d="M619.9,123.3C635.9,63.3,631.3,10,631.3,10s-30.7,43.9-46.7,103.8c-16.1,59.9-11.4,113.3-11.4,113.3S603.8,183.2,619.9,123.3z"/></g>
        </svg>`}get _night(){return i.d`
        <svg class="day-night" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 1277.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1277.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M6455 11974 c-1577 -130 -2666 -545 -3649 -1390 -336 -289 -783 -767 -981 -1050 -751 -1070 -1060 -2448 -870 -3874 40 -298 138 -727 230 -1010 276 -847 694 -1560 1293 -2207 161 -174 608 -585 767 -705 769 -581 1810 -969 2905 -1082 929 -96 1857 22 2664 341 547 216 1006 499 1516 937 152 130 529 511 650 655 658 793 1031 1650 1194 2746 43 288 62 468 96 910 25 331 25 347 -10 195 -329 -1462 -1508 -2919 -2925 -3615 -811 -398 -1692 -540 -2625 -425 -970 121 -1866 519 -2504 1113 -154 143 -421 429 -543 582 -512 641 -853 1400 -992 2210 -52 302 -65 473 -65 810 0 446 40 776 145 1200 122 492 350 1042 561 1357 700 1048 1337 1655 2082 1984 323 142 703 249 1071 299 257 36 254 41 -10 19z"/>
            </g>
        </svg>
        `}get picture(){return this.shadowRoot.querySelector("#pic")}get container(){return this.shadowRoot.querySelector("#container")}}_.is="ui-profile",w([Object(i.e)({type:String,reflect:!0})],_.prototype,"route",void 0),w([Object(i.e)({type:Boolean,reflect:!0})],_.prototype,"loaded",void 0),customElements.define(_.is,_);class x extends g{get head(){return{title:"Work",description:"",type:"page",image:"",slug:"#!home"}}render(){return i.d`
        <div class="home">
            <h1>Work</h1>
            <ui-github-work></ui-github-work>
        </div>
        `}}x.is="ui-home",customElements.define(x.is,x);var k=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let S=class extends g{get head(){return{title:"Contact",description:"",type:"page",image:"",slug:"#!contact"}}get _links(){return[{label:"Github",link:"https://github.com/Ghostfly",svg:i.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>`},{label:"Medium",link:"https://medium.com/@ghostfly1",svg:i.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.962 7.257l-5.457 8.867-3.923-6.375 3.126-5.08c.112-.183.32-.287.527-.287.05 0 .1.008.15.02.038.01.077.023.113.04l5.43 2.716.006.002.01.008c.027.02.036.057.018.087zM9.86 8.592v5.783l5.14 2.57-5.14-8.353zm5.912 8.74l4.23 2.114c.552.275.998.083.998-.43V8.836l-5.228 8.495zM8.968 7.177l-5.303-2.65c-.096-.05-.187-.072-.27-.072-.232 0-.395.18-.395.482v11.45c0 .306.224.67.498.806l4.67 2.335c.12.06.235.087.338.087.29 0 .494-.225.494-.602V7.23c0-.022-.012-.042-.032-.052z"/></g></svg>`},{label:"LinkedIn",link:"https://fr.linkedin.com/in/leonardcherouvrier/en",svg:i.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.34 18.338H5.666v-8.59H8.34v8.59zM7.003 8.574c-.857 0-1.55-.694-1.55-1.548 0-.855.692-1.548 1.55-1.548.854 0 1.547.694 1.547 1.548 0 .855-.692 1.548-1.546 1.548zm11.335 9.764h-2.67V14.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.6 1.086-1.6 2.206v4.248h-2.668v-8.59h2.56v1.174h.036c.357-.675 1.228-1.387 2.527-1.387 2.703 0 3.203 1.78 3.203 4.092v4.71z"/></g></svg>`},{label:"Facebook",link:"https://www.facebook.com/gh0std3v",svg:i.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.007 3H3.993C3.445 3 3 3.445 3 3.993v16.013c0 .55.445.994.993.994h8.62v-6.97H10.27V11.31h2.346V9.31c0-2.325 1.42-3.59 3.494-3.59.993 0 1.847.073 2.096.106v2.43h-1.438c-1.128 0-1.346.537-1.346 1.324v1.734h2.69l-.35 2.717h-2.34V21h4.587c.548 0 .993-.445.993-.993V3.993c0-.548-.445-.993-.993-.993z"/></g></svg>`},{label:"Instagram",link:"https://www.instagram.com/gh0stfly_",svg:i.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 4.622c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.234.052-3.638.052s-2.688-.01-3.637-.052c-.877-.04-1.354-.187-1.67-.31-.42-.163-.72-.358-1.036-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638s.01-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.42.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052M12 3c-2.444 0-2.75.01-3.71.054s-1.613.196-2.185.418c-.592.23-1.094.538-1.594 1.04-.5.5-.807 1-1.037 1.593-.223.572-.375 1.226-.42 2.184C3.01 9.25 3 9.555 3 12s.01 2.75.054 3.71.196 1.613.418 2.186c.23.592.538 1.094 1.038 1.594s1.002.808 1.594 1.038c.572.222 1.227.375 2.185.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054 1.613-.196 2.186-.418c.592-.23 1.094-.538 1.594-1.038s.808-1.002 1.038-1.594c.222-.572.375-1.227.418-2.185.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71-.196-1.613-.418-2.186c-.23-.592-.538-1.094-1.038-1.594s-1.002-.808-1.594-1.038c-.572-.222-1.227-.375-2.185-.418C14.75 3.01 14.445 3 12 3zm0 4.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08c.596 0 1.08-.484 1.08-1.08s-.483-1.08-1.08-1.08z"/></g></svg>`},{label:"Twitter",link:"https://twitter.com/gh0std3v",svg:i.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-2.534 6.71c.004.1.007.198.007.298 0 3.045-2.318 6.556-6.556 6.556-1.3 0-2.512-.38-3.532-1.035.18.02.364.03.55.03 1.08 0 2.073-.367 2.862-.985-1.008-.02-1.86-.685-2.152-1.6.14.027.285.04.433.04.21 0 .414-.027.607-.08-1.054-.212-1.848-1.143-1.848-2.26v-.028c.31.173.666.276 1.044.288-.617-.413-1.024-1.118-1.024-1.918 0-.422.114-.818.312-1.158 1.136 1.393 2.834 2.31 4.75 2.406-.04-.17-.06-.344-.06-.525 0-1.27 1.03-2.303 2.303-2.303.664 0 1.262.28 1.683.728.525-.103 1.018-.295 1.463-.56-.172.54-.537.99-1.013 1.276.466-.055.91-.18 1.323-.362-.31.46-.7.867-1.15 1.192z"/></g></svg>`},{label:"YouTube",link:"https://www.youtube.com/user/xSpirit6/videos",svg:i.d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"/></g></svg>`},{label:"Phone",link:"tel:+33668717002",svg:i.d`<mwc-icon>phone</mwc-icon>`},{label:"E-mail",link:"mailto:leonard@ghostfly.dev",svg:i.d`<mwc-icon>mail</mwc-icon>`}]}render(){return i.d`
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

        .github svg { ${Object(i.g)("fill: "+c.Colors.social.github)}}
        .twitter svg { ${Object(i.g)("fill: "+c.Colors.social.twitter)}}
        .youtube svg { ${Object(i.g)("fill: "+c.Colors.social.youtube)}}
        .linkedin svg { ${Object(i.g)("fill: "+c.Colors.social.linkedin)}}
        .facebook svg { ${Object(i.g)("fill: "+c.Colors.social.facebook)}}
        .instagram svg { ${Object(i.g)("fill: "+c.Colors.social.instagram)}}
        .medium svg { ${Object(i.g)("fill: "+c.Colors.social.medium)}}
        </style>
        <div class="contact">
            <h1>${this.head.title}</h1>
            <div class="grid networks">
                ${this._links.map(e=>this._makeLink(e.label,e.link,e.svg))}
            </div>
            <a class="prev" @click=${()=>c.Routing.navigate("projects")}>< Projects</a>
        </div>
        `}_makeLink(e,t,n){return i.d`
            <div aria-label=${e} class="item ${e.toLowerCase()}" @click=${()=>{c.Routing.redirect(t)}} role="link">
                ${n}
            </div>
        `}};S=k([Object(i.c)("ui-contact")],S);class C extends g{get head(){return{title:"About",description:"",type:"page",image:"",slug:"#!about"}}render(){return i.d`
        <style>
        .cv { color: var(--elara-secondary); cursor: pointer; }
        .about { margin-bottom: 2em }
        .prev, .next { cursor: pointer; font-weight: bold; transition: color .3s;}
        .prev:hover, .next:hover {
            color: var(--elara-primary);
        }
        .pagination {
            display: flex;
            align-items: center;
            justify-content: space-between;
            user-select: none;
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
                    <a role="link" class="cv" @click=${()=>c.Routing.redirect("/assets/resume.pdf")}>CV</a>.</p>
                </div>
            </div>
            <div class="pagination">
                <a class="prev" @click=${()=>c.Routing.navigate("home")}>< Work</a>
                <a class="next" @click=${()=>c.Routing.navigate("projects")}>> Projects</a>
            </div>
        </div>
        `}}C.is="ui-about",customElements.define(C.is,C);var P=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))};class j extends g{get head(){return{title:"Projects",description:"",type:"page",image:"",slug:"#!projects"}}get projects(){return[{name:"Persin Conseil",slug:"persin",image:"/assets/projects/persin.jpg",status:"published",repository:"https://github.com/Ghostfly/persin-conseil",url:"https://www.persin.fr",tags:["Lit-Element","Offline ready","structured data","PWA 100%"]},{name:"Ghostfly.dev",slug:"ghostfly",image:"/assets/me.svg",repository:"https://github.com/Ghostfly/ghostfly.dev/tree/master",status:"Work in progress",url:null,tags:["Elara","LitElement","Github Pages"]},{name:"Dandy Costard",slug:"dandy",image:"/assets/projects/dandy.svg",repository:null,status:"Work in progress",url:null,tags:["E-Commerce","Elara","Custom menswear"]},{name:"Cheno",slug:"cheno",image:"/assets/projects/cheno.svg",status:"published",repository:null,url:"https://www.cheno.fr",tags:["Elara","HTML5","CSS3","TypeScript"]},{name:"Dobrunia Design",slug:"dobrunia",image:"/assets/projects/dobrunia.png",status:"published",repository:null,url:"https://www.dobruniadesign.com",tags:["Élara","WordPress","Design"]}]}_onImageLoaded(e){return P(this,void 0,void 0,(function*(){const t=e.target;if(t){const e=o(500,!0);t.classList.add("shown");const n=t.animate(e.effect,e.options);yield n.finished,t.removeEventListener("load",this._onImageLoaded)}}))}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return P(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.updateComplete,this.images=this.querySelectorAll("img"),this.images.forEach(e=>{e.addEventListener("load",this._onImageLoaded)})}))}disconnectedCallback(){super.disconnectedCallback()}_card(e){return i.d`
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
                    <h3 class="${e.slug} ${e.url?"with-link":"normal"}" role="${e.url?"link":"title"}"  @click=${()=>{e.url&&c.Routing.redirect(e.url)}}>${e.name}</h3>
                    <div class="tags">
                        ${e.tags.join(", ")}
                    </div>
                    <br />
                    <div class="status">
                        ${e.repository?i.d`<svg @click=${()=>{c.Routing.redirect(e.repository)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>`:i.d``}
                        ${e.status}
                    </div>
                </div>
                <div class="right">
                    ${e.image?i.d`
                    <img sizing="contain" src="${e.image}"></img>
                    `:i.d``}
                </div>
            </div>
        </section>`}render(){return i.d`
        <div class="projects">
            <h1>${this.head.title}</h1>
            ${this.projects.map(e=>this._card(e))}

            <a class="prev" @click=${()=>c.Routing.navigate("about")}>< About</a>
            <a class="next" @click=${()=>c.Routing.navigate("contact")}>> Contact</a>
        </div>
        `}}j.is="ui-projects",customElements.define(j.is,j);var O=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};class E extends u{constructor(){super(...arguments),this.height=300,this.width=300}firstUpdated(){const e=this._canvas.getContext("2d");window.requestAnimationFrame(()=>{this._tree(e,600,600,80,-Math.PI/2,13,13)})}static get styles(){return i.b`
        #tree {
            position: fixed;
        }
        `}render(){return i.d`<canvas id="tree" height="${this.height}" width="${this.width}"></canvas>`}_tree(e,t,n,i,r,o,s){const a=Math.random;let l,d;const h=2*Math.PI/4;e.beginPath(),e.moveTo(t,n);const u=t+i*Math.cos(r),p=n+i*Math.sin(r);e.lineCap="round",e.lineWidth=s,e.lineTo(u,p),e.strokeStyle=o<=2?"#1b1b1b":"night"===c.UI.dayOrNight()?"#f0f0f0":"#333",e.stroke();const f=o-1;if(!f)return;const g=2*a()+1;s*=.7;for(let t=0;t<g;t++)d=r+a()*h-.5*h,l=i*(.7+.3*a()),this._tree(e,u,p,l,d,f,s)}get _canvas(){return this.shadowRoot.querySelector("#tree")}}E.is="ui-tree",O([Object(i.e)({type:Number,reflect:!0})],E.prototype,"height",void 0),O([Object(i.e)({type:Number,reflect:!0})],E.prototype,"width",void 0),customElements.define(E.is,E);var R=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let N=class extends u{constructor(e){super(),this.asked=e}static get styles(){return i.b`
        h1, p {
            user-select: none;
            z-index: 1;
        }

        a {
            color: var(--elara-primary);
            text-decoration: none;
            cursor: pointer;
        }
        `}render(){return i.d`
        <div>
            <h1>You are lost !</h1>
            <p>You asked for : ${this.asked}.</p>
            <a @click=${()=>c.Routing.navigate("home")}><mwc-icon icon="home"></mwc-icon> Homepage</a>
            <ui-tree .width=${1366} .height=${768}></ui-tree>
        </div>
        `}};R([Object(i.e)({type:String,reflect:!0})],N.prototype,"asked",void 0),N=R([Object(i.c)("ui-not-found")],N);var M=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};class $ extends u{constructor(){super(...arguments),this.items=[],this.route=null,this.shown=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return i.b`
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
        `}render(){return i.d`
        <div id="menu" class="menu-content ${!0===this.shown?"shown":""}">
			<mwc-icon-button class="menu" icon="clear" aria-label="Close menu" @click=${()=>c.UI.elara().menu(!0)}></mwc-icon-button>
			${this.items.map(e=>this._link(e))}
		</div>
        `}_link({route:e,name:t}){return i.d`
		<a class="item ${this.route===e?"active":""}" @click=${()=>c.UI.elara().show(e)}>${t}</a>
		`}}$.is="ui-menu",M([Object(i.e)({type:Array,reflect:!1})],$.prototype,"items",void 0),M([Object(i.e)({type:String,reflect:!0})],$.prototype,"route",void 0),M([Object(i.e)({type:Boolean,reflect:!0})],$.prototype,"shown",void 0),customElements.define($.is,$);var T=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))};Promise.all([n.e(1),n.e(2)]).then(n.bind(null,20));class A extends h{get loadables(){return[]}get bootstrap(){return c.Bootstrap.promise(this.loadables,this)}show(e){return T(this,void 0,void 0,(function*(){c.Routing.navigate(e),yield this._hideMenu()}))}menu(e){return T(this,void 0,void 0,(function*(){return e?this._hideMenu():this._showMenu()}))}firstUpdated(){const e=new HashChangeEvent("hashchange",{newURL:location.hash,oldURL:null});this._onHashChange(e)}static get styles(){return[i.b`
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
		`]}get links(){return[{route:"home",name:"Work"},{route:"about",name:"About"},{route:"projects",name:"Projects"},{route:"contact",name:"Contact"}]}render(){return i.d`
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
		`}_showMenu(){return T(this,void 0,void 0,(function*(){if(this._menu.shown)return void(yield this._hideMenu());if(this._menuFade)return;this._content.classList.contains("hidden")||this._content.classList.add("hidden"),!1===this._menu.shown&&(this._menu.shown=!0);const e=o(300,!0);this._menuFade=this._menu.animate(e.effect,e.options),yield this._menuFade.finished,this._menuFade=null}))}_hideMenu(){return T(this,void 0,void 0,(function*(){if(this._menuFade)return;const e=o(300,!1);this._menuFade=this._menu.animate(e.effect,e.options),yield this._menuFade.finished,this._content.classList.remove("hidden"),this._menu.shown=!1,this._menuFade=null}))}}A.is="elara-app",customElements.define(A.is,A)}]);
//# sourceMappingURL=main.ec025c4c.js.map