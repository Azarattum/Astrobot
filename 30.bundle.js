(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{251:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return h}));var a=t(0),s=t(942),r=t(15),o=t(392),i=t(13),c=t(189),u=t(65),d=t(17);
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
function p(e,n){const t=e.length;return t>=3?n?[...e.slice(0,-3),e[t-3]*e[t-2],e[t-1]]:[...e.slice(0,-3),e[t-3],e[t-2]*e[t-1]]:!n&&1===t&&e[0]>1?[e[0],1]:null}function l({x:e,filter:n,convInfo:t,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:l=0,activation:h=null}){const f=e.shape,b=s.texData.get(e.dataId),m=t.inChannels,k=f[0]*f[1]*f[2],g=t.outChannels,I="channelsLast"===t.dataFormat;let x;const O=[];if(null!=o){const e=p(o.shape,I);null!=e&&(o=Object(d.a)({inputs:{x:o},backend:s,attrs:{shape:e}}),O.push(o))}if(null!=r){const e=p(r.shape,I);null!=e&&(r=Object(d.a)({inputs:{x:r},backend:s,attrs:{shape:e}}),O.push(r))}if(!((1===k||1===g)&&m>c.a)&&b.isPacked&&I&&null!=b.texture&&f[2]%2!=0&&a.Hf.arraysEqual(b.shape.slice(-3),f.slice(-3))){const p=f[0]*f[1]*(f[2]+1),m={dataId:e.dataId,shape:[1,p,t.inChannels],dtype:e.dtype},k=b.shape;b.shape=b.shape.slice(),b.shape[b.shape.length-2]++,a.Hf.assert(i.A(b.shape,m.shape),()=>`packed reshape ${b.shape} to ${m.shape} isn't free`);const g=Object(d.a)({inputs:{x:n},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}});O.push(g);const I=Object(c.b)({a:m,b:g,backend:s,transposeA:!1,transposeB:!1,bias:r,activation:h,preluActivationWeights:o,leakyreluAlpha:l}),w=s.texData.get(I.dataId);a.Hf.assert(w.isPacked,()=>"batchMatMul result is expected to be packed"),b.shape=k,w.shape=t.outShape,x=Object(u.a)({inputs:{x:I},backend:s}),x.shape=t.outShape,O.push(I)}else{const a=t.outHeight*t.outWidth,i=Object(d.a)({inputs:{x:e},backend:s,attrs:{shape:I?[t.batchSize,a,t.inChannels]:[t.batchSize,t.inChannels,a]}}),u=Object(d.a)({inputs:{x:n},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}}),p=Object(c.b)({a:I?i:u,b:I?u:i,transposeA:!I,transposeB:!1,backend:s,bias:r,activation:h,preluActivationWeights:o,leakyreluAlpha:l});x=Object(d.a)({inputs:{x:p},backend:s,attrs:{shape:t.outShape}}),O.push(i),O.push(u),O.push(p)}for(const e of O)s.disposeIntermediateTensorInfo(e);return x}function h({x:e,filter:n,convInfo:t,backend:i,bias:c=null,preluActivationWeights:u=null,leakyreluAlpha:l=0,activation:h=null}){const{filterWidth:f,filterHeight:b,inChannels:m,outWidth:k,outHeight:g,dataFormat:I}=t,x="channelsLast"===I,O=f*b*m,w=g*k,v=[t.batchSize,O,w],W=[];if(null!=u){const e=p(u.shape,x);null!=e&&(u=Object(d.a)({inputs:{x:u},backend:i,attrs:{shape:e}}),W.push(u))}if(null!=c){const e=p(c.shape,x);null!=e&&(c=Object(d.a)({inputs:{x:c},backend:i,attrs:{shape:e}}),W.push(c))}const N=Object(d.a)({inputs:{x:n},backend:i,attrs:{shape:[1,O,a.Hf.sizeFromShape(n.shape)/O]}});W.push(N);const j=new s.a(v,t),A=[e.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],S=i.runWebGLProgram(j,[e],"float32",A),y=Object(d.a)({inputs:{x:S},backend:i,attrs:{shape:v}});W.push(S),W.push(y);const C=null!=c,F=null!=u,P="leakyrelu"===h,L=h?Object(r.c)(h,!0):null,H=new o.a(x?y.shape:N.shape,x?N.shape:y.shape,x?[t.batchSize,w,t.outChannels]:[t.batchSize,t.outChannels,w],!0,!1,C,L,F,P),T=x?[y,N]:[N,y];if(c&&T.push(c),F&&T.push(u),P){const e=i.makeTensorInfo([],"float32",a.Hf.createScalarValue(l,"float32"));T.push(e),W.push(e)}const E=i.runWebGLProgram(H,T,"float32"),G=Object(d.a)({inputs:{x:E},backend:i,attrs:{shape:t.outShape}});W.push(E);for(const e of W)i.disposeIntermediateTensorInfo(e);return G}},396:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i}));var a=t(0),s=t(938),r=t(65);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{axis:i}=o,c=a.Hf.parseAxisParam(i,n[0].shape)[0],u=n.map(e=>e.shape);a.Ad.assertParamsConsistent(u,c);const d=a.Ad.computeOutShape(n.map(e=>e.shape),c);if(0===a.Hf.sizeFromShape(d))return t.makeTensorInfo(d,n[0].dtype,[]);const p=n.filter(e=>a.Hf.sizeFromShape(e.shape)>0);return 1===p.length?Object(r.a)({inputs:{x:p[0]},backend:t}):Object(s.a)(p,c,t)}const i={kernelName:a.B,backendName:"webgl",kernelFunc:o}},398:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),s=t(204),r=t(65),o=t(57);
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
function i(e,n,t,i,c,u){const d=n.shape.length,p=a.Ad.getAxesPermutation([i],d);let l=n;null!=p&&(l=Object(o.a)({inputs:{x:n},backend:t,attrs:{perm:p}}));const h=a.Ad.getInnerMostAxes(1,d)[0];if(h!==d-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${n.shape.length-1} but got axis=`+i);const f=l.shape[h];let b=Object(r.a)({inputs:{x:l},backend:t});for(let n=0;n<=Math.ceil(Math.log2(f))-1;n++){const a=new s.b(e,l.shape,!1,u),r=[[n]],o=b;b=t.runWebGLProgram(a,[b],b.dtype,r),t.disposeIntermediateTensorInfo(o)}if(c){const n=new s.b(e,l.shape,c,u),a=b;b=t.runWebGLProgram(n,[b],b.dtype),t.disposeIntermediateTensorInfo(a)}if(null!=p){const e=a.Ad.getUndoAxesPermutation(p),n=Object(o.a)({inputs:{x:b},backend:t,attrs:{perm:e}});return t.disposeIntermediateTensorInfo(b),t.disposeIntermediateTensorInfo(l),n}return b}},930:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(0),s=t(18),r=t(95),o=t(65),i=t(395),c=t(151),u=t(931);const d={kernelName:a.w,backendName:"webgl",kernelFunc:
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
function e(n){const{inputs:t,backend:d,attrs:p}=n,{x:l}=t,{dtype:h}=p;if("complex64"===h){if("complex64"===l.dtype)return Object(o.a)({inputs:{x:l},backend:d});const n=a.Mf(l.shape),t=e({inputs:{x:l},backend:d,attrs:{dtype:"float32"}}),s=Object(r.a)({inputs:{real:t,imag:n},backend:d});return n.dispose(),d.disposeIntermediateTensorInfo(t),s}if("complex64"===l.dtype){const n=Object(c.a)({inputs:{input:l},backend:d}),t=e({inputs:{x:n},backend:d,attrs:{dtype:h}});return d.disposeIntermediateTensorInfo(n),t}if(!a.Hf.hasEncodingLoss(l.dtype,h)){const e=Object(o.a)({inputs:{x:l},backend:d});return{dataId:e.dataId,shape:e.shape,dtype:h}}if(d.shouldExecuteOnCPU([l])){const e=d.texData.get(l.dataId).values,[n,t,a]=Object(s.d)(e,l.shape,l.dtype,h);return d.makeTensorInfo(n,t,a)}if("int32"===h)return Object(u.a)(l,d);if("bool"===h){const e=d.makeTensorInfo([],"bool",a.Hf.getTypedArrayFromDType("bool",1)),n={a:l,b:e},t=Object(i.a)({inputs:n,backend:d});return d.disposeIntermediateTensorInfo(e),t}throw new Error(`Error in Cast: failed to cast ${l.dtype} to ${h}`)}}},932:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),s=t(15),r=t(18);
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
const o="return ceil(x);",i=Object(s.d)({opSnippet:o,packedOpSnippet:o,cpuKernelImpl:r.e}),c={kernelName:a.x,backendName:"webgl",kernelFunc:i}},933:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(935),r=t(934);const o={kernelName:a.y,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:o}=e,{x:i}=n,{clipValueMin:c,clipValueMax:u}=o;let d;d=Object(a.de)().getBool("WEBGL_PACK_CLIP")?new r.a(i.shape):new s.a(i.shape);const p=[[c],[u]];return t.runWebGLProgram(d,[i],i.dtype,p)}}},936:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(937);
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
function r(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}}const o={kernelName:a.A,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t}=e,{x:a}=n,o=t.texData.get(a.dataId),i=new s.a(a.shape),c=[r(a,o.complexTensorInfos.real),r(a,o.complexTensorInfos.imag)];return t.runWebGLProgram(i,c,c[0].dtype)}}},938:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var a=t(0),s=t(940),r=t(939),o=t(18),i=t(38),c=t(84),u=t(95),d=t(187),p=t(151),l=t(17);
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
function h(e,n,t){const f=e[0].dtype;if("complex64"===f){const a=e.map(e=>Object(p.a)({inputs:{input:e},backend:t})),s=e.map(e=>Object(d.a)({inputs:{input:e},backend:t})),r=h(a,n,t),o=h(s,n,t),i=Object(u.a)({inputs:{real:r,imag:o},backend:t});return a.forEach(e=>t.disposeIntermediateTensorInfo(e)),s.forEach(e=>t.disposeIntermediateTensorInfo(e)),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(o),i}let b=t.shouldExecuteOnCPU(e);if("string"===f&&(b=!0),b){const s=e.map(e=>{const s=[-1,a.Hf.sizeFromShape(e.shape.slice(n))];return Object(l.a)({inputs:{x:e},backend:t,attrs:{shape:s}})}),r=s.map(e=>({vals:t.readSync(e.dataId),shape:e.shape})),i=a.Ad.computeOutShape(s.map(e=>e.shape),1),c=1===s[0].shape[0],u=Object(o.f)(r,i,f,c),d=a.Ad.computeOutShape(e.map(e=>e.shape),n),p=t.makeTensorInfo(d,f,u);return s.forEach(e=>t.disposeIntermediateTensorInfo(e)),p}const m=e.filter(e=>a.Hf.sizeFromShape(e.shape)>0),k=Object(a.de)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&m[0].shape.length>1;if(1===m.length){const n=k?new i.i(e[0].shape,i.c):new c.f(e[0].shape,i.c);return t.runWebGLProgram(n,e,f)}const g=Object(a.de)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(m.length>g){const e=[];for(let a=0;a<m.length;a+=g){const s=m.slice(a,a+g);e.push(h(s,n,t))}const a=h(e,n,t);for(const n of e)t.disposeIntermediateTensorInfo(n);return a}if(k){const e=new r.a(m.map(e=>e.shape),n);return t.runWebGLProgram(e,m,f)}const{tensors2D:I,outShape:x}=function(e,n,t){const s=a.Ad.computeOutShape(e.map(e=>e.shape),n);return{tensors2D:e.map(e=>Object(l.a)({inputs:{x:e},attrs:{shape:[-1,a.Hf.sizeFromShape(e.shape.slice(n))]},backend:t})),outShape:s}}(m,n,t),O=new s.a(I.map(e=>e.shape)),w=t.runWebGLProgram(O,I,f);I.forEach(e=>t.disposeIntermediateTensorInfo(e));const v=Object(l.a)({inputs:{x:w},attrs:{shape:x},backend:t});return t.disposeIntermediateTensorInfo(w),v}},941:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),s=t(248),r=t(397),o=t(251),i=t(17);const c={kernelName:a.C,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:c}=e,{x:u,filter:d}=n,{strides:p,pad:l,dataFormat:h,dilations:f,dimRoundingMode:b}=c,m=a.Ad.convertConv2DDataFormat(h),k=a.Ad.computeConv2DInfo(u.shape,d.shape,p,f,l,b,!1,m);let g;if(1!==k.filterHeight||1!==k.filterWidth||1!==k.dilationHeight||1!==k.dilationWidth||1!==k.strideHeight||1!==k.strideWidth||"SAME"!==k.padInfo.type&&"VALID"!==k.padInfo.type)if(k.strideWidth<=2&&"channelsLast"===m&&Object(a.de)().getBool("WEBGL_EXP_CONV")){const e=new r.a(k),n=[[k.padInfo.top,k.padInfo.left],[k.strideHeight,k.strideWidth],[k.dilationHeight,k.dilationWidth],[k.inHeight,k.inWidth]];g=t.runWebGLProgram(e,[u,d],"float32",n)}else if(Object(a.de)().getBool("WEBGL_CONV_IM2COL"))g=Object(o.b)({x:u,filter:d,convInfo:k,backend:t});else{const e=new s.a(k);g=t.runWebGLProgram(e,[u,d],"float32")}else g=Object(o.a)({x:u,filter:d,convInfo:k,backend:t});const I=Object(i.a)({inputs:{x:g},backend:t,attrs:{shape:k.outShape}});return t.disposeIntermediateTensorInfo(g),I}}},943:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(188);const r={kernelName:a.D,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,dy:i}=n,{strides:c,pad:u,dataFormat:d,dimRoundingMode:p,filterShape:l}=r,h=a.Ad.convertConv2DDataFormat(d),f=a.Ad.computeConv2DInfo(o.shape,l,c,1,u,p,!1,h),b=new s.a(f);return t.runWebGLProgram(b,[o,i],"float32")}}},944:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(188);const r={kernelName:a.E,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,filter:i}=n,{inputShape:c,strides:u,pad:d,dataFormat:p,dimRoundingMode:l}=r,h=a.Ad.convertConv2DDataFormat(p),f=a.Ad.computeConv2DInfo(c,i.shape,u,1,d,l,!1,h),b=new s.b(f);return t.runWebGLProgram(b,[o,i],"float32")}}},945:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(248);const r={kernelName:a.F,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,filter:i}=n,{strides:c,pad:u,dilations:d}=r,p=a.Ad.computeConv3DInfo(o.shape,i.shape,c,d,u),l=new s.b(p);return t.runWebGLProgram(l,[o,i],"float32")}}},946:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(188);const r={kernelName:a.G,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,dy:i}=n,{strides:c,pad:u,filterShape:d}=r,p=a.Ad.computeConv3DInfo(o.shape,d,c,1,u),l=new s.c(p);return t.runWebGLProgram(l,[o,i],"float32")}}},947:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(188);const r={kernelName:a.H,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,filter:i}=n,{pad:c,strides:u,inputShape:d}=r,p=a.Ad.computeConv3DInfo(d,i.shape,u,1,c),l=new s.d(p);return t.runWebGLProgram(l,[o,i],"float32")}}},948:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),s=t(15);
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
const r=s.a+"\n  return cos(x);\n",o=Object(s.d)({opSnippet:r}),i={kernelName:a.I,backendName:"webgl",kernelFunc:o}},949:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(15);
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
const r=Object(s.d)({opSnippet:"\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n"}),o={kernelName:a.J,backendName:"webgl",kernelFunc:r}},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}));var a=t(0),s=t(65);
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
function r(e){const{inputs:n,backend:t}=e,{real:a,imag:r}=n,o=t.makeTensorInfo(a.shape,"complex64"),i=t.texData.get(o.dataId),c=Object(s.a)({inputs:{x:a},backend:t}),u=Object(s.a)({inputs:{x:r},backend:t});return i.complexTensorInfos={real:c,imag:u},o}const o={kernelName:a.z,backendName:"webgl",kernelFunc:r}},950:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(951);
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
const r={kernelName:a.K,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:a}=e,{image:r,boxes:o,boxInd:i}=n,{cropSize:c,method:u,extrapolationValue:d}=a,p=new s.a(r.shape,o.shape,c,u,d);return t.runWebGLProgram(p,[r,o,i],"float32")}}},952:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(204),r=t(398);const o={kernelName:a.L,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:o}=n,{axis:i,exclusive:c,reverse:u}=a;return Object(r.a)(s.a.Prod,o,t,i,c,u)}}},953:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(204),r=t(398);const o={kernelName:a.M,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:o}=n,{axis:i,exclusive:c,reverse:u}=a;return Object(r.a)(s.a.Sum,o,t,i,c,u)}}},954:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(18);const r={kernelName:a.O,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:r,weights:o}=n,{size:i,binaryOutput:c}=a;if(1===r.shape.length){const e=t.readSync(r.dataId),n=t.readSync(o.dataId),a=Object(s.b)(e,n,o.dtype,o.shape,i);return t.makeTensorInfo([i],o.dtype,a)}if(2===r.shape.length){const e=t.bufferSync(r),n=t.bufferSync(o),a=Object(s.c)(e,n,i,c);return t.makeTensorInfo(a.shape,o.dtype,a.values)}throw new Error("Error in denseBincount: input must be at most rank 2, but got rank"+r.shape.length+".")}}},955:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(956);const r={kernelName:a.P,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:r}=n,{blockSize:o,dataFormat:i}=a,c=r.shape[0],u=("NHWC"===i?r.shape[1]:r.shape[2])*o,d=("NHWC"===i?r.shape[2]:r.shape[3])*o,p=("NHWC"===i?r.shape[3]:r.shape[1])/(o*o),l="NHWC"===i?[c,u,d,p]:[c,p,u,d],h=new s.a(l,o,i);return t.runWebGLProgram(h,[r],r.dtype)}}},957:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),s=t(400),r=t(399);const o={kernelName:a.Q,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:o}=e,{x:i,filter:c}=n,{strides:u,pad:d,dilations:p,dimRoundingMode:l}=o;let h=p;null==h&&(h=[1,1]),a.Hf.assert(a.Ad.eitherStridesOrDilationsAreOne(u,h),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${h}'`);const f=a.Ad.computeConv2DInfo(i.shape,c.shape,u,h,d,l,!0);let b;b=Object(a.de)().getBool("WEBGL_PACK_DEPTHWISECONV")&&f.strideWidth<=2&&f.outChannels/f.inChannels==1?new r.a(f):new s.a(f);const m=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];return t.runWebGLProgram(b,[i,c],"float32",m)}}},958:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(401);const r={kernelName:a.R,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,dy:i}=n,{strides:c,dilations:u,pad:d,dimRoundingMode:p,filterShape:l}=r,h=a.Ad.computeConv2DInfo(o.shape,l,c,u,d,p,!0),f=new s.a(h);return t.runWebGLProgram(f,[o,i],"float32")}}},959:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),s=t(401);const r={kernelName:a.S,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,filter:i}=n,{strides:c,dilations:u,pad:d,dimRoundingMode:p,inputShape:l}=r,h=a.Ad.computeConv2DInfo(l,i.shape,c,u,d,p,!0),f=new s.b(h);return t.runWebGLProgram(f,[o,i],"float32")}}}}]);