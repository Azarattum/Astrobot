(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{118:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(4);const i=Object(o.b)({sigmoid_:
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
function(t){const e={x:Object(s.a)(t,"x","sigmoid","float32")};return r.a.runKernel(a.Gc,e)}})},177:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));var r=n(91);
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
 */function a(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function s(t,e,n){const a=1-t%2,s=new Float32Array(t);for(let r=0;r<t;++r){const o=2*Math.PI*r/(t+a-1);s[r]=e-n*Math.cos(o)}return Object(r.a)(s,"float32")}},211:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o}));var r=n(5);function a(t,e,n){const r=e.rank>1?e.shape[e.rank-1]:1,a=e.rank>1?e.rank-1:1,s="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+n.shape+`, indices.shape: ${e.shape}, shape: ${t}`+`, sliceDim: ${r}, and batchDim: ${a}.`;if(n.rank<a)throw new Error(s+` update.rank < ${a}. `);if(t.length<r+(n.rank-a))throw new Error(s+" Output shape length < "+(r+(n.rank-a)));if(n.rank!==a+t.length-r)throw new Error(s+" update.rank != "+(a+t.length-r));for(let t=0;t<a;++t)if(n.shape[t]!==e.shape[t])throw new Error(s+` updates.shape[${t}] (${n.shape[t]}) != indices.shape[${t}] (${e.shape[t]}).`);for(let e=0;e<n.rank-a;++e)if(n.shape[e+a]!==t[e+r])throw new Error(s+` updates.shape[${e+a}] (${n.shape[e+a]}) != shape[${e+a}] (${t[e+a]})`)}function s(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if("int32"!==e.dtype)throw new Error("The dtype of 'indices' should be int32, but got dtype: "+e.dtype);if(n.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+n);if(0===n.length){if(0===e.size)throw new Error("Indices specified for empty output. indices shape: "+e.shape);if(0===t.size)throw new Error("Updates specified for empty output. updates shape: "+t.shape)}a(n,e,t)}function o(t,e,n){const a=e.shape.length,s=a>1?e.shape[a-1]:1,o=n.length;let i=1;for(let t=s;t<o;++t)i*=n[t];const c=s<1?1:s;return{sliceRank:s,numUpdates:Object(r.O)(e.shape)/c,sliceSize:i,strides:[...Object(r.j)(n.slice(0,s)),1],outputSize:Object(r.O)(n)}}},221:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(6),a=n(3),s=n(2),o=n(5),i=n(4),c=n(9);const u=Object(i.b)({searchSorted_:function(t,e,n="left"){const i=Object(s.a)(t,"sortedSequence","searchSorted"),u=Object(s.a)(e,"values","searchSorted"),h=i.shape[i.shape.length-1],p=u.shape[u.shape.length-1],b=Object(c.a)(i,[-1,h]),f=Object(c.a)(u,[-1,p]);if(b.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(b.shape[0]!==f.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Object(o.O)(f.shape)>=2147483648)throw new Error("values tensor size must less than 2147483648");if(b.shape[1]>=2147483648)throw new Error("trailing dim_size must less than 2147483648 for int32 output type, was "+b.shape[1]);const d={sortedSequence:b,values:f},l={side:n};return r.a.runKernel(a.Dc,d,l)}})},260:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(4);const i=Object(o.b)({round_:
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
function(t){const e={x:Object(s.a)(t,"x","round")};return r.a.runKernel(a.Ac,e)}})},261:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(4);const i=Object(o.b)({rsqrt_:
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
function(t){const e={x:Object(s.a)(t,"x","rsqrt","float32")};return r.a.runKernel(a.Bc,e)}})},265:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));
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
const r=1.7580993408473768,a=1.0507009873554805},27:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(5),a=n(93);
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
function s(t,e){if((Object(r.A)(t)&&"string"!==e||Array.isArray(t))&&"complex64"!==e)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===e&&Object(r.A)(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Object(a.a)(t,[],[],e)}},304:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(4);const i=Object(o.b)({selu_:
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
function(t){const e={x:Object(s.a)(t,"x","selu")};return r.a.runKernel(a.Fc,e)}})},305:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(2),a=n(5),s=n(123),o=n(169),i=n(4),c=n(9);const u=Object(i.b)({separableConv2d_:function(t,e,n,i,u,h=[1,1],p="NHWC"){const b=Object(r.a)(t,"x","separableConv2d"),f=Object(r.a)(e,"depthwiseFilter","separableConv2d"),d=Object(r.a)(n,"pointwiseFilter","separableConv2d");let l=b,w=!1;if(3===b.rank&&(w=!0,l=Object(c.a)(b,[1,b.shape[0],b.shape[1],b.shape[2]])),"NCHW"===p)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");a.b(4===l.rank,()=>`Error in separableConv2d: input must be rank 4, but got rank ${l.rank}.`),a.b(4===f.rank,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${f.rank}.`),a.b(4===d.rank,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${f.rank}.`),a.b(1===d.shape[0],()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${d.shape[0]}.`),a.b(1===d.shape[1],()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${d.shape[1]}.`);const O=f.shape[2],j=f.shape[3];a.b(d.shape[2]===O*j,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${O*j}, but got ${d.shape[2]}.`);const g=Object(o.a)(l,f,i,u,p,h),m=Object(s.a)(g,d,1,"valid",p);return w?Object(c.a)(m,[m.shape[1],m.shape[2],m.shape[3]]):m}})},364:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(4),a=n(177);const s=Object(r.b)({hannWindow_:
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
function(t){return Object(a.a)(t,.5,.5)}})},365:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(58),a=n(143),s=n(4),o=n(9),i=n(44),c=n(185);const u=Object(s.b)({frame_:
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
function(t,e,n,s=!1,u=0){let h=0;const p=[];for(;h+e<=t.size;)p.push(Object(i.a)(t,h,e)),h+=n;if(s)for(;h<t.size;){const s=h+e-t.size,o=Object(r.a)([Object(i.a)(t,h,e-s),Object(a.a)([s],u)]);p.push(o),h+=n}return 0===p.length?Object(c.a)([],[0,e]):Object(o.a)(Object(r.a)(p),[p.length,e])}})},434:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(4);const i=Object(o.b)({sign_:
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
function(t){const e={x:Object(s.a)(t,"x","sign")};return r.a.runKernel(a.Hc,e)}})},503:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(7),a=n(2),s=n(5);const o=
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
async function(t,e){const n=Object(a.a)(t,"x","setdiff1d"),o=Object(a.a)(e,"y","setdiff1d");s.b(n.dtype===o.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${o.dtype}).`),s.b(1===n.rank,()=>`x should be 1D tensor, but got x (${n.shape}).`),s.b(1===o.rank,()=>`y should be 1D tensor, but got y (${o.shape}).`);const i=await n.data(),c=await o.data(),u=new Set(c);let h=0;for(let t=0;t<i.length;t++)u.has(i[t])||h++;const p=new r.b([h],n.dtype),b=new r.b([h],"int32");for(let t=0,e=0;t<i.length;t++)u.has(i[t])||(p.values[e]=i[t],b.values[e]=t,e++);return[p.toTensor(),b.toTensor()]}},516:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(6),a=n(3),s=n(2),o=n(5),i=n(4),c=n(211);const u=Object(i.b)({scatterND_:
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
function(t,e,n){Object(o.c)(n);const i=Object(s.a)(t,"indices","scatterND","int32"),u=Object(s.a)(e,"updates","scatterND");c.b(u,i,n);const h={indices:i,updates:u},p={shape:n};return r.a.runKernel(a.Cc,h,p)}})},541:function(t,e,n){"use strict";n.r(e),n.d(e,"segOpComputeOptimalWindowSize",(function(){return s})),n.d(e,"computeOutShape",(function(){return o})),n.d(e,"collectGatherOpShapeInfo",(function(){return i}));var r=n(5),a=n(311);
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
function s(t,e){let n,s=!1;for(t<=a.a?(n=t,s=!0):n=Object(r.G)(t,Math.floor(Math.sqrt(t)));!s;)n>e||n===t?s=!0:n=Object(r.G)(t,n+1);return n}function o(t,e,n){const r=[],a=t.length;for(let s=0;s<a;s++)s!==e?r.push(t[s]):r.push(n);return r}function i(t,e,n,r){const a=e.shape.length,s=t.shape.length;if(0!==r&&(r<-a||r>a))throw new Error(`Expect batchDims in the range of [-${a}, ${a}], but got ${r}`);if(r<0&&(r+=a),r>s)throw new Error(`batchDims (${r}) must be less than rank(x) (\n    ${s}).`);if(n<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let n=0;n<r;++n)if(t.shape[n]!==e.shape[n])throw new Error(`x.shape[${n}]: ${t.shape[n]} should be equal to indices.shape[${n}]: ${e.shape[n]}.`);const o=t.shape[n],i=[];let c=1,u=1,h=1;for(let e=0;e<r;++e)i.push(t.shape[e]),c*=t.shape[e];for(let e=r;e<n;e++)i.push(t.shape[e]),u*=t.shape[e];for(let t=r;t<a;t++)i.push(e.shape[t]);for(let e=n+1;e<s;e++)i.push(t.shape[e]),h*=t.shape[e];return{batchSize:c,sliceSize:h,outerSize:u,dimSize:o,outputShape:i}}},568:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(4),a=n(177);const s=Object(r.b)({hammingWindow_:
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
function(t){return Object(a.a)(t,.54,.46)}})},569:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(10),a=n(4),s=n(177),o=n(197),i=n(365),c=n(364);const u=Object(a.b)({stft_:
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
function(t,e,n,a,u=c.a){null==a&&(a=Object(s.b)(e));const h=Object(i.a)(t,e,n),p=Object(r.a)(h,u(e));return Object(o.a)(p,a)}})}}]);