(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{128:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),c=e(3),o=e(2),s=e(5),a=e(4);const u=Object(a.b)({tile_:
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
function(t,n){const e=Object(o.a)(t,"x","tile","string_or_numeric");s.b(e.rank===n.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${n}.`);const a={x:e},u={reps:n};return r.a.runKernel(c.gd,a,u)}})},144:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(6),c=e(5),o=e(98);
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
function s(t,n="float32"){if(Object(c.c)(t),"complex64"===n){const n=s(t,"float32"),e=s(t,"float32");return Object(o.a)(n,e)}const e=Object(c.F)(Object(c.O)(t),n);return r.a.makeTensor(e,t,n)}},146:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),c=e(3),o=e(2),s=e(5),a=e(4);const u=Object(a.b)({unstack_:
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
function(t,n=0){const e=Object(o.a)(t,"x","unstack","string_or_numeric");s.b(n>=-e.shape.length&&n<e.shape.length,()=>`Axis = ${n} is not in [-${e.shape.length}, ${e.shape.length})`);const a={value:e},u={axis:n};return r.a.runKernel(c.ld,a,u)}})},228:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),c=e(3),o=e(2),s=e(5),a=e(4);const u=Object(a.b)({unsortedSegmentSum_:
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
function(t,n,e){const a=Object(o.a)(t,"x","unsortedSegmentSum"),u=Object(o.a)(n,"segmentIds","unsortedSegmentSum","int32");Object(s.b)(Object(s.v)(e),()=>"numSegments must be of dtype int");const i={x:a,segmentIds:u},b={numSegments:e};return r.a.runKernel(c.md,i,b)}})},307:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(6),c=e(3),o=e(2),s=e(4);const a=Object(s.b)({topk_:
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
function(t,n=1,e=!0){const s=Object(o.a)(t,"x","topk");if(0===s.rank)throw new Error("topk() expects the input to be of rank 1 or higher");const a=s.shape[s.shape.length-1];if(n<0)throw new Error("'k' passed to topk() must be >= 0 but got "+n);if(n>a)throw new Error(`'k' passed to topk() must be <= the last dimension (${a}) but got `+n);const u={x:s},i={k:n,sorted:e},[b,f]=r.a.runKernel(c.hd,u,i);return{values:b,indices:f}}})},308:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),c=e(3),o=e(2),s=e(5),a=e(4);const u=Object(a.b)({unique_:
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
function(t,n=0){const e=Object(o.a)(t,"x","unique","string_or_numeric");Object(s.b)(e.rank>0,()=>"The input tensor must be at least 1D");const a={x:e},u={axis:n},[i,b]=r.a.runKernel(c.kd,a,u);return{values:i,indices:b}}})},309:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(310),c=e(2);const o=
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
async function(t){const n=Object(c.a)(t,"condition","whereAsync","bool"),e=await n.data(),o=Object(r.a)(n.shape,e);return t!==n&&n.dispose(),o}},32:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(6),c=e(3),o=e(2),s=e(4);const a=Object(s.b)({zerosLike_:
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
function(t){const n={x:Object(o.a)(t,"x","zerosLike")};return r.a.runKernel(c.nd,n)}})},511:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(5),c=e(87),o=e(4),s=e(182);const a=Object(o.b)({truncatedNormal_:
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
function(t,n=0,e=1,o,a){if(Object(r.c)(t),null!=o&&"bool"===o)throw new Error("Unsupported data type $ { dtype }");const u=new s.a(n,e,o,!0,a),i=Object(c.a)(t,o);for(let t=0;t<i.values.length;t++)i.values[t]=u.nextValue();return i.toTensor()}})},512:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(221);
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
 */function c(t,n){return Object(r.a)(t,n,"right")}},513:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(6);
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
 */function c(t,n=!0,e,c){return r.a.makeVariable(t,n,e,c)}},64:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(6),c=e(3),o=e(2),s=e(181),a=e(25),u=e(4);const i=Object(u.b)({where_:
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
function(t,n,e){const u=Object(o.a)(n,"a","where"),i=Object(o.a)(e,"b","where"),b=Object(o.a)(t,"condition","where","bool"),f=Object(a.assertAndGetBroadcastShape)(Object(a.assertAndGetBroadcastShape)(b.shape,u.shape),i.shape),d={condition:Object(s.a)(b,f),t:Object(s.a)(u,f),e:Object(s.a)(i,f)};return r.a.runKernel(c.Ec,d)}})},89:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e(6),c=e(42),o=e(3),s=e(2),a=e(5),u=e(98),i=e(172),b=e(49),f=e(4),d=e(158);const l=Object(f.b)({transpose_:
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
function(t,n,e){const f=Object(s.a)(t,"x","transpose");if(null==n&&(n=f.shape.map((t,n)=>n).reverse()),a.b(f.rank===n.length,()=>`Error in transpose: rank of input ${f.rank} must match length of perm ${n}.`),n.forEach(t=>{a.b(t>=0&&t<f.rank,()=>"All entries in 'perm' must be between 0 and "+(f.rank-1)+" but got "+n)}),f.rank<=1)return f.clone();const l={x:f},p={perm:n};return"complex64"===f.dtype?Object(c.h)(()=>{let t=Object(d.a)(f),n=Object(i.a)(f);return t=r.a.runKernel(o.jd,{x:t},p),n=r.a.runKernel(o.jd,{x:n},p),e&&(n=Object(b.a)(n)),Object(u.a)(t,n)}):r.a.runKernel(o.jd,l,p)}})}}]);