(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(e,t,c){"use strict";c.d(t,"d",(function(){return n})),c.d(t,"e",(function(){return r})),c.d(t,"f",(function(){return a})),c.d(t,"b",(function(){return d})),c.d(t,"g",(function(){return o})),c.d(t,"c",(function(){return u})),c.d(t,"a",(function(){return b}));var s=c(0);
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
 */function n(e,t,c,n,a){const d=t.inputParams[e];if(d&&void 0!==d.inputIndexStart){const e=d.inputIndexStart,i=0===d.inputIndexEnd?void 0:void 0===d.inputIndexEnd?e+1:d.inputIndexEnd;if("tensor"===d.type)return r(t.inputNames[d.inputIndexStart],c,n,a);if("tensors"===d.type){return t.inputNames.slice(e,i).map(e=>r(e,c,n,a))}const o=r(t.inputNames.slice(e)[0],c,n,a),u=o.dataSync();return"number"===d.type?u[0]:s.Hf.toNestedArray(o.shape,u)}const i=t.attrParams[e];return i&&i.value}function r(e,t,c,s){const[n,r]=o(e);if(null!=s){const e=s.getHashTableHandleByName(n);if(null!=e)return e}const a=c.currentContextIds.find(e=>!!t[i(n,e)]);return void 0!==a?t[i(n,a)][r]:void 0}function a(e,t,c){return t[i(e,c.currentContextId)]}function d(e,t){const[c,s,n]=o(e);return[i(c,t&&t.currentContextId),s,n]}function i(e,t){return t?`${e}-${t}`:e}function o(e){const t=e.split(":");if(1===t.length)return[e,0,void 0];const c=t[0],s=3===t.length?t[1]:void 0;return[c,Number(t[t.length-1]),s]}function u(e,t,c){let s=n("pad",e,t,c);if("explicit"===s){s=n("explicitPaddings",e,t,c);const r=[[0,0],[0,0],[0,0],[0,0]];for(let e=0;e<4;e++)r[e][0]=s[2*e],r[e][1]=s[2*e+1];return r}return s}function b(e){return e.kept?e:Object(s.Kd)(e)}},749:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(53),n=c(1);
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
const r=(e,t,c,r=s)=>{switch(e.op){case"RaggedGather":{const{outputNestedSplits:s,outputDenseValues:a}=r.raggedGather(Object(n.d)("paramsNestedSplits",e,t,c),Object(n.d)("paramsDenseValues",e,t,c),Object(n.d)("indices",e,t,c),Object(n.d)("outputRaggedRank",e,t,c));return s.concat(a)}case"RaggedRange":{const{rtNestedSplits:s,rtDenseValues:a}=r.raggedRange(Object(n.d)("starts",e,t,c),Object(n.d)("limits",e,t,c),Object(n.d)("splits",e,t,c));return[s,a]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(Object(n.d)("shape",e,t,c),Object(n.d)("values",e,t,c),Object(n.d)("defaultValue",e,t,c),Object(n.d)("rowPartitionTensors",e,t,c),Object(n.d)("rowPartitionTypes",e,t,c))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}},750:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(53),n=c(1);
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
const r=(e,t,c,r=s)=>{switch(e.op){case"Max":{const s=Object(n.d)("axis",e,t,c),a=Object(n.d)("keepDims",e,t,c);return[r.max(Object(n.d)("x",e,t,c),s,a)]}case"Mean":{const s=Object(n.d)("axis",e,t,c),a=Object(n.d)("keepDims",e,t,c);return[r.mean(Object(n.d)("x",e,t,c),s,a)]}case"Min":{const s=Object(n.d)("axis",e,t,c),a=Object(n.d)("keepDims",e,t,c);return[r.min(Object(n.d)("x",e,t,c),s,a)]}case"Sum":{const s=Object(n.d)("axis",e,t,c),a=Object(n.d)("keepDims",e,t,c);return[r.sum(Object(n.d)("x",e,t,c),s,a)]}case"All":{const s=Object(n.d)("axis",e,t,c),a=Object(n.d)("keepDims",e,t,c);return[r.all(Object(n.d)("x",e,t,c),s,a)]}case"Any":{const s=Object(n.d)("axis",e,t,c),a=Object(n.d)("keepDims",e,t,c);return[r.any(Object(n.d)("x",e,t,c),s,a)]}case"ArgMax":{const s=Object(n.d)("axis",e,t,c);return[r.argMax(Object(n.d)("x",e,t,c),s)]}case"ArgMin":{const s=Object(n.d)("axis",e,t,c);return[r.argMin(Object(n.d)("x",e,t,c),s)]}case"Prod":{const s=Object(n.d)("axis",e,t,c),a=Object(n.d)("keepDims",e,t,c);return[r.prod(Object(n.d)("x",e,t,c),s,a)]}case"Cumprod":{const s=Object(n.d)("axis",e,t,c),a=Object(n.d)("exclusive",e,t,c),d=Object(n.d)("reverse",e,t,c);return[r.cumprod(Object(n.d)("x",e,t,c),s,a,d)]}case"Cumsum":{const s=Object(n.d)("axis",e,t,c),a=Object(n.d)("exclusive",e,t,c),d=Object(n.d)("reverse",e,t,c);return[r.cumsum(Object(n.d)("x",e,t,c),s,a,d)]}case"Bincount":const s=Object(n.d)("x",e,t,c),a=Object(n.d)("weights",e,t,c),d=Object(n.d)("size",e,t,c);return[r.bincount(s,a,d)];case"DenseBincount":{const s=Object(n.d)("x",e,t,c),a=Object(n.d)("weights",e,t,c),d=Object(n.d)("size",e,t,c),i=Object(n.d)("binaryOutput",e,t,c);return[r.denseBincount(s,a,d,i)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}},751:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var s=c(0),n=c(53),r=c(1);
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
const a=(e,t,c,a=n)=>{switch(e.op){case"ConcatV2":case"Concat":{const s=Object(r.d)("n",e,t,c),n=Object(r.d)("axis",e,t,c);let d=Object(r.d)("tensors",e,t,c);return d=d.slice(0,s),[a.concat(d,n)]}case"Gather":{const s=Object(r.d)("x",e,t,c),n=Object(r.d)("indices",e,t,c);return[a.gather(s,a.cast(n,"int32"),0)]}case"GatherV2":{const s=Object(r.d)("axis",e,t,c),n=Object(r.d)("batchDims",e,t,c),d=Object(r.d)("x",e,t,c),i=Object(r.d)("indices",e,t,c);return[a.gather(d,a.cast(i,"int32"),s,n)]}case"Reverse":{const s=Object(r.d)("dims",e,t,c),n=[];for(let e=0;e<s.length;e++)s[e]&&n.push(e);const d=Object(r.d)("x",e,t,c);return[a.reverse(d,n)]}case"ReverseV2":{const s=Object(r.d)("axis",e,t,c),n=Object(r.d)("x",e,t,c);return[a.reverse(n,s)]}case"Slice":{const s=Object(r.d)("begin",e,t,c),n=Object(r.d)("size",e,t,c);return[a.slice(Object(r.d)("x",e,t,c),s,n)]}case"StridedSlice":{const s=Object(r.d)("begin",e,t,c),n=Object(r.d)("end",e,t,c),d=Object(r.d)("strides",e,t,c),i=Object(r.d)("beginMask",e,t,c),o=Object(r.d)("endMask",e,t,c),u=Object(r.d)("ellipsisMask",e,t,c),b=Object(r.d)("newAxisMask",e,t,c),p=Object(r.d)("shrinkAxisMask",e,t,c),O=Object(r.d)("x",e,t,c);return[a.stridedSlice(O,s,n,d,i,o,u,b,p)]}case"Pack":return Object(s.Af)(()=>{const n=Object(r.d)("axis",e,t,c),d=Object(r.d)("tensors",e,t,c),i=d[0].shape,o=a.squeeze(d[0]).shape,u=d.map(e=>{const t=s.Hf.arraysEqual(e.shape,i);if(!t&&!s.Hf.arraysEqual(a.squeeze(e).shape,o))throw new Error("the input tensors shape does not match");return t?e:a.reshape(e,i)});return[a.stack(u,n)]});case"Unpack":{const s=Object(r.d)("axis",e,t,c),n=Object(r.d)("tensor",e,t,c);return a.unstack(n,s)}case"Tile":{const s=Object(r.d)("reps",e,t,c);return[a.tile(Object(r.d)("x",e,t,c),s)]}case"Split":case"SplitV":{const s=Object(r.d)("axis",e,t,c),n=Object(r.d)("numOrSizeSplits",e,t,c),d=Object(r.d)("x",e,t,c);return a.split(d,n,s)}case"ScatterNd":{const s=Object(r.d)("indices",e,t,c),n=Object(r.d)("values",e,t,c),d=Object(r.d)("shape",e,t,c);return[a.scatterND(s,n,d)]}case"GatherNd":{const s=Object(r.d)("x",e,t,c),n=Object(r.d)("indices",e,t,c);return[a.gatherND(s,n)]}case"SparseToDense":{const s=Object(r.d)("sparseIndices",e,t,c),n=Object(r.d)("outputShape",e,t,c),d=Object(r.d)("sparseValues",e,t,c),i=Object(r.d)("defaultValue",e,t,c);return[a.sparseToDense(s,d,n,d.dtype===i.dtype?i:a.cast(i,d.dtype))]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}},752:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(53),n=c(1);
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
const r=(e,t,c,r=s)=>{switch(e.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:a,emptyRowIndicator:d,reverseIndexMap:i}=r.sparse.sparseFillEmptyRows(Object(n.d)("indices",e,t,c),Object(n.d)("values",e,t,c),Object(n.d)("denseShape",e,t,c),Object(n.d)("defaultValue",e,t,c));return[s,a,d,i]}case"SparseReshape":{const{outputIndices:s,outputShape:a}=r.sparse.sparseReshape(Object(n.d)("inputIndices",e,t,c),Object(n.d)("inputShape",e,t,c),Object(n.d)("newShape",e,t,c));return[s,a]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(Object(n.d)("data",e,t,c),Object(n.d)("indices",e,t,c),Object(n.d)("segmentIds",e,t,c))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(Object(n.d)("data",e,t,c),Object(n.d)("indices",e,t,c),Object(n.d)("segmentIds",e,t,c))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}},753:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(53),n=c(1);
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
const r=(e,t,c,r=s)=>{switch(e.op){case"FFT":return[r.fft(Object(n.d)("x",e,t,c))];case"IFFT":return[r.ifft(Object(n.d)("x",e,t,c))];case"RFFT":return[r.rfft(Object(n.d)("x",e,t,c))];case"IRFFT":return[r.irfft(Object(n.d)("x",e,t,c))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}},754:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(53),n=c(1);
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
const r=(e,t,c,r=s)=>{switch(e.op){case"StringNGrams":{const{nGrams:s,nGramsSplits:a}=r.string.stringNGrams(Object(n.d)("data",e,t,c),Object(n.d)("dataSplits",e,t,c),Object(n.d)("separator",e,t,c),Object(n.d)("nGramWidths",e,t,c),Object(n.d)("leftPad",e,t,c),Object(n.d)("rightPad",e,t,c),Object(n.d)("padWidth",e,t,c),Object(n.d)("preserveShortSequences",e,t,c));return[s,a]}case"StringSplit":{const{indices:s,values:a,shape:d}=r.string.stringSplit(Object(n.d)("input",e,t,c),Object(n.d)("delimiter",e,t,c),Object(n.d)("skipEmpty",e,t,c));return[s,a,d]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(Object(n.d)("input",e,t,c),Object(n.d)("numBuckets",e,t,c))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}},755:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(53),n=c(1);
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
const r=(e,t,c,r=s)=>{switch(e.op){case"Cast":return[r.cast(Object(n.d)("x",e,t,c),Object(n.d)("dtype",e,t,c))];case"ExpandDims":{const s=Object(n.d)("axis",e,t,c);return[r.expandDims(Object(n.d)("x",e,t,c),s)]}case"Squeeze":{const s=Object(n.d)("axis",e,t,c);return[r.squeeze(Object(n.d)("x",e,t,c),s)]}case"Reshape":return[r.reshape(Object(n.d)("x",e,t,c),Object(n.d)("shape",e,t,c))];case"MirrorPad":return[r.mirrorPad(Object(n.d)("x",e,t,c),Object(n.d)("padding",e,t,c),Object(n.d)("mode",e,t,c))];case"PadV2":case"Pad":return[r.pad(Object(n.d)("x",e,t,c),Object(n.d)("padding",e,t,c),Object(n.d)("constantValue",e,t,c))];case"SpaceToBatchND":{const s=Object(n.d)("blockShape",e,t,c),a=Object(n.d)("paddings",e,t,c);return[r.spaceToBatchND(Object(n.d)("x",e,t,c),s,a)]}case"BatchToSpaceND":{const s=Object(n.d)("blockShape",e,t,c),a=Object(n.d)("crops",e,t,c);return[r.batchToSpaceND(Object(n.d)("x",e,t,c),s,a)]}case"DepthToSpace":{const s=Object(n.d)("blockSize",e,t,c),a=Object(n.d)("dataFormat",e,t,c).toUpperCase();return[r.depthToSpace(Object(n.d)("x",e,t,c),s,a)]}case"BroadcastTo":return[r.broadcastTo(Object(n.d)("x",e,t,c),Object(n.d)("shape",e,t,c))];case"BroadcastArgs":return[r.broadcastArgs(Object(n.d)("s0",e,t,c),Object(n.d)("s1",e,t,c))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}}]);