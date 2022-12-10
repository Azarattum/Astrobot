(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{141:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i}));var r=e(576);
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
 */function o(t,n,e,r,o){return a(t,n,e,r,o,0)}function u(t,n,e,r,o,u){return a(t,n,e,r,o,0,!1,u,!0)}function i(t,n,e,r,o,u){return a(t,n,e,r,o,u,!0)}function a(t,n,e,o,u,i,a=!1,f=!1,l=!1){const p=[];for(let t=0;t<n.length;t++)n[t]>u&&p.push({score:n[t],boxIndex:t,suppressBeginIndex:0});p.sort(d);const h=i>0?-.5/i:0,g=[],m=[];for(;g.length<e&&p.length>0;){const n=p.pop(),{score:e,boxIndex:i,suppressBeginIndex:a}=n;if(e<u)break;let f=!1;for(let e=g.length-1;e>=a;--e){const r=s(t,i,g[e]);if(r>=o){f=!0;break}if(n.score=n.score*c(o,h,r),n.score<=u)break}n.suppressBeginIndex=g.length,f||(n.score===e?(g.push(i),m.push(n.score)):n.score>u&&Object(r.a)(p,n,d))}const x=g.length,S=e-x;f&&S>0&&(g.push(...new Array(S).fill(0)),m.push(...new Array(S).fill(0)));const b={selectedIndices:g};return a&&(b.selectedScores=m),l&&(b.validOutputs=x),b}function s(t,n,e){const r=t.subarray(4*n,4*n+4),o=t.subarray(4*e,4*e+4),u=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),a=Math.max(r[0],r[2]),s=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),d=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),l=Math.max(o[1],o[3]),p=(a-u)*(s-i),h=(f-c)*(l-d);if(p<=0||h<=0)return 0;const g=Math.max(u,c),m=Math.max(i,d),x=Math.min(a,f),S=Math.min(s,l),b=Math.max(x-g,0)*Math.max(S-m,0);return b/(p+h-b)}function c(t,n,e){const r=Math.exp(n*e*e);return e<=t?r:0}function d(t,n){return t.score-n.score||t.score===n.score&&n.boxIndex-t.boxIndex}},254:function(t,n,e){"use strict";e.d(n,"a",(function(){return DataStorage})),e.d(n,"b",(function(){return KernelBackend}));class DataStorage{constructor(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,n){this.dataIdsCount++,this.data.set(t,n)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class KernelBackend{refCount(t){return r("refCount")}incRef(t){return r("incRef")}timerAvailable(){return!0}time(t){return r("time")}read(t){return r("read")}readSync(t){return r("readSync")}readToGPU(t,n){return r("readToGPU")}numDataIds(){return r("numDataIds")}disposeData(t,n){return r("disposeData")}write(t,n,e){return r("write")}move(t,n,e,o,u){return r("move")}createTensorFromTexture(t,n,e){return r("createTensorFromTexture")}memory(){return r("memory")}floatPrecision(){return r("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return r("dispose")}}function r(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}},310:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(87);
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
 */function o(t,n){const e=[];for(let t=0;t<n.length;t++)n[t]&&e.push(t);const o=Object(r.a)(t,"int32"),u=Object(r.a)([e.length,t.length],"int32");for(let n=0;n<e.length;n++){const r=o.indexToLoc(e[n]),i=n*t.length;u.values.set(r,i)}return u.toTensor()}},529:function(t,n,e){"use strict";e.r(n),e.d(n,"fromUint8ToStringArray",(function(){return O})),e.d(n,"fromStringArrayToUint8",(function(){return R}));var r=e(11),o=e(72);e.d(n,"axesAreInnerMostDims",(function(){return o.b})),e.d(n,"combineLocations",(function(){return o.c})),e.d(n,"computeOutAndReduceShapes",(function(){return o.d})),e.d(n,"expandShapeToKeepDim",(function(){return o.e})),e.d(n,"assertAxesAreInnerMostDims",(function(){return o.a})),e.d(n,"getAxesPermutation",(function(){return o.f})),e.d(n,"getUndoAxesPermutation",(function(){return o.h})),e.d(n,"getInnerMostAxes",(function(){return o.g}));var u=e(25);e.d(n,"getBroadcastDims",(function(){return u.getBroadcastDims})),e.d(n,"getReductionAxes",(function(){return u.getReductionAxes})),e.d(n,"assertAndGetBroadcastShape",(function(){return u.assertAndGetBroadcastShape}));var i=e(530);e.d(n,"assertParamsConsistent",(function(){return i.a})),e.d(n,"computeOutShape",(function(){return i.b}));var a=e(37);e.d(n,"computeDilation2DInfo",(function(){return a.e})),e.d(n,"computePool2DInfo",(function(){return a.f})),e.d(n,"computePool3DInfo",(function(){return a.g})),e.d(n,"computeConv2DInfo",(function(){return a.b})),e.d(n,"computeConv3DInfo",(function(){return a.c})),e.d(n,"computeDefaultPad",(function(){return a.d})),e.d(n,"tupleValuesAreOne",(function(){return a.j})),e.d(n,"eitherStridesOrDilationsAreOne",(function(){return a.i})),e.d(n,"convertConv2DDataFormat",(function(){return a.h})),e.d(n,"checkPadOnDimRoundingMode",(function(){return a.a}));var s=e(82);e.d(n,"getFusedDyActivation",(function(){return s.c})),e.d(n,"getFusedBiasGradient",(function(){return s.b})),e.d(n,"applyActivation",(function(){return s.a})),e.d(n,"shouldFuse",(function(){return s.d}));var c=e(531);e.d(n,"RowPartitionType",(function(){return c.a})),e.d(n,"combineRaggedTensorToTensorShapes",(function(){return c.b})),e.d(n,"getRowPartitionTypesHelper",(function(){return c.d})),e.d(n,"getRaggedRank",(function(){return c.c})),e.d(n,"validateDefaultValueShape",(function(){return c.e}));var d=e(311);e.d(n,"PARALLELIZE_THRESHOLD",(function(){return d.a})),e.d(n,"computeOptimalWindowSize",(function(){return d.b}));var f=e(212);e.d(n,"slice_util",(function(){return f}));var l=e(165);e.d(n,"upcastType",(function(){return l.b}));var p=e(532);e.d(n,"getImageCenter",(function(){return p.a}));var h=e(533);e.d(n,"getReshaped",(function(){return h.b})),e.d(n,"getPermuted",(function(){return h.a})),e.d(n,"getReshapedPermuted",(function(){return h.c})),e.d(n,"getSliceBeginCoords",(function(){return h.d})),e.d(n,"getSliceSize",(function(){return h.e}));var g=e(276);e.d(n,"prepareAndValidate",(function(){return g.a}));var m=e(211);e.d(n,"validateUpdateShape",(function(){return m.c})),e.d(n,"validateInput",(function(){return m.b})),e.d(n,"calculateShapes",(function(){return m.a}));var x=e(265);e.d(n,"SELU_SCALEALPHA",(function(){return x.b})),e.d(n,"SELU_SCALE",(function(){return x.a}));var S=e(534);e.d(n,"ERF_P",(function(){return S.f})),e.d(n,"ERF_A1",(function(){return S.a})),e.d(n,"ERF_A2",(function(){return S.b})),e.d(n,"ERF_A3",(function(){return S.c})),e.d(n,"ERF_A4",(function(){return S.d})),e.d(n,"ERF_A5",(function(){return S.e}));var b=e(138);e.d(n,"warn",(function(){return b.b})),e.d(n,"log",(function(){return b.a}));var v=e(535);e.d(n,"mergeRealAndImagArrays",(function(){return v.g})),e.d(n,"splitRealAndImagArrays",(function(){return v.h})),e.d(n,"complexWithEvenIndex",(function(){return v.b})),e.d(n,"complexWithOddIndex",(function(){return v.c})),e.d(n,"getComplexWithIndex",(function(){return v.f})),e.d(n,"assignToTypedArray",(function(){return v.a})),e.d(n,"exponents",(function(){return v.e})),e.d(n,"exponent",(function(){return v.d}));var w=e(536);e.d(n,"decodeEinsumEquation",(function(){return w.b})),e.d(n,"getEinsumPermutation",(function(){return w.d})),e.d(n,"checkEinsumDimSizes",(function(){return w.a})),e.d(n,"getEinsumComputePath",(function(){return w.c})),e.d(n,"isIdentityPermutation",(function(){return w.e}));var M=e(537);e.d(n,"prepareSplitSize",(function(){return M.a}));var y=e(538);e.d(n,"getSparseFillEmptyRowsIndicesDenseShapeMismatch",(function(){return y.a})),e.d(n,"getSparseFillEmptyRowsNegativeIndexErrorMessage",(function(){return y.b})),e.d(n,"getSparseFillEmptyRowsOutOfRangeIndexErrorMessage",(function(){return y.c}));var A=e(539);e.d(n,"getSparseReshapeMultipleNegativeOneOutputDimErrorMessage",(function(){return A.d})),e.d(n,"getSparseReshapeNegativeOutputDimErrorMessage",(function(){return A.e})),e.d(n,"getSparseReshapeEmptyTensorZeroOutputDimErrorMessage",(function(){return A.a})),e.d(n,"getSparseReshapeInputOutputMultipleErrorMessage",(function(){return A.c})),e.d(n,"getSparseReshapeInputOutputMismatchErrorMessage",(function(){return A.b}));var I=e(540);e.d(n,"getSparseSegmentReductionNegativeSegmentIdsErrorMessage",(function(){return I.b})),e.d(n,"getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage",(function(){return I.c})),e.d(n,"getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage",(function(){return I.d})),e.d(n,"getSparseSegmentReductionIndicesOutOfRangeErrorMessage",(function(){return I.a}));var E=e(541);
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
function O(t){try{return t.map(t=>Object(r.decodeString)(t))}catch(t){throw new Error("Failed to decode encoded string bytes into utf-8, error: "+t)}}function R(t){return t.map(t=>Object(r.encodeString)(t))}e.d(n,"segment_util",(function(){return E}))},535:function(t,n,e){"use strict";
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
function r(t,n){if(t.length!==n.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${n.length}.`);const e=new Float32Array(2*t.length);for(let r=0;r<e.length;r+=2)e[r]=t[r/2],e[r+1]=n[r/2];return e}function o(t){const n=new Float32Array(t.length/2),e=new Float32Array(t.length/2);for(let r=0;r<t.length;r+=2)n[r/2]=t[r],e[r/2]=t[r+1];return{real:n,imag:e}}function u(t){const n=Math.ceil(t.length/4),e=new Float32Array(n),r=new Float32Array(n);for(let n=0;n<t.length;n+=4)e[Math.floor(n/4)]=t[n],r[Math.floor(n/4)]=t[n+1];return{real:e,imag:r}}function i(t){const n=Math.floor(t.length/4),e=new Float32Array(n),r=new Float32Array(n);for(let n=2;n<t.length;n+=4)e[Math.floor(n/4)]=t[n],r[Math.floor(n/4)]=t[n+1];return{real:e,imag:r}}function a(t,n){return{real:t[2*n],imag:t[2*n+1]}}function s(t,n,e,r){t[2*r]=n,t[2*r+1]=e}function c(t,n){const e=new Float32Array(t/2),r=new Float32Array(t/2);for(let o=0;o<Math.ceil(t/2);o++){const u=(n?2:-2)*Math.PI*(o/t);e[o]=Math.cos(u),r[o]=Math.sin(u)}return{real:e,imag:r}}function d(t,n,e){const r=(e?2:-2)*Math.PI*(t/n);return{real:Math.cos(r),imag:Math.sin(r)}}e.d(n,"g",(function(){return r})),e.d(n,"h",(function(){return o})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"f",(function(){return a})),e.d(n,"a",(function(){return s})),e.d(n,"e",(function(){return c})),e.d(n,"d",(function(){return d}))},536:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"e",(function(){return c}));var r=e(5);
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
 */const o=/->/g;function u(t,n){const e=((t=t.replace(/\s/g,"")).length-t.replace(o,"").length)/"->".length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error('Equation must contain exactly one arrow ("->").');const[u,i]=t.split("->");Object(r.b)(-1===u.indexOf("..."),()=>'The ellipsis notation ("...") is not supported yet.');const a=u.split(","),s=a.length;if(n!==s)throw new Error(`Expected ${s} input tensors, received ${n}`);if(s>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const c=[];for(let t=0;t<i.length;++t){const n=i[t];if(!a.some(t=>-1!==t.indexOf(n)))throw new Error(`Output subscripts contain the label ${n} not present in the input subscripts.`);-1===c.indexOf(n)&&c.push(n)}for(let t=0;t<u.length;++t){const n=u[t];-1===c.indexOf(n)&&","!==n&&c.push(n)}const d=new Array(a.length);for(let t=0;t<s;++t){if(new Set(a[t].split("")).size!==a[t].length)throw new Error(`Found duplicate axes in input component ${a[t]}. Support for duplicate axes in input is not implemented yet.`);d[t]=[];for(let n=0;n<a[t].length;++n)d[t].push(c.indexOf(a[t][n]))}const f=c.length,l=[];for(let t=i.length;t<f;++t)l.push(t);return{allDims:c,summedDims:l,idDims:d}}function i(t,n){let e=new Array(t);e.fill(-1);for(let t=0;t<n.length;++t)e[n[t]]=t;const r=[];for(let n=0;n<t;++n)-1===e[n]&&r.push(n);return e=e.filter(t=>-1!==t),{permutationIndices:e,expandDims:r}}function a(t,n,e){const o=new Array(t);for(let t=0;t<e.length;++t){const u=e[t].shape;for(let e=0;e<n[t].length;++e)void 0===o[n[t][e]]?o[n[t][e]]=u[e]:Object(r.b)(o[n[t][e]]===u[e],()=>`Expected dimension ${o[n[t][e]]} at axis ${e} of input shaped ${JSON.stringify(u)}, but got dimension `+u[e])}}function s(t,n){const e=t,r=[];let o=0;0===t.length&&e.push(-1),o=t.length+1;for(let t=0;t<o;++t)r.push([]);const u=[];for(let t=0;t<e.length;++t){const o=d(n,e[t]);for(const n of o)-1===u.indexOf(n)&&(r[t].push(n),u.push(n))}return{path:e,steps:r}}function c(t){return t.every((t,n)=>t===n)}function d(t,n){const e=[];for(let r=0;r<t.length;++r)0!==t[r].length&&-1===t[r].indexOf(n)&&-1!==n||e.push(r);return e}},542:function(t,n,e){"use strict";e.r(n);var r=e(141);e.d(n,"nonMaxSuppressionV3Impl",(function(){return r.a})),e.d(n,"nonMaxSuppressionV4Impl",(function(){return r.b})),e.d(n,"nonMaxSuppressionV5Impl",(function(){return r.c}));var o=e(310);e.d(n,"whereImpl",(function(){return o.a}))},576:function(t,n,e){"use strict";
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
function r(t,n,e){const r=function(t,n,e){return function(t,n,e){let r=0,o=t.length,u=0,i=!1;for(;r<o;){u=r+(o-r>>>1);const a=e(n,t[u]);a>0?r=u+1:(o=u,i=!a)}return i?r:-r-1}(t,n,e||o)}(t,n,e),u=r<0?-(r+1):r;t.splice(u,0,n)}function o(t,n){return t>n?1:t<n?-1:0}e.d(n,"a",(function(){return r}))}}]);