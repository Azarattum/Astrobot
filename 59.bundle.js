(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{203:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i}));var a=n(0),r=n(45);
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
function s(t){const{inputs:e,backend:n,attrs:s}=t,{input:i}=e,{dim:o}=s,d=i.shape.length,c=i.shape.slice();let u=o;return o<0&&(a.Hf.assert(-(d+1)<=o,()=>`Axis must be in the interval [${-(d+1)}, ${d}]`),u=d+o+1),c.splice(u,0,1),Object(r.a)({inputs:{x:i},backend:n,attrs:{shape:c}})}const i={kernelName:a.db,backendName:"cpu",kernelFunc:s}},238:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return d}));var a=n(0),r=n(46),s=n(48);
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
const i=Object(r.a)((t,e)=>t===e?1:0),o=Object(s.a)(a.ab,i,null,"bool"),d={kernelName:a.ab,backendName:"cpu",kernelFunc:o}},239:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return d}));var a=n(0),r=n(94),s=n(29);
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
const i=Object(r.a)(t=>Math.exp(t)),o=Object(s.b)(a.cb,i,"float32"),d={kernelName:a.cb,backendName:"cpu",kernelFunc:o}},323:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return d}));var a=n(0),r=n(94),s=n(29);
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
const i=Object(r.a)(t=>Math.expm1(t)),o=Object(s.b)(a.eb,i),d={kernelName:a.eb,backendName:"cpu",kernelFunc:o}},379:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i}));var a=n(0),r=n(29);
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
const s=Object(r.a)(a.Y,t=>t>=0?t:Math.exp(t)-1),i={kernelName:a.Y,backendName:"cpu",kernelFunc:s}},801:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(0);
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
 */const r={kernelName:a.T,backendName:"cpu",kernelFunc:function(t){const{inputs:e,backend:n}=t,{x:r}=e,s=a.Hf.sizeFromShape(r.shape),i=n.data.get(r.dataId).values,o=Object(a.Hd)([s,s],r.dtype),d=o.values;for(let t=0;t<i.length;t++)d[t*s+t]=i[t];const c=[...r.shape,...r.shape];return n.makeTensorInfo(c,o.dtype,o.values)}}},802:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(0);
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
 */const r={kernelName:a.U,backendName:"cpu",kernelFunc:({inputs:t,backend:e,attrs:n})=>{const{x:r,filter:s}=t,{strides:i,pad:o,dilations:d}=n,c=e,u=c.data.get(r.dataId).values,l=r.shape.length,p=c.data.get(s.dataId).values,f=s.shape.length,{batchSize:h,inHeight:b,inWidth:m,inChannels:k,outHeight:g,outWidth:y,padInfo:H,strideHeight:N,strideWidth:A,filterHeight:I,filterWidth:v,dilationHeight:F,dilationWidth:E,outShape:W}=a.Ad.computeDilation2DInfo(r.shape,s.shape,i,o,"NHWC",d),x=a.Hf.sizeFromShape(W),S=W.length,T=a.Hf.getArrayFromDType(r.dtype,x);for(let t=0;t<h;++t)for(let e=0;e<g;++e){const n=e*N-H.top;for(let i=0;i<y;++i){const o=i*A-H.left;for(let d=0;d<k;++d){let c=Number.MIN_SAFE_INTEGER;for(let e=0;e<I;++e){const i=n+e*F;if(i>=0&&i<b)for(let n=0;n<v;++n){const h=o+n*E;if(h>=0&&h<m){const o=a.Hf.locToIndex([t,i,h,d],l,a.Hf.computeStrides(r.shape)),b=a.Hf.locToIndex([e,n,d],f,a.Hf.computeStrides(s.shape)),m=u[o]+p[b];m>c&&(c=m)}}}T[a.Hf.locToIndex([t,e,i,d],S,a.Hf.computeStrides(W))]=c}}}return{dataId:c.write(a.Hf.toTypedArray(T,r.dtype),W,r.dtype),shape:W,dtype:r.dtype}}}},803:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(0);
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
 */const r={kernelName:a.V,backendName:"cpu",kernelFunc:({inputs:t,backend:e,attrs:n})=>{const{x:r,filter:s,dy:i}=t,{strides:o,pad:d,dilations:c}=n,u=e,l=a.Hf.toNestedArray(r.shape,u.data.get(r.dataId).values),p=a.Hf.toNestedArray(s.shape,u.data.get(s.dataId).values),{batchSize:f,inHeight:h,inWidth:b,inChannels:m,outHeight:k,outWidth:g,padInfo:y,strideHeight:H,strideWidth:N,filterHeight:A,filterWidth:I,dilationHeight:v,dilationWidth:F,outShape:E}=a.Ad.computeDilation2DInfo(r.shape,s.shape,o,d,"NHWC",c);a.Hf.assert(i.rank===E.length,()=>`Error in ${a.V}, dy must have the same rank as output ${E.length}, but got `+i.rank);const W=a.Hf.toNestedArray(E,u.data.get(i.dataId).values),x=a.Hf.makeZerosNestedTypedArray(s.shape,s.dtype);for(let t=0;t<f;++t)for(let e=0;e<k;++e){const n=e*H-y.top;for(let a=0;a<g;++a){const r=a*N-y.left;for(let s=0;s<m;++s){let i=Number.MIN_SAFE_INTEGER,o=0,d=0;for(let e=0;e<A;++e){const a=n+e*v;if(a>=0&&a<h)for(let n=0;n<I;++n){const c=r+n*F;if(c>=0&&c<b){const r=l[t][a][c][s]+p[e][n][s];r>i&&(i=r,o=e,d=n)}}}x[o][d][s]+=W[t][e][a][s]}}}return{dataId:u.write(a.Hf.toTypedArray(x,r.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}}},804:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(0);
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
 */const r={kernelName:a.W,backendName:"cpu",kernelFunc:({inputs:t,backend:e,attrs:n})=>{const{x:r,filter:s,dy:i}=t,{strides:o,pad:d,dilations:c}=n,u=e,l=a.Hf.toNestedArray(r.shape,u.data.get(r.dataId).values),p=a.Hf.toNestedArray(s.shape,u.data.get(s.dataId).values),{batchSize:f,inHeight:h,inWidth:b,inChannels:m,outHeight:k,outWidth:g,padInfo:y,strideHeight:H,strideWidth:N,filterHeight:A,filterWidth:I,dilationHeight:v,dilationWidth:F,outShape:E}=a.Ad.computeDilation2DInfo(r.shape,s.shape,o,d,"NHWC",c);a.Hf.assert(i.rank===E.length,()=>`Error in ${a.W}, dy must have the same rank as output ${E.length}, but got `+i.rank);const W=a.Hf.toNestedArray(E,u.data.get(i.dataId).values),x=a.Hf.makeZerosNestedTypedArray(r.shape,r.dtype);for(let t=0;t<f;++t)for(let e=0;e<k;++e){const n=e*H-y.top;for(let a=0;a<g;++a){const r=a*N-y.left;for(let s=0;s<m;++s){let i=Number.MIN_SAFE_INTEGER,o=n<0?0:n,d=r<0?0:r;for(let e=0;e<A;++e){const a=n+e*v;if(a>=0&&a<h)for(let n=0;n<I;++n){const c=r+n*F;if(c>=0&&c<b){const r=l[t][a][c][s]+p[e][n][s];r>i&&(i=r,o=a,d=c)}}}x[t][o][d][s]+=W[t][e][a][s]}}}return{dataId:u.write(a.Hf.toTypedArray(x,r.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}}},805:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n(0),r=n(125),s=n(45),i=n(150),o=n(59);const d={kernelName:a.X,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:d}=t,{equation:c}=d,u=e,{allDims:l,summedDims:p,idDims:f}=a.Ad.decodeEinsumEquation(c,u.length);a.Ad.checkEinsumDimSizes(l.length,f,u);const{path:h,steps:b}=a.Ad.getEinsumComputePath(p,f),m=b.length;let k=null,g=l.length;const y=[];for(let t=0;t<m;++t){for(const e of b[t]){const{permutationIndices:t,expandDims:i}=a.Ad.getEinsumPermutation(g,f[e]);let d;a.Ad.isIdentityPermutation(t)?d=u[e]:(d=Object(o.a)({inputs:{x:u[e]},backend:n,attrs:{perm:t}}),y.push(d));const c=d.shape.slice();for(let t=0;t<i.length;++t)c.splice(i[t],0,1);a.Hf.arraysEqual(d.shape,c)||(d=Object(s.a)({inputs:{x:d},backend:n,attrs:{shape:c}}),y.push(d)),null===k?k=d:(k=Object(r.a)({inputs:{a:d,b:k},backend:n}),y.push(k))}t<m-1&&(h[t]>=0&&(k=Object(i.a)({inputs:{x:k},backend:n,attrs:{axis:h[t]-(l.length-g),keepDims:!1}}),y.push(k)),g--)}for(const t of y)t!==k&&n.disposeIntermediateTensorInfo(t);return k}}},806:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(0),r=n(14);const s={kernelName:a.Z,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n}=t,{dy:s,y:i}=e;Object(r.a)([s,i],"eluGrad");const o=new Float32Array(a.Hf.sizeFromShape(i.shape)),d=n.data.get(i.dataId).values,c=n.data.get(s.dataId).values;for(let t=0;t<d.length;++t){const e=d[t];o[t]=e>=1?c[t]:c[t]*(e+1)}return n.makeTensorInfo(i.shape,"float32",o)}}},807:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n(0),r=n(29);
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
const s=a.Ad.ERF_P,i=a.Ad.ERF_A1,o=a.Ad.ERF_A2,d=a.Ad.ERF_A3,c=a.Ad.ERF_A4,u=a.Ad.ERF_A5,l=Object(r.a)(a.bb,t=>{const e=Math.sign(t),n=Math.abs(t),a=1/(1+s*n);return e*(1-((((u*a+c)*a+d)*a+o)*a+i)*a*Math.exp(-n*n))}),p={kernelName:a.bb,backendName:"cpu",kernelFunc:l}}}]);