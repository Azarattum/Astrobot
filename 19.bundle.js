(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1013:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),s=t(109),r=t(17),o=t(57);const c={kernelName:a.Sb,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:c}=e,{x:d}=n,{axis:u,keepDims:i}=c,p=d.shape.length,l=a.Hf.parseAxisParam(u,d.shape);let b=l;const m=a.Ad.getAxesPermutation(b,p);let f=d;null!=m&&(f=Object(o.a)({inputs:{x:d},backend:t,attrs:{perm:m}}),b=a.Ad.getInnerMostAxes(b.length,d.shape.length)),a.Ad.assertAxesAreInnerMostDims("min",b,p);const[h,k]=a.Ad.computeOutAndReduceShapes(f.shape,b),I=a.Hf.sizeFromShape(k),N=Object(r.a)({inputs:{x:f},backend:t,attrs:{shape:[-1,I]}}),g=Object(s.a)(N,N.dtype,"min",t);let x;if(i){const e=a.Ad.expandShapeToKeepDim(h,l);x=Object(r.a)({inputs:{x:g},backend:t,attrs:{shape:e}})}else x=Object(r.a)({inputs:{x:g},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(N),t.disposeIntermediateTensorInfo(g),null!=m&&t.disposeIntermediateTensorInfo(f),x}}},1014:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(0),s=t(90),r=t(75),o=t(15),c=t(18);
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
const d=s.b+"\n  return min(a, b);\n",u="\n  vec4 result = vec4(min(a, b));\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  "+r.b+"\n  return result;\n",i=Object(o.b)({opSnippet:d,packedOpSnippet:u,cpuKernelImpl:c.u}),p={kernelName:a.Tb,backendName:"webgl",kernelFunc:i}},1015:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(1017),r=t(1016);
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
const o={kernelName:a.Ub,backendName:"webgl",kernelFunc:({inputs:e,backend:n,attrs:t})=>{const{x:o}=e,{paddings:c,mode:d}=t,u=Object(a.de)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new r.a(o.shape,c,d):new s.a(o.shape,c,d);return n.runWebGLProgram(u,[o],o.dtype)}}},1018:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(0),s=t(75),r=t(15);
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
const o="\n  vec4 result = mod(a, b);\n  bvec4 isNaN = equal(b, vec4(0.0));\n  "+s.b+"\n  return result;\n",c=Object(r.b)({opSnippet:"if (b == 0.0) return NAN;\n  return mod(a, b);",packedOpSnippet:o}),d={kernelName:a.Vb,backendName:"webgl",kernelFunc:c}},1019:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(1020),r=t(407);const o={kernelName:a.Wb,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{logits:o}=n,{numSamples:c,seed:d,normalized:u}=a,i=u?o:Object(r.a)({inputs:{logits:o},backend:t,attrs:{dim:o.shape.length-1}}),p=i.shape[0],l=i.shape[1],b=new s.a(p,l,c),m=[[d]],f=t.runWebGLProgram(b,[i],"int32",m);return u||t.disposeIntermediateTensorInfo(i),f}}},1021:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(0),s=t(18),r=t(38),o=t(84);
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
const c=r.b+"\n  return -x;\n";const d={kernelName:a.Yb,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t}=e,{x:d}=n;if(t.shouldExecuteOnCPU([d])){const e=t.texData.get(d.dataId),[n,a]=Object(s.w)(e.values,d.shape,d.dtype);return t.makeTensorInfo(a,d.dtype,n)}let u;return u=Object(a.de)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new o.f(d.shape,"\n  vec4 result = -x;\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"):new r.i(d.shape,c),t.runWebGLProgram(u,[d],d.dtype)}}},1022:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0);
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
 */const s=a.re.nonMaxSuppressionV3Impl;const r={kernelName:a.Zb,backendName:"webgl",kernelFunc:function(e){a.Ad.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:n,backend:t,attrs:r}=e,{boxes:o,scores:c}=n,{maxOutputSize:d,iouThreshold:u,scoreThreshold:i}=r,p=t.readSync(o.dataId),l=t.readSync(c.dataId),{selectedIndices:b}=s(p,l,d,u,i);return t.makeTensorInfo([b.length],"int32",new Int32Array(b))}}},1023:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0);
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
 */const s=a.re.nonMaxSuppressionV4Impl;const r={kernelName:a.ac,backendName:"webgl",kernelFunc:function(e){a.Ad.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:n,backend:t,attrs:r}=e,{boxes:o,scores:c}=n,{maxOutputSize:d,iouThreshold:u,scoreThreshold:i,padToMaxOutputSize:p}=r,l=t.readSync(o.dataId),b=t.readSync(c.dataId),{selectedIndices:m,validOutputs:f}=s(l,b,d,u,i,p);return[t.makeTensorInfo([m.length],"int32",new Int32Array(m)),t.makeTensorInfo([],"int32",new Int32Array([f]))]}}},1024:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0);
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
 */const s=a.re.nonMaxSuppressionV5Impl;const r={kernelName:a.bc,backendName:"webgl",kernelFunc:function(e){a.Ad.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:n,backend:t,attrs:r}=e,{boxes:o,scores:c}=n,{maxOutputSize:d,iouThreshold:u,scoreThreshold:i,softNmsSigma:p}=r,l=t.readSync(o.dataId),b=t.readSync(c.dataId),m=d,f=u,h=i,k=p,{selectedIndices:I,selectedScores:N}=s(l,b,m,f,h,k);return[t.makeTensorInfo([I.length],"int32",new Int32Array(I)),t.makeTensorInfo([N.length],"float32",new Float32Array(N))]}}},1025:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(1026),r=t(17);
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
const o={kernelName:a.dc,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:o}=e,{indices:c}=n,{dtype:d,depth:u,onValue:i,offValue:p}=o,l=a.Hf.sizeFromShape(c.shape),b=new s.a(l,u,i,p),m=Object(r.a)({inputs:{x:c},backend:t,attrs:{shape:[l]}}),f=t.runWebGLProgram(b,[m],d);t.disposeIntermediateTensorInfo(m);const h=[...c.shape,u],k=Object(r.a)({inputs:{x:f},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(f),k}}},1027:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),s=t(95),r=t(152),o=t(187),c=t(151),d=t(410);const u={kernelName:a.ec,backendName:"webgl",kernelFunc:
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
function e(n){const{inputs:t,backend:a}=n,{x:u}=t;if("string"===u.dtype)throw new Error("onesLike is not supported under string dtype");if("complex64"===u.dtype){const n=Object(c.a)({inputs:{input:u},backend:a}),t=e({inputs:{x:n},backend:a}),r=Object(o.a)({inputs:{input:u},backend:a}),i=Object(d.a)({inputs:{x:r},backend:a}),p=Object(s.a)({inputs:{real:t,imag:i},backend:a});return a.disposeIntermediateTensorInfo(n),a.disposeIntermediateTensorInfo(t),a.disposeIntermediateTensorInfo(r),a.disposeIntermediateTensorInfo(i),p}return Object(r.a)({attrs:{shape:u.shape,dtype:u.dtype,value:1},backend:a})}}},1028:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(396),r=t(269);const o={kernelName:a.gc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:o}=e,{axis:c}=o;if(1===n.length)return Object(r.a)({inputs:{input:n[0]},backend:t,attrs:{dim:c}});const d=n[0].shape,u=n[0].dtype;n.forEach(e=>{a.Hf.assertShapesMatch(d,e.shape,"All tensors passed to stack must have matching shapes"),a.Hf.assert(u===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});const i=[],p=n.map(e=>{const n=Object(r.a)({inputs:{input:e},backend:t,attrs:{dim:c}});return i.push(n),n}),l=Object(s.a)({inputs:p,backend:t,attrs:{axis:c}});return i.forEach(e=>t.disposeIntermediateTensorInfo(e)),l}}},247:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return p}));var a=t(0),s=t(250),r=t(90),o=t(75),c=t(18),d=t(95);
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
const u="return a * b;";function i(e){const{inputs:n,backend:t}=e,{a:i,b:p}=n,l=a.Ad.upcastType(i.dtype,p.dtype);if("complex64"===i.dtype){const e=t.texData.get(i.dataId),n=t.texData.get(p.dataId),a=new s.a(s.b.REAL,i.shape,p.shape),r=new s.a(s.b.IMAG,i.shape,p.shape),o=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:i.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:i.shape},{dataId:n.complexTensorInfos.real.dataId,dtype:n.complexTensorInfos.real.dtype,shape:p.shape},{dataId:n.complexTensorInfos.imag.dataId,dtype:n.complexTensorInfos.imag.dtype,shape:p.shape}],c=t.runWebGLProgram(a,o,"float32"),u=t.runWebGLProgram(r,o,"float32"),l=Object(d.a)({inputs:{real:c,imag:u},backend:t});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(u),l}if(t.shouldExecuteOnCPU([i,p])){const e=t.texData.get(i.dataId),n=t.texData.get(p.dataId),[a,s]=Object(c.v)(i.shape,p.shape,e.values,n.values,l),r=t.makeTensorInfo(s,l);return t.texData.get(r.dataId).values=a,r}let b;return b=Object(a.de)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new o.a(u,i.shape,p.shape):new r.a(u,i.shape,p.shape),t.runWebGLProgram(b,[i,p],l)}const p={kernelName:a.Xb,backendName:"webgl",kernelFunc:i}},395:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return c}));var a=t(0),s=t(15),r=t(18);
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
const o=Object(s.b)({opSnippet:"return float(a != b);",cpuKernelImpl:r.x,dtype:"bool"}),c={kernelName:a.cc,backendName:"webgl",kernelFunc:o}},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return d}));var a=t(0),s=t(1030),r=t(1029),o=t(152);
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
const c=e=>{const{inputs:n,backend:t,attrs:c}=e,{x:d}=n,{paddings:u,constantValue:i}=c;if(0===a.Hf.sizeFromShape(d.shape)){const e=u.map((e,n)=>e[0]+d.shape[n]+e[1]);return Object(o.a)({backend:t,attrs:{shape:e,value:i,dtype:d.dtype}})}const p=Object(a.de)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new r.a(d.shape,u,i):new s.a(d.shape,u,i),l=[[i]];return t.runWebGLProgram(p,[d],d.dtype,l)},d={kernelName:a.hc,backendName:"webgl",kernelFunc:c}}}]);