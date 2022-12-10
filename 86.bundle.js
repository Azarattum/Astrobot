(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{125:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var a=n(0),s=n(46),r=n(48);
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
const o=Object(s.a)((e,t)=>e*t),c=Object(r.b)((e,t,n,a)=>({real:e*n-t*a,imag:e*a+t*n})),i=Object(r.a)(a.Xb,o,c),u={kernelName:a.Xb,backendName:"cpu",kernelFunc:i}},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0);
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
 */function s(e,t,n,s){const r=a.Hf.getTypedArrayFromDType(s,a.Hf.sizeFromShape(n));for(let n=0;n<r.length;++n){const a=n*t;let s=e[a];for(let n=0;n<t;++n){const t=e[a+n];(Number.isNaN(t)||t>s)&&(s=t)}r[n]=s}return r}},334:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(0),s=n(46),r=n(48);
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
const o=Object(s.a)((e,t)=>Math.max(e,t)),c=Object(r.a)(a.Qb,o),i={kernelName:a.Qb,backendName:"cpu",kernelFunc:c}},335:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(0),s=n(46),r=n(48);
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
const o=Object(s.a)((e,t)=>Math.min(e,t)),c=Object(r.a)(a.Tb,o),i={kernelName:a.Tb,backendName:"cpu",kernelFunc:c}},336:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(0),s=n(14),r=n(125);
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
function o(e,t,n){const s=a.Hf.createScalarValue(-1,n);return Object(r.c)([],t,s,e,n)}const c={kernelName:a.Yb,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n}=e,{x:a}=t;Object(s.a)(a,"neg");const r=n.data.get(a.dataId).values,[c,i]=o(r,a.shape,a.dtype);return n.makeTensorInfo(i,a.dtype,c)}}},337:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(0),s=n(46),r=n(48);
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
const o=Object(s.a)((e,t)=>e!==t?1:0),c=Object(r.a)(a.cc,o,null,"bool"),i={kernelName:a.cc,backendName:"cpu",kernelFunc:c}},386:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var a=n(0),s=n(14),r=n(333),o=n(237);
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
function c(e){const{inputs:t,backend:n,attrs:c}=e,{x:i}=t,{reductionIndices:u,keepDims:d}=c,p=n;let l=i.shape;const f=l.length,m=a.Hf.parseAxisParam(u,l);let h=m;const b=a.Ad.getAxesPermutation(h,f);let k=p.data.get(i.dataId).values;if(null!=b){const e=new Array(f);for(let t=0;t<e.length;t++)e[t]=l[b[t]];k=Object(o.a)(k,l,i.dtype,b,e),h=a.Ad.getInnerMostAxes(h.length,f),l=e}Object(s.a)(i,"max"),a.Ad.assertAxesAreInnerMostDims("max",h,f);const[I,g]=a.Ad.computeOutAndReduceShapes(l,h),y=a.Hf.sizeFromShape(g),O=Object(r.a)(k,y,I,i.dtype),x=p.write(O,I,i.dtype);let v=I;if(d){v=a.Ad.expandShapeToKeepDim(I,m)}return{dataId:x,shape:v,dtype:i.dtype}}const i={kernelName:a.Kb,backendName:"cpu",kernelFunc:c}},389:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var a=n(0),s=n(202),r=n(203);
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
function o(e){const{inputs:t,backend:n,attrs:o}=e,{axis:c}=o;if(1===t.length)return Object(r.a)({inputs:{input:t[0]},backend:n,attrs:{dim:c}});const i=t[0].shape,u=t[0].dtype;t.forEach(e=>{a.Hf.assertShapesMatch(i,e.shape,"All tensors passed to stack must have matching shapes"),a.Hf.assert(u===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});const d=[],p=t.map(e=>{const t=Object(r.a)({inputs:{input:e},backend:n,attrs:{dim:c}});return d.push(t),t}),l=Object(s.a)({inputs:p,backend:n,attrs:{axis:c}});return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),l}const c={kernelName:a.gc,backendName:"cpu",kernelFunc:o}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(14);const r={kernelName:a.hc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{paddings:c,constantValue:i}=r;Object(s.a)(o,"pad");const u=c.map((e,t)=>e[0]+o.shape[t]+e[1]),d=c.map(e=>e[0]),p=n.data.get(o.dataId).values,l=a.Hf.sizeFromShape(o.shape),f=o.shape.length,m=a.Hf.computeStrides(o.shape),h=a.Hf.sizeFromShape(u),b=u.length,k=a.Hf.computeStrides(u),I=a.Hf.getTypedArrayFromDType(o.dtype,h);0!==i&&I.fill(i);for(let e=0;e<l;e++){const t=a.Hf.indexToLoc(e,f,m).map((e,t)=>e+d[t]);I[a.Hf.locToIndex(t,b,k)]=p[e]}return{dataId:n.write(I,u,o.dtype),shape:u,dtype:o.dtype}}}},826:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),s=n(14),r=n(102),o=n(81);const c={kernelName:a.Lb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{x:i}=t;Object(s.a)(i,"maxPool");const{filterSize:u,strides:d,pad:p,dimRoundingMode:l}=c;a.Hf.assert(a.Ad.eitherStridesOrDilationsAreOne(d,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${d} and dilations '1'`);const f=a.Ad.computePool2DInfo(i.shape,u,d,1,p,l);let m;if(1===f.filterWidth&&1===f.filterHeight&&a.Hf.arraysEqual(f.inShape,f.outShape))m=Object(o.a)({inputs:{x:i},backend:n});else{const e=n.data.get(i.dataId).values,t=a.Hf.computeStrides(i.shape),s=Object(r.c)(e,i.shape,i.dtype,t,f,"max");m=n.makeTensorInfo(f.outShape,i.dtype,s.values)}return m}}},827:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14),r=n(102);const o={kernelName:a.Mb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:o}=e,{x:c}=t,{filterSize:i,strides:u,pad:d,dimRoundingMode:p,dataFormat:l}=o;Object(s.a)(c,"maxPool3d");const f=a.Ad.computePool3DInfo(c.shape,i,u,1,d,p,l),m=n.data.get(c.dataId).values,h=Object(r.d)(m,c.shape,c.dtype,a.Hf.computeStrides(c.shape),f,"max");return n.makeTensorInfo(h.shape,"float32",h.values)}}},828:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14),r=n(102);const o={kernelName:a.Nb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:o}=e,{dy:c,input:i}=t,{filterSize:u,strides:d,pad:p,dimRoundingMode:l}=o;Object(s.a)([c,i],"maxPool3DGrad");const f=a.Ad.computePool3DInfo(i.shape,u,d,1,p,l),m=n.bufferSync(i),h=Object(r.a)(m,f),b=f.strideDepth,k=f.strideHeight,I=f.strideWidth,g=f.dilationDepth,y=f.dilationHeight,O=f.dilationWidth,x=f.effectiveFilterDepth,v=f.effectiveFilterHeight,S=f.effectiveFilterWidth,N=x-1-f.padInfo.front,j=S-1-f.padInfo.left,H=v-1-f.padInfo.top,A=Object(a.Hd)(i.shape,"float32"),F=n.bufferSync(c);for(let e=0;e<f.batchSize;++e)for(let t=0;t<f.inChannels;++t)for(let n=0;n<f.inDepth;++n)for(let a=0;a<f.inHeight;++a)for(let s=0;s<f.inWidth;++s){const r=n-N,o=a-H,c=s-j;let i=0;for(let n=0;n<x;n+=g){const a=(r+n)/b;if(!(a<0||a>=f.outDepth||Math.floor(a)!==a))for(let s=0;s<v;s+=y){const r=(o+s)/k;if(!(r<0||r>=f.outHeight||Math.floor(r)!==r))for(let o=0;o<S;o+=O){const u=(c+o)/I;if(u<0||u>=f.outWidth||Math.floor(u)!==u)continue;const d=x*v*S-1-h.get(e,a,r,u,t)===n*v*S+s*S+o?1:0;if(0===d)continue;i+=F.get(e,a,r,u,t)*d}}}A.set(i,e,n,a,s,t)}return n.makeTensorInfo(A.shape,A.dtype,A.values)}}},829:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14),r=n(102);const o={kernelName:a.Ob,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:o}=e,{dy:c,input:i,output:u}=t,d=i;Object(s.a)([i,u],"maxPoolGrad");const{filterSize:p,strides:l,pad:f,dimRoundingMode:m}=o,h=a.Ad.computePool2DInfo(d.shape,p,l,1,f,m),b=n.data.get(d.dataId).values,k=Object(a.Hd)(h.outShape,d.dtype,Object(r.b)(b,d.shape,d.dtype,h).values),I=h.strideHeight,g=h.strideWidth,y=h.dilationHeight,O=h.dilationWidth,x=h.effectiveFilterHeight,v=h.effectiveFilterWidth,S=v-1-h.padInfo.left,N=x-1-h.padInfo.top,j=Object(a.Hd)(d.shape,"float32"),H=n.data.get(c.dataId).values,A=Object(a.Hd)(c.shape,"float32",H);for(let e=0;e<h.batchSize;++e)for(let t=0;t<h.inChannels;++t)for(let n=0;n<h.inHeight;++n)for(let a=0;a<h.inWidth;++a){const s=n-N,r=a-S;let o=0;for(let n=0;n<x;n+=y){const a=(s+n)/I;if(!(a<0||a>=h.outHeight||Math.floor(a)!==a))for(let s=0;s<v;s+=O){const c=(r+s)/g;if(c<0||c>=h.outWidth||Math.floor(c)!==c)continue;const i=x*v-1-k.get(e,a,c,t)===n*v+s?1:0;if(0===i)continue;o+=A.get(e,a,c,t)*i}}j.set(o,e,n,a,t)}return n.makeTensorInfo(j.shape,j.dtype,j.values)}}},830:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14),r=n(831);
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
const o={kernelName:a.Pb,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:o}=e,{filterSize:c,strides:i,pad:u,includeBatchInIndex:d}=t,p=n;Object(s.a)(o,"MaxPoolWithArgmax");const l=p.data.get(o.dataId).values,f=a.Ad.computePool2DInfo(o.shape,c,i,[1,1],u),[m,h]=Object(r.a)(l,o.shape,o.dtype,d,f),b=p.write(m,f.outShape,o.dtype),k=p.write(h,f.outShape,o.dtype);return[{dataId:b,shape:f.outShape,dtype:o.dtype},{dataId:k,shape:f.outShape,dtype:"int32"}]}}},831:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(102);
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
function r(e,t,n,r,o){const c=a.Hf.computeStrides(t),i=Object(s.c)(e,t,n,c,o,"max"),u=Object(s.b)(e,t,n,o,!0,r);return[i.values,u.values]}},832:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),s=n(117),r=n(161),o=n(150);const c={kernelName:a.Rb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{x:i}=t,{axis:u,keepDims:d}=c,p=a.Hf.parseAxisParam(u,i.shape),l=a.Ad.computeOutAndReduceShapes(i.shape,p)[1],f=a.Hf.sizeFromShape(l),m=[],h=n.makeTensorInfo([],"float32",new Float32Array([f]));m.push(h);const b=Object(s.a)({inputs:{x:i},backend:n,attrs:{dtype:"float32"}});m.push(b);const k=Object(r.a)({inputs:{a:b,b:h},backend:n});m.push(k);const I=Object(o.a)({inputs:{x:k},backend:n,attrs:{axis:u,keepDims:d}});return m.forEach(e=>n.disposeIntermediateTensorInfo(e)),I}}},833:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),s=n(14),r=n(45),o=n(59);const c={kernelName:a.Sb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{x:i}=t,{axis:u,keepDims:d}=c;Object(s.a)(i,"min");const p=a.Hf.parseAxisParam(u,i.shape);let l=p;const f=a.Ad.getAxesPermutation(l,i.shape.length);let m=i;null!=f&&(m=Object(o.a)({inputs:{x:i},backend:n,attrs:{perm:f}}),l=a.Ad.getInnerMostAxes(l.length,i.shape.length)),a.Ad.assertAxesAreInnerMostDims("min",l,m.shape.length);const[h,b]=a.Ad.computeOutAndReduceShapes(m.shape,l),k=a.Hf.sizeFromShape(b),I=a.Hf.makeZerosTypedArray(a.Hf.sizeFromShape(h),m.dtype),g=n.data.get(m.dataId).values;for(let e=0;e<I.length;++e){const t=e*k;let n=g[t];for(let e=0;e<k;++e){const a=g[t+e];(Number.isNaN(a)||a<n)&&(n=a)}I[e]=n}null!=f&&n.disposeIntermediateTensorInfo(m);const y=n.makeTensorInfo(h,m.dtype,I);if(d){const e=a.Ad.expandShapeToKeepDim(h,p),t=Object(r.a)({inputs:{x:y},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(y),t}return y}}},834:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(14);const r={kernelName:a.Ub,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{paddings:c,mode:i}=r;Object(s.a)(o,"mirrorPad");const u=c.map((e,t)=>e[0]+o.shape[t]+e[1]),d=c.map(e=>e[0]),p=c.map((e,t)=>e[0]+o.shape[t]),l="reflect"===i?0:1,f=n.data.get(o.dataId).values,m=o.shape.length,h=a.Hf.computeStrides(o.shape),b=a.Hf.sizeFromShape(u),k=u.length,I=a.Hf.computeStrides(u),g=a.Hf.getTypedArrayFromDType(o.dtype,b);for(let e=0;e<b;e++){let t=a.Hf.indexToLoc(e,k,I);for(let e=0;e<k;e++)t[e]<d[e]?t[e]=2*d[e]-t[e]-l:t[e]>=p[e]&&(t[e]=2*(p[e]-1)-t[e]+l);t=t.map((e,t)=>e-d[t]);const n=a.Hf.locToIndex(t,m,h);g[e]=f[n]}return{dataId:n.write(g,u,o.dtype),shape:u,dtype:o.dtype}}}},835:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),s=n(46),r=n(48);
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
const o=Object(s.a)((e,t)=>{const n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t}),c=Object(r.a)(a.Vb,o),i={kernelName:a.Vb,backendName:"cpu",kernelFunc:c}},836:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),s=n(153),r=n(14),o=n(387);const c={kernelName:a.Wb,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:c}=e,{logits:i}=t,{numSamples:u,seed:d,normalized:p}=c;Object(r.a)(i,"multinomial");const l=p?i:Object(o.a)({inputs:{logits:i},backend:n,attrs:{dim:-1}}),f=l.shape[0],m=l.shape[1],h=n.data.get(l.dataId).values,b=[f,u],k=a.Hf.makeZerosTypedArray(a.Hf.sizeFromShape(b),"int32");for(let e=0;e<f;++e){const t=e*m,n=new Float32Array(m-1);n[0]=h[t];for(let e=1;e<n.length;++e)n[e]=n[e-1]+h[t+e];const a=s.alea(d.toString()),r=e*u;for(let e=0;e<u;++e){const t=a();k[r+e]=n.length;for(let a=0;a<n.length;a++)if(t<n[a]){k[r+e]=a;break}}}return p||n.disposeIntermediateTensorInfo(l),n.makeTensorInfo(b,"int32",k)}}},837:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14);
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
const r=a.re.nonMaxSuppressionV3Impl;const o={kernelName:a.Zb,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:a}=e,{boxes:o,scores:c}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:d}=a;Object(s.a)(o,"NonMaxSuppression");const p=n.data.get(o.dataId).values,l=n.data.get(c.dataId).values,{selectedIndices:f}=r(p,l,i,u,d);return n.makeTensorInfo([f.length],"int32",new Int32Array(f))}}},838:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14);
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
const r=a.re.nonMaxSuppressionV4Impl;const o={kernelName:a.ac,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:a}=e,{boxes:o,scores:c}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:d,padToMaxOutputSize:p}=a;Object(s.a)(o,"NonMaxSuppressionPadded");const l=n.data.get(o.dataId).values,f=n.data.get(c.dataId).values,{selectedIndices:m,validOutputs:h}=r(l,f,i,u,d,p);return[n.makeTensorInfo([m.length],"int32",new Int32Array(m)),n.makeTensorInfo([],"int32",new Int32Array([h]))]}}},839:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14);
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
const r=a.re.nonMaxSuppressionV5Impl;const o={kernelName:a.bc,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:a}=e,{boxes:o,scores:c}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:d,softNmsSigma:p}=a;Object(s.a)(o,"NonMaxSuppressionWithScore");const l=n.data.get(o.dataId).values,f=n.data.get(c.dataId).values,m=i,h=u,b=d,k=p,{selectedIndices:I,selectedScores:g}=r(l,f,m,h,b,k);return[n.makeTensorInfo([I.length],"int32",new Int32Array(I)),n.makeTensorInfo([g.length],"float32",new Float32Array(g))]}}},840:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(14);const r={kernelName:a.dc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{indices:o}=t,{dtype:c,depth:i,onValue:u,offValue:d}=r;Object(s.a)(o,"oneHot");const p=a.Hf.sizeFromShape(o.shape),l=new Float32Array(p*i);l.fill(d);const f=n.data.get(o.dataId).values;for(let e=0;e<p;++e)f[e]>=0&&f[e]<i&&(l[e*i+f[e]]=u);return n.makeTensorInfo([...o.shape,i],c,l)}}},841:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),s=n(70),r=n(245),o=n(137),c=n(119),i=n(388);const u={kernelName:a.ec,backendName:"cpu",kernelFunc:
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
function e(t){const{inputs:n,backend:a}=t,{x:u}=n;if("string"===u.dtype)throw new Error("onesLike is not supported for string tensors");if("complex64"===u.dtype){const t=Object(c.a)({inputs:{input:u},backend:a}),n=e({inputs:{x:t},backend:a}),r=Object(o.a)({inputs:{input:u},backend:a}),d=Object(i.a)({inputs:{x:r},backend:a}),p=Object(s.a)({inputs:{real:n,imag:d},backend:a});return a.disposeIntermediateTensorInfo(t),a.disposeIntermediateTensorInfo(n),a.disposeIntermediateTensorInfo(r),a.disposeIntermediateTensorInfo(d),p}return Object(r.a)({backend:a,attrs:{shape:u.shape,value:1,dtype:u.dtype}})}}}}]);