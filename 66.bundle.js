(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{138:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return o}));var r=e(34);
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
 */function a(...n){Object(r.b)().getBool("IS_TEST")||Object(r.b)().getBool("PROD")||console.warn(...n)}function o(...n){Object(r.b)().getBool("IS_TEST")||Object(r.b)().getBool("PROD")||console.log(...n)}},213:function(n,t,e){"use strict";e.d(t,"a",(function(){return b}));var r=e(6),a=e(3),o=e(2),c=e(5),u=e(19),s=e(37),i=e(4),f=e(9);const b=Object(i.b)({avgPool_:
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
function(n,t,e,i,b){const d=Object(o.a)(n,"x","avgPool","float32");c.b(s.i(e,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '1'`);let l=d,p=!1;3===d.rank&&(p=!0,l=Object(f.a)(d,[1,d.shape[0],d.shape[1],d.shape[2]])),c.b(4===l.rank,()=>`Error in avgPool: x must be rank 4 but got rank ${l.rank}.`),s.a("avgPool",i,b);const h={x:l},O={filterSize:t,strides:e,pad:i,dimRoundingMode:b};let j=r.a.runKernel(a.o,h,O);return j=Object(u.a)(j,d.dtype),p?Object(f.a)(j,[j.shape[1],j.shape[2],j.shape[3]]):j}})},22:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e(6),a=e(3),o=e(36),c=e(2),u=e(4);const s=Object(u.b)({add_:
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
function(n,t){let e=Object(c.a)(n,"a","add"),u=Object(c.a)(t,"b","add");[e,u]=Object(o.makeTypesMatch)(e,u);const s={a:e,b:u};return r.a.runKernel(a.d,s)}})},281:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(6),a=e(3),o=e(2),c=e(4);const u=Object(c.b)({all_:
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
function(n,t=null,e=!1){const c={x:Object(o.a)(n,"x","all","bool")},u={axis:t,keepDims:e};return r.a.runKernel(a.f,c,u)}})},282:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(6),a=e(3),o=e(2),c=e(4);const u=Object(c.b)({any_:
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
function(n,t=null,e=!1){const c={x:Object(o.a)(n,"x","any","bool")},u={axis:t,keepDims:e};return r.a.runKernel(a.g,c,u)}})},283:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(6),a=e(3),o=e(2),c=e(4);const u=Object(c.b)({argMax_:
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
function(n,t=0){const e={x:Object(o.a)(n,"x","argMax")},c={axis:t};return r.a.runKernel(a.h,e,c)}})},284:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(6),a=e(3),o=e(2),c=e(4);const u=Object(c.b)({argMin_:
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
function(n,t=0){const e={x:Object(o.a)(n,"x","argMin")},c={axis:t};return r.a.runKernel(a.i,e,c)}})},285:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e(6),a=e(3),o=e(36),c=e(2),u=e(4);const s=Object(u.b)({atan2_:
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
function(n,t){let e=Object(c.a)(n,"a","atan2"),u=Object(c.a)(t,"b","atan2");[e,u]=Object(o.makeTypesMatch)(e,u);const s={a:e,b:u};return r.a.runKernel(a.m,s)}})},417:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(6),a=e(3),o=e(2),c=e(4);const u=Object(c.b)({acos_:
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
function(n){const t={x:Object(o.a)(n,"x","acos")};return r.a.runKernel(a.b,t)}})},418:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(6),a=e(3),o=e(2),c=e(4);const u=Object(c.b)({acosh_:
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
function(n){const t={x:Object(o.a)(n,"x","acosh")};return r.a.runKernel(a.c,t)}})},419:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(6),a=e(3),o=e(2),c=e(4);const u=Object(c.b)({asin_:
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
function(n){const t={x:Object(o.a)(n,"x","asin")};return r.a.runKernel(a.j,t)}})},420:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(6),a=e(3),o=e(2),c=e(4);const u=Object(c.b)({asinh_:
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
function(n){const t={x:Object(o.a)(n,"x","asinh")};return r.a.runKernel(a.k,t)}})},421:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(6),a=e(3),o=e(2),c=e(4);const u=Object(c.b)({atan_:
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
function(n){const t={x:Object(o.a)(n,"x","atan")};return r.a.runKernel(a.l,t)}})},422:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(6),a=e(3),o=e(2),c=e(4);const u=Object(c.b)({atanh_:
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
function(n){const t={x:Object(o.a)(n,"x","atanh")};return r.a.runKernel(a.n,t)}})},464:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e(6),a=e(3),o=e(2),c=e(5),u=e(4);const s=Object(u.b)({addN_:
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
function(n){c.b(Array.isArray(n),()=>"The argument passed to tf.addN() must be a list of tensors"),c.b(n.length>=1,()=>"Must pass at least one tensor to tf.addN(), but got "+n.length);const t=n.map((n,t)=>Object(o.a)(n,"tensors"+t,"addN")),e=t[0];t.forEach(n=>{if(n.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(n=>{if(!c.a(n.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const u=t;return r.a.runKernel(a.e,u)}})},465:function(n,t,e){"use strict";e.d(t,"a",(function(){return b}));var r=e(6),a=e(3),o=e(2),c=e(5),u=e(37),s=e(19),i=e(4),f=e(9);const b=Object(i.b)({avgPool3d_:
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
function(n,t,e,i,b,d="NDHWC"){const l=Object(o.a)(n,"x","avgPool3d","float32");let p=l,h=!1;4===l.rank&&(h=!0,p=Object(f.a)(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),c.b(5===p.rank,()=>`Error in avgPool3d: x must be rank 5 but got rank ${p.rank}.`),c.b("NDHWC"===d,()=>"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+d),Object(u.a)("avgPool3d",i,b);const O={x:p},j={filterSize:t,strides:e,pad:i,dimRoundingMode:b,dataFormat:d};let g=r.a.runKernel(a.p,O,j);return g=Object(s.a)(g,p.dtype),h?Object(f.a)(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}})},533:function(n,t,e){"use strict";
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
function r(n,t,e,r=!0){let a=[];if(r)a=a.concat(t.slice(0)),a.push(n[0]/e),a=a.concat(n.slice(1));else{a=a.concat(n[0]);const e=t.length;for(let r=0;r<e;++r)a=a.concat([n[r+1]/t[r],t[r]]);a=a.concat(n.slice(e+1))}return a}function a(n,t,e=!0){const r=[];if(e){r.push(t);for(let e=t+1;e<n;++e)e<=2*t?(r.push(e),r.push(e-(t+1))):r.push(e)}else{const e=[],a=[];for(let r=1;r<n;++r)r>=2*t+1||r%2==1?a.push(r):e.push(r);r.push(...e),r.push(0),r.push(...a)}return r}function o(n,t,e,r=!0){const a=[];r?a.push(n[0]/e):a.push(n[0]*e);for(let e=1;e<n.length;++e)e<=t.length?r?a.push(t[e-1]*n[e]):a.push(n[e]/t[e-1]):a.push(n[e]);return a}function c(n,t){const e=[0];for(let r=0;r<t;++r)e.push(n[r][0]);return e}function u(n,t,e){const r=n.slice(0,1);for(let a=0;a<e;++a)r.push(n[a+1]-t[a][0]-t[a][1]);return r}e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return c})),e.d(t,"e",(function(){return u}))},613:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e(6),a=e(3),o=e(2),c=e(5),u=e(37),s=e(4),i=e(9);const f=Object(s.b)({avgPool3dGrad_:
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
function(n,t,e,s,f,b){const d=Object(o.a)(n,"dy","avgPool3dGrad"),l=Object(o.a)(t,"input","avgPool3dGrad");let p=d,h=l,O=!1;4===l.rank&&(O=!0,p=Object(i.a)(d,[1,d.shape[0],d.shape[1],d.shape[2],d.shape[3]]),h=Object(i.a)(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),c.b(5===p.rank,()=>"Error in avgPool3dGrad: dy must be rank 5 but got rank "+p.rank+"."),c.b(5===h.rank,()=>"Error in avgPool3dGrad: input must be rank 5 but got rank "+h.rank+"."),Object(u.a)("avgPool3dGrad",f,b);const j={dy:p,input:h},g={filterSize:e,strides:s,pad:f,dimRoundingMode:b},v=r.a.runKernel(a.q,j,g);return O?Object(i.a)(v,[v.shape[1],v.shape[2],v.shape[3],v.shape[4]]):v}})},615:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e(6),a=e(3),o=e(2),c=e(5),u=e(4),s=e(9);const i=Object(u.b)({avgPoolGrad_:
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
function(n,t,e,u,i){const f=Object(o.a)(n,"dy","avgPoolGrad"),b=Object(o.a)(t,"input","avgPoolGrad");c.b(b.rank===f.rank,()=>`Rank of input (${b.rank}) does not match rank of dy (${f.rank})`);let d=b,l=f,p=!1;3===b.rank&&(p=!0,d=Object(s.a)(b,[1,b.shape[0],b.shape[1],b.shape[2]]),l=Object(s.a)(f,[1,f.shape[0],f.shape[1],f.shape[2]])),c.b(4===l.rank,()=>"Error in avgPoolGrad: dy must be rank 4 but got rank "+l.rank+"."),c.b(4===d.rank,()=>"Error in avgPoolGrad: input must be rank 4 but got rank "+d.rank+".");const h={dy:l,input:d},O={filterSize:e,strides:u,pad:i},j=r.a.runKernel(a.r,h,O);return p?Object(s.a)(j,[j.shape[1],j.shape[2],j.shape[3]]):j}})},72:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return c})),e.d(t,"e",(function(){return u})),e.d(t,"a",(function(){return s})),e.d(t,"f",(function(){return i})),e.d(t,"h",(function(){return f})),e.d(t,"g",(function(){return b}));var r=e(5);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function a(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function o(n,t,e){const r=n.length+t.length,a=[];let o=0,c=0;for(let u=0;u<r;u++)-1===e.indexOf(u)?a.push(n[o++]):a.push(t[c++]);return a}function c(n,t){const e=[],r=n.length;for(let a=0;a<r;a++)-1===t.indexOf(a)&&e.push(n[a]);return[e,t.map(t=>n[t])]}function u(n,t){return o(n,t.map(n=>1),t)}function s(n,t,e){r.b(a(t,e),()=>n+" supports only inner-most axes for now. "+`Got axes ${t} and rank-${e} input.`)}function i(n,t){if(a(n,t))return null;const e=[];for(let r=0;r<t;++r)-1===n.indexOf(r)&&e.push(r);return n.forEach(n=>e.push(n)),e}function f(n){return n.map((n,t)=>[t,n]).sort((n,t)=>n[1]-t[1]).map(n=>n[0])}function b(n,t){const e=[];for(let r=t-n;r<t;++r)e.push(r);return e}},76:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(6),a=e(3),o=e(2),c=e(4);const u=Object(c.b)({abs_:
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
function(n){const t=Object(o.a)(n,"x","abs");if("complex64"===t.dtype){const n={x:t};return r.a.runKernel(a.B,n)}{const n={x:t};return r.a.runKernel(a.a,n)}}})}}]);