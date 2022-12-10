(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{338:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var r=n(0),a=n(14),s=n(59);
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
function o(t,e,n,a){const[s,o]=r.Ad.computeOutAndReduceShapes(t,a),i=Object(r.Gf)(e,"int32"),l=r.Hf.makeZerosTypedArray(r.Hf.sizeFromShape(s),i),u=r.Hf.sizeFromShape(o);for(let t=0;t<l.length;++t){const e=t*u;let r=1;for(let t=0;t<u;++t)r*=n[e+t];l[t]=r}return{outVals:l,outShape:s,outDtype:i}}const i={kernelName:r.kc,backendName:"cpu",kernelFunc:function(t){const{inputs:e,backend:n,attrs:i}=t,{x:l}=e,{axis:u,keepDims:c}=i;Object(a.a)(l,"prod");const h=l.shape.length,p=r.Hf.parseAxisParam(u,l.shape),f=r.Ad.getAxesPermutation(p,h);let d=p,g=l;const w=[];null!=f&&(g=Object(s.a)({inputs:{x:l},backend:n,attrs:{perm:f}}),w.push(g),d=r.Ad.getInnerMostAxes(d.length,h));const m=n.data.get(g.dataId).values,{outVals:T,outShape:y,outDtype:I}=o(g.shape,g.dtype,m,d);let S=y;return c&&(S=r.Ad.expandShapeToKeepDim(y,p)),w.forEach(t=>n.disposeIntermediateTensorInfo(t)),n.makeTensorInfo(S,I,T)}}},339:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0);
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
 */function a(t,e,n,r){const a=[];let s=0;const o=e.length-1+n.length,i=new Array(o).fill(null).map(()=>[0]);!function(t,e){for(let n=0;n<t.length;++n){const r=t[n],a=n===t.length-1?e:t[n+1].length;if(0===r.length)throw new Error("Ragged splits may not be empty");if(r[0]<0)throw new Error("Ragged splits must be non-negative");if(r[r.length-1]>a)throw new Error("Ragged splits must not point past values");for(let t=1;t<r.length;++t)if(r[t-1]>r[t])throw new Error("Ragged splits must be sorted in ascending order")}}(n,r);let l=1;for(let t=0;t<e.length-1;++t){l*=e[t];const n=e[t+1];for(let e=1;e<l+1;++e)i[t].push(e*n)}for(let r=0;r<t.length;++r){let o=t[r],l=t[r]+1;for(let t=0;t<n.length;++t){const r=n[t],a=t+e.length-1;if(a>=0){const t=i[a],e=t[t.length-1]-r[o];for(let t=o;t<l;++t)i[a].push(r[t+1]+e)}o=r[o],l=r[l]}l!==o&&(a.push([o,l]),s+=l-o)}return{outSplits:i,valueSlices:a,numValues:s}}function s(t,e){const n=t.slice(0,e);for(;n.length<e;)n.push(1);for(let r=e;r<t.length;r++)n[e-1]*=t[r];return n}function o(t,e,n,a,o){const i=e.slice();i[0]=o;const l=r.Hf.getArrayFromDType(n,r.Hf.sizeFromShape(i)),u=t.length;return function(t,e,n,r,a,o){const i=s(e,2)[1],l=s(o,2)[1];let u=0;for(const e of n)for(let n=e[0];n<e[1];++n){for(let e=0;e<r;++e)a[u*l+e]=t[n*i+e];++u}}(t,e,a,0===u?0:u/e[0],l,i),[l,i]}function i(t,e,n,s,i,l,u,c){if(0===t.length)throw new Error("paramsNestedSplits must be non empty");if(0===e[0].length)throw new Error("Split tensors must not be scalars");if(function(t,e,n){t.forEach((t,a)=>{if(t<0||t>=n){const s=r.Hf.indexToLoc(a,e.length,r.Hf.computeStrides(e)).join(",");throw new Error(`indices[${s}] = ${t} is not in [0, ${n})`)}})}(l,u,e[0][0]-1),0===s.length)throw new Error("params.rank must be nonzero");const h=s[0],{outSplits:p,valueSlices:f,numValues:d}=a(l,u,t,h),g=function(t){const e=[];for(let n=0;n<t.length;++n){const a=t[n].length,s=r.Hf.getArrayFromDType("int32",a);e.push(s),t[n].forEach((t,e)=>s[e]=t)}return e}(p),w=o(n,s,i,f,d);return[g,w[0],w[1]]}},340:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);
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
 */function a(t,e,n,a,s,o,i){if(e.length>1)throw new Error("starts must be a scalar or vector");if(s.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const l=0===e.length,u=0===s.length,c=0===i.length,h=[];l||h.push(e[0]),u||h.push(s[0]),c||h.push(i[0]);for(let t=1;t<h.length;++t)if(h[t]!==h[t-1])throw new Error("starts, limits, and deltas must have the same shape");const p=0===h.length?1:h[0],f=r.Hf.getArrayFromDType("int32",p+1);f[0]=0;for(let e=0;e<p;++e){const n=l?t[0]:t[e],r=u?a[0]:a[e],s=c?o[0]:o[e];if(0===s)throw new Error("Requires delta != 0");let i;if(s>0&&r<n||s<0&&r>n)i=0;else if(i=Math.ceil(Math.abs((r-n)/s)),i>2147483647)throw new Error("Requires ((limit - start) / delta) <= 2147483647");f[e+1]=f[e]+i}const d=f[p],g=r.Hf.getArrayFromDType(n,d);let w=0;for(let e=0;e<p;++e){const n=f[e+1]-f[e];let r=l?t[0]:t[e];const a=c?o[0]:o[e];for(let t=0;t<n;++t)g[w++]=r,r+=a}return[f,g]}},341:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0),a=r.Ad.RowPartitionType;
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
 */class RaggedTensorToTensorOp{constructor(t,e,n,a,s,o,i,l,u,c){this.shape=t,this.shapeShape=e,this.values=n,this.valuesShape=a,this.valuesDType=s,this.defaultValue=o,this.defaultValueShape=i,this.rowPartitionValues=l,this.rowPartitionValuesShapes=u,this.rowPartitionTypes=r.Ad.getRowPartitionTypesHelper(c),this.raggedRank=r.Ad.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===a.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===a.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case a.VALUE_ROWIDS:return RaggedTensorToTensorOp.getMaxWidthValueRowID(e);case a.ROW_SPLITS:return RaggedTensorToTensorOp.getMaxWidthRowSplit(e);default:throw new Error("Cannot handle partition type "+a[this.getRowPartitionTypeByDimension(t-1)])}}static getMaxWidthRowSplit(t){const e=t.length;if(0===e||1===e)return 0;let n=0;for(let r=0;r<e-1;++r){const e=t[r+1]-t[r];e>n&&(n=e)}return n}static getMaxWidthValueRowID(t){const e=t.length;if(0===e)return 0;let n=0,r=t[0],a=0;for(let s=1;s<e;++s){const e=t[s];e!==r&&(r=e,a=Math.max(s-n,a),n=s)}return Math.max(e-n,a)}tensorShapeFromTensor(t,e,n=!0){if(0===e.length){if(-1===t[0])return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return o(t,n)}calculateOutputSize(t){const e=this.valuesShape,n=this.defaultValueShape;r.Ad.validateDefaultValueShape(n,e);const a=this.tensorShapeFromTensor(this.shape,this.shapeShape),s=r.Ad.combineRaggedTensorToTensorShapes(this.raggedRank,a,e);s[0]<0&&(s[0]=t);for(let t=1;t<=this.raggedRank;++t)s[t]<0&&(s[t]=this.getMaxWidth(t));return s}calculateFirstParentOutputIndex(t,e,n){const a=Math.min(t,n),s=[];let o=0;for(let t=0;t<a;++t,o+=e)s.push(o);for(let e=a;e<t;++e)s.push(-1);return r.Hf.assert(s.length===t,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(t,e,n,r){const a=t.length,s=[];for(let o=0;o<a-1;++o){const a=t[o+1]-t[o];let i=Math.min(r,a),l=e[o];-1===l&&(i=0);for(let t=0;t<i;++t)s.push(l),l+=n;for(let t=0;t<a-i;++t)s.push(-1)}if(a>0&&s.length!==t[a-1])throw new Error("Invalid row split size.");return s}calculateOutputIndexValueRowID(t,e,n,r){const a=t.length,s=[];if(0===a)return[];let o=0,i=t[0];if(i>=e.length)throw new Error(`Got currentValueRowId=${i}, which is not less than ${e.length}`);let l=e[i];s.push(l);for(let u=1;u<a;++u){const a=t[u];if(a===i)l>=0&&(++o,o<r?l+=n:l=-1);else{if(o=0,i=a,a>=e.length)throw new Error(`Got nextValueRowId=${a} which is not less than ${e.length}`);l=e[a]}s.push(l)}if(s.length!==t.length)throw new Error("Invalid row ids.");return s}calculateOutputIndex(t,e,n,r){const s=this.getRowPartitionTensor(t),o=this.getRowPartitionTypeByDimension(t);switch(o){case a.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,e,n,r);case a.ROW_SPLITS:if(s.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(s,e,n,r);default:throw new Error("Unsupported partition type: "+a[o])}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(0===this.rowPartitionTypes.length)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case a.FIRST_DIM_SIZE:return t[0];case a.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case a.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error("Cannot handle type "+a[e])}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),e=this.calculateOutputSize(t),n=new Array(this.raggedRank+1);n[n.length-1]=1;for(let t=n.length-2;t>=0;--t)n[t]=n[t+1]*e[t+1];const a=o(e,!1),s=r.Hf.getArrayFromDType(this.valuesDType,r.Hf.sizeFromShape(a));if(n[0]*e[0]>0){let r=this.calculateFirstParentOutputIndex(t,n[0],e[0]);for(let t=1;t<=this.raggedRank;++t){r=this.calculateOutputIndex(t-1,r,n[t],e[t])}this.setOutput(this.raggedRank,r,s,a)}return[a,s]}setOutput(t,e,n,a){if(0===n.length)return;const o=this.values,i=n;let l=a.slice();l=l.slice(t+1);const u=r.Hf.sizeFromShape(l),c=e.length;let h=this.defaultValue;if(h.length!==u&&1!==h.length){const t=this.defaultValueShape;Object(r.Af)(()=>{const e=Object(r.Ye)(h,t),n=Object(r.Ed)(e,l);h=n.dataSync()})}let p=0,f=0,d=0;for(let t=0;t<=c;++t){let r=t<c?e[t]:-1;if(r!==d){if(f<d){const t=o.subarray(p*u);s(i.subarray(f*u),t,(d-f)*u)}if(t>=c){const t=n.length;r=Math.floor(t/u)}if(r>d)if(1===this.defaultValue.length)i.subarray(d*u,r*u).fill(this.defaultValue[0]),d=r;else for(;r>d;){s(i.slice(d*u),h,u),++d}r<0?(p=t+1,f=d):(p=t,f=d,d=f+1)}else++d}}}function s(t,e,n){for(let r=0;r<n;r++)t[r]=e[r]}function o(t,e){const n=[];for(let r of t){if(r<0){if(!e)throw new Error(`Dimension ${r} must be >= 0`);if(r<-1)throw new Error(`Dimension ${r} must be >= -1`);r=-1}n.push(r)}return n}function i(t,e,n,r,a,s,o,i,l,u){return new RaggedTensorToTensorOp(t,e,n,r,a,s,o,i,l,u).compute()}},342:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);
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
 */function a(t,e,n,a){if(t===e||t<e&&n<0||e<t&&n>1)return r.Hf.makeZerosTypedArray(0,a);const s=Math.abs(Math.ceil((e-t)/n)),o=r.Hf.makeZerosTypedArray(s,a);e<t&&1===n&&(n=-1),o[0]=t;for(let t=1;t<o.length;t++)o[t]=o[t-1]+n;return o}},381:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return l}));var r=n(0),a=n(14),s=n(46);
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
const o=Object(s.a)((t,e)=>t<0?e*t:t);function i(t){const{inputs:e,backend:n}=t,{x:r,alpha:s}=e;Object(a.a)([r,s],"prelu");const i=n.data.get(r.dataId).values,l=n.data.get(s.dataId).values,[u,c]=o(r.shape,s.shape,i,l,"float32");return n.makeTensorInfo(c,"float32",u)}const l={kernelName:r.jc,backendName:"cpu",kernelFunc:i}},842:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(0),a=n(46),s=n(48);
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
const o=Object(a.a)((t,e)=>Math.pow(t,e)),i=Object(s.a)(r.ic,o),l={kernelName:r.ic,backendName:"cpu",kernelFunc:i}},843:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n(339);const s={kernelName:r.lc,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:r}=t,{paramsNestedSplits:s,paramsDenseValues:o,indices:i}=e,{outputRaggedRank:l}=r,u=s.map(t=>n.data.get(t.dataId).values),c=s.map(t=>t.shape),h=n.data.get(o.dataId).values,p=n.data.get(i.dataId).values,[f,d,g]=Object(a.a)(u,c,h,o.shape,o.dtype,p,i.shape,l),w=f.map(t=>n.makeTensorInfo([t.length],"int32",t)),m=n.makeTensorInfo(g,o.dtype,d);return w.concat([m])}}},844:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n(340);const s={kernelName:r.mc,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n}=t,{starts:r,limits:s,deltas:o}=e,i=n.data.get(r.dataId).values,l=n.data.get(s.dataId).values,u=n.data.get(o.dataId).values,[c,h]=Object(a.a)(i,r.shape,r.dtype,l,s.shape,u,o.shape);return[n.makeTensorInfo([c.length],"int32",c),n.makeTensorInfo([h.length],r.dtype,h)]}}},845:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n(341);const s={kernelName:r.nc,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:r}=t,{shape:s,values:o,defaultValue:i,rowPartitionTensors:l}=e,{rowPartitionTypes:u}=r,c=n.data.get(s.dataId).values,h=n.data.get(o.dataId).values,p=n.data.get(i.dataId).values,f=l.map(t=>n.data.get(t.dataId).values),d=l.map(t=>t.shape),[g,w]=Object(a.a)(c,s.shape,h,o.shape,o.dtype,p,i.shape,f,d,u);return n.makeTensorInfo(g,o.dtype,w)}}},846:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n(342);const s={kernelName:r.oc,backendName:"cpu",kernelFunc:
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
function(t){const{backend:e,attrs:n}=t,{start:r,stop:s,dtype:o,step:i}=n,l=Object(a.a)(r,s,i,o);return e.makeTensorInfo([l.length],o,l)}}}}]);