(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1001:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(1002);
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
const s={kernelName:a.Ab,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:a}=e,{x:s,y:c,dy:o}=n,{depthRadius:u,bias:i,alpha:d,beta:p}=a,l=new r.a(s.shape,u,i,d,p);return t.runWebGLProgram(l,[s,c,o],s.dtype)}}},1003:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(109),s=t(17);
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
function c(e,n,t,c){const o=a.Hf.sizeFromShape(n),u=a.Hf.sizeFromShape(e.shape)/o,i=Object(s.a)({inputs:{x:e},attrs:{shape:[u,o]},backend:c}),d=Object(r.a)(i,e.dtype,"max",c),p=Object(s.a)({inputs:{x:d},attrs:{shape:t},backend:c});return c.disposeIntermediateTensorInfo(i),c.disposeIntermediateTensorInfo(d),p}},1004:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(0),r=t(90),s=t(75),c=t(15),o=t(18);
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
const u=r.b+"\n  return max(a, b);\n",i="\n  vec4 result = vec4(max(a, b));\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  "+s.b+"\n  return result;\n",d=Object(c.b)({opSnippet:u,packedOpSnippet:i,cpuKernelImpl:o.t}),p={kernelName:a.Qb,backendName:"webgl",kernelFunc:d}},1005:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(103),s=t(13),c=t(65);const o={kernelName:a.Lb,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:o}=e,{x:u}=n;Object(s.a)(u,"maxPool");const{filterSize:i,strides:d,pad:p,dimRoundingMode:l}=o;a.Hf.assert(a.Ad.eitherStridesOrDilationsAreOne(d,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${d} and dilations '1'`);const b=a.Ad.computePool2DInfo(u.shape,i,d,1,p,l);if(1===b.filterWidth&&1===b.filterHeight&&a.Hf.arraysEqual(b.inShape,b.outShape))return Object(c.a)({inputs:{x:u},backend:t});const f=new r.a(b,"max",!1);return t.runWebGLProgram(f,[u],u.dtype)}}},1006:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(103);const s={kernelName:a.Mb,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:s}=e,{x:c}=n,{filterSize:o,strides:u,pad:i,dataFormat:d,dimRoundingMode:p}=s,l=a.Ad.computePool3DInfo(c.shape,o,u,[1,1,1],i,p,d),b=new r.b(l,"max",!1);return t.runWebGLProgram(b,[c],c.dtype)}}},1007:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(406),s=t(103);const c={kernelName:a.Nb,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:c}=e,{dy:o,input:u}=n,i=u,{filterSize:d,strides:p,pad:l,dimRoundingMode:b}=c,f=a.Ad.computePool3DInfo(i.shape,d,p,[1,1,1],l,b),m=new s.b(f,"max",!0),k=t.runWebGLProgram(m,[i],i.dtype),N=new r.b(f),h=t.runWebGLProgram(N,[o,k],i.dtype);return t.disposeIntermediateTensorInfo(k),h}}},1008:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(406),s=t(103),c=t(13);const o={kernelName:a.Ob,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:o}=e,{dy:u,input:i,output:d}=n,p=i;Object(c.a)([i,d],"maxPoolGrad");const{filterSize:l,strides:b,pad:f,dimRoundingMode:m}=o,k=a.Ad.computePool2DInfo(p.shape,l,b,1,f,m),N=new s.a(k,"max",!0),h=t.runWebGLProgram(N,[p],p.dtype),g=new r.a(k),x=t.runWebGLProgram(g,[u,h],p.dtype);return t.disposeIntermediateTensorInfo(h),x}}},1009:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(1010);
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
const s={kernelName:a.Pb,backendName:"webgl",kernelFunc:({inputs:e,attrs:n,backend:t})=>{const{x:s}=e,{filterSize:c,strides:o,pad:u,includeBatchInIndex:i}=n,d=t;a.Hf.assert(4===s.shape.length,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const p=[1,1];a.Hf.assert(a.Ad.eitherStridesOrDilationsAreOne(o,p),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${p}'`);const l=a.Ad.computePool2DInfo(s.shape,c,o,p,u),[b,f]=Object(r.a)(s,i,l,d);return[b,f]}}},1010:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(103);
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
 */function r(e,n,t,r){let s=new a.a(t,"max",!1);const c=r.runWebGLProgram(s,[e],"float32");s=new a.a(t,"max",!0,!0,n);return[c,r.runWebGLProgram(s,[e],"float32")]}},1011:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(1012),s=t(18),c=t(159);
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
const o={kernelName:a.Rb,backendName:"webgl",kernelFunc:({inputs:e,attrs:n,backend:t})=>{const{x:o}=e,{keepDims:u,axis:i}=n,d=t,p=o.shape.length,l=a.Hf.parseAxisParam(i,o.shape);let b=l;const f=a.Ad.getAxesPermutation(b,p),m=null!=f,k=d.shouldExecuteOnCPU([o]),N=[];let h=o;if(m){if(k){const e=d.texData.get(h.dataId).values,n=new Array(p);for(let e=0;e<n.length;e++)n[e]=o.shape[f[e]];const t=Object(s.T)(e,o.shape,o.dtype,f,n);h=d.makeTensorInfo(n,o.dtype);d.texData.get(h.dataId).values=t}else h=Object(c.a)(o,f,d);N.push(h),b=a.Ad.getInnerMostAxes(b.length,p)}a.Ad.assertAxesAreInnerMostDims("sum",b,p);const[g,x]=a.Ad.computeOutAndReduceShapes(h.shape,b);let v=g;u&&(v=a.Ad.expandShapeToKeepDim(g,l));const I=Object(r.a)(h,x,v,d);for(const e of N)d.disposeIntermediateTensorInfo(e);return I}}},1012:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(109),s=t(17);
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
function c(e,n,t,c){const o=a.Hf.sizeFromShape(n),u=a.Hf.sizeFromShape(e.shape)/o,i=Object(s.a)({inputs:{x:e},attrs:{shape:[u,o]},backend:c}),d=Object(r.a)(i,"float32","mean",c),p=Object(s.a)({inputs:{x:d},attrs:{shape:t},backend:c});return c.disposeIntermediateTensorInfo(i),c.disposeIntermediateTensorInfo(d),p}},187:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return c}));var a=t(0),r=t(65);
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
function s(e){const{inputs:n,backend:t}=e,{input:a}=n,s=t.texData.get(a.dataId);return Object(r.a)({inputs:{x:s.complexTensorInfos.imag},backend:t})}const c={kernelName:a.ub,backendName:"webgl",kernelFunc:s}},268:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u}));var a=t(0),r=t(90),s=t(75);
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
const c="return (a < 0.) ? b * a : a;",o="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";const u={kernelName:a.Bb,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t,attrs:u}=e,{x:i}=n,{alpha:d}=u,p=t.makeTensorInfo([],"float32",a.Hf.createScalarValue(d,"float32")),l=Object(a.de)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new s.a(o,i.shape,p.shape):new r.a(c,i.shape,p.shape),b=t.runWebGLProgram(l,[i,p],"float32");return t.disposeIntermediateTensorInfo(p),b}}},405:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return u}));var a=t(0),r=t(18),s=t(1003),c=t(159);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{x:u}=n,{reductionIndices:i,keepDims:d}=o,p=u.shape.length,l=a.Hf.parseAxisParam(i,u.shape);let b=l;const f=a.Ad.getAxesPermutation(b,p),m=null!=f,k=t.shouldExecuteOnCPU([u]);let N=u;if(m){if(k){const e=t.texData.get(N.dataId).values,n=new Array(p);for(let e=0;e<n.length;e++)n[e]=u.shape[f[e]];const a=Object(r.T)(e,u.shape,u.dtype,f,n);N=t.makeTensorInfo(n,u.dtype);t.texData.get(N.dataId).values=a}else N=Object(c.a)(u,f,t);b=a.Ad.getInnerMostAxes(b.length,p)}a.Ad.assertAxesAreInnerMostDims("max",b,p);const[h,g]=a.Ad.computeOutAndReduceShapes(N.shape,b);let x,v=h;if(d&&(v=a.Ad.expandShapeToKeepDim(h,l)),k){const e=t.texData.get(N.dataId).values,n=Object(r.s)(e,a.Hf.sizeFromShape(g),v,u.dtype);x=t.makeTensorInfo(v,u.dtype);t.texData.get(x.dataId).values=n}else x=Object(s.a)(N,g,v,t);return m&&t.disposeIntermediateTensorInfo(N),x}const u={kernelName:a.Kb,backendName:"webgl",kernelFunc:o}},65:function(e,n,t){"use strict";
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
function a(e){const{inputs:n,backend:t}=e,{x:a}=n;return t.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r}));const r={kernelName:t(0).tb,backendName:"webgl",kernelFunc:a}},986:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(403);const s={kernelName:a.sb,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{input:a}=n;return Object(r.a)(a,!0,t)}}},987:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),c={kernelName:a.vb,backendName:"webgl",kernelFunc:s}},988:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"return float(isinf(x));",dtype:"bool"}),c={kernelName:a.wb,backendName:"webgl",kernelFunc:s}},989:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"return float(isnan(x));",dtype:"bool"}),c={kernelName:a.xb,backendName:"webgl",kernelFunc:s}},990:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(15),s=t(18);
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
const c=Object(r.b)({opSnippet:"return float(a < b);",packedOpSnippet:"\n  return vec4(lessThan(a, b));\n",cpuKernelImpl:s.p,dtype:"bool"}),o={kernelName:a.Cb,backendName:"webgl",kernelFunc:c}},991:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(15),s=t(18);
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
const c=Object(r.b)({opSnippet:"return float(a <= b);",packedOpSnippet:"\n  return vec4(lessThanEqual(a, b));\n",cpuKernelImpl:s.o,dtype:"bool"}),o={kernelName:a.Db,backendName:"webgl",kernelFunc:c}},992:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(18);const s={kernelName:a.Eb,backendName:"webgl",kernelFunc:
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
function(e){const{backend:n,attrs:t}=e,{start:a,stop:s,num:c}=t,o=Object(r.q)(a,s,c);return n.makeTensorInfo([o.length],"float32",o)}}},993:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t(15),s=t(18);
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
const c=r.a+"\n  return x < 0.0 ? 0./0. : log(x);\n",o=Object(r.d)({opSnippet:c,packedOpSnippet:"\n  vec4 result = log(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);\n  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);\n  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);\n  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);\n  return result;\n",cpuKernelImpl:s.r}),u={kernelName:a.Fb,backendName:"webgl",kernelFunc:o}},994:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(15);
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
const s=r.a+"\n  return log(1.0 + x);\n",c=Object(r.d)({opSnippet:s}),o={kernelName:a.Gb,backendName:"webgl",kernelFunc:c}},995:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.b)({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:"\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n",dtype:"bool"}),c={kernelName:a.Hb,backendName:"webgl",kernelFunc:s}},996:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"return float(!(x >= 1.0));"}),c={kernelName:a.Ib,backendName:"webgl",kernelFunc:s}},997:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.b)({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:"\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n",dtype:"bool"}),c={kernelName:a.Jb,backendName:"webgl",kernelFunc:s}},998:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(1e3),s=t(999);
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
const c={kernelName:a.zb,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:c}=e,{x:o}=n,{depthRadius:u,bias:i,alpha:d,beta:p}=c,l=Object(a.de)().getBool("WEBGL_PACK_NORMALIZATION")?new s.a(o.shape,u,i,d,p):new r.a(o.shape,u,i,d,p);return t.runWebGLProgram(l,[o],o.dtype)}}}}]);