(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{384:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var a=n(0),s=n(14);
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
function o(e){const{inputs:t,backend:n,attrs:o}=e,{x:r,filter:i}=t,{strides:c,pad:d,dilations:u,dimRoundingMode:l}=o;Object(s.a)([r,i],"depthwiseConv2DNative");const f=a.Hf.computeStrides(r.shape),p=a.Hf.computeStrides(i.shape);let h=u;null==h&&(h=[1,1]),a.Hf.assert(a.Ad.eitherStridesOrDilationsAreOne(c,h),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${h}'`);const m=a.Ad.computeConv2DInfo(r.shape,i.shape,c,h,d,l,!0),{filterHeight:k,filterWidth:b,dilationHeight:g,dilationWidth:v,padInfo:I}=m,x=I.left,M=I.top,H=m.outChannels/m.inChannels,N=new a.id(m.outShape,r.dtype),y=n.data.get(r.dataId).values,w=n.data.get(i.dataId).values,S=N.values;for(let e=0;e<m.batchSize;++e){const t=e*f[0],n=e*N.strides[0];for(let e=0;e<m.outHeight;++e){const a=n+e*N.strides[1],s=e*m.strideHeight-M;for(let e=0;e<k;++e){const n=s+e*g;if(n<0||n>=m.inHeight)continue;const o=e*p[0],r=t+n*f[1];for(let e=0;e<m.outWidth;++e){const t=a+e*N.strides[2],n=e*m.strideWidth-x;for(let e=0;e<b;++e){const a=n+e*v;if(a<0||a>=m.inWidth)continue;const s=o+e*p[1],i=r+a*m.inChannels;let c=t,d=s;for(let e=0;e<m.inChannels;++e){const t=y[i+e];for(let e=0;e<H;++e)S[c+e]+=t*w[d+e];c+=H,d+=H}}}}}}return n.makeTensorInfo(N.shape,N.dtype,N.values)}const r={kernelName:a.Q,backendName:"cpu",kernelFunc:o}},792:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(29);
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
const o=Object(s.a)(a.I,e=>Math.cos(e)),r={kernelName:a.I,backendName:"cpu",kernelFunc:o}},793:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(29);
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
const o=Object(s.a)(a.J,e=>Math.cosh(e)),r={kernelName:a.J,backendName:"cpu",kernelFunc:o}},794:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0);
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
 */const s={kernelName:a.K,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:s}=e,{image:o,boxes:r,boxInd:i}=t,{cropSize:c,method:d,extrapolationValue:u}=s,[l,f,p,h]=o.shape,m=r.shape[0],[k,b]=c,g=Object(a.Hd)([m,k,b,h],"float32"),v=n.data.get(r.dataId).values,I=n.data.get(i.dataId).values,x=n.data.get(o.dataId).values,M=a.Hf.computeStrides(o.shape),H=a.Hf.computeStrides(g.shape);for(let e=0;e<m;e++){const t=4*e,n=v[t],a=v[t+1],s=v[t+2],o=v[t+3],r=I[e];if(r>=l)continue;const i=k>1?(s-n)*(f-1)/(k-1):0,c=b>1?(o-a)*(p-1)/(b-1):0;for(let t=0;t<k;t++){const l=k>1?n*(f-1)+t*i:.5*(n+s)*(f-1);if(l<0||l>f-1)for(let n=0;n<b;n++)for(let a=0;a<h;a++){const s=a+n*H[2]+t*H[1]+e*H[0];g.values[s]=u}else if("bilinear"===d){const n=Math.floor(l),s=Math.ceil(l),i=l-n;for(let d=0;d<b;d++){const l=b>1?a*(p-1)+d*c:.5*(a+o)*(p-1);if(l<0||l>p-1){for(let n=0;n<h;n++){const a=n+d*H[2]+t*H[1]+e*H[0];g.values[a]=u}continue}const f=Math.floor(l),m=Math.ceil(l),k=l-f;for(let a=0;a<h;a++){let o=a+f*M[2]+n*M[1]+r*M[0];const c=x[o];o=a+m*M[2]+n*M[1]+r*M[0];const u=x[o];o=a+f*M[2]+s*M[1]+r*M[0];const l=x[o];o=a+m*M[2]+s*M[1]+r*M[0];const p=c+(u-c)*k,h=l+(x[o]-l)*k;o=a+d*H[2]+t*H[1]+e*H[0],g.values[o]=p+(h-p)*i}}}else for(let n=0;n<b;++n){const s=b>1?a*(p-1)+n*c:.5*(a+o)*(p-1);if(s<0||s>p-1){for(let a=0;a<h;a++){const s=a+n*H[2]+t*H[1]+e*H[0];g.values[s]=u}continue}const i=Math.round(s),d=Math.round(l);for(let a=0;a<h;a++){const s=a+i*M[2]+d*M[1]+r*M[0],o=a+n*H[2]+t*H[1]+e*H[0];g.values[o]=x[s]}}}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}}},795:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(14),o=n(59);const r={kernelName:a.L,backendName:"cpu",kernelFunc:
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
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:c,exclusive:d,reverse:u}=r;Object(s.a)(i,"cumprod");const l=a.Ad.getAxesPermutation([c],i.shape.length);let f=i;null!=l&&(f=Object(o.a)({inputs:{x:i},backend:n,attrs:{perm:l}}));const p=a.Ad.getInnerMostAxes(1,i.shape.length)[0];if(p!==f.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${f.shape.length-1} but got axis=${p}`);const h=Object(a.Gf)(f.dtype,"int32"),m=a.Hf.makeOnesTypedArray(a.Hf.sizeFromShape(f.shape),h),k=n.data.get(f.dataId).values,b=f.shape[f.shape.length-1],g=u?(e,t)=>e+b-t-1:(e,t)=>e+t;for(let e=0;e<k.length;e+=b)for(let t=0;t<b;t++){const n=g(e,t);if(0===t)m[n]=d?1:k[n];else{const a=g(e,t-1);m[n]=d?k[a]*m[a]:k[n]*m[a]}}const v=n.makeTensorInfo(f.shape,h,m);if(null!=l){const e=a.Ad.getUndoAxesPermutation(l),t=Object(o.a)({inputs:{x:v},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(v),n.disposeIntermediateTensorInfo(f),t}return v}}},796:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n(14),o=n(59);const r={kernelName:a.M,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:c,exclusive:d,reverse:u}=r;Object(s.a)(i,"cumsum");const l=a.Ad.getAxesPermutation([c],i.shape.length);let f=i;null!=l&&(f=Object(o.a)({inputs:{x:i},backend:n,attrs:{perm:l}}));const p=a.Ad.getInnerMostAxes(1,i.shape.length)[0];if(p!==f.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${f.shape.length-1} but got axis=${p}`);const h=Object(a.Gf)(f.dtype,"int32"),m=a.Hf.makeZerosTypedArray(a.Hf.sizeFromShape(f.shape),h),k=n.data.get(f.dataId).values,b=f.shape[f.shape.length-1],g=u?(e,t)=>e+b-t-1:(e,t)=>e+t;for(let e=0;e<k.length;e+=b)for(let t=0;t<b;t++){const n=g(e,t);if(0===t)m[n]=d?0:k[n];else{const a=g(e,t-1);m[n]=d?k[a]+m[a]:k[n]+m[a]}}const v=n.makeTensorInfo(f.shape,h,m);if(null!=l){const e=a.Ad.getUndoAxesPermutation(l),t=Object(o.a)({inputs:{x:v},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(v),n.disposeIntermediateTensorInfo(f),t}return v}}},797:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(179);const o={kernelName:a.O,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:a}=e,{x:o,weights:r}=t,{size:i,binaryOutput:c}=a;if(1===o.shape.length){const e=n.data.get(o.dataId).values,t=n.data.get(r.dataId).values,a=Object(s.a)(e,t,r.dtype,r.shape,i);return n.makeTensorInfo([i],r.dtype,a)}if(2===o.shape.length){const e=n.bufferSync(o),t=n.bufferSync(r),a=Object(s.b)(e,t,i,c);return n.makeTensorInfo(a.shape,r.dtype,a.values)}throw new Error("Error in denseBincount: input must be at most rank 2, but got rank"+o.shape.length+".")}}},798:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0);
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
 */const s={kernelName:a.P,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{blockSize:r,dataFormat:i}=s;a.Hf.assert("NHWC"===i,()=>"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+i);const c=o.shape[0],d=o.shape[1],u=o.shape[2],l=o.shape[3],f=d*r,p=u*r,h=l/(r*r),m=n.data.get(o.dataId).values,k=new Float32Array(c*f*p*h);let b=0;for(let e=0;e<c;++e)for(let t=0;t<f;++t){const n=Math.floor(t/r),a=t%r;for(let t=0;t<p;++t){const s=Math.floor(t/r),o=(a*r+t%r)*h;for(let t=0;t<h;++t){const a=t+o+l*(s+u*(n+d*e));k[b++]=m[a]}}}return n.makeTensorInfo([c,f,p,h],o.dtype,k)}}},799:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14);const o={kernelName:a.R,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:o}=e,{x:r,dy:i}=t,{strides:c,dilations:d,pad:u,dimRoundingMode:l,filterShape:f}=o;Object(s.a)([r,i],"depthwiseConv2dNativeBackpropFilter");const p=a.Ad.computeConv2DInfo(r.shape,f,c,d,u,l,!0),{strideHeight:h,strideWidth:m,filterHeight:k,filterWidth:b}=p,g=new a.id(p.filterShape,"float32"),v=p.padInfo.left,I=p.padInfo.top,x=p.outChannels/p.inChannels,M=n.data.get(r.dataId).values,H=new a.id(r.shape,r.dtype,M),N=n.data.get(i.dataId).values,y=new a.id(i.shape,i.dtype,N);for(let e=0;e<k;++e){const t=Math.max(0,Math.ceil((I-e)/h)),n=Math.min(p.outHeight,(p.inHeight+I-e)/h);for(let a=0;a<b;++a){const s=Math.max(0,Math.ceil((v-a)/m)),o=Math.min(p.outWidth,(p.inWidth+v-a)/m);for(let r=0;r<p.outChannels;++r){const i=Math.trunc(r/x),c=r%x;let d=0;for(let c=0;c<p.batchSize;++c)for(let u=t;u<n;++u){const t=e+u*h-I;for(let e=s;e<o;++e){const n=a+e*m-v;d+=H.get(c,t,n,i)*y.get(c,u,e,r)}}g.set(d,e,a,i,c)}}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}}},800:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(14);const o={kernelName:a.S,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:o}=e,{dy:r,filter:i}=t,{strides:c,dilations:d,pad:u,dimRoundingMode:l,inputShape:f}=o;Object(s.a)([r,i],"depthwiseConv2DNativeBackpropInput");const p=a.Hf.computeStrides(r.shape),h=a.Hf.computeStrides(i.shape),m=a.Ad.computeConv2DInfo(f,i.shape,c,d,u,l,!0),k=new a.id(m.inShape,"float32"),b=k.values,[g,v,I]=k.strides,x=n.data.get(r.dataId).values,[M,H,N]=p,y=n.data.get(i.dataId).values,[w,S,O]=h,{batchSize:C,filterHeight:A,filterWidth:j,inChannels:F,inHeight:T,inWidth:W,outChannels:z,outHeight:P,outWidth:D,strideHeight:E,strideWidth:$}=m,U=A-1-m.padInfo.top,G=j-1-m.padInfo.left,J=z/F;for(let e=0;e<C;++e)for(let t=0;t<F;++t)for(let n=0;n<T;++n){const a=n-U,s=Math.max(0,Math.ceil(a/E)),o=Math.min(P,(A+a)/E);for(let r=0;r<W;++r){const i=r-G,c=Math.max(0,Math.ceil(i/$)),d=Math.min(D,(j+i)/$);let u=0;for(let n=s;n<o;++n){const s=n*E-a;for(let a=c;a<d;++a){const o=M*e+H*n+N*a,r=w*(A-1-s)+S*(j-1-(a*$-i))+O*t;for(let e=0;e<J;++e){u+=x[o+(t*J+e)]*y[r+e]}}}b[g*e+v*n+I*r+t]=u}}return n.makeTensorInfo(k.shape,k.dtype,k.values)}}}}]);