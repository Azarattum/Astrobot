(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{116:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var a=n(0),s=n(46),r=n(48);
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
const o=Object(s.a)((e,t)=>e+t),c=Object(r.b)((e,t,n,a)=>({real:e+n,imag:t+a})),i=Object(r.a)(a.d,o,c),d={kernelName:a.d,backendName:"cpu",kernelFunc:i}},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0);
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
 */function s(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&a.Hf.assert("complex64"!==e.dtype,()=>t+" does not support complex64 tensors in the CPU backend.")})}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}));var a=n(0);
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
 */function s(e,t,n,s,r){const o=a.Hf.sizeFromShape(s),c=a.Hf.makeZerosTypedArray(r,n);for(let n=0;n<e.length;n++){const a=e[n];if(a<0)throw new Error("Input x must be non-negative!");a>=r||(c[a]+=o>0?t[n]:1)}return c}function r(e,t,n,s=!1){const r=e.shape[0],o=e.shape[1],c=Object(a.Hd)([r,n],t.dtype);for(let a=0;a<r;a++)for(let r=0;r<o;r++){const o=e.get(a,r);if(o<0)throw new Error("Input x must be non-negative!");o>=n||(s?c.set(1,a,o):t.size>0?c.set(c.get(a,o)+t.get(a,r),a,o):c.set(c.get(a,o)+1,a,o))}return c}},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return MathBackendCPU}));var a=n(0),s=n(14);
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
const r=a.re.whereImpl;class MathBackendCPU extends a.yb{constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new a.N(this,Object(a.ce)())}nextDataId(){return MathBackendCPU.nextDataId++}write(e,t,n){this.firstUse&&(this.firstUse=!1,Object(a.de)().get("IS_NODE")&&a.Ad.warn("\n============================\nHi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. \n============================"));const s={id:this.nextDataId()};return this.data.set(s,{values:e,dtype:n,refCount:1}),s}makeTensorInfo(e,t,n){let s;if("string"===t&&null!=n&&n.length>0&&a.Hf.isString(n[0])){const r=n.map(e=>a.Hf.encodeString(e));s=this.write(r,e,t)}else s=this.write(n,e,t);return{dataId:s,shape:e,dtype:t}}refCount(e){if(this.data.has(e)){return this.data.get(e).refCount}return 0}incRef(e){this.data.get(e).refCount++}decRef(e){if(this.data.has(e)){this.data.get(e).refCount--}}move(e,t,n,a,s){this.data.set(e,{values:t,dtype:a,refCount:s})}numDataIds(){return this.data.numDataIds()}async read(e){return this.readSync(e)}readSync(e){const{dtype:t,complexTensorInfos:n}=this.data.get(e);if("complex64"===t){const e=this.readSync(n.real.dataId),t=this.readSync(n.imag.dataId);return a.Ad.mergeRealAndImagArrays(e,t)}return this.data.get(e).values}bufferSync(e){const t=this.readSync(e.dataId);if("string"===e.dtype)try{const n=t.map(e=>a.Hf.decodeString(e));return Object(a.Hd)(e.shape,e.dtype,n)}catch(e){throw new Error("Failed to decode encoded string bytes into utf-8")}return Object(a.Hd)(e.shape,e.dtype,t)}makeOutput(e,t,n){return Object(a.ce)().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,e),this)}disposeData(e,t=!1){if(this.data.has(e)){if(this.data.get(e).refCount--,!t&&this.data.get(e).refCount>0)return!1;const{complexTensorInfos:n}=this.data.get(e);null!=n&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(e)}return!0}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}async time(e){const t=a.Hf.now();e();return{kernelMs:a.Hf.now()-t}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(e){Object(s.a)([e],"where");const t=this.readSync(e.dataId);return r(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}MathBackendCPU.nextDataId=0},320:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(0),s=n(14);
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
function r(e){const t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}const o={kernelName:a.a,backendName:"cpu",kernelFunc:e=>{const{x:t}=e.inputs,n=e.backend;Object(s.a)(t,"abs");let o=new Float32Array(a.Hf.sizeFromShape(t.shape));return o=r(n.data.get(t.dataId).values),n.makeOutput(o,t.shape,t.dtype)}}},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var a=n(0),s=n(14),r=n(45);
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
function o(e){const{inputs:t,backend:n,attrs:o}=e,{a:c,b:i}=t,{transposeA:d,transposeB:u}=o;Object(s.a)([c,i],"matMul");const l=c.shape.length,p=i.shape.length,h=d?c.shape[l-2]:c.shape[l-1],f=u?i.shape[p-1]:i.shape[p-2],m=d?c.shape[l-1]:c.shape[l-2],g=u?i.shape[p-2]:i.shape[p-1],k=c.shape.slice(0,-2),b=i.shape.slice(0,-2),I=a.Hf.sizeFromShape(k),v=a.Hf.sizeFromShape(b),A=a.Fd.assertAndGetBroadcastShape(c.shape.slice(0,-2),i.shape.slice(0,-2)).concat([m,g]);a.Hf.assert(h===f,()=>`Error in matMul: inner shapes (${h}) and (${f}) of Tensors with shapes ${c.shape} and ${i.shape} and transposeA=${d} and transposeB=${u} must match.`);const y=d?[I,h,m]:[I,m,h],O=u?[v,g,f]:[v,f,g],x=Object(r.a)({inputs:{x:c},backend:n,attrs:{shape:y}}),H=Object(r.a)({inputs:{x:i},backend:n,attrs:{shape:O}}),j=d?x.shape[1]:x.shape[2],S=d?x.shape[2]:x.shape[1],N=u?H.shape[1]:H.shape[2],F=Math.max(I,v),T=n.data.get(x.dataId).values,M=n.data.get(H.dataId).values,D=a.Hf.computeStrides(x.shape),w=a.Hf.computeStrides(H.shape),[z,P,C]=d?[D[0],1,D[1]]:[D[0],D[1],1],[W,B,E]=u?[1,w[1],w[0]]:[w[1],1,w[0]],R=S*N,q=Object(a.Hd)([F,S,N],x.dtype),U=q.values,$=n.blockSize;for(let e=0;e<F;e++)for(let t=0;t<S;t+=$)for(let n=0;n<N;n+=$)for(let a=0;a<j;a+=$){const s=Math.min(t+$,S),r=Math.min(n+$,N),o=Math.min(a+$,j);for(let c=t;c<s;c++)for(let t=n;t<r;t++){let n=0;for(let s=a;s<o;s++){const a=Math.min(e,I-1)*z,r=Math.min(e,v-1)*E;n+=T[a+c*P+s*C]*M[s*W+t*B+r]}U[e*R+(c*N+t)]+=n}}return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(H),n.makeTensorInfo(A,q.dtype,q.values)}const c={kernelName:a.s,backendName:"cpu",kernelFunc:o}},438:function(e,t,n){"use strict";var a=n(552);n.d(t,"a",(function(){return a.a}));n(1259);
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
 */},552:function(e,t,n){"use strict";var a=n(0),s=n(319),r=n(553);n.d(t,"a",(function(){return r.a})),
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
Object(a.Ve)("cpu",()=>new s.a,1)},765:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(29);
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
const r=Object(s.a)(a.b,e=>Math.acos(e)),o={kernelName:a.b,backendName:"cpu",kernelFunc:r}},766:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(29);
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
const r=Object(s.a)(a.c,e=>Math.acosh(e)),o={kernelName:a.c,backendName:"cpu",kernelFunc:r}},767:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(14);const r={kernelName:a.e,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,r=t;Object(s.a)(t,"addN");const o=r.map(e=>n.data.get(e.dataId).values),c=Object(a.Hd)(r[0].shape,r[0].dtype),i=c.values;for(let e=0;e<r.length;e++){const t=o[e];for(let e=0;e<i.length;e++)i[e]+=t[e]}return n.makeTensorInfo(c.shape,c.dtype,c.values)}}},768:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),s=n(14),r=n(45),o=n(59);const c={kernelName:a.f,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{x:i}=t,{axis:d,keepDims:u}=c;Object(s.a)(i,"all");const l=a.Hf.parseAxisParam(d,i.shape);let p=l;const h=a.Ad.getAxesPermutation(p,i.shape.length);let f=i;null!=h&&(f=Object(o.a)({inputs:{x:i},backend:n,attrs:{perm:h}}),p=a.Ad.getInnerMostAxes(p.length,i.shape.length)),a.Ad.assertAxesAreInnerMostDims("all",p,f.shape.length);const[m,g]=a.Ad.computeOutAndReduceShapes(f.shape,p),k=a.Hf.sizeFromShape(g),b=a.Hf.makeZerosTypedArray(a.Hf.sizeFromShape(m),f.dtype),I=n.data.get(f.dataId).values;for(let e=0;e<b.length;++e){const t=e*k;let n=I[t];for(let e=0;e<k;++e){const a=I[t+e];n=n&&a}b[e]=n}null!=h&&n.disposeIntermediateTensorInfo(f);const v=n.makeTensorInfo(m,f.dtype,b);if(u){const e=a.Ad.expandShapeToKeepDim(m,l),t=Object(r.a)({inputs:{x:v},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(v),t}return v}}},769:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),s=n(14),r=n(45),o=n(59);const c={kernelName:a.g,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{x:i}=t,{axis:d,keepDims:u}=c;Object(s.a)(i,"any");const l=a.Hf.parseAxisParam(d,i.shape);let p=l;const h=a.Ad.getAxesPermutation(p,i.shape.length);let f=i;null!=h&&(f=Object(o.a)({inputs:{x:i},backend:n,attrs:{perm:h}}),p=a.Ad.getInnerMostAxes(p.length,i.shape.length)),a.Ad.assertAxesAreInnerMostDims("any",p,f.shape.length);const[m,g]=a.Ad.computeOutAndReduceShapes(f.shape,p),k=a.Hf.sizeFromShape(g),b=a.Hf.makeZerosTypedArray(a.Hf.sizeFromShape(m),f.dtype),I=n.data.get(f.dataId).values;for(let e=0;e<b.length;++e){const t=e*k;let n=I[t];for(let e=0;e<k;++e){const a=I[t+e];n=n||a}b[e]=n}null!=h&&n.disposeIntermediateTensorInfo(f);const v=n.makeTensorInfo(m,f.dtype,b);if(u){const e=a.Ad.expandShapeToKeepDim(m,l),t=Object(r.a)({inputs:{x:v},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(v),t}return v}}},770:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14),r=n(59);const o={kernelName:a.h,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:o}=e,{x:c}=t,{axis:i}=o;Object(s.a)(c,"argMax");let d=a.Hf.parseAxisParam(i,c.shape);const u=a.Ad.getAxesPermutation(d,c.shape.length);let l=c;const p=[];null!=u&&(l=Object(r.a)({inputs:{x:c},backend:n,attrs:{perm:u}}),p.push(l),d=a.Ad.getInnerMostAxes(d.length,l.shape.length)),d=[d[0]],a.Ad.assertAxesAreInnerMostDims("argMax",d,l.shape.length);const[h,f]=a.Ad.computeOutAndReduceShapes(l.shape,d),m=a.Hf.sizeFromShape(h),g=a.Hf.makeZerosTypedArray(m,"int32"),k=a.Hf.sizeFromShape(f),b=n.data.get(l.dataId).values;for(let e=0;e<g.length;++e){const t=e*k;let n=b[t],a=0;for(let e=0;e<k;++e){const s=b[t+e];s>n&&(n=s,a=e)}g[e]=a}return p.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(h,"int32",g)}}},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14),r=n(59);const o={kernelName:a.i,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:o}=e,{x:c}=t,{axis:i}=o;Object(s.a)(c,"argMin");let d=a.Hf.parseAxisParam(i,c.shape);const u=a.Ad.getAxesPermutation(d,c.shape.length);let l=c;const p=[];null!=u&&(l=Object(r.a)({inputs:{x:c},backend:n,attrs:{perm:u}}),p.push(l),d=a.Ad.getInnerMostAxes(d.length,l.shape.length)),d=[d[0]],a.Ad.assertAxesAreInnerMostDims("argMin",d,l.shape.length);const[h,f]=a.Ad.computeOutAndReduceShapes(l.shape,d),m=a.Hf.sizeFromShape(h),g=a.Hf.makeZerosTypedArray(m,"int32"),k=a.Hf.sizeFromShape(f),b=n.data.get(l.dataId).values;for(let e=0;e<g.length;++e){const t=e*k;let n=b[t],a=0;for(let e=0;e<k;++e){const s=b[t+e];s<n&&(n=s,a=e)}g[e]=a}return p.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(h,"int32",g)}}},772:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(29);
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
const r=Object(s.a)(a.j,e=>Math.asin(e)),o={kernelName:a.j,backendName:"cpu",kernelFunc:r}},773:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(29);
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
const r=Object(s.a)(a.k,e=>Math.asinh(e)),o={kernelName:a.k,backendName:"cpu",kernelFunc:r}},774:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(29);
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
const r=Object(s.a)(a.l,e=>Math.atan(e)),o={kernelName:a.l,backendName:"cpu",kernelFunc:r}},775:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),s=n(46),r=n(48);
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
const o=Object(s.a)((e,t)=>Math.atan2(e,t)),c=Object(r.a)(a.m,o),i={kernelName:a.m,backendName:"cpu",kernelFunc:c}},776:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(29);
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
const r=Object(s.a)(a.n,e=>Math.atanh(e)),o={kernelName:a.n,backendName:"cpu",kernelFunc:r}},777:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),s=n(14),r=n(102),o=n(81);const c={kernelName:a.o,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{x:i}=t;Object(s.a)(i,"avgPool");const{filterSize:d,strides:u,pad:l,dimRoundingMode:p}=c;a.Hf.assert(a.Ad.eitherStridesOrDilationsAreOne(u,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${u} and dilations '1'`);const h=a.Ad.computePool2DInfo(i.shape,d,u,1,l,p);let f;if(1===h.filterWidth&&1===h.filterHeight&&a.Hf.arraysEqual(h.inShape,h.outShape))f=Object(o.a)({inputs:{x:i},backend:n});else{const e=n.data.get(i.dataId).values,t=a.Hf.computeStrides(i.shape),s=Object(r.c)(e,i.shape,i.dtype,t,h,"avg");f=n.makeTensorInfo(h.outShape,i.dtype,s.values)}return f}}},778:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14),r=n(102);const o={kernelName:a.p,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:o}=e,{x:c}=t,{filterSize:i,strides:d,pad:u,dimRoundingMode:l,dataFormat:p}=o;Object(s.a)(c,"avgPool3d");const h=a.Ad.computePool3DInfo(c.shape,i,d,1,u,l,p),f=n.data.get(c.dataId).values,m=Object(r.d)(f,c.shape,c.dtype,a.Hf.computeStrides(c.shape),h,"avg");return n.makeTensorInfo(m.shape,"float32",m.values)}}},779:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(14);const r={kernelName:a.q,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,input:c}=t,{filterSize:i,strides:d,pad:u,dimRoundingMode:l}=r;Object(s.a)([o,c],"avgPool3DGrad");const p=a.Ad.computePool3DInfo(c.shape,i,d,1,u,l),h=p.strideDepth,f=p.strideHeight,m=p.strideWidth,g=p.filterDepth,k=p.filterHeight,b=p.filterWidth,I=p.dilationDepth,v=p.dilationHeight,A=p.dilationWidth,y=p.effectiveFilterDepth,O=p.effectiveFilterHeight,x=p.effectiveFilterWidth,H=y-1-p.padInfo.front,j=x-1-p.padInfo.left,S=O-1-p.padInfo.top,N=Object(a.Hd)(c.shape,"float32"),F=1/(g*k*b),T=n.bufferSync(o);for(let e=0;e<p.batchSize;++e)for(let t=0;t<p.inChannels;++t)for(let n=0;n<p.inDepth;++n)for(let a=0;a<p.inHeight;++a)for(let s=0;s<p.inWidth;++s){const r=n-H,o=a-S,c=s-j;let i=0;for(let n=0;n<y;n+=I){const a=(r+n)/h;if(!(a<0||a>=p.outDepth||Math.floor(a)!==a))for(let n=0;n<O;n+=v){const s=(o+n)/f;if(!(s<0||s>=p.outHeight||Math.floor(s)!==s))for(let n=0;n<x;n+=A){const r=(c+n)/m;if(r<0||r>=p.outWidth||Math.floor(r)!==r)continue;i+=T.get(e,a,s,r,t)}}}N.set(i*F,e,n,a,s,t)}return n.makeTensorInfo(N.shape,N.dtype,N.values)}}},780:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(14);const r={kernelName:a.r,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,input:c}=t,i=c;Object(s.a)([o,c],"avgPoolGrad");const{filterSize:d,strides:u,pad:l}=r,p=a.Ad.computePool2DInfo(i.shape,d,u,1,l),h=p.strideHeight,f=p.strideWidth,m=p.filterHeight,g=p.filterWidth,k=p.dilationHeight,b=p.dilationWidth,I=p.effectiveFilterHeight,v=p.effectiveFilterWidth,A=v-1-p.padInfo.left,y=I-1-p.padInfo.top,O=Object(a.Hd)(i.shape,"float32"),x=1/(m*g),H=n.data.get(o.dataId).values,j=Object(a.Hd)(o.shape,"float32",H);for(let e=0;e<p.batchSize;++e)for(let t=0;t<p.inChannels;++t)for(let n=0;n<p.inHeight;++n)for(let a=0;a<p.inWidth;++a){const s=n-y,r=a-A;let o=0;for(let n=0;n<I;n+=k){const a=(s+n)/h;if(!(a<0||a>=p.outHeight||Math.floor(a)!==a))for(let n=0;n<v;n+=b){const s=(r+n)/f;if(s<0||s>=p.outWidth||Math.floor(s)!==s)continue;o+=j.get(e,a,s,t)}}O.set(o*x,e,n,a,t)}return n.makeTensorInfo(O.shape,O.dtype,O.values)}}},781:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(14);const r={kernelName:a.lb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,scale:c,offset:i,mean:d,variance:u}=t;a.Hf.assert(d.shape.length===u.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),a.Hf.assert(null==i||d.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),a.Hf.assert(null==c||d.shape.length===c.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),Object(s.a)([o,d,u,c,i],"batchNorm");let{varianceEpsilon:l}=r;null==l&&(l=.001);const p=n.data.get(o.dataId).values,h=n.data.get(d.dataId).values,f=n.data.get(u.dataId).values,m=c?n.data.get(c.dataId).values:new Float32Array([1]),g=i?n.data.get(i.dataId).values:new Float32Array([0]),k=new Float32Array(p.length),b=g.length,I=m.length,v=f.length,A=h.length;let y=0,O=0,x=0,H=0;for(let e=0;e<p.length;++e)k[e]=g[y++]+(p[e]-h[O++])*m[x++]/Math.sqrt(f[H++]+l),y>=b&&(y=0),O>=A&&(O=0),x>=I&&(x=0),H>=v&&(H=0);return n.makeTensorInfo(o.shape,o.dtype,k)}}},782:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),s=n(14),r=n(45),o=n(100),c=n(59);const i={kernelName:a.t,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:d}=t,{blockShape:u,crops:l}=i;Object(s.a)([d],"batchToSpaceND");const p=u.reduce((e,t)=>e*t),h=a.Ad.getReshaped(d.shape,u,p),f=a.Ad.getPermuted(h.length,u.length),m=a.Ad.getReshapedPermuted(d.shape,u,p),g=a.Ad.getSliceBeginCoords(l,u.length),k=a.Ad.getSliceSize(m,l,u.length),b=Object(r.a)({inputs:{x:d},backend:n,attrs:{shape:h}}),I=Object(c.a)({inputs:{x:b},backend:n,attrs:{perm:f}}),v=Object(r.a)({inputs:{x:I},backend:n,attrs:{shape:m}}),A=Object(o.a)({inputs:{x:v},backend:n,attrs:{begin:g,size:k}});return n.disposeIntermediateTensorInfo(b),n.disposeIntermediateTensorInfo(I),n.disposeIntermediateTensorInfo(v),A}}},783:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(179);const r={kernelName:a.u,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:a}=e,{x:r,weights:o}=t,{size:c}=a,i=n.data.get(r.dataId).values,d=n.data.get(o.dataId).values,u=Object(s.a)(i,d,o.dtype,o.shape,c);return n.makeTensorInfo([c],o.dtype,u)}}},784:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0);
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
 */const s={kernelName:a.v,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n}=e,{s0:s,s1:r}=t,o=n.data.get(s.dataId).values,c=n.data.get(r.dataId).values,i=a.Ad.assertAndGetBroadcastShape(Array.from(o),Array.from(c));return n.makeTensorInfo([i.length],"int32",Int32Array.from(i))}}}}]);