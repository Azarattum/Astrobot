(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{109:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(0),u=t(458),a=t(898);function o(n,e,t,o){const i=
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
function(n){const e=[];for(;0===e.length||1!==e[e.length-1].outSize;){const t=e.length?e[e.length-1].outSize:n[1],u=r.Ad.computeOptimalWindowSize(t);e.push({inSize:t,windowSize:u,outSize:Math.ceil(t/u)})}return e}(n.shape);let p=n;for(let r=0;r<i.length;r++){const{inSize:s,windowSize:d,outSize:c}=i[r];let l,f;l="mean"===t?0===r?new u.a({windowSize:d,inSize:s,batchSize:n.shape[0],outSize:c},s):new u.a({windowSize:d,inSize:s,batchSize:n.shape[0],outSize:c}):new a.a({windowSize:d,inSize:s,batchSize:n.shape[0],outSize:c},t),f=p,p=o.runWebGLProgram(l,[p],e),f.dataId!==n.dataId&&o.disposeIntermediateTensorInfo(f)}return p}},15:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"d",(function(){return l})),t.d(e,"b",(function(){return f})),t.d(e,"c",(function(){return m}));var r=t(0),u=t(90),a=t(75),o=t(95),i=t(268),p=t(267),s=t(38),d=t(84);
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
const c="if (isnan(x)) return x;";function l({opSnippet:n,packedOpSnippet:e,cpuKernelImpl:t,dtype:u}){return({inputs:a,backend:o})=>{const{x:i}=a,p=o,c=u||i.dtype;if(p.shouldExecuteOnCPU([i])&&null!=t){const n=p.texData.get(i.dataId),e=t(n.values,c);return p.makeTensorInfo(i.shape,c,e)}let l;return l=Object(r.de)().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=e?new d.f(i.shape,e):new s.i(i.shape,n),p.runWebGLProgram(l,[i],c)}}function f({opSnippet:n,packedOpSnippet:e,checkOutOfBounds:t=!1,supportsComplex:i=!1,cpuKernelImpl:p,dtype:s}){return({inputs:d,backend:c})=>{const{a:l,b:f}=d,m=c;if(i&&"complex64"===l.dtype){const e=m.texData.get(l.dataId),t=m.texData.get(f.dataId),[a,i]=[[e.complexTensorInfos.real,t.complexTensorInfos.real],[e.complexTensorInfos.imag,t.complexTensorInfos.imag]].map(e=>{const[t,a]=e,o={dataId:t.dataId,dtype:t.dtype,shape:l.shape},i={dataId:a.dataId,dtype:a.dtype,shape:f.shape},p=new u.a(n,l.shape,f.shape);return m.runWebGLProgram(p,[o,i],Object(r.Gf)(t.dtype,a.dtype))}),p=Object(o.a)({inputs:{real:a,imag:i},backend:m});return m.disposeIntermediateTensorInfo(a),m.disposeIntermediateTensorInfo(i),p}const I=s||Object(r.Gf)(l.dtype,f.dtype);if(("string"===l.dtype||"string"===f.dtype||m.shouldExecuteOnCPU([l,f]))&&null!=p){const n=m.texData.get(l.dataId).values,e=m.texData.get(f.dataId).values,t="string"===l.dtype?r.Ad.fromUint8ToStringArray(n):n,u="string"===l.dtype?r.Ad.fromUint8ToStringArray(e):e,[a,o]=p(l.shape,f.shape,t,u,I),i=m.makeTensorInfo(o,I);return m.texData.get(i.dataId).values=a,i}let h;return h=Object(r.de)().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=e?new a.a(e,l.shape,f.shape,t):new u.a(n,l.shape,f.shape),m.runWebGLProgram(h,[l,f],I)}}function m(n,e=!1){if("linear"===n)return e?d.b:s.e;if("relu"===n)return e?d.c:s.f;if("elu"===n)return e?d.a:s.d;if("relu6"===n)return e?d.d:s.g;if("prelu"===n)return e?p.b:p.a;if("leakyrelu"===n)return e?i.b:i.a;if("sigmoid"===n)return e?d.e:s.h;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}},18:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"d",(function(){return i})),t.d(e,"e",(function(){return p})),t.d(e,"f",(function(){return s})),t.d(e,"g",(function(){return d})),t.d(e,"h",(function(){return c})),t.d(e,"i",(function(){return l})),t.d(e,"j",(function(){return f})),t.d(e,"k",(function(){return m})),t.d(e,"l",(function(){return I})),t.d(e,"m",(function(){return g})),t.d(e,"n",(function(){return h})),t.d(e,"o",(function(){return S})),t.d(e,"p",(function(){return b})),t.d(e,"q",(function(){return w})),t.d(e,"r",(function(){return y})),t.d(e,"s",(function(){return z})),t.d(e,"t",(function(){return x})),t.d(e,"u",(function(){return O})),t.d(e,"v",(function(){return A})),t.d(e,"w",(function(){return T})),t.d(e,"x",(function(){return k})),t.d(e,"y",(function(){return G})),t.d(e,"z",(function(){return P})),t.d(e,"A",(function(){return E})),t.d(e,"B",(function(){return W})),t.d(e,"E",(function(){return v})),t.d(e,"F",(function(){return R})),t.d(e,"G",(function(){return B})),t.d(e,"H",(function(){return D})),t.d(e,"I",(function(){return C})),t.d(e,"J",(function(){return q})),t.d(e,"K",(function(){return U})),t.d(e,"L",(function(){return _})),t.d(e,"M",(function(){return K})),t.d(e,"N",(function(){return N})),t.d(e,"O",(function(){return F})),t.d(e,"P",(function(){return M})),t.d(e,"Q",(function(){return H})),t.d(e,"C",(function(){return j})),t.d(e,"D",(function(){return L})),t.d(e,"R",(function(){return J})),t.d(e,"S",(function(){return Y})),t.d(e,"T",(function(){return Q})),t.d(e,"U",(function(){return V}));var r=t(356);
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
 */const{addImpl:u,bincountImpl:a,bincountReduceImpl:o,castImpl:i,ceilImpl:p,concatImpl:s,equalImpl:d,expImpl:c,expm1Impl:l,floorImpl:f,gatherNdImpl:m,gatherV2Impl:I,greaterImpl:h,greaterEqualImpl:g,lessImpl:b,lessEqualImpl:S,linSpaceImpl:w,logImpl:y,maxImpl:z,maximumImpl:x,minimumImpl:O,multiplyImpl:A,negImpl:T,notEqualImpl:k,prodImpl:G,raggedGatherImpl:P,raggedRangeImpl:E,raggedTensorToTensorImpl:W,rangeImpl:j,rsqrtImpl:L,scatterImpl:v,sigmoidImpl:R,simpleAbsImpl:B,sliceImpl:D,sparseFillEmptyRowsImpl:C,sparseReshapeImpl:q,sparseSegmentReductionImpl:U,sqrtImpl:_,stridedSliceImpl:K,stringNGramsImpl:N,stringSplitImpl:F,stringToHashBucketFastImpl:M,subImpl:H,tileImpl:J,topKImpl:Y,transposeImpl:Q,uniqueImpl:V}=r},393:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(0),u=t(909),a=t(910),o=t(17);function i(n,e,t,i){const p=[t];if(r.Ad.assertAxesAreInnerMostDims("arg"+i.charAt(0).toUpperCase()+i.slice(1),p,e.shape.length),!Object(r.de)().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){const t=[],a=n.texData.get(e.dataId);let s=e;null!==a&&a.isPacked&&(s=n.unpackTensor(e),t.push(s));const[d,c]=r.Ad.computeOutAndReduceShapes(s.shape,p),l=r.Hf.sizeFromShape(c),f=Object(o.a)({inputs:{x:s},backend:n,attrs:{shape:[-1,l]}});t.push(f);const m=
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
function n(e,t,a,o=null){let i=t.shape[0],p=t.shape[1];null!=o&&(i=o.shape[0],p=o.shape[1]);const s=r.Ad.computeOptimalWindowSize(p),d={windowSize:s,inSize:p,batchSize:i,outSize:Math.ceil(p/s)},c=new u.a(d,a,null==o),l=[t];null!=o&&l.push(o);const f=e.runWebGLProgram(c,l,"int32");if(1===f.shape[1])return f;const m=n(e,t,a,f);return e.disposeIntermediateTensorInfo(f),m}(n,f,i);t.push(m);const I=Object(o.a)({inputs:{x:m},backend:n,attrs:{shape:d}});return t.forEach(e=>n.disposeIntermediateTensorInfo(e)),I}return function n(e,t,u,o=null){const i=null!=o?o.shape:t.shape,p=i[i.length-1],s=r.Ad.computeOptimalWindowSize(p),d=new a.a(i,s,u,null==o),c=null==o?[t]:[t,o],l=e.runWebGLProgram(d,c,"int32");if(l.shape.length===t.shape.length){const r=n(e,t,u,l);return e.disposeIntermediateTensorInfo(l),r}return l}(n,e,i)}},894:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(391),u=t(13);
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
function a(n,e,t){const a=[Object(u.n)(n.shape),...Object(u.s)(n.shape)],o={dtype:n.dtype,shape:a,dataId:n.dataId},i=[Object(u.n)(e),...Object(u.s)(e)],p=new r.a(i,a),s=[a],d=t.runWebGLProgram(p,[o],n.dtype,s,!0);return{dataId:d.dataId,shape:e,dtype:d.dtype}}},931:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t(38);
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
 */function u(n,e){const t=new r.i(n.shape,"return float(int(x));"),u=e.runWebGLProgram(t,[n],"int32");return{dataId:u.dataId,shape:u.shape,dtype:u.dtype}}}}]);