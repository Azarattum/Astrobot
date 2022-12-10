(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var s=n(6),r=n(3),a=n(2),c=n(4);const u=Object(c.b)({split_:
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
function(e,t,n=0){const c={x:Object(a.a)(e,"x","split")},u={numOrSizeSplits:t,axis:n};return s.a.runKernel(r.Tc,c,u)}})},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n(6),r=n(3),a=n(2),c=n(5),u=n(4);const i=Object(u.b)({spaceToBatchND_:
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
function(e,t,n){const u=Object(a.a)(e,"x","spaceToBatchND");c.b(u.rank>=1+t.length,()=>`input rank ${u.rank} should be > than [blockShape] ${t.length}`),c.b(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),c.b(u.shape.reduce((e,s,r)=>r>0&&r<=t.length?e&&(s+n[r-1][0]+n[r-1][1])%t[r-1]==0:e,!0),()=>`input spatial dimensions ${u.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const i={x:u},o={blockShape:t,paddings:n};return s.a.runKernel(r.Nc,i,o)}})},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var s=n(6),r=n(3),a=n(5),c=n(4);const u=Object(c.b)({ifft_:
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
function(e){Object(a.b)("complex64"===e.dtype,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return s.a.runKernel(r.sb,t)}})},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var s=n(6),r=n(3),a=n(5),c=n(4);const u=Object(c.b)({fft_:
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
function(e){Object(a.b)("complex64"===e.dtype,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return s.a.runKernel(r.fb,t)}})},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var s=n(5),r=n(98),a=n(58),c=n(172),u=n(4),i=n(158),o=n(9),p=n(44),h=n(114),b=n(144),d=n(32),l=n(196);const f=Object(u.b)({rfft_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function(e,t){Object(s.b)("float32"===e.dtype,()=>"The dtype for rfft() must be real value but got "+e.dtype);let n=e.shape[e.shape.length-1];const u=e.size/n;let f;if(null!=t&&t<n){const s=e.shape.map(e=>0),r=e.shape.map(e=>e);r[e.shape.length-1]=t,f=Object(p.a)(e,s,r),n=t}else if(null!=t&&t>n){const s=e.shape.map(e=>e);s[e.shape.length-1]=t-n,f=Object(a.a)([e,Object(b.a)(s)],e.shape.length-1),n=t}else f=e;const O=Object(d.a)(f),j=Object(o.a)(Object(r.a)(f,O),[u,n]),m=Object(l.a)(j),w=Math.floor(n/2)+1,g=Object(i.a)(m),v=Object(c.a)(m),S=Object(h.a)(g,[w,n-w],g.shape.length-1),$=Object(h.a)(v,[w,n-w],v.shape.length-1),y=f.shape.slice();return y[f.shape.length-1]=w,Object(o.a)(Object(r.a)(S[0],$[0]),y)}})},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n(98),r=n(58),a=n(172),c=n(10),u=n(4),i=n(158),o=n(9),p=n(88),h=n(27),b=n(44),d=n(184);const l=Object(u.b)({irfft_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function(e){const t=e.shape[e.shape.length-1],n=e.size/t;let u;if(t<=2){const s=Object(o.a)(e,[n,t]);u=Object(d.a)(s)}else{const l=[n,2*(t-1)],f=Object(o.a)(Object(i.a)(e),[n,t]),O=Object(o.a)(Object(a.a)(e),[n,t]),j=Object(p.a)(Object(b.a)(f,[0,1],[n,t-2]),1),m=Object(c.a)(Object(p.a)(Object(b.a)(O,[0,1],[n,t-2]),1),Object(h.a)(-1)),w=Object(r.a)([f,j],1),g=Object(r.a)([O,m],1),v=Object(o.a)(Object(s.a)(w,g),[l[0],l[1]]);u=Object(d.a)(v)}if(u=Object(i.a)(u),3===e.rank&&0!==e.shape[0]){const t=u,n=e.shape[0];u=Object(o.a)(u,[n,u.shape[0]/n,u.shape[1]]),t.dispose()}return u}})},517:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n(6),r=n(3),a=n(566),c=n(2),u=n(5),i=n(4);const o=Object(i.b)({sparseToDense_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function(e,t,n,i=0){Object(u.c)(n);const o=Object(c.a)(e,"sparseIndices","sparseToDense","int32"),p=Object(c.a)(t,"sparseValues","sparseToDense","string_or_numeric"),h=Object(c.a)(i,"defaultValue","sparseToDense",p.dtype);a.a(o,p,n,h);const b={sparseIndices:o,sparseValues:p,defaultValue:h},d={outputShape:n};return s.a.runKernel(r.Sc,b,d)}})},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var s=n(5);function r(e,t,n=0){let r=[];if("number"==typeof t)Object(s.b)(e.shape[n]%t==0,()=>"Number of splits must evenly divide the axis."),r=new Array(t).fill(e.shape[n]/t);else{const a=t.reduce((e,t)=>(-1===t&&(e+=1),e),0);Object(s.b)(a<=1,()=>"There should be only one negative value in split array.");const c=t.indexOf(-1);if(-1!==c){const s=t.reduce((e,t)=>t>0?e+t:e);t[c]=e.shape[n]-s}Object(s.b)(e.shape[n]===t.reduce((e,t)=>e+t),()=>"The sum of sizes must match the size of the axis dimension."),r=t}return r}},538:function(e,t,n){"use strict";
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
function s(e){return"Received SparseTensor with denseShape[0] = 0 but\n  indices.shape[0] = "+e}function r(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function a(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a}))},539:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i}));var s=n(5);
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
 */function r(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function a(e,t){return`size ${e} must be non-negative, not ${t}`}function c(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function u(e,t){return`Input to reshape is a SparseTensor with ${Object(s.O)(e)}\n  dense values, but the requested shape requires a multiple of ${Object(s.O)(t)}. inputShape=${e} outputShape= ${t}`}function i(e,t){return`Input to reshape is a tensor with ${Object(s.O)(e)} dense values, but the requested shape has ${Object(s.O)(t)}. inputShape=${e} outputShape=${t}`}},540:function(e,t,n){"use strict";
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
function s(){return"segment ids must be >= 0"}function r(){return"segment ids are not increasing"}function a(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function c(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c}))},566:function(e,t,n){"use strict";function s(e,t,n,s){if("int32"!==e.dtype)throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const r=e.rank>0?e.shape[0]:1,a=e.rank>1?e.shape[1]:1;if(n.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);const c=t.size;if(0!==t.rank&&(1!==t.rank||c!==r))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${r}]`);if(t.dtype!==s.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}n.d(t,"a",(function(){return s}))},594:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var s=n(6),r=n(3),a=n(2),c=n(4);const u=Object(c.b)({sparseFillEmptyRows_:
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
function(e,t,n,c){const u=Object(a.a)(e,"indices","sparseFillEmptyRows","int32"),i=Object(a.a)(t,"values","sparseFillEmptyRows"),o=Object(a.a)(n,"denseShape","sparseFillEmptyRows","int32"),p=Object(a.a)(c,"defaultValue","sparseFillEmptyRows",i.dtype);if(2!==u.rank)throw new Error("Indices should be Tensor2D but received shape\n        "+u.shape);if(1!==i.rank)throw new Error("Values should be Tensor1D but received shape "+i.shape);if(1!==o.rank)throw new Error("Dense shape should be Tensor1D but received shape "+o.shape);if(0!==p.rank)throw new Error("Default value should be a scalar but received shape "+p.shape);const h={indices:u,values:i,denseShape:o,defaultValue:p},b=s.a.runKernel(r.Oc,h);return{outputIndices:b[0],outputValues:b[1],emptyRowIndicator:b[2],reverseIndexMap:b[3]}}})},595:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var s=n(6),r=n(3),a=n(2),c=n(4);const u=Object(c.b)({sparseReshape_:
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
function(e,t,n){const c=Object(a.a)(e,"inputIndices","sparseReshape","int32"),u=Object(a.a)(t,"inputShape","sparseReshape","int32"),i=Object(a.a)(n,"newShape","sparseReshape","int32");if(2!==c.rank)throw new Error("Input indices should be Tensor2D but received shape\n        "+c.shape);if(1!==u.rank)throw new Error("Input shape should be Tensor1D but received shape "+u.shape);if(1!==i.rank)throw new Error("New shape should be Tensor1D but received shape "+i.shape);const o={inputIndices:c,inputShape:u,newShape:i},p=s.a.runKernel(r.Pc,o);return{outputIndices:p[0],outputShape:p[1]}}})},596:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var s=n(6),r=n(3),a=n(2),c=n(4);const u=Object(c.b)({sparseSegmentMean_:
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
function(e,t,n){const c=Object(a.a)(e,"data","sparseSegmentMean"),u=Object(a.a)(t,"indices","sparseSegmentMean","int32"),i=Object(a.a)(n,"segmentIds","sparseSegmentMean","int32");if(c.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==u.rank)throw new Error("Indices should be Tensor1D but received shape\n          "+u.shape);if(1!==i.rank)throw new Error("Segment ids should be Tensor1D but received shape\n          "+i.shape);const o={data:c,indices:u,segmentIds:i};return s.a.runKernel(r.Qc,o)}})},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var s=n(6),r=n(3),a=n(2),c=n(4);const u=Object(c.b)({sparseSegmentSum_:
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
function(e,t,n){const c=Object(a.a)(e,"data","sparseSegmentSum"),u=Object(a.a)(t,"indices","sparseSegmentSum","int32"),i=Object(a.a)(n,"segmentIds","sparseSegmentSum","int32");if(c.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==u.rank)throw new Error("Indices should be Tensor1D but received shape\n         "+u.shape);if(1!==i.rank)throw new Error("Segment ids should be Tensor1D but received shape\n         "+i.shape);const o={data:c,indices:u,segmentIds:i};return s.a.runKernel(r.Rc,o)}})},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var s=n(6),r=n(3),a=n(2),c=n(4);const u=Object(c.b)({sqrt_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function(e){const t={x:Object(a.a)(e,"x","sqrt","float32")};return s.a.runKernel(r.Uc,t)}})}}]);