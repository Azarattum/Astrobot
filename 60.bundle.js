(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{2:function(t,e,n){"use strict";n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(6),s=n(34),i=n(7),o=n(5),a=n(11);
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
function h(t,e){let n=t;if(Object(o.A)(t))return"string"===e?[]:[t.length];if("object"==typeof t&&"texture"in t){const e=t.channels||"RGBA";return[t.height,t.width*e.length]}if(!Array.isArray(t))return[];const r=[];for(;Array.isArray(n)||Object(o.A)(n)&&"string"!==e;)r.push(n.length),n=n[0];return Array.isArray(t)&&Object(s.b)().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function t(e,n,r){if(r=r||[],!Array.isArray(e)&&!Object(o.A)(e))return void Object(o.b)(0===n.length,()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${n[0]} elements`);Object(o.b)(n.length>0,()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${e.length} elements`),Object(o.b)(e.length===n[0],()=>`Element arr[${r.join("][")}] should have ${n[0]} elements, but has ${e.length} elements`);const s=n.slice(1);for(let n=0;n<e.length;++n)t(e[n],s,r.concat(n))}(t,r,[]),r}function u(t,e,n,r){if("string_or_numeric"!==t){if(null==t)throw new Error("Expected dtype cannot be null.");if("numeric"!==t&&t!==e||"numeric"===t&&"string"===e)throw new Error(`Argument '${n}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`)}}function c(t,e,n,s="numeric"){if(t instanceof i.a)return u(s,t.dtype,e,n),t;let c=Object(o.r)(t);if("string"!==c&&["bool","int32","float32"].indexOf(s)>=0&&(c=s),u(s,c,e,n),null==t||!Object(o.A)(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t){const r=null==t?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}const l=h(t,c);Object(o.A)(t)||Array.isArray(t)||(t=[t]);const d="string"!==c?Object(a.toTypedArray)(t,c):Object(o.m)(t,[],!0);return r.a.makeTensor(d,l,c)}function l(t,e,n,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((t,s)=>c(t,`${e}[${s}]`,n,r))}},243:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return i}));var r=n(6);n(2),n(5),n(11);function s(){return 32===r.a.backend.floatPrecision()?.001:.1}function i(t,e,n){if(null==n&&(n=s()),!o(t,e,n))throw new Error(`Numbers differ: actual === ${t}, expected === ${e}`);"undefined"!=typeof expect&&expect().nothing()}function o(t,e,n){return!isFinite(t)&&!isFinite(e)||!(isNaN(t)||isNaN(e)||Math.abs(t-e)>n)}},36:function(t,e,n){"use strict";n.r(e),n.d(e,"makeTypesMatch",(function(){return o})),n.d(e,"assertTypesMatch",(function(){return a})),n.d(e,"isTensorInList",(function(){return h})),n.d(e,"getTensorsInContainer",(function(){return u}));var r=n(7),s=n(165),i=n(5);
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
function o(t,e){if(t.dtype===e.dtype)return[t,e];const n=Object(s.b)(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function a(t,e){Object(i.b)(t.dtype===e.dtype,()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`)}function h(t,e){return e.some(e=>e.id===t.id)}function u(t){const e=[];return function t(e,n,s){if(null==e)return;if(e instanceof r.a)return void n.push(e);if(i=e,!Array.isArray(i)&&"object"!=typeof i)return;var i;const o=e;for(const e in o){const r=o[e];s.has(r)||(s.add(r),t(r,n,s))}}(t,e,new Set),e}},563:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(5);
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
 */function s(t,e,n,s){const h=Object(r.j)(e),u=function(t,e,n,s){const o=Object(r.O)(e),h=s[s.length-1],u=new Array(h).fill(0),c=e.length,l="complex64"===n?a(t):t;if(c>1)for(let t=0;t<o/h;t++){const e=t*h;for(let t=0;t<h;t++)u[t]=Math.max(u[t],i(l[e+t],0,n).length)}return u}(t,e,n,h),c=e.length,l=function t(e,n,r,s,h,u=!0){const c="complex64"===r?2:1,l=n[0],d=n.length;if(0===d){if("complex64"===r){return[i(a(e)[0],0,r)]}return"bool"===r?[o(e[0])]:[e[0].toString()]}if(1===d){if(l>20){const t=3*c;let n=Array.from(e.slice(0,t)),s=Array.from(e.slice((l-3)*c,l*c));return"complex64"===r&&(n=a(n),s=a(s)),["["+n.map((t,e)=>i(t,h[e],r)).join(", ")+", ..., "+s.map((t,e)=>i(t,h[l-3+e],r)).join(", ")+"]"]}return["["+("complex64"===r?a(e):Array.from(e)).map((t,e)=>i(t,h[e],r)).join(", ")+"]"]}const f=n.slice(1),p=s.slice(1),y=s[0]*c,b=[];if(l>20){for(let n=0;n<3;n++){const s=n*y,i=s+y;b.push(...t(e.slice(s,i),f,r,p,h,!1))}b.push("...");for(let n=l-3;n<l;n++){const s=n*y,i=s+y;b.push(...t(e.slice(s,i),f,r,p,h,n===l-1))}}else for(let n=0;n<l;n++){const s=n*y,i=s+y;b.push(...t(e.slice(s,i),f,r,p,h,n===l-1))}const g=2===d?",":"";b[0]="["+b[0]+g;for(let t=1;t<b.length-1;t++)b[t]=" "+b[t]+g;let m=",\n";for(let t=2;t<d;t++)m+="\n";return b[b.length-1]=" "+b[b.length-1]+"]"+(u?"":m),b}(t,e,n,h,u),d=["Tensor"];return s&&(d.push("  dtype: "+n),d.push("  rank: "+c),d.push(`  shape: [${e}]`),d.push("  values:")),d.push(l.map(t=>"    "+t).join("\n")),d.join("\n")}function i(t,e,n){let s;return s=Array.isArray(t)?parseFloat(t[0].toFixed(7))+" + "+parseFloat(t[1].toFixed(7))+"j":Object(r.z)(t)?`'${t}'`:"bool"===n?o(t):parseFloat(t.toFixed(7)).toString(),Object(r.L)(s,e)}function o(t){return 0===t?"false":"true"}function a(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}},7:function(t,e,n){"use strict";n.d(e,"b",(function(){return TensorBuffer})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"a",(function(){return Tensor})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return Variable}));var r=n(199),s=n(563),i=n(5),o=n(11);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
class TensorBuffer{constructor(t,e,n){if(this.dtype=e,this.shape=t.slice(),this.size=i.O(t),null!=n){const t=n.length;i.b(t===this.size,()=>`Length of values '${t}' does not match the size inferred by the shape '${this.size}'.`)}if("complex64"===e)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||i.n(e,this.size),this.strides=Object(i.j)(t)}set(t,...e){0===e.length&&(e=[0]),i.b(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const n=this.locToIndex(e);this.values[n]=t}get(...t){0===t.length&&(t=[0]);let e=0;for(const n of t){if(n<0||n>=this.shape[e]){const e=`Requested out of range element at ${t}.   Buffer shape=`+this.shape;throw new Error(e)}e++}let n=t[t.length-1];for(let e=0;e<t.length-1;++e)n+=this.strides[e]*t[e];return this.values[n]}locToIndex(t){if(0===this.rank)return 0;if(1===this.rank)return t[0];let e=t[t.length-1];for(let n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e}indexToLoc(t){if(0===this.rank)return[];if(1===this.rank)return[t];const e=new Array(this.shape.length);for(let n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return a().makeTensor(this.values,this.shape,this.dtype)}}let a=null,h=null,u=null;function c(t){a=t}function l(t){h=t}function d(t){u=t}class Tensor{constructor(t,e,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=i.O(t),this.strides=Object(i.j)(t),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return h.buffer(this.shape,this.dtype,t)}bufferSync(){return h.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return Object(i.U)(this.shape,t,"complex64"===this.dtype)}arraySync(){return Object(i.U)(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();const t=a().read(this.dataId);if("string"===this.dtype){const e=await t;try{return e.map(t=>o.decodeString(t))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),a().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=a().readSync(this.dataId);if("string"===this.dtype)try{return t.map(t=>o.decodeString(t))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await a().read(this.dataId);return"string"===this.dtype?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(a().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return h.print(this,t)}clone(){return this.throwIfDisposed(),h.clone(this)}toString(t=!1){const e=this.dataSync();return Object(s.a)(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),h.cast(this,t)}variable(t=!0,e,n){return this.throwIfDisposed(),a().makeVariable(this,t,e,n)}}function f(){return Object(r.a)("Tensor",()=>Tensor)}Object.defineProperty(Tensor,Symbol.hasInstance,{value:t=>!!t&&null!=t.data&&null!=t.dataSync&&null!=t.throwIfDisposed}),f();class Variable extends Tensor{constructor(t,e,n,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=e,this.name=n}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!i.a(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);a().disposeTensor(this),this.dataId=t.dataId,a().incRef(this,null)}dispose(){a().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Variable,Symbol.hasInstance,{value:t=>t instanceof Tensor&&null!=t.assign&&t.assign instanceof Function})}}]);