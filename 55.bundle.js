(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{123:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e(6),o=e(3),a=e(2),i=e(5),c=e(37),s=e(4),u=e(9);const h=Object(s.b)({conv2d_:
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
function(t,n,e,s,h="NHWC",p=[1,1],d){const f=Object(a.a)(t,"x","conv2d","float32"),l=Object(a.a)(n,"filter","conv2d","float32");let b=f,m=!1;3===f.rank&&(m=!0,b=Object(u.a)(f,[1,f.shape[0],f.shape[1],f.shape[2]])),i.b(4===b.rank,()=>`Error in conv2d: input must be rank 4, but got rank ${b.rank}.`),i.b(4===l.rank,()=>"Error in conv2d: filter must be rank 4, but got rank "+l.rank+"."),c.a("conv2d",s,d);const g="NHWC"===h?b.shape[3]:b.shape[1];i.b(g===l.shape[2],()=>`Error in conv2d: depth of input (${g}) must match input depth for filter ${l.shape[2]}.`),i.b(c.i(e,p),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${p}'`);const v={x:b,filter:l},k={strides:e,pad:s,dataFormat:h,dilations:p,dimRoundingMode:d},j=r.a.runKernel(o.D,v,k);return m?Object(u.a)(j,[j.shape[1],j.shape[2],j.shape[3]]):j}})},126:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(6),o=e(3),a=e(2),i=e(4);const c=Object(i.b)({clone_:
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
function(t){const n={x:Object(a.a)(t,"x","clone","string_or_numeric")};return r.a.runKernel(o.tb,n)}})},192:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(6),o=e(3),a=e(2),i=e(4);const c=Object(i.b)({cos_:
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
function(t){const n={x:Object(a.a)(t,"x","cos","float32")};return r.a.runKernel(o.J,n)}})},242:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),o=e(3),a=e(5),i=e(37),c=e(4),s=e(9);const u=Object(c.b)({conv2DBackpropInput_:
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
function(t,n,e,c,u,h="NHWC",p){a.b(t.length===n.rank,()=>`Length of inShape (${t.length}) and rank of dy (${n.rank}) must match`);let d=t,f=n,l=!1;3===n.rank&&(l=!0,f=Object(s.a)(n,[1,n.shape[0],n.shape[1],n.shape[2]]),d=[1,t[0],t[1],t[2]]),a.b(4===d.length,()=>"Error in conv2dDerInput: inShape must be length 4, but got length "+d.length+"."),a.b(4===f.rank,()=>"Error in conv2dDerInput: dy must be rank 4, but got rank "+f.rank),a.b(4===e.rank,()=>"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank);const b="NHWC"===h?d[3]:d[1],m="NHWC"===h?f.shape[3]:f.shape[1];a.b(b===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${b}) must match input depth for filter ${e.shape[2]}.`),a.b(m===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${m}) must match output depth for filter ${e.shape[3]}.`),i.a("conv2dDerInput",u,p);const g={dy:f,filter:e},v={strides:c,pad:u,dataFormat:h,dimRoundingMode:p,inputShape:d},k=r.a.runKernel(o.F,g,v);return l?Object(s.a)(k,[k.shape[1],k.shape[2],k.shape[3]]):k}})},244:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),o=e(3),a=e(5),i=e(37),c=e(4),s=e(9);const u=Object(c.b)({conv2DBackpropFilter_:
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
function(t,n,e,c,u,h="NHWC",p){let d=t;3===t.rank&&(d=Object(s.a)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let f=n;3===f.rank&&(f=Object(s.a)(n,[1,n.shape[0],n.shape[1],n.shape[2]])),a.b(4===d.rank,()=>"Error in conv2dDerFilter: input must be rank 4, but got shape "+d.shape+"."),a.b(4===f.rank,()=>"Error in conv2dDerFilter: dy must be rank 4, but got shape "+f.shape+"."),a.b(4===e.length,()=>"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+".");const l="NHWC"===h?d.shape[3]:d.shape[1],b="NHWC"===h?f.shape[3]:f.shape[1];a.b(l===e[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${e[2]}.`),a.b(b===e[3],()=>`Error in conv2dDerFilter: depth of dy (${b}) must match output depth for filter (${e[3]}).`),i.a("conv2dDerFilter",u,p);const m={x:d,dy:f},g={strides:c,pad:u,dataFormat:h,dimRoundingMode:p,filterShape:e};return r.a.runKernel(o.E,m,g)}})},257:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(6),o=e(3),a=e(2),i=e(4);const c=Object(i.b)({cosh_:
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
function(t){const n={x:Object(a.a)(t,"x","cosh","float32")};return r.a.runKernel(o.K,n)}})},287:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(2),o=e(5),a=e(123),i=e(37),c=e(4),s=e(9);const u=Object(c.b)({conv1d_:function(t,n,e,c,u="NWC",h=1,p){const d=Object(r.a)(t,"x","conv1d"),f=Object(r.a)(n,"filter","conv1d");let l=d,b=!1;2===d.rank&&(b=!0,l=Object(s.a)(d,[1,d.shape[0],d.shape[1]])),o.b(3===l.rank,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),o.b(3===f.rank,()=>"Error in conv1d: filter must be rank 3, but got rank "+f.rank+"."),i.a("conv1d",c,p),o.b(l.shape[2]===f.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${f.shape[1]}.`),o.b(i.i(e,h),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${h}'`),o.b("NWC"===u,()=>`Error in conv1d: got dataFormat of ${u} but only NWC is currently supported.`);const m=Object(s.a)(f,[1,f.shape[0],f.shape[1],f.shape[2]]),g=Object(s.a)(l,[l.shape[0],1,l.shape[1],l.shape[2]]),v=[1,e],k=[1,h],j=Object(a.a)(g,m,v,c,"NHWC",k,p);return b?Object(s.a)(j,[j.shape[2],j.shape[3]]):Object(s.a)(j,[j.shape[0],j.shape[2],j.shape[3]])}})},288:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(2),o=e(242),a=e(4);const i=Object(a.b)({conv2dTranspose_:function(t,n,e,a,i,c){const s=Object(r.a)(t,"x","conv2dTranspose"),u=Object(r.a)(n,"filter","conv2dTranspose");return Object(o.a)(e,s,u,a,i,"NHWC",c)}})},363:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(6),o=e(3),a=e(5),i=e(4),c=e(9);const s=Object(i.b)({conv3DBackpropInput_:
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
function(t,n,e,i,s){a.b(t.length===n.rank,()=>`Length of inShape (${t.length}) and rank of dy (${n.rank}) must match`);let u=t,h=n,p=!1;4===n.rank&&(p=!0,h=Object(c.a)(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]),u=[1,t[0],t[1],t[2],t[3]]);const d=u[4],f=h.shape[4];a.b(5===u.length,()=>"Error in conv3dDerInput: inShape must be length 5, but got length "+u.length+"."),a.b(5===h.rank,()=>"Error in conv3dDerInput: dy must be rank 5, but got rank "+h.rank),a.b(5===e.rank,()=>"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank),a.b(d===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${d}) must match input depth for filter ${e.shape[3]}.`),a.b(f===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${f}) must match output depth for filter ${e.shape[4]}.`);const l={dy:h,filter:e},b={pad:s,strides:i,inputShape:u},m=r.a.runKernel(o.I,l,b);return p?Object(c.a)(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}})},37:function(t,n,e){"use strict";e.d(n,"e",(function(){return o})),e.d(n,"f",(function(){return a})),e.d(n,"g",(function(){return i})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return u})),e.d(n,"j",(function(){return l})),e.d(n,"i",(function(){return b})),e.d(n,"h",(function(){return m})),e.d(n,"a",(function(){return g}));var r=e(5);
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
 */function o(t,n,e,r,o="NHWC",a){return c(t,[...n,t[3]],e,a,r,null,null,m(o))}function a(t,n,e,r,o,a,i="channelsLast"){const[s,u]=h(n);let p;if("channelsLast"===i)p=[s,u,t[3],t[3]];else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);p=[s,u,t[1],t[1]]}return c(t,p,e,r,o,a,!1,i)}function i(t,n,e,r,o,a,i="NDHWC"){const[c,u,h]=p(n);let d,f;if("NDHWC"===i)f="channelsLast",d=[c,u,h,t[4],t[4]];else{if("NCDHW"!==i)throw new Error("Unknown dataFormat "+i);f="channelsFirst",d=[c,u,h,t[1],t[1]]}return s(t,d,e,r,o,!1,f,a)}function c(t,n,e,r,o,a,i=!1,c="channelsLast"){let[s,p,l,b]=[-1,-1,-1,-1];if("channelsLast"===c)[s,p,l,b]=t;else{if("channelsFirst"!==c)throw new Error("Unknown dataFormat "+c);[s,b,p,l]=t}const[m,g,,v]=n,[k,j]=h(e),[E,O]=h(r),$=d(m,E),D=d(g,O),{padInfo:w,outHeight:F,outWidth:y}=function(t,n,e,r,o,a,i,c,s){let h,p,d;if("number"==typeof t){h={top:t,bottom:t,left:t,right:t,type:0===t?"VALID":"NUMBER"};const o=function(t,n,e,r,o){null==r&&(r=u(t,n,e));const a=t[0],i=t[1],c=f((a-n+2*r)/e+1,o),s=f((i-n+2*r)/e+1,o);return[c,s]}([n,e],a,r,t,c);p=o[0],d=o[1]}else if("same"===t){p=Math.ceil(n/r),d=Math.ceil(e/o);const t=Math.max(0,(p-1)*r+a-n),c=Math.max(0,(d-1)*o+i-e),s=Math.floor(t/2),u=t-s,f=Math.floor(c/2);h={top:s,bottom:u,left:f,right:c-f,type:"SAME"}}else if("valid"===t)h={top:0,bottom:0,left:0,right:0,type:"VALID"},p=Math.ceil((n-a+1)/r),d=Math.ceil((e-i+1)/o);else{if("object"!=typeof t)throw Error("Unknown padding parameter: "+t);{const u="channelsLast"===s?t[1][0]:t[2][0],l="channelsLast"===s?t[1][1]:t[2][1],b="channelsLast"===s?t[2][0]:t[3][0],m="channelsLast"===s?t[2][1]:t[3][1];h={top:u,bottom:l,left:b,right:m,type:0===u&&0===l&&0===b&&0===m?"VALID":"EXPLICIT"},p=f((n-a+u+l)/r+1,c),d=f((e-i+b+m)/o+1,c)}}return{padInfo:h,outHeight:p,outWidth:d}}(o,p,l,k,j,$,D,a,c),W=i?v*b:v;let H;return"channelsFirst"===c?H=[s,W,F,y]:"channelsLast"===c&&(H=[s,F,y,W]),{batchSize:s,dataFormat:c,inHeight:p,inWidth:l,inChannels:b,outHeight:F,outWidth:y,outChannels:W,padInfo:w,strideHeight:k,strideWidth:j,filterHeight:m,filterWidth:g,effectiveFilterHeight:$,effectiveFilterWidth:D,dilationHeight:E,dilationWidth:O,inShape:t,outShape:H,filterShape:n}}function s(t,n,e,r,o,a=!1,i="channelsLast",c){let[s,h,l,b,m]=[-1,-1,-1,-1,-1];if("channelsLast"===i)[s,h,l,b,m]=t;else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);[s,m,h,l,b]=t}const[g,v,k,,j]=n,[E,O,$]=p(e),[D,w,F]=p(r),y=d(g,D),W=d(v,w),H=d(k,F),{padInfo:M,outDepth:x,outHeight:C,outWidth:I}=function(t,n,e,r,o,a,i,c,s,h,p){let d,l,b,m;if("number"==typeof t){d={top:t,bottom:t,left:t,right:t,front:t,back:t,type:0===t?"VALID":"NUMBER"};const a=function(t,n,e,r,o,a){null==o&&(o=u(t,n,r));const i=t[0],c=t[1],s=t[2],h=f((i-n+2*o)/r+1,a),p=f((c-n+2*o)/r+1,a),d=f((s-n+2*o)/r+1,a);return[h,p,d,e]}([n,e,r,1],c,1,o,t,p);l=a[0],b=a[1],m=a[2]}else if("same"===t){l=Math.ceil(n/o),b=Math.ceil(e/a),m=Math.ceil(r/i);const t=(l-1)*o+c-n,u=(b-1)*a+s-e,p=(m-1)*i+h-r,f=Math.floor(t/2),g=t-f,v=Math.floor(u/2),k=u-v,j=Math.floor(p/2);d={top:v,bottom:k,left:j,right:p-j,front:f,back:g,type:"SAME"}}else{if("valid"!==t)throw Error("Unknown padding parameter: "+t);d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},l=Math.ceil((n-c+1)/o),b=Math.ceil((e-s+1)/a),m=Math.ceil((r-h+1)/i)}return{padInfo:d,outDepth:l,outHeight:b,outWidth:m}}(o,h,l,b,E,O,$,y,W,H,c),N=a?j*m:j;let _;return"channelsFirst"===i?_=[s,N,x,C,I]:"channelsLast"===i&&(_=[s,x,C,I,N]),{batchSize:s,dataFormat:i,inDepth:h,inHeight:l,inWidth:b,inChannels:m,outDepth:x,outHeight:C,outWidth:I,outChannels:N,padInfo:M,strideDepth:E,strideHeight:O,strideWidth:$,filterDepth:g,filterHeight:v,filterWidth:k,effectiveFilterDepth:y,effectiveFilterHeight:W,effectiveFilterWidth:H,dilationDepth:D,dilationHeight:w,dilationWidth:F,inShape:t,outShape:_,filterShape:n}}function u(t,n,e,r=1){const o=d(n,r);return Math.floor((t[0]*(e-1)-e+o)/2)}function h(t){return"number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}function p(t){return"number"==typeof t?[t,t,t]:t}function d(t,n){return n<=1?t:t+(t-1)*(n-1)}function f(t,n){if(!n)return Math.trunc(t);switch(n){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error("Unknown roundingMode "+n)}}function l(t){const[n,e,r]=h(t);return 1===n&&1===e&&1===r}function b(t,n){return l(t)||l(n)}function m(t){if("NHWC"===t)return"channelsLast";if("NCHW"===t)return"channelsFirst";throw new Error("Unknown dataFormat "+t)}function g(t,n,e){if(null!=e){if("string"==typeof n)throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${e} but got pad ${n}.`);if("number"==typeof n)r.b(r.v(n),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${e} but got pad ${n}.`);else{if("object"!=typeof n)throw Error(`Error in ${t}: Unknown padding parameter: ${n}`);n.forEach(n=>{n.forEach(n=>{r.b(r.v(n),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${e} but got pad ${n}.`)})})}}}},424:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),o=e(3),a=e(2),i=e(5),c=e(143),s=e(4);const u=Object(s.b)({clipByValue_:
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
function(t,n,e){const s=Object(a.a)(t,"x","clipByValue");if(i.b(n<=e,()=>`Error in clip: min (${n}) must be less than or equal to max (${e}).`),n===e)return Object(c.a)(s.shape,n,s.dtype);const u={x:s},h={clipValueMin:n,clipValueMax:e};return r.a.runKernel(o.z,u,h)}})},471:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(58),o=e(4);const a=Object(o.b)({concat1d_:function(t){return Object(r.a)(t,0)}})},472:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(58),o=e(4);const a=Object(o.b)({concat2d_:function(t,n){return Object(r.a)(t,n)}})},473:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(58),o=e(4);const a=Object(o.b)({concat3d_:function(t,n){return Object(r.a)(t,n)}})},474:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(58),o=e(4);const a=Object(o.b)({concat4d_:function(t,n){return Object(r.a)(t,n)}})},475:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e(6),o=e(3),a=e(2),i=e(5),c=e(37),s=e(4),u=e(9);const h=Object(s.b)({conv3d_:
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
function(t,n,e,s,h="NDHWC",p=[1,1,1]){const d=Object(a.a)(t,"x","conv3d"),f=Object(a.a)(n,"filter","conv3d");let l=d,b=!1;4===d.rank&&(b=!0,l=Object(u.a)(d,[1,d.shape[0],d.shape[1],d.shape[2],d.shape[3]])),i.b(5===l.rank,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),i.b(5===f.rank,()=>"Error in conv3d: filter must be rank 5, but got rank "+f.rank+"."),i.b(l.shape[4]===f.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${f.shape[3]}.`),i.b(Object(c.i)(e,p),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${p}'`),i.b("NDHWC"===h,()=>`Error in conv3d: got dataFormat of ${h} but only NDHWC is currently supported.`);const m={x:l,filter:f},g={strides:e,pad:s,dataFormat:h,dilations:p},v=r.a.runKernel(o.G,m,g);return b?Object(u.a)(v,[v.shape[1],v.shape[2],v.shape[3],v.shape[4]]):v}})},476:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(2),o=e(363),a=e(4);const i=Object(a.b)({conv3dTranspose_:function(t,n,e,a,i){const c=Object(r.a)(t,"x","conv3dTranspose"),s=Object(r.a)(n,"filter","conv3dTranspose");return Object(o.a)(e,c,s,a,i)}})},530:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a}));var r=e(5);
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
 */function o(t,n){const e=t[0].length;t.forEach((t,n)=>{r.b(t.length===e,()=>`Error in concat${e}D: rank of tensors[${n}] must be the same as the rank of the rest (${e})`)}),r.b(n>=0&&n<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);const o=t[0];t.forEach((t,a)=>{for(let i=0;i<e;i++)r.b(i===n||t[i]===o[i],()=>`Error in concat${e}D: Shape of tensors[${a}] (${t}) does not match the shape of the rest (${o}) along the non-concatenated axis ${a}.`)})}function a(t,n){const e=t[0].slice();for(let r=1;r<t.length;r++)e[n]+=t[r][n];return e}},58:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(6),o=e(3),a=e(2),i=e(5),c=e(126),s=e(4);const u=Object(s.b)({concat_:
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
function(t,n=0){Object(i.b)(t.length>=1,()=>"Pass at least one tensor to concat");const e=Object(a.b)(t,"tensors","concat","string_or_numeric");if("complex64"===e[0].dtype&&e.forEach(t=>{if("complex64"!==t.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${t.dtype}. `)}),1===e.length)return Object(c.a)(e[0]);const s=e,u={axis:n};return r.a.runKernel(o.C,s,u)}})},627:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(6),o=e(3),a=e(5),i=e(4),c=e(9);const s=Object(i.b)({conv3DBackpropFilter_:
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
function(t,n,e,i,s){let u=t;4===t.rank&&(u=Object(c.a)(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]));let h=n;4===h.rank&&(h=Object(c.a)(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]])),a.b(5===u.rank,()=>"Error in conv3dDerFilter: input must be rank 5, but got shape "+u.shape+"."),a.b(5===h.rank,()=>"Error in conv3dDerFilter: dy must be rank 5, but got shape "+h.shape+"."),a.b(5===e.length,()=>"Error in conv3dDerFilter: filterShape must be length 5, but got "+e+"."),a.b(u.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${u.shape[4]}) must match input depth in filter (${e[3]}.`),a.b(h.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${h.shape[4]}) must match output depth for filter (${e[4]}).`);const p={x:u,dy:h},d={strides:i,pad:s,filterShape:e};return r.a.runKernel(o.H,p,d)}})},98:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(6),o=e(3),a=e(2),i=e(5),c=e(4);const s=Object(c.b)({complex_:
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
function(t,n){const e=Object(a.a)(t,"real","complex"),c=Object(a.a)(n,"imag","complex");i.e(e.shape,c.shape,`real and imag shapes, ${e.shape} and ${c.shape}, must match in call to tf.complex().`);const s={real:e,imag:c};return r.a.runKernel(o.A,s)}})}}]);