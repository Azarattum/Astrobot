(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{10:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(6),c=n(3),r=n(36),o=n(2),i=n(4);const s=Object(i.b)({mul_:
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
function(t,e){let n=Object(o.a)(t,"a","mul"),i=Object(o.a)(e,"b","mul");[n,i]=Object(r.makeTypesMatch)(n,i);const s={a:n,b:i};return a.a.runKernel(c.Xb,s)}})},157:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(6),c=n(3),r=n(2),o=n(4);const i=Object(o.b)({mean_:
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
function(t,e=null,n=!1){const o={x:Object(r.a)(t,"x","mean")},i={axis:e,keepDims:n};return a.a.runKernel(c.Rb,o,i)}})},194:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(6),c=n(3),r=n(2),o=n(4);const i=Object(o.b)({min_:
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
function(t,e=null,n=!1){const o={x:Object(r.a)(t,"x","min")},i={axis:e,keepDims:n};return a.a.runKernel(c.Sb,o,i)}})},223:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(6),c=n(3),r=n(36),o=n(2),i=n(25),s=n(19),u=n(4);const b=Object(u.b)({minimum_:
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
function(t,e){let n=Object(o.a)(t,"a","minimum"),u=Object(o.a)(e,"b","minimum");[n,u]=Object(r.makeTypesMatch)(n,u),"bool"===n.dtype&&(n=Object(s.a)(n,"int32"),u=Object(s.a)(u,"int32")),Object(i.assertAndGetBroadcastShape)(n.shape,u.shape);const b={a:n,b:u};return a.a.runKernel(c.Tb,b)}})},297:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(6),c=n(3),r=n(2),o=n(5),i=n(4);const s=Object(i.b)({mirrorPad_:
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
function(t,e,n){o.b("reflect"===n||"symmetric"===n,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const i=Object(r.a)(t,"x","mirrorPad");if(0===i.rank)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");o.b(e.length===i.rank,()=>`Padding doesn't match input. Must be ${i.rank}. Got ${e.length}.`);const s="reflect"===n?1:0;for(let t=0;t<i.rank;t++)o.b(2===e[t].length,()=>"Invalid number of paddings. Must be length of 2 each."),o.b(e[t][0]>=0&&e[t][0]<=i.shape[t]-s&&e[t][1]>=0&&e[t][1]<=i.shape[t]-s,()=>`Padding in dimension ${t} cannot be greater than or equal to ${i.shape[t]-s} or less than 0 for input of shape `+i.shape);const u={paddings:e,mode:n},b={x:i};return a.a.runKernel(c.Ub,b,u)}})},298:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(6),c=n(3),r=n(36),o=n(2),i=n(4);const s=Object(i.b)({mod_:
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
function(t,e){let n=Object(o.a)(t,"a","mod"),i=Object(o.a)(e,"b","mod");[n,i]=Object(r.makeTypesMatch)(n,i);const s={a:n,b:i};return a.a.runKernel(c.Vb,s)}})},484:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(43),c=n(101),r=n(9),o=n(7),i=n(2),s=n(5);
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
function u(t,e,{indexing:n="xy"}={}){if("xy"!==n&&"ij"!==n)throw new TypeError(n+" is not a valid third argument to meshgrid");if(void 0===t)return[];let u=Object(i.a)(t,"x","meshgrid",t instanceof o.a?t.dtype:"float32");if(void 0===e)return[u];let b=Object(i.a)(e,"y","meshgrid",e instanceof o.a?e.dtype:"float32");const l=Object(s.O)(u.shape),O=Object(s.O)(b.shape);return"xy"===n?(u=Object(r.a)(u,[1,-1]),b=Object(r.a)(b,[-1,1]),[Object(a.a)(Object(c.a)([O,1],u.dtype),u),Object(a.a)(b,Object(c.a)([1,l],b.dtype))]):(u=Object(r.a)(u,[-1,1]),b=Object(r.a)(b,[1,-1]),[Object(a.a)(u,Object(c.a)([1,O],u.dtype)),Object(a.a)(Object(c.a)([l,1],b.dtype),b)])}},485:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var a=n(2),c=n(5),r=n(72),o=n(19),i=n(157),s=n(4),u=n(9),b=n(41),l=n(23);const O=Object(s.b)({moments_:
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
function(t,e=null,n=!1){t=Object(a.a)(t,"x","moments");const s=Object(c.I)(e,t.shape),O=Object(i.a)(t,s,n);let j=O.shape;n||(j=Object(r.e)(O.shape,s));const m=Object(b.a)(Object(l.a)(Object(o.a)(t,"float32"),Object(u.a)(O,j)));return{mean:O,variance:Object(i.a)(m,s,n)}}})},486:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(2),c=n(4);const r=Object(c.b)({multiRNNCell_:function(t,e,n,c){const r=Object(a.a)(e,"data","multiRNNCell"),o=Object(a.b)(n,"c","multiRNNCell"),i=Object(a.b)(c,"h","multiRNNCell");let s=r;const u=[];for(let e=0;e<t.length;e++){const n=t[e](s,o[e],i[e]);u.push(n[0]),u.push(n[1]),s=n[1]}const b=[],l=[];for(let t=0;t<u.length;t+=2)b.push(u[t]),l.push(u[t+1]);return[b,l]}})},487:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(6),c=n(3),r=n(2),o=n(4),i=n(9);const s=Object(o.b)({multinomial_:
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
function(t,e,n,o=!1){const s=Object(r.a)(t,"logits","multinomial"),u=s.size,b=s.rank;if(u<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+u+".");if(b>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+b);n=n||Math.random();const l={logits:1===b?Object(i.a)(s,[1,-1]):s},O={numSamples:e,seed:n,normalized:o},j=a.a.runKernel(c.Wb,l,O);return 1===b?Object(i.a)(j,[j.size]):j}})},49:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(6),c=n(3),r=n(2),o=n(4);const i=Object(o.b)({neg_:
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
function(t){const e={x:Object(r.a)(t,"x","neg")};return a.a.runKernel(c.Yb,e)}})},515:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n(36),c=n(2),r=n(5),o=n(22),i=n(24),s=n(10),u=n(4),b=n(99),l=n(27),O=n(23);const j=Object(u.b)({movingAverage_:
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
function(t,e,n,u,j=!0){const m=Object(c.a)(t,"v","movingAverage"),d=Object(c.a)(e,"x","movingAverage"),f=Object(c.a)(n,"decay","movingAverage");Object(a.assertTypesMatch)(m,d),r.b(r.a(m.shape,d.shape),()=>"Shape mismatch in v and x");const h=Object(l.a)(1),p=Object(O.a)(h,f);let g=Object(s.a)(Object(O.a)(d,m),p);if(j){r.b(null!=u,()=>"When using zeroDebias: true, step is required.");const t=Object(c.a)(u,"step","movingAverage");g=Object(i.a)(g,Object(O.a)(h,Object(b.a)(f,t)))}return Object(o.a)(m,g)}})}}]);