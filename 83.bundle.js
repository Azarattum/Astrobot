(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1031:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(75),s=t(15);
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
const c="\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  bvec4 isNaN1 = lessThan(a, vec4(0.0));\n  bvec4 isNaN2 = lessThan(floor(b), b);\n  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);\n  "+r.b+"\n  return result;\n",u=Object(s.b)({opSnippet:"\n  if(a < 0.0 && floor(b) < b){\n    return NAN;\n  }\n  if (b == 0.0) {\n    return 1.0;\n  }\n  return (round(mod(b, 2.0)) != 1) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",packedOpSnippet:c}),o={kernelName:a.ic,backendName:"webgl",kernelFunc:u}},1032:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(109),s=t(18),c=t(17),u=t(57);const o={kernelName:a.kc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:o}=e,{x:i}=n,{axis:d,keepDims:p}=o,l=i.shape.length,b=[],f=a.Hf.parseAxisParam(d,i.shape);let h=f;const k=a.Ad.getAxesPermutation(h,l);let m,g=i;if(null!=k&&(g=Object(u.a)({inputs:{x:i},backend:t,attrs:{perm:k}}),h=a.Ad.getInnerMostAxes(h.length,l),b.push(g)),a.Ad.assertAxesAreInnerMostDims("prod",h,l),t.shouldExecuteOnCPU([g])){const e=t.texData.get(g.dataId).values,{outVals:n,outShape:a,outDtype:r}=Object(s.y)(g.shape,g.dtype,e,h);m=t.makeTensorInfo(a,r,n)}else{const[e,n]=a.Ad.computeOutAndReduceShapes(g.shape,h),s=a.Hf.sizeFromShape(n),u=Object(c.a)({inputs:{x:g},backend:t,attrs:{shape:[-1,s]}}),o=Object(a.uf)(i.dtype),d=Object(r.a)(u,o,"prod",t);m=Object(c.a)({inputs:{x:d},backend:t,attrs:{shape:e}}),b.push(u),b.push(d)}if(p){b.push(m);const e=a.Ad.expandShapeToKeepDim(m.shape,f);m=Object(c.a)({inputs:{x:m},backend:t,attrs:{shape:e}})}return b.forEach(e=>t.disposeIntermediateTensorInfo(e)),m}}},1033:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(18);const s={kernelName:a.lc,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{paramsNestedSplits:s,paramsDenseValues:c,indices:u}=n,{outputRaggedRank:o}=a,i=s.map(e=>t.readSync(e.dataId)),d=s.map(e=>e.shape),p=t.readSync(c.dataId),l=t.readSync(u.dataId),[b,f,h]=Object(r.z)(i,d,p,c.shape,c.dtype,l,u.shape,o),k=b.map(e=>t.makeTensorInfo([e.length],"int32",e)),m=t.makeTensorInfo(h,c.dtype,f);return k.concat([m])}}},1034:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(18);const s={kernelName:a.mc,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
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
function(e){const{inputs:n,backend:t}=e,{starts:a,limits:s,deltas:c}=n,u=t.readSync(a.dataId),o=t.readSync(s.dataId),i=t.readSync(c.dataId),[d,p]=Object(r.A)(u,a.shape,a.dtype,o,s.shape,i,c.shape);return[t.makeTensorInfo([d.length],"int32",d),t.makeTensorInfo([p.length],a.dtype,p)]}}},1035:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(18);const s={kernelName:a.nc,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{shape:s,values:c,defaultValue:u,rowPartitionTensors:o}=n,{rowPartitionTypes:i}=a,d=t.readSync(s.dataId),p=t.readSync(c.dataId),l=t.readSync(u.dataId),b=o.map(e=>t.readSync(e.dataId)),f=o.map(e=>e.shape),[h,k]=Object(r.B)(d,s.shape,p,c.shape,c.dtype,l,u.shape,b,f,i);return t.makeTensorInfo(h,c.dtype,k)}}},1036:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"return 1.0 / x;"}),c={kernelName:a.rc,backendName:"webgl",kernelFunc:s}},1037:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t(15);
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
const s=t(38).b+"\n  return (x < 0.0) ? 0.0 : x;\n",c=Object(r.d)({opSnippet:s,packedOpSnippet:"\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"}),u={kernelName:a.sc,backendName:"webgl",kernelFunc:c}},1038:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t(15);
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
const s=t(38).b+"\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",c=Object(r.d)({opSnippet:s,packedOpSnippet:"\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"}),u={kernelName:a.tc,backendName:"webgl",kernelFunc:c}},1039:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(1041),s=t(1040);const c={kernelName:a.vc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:c}=e,{images:u}=n,{alignCorners:o,halfPixelCenters:i,size:d}=c,[p,l]=d,b=Object(a.de)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new s.a(u.shape,p,l,o,i):new r.a(u.shape,p,l,o,i);return t.runWebGLProgram(b,[u],"float32")}}},1042:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(1043);const s={kernelName:a.wc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{images:s,dy:c}=n,{alignCorners:u}=a,o=new r.a(c.shape,s.shape,u);return t.runWebGLProgram(o,[c],c.dtype)}}},1044:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(1046),s=t(1045);const c={kernelName:a.xc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:c}=e,{images:u}=n,{alignCorners:o,halfPixelCenters:i,size:d}=c,[p,l]=d,b=Object(a.de)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new s.a(u.shape,p,l,o,i):new r.a(u.shape,p,l,o,i);return t.runWebGLProgram(b,[u],u.dtype)}}},1047:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(1048);const s={kernelName:a.yc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{images:s,dy:c}=n,{alignCorners:u}=a,o=new r.a(c.shape,s.shape,u);return t.runWebGLProgram(o,[c],c.dtype)}}},1049:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t(1051),s=t(1050),c=t(65);const u={kernelName:a.zc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:u}=e,{x:o}=n,{dims:i}=u,d=o.shape.length,p=a.Hf.parseAxisParam(i,o.shape);if(0===d)return Object(c.a)({inputs:{x:o},backend:t});const l=Object(a.de)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new s.a(o.shape,p):new r.a(o.shape,p);return t.runWebGLProgram(l,[o],o.dtype)}}},1052:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(1053);
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
const s={kernelName:a.Ac,backendName:"webgl",kernelFunc:({inputs:e,attrs:n,backend:t})=>{const{image:s}=e,{radians:c,fillValue:u,center:o}=n,i=t,d=new r.a(s.shape,u),[p,l]=a.Ad.getImageCenter(o,s.shape[1],s.shape[2]),b=[[p,l,Math.sin(c),Math.cos(c)]];return i.runWebGLProgram(d,[s],s.dtype,b)}}},1054:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n"}),c={kernelName:a.Bc,backendName:"webgl",kernelFunc:s}},1055:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t(15),s=t(18);
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
const c=Object(r.d)({opSnippet:"return inversesqrt(x);",cpuKernelImpl:s.D}),u={kernelName:a.Cc,backendName:"webgl",kernelFunc:c}},1056:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(413),s=t(17);const c={kernelName:a.Dc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:c}=e,{indices:u,updates:o}=n,{shape:i}=c,{sliceRank:d,numUpdates:p,sliceSize:l,strides:b,outputSize:f}=a.Ad.calculateShapes(o,u,i),h=[f/l,l];if(0===f)return t.makeTensorInfo(i,u.dtype);const k=Object(s.a)({inputs:{x:u},backend:t,attrs:{shape:[p,d]}}),m=Object(s.a)({inputs:{x:o},backend:t,attrs:{shape:[p,l]}}),g=t.makeTensorInfo([],"float32",new Float32Array([0])),N=new r.a(p,d,k.shape.length,m.shape.length,b,h),x=t.runWebGLProgram(N,[m,k,g],m.dtype),w=Object(s.a)({inputs:{x:x},backend:t,attrs:{shape:i}});return t.disposeIntermediateTensorInfo(k),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(g),w}}},1057:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(1058);const s={kernelName:a.Ec,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{sortedSequence:s,values:c}=n,{side:u}=a,o=new r.a(s.shape[0],s.shape[1],c.shape[1],u),i=[[s.shape[1]]];return t.runWebGLProgram(o,[s,c],"int32",i)}}},1059:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(1060);const s={kernelName:a.Fc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{condition:s,t:c,e:u}=n,o=new r.a(s.shape.length,c.shape,c.shape.length);return t.runWebGLProgram(o,[s,c,u],Object(a.Gf)(c.dtype,u.dtype))}}},1061:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t(15);
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
const s=`\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = ${a.Ad.SELU_SCALEALPHA};\n  float scale = ${a.Ad.SELU_SCALE};\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n`,c=Object(r.d)({opSnippet:s}),u={kernelName:a.Gc,backendName:"webgl",kernelFunc:c}},1062:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(15),s=t(18);
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
const c=r.a+"\n  return 1.0 / (1.0 + exp(-1.0 * x));\n",u=Object(r.d)({opSnippet:c,packedOpSnippet:"\n  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",cpuKernelImpl:s.F}),o={kernelName:a.Hc,backendName:"webgl",kernelFunc:u}},1063:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n"}),c={kernelName:a.Ic,backendName:"webgl",kernelFunc:s}},1064:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t(15);
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
const s=r.a+"\n  return sin(x);\n",c=Object(r.d)({opSnippet:s}),u={kernelName:a.Jc,backendName:"webgl",kernelFunc:c}},1065:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n"}),c={kernelName:a.Kc,backendName:"webgl",kernelFunc:s}},1066:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n"}),c={kernelName:a.Nc,backendName:"webgl",kernelFunc:s}},1067:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t(411),s=t(17),c=t(57);
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
const u={kernelName:a.Oc,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:u}=e,{x:o}=n,{blockShape:i,paddings:d}=u;a.Hf.assert(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const p=i.reduce((e,n)=>e*n),l=[[0,0]];l.push(...d);for(let e=1+i.length;e<o.shape.length;++e)l.push([0,0]);const b=[],f=Object(r.a)({inputs:{x:o},backend:t,attrs:{paddings:l,constantValue:0}}),h=a.Ad.getReshaped(f.shape,i,p,!1),k=a.Ad.getPermuted(h.length,i.length,!1),m=a.Ad.getReshapedPermuted(f.shape,i,p,!1),g=Object(s.a)({inputs:{x:f},backend:t,attrs:{shape:h}}),N=Object(c.a)({inputs:{x:g},backend:t,attrs:{perm:k}}),x=Object(s.a)({inputs:{x:N},backend:t,attrs:{shape:m}});return b.push(f),b.push(g),b.push(N),b.forEach(e=>t.disposeIntermediateTensorInfo(e)),x}}},1068:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(18);const s={kernelName:a.Pc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{indices:a,values:s,denseShape:c,defaultValue:u}=n;if(1!==c.shape.length)throw new Error("Dense shape must be a vector, saw:\n         "+c.shape);if(2!==a.shape.length)throw new Error("Indices must be a matrix, saw:\n         "+a.shape);if(1!==s.shape.length)throw new Error("Values must be a vector, saw:\n         "+s.shape);if(0!==u.shape.length)throw new Error("Default value must be a scalar, saw:\n        "+u.shape);const o=t.readSync(a.dataId),i=t.readSync(s.dataId),d=t.readSync(c.dataId),p=t.readSync(u.dataId)[0],[l,b,f,h,k]=Object(r.I)(o,a.shape,a.dtype,i,s.dtype,d,p);return[t.makeTensorInfo(b,a.dtype,l),t.makeTensorInfo([b[0]],s.dtype,f),t.makeTensorInfo([h.length],"bool",new Uint8Array(h.map(e=>Number(e)))),t.makeTensorInfo([k.length],a.dtype,new Int32Array(k))]}}},1069:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(18);const s={kernelName:a.Qc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{inputIndices:a,inputShape:s,newShape:c}=n;if(2!==a.shape.length)throw new Error("Input indices should be a matrix but received shape "+a.shape);if(1!==s.shape.length)throw new Error("Input shape should be a vector but received shape "+s.shape);if(1!==c.shape.length)throw new Error("Target shape should be a vector but received shape "+c.shape);const u=Array.from(t.readSync(s.dataId)),o=t.readSync(a.dataId),i=Array.from(t.readSync(c.dataId)),[d,p,l]=Object(r.J)(o,a.shape,a.dtype,u,i);return[t.makeTensorInfo(p,a.dtype,d),t.makeTensorInfo([l.length],c.dtype,new Int32Array(l))]}}},1070:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(18);const s={kernelName:a.Rc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{data:a,indices:s,segmentIds:c}=n;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.shape.length)throw new Error("Indices should be a vector but received shape\n              "+s.shape);if(1!==c.shape.length)throw new Error("Segment ids should be a vector but received shape\n              "+c.shape);const u=t.readSync(a.dataId),o=t.readSync(s.dataId),i=t.readSync(c.dataId),[d,p]=Object(r.K)(u,a.shape,a.dtype,o,i,!0);return t.makeTensorInfo(p,a.dtype,d)}}},1071:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(18);const s={kernelName:a.Sc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{data:a,indices:s,segmentIds:c}=n;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.shape.length)throw new Error("Indices should be a vector but received shape\n             "+s.shape);if(1!==c.shape.length)throw new Error("Segment ids should be a vector but received shape\n             "+c.shape);const u=t.readSync(a.dataId),o=t.readSync(s.dataId),i=t.readSync(c.dataId),[d,p]=Object(r.K)(u,a.shape,a.dtype,o,i);return t.makeTensorInfo(p,a.dtype,d)}}},1072:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t(18),s=t(413),c=t(17);const u={kernelName:a.Tc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:u}=e,{sparseIndices:o,sparseValues:i,defaultValue:d}=n,{outputShape:p}=u,{sliceRank:l,numUpdates:b,sliceSize:f,strides:h,outputSize:k}=a.Ad.calculateShapes(i,o,p);if("string"===i.dtype){const e=t.bufferSync(o),n=t.bufferSync(i),s=a.Hf.decodeString(t.readSync(d.dataId)[0]),c=Object(r.E)(e,n,p,k,f,b,l,h,s,!1);return t.makeTensorInfo(p,c.dtype,c.values)}const m=new s.a(b,l,o.shape.length,i.shape.length,h,[k,1],!1),g=t.runWebGLProgram(m,[i,o,d],i.dtype),N=Object(c.a)({inputs:{x:g},backend:t,attrs:{shape:p}});return t.disposeIntermediateTensorInfo(g),N}}},1073:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t(131);const s={kernelName:a.Uc,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:s}=e,{x:c}=n,{numOrSizeSplits:u,axis:o}=s,i=a.Hf.parseAxisParam(o,c.shape)[0],d=a.Ad.prepareSplitSize(c,u,i),p=c.shape.length,l=new Array(p).fill(0),b=c.shape.slice();return d.map(e=>{const n=[...b];n[i]=e;const a=Object(r.a)({inputs:{x:c},backend:t,attrs:{begin:l,size:n}});return l[i]+=e,a})}}},1074:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t(15),s=t(18);
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
const c="return sqrt(x);",u=Object(r.d)({opSnippet:c,packedOpSnippet:c,cpuKernelImpl:s.L}),o={kernelName:a.Vc,backendName:"webgl",kernelFunc:u}},1075:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"return x * x;"}),c={kernelName:a.Wc,backendName:"webgl",kernelFunc:s}},1076:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.b)({opSnippet:"return (a - b) * (a - b);",packedOpSnippet:"return (a - b) * (a - b);"}),c={kernelName:a.Xc,backendName:"webgl",kernelFunc:s}},131:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return o}));var a=t(0),r=t(18),s=t(927),c=t(926);function u(e){const{inputs:n,backend:t,attrs:u}=e,{x:o}=n,{begin:i,size:d}=u,[p,l]=a.lf.parseSliceParams(o,i,d);if(a.lf.assertParamsValid(o,p,l),0===a.Hf.sizeFromShape(l))return t.makeTensorInfo(l,o.dtype,[]);if(t.shouldExecuteOnCPU([o])||"string"===o.dtype){const e=t.texData.get(o.dataId),n=Object(r.H)(e.values,p,l,o.shape,o.dtype);return t.makeTensorInfo(l,o.dtype,n)}const{isPacked:b}=t.texData.get(o.dataId),f=a.lf.isSliceContinous(o.shape,p,l);if(b||!f){const e=Object(a.de)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new c.a(l):new s.a(l),n=[p];return t.runWebGLProgram(e,[o],o.dtype,n)}return t.uploadToGPU(o.dataId),
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
function(e,n,t,r){const s=r.texData.get(e.dataId),c=r.makeTensorInfo(t,e.dtype),u=r.texData.get(c.dataId);Object.assign(u,s),u.refCount=1,u.shape=t,u.dtype=e.dtype;let o=a.lf.computeFlatOffset(n,a.Hf.computeStrides(e.shape));s.slice&&(o+=s.slice.flatOffset),u.slice={flatOffset:o,origDataId:s.slice&&s.slice.origDataId||e.dataId};const i=r.dataRefCount.get(u.slice.origDataId)||1;return r.dataRefCount.set(u.slice.origDataId,i+1),c}(o,p,l,t)}const o={kernelName:a.Lc,backendName:"webgl",kernelFunc:u}},151:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return c}));var a=t(0),r=t(65);
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
function s(e){const{inputs:n,backend:t}=e,{input:a}=n,s=t.texData.get(a.dataId);return Object(r.a)({inputs:{x:s.complexTensorInfos.real},backend:t})}const c={kernelName:a.pc,backendName:"webgl",kernelFunc:s}},17:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var a=t(0),r=t(894),s=t(13);
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
function c(e){const{inputs:n,backend:t,attrs:c}=e,{x:u}=n,{shape:o}=c,i=t,d=a.Hf.sizeFromShape(u.shape),p=a.Hf.inferFromImplicitShape(o,d),l=a.Hf.sizeFromShape(p);a.Hf.assert(d===l,()=>`The new shape (${p}) has ${l} elements and the old shape (${u.shape}) has ${d} elements. The new shape and old shape must have the same number of elements.`);const b=i.texData.get(u.dataId);return!b.isPacked||Object(s.A)(u.shape,p)||null!==b.texture&&Object(s.A)(b.shape,p)?(i.incRef(u.dataId),{dataId:u.dataId,shape:p,dtype:u.dtype}):Object(r.a)(u,p,i)}const u={kernelName:a.uc,backendName:"webgl",kernelFunc:c}},267:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return o}));var a=t(0),r=t(90),s=t(75);
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
const c="return (a < 0.) ? b * a : a;",u="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";const o={kernelName:a.jc,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t}=e,{x:o,alpha:i}=n,d=Object(a.de)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new s.a(u,o.shape,i.shape):new r.a(c,o.shape,i.shape);return t.runWebGLProgram(d,[o,i],"float32")}}},407:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var a=t(0),r=t(402),s=t(405),c=t(409),u=t(17),o=t(408),i=t(186);
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
function d(e){const{inputs:n,backend:t,attrs:d}=e,{logits:p}=n,{dim:l}=d,b=a.Hf.parseAxisParam([l],p.shape),f=Object(s.a)({inputs:{x:p},backend:t,attrs:{reductionIndices:b,keepDims:!1}}),h=a.Ad.expandShapeToKeepDim(f.shape,b),k=Object(u.a)({inputs:{x:f},backend:t,attrs:{shape:h}}),m=Object(o.a)({inputs:{a:p,b:k},backend:t}),g=Object(r.a)({inputs:{x:m},backend:t}),N=Object(i.a)({inputs:{x:g},backend:t,attrs:{axis:b,keepDims:!1}}),x=Object(u.a)({inputs:{x:N},backend:t,attrs:{shape:h}}),w=Object(c.a)({inputs:{a:g,b:x},backend:t});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(k),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(N),t.disposeIntermediateTensorInfo(x),w}const p={kernelName:a.Mc,backendName:"webgl",kernelFunc:d}},409:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return c}));var a=t(0),r=t(15);
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
const s=Object(r.b)({opSnippet:"\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;",packedOpSnippet:"\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n",checkOutOfBounds:!0}),c={kernelName:a.qc,backendName:"webgl",kernelFunc:s}},412:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return c}));var a=t(0),r=t(18);
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
const s=e=>{const{backend:n,attrs:t}=e,{start:a,stop:s,step:c,dtype:u}=t,o=Object(r.C)(a,s,c,u);return n.makeTensorInfo([o.length],u,o)},c={kernelName:a.oc,backendName:"webgl",kernelFunc:s}}}]);