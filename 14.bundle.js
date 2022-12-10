(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{147:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var n=t(2),o=t(93);
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
function a(e,r,t){const a=Object(n.c)(e,t);return Object(o.a)(e,r,a,t)}},185:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(2),o=t(5),a=t(93);
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
function u(e,r,t){if(Object(o.d)(e),null!=r&&2!==r.length)throw new Error("tensor2d() requires shape to have two numbers");const u=Object(n.c)(e,t);if(2!==u.length&&1!==u.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===u.length&&null==r)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Object(a.a)(e,r,u,t)}},23:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(6),o=t(3),a=t(36),u=t(2),s=t(4);const c=Object(s.b)({sub_:
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
function(e,r){let t=Object(u.a)(e,"a","sub"),s=Object(u.a)(r,"b","sub");[t,s]=Object(a.makeTypesMatch)(t,s);const c={a:t,b:s};return n.a.runKernel(o.cd,c)}})},241:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t(6),o=t(3),a=t(2),u=t(4);const s=Object(u.b)({tanh_:
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
function(e){const r={x:Object(a.a)(e,"x","tanh","float32")};return n.a.runKernel(o.fd,r)}})},28:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(6),o=t(3),a=t(2),u=t(19),s=t(4);const c=Object(s.b)({sum_:
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
function(e,r=null,t=!1){let s=Object(a.a)(e,"x","sum");"bool"===s.dtype&&(s=Object(u.a)(s,"int32"));const c={x:s},i={axis:r,keepDims:t};return n.a.runKernel(o.dd,c,i)}})},306:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(2),o=t(5),a=t(93);
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
function u(e,r,t){if(Object(o.d)(e),null!=r&&3!==r.length)throw new Error("tensor3d() requires shape to have three numbers");const u=Object(n.c)(e,t);if(3!==u.length&&1!==u.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===u.length&&null==r)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Object(a.a)(e,r,u,t)}},437:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t(6),o=t(3),a=t(2),u=t(4);const s=Object(u.b)({tan_:
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
function(e){const r={x:Object(a.a)(e,"x","tan","float32")};return n.a.runKernel(o.ed,r)}})},508:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(2),o=t(5),a=t(93);
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
function u(e,r,t){if(Object(o.d)(e),null!=r&&4!==r.length)throw new Error("tensor4d() requires shape to have four numbers");const u=Object(n.c)(e,t);if(4!==u.length&&1!==u.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===u.length&&null==r)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Object(a.a)(e,r,u,t)}},509:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(2),o=t(5),a=t(93);
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
function u(e,r,t){if(Object(o.d)(e),null!=r&&5!==r.length)throw new Error("tensor5d() requires shape to have five numbers");const u=Object(n.c)(e,t);if(5!==u.length&&1!==u.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===u.length&&null==r)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Object(a.a)(e,r,u,t)}},510:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(2),o=t(5),a=t(93);
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
function u(e,r,t){if(Object(o.d)(e),null!=r&&6!==r.length)throw new Error("tensor6d() requires shape to have six numbers");const u=Object(n.c)(e,t);if(6!==u.length&&1!==u.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===u.length&&null==r)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return r=r||u,Object(a.a)(e,r,u,t)}},91:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(2),o=t(5),a=t(93);
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
function u(e,r){Object(o.d)(e);const t=Object(n.c)(e,r);if(1!==t.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Object(a.a)(e,null,t,r)}},93:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(6),o=t(5),a=t(11);
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
function u(e,r,t,u){if(null==u&&(u=Object(o.r)(e)),"complex64"===u)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if("object"==typeof e&&"texture"in e){if("float32"!==u&&"int32"!==u)throw new Error(`Creating tensor from texture only supports 'float32'|'int32' dtype, while the dtype is ${u}.`);return e.channels=e.channels||"RGBA",n.a.backend.createTensorFromTexture(e,r||t,u)}if(!Object(o.A)(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=r){Object(o.c)(r);const e=Object(o.O)(r),n=Object(o.O)(t);Object(o.b)(e===n,()=>`Based on the provided shape, [${r}], the tensor should have ${e} values but has ${n}`);for(let e=0;e<t.length;++e){const n=t[e],a=e!==t.length-1||n!==Object(o.O)(r.slice(e));Object(o.b)(t[e]===r[e]||!a,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${r}). `)}}return Object(o.A)(e)||Array.isArray(e)||(e=[e]),r=r||t,e="string"!==u?Object(a.toTypedArray)(e,u):Object(o.m)(e,[],!0),n.a.makeTensor(e,r,u)}}}]);