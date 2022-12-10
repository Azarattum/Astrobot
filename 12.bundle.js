(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1093:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));
/** @license See the LICENSE file. */
const r="4.1.0"},12:function(t,n,e){"use strict";e.d(n,"j",(function(){return o})),e.d(n,"a",(function(){return s})),e.d(n,"e",(function(){return a})),e.d(n,"m",(function(){return u})),e.d(n,"o",(function(){return c})),e.d(n,"p",(function(){return f})),e.d(n,"n",(function(){return l})),e.d(n,"l",(function(){return d})),e.d(n,"g",(function(){return p})),e.d(n,"k",(function(){return g})),e.d(n,"q",(function(){return b})),e.d(n,"h",(function(){return y})),e.d(n,"d",(function(){return m})),e.d(n,"c",(function(){return w})),e.d(n,"b",(function(){return O})),e.d(n,"f",(function(){return j})),e.d(n,"i",(function(){return N}));var r=e(0),i=e(8);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function o(t,n){if(Array.isArray(t)){let e=[];for(let r=0;r<n;r++)e=e.concat(t);return e}{const e=new Array(n);return e.fill(t),e}}function s(t,n){if(!t)throw new i.a(n)}function a(t,n){let e=0;for(const r of t)r===n&&e++;return e}function u(t){return 1===t.length?t[0]:t}function c(t){return Array.isArray(t)?t:[t]}function f(t){const n=t.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return"_"!==n[0]?n:"private"+n}function l(t){return t.length<=1||-1===t.indexOf("_")?t:t.replace(/[_]+(\w|$)/g,(t,n)=>n.toUpperCase())}let h={};function d(t){if(null==t)return null;const n={};return n.className=t.getClassName(),n.config=t.getConfig(),n}function p(t,n={},e={},r="object",o=!1){if("string"==typeof t){const o=t;let s;if(o in e)s=e[o];else if(o in h)s=h[o];else if(s=n[o],null==s)throw new i.e(`Unknown ${r}: ${t}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return s}{const s=t;if(null==s.className||null==s.config)throw new i.e(r+": Improper config format: "+JSON.stringify(s)+".\n'className' and 'config' must set.");const a=s.className;let u,c;if(a in e?[u,c]=e[a]:a in h?[u,c]=h.className:a in n&&([u,c]=n[a]),null==u)throw new i.e(`Unknown ${r}: ${a}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(null!=c){const t={};for(const n of Object.keys(h))t[n]=h[n];for(const n of Object.keys(e))t[n]=e[n];s.config.customObjects=t;const n=Object.assign({},h);for(const t of Object.keys(e))h[t]=e[t];!function t(n){if(null!=n&&"object"==typeof n)if(Array.isArray(n))n.forEach(n=>t(n));else{const e=Object.keys(n);for(const r of e){const e=n[r];null!=e&&"object"==typeof e&&(Array.isArray(e)||"ndarray"!==e.type||"number"!=typeof e.value?t(e):n[r]=e.value)}}}(s.config);const r=c(u,s.config,e,o);return h=Object.assign({},n),r}{const t=Object.assign({},h);for(const t of Object.keys(e))h[t]=e[t];const n=new u(s.config);return h=Object.assign({},t),n}}}function g(t,n){return-1*function(t,n){return t<n?-1:t>n?1:0}(t,n)}function b(t){if(null==t)return t;const n=[];for(const e of t)-1===n.indexOf(e)&&n.push(e);return n}function y(t){if(null==t)throw new i.e("Invalid value in obj: "+JSON.stringify(t));for(const n in t)if(t.hasOwnProperty(n))return!1;return!0}function m(t,n,e){if(null!=e&&t.indexOf(e)<0)throw new i.e(`${e} is not a valid ${n}.  Valid values are ${t} or null/undefined.`)}function w(t,n,e=0,r=1/0){return s(e>=0),s(r>=e),Array.isArray(t)&&t.length>=e&&t.length<=r&&t.every(t=>typeof t===n)}function O(t,n){Array.isArray(t)?(r.Hf.assert(t.length>0,()=>n+" is unexpectedly an empty array."),t.forEach((t,e)=>O(t,`element ${e+1} of ${n}`))):r.Hf.assert(Number.isInteger(t)&&t>0,()=>`Expected ${n} to be a positive integer, but got `+function t(n){return null===n?"null":Array.isArray(n)?"["+n.map(n=>t(n)).join(",")+"]":"string"==typeof n?`"${n}"`:""+n}(t)+".")}function j(t,n,e){let i,o=null!=e?e():r.Hf.now();return(...s)=>{const a=null!=e?e():r.Hf.now();return a-o<n||(o=a,i=t(...s)),i}}function N(t){return"relu"===t?"relu":"linear"===t?"linear":"elu"===t?"elu":null}},132:function(t,n,e){"use strict";e.d(n,"a",(function(){return LayerVariable})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return a}));var r=e(0),i=e(136),o=e(31);e(8);class LayerVariable{constructor(t,n="float32",e="Variable",s=!0,a=null){this.dtype=null==n?"float32":n,this.shape=t.shape,this.id=Object(i.a)(),e=null==e?"Variable":e,this.originalName=Object(o.e)(e),this.name=Object(o.f)(this.originalName),this.trainable_=s,this.constraint=a,this.val=r.If(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),function(t,n){if(t.shape.toString()!==n.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(t.shape)+" vs. "+JSON.stringify(n.shape))}(this.val,t),this.val.id!==t.id&&(this.val.assign(t),null!=this.constraint&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function s(t){return t.map(t=>t.read())}function a(t){t.forEach(t=>{t[0].write(t[1])})}},16:function(t,n,e){"use strict";e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return o})),e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return a}));var r=e(8);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function i(t){return Array.isArray(t)&&Array.isArray(t[0])}function o(t){return 0===t.length?[]:Array.isArray(t[0])?t:[t]}function s(t){let n;if(Array.isArray(t)){if(1!==t.length)throw new r.e("Expected Tensor length to be 1; got "+t.length);n=t[0]}else n=t;return n}function a(t){if(Array.isArray(t)&&Array.isArray(t[0])){if(1===t.length)return(t=t)[0];throw new r.e("Expected exactly 1 Shape; got "+t.length)}return t}},200:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return s}));var r=e(12);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function i(t,n,e){return("inboundNodes"===t||"outputLayers"===t||"inputLayers"===t)&&0===n&&"string"==typeof e}function o(t,n){if(null===t)return null;if("string"==typeof t)return r.n(t);if("number"==typeof t||"boolean"==typeof t)return t;if(t instanceof Array){const e=[],r=t.length;for(let s=0;s<r;++s){const r=t[s];i(n,s,r)?e.push(r):e.push(o(r,n))}return e}{const n={};for(const e of Object.keys(t)){const i=t[e];if("name"===e&&"string"==typeof i)n[e]=i;else{const t=r.n(e);n[t]=o(i,t)}}return n}}function s(t,n){if(null==t)return null;if("string"==typeof t)return r.p(t);if("number"==typeof t||"boolean"==typeof t)return t;if(t instanceof Array){const e=[],r=t.length;for(let o=0;o<r;++o){const r=t[o];i(n,o,r)?e.push(r):e.push(s(r,n))}return e}{const n={};for(const e of Object.keys(t)){const i=t[e],o=r.p(e);n[o]="name"!==e&&"className"!==e||"string"!=typeof i?s(i,e):i}return n}}},235:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));
/** @license See the LICENSE file. */
const r="4.1.0"},249:function(t,n,e){"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function r(t){let n=0;for(const e of t)0===e.shape.length?n+=1:n+=e.shape.reduce((t,n)=>t*n);return n}e.d(n,"a",(function(){return r}))},30:function(t,n,e){"use strict";e.d(n,"a",(function(){return L1L2})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return u})),e.d(n,"e",(function(){return f})),e.d(n,"b",(function(){return h}));var r=e(0),i=e(21),o=e(12);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function s(t){if(null!=t&&"object"!=typeof t)throw new Error("Argument to L1L2 regularizer's constructor is expected to be an object, but received: "+t)}class Regularizer extends r.df.Serializable{}class L1L2 extends Regularizer{constructor(t){super(),s(t),this.l1=null==t||null==t.l1?.01:t.l1,this.l2=null==t||null==t.l2?.01:t.l2,this.hasL1=0!==this.l1,this.hasL2=0!==this.l2}apply(t){return Object(r.Af)(()=>{let n=Object(r.Mf)([1]);return this.hasL1&&(n=Object(r.td)(n,Object(r.tf)(r.Ie(this.l1,Object(r.sd)(t))))),this.hasL2&&(n=Object(r.td)(n,Object(r.tf)(r.Ie(this.l2,i.s(t))))),r.Ye(n,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,n){return new t({l1:n.l1,l2:n.l2})}}function a(t){return s(t),new L1L2({l1:null!=t?t.l1:null,l2:0})}function u(t){return s(t),new L1L2({l2:null!=t?t.l2:null,l1:0})}L1L2.className="L1L2",r.df.registerClass(L1L2);const c={l1l2:"L1L2"};function f(t){return Object(o.l)(t)}function l(t,n={}){return Object(o.g)(t,r.df.SerializationMap.getMap().classNameMap,n,"regularizer")}function h(t){if(null==t)return null;if("string"==typeof t){return l({className:t in c?c[t]:t,config:{}})}return t instanceof Regularizer?t:l(t)}},447:function(t,n,e){"use strict";e.d(n,"a",(function(){return LruCache}));
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
class LruCache{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let n;return this.cache.has(t)&&(n=this.cache.get(t),this.cache.delete(t),this.cache.set(t,n)),n}put(t,n){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const t=this.cache.keys().next().value;this.cache.delete(t)}this.cache.set(t,n)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let n=0;n<this.maxEntries-t;n++){const t=this.cache.keys().next().value;this.cache.delete(t)}this.maxEntries=t}}},449:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));function r(t,n,e=!1){if(null==t||"object"!=typeof t||Object.getPrototypeOf(t)!==Object.prototype||!function t(n){if(null===n)return!0;if("object"==typeof n){if(Object.getPrototypeOf(n)===Object.prototype){const e=Object.keys(n);for(const r of e){if("string"!=typeof r)return!1;if(!t(n[r]))return!1}return!0}if(Array.isArray(n)){for(const e of n)if(!t(e))return!1;return!0}return!1}{const t=typeof n;return"string"===t||"number"===t||"boolean"===t}}(t))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const e=JSON.stringify(t);e.length>1048576&&console.warn(`User-defined metadata of model "${n}" is too large in size (length=${e.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= 1048576.`)}}},47:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return o})),e.d(n,"d",(function(){return s})),e.d(n,"c",(function(){return a})),e.d(n,"e",(function(){return u}));var r=e(8);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function i(t){return t===parseInt(t.toString(),10)}function o(t,n,e){null==n&&(n=0),null==e&&(e=t.length);let r=1;for(let i=n;i<e;++i)r*=t[i];return r}function s(t){if(0===t.length)return Number.NaN;let n=Number.POSITIVE_INFINITY;for(let e=0;e<t.length;e++){const r=t[e];r<n&&(n=r)}return n}function a(t){if(0===t.length)return Number.NaN;let n=Number.NEGATIVE_INFINITY;for(let e=0;e<t.length;e++){const r=t[e];r>n&&(n=r)}return n}function u(t,n){if(n<t)throw new r.e(`end (${n}) < begin (${t}) is forbidden.`);const e=[];for(let r=t;r<n;++r)e.push(r);return e}},54:function(t,n,e){"use strict";e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return u}));var r=e(8),i=e(12),o=e(47);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function s(t,n,e){if("number"==typeof t)return Object(i.j)(t,n);if(t.length!==n)throw new r.e(`The ${e} argument must be an integer or tuple of ${n} integers. Received: ${t.length} elements.`);for(let i=0;i<n;++i){const s=t[i];if(!Object(o.b)(s))throw new r.e(`The ${e} argument must be an integer or tuple of ${n} integers. Received: ${JSON.stringify(t)} including a non-integer number `+s)}return t}function a(t,n,e,r,i=1){if(null==t)return t;let o;return o="same"===e?t:t-(n+(n-1)*(i-1))+1,Math.floor((o+r-1)/r)}function u(t,n,e,i){if(null==t)return null;if("valid"===i)t=t*n+Object(o.c)([e-n,0]);else{if("same"!==i)throw new r.e(`Unsupport padding mode: ${i}.`);t*=n}return t}},703:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(0),i=e(50),o=e(8);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function s(t){const n={Adagrad:()=>r.Cf.adagrad(.01),Adadelta:()=>r.Cf.adadelta(1,.95,Object(i.a)()),Adam:()=>r.Cf.adam(.001,.9,.999,Object(i.a)()),Adamax:()=>r.Cf.adamax(.002,.9,.999,Object(i.a)(),0),RMSProp:()=>r.Cf.rmsprop(.001,.9,0,Object(i.a)()),SGD:()=>r.Cf.sgd(.01)};if(n.adagrad=n.Adagrad,n.adadelta=n.Adadelta,n.adam=n.Adam,n.adamax=n.Adamax,n.rmsprop=n.RMSProp,n.sgd=n.SGD,t in n)return n[t]();throw new o.e("Unknown Optimizer "+t)}},704:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(249);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function i(t,n,e,i=console.log){const u=function(t){let n=!0;const e=[],r=[];for(const n in t.nodesByDepth)e.push(t.nodesByDepth[n]);for(const t of e){if(t.length>1||1===t.length&&t[0].inboundLayers.length>1){n=!1;break}r.push(...t)}if(n)for(const e of t.layers){let t=!1;for(const i of e.inboundNodes)if(-1!==r.indexOf(i)){if(t){n=!1;break}t=!0}if(!n)break}return n}(t),c=["Layer (type)","Input Shape","Output shape","Param #"];let f;if(u?(n=n||90,e=e||[.32,.61,.89,1]):(n=n||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(t=>Math.floor(n*t))),!u){c.push("Receives inputs"),f=[];for(const n in t.nodesByDepth)f.push(...t.nodesByDepth[n])}i("_".repeat(n)),o(c,e,i),i("=".repeat(n));const l=t.layers;for(let t=0;t<l.length;++t)u?s(l[t],e,i):a(l[t],e,f,i),i((t===l.length-1?"=":"_").repeat(n));t.checkTrainableWeightsConsistency();const h=function(t){let n;n=null!=t.collectedTrainableWeights?Object(r.a)(t.collectedTrainableWeights):Object(r.a)(t.trainableWeights);return n}(t),d=Object(r.a)(t.nonTrainableWeights);i("Total params: "+(h+d)),i("Trainable params: "+h),i("Non-trainable params: "+d),i("_".repeat(n))}function o(t,n,e=console.log){let r="";for(let e=0;e<t.length;++e)e>0&&(r=r.slice(0,r.length-1)+" "),r+=t[e],r=r.slice(0,n[e]),r+=" ".repeat(n[e]-r.length);e(r)}function s(t,n,e){let r,i;try{i=t.inboundNodes.map(t=>JSON.stringify(t.inputShapes)).join(",")}catch(t){i="multiple"}try{r=JSON.stringify(t.outputShape)}catch(t){r="multiple"}o([`${t.name} (${t.getClassName()})`,i,r,t.countParams().toString()],n,e)}function a(t,n,e,r){let i,s;try{s=t.inboundNodes.map(t=>JSON.stringify(t.inputShapes)).join(",")}catch(t){s="multiple"}try{i=JSON.stringify(t.outputShape)}catch(t){i="multiple"}const a=[];for(const n of t.inboundNodes)if(!(null!=e&&e.length>0&&-1===e.indexOf(n)))for(let t=0;t<n.inboundLayers.length;++t){const e=n.inboundLayers[t].name,r=n.nodeIndices[t],i=n.tensorIndices[t];a.push(`${e}[${r}][${i}]`)}const u=t.name,c=t.getClassName(),f=0===a.length?"":a[0];o([`${u} (${c})`,s,i,t.countParams().toString(),f],n,r);for(let t=1;t<a.length;++t)o(["","","","",a[t]],n,r)}},92:function(t,n,e){"use strict";var r=e(0);e(543),e(1116);e.d(n,"b",(function(){return r.Yd})),e.d(n,"e",(function(){return r.ef})),e.d(n,"f",(function(){return r.wf})),e.d(n,"g",(function(){return r.Af}));var i=e(312);e.d(n,"a",(function(){return i.a})),e.d(n,"c",(function(){return i.b})),e.d(n,"d",(function(){return i.c}));var o=e(313),s=e(314),a=e(438),u=e(439),c=e(1093);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
r.Kf,a.a,u.a,s.a,i.d,o.a,c.a}}]);