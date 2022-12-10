(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{150:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));var r=n(0),a=n(14),s=n(377),o=n(117),c=n(81),i=n(45),u=n(59);
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
function l(t){const{inputs:e,backend:n,attrs:l}=t,{x:d}=e,{axis:f,keepDims:p}=l;let h;Object(a.a)(d,"sum"),h="bool"===d.dtype?Object(o.a)({inputs:{x:d},backend:n,attrs:{dtype:"int32"}}):Object(c.a)({inputs:{x:d},backend:n});const m=h.shape.length,g=r.Hf.parseAxisParam(f,h.shape),b=r.Ad.getAxesPermutation(g,m);let k=g,y=h;null!=b&&(y=Object(u.a)({inputs:{x:h},backend:n,attrs:{perm:b}}),k=r.Ad.getInnerMostAxes(k.length,m)),r.Ad.assertAxesAreInnerMostDims("sum",k,y.shape.length);const[v,w]=r.Ad.computeOutAndReduceShapes(y.shape,k),I=r.Ad.upcastType(y.dtype,"int32");let x=Object(s.a)(n,v,I);const N=r.Hf.sizeFromShape(w),O=n.data.get(x.dataId).values,j=n.data.get(y.dataId).values;for(let t=0;t<O.length;++t){const e=t*N;let n=0;for(let t=0;t<N;++t)n+=j[e+t];O[t]=n}if(p){const t=r.Ad.expandShapeToKeepDim(x.shape,g),e=x;x=Object(i.a)({inputs:{x:x},backend:n,attrs:{shape:t}}),n.disposeIntermediateTensorInfo(e)}return n.disposeIntermediateTensorInfo(h),null!=b&&n.disposeIntermediateTensorInfo(y),x}const d={kernelName:r.ed,backendName:"cpu",kernelFunc:l}},180:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n(0),a=n(46),s=n(48);
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
const o=Object(a.a)((t,e)=>t-e),c=Object(s.b)((t,e,n,r)=>({real:t-n,imag:e-r})),i=Object(s.a)(r.dd,o,c),u={kernelName:r.dd,backendName:"cpu",kernelFunc:i}},237:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);
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
 */function a(t,e,n,a,s){const o=e.length,c=r.Hf.sizeFromShape(e),i=r.Hf.computeStrides(e),u=r.Hf.computeStrides(s),l=r.Hf.getTypedArrayFromDType(n,r.Hf.sizeFromShape(s));for(let e=0;e<c;++e){const n=r.Hf.indexToLoc(e,o,i),s=new Array(n.length);for(let t=0;t<s.length;t++)s[t]=n[a[t]];l[r.Hf.locToIndex(s,o,u)]=t[e]}return l}},348:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);
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
 */function a(t,e,n,a){const s=Object(r.Hd)(t,e.dtype);for(let t=0;t<s.size;t++){const r=s.indexToLoc(t),o=new Array(r.length);for(let t=0;t<o.length;t++)o[t]=r[t]*n[t]+a[t];s.set(e.get(...o),...r)}return s}},349:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);
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
 */class StringNGramsOp{constructor(t,e,n,a,s,o){this.separator=r.Hf.encodeString(t),this.nGramWidths=e,this.leftPad=r.Hf.encodeString(n),this.rightPad=r.Hf.encodeString(a),this.padWidth=s,this.preserveShort=o}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const n=this.getPadWidth(e);return Math.max(0,t+2*n-e+1)}createNGrams(t,e,n,r,a,s){for(let o=0;o<a;++o){const c=this.getPadWidth(s),i=Math.max(0,c-o),u=Math.max(0,c-(a-(o+1))),l=s-(i+u),d=e+(i>0?0:o-c);let f=0;f+=i*this.leftPad.length;for(let e=0;e<l;++e)f+=t[d+e].length;f+=u*this.rightPad.length;f+=(i+u+l-1)*this.separator.length,n[r+o]=new Uint8Array(f);const p=n[r+o];let h=0;const m=t=>t.forEach(t=>p[h++]=t);for(let t=0;t<i;++t)m(this.leftPad),m(this.separator);for(let e=0;e<l-1;++e)m(t[d+e]),m(this.separator);if(l>0){m(t[d+l-1]);for(let t=0;t<u;++t)m(this.separator),m(this.rightPad)}else{for(let t=0;t<u-1;++t)m(this.rightPad),m(this.separator);m(this.rightPad)}}}compute(t,e){const n=t.length,a=e.length;if(a>0){let t=e[0];if(0!==t)throw new Error("First split value must be 0, got "+t);for(let r=1;r<a;++r){let a=e[r]>=t;if(a=a&&e[r]<=n,!a)throw new Error(`Invalid split value ${e[r]}, must be in [${t}, ${n}]`);t=e[r]}if(t!==n)throw new Error(`Last split value must be data size. Expected ${n}, got ${t}`)}const s=a-1,o=r.Hf.getArrayFromDType("int32",a);if(0===n||0===a){const t=new Array(n);for(let t=0;t<=s;++t)o[t]=0;return[t,o]}o[0]=0;for(let t=1;t<=s;++t){const n=e[t]-e[t-1];let r=0;this.nGramWidths.forEach(t=>{r+=this.getNumNGrams(n,t)}),this.preserveShort&&n>0&&0===r&&(r=1),o[t]=o[t-1]+r}const c=new Array(o[s]);for(let n=0;n<s;++n){const r=e[n];let a=o[n];if(this.nGramWidths.forEach(s=>{const o=e[n+1]-e[n],i=this.getNumNGrams(o,s);this.createNGrams(t,r,c,a,i,s),a+=i}),this.preserveShort&&a===o[n]){const s=e[n+1]-e[n];if(0===s)continue;const o=s+2*this.padWidth,i=1;this.createNGrams(t,r,c,a,i,o)}}return[c,o]}}function a(t,e,n,r,a,s,o,c){return new StringNGramsOp(n,r,a,s,o,c).compute(t,e)}},350:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0);
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
 */function a(t,e,n,r){if(!t.length)return;if(0===e.length){for(let e=0;e<t.length;++e)r.push(t.subarray(e,e+1));return}if(1===e.length){const a=e[0];let s=t.indexOf(a);for(;-1!==s;){const e=t.subarray(0,s);n&&0===e.length||r.push(e),s=(t=t.subarray(s+1)).indexOf(a)}return void(n&&0===t.length||r.push(t))}let a=0;for(let s=0;s<t.length+1;s++)if(s===t.length||-1!==e.indexOf(t[s])){const e=t.subarray(a,s);n&&0===e.length||r.push(e),a=s+1}}function s(t,e,n){const s=t.length,o=[];let c=0,i=0;const u=new Array(s);for(let r=0;r<s;++r){const s=o.length;a(t[r],e,n,o);const l=o.length-s;u[r]=l,c+=l,i=Math.max(i,l)}const l=r.Hf.getArrayFromDType("int32",2*c),d=new Array(c),f=[s,i];let p=0;for(let t=0;t<s;++t)for(let e=0;e<u[t];++e)l[2*p]=t,l[2*p+1]=e,d[p]=o[p],++p;return[l,d,f]}},351:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);
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
 */function a(t,e){const n=r.Hf.getArrayFromDType("int32",t.length);for(let a=0;a<t.length;++a)n[a]=r.Hf.fingerPrint64(t[a]).modulo(e).getLowBitsUnsigned();return n}},352:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);
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
 */function a(t,e){const n=new Array(t.rank);for(let r=0;r<n.length;r++)n[r]=t.shape[r]*e[r];const a=Object(r.Hd)(n,t.dtype);for(let e=0;e<a.values.length;++e){const n=a.indexToLoc(e),r=new Array(t.rank);for(let e=0;e<r.length;e++)r[e]=n[e]%t.shape[e];const s=t.locToIndex(r);a.values[e]=t.values[s]}return a}},353:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0);
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
 */const a=(t,e)=>{const n=e.value-t.value;return 0===n?t.index-e.index:n};function s(t,e,n=0,o=t.length-1){for(;o>n;){if(o-n>600){const r=o-n+1,a=e-n+1,c=Math.log(r),i=.5*Math.exp(2*c/3),u=.5*Math.sqrt(c*i*(r-i)/r)*Math.sign(a-r/2);s(t,e,Math.max(n,Math.floor(e-a*i/r+u)),Math.min(o,Math.floor(e+(r-a)*i/r+u)))}const c=t[e];let i=n,u=o;for(r.Hf.swap(t,n,e),a(t[o],c)>0&&r.Hf.swap(t,n,o);i<u;){for(r.Hf.swap(t,i,u),i++,u--;a(t[i],c)<0;)i+=1;for(;a(t[u],c)>0;)u-=1}0===a(t[n],c)?r.Hf.swap(t,n,u):(u+=1,r.Hf.swap(t,u,o)),u<=e&&(n=u+1),e<=u&&(o=u-1)}}function o(t,e,n,o,c){const i=e[e.length-1],[u,l]=[t.length/i,i],d=r.Hf.getTypedArrayFromDType(n,u*o),f=r.Hf.getTypedArrayFromDType("int32",u*o);for(let e=0;e<u;e++){const n=e*l,r=t.subarray(n,n+l);let i=new Array(r.length);r.forEach((t,e)=>i[e]={value:t,index:e}),o<i.length&&(s(i,o),i=i.slice(0,o)),c&&i.sort(a);const u=e*o,p=d.subarray(u,u+o),h=f.subarray(u,u+o);for(let t=0;t<o;t++)p[t]=i[t].value,h[t]=i[t].index}const p=e.slice();return p[p.length-1]=o,[Object(r.Hd)(p,n,d),Object(r.Hd)(p,"int32",f)]}},354:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);
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
 */function a(t,e,n,a){const s=r.Hf.parseAxisParam(e,n)[0],o=[1,n[0],1];for(let t=0;t<s;t++)o[0]*=n[t];o[1]=n[s];for(let t=s+1;t<n.length;t++)o[2]*=n[t];const c={},i=new Int32Array(n[s]),u=new r.id(o,a,t),l=[],d=1===o[0]&&1===o[2];for(let e=0;e<n[s];e++){let n;if(d)n=t[e].toString();else{const t=[];for(let n=0;n<o[0];n++)for(let r=0;r<o[2];r++)t.push(u.get(n,e,r));n=t.join(",")}if(void 0!==c[n])i[e]=c[n];else{const t=Object.keys(c).length;c[n]=t,i[e]=t,l.push(e)}}const f=o.slice();f[1]=Object.keys(c).length;const p=new r.id(f,a);l.forEach((t,e)=>{for(let n=0;n<o[0];n++)for(let r=0;r<o[2];r++)p.set(u.get(n,t,r),n,e,r)});const h=n.slice();return h[s]=f[1],{outputValues:p.values,outputShape:h,indices:i}}},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(0),a=n(14),s=n(237);
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
function o(t){const{inputs:e,attrs:n,backend:r}=t,{x:o}=e,{perm:c}=n;Object(a.a)(o,"transpose");const i=o.shape.length,u=new Array(i);for(let t=0;t<u.length;t++)u[t]=o.shape[c[t]];const l=r.data.get(o.dataId).values,d=Object(s.a)(l,o.shape,o.dtype,c,u);return{dataId:r.write(d,u,o.dtype),shape:u,dtype:o.dtype}}const c={kernelName:r.md,backendName:"cpu",kernelFunc:o}},872:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),a=n(29);
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
const s=Object(a.a)(r.Yc,(t,e)=>{const n=e;return isNaN(t)?NaN:t>0?1:n.alpha}),o={kernelName:r.Yc,backendName:"cpu",kernelFunc:s}},873:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0),a=n(14),s=n(45),o=n(100),c=n(348);const i={kernelName:r.Zc,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:i}=t,{x:u}=e,{begin:l,end:d,strides:f,beginMask:p,endMask:h,ellipsisMask:m,newAxisMask:g,shrinkAxisMask:b}=i;Object(a.a)(u,"stridedSlice");const{finalShapeSparse:k,finalShape:y,isIdentity:v,sliceDim0:w,isSimpleSlice:I,begin:x,end:N,strides:O}=r.lf.sliceInfo(u.shape,l,d,f,p,h,m,g,b);let j;if(v)j=Object(s.a)({inputs:{x:u},backend:n,attrs:{shape:y}});else if(w||I){r.Hf.assert(u.shape.length>=1,()=>"Input must have rank at least 1, got: "+u.shape.length);const t=r.lf.computeOutShape(x,N,O),e=Object(o.a)({inputs:{x:u},backend:n,attrs:{begin:x,size:t}});j=Object(s.a)({inputs:{x:e},backend:n,attrs:{shape:y}}),n.disposeIntermediateTensorInfo(e)}else{const t=n.bufferSync(u),e=Object(c.a)(k,t,O,x);j=n.makeTensorInfo(y,e.dtype,e.values)}return j}}},874:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n(349);const s={kernelName:r.ad,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:r}=t,{separator:s,nGramWidths:o,leftPad:c,rightPad:i,padWidth:u,preserveShortSequences:l}=r,{data:d,dataSplits:f}=e,p=n.data.get(d.dataId).values,h=n.data.get(f.dataId).values,[m,g]=Object(a.a)(p,h,s,o,c,i,u,l);return[n.makeTensorInfo([m.length],"string",m),n.makeTensorInfo(f.shape,"int32",g)]}}},875:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n(350);const s={kernelName:r.bd,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:r}=t,{skipEmpty:s}=r,{input:o,delimiter:c}=e;if("string"!==o.dtype)throw new Error("Input must be of datatype string");if(1!==o.shape.length)throw new Error("Input must be a vector, got shape: "+o.shape);if(0!==c.shape.length)throw new Error("Delimiter must be a scalar, got shape: "+c.shape);const i=n.data.get(o.dataId).values,u=n.data.get(c.dataId).values[0],[l,d,f]=Object(a.a)(i,u,s),p=d.length;return[n.makeTensorInfo([p,2],"int32",l),n.makeTensorInfo([p],"string",d),n.makeTensorInfo([2],"int32",new Int32Array(f))]}}},876:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n(351);const s={kernelName:r.cd,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:r}=t,{numBuckets:s}=r,{input:o}=e;if("string"!==o.dtype)throw new Error("Input must be of datatype string");if(s<=0)throw new Error("Number of buckets must be at least 1");const c=n.data.get(o.dataId).values,i=Object(a.a)(c,s);return n.makeTensorInfo(o.shape,"int32",i)}}},877:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),a=n(29);
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
const s=Object(a.a)(r.fd,t=>Math.tan(t)),o={kernelName:r.fd,backendName:"cpu",kernelFunc:s}},878:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),a=n(29);
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
const s=Object(a.a)(r.gd,t=>Math.tanh(t)),o={kernelName:r.gd,backendName:"cpu",kernelFunc:s}},879:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),a=n(14),s=n(352);const o={kernelName:r.jd,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{reps:c}=r;Object(a.a)(o,"tile");const i=Object(s.a)(n.bufferSync(o),c);return n.makeTensorInfo(i.shape,i.dtype,i.values)}}},880:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),a=n(14),s=n(353);const o={kernelName:r.kd,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{k:c,sorted:i}=r;Object(a.a)(o,"topk");const u=n.data.get(o.dataId).values,[l,d]=Object(s.a)(u,o.shape,o.dtype,c,i);return[n.makeTensorInfo(l.shape,l.dtype,l.values),n.makeTensorInfo(d.shape,d.dtype,d.values)]}}},881:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);
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
 */const a={kernelName:r.ld,backendName:"cpu",kernelFunc:function(t){const{inputs:e,attrs:n,backend:a}=t,{image:o,transforms:u}=e,{interpolation:l,fillMode:d,fillValue:f,outputShape:p}=n,[h,m,g,b]=o.shape,[k,y]=null!=p?p:[m,g],v=[h,k,y,b],w=r.Hf.computeStrides(o.shape),I=w[0],x=w[1],N=w[2],O=r.Hf.computeStrides(v),j=O[0],A=O[1],T=O[2],H=r.Hf.getTypedArrayFromDType(o.dtype,r.Hf.sizeFromShape(v));H.fill(f);const S=a.data.get(o.dataId).values,M=a.data.get(u.dataId).values;for(let t=0;t<h;++t){const e=1===u.shape[0]?M:M.subarray(8*t,8*t+8);for(let n=0;n<k;++n)for(let r=0;r<y;++r)for(let a=0;a<b;++a){let o;const u=e[6]*r+e[7]*n+1;if(0===u)continue;const p=(e[0]*r+e[1]*n+e[2])/u,h=(e[3]*r+e[4]*n+e[5])/u,b=s(p,g,d),k=s(h,m,d);switch(l){case"nearest":o=c(S,m,g,I,x,N,t,k,b,a,f);break;case"bilinear":o=i(S,m,g,I,x,N,t,k,b,a,f);break;default:throw new Error("Error in Transform: Expect 'nearest' or 'bilinear', but got "+l)}H[t*j+n*A+r*T+a]=o}return a.makeTensorInfo(v,o.dtype,H)}return{dataId:a.write(H,v,o.dtype),shape:o.shape,dtype:o.dtype}}};function s(t,e,n){switch(n){case"reflect":return function(t,e){let n=t;if(n<0)if(e<=1)n=0;else{const t=2*e;n<t&&(n=t*Math.trunc(-n/t)+n),n=n<-e?n+t:-n-1}else if(n>e-1)if(e<=1)n=0;else{const t=2*e;n-=t*Math.trunc(n/t),n>=e&&(n=t-n-1)}return r.Hf.clamp(0,n,e-1)}(t,e);case"wrap":return function(t,e){let n=t;if(n<0)if(e<=1)n=0;else{const t=e-1;n+=e*(Math.trunc(-n/t)+1)}else if(n>e-1)if(e<=1)n=0;else{const t=e-1;n-=e*Math.trunc(n/t)}return r.Hf.clamp(0,n,e-1)}(t,e);case"nearest":return function(t,e){return r.Hf.clamp(0,t,e-1)}(t,e);case"constant":default:return function(t,e){return t}(t)}}function o(t,e,n,r,a,s,o,c,i,u,l){return 0<=c&&c<e&&0<=i&&i<n?t[o*r+c*a+i*s+u]:l}function c(t,e,n,r,a,s,c,i,u,l,d){return o(t,e,n,r,a,s,c,Math.round(i),Math.round(u),l,d)}function i(t,e,n,r,a,s,c,i,u,l,d){const f=Math.floor(i),p=Math.floor(u),h=f+1,m=p+1;return(h-i)*((m-u)*o(t,e,n,r,a,s,c,f,p,l,d)+(u-p)*o(t,e,n,r,a,s,c,f,m,l,d))+(i-f)*((m-u)*o(t,e,n,r,a,s,c,h,p,l,d)+(u-p)*o(t,e,n,r,a,s,c,h,m,l,d))}},882:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),a=n(14),s=n(354);const o={kernelName:r.nd,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,attrs:n,backend:r}=t,{axis:o}=n,{x:c}=e;Object(a.a)(c,"unique");const i=r.data.get(c.dataId).values,{outputValues:u,outputShape:l,indices:d}=Object(s.a)(i,o,c.shape,c.dtype);return[r.makeTensorInfo(l,c.dtype,u),r.makeTensorInfo([d.length],"int32",d)]}}},883:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),a=n(45),s=n(100);const o={kernelName:r.od,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:r}=t,{value:o}=e;let{axis:c}=r;c<0&&(c+=o.shape.length);const i=o.shape.length,u=o.shape[c],l=new Array(i-1);let d=0;for(let t=0;t<i;t++)t!==c&&(l[d++]=o.shape[t]);const f=new Array(i).fill(0),p=o.shape.slice();p[c]=1;const h=new Array(u);for(let t=0;t<h.length;t++){f[c]=t;const e=Object(s.a)({inputs:{x:o},backend:n,attrs:{begin:f,size:p}});h[t]=Object(a.a)({inputs:{x:e},backend:n,attrs:{shape:l}}),n.disposeIntermediateTensorInfo(e)}return h}}}}]);