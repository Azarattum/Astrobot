(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{212:function(n,e,t){"use strict";t.r(e),t.d(e,"assertParamsValid",(function(){return s})),t.d(e,"maskToAxes",(function(){return r})),t.d(e,"computeOutShape",(function(){return a})),t.d(e,"stridesWithElidedDims",(function(){return o})),t.d(e,"getNormalizedAxes",(function(){return u})),t.d(e,"startIndicesWithElidedDims",(function(){return d})),t.d(e,"stopIndicesWithElidedDims",(function(){return f})),t.d(e,"stridesForAxis",(function(){return h})),t.d(e,"startForAxis",(function(){return b})),t.d(e,"stopForAxis",(function(){return p})),t.d(e,"isSliceContinous",(function(){return g})),t.d(e,"computeFlatOffset",(function(){return k})),t.d(e,"parseSliceParams",(function(){return m})),t.d(e,"sliceInfo",(function(){return A}));var i=t(5);
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
 */function s(n,e,t){const s=n.shape.length;i.b(s===e.length,()=>`Error in slice${s}D: Length of begin ${e} must match the rank of the array (${s}).`),i.b(s===t.length,()=>`Error in slice${s}D: Length of size ${t} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)i.b(e[r]+t[r]<=n.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${e[r]+t[r]}) would overflow input.shape[${r}] (${n.shape[r]})`)}function r(n){const e=[];let t=0;for(;n>0;)1&n&&e.push(t),n/=2,t++;return e}function a(n,e,t){const i=[];for(let s=0;s<n.length;s++)i[s]=Math.ceil((e[s]-n[s])/t[s]);return i}function o(n,e,t,i){const s=[...n];for(let n=s.length;n<i.length;n++)s.push(1);for(let n=0;n<t;n++)0===n?s[e]=1:(s.splice(e,0,1),s.pop());return s}function c(n,e,t){return t<=n?t:t-(e-1)}function l(n,e){const t=[];for(let i=0;i<n;i++)t.push(e+i);return t}function u(n,e,t,i,s,r,a,c,l){const u=n.length;let g=new Array(u),k=new Array(u),m=new Array(u);if(e.length&&t>0){const l=e[0],u=t+1;g=d(a,l,u,i,n),k=f(c,l,u,s,n),m=o(r,l,u,n)}else for(let e=0;e<u;e++)g[e]=b(a,i,r,n,e,l),k[e]=p(c,s,r,n,e,l),m[e]=h(r,e,l);return{begin:g,end:k,strides:m}}function d(n,e,t,i,s){const r=[...s],a=l(t,e);for(let s=0;s<r.length;s++)if(a.indexOf(s)>-1)r[s]=0;else{const a=c(e,t,s);let o=i[a];n&1<<a&&(o=0),r[s]=o}return r}function f(n,e,t,s,r){const a=[...r],o=l(t,e);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=Number.MAX_SAFE_INTEGER;else{const r=c(e,t,i);let o=s[r];n&1<<r&&(o=Number.MAX_SAFE_INTEGER),a[i]=o}for(let n=0;n<a.length;n++){const e=r[n];a[n]<0&&(a[n]+=e),a[n]=i.i(0,a[n],r[n])}return a}function h(n,e,t){let i=n[e];return(t&1<<e||null==i)&&(i=1),i}function b(n,e,t,s,r,a){let o=e[r];const c=t[r]||1;(n&1<<r||a&1<<r||null==o)&&(o=c>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);const l=s[r];return o<0&&(o+=l),o=i.i(0,o,l-1),o}function p(n,e,t,s,r,a){let o=e[r];const c=t[r]||1;(n&1<<r||a&1<<r||null==o)&&(o=c>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);const l=s[r];return o<0&&(o+=l),o=c>0?i.i(0,o,l):i.i(-1,o,l-1),o}function g(n,e,t){let i=t.length;for(let n=0;n<t.length;n++)if(t[n]>1){i=n;break}for(let s=i+1;s<t.length;s++)if(e[s]>0||t[s]!==n[s])return!1;return!0}function k(n,e){let t=n.length>0?n[n.length-1]:1;for(let i=0;i<n.length-1;i++)t+=n[i]*e[i];return t}function m(n,e,t){let s;const r=n.shape.length;let a;return s="number"==typeof e?[e,...new Array(r-1).fill(0)]:e.length<r?e.concat(new Array(r-e.length).fill(0)):e.slice(),s.forEach(n=>{i.b(-1!==n,()=>"slice() does not support negative begin indexing.")}),a=null==t?new Array(r).fill(-1):"number"==typeof t?[t,...new Array(r-1).fill(-1)]:t.length<r?t.concat(new Array(r-t.length).fill(-1)):t,a=a.map((e,t)=>e>=0?e:(i.b(-1===e,()=>`Negative size values should be exactly -1 but got ${e} for the slice() size at index ${t}.`),n.shape[t]-s[t])),[s,a]}function A(n,e,t,i,s,r,a,o,c){let l;if(null==i?(l=new Array(e.length),l.fill(1)):l=i,null!=a&&0!=(a&a-1))throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const d={dims:l.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:t.slice(),strides:l.slice(),beginMask:s,endMask:r,ellipsisMask:a,newAxisMask:o,shrinkAxisMask:c};for(let n=0;n<d.dims;n++)u&&0!=(1<<n&o)&&d.numAddAxisAfterEllipsis++,1<<n&a&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);const f={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};!function(n,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let t=0;e.beginValid=null!=n.begin,e.endValid=null!=n.end,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let i=0;i<n.dims;i++)if(1<<i&n.ellipsisMask){const s=Math.min(e.dims-(n.dims-i)+1+n.numAddAxisAfterEllipsis,e.dims);for(;t<s;t++)e.begin[t]=0,e.end[t]=0,e.strides[t]=1,e.beginMask|=1<<t,e.endMask|=1<<t,e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[t]=i}else if(1<<i&n.newAxisMask)e.finalShapeGatherIndices.push(-2),e.finalShapeGatherIndicesSparse.push(-1);else{if(t===e.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${e.dims} dims, ${e.begin.length}.`);null!=n.begin&&(e.begin[t]=n.begin[i]),null!=n.end&&(e.end[t]=n.end[i]),e.strides[t]=n.strides[i],n.beginMask&1<<i&&(e.beginMask|=1<<t),n.endMask&1<<i&&(e.endMask|=1<<t),n.shrinkAxisMask&1<<i?(e.finalShapeGatherIndices.push(-1),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<t):(e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(i)),e.inputShapeGatherIndicesSparse[t]=i,t++}}(d,f);let h=!0,b=!0,p=!0;const g=[],k=[];for(let e=0;e<n.length;++e){if(0===f.strides[e])throw Error(`strides[${e}] must be non-zero`);const t=!!(f.shrinkAxisMask&1<<e),i=n[e];if(-1===i){g.push(t?1:-1);continue}const s=[f.beginMask&1<<e,f.endMask&1<<e],r=[f.strides[e]>0?0:-1,f.strides[e]>0?i:i-1];if(t&&f.strides[e]<=0)throw Error("only stride 1 allowed on non-range indexing.");p=p&&1===f.strides[e];const a=!!(f.beginMask&1<<e&&f.endMask&1<<e);if(f.beginValid&&f.endValid){if(t){const n=f.begin[e]<0?i+f.begin[e]:f.begin[e];if(f.begin[e]=n,f.end[e]=f.begin[e]+1,n<0||n>=i)throw Error(`slice index ${f.begin[e]} of dimension ${e} out of bounds.`)}else f.begin[e]=x(f.begin[e],0,f.strides[e],i,s,r),f.end[e]=x(f.end[e],1,f.strides[e],i,s,r);const n=1===f.strides[e]&&0===f.begin[e]&&f.end[e]===i;h=h&&n,b=b&&(0===e&&1===f.strides[e]||n)}else h=h&&1===f.strides[e]&&a,b=b&&(0===e&&1===f.strides[e]||a);let o,c=!1;if(f.beginValid&&f.endValid?(o=f.end[e]-f.begin[e],c=!0):t?(o=1,c=!0):a&&i>=0&&(o=f.strides[e]<0?-i:i,c=!0),c){let n;n=0===o||o<0!=f.strides[e]<0?0:Math.trunc(o/f.strides[e])+(o%f.strides[e]!=0?1:0),g.push(n)}else g.push(-1)}for(let n=0;n<f.finalShapeGatherIndices.length;++n){const e=f.finalShapeGatherIndices[n];e>=0?k.push(g[e]):-2===e&&k.push(1)}return{finalShapeSparse:k.filter((n,e)=>-2!==f.finalShapeGatherIndices[e]),finalShape:k,isIdentity:h,sliceDim0:b,isSimpleSlice:p,begin:f.begin,end:f.end,strides:f.strides}}function x(n,e,t,i,s,r){if(s[e])return t>0?r[e]:r[e+1&1];{const e=n<0?i+n:n;return e<r[0]?r[0]:e>r[1]?r[1]:e}}},259:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var i=t(6),s=t(3),r=t(2),a=t(4);const o=Object(a.b)({softplus_:
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
function(n){const e={x:Object(r.a)(n,"x","softplus")};return i.a.runKernel(s.Mc,e)}})},262:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var i=t(6),s=t(3),r=t(2),a=t(4);const o=Object(a.b)({sin_:
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
function(n){const e={x:Object(r.a)(n,"x","sin","float32")};return i.a.runKernel(s.Ic,e)}})},263:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var i=t(6),s=t(3),r=t(2),a=t(4);const o=Object(a.b)({sinh_:
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
function(n){const e={x:Object(r.a)(n,"x","sinh")};return i.a.runKernel(s.Jc,e)}})},435:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var i=t(6),s=t(3),r=t(2),a=t(4);const o=Object(a.b)({softmax_:
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
function(n,e=-1){const t=Object(r.a)(n,"logits","softmax","float32");if(-1===e&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and dim was ${e}`);const a={logits:t},o={dim:e};return i.a.runKernel(s.Lc,a,o)}})},44:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var i=t(6),s=t(3),r=t(2),a=t(4);const o=Object(a.b)({slice_:
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
function(n,e,t){const a=Object(r.a)(n,"x","slice","string_or_numeric");if(0===a.rank)throw new Error("Slicing scalar is not possible");const o={x:a},c={begin:e,size:t};return i.a.runKernel(s.Kc,o,c)}})},504:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var i=t(2),s=t(5),r=t(4),a=t(44);const o=Object(r.b)({slice1d_:
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
function(n,e,t){const r=Object(i.a)(n,"x","slice1d");return s.b(1===r.rank,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),Object(a.a)(r,[e],[t])}})},505:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var i=t(2),s=t(5),r=t(4),a=t(44);const o=Object(r.b)({slice2d_:
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
function(n,e,t){const r=Object(i.a)(n,"x","slice2d");return s.b(2===r.rank,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),Object(a.a)(r,e,t)}})},506:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var i=t(2),s=t(5),r=t(4),a=t(44);const o=Object(r.b)({slice3d_:
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
function(n,e,t){const r=Object(i.a)(n,"x","slice3d");return s.b(3===r.rank,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),Object(a.a)(r,e,t)}})},507:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var i=t(2),s=t(5),r=t(4),a=t(44);const o=Object(r.b)({slice4d_:
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
function(n,e,t){const r=Object(i.a)(n,"x","slice4d");return s.b(4===r.rank,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),Object(a.a)(r,e,t)}})}}]);