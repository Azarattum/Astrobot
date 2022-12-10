(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{631:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),r=n(37),c=n(369),s=n(368),u=n(5);
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
const o={kernelName:a.Q,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const{dilations:a,strides:o,pad:i,dimRoundingMode:b}=n,d=null==a?[1,1]:a;u.b(r.j(d),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${d}'`);const[j,O]=e;return u.b(4===j.rank,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${j.rank}.`),u.b(4===O.rank,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${O.rank}.`),u.b(j.shape[3]===O.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${j.shape[3]}) must match the inChannels dimension in filter ${O.shape[2]}.`),u.b(r.i(o,d),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${o} and dilations '${d}'.`),r.a("depthwiseConv2d",i,b),{x:()=>Object(s.a)(j.shape,t,O,o,i,d,b),filter:()=>Object(c.a)(j,t,O.shape,o,i,d,b)}}}},632:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(6),r=n(3);
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
const c={kernelName:r.U,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const[c,s]=e,u={x:c,filter:s,dy:t},o={x:c,filter:s,dy:t};return{x:()=>a.a.runKernel(r.W,u,n),filter:()=>a.a.runKernel(r.V,o,n)}}}},634:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(6),r=n(3);
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
const c={kernelName:r.Y,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e,c={dy:t,y:n};return{x:()=>a.a.runKernel(r.Z,c)}}}},635:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(3),r=n(73),c=n(10),s=n(49),u=n(41);
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
const o={kernelName:a.bb,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e,a=Object(c.a)(Object(r.a)(Object(s.a)(Object(u.a)(n))),2/Math.sqrt(Math.PI));return{x:()=>Object(c.a)(t,a)}}}},636:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(3),r=n(10);
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
const c={kernelName:a.cb,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(r.a)(t,n)}}}},637:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(3),r=n(9);
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
const c={kernelName:a.db,inputsToSave:["input"],gradFunc:(t,e)=>{const[n]=e;return{input:()=>Object(r.a)(t,n.shape)}}}},638:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(3),r=n(73),c=n(10);
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
const s={kernelName:a.eb,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(c.a)(t,Object(r.a)(n))}}}},639:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n(3),r=n(25),c=n(19),s=n(24),u=n(10),o=n(49),i=n(9),b=n(41),d=n(28);
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
const j={kernelName:a.jb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,a]=e,j=Object(r.assertAndGetBroadcastShape)(n.shape,a.shape);return{a:()=>{const e=Object(s.a)(t,Object(c.a)(a,"float32")),u=Object(r.getReductionAxes)(n.shape,j);return u.length>0?Object(i.a)(Object(d.a)(e,u),n.shape):e},b:()=>{let e=Object(u.a)(t,Object(c.a)(n,"float32"));const O=Object(r.getReductionAxes)(a.shape,j);O.length>0&&(e=Object(i.a)(Object(d.a)(e,O),a.shape));const l=Object(b.a)(a);return Object(o.a)(Object(s.a)(e,Object(c.a)(l,"float32")))}}}}},640:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(3),r=n(32);
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
const c={kernelName:a.ib,gradFunc:t=>({x:()=>Object(r.a)(t)})}},641:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var a=n(3),r=n(22),c=n(25),s=n(10),u=n(9),o=n(261),i=n(27),b=n(23),d=n(28),j=n(128);
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
const O={kernelName:a.lb,inputsToSave:["x","mean","variance","scale"],gradFunc:(t,e,n)=>{const{varianceEpsilon:a}=n,[O,l,p,f]=e,h=null==f?Object(i.a)(1):f,v=Object(c.getReductionAxes)(l.shape,O.shape),g=[];if(1===l.rank){for(let t=0;t<O.shape.length-1;++t)g.push(O.shape[t]);g.push(1)}const k=Object(b.a)(O,l),x=Object(s.a)(t,h),m=Object(o.a)(Object(r.a)(p,Object(i.a)(a))),N=Object(s.a)(Object(s.a)(Object(s.a)(m,m),m),Object(i.a)(-.5));return{x:()=>1===l.rank?Object(u.a)(Object(s.a)(Object(s.a)(t,Object(j.a)(Object(u.a)(m,[1,1,1,l.shape[0]]),g)),h),O.shape):Object(u.a)(Object(s.a)(Object(s.a)(t,m),h),O.shape),mean:()=>{let t=Object(s.a)(Object(s.a)(m,Object(i.a)(-1)),x);return 1===l.rank&&(t=Object(d.a)(t,v)),Object(u.a)(t,l.shape)},variance:()=>{let t=Object(s.a)(Object(s.a)(N,k),x);return 1===l.rank&&(t=Object(d.a)(t,v)),Object(u.a)(t,l.shape)},scale:()=>{const e=Object(s.a)(k,m);let n=Object(s.a)(t,e);return 1===l.rank&&(n=Object(d.a)(n,v)),Object(u.a)(n,l.shape)},offset:()=>{let e=t;return 1===l.rank&&(e=Object(d.a)(e,v)),Object(u.a)(e,l.shape)}}}}},642:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(3),r=n(72),c=n(9),s=n(89),u=n(228),o=n(5);
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
const i={kernelName:a.pb,inputsToSave:["x","indices"],gradFunc:(t,e,n)=>{const[a,i]=e,{axis:j}=n,O=Object(o.I)(j,a.shape)[0];return{x:()=>{const e=a.shape,n=i.size,o=e.slice(0,O),l=o.length,p=e.slice(j,e.length).slice(1),f=p.length,h=b(0,l),v=b(l+1,l+1+f),g=d([o,[n],p]),k=Object(c.a)(t,g),x=Object(c.a)(i,[n]),m=d([[l],h,v]),N=Object(s.a)(k,m);let F=Object(u.a)(N,x,a.shape[O]);const S=Object(r.h)(m);return F=Object(s.a)(F,S),F},indices:()=>i}}};function b(t,e){const n=[];for(let a=t;a<e;++a)n.push(a);return n}function d(t){const e=[];for(let n=0;n<t.length;++n)for(let a=0;a<t[n].length;++a)e.push(t[n][a]);return e}},643:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(3),r=n(32);
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
const c={kernelName:a.rb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,a]=e;return{a:()=>Object(r.a)(n),b:()=>Object(r.a)(a)}}}},644:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(3),r=n(19);
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
const c={kernelName:a.tb,gradFunc:t=>({x:()=>Object(r.a)(t,"float32")})}},645:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(3),r=n(32);
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
const c={kernelName:a.vb,gradFunc:t=>({x:()=>Object(r.a)(t)})}},646:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(3),r=n(32);
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
const c={kernelName:a.wb,gradFunc:t=>({x:()=>Object(r.a)(t)})}},647:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(3),r=n(32);
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
const c={kernelName:a.xb,gradFunc:t=>({x:()=>Object(r.a)(t)})}},652:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(3),r=n(653);
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
const c={kernelName:a.yb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[a,c]=e,{depthRadius:s,bias:u,alpha:o,beta:i}=n;return{x:()=>Object(r.a)(a,c,t,s,u,o,i)}}}}}]);