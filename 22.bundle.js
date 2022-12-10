(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{742:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(53),r=a(1);
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
const s=(e,t,a,s=c)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":const c=Object(r.d)("default",e,t,a);return[Object(r.e)(e.name,t,a)||c];case"Placeholder":return[Object(r.e)(e.name,t,a)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const c=Object(r.d)("x",e,t,a);return[Object(r.a)(c)]}case"IdentityN":return Object(r.d)("x",e,t,a).map(e=>Object(r.a)(e));case"Snapshot":const n=Object(r.d)("x",e,t,a);return[Object(r.a)(n)];case"Shape":return[s.tensor1d(Object(r.d)("x",e,t,a).shape,"int32")];case"ShapeN":return Object(r.d)("x",e,t,a).map(e=>s.tensor1d(e.shape));case"Size":return[s.scalar(Object(r.d)("x",e,t,a).size,"int32")];case"Rank":return[s.scalar(Object(r.d)("x",e,t,a).rank,"int32")];case"NoOp":return[s.scalar(1)];case"Print":const o=Object(r.d)("x",e,t,a),d=Object(r.d)("data",e,t,a),i=Object(r.d)("message",e,t,a),b=Object(r.d)("summarize",e,t,a);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(i);for(let e=0;e<d.length;e++)console.log(Array.prototype.slice.call(d[e].dataSync()).slice(0,b));return[o];default:throw TypeError(`Node type ${e.op} is not implemented`)}}},743:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(744),r=a(1);
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
const s=async(e,t,a,s)=>{switch(e.op){case"HashTable":case"HashTableV2":{const n=s.getHashTableHandleByName(e.name);if(null!=n)return[n];{const n=Object(r.d)("keyDType",e,t,a),o=Object(r.d)("valueDType",e,t,a),d=new c.a(n,o);return s.addHashTable(e.name,d),[d.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const c=Object(r.d)("tableHandle",e,t,a,s),n=Object(r.d)("keys",e,t,a),o=Object(r.d)("values",e,t,a),d=s.getHashTableById(c.id);return[await d.import(n,o)]}case"LookupTableFind":case"LookupTableFindV2":{const c=Object(r.d)("tableHandle",e,t,a,s),n=Object(r.d)("keys",e,t,a),o=Object(r.d)("defaultValue",e,t,a),d=s.getHashTableById(c.id);return[await d.find(n,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const c=Object(r.d)("tableHandle",e,t,a,s);return[s.getHashTableById(c.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}},745:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(53),r=a(1);
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
const s=(e,t,a,s=c)=>{switch(e.op){case"ResizeBilinear":{const c=Object(r.d)("images",e,t,a),n=Object(r.d)("size",e,t,a),o=Object(r.d)("alignCorners",e,t,a),d=Object(r.d)("halfPixelCenters",e,t,a);return[s.image.resizeBilinear(c,[n[0],n[1]],o,d)]}case"ResizeNearestNeighbor":{const c=Object(r.d)("images",e,t,a),n=Object(r.d)("size",e,t,a),o=Object(r.d)("alignCorners",e,t,a),d=Object(r.d)("halfPixelCenters",e,t,a);return[s.image.resizeNearestNeighbor(c,[n[0],n[1]],o,d)]}case"CropAndResize":{const c=Object(r.d)("image",e,t,a),n=Object(r.d)("boxes",e,t,a),o=Object(r.d)("boxInd",e,t,a),d=Object(r.d)("cropSize",e,t,a),i=Object(r.d)("method",e,t,a),b=Object(r.d)("extrapolationValue",e,t,a);return[s.image.cropAndResize(c,n,o,d,i,b)]}case"ImageProjectiveTransformV3":{const c=Object(r.d)("images",e,t,a),n=Object(r.d)("transforms",e,t,a),o=Object(r.d)("outputShape",e,t,a),d=Object(r.d)("fillValue",e,t,a),i=Object(r.d)("interpolation",e,t,a),b=Object(r.d)("fillMode",e,t,a);return[s.image.transform(c,n,i.toLowerCase(),b.toLowerCase(),d,o)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(53),r=a(1);
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
const s=(e,t,a,s=c)=>{switch(e.op){case"Equal":return[s.equal(Object(r.d)("a",e,t,a),Object(r.d)("b",e,t,a))];case"NotEqual":return[s.notEqual(Object(r.d)("a",e,t,a),Object(r.d)("b",e,t,a))];case"Greater":return[s.greater(Object(r.d)("a",e,t,a),Object(r.d)("b",e,t,a))];case"GreaterEqual":return[s.greaterEqual(Object(r.d)("a",e,t,a),Object(r.d)("b",e,t,a))];case"Less":return[s.less(Object(r.d)("a",e,t,a),Object(r.d)("b",e,t,a))];case"LessEqual":return[s.lessEqual(Object(r.d)("a",e,t,a),Object(r.d)("b",e,t,a))];case"LogicalAnd":return[s.logicalAnd(Object(r.d)("a",e,t,a),Object(r.d)("b",e,t,a))];case"LogicalNot":return[s.logicalNot(Object(r.d)("a",e,t,a))];case"LogicalOr":return[s.logicalOr(Object(r.d)("a",e,t,a),Object(r.d)("b",e,t,a))];case"Select":case"SelectV2":return[s.where(Object(r.d)("condition",e,t,a),Object(r.d)("a",e,t,a),Object(r.d)("b",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}},747:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(53),r=a(1);
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
const s=(e,t,a,s=c)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[s.matMul(Object(r.d)("a",e,t,a),Object(r.d)("b",e,t,a),Object(r.d)("transposeA",e,t,a),Object(r.d)("transposeB",e,t,a))];case"Einsum":return[s.einsum(Object(r.d)("equation",e,t,a),...Object(r.d)("tensors",e,t,a))];case"Transpose":return[s.transpose(Object(r.d)("x",e,t,a),Object(r.d)("perm",e,t,a))];case"_FusedMatMul":const[c,n]=Object(r.d)("fusedOps",e,t,a),o="biasadd"===c,d="prelu"===n,i=Object(r.d)("numArgs",e,t,a),b=Object(r.d)("leakyreluAlpha",e,t,a);if(o){if(d&&2!==i)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!d&&1!==i)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[u,l]=Object(r.d)("args",e,t,a);return[s.fused.matMul({a:Object(r.d)("a",e,t,a),b:Object(r.d)("b",e,t,a),transposeA:Object(r.d)("transposeA",e,t,a),transposeB:Object(r.d)("transposeB",e,t,a),bias:u,activation:n,preluActivationWeights:l,leakyreluAlpha:b})];default:throw TypeError(`Node type ${e.op} is not implemented`)}}},748:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(53),r=a(1);
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
const s=(e,t,a,s=c)=>{switch(e.op){case"EuclideanNorm":return[s.euclideanNorm(Object(r.d)("x",e,t,a),Object(r.d)("axis",e,t,a),Object(r.d)("keepDims",e,t,a))];case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[s.batchNorm(Object(r.d)("x",e,t,a),Object(r.d)("mean",e,t,a),Object(r.d)("variance",e,t,a),Object(r.d)("offset",e,t,a),Object(r.d)("scale",e,t,a),Object(r.d)("epsilon",e,t,a))];case"LRN":return[s.localResponseNormalization(Object(r.d)("x",e,t,a),Object(r.d)("radius",e,t,a),Object(r.d)("bias",e,t,a),Object(r.d)("alpha",e,t,a),Object(r.d)("beta",e,t,a))];case"Softmax":return[s.softmax(Object(r.d)("x",e,t,a))];case"LogSoftmax":return[s.logSoftmax(Object(r.d)("x",e,t,a))];case"SparseToDense":return[s.sparseToDense(Object(r.d)("sparseIndices",e,t,a),Object(r.d)("outputShape",e,t,a),Object(r.d)("sparseValues",e,t,a),Object(r.d)("defaultValue",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}}]);