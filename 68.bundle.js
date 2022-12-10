(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{240:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(0);
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
 */function n(e,t,r,n,s,o=!1,c=0){const u=n.length,d=[t[0],e.length/t[0]],i=d[1],p=u>0?s[u-1]+1:0;if(p<0)throw new Error(a.Ad.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());const l=t.slice();l[0]=p;const h=l.reduce((e,t)=>e*t,1),f=a.Hf.getArrayFromDType(r,h);if(0===u)return p>0&&f.fill(c),[f,l];if(p<=0)throw new Error(a.Ad.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let g=0,m=1,w=0,b=s[g];for(;;){let t=0;if(m<u){if(t=s[m],b===t){++m;continue}if(b>=t)throw new Error(a.Ad.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(b<0||b>=p)throw new Error(a.Ad.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(b,p));b>w&&f.fill(c,w*i,b*i);for(let t=g;t<m;++t){const r=n[t];if(r<0||r>=d[0])throw new Error(a.Ad.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(t,n[t],d[0]));for(let t=0;t<i;t++)f[b*i+t]+=e[r*i+t]}if(o)for(let e=0;e<i;e++)f[b*i+e]/=m-g;if(g=m,++m,w=b+1,b=t,m>u)break}return w<p&&f.fill(c,w*i,p*i),[f,l]}},344:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(0);
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
 */function n(e,t,r,n,s,o,c){const u=t[0],d=o[0],i=new Array(d),p=new Array(u),l=t[1];if(0===d){if(0!==u)throw new Error(a.Ad.getSparseFillEmptyRowsIndicesDenseShapeMismatch(u));return[a.Hf.getArrayFromDType(r,0),[0,l],a.Hf.getArrayFromDType(s,0),i,p]}let h=!0,f=0;const g=new Array(d).fill(0);for(let t=0;t<u;++t){const r=e[t*l];if(r<0)throw new Error(a.Ad.getSparseFillEmptyRowsNegativeIndexErrorMessage(t,r));if(r>=d)throw new Error(a.Ad.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(t,r,d));++g[r],h=h&&r>=f,f=r}let m=!0;for(let e=0;e<d;++e){const t=0===g[e];i[e]=t,m=m&&!t,g[e]=Math.max(g[e],1),e>0&&(g[e]+=g[e-1])}if(m&&h){const t=e,r=n;for(let e=0;e<u;++e)p[e]=e;return[t,[u,l],r,i,p]}{const t=g[d-1],o=a.Hf.getArrayFromDType(r,t*l),h=a.Hf.getArrayFromDType(s,t),f=new Array(d).fill(0);for(let t=0;t<u;++t){const r=e[t*l],a=f[r],s=(0===r?0:g[r-1])+a;f[r]++;for(let r=0;r<l;++r)o[s*l+r]=e[t*l+r];h[s]=n[t],p[t]=s}for(let e=0;e<d;++e){if(0===f[e]){const t=0===e?0:g[e-1];o[t*l+0]=e;for(let e=1;e<l;++e)o[t*l+e]=0;h[t]=c}}return[o,[t,l],h,i,p]}}},345:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(0);
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
 */function n(e,t,r,n,s){const o=a.Hf.sizeFromShape(n),c=t[0],u=s.length,d=[];let i=1,p=-1;for(let e=0;e<u;++e){const t=s[e];if(-1===t){if(-1!==p)throw new Error(a.Ad.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(p,e));p=e,d.push(1)}else{if(t<0)throw new Error(a.Ad.getSparseReshapeNegativeOutputDimErrorMessage(e,t));i*=t,d.push(t)}}if(-1!==p){if(i<=0)throw new Error(a.Ad.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());const e=Math.trunc(o/i);if(i*e!==o)throw new Error(a.Ad.getSparseReshapeInputOutputMultipleErrorMessage(n,d));d[p]=e}if(a.Hf.sizeFromShape(d)!==o)throw new Error(a.Ad.getSparseReshapeInputOutputMismatchErrorMessage(n,d));const l=n.length,h=[];if(l>0){h[l-1]=1;for(let e=l-2;e>=0;--e)h[e]=h[e+1]*n[e+1]}const f=[];if(u>0){f[u-1]=1;for(let e=u-2;e>=0;--e)f[e]=f[e+1]*d[e+1]}const g=a.Hf.getArrayFromDType(r,c*u);for(let t=0;t<c;++t){let r=0;for(let a=0;a<l;++a)r+=e[t*l+a]*h[a];for(let e=0;e<u;++e)g[t*u+e]=Math.trunc(r/f[e]),r%=f[e]}return[g,[c,u],d]}},346:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return u}));var a=r(0),n=r(94),s=r(29);
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
const o=Object(n.a)(e=>Math.sqrt(e)),c=Object(s.a)(a.Vc,e=>Math.sqrt(e)),u={kernelName:a.Vc,backendName:"cpu",kernelFunc:c}},347:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return u}));var a=r(0),n=r(46),s=r(48);
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
const o=Object(n.a)((e,t)=>{const r=e-t;return r*r}),c=Object(s.a)(a.Xc,o),u={kernelName:a.Xc,backendName:"cpu",kernelFunc:c}},864:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(0),n=r(14),s=r(390),o=r(45),c=r(59);const u={kernelName:a.Oc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:r,attrs:u}=e,{x:d}=t,{blockShape:i,paddings:p}=u;Object(n.a)([d],"spaceToBatchND");const l=a.Hf.sizeFromShape(i),h=[[0,0]];h.push(...p);for(let e=1+i.length;e<d.shape.length;++e)h.push([0,0]);const f=s.a.kernelFunc({inputs:{x:d},backend:r,attrs:{paddings:h,constantValue:0}}),g=a.Ad.getReshaped(f.shape,i,l,!1),m=a.Ad.getPermuted(g.length,i.length,!1),w=a.Ad.getReshapedPermuted(f.shape,i,l,!1),b={x:f},k={shape:g},v=Object(o.a)({inputs:b,backend:r,attrs:k}),I={x:v},y={perm:m},S=Object(c.a)({inputs:I,backend:r,attrs:y}),E={x:S},A={shape:w},O=Object(o.a)({inputs:E,backend:r,attrs:A});return r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(v),r.disposeIntermediateTensorInfo(S),O}}},865:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),n=r(344);const s={kernelName:a.Pc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:r}=e,{indices:a,values:s,denseShape:o,defaultValue:c}=t;if(1!==o.shape.length)throw new Error("Dense shape must be a vector, saw:\n        "+o.shape);if(2!==a.shape.length)throw new Error("Indices must be a matrix, saw:\n        "+a.shape);if(1!==s.shape.length)throw new Error("Values must be a vector, saw:\n        "+s.shape);if(0!==c.shape.length)throw new Error("Default value must be a scalar, saw:\n        "+c.shape);const u=r.data.get(a.dataId).values,d=r.data.get(s.dataId).values,i=r.data.get(o.dataId).values,p=r.data.get(c.dataId).values[0],[l,h,f,g,m]=Object(n.a)(u,a.shape,a.dtype,d,s.dtype,i,p);return[r.makeTensorInfo(h,a.dtype,l),r.makeTensorInfo([h[0]],s.dtype,f),r.makeTensorInfo([g.length],"bool",new Uint8Array(g.map(e=>Number(e)))),r.makeTensorInfo([m.length],a.dtype,new Int32Array(m))]}}},866:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),n=r(345);const s={kernelName:a.Qc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:r}=e,{inputIndices:a,inputShape:s,newShape:o}=t;if(2!==a.shape.length)throw new Error("Input indices should be a matrix but received shape\n        "+a.shape);if(1!==s.shape.length)throw new Error("Input shape should be a vector but received shape\n        "+s.shape);if(1!==o.shape.length)throw new Error("Target shape should be a vector but received shape "+o.shape);const c=Array.from(r.data.get(s.dataId).values),u=r.data.get(a.dataId).values,d=Array.from(r.data.get(o.dataId).values),[i,p,l]=Object(n.a)(u,a.shape,a.dtype,c,d);return[r.makeTensorInfo(p,a.dtype,i),r.makeTensorInfo([l.length],o.dtype,new Int32Array(l))]}}},867:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),n=r(240);const s={kernelName:a.Rc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:r}=e,{data:a,indices:s,segmentIds:o}=t;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.shape.length)throw new Error("Indices should be a vector but received shape\n          "+s.shape);if(1!==o.shape.length)throw new Error("Segment ids should be a vector but received shape\n          "+o.shape);if(s.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const c=r.data.get(a.dataId).values,u=r.data.get(s.dataId).values,d=r.data.get(o.dataId).values,[i,p]=Object(n.a)(c,a.shape,a.dtype,u,d,!0);return r.makeTensorInfo(p,a.dtype,i)}}},868:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),n=r(240);const s={kernelName:a.Sc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:r}=e,{data:a,indices:s,segmentIds:o}=t;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.shape.length)throw new Error("Indices should be a vector but received shape\n         "+s.shape);if(1!==o.shape.length)throw new Error("Segment ids should be a vector but received shape\n         "+o.shape);if(s.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const c=r.data.get(a.dataId).values,u=r.data.get(s.dataId).values,d=r.data.get(o.dataId).values,[i,p]=Object(n.a)(c,a.shape,a.dtype,u,d);return r.makeTensorInfo(p,a.dtype,i)}}},869:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),n=r(162);const s={kernelName:a.Tc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:r,attrs:s}=e,{sparseIndices:o,sparseValues:c,defaultValue:u}=t,{outputShape:d}=s,{sliceRank:i,numUpdates:p,sliceSize:l,strides:h,outputSize:f}=a.Ad.calculateShapes(c,o,d),g=r.bufferSync(o);let m;switch(c.dtype){case"bool":{const e=r.bufferSync(c),t=Boolean(r.data.get(u.dataId).values[0]);m=Object(n.a)(g,e,d,f,l,p,i,h,t,!1);break}case"float32":{const e=r.bufferSync(c),t=r.data.get(u.dataId).values[0];m=Object(n.a)(g,e,d,f,l,p,i,h,t,!1);break}case"int32":{const e=r.bufferSync(c),t=r.data.get(u.dataId).values[0];m=Object(n.a)(g,e,d,f,l,p,i,h,t,!1);break}case"string":{const e=r.bufferSync(c),t=a.Hf.decodeString(r.data.get(u.dataId).values[0]);m=Object(n.a)(g,e,d,f,l,p,i,h,t,!1);break}default:throw new Error("Unsupported type "+c.dtype)}return r.makeTensorInfo(d,m.dtype,m.values)}}},870:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),n=r(100);const s={kernelName:a.Uc,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:r,attrs:s}=e,{x:o}=t,{numOrSizeSplits:c,axis:u}=s,d=a.Hf.parseAxisParam(u,o.shape)[0],i=a.Ad.prepareSplitSize(o,c,d),p=new Array(o.shape.length).fill(0),l=o.shape.slice();return i.map(e=>{const t=[...l];t[d]=e;const a=Object(n.a)({inputs:{x:o},backend:r,attrs:{begin:p,size:t}});return p[d]+=e,a})}}},871:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),n=r(14);
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
const s={kernelName:a.Wc,backendName:"cpu",kernelFunc:({inputs:e,backend:t})=>{const{x:r}=e,a=t;Object(n.a)(r,"square");const s=a.data.get(r.dataId).values,o=new Float32Array(s.length);for(let e=0;e<s.length;++e){const t=s[e];o[e]=t*t}return{dataId:a.write(o,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}}}}]);