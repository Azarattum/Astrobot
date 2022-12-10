(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1260:function(t,e,n){"use strict";var o=n(0),r=n(13);
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
const i=Object(o.de)();i.registerFlag("HAS_WEBGL",()=>i.getNumber("WEBGL_VERSION")>0),i.registerFlag("WEBGL_VERSION",()=>Object(r.C)(2)?2:Object(r.C)(1)?1:0),i.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),i.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>2===i.get("WEBGL_VERSION")),i.registerFlag("WEBGL_CPU_FORWARD",()=>!0),i.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),i.registerFlag("WEBGL_PACK",()=>i.getBool("HAS_WEBGL")),i.registerFlag("WEBGL_PACK_NORMALIZATION",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_CLIP",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_REDUCE",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_LAZILY_UNPACK",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_CONV_IM2COL",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>Object(r.w)(i.getNumber("WEBGL_VERSION"))),i.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>Object(r.p)(i.getNumber("WEBGL_VERSION"))),i.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const t=i.getNumber("WEBGL_VERSION");return 0===t?0:Object(r.v)(t)}),i.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!o.Xd.isMobile()),i.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>Object(r.y)(i.getNumber("WEBGL_VERSION"))),i.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>!i.getBool("WEBGL_FORCE_F16_TEXTURES")&&i.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),i.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>Object(r.z)(i.getNumber("WEBGL_VERSION"))),i.registerFlag("WEBGL_FENCE_API_ENABLED",()=>Object(r.B)(i.getNumber("WEBGL_VERSION"))),i.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>i.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0),i.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,t=>{if(t<0&&-1!==t)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${t}.`)}),i.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>o.Xd.isMobile()?1:-1,t=>{if(t<0&&-1!==t)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${t}.`)}),i.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),i.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),i.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),i.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),i.registerFlag("WEBGL_EXP_CONV",()=>!1),i.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>i.getBool("IS_TEST")),i.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0),i.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1),i.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1),i.registerFlag("ENGINE_COMPILE_ONLY",()=>!1)},457:function(t,e,n){"use strict";n.d(e,"a",(function(){return EncodeMatrixProgram}));var o=n(62),r=n(51),i=n(61);
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
const a={R:0,G:1,B:2,A:3};class EncodeMatrixProgram{constructor(t,e=!1,n="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Object(o.a)();this.outputShape=t,this.enableShapeUniforms=Object(r.e)(this.outputShape.length);let l="result";e&&(l="floor(result * 255. + 0.5)");let c="";for(let t=0;t<n.length;t++){const e=n[t];c+=`\n          if(offset == ${t}) {\n            result = values[${a[e]}];\n          }`}this.userCode=`\n      ${this.enableShapeUniforms?i.c():i.b(t)}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int flatIndex = getFlatIndex(coords);\n        float result = 0.;\n        int offset = imod(flatIndex, ${n.length});\n\n        flatIndex = idiv(flatIndex, ${n.length}, 1.);\n\n        int r = flatIndex / texShape[1];\n        if (r < texShape[0]) {\n          int c = imod(flatIndex, texShape[1]);\n          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n          vec4 values = ${s.texture2D}(A, uv);\n          ${c}\n        }\n        ${s.output} = vec4(${l}, 0., 0., 0.);\n      }\n    `}}},459:function(t,e,n){"use strict";n.d(e,"a",(function(){return FFTProgram}));
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
class FFTProgram{constructor(t,e,n){this.variableNames=["real","imag"];const o=e[1];this.outputShape=e;const r=n?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,i=n?o+".0":"1.0";let a;if("real"===t)a="return real * expR - imag * expI;";else{if("imag"!==t)throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);a="return real * expI + imag * expR;"}this.userCode=`\n      const float exponentMultiplier = ${r};\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        ${a}\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(${o});\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < ${o}; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / ${i};\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    `}}},886:function(t,e,n){"use strict";n.d(e,"a",(function(){return EncodeFloatPackedProgram}));var o=n(62),r=n(61),i=n(33);
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
class EncodeFloatPackedProgram{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=i.c.DOWNLOAD;const e=Object(o.a)();this.outputShape=t,this.userCode=`\n      ${r.a}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        ${e.output} = encode_float(x);\n      }\n    `}}},887:function(t,e,n){"use strict";n.d(e,"a",(function(){return EncodeFloatProgram}));var o=n(62),r=n(61),i=n(33);
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
class EncodeFloatProgram{constructor(t){this.variableNames=["A"],this.outTexUsage=i.c.DOWNLOAD;const e=Object(o.a)();this.outputShape=t,this.userCode=`\n      ${r.a}\n\n      void main() {\n        float x = getAAtOutCoords();\n        ${e.output} = encode_float(x);\n      }\n    `}}},890:function(t,e,n){"use strict";n.d(e,"a",(function(){return DecodeMatrixPackedProgram}));var o=n(62),r=n(51),i=n(61),a=n(33);
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
class DecodeMatrixPackedProgram{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=a.a.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=Object(o.a)();this.outputShape=t,this.enableShapeUniforms=Object(r.e)(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?i.f(["r","c","d"],t):i.d(["r","c","d"],t)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        ${e.output} = result;\n      }\n    `}}},891:function(t,e,n){"use strict";n.d(e,"a",(function(){return DecodeMatrixProgram}));var o=n(62),r=n(51),i=n(61),a=n(33);
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
class DecodeMatrixProgram{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=a.a.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=Object(o.a)();this.outputShape=t,this.enableShapeUniforms=Object(r.e)(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?i.f(["r","c","d"],t):i.d(["r","c","d"],t)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        ${e.output} = result;\n      }\n    `}}},892:function(t,e,n){"use strict";n.d(e,"a",(function(){return EncodeMatrixPackedProgram}));var o=n(62),r=n(51),i=n(61);
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
class EncodeMatrixPackedProgram{constructor(t,e=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=Object(o.a)();this.outputShape=t,this.enableShapeUniforms=Object(r.e)(this.outputShape.length);let a="",s="result";e&&(s="floor(result * 255. + 0.5)");for(let e=0;e<=1;e++)for(let o=0;o<=1;o++){const r=2*e+o;a+=`\n          localCoords = coords;\n          if(localCoords[2] + ${o} < ${this.enableShapeUniforms?"outShape[2]":""+t[2]}) {\n          localCoords[2] += ${o};\n          if (localCoords[1] + ${e} < ${this.enableShapeUniforms?"outShape[1]":""+t[1]}) {\n            localCoords[1] += ${e};\n\n            flatIndex = getFlatIndex(localCoords);\n            offset = imod(flatIndex, 4);\n\n            flatIndex = idiv(flatIndex, 4, 1.);\n\n            int r = flatIndex / texShape[1];\n            int c = imod(flatIndex, texShape[1]);\n            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n            values = ${n.texture2D}(A, uv);\n\n            if (offset == 0) {\n              result[${r}] = values[0];\n            } else if (offset == 1) {\n              result[${r}] = values[1];\n            } else if (offset == 2) {\n              result[${r}] = values[2];\n            } else {\n              result[${r}] = values[3];\n            }\n          }\n        }\n        `}this.userCode=`\n        ${this.enableShapeUniforms?i.c():i.b(t)}\n\n        void main() {\n          ivec3 coords = getOutputCoords();\n\n          vec4 result = vec4(0.);\n          int flatIndex, r, c, offset;\n          ivec3 localCoords;\n          vec2 uv;\n          vec4 values;\n\n          ${a}\n\n          ${n.output} = ${s};\n        }\n    `}}},956:function(t,e,n){"use strict";n.d(e,"a",(function(){return DepthToSpaceProgram}));
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
class DepthToSpaceProgram{constructor(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = ${this.getHeightCoordString()};\n      int w = ${this.getWidthCoordString()};\n      int d = ${this.getDepthCoordString()};\n\n      int in_h = h / ${e};\n      int offset_h = imod(h, ${e});\n      int in_w = w / ${e};\n      int offset_w = imod(w, ${e});\n      int offset_d = (offset_h * ${e} + offset_w) *\n        ${this.getOutputDepthSize()};\n      int in_d = d + offset_d;\n\n      float result = ${this.getInputSamplingString()};\n      setOutput(result);\n    }\n  `}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}},961:function(t,e,n){"use strict";n.d(e,"a",(function(){return DiagProgram}));
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
class DiagProgram{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode="\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    "}}},963:function(t,e,n){"use strict";n.d(e,"a",(function(){return Dilation2DProgram}));
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
class Dilation2DProgram{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const{inHeight:e,inWidth:n,padInfo:o,strideHeight:r,strideWidth:i,filterHeight:a,filterWidth:s,dilationHeight:l,dilationWidth:c}=t,{top:u,left:d}=o;this.userCode=`\n      const ivec2 strides = ivec2(${r}, ${i});\n      const ivec2 pads = ivec2(${u}, ${d});\n      const float neg_infinity = -3.4e38;\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.w;\n        ivec2 outTopLeftCorner =\n            coords.yz * strides - pads;\n        int hBeg = outTopLeftCorner.x;\n        int wBeg = outTopLeftCorner.y;\n\n        float curVal = neg_infinity;\n        for (int h = 0; h < ${a}; h++) {\n          int hIn = hBeg + h * ${l};\n\n          if (hIn >= 0 && hIn < ${e}) {\n            for (int w = 0; w < ${s}; w++) {\n              int wIn = wBeg + w * ${c};\n\n              if (wIn >= 0 && wIn < ${n}) {\n                float xVal = getX(batch, hIn, wIn, d1);\n                float wVal = getW(h, w, d1);\n\n                float val = xVal + wVal;\n                if (val > curVal) {\n                  curVal = val;\n                }\n              }\n            }\n          }\n        }\n\n        float result = curVal;\n        setOutput(result);\n      }\n    `}}},971:function(t,e,n){"use strict";n.d(e,"a",(function(){return FillProgram}));
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
class FillProgram{constructor(t,e){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode="\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "}}}}]);