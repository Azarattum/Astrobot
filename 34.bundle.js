(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{371:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(72),c=n(19),r=n(170),s=n(10),u=n(9);
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
function o(e,t,n,o){return t.rank<n.rank&&(t=Object(u.a)(t,a.e(t.shape,o))),e.rank<n.rank&&(e=Object(u.a)(e,a.e(e.shape,o))),{x:()=>Object(s.a)(e,Object(c.a)(Object(r.a)(n,t),e.dtype))}}},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3),c=n(58);
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
const r={kernelName:a.Tc,gradFunc:(e,t,n)=>{const{axis:a}=n;return{x:()=>Object(c.a)(e,a)}}}},690:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(3),c=n(19),r=n(24),s=n(10),u=n(66);
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
const o={kernelName:a.Uc,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>Object(r.a)(e,Object(s.a)(Object(u.a)(Object(c.a)(n,"float32")),2))}}}},691:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),c=n(10),r=n(27),s=n(23);
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
const u={kernelName:a.Wc,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,a]=t,u=Object(r.a)(2);return{a:()=>Object(c.a)(e,Object(c.a)(u,Object(s.a)(n,a))),b:()=>Object(c.a)(e,Object(c.a)(u,Object(s.a)(a,n)))}}}},692:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(3),c=n(19),r=n(10);
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
const s={kernelName:a.Vc,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>Object(r.a)(e,Object(r.a)(Object(c.a)(n,"float32"),2))}}}},693:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3),c=n(32);
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
const r={kernelName:a.Xc,gradFunc:e=>({x:()=>Object(c.a)(e)})}},694:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(3),c=n(25),r=n(49),s=n(9),u=n(28);
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
const o={kernelName:a.cd,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,a]=t,o=c.assertAndGetBroadcastShape(n.shape,a.shape);return{a:()=>{let t=e;const a=c.getReductionAxes(n.shape,o);return a.length>0&&(t=Object(u.a)(t,a)),Object(s.a)(t,n.shape)},b:()=>{let t=e;const n=c.getReductionAxes(a.shape,o);return n.length>0&&(t=Object(u.a)(t,n)),Object(s.a)(Object(r.a)(t),a.shape)}}}}},695:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(3),c=n(10),r=n(101),s=n(9),u=n(5);
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
const o={kernelName:a.dd,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[a]=t,o=a.shape.slice(),{axis:i}=n;Object(u.I)(i,a.shape).forEach(e=>{o[e]=1});const b=Object(s.a)(e,o),j=Object(c.a)(b,Object(r.a)(a.shape,"float32"));return{x:()=>j}}}},696:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),c=n(192),r=n(24),s=n(41);
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
const u={kernelName:a.ed,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>Object(r.a)(e,Object(s.a)(Object(c.a)(n)))}}}},697:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(3),c=n(10),r=n(27),s=n(41),u=n(23);
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
const o={kernelName:a.fd,outputsToSave:[!0],gradFunc:(e,t)=>{const[n]=t;return{x:()=>Object(c.a)(Object(u.a)(Object(r.a)(1),Object(s.a)(n)),e)}}}},698:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),c=n(22),r=n(44),s=n(32);
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
const u={kernelName:a.gd,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[a]=t,{reps:u}=n;return{x:()=>{let t=Object(s.a)(a);if(1===a.rank)for(let n=0;n<u[0];++n)t=Object(c.a)(t,Object(r.a)(e,[n*a.shape[0]],[a.shape[0]]));else if(2===a.rank)for(let n=0;n<u[0];++n)for(let s=0;s<u[1];++s)t=Object(c.a)(t,Object(r.a)(e,[n*a.shape[0],s*a.shape[1]],[a.shape[0],a.shape[1]]));else if(3===a.rank)for(let n=0;n<u[0];++n)for(let s=0;s<u[1];++s)for(let o=0;o<u[2];++o)t=Object(c.a)(t,Object(r.a)(e,[n*a.shape[0],s*a.shape[1],o*a.shape[2]],[a.shape[0],a.shape[1],a.shape[2]]));else{if(4!==a.rank)throw new Error("Gradient for tile operation is not implemented for rank-"+a.rank+" tensors yet.");for(let n=0;n<u[0];++n)for(let s=0;s<u[1];++s)for(let o=0;o<u[2];++o)for(let i=0;i<u[3];++i)t=Object(c.a)(t,Object(r.a)(e,[n*a.shape[0],s*a.shape[1],o*a.shape[2],i*a.shape[3]],[a.shape[0],a.shape[1],a.shape[2],a.shape[3]]))}return t}}}}},699:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(3),c=n(72),r=n(89);
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
const s={kernelName:a.jd,gradFunc:(e,t,n)=>{const a=n,{perm:s}=a,u=c.h(s);return{x:()=>Object(r.a)(e,u)}}}},700:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3),c=n(115);
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
const r={kernelName:a.ld,gradFunc:(e,t,n)=>{const a=n,{axis:r}=a;return{value:()=>Object(c.a)(e,r)}}}},701:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(3),c=n(121),r=n(171),s=n(124),u=n(113),o=n(174),i=n(101),b=n(27),j=n(64),O=n(32);
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
const f={kernelName:a.md,inputsToSave:["segmentIds"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>function(e,t){const n=Object(o.a)(t,Object(O.a)(t)),a=Object(r.a)(e,n);let f=Object(s.a)(t,Object(b.a)(0,"int32"));const p=a.rank-f.rank;for(let e=0;e<p;++e)f=Object(c.a)(f,e+1);f=Object(u.a)(f,Object(i.a)(a.shape,"bool"));const d=Object(O.a)(a);return Object(j.a)(f,a,d)}(e,n)}}}},702:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3),c=n(32);
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
const r={kernelName:a.nd,gradFunc:e=>({x:()=>Object(c.a)(e)})}}}]);