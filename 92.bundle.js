(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1e3:function(n,e,t){"use strict";t.d(e,"a",(function(){return LRNProgram}));
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
 */
class LRNProgram{constructor(n,e,t,a,r){this.variableNames=["x"],this.outputShape=[];const s=e,o=n[3]-1;let i;this.outputShape=n;const c=`float(${t}) + float(${a}) * sum`;i=.5===r?`inversesqrt(${c})`:1===r?`1.0/(${c})`:`exp(log(${c}) * float(-${r}));`,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -${s}; j <= ${s}; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  ${o}) {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * ${i};\n        setOutput(val);\n      }\n    `}}},1002:function(n,e,t){"use strict";t.d(e,"a",(function(){return LRNGradProgram}));
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
class LRNGradProgram{constructor(n,e,t,a,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=n,this.depth=n[3],this.depthRadius=e,this.bias=t,this.alpha=a,this.beta=r,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < ${this.depth}; ++d) {\n          int depthBegin = int(max(0.0, float(d - ${e})));\n          int depthEnd = int(min(float(${this.depth}),\n              float(d + ${e} + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = ${this.depth};\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(${a}) * norm + float(${t});\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(${a})\n                * float(${r})\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * ${r});\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    `}}},1077:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t(0),r=t(38);const s={kernelName:a.Yc,backendName:"webgl",kernelFunc:
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
function({inputs:n,attrs:e,backend:t}){const{x:a}=n,s=r.b+`\n    return x > 0.0 ? 1.0 : float(${e.alpha});\n  `,o=new r.i(a.shape,s);return t.runWebGLProgram(o,[a],a.dtype)}}},1078:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(0),r=t(18),s=t(1079),o=t(17),i=t(131);const c={kernelName:a.Zc,backendName:"webgl",kernelFunc:
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
function(n){const{inputs:e,backend:t,attrs:c}=n,{x:d}=e,{begin:u,end:p,strides:l,beginMask:h,endMask:f,ellipsisMask:b,newAxisMask:m,shrinkAxisMask:g}=c,{finalShapeSparse:k,finalShape:y,isIdentity:x,sliceDim0:v,isSimpleSlice:C,begin:I,end:w,strides:O}=a.lf.sliceInfo(d.shape,u,p,l,h,f,b,m,g);let N;if(x)N=Object(o.a)({inputs:{x:d},backend:t,attrs:{shape:y}});else if(v||C){a.Hf.assert(d.shape.length>=1,()=>"Input must have rank at least 1, got: "+d.shape.length);const n=a.lf.computeOutShape(I,w,O),e=Object(i.a)({inputs:{x:d},backend:t,attrs:{begin:I,size:n}});N=Object(o.a)({inputs:{x:e},backend:t,attrs:{shape:y}}),t.disposeIntermediateTensorInfo(e)}else{if(t.shouldExecuteOnCPU([d])){const n=t.readSync(d.dataId),e=Object(a.Hd)(d.shape,d.dtype,n),s=Object(r.M)(k,e,O,I);N=t.makeTensorInfo(y,d.dtype,s.values)}else{const n=new s.a(I,O,k);N=t.runWebGLProgram(n,[d],d.dtype)}}const P=Object(o.a)({inputs:{x:N},backend:t,attrs:{shape:y}});return t.disposeIntermediateTensorInfo(N),P}}},1080:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t(0),r=t(18);const s={kernelName:a.ad,backendName:"webgl",kernelFunc:
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
function(n){const{inputs:e,backend:t,attrs:a}=n,{separator:s,nGramWidths:o,leftPad:i,rightPad:c,padWidth:d,preserveShortSequences:u}=a,{data:p,dataSplits:l}=e,h=t.readSync(p.dataId),f=t.readSync(l.dataId),[b,m]=Object(r.N)(h,f,s,o,i,c,d,u);return[t.makeTensorInfo([b.length],"string",b),t.makeTensorInfo(l.shape,"int32",m)]}}},1081:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t(0),r=t(18);const s={kernelName:a.bd,backendName:"webgl",kernelFunc:
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
function(n){const{inputs:e,backend:t,attrs:a}=n,{skipEmpty:s}=a,{input:o,delimiter:i}=e;if("string"!==o.dtype)throw new Error("Input must be of datatype string");if(1!==o.shape.length)throw new Error("Input must be a vector, got shape: "+o.shape);if(0!==i.shape.length)throw new Error("Delimiter must be a scalar, got shape: "+i.shape);const c=t.readSync(o.dataId),d=t.readSync(i.dataId)[0],[u,p,l]=Object(r.O)(c,d,s),h=p.length;return[t.makeTensorInfo([h,2],"int32",u),t.makeTensorInfo([h],"string",p),t.makeTensorInfo([2],"int32",new Int32Array(l))]}}},1082:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t(0),r=t(18);const s={kernelName:a.cd,backendName:"webgl",kernelFunc:
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
function(n){const{inputs:e,backend:t,attrs:a}=n,{numBuckets:s}=a,{input:o}=e;if("string"!==o.dtype)throw new Error("Input must be of datatype string");if(s<=0)throw new Error("Number of buckets must be at least 1");const i=t.readSync(o.dataId),c=Object(r.P)(i,s);return t.makeTensorInfo(o.shape,"int32",c)}}},1083:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"return tan(x);"}),o={kernelName:a.fd,backendName:"webgl",kernelFunc:s}},1084:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t(0),r=t(15);
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
const s=Object(r.d)({opSnippet:"\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n"}),o={kernelName:a.gd,backendName:"webgl",kernelFunc:s}},1086:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var a=t(0),r=t(18),s=t(460),o=t(152),i=t(404),c=t(17),d=t(131);
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
function u(n,e){null!==e&&n.disposeIntermediateTensorInfo(e)}function p(n){let e=1;for(;e<n;)e*=2;return e}const l={kernelName:a.kd,backendName:"webgl",kernelFunc:function(n){const{inputs:e,backend:t,attrs:l}=n,{x:h}=e,{k:f,sorted:b}=l,m=Object(a.de)().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),g=Object(a.de)().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),k=h.shape,y=k[k.length-1];if(t.shouldExecuteOnCPU([h])||y<m||f>g){const n=t.readSync(h.dataId),[e,a]=Object(r.S)(n,k,h.dtype,f,b);return[t.makeTensorInfo(e.shape,e.dtype,e.values),t.makeTensorInfo(a.shape,a.dtype,a.values)]}if(0===f)return k[k.length-1]=0,[t.makeTensorInfo(k,h.dtype,[]),t.makeTensorInfo(k,"int32",[])];if(1===y)return[h,Object(o.a)({attrs:{shape:k,dtype:"int32",value:0},backend:t})];const x=t.texData.get(h.dataId),v=null!==x&&x.isPacked,C=v?t.unpackTensor(h):h,I=a.Hf.sizeFromShape(k)/y,w=Object(c.a)({inputs:{x:C},attrs:{shape:[I,y]},backend:t});v&&u(t,C);const O=p(f),N=p(y);let P=null;const $=()=>null===P?[w,w]:[w,P],R=(n,e,a)=>{const r=$(),o=new s.b(a),i=[[y],[null===P?1:0],[Number.NEGATIVE_INFINITY],[n],[e]],c=P;P=t.runWebGLProgram(o,r,"int32",i),u(t,c)};for(let n=1;n<O;n*=2){const e=2*n;for(let t=n;t>=1;t/=2)R(e,t,[I,N])}for(let n=N;n>O;n/=2){const e=$(),a=new s.a([I,n/2]),r=[[y],[null===P?1:0],[O]],o=P;P=t.runWebGLProgram(a,e,"int32",r),u(t,o);const i=O/2,c=2*i;for(let n=i;n>=1;n/=2)R(c,n,P.shape)}let S=P;P=Object(d.a)({inputs:{x:P},backend:t,attrs:{begin:0,size:[I,f]}}),u(t,S);let j=Object(i.a)({inputs:{x:w,indices:P},backend:t,attrs:{axis:1,batchDims:1}});u(t,w);const A=k.slice(0,-1);A.push(f),S=P,P=Object(c.a)({inputs:{x:P},attrs:{shape:A},backend:t}),u(t,S);const D=j;return j=Object(c.a)({inputs:{x:j},attrs:{shape:A},backend:t}),u(t,D),[j,P]}}},1087:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t(0),r=t(1088);const s={kernelName:a.ld,backendName:"webgl",kernelFunc:
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
function(n){const{inputs:e,backend:t,attrs:a}=n,{image:s,transforms:o}=e,{interpolation:i,fillMode:c,fillValue:d,outputShape:u}=a,[p,l,h,f]=s.shape,[b,m]=null!=u?u:[l,h],g=[p,b,m,f],k=new r.a(l,h,i,c,d,g);return t.runWebGLProgram(k,[s,o],"float32")}}},1089:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t(0),r=t(18),s=t(13);const o={kernelName:a.nd,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(n){const{inputs:e,attrs:t,backend:a}=n,{axis:o}=t,{x:i}=e;Object(s.a)(i,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const c=a.readSync(i.dataId),{outputValues:d,outputShape:u,indices:p}=Object(r.U)(c,o,i.shape,i.dtype);return[a.makeTensorInfo(u,i.dtype,d),a.makeTensorInfo([p.length],"int32",p)]}}},1090:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t(0),r=t(17),s=t(131);const o={kernelName:a.od,backendName:"webgl",kernelFunc:
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
function(n){const{inputs:e,backend:t,attrs:a}=n,{value:o}=e;let{axis:i}=a;i<0&&(i+=o.shape.length);const c=o,d=c.shape.length,u=o.shape[i],p=new Array(d-1);let l=0;for(let n=0;n<d;n++)n!==i&&(p[l++]=c.shape[n]);const h=[],f=new Array(d).fill(0),b=c.shape.slice();b[i]=1;const m=new Array(u);for(let n=0;n<m.length;n++){f[i]=n;const e=Object(s.a)({inputs:{x:c},backend:t,attrs:{begin:f,size:b}}),a=Object(r.a)({inputs:{x:e},backend:t,attrs:{shape:p}});m[n]=a,h.push(e)}return h.forEach(n=>t.disposeIntermediateTensorInfo(n)),m}}},1091:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var a=t(0),r=t(1092),s=t(412),o=t(17),i=t(414),c=t(57);const d={kernelName:a.pd,backendName:"webgl",kernelFunc:
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
function(n){const{inputs:e,backend:t,attrs:d}=n,{x:u,segmentIds:p}=e,{numSegments:l}=d,h=u.shape.length,f=[];let b=0;const m=a.Ad.getAxesPermutation([b],h);let g=u;null!=m&&(g=Object(c.a)({inputs:{x:u},backend:t,attrs:{perm:m}}),f.push(g),b=a.Ad.getInnerMostAxes(1,h)[0]);const k=a.Ad.segment_util.computeOutShape(g.shape,b,l),y=a.Hf.sizeFromShape([g.shape[b]]),x=Object(o.a)({inputs:{x:g},backend:t,attrs:{shape:[-1,y]}});f.push(x);const v=Object(a.uf)(u.dtype),C=(n,e,o,c,d)=>{const u=n.shape[0],p=n.shape[1],l=a.Ad.segment_util.segOpComputeOptimalWindowSize(p,d),h={windowSize:l,inSize:p,batchSize:u,numSegments:d},b=new r.a(h,e),m=t.compileAndRun(b,[n,o],c);if(f.push(m),m.shape[1]===d)return m;const g=Object(s.a)({backend:t,attrs:{start:0,stop:d,step:1,dtype:"float32"}}),k=Object(i.a)({inputs:{x:g},backend:t,attrs:{reps:[p/l]}});f.push(g),f.push(k);return C(m,e,k,c,d)},I=C(x,"unsortedSegmentSum",p,v,l),w=Object(o.a)({inputs:{x:I},backend:t,attrs:{shape:k}});let O=w;if(null!=m){f.push(w);const n=a.Ad.getUndoAxesPermutation(m);O=Object(c.a)({inputs:{x:O},backend:t,attrs:{perm:n}})}return f.forEach(n=>t.disposeIntermediateTensorInfo(n)),O}}},159:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t(0),r=t(896),s=t(895);
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
function o(n,e,t){const o=Object(a.de)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new s.a(n.shape,e):new r.a(n.shape,e);return t.runWebGLProgram(o,[n],n.dtype)}},186:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return o}));var a=t(0),r=t(897);
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
function s(n){const{inputs:e,backend:t,attrs:a}=n,{x:s}=e,{axis:o,keepDims:i}=a;return Object(r.a)(s,o,i,t)}const o={kernelName:a.ed,backendName:"webgl",kernelFunc:s}},406:function(n,e,t){"use strict";t.d(e,"a",(function(){return MaxPool2DBackpropProgram})),t.d(e,"b",(function(){return MaxPool3DBackpropProgram}));
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
 */
class MaxPool2DBackpropProgram{constructor(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;const e=n.strideHeight,t=n.strideWidth,a=n.dilationHeight,r=n.effectiveFilterHeight,s=n.effectiveFilterWidth,o=r-1-n.padInfo.top,i=s-1-n.padInfo.left,c=r*s-1;this.userCode=`\n      const ivec2 pads = ivec2(${o}, ${i});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${r};\n          wR += ${a}) {\n          float dyR = float(dyRCorner + wR) / ${e}.0;\n\n          if (dyR < 0.0 || dyR >= ${n.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ${s}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${t}.0;\n\n            if (dyC < 0.0 || dyC >= ${n.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * ${s} + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class MaxPool3DBackpropProgram{constructor(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;const e=n.strideDepth,t=n.strideHeight,a=n.strideWidth,r=n.dilationDepth,s=n.dilationHeight,o=n.dilationWidth,i=n.effectiveFilterDepth,c=n.effectiveFilterHeight,d=n.effectiveFilterWidth,u=i-1-n.padInfo.front,p=c-1-n.padInfo.top,l=d-1-n.padInfo.left,h=i*c*d-1;this.userCode=`\n      const ivec3 pads = ivec3(${u}, ${p}, ${l});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ${i};\n           wD += ${r}) {\n          float dyD = float(dyDCorner + wD) / ${e}.0;\n\n          if (dyD < 0.0 || dyD >= ${n.outDepth}.0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ${c};\n              wR += ${s}) {\n            float dyR = float(dyRCorner + wR) / ${t}.0;\n\n            if (dyR < 0.0 || dyR >= ${n.outHeight}.0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ${d};\n                wC += ${o}) {\n              float dyC = float(dyCCorner + wC) / ${a}.0;\n\n              if (dyC < 0.0 || dyC >= ${n.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = ${h} -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * ${c} * ${d} +\n                  wR * ${d} + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}},408:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return c}));var a=t(0),r=t(15),s=t(18);
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
const o="return a - b;",i=Object(r.b)({opSnippet:o,packedOpSnippet:o,supportsComplex:!0,cpuKernelImpl:s.Q}),c={kernelName:a.dd,backendName:"webgl",kernelFunc:i}},410:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return d}));var a=t(0),r=t(95),s=t(152),o=t(187),i=t(151);
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
function c(n){const{inputs:e,backend:t}=n,{x:a}=e;if("complex64"===a.dtype){const n=Object(i.a)({inputs:{input:a},backend:t}),e=c({inputs:{x:n},backend:t}),s=Object(o.a)({inputs:{input:a},backend:t}),d=c({inputs:{x:s},backend:t}),u=Object(r.a)({inputs:{real:e,imag:d},backend:t});return t.disposeIntermediateTensorInfo(n),t.disposeIntermediateTensorInfo(e),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(d),u}return Object(s.a)({attrs:{shape:a.shape,dtype:a.dtype,value:"string"===a.dtype?"":0},backend:t})}const d={kernelName:a.qd,backendName:"webgl",kernelFunc:c}},414:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return i}));var a=t(0),r=t(18),s=t(1085);
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
function o(n){const{inputs:e,backend:t,attrs:o}=n,{x:i}=e,{reps:c}=o;if("string"===i.dtype||i.shape.length>5){const n=t.readSync(i.dataId),e="string"===i.dtype?n.map(n=>a.Hf.decodeString(n)):n,s=Object(a.Hd)(i.shape,i.dtype,e),o=Object(r.R)(s,c);return t.makeTensorInfo(o.shape,o.dtype,o.values)}const d=new s.a(i.shape,c);return t.runWebGLProgram(d,[i],i.dtype)}const i={kernelName:a.jd,backendName:"webgl",kernelFunc:o}},57:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return i}));var a=t(0),r=t(159),s=t(18);
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
function o(n){const{inputs:e,backend:t,attrs:a}=n,{x:o}=e,{perm:i}=a,c=t,d=o.shape.length,u=new Array(d);for(let n=0;n<u.length;n++)u[n]=o.shape[i[n]];let p;if(c.shouldExecuteOnCPU([o])){const n=c.texData.get(o.dataId).values,e=Object(s.T)(n,o.shape,o.dtype,i,u);p=c.makeTensorInfo(u,o.dtype);c.texData.get(p.dataId).values=e}else p=Object(r.a)(o,i,c);return p}const i={kernelName:a.md,backendName:"webgl",kernelFunc:o}},893:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t(0),r=t(189);const s={kernelName:a.rd,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(n){const{inputs:e,backend:t,attrs:a}=n,{a:s,b:o,bias:i,preluActivationWeights:c}=e,{transposeA:d,transposeB:u,activation:p,leakyreluAlpha:l}=a;return Object(r.b)({a:s,b:o,transposeA:d,transposeB:u,backend:t,bias:i,preluActivationWeights:c,leakyreluAlpha:l,activation:p})}}},897:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var a=t(0),r=t(109),s=t(17),o=t(159);
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
function i(n,e,t,i){const c=e,d=n.shape.length,u=a.Hf.parseAxisParam(c,n.shape);let p=u;const l=a.Ad.getAxesPermutation(p,d),h=null!=l;let f=n;h&&(f=Object(o.a)(n,l,i),p=a.Ad.getInnerMostAxes(p.length,d)),a.Ad.assertAxesAreInnerMostDims("sum",p,d);const[b,m]=a.Ad.computeOutAndReduceShapes(f.shape,p);let g=b;t&&(g=a.Ad.expandShapeToKeepDim(b,u));const k=a.Hf.sizeFromShape(m),y=a.Hf.sizeFromShape(n.shape)/k,x=Object(s.a)({inputs:{x:f},attrs:{shape:[y,k]},backend:i}),v=Object(a.uf)(n.dtype),C=Object(r.a)(x,v,"sum",i),I=Object(s.a)({inputs:{x:C},attrs:{shape:g},backend:i});return i.disposeIntermediateTensorInfo(x),i.disposeIntermediateTensorInfo(C),h&&i.disposeIntermediateTensorInfo(f),I}},999:function(n,e,t){"use strict";t.d(e,"a",(function(){return LRNPackedProgram}));
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
class LRNPackedProgram{constructor(n,e,t,a,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const s=e,o=n[3]-1;let i;this.outputShape=n;const c=`float(${t}) + float(${a}) * sum`;i=.5===r?`inversesqrt(${c})`:1===r?`1.0/(${c})`:`exp(log(${c}) * float(-${r}));`,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < ${this.outputShape[3]};\n        bool hasNextRow = c < ${this.outputShape[2]};\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - ${s};\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - ${s}; j <= ${s}; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * ${i};\n        setOutput(result);\n      }\n    `}}}}]);