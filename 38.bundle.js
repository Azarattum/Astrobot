(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{250:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return BinaryOpComplexProgram}));var a=n(0);
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
 */const s={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class BinaryOpComplexProgram{constructor(t,e,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=a.Ad.assertAndGetBroadcastShape(e,n),this.userCode=`\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        ${t}\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    `}}},554:function(t,e,n){"use strict";var a=n(0),s=n(355),r=n(555);n.d(e,"a",(function(){return r.a}));var o=n(357);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */a.Xd.isBrowser()&&Object(a.Ve)("webgl",()=>new s.a,2);o.a},75:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return BinaryOpPackedProgram}));var a=n(0),s=n(51),r=n(60),o=n(40);
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
const u="\n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n";class BinaryOpPackedProgram{constructor(t,e,n,u=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a.Ad.assertAndGetBroadcastShape(e,n);const i=this.outputShape.length;this.enableShapeUniforms=Object(s.e)(i);let l="";if(u)if(0===i||1===a.Hf.sizeFromShape(this.outputShape))l="\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";else{if(l=`\n          ${Object(o.a)(i)} coords = getOutputCoords();\n        `,1===i)this.enableShapeUniforms?l+="\n            result.y = (coords + 1) >= outShape ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ":l+=`\n            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          `;else{const t=Object(r.a)("coords",i);this.enableShapeUniforms?l+=`\n            bool nextRowOutOfBounds =\n              (${t[i-2]} + 1) >= outShape[${i} - 2];\n            bool nextColOutOfBounds =\n              (${t[i-1]} + 1) >= outShape[${i} - 1];\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `:l+=`\n            bool nextRowOutOfBounds =\n              (${t[i-2]} + 1) >= ${this.outputShape[i-2]};\n            bool nextColOutOfBounds =\n              (${t[i-1]} + 1) >= ${this.outputShape[i-1]};\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `}}this.userCode=`\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        ${t}\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        ${l}\n\n        setOutput(result);\n      }\n    `}}},90:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return BinaryOpProgram}));var a=n(0),s=n(51);
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
const r="\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n";class BinaryOpProgram{constructor(t,e,n){this.variableNames=["A","B"],this.outputShape=a.Ad.assertAndGetBroadcastShape(e,n),this.enableShapeUniforms=Object(s.e)(this.outputShape.length),this.userCode=`\n      float binaryOperation(float a, float b) {\n        ${t}\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    `}}},923:function(t,e,n){"use strict";n.d(e,"a",(function(){return BatchNormPackedProgram}));var a=n(0);
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
 */class BatchNormPackedProgram{constructor(t,e,n,s,r,o){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],a.Ad.assertAndGetBroadcastShape(t,e),a.Ad.assertAndGetBroadcastShape(t,n);let u="vec4(0.0)";null!=s&&(a.Ad.assertAndGetBroadcastShape(t,s),this.variableNames.push("offset"),u="getOffsetAtOutCoords()");let i="vec4(1.0)";null!=r&&(a.Ad.assertAndGetBroadcastShape(t,r),this.variableNames.push("scale"),i="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`\n      void main() {\n        vec4 offset = ${u};\n        vec4 scale = ${i};\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(${o}));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    `}}},924:function(t,e,n){"use strict";n.d(e,"a",(function(){return BatchNormProgram}));var a=n(0);
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
 */class BatchNormProgram{constructor(t,e,n,s,r,o){this.outputShape=[],this.variableNames=["x","mean","variance"],a.Ad.assertAndGetBroadcastShape(t,e),a.Ad.assertAndGetBroadcastShape(t,n);let u="0.0";null!=s&&(a.Ad.assertAndGetBroadcastShape(t,s),this.variableNames.push("offset"),u="getOffsetAtOutCoords()");let i="1.0";null!=r&&(a.Ad.assertAndGetBroadcastShape(t,r),this.variableNames.push("scale"),i="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = ${u};\n        float scale = ${i};\n        float inv = scale * inversesqrt(variance + float(${o}));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    `}}},934:function(t,e,n){"use strict";n.d(e,"a",(function(){return ClipPackedProgram}));
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
class ClipPackedProgram{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode="\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    "}}},935:function(t,e,n){"use strict";n.d(e,"a",(function(){return ClipProgram}));
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
class ClipProgram{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode="\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    "}}},937:function(t,e,n){"use strict";n.d(e,"a",(function(){return ComplexAbsProgram}));
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
class ComplexAbsProgram{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode="\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "}}},97:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return u}));var a=n(0);
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
 */const s={},r={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function o(t,e){s[t]=e}function u(t,e){if(!(t in s)||null!=e){const n=function(t,e){if(1!==t&&2!==t)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const n=null==e?function(t){if("undefined"!=typeof OffscreenCanvas&&2===t)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(t):e;n.addEventListener("webglcontextlost",e=>{e.preventDefault(),delete s[t]},!1),Object(a.de)().getBool("SOFTWARE_WEBGL_ENABLED")&&(r.failIfMajorPerformanceCaveat=!1);if(1===t)return n.getContext("webgl",r)||n.getContext("experimental-webgl",r);return n.getContext("webgl2",r)}(t,e);if(null===n)return console.log("Could not get context for WebGL version",t),null;s[t]=n}const n=s[t];return null==n||n.isContextLost()?(delete s[t],u(t)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),s[t])}}}]);