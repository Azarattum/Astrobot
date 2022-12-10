(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{142:function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var r=e(6),a=e(3),o=e(2),c=e(5),s=e(565),i=e(4),u=e(9);const b=Object(i.b)({batchNorm_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
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
function(t,n,e,i,b,l){null==l&&(l=.001);const f=Object(o.a)(t,"x","batchNorm"),h=Object(o.a)(n,"mean","batchNorm"),d=Object(o.a)(e,"variance","batchNorm");let m,k;null!=b&&(m=Object(o.a)(b,"scale","batchNorm")),null!=i&&(k=Object(o.a)(i,"offset","batchNorm")),c.b(h.rank===d.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),c.b(null==k||h.rank===k.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),c.b(null==m||h.rank===m.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const p={x:Object(s.a)(f),scale:m,offset:k,mean:h,variance:d},g={varianceEpsilon:l},O=r.a.runKernel(a.lb,p,g);return Object(u.a)(O,f.shape)}})},168:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(6),a=e(3),o=e(2),c=e(5),s=e(4);const i=Object(s.b)({batchToSpaceND_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
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
function(t,n,e){const s=Object(o.a)(t,"x","batchToSpaceND"),i=n.reduce((t,n)=>t*n);c.b(s.rank>=1+n.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${n.length}`),c.b(e.length===n.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${n.length}`),c.b(s.shape[0]%i==0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${n.join(" * ")} === ${i}`);const u={x:s},b={blockShape:n,crops:e};return r.a.runKernel(a.t,u,b)}})},181:function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var r=e(6),a=e(3),o=e(2),c=e(5),s=e(126),i=e(4),u=e(9);const b=Object(i.b)({broadcastTo_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
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
function(t,n){let e=Object(o.a)(t,"broadcastTo","x");const i=e.shape;if(Object(c.c)(n),n.length<e.rank)throw new Error(`broadcastTo(): shape.length=${n.length} < input.rank=${e.rank}.`);if(n.length>e.rank){const t=e.shape.slice();for(;t.length<n.length;)t.unshift(1);e=Object(u.a)(e,t)}const b=e.shape,l=Array.from(n);for(let t=n.length-1;t>=0;t--)if(b[t]===n[t])l[t]=1;else if(1!==e.shape[t])throw new Error(`broadcastTo(): [${i}] cannot be broadcast to [${n}].`);if(0===l.map((t,n)=>t>1?n:-1).filter(t=>t>=0).length)return Object(s.a)(e);const f={x:e},h={reps:l};return r.a.runKernel(a.gd,f,h)}})},19:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(6),a=e(3),o=e(2),c=e(5),s=e(4);const i=Object(s.b)({cast_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function(t,n){const e=Object(o.a)(t,"x","cast");if(!c.B(n))throw new Error("Failed to cast to unknown dtype "+n);if("string"===n&&"string"!==e.dtype||"string"!==n&&"string"===e.dtype)throw new Error("Only strings can be casted to strings");const s={x:e},i={dtype:n};return r.a.runKernel(a.x,s,i)}})},25:function(t,n,e){"use strict";
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
function r(t,n){const e=t.length,r=[];for(let a=0;a<e;a++){const o=e-1-a,c=t[o]||1;(n[n.length-1-a]||1)>1&&1===c&&r.unshift(o)}return r}function a(t,n){const e=[];for(let r=0;r<n.length;r++){const a=t[t.length-r-1],o=n.length-r-1,c=n[o];(null==a||1===a&&c>1)&&e.unshift(o)}return e}function o(t,n){const e=[],r=Math.max(t.length,n.length);for(let a=0;a<r;a++){let r=t[t.length-a-1];null==r&&(r=1);let o=n[n.length-a-1];if(null==o&&(o=1),1===r)e.unshift(o);else if(1===o)e.unshift(r);else{if(r!==o){throw Error(`Operands could not be broadcast together with shapes ${t} and ${n}.`)}e.unshift(r)}}return e}e.r(n),e.d(n,"getBroadcastDims",(function(){return r})),e.d(n,"getReductionAxes",(function(){return a})),e.d(n,"assertAndGetBroadcastShape",(function(){return o}))},286:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(6),a=e(3),o=e(2),c=e(5),s=e(4);const i=Object(s.b)({bincount_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
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
function(t,n,e){const s=Object(o.a)(t,"x","bincount"),i=Object(o.a)(n,"weights","bincount");c.b("int32"===s.dtype,()=>"Error in bincount: input dtype must be int32, but got "+s.dtype),c.b(e>=0,()=>`size must be non-negative, but got ${e}.`),c.b(i.size===s.size||0===i.size,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: `+i.shape+".");const u={x:s,weights:i},b={size:e};return r.a.runKernel(a.u,u,b)}})},423:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(6),a=e(3),o=e(2),c=e(4);const s=Object(c.b)({ceil_:
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
function(t){const n={x:Object(o.a)(t,"x","ceil","float32")};return r.a.runKernel(a.y,n)}})},466:function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var r=e(2),a=e(22),o=e(58),c=e(43),s=e(10),i=e(4),u=e(118),b=e(44),l=e(241);const f=Object(i.b)({basicLSTMCell_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
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
function(t,n,e,i,f,h){const d=Object(r.a)(t,"forgetBias","basicLSTMCell"),m=Object(r.a)(n,"lstmKernel","basicLSTMCell"),k=Object(r.a)(e,"lstmBias","basicLSTMCell"),p=Object(r.a)(i,"data","basicLSTMCell"),g=Object(r.a)(f,"c","basicLSTMCell"),O=Object(r.a)(h,"h","basicLSTMCell"),j=Object(o.a)([p,O],1),w=Object(c.a)(j,m),v=Object(a.a)(w,k),x=v.shape[0],y=v.shape[1]/4,E=[x,y],N=Object(b.a)(v,[0,0],E),$=Object(b.a)(v,[0,y],E),D=Object(b.a)(v,[0,2*y],E),T=Object(b.a)(v,[0,3*y],E),C=Object(a.a)(Object(s.a)(Object(u.a)(N),Object(l.a)($)),Object(s.a)(g,Object(u.a)(Object(a.a)(d,D))));return[C,Object(s.a)(Object(l.a)(C),Object(u.a)(T))]}})},467:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(2),a=e(5),o=e(142),c=e(4);const s=Object(c.b)({batchNorm2d_:function(t,n,e,c,s,i){const u=Object(r.a)(t,"x","batchNorm"),b=Object(r.a)(n,"mean","batchNorm"),l=Object(r.a)(e,"variance","batchNorm");let f,h;return null!=s&&(f=Object(r.a)(s,"scale","batchNorm")),null!=c&&(h=Object(r.a)(c,"offset","batchNorm")),a.b(2===u.rank,()=>"Error in batchNorm2D: x must be rank 2 but got rank "+u.rank+"."),a.b(2===b.rank||1===b.rank,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${b.rank}.`),a.b(2===l.rank||1===l.rank,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),null!=f&&a.b(2===f.rank||1===f.rank,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${f.rank}.`),null!=h&&a.b(2===h.rank||1===h.rank,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${h.rank}.`),Object(o.a)(u,b,l,h,f,i)}})},468:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(2),a=e(5),o=e(142),c=e(4);const s=Object(c.b)({batchNorm3d_:function(t,n,e,c,s,i){const u=Object(r.a)(t,"x","batchNorm"),b=Object(r.a)(n,"mean","batchNorm"),l=Object(r.a)(e,"variance","batchNorm");let f,h;return null!=s&&(f=Object(r.a)(s,"scale","batchNorm")),null!=c&&(h=Object(r.a)(c,"offset","batchNorm")),a.b(3===u.rank,()=>"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."),a.b(3===b.rank||1===b.rank,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${b.rank}.`),a.b(3===l.rank||1===l.rank,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),null!=f&&a.b(3===f.rank||1===f.rank,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${f.rank}.`),null!=h&&a.b(3===h.rank||1===h.rank,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${h.rank}.`),Object(o.a)(u,b,l,h,f,i)}})},469:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(2),a=e(5),o=e(142),c=e(4);const s=Object(c.b)({batchNorm4d_:function(t,n,e,c,s,i){const u=Object(r.a)(t,"x","batchNorm"),b=Object(r.a)(n,"mean","batchNorm"),l=Object(r.a)(e,"variance","batchNorm");let f,h;return null!=s&&(f=Object(r.a)(s,"scale","batchNorm")),null!=c&&(h=Object(r.a)(c,"offset","batchNorm")),a.b(4===u.rank,()=>"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."),a.b(4===b.rank||1===b.rank,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${b.rank}.`),a.b(4===l.rank||1===l.rank,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),null!=f&&a.b(4===f.rank||1===f.rank,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${f.rank}.`),null!=h&&a.b(4===h.rank||1===h.rank,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${h.rank}.`),Object(o.a)(u,b,l,h,f,i)}})},470:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(6),a=e(3),o=e(2),c=e(4);const s=Object(c.b)({broadcastArgs_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
function(t,n){const e=Object(o.a)(t,"s0","broadcastArgs","int32"),c=Object(o.a)(n,"s1","broadcastArgs","int32");if(1!==e.rank)throw new Error("broadcastArgs(): first input must be a vector (rank=1). Has rank "+e.rank);if(1!==c.rank)throw new Error("broadcastArgs(): second input must be a vector (rank=1). Has rank "+c.rank);const s={s0:e,s1:c};return r.a.runKernel(a.v,s)}})},514:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(2),a=e(5),o=e(171),c=e(9),s=e(176),i=e(309);const u=
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
async function(t,n,e){const u=Object(r.a)(t,"tensor","boolMask"),b=Object(r.a)(n,"mask","boolMask","bool"),l=null==e?0:e,f=b.rank,h=u.shape;a.b(f>0,()=>"mask cannot be scalar"),a.e(h.slice(l,l+f),b.shape,"mask's shape must match the first K dimensions of tensor's shape,");let d=1;for(let t=l;t<l+f;t++)d*=h[t];const m=h.slice(0,l).concat([d],h.slice(l+f)),k=Object(c.a)(u,m),p=Object(c.a)(b,[-1]),g=await Object(i.a)(p),O=Object(s.a)(g,[1]),j=Object(o.a)(k,O,l);return t!==u&&u.dispose(),n!==b&&b.dispose(),O.dispose(),k.dispose(),p.dispose(),g.dispose(),j}},528:function(t,n,e){"use strict";e.r(n),e.d(n,"fromPixelsAsync",(function(){return m})),e.d(n,"toPixels",(function(){return k})),e.d(n,"fromPixels",(function(){return p}));var r=e(6),a=e(34),o=e(3),c=e(120),s=e(7),i=e(2),u=e(19),b=e(4),l=e(306);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
let f;function h(t,n=3){if(n>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==t)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let e=!1,a=!1,s=!1,i=!1,u=!1,b=!1;if(t.data instanceof Uint8Array)e=!0;else if("undefined"!=typeof ImageData&&t instanceof ImageData)a=!0;else if("undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement)s=!0;else if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement)i=!0;else if(null!=t.getContext)u=!0;else{if(!("undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap))throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+t.constructor.name);b=!0}if(null!=Object(c.b)(o.kb,r.a.backendName)){const e={pixels:t},a={numChannels:n};return r.a.runKernel(o.kb,e,a)}const[h,d]=s?[t.videoWidth,t.videoHeight]:[t.width,t.height];let m,k;if(u)m=t.getContext("2d").getImageData(0,0,h,d).data;else if(a||e)m=t.data;else if(i||s||b){if(null==f)if("undefined"==typeof document){if("undefined"==typeof OffscreenCanvas||"undefined"==typeof OffscreenCanvasRenderingContext2D)throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");f=new OffscreenCanvas(1,1).getContext("2d")}else f=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});f.canvas.width=h,f.canvas.height=d,f.drawImage(t,0,0,h,d),m=f.getImageData(0,0,h,d).data}if(4===n)k=new Int32Array(m);else{const t=h*d;k=new Int32Array(t*n);for(let e=0;e<t;e++)for(let t=0;t<n;++t)k[e*n+t]=m[4*e+t]}const p=[d,h,n];return Object(l.a)(k,p,"int32")}function d(t){return"undefined"!=typeof window&&"undefined"!=typeof ImageBitmap&&window.hasOwnProperty("createImageBitmap")&&!(t instanceof ImageBitmap)&&function(t){return null!=t&&0!==t.width&&0!==t.height}(t)&&!function(t){return null!=t&&t.data instanceof Uint8Array}(t)}async function m(t,n=3){let e=null;if(Object(a.b)().getBool("WRAP_TO_IMAGEBITMAP")&&d(t)){let n;try{n=await createImageBitmap(t,{premultiplyAlpha:"none"})}catch(t){n=null}e=null!=n&&n.width===t.width&&n.height===t.height?n:t}else e=t;return h(e,n)}async function k(t,n){let e=Object(i.a)(t,"img","toPixels");if(!(t instanceof s.a)){const t=e;e=Object(u.a)(t,"int32"),t.dispose()}if(2!==e.rank&&3!==e.rank)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const[r,a]=e.shape.slice(0,2),o=2===e.rank?1:e.shape[2];if(o>4||2===o)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+o);if("float32"!==e.dtype&&"int32"!==e.dtype)throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`);const c=await e.data(),b="float32"===e.dtype?255:1,l=new Uint8ClampedArray(a*r*4);for(let t=0;t<r*a;++t){const n=[0,0,0,255];for(let r=0;r<o;r++){const a=c[t*o+r];if("float32"===e.dtype){if(a<0||a>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${a}.`)}else if("int32"===e.dtype&&(a<0||a>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${a}.`);1===o?(n[0]=a*b,n[1]=a*b,n[2]=a*b):n[r]=a*b}const r=4*t;l[r+0]=Math.round(n[0]),l[r+1]=Math.round(n[1]),l[r+2]=Math.round(n[2]),l[r+3]=Math.round(n[3])}if(null!=n){n.width=a,n.height=r;const t=n.getContext("2d"),e=new ImageData(l,a,r);t.putImageData(e,0,0)}return e!==t&&e.dispose(),l}const p=Object(b.b)({fromPixels_:h})},565:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(9);function a(t){let n;return n=0===t.rank||1===t.rank?Object(r.a)(t,[1,1,1,t.size]):2===t.rank?Object(r.a)(t,[1,1,t.shape[0],t.shape[1]]):3===t.rank?Object(r.a)(t,[1,t.shape[0],t.shape[1],t.shape[2]]):t,n}},87:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(7),a=e(5);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function o(t,n="float32",e){return n=n||"float32",a.c(t),new r.b(t,n,e)}}}]);