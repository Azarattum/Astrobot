(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{117:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));var a=n(0),o=n(46),s=n(377),r=n(70),i=n(81),d=n(119);
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
function c(t,e,n,s){if("int32"===s){return[e,"int32",Int32Array.from(t)]}if("bool"===s){const s=a.Hf.toTypedArray([0],n),[r,i]=Object(o.a)((t,e)=>t!==e?1:0)(e,[],t,s,"bool");return[i,"bool",r]}throw new Error(`Error in Cast: failed to cast ${n} to ${s}`)}function u(t){const{inputs:e,backend:n,attrs:o}=t,{x:p}=e,{dtype:l}=o;if("complex64"===l){if("complex64"===p.dtype)return Object(i.a)({inputs:{x:p},backend:n});const t=Object(s.a)(n,p.shape,p.dtype),e=u({inputs:{x:p},backend:n,attrs:{dtype:"float32"}}),a=Object(r.a)({inputs:{real:e,imag:t},backend:n});return n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(e),a}if("complex64"===p.dtype){const t=Object(d.a)({inputs:{input:p},backend:n}),e=u({inputs:{x:t},backend:n,attrs:{dtype:l}});return n.disposeIntermediateTensorInfo(t),e}if(!a.Hf.hasEncodingLoss(p.dtype,l)){const t=Object(i.a)({inputs:{x:p},backend:n});return{dataId:t.dataId,shape:t.shape,dtype:l}}const f=n.data.get(p.dataId).values,[h,m,k]=c(f,p.shape,p.dtype,l);return n.makeTensorInfo(h,m,k)}const p={kernelName:a.w,backendName:"cpu",kernelFunc:u}},202:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));var a=n(0),o=n(70),s=n(322),r=n(81),i=n(137),d=n(119),c=n(45);
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
function u(t){const{inputs:e,backend:n,attrs:p}=t,{axis:l}=p,f=a.Hf.parseAxisParam(l,e[0].shape)[0],h=e.map(t=>t.shape);a.Ad.assertParamsConsistent(h,f);let m=a.Ad.computeOutShape(e.map(t=>t.shape),f);if(0===a.Hf.sizeFromShape(m))return n.makeTensorInfo(m,e[0].dtype,[]);const k=e.filter(t=>a.Hf.sizeFromShape(t.shape)>0);if(1===k.length)return Object(r.a)({inputs:{x:k[0]},backend:n});if("complex64"===k[0].dtype){const t=k.map(t=>Object(d.a)({inputs:{input:t},backend:n})),e=k.map(t=>Object(i.a)({inputs:{input:t},backend:n})),a=u({inputs:t,backend:n,attrs:{axis:f}}),s=u({inputs:e,backend:n,attrs:{axis:f}}),r=Object(o.a)({inputs:{real:a,imag:s},backend:n});return t.forEach(t=>n.disposeIntermediateTensorInfo(t)),e.forEach(t=>n.disposeIntermediateTensorInfo(t)),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s),r}const I=k.map(t=>{const e=[-1,a.Hf.sizeFromShape(t.shape.slice(f))];return Object(c.a)({inputs:{x:t},backend:n,attrs:{shape:e}})}),b=I.map(t=>({vals:n.data.get(t.dataId).values,shape:t.shape}));m=a.Ad.computeOutShape(I.map(t=>t.shape),1);const g=1===I[0].shape[0],v=Object(s.a)(b,m,e[0].dtype,g),H=a.Ad.computeOutShape(k.map(t=>t.shape),f),M=n.makeTensorInfo(H,e[0].dtype,v);return I.forEach(t=>n.disposeIntermediateTensorInfo(t)),M}const p={kernelName:a.B,backendName:"cpu",kernelFunc:u}},321:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return d}));var a=n(0),o=n(94),s=n(29);
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
const r=Object(o.a)(t=>Math.ceil(t)),i=Object(s.b)(a.x,r),d={kernelName:a.x,backendName:"cpu",kernelFunc:i}},322:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(0);
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
 */function o(t,e,n,o){const s=a.Hf.getArrayFromDType(n,a.Hf.sizeFromShape(e));if(o&&"string"!==n){let e=0;t.forEach(t=>{const n=a.Hf.sizeFromShape(t.shape);s.set(t.vals,e),e+=n})}else{let o=0;t.forEach(t=>{const r="string"===n?a.Ad.fromUint8ToStringArray(t.vals):t.vals;let i=0;for(let n=0;n<t.shape[0];++n){const a=n*e[1]+o;for(let e=0;e<t.shape[1];++e)s[a+e]=r[i++]}o+=t.shape[1]})}return s}},383:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r}));var a=n(0),o=n(14);
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
function s(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:i}=e,{strides:d,pad:c,dataFormat:u,dilations:p,dimRoundingMode:l}=s;Object(o.a)([r,i],"conv2d");const f=a.Ad.convertConv2DDataFormat(u),h=a.Ad.computeConv2DInfo(r.shape,i.shape,d,p,c,l,!1,f),m=h.filterHeight,k=h.filterWidth,I=h.dilationHeight,b=h.dilationWidth,g=h.padInfo.left,v=h.padInfo.top,H="channelsLast"===h.dataFormat,M=new a.id(h.outShape,r.dtype),x=a.Hf.computeStrides(r.shape),y=a.Hf.computeStrides(i.shape),S=x[0],F=H?x[1]:x[2],C=H?x[2]:1,D=H?1:x[1],T=M.strides[0],W=H?M.strides[1]:M.strides[2],O=H?M.strides[2]:1,N=H?1:M.strides[1],j=n.data.get(r.dataId).values,A=n.data.get(i.dataId).values,w=M.values;for(let t=0;t<h.batchSize;++t){const e=t*S,n=t*T;for(let t=0;t<h.outHeight;++t){const a=n+t*W,o=t*h.strideHeight-v;for(let t=0;t<m;++t){const n=o+t*I;if(n<0||n>=h.inHeight)continue;const s=t*y[0],r=e+n*F;for(let t=0;t<h.outWidth;++t){const e=a+t*O,n=t*h.strideWidth-g;for(let t=0;t<k;++t){const a=n+t*b;if(a<0||a>=h.inWidth)continue;const o=r+a*C;let i=s+t*y[1];for(let t=0;t<h.inChannels;++t){const n=j[o+t*D];for(let t=0;t<h.outChannels;++t)w[e+t*N]+=n*A[i+t];i+=h.outChannels}}}}}}return n.makeTensorInfo(M.shape,M.dtype,w)}const r={kernelName:a.C,backendName:"cpu",kernelFunc:s}},70:function(t,e,n){"use strict";
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
function a(t){const{inputs:e,backend:n}=t,{real:a,imag:o}=e,s=n.data.get(a.dataId).values,r=n.data.get(o.dataId).values,i=n.makeTensorInfo(a.shape,"complex64");return n.data.get(i.dataId).complexTensorInfos={real:n.makeTensorInfo(a.shape,"float32",s),imag:n.makeTensorInfo(o.shape,"float32",r)},i}n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));const o={kernelName:n(0).z,backendName:"cpu",kernelFunc:a}},785:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(0),o=n(29);
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
const s=Object(o.a)(a.y,(t,e)=>{const n=e;return t>n.clipValueMax?n.clipValueMax:t<n.clipValueMin?n.clipValueMin:t}),r={kernelName:a.y,backendName:"cpu",kernelFunc:s}},786:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(0);
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
 */const o={kernelName:a.A,backendName:"cpu",kernelFunc:t=>{const{x:e}=t.inputs,n=t.backend,o=new Float32Array(a.Hf.sizeFromShape(e.shape)),s=n.data.get(e.dataId),r=s.complexTensorInfos.real,i=s.complexTensorInfos.imag,d=n.data.get(r.dataId).values,c=n.data.get(i.dataId).values;for(let t=0;t<d.length;t++){const e=d[t],n=c[t];o[t]=Math.hypot(e,n)}return n.makeOutput(o,e.shape,"float32")}}},787:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(0),o=n(14);const s={kernelName:a.D,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,dy:i}=e,{strides:d,pad:c,dataFormat:u,dimRoundingMode:p,filterShape:l}=s;Object(o.a)([r,i],"conv2dBackpropFilter");const f=a.Ad.convertConv2DDataFormat(u),h=a.Ad.computeConv2DInfo(r.shape,l,d,1,c,p,!1,f),{strideHeight:m,strideWidth:k,filterHeight:I,filterWidth:b}=h,g="channelsLast"===h.dataFormat,v=new a.id(h.filterShape,"float32"),H=h.padInfo.left,M=h.padInfo.top,x=n.data.get(r.dataId).values,y=n.data.get(i.dataId).values,S=new a.id(r.shape,r.dtype,x),F=new a.id(i.shape,i.dtype,y);for(let t=0;t<I;++t){const e=Math.max(0,Math.ceil((M-t)/m)),n=Math.min(h.outHeight,(h.inHeight+M-t)/m);for(let a=0;a<b;++a){const o=Math.max(0,Math.ceil((H-a)/k)),s=Math.min(h.outWidth,(h.inWidth+H-a)/k);for(let r=0;r<h.inChannels;++r)for(let i=0;i<h.outChannels;++i){let d=0;for(let c=0;c<h.batchSize;++c)for(let u=e;u<n;++u){const e=t+u*m-M;for(let t=o;t<s;++t){const n=a+t*k-H;d+=g?S.get(c,e,n,r)*F.get(c,u,t,i):S.get(c,r,e,n)*F.get(c,i,u,t)}}v.set(d,t,a,r,i)}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}}},788:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(0),o=n(14);const s={kernelName:a.E,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,filter:i}=e,{inputShape:d,strides:c,pad:u,dataFormat:p,dimRoundingMode:l}=s;Object(o.a)([r,i],"conv2dBackpropInput");const f=a.Hf.computeStrides(i.shape),h=a.Hf.computeStrides(r.shape);let m=a.Ad.convertConv2DDataFormat(p);const k=a.Ad.computeConv2DInfo(d,i.shape,c,1,u,l,!1,m),I=new a.id(k.inShape,"float32"),b=I.values,g=n.data.get(r.dataId).values,v=n.data.get(i.dataId).values,[H,M,x]=f,{batchSize:y,filterHeight:S,filterWidth:F,inChannels:C,inHeight:D,inWidth:T,outChannels:W,outHeight:O,outWidth:N,strideHeight:j,strideWidth:A}=k;m=k.dataFormat;const w=S-1-k.padInfo.top,z=F-1-k.padInfo.left,E="channelsLast"===m,V=I.strides[0],B=E?I.strides[1]:I.strides[2],L=E?I.strides[2]:1,R=E?1:I.strides[1],J=h[0],P=E?h[1]:h[2],$=E?h[2]:1,G=E?1:h[1];for(let t=0;t<y;++t)for(let e=0;e<C;++e)for(let n=0;n<D;++n){const a=n-w,o=Math.max(0,Math.ceil(a/j)),s=Math.min(O,(S+a)/j);for(let r=0;r<T;++r){const i=r-z,d=Math.max(0,Math.ceil(i/A)),c=Math.min(N,(F+i)/A);let u=0;for(let n=o;n<s;++n){const o=n*j-a;for(let a=d;a<c;++a){const s=J*t+P*n+$*a,r=H*(S-1-o)+M*(F-1-(a*A-i))+x*e;for(let t=0;t<W;++t){u+=g[s+G*t]*v[r+t]}}}b[V*t+B*n+L*r+R*e]=u}}return n.makeTensorInfo(I.shape,I.dtype,I.values)}}},789:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(0),o=n(14);const s={kernelName:a.F,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:i}=e,{strides:d,pad:c,dilations:u}=s;Object(o.a)([r,i],"conv3d");const p=a.Ad.computeConv3DInfo(r.shape,i.shape,d,u,c),{filterDepth:l,filterHeight:f,filterWidth:h,dilationDepth:m,dilationHeight:k,dilationWidth:I,padInfo:b}=p,g=b.front,v=b.left,H=b.top,M=new a.id(p.outShape,r.dtype),x=n.data.get(r.dataId).values,y=n.data.get(i.dataId).values,S=M.values,F=a.Hf.computeStrides(r.shape),C=a.Hf.computeStrides(i.shape);for(let t=0;t<p.batchSize;++t){const e=t*F[0],n=t*M.strides[0];for(let t=0;t<p.outDepth;++t){const a=n+t*M.strides[1],o=t*p.strideDepth-g;for(let t=0;t<l;++t){const n=o+t*m;if(n<0||n>=p.inDepth)continue;const s=t*C[0],r=e+n*F[1];for(let t=0;t<p.outHeight;++t){const e=a+t*M.strides[2],n=t*p.strideHeight-H;for(let t=0;t<f;++t){const a=n+t*k;if(a<0||a>=p.inHeight)continue;const o=s+t*C[1],i=r+a*F[2];for(let t=0;t<p.outWidth;++t){const n=e+t*p.outChannels,a=t*p.strideWidth-v;for(let t=0;t<h;++t){const e=a+t*I;if(e<0||e>=p.inWidth)continue;const s=o+t*C[2],r=i+e*p.inChannels;let d=s;for(let t=0;t<p.inChannels;++t){const e=x[r+t];for(let t=0;t<p.outChannels;++t)S[n+t]+=e*y[d+t];d+=p.outChannels}}}}}}}}return n.makeTensorInfo(M.shape,M.dtype,M.values)}}},790:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(0),o=n(14);const s={kernelName:a.G,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,dy:i}=e,{strides:d,pad:c,filterShape:u}=s;Object(o.a)([r,i],"conv3dBackpropFilterV2");const p=a.Hf.computeStrides(r.shape),l=a.Hf.computeStrides(i.shape),f=a.Ad.computeConv3DInfo(r.shape,u,d,1,c),h=f.strideDepth,m=f.strideHeight,k=f.strideWidth,I=f.filterDepth,b=f.filterHeight,g=f.filterWidth,v=new a.id(f.filterShape,"float32"),H=v.values,[M,x,y,S]=v.strides,F=n.data.get(i.dataId).values,[C,D,T,W]=l,O=n.data.get(r.dataId).values,[N,j,A,w]=p,z=f.padInfo.front,E=f.padInfo.left,V=f.padInfo.top;for(let t=0;t<I;++t){const e=Math.max(0,Math.ceil((z-t)/h)),n=Math.min(f.outDepth,(f.inDepth+z-t)/h),a=t*M;for(let o=0;o<b;++o){const s=Math.max(0,Math.ceil((V-o)/m)),r=Math.min(f.outHeight,(f.inHeight+V-o)/m),i=o*x+a;for(let a=0;a<g;++a){const d=Math.max(0,Math.ceil((E-a)/k)),c=Math.min(f.outWidth,(f.inWidth+E-a)/k),u=a*y+i;for(let i=0;i<f.inChannels;++i){const p=i*S+u;for(let u=0;u<f.outChannels;++u){let l=0;for(let p=0;p<f.batchSize;++p){const f=p*N,I=p*C;for(let p=e;p<n;++p){const e=(t+p*h-z)*j+f,n=p*D+I;for(let t=s;t<r;++t){const s=(o+t*m-V)*A+e,r=t*T+n;for(let t=d;t<c;++t){const e=t*W+r;l+=O[(a+t*k-E)*w+s+i]*F[e+u]}}}}H[p+u]=l}}}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}}},791:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(0),o=n(14);const s={kernelName:a.H,backendName:"cpu",kernelFunc:
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
function(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,filter:i}=e,{pad:d,strides:c,inputShape:u}=s;Object(o.a)([r],"conv3dBackpropInputV2");const p=a.Hf.computeStrides(r.shape),l=a.Hf.computeStrides(i.shape),f=a.Ad.computeConv3DInfo(u,i.shape,c,1,d),h=new a.id(f.inShape,"float32"),m=h.values,[k,I,b,g]=h.strides,v=n.data.get(r.dataId).values,[H,M,x,y]=p,S=n.data.get(i.dataId).values,[F,C,D,T]=l,{batchSize:W,filterDepth:O,filterHeight:N,filterWidth:j,inChannels:A,inDepth:w,inHeight:z,inWidth:E,outChannels:V,outDepth:B,outHeight:L,outWidth:R,strideDepth:J,strideHeight:P,strideWidth:$}=f,G=O-1-f.padInfo.front,U=N-1-f.padInfo.top,q=j-1-f.padInfo.left;for(let t=0;t<W;++t)for(let e=0;e<A;++e)for(let n=0;n<w;++n){const a=n-G,o=Math.max(0,Math.ceil(a/J)),s=Math.min(B,(O+a)/J);for(let r=0;r<z;++r){const i=r-U,d=Math.max(0,Math.ceil(i/P)),c=Math.min(L,(N+i)/P);for(let u=0;u<E;++u){const p=u-q,l=Math.max(0,Math.ceil(p/$)),f=Math.min(R,(j+p)/$);let h=0;for(let n=o;n<s;++n){const o=n*J-a;for(let a=d;a<c;++a){const s=a*P-i;for(let r=l;r<f;++r){const i=H*t+M*n+x*a+y*r,d=F*(O-1-o)+C*(N-1-s)+D*(j-1-(r*$-p))+T*e;for(let t=0;t<V;++t){h+=v[i+t]*S[d+t]}}}}m[k*t+I*n+b*r+g*u+e]=h}}}return n.makeTensorInfo(h.shape,h.dtype,h.values)}}}}]);