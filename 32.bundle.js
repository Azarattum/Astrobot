(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(6),a=n(3),s=n(36),o=n(2),c=n(25),i=n(4);const u=Object(i.b)({greaterEqual_:
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
function(e,t){let n=Object(o.a)(e,"a","greaterEqual","string_or_numeric"),i=Object(o.a)(t,"b","greaterEqual","string_or_numeric");[n,i]=Object(s.makeTypesMatch)(n,i),Object(c.assertAndGetBroadcastShape)(n.shape,i.shape);const u={a:n,b:i};return r.a.runKernel(a.rb,u)}})},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6),a=n(3),s=n(2),o=n(4);const c=Object(o.b)({imag_:
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
function(e){const t={input:Object(s.a)(e,"input","imag")};return r.a.runKernel(a.ub,t)}})},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6),a=n(3),s=n(2),o=n(4);const c=Object(o.b)({leakyRelu_:
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
function(e,t=.2){const n={x:Object(s.a)(e,"x","leakyRelu")},o={alpha:t};return r.a.runKernel(a.Ab,n,o)}})},366:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(6),a=n(3),s=n(2),o=n(5),c=n(4),i=n(9);const u=Object(c.b)({resizeNearestNeighbor_:
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
function(e,t,n=!1,c=!1){const u=Object(s.a)(e,"images","resizeNearestNeighbor");o.b(3===u.rank||4===u.rank,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${u.rank}.`),o.b(2===t.length,()=>"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."),o.b("float32"===u.dtype||"int32"===u.dtype,()=>"`images` must have `int32` or `float32` as dtype"),o.b(!1===c||!1===n,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let b=u,l=!1;3===u.rank&&(l=!0,b=Object(i.a)(u,[1,u.shape[0],u.shape[1],u.shape[2]]));const[]=t,p={images:b},h={alignCorners:n,halfPixelCenters:c,size:t},O=r.a.runKernel(a.wc,p,h);return l?Object(i.a)(O,[O.shape[1],O.shape[2],O.shape[3]]):O}})},367:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(6),a=n(3),s=n(2),o=n(5),c=n(4),i=n(9);const u=Object(c.b)({resizeBilinear_:
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
function(e,t,n=!1,c=!1){const u=Object(s.a)(e,"images","resizeBilinear");o.b(3===u.rank||4===u.rank,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${u.rank}.`),o.b(2===t.length,()=>"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."),o.b(!1===c||!1===n,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let b=u,l=!1;3===u.rank&&(l=!0,b=Object(i.a)(u,[1,u.shape[0],u.shape[1],u.shape[2]]));const[]=t,p={images:b},h={alignCorners:n,halfPixelCenters:c,size:t},O=r.a.runKernel(a.uc,p,h);return l?Object(i.a)(O,[O.shape[1],O.shape[2],O.shape[3]]):O}})},427:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6),a=n(3),s=n(2),o=n(4);const c=Object(o.b)({isFinite_:
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
function(e){const t={x:Object(s.a)(e,"x","isFinite")};return r.a.runKernel(a.vb,t)}})},428:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6),a=n(3),s=n(2),o=n(4);const c=Object(o.b)({isInf_:
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
function(e){const t={x:Object(s.a)(e,"x","isInf")};return r.a.runKernel(a.wb,t)}})},429:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6),a=n(3),s=n(2),o=n(4);const c=Object(o.b)({isNaN_:
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
function(e){const t={x:Object(s.a)(e,"x","isNaN")};return r.a.runKernel(a.xb,t)}})},520:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(2),a=n(5),s=n(147);const o=
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
async function(e,t,n=1){const o=Object(r.a)(e,"predictions","inTopK"),c=Object(r.a)(t,"targets","inTopK");Object(a.b)(o.rank>1,()=>"inTopK() expects the predictions to be of rank 2 or higher, but got "+o.rank),Object(a.b)(o.rank-1===c.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${o.rank} and targets rank ${c.rank}`),Object(a.e)(o.shape.slice(0,o.shape.length-1),c.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const i=o.shape[o.shape.length-1];Object(a.b)(n>0&&n<=i,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${i}), but got ${n}`);const u=await o.data(),b=await c.data(),[l,p]=[u.length/i,i],h=Object(a.o)("bool",l);for(let e=0;e<l;e++){const t=e*p,r=u.subarray(t,t+p),a=[];for(let e=0;e<r.length;e++)a.push({value:r[e],index:e});a.sort((e,t)=>t.value-e.value),h[e]=0;for(let t=0;t<n;t++)if(a[t].index===b[e]){h[e]=1;break}}return e!==o&&o.dispose(),t!==c&&c.dispose(),Object(s.a)(h,c.shape,"bool")}},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(5),c=n(4);const i=Object(c.b)({flipLeftRight_:
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
function(e){const t=Object(s.a)(e,"image","flipLeftRight","float32");o.b(4===t.rank,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return r.a.runKernel(a.hb,n,{})}})},571:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),a=n(5),s=n(4),o=n(128);const c=Object(s.b)({grayscaleToRGB_:
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
function(e){const t=Object(r.a)(e,"image","grayscaleToRGB"),n=t.rank-1,s=t.shape[n];a.b(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),a.b(1===s,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const c=new Array(t.rank);return c.fill(1,0,n),c[n]=3,Object(o.a)(t,c)}})},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(5),c=n(4);const i=Object(c.b)({rotateWithOffset_:
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
function(e,t,n=0,c=.5){const i=Object(s.a)(e,"image","rotateWithOffset","float32");o.b(4===i.rank,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${i.rank}.`);const u={image:i},b={radians:t,fillValue:n,center:c};return r.a.runKernel(a.zc,u,b)}})},573:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(5),c=n(4);const i=Object(c.b)({cropAndResize_:
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
function(e,t,n,c,i="bilinear",u=0){const b=Object(s.a)(e,"image","cropAndResize"),l=Object(s.a)(t,"boxes","cropAndResize","float32"),p=Object(s.a)(n,"boxInd","cropAndResize","int32"),h=l.shape[0];o.b(4===b.rank,()=>`Error in cropAndResize: image must be rank 4,but got rank ${b.rank}.`),o.b(2===l.rank&&4===l.shape[1],()=>`Error in cropAndResize: boxes must be have size [${h},4] but had shape ${l.shape}.`),o.b(1===p.rank&&p.shape[0]===h,()=>`Error in cropAndResize: boxInd must be have size [${h}] but had shape ${l.shape}.`),o.b(2===c.length,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${c.length}.`),o.b(c[0]>=1&&c[1]>=1,()=>"cropSize must be atleast [1,1], but was "+c),o.b("bilinear"===i||"nearest"===i,()=>"method must be bilinear or nearest, but was "+i);const O={image:b,boxes:l,boxInd:p},d={method:i,extrapolationValue:u,cropSize:c};return r.a.runKernel(a.L,O,d)}})},574:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(130),c=n(4);const i=Object(c.b)({nonMaxSuppression_:
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
function(e,t,n,c=.5,i=Number.NEGATIVE_INFINITY){const u=Object(s.a)(e,"boxes","nonMaxSuppression","float32"),b=Object(s.a)(t,"scores","nonMaxSuppression","float32"),l=Object(o.a)(u,b,n,c,i),p={maxOutputSize:n=l.maxOutputSize,iouThreshold:c=l.iouThreshold,scoreThreshold:i=l.scoreThreshold};return r.a.runKernel(a.Zb,{boxes:u,scores:b},p)}})},575:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(141),a=n(2),s=n(130),o=n(91);const c=
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
async function(e,t,n,c=.5,i=Number.NEGATIVE_INFINITY){const u=Object(a.a)(e,"boxes","nonMaxSuppressionAsync"),b=Object(a.a)(t,"scores","nonMaxSuppressionAsync"),l=Object(s.a)(u,b,n,c,i);n=l.maxOutputSize,c=l.iouThreshold,i=l.scoreThreshold;const p=await Promise.all([u.data(),b.data()]),h=p[0],O=p[1],{selectedIndices:d}=Object(r.a)(h,O,n,c,i);return u!==e&&u.dispose(),b!==t&&b.dispose(),Object(o.a)(d,"int32")}},577:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(130),c=n(4);const i=Object(c.b)({nonMaxSuppressionWithScore_:
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
function(e,t,n,c=.5,i=Number.NEGATIVE_INFINITY,u=0){const b=Object(s.a)(e,"boxes","nonMaxSuppression"),l=Object(s.a)(t,"scores","nonMaxSuppression"),p=Object(o.a)(b,l,n,c,i,u),h={boxes:b,scores:l},O={maxOutputSize:n=p.maxOutputSize,iouThreshold:c=p.iouThreshold,scoreThreshold:i=p.scoreThreshold,softNmsSigma:u=p.softNmsSigma},d=r.a.runKernel(a.bc,h,O);return{selectedIndices:d[0],selectedScores:d[1]}}})},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(141),a=n(2),s=n(130),o=n(91);const c=
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
async function(e,t,n,c=.5,i=Number.NEGATIVE_INFINITY,u=0){const b=Object(a.a)(e,"boxes","nonMaxSuppressionAsync"),l=Object(a.a)(t,"scores","nonMaxSuppressionAsync"),p=Object(s.a)(b,l,n,c,i,u);n=p.maxOutputSize,c=p.iouThreshold,i=p.scoreThreshold,u=p.softNmsSigma;const h=await Promise.all([b.data(),l.data()]),O=h[0],d=h[1],{selectedIndices:j,selectedScores:f}=Object(r.c)(O,d,n,c,i,u);return b!==e&&b.dispose(),l!==t&&l.dispose(),{selectedIndices:Object(o.a)(j,"int32"),selectedScores:Object(o.a)(f)}}},579:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(130),c=n(4);const i=Object(c.b)({nonMaxSuppressionPadded_:
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
function(e,t,n,c=.5,i=Number.NEGATIVE_INFINITY,u=!1){const b=Object(s.a)(e,"boxes","nonMaxSuppression"),l=Object(s.a)(t,"scores","nonMaxSuppression"),p=Object(o.a)(b,l,n,c,i,null),h={boxes:b,scores:l},O={maxOutputSize:p.maxOutputSize,iouThreshold:p.iouThreshold,scoreThreshold:p.scoreThreshold,padToMaxOutputSize:u},d=r.a.runKernel(a.ac,h,O);return{selectedIndices:d[0],validOutputs:d[1]}}})},580:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(141),a=n(2),s=n(130),o=n(27),c=n(91);const i=
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
async function(e,t,n,i=.5,u=Number.NEGATIVE_INFINITY,b=!1){const l=Object(a.a)(e,"boxes","nonMaxSuppressionAsync"),p=Object(a.a)(t,"scores","nonMaxSuppressionAsync"),h=Object(s.a)(l,p,n,i,u,null),O=h.maxOutputSize,d=h.iouThreshold,j=h.scoreThreshold,[f,g]=await Promise.all([l.data(),p.data()]),{selectedIndices:m,validOutputs:x}=Object(r.b)(f,g,O,d,j,b);return l!==e&&l.dispose(),p!==t&&p.dispose(),{selectedIndices:Object(c.a)(m,"int32"),validOutputs:Object(o.a)(x,"int32")}}},581:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var r=n(91),a=n(4),s=n(19),o=n(114),c=n(286),i=n(106),u=n(80),b=n(28),l=n(22),p=n(10),h=n(24),O=n(23),d=n(260),j=n(64),f=n(143),g=n(44),m=n(183),x=n(147),k=n(5),z=n(2);const N=Object(a.b)({threshold_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t="binary",n=!1,a=.5){const N=Object(z.a)(e,"image","threshold"),T=N.shape[0]*N.shape[1];let I,S,E,y,v=Object(p.a)(Object(r.a)([a]),255);if(k.b(3===N.rank,()=>`Error in threshold: image must be rank 3,but got rank ${N.rank}.`),k.b(3===N.shape[2]||1===N.shape[2],()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${N.shape[2]}.`),k.b("int32"===N.dtype||"float32"===N.dtype,()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${N.dtype}.`),k.b("otsu"===t||"binary"===t,()=>"Method must be binary or otsu, but was "+t),3===N.shape[2]){[I,S,E]=Object(o.a)(N,[1,1,1],-1);const e=Object(p.a)(I,.2989),t=Object(p.a)(S,.587),n=Object(p.a)(E,.114);y=Object(l.a)(Object(l.a)(e,t),n)}else y=e;if("otsu"===t){v=function(e,t){let n,a,s,o,c,i,d=Object(r.a)([-1]),x=Object(r.a)([0]),k=Object(r.a)([0]);for(let z=0;z<e.size-1;z++){n=Object(g.a)(e,0,z+1),a=Object(g.a)(e,z+1),c=Object(h.a)(Object(b.a)(n),t),i=Object(h.a)(Object(b.a)(a),t);const N=Object(b.a)(Object(p.a)(n,Object(m.a)(0,n.size)));s=Object(h.a)(N,Object(b.a)(n));const T=Object(f.a)(a.shape,n.size),I=Object(l.a)(Object(m.a)(0,a.size),T),S=Object(p.a)(a,I);o=Object(h.a)(Object(b.a)(S),Object(b.a)(a));const E=Object(O.a)(s,o),y=Object(O.a)(s,o),v=Object(p.a)(c,i);k=Object(p.a)(Object(p.a)(v,E),y);const _=Object(u.a)(k,x);x=Object(j.a)(_,k,x),d=Object(j.a)(_,Object(r.a)([z]),d)}return d}(Object(c.a)(Object(s.a)(Object(d.a)(y),"int32"),Object(x.a)([]),256),T)}const _=n?Object(i.a)(y,v):Object(u.a)(y,v);return Object(s.a)(Object(p.a)(_,255),"int32")}})},582:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(6),a=n(3),s=n(2),o=n(5),c=n(4);const i=Object(c.b)({transform_:
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
function(e,t,n="nearest",c="constant",i=0,u){const b=Object(s.a)(e,"image","transform","float32"),l=Object(s.a)(t,"transforms","transform","float32");o.b(4===b.rank,()=>`Error in transform: image must be rank 4,but got rank ${b.rank}.`),o.b(2===l.rank&&(l.shape[0]===b.shape[0]||1===l.shape[0])&&8===l.shape[1],()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),o.b(null==u||2===u.length,()=>`Error in transform: outputShape must be [height, width] or null, but got ${u}.`);const p={image:b,transforms:l},h={interpolation:n,fillMode:c,fillValue:i,outputShape:u};return r.a.runKernel(a.id,p,h)}})},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(6),a=n(3),s=n(36),o=n(2),c=n(25),i=n(4);const u=Object(i.b)({greater_:
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
function(e,t){let n=Object(o.a)(e,"a","greater","string_or_numeric"),i=Object(o.a)(t,"b","greater","string_or_numeric");[n,i]=Object(s.makeTypesMatch)(n,i),Object(c.assertAndGetBroadcastShape)(n.shape,i.shape);const u={a:n,b:i};return r.a.runKernel(a.qb,u)}})}}]);