(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{103:function(n,e,t){"use strict";t.d(e,"a",(function(){return Pool2DProgram})),t.d(e,"b",(function(){return Pool3DProgram}));
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
class Pool2DProgram{constructor(n,e,t,a=!1,o=!1){if(this.variableNames=["x"],"avg"===e&&t)throw new Error("Cannot compute positions for average pool.");const i=n.filterWidth,r=n.strideHeight,c=n.strideWidth,u=n.dilationHeight,s=n.dilationWidth,l=n.effectiveFilterHeight,d=n.effectiveFilterWidth,x=n.padInfo.top,f=n.padInfo.left;this.outputShape=n.outShape;const C="avg"===e,h=`((batch  * ${n.inHeight} + xR) * ${n.inWidth} + xC) * ${n.inChannels} + d`,v=`(xR * ${n.inWidth} + xC) * ${n.inChannels} + d`;let R="0.0";if(C||(R="-1.0 / 1e-20"),t){const e=">=";return void(this.userCode=`\n        const ivec2 strides = ivec2(${r}, ${c});\n        const ivec2 pads = ivec2(${x}, ${f});\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < ${l};\n              wR += ${u}) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ${n.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${d};\n                wC += ${s}) {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= ${n.inWidth}) {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value ${e} currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = ${a?o?h:v:`wR * ${d} + wC`};\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      `)}let p=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===e&&(p="avgValue / count");const g=4*Math.floor(i/4),$=i%4,m=`\n      if (${C}) {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    `;this.userCode=`\n      const ivec2 strides = ivec2(${r}, ${c});\n      const ivec2 pads = ivec2(${x}, ${f});\n      const float initializationValue = ${R};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= ${n.inWidth}) {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(${R});\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < ${l};\n            wR += ${u}) {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= ${n.inHeight}) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${g}; wC += 4) {\n            int xC = xCCorner + wC * ${s};\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${s}, d),\n              getValue(batch, xR, xC + 2 * ${s}, d),\n              getValue(batch, xR, xC + 3 * ${s}, d)\n            );\n\n            ${m}\n          }\n\n          int xC = xCCorner + ${g};\n          if (${1===$}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            ${m}\n          } else if (${2===$}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${s}, d),\n              initializationValue,\n              initializationValue\n            );\n\n            ${m}\n          } else if (${3===$}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${s}, d),\n              getValue(batch, xR, xC + 2 * ${s}, d),\n              initializationValue\n            );\n\n            ${m}\n          }\n        }\n        setOutput(${p});\n      }\n    `}}class Pool3DProgram{constructor(n,e,t,a=!1,o=!1){if(this.variableNames=["x"],"avg"===e&&t)throw new Error("Cannot compute positions for average pool.");const i=n.filterWidth,r=n.strideDepth,c=n.strideHeight,u=n.strideWidth,s=n.dilationDepth,l=n.dilationHeight,d=n.dilationWidth,x=n.effectiveFilterDepth,f=n.effectiveFilterHeight,C=n.effectiveFilterWidth,h=n.padInfo.front,v=n.padInfo.top,R=n.padInfo.left;this.outputShape=n.outShape;const p="avg"===e;let g="0.0";if(p||(g="-1.0 / 1e-20"),t){const e=">=";return void(this.userCode=`\n        const ivec3 strides =\n            ivec3(${r}, ${c}, ${u});\n        const ivec3 pads = ivec3(${h}, ${v}, ${R});\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < ${x};\n              wD += ${s}) {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= ${n.inDepth}) {\n              continue;\n            }\n\n            for (int wR = 0; wR < ${f};\n                wR += ${l}) {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= ${n.inHeight}) {\n                continue;\n              }\n\n              for (int wC = 0; wC < ${C};\n                  wC += ${d}) {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= ${n.inWidth}) {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value ${e} currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition = ${a?o?`(((batch * ${n.inDepth} + xD) * ${n.inHeight} + xR) * ${n.inWidth} + xC) * ${n.inChannels} + ch`:`((xD * ${n.inHeight} + xR) * ${n.inWidth} + xC) * ${n.inChannels} + ch`:`wD * ${f} * ${C} +\n                      wR * ${C} + wC`};\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      `)}let $=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===e&&($="avgValue / count");const m=4*Math.floor(i/4),b=i%4,V=`\n      if (${p}) {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    `;this.userCode=`\n      const ivec3 strides =\n        ivec3(${r}, ${c}, ${u});\n      const ivec3 pads = ivec3(${h}, ${v}, ${R});\n      const float initializationValue = ${g};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= ${n.inWidth}) {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(${g});\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < ${x};\n            wD += ${s}) {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= ${n.inDepth}) {\n            continue;\n          }\n\n          for (int wR = 0; wR < ${f};\n            wR += ${l}) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ${n.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${m}; wC += 4) {\n              int xC = xCCorner + wC * ${d};\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                getValue(batch, xD, xR, xC + 2 * ${d}, ch),\n                getValue(batch, xD, xR, xC + 3 * ${d}, ch)\n              );\n\n              ${V}\n            }\n\n            int xC = xCCorner + ${m};\n            if (${1===b}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              ${V}\n            } else if (${2===b}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                initializationValue,\n                initializationValue\n              );\n\n              ${V}\n            } else if (${3===b}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                getValue(batch, xD, xR, xC + 2 * ${d}, ch),\n                initializationValue\n              );\n\n              ${V}\n            }\n          }\n          setOutput(${$});\n        }\n      }\n    `}}},1040:function(n,e,t){"use strict";t.d(e,"a",(function(){return ResizeBilinearPackedProgram}));
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
class ResizeBilinearPackedProgram{constructor(n,e,t,a,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,r,c,u]=n;this.outputShape=[i,e,t,u];const s=[a&&e>1?r-1:r,a&&t>1?c-1:c],l=[a&&e>1?e-1:e,a&&t>1?t-1:t];let d;d=o?"(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ${s[0]/l[0]},\n          ${s[1]/l[1]},\n          ${s[1]/l[1]});\n      const vec3 inputShapeRC = vec3(${r}.0, ${c}.0,\n                                     ${c}.0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ${d};\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ${u-1};\n        bool hasNextRow = coords.z < ${t-1};\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    `}}},1041:function(n,e,t){"use strict";t.d(e,"a",(function(){return ResizeBilinearProgram}));
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
class ResizeBilinearProgram{constructor(n,e,t,a,o){this.variableNames=["A"],this.outputShape=[];const[i,r,c,u]=n;this.outputShape=[i,e,t,u];const s=[a&&e>1?r-1:r,a&&t>1?c-1:c],l=[a&&e>1?e-1:e,a&&t>1?t-1:t];let d;d=o?"(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ${s[0]/l[0]},\n          ${s[1]/l[1]});\n      const vec2 inputShapeRC = vec2(${r}.0, ${c}.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ${d};\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    `}}},1043:function(n,e,t){"use strict";t.d(e,"a",(function(){return ResizeBilinearBackpropProgram}));
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
class ResizeBilinearBackpropProgram{constructor(n,e,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,a,o]=e,[,i,r]=n,c=[t&&i>1?a-1:a,t&&r>1?o-1:o],u=[t&&i>1?i-1:i,t&&r>1?r-1:r],s=c[0]/u[0],l=c[1]/u[1],d=1/s,x=1/l,f=2*Math.ceil(d)+2,C=2*Math.ceil(x)+2;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(${s});\n        const float widthScale = float(${l});\n\n        const float invHeightScale = float(${d});\n        const float invWidthScale = float(${x});\n\n        const int winHeight = int(${f});\n        const int winWidth = int(${C});\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ${i}) {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ${r}) {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), ${a-1}.0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), ${o-1}.0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    `}}},1045:function(n,e,t){"use strict";t.d(e,"a",(function(){return ResizeNearestNeighborPackedProgram}));
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
class ResizeNearestNeighborPackedProgram{constructor(n,e,t,a,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,r,c,u]=n;this.outputShape=[i,e,t,u];const s=[a&&e>1?r-1:r,a&&t>1?c-1:c],l=[a&&e>1?e-1:e,a&&t>1?t-1:t],d=a?"0.5":"0.0";let x;x=o?"max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ${s[0]/l[0]},\n          ${s[1]/l[1]},\n          ${s[1]/l[1]});\n      const vec3 inputShapeRC = vec3(${r}.0, ${c}.0,\n                                     ${c}.0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ${x};\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec3 sourceNearestRC = ivec3(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ${u-1};\n        bool hasNextRow = coords.z < ${t-1};\n\n        vec4 newValue = vec4(\n          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),\n          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);\n\n        setOutput(newValue);\n      }\n    `}}},1046:function(n,e,t){"use strict";t.d(e,"a",(function(){return ResizeNearestNeighborProgram}));
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
class ResizeNearestNeighborProgram{constructor(n,e,t,a,o){this.variableNames=["A"],this.outputShape=[];const[i,r,c,u]=n;this.outputShape=[i,e,t,u];const s=[a&&e>1?r-1:r,a&&t>1?c-1:c],l=[a&&e>1?e-1:e,a&&t>1?t-1:t],d=a?"0.5":"0.0";let x;x=o?"max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ${s[0]/l[0]},\n          ${s[1]/l[1]});\n      const vec2 inputShapeRC = vec2(${r}.0, ${c}.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ${x};\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    `}}},1048:function(n,e,t){"use strict";t.d(e,"a",(function(){return ResizeNearestNeigborBackpropProgram}));
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
class ResizeNearestNeigborBackpropProgram{constructor(n,e,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,a,o]=e,[,i,r]=n,c=[t&&i>1?a-1:a,t&&r>1?o-1:o],u=[t&&i>1?i-1:i,t&&r>1?r-1:r],s=c[0]/u[0],l=c[1]/u[1],d=1/s,x=1/l,f=2*Math.ceil(d)+2,C=2*Math.ceil(x)+2;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(${s});\n        const float widthScale = float(${l});\n\n        const float invHeightScale = float(${d});\n        const float invWidthScale = float(${x});\n\n        const int winHeight = int(${f});\n        const int winWidth = int(${C});\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ${i}) {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ${r}) {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(${c[0]}) *\n                (float(dyR) / float(${u[0]}));\n\n            float sourceFracCol =\n                float(${c[1]}) *\n                  (float(dyC) / float(${u[1]}));\n\n            int sourceNearestRow = int(min(\n                float(int(${a}) - 1),\n                ${t} ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(${o}) - 1),\n                ${t} ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    `}}},1050:function(n,e,t){"use strict";t.d(e,"a",(function(){return ReversePackedProgram}));var a=t(60),o=t(40);
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
class ReversePackedProgram{constructor(n,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const t=n.length;if(t>4)throw new Error(`WebGL backend: Reverse of rank-${t} tensor is not yet supported`);this.outputShape=n;const i=Object(a.a)("rc",t),r=`${i[t-1]} + 1 < ${this.outputShape[t-1]}`,c=`${i[t-2]} + 1 < ${this.outputShape[t-2]}`,u=Object(o.a)(t);function s(t){const a=n.map((a,o)=>function(t,a){return-1!==e.indexOf(t)&&1!==n[t]?`${n[t]} - ${a[t]} - 1`:""+a[t]}(o,t));return`getChannel(getX(${a.join(",")}), vec2(${a.slice(-2).join(",")}))`}this.userCode=1===t?`\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(${n[0]} - rc - 1),\n            ${n[0]} - rc - 1);\n          if(${r}){\n              result.g = getChannel(getX(${n[0]} - (rc  + 1) - 1),\n                ${n[0]} - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      `:`\n        void main() {\n          ${u} rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = ${function(n){return s(n)}(i.slice())};\n          if(${r}){\n            result.g = ${function(n){return n[t-1]="("+n[t-1]+" + 1)",s(n)}(i.slice())};\n          }\n          if(${c}) {\n            result.b = ${function(n){return n[t-2]="("+n[t-2]+" + 1)",s(n)}(i.slice())};\n            if(${r}) {\n              result.a = ${function(n){return n[t-1]="("+n[t-1]+" + 1)",n[t-2]="("+n[t-2]+" + 1)",s(n)}(i.slice())};\n            }\n          }\n          setOutput(result);\n        }\n    `}}},1051:function(n,e,t){"use strict";t.d(e,"a",(function(){return ReverseProgram}));var a=t(40);
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
 */class ReverseProgram{constructor(n,e){this.variableNames=["x"];const t=n.length;if(t>4)throw new Error(`WebGL backend: Reverse of rank-${t} tensor is not yet supported`);if(this.outputShape=n,1===t)return void(this.userCode=`\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(${n[0]} - coord - 1));\n        }\n      `);const o=n.map((t,a)=>(t=>-1!==e.indexOf(t)&&1!==n[t]?`${n[t]} - coords[${t}] - 1`:`coords[${t}]`)(a)).join(","),i=Object(a.a)(t);this.userCode=`\n      void main() {\n        ${i} coords = getOutputCoords();\n        setOutput(getX(${o}));\n      }\n    `}}},1053:function(n,e,t){"use strict";t.d(e,"a",(function(){return RotateProgram}));
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
class RotateProgram{constructor(n,e){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const t=n[1],a=n[2];this.outputShape=n;let o="";o="number"==typeof e?`float outputValue = ${e.toFixed(2)};`:`\n        vec3 fill = vec3(${e.join(",")});\n        float outputValue = fill[coords[3]];`,this.userCode=`\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n          int y = coords[1];\n          float coordXFloat = (float(x) - params[0]) * params[3] -\n            (float(y) - params[1]) * params[2];\n          float coordYFloat = (float(x) - params[0]) * params[2] +\n            (float(y) - params[1]) * params[3];\n          int coordX = int(round(coordXFloat + params[0]));\n          int coordY = int(round(coordYFloat + params[1]));\n          ${o}\n          if(coordX >= 0 && coordX < ${a} && coordY >= 0 && coordY < ${t}) {\n            outputValue = getImage(coords[0], coordY, coordX, coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    `}}},1058:function(n,e,t){"use strict";t.d(e,"a",(function(){return SearchSortedProgram}));var a=t(0);
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
 */class SearchSortedProgram{constructor(n,e,t,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[n,t];const i=`for (int i = 0; i < ${Math.ceil(Math.log2(e+1))}; ++i) { if (left >= right) break;`,r=2===Object(a.de)().getNumber("WEBGL_VERSION")?"while (left < right) {":i,c="left"===o?"<":"<=";this.userCode=`\n       int findBound(int batch, float value) {\n         int left = 0;\n         int right = numInputs;\n         int mid;\n         ${r}\n           mid = (left + right) / 2;\n           if (getSortedSequence(batch, mid) ${c} value) {\n             left = mid + 1;\n           } else {\n             right = mid;\n           }\n         }\n         return right;\n       }\n\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int valueIndex = coords[1];\n\n         float value = getValues(batch, valueIndex);\n\n         setOutput(float(findBound(batch, value)));\n       }\n     `}}},1092:function(n,e,t){"use strict";t.d(e,"a",(function(){return SegmentOpProgram}));
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
class SegmentOpProgram{constructor(n,e){this.variableNames=["x","segmentIds"];const t=n.windowSize,a=n.batchSize,o=n.inSize,i=n.numSegments,r=i*Math.ceil(o/t);this.outputShape=[a,r];const c=4*Math.floor(t/4),u=t%4,s="\n        sumValue += dot(values, segFilter);\n    ";let l="";o%t>0&&(l=`\n        if (inIdx < 0 || inIdx >= ${o}) {\n          return initializationValue;\n        }\n      `);let d="";o%t>0&&(d=`\n        if (inIdx < 0 || inIdx >= ${o}) {\n          return -1.0;\n        }\n      `),this.userCode=`\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        ${l}\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        ${d}\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          ${i})) * float(${t}));\n        int currentSeg = int(mod(float(outIdx), float(${i})));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ${c}; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          ${s}\n        }\n\n        int inIdx = inOffset + ${c};\n        if (${1===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          ${s}\n        } else if (${2===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          ${s}\n        } else if (${3===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          ${s}\n        }\n        setOutput(sumValue);\n      }\n    `}}},1261:function(n,e,t){"use strict";var a=t(0),o=t(893),i=t(899),r=t(900),c=t(901),u=t(902),s=t(903),l=t(906),d=t(907),x=t(908),f=t(911),C=t(912),h=t(913),v=t(914),R=t(915),p=t(916),g=t(917),$=t(918),m=t(919),b=t(920),V=t(921),y=t(922),I=t(925),w=t(928),S=t(929),O=t(930),z=t(932),D=t(933),N=t(95),F=t(936),M=t(396),A=t(941),P=t(943),L=t(944),k=t(945),W=t(946),H=t(947),j=t(948),X=t(949),B=t(950),U=t(952),E=t(953),G=t(954),Y=t(955),q=t(957),J=t(958),_=t(959),K=t(960),Q=t(962),T=t(964),Z=t(965),nn=t(966),en=t(967),tn=t(968),an=t(402),on=t(269),rn=t(969),cn=t(970),un=t(152),sn=t(972),ln=t(974),dn=t(975),xn=t(976),fn=t(979),Cn=t(980),hn=t(981),vn=t(404),Rn=t(984),pn=t(985),gn=t(65),$n=t(986),mn=t(187),bn=t(987),Vn=t(988),yn=t(989),In=t(268),wn=t(990),Sn=t(991),On=t(992),zn=t(993),Dn=t(994),Nn=t(995),Fn=t(996),Mn=t(997),An=t(998),Pn=t(1001),Ln=t(405),kn=t(1004),Wn=t(1005),Hn=t(1006),jn=t(1007),Xn=t(1008),Bn=t(1009),Un=t(1011),En=t(1013),Gn=t(1014),Yn=t(1015),qn=t(1018),Jn=t(1019),_n=t(247),Kn=t(1021),Qn=t(1022),Tn=t(1023),Zn=t(1024),ne=t(395),ee=t(1025),te=t(1027),ae=t(1028),oe=t(411),ie=t(1031),re=t(267),ce=t(1032),ue=t(1033),se=t(1034),le=t(1035),de=t(412),xe=t(151),fe=t(409),Ce=t(1036),he=t(1037),ve=t(1038),Re=t(17),pe=t(1039),ge=t(1042),$e=t(1044),me=t(1047),be=t(1049),Ve=t(1052),ye=t(1054),Ie=t(1055),we=t(1056),Se=t(1057),Oe=t(1059),ze=t(1061),De=t(1062),Ne=t(1063),Fe=t(1064),Me=t(1065),Ae=t(131),Pe=t(407),Le=t(1066),ke=t(1067),We=t(1068),He=t(1069),je=t(1070),Xe=t(1071),Be=t(1072),Ue=t(1073),Ee=t(1074),Ge=t(1075),Ye=t(1076),qe=t(1077),Je=t(1078),_e=t(1080),Ke=t(1081),Qe=t(1082),Te=t(408),Ze=t(186),nt=t(1083),et=t(1084),tt=t(414),at=t(1086),ot=t(1087),it=t(57),rt=t(1089),ct=t(1090),ut=t(1091),st=t(410);
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
const lt=[o.a,i.a,r.a,c.a,u.a,s.a,l.a,d.a,x.a,f.a,C.a,h.a,v.a,R.a,p.a,g.a,$.a,m.a,b.a,V.a,y.a,I.a,w.a,S.a,O.a,z.a,D.a,N.b,F.a,M.b,A.a,P.a,L.a,k.a,W.a,H.a,j.a,X.a,B.a,U.a,E.a,G.a,Y.a,q.a,J.a,_.a,K.a,Q.a,T.a,Z.a,nn.a,en.a,tn.a,an.b,on.b,rn.a,cn.a,un.b,sn.a,ln.a,dn.a,xn.a,fn.a,Cn.a,hn.a,vn.b,Rn.a,pn.a,gn.b,$n.a,mn.b,bn.a,Vn.a,yn.a,In.c,wn.a,Sn.a,On.a,zn.a,Dn.a,Nn.a,Fn.a,Mn.a,An.a,Pn.a,Ln.b,kn.a,Wn.a,Hn.a,jn.a,Xn.a,Bn.a,Un.a,En.a,Gn.a,Yn.a,qn.a,Jn.a,_n.b,Kn.a,Qn.a,Tn.a,Zn.a,ne.b,ee.a,te.a,ae.a,oe.b,ie.a,re.c,ce.a,ue.a,se.a,le.a,de.b,xe.b,fe.b,Ce.a,he.a,ve.a,Re.b,pe.a,ge.a,$e.a,me.a,be.a,Ve.a,ye.a,Ie.a,we.a,Se.a,Oe.a,ze.a,De.a,Ne.a,Fe.a,Me.a,Ae.b,Pe.b,Le.a,ke.a,We.a,He.a,je.a,Xe.a,Be.a,Ue.a,Ee.a,Ge.a,Ye.a,qe.a,Je.a,_e.a,Ke.a,Qe.a,Te.b,Ze.b,nt.a,et.a,tt.b,at.a,ot.a,it.b,rt.a,ct.a,ut.a,st.b];for(const n of lt)Object(a.We)(n)},391:function(n,e,t){"use strict";t.d(e,"a",(function(){return ReshapePackedProgram}));var a=t(51),o=t(61);
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
class ReshapePackedProgram{constructor(n,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=n,this.enableShapeUniforms=Object(a.e)(this.outputShape.length);let t="";for(let n=0;n<4;n++){let e="thisRC = rc;";n%2==1&&(e+="thisRC.z += 1;"),n>1&&(e+="thisRC.y += 1;"),t+=`\n        ${e}\n        ${n>0?"if(thisRC.y < rows && thisRC.z < cols){":""}\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[${n}] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        ${n>0?"}":""}\n      `}var i,r;this.userCode=`\n      ${i=e,r=this.enableShapeUniforms,`\n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      ${r?o.e(["r","c","d"],"inputShape"):o.d(["r","c","d"],i)}\n      return ivec3(r, c, d);\n    }\n  `}\n      ${this.enableShapeUniforms?o.c():o.b(n)}\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = ${this.enableShapeUniforms?"outShape[1]":n[1]};\n        int cols = ${this.enableShapeUniforms?"outShape[2]":n[2]};\n\n        ${t}\n\n        setOutput(result);\n      }\n    `}}},413:function(n,e,t){"use strict";t.d(e,"a",(function(){return ScatterProgram}));var a=t(40);
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
 */class ScatterProgram{constructor(n,e,t,o,i,r,c=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=r;const u=Object(a.a)(i.length),s=Object(a.a)(r.length);let l="";1===t?l="i":2===t&&(l="i, j");const d=`getIndices(${l})`;let x="";1===o?x="i":2===o&&(x="i, coords[1]");const f=`getUpdates(${x})`,C=e>1?"strides[j]":"strides";this.userCode=`\n        ${u} strides = ${u}(${i});\n\n        void main() {\n          ${s} coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < ${n}; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < ${e}; j++) {\n              int index = round(${d});\n              flattenedIndex += index * ${C};\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += ${f};\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      `}}},898:function(n,e,t){"use strict";t.d(e,"a",(function(){return ReduceProgram}));
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
class ReduceProgram{constructor(n,e){this.variableNames=["x"];const{windowSize:t,batchSize:a,inSize:o,outSize:i}=n;this.outputShape=[a,i];let r="0.0",c="";"prod"===e?r="1.0":"min"===e?(r="1.0 / 1e-20",c="min"):"max"===e&&(r="-1.0 / 1e-20",c="max");let u=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"sum"===e?u="sumValue":"prod"===e?u="prodValue":"all"===e?u="allValue":"any"===e&&(u="anyValue");const s=4*Math.floor(t/4),l=t%4;let d=`\n      if (${"sum"===e}) {\n        sumValue += dot(values, ones);\n      } else if (${"prod"===e}) {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = ${c}(values, minMaxValue);\n        if (${"min"===e} || ${"max"===e}) {\n          minMaxValue = ${c}(values, minMaxValue);\n          bvec4 isNaN = isnan(values);\n          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {\n            minMaxValue = vec4(NAN);\n          }\n        }\n      }\n    `,x="vec4";"all"===e?(r="1.0",d="\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",x="bvec4"):"any"===e&&(r="0.0",d="\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",x="bvec4");let f="";o%t>0&&(f=`\n        if (inIdx < 0 || inIdx >= ${o}) {\n          return initializationValue;\n        }\n      `),this.userCode=`\n      const float initializationValue = ${r};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ${f}\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${t};\n\n        vec4 minMaxValue = vec4(${r});\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < ${s}; i += 4) {\n          int inIdx = inOffset + i;\n          ${x} values = ${x}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ${d}\n        }\n\n        int inIdx = inOffset + ${s};\n        if (${1===l}) {\n          ${x} values = ${x}(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          ${d}\n        } else if (${2===l}) {\n          ${x} values = ${x}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          ${d}\n        } else if (${3===l}) {\n          ${x} values = ${x}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          ${d}\n        }\n        setOutput(${u});\n      }\n    `}}}}]);