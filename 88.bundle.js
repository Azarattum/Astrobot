(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{115:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(6),s=n(3),a=n(2),c=n(5),i=n(4);const u=Object(i.b)({stack_:
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
function(t,e=0){const n=Object(a.b)(t,"tensors","stack","string_or_numeric");c.b(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&c.b(e<=n[0].rank,()=>"Axis must be <= rank of the tensor");const i=n,u={axis:e};return r.a.runKernel(s.fc,i,u)}})},135:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(6),s=n(3),a=n(2),c=n(4);const i=Object(c.b)({step_:
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
function(t,e=0){const n={x:Object(a.a)(t,"x","step")},c={alpha:e};return r.a.runKernel(s.Xc,n,c)}})},176:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(2),s=n(5),a=n(4),c=n(9);const i=Object(a.b)({squeeze_:
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
function(t,e){const n=Object(r.a)(t,"x","squeeze","string_or_numeric");return Object(c.a)(n,Object(s.Q)(n.shape,e).newShape)}})},227:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(6),s=n(3),a=n(36),c=n(2),i=n(25),u=n(4);const o=Object(u.b)({squaredDifference_:
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
function(t,e){let n=Object(c.a)(t,"a","squaredDifference"),u=Object(c.a)(e,"b","squaredDifference");[n,u]=Object(a.makeTypesMatch)(n,u),Object(i.assertAndGetBroadcastShape)(n.shape,u.shape);const o={a:n,b:u};return r.a.runKernel(s.Wc,o,{})}})},41:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(6),s=n(2),a=n(4);const c=Object(a.b)({square_:
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
function(t){const e=Object(s.a)(t,"x","square");return r.a.runKernel("Square",{x:e},{})}})},436:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(6),s=n(3),a=n(2),c=n(4);const i=Object(c.b)({stridedSlice_:
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
function(t,e,n,c,i=0,u=0,o=0,b=0,f=0){const d={x:Object(a.a)(t,"x","stridedSlice","string_or_numeric")},p={begin:e,end:n,strides:c,beginMask:i,endMask:u,ellipsisMask:o,newAxisMask:b,shrinkAxisMask:f};return r.a.runKernel(s.Yc,d,p)}})},598:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(6),s=n(3),a=n(2),c=n(4);const i=Object(c.b)({stringNGrams_:
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
function(t,e,n,c,i,u,o,b){const f=Object(a.a)(t,"data","stringNGrams","string");if("string"!==f.dtype)throw new Error("Data must be of datatype string");if(1!==f.shape.length)throw new Error("Data must be a vector, saw: "+f.shape);const d=Object(a.a)(e,"dataSplits","stringNGrams");if("int32"!==d.dtype)throw new Error("Data splits must be of datatype int32");const p={separator:n,nGramWidths:c,leftPad:i,rightPad:u,padWidth:o,preserveShortSequences:b},h={data:f,dataSplits:d},l=r.a.runKernel(s.Zc,h,p);return{nGrams:l[0],nGramsSplits:l[1]}}})},599:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(6),s=n(3),a=n(2),c=n(4);const i=Object(c.b)({stringSplit_:
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
function(t,e,n=!0){const c=Object(a.a)(t,"input","stringSplit","string"),i=Object(a.a)(e,"delimiter","stringSplit","string");if(1!==c.rank)throw new Error("Input should be Tensor1D but received shape "+c.shape);if(0!==i.rank)throw new Error("Delimiter should be a scalar but received shape "+i.shape);const u={skipEmpty:n},o={input:c,delimiter:i},b=r.a.runKernel(s.ad,o,u);return{indices:b[0],values:b[1],shape:b[2]}}})},600:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(6),s=n(3),a=n(2),c=n(4);const i=Object(c.b)({stringToHashBucketFast_:
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
function(t,e){const n=Object(a.a)(t,"input","stringToHashBucketFast","string"),c={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const i={input:n};return r.a.runKernel(s.bd,i,c)}})}}]);