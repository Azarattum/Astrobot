(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{169:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var s=t(6),a=t(3),i=t(2),r=t(5),o=t(37),u=t(4),c=t(9);const p=Object(u.b)({depthwiseConv2d_:
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
function(e,n,t,u,p="NHWC",d=[1,1],h){const b=Object(i.a)(e,"x","depthwiseConv2d","float32"),l=Object(i.a)(n,"filter","depthwiseConv2d","float32");let f=b,v=!1;3===b.rank&&(v=!0,f=Object(c.a)(b,[1,b.shape[0],b.shape[1],b.shape[2]])),r.b(4===f.rank,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${f.rank}.`),r.b(4===l.rank,()=>"Error in depthwiseConv2d: filter must be rank 4, but got rank "+l.rank+".");const m="NHWC"===p?f.shape[3]:f.shape[1];r.b(m===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${m}) must match the inChannels dimension in filter ${l.shape[2]}.`),o.a("depthwiseConv2d",u,h);const w={x:f,filter:l},k={strides:t,pad:u,dataFormat:p,dilations:d,dimRoundingMode:h},O=s.a.runKernel(a.Q,w,k);return v?Object(c.a)(O,[O.shape[1],O.shape[2],O.shape[3]]):O}})},193:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var s=t(6),a=t(3),i=t(2),r=t(4);const o=Object(r.b)({cumprod_:
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,n=0,t=!1,r=!1){const o={x:Object(i.a)(e,"x","cumprod")},u={axis:n,exclusive:t,reverse:r};return s.a.runKernel(a.M,o,u)}})},214:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var s=t(6),a=t(3),i=t(2),r=t(4);const o=Object(r.b)({cumsum_:
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
function(e,n=0,t=!1,r=!1){const o={x:Object(i.a)(e,"x","cumsum")},u={axis:n,exclusive:t,reverse:r};return s.a.runKernel(a.N,o,u)}})},289:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var s=t(6),a=t(3),i=t(2),r=t(5),o=t(4);const u=Object(o.b)({depthToSpace_:
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
function(e,n,t="NHWC"){const o=Object(i.a)(e,"x","depthToSpace","float32"),u="NHWC"===t?o.shape[1]:o.shape[2],c="NHWC"===t?o.shape[2]:o.shape[3],p="NHWC"===t?o.shape[3]:o.shape[1];r.b(n>1,()=>"blockSize should be > 1 for depthToSpace, but was: "+n),r.b(u*n>=0,()=>`Negative dimension size caused by overflow when multiplying\n    ${u} and ${n}  for depthToSpace with input shape\n    ${o.shape}`),r.b(c*n>=0,()=>`Negative dimension size caused by overflow when multiplying\n    ${c} and ${n} for depthToSpace with input shape\n        ${o.shape}`),r.b(p%(n*n)==0,()=>`Dimension size must be evenly divisible by ${n*n} but is ${p} for depthToSpace with input shape ${o.shape}`);const d={x:o},h={blockSize:n,dataFormat:t};return s.a.runKernel(a.P,d,h)}})},368:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var s=t(6),a=t(3),i=t(4),r=t(9);const o=Object(i.b)({depthwiseConv2dNativeBackpropInput_:
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
function(e,n,t,i,o,u=[1,1],c){let p=n,d=!1;3===n.rank&&(d=!0,p=Object(r.a)(n,[1,n.shape[0],n.shape[1],n.shape[2]]));const h={dy:p,filter:t},b={strides:i,pad:o,dimRoundingMode:c,dilations:u,inputShape:e},l=s.a.runKernel(a.S,h,b);return d?Object(r.a)(l,[l.shape[1],l.shape[2],l.shape[3]]):l}})},369:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var s=t(6),a=t(3),i=t(4),r=t(9);const o=Object(i.b)({depthwiseConv2dNativeBackpropFilter_:
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
function(e,n,t,i,o,u=[1,1],c){let p=e;3===e.rank&&(p=Object(r.a)(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let d=n;3===d.rank&&(d=Object(r.a)(n,[1,n.shape[0],n.shape[1],n.shape[2]]));const h={x:p,dy:d},b={strides:i,pad:o,dimRoundingMode:c,dilations:u,filterShape:t};return s.a.runKernel(a.R,h,b)}})},477:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var s=t(6),a=t(3),i=t(2),r=t(5),o=t(4);const u=Object(o.b)({denseBincount_:
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
function(e,n,t,o=!1){const u=Object(i.a)(e,"x","denseBincount"),c=Object(i.a)(n,"weights","denseBincount");r.b("int32"===u.dtype,()=>"Error in denseBincount: input dtype must be int32, but got "+u.dtype),r.b(u.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${u.rank}.`),r.b(t>=0,()=>`size must be non-negative, but got ${t}.`),r.b(c.size===u.size||0===c.size,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${u.shape}, weights shape: `+c.shape+".");const p={x:u,weights:c},d={size:t,binaryOutput:o};return s.a.runKernel(a.O,p,d)}})}}]);