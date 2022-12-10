(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1016:function(t,n,e){"use strict";e.d(n,"a",(function(){return MirrorPadPackedProgram}));var o=e(60),r=e(40);
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
class MirrorPadPackedProgram{constructor(t,n,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.map((n,e)=>n[0]+t[e]+n[1]);const s=t.length,a=Object(r.a)(s),i=n.map(t=>t[0]).join(","),u=n.map((n,e)=>n[0]+t[e]).join(","),c=Object(o.a)("rc",s),l=Object(o.a)("source",s),h=`${c[s-1]} < ${this.outputShape[s-1]}`,d=1===s?"source":`vec2(${l.slice(-2).join()})`,$="reflect"===e?0:1;let p="";if(1===s){const t=`\n        ${a} source = rc;\n        if (source < start) {\n          source = start * 2 - source - ${$};\n        } else if (source >= end) {\n          source = (end - 1) * 2 - source + ${$};\n        }\n        source -= start;\n      `;p=`\n        ${a} rc = outputLoc;\n        ${t}\n        result[0] = getChannel(getX(${l.join()}), ${d});\n        ${c[s-1]} += 1;\n        if(${h}) {\n          ${t}\n          result[1] = getChannel(getX(${l.join()}), ${d});\n        }\n      `}else{const t=`\n        ${a} source = rc;\n        ${a} lt = ${a}(lessThan(source, start));\n        ${a} gte = ${a}(greaterThanEqual(source, end));\n        ${a} orig = 1 - (lt + gte);\n        source = orig * source +\n                lt * (start * 2 - source - ${$}) +\n                gte * ((end - 1) * 2 - source + ${$});\n        source -= start;\n      `;p=`\n        ${a} rc = outputLoc;\n        ${t}\n        result[0] = getChannel(getX(${l.join()}), ${d});\n        ${c[s-1]} += 1;\n        if(${h}) {\n          ${t}\n          result[1] = getChannel(getX(${l.join()}), ${d});\n        }\n        rc = outputLoc;\n        ${c[s-2]} += 1;\n        if(${c[s-2]} < ${this.outputShape[s-2]}) {\n          ${t}\n          result[2] = getChannel(getX(${l.join()}), ${d});\n          ${c[s-1]} += 1;\n          if(${h}) {\n            ${t}\n            result[3] = getChannel(getX(${l.join()}), ${d});\n          }\n        }\n      `}this.userCode=`\n      const ${a} start = ${a}(${i});\n      const ${a} end = ${a}(${u});\n\n      void main() {\n        ${a} outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ${p}\n        setOutput(result);\n      }\n    `}}},1017:function(t,n,e){"use strict";e.d(n,"a",(function(){return MirrorPadProgram}));var o=e(40);
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
 */class MirrorPadProgram{constructor(t,n,e){this.variableNames=["x"],this.outputShape=n.map((n,e)=>n[0]+t[e]+n[1]);const r=t.length,s=Object(o.a)(r),a=n.map(t=>t[0]).join(","),i=n.map((n,e)=>n[0]+t[e]).join(","),u=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r),c="reflect"===e?0:1;this.userCode=1!==r?`\n      ${s} start = ${s}(${a});\n      ${s} end = ${s}(${i});\n\n      void main() {\n        ${s} outC = getOutputCoords();\n        for (int i = 0; i < ${r}; i++) {\n          if (outC[i] < start[i]) {\n            outC[i] = start[i] * 2 - outC[i] - ${c};\n          } else if(outC[i] >= end[i]) {\n            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};\n          }\n        }\n        ${s} coords = outC - start;\n        setOutput(getX(${u}));\n      }\n    `:`\n        int start = ${a};\n        int end = ${i};\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start) {\n            outC = start * 2 - outC - ${c};\n          } else if(outC >= end) {\n            outC = (end - 1) * 2 - outC + ${c};\n          }\n          setOutput(getX(outC - start));\n        }\n      `}}},1020:function(t,n,e){"use strict";e.d(n,"a",(function(){return MultinomialProgram}));
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
class MultinomialProgram{constructor(t,n,e){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,e],this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < ${n-1}; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(${n-1}));\n      }\n    `}}},1026:function(t,n,e){"use strict";e.d(n,"a",(function(){return OneHotProgram}));
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
class OneHotProgram{constructor(t,n,e,o){this.variableNames=["indices"],this.outputShape=[t,n],this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(${o}), float(${e}),\n                      float(index == coords.y)));\n      }\n    `}}},1029:function(t,n,e){"use strict";e.d(n,"a",(function(){return PadPackedProgram}));var o=e(60),r=e(40);
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
class PadPackedProgram{constructor(t,n,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((n,e)=>n[0]+t[e]+n[1]);const s=t.length,a=Object(r.a)(s),i=n.map(t=>t[0]).join(","),u=n.map((n,e)=>n[0]+t[e]).join(","),c=Object(o.a)("rc",s),l=Object(o.a)("source",s),h=`${c[s-1]} < ${this.outputShape[s-1]}`,d=1===s?"source":`vec2(${l.slice(-2).join()})`,$=[a+" rc = outputLoc;",`${c[s-1]} += 1;\n       if(${h}) {\n      `,1===s?"":`}\n       rc = outputLoc;\n       ${c[s-2]} += 1;\n       if(${c[s-2]} < ${this.outputShape[s-2]}) {`,1===s?"":`  ${c[s-1]} += 1;\n         if(${h}) {`],p=1===s?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let f="";for(let t=0,n=1===s?2:4;t<n;t++)f+=`\n        ${$[t]}\n        if (${p}) {\n          result[${t}] = float(value);\n        } else {\n          ${a} source = rc - start;\n          result[${t}] = getChannel(getX(${l.join()}), ${d});\n        }\n      `;f+=1===s?"} ":"}}",this.userCode=`\n      const ${a} start = ${a}(${i});\n      const ${a} end = ${a}(${u});\n\n      void main() {\n        ${a} outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ${f}\n        setOutput(result);\n      }\n    `}}},1030:function(t,n,e){"use strict";e.d(n,"a",(function(){return PadProgram}));var o=e(40);
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
 */class PadProgram{constructor(t,n,e){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((n,e)=>n[0]+t[e]+n[1]);const r=t.length,s=Object(o.a)(r),a=n.map(t=>t[0]).join(","),i=n.map((n,e)=>n[0]+t[e]).join(","),u=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=1!==r?`\n      ${s} start = ${s}(${a});\n      ${s} end = ${s}(${i});\n\n      void main() {\n        ${s} outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(value);\n        } else {\n          ${s} coords = outC - start;\n          setOutput(getX(${u}));\n        }\n      }\n    `:`\n        int start = ${a};\n        int end = ${i};\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(value);\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      `}}},392:function(t,n,e){"use strict";e.d(n,"a",(function(){return MatMulPackedProgram}));var o=e(51);
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
 */class MatMulPackedProgram{constructor(t,n,e,r=!1,s=!1,a=!1,i=null,u=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=Object(o.e)(this.outputShape.length);const l=r?t[1]:t[2],h=Math.ceil(l/2),d=r?"i * 2, rc.y":"rc.y, i * 2",$=s?"rc.z, i * 2":"i * 2, rc.z",p=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",v="";i&&(g=u?`vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ${i}\n        }`:c?`vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ${i}\n        }`:`vec4 activation(vec4 x) {\n          ${i}\n        }`,v="result = activation(result);");const m=a?"result += getBiasAtOutCoords();":"";a&&this.variableNames.push("bias"),u&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let b="rc.x",C="rc.x";t[0]<n[0]?b=`int(min(float(rc.x), ${t[0]-1}.))`:n[0]<t[0]&&(C=`int(min(float(rc.x), ${n[0]-1}.))`),this.userCode=`\n      ${g}\n      // Don't use uniform for sharedDimensionPacked for performance.\n      const float sharedDimension = ${h}.0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < ${h}; i++) {\n          int batchA = ${b};\n          int batchB = ${C};\n          vec4 a = getMatrixA(batchA, ${d});\n          vec4 b = getMatrixB(batchB, ${$});\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (${p[0]} * ${f[0]});\n          result += (${p[1]} * ${f[1]});\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        ${m}\n\n        ${v}\n\n        setOutput(result);\n      }\n    `}}},458:function(t,n,e){"use strict";e.d(n,"a",(function(){return MeanProgram}));var o=e(0);
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
 */class MeanProgram{constructor(t,n){this.variableNames=["x"];const{windowSize:e,batchSize:r,inSize:s,outSize:a}=t;this.outputShape=[r,a];const i=4*Math.floor(e/4),u=e%4;let c="sumValue += dot(values, ones);";if(null!=n){const t=1/n;c=`sumValue += dot(values * ${o.Hf.isInt(t)?t.toPrecision(2):t}, ones);`}let l="";s%e>0&&(l=`\n        if (inIdx < 0 || inIdx >= ${s}) {\n          return 0.0;\n        }\n      `),this.userCode=`\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ${l}\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${e};\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ${i}; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ${c}\n        }\n\n        int inIdx = inOffset + ${i};\n        if (${1===u}) {\n          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);\n\n          ${c}\n        } else if (${2===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1), 0.0, 0.0);\n\n          ${c}\n        } else if (${3===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2), 0.0);\n\n          ${c}\n        }\n        setOutput(sumValue);\n      }\n    `}}},60:function(t,n,e){"use strict";
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
function o(t,n){return["x","y","z","w","u","v"].slice(0,n).map(n=>`${t}.${n}`)}function r(t,n){return 1===n?[t]:o(t,n)}function s(t,n){if(1===t)return"rc";let e="";for(let o=0;o<t;o++)e+=n[o],o<t-1&&(e+=",");return e}e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return s}))},889:function(t,n,e){"use strict";e.d(n,"a",(function(){return PackProgram}));var o=e(51),r=e(60),s=e(40);
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
class PackProgram{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=Object(o.e)(this.outputShape.length),0===this.rank)this.userCode="\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";else{const t=Object(r.a)("rc",this.rank),n=Object(s.a)(this.rank),e=this.getOutOfBoundsCondition(t),o=this.getSetup(t),a=this.getOutput(t);this.userCode=`\n        void main() {\n          ${n} rc = getOutputCoords();\n\n          if(${e}) {\n            setOutput(vec4(0));\n          } else {\n            ${o}\n\n            setOutput(vec4(${a}));\n          }\n        }\n      `}}getSourceCoordsArr(t){const n=[];for(let e=0;e<=1;e++)for(let o=0;o<=1;o++){let r=`${0===e?"r":"rp1"}, ${0===o?"c":"cp1"}`;for(let n=2;n<this.rank;n++)r=t[t.length-1-n]+","+r;n.push(r)}return n}getOutOfBoundsCondition(t){if(1===this.rank)return"rc > "+(this.enableShapeUniforms?"outShape":this.outputShape[0]);let n="";for(let e=this.rank-2;e<this.rank;e++)n+=`${t[e]} >= ${this.enableShapeUniforms?`outShape[${e}]`:this.outputShape[e]}`,e<this.rank-1&&(n+="||");return n}getSetup(t){if(1===this.rank)return"";const n=t.slice(-2),e=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`\n      int r = ${n[0]};\n      int c = ${n[1]};\n      int rp1 = r + 1;\n      int cp1 = c + 1;\n\n      bool cEdge = cp1 >= ${e};\n      bool rEdge = rp1 >= ${o};\n    `}getOutput(t){const n=this.getSourceCoordsArr(t);if(1===this.rank){return`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`}return`getA(${n[0]}),\n            cEdge ? 0. : getA(${n[1]}),\n            rEdge ? 0. : getA(${n[2]}),\n            rEdge || cEdge ? 0. : getA(${n[3]})`}}}}]);