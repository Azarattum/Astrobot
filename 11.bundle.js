(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{152:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return i}));var a=t(0),r=t(971);
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
function s(e){const{backend:n,attrs:t}=e,{shape:s,value:i}=t;let{dtype:o}=t;if(o=o||a.Hf.inferDtype(i),"string"===o){const e=a.Hf.getArrayFromDType(o,a.Hf.sizeFromShape(s));return e.fill(i),n.makeTensorInfo(s,o,e)}{const e=new r.a(s,i),t=[[i]];return n.runWebGLProgram(e,[],o,t)}}const i={kernelName:a.gb,backendName:"webgl",kernelFunc:s}},269:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return i}));var a=t(0),r=t(17);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(e){const{inputs:n,attrs:t,backend:s}=e,{dim:i}=t,{input:o}=n,c=o.shape.length,u=o.shape.slice();let d=i;return i<0&&(a.Hf.assert(-(c+1)<=i,()=>`Axis must be in the interval [${-(c+1)}, ${c}]`),d=c+i+1),u.splice(d,0,1),Object(r.a)({inputs:{x:o},backend:s,attrs:{shape:u}})}const i={kernelName:a.db,backendName:"webgl",kernelFunc:s}},402:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return c}));var a=t(0),r=t(15),s=t(18);
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
const i=r.a+"\n  return exp(x);\n",o=Object(r.d)({opSnippet:i,packedOpSnippet:"\n  vec4 result = exp(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",cpuKernelImpl:s.h,dtype:"float32"}),c={kernelName:a.cb,backendName:"webgl",kernelFunc:o}},403:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(459),s=t(95),i=t(17);
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
function o(e,n,t){const o=t.texData.get(e.dataId),c=a.Hf.sizeFromShape(e.shape),u=e.shape[e.shape.length-1],d=c/u,l=Object(i.a)({inputs:{x:e},backend:t,attrs:{shape:[d,u]}}),p=l.shape,b=new r.a("real",p,n),f=new r.a("imag",p,n),h=[{dataId:o.complexTensorInfos.real.dataId,dtype:o.complexTensorInfos.real.dtype,shape:p},{dataId:o.complexTensorInfos.imag.dataId,dtype:o.complexTensorInfos.imag.dtype,shape:p}],m=t.runWebGLProgram(b,h,"float32"),k=t.runWebGLProgram(f,h,"float32"),g=Object(s.a)({inputs:{real:m,imag:k},backend:t});t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(k);const v=Object(i.a)({inputs:{x:g},backend:t,attrs:{shape:e.shape}});return t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(g),v}},404:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return c}));var a=t(0),r=t(983),s=t(18),i=t(17);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{x:c,indices:u}=n,{axis:d,batchDims:l}=o,p=a.Hf.parseAxisParam(d,c.shape)[0];if(Object(a.de)().get("DEBUG")){const e=t.readSync(u.dataId),n=c.shape[p];for(let t=0;t<e.length;++t){const r=e[t];a.Hf.assert(r<=n-1&&r>=0,()=>`GatherV2: the index value ${r} is not in [0, ${n-1}]`)}}const b=a.Ad.segment_util.collectGatherOpShapeInfo(c,u,p,l),f=a.Hf.sizeFromShape(u.shape),h=[],m=Object(i.a)({inputs:{x:c},backend:t,attrs:{shape:[b.batchSize,b.outerSize,b.dimSize,b.sliceSize]}}),k=Object(i.a)({inputs:{x:u},backend:t,attrs:{shape:[b.batchSize,f/b.batchSize]}});h.push(m),h.push(k);const g=[b.batchSize,b.outerSize,f/b.batchSize,b.sliceSize];if(t.shouldExecuteOnCPU([c,u])||"string"===c.dtype){const e=t.bufferSync(k),n=t.bufferSync(m),a=Object(s.l)(n,e,g);return h.forEach(e=>t.disposeIntermediateTensorInfo(e)),t.makeTensorInfo(b.outputShape,a.dtype,a.values)}const v=new r.a(m.shape,g),x=t.runWebGLProgram(v,[m,k],m.dtype);h.push(x);const I=Object(i.a)({inputs:{x:x},backend:t,attrs:{shape:b.outputShape}});return h.forEach(e=>t.disposeIntermediateTensorInfo(e)),I}const c={kernelName:a.pb,backendName:"webgl",kernelFunc:o}},960:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),r=t(961),s=t(17);const i={kernelName:a.T,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{x:i}=n,o=[...i.shape,...i.shape],c=a.Hf.sizeFromShape(i.shape),u=Object(s.a)({inputs:{x:i},backend:t,attrs:{shape:[c]}}),d=new r.a(c),l=t.runWebGLProgram(d,[u],u.dtype),p=Object(s.a)({inputs:{x:l},backend:t,attrs:{shape:o}});return t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(l),p}}},962:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),r=t(963),s=t(17);const i={kernelName:a.U,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:i}=e,{x:o,filter:c}=n,{strides:u,pad:d,dilations:l}=i,p=a.Ad.computeDilation2DInfo(o.shape,c.shape,u,d,"NHWC",l);let b;const f=new r.a(p);b=t.runWebGLProgram(f,[o,c],"float32");const h=Object(s.a)({inputs:{x:b},backend:t,attrs:{shape:p.outShape}});return t.disposeIntermediateTensorInfo(b),h}}},964:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(247),s=t(17),i=t(186),o=t(57);const c={kernelName:a.X,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:c}=e,{equation:u}=c,d=n,{allDims:l,summedDims:p,idDims:b}=a.Ad.decodeEinsumEquation(u,d.length);a.Ad.checkEinsumDimSizes(l.length,b,d);const{path:f,steps:h}=a.Ad.getEinsumComputePath(p,b),m=h.length;let k=null,g=l.length;const v=[];for(let e=0;e<m;++e){for(const n of h[e]){const{permutationIndices:e,expandDims:i}=a.Ad.getEinsumPermutation(g,b[n]);let c;a.Ad.isIdentityPermutation(e)?c=d[n]:(c=Object(o.a)({inputs:{x:d[n]},backend:t,attrs:{perm:e}}),v.push(c));const u=c.shape.slice();for(let e=0;e<i.length;++e)u.splice(i[e],0,1);a.Hf.arraysEqual(c.shape,u)||(c=Object(s.a)({inputs:{x:c},backend:t,attrs:{shape:u}}),v.push(c)),null===k?k=c:(k=Object(r.a)({inputs:{a:c,b:k},backend:t}),v.push(k))}e<m-1&&(f[e]>=0&&(k=Object(i.a)({inputs:{x:k},backend:t,attrs:{axis:f[e]-(l.length-g),keepDims:!1}}),v.push(k)),g--)}for(const e of v)e!==k&&t.disposeIntermediateTensorInfo(e);return k}}},965:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:"\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n"}),i={kernelName:a.Y,backendName:"webgl",kernelFunc:s}},966:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),r=t(90),s=t(75);
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
const i={kernelName:a.Z,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t}=e,{dy:i,y:o}=n,c=Object(a.de)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new s.a("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n",i.shape,o.shape):new r.a("return (b >= 1.0) ? a : a * (b + 1.0);",i.shape,o.shape);return t.runWebGLProgram(c,[i,o],i.dtype)}}},967:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(15),s=t(18);
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
const i=Object(r.b)({opSnippet:"return float(a == b);",packedOpSnippet:"\n  return vec4(equal(a, b));\n",dtype:"bool",cpuKernelImpl:s.g}),o={kernelName:a.ab,backendName:"webgl",kernelFunc:i}},968:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(15);
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
const s=`\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = ${a.Ad.ERF_P};\n  float a1 = ${a.Ad.ERF_A1};\n  float a2 = ${a.Ad.ERF_A2};\n  float a3 = ${a.Ad.ERF_A3};\n  float a4 = ${a.Ad.ERF_A4};\n  float a5 = ${a.Ad.ERF_A5};\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n`,i=Object(r.d)({opSnippet:s}),o={kernelName:a.bb,backendName:"webgl",kernelFunc:i}},969:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15),s=t(18);
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
const i="return exp(x) - 1.0;",o=Object(r.d)({opSnippet:i,packedOpSnippet:i,cpuKernelImpl:s.i}),c={kernelName:a.eb,backendName:"webgl",kernelFunc:o}},970:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(403);const s={kernelName:a.fb,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{input:a}=n;return Object(r.a)(a,!1,t)}}},972:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(973);
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
const s={kernelName:a.hb,backendName:"webgl",kernelFunc:({inputs:e,backend:n})=>{const{image:t}=e,a=n,s=new r.a(t.shape);return a.runWebGLProgram(s,[t],t.dtype)}}},974:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15),s=t(18);
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
const i="return floor(x);",o=Object(r.d)({opSnippet:i,packedOpSnippet:i,cpuKernelImpl:s.j}),c={kernelName:a.ib,backendName:"webgl",kernelFunc:o}},975:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),r=t(15);
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
const s=Object(r.b)({opSnippet:"\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",packedOpSnippet:"\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n",dtype:"int32"}),i={kernelName:a.jb,backendName:"webgl",kernelFunc:s}},976:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(33),s=t(978),i=t(977);
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
const o={kernelName:a.kb,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t,attrs:o}=e;let{pixels:d}=n;const{numChannels:l}=o,p="undefined"!=typeof HTMLVideoElement&&d instanceof HTMLVideoElement,b="undefined"!=typeof HTMLImageElement&&d instanceof HTMLImageElement,[f,h]=p?[d.videoWidth,d.videoHeight]:[d.width,d.height],m=[h,f],k=[h,f,l];if(b||p){const e=Object(a.de)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");null!=c&&e===u||(u=e,c=document.createElement("canvas").getContext("2d",{willReadFrequently:u})),c.canvas.width=f,c.canvas.height=h,c.drawImage(d,0,0,f,h),d=c.canvas}const g=t.makeTensorInfo(m,"int32");t.texData.get(g.dataId).usage=r.c.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(g.dataId),d);const v=Object(a.de)().getBool("WEBGL_PACK")?new i.a(k):new s.a(k),x=t.runWebGLProgram(v,[g],"int32");return t.disposeData(g.dataId),x}};let c,u=Object(a.de)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU")},977:function(e,n,t){"use strict";t.d(n,"a",(function(){return FromPixelsPackedProgram}));var a=t(62);
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
 */class FromPixelsPackedProgram{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const n=Object(a.a)(),[t,r]=e;this.outputShape=e,this.userCode=`\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(${r}.0, ${t}.0);\n            vec4 values = ${n.texture2D}(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        ${n.output} = result;\n      }\n    `}}},978:function(e,n,t){"use strict";t.d(n,"a",(function(){return FromPixelsProgram}));var a=t(62);
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
 */class FromPixelsProgram{constructor(e){this.variableNames=["A"];const n=Object(a.a)(),[t,r]=e;this.outputShape=e,this.userCode=`\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${t}.0);\n\n        vec4 values = ${n.texture2D}(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    `}}},979:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t(248),s=t(397),i=t(15),o=t(251),c=t(17);const u={kernelName:a.mb,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:u}=e,{x:d,filter:l,bias:p,preluActivationWeights:b}=n,{strides:f,pad:h,dataFormat:m,dilations:k,dimRoundingMode:g,activation:v,leakyreluAlpha:x}=u,I=a.Ad.convertConv2DDataFormat(m),O=a.Ad.computeConv2DInfo(d.shape,l.shape,f,k,h,g,!1,I);let N;const w=[],S=null!=p,A=null!=b,E="leakyrelu"===v,j=()=>{const e=[d,l],n=(e,n)=>{if("NCHW"===n&&1===e.shape.length&&1!==e.shape[0]){const n=Object(c.a)({inputs:{x:e},backend:t,attrs:{shape:[e.shape[0],1,1]}});return w.push(n),n}return e};if(S&&e.push(n(p,m)),A&&e.push(n(b,m)),E){const n=t.makeTensorInfo([],"float32",a.Hf.createScalarValue(x,"float32"));e.push(n),w.push(n)}return e};if(1!==O.filterHeight||1!==O.filterWidth||1!==O.dilationHeight||1!==O.dilationWidth||1!==O.strideHeight||1!==O.strideWidth||"SAME"!==O.padInfo.type&&"VALID"!==O.padInfo.type)if(O.strideWidth<=2&&"channelsLast"===I&&Object(a.de)().getBool("WEBGL_EXP_CONV")){const e=v?Object(i.c)(v,!0):null,n=new s.a(O,S,e,A,E),a=[[O.padInfo.top,O.padInfo.left],[O.strideHeight,O.strideWidth],[O.dilationHeight,O.dilationWidth],[O.inHeight,O.inWidth]],r=j();N=t.runWebGLProgram(n,r,"float32",a)}else if(Object(a.de)().getBool("WEBGL_CONV_IM2COL"))N=Object(o.b)({x:d,filter:l,convInfo:O,backend:t,bias:p,activation:v,preluActivationWeights:b,leakyreluAlpha:x});else{const e=v?Object(i.c)(v,!1):null,n=new r.a(O,S,e,A,E),a=j();N=t.runWebGLProgram(n,a,"float32")}else N=Object(o.a)({x:d,filter:l,convInfo:O,backend:t,bias:p,activation:v,preluActivationWeights:b,leakyreluAlpha:x});const F=Object(c.a)({inputs:{x:N},backend:t,attrs:{shape:O.outShape}});return w.push(N),w.forEach(e=>t.disposeIntermediateTensorInfo(e)),F}}},980:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(400),s=t(399),i=t(15);const o={kernelName:a.nb,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:o}=e,{x:c,filter:u,bias:d,preluActivationWeights:l}=n,{strides:p,pad:b,dilations:f,dimRoundingMode:h,activation:m,leakyreluAlpha:k}=o,g=[];let v=f;null==v&&(v=[1,1]),a.Hf.assert(a.Ad.eitherStridesOrDilationsAreOne(p,v),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${p} and dilations '${v}'`);const x=a.Ad.computeConv2DInfo(c.shape,u.shape,p,v,b,h,!0),I=Object(a.de)().getBool("WEBGL_PACK_DEPTHWISECONV")&&x.strideWidth<=2&&x.outChannels/x.inChannels==1,O=m?Object(i.c)(m,I):null,N=[c,u],w=null!=d,S=null!=l,A="leakyrelu"===m;if(w&&N.push(d),S&&N.push(l),A){const e=t.makeTensorInfo([],"float32",a.Hf.createScalarValue(k,"float32"));N.push(e),g.push(e)}let E;E=I?new s.a(x,w,O,S,A):new r.a(x,w,O,S,A);const j=[[x.padInfo.top,x.padInfo.left],[x.strideHeight,x.strideWidth],[x.dilationHeight,x.dilationWidth],[x.inHeight,x.inWidth]],F=t.runWebGLProgram(E,N,"float32",j);return g.forEach(e=>t.disposeIntermediateTensorInfo(e)),F}}},981:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(982),s=t(18),i=t(17);const o={kernelName:a.ob,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{params:o,indices:c}=n,u=c.shape,d=u[u.length-1],l=a.Hf.sizeFromShape(o.shape),[p,b,f,h]=a.Ad.prepareAndValidate(o,c),m=Object(i.a)({inputs:{x:c},backend:t,attrs:{shape:[b,d]}}),k=Object(i.a)({inputs:{x:o},backend:t,attrs:{shape:[a.Hf.sizeFromShape(o.shape)/f,f]}});if(t.shouldExecuteOnCPU([o,c])||"string"===o.dtype){const e=t.readSync(c.dataId),n=t.bufferSync(o),a=Object(s.k)(e,n,o.dtype,b,d,f,h,o.shape,l);return t.makeTensorInfo(p,o.dtype,a.values)}const g=new r.a(d,h,[b,f],o.shape),v=t.runWebGLProgram(g,[k,m],k.dtype),x=Object(i.a)({inputs:{x:v},backend:t,attrs:{shape:p}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(k),t.disposeIntermediateTensorInfo(v),x}}},984:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(15),s=t(18);
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
const i=Object(r.b)({opSnippet:"return float(a > b);",packedOpSnippet:"\n  return vec4(greaterThan(a, b));\n",cpuKernelImpl:s.n,dtype:"bool"}),o={kernelName:a.qb,backendName:"webgl",kernelFunc:i}},985:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(15),s=t(18);
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
const i=Object(r.b)({opSnippet:"return float(a >= b);",packedOpSnippet:"\n  return vec4(greaterThanEqual(a, b));\n",dtype:"bool",cpuKernelImpl:s.m}),o={kernelName:a.rb,backendName:"webgl",kernelFunc:i}}}]);