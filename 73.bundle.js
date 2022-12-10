(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{137:function(e,n,t){"use strict";
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
function a(e){const{inputs:n,backend:t}=e,{input:a}=n,c=t.data.get(a.dataId).complexTensorInfos.imag,r=t.data.get(c.dataId).values;return t.makeTensorInfo(c.shape,c.dtype,r)}t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return c}));const c={kernelName:t(0).ub,backendName:"cpu",kernelFunc:a}},245:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return r}));var a=t(0);
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
 */function c(e){const{backend:n,attrs:t}=e,{shape:c,value:r,dtype:s}=t,o=s||a.Hf.inferDtype(r),u=a.Hf.getArrayFromDType(o,a.Hf.sizeFromShape(c));return function(e,n,t){e.fill(n)}(u,r),n.makeTensorInfo(c,o,u)}const r={kernelName:a.gb,backendName:"cpu",kernelFunc:c}},324:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var a=t(0),c=t(94),r=t(29);
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
const s=Object(c.a)(e=>Math.floor(e)),o=Object(r.b)(a.ib,s),u={kernelName:a.ib,backendName:"cpu",kernelFunc:o}},325:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0);
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
 */function c(e,n,t,c,r,s,o,u,i){const d=Object(a.Hd)([c,s],t);for(let t=0;t<c;t++){const a=[];let c=0;for(let n=0;n<r;n++){const s=e[t*r+n];c+=s*o[n],a.push(s)}if(c<0||c>=i/s)throw new Error(`Invalid indices: ${a} does not index into ${u}`);for(let e=0;e<s;e++)d.values[t*s+e]=n.get(...n.indexToLoc(c*s+e))}return d}},326:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0);
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
 */function c(e,n,t){const c=Object(a.Hd)(t,e.dtype);for(let t=0;t<c.size;++t){const a=c.indexToLoc(t).slice(),r=a[0],s=a[2],o=n.locToIndex([r,s]);a[2]=n.values[o];const u=e.locToIndex(a);0<=u&&u<e.values.length&&(c.values[t]=e.values[u])}return c}},327:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var a=t(0),c=t(46),r=t(48);
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
const s=Object(c.a)((e,n)=>e>n?1:0),o=Object(r.a)(a.qb,s,null,"bool"),u={kernelName:a.qb,backendName:"cpu",kernelFunc:o}},328:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var a=t(0),c=t(46),r=t(48);
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
const s=Object(c.a)((e,n)=>e>=n?1:0),o=Object(r.a)(a.rb,s,null,"bool"),u={kernelName:a.rb,backendName:"cpu",kernelFunc:o}},329:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var a=t(0),c=t(46),r=t(48);
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
const s=Object(c.a)((e,n)=>e<n?1:0),o=Object(r.a)(a.Cb,s,null,"bool"),u={kernelName:a.Cb,backendName:"cpu",kernelFunc:o}},330:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var a=t(0),c=t(46),r=t(48);
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
const s=Object(c.a)((e,n)=>e<=n?1:0),o=Object(r.a)(a.Db,s,null,"bool"),u={kernelName:a.Db,backendName:"cpu",kernelFunc:o}},331:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0);
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
 */function c(e,n,t){const c=(n-e)/(t-1),r=a.Hf.makeZerosTypedArray(t,"float32");r[0]=e;for(let e=1;e<r.length;e++)r[e]=r[e-1]+c;return r}},332:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var a=t(0),c=t(94),r=t(29);
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
const s=Object(c.a)(e=>Math.log(e)),o=Object(r.b)(a.Fb,s),u={kernelName:a.Fb,backendName:"cpu",kernelFunc:o}},382:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return s}));var a=t(0),c=t(14);
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
function r(e){const{inputs:n,backend:t,attrs:r}=e,{x:s}=n,{alpha:o}=r;Object(c.a)([s],"leakyRelu");const u=a.Hf.sizeFromShape(s.shape),i=t.data.get(s.dataId).values,d=a.Hf.getTypedArrayFromDType("float32",u);for(let e=0;e<i.length;e++)d[e]=i[e]<0?o*i[e]:i[e];return t.makeTensorInfo(s.shape,"float32",d)}const s={kernelName:a.Bb,backendName:"cpu",kernelFunc:r}},808:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),c=t(385),r=t(45);const s={kernelName:a.fb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{input:s}=n,o=a.Hf.sizeFromShape(s.shape),u=s.shape[s.shape.length-1],i=o/u,d=Object(r.a)({inputs:{x:s},backend:t,attrs:{shape:[i,u]}}),b=Object(c.a)(d,!1,t),l=Object(r.a)({inputs:{x:b},backend:t,attrs:{shape:s.shape}});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(b),l}}},809:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0);
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
 */const c={kernelName:a.hb,backendName:"cpu",kernelFunc:({inputs:e,attrs:n,backend:t})=>{const{image:c}=e,r=t,s=a.Hf.getTypedArrayFromDType(c.dtype,a.Hf.sizeFromShape(c.shape)),[o,u,i,d]=c.shape,b=r.data.get(c.dataId).values;for(let e=0;e<o;e++){const n=e*i*u*d;for(let e=0;e<u;e++){const t=e*(i*d);for(let e=0;e<i;e++){const a=e*d;for(let c=0;c<d;c++){const r=Math.round(i-e-1),o=n+t+a+c;let u=b[o];if(r>=0&&r<i){u=b[n+t+r*d+c]}s[o]=u}}}}return{dataId:r.write(s,c.shape,c.dtype),shape:c.shape,dtype:c.dtype}}}},81:function(e,n,t){"use strict";
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
function a(e){const{inputs:n,backend:t}=e,{x:a}=n;return t.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return c}));const c={kernelName:t(0).tb,backendName:"cpu",kernelFunc:a}},810:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),c=t(46),r=t(48);
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
const s=Object(c.a)((e,n)=>Math.floor(e/n)),o=Object(r.a)(a.jb,s,null,"int32"),u={kernelName:a.jb,backendName:"cpu",kernelFunc:o}},811:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),c=t(201),r=t(116),s=t(383),o=t(45);const u={kernelName:a.mb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:u,filter:i,bias:d,preluActivationWeights:b}=n,{strides:l,pad:p,dataFormat:f,dilations:k,dimRoundingMode:m,activation:h,leakyreluAlpha:N}=a;let v=Object(s.a)({inputs:{x:u,filter:i},backend:t,attrs:{strides:l,pad:p,dataFormat:f,dilations:k,dimRoundingMode:m}});if(d){const e=v;if("NCHW"===f&&1===d.shape.length&&1!==d.shape[0]){const e=Object(o.a)({inputs:{x:d},backend:t,attrs:{shape:[d.shape[0],1,1]}});v=Object(r.a)({inputs:{a:v,b:e},backend:t}),t.disposeIntermediateTensorInfo(e)}else v=Object(r.a)({inputs:{a:v,b:d},backend:t});t.disposeIntermediateTensorInfo(e)}if(h){const e=v;if("NCHW"===f&&"prelu"===h&&1===b.shape.length&&1!==b.shape[0]){const e=Object(o.a)({inputs:{x:b},backend:t,attrs:{shape:[b.shape[0],1,1]}});v=Object(c.a)(t,v,h,e,N),t.disposeIntermediateTensorInfo(e)}else v=Object(c.a)(t,v,h,b,N);t.disposeIntermediateTensorInfo(e)}return v}}},812:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),c=t(201),r=t(116),s=t(384);const o={kernelName:a.nb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:o,filter:u,bias:i,preluActivationWeights:d}=n,{strides:b,pad:l,dataFormat:p,dilations:f,dimRoundingMode:k,activation:m,leakyreluAlpha:h}=a;let N=Object(s.a)({inputs:{x:o,filter:u},backend:t,attrs:{strides:b,pad:l,dataFormat:p,dilations:f,dimRoundingMode:k}});if(i){const e=N;N=Object(r.a)({inputs:{a:N,b:i},backend:t}),t.disposeIntermediateTensorInfo(e)}if(m){const e=N;N=Object(c.a)(t,N,m,d,h),t.disposeIntermediateTensorInfo(e)}return N}}},813:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),c=t(325);const r={kernelName:a.ob,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{params:r,indices:s}=n,o=a.Hf.sizeFromShape(r.shape),u=s.shape,i=u[u.length-1],[d,b,l,p]=a.Ad.prepareAndValidate(r,s);if(0===b)return t.makeTensorInfo(d,r.dtype,[]);const f=t.data.get(s.dataId).values,k=t.bufferSync(r),m=Object(c.a)(f,k,r.dtype,b,i,l,p,r.shape,o);return t.makeTensorInfo(d,r.dtype,m.values)}}},814:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),c=t(14),r=t(326),s=t(45);const o={kernelName:a.pb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:o}=e,{x:u,indices:i}=n,{axis:d,batchDims:b}=o;Object(c.a)([u,i],"gatherV2");const l=a.Hf.parseAxisParam(d,u.shape)[0],p=t.data.get(i.dataId).values,f=u.shape[l];for(let e=0;e<p.length;++e){const n=p[e];a.Hf.assert(n<=f-1&&n>=0,()=>`GatherV2: the index value ${n} is not in [0, ${f-1}]`)}let k=b;null==b&&(k=0);const m=a.Hf.sizeFromShape(i.shape),h=a.Ad.segment_util.collectGatherOpShapeInfo(u,i,l,k),N=Object(s.a)({inputs:{x:u},backend:t,attrs:{shape:[h.batchSize,h.outerSize,h.dimSize,h.sliceSize]}}),v=Object(s.a)({inputs:{x:i},backend:t,attrs:{shape:[h.batchSize,m/h.batchSize]}}),I=[h.batchSize,h.outerSize,m/h.batchSize,h.sliceSize],j=t.bufferSync(v),O=t.bufferSync(N),F=Object(r.a)(O,j,I);return t.disposeIntermediateTensorInfo(N),t.disposeIntermediateTensorInfo(v),t.makeTensorInfo(h.outputShape,F.dtype,F.values)}}},815:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),c=t(385),r=t(45);const s={kernelName:a.sb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{input:s}=n,o=a.Hf.sizeFromShape(s.shape),u=s.shape[s.shape.length-1],i=o/u,d=Object(r.a)({inputs:{x:s},backend:t,attrs:{shape:[i,u]}}),b=Object(c.a)(d,!0,t),l=Object(r.a)({inputs:{x:b},backend:t,attrs:{shape:s.shape}});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(b),l}}},816:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),c=t(29);
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
const r=Object(c.a)(a.vb,e=>Number.isFinite(e)?1:0,"bool"),s={kernelName:a.vb,backendName:"cpu",kernelFunc:r}},817:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),c=t(29);
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
const r=Object(c.a)(a.wb,e=>Math.abs(e)===1/0?1:0,"bool"),s={kernelName:a.wb,backendName:"cpu",kernelFunc:r}},818:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),c=t(29);
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
const r=Object(c.a)(a.xb,e=>Number.isNaN(e)?1:0,"bool"),s={kernelName:a.xb,backendName:"cpu",kernelFunc:r}},819:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),c=t(331);const r={kernelName:a.Eb,backendName:"cpu",kernelFunc:
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
function(e){const{backend:n,attrs:t}=e,{start:a,stop:r,num:s}=t,o=Object(c.a)(a,r,s);return n.makeTensorInfo([o.length],"float32",o)}}},820:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),c=t(29);
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
const r=Object(c.a)(a.Gb,e=>Math.log1p(e)),s={kernelName:a.Gb,backendName:"cpu",kernelFunc:r}},821:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),c=t(46),r=t(48);
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
const s=Object(c.a)((e,n)=>e&&n),o=Object(r.a)(a.Hb,s,null,"bool"),u={kernelName:a.Hb,backendName:"cpu",kernelFunc:o}},822:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),c=t(29);
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
const r=Object(c.a)(a.Ib,e=>e?0:1,"bool"),s={kernelName:a.Ib,backendName:"cpu",kernelFunc:r}},823:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),c=t(46),r=t(48);
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
const s=Object(c.a)((e,n)=>e||n),o=Object(r.a)(a.Jb,s,null,"bool"),u={kernelName:a.Jb,backendName:"cpu",kernelFunc:o}},824:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),c=t(14);const r={kernelName:a.zb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:s}=n,{depthRadius:o,bias:u,alpha:i,beta:d}=r;Object(c.a)(s,"LRN");const b=s.shape[3],l=b-1,p=t.data.get(s.dataId).values,f=a.Hf.sizeFromShape(s.shape),k=new Float32Array(f);function m(e){const n=e%b;let t=e-n+Math.max(0,n-o);const a=e-n+Math.min(n+o,l);let c=0;for(;t<=a;t++){const e=p[t];c+=e*e}return c}for(let e=0;e<f;e++){const n=m(e),t=p[e]*Math.pow(u+i*n,-d);k[e]=t}return t.makeTensorInfo(s.shape,s.dtype,k)}}},825:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),c=t(14);const r={kernelName:a.Ab,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:s,y:o,dy:u}=n,{depthRadius:i,bias:d,alpha:b,beta:l}=r;Object(c.a)(u,"LRNGrad");const p=a.Hf.sizeFromShape(u.shape),f=u.shape[3],k=t.data.get(u.dataId).values,m=t.data.get(s.dataId).values,h=t.data.get(o.dataId).values,N=new Float32Array(p),v=p;for(let e=0;e<v;e++){const n=e%f,t=e-n+Math.max(0,n-i),a=e-n+Math.min(f,n+i+1);let c=0;for(let e=t;e<a;e++)c+=Math.pow(m[e],2);c=b*c+d;for(let n=t;n<a;n++){let t=-2*b*l*m[n]*h[e]/c;e===n&&(t+=Math.pow(c,-l)),t*=k[e],N[n]+=t}}return t.makeTensorInfo(u.shape,s.dtype,N)}}}}]);