(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{121:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(6),a=e(3),c=e(2),u=e(5),o=e(4);const i=Object(o.b)({expandDims_:
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
function(t,n=0){const e=Object(c.a)(t,"x","expandDims","string_or_numeric");u.b(n<=e.rank,()=>"Axis must be <= rank of the tensor");const o={input:e},i={dim:n};return r.a.runKernel(a.db,o,i)}})},170:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(6),a=e(3),c=e(36),u=e(2),o=e(25),i=e(4);const s=Object(i.b)({equal_:
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
function(t,n){let e=Object(u.a)(t,"a","equal","string_or_numeric"),i=Object(u.a)(n,"b","equal","string_or_numeric");[e,i]=Object(c.makeTypesMatch)(e,i),Object(o.assertAndGetBroadcastShape)(e.shape,i.shape);const s={a:e,b:i};return r.a.runKernel(a.ab,s)}})},216:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(6),a=e(3),c=e(2),u=e(4);const o=Object(u.b)({elu_:
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
function(t){const n={x:Object(c.a)(t,"x","elu","float32")};return r.a.runKernel(a.Y,n)}})},24:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(6),a=e(3),c=e(36),u=e(2),o=e(215),i=e(4);const s=Object(i.b)({div_:
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
function(t,n){let e=Object(u.a)(t,"a","div"),i=Object(u.a)(n,"b","div");if([e,i]=Object(c.makeTypesMatch)(e,i),"int32"===e.dtype&&"int32"===i.dtype)return Object(o.a)(e,i);const s={a:e,b:i};return r.a.runKernel(a.pc,s,{})}})},290:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(6),a=e(3),c=e(2),u=e(5),o=e(4),i=e(9);const s=Object(o.b)({dilation2d_:
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
function(t,n,e,o,s=[1,1],b="NHWC"){const f=Object(c.a)(t,"x","dilation2d"),d=Object(c.a)(n,"filter","dilation2d");u.b(3===f.rank||4===f.rank,()=>"Error in dilation2d: input must be rank 3 or 4, but got rank "+f.rank+"."),u.b(3===d.rank,()=>"Error in dilation2d: filter must be rank 3, but got rank "+d.rank+"."),u.b("NHWC"===b,()=>"Error in dilation2d: Only NHWC is currently supported, but got dataFormat of "+b);let O=f,j=!1;3===f.rank&&(O=Object(i.a)(f,[1,f.shape[0],f.shape[1],f.shape[2]]),j=!0);const l={x:O,filter:d},p={strides:e,pad:o,dilations:s},h=r.a.runKernel(a.U,l,p);return j?Object(i.a)(h,[h.shape[1],h.shape[2],h.shape[3]]):h}})},291:function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var r=e(36),a=e(2),c=e(24),u=e(170),o=e(4),i=e(64),s=e(32);const b=Object(o.b)({divNoNan_:
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
function(t,n){let e=Object(a.a)(t,"a","div"),o=Object(a.a)(n,"b","div");[e,o]=Object(r.makeTypesMatch)(e,o);const b=Object(c.a)(e,o),f=Object(s.a)(b),d=Object(u.a)(o,f);return Object(i.a)(d,f,b)}})},292:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(2),a=e(5),c=e(43),u=e(4),o=e(9);const i=Object(u.b)({dot_:
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
function(t,n){const e=Object(r.a)(t,"t1","dot"),u=Object(r.a)(n,"t2","dot");a.b(!(1!==e.rank&&2!==e.rank||1!==u.rank&&2!==u.rank),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${u.rank}.`);const i=1===e.rank?e.size:e.shape[1],s=1===u.rank?u.size:u.shape[0];if(a.b(i===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${i} and ${s}.`),1===e.rank&&1===u.rank){const t=Object(o.a)(e,[1,-1]),n=Object(o.a)(u,[-1,1]),r=Object(c.a)(t,n);return Object(o.a)(r,[])}if(1===e.rank&&2===u.rank){const t=Object(o.a)(e,[1,-1]),n=Object(o.a)(u,[u.shape[0],u.shape[1]]),r=Object(c.a)(t,n);return Object(o.a)(r,[r.size])}if(2===e.rank&&1===u.rank){const t=Object(o.a)(u,[-1,1]),n=Object(c.a)(e,t);return Object(o.a)(n,[n.size])}{const t=Object(o.a)(u,[u.shape[0],u.shape[1]]);return Object(c.a)(e,t)}}})},293:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(156),a=e(4);const c=Object(a.b)({euclideanNorm_:
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
function(t,n=null,e=!1){return Object(r.a)(t,"euclidean",n,e)}})},294:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(87),a=e(121),c=e(4),u=e(9),o=e(128);const i=Object(c.b)({eye_:
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
function(t,n,e,c="float32"){null==n&&(n=t);const i=Object(r.a)([t,n],c),s=t<=n?t:n;for(let t=0;t<s;++t)i.set(1,t,t);const b=Object(u.a)(i.toTensor(),[t,n]);if(null==e)return b;if(1===e.length)return Object(o.a)(Object(a.a)(b,0),[e[0],1,1]);if(2===e.length)return Object(o.a)(Object(a.a)(Object(a.a)(b,0),0),[e[0],e[1],1,1]);if(3===e.length)return Object(o.a)(Object(a.a)(Object(a.a)(Object(a.a)(b,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}})},425:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(6),a=e(3),c=e(2),u=e(5),o=e(19),i=e(4);const s=Object(i.b)({erf_:
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
function(t){let n=Object(c.a)(t,"x","erf");u.b("int32"===n.dtype||"float32"===n.dtype,()=>"Input dtype must be `int32` or `float32`."),"int32"===n.dtype&&(n=Object(o.a)(n,"float32"));const e={x:n};return r.a.runKernel(a.bb,e)}})},426:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(6),a=e(3),c=e(2),u=e(4);const o=Object(u.b)({expm1_:
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
function(t){const n={x:Object(c.a)(t,"x","expm1")};return r.a.runKernel(a.eb,n)}})},478:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(6),a=e(3),c=e(2),u=e(4);const o=Object(u.b)({diag_:
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
function(t){const n={x:Object(c.a)(t,"x","diag")};return r.a.runKernel(a.T,n)}})},479:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(6),a=e(3),c=e(2),u=e(4);const o=Object(u.b)({einsum_:
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
function(t,...n){const e=n.map((t,n)=>Object(c.a)(t,"tensors"+n,"einsum")),u={equation:t};return r.a.runKernel(a.X,e,u)}})},519:function(t,n,e){"use strict";e.d(n,"a",(function(){return O}));var r=e(7),a=e(2),c=e(5),u=e(22),o=e(24),i=e(567),s=e(195),b=e(10),f=e(4),d=e(303);const O=Object(f.b)({dropout_:
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
function(t,n,e,f){const O=Object(a.a)(t,"x","dropout");if(c.b("float32"===O.dtype,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${O.dtype} tensor instead.`),c.b(n>=0&&n<1,()=>`rate must be a float in the range [0, 1), but got ${n}.`),0===n)return t instanceof r.a?O.clone():O;const j=Object(i.a)(O,e),l=1-n,p=Object(o.a)(Object(s.a)(Object(u.a)(Object(d.a)(j,0,1,"float32",f),l)),l);return Object(b.a)(O,p)}})},534:function(t,n,e){"use strict";e.d(n,"f",(function(){return r})),e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return i}));
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
const r=.3275911,a=.254829592,c=-.284496736,u=1.421413741,o=-1.453152027,i=1.061405429},567:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(5);
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
 */function a(t,n){if(null==n)return t.shape.slice();if(r.a(t.shape,n))return n;if(t.shape.length===n.length){const e=[];for(let r=0;r<t.shape.length;r++)null==n[r]&&null!=t.shape[r]?e.push(t.shape[r]):e.push(n[r]);return e}return n}},73:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(6),a=e(3),c=e(2),u=e(4);const o=Object(u.b)({exp_:
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
function(t){const n={x:Object(c.a)(t,"x","exp")};return r.a.runKernel(a.cb,n)}})}}]);