(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{370:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(3),c=n(19),r=n(10),s=n(135);
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
const u={kernelName:a.a,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(r.a)(t,Object(s.a)(Object(c.a)(n,"float32"),-1))}}}},601:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n(3),c=n(19),r=n(24),s=n(49),u=n(27),o=n(66),i=n(41),b=n(23);
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
const d={kernelName:a.b,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Object(i.a)(Object(c.a)(n,"float32")),a=Object(o.a)(Object(b.a)(Object(u.a)(1),e));return Object(s.a)(Object(r.a)(t,a))}}}}},602:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(3),c=n(19),r=n(24),s=n(66),u=n(41),o=n(23);
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
const i={kernelName:a.c,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Object(s.a)(Object(o.a)(Object(u.a)(Object(c.a)(n,"float32")),1));return Object(r.a)(t,e)}}}}},603:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(3),c=n(25),r=n(9),s=n(28);
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
const u={kernelName:a.d,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,a]=e,u=c.assertAndGetBroadcastShape(n.shape,a.shape);return{a:()=>{let e=t;const a=c.getReductionAxes(n.shape,u);return a.length>0&&(e=Object(s.a)(e,a)),Object(r.a)(e,n.shape)},b:()=>{let e=t;const n=c.getReductionAxes(a.shape,u);return n.length>0&&(e=Object(s.a)(e,n)),Object(r.a)(e,a.shape)}}}}},604:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));
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
const a={kernelName:n(3).e,saveAllInputs:!0,gradFunc:(t,e)=>{const n={};return e.forEach((e,a)=>{n[a]=()=>t.clone()}),n}}},605:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(32);
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
const r={kernelName:a.h,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(c.a)(n)}}}},606:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(32);
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
const r={kernelName:a.i,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(c.a)(n)}}}},607:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(3),c=n(19),r=n(24),s=n(27),u=n(66),o=n(41),i=n(23);
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
const b={kernelName:a.j,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(r.a)(t,Object(u.a)(Object(i.a)(Object(s.a)(1),Object(o.a)(Object(c.a)(n,"float32")))))}}}},608:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(3),c=n(22),r=n(19),s=n(24),u=n(27),o=n(66),i=n(41);
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
const b={kernelName:a.k,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Object(o.a)(Object(c.a)(Object(u.a)(1),Object(i.a)(Object(r.a)(n,"float32"))));return Object(s.a)(t,e)}}}}},609:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n(3),c=n(22),r=n(25),s=n(24),u=n(10),o=n(49),i=n(9),b=n(41),d=n(28);
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
const j={kernelName:a.m,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,a]=e,j=Object(r.assertAndGetBroadcastShape)(n.shape,a.shape);return{a:()=>{const e=Object(c.a)(Object(b.a)(n),Object(b.a)(a));let o=Object(u.a)(t,Object(s.a)(a,e));const O=Object(r.getReductionAxes)(n.shape,j);return O.length>0&&(o=Object(d.a)(o,O)),Object(i.a)(o,n.shape)},b:()=>{const e=Object(c.a)(Object(b.a)(n),Object(b.a)(a));let O=Object(o.a)(Object(u.a)(t,Object(s.a)(n,e)));const f=Object(r.getReductionAxes)(a.shape,j);return f.length>0&&(O=Object(d.a)(O,f)),Object(i.a)(O,a.shape)}}}}},610:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),c=n(22),r=n(19),s=n(24),u=n(41);
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
const o={kernelName:a.l,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(s.a)(t,Object(c.a)(Object(u.a)(Object(r.a)(n,"float32")),1))}}}},611:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(3),c=n(19),r=n(24),s=n(41),u=n(23),o=n(27);
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
const i={kernelName:a.n,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(r.a)(t,Object(u.a)(Object(o.a)(1),Object(s.a)(Object(c.a)(n,"float32"))))}}}},612:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(613);
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
const r={kernelName:a.p,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[a]=e,{filterSize:r,strides:s,pad:u,dimRoundingMode:o}=n;return{x:()=>Object(c.a)(t,a,r,s,u,o)}}}},614:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(615);
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
const r={kernelName:a.o,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[a]=e,{filterSize:r,strides:s,pad:u}=n;return{x:()=>Object(c.a)(t,a,r,s,u)}}}},616:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(43);
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
const r={kernelName:a.s,inputsToSave:["a","b"],gradFunc:(t,e,n)=>{const[a,r]=e,{transposeA:s,transposeB:u}=n;return s||u?!s&&u?{a:()=>Object(c.a)(t,r,!1,!1),b:()=>Object(c.a)(t,a,!0,!1)}:s&&!u?{a:()=>Object(c.a)(r,t,!1,!0),b:()=>Object(c.a)(a,t,!1,!1)}:{a:()=>Object(c.a)(r,t,!0,!0),b:()=>Object(c.a)(t,a,!0,!0)}:{a:()=>Object(c.a)(t,r,!1,!0),b:()=>Object(c.a)(a,t,!0,!1)}}}},617:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(175);
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
const r={kernelName:a.t,gradFunc:(t,e,n)=>{const{blockShape:a,crops:r}=n;return{x:()=>Object(c.a)(t,a,r)}}}},618:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(28);
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
const r={kernelName:a.w,gradFunc:(t,e,n)=>{const a=n,r=a.inputShape,s=a.shape,u=Array.from(s);for(let t=r.length-1;t>=0;t--)if(r[t]===s[t])u[t]=1;else if(1!==r[t])throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${s}].`);const o=[];for(let t=0;t<u.length;t++)u[t]>1&&o.push(t);return{x:()=>Object(c.a)(t,o,!0)}}}},619:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));
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
const a={kernelName:n(3).x,gradFunc:t=>({x:()=>t.clone()})}},620:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(32);
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
const r={kernelName:a.y,gradFunc:t=>({x:()=>Object(c.a)(t)})}},621:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(3),c=n(124),r=n(106),s=n(113),u=n(64),o=n(32);
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
const i={kernelName:a.z,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[a]=e,{clipValueMin:i,clipValueMax:b}=n;return{x:()=>Object(u.a)(Object(s.a)(Object(c.a)(a,i),Object(r.a)(a,b)),t,Object(o.a)(t))}}}},622:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),c=n(370);
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
const r={kernelName:a.B,inputsToSave:["x"],gradFunc:c.a.gradFunc}},623:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(3),c=n(114),r=n(5);
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
const s={kernelName:a.C,saveAllInputs:!0,gradFunc:(t,e,n)=>{const a=e.map(t=>t.shape),{axis:s}=n,u=Object(r.I)(s,e[0].shape)[0],o=a.map(t=>t[u]);return Object(c.a)(t,o,u).map(t=>()=>t)}}},624:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(3),c=n(123),r=n(244);
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
const s={kernelName:a.F,inputsToSave:["dy","filter"],gradFunc:(t,e,n)=>{const[a,s]=e,{strides:u,pad:o,dataFormat:i,dimRoundingMode:b}=n;return{dy:()=>Object(c.a)(t,s,u,o,i,1,b),filter:()=>Object(r.a)(t,a,s.shape,u,o,i,b)}}}},625:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),c=n(244),r=n(242),s=n(37),u=n(5);
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
const o={kernelName:a.D,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const[a,o]=e,{dilations:i,strides:b,pad:d,dataFormat:j}=n;return u.b(s.j(i),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${i}'`),{x:()=>Object(r.a)(a.shape,t,o,b,d,j),filter:()=>Object(c.a)(a,t,o.shape,b,d,j)}}}},626:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),c=n(627),r=n(363),s=n(37),u=n(5);
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
const o={kernelName:a.G,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const{dilations:a,strides:o,pad:i}=n;u.b(Object(s.j)(a),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);const[b,d]=e;return{x:()=>Object(r.a)(b.shape,t,d,o,i),filter:()=>Object(c.a)(b,t,d.shape,o,i)}}}},628:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),c=n(19),r=n(10),s=n(49),u=n(262);
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
const o={kernelName:a.J,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(r.a)(Object(s.a)(Object(u.a)(Object(c.a)(n,"float32"))),t)}}}},629:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(3),c=n(19),r=n(10),s=n(263);
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
const u={kernelName:a.K,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(r.a)(Object(s.a)(Object(c.a)(n,"float32")),t)}}}},630:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(3),c=n(72),r=n(214),s=n(89);
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
const u={kernelName:a.N,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[a]=e,{axis:u,exclusive:o,reverse:i}=n;return{x:()=>{const e=Object(c.f)([u],a.rank);let n=Object(r.a)(t,u,o,!i);return null!=e&&(n=Object(s.a)(n,e)),n}}}}}}]);