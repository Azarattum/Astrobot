(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{443:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(3),c=n(5),r=n(371);
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
const u={kernelName:a.Kb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const a=n,{reductionIndices:u}=a,s=e[0],o=e[1],i=c.I(u,s.shape),b=Object(r.a)(t,o,s,i);return{x:()=>b.x()}}}},444:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(44);
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
const r={kernelName:a.gc,inputsToSave:["x"],gradFunc:(t,e,n)=>{const a=e[0],{paddings:r}=n,u=r.map(t=>t[0]);return{x:()=>Object(c.a)(t,u,a.shape)}}}},445:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(168);
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
const r={kernelName:a.Nc,gradFunc:(t,e,n)=>{const{blockShape:a,paddings:r}=n;return{x:()=>Object(c.a)(t,a,r)}}}},633:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var a=n(3),c=n(25),r=n(19),u=n(24),s=n(10),o=n(49),i=n(9),b=n(41),j=n(28);
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
const O={kernelName:a.pc,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,a]=e,O=c.assertAndGetBroadcastShape(n.shape,a.shape);return{a:()=>{const e=Object(u.a)(t,Object(r.a)(a,"float32")),s=c.getReductionAxes(n.shape,O);return s.length>0?Object(i.a)(Object(j.a)(e,s),n.shape):e},b:()=>{let e=Object(s.a)(t,Object(r.a)(n,"float32"));const d=c.getReductionAxes(a.shape,O);d.length>0&&(e=Object(i.a)(Object(j.a)(e,d),a.shape));const p=Object(b.a)(a);return Object(o.a)(Object(u.a)(e,Object(r.a)(p,"float32")))}}}}},648:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(3),c=n(80),r=n(10),u=n(64);
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
const s={kernelName:a.Ab,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[a]=e,{alpha:s}=n,o=Object(c.a)(a,0);return{x:()=>Object(u.a)(o,t,Object(r.a)(t,s))}}}},649:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(3),c=n(22),r=n(24);
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
const u={kernelName:a.Fb,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(r.a)(t,Object(c.a)(n,1))}}}},650:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(3),c=n(19),r=n(24);
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
const u={kernelName:a.Eb,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(r.a)(t,Object(c.a)(n,"float32"))}}}},651:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),c=n(73),r=n(10),u=n(23),s=n(28);
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
const o={kernelName:a.Gb,inputsToSave:[],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[a]=e,{axis:o}=n;return{logits:()=>{const e=Object(c.a)(a);return Object(u.a)(t,Object(r.a)(Object(s.a)(t,o,!0),e))}}}}},654:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),c=n(19),r=n(124),u=n(218),s=n(10);
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
const o={kernelName:a.Qb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,a]=e;return{a:()=>Object(s.a)(t,Object(c.a)(Object(r.a)(n,a),"float32")),b:()=>Object(s.a)(t,Object(c.a)(Object(u.a)(n,a),"float32"))}}}},655:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(656);
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
const r={kernelName:a.Mb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[a,r]=e,{filterSize:u,strides:s,pad:o,dimRoundingMode:i}=n;return{x:()=>Object(c.a)(t,a,r,u,s,o,i)}}}},657:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(658);
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
const r={kernelName:a.Lb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[a,r]=e,{filterSize:u,strides:s,pad:o}=n;return{x:()=>Object(c.a)(t,a,r,u,s,o)}}}},659:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(3),c=n(72),r=n(24),u=n(10),s=n(101),o=n(9),i=n(5);
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
const b={kernelName:a.Rb,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[a]=e,{axis:b}=n,j=i.I(b,a.shape),O=Object(c.d)(a.shape,j)[1],d=i.O(O);return{x:()=>{const e=a.shape.slice();j.forEach(t=>{e[t]=1});const n=Object(o.a)(t,e);return Object(r.a)(Object(u.a)(n,Object(s.a)(a.shape,"float32")),d)}}}}},660:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(3),c=n(5),r=n(371);
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
const u={kernelName:a.Sb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const a=n,{axis:u}=a,[s,o]=e,i=c.I(u,s.shape),b=Object(r.a)(t,o,s,i);return{x:()=>b.x()}}}},661:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),c=n(19),r=n(80),u=n(106),s=n(10);
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
const o={kernelName:a.Tb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,a]=e;return{a:()=>Object(s.a)(t,Object(c.a)(Object(u.a)(n,a),"float32")),b:()=>Object(s.a)(t,Object(c.a)(Object(r.a)(n,a),"float32"))}}}},662:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(44);
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
const r={kernelName:a.Ub,inputsToSave:["x"],gradFunc:(t,e,n)=>{const a=e[0],{paddings:r}=n,u=r.map(t=>t[0]);return{x:()=>Object(c.a)(t,u,a.shape)}}}},663:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n(3),c=n(25),r=n(24),u=n(195),s=n(10),o=n(49),i=n(9),b=n(28);
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
const j={kernelName:a.Vb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,a]=e,j=Object(c.assertAndGetBroadcastShape)(n.shape,a.shape);return{a:()=>{const e=Object(c.getReductionAxes)(n.shape,j);return e.length>0?Object(i.a)(Object(b.a)(t,e),n.shape):t},b:()=>{const e=Object(s.a)(t,Object(o.a)(Object(u.a)(Object(r.a)(n,a)))),O=Object(c.getReductionAxes)(a.shape,j);return O.length>0?Object(i.a)(Object(b.a)(e,O),a.shape):e}}}}},664:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(3),c=n(25),r=n(19),u=n(10),s=n(9),o=n(28);
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
const i={kernelName:a.Xb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,a]=e,i=Object(c.assertAndGetBroadcastShape)(n.shape,a.shape);return{a:()=>{const e=Object(u.a)(t,Object(r.a)(a,"float32")),b=Object(c.getReductionAxes)(n.shape,i);return b.length>0?Object(s.a)(Object(o.a)(e,b),n.shape):e},b:()=>{const e=Object(u.a)(t,Object(r.a)(n,"float32")),b=Object(c.getReductionAxes)(a.shape,i);return b.length>0?Object(s.a)(Object(o.a)(e,b),a.shape):e}}}}},665:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(49);
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
const r={kernelName:a.Yb,gradFunc:t=>({x:()=>Object(c.a)(t)})}},666:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(144);
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
const r={kernelName:a.dc,inputsToSave:["indices"],gradFunc:(t,e)=>{const n=e[0];return{indices:()=>Object(c.a)(n.shape,"float32")}}}},667:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(32);
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
const r={kernelName:a.ec,gradFunc:t=>({x:()=>Object(c.a)(t)})}},668:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(146);
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
const r={kernelName:a.fc,saveAllInputs:!0,gradFunc:(t,e,n)=>{const{axis:a}=n;return Object(c.a)(t,a).map(t=>()=>t)}}},669:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n(3),c=n(25),r=n(19),u=n(80),s=n(129),o=n(10),i=n(99),b=n(9),j=n(27),O=n(23),d=n(28),p=n(64),f=n(32);
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
const l={kernelName:a.hc,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(t,e)=>{const[n,a,l]=e,v=n,g=a,h=c.assertAndGetBroadcastShape(v.shape,g.shape);return{a:()=>{const e=Object(r.a)(g,"float32");let n=Object(o.a)(t,Object(o.a)(e,Object(i.a)(v,Object(O.a)(e,Object(j.a)(1)))));const a=c.getReductionAxes(v.shape,h);return a.length>0&&(n=Object(d.a)(n,a)),Object(b.a)(n,v.shape)},b:()=>{const e=Object(u.a)(v,0),n=Object(p.a)(e,Object(s.a)(v),Object(f.a)(v));let a=Object(o.a)(t,Object(o.a)(l,n));const r=c.getReductionAxes(g.shape,h);return r.length>0&&(a=Object(d.a)(a,r)),Object(b.a)(a,g.shape)}}}}},670:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n(3),c=n(25),r=n(80),u=n(10),s=n(9),o=n(28),i=n(64),b=n(32);
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
const j={kernelName:a.ic,inputsToSave:["x","alpha"],gradFunc:(t,e)=>{const[n,a]=e,j=Object(r.a)(n,0);return{x:()=>Object(i.a)(j,t,Object(u.a)(t,a)),alpha:()=>{let e=Object(i.a)(j,Object(b.a)(t),Object(u.a)(t,n));const r=Object(c.getReductionAxes)(a.shape,t.shape);return r.length>0&&(e=Object(o.a)(e,r)),Object(s.a)(e,a.shape)}}}}},671:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(256),c=n(3),r=n(193),u=n(10),s=n(9),o=n(89);function i(t,e,n){const c=t.shape.length,i=c-n.length,b=a.Ad.getAxesPermutation(n,c);let j=t;null!=b&&(j=Object(o.a)(t,b));const O=j.shape.slice(),d=O.splice(c-n.length,n.length).reduce((t,e)=>t*e,1);O.push(d);let p=
/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
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
function(t,e,n){const a=t.shape.slice();a[n]=1;const c=Object(s.a)(e,a),o=Object(r.a)(t,n,!0,!1),i=Object(r.a)(t,n,!0,!0),b=Object(u.a)(o,i);return Object(u.a)(c,b)}(j.reshape(O),e,i);if(p=p.reshape(j.shape),null!=b){const t=a.Ad.getUndoAxesPermutation(b);p=Object(o.a)(p,t)}return p}const b={kernelName:c.jc,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[a]=e,{axis:c}=n;let r=[];return r=null==c?a.shape.map((t,e)=>e):"number"==typeof c?[c]:c,{x:()=>i(a,t,r)}}}},672:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(3),c=n(24),r=n(49),u=n(41);
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
const s={kernelName:a.qc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(c.a)(t,Object(r.a)(Object(u.a)(n)))}}}},673:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),c=n(19),r=n(106),u=n(10),s=n(135);
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
const o={kernelName:a.sc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e,a=Object(u.a)(Object(r.a)(n,6),Object(s.a)(n));return{x:()=>Object(u.a)(t,Object(c.a)(a,"float32"))}}}},674:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(3),c=n(19),r=n(10),u=n(135);
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
const s={kernelName:a.rc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(r.a)(t,Object(c.a)(Object(u.a)(n),"float32"))}}}},675:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(9);
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
const r={kernelName:a.tc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(c.a)(t,n.shape)}}}},676:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(6),c=n(3);
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
const r={kernelName:c.uc,inputsToSave:["images"],gradFunc:(t,e,n)=>{const[r]=e,u={dy:t,images:r};return{images:()=>a.a.runKernel(c.vc,u,n)}}}},677:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(6),c=n(3);
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
const r={kernelName:c.wc,inputsToSave:["images"],gradFunc:(t,e,n)=>{const[r]=e,u={dy:t,images:r};return{images:()=>a.a.runKernel(c.xc,u,n)}}}},678:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(3),c=n(88),r=n(5);
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
const u={kernelName:a.yc,gradFunc:(t,e,n)=>{const{dims:a}=n,u=Object(r.I)(a,t.shape);return{x:()=>Object(c.a)(t,u)}}}},679:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(32);
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
const r={kernelName:a.Ac,gradFunc:t=>({x:()=>Object(c.a)(t)})}},680:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),c=n(24),r=n(10),u=n(49),s=n(99);
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
const o={kernelName:a.Bc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(u.a)(Object(c.a)(t,Object(r.a)(Object(s.a)(n,1.5),2)))}}}},681:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),c=n(19),r=n(173),u=n(10),s=n(32);
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
const o={kernelName:a.Ec,inputsToSave:["condition"],gradFunc:(t,e)=>{const[n]=e;return{condition:()=>Object(c.a)(Object(s.a)(n),"float32"),t:()=>Object(u.a)(t,Object(c.a)(n,t.dtype)),e:()=>Object(u.a)(t,Object(c.a)(Object(r.a)(n),t.dtype))}}}},682:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n(3),c=n(19),r=n(73),u=n(80),s=n(10),o=n(27),i=n(265),b=n(64);
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
const j={kernelName:a.Fc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Object(u.a)(n,Object(o.a)(0)),a=Object(o.a)(i.b),j=Object(o.a)(i.a),O=Object(s.a)(t,j),d=Object(s.a)(Object(s.a)(t,a),Object(r.a)(Object(c.a)(n,"float32")));return Object(b.a)(e,O,d)}}}}},683:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(3),c=n(10),r=n(27),u=n(23);
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
const s={kernelName:a.Gc,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(c.a)(t,Object(c.a)(n,Object(u.a)(Object(r.a)(1),n)))}}}},684:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(32);
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
const r={kernelName:a.Hc,gradFunc:t=>({x:()=>Object(c.a)(t)})}},685:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(3),c=n(19),r=n(192),u=n(10);
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
const s={kernelName:a.Ic,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(u.a)(Object(r.a)(Object(c.a)(n,"float32")),t)}}}},686:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(3),c=n(19),r=n(257),u=n(10);
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
const s={kernelName:a.Jc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(u.a)(Object(r.a)(Object(c.a)(n,"float32")),t)}}}},687:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(3),c=n(107),r=n(212);
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
const u={kernelName:a.Kc,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[a]=e,{begin:u,size:s}=n,o=a.shape,[i,b]=Object(r.parseSliceParams)(a,u,s),j=[];for(let e=0;e<t.rank;e++)j.push([i[e],o[e]-i[e]-b[e]]);return{x:()=>Object(c.a)(t,j)}}}},688:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(3),c=n(10),r=n(23),u=n(28);
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
const s={kernelName:a.Lc,outputsToSave:[!0],gradFunc:(t,e,n)=>{const[a]=e,{dim:s}=n,o=Object(c.a)(t,a);return{logits:()=>Object(r.a)(o,Object(c.a)(Object(u.a)(o,[s],!0),a))}}}},689:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(3),c=n(10),r=n(118);
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
const u={kernelName:a.Mc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(c.a)(t,Object(r.a)(n))}}}}}]);