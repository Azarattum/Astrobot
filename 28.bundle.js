(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{145:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),a=e(3),s=e(2),o=e(4);const u=Object(o.b)({relu_:
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
function(t){const n={x:Object(s.a)(t,"x","relu")};return r.a.runKernel(a.rc,n)}})},158:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),a=e(3),s=e(2),o=e(4);const u=Object(o.b)({real_:
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
function(t){const n={input:Object(s.a)(t,"input","real")};return r.a.runKernel(a.oc,n)}})},182:function(t,n,e){"use strict";e.d(n,"a",(function(){return MPRandGauss})),e.d(n,"b",(function(){return RandGamma})),e.d(n,"c",(function(){return UniformRandom}));var r=e(153);e(243);
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
class MPRandGauss{constructor(t,n,e,a,s){this.mean=t,this.stdDev=n,this.dtype=e,this.nextVal=NaN,this.truncated=a,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);const o=s||Math.random();this.random=r.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const t=this.nextVal;return this.nextVal=NaN,t}let t,n,e=!1;for(;!e;){let r,a,s;do{r=2*this.random()-1,a=2*this.random()-1,s=r*r+a*a}while(s>=1||0===s);const o=Math.sqrt(-2*Math.log(s)/s);t=this.mean+this.stdDev*r*o,n=this.mean+this.stdDev*a*o,this.truncated&&!this.isValidTruncated(t)||(e=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return null==this.dtype||"float32"===this.dtype?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class RandGamma{constructor(t,n,e,a){this.alpha=t,this.beta=1/n,this.dtype=e;const s=a||Math.random();this.randu=r.alea(s.toString()),this.randn=new MPRandGauss(0,1,e,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,e,r,a,s;for(;;){do{r=this.randn.nextValue(),s=1+this.c*r}while(s<=0);if(s*=s*s,t=r*r,n=1-.331*t*t,e=.5*t+this.d*(1-s+Math.log(s)),a=this.randu(),a<n||Math.log(a)<e)break}return s=1/this.beta*this.d*s,this.alpha<1&&(s*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(s)}convertValue(t){return"float32"===this.dtype?t:Math.round(t)}}class UniformRandom{constructor(t=0,n=1,e,a){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=t,this.range=n-t,this.dtype=e,null==a&&(a=Math.random()),"number"==typeof a&&(a=a.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=r.alea(a)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}},183:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(6),a=e(3);
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
function s(t,n,e=1,s="float32"){if(0===e)throw new Error("Cannot have a step of zero");const o={start:t,stop:n,step:e,dtype:s};return r.a.runKernel(a.nc,{},o)}},225:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),a=e(3),s=e(2),o=e(4);const u=Object(o.b)({prelu_:
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
function(t,n){const e={x:Object(s.a)(t,"x","prelu"),alpha:Object(s.a)(n,"alpha","prelu")};return r.a.runKernel(a.ic,e)}})},226:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),a=e(3),s=e(2),o=e(4);const u=Object(o.b)({relu6_:
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
function(t){const n={x:Object(s.a)(t,"x","relu6")};return r.a.runKernel(a.sc,n)}})},280:function(t,n,e){"use strict";
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
function r(t,n=!1){console.log(t.toString(n))}e.d(n,"a",(function(){return r}))},300:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e(2),a=e(5),s=e(213),o=e(168),u=e(37),c=e(222),i=e(4),l=e(9),d=e(175);const h=Object(i.b)({pool_:
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
function(t,n,e,i,h,f,b){null==h&&(h=[1,1]),null==f&&(f=1),0===i&&(i="valid");const p=Object(r.a)(t,"x","maxPool");let O=p,g=!1;3===p.rank&&(g=!0,O=Object(l.a)(p,[1,p.shape[0],p.shape[1],p.shape[2]])),a.b(u.i(f,h),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${f} and dilations '${h}'`);const m=u.f(O.shape,n,f,h,i),j=[m.dilationHeight,m.dilationWidth];let v;v="same"===i?function(t,n){const e=t.map((t,e)=>t+(t-1)*(n[e]-1)).map(t=>t-1),r=e.map(t=>Math.floor(t/2)),a=e.map((t,n)=>t-r[n]);return e.map((t,n)=>[r[n],a[n]])}([m.filterHeight,m.filterWidth],j):[[0,0],[0,0]];const _=1===j[0]&&1===j[1],[T,w]=function(t,n,e){const r=e.map(t=>t[0]),a=e.map(t=>t[1]),s=t.concat(r,a),o=n.map((t,n)=>(t-s[n]%t)%t),u=a.map((t,n)=>t+o[n]),c=n.map((t,n)=>[r[n],u[n]]),i=n.map((t,n)=>[0,o[n]]);return[c,i]}([m.inHeight,m.inWidth],j,v),S=_?i:"valid",R=_?O:Object(d.a)(O,j,T),V=("avg"===e?()=>Object(s.a)(R,n,f,S,b):()=>Object(c.a)(R,n,f,S,b))(),x=_?V:Object(o.a)(V,j,w);return g?Object(l.a)(x,[x.shape[1],x.shape[2],x.shape[3]]):x}})},301:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(6),a=e(3),s=e(2),o=e(19),u=e(4);const c=Object(u.b)({prod_:
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
function(t,n=null,e=!1){let u=Object(s.a)(t,"x","prod");"bool"===u.dtype&&(u=Object(o.a)(u,"int32"));const c={x:u},i={axis:n,keepDims:e};return r.a.runKernel(a.jc,c,i)}})},302:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(5),a=e(87),s=e(4),o=e(182);const u=Object(s.b)({randomNormal_:
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
function(t,n=0,e=1,s,u){if(Object(r.c)(t),null!=s&&"bool"===s)throw new Error("Unsupported data type "+s);const c=new o.a(n,e,s,!1,u),i=Object(a.a)(t,s);for(let t=0;t<i.values.length;t++)i.values[t]=c.nextValue();return i.toTensor()}})},303:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(5),a=e(87),s=e(4),o=e(182);const u=Object(s.b)({randomUniform_:
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
function(t,n=0,e=1,s="float32",u){Object(r.c)(t);const c=Object(a.a)(t,s),i=new o.c(n,e,null,u);for(let t=0;t<c.values.length;t++)c.values[t]=i.nextValue();return c.toTensor()}})},311:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return s}));var r=e(5);
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
 */const a=30;function s(t){return t<=a?t:Object(r.G)(t,Math.floor(Math.sqrt(t)))}},433:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),a=e(3),s=e(2),o=e(4);const u=Object(o.b)({reciprocal_:
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
function(t){const n={x:Object(s.a)(t,"x","reciprocal")};return r.a.runKernel(a.qc,n)}})},493:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),a=e(3),s=e(2),o=e(4);const u=Object(o.b)({raggedGather_:
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
function(t,n,e,o){const u={paramsNestedSplits:t.map((t,n)=>Object(s.a)(t,"tensors"+n,"raggedGather","int32")),paramsDenseValues:Object(s.a)(n,"paramsDenseValues","raggedGather"),indices:Object(s.a)(e,"indices","raggedGather","int32")},c={outputRaggedRank:o},i=r.a.runKernel(a.kc,u,c);return{outputNestedSplits:i.slice(0,i.length-1),outputDenseValues:i[i.length-1]}}})},494:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),a=e(3),s=e(2),o=e(4);const u=Object(o.b)({raggedRange_:
/**
 * @license
 * Copyright 2022 Google LLC.
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
function(t,n,e){const o=Object(s.a)(t,"starts","raggedRange"),u={starts:o,limits:Object(s.a)(n,"limits","raggedRange",o.dtype),deltas:Object(s.a)(e,"deltas","raggedRange",o.dtype)},c=r.a.runKernel(a.lc,u);return{rtNestedSplits:c[0],rtDenseValues:c[1]}}})},495:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),a=e(3),s=e(2),o=e(4);const u=Object(o.b)({raggedTensorToTensor_:
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
function(t,n,e,o,u){const c=Object(s.a)(t,"shape","raggedTensorToTensor","int32"),i=Object(s.a)(n,"values","raggedTensorToTensor"),l={shape:c,values:i,defaultValue:Object(s.a)(e,"defaultValue","raggedTensorToTensor",i.dtype),rowPartitionTensors:o.map((t,n)=>Object(s.a)(t,"tensors"+n,"raggedTensorToTensor","int32"))},d={rowPartitionTypes:u};return r.a.runKernel(a.mc,l,d)}})},496:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(6),a=e(5),s=e(4);const o=Object(s.b)({rand_:
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
function(t,n,e){Object(a.c)(t);const s=Object(a.O)(t);let o=null;if(null==e||"float32"===e)o=new Float32Array(s);else if("int32"===e)o=new Int32Array(s);else{if("bool"!==e)throw new Error("Unknown data type "+e);o=new Uint8Array(s)}for(let t=0;t<s;t++)o[t]=n();return r.a.makeTensor(o,t,e)}})},497:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(5),a=e(87),s=e(4),o=e(182);const u=Object(s.b)({randomGamma_:
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
function(t,n,e=1,s="float32",u){if(Object(r.c)(t),null==e&&(e=1),null==s&&(s="float32"),"float32"!==s&&"int32"!==s)throw new Error("Unsupported data type "+s);const c=new o.b(n,e,s,u),i=Object(a.a)(t,s);for(let t=0;t<i.values.length;t++)i.values[t]=c.nextValue();return i.toTensor()}})},498:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(4),a=e(302);const s=Object(r.b)({randomStandardNormal_:
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
function(t,n,e){if(null!=n&&"bool"===n)throw new Error("Unsupported data type "+n);return Object(a.a)(t,0,1,n,e)}})},499:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(2),a=e(5),s=e(4),o=e(88);const u=Object(s.b)({reverse1d_:
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
function(t){const n=Object(r.a)(t,"x","reverse");return a.b(1===n.rank,()=>`Error in reverse1D: x must be rank 1 but got rank ${n.rank}.`),Object(o.a)(n,0)}})},500:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(2),a=e(5),s=e(4),o=e(88);const u=Object(s.b)({reverse2d_:
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
function(t,n){const e=Object(r.a)(t,"x","reverse");return a.b(2===e.rank,()=>`Error in reverse2D: x must be rank 2 but got rank ${e.rank}.`),Object(o.a)(e,n)}})},501:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(2),a=e(5),s=e(4),o=e(88);const u=Object(s.b)({reverse3d_:
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
function(t,n){const e=Object(r.a)(t,"x","reverse");return a.b(3===e.rank,()=>`Error in reverse3D: x must be rank 3 but got rank ${e.rank}.`),Object(o.a)(e,n)}})},502:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(2),a=e(5),s=e(4),o=e(88);const u=Object(s.b)({reverse4d_:
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
function(t,n){const e=Object(r.a)(t,"x","reverse");return a.b(4===e.rank,()=>`Error in reverse4D: x must be rank 4 but got rank ${e.rank}.`),Object(o.a)(e,n)}})},531:function(t,n,e){"use strict";
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
var r;function a(t,n,e){let r=new Array;if(null==e&&null==n)return r;if(null==n)for(;r.length<t+e.length;)r.push(-1);else r=n.slice();if(null==e)return r;if(t+e.length!==r.length)throw new Error(`rt input.shape and shape=${n} are incompatible: rt input.rank = ${t+e.length}, but shape.rank = ${r.length}`);for(let a=1;a<e.length;++a){const s=e[a],o=r[r.length-e.length+a],u=r[o];if(s>=0)if(u>=0){if(u!==s)throw new Error(`rt input.shape and shape=${n} are incompatible: rt input.shape[${a+t}] = ${s} but shape[${a+t}] = ${u}`)}else r[o]=s}return r}function s(t){const n={FIRST_DIM_SIZE:r.FIRST_DIM_SIZE,VALUE_ROWIDS:r.VALUE_ROWIDS,ROW_LENGTHS:r.ROW_LENGTHS,ROW_SPLITS:r.ROW_SPLITS,ROW_LIMITS:r.ROW_LIMITS,ROW_STARTS:r.ROW_STARTS},e=[];for(const r of t){if(!(r in n))break;e.push(n[r])}return e}function o(t){return 0===t.length?0:t[0]===r.FIRST_DIM_SIZE?t.length-1:t.length}function u(t,n){if(null==t||null==n)return;const e=t.length,r=n.length;if(e>=r)throw new Error(`defaultValue.shape=${t} and ragged tensor flatValues.shape=${n}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${r})`);for(let a=0;a<Math.min(e,r-1);++a){const e=t[a],r=n[a+1];if(e>=0&&r>=0&&1!==e&&e!==r)throw new Error(`defaultValue.shape=${t}, and ragged tensor input flatValues.shape=${n} are incompatible: defaultValue.shape[${a-t.length}] = ${e} but ragged tensor input.flatValues.shape[${a-t.length}] = ${r}`)}}e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return a})),e.d(n,"d",(function(){return s})),e.d(n,"c",(function(){return o})),e.d(n,"e",(function(){return u})),function(t){t[t.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",t[t.VALUE_ROWIDS=1]="VALUE_ROWIDS",t[t.ROW_LENGTHS=2]="ROW_LENGTHS",t[t.ROW_SPLITS=3]="ROW_SPLITS",t[t.ROW_LIMITS=4]="ROW_LIMITS",t[t.ROW_STARTS=5]="ROW_STARTS"}(r||(r={}))},532:function(t,n,e){"use strict";
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
function r(t,n,e){return[e*("number"==typeof t?t:t[0]),n*("number"==typeof t?t:t[1])]}e.d(n,"a",(function(){return r}))},88:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),a=e(3),s=e(2),o=e(4);const u=Object(o.b)({reverse_:
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
function(t,n){const e={x:Object(s.a)(t,"x","reverse")},o={dims:n};return r.a.runKernel(a.yc,e,o)}})},9:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),a=e(3),s=e(2),o=e(4);const u=Object(o.b)({reshape_:
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
function(t,n){const e={x:Object(s.a)(t,"x","reshape","string_or_numeric")},o={shape:n};return r.a.runKernel(a.tc,e,o)}})},99:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(6),a=e(3),s=e(36),o=e(2),u=e(4);const c=Object(u.b)({pow_:
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
function(t,n){let e=Object(o.a)(t,"base","pow"),u=Object(o.a)(n,"exp","pow");[e,u]=Object(s.makeTypesMatch)(e,u);const c={a:e,b:u};return r.a.runKernel(a.hc,c)}})}}]);