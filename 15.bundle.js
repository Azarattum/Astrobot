(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1255:function(e,t,r){"use strict";var s=r(0);
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
 */Object(s.de)().registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")})},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));
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
const s={};function n(e){return s[e]}},313:function(e,t,r){"use strict";r(1255),r(278),r(191);var s=r(550);r.d(t,"a",(function(){return s.a}))},733:function(e,t,r){"use strict";r.d(t,"a",(function(){return NodeValueImpl}));var s=r(1),n=r(112);
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
class NodeValueImpl{constructor(e,t,r){this.node=e,this.tensorMap=t,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(e=>this.getInput(e)),null!=e.rawAttrs&&(this.attrs=Object.keys(e.rawAttrs).reduce((e,t)=>(e[t]=this.getAttr(t),e),{}))}getInput(e){return Object(s.e)(e,this.tensorMap,this.context)}getAttr(e,t){const r=this.node.rawAttrs[e];if(null!=r.tensor)return Object(s.e)(e,this.tensorMap,this.context);if(null!=r.i||null!=r.f)return Object(n.f)(this.node.rawAttrs,e,t);if(null!=r.s)return Object(n.i)(this.node.rawAttrs,e,t);if(null!=r.b)return Object(n.c)(this.node.rawAttrs,e,t);if(null!=r.shape)return Object(n.k)(this.node.rawAttrs,e,t);if(null!=r.type)return Object(n.e)(this.node.rawAttrs,e,t);if(null!=r.list){if(null!=r.list.i||null!=r.list.f)return Object(n.g)(this.node.rawAttrs,e,t);if(null!=r.list.s)return Object(n.h)(this.node.rawAttrs,e,t);if(null!=r.list.shape)return Object(n.j)(this.node.rawAttrs,e,t);if(null!=r.list.b)return Object(n.b)(this.node.rawAttrs,e,t);if(null!=r.list.type)return Object(n.d)(this.node.rawAttrs,e,t)}return t}}},734:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var s=r(53),n=r(1);
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
const c=(e,t,r,c=s)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[c.add(Object(n.d)("a",e,t,r),Object(n.d)("b",e,t,r))];case"AddN":return[c.addN(Object(n.d)("tensors",e,t,r))];case"FloorMod":case"Mod":return[c.mod(Object(n.d)("a",e,t,r),Object(n.d)("b",e,t,r))];case"Mul":return[c.mul(Object(n.d)("a",e,t,r),Object(n.d)("b",e,t,r))];case"RealDiv":case"Div":return[c.div(Object(n.d)("a",e,t,r),Object(n.d)("b",e,t,r))];case"DivNoNan":return[c.divNoNan(Object(n.d)("a",e,t,r),Object(n.d)("b",e,t,r))];case"FloorDiv":return[c.floorDiv(Object(n.d)("a",e,t,r),Object(n.d)("b",e,t,r))];case"Sub":return[c.sub(Object(n.d)("a",e,t,r),Object(n.d)("b",e,t,r))];case"Minimum":return[c.minimum(Object(n.d)("a",e,t,r),Object(n.d)("b",e,t,r))];case"Maximum":return[c.maximum(Object(n.d)("a",e,t,r),Object(n.d)("b",e,t,r))];case"Pow":return[c.pow(Object(n.d)("a",e,t,r),Object(n.d)("b",e,t,r))];case"SquaredDifference":return[c.squaredDifference(Object(n.d)("a",e,t,r),Object(n.d)("b",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}},735:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var s=r(53),n=r(1);
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
const c=(e,t,r,c=s)=>{switch(e.op){case"Abs":case"ComplexAbs":return[c.abs(Object(n.d)("x",e,t,r))];case"Acos":return[c.acos(Object(n.d)("x",e,t,r))];case"Acosh":return[c.acosh(Object(n.d)("x",e,t,r))];case"Asin":return[c.asin(Object(n.d)("x",e,t,r))];case"Asinh":return[c.asinh(Object(n.d)("x",e,t,r))];case"Atan":return[c.atan(Object(n.d)("x",e,t,r))];case"Atan2":return[c.atan2(Object(n.d)("x",e,t,r),Object(n.d)("y",e,t,r))];case"Atanh":return[c.atanh(Object(n.d)("x",e,t,r))];case"Ceil":return[c.ceil(Object(n.d)("x",e,t,r))];case"Complex":return[c.complex(Object(n.d)("real",e,t,r),Object(n.d)("imag",e,t,r))];case"Cos":return[c.cos(Object(n.d)("x",e,t,r))];case"Cosh":return[c.cosh(Object(n.d)("x",e,t,r))];case"Elu":return[c.elu(Object(n.d)("x",e,t,r))];case"Erf":return[c.erf(Object(n.d)("x",e,t,r))];case"Exp":return[c.exp(Object(n.d)("x",e,t,r))];case"Expm1":return[c.expm1(Object(n.d)("x",e,t,r))];case"Floor":return[c.floor(Object(n.d)("x",e,t,r))];case"Log":return[c.log(Object(n.d)("x",e,t,r))];case"Log1p":return[c.log1p(Object(n.d)("x",e,t,r))];case"Imag":return[c.imag(Object(n.d)("x",e,t,r))];case"Neg":return[c.neg(Object(n.d)("x",e,t,r))];case"Reciprocal":return[c.reciprocal(Object(n.d)("x",e,t,r))];case"Real":return[c.real(Object(n.d)("x",e,t,r))];case"Relu":return[c.relu(Object(n.d)("x",e,t,r))];case"Round":return[c.round(Object(n.d)("x",e,t,r))];case"Selu":return[c.selu(Object(n.d)("x",e,t,r))];case"Sigmoid":return[c.sigmoid(Object(n.d)("x",e,t,r))];case"Sin":return[c.sin(Object(n.d)("x",e,t,r))];case"Sign":return[c.sign(Object(n.d)("x",e,t,r))];case"Sinh":return[c.sinh(Object(n.d)("x",e,t,r))];case"Softplus":return[c.softplus(Object(n.d)("x",e,t,r))];case"Sqrt":return[c.sqrt(Object(n.d)("x",e,t,r))];case"Square":return[c.square(Object(n.d)("x",e,t,r))];case"Tanh":return[c.tanh(Object(n.d)("x",e,t,r))];case"Tan":return[c.tan(Object(n.d)("x",e,t,r))];case"ClipByValue":return[c.clipByValue(Object(n.d)("x",e,t,r),Object(n.d)("clipValueMin",e,t,r),Object(n.d)("clipValueMax",e,t,r))];case"Relu6":return[c.relu6(Object(n.d)("x",e,t,r))];case"Rsqrt":return[c.rsqrt(Object(n.e)(e.inputNames[0],t,r))];case"Prod":return[c.prod(Object(n.d)("x",e,t,r),Object(n.d)("axes",e,t,r))];case"LeakyRelu":return[c.leakyRelu(Object(n.d)("x",e,t,r),Object(n.d)("alpha",e,t,r))];case"Prelu":return[c.prelu(Object(n.d)("x",e,t,r),Object(n.d)("alpha",e,t,r))];case"IsNan":return[c.isNaN(Object(n.e)(e.inputNames[0],t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}},736:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var s=r(0),n=r(737),c=r(271),d=r(1);
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
const a=async(e,t,r)=>{switch(e.op){case"If":case"StatelessIf":{const s=Object(d.d)("thenBranch",e,t,r),n=Object(d.d)("elseBranch",e,t,r),c=Object(d.d)("cond",e,t,r),a=Object(d.d)("args",e,t,r);return(await c.data())[0]?r.functionMap[s].executeFunctionAsync(a,r.tensorArrayMap,r.tensorListMap):r.functionMap[n].executeFunctionAsync(a,r.tensorArrayMap,r.tensorListMap)}case"While":case"StatelessWhile":{const s=Object(d.d)("body",e,t,r),n=Object(d.d)("cond",e,t,r),c=Object(d.d)("args",e,t,r),a=await r.functionMap[n].executeFunctionAsync(c,r.tensorArrayMap,r.tensorListMap),o=c.map(e=>e.id);let i=await a[0].data();a.forEach(e=>{e.kept||-1!==o.indexOf(e.id)||e.dispose()});let u=c;for(;i[0];){const e=u;u=await r.functionMap[s].executeFunctionAsync(u,r.tensorArrayMap,r.tensorListMap);const t=u.map(e=>e.id);e.forEach(e=>{e.kept||-1!==o.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()});const c=await r.functionMap[n].executeFunctionAsync(u,r.tensorArrayMap,r.tensorListMap);i=await c[0].data(),c.forEach(e=>{e.kept||-1!==o.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()})}return u}case"LoopCond":{const s=Object(d.d)("pred",e,t,r);return[Object(d.a)(s)]}case"Switch":{const s=Object(d.d)("pred",e,t,r);let n=Object(d.d)("data",e,t,r);return n.kept||(n=Object(d.a)(n)),(await s.data())[0]?[void 0,n]:[n,void 0]}case"Merge":{const s=e.inputNames.find(e=>void 0!==Object(d.e)(e,t,r));if(s){const e=Object(d.e)(s,t,r);return[Object(d.a)(e)]}return}case"Enter":{const s=Object(d.d)("frameName",e,t,r),n=Object(d.d)("tensor",e,t,r);return r.enterFrame(s),[Object(d.a)(n)]}case"Exit":{const s=Object(d.d)("tensor",e,t,r);return r.exitFrame(),[Object(d.a)(s)]}case"NextIteration":{const s=Object(d.d)("tensor",e,t,r);return r.nextIteration(),[Object(d.a)(s)]}case"TensorArrayV3":{const c=Object(d.d)("size",e,t,r),a=Object(d.d)("dtype",e,t,r),o=Object(d.d)("elementShape",e,t,r),i=Object(d.d)("dynamicSize",e,t,r),u=Object(d.d)("clearAfterRead",e,t,r),b=Object(d.d)("identicalElementShapes",e,t,r),O=Object(d.d)("name",e,t,r),j=new n.a(O,a,c,o,b,i,u);return r.addTensorArray(j),[j.idTensor,Object(s.af)(1)]}case"TensorArrayWriteV3":{const s=Object(d.d)("tensorArrayId",e,t,r),n=Object(d.d)("index",e,t,r),c=Object(d.d)("tensor",e,t,r),a=r.getTensorArray(s.id);return a.write(n,c),[a.idTensor]}case"TensorArrayReadV3":{const s=Object(d.d)("tensorArrayId",e,t,r),n=Object(d.d)("index",e,t,r);return[r.getTensorArray(s.id).read(n)]}case"TensorArrayGatherV3":{const s=Object(d.d)("tensorArrayId",e,t,r),n=Object(d.d)("indices",e,t,r),c=Object(d.d)("dtype",e,t,r);return[r.getTensorArray(s.id).gather(n,c)]}case"TensorArrayScatterV3":{const s=Object(d.d)("tensorArrayId",e,t,r),n=Object(d.d)("indices",e,t,r),c=Object(d.d)("tensor",e,t,r),a=r.getTensorArray(s.id);return a.scatter(n,c),[a.idTensor]}case"TensorArrayConcatV3":{const s=Object(d.d)("tensorArrayId",e,t,r),n=r.getTensorArray(s.id),c=Object(d.d)("dtype",e,t,r);return[n.concat(c)]}case"TensorArraySplitV3":{const s=Object(d.d)("tensorArrayId",e,t,r),n=Object(d.d)("tensor",e,t,r),c=Object(d.d)("lengths",e,t,r),a=r.getTensorArray(s.id);return a.split(c,n),[a.idTensor]}case"TensorArraySizeV3":{const n=Object(d.d)("tensorArrayId",e,t,r),c=r.getTensorArray(n.id);return[Object(s.af)(c.size(),"int32")]}case"TensorArrayCloseV3":{const s=Object(d.d)("tensorArrayId",e,t,r),n=r.getTensorArray(s.id);return n.clearAndClose(),[n.idTensor]}case"TensorListSetItem":{const s=Object(d.d)("tensorListId",e,t,r),n=Object(d.d)("index",e,t,r),c=Object(d.d)("tensor",e,t,r),a=r.getTensorList(s.id);return a.setItem(n,c),[a.idTensor]}case"TensorListGetItem":{const s=Object(d.d)("tensorListId",e,t,r),n=Object(d.d)("index",e,t,r),c=Object(d.d)("elementShape",e,t,r),a=Object(d.d)("elementDType",e,t,r);return[r.getTensorList(s.id).getItem(n,c,a)]}case"TensorListScatterV2":case"TensorListScatter":{const s=Object(d.d)("indices",e,t,r),n=Object(d.d)("tensor",e,t,r),a=Object(d.d)("elementShape",e,t,r),o=Object(d.d)("numElements",e,t,r),i=Object(c.c)(n,s,a,o);return r.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const s=Object(d.d)("elementShape",e,t,r),n=Object(d.d)("elementDType",e,t,r);let a;a="TensorListReserve"===e.op?"numElements":"maxNumElements";const o=Object(d.d)(a,e,t,r),i="TensorListReserve"===e.op?-1:o,u=Object(c.b)(s,n,o,i);return r.addTensorList(u),[u.idTensor]}case"TensorListGather":{const s=Object(d.d)("tensorListId",e,t,r),n=Object(d.d)("indices",e,t,r),c=Object(d.d)("elementShape",e,t,r),a=Object(d.d)("elementDType",e,t,r);return[r.getTensorList(s.id).gather(n,a,c)]}case"TensorListStack":{const s=Object(d.d)("tensorListId",e,t,r),n=Object(d.d)("elementShape",e,t,r),c=Object(d.d)("elementDType",e,t,r),a=Object(d.d)("numElements",e,t,r);return[r.getTensorList(s.id).stack(n,c,a)]}case"TensorListFromTensor":{const s=Object(d.d)("tensor",e,t,r),n=Object(d.d)("elementShape",e,t,r),a=Object(d.d)("elementDType",e,t,r),o=Object(c.a)(s,n,a);return r.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const s=Object(d.d)("tensorListId",e,t,r),n=r.getTensorList(s.id),c=Object(d.d)("dtype",e,t,r),a=Object(d.d)("elementShape",e,t,r);return[n.concat(c,a)]}case"TensorListPushBack":{const s=Object(d.d)("tensorListId",e,t,r),n=Object(d.d)("tensor",e,t,r),c=r.getTensorList(s.id);return c.pushBack(n),[c.idTensor]}case"TensorListPopBack":{const s=Object(d.d)("tensorListId",e,t,r),n=Object(d.d)("elementShape",e,t,r),c=Object(d.d)("elementDType",e,t,r);return[r.getTensorList(s.id).popBack(n,c)]}case"TensorListSplit":{const s=Object(d.d)("tensor",e,t,r),n=Object(d.d)("elementShape",e,t,r),a=Object(d.d)("lengths",e,t,r),o=Object(c.d)(s,a,n);return r.addTensorList(o),[o.idTensor]}case"TensorListLength":{const n=Object(d.d)("tensorListId",e,t,r),c=r.getTensorList(n.id);return[Object(s.af)(c.size(),"int32")]}case"TensorListResize":{const s=Object(d.d)("tensorListId",e,t,r),n=Object(d.d)("size",e,t,r),c=r.getTensorList(s.id).resize(n);return r.addTensorList(c),[c.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}},738:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var s=r(53),n=r(1);
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
function c(e,t,r){const[s,c]=Object(n.d)("fusedOps",e,t,r),d="biasadd"===s,a=!d,o="prelu"===c,i="fusedbatchnorm"===s,u=Object(n.d)("numArgs",e,t,r);if(d){if(o&&2!==u)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&d&&1!==u)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(i)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const b=Object(n.d)("strides",e,t,r),O=Object(n.c)(e,t,r),j=Object(n.d)("dataFormat",e,t,r).toUpperCase(),l=Object(n.d)("dilations",e,t,r);let[p,h]=Object(n.d)("args",e,t,r);a&&(h=p,p=void 0);return{stride:b,pad:O,dataFormat:j,dilations:l,biasArg:p,preluArg:h,activationFunc:c,leakyreluAlpha:Object(n.d)("leakyreluAlpha",e,t,r)}}const d=(e,t,r,d=s)=>{switch(e.op){case"Conv1D":{const s=Object(n.d)("stride",e,t,r),c=Object(n.d)("pad",e,t,r),a=Object(n.d)("dataFormat",e,t,r).toUpperCase(),o=Object(n.d)("dilation",e,t,r);return[d.conv1d(Object(n.d)("x",e,t,r),Object(n.d)("filter",e,t,r),s,c,a,o)]}case"Conv2D":{const s=Object(n.d)("strides",e,t,r),c=Object(n.c)(e,t,r),a=Object(n.d)("dataFormat",e,t,r).toUpperCase(),o=Object(n.d)("dilations",e,t,r);return[d.conv2d(Object(n.d)("x",e,t,r),Object(n.d)("filter",e,t,r),[s[1],s[2]],c,a,[o[1],o[2]])]}case"_FusedConv2D":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:u,preluArg:b,activationFunc:O,leakyreluAlpha:j}=c(e,t,r);return[d.fused.conv2d({x:Object(n.d)("x",e,t,r),filter:Object(n.d)("filter",e,t,r),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:O,preluActivationWeights:b,leakyreluAlpha:j})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:u,preluArg:b,activationFunc:O,leakyreluAlpha:j}=c(e,t,r);return[d.fused.depthwiseConv2d({x:Object(n.d)("x",e,t,r),filter:Object(n.d)("filter",e,t,r),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:O,preluActivationWeights:b,leakyreluAlpha:j})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=Object(n.d)("outputShape",e,t,r),c=Object(n.d)("strides",e,t,r),a=Object(n.c)(e,t,r);return[d.conv2dTranspose(Object(n.d)("x",e,t,r),Object(n.d)("filter",e,t,r),s,[c[1],c[2]],a)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=Object(n.d)("strides",e,t,r),c=Object(n.c)(e,t,r),a=Object(n.d)("dilations",e,t,r),o=Object(n.d)("dataFormat",e,t,r).toUpperCase();return[d.depthwiseConv2d(Object(n.d)("input",e,t,r),Object(n.d)("filter",e,t,r),[s[1],s[2]],c,o,[a[1],a[2]])]}case"Conv3D":{const s=Object(n.d)("strides",e,t,r),c=Object(n.d)("pad",e,t,r),a=Object(n.d)("dataFormat",e,t,r).toUpperCase(),o=Object(n.d)("dilations",e,t,r);return[d.conv3d(Object(n.d)("x",e,t,r),Object(n.d)("filter",e,t,r),[s[1],s[2],s[3]],c,a,[o[1],o[2],o[3]])]}case"AvgPool":{const s=Object(n.d)("strides",e,t,r),c=Object(n.d)("pad",e,t,r),a=Object(n.d)("kernelSize",e,t,r);return[d.avgPool(Object(n.d)("x",e,t,r),[a[1],a[2]],[s[1],s[2]],c)]}case"MaxPool":{const s=Object(n.d)("strides",e,t,r),c=Object(n.d)("pad",e,t,r),a=Object(n.d)("kernelSize",e,t,r);return[d.maxPool(Object(n.d)("x",e,t,r),[a[1],a[2]],[s[1],s[2]],c)]}case"MaxPoolWithArgmax":{const s=Object(n.d)("strides",e,t,r),c=Object(n.d)("pad",e,t,r),a=Object(n.d)("kernelSize",e,t,r),o=Object(n.d)("includeBatchInIndex",e,t,r),{result:i,indexes:u}=d.maxPoolWithArgmax(Object(n.d)("x",e,t,r),[a[1],a[2]],[s[1],s[2]],c,o);return[i,u]}case"AvgPool3D":{const s=Object(n.d)("strides",e,t,r),c=Object(n.d)("pad",e,t,r),a=Object(n.d)("kernelSize",e,t,r);return[d.avgPool3d(Object(n.d)("x",e,t,r),[a[1],a[2],a[3]],[s[1],s[2],s[3]],c)]}case"MaxPool3D":{const s=Object(n.d)("strides",e,t,r),c=Object(n.d)("pad",e,t,r),a=Object(n.d)("kernelSize",e,t,r);return[d.maxPool3d(Object(n.d)("x",e,t,r),[a[1],a[2],a[3]],[s[1],s[2],s[3]],c)]}case"Dilation2D":{const s=Object(n.d)("strides",e,t,r),c=Object(n.d)("pad",e,t,r),a=Object(n.d)("dilations",e,t,r),o=s[1],i=s[2],u=a[1],b=a[2];return[d.dilation2d(Object(n.d)("x",e,t,r),Object(n.d)("filter",e,t,r),[o,i],c,[u,b],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}},739:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var s=r(53),n=r(1);
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
const c=(e,t,r,c=s)=>{switch(e.op){case"Fill":{const s=Object(n.d)("shape",e,t,r),d=Object(n.d)("dtype",e,t,r),a=Object(n.d)("value",e,t,r);return[c.fill(s,a,d)]}case"LinSpace":{const s=Object(n.d)("start",e,t,r),d=Object(n.d)("stop",e,t,r),a=Object(n.d)("num",e,t,r);return[c.linspace(s,d,a)]}case"Multinomial":{const s=Object(n.d)("logits",e,t,r),d=Object(n.d)("numSamples",e,t,r),a=Object(n.d)("seed",e,t,r);return[c.multinomial(s,d,a)]}case"OneHot":{const s=Object(n.d)("indices",e,t,r),d=Object(n.d)("depth",e,t,r),a=Object(n.d)("onValue",e,t,r),o=Object(n.d)("offValue",e,t,r),i=Object(n.d)("dtype",e,t,r);return[c.oneHot(s,d,a,o,i)]}case"Ones":return[c.ones(Object(n.d)("shape",e,t,r),Object(n.d)("dtype",e,t,r))];case"OnesLike":return[c.onesLike(Object(n.d)("x",e,t,r))];case"RandomStandardNormal":return[c.randomStandardNormal(Object(n.d)("shape",e,t,r),Object(n.d)("dtype",e,t,r),Object(n.d)("seed",e,t,r))];case"RandomUniform":return[c.randomUniform(Object(n.d)("shape",e,t,r),Object(n.d)("minval",e,t,r),Object(n.d)("maxval",e,t,r),Object(n.d)("dtype",e,t,r))];case"Range":{const s=Object(n.d)("start",e,t,r),d=Object(n.d)("stop",e,t,r),a=Object(n.d)("step",e,t,r);return[c.range(s,d,a,Object(n.d)("dtype",e,t,r))]}case"TruncatedNormal":{const s=Object(n.d)("shape",e,t,r),d=Object(n.d)("mean",e,t,r),a=Object(n.d)("stdDev",e,t,r),o=Object(n.d)("seed",e,t,r);return[c.truncatedNormal(s,d,a,Object(n.d)("dtype",e,t,r),o)]}case"Zeros":return[c.zeros(Object(n.d)("shape",e,t,r),Object(n.d)("dtype",e,t,r))];case"ZerosLike":return[c.zerosLike(Object(n.d)("x",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}},740:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var s=r(53),n=r(1);
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
function c(e,t,r){return{boxes:Object(n.d)("boxes",e,t,r),scores:Object(n.d)("scores",e,t,r),maxOutputSize:Object(n.d)("maxOutputSize",e,t,r),iouThreshold:Object(n.d)("iouThreshold",e,t,r),scoreThreshold:Object(n.d)("scoreThreshold",e,t,r),softNmsSigma:Object(n.d)("softNmsSigma",e,t,r)}}const d=async(e,t,r,d,a=s)=>{switch(e.op){case"NonMaxSuppressionV5":{const{boxes:s,scores:n,maxOutputSize:d,iouThreshold:o,scoreThreshold:i,softNmsSigma:u}=c(e,t,r),b=await a.image.nonMaxSuppressionWithScoreAsync(s,n,d,o,i,u);return[b.selectedIndices,b.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:s,scores:d,maxOutputSize:o,iouThreshold:i,scoreThreshold:u}=c(e,t,r),b=Object(n.d)("padToMaxOutputSize",e,t,r),O=await a.image.nonMaxSuppressionPaddedAsync(s,d,o,i,u,b);return[O.selectedIndices,O.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:s,scores:n,maxOutputSize:d,iouThreshold:o,scoreThreshold:i}=c(e,t,r);return[await a.image.nonMaxSuppressionAsync(s,n,d,o,i)]}case"Where":{const s=a.cast(Object(n.d)("condition",e,t,r),"bool"),c=[await a.whereAsync(s)];return s.dispose(),c}case"ListDiff":return a.setdiff1dAsync(Object(n.d)("x",e,t,r),Object(n.d)("y",e,t,r));default:throw TypeError(`Node type ${e.op} is not implemented`)}}},741:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var s=r(53),n=r(1);
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
const c=(e,t,r,c=s)=>{switch(e.op){case"LowerBound":{const s=Object(n.d)("sortedSequence",e,t,r),d=Object(n.d)("values",e,t,r);return[c.lowerBound(s,d)]}case"TopKV2":{const s=Object(n.d)("x",e,t,r),d=Object(n.d)("k",e,t,r),a=Object(n.d)("sorted",e,t,r),o=c.topk(s,d,a);return[o.values,o.indices]}case"UpperBound":{const s=Object(n.d)("sortedSequence",e,t,r),d=Object(n.d)("values",e,t,r);return[c.upperBound(s,d)]}case"Unique":{const s=Object(n.d)("x",e,t,r),d=c.unique(s);return[d.values,d.indices]}case"UniqueV2":{const s=Object(n.d)("x",e,t,r),d=Object(n.d)("axis",e,t,r),a=c.unique(s,d);return[a.values,a.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}}}]);