(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{189:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),s=t(15),r=t(392),c=t(247),o=t(17),u=t(186),i=t(57);
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
const p=1e3;function d({a:e,b:n,transposeA:t,transposeB:d,backend:l,bias:b=null,preluActivationWeights:h=null,leakyreluAlpha:f=0,activation:k=null}){const m=e.shape.length,g=n.shape.length,x=t?e.shape[m-2]:e.shape[m-1],N=d?n.shape[g-1]:n.shape[g-2],A=t?e.shape[m-1]:e.shape[m-2],O=d?n.shape[g-2]:n.shape[g-1],j=e.shape.slice(0,-2),I=n.shape.slice(0,-2),w=a.Hf.sizeFromShape(j),v=a.Hf.sizeFromShape(I),S=a.Fd.assertAndGetBroadcastShape(e.shape.slice(0,-2),n.shape.slice(0,-2)).concat([A,O]);a.Hf.assert(x===N,()=>`Error in matMul: inner shapes (${x}) and (${N}) of Tensors with shapes ${e.shape} and ${n.shape} and transposeA=${t} and transposeB=${d} must match.`);const y=t?[w,x,A]:[w,A,x],P=d?[v,O,N]:[v,N,O],F=Object(o.a)({inputs:{x:e},backend:l,attrs:{shape:y}}),B=Object(o.a)({inputs:{x:n},backend:l,attrs:{shape:P}}),T=[F,B],G=Math.max(w,v),H=t?F.shape[1]:F.shape[2],M=null!=b,D=null!=h,E="leakyrelu"===k,z=null!=k?Object(s.c)(k,!0):null;let W;if((1===A||1===O)&&H>p&&!1===(M||D||E||null!=z)){let e=F,n=B;t&&(e=Object(i.a)({inputs:{x:F},backend:l,attrs:{perm:[0,2,1]}}),T.push(e)),d&&(n=Object(i.a)({inputs:{x:B},backend:l,attrs:{perm:[0,2,1]}}),T.push(n));const a=1===O;let s=e;1!==O&&(s=Object(o.a)({inputs:{x:e},backend:l,attrs:{shape:[G,H,1]}}),T.push(s));const r=1===O?2:1;let p=n;a&&(p=Object(o.a)({inputs:{x:n},backend:l,attrs:{shape:[G,1,H]}}),T.push(p));const b=Object(c.a)({inputs:{a:s,b:p},backend:l});W=Object(u.a)({inputs:{x:b},backend:l,attrs:{axis:r,keepDims:!0}}),T.push(b)}else{const s=Object(a.Gf)(e.dtype,n.dtype),c=new r.a(y,P,[G,A,O],t,d,M,z,D,E),o=[F,B];if(null!=b&&o.push(b),D&&o.push(h),E){const e=l.makeTensorInfo([],"float32",a.Hf.createScalarValue(f,"float32"));o.push(e),T.push(e)}W=l.runWebGLProgram(c,o,s)}const L=Object(o.a)({inputs:{x:W},backend:l,attrs:{shape:S}});T.push(W);for(const e of T)l.disposeIntermediateTensorInfo(e);return L}},899:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),s=t(18),r=t(38),c=t(84);
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
const o="return abs(x);";const u={kernelName:a.a,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t}=e,{x:u}=n;if(t.shouldExecuteOnCPU([u])&&"complex64"!==u.dtype){const e=t.texData.get(u.dataId),n=Object(s.G)(e.values);return t.makeTensorInfo(u.shape,u.dtype,n)}let i;return i=Object(a.de)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new c.f(u.shape,o):new r.i(u.shape,o),t.runWebGLProgram(i,[u],u.dtype)}}},900:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(15);
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
const r=t(38).b+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n",c=Object(s.d)({opSnippet:r}),o={kernelName:a.b,backendName:"webgl",kernelFunc:c}},901:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(15);
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
const r=t(38).b+"\n  if (x < 1.0) return NAN;\nreturn log(x + sqrt(x * x - 1.0));",c=Object(s.d)({opSnippet:r}),o={kernelName:a.c,backendName:"webgl",kernelFunc:c}},902:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),s=t(15),r=t(18);
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
const c="return a + b;",o=Object(s.b)({opSnippet:c,packedOpSnippet:c,supportsComplex:!0,cpuKernelImpl:r.a}),u={kernelName:a.d,backendName:"webgl",kernelFunc:o}},903:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(905),r=t(904),c=t(65);const o={kernelName:a.e,backendName:"webgl",kernelFunc:
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
function e(n){const{inputs:t,backend:o}=n,u=t;if(1===u.length)return Object(c.a)({inputs:{x:u[0]},backend:o});if(u.length>Object(a.de)().get("WEBGL_MAX_TEXTURES_IN_SHADER")){const n=Math.floor(u.length/2),t=e({inputs:u.slice(0,n),backend:o}),a=e({inputs:u.slice(n),backend:o});return e({inputs:[t,a],backend:o})}const i=u.map(e=>e.dtype).reduce((e,n)=>Object(a.Gf)(e,n)),p=u.map(e=>e.shape),d=Object(a.de)().getBool("WEBGL_PACK")?new r.a(u[0].shape,p):new s.a(u[0].shape,p);return o.runWebGLProgram(d,u,i)}}},906:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(109),r=t(17),c=t(57);const o={kernelName:a.f,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:o}=e,{x:u}=n,{axis:i,keepDims:p}=o,d=u.shape.length,l=a.Hf.parseAxisParam(i,u.shape);let b=l;const h=a.Ad.getAxesPermutation(b,d);let f=u;null!=h&&(f=Object(c.a)({inputs:{x:u},backend:t,attrs:{perm:h}}),b=a.Ad.getInnerMostAxes(b.length,d)),a.Ad.assertAxesAreInnerMostDims("all",b,d);const[k,m]=a.Ad.computeOutAndReduceShapes(f.shape,b),g=a.Hf.sizeFromShape(m),x=Object(r.a)({inputs:{x:f},backend:t,attrs:{shape:[-1,g]}}),N=Object(s.a)(x,x.dtype,"all",t);let A;if(p){const e=a.Ad.expandShapeToKeepDim(k,l);A=Object(r.a)({inputs:{x:N},backend:t,attrs:{shape:e}})}else A=Object(r.a)({inputs:{x:N},backend:t,attrs:{shape:k}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(N),null!=h&&t.disposeIntermediateTensorInfo(f),A}}},907:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(109),r=t(17),c=t(57);const o={kernelName:a.g,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:o}=e,{x:u}=n,{axis:i,keepDims:p}=o,d=u.shape.length,l=a.Hf.parseAxisParam(i,u.shape);let b=l;const h=a.Ad.getAxesPermutation(b,d);let f=u;null!=h&&(f=Object(c.a)({inputs:{x:u},backend:t,attrs:{perm:h}}),b=a.Ad.getInnerMostAxes(b.length,d)),a.Ad.assertAxesAreInnerMostDims("any",b,d);const[k,m]=a.Ad.computeOutAndReduceShapes(f.shape,b),g=a.Hf.sizeFromShape(m),x=Object(r.a)({inputs:{x:f},backend:t,attrs:{shape:[-1,g]}}),N=Object(s.a)(x,x.dtype,"any",t);let A;if(p){const e=a.Ad.expandShapeToKeepDim(k,l);A=Object(r.a)({inputs:{x:N},backend:t,attrs:{shape:e}})}else A=Object(r.a)({inputs:{x:N},backend:t,attrs:{shape:k}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(N),null!=h&&t.disposeIntermediateTensorInfo(f),A}}},908:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),s=t(393),r=t(57);const c={kernelName:a.h,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:c}=e,{x:o}=n,{axis:u}=c;let i=a.Hf.parseAxisParam(u,o.shape);const p=a.Ad.getAxesPermutation(i,o.shape.length);let d=o;const l=[];null!=p&&(d=Object(r.a)({inputs:{x:o},backend:t,attrs:{perm:p}}),l.push(d),i=a.Ad.getInnerMostAxes(i.length,d.shape.length)),a.Ad.assertAxesAreInnerMostDims("argMax",[i[0]],d.shape.length);const b=Object(s.a)(t,d,i[0],"max");return l.forEach(e=>t.disposeIntermediateTensorInfo(e)),b}}},911:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),s=t(393),r=t(57);const c={kernelName:a.i,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:c}=e,{x:o}=n,{axis:u}=c;let i=a.Hf.parseAxisParam(u,o.shape);const p=a.Ad.getAxesPermutation(i,o.shape.length);let d=o;const l=[];null!=p&&(d=Object(r.a)({inputs:{x:o},backend:t,attrs:{perm:p}}),l.push(d),i=a.Ad.getInnerMostAxes(i.length,d.shape.length)),a.Ad.assertAxesAreInnerMostDims("argMin",[i[0]],d.shape.length);const b=Object(s.a)(t,d,i[0],"min");return l.forEach(e=>t.disposeIntermediateTensorInfo(e)),b}}},912:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(15);
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
const r=t(38).b+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n",c=Object(s.d)({opSnippet:r}),o={kernelName:a.j,backendName:"webgl",kernelFunc:c}},913:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(15);
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
const r=t(38).b+"return log(x + sqrt(x * x + 1.0));",c=Object(s.d)({opSnippet:r}),o={kernelName:a.k,backendName:"webgl",kernelFunc:c}},914:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(15);
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
const r=t(38).b+"\n  return atan(x);\n",c=Object(s.d)({opSnippet:r}),o={kernelName:a.l,backendName:"webgl",kernelFunc:c}},915:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(0),s=t(90),r=t(75),c=t(15);
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
const o=s.b+"\n  return atan(a, b);\n",u="\n  vec4 result = atan(a, b);\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  "+r.b+"\n  return result;\n",i=Object(c.b)({opSnippet:o,packedOpSnippet:u}),p={kernelName:a.m,backendName:"webgl",kernelFunc:i}},916:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(15);
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
const r=t(38).b+"\n  if ((x < -1.0) || (x > 1.0)) return NAN;\nreturn (log(1.0 + x) - log(1.0 - x)) / 2.0;",c=Object(s.d)({opSnippet:r}),o={kernelName:a.n,backendName:"webgl",kernelFunc:c}},917:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(103),r=t(13),c=t(65);const o={kernelName:a.o,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:o}=e,{x:u}=n;Object(r.a)(u,"avgPool");const{filterSize:i,strides:p,pad:d,dimRoundingMode:l}=o;a.Hf.assert(a.Ad.eitherStridesOrDilationsAreOne(p,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${p} and dilations '1'`);const b=a.Ad.computePool2DInfo(u.shape,i,p,1,d,l);if(1===b.filterWidth&&1===b.filterHeight&&a.Hf.arraysEqual(b.inShape,b.outShape))return Object(c.a)({inputs:{x:u},backend:t});const h=new s.a(b,"avg",!1);return t.runWebGLProgram(h,[u],"float32")}}},918:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(103);const r={kernelName:a.p,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:c}=n,{filterSize:o,strides:u,pad:i,dimRoundingMode:p,dataFormat:d}=r,l=a.Ad.computePool3DInfo(c.shape,o,u,[1,1,1],i,p,d),b=new s.b(l,"avg",!1);return t.runWebGLProgram(b,[c],"float32")}}},919:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(394);const r={kernelName:a.q,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{dy:c,input:o}=n,u=o,{filterSize:i,strides:p,pad:d,dimRoundingMode:l}=r,b=a.Ad.computePool3DInfo(u.shape,i,p,[1,1,1],d,l),h=new s.b(b);return t.runWebGLProgram(h,[c],u.dtype)}}},920:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),s=t(394),r=t(13);const c={kernelName:a.r,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:c}=e,{dy:o,input:u}=n,i=u;Object(r.a)([o,u],"avgPoolGrad");const{filterSize:p,strides:d,pad:l}=c,b=a.Ad.computePool2DInfo(i.shape,p,d,1,l),h=new s.a(b);return t.runWebGLProgram(h,[o],i.dtype)}}},921:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(189);const r={kernelName:a.s,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{a:r,b:c}=n,{transposeA:o,transposeB:u}=a;return Object(s.b)({a:r,b:c,transposeA:o,transposeB:u,backend:t})}}},922:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),s=t(924),r=t(923);
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
const c={kernelName:a.lb,backendName:"webgl",kernelFunc:({inputs:e,backend:n,attrs:t})=>{const{x:c,mean:o,variance:u,offset:i,scale:p}=e;a.Hf.assert(o.shape.length===u.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),a.Hf.assert(null==i||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),a.Hf.assert(null==p||o.shape.length===p.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:d}=t;null==d&&(d=.001);const l=[c,o,u];let b=null;null!=i&&(b=i.shape,l.push(i));let h=null;null!=p&&(h=p.shape,l.push(p));const f=Object(a.de)().getBool("WEBGL_PACK_NORMALIZATION")?new r.a(c.shape,o.shape,u.shape,b,h,d):new s.a(c.shape,o.shape,u.shape,b,h,d);return n.runWebGLProgram(f,l,l[0].dtype)}}},925:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(17),r=t(131),c=t(57);
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
const o={kernelName:a.t,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:o}=e,{x:u}=n,{blockShape:i,crops:p}=o;a.Hf.assert(u.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const d=i.reduce((e,n)=>e*n),l=a.Ad.getReshaped(u.shape,i,d),b=a.Ad.getPermuted(l.length,i.length),h=a.Ad.getReshapedPermuted(u.shape,i,d),f=a.Ad.getSliceBeginCoords(p,i.length),k=a.Ad.getSliceSize(h,p,i.length),m=[],g=Object(s.a)({inputs:{x:u},backend:t,attrs:{shape:l}}),x=Object(c.a)({inputs:{x:g},backend:t,attrs:{perm:b}}),N=Object(s.a)({inputs:{x:x},backend:t,attrs:{shape:h}}),A=Object(r.a)({inputs:{x:N},backend:t,attrs:{begin:f,size:k}});return m.push(g),m.push(x),m.push(N),m.forEach(e=>t.disposeIntermediateTensorInfo(e)),A}}},928:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(18);const r={kernelName:a.u,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:r,weights:c}=n,{size:o}=a,u=t.readSync(r.dataId),i=t.readSync(c.dataId),p=Object(s.b)(u,i,c.dtype,c.shape,o);return t.makeTensorInfo([o],c.dtype,p)}}},929:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0);
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
 */const s={kernelName:a.v,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t}=e,{s0:s,s1:r}=n,c=t.readSync(s.dataId),o=t.readSync(r.dataId),u=a.Ad.assertAndGetBroadcastShape(Array.from(c),Array.from(o));return t.makeTensorInfo([u.length],"int32",Int32Array.from(u))}}}}]);