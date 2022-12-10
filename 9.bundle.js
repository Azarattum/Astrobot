(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{100:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var a=n(0),r=n(14);
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
function c(e,t,n,r,c){const s=a.lf.isSliceContinous(r,t,n),o=a.Hf.sizeFromShape(n),u=a.Hf.computeStrides(r);if(s){const n=a.lf.computeFlatOffset(t,u);return"string"===c?e.slice(n,n+o):e.subarray(n,n+o)}const i="string"===c?a.Ad.fromUint8ToStringArray(e):e,d=Object(a.Hd)(r,c,i),f=Object(a.Hd)(n,c);for(let e=0;e<f.size;++e){const n=f.indexToLoc(e),a=n.map((e,n)=>e+t[n]);f.set(d.get(...a),...n)}return"string"===c?a.Ad.fromStringArrayToUint8(f.values):f.values}function s(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{begin:u,size:i}=s;Object(r.a)(o,"slice");const[d,f]=a.lf.parseSliceParams(o,u,i);a.lf.assertParamsValid(o,d,f);const l=c(n.data.get(o.dataId).values,d,f,o.shape,o.dtype);return n.makeTensorInfo(f,o.dtype,l)}const o={kernelName:a.Lc,backendName:"cpu",kernelFunc:s}},119:function(e,t,n){"use strict";
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
function a(e){const{inputs:t,backend:n}=e,{input:a}=t,r=n.data.get(a.dataId).complexTensorInfos.real,c=n.data.get(r.dataId).values;return n.makeTensorInfo(r.shape,r.dtype,c)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));const r={kernelName:n(0).pc,backendName:"cpu",kernelFunc:a}},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(0),r=n(46),c=n(48);
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
const s=Object(r.a)((e,t)=>e/t),o=Object(c.a)(a.qc,s),u={kernelName:a.qc,backendName:"cpu",kernelFunc:o}},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);
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
 */function r(e,t,n,r,c,s,o,u,i,d){const f=[r/c,c],l=e.values,p=t.values;if(0===r)return Object(a.Hd)(n,t.dtype);const h=Object(a.Hd)(f,t.dtype);"string"==typeof i||"number"==typeof i?h.values.fill(i):"boolean"==typeof i&&h.values.fill(+i);for(let e=0;e<s;e++){const a=[];let s=0;for(let t=0;t<o;t++){const n=l[e*o+t];a.push(n),s+=n*u[t]}if(s<0||s>=r/c)throw new Error(`Invalid indices: ${a} does not index into ${n}`);for(let n=0;n<c;n++)d?h.values[s*c+n]+=p[e*c+n]:h.values[s*c+n]=0===t.rank?p[0]:p[e*c+n]}return h}},236:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(0),r=n(94),c=n(29);
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
const s=Object(r.a)(e=>1/(1+Math.exp(-e))),o=Object(c.a)(a.Hc,e=>1/(1+Math.exp(-e))),u={kernelName:a.Hc,backendName:"cpu",kernelFunc:o}},343:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var a=n(0),r=n(94),c=n(29);
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
const s=Object(r.a)(e=>1/Math.sqrt(e)),o=Object(c.b)(a.Cc,s),u={kernelName:a.Cc,backendName:"cpu",kernelFunc:o}},378:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var a=n(0),r=n(29);
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
const c=Object(r.a)(a.sc,e=>Math.max(0,e)),s={kernelName:a.sc,backendName:"cpu",kernelFunc:c}},380:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var a=n(0),r=n(29);
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
const c=Object(r.a)(a.tc,e=>Math.min(Math.max(0,e),6)),s={kernelName:a.tc,backendName:"cpu",kernelFunc:c}},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n(239),c=n(386),s=n(161),o=n(45),u=n(180),i=n(150);
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
function d(e){const{inputs:t,backend:n,attrs:d}=e,{logits:f}=t,{dim:l}=d,p=f.shape.length;let h=l;if(-1===h&&(h=p-1),h!==p-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${p} and dim was ${h}`);const m=a.Hf.parseAxisParam([h],f.shape),k=Object(c.a)({inputs:{x:f},backend:n,attrs:{reductionIndices:m,keepDims:!1}}),b=a.Ad.expandShapeToKeepDim(k.shape,m),M=Object(o.a)({inputs:{x:k},backend:n,attrs:{shape:b}}),N=Object(u.a)({inputs:{a:f,b:M},backend:n}),v=Object(r.a)({inputs:{x:N},backend:n}),g=Object(i.a)({inputs:{x:v},backend:n,attrs:{axis:m,keepDims:!1}}),I=Object(o.a)({inputs:{x:g},backend:n,attrs:{shape:b}}),y=Object(s.a)({inputs:{a:v,b:I},backend:n});return n.disposeIntermediateTensorInfo(k),n.disposeIntermediateTensorInfo(M),n.disposeIntermediateTensorInfo(N),n.disposeIntermediateTensorInfo(v),n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(I),y}const f={kernelName:a.Mc,backendName:"cpu",kernelFunc:d}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n(0);
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
 */function r(e){const{inputs:t,backend:n,attrs:r}=e,{x:c}=t,{shape:s}=r,o=a.Hf.sizeFromShape(c.shape),u=a.Hf.inferFromImplicitShape(s,o),i=a.Hf.sizeFromShape(u);a.Hf.assert(o===i,()=>`The new shape (${u}) has ${i} elements and the old shape (${c.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`),n.incRef(c.dataId);const d=n.data.get(c.dataId);if(null!=d.complexTensorInfos){const e=d.complexTensorInfos.real,t=d.complexTensorInfos.imag;e.shape=u,t.shape=u}return{dataId:c.dataId,shape:u,dtype:c.dtype}}const c={kernelName:a.uc,backendName:"cpu",kernelFunc:r}},847:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n(29);
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
const c=Object(r.a)(a.rc,e=>1/e),s={kernelName:a.rc,backendName:"cpu",kernelFunc:c}},848:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(14);const c={kernelName:a.vc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{images:s}=t,{alignCorners:o,halfPixelCenters:u,size:i}=c;Object(r.a)(s,"resizeBilinear");const d=a.Hf.computeStrides(s.shape),[f,l]=i,[p,h,m,k]=s.shape,b=n.data.get(s.dataId).values,M=new Float32Array(a.Hf.sizeFromShape([p,f,l,k])),N=[o&&f>1?h-1:h,o&&l>1?m-1:m],v=[o&&f>1?f-1:f,o&&l>1?l-1:l];let g=0;const I=N[0]/v[0],y=N[1]/v[1];for(let e=0;e<p;e++)for(let t=0;t<f;t++){let n;n=u?I*(t+.5)-.5:I*t;const a=Math.max(0,Math.floor(n)),r=n-a,c=Math.min(h-1,Math.ceil(n)),s=e*d[0]+a*d[1],o=e*d[0]+c*d[1];for(let e=0;e<l;e++){let t;t=u?y*(e+.5)-.5:y*e;const n=Math.max(0,Math.floor(t)),a=t-n,c=Math.min(m-1,Math.ceil(t)),i=s+n*d[2],f=o+n*d[2],l=s+c*d[2],p=o+c*d[2];for(let e=0;e<k;e++){const t=b[i+e],n=b[f+e],c=t+(b[l+e]-t)*a,s=c+(n+(b[p+e]-n)*a-c)*r;M[g++]=s}}}return n.makeTensorInfo([p,f,l,k],"float32",M)}}},849:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(14);const c={kernelName:a.wc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{images:s,dy:o}=t,{alignCorners:u}=c;Object(r.a)([o,s],"resizeBilinearGrad");const i=a.Hf.computeStrides(s.shape),[d,f,l,p]=s.shape,[,h,m]=o.shape,k=new Float32Array(d*f*l*p),b=[u&&h>1?f-1:f,u&&m>1?l-1:l],M=[u&&h>1?h-1:h,u&&m>1?m-1:m],N=b[0]/M[0],v=b[1]/M[1],g=n.data.get(o.dataId).values;let I=0;for(let e=0;e<d;e++){const t=e*i[0];for(let e=0;e<h;e++){const n=e*N,a=Math.floor(n),r=Math.min(Math.ceil(n),f-1),c=t+a*i[1],s=t+r*i[1],o=n-a,u=1-o;for(let e=0;e<m;e++){const t=e*v,n=Math.floor(t),a=Math.min(Math.ceil(t),l-1),r=t-n,d=1-r,f=c+n*i[2],h=c+a*i[2],m=s+n*i[2],b=s+a*i[2],M=u*d,N=u*r,y=o*d,F=o*r;for(let e=0;e<p;e++){const t=g[I++];k[f+e]+=t*M,k[h+e]+=t*N,k[m+e]+=t*y,k[b+e]+=t*F}}}}return n.makeTensorInfo([d,l,f,p],"float32",k)}}},850:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(14);const c={kernelName:a.xc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{images:s}=t,{alignCorners:o,halfPixelCenters:u,size:i}=c;Object(r.a)(s,"resizeNearestNeighbor");const d=a.Hf.computeStrides(s.shape),[f,l]=i,[p,h,m,k]=s.shape,b=n.data.get(s.dataId).values,M=new Float32Array(p*f*l*k),N=[o&&f>1?h-1:h,o&&l>1?m-1:m],v=[o&&f>1?f-1:f,o&&l>1?l-1:l],g=N[0]/v[0],I=N[1]/v[1];let y=0;for(let e=0;e<p;e++){const t=e*d[0];for(let e=0;e<f;e++){const n=u?g*(e+.5):g*e;let a=Math.min(h-1,o?Math.round(n):Math.floor(n));u&&(a=Math.max(0,a));const r=t+a*d[1];for(let e=0;e<l;e++){const t=u?I*(e+.5):I*e;let n=Math.min(m-1,o?Math.round(t):Math.floor(t));u&&(n=Math.max(0,n));const a=r+n*d[2];for(let e=0;e<k;e++){const t=b[a+e];M[y++]=t}}}}return n.makeTensorInfo([p,f,l,k],s.dtype,M)}}},851:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(14);const c={kernelName:a.yc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{images:s,dy:o}=t,{alignCorners:u}=c;Object(r.a)([o,s],"resizeNearestNeighborGrad");const i=a.Hf.computeStrides(s.shape),d=a.Hf.computeStrides(o.shape),[f,l,p,h]=s.shape,[,m,k]=o.shape,b=new Float32Array(f*l*p*h),M=n.data.get(o.dataId).values,N=[u&&m>1?l-1:l,u&&k>1?p-1:p],v=[u&&m>1?m-1:m,u&&k>1?k-1:k],g=N[0]/v[0],I=N[1]/v[1],y=1/g,F=1/I,O=2*Math.ceil(y)+2,j=2*Math.ceil(F)+2;for(let e=0;e<f;e++){const t=e*i[0];for(let e=0;e<l;e++){const n=t+e*i[1],a=Math.floor(e*y),r=Math.floor(a-O/2);for(let a=0;a<p;a++){const c=n+a*i[2],s=Math.floor(a*F),o=Math.floor(s-j/2);for(let n=0;n<h;n++){let s=0;for(let c=0;c<O;c++){const i=c+r;if(i<0||i>=m)continue;const f=t+i*d[1],h=i*g;if(e===Math.min(l-1,u?Math.round(h):Math.floor(h)))for(let e=0;e<j;e++){const t=e+o;if(t<0||t>=k)continue;const r=f+t*d[2],c=t*I;a===Math.min(p-1,u?Math.round(c):Math.floor(c))&&(s+=M[r+n])}}b[c+n]=s}}}}return n.makeTensorInfo(s.shape,s.dtype,b)}}},852:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n(14),c=n(81);const s={kernelName:a.zc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{dims:u}=s;Object(r.a)(o,"reverse");const i=o.shape.length,d=a.Hf.parseAxisParam(u,o.shape);if(0===i)return Object(c.a)({inputs:{x:o},backend:n});const f=new a.id(o.shape,o.dtype),l=n.bufferSync(o);for(let e=0;e<f.size;e++){const t=f.indexToLoc(e),n=t.slice();d.forEach(e=>n[e]=o.shape[e]-1-n[e]),f.set(l.get(...n),...t)}return n.makeTensorInfo(f.shape,f.dtype,f.values)}}},853:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);
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
 */const r={kernelName:a.Ac,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:r}=e,{radians:c,fillValue:s,center:o}=t,u=n,i=a.Hf.getTypedArrayFromDType(r.dtype,a.Hf.sizeFromShape(r.shape)),[d,f,l,p]=r.shape,[h,m]=a.Ad.getImageCenter(o,f,l),k=Math.sin(c),b=Math.cos(c),M=u.data.get(r.dataId).values;for(let e=0;e<d;e++){const t=e*l*f*p;for(let e=0;e<f;e++){const n=e*(l*p);for(let a=0;a<l;a++){const r=a*p;for(let c=0;c<p;c++){const o=[d,e,a,c],u=o[2],N=o[1];let v=(u-h)*b-(N-m)*k,g=(u-h)*k+(N-m)*b;v=Math.round(v+h),g=Math.round(g+m);let I=s;if("number"!=typeof s&&(I=3===c?255:s[c]),v>=0&&v<l&&g>=0&&g<f){I=M[t+g*(l*p)+v*p+c]}i[t+n+r+c]=I}}}}return{dataId:u.write(i,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}}},854:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n(29);
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
const c=Object(r.a)(a.Bc,e=>{const t=Math.floor(e);return e-t<.5?Math.floor(e):e-t>.5?Math.ceil(e):t%2==0?t:t+1}),s={kernelName:a.Bc,backendName:"cpu",kernelFunc:c}},855:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(162);const c={kernelName:a.Dc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{indices:s,updates:o}=t,{shape:u}=c,{sliceRank:i,numUpdates:d,sliceSize:f,strides:l,outputSize:p}=a.Ad.calculateShapes(o,s,u),h=n.bufferSync(s),m=n.bufferSync(o),k=Object(r.a)(h,m,u,p,f,d,i,l,0,!0);return n.makeTensorInfo(u,k.dtype,k.values)}}},856:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(857);const c={kernelName:a.Ec,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:a}=e,{sortedSequence:c,values:s}=t,{side:o}=a,u=n.data.get(c.dataId).values,i=n.data.get(s.dataId).values,d=Object(r.a)(u,i,c.shape[0],c.shape[1],s.shape[1],o);return n.makeTensorInfo(s.shape,"int32",d)}}},857:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0);
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
 */function r(e,t){let n=0,a=e.length,r=0;for(;n<a;)r=Math.floor((n+a)/2),e[r]<t?n=r+1:a=r;return a}function c(e,t){let n=0,a=e.length,r=0;for(;n<a;)r=Math.floor((n+a)/2),e[r]<=t?n=r+1:a=r;return a}function s(e,t,n,s,o,u){const i=a.Hf.getArrayFromDType("int32",n*o);for(let a=0;a<n;++a){const n=e.slice(a*s,(a+1)*s),d=a*o;for(let e=0;e<o;++e)i[d+e]="left"===u?r(n,t[e+d]):c(n,t[e+d])}return i}},858:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(14);const c={kernelName:a.Fc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{condition:c,t:s,e:o}=t;Object(r.a)([c,s,o],"select");const u=c.shape.length,i=n.data.get(c.dataId).values,d=n.data.get(s.dataId).values,f=n.data.get(o.dataId).values,l=Object(a.Gf)(s.dtype,o.dtype),p=a.Hf.makeZerosTypedArray(a.Hf.sizeFromShape(s.shape),l);let h=0;const m=0===u||u>1||1===s.shape.length?1:a.Hf.sizeFromShape(s.shape.slice(1));for(let e=0;e<i.length;e++)for(let t=0;t<m;t++)1===i[e]?p[h++]=d[e]:p[h++]=f[e];return n.makeTensorInfo(s.shape,l,p)}}},859:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n(29);
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
const c=a.Ad.SELU_SCALEALPHA,s=a.Ad.SELU_SCALE,o=Object(r.a)(a.Gc,e=>e>=0?s*e:c*(Math.exp(e)-1)),u={kernelName:a.Gc,backendName:"cpu",kernelFunc:o}},860:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n(29);
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
const c=Object(r.a)(a.Ic,e=>e<0?-1:e>0?1:0),s={kernelName:a.Ic,backendName:"cpu",kernelFunc:c}},861:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n(29);
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
const c=Object(r.a)(a.Jc,e=>Math.sin(e)),s={kernelName:a.Jc,backendName:"cpu",kernelFunc:c}},862:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n(29);
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
const c=Object(r.a)(a.Kc,e=>Math.sinh(e)),s={kernelName:a.Kc,backendName:"cpu",kernelFunc:c}},863:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n(29);
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
const c=Math.log(1.1920928955078125e-7)+2,s=Object(r.a)(a.Nc,e=>{const t=e>-c,n=e<c,a=Math.exp(e);let r;return r=n?a:t?e:Math.log(1+a),r}),o={kernelName:a.Nc,backendName:"cpu",kernelFunc:s}}}]);