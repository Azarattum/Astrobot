(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{113:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=a(6),c=a(3),o=a(2),r=a(25),s=a(4);const b=Object(s.b)({logicalAnd_:
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
function(t,e){const a=Object(o.a)(t,"a","logicalAnd","bool"),s=Object(o.a)(e,"b","logicalAnd","bool");Object(r.assertAndGetBroadcastShape)(a.shape,s.shape);const b={a:a,b:s};return n.a.runKernel(c.Hb,b)}})},127:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(6),c=a(3),o=a(2),r=a(4);const s=Object(r.b)({max_:
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
function(t,e=null,a=!1){const r={x:Object(o.a)(t,"x","max")},s={reductionIndices:e,keepDims:a};return n.a.runKernel(c.Kb,r,s)}})},129:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(6),c=a(3),o=a(2),r=a(4);const s=Object(r.b)({log_:
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
function(t){const e={x:Object(o.a)(t,"x","log","float32")};return n.a.runKernel(c.Eb,e)}})},173:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(6),c=a(3),o=a(2),r=a(4);const s=Object(r.b)({logicalNot_:
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
function(t){const e={x:Object(o.a)(t,"x","logicalNot","bool")};return n.a.runKernel(c.Ib,e)}})},174:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(6),c=a(3),o=a(36),r=a(2),s=a(25),b=a(19),i=a(4);const u=Object(i.b)({maximum_:
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
function(t,e){let a=Object(r.a)(t,"a","maximum"),i=Object(r.a)(e,"b","maximum");[a,i]=Object(o.makeTypesMatch)(a,i),"bool"===a.dtype&&(a=Object(b.a)(a,"int32"),i=Object(b.a)(i,"int32")),Object(s.assertAndGetBroadcastShape)(a.shape,i.shape);const u={a:a,b:i};return n.a.runKernel(c.Qb,u)}})},219:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(2),c=a(5),o=a(22),r=a(72),s=a(73),b=a(129),i=a(127),u=a(4),O=a(9),j=a(23),l=a(28);const d=Object(u.b)({logSumExp_:
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
function(t,e=null,a=!1){const u=Object(n.a)(t,"x","logSumExp"),d=Object(c.I)(e,u.shape),f=Object(i.a)(u,d,!0),p=Object(j.a)(u,f),h=Object(s.a)(p),m=Object(l.a)(h,d),g=Object(b.a)(m),E=Object(o.a)(Object(O.a)(f,g.shape),g);if(a){const t=Object(r.e)(E.shape,d);return Object(O.a)(E,t)}return E}})},220:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=a(6),c=a(3),o=a(2),r=a(25),s=a(4);const b=Object(s.b)({logicalOr_:
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
function(t,e){const a=Object(o.a)(t,"a","logicalOr","bool"),s=Object(o.a)(e,"b","logicalOr","bool");Object(r.assertAndGetBroadcastShape)(a.shape,s.shape);const b={a:a,b:s};return n.a.runKernel(c.Jb,b)}})},222:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(6),c=a(3),o=a(2),r=a(5),s=a(37),b=a(4),i=a(9);const u=Object(b.b)({maxPool_:
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
function(t,e,a,b,u){const O=Object(o.a)(t,"x","maxPool");let j=O,l=!1;3===O.rank&&(l=!0,j=Object(i.a)(O,[1,O.shape[0],O.shape[1],O.shape[2]])),r.b(4===j.rank,()=>`Error in maxPool: input must be rank 4 but got rank ${j.rank}.`),r.b(s.i(a,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '1'`),s.a("maxPool",b,u);const d={x:j},f={filterSize:e,strides:a,pad:b,dimRoundingMode:u},p=n.a.runKernel(c.Lb,d,f);return l?Object(i.a)(p,[p.shape[1],p.shape[2],p.shape[3]]):p}})},258:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(6),c=a(3),o=a(2),r=a(4);const s=Object(r.b)({log1p_:
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
function(t){const e={x:Object(o.a)(t,"x","log1p")};return n.a.runKernel(c.Fb,e)}})},296:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(2),c=a(25),o=a(113),r=a(173),s=a(220),b=a(4);const i=Object(b.b)({logicalXor_:
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
function(t,e){const a=Object(n.a)(t,"a","logicalXor","bool"),b=Object(n.a)(e,"b","logicalXor","bool");return Object(c.assertAndGetBroadcastShape)(a.shape,b.shape),Object(o.a)(Object(s.a)(t,e),Object(r.a)(Object(o.a)(t,e)))}})},43:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=a(6),c=a(3),o=a(36),r=a(2),s=a(4);const b=Object(s.b)({matMul_:
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
function(t,e,a=!1,s=!1){let b=Object(r.a)(t,"a","matMul"),i=Object(r.a)(e,"b","matMul");[b,i]=Object(o.makeTypesMatch)(b,i);const u={a:b,b:i},O={transposeA:a,transposeB:s};return n.a.runKernel(c.s,u,O)}})},430:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(68),c=a(2),o=a(10),r=a(49),s=a(4),b=a(118),i=a(259);const u=Object(s.b)({logSigmoid_:
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
function(t){const e=Object(c.a)(t,"x","logSigmoid");return Object(n.a)(t=>({value:Object(r.a)(Object(i.a)(Object(r.a)(t))),gradFunc:e=>Object(o.a)(e,Object(b.a)(Object(r.a)(t)))}))(e)}})},431:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a(68),c=a(2),o=a(19),r=a(73),s=a(129),b=a(127),i=a(10),u=a(4),O=a(23),j=a(28);const l=Object(u.b)({logSoftmax_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function(t,e=-1){const a=Object(c.a)(t,"logits","logSoftmax");if(-1===e&&(e=a.rank-1),e!==a.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${a.rank} and axis was ${e}`);return Object(n.a)((t,a)=>{const n=Object(b.a)(t,e,!0),c=Object(O.a)(t,n),u=Object(O.a)(Object(o.a)(c,"float32"),Object(s.a)(Object(j.a)(Object(r.a)(c),e,!0)));a([u]);return{value:u,gradFunc:(t,a)=>{const[n]=a,c=Object(r.a)(n);return Object(O.a)(t,Object(i.a)(Object(j.a)(t,e,!0),c))}}})(a)}})},481:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a(221);
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
 */function c(t,e){return Object(n.a)(t,e,"left")}},482:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(6),c=a(3),o=a(2),r=a(5),s=a(37),b=a(4),i=a(9);const u=Object(b.b)({maxPool3d_:
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
function(t,e=[1,1,1],a,b,u,O="NDHWC"){const j=Object(o.a)(t,"x","maxPool3d");let l=j,d=!1;4===j.rank&&(d=!0,l=Object(i.a)(j,[1,j.shape[0],j.shape[1],j.shape[2],j.shape[3]])),r.b(5===l.rank,()=>`Error in maxPool3d: x must be rank 5 but got rank ${l.rank}.`),r.b("NDHWC"===O,()=>"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+O),Object(s.a)("maxPool3d",b,u);const f={x:l},p={filterSize:e,strides:a,pad:b,dimRoundingMode:u,dataFormat:O},h=n.a.runKernel(c.Mb,f,p);return d?Object(i.a)(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}})},483:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(6),c=a(3),o=a(2),r=a(4);const s=Object(r.b)({maxPoolWithArgmax_:
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
function(t,e,a,r,s=!1){const b={x:Object(o.a)(t,"x","maxPoolWithArgmax")},i={filterSize:e,strides:a,pad:r,includeBatchInIndex:s},u=n.a.runKernel(c.Pb,b,i);return{result:u[0],indexes:u[1]}}})},586:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(2),c=a(5),o=a(76),r=a(69),s=a(4),b=a(23),i=a(86);const u=Object(s.b)({absoluteDifference_:
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
function(t,e,a,s=r.a.SUM_BY_NONZERO_WEIGHTS){const u=Object(n.a)(t,"labels","absoluteDifference"),O=Object(n.a)(e,"predictions","absoluteDifference");let j=null;null!=a&&(j=Object(n.a)(a,"weights","absoluteDifference")),Object(c.e)(u.shape,O.shape,"Error in absoluteDifference: ");const l=Object(o.a)(Object(b.a)(u,O));return Object(i.a)(l,j,s)}})},587:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var n=a(2),c=a(5),o=a(69),r=a(10),s=a(4),b=a(27),i=a(23),u=a(28),O=a(86);const j=Object(s.b)({cosineDistance_:function(t,e,a,s,j=o.a.SUM_BY_NONZERO_WEIGHTS){const l=Object(n.a)(t,"labels","cosineDistance"),d=Object(n.a)(e,"predictions","cosineDistance");let f=null;null!=s&&(f=Object(n.a)(s,"weights","cosineDistance")),Object(c.e)(l.shape,d.shape,"Error in cosineDistance: ");const p=Object(b.a)(1),h=Object(i.a)(p,Object(u.a)(Object(r.a)(l,d),a,!0));return Object(O.a)(h,f,j)}})},588:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var n=a(2),c=a(5),o=a(69),r=a(10),s=a(4),b=a(145),i=a(27),u=a(23),O=a(86);const j=Object(s.b)({hingeLoss_:function(t,e,a,s=o.a.SUM_BY_NONZERO_WEIGHTS){let j=Object(n.a)(t,"labels","hingeLoss");const l=Object(n.a)(e,"predictions","hingeLoss");let d=null;null!=a&&(d=Object(n.a)(a,"weights","hingeLoss")),Object(c.e)(j.shape,l.shape,"Error in hingeLoss: ");const f=Object(i.a)(1);j=Object(u.a)(Object(r.a)(Object(i.a)(2),j),f);const p=Object(b.a)(Object(u.a)(f,Object(r.a)(j,l)));return Object(O.a)(p,d,s)}})},589:function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var n=a(2),c=a(5),o=a(76),r=a(22),s=a(69),b=a(223),i=a(10),u=a(4),O=a(27),j=a(41),l=a(23),d=a(86);const f=Object(u.b)({huberLoss_:
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
function(t,e,a,u=1,f=s.a.SUM_BY_NONZERO_WEIGHTS){const p=Object(n.a)(t,"labels","huberLoss"),h=Object(n.a)(e,"predictions","huberLoss");let m=null;null!=a&&(m=Object(n.a)(a,"weights","huberLoss")),Object(c.e)(p.shape,h.shape,"Error in huberLoss: ");const g=Object(O.a)(u),E=Object(o.a)(Object(l.a)(h,p)),x=Object(b.a)(E,g),_=Object(l.a)(E,x),k=Object(r.a)(Object(i.a)(Object(O.a)(.5),Object(j.a)(x)),Object(i.a)(g,_));return Object(d.a)(k,m,f)}})},590:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(2),c=a(5),o=a(22),r=a(129),s=a(69),b=a(10),i=a(49),u=a(4),O=a(27),j=a(23),l=a(86);const d=Object(u.b)({logLoss_:
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
function(t,e,a,u=1e-7,d=s.a.SUM_BY_NONZERO_WEIGHTS){const f=Object(n.a)(t,"labels","logLoss"),p=Object(n.a)(e,"predictions","logLoss");let h=null;null!=a&&(h=Object(n.a)(a,"weights","logLoss")),Object(c.e)(f.shape,p.shape,"Error in logLoss: ");const m=Object(O.a)(1),g=Object(O.a)(u),E=Object(i.a)(Object(b.a)(f,Object(r.a)(Object(o.a)(p,g)))),x=Object(b.a)(Object(j.a)(m,f),Object(r.a)(Object(o.a)(Object(j.a)(m,p),g))),_=Object(j.a)(E,x);return Object(l.a)(_,h,d)}})},591:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(2),c=a(5),o=a(69),r=a(4),s=a(227),b=a(86);const i=Object(r.b)({meanSquaredError_:
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
function(t,e,a,r=o.a.SUM_BY_NONZERO_WEIGHTS){const i=Object(n.a)(t,"labels","meanSquaredError"),u=Object(n.a)(e,"predictions","meanSquaredError");let O=null;null!=a&&(O=Object(n.a)(a,"weights","meanSquaredError")),Object(c.e)(i.shape,u.shape,"Error in meanSquaredError: ");const j=Object(s.a)(i,u);return Object(b.a)(j,O,r)}})},592:function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var n=a(2),c=a(5),o=a(76),r=a(22),s=a(73),b=a(258),i=a(69),u=a(10),O=a(49),j=a(4),l=a(145),d=a(27),f=a(23),p=a(86);const h=Object(j.b)({sigmoidCrossEntropy_:function(t,e,a,j=0,h=i.a.SUM_BY_NONZERO_WEIGHTS){let m=Object(n.a)(t,"multiClassLabels","sigmoidCrossEntropy");const g=Object(n.a)(e,"logits","sigmoidCrossEntropy");let E=null;if(null!=a&&(E=Object(n.a)(a,"weights","sigmoidCrossEntropy")),Object(c.e)(m.shape,g.shape,"Error in sigmoidCrossEntropy: "),j>0){const t=Object(d.a)(j),e=Object(d.a)(1),a=Object(d.a)(.5);m=Object(r.a)(Object(u.a)(m,Object(f.a)(e,t)),Object(u.a)(a,t))}const x=
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
function(t,e){const a=Object(n.a)(t,"labels","sigmoidCrossEntropyWithLogits"),i=Object(n.a)(e,"logits","sigmoidCrossEntropyWithLogits");Object(c.e)(a.shape,i.shape,"Error in sigmoidCrossEntropyWithLogits: ");const j=Object(l.a)(i),d=Object(u.a)(i,a),p=Object(b.a)(Object(s.a)(Object(O.a)(Object(o.a)(i))));return Object(r.a)(Object(f.a)(j,d),p)}(m,g);return Object(p.a)(x,E,h)}})},593:function(t,e,a){"use strict";a.d(e,"a",(function(){return x}));var n=a(68),c=a(2),o=a(5),r=a(22),s=a(72),b=a(19),i=a(24),u=a(73),O=a(219),j=a(69),l=a(10),d=a(49),f=a(4),p=a(9),h=a(27),m=a(23),g=a(28),E=a(86);const x=Object(f.b)({softmaxCrossEntropy_:function(t,e,a,f=0,x=j.a.SUM_BY_NONZERO_WEIGHTS){let _=Object(c.a)(t,"onehotLabels","softmaxCrossEntropy");const k=Object(c.a)(e,"logits","softmaxCrossEntropy");let S=null;if(null!=a&&(S=Object(c.a)(a,"weights","softmaxCrossEntropy")),Object(o.e)(_.shape,k.shape,"Error in softmaxCrossEntropy: "),f>0){const t=Object(h.a)(f),e=Object(h.a)(1),a=Object(h.a)(_.shape[1]);_=Object(r.a)(Object(l.a)(_,Object(m.a)(e,t)),Object(i.a)(t,a))}const N=
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
function(t,e,a=-1){if(-1===a&&(a=e.rank-1),a!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was `+a);return Object(n.a)((t,e,n)=>{const c=Object(O.a)(e,[a],!0),o=Object(m.a)(Object(b.a)(e,"float32"),c);n([t,o]);const r=Object(d.a)(Object(l.a)(o,t));return{value:Object(g.a)(r,[a]),gradFunc:(t,e)=>{const[n,c]=e,o=Object(s.e)(t.shape,[a]);return[Object(l.a)(Object(p.a)(t,o),Object(m.a)(Object(b.a)(n,"float32"),Object(u.a)(c))),Object(l.a)(Object(p.a)(t,o),Object(m.a)(Object(u.a)(c),Object(b.a)(n,"float32")))]}}})(t,e)}(_,k);return Object(E.a)(N,S,x)}})},656:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(6),c=a(3),o=a(2),r=a(5),s=a(37),b=a(4),i=a(9);const u=Object(b.b)({maxPool3dGrad_:
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
function(t,e,a,b,u,O,j){const l=Object(o.a)(t,"dy","maxPool3dGrad"),d=Object(o.a)(e,"input","maxPool3dGrad"),f=Object(o.a)(a,"output","maxPool3dGrad");let p=l,h=d,m=f,g=!1;4===d.rank&&(g=!0,p=Object(i.a)(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),h=Object(i.a)(d,[1,d.shape[0],d.shape[1],d.shape[2],d.shape[3]]),m=Object(i.a)(f,[1,f.shape[0],f.shape[1],f.shape[2],f.shape[3]])),r.b(5===p.rank,()=>"Error in maxPool3dGrad: dy must be rank 5 but got rank "+p.rank+"."),r.b(5===h.rank,()=>"Error in maxPool3dGrad: input must be rank 5 but got rank "+h.rank+"."),r.b(5===m.rank,()=>"Error in maxPool3dGrad: output must be rank 5 but got rank "+m.rank+"."),Object(s.a)("maxPool3dGrad",O,j);const E={dy:p,input:h,output:m},x={filterSize:b,strides:u,pad:O,dimRoundingMode:j},_=n.a.runKernel(c.Nb,E,x);return g?Object(i.a)(_,[_.shape[1],_.shape[2],_.shape[3],_.shape[4]]):_}})},658:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(6),c=a(3),o=a(2),r=a(5),s=a(37),b=a(4);const i=Object(b.b)({maxPoolGrad_:
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
function(t,e,a,b,i,u,O){const j=Object(o.a)(t,"dy","maxPoolGrad"),l=Object(o.a)(e,"input","maxPoolGrad"),d=Object(o.a)(a,"output","maxPoolGrad");r.b(l.rank===j.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${j.rank})`),r.b(4===j.rank,()=>"Error in maxPoolGrad: dy must be rank 4 but got rank "+j.rank+"."),r.b(4===l.rank,()=>"Error in maxPoolGrad: input must be rank 4 but got rank "+l.rank+"."),s.a("maxPoolGrad",u,O);const f={dy:j,input:l,output:d},p={filterSize:b,strides:i,pad:u,dimRoundingMode:O};return n.a.runKernel(c.Ob,f,p)}})},69:function(t,e,a){"use strict";
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
var n;a.d(e,"a",(function(){return n})),function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(n||(n={}))},86:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(2),c=a(19),o=a(24),r=a(69),s=a(157),b=a(10),i=a(224),u=a(101),O=a(4),j=a(27),l=a(28);const d=Object(O.b)({computeWeightedLoss_:function(t,e,a=r.a.SUM_BY_NONZERO_WEIGHTS){const O=Object(n.a)(t,"losses","computeWeightedLoss");let d=null;null!=e&&(d=Object(n.a)(e,"weights","computeWeightedLoss"));const f=null==d?O:Object(b.a)(O,d);if(a===r.a.NONE)return f;if(a===r.a.SUM)return Object(l.a)(f);if(a===r.a.MEAN){if(null==d)return Object(s.a)(f);{const t=O.size/d.size,e=Object(o.a)(Object(l.a)(f),Object(l.a)(d));return t>1?Object(o.a)(e,Object(j.a)(t)):e}}if(a===r.a.SUM_BY_NONZERO_WEIGHTS){if(null==d)return Object(o.a)(Object(l.a)(f),Object(j.a)(O.size));{const t=Object(b.a)(d,Object(u.a)(O.shape)),e=Object(c.a)(Object(l.a)(Object(i.a)(t,Object(j.a)(0))),"float32");return Object(o.a)(Object(l.a)(f),e)}}throw Error("Unknown reduction: "+a)}})}}]);