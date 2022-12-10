(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{143:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(6),r=n(3),s=n(5);
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
function o(e,t,n){Object(s.c)(e);const o={shape:e,value:t,dtype:n};return a.a.runKernel(r.gb,{},o)}},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(6),r=n(3),s=n(2),o=n(4);const i=Object(o.b)({gather_:
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
function(e,t,n=0,o=0){const i={x:Object(s.a)(e,"x","gather"),indices:Object(s.a)(t,"indices","gather","int32")},c={axis:n,batchDims:o};return a.a.runKernel(r.pb,i,c)}})},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(6),r=n(3),s=n(2),o=n(4);const i=Object(o.b)({floor_:
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
function(e){const t={x:Object(s.a)(e,"x","floor","float32")};return a.a.runKernel(r.ib,t)}})},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(6),r=n(3),s=n(36),o=n(2),i=n(4);const c=Object(i.b)({floorDiv_:
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
function(e,t){let n=Object(o.a)(e,"a","floorDiv"),i=Object(o.a)(t,"b","floorDiv");[n,i]=Object(s.makeTypesMatch)(n,i);const c={a:n,b:i};return a.a.runKernel(r.jb,c)}})},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(5);function r(e,t){const n=e.shape.length,r=t.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if("int32"!==t.dtype)throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(0===Object(a.O)(e.shape))throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const s=t.shape,o=s[s.length-1];let i=1;for(let e=0;e<s.length-1;++e)i*=s[e];const c=e.shape,u=s.slice();u.pop();let h=1;for(let e=o;e<n;++e)h*=c[e],u.push(c[e]);const l=[...Object(a.j)(e.shape).map(e=>e/h),1].slice(0,o);return[u,i,h,l]}},518:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(6),r=n(3),s=n(2),o=n(4);const i=Object(o.b)({gatherND_:
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
function(e,t){const n=Object(s.a)(t,"indices","gatherND","int32"),o={params:Object(s.a)(e,"x","gatherND","string_or_numeric"),indices:n};return a.a.runKernel(r.ob,o)}})},521:function(e,t,n){"use strict";n.r(t);var a=n(522);n.d(t,"conv2d",(function(){return a.a}));var r=n(523);n.d(t,"depthwiseConv2d",(function(){return r.a}));var s=n(524);n.d(t,"matMul",(function(){return s.a}))},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(6),r=n(68),s=n(3),o=n(36),i=n(2),c=n(5),u=n(22),h=n(25),l=n(123),d=n(244),p=n(242),b=n(37),f=n(82),j=n(4),O=n(9);const v=Object(j.b)({fusedConv2d_:
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
function({x:e,filter:t,strides:n,pad:j,dataFormat:v="NHWC",dilations:g=[1,1],dimRoundingMode:m,bias:k,activation:w="linear",preluActivationWeights:$,leakyreluAlpha:E}){if(w=w||"linear",!1===Object(f.d)(a.a.state.gradientDepth,w)){c.b("NHWC"===v,()=>`Error in fused conv2d: got dataFormat of ${v} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let a=Object(l.a)(e,t,n,j,v,g,m);return null!=k&&(a=Object(u.a)(a,k)),Object(f.a)(a,w,$,E)}const y=Object(i.a)(e,"x","conv2d","float32"),C=Object(i.a)(t,"filter","conv2d","float32");let A=y,D=!1;3===y.rank&&(D=!0,A=Object(O.a)(y,[1,y.shape[0],y.shape[1],y.shape[2]])),c.b(4===A.rank,()=>"Error in fused conv2d: input must be rank 4, but got rank "+A.rank+"."),c.b(4===C.rank,()=>"Error in fused conv2d: filter must be rank 4, but got rank "+C.rank+"."),b.a("fused conv2d",j,m);const x="NHWC"===v?A.shape[3]:A.shape[1];c.b(C.shape[2]===x,()=>`Error in conv2d: depth of input (${x}) must match input depth for filter ${C.shape[2]}.`),c.b(b.i(n,g),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${g}'`);const M=b.b(A.shape,C.shape,n,g,j,m);let N,W;if(null!=k&&(N=Object(i.a)(k,"bias","fused conv2d"),[N]=Object(o.makeTypesMatch)(N,y),"NHWC"===v?h.assertAndGetBroadcastShape(M.outShape,N.shape):(c.b(N.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${N.shape.length}.`),c.b(0===N.shape.length||N.shape[0]===M.outChannels||1===N.shape[0],()=>`Error in fused conv2d: bias shape (${N.shape}) is not compatible with the number of output channels (${M.outChannels})`))),null!=$){const e=$.shape;if(c.b(e.length<=1||3===e.length,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`),1===e.length)c.b(1===e[0]||e[0]===M.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${M.outChannels}).`);else if(3===e.length)try{h.assertAndGetBroadcastShape(e,M.outShape)}catch(t){const n=`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${M.outShape}).`;throw Error(n)}W=Object(i.a)($,"prelu weights","fused conv2d")}const F=(e,t)=>{c.b("NHWC"===v,()=>`Error in gradient of fused conv2D: got dataFormat of ${v} but only NHWC is currently supported.`);const[a,r,s,o]=t,i=Object(f.c)(e,s,w);c.b(b.j(g),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${g}'`);const u=[Object(p.a)(r.shape,i,a,n,j),Object(d.a)(r,i,a.shape,n,j)];if(null!=o){const e=Object(f.b)(o,i);u.push(e)}return u},K={x:A,filter:C,bias:N,preluActivationWeights:W},G={strides:n,pad:j,dataFormat:v,dilations:g,dimRoundingMode:m,activation:w,leakyreluAlpha:E};if(null==k){return Object(r.a)((e,t,n)=>{let r=a.a.runKernel(s.mb,K,G);return n([t,e,r]),D&&(r=Object(O.a)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:F}})(A,C)}return Object(r.a)((e,t,n,r)=>{let o=a.a.runKernel(s.mb,K,G);return r([t,e,o,n]),D&&(o=Object(O.a)(o,[o.shape[1],o.shape[2],o.shape[3]])),{value:o,gradFunc:F}})(A,C,N)}})},523:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(6),r=n(68),s=n(3),o=n(36),i=n(2),c=n(5),u=n(22),h=n(25),l=n(37),d=n(169),p=n(369),b=n(368),f=n(82),j=n(4),O=n(9);const v=Object(j.b)({fusedDepthwiseConv2d_:
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
function({x:e,filter:t,strides:n,pad:j,dataFormat:v="NHWC",dilations:g=[1,1],dimRoundingMode:m,bias:k,activation:w="linear",preluActivationWeights:$,leakyreluAlpha:E}){if(!1===Object(f.d)(a.a.state.gradientDepth,w)){let a=Object(d.a)(e,t,n,j,v,g,m);return null!=k&&(a=Object(u.a)(a,k)),Object(f.a)(a,w,$,E)}const y=Object(i.a)(e,"x","depthwiseConv2d","float32"),C=Object(i.a)(t,"filter","depthwiseConv2d","float32");let A=y,D=!1;3===y.rank&&(D=!0,A=Object(O.a)(y,[1,y.shape[0],y.shape[1],y.shape[2]])),c.b(4===A.rank,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${A.rank}.`),c.b(4===C.rank,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${C.rank}.`),c.b(A.shape[3]===C.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${A.shape[3]}) must match the inChannels dimension in filter ${C.shape[2]}.`),null==g&&(g=[1,1]),c.b(l.i(n,g),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${g}'`),l.a("fused depthwiseConv2d",j,m);const x=l.b(A.shape,C.shape,n,g,j,m,!0);let M,N;null!=k&&(M=Object(i.a)(k,"bias","fused conv2d"),[M]=Object(o.makeTypesMatch)(M,y),h.assertAndGetBroadcastShape(x.outShape,M.shape)),null!=$&&(N=Object(i.a)($,"prelu weights","fused depthwiseConv2d"));const W=(e,t)=>{c.b(l.j(g),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${g}'`);const[a,r,s,o]=t,i=Object(f.c)(e,s,w),u=Object(b.a)(r.shape,i,a,n,j,g,m),h=Object(p.a)(r,i,a.shape,n,j,g,m);if(null!=o){return[u,h,Object(f.b)(M,i)]}return[u,h]},F={x:A,filter:C,bias:M,preluActivationWeights:N},K={strides:n,pad:j,dataFormat:v,dilations:g,dimRoundingMode:m,activation:w,leakyreluAlpha:E};if(null==k){return Object(r.a)((e,t,n)=>{let r=a.a.runKernel(s.nb,F,K);return n([t,e,r]),D&&(r=Object(O.a)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:W}})(A,C)}return Object(r.a)((e,t,n,r)=>{let o=a.a.runKernel(s.nb,F,K);return r([t,e,o,n]),D&&(o=Object(O.a)(o,[o.shape[1],o.shape[2],o.shape[3]])),{value:o,gradFunc:W}})(A,C,M)}})},524:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(6),r=n(68),s=n(3),o=n(36),i=n(2),c=n(5),u=n(22),h=n(25),l=n(82),d=n(43),p=n(4),b=n(9);const f=Object(p.b)({fusedMatMul_:
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
function({a:e,b:t,transposeA:n=!1,transposeB:p=!1,bias:f,activation:j="linear",preluActivationWeights:O,leakyreluAlpha:v=.2}){if(!1===Object(l.d)(a.a.state.gradientDepth,j)){let a=Object(d.a)(e,t,n,p);return null!=f&&(a=Object(u.a)(a,f)),Object(l.a)(a,j,O,v)}let g=Object(i.a)(e,"a","fused matMul"),m=Object(i.a)(t,"b","fused matMul");[g,m]=Object(o.makeTypesMatch)(g,m);const k=n?g.shape[g.rank-2]:g.shape[g.rank-1],w=p?m.shape[m.rank-1]:m.shape[m.rank-2],$=n?g.shape[g.rank-1]:g.shape[g.rank-2],E=p?m.shape[m.rank-2]:m.shape[m.rank-1],y=g.shape.slice(0,-2),C=m.shape.slice(0,-2),A=c.O(y),D=c.O(C);c.b(k===w,()=>`Error in fused matMul: inner shapes (${k}) and (${w}) of Tensors with shapes ${g.shape} and ${m.shape} and transposeA=${n} and transposeB=${p} must match.`);const x=h.assertAndGetBroadcastShape(g.shape.slice(0,-2),m.shape.slice(0,-2)).concat([$,E]),M=n?Object(b.a)(g,[A,k,$]):Object(b.a)(g,[A,$,k]),N=p?Object(b.a)(m,[D,E,w]):Object(b.a)(m,[D,w,E]);let W,F;null!=f&&(W=Object(i.a)(f,"bias","fused matMul"),[W]=Object(o.makeTypesMatch)(W,g),h.assertAndGetBroadcastShape(x,W.shape)),null!=O&&(F=Object(i.a)(O,"prelu weights","fused matMul"));const K=(e,t)=>{const[a,r,s,o]=t,i=Object(l.c)(Object(b.a)(e,s.shape),s,j);let c,u;if(n||p?!n&&p?(c=Object(d.a)(i,r,!1,!1),u=Object(d.a)(i,a,!0,!1)):n&&!p?(c=Object(d.a)(r,i,!1,!0),u=Object(d.a)(a,i,!1,!1)):(c=Object(d.a)(r,i,!0,!0),u=Object(d.a)(i,a,!0,!0)):(c=Object(d.a)(i,r,!1,!0),u=Object(d.a)(a,i,!0,!1)),null!=f){return[c,u,Object(l.b)(o,i)]}return[c,u]},G={a:M,b:N,bias:W,preluActivationWeights:F},H={transposeA:n,transposeB:p,activation:j,leakyreluAlpha:v};if(null==f){return Object(r.a)((e,t,n)=>{const r=a.a.runKernel(s.od,G,H);return n([e,t,r]),{value:Object(b.a)(r,x),gradFunc:K}})(M,N)}return Object(r.a)((e,t,n,r)=>{const o=a.a.runKernel(s.od,G,H);return r([e,t,o,n]),{value:Object(b.a)(o,x),gradFunc:K}})(M,N,W)}})},82:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return O}));var a=n(25),r=n(216),s=n(217),o=n(10),i=n(225),c=n(145),u=n(226),h=n(9),l=n(118),d=n(135),p=n(28);
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
function b(e,t,n){if(null==n||"linear"===n)return e;if("relu"===n)return Object(o.a)(e,Object(d.a)(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function f(e,t){let n=t;const r=a.getReductionAxes(e.shape,t.shape);return r.length>0&&(n=Object(p.a)(n,r)),Object(h.a)(n,e.shape)}function j(e,t,n,a){if("linear"===t)return e;if("relu"===t)return Object(c.a)(e);if("elu"===t)return Object(r.a)(e);if("relu6"===t)return Object(u.a)(e);if("prelu"===t)return Object(i.a)(e,n);if("leakyrelu"===t)return Object(s.a)(e,a);if("sigmoid"===t)return Object(l.a)(e);throw new Error(`Unknown fused activation ${t}.`)}const O=(e,t)=>!(e>0)||"linear"===t}}]);