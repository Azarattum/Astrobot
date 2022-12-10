(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s}));var a=n(0);
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
 */function o(e,t,n,o,r,i){const s=r.strideHeight,d=r.strideWidth,f=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterHeight,u=r.effectiveFilterWidth,p=r.padInfo.top,I=r.padInfo.left,m="max"===i?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,h=Object(a.Hd)(r.outShape,n),g=h.values,b=r.outShape[1]*r.outShape[2]*r.outShape[3],T=r.outShape[2]*r.outShape[3],k=r.outShape[3];for(let t=0;t<r.batchSize;++t){const n=t*b,a=t*o[0];for(let t=0;t<r.inChannels;++t)for(let h=0;h<r.outHeight;++h){const b=h*s-p,H=Math.max(0,b),A=Math.min(r.inHeight,l+b),x=n+h*T;for(let n=0;n<r.outWidth;++n){const s=n*d-I,l=Math.max(0,s),p=Math.min(r.inWidth,u+s);let h=m,b=0,T=0;for(let n=H;n<A;n+=f){const r=a+n*o[1];for(let n=l;n<p;n+=c){const a=e[r+n*o[2]+t];"max"===i&&a>h?h=a:"avg"===i&&(b+=a,T++)}if(isNaN(h))break}g[x+n*k+t]="avg"===i?b/T:h}}}return h}function r(e,t,n,o,r=!1,i=!1){const s=Object(a.Hd)(o.outShape,"int32"),d=o.strideHeight,f=o.strideWidth,c=o.dilationHeight,l=o.dilationWidth,u=o.effectiveFilterHeight,p=o.effectiveFilterWidth,I=o.padInfo.top,m=o.padInfo.left,h=Object(a.Hd)(t,n,e);for(let e=0;e<o.batchSize;++e)for(let t=0;t<o.inChannels;++t)for(let n=0;n<o.outHeight;++n){const a=n*d-I;let g=a;for(;g<0;)g+=c;const b=Math.min(o.inHeight,u+a);for(let d=0;d<o.outWidth;++d){const u=d*f-m;let I=u;for(;I<0;)I+=l;const T=Math.min(o.inWidth,p+u);let k=Number.NEGATIVE_INFINITY,H=-1;for(let n=g;n<b;n+=c){const s=n-a;for(let a=I;a<T;a+=l){const d=a-u,f=h.get(e,n,a,t);f>k&&(k=f,H=r?i?((e*o.inHeight+n)*o.inWidth+a)*o.inChannels+t:(n*o.inWidth+a)*o.inChannels+t:s*p+d)}}s.set(H,e,n,d,t)}}return s}function i(e,t,n,o,r,i){const s=r.strideDepth,d=r.strideHeight,f=r.strideWidth,c=r.dilationDepth,l=r.dilationHeight,u=r.dilationWidth,p=r.effectiveFilterDepth,I=r.effectiveFilterHeight,m=r.effectiveFilterWidth,h=r.padInfo.front,g=r.padInfo.top,b=r.padInfo.left,T="max"===i?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,k=Object(a.Hd)(r.outShape,n),H=k.values,A=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],x=r.outShape[2]*r.outShape[3]*r.outShape[4],y=r.outShape[3]*r.outShape[4],v=r.outShape[4];for(let t=0;t<r.batchSize;++t){const n=t*A,a=t*o[0];for(let t=0;t<r.inChannels;++t)for(let k=0;k<r.outDepth;++k){const A=k*s-h;let S=A;for(;S<0;)S+=c;const O=Math.min(r.inDepth,p+A),j=n+k*x;for(let n=0;n<r.outHeight;++n){const s=n*d-g;let p=s;for(;p<0;)p+=l;const h=Math.min(r.inHeight,I+s),k=j+n*y;for(let n=0;n<r.outWidth;++n){const s=n*f-b;let d=s;for(;d<0;)d+=u;const I=Math.min(r.inWidth,m+s),g=k+n*v;let A=T,x=0,y=0;for(let n=S;n<O;n+=c){const r=a+n*o[1];for(let n=p;n<h;n+=l){const a=r+n*o[2];for(let n=d;n<I;n+=u){const r=e[a+n*o[3]+t];if("max"===i&&r>A?A=r:"avg"===i&&(x+=r,y++),isNaN(A))break}if(isNaN(A))break}if(isNaN(A))break}H[g+t]="avg"===i?x/y:A}}}}return k}function s(e,t){const n=Object(a.Hd)(t.outShape,"int32"),o=t.strideDepth,r=t.strideHeight,i=t.strideWidth,s=t.dilationDepth,d=t.dilationHeight,f=t.dilationWidth,c=t.effectiveFilterDepth,l=t.effectiveFilterHeight,u=t.effectiveFilterWidth,p=t.padInfo.front,I=t.padInfo.top,m=t.padInfo.left;for(let a=0;a<t.batchSize;++a)for(let h=0;h<t.inChannels;++h)for(let g=0;g<t.outDepth;++g){const b=g*o-p;let T=b;for(;T<0;)T+=s;const k=Math.min(t.inDepth,c+b);for(let o=0;o<t.outHeight;++o){const c=o*r-I;let p=c;for(;p<0;)p+=d;const H=Math.min(t.inHeight,l+c);for(let r=0;r<t.outWidth;++r){const I=r*i-m;let A=I;for(;A<0;)A+=f;const x=Math.min(t.inWidth,u+I);let y=Number.NEGATIVE_INFINITY,v=-1;for(let t=T;t<k;t+=s){const n=t-b;for(let o=p;o<H;o+=d){const r=o-c;for(let i=A;i<x;i+=f){const s=i-I,d=e.get(a,t,o,i,h);d>=y&&(y=d,v=n*l*u+r*l+s)}}}n.set(v,a,g,o,r,h)}}}return n}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(379),o=n(81),r=n(382),i=n(381),s=n(378),d=n(380),f=n(236);
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
function c(e,t,n,c,l){if("linear"===n)return Object(o.a)({inputs:{x:t},backend:e});if("relu"===n)return Object(s.a)({inputs:{x:t},backend:e});if("elu"===n)return Object(a.a)({inputs:{x:t},backend:e});if("relu6"===n)return Object(d.a)({inputs:{x:t},backend:e});if("prelu"===n)return Object(i.a)({inputs:{x:t,alpha:c},backend:e});if("leakyrelu"===n)return Object(r.a)({inputs:{x:t},backend:e,attrs:{alpha:l}});if("sigmoid"===n)return Object(f.a)({inputs:{x:t},backend:e});throw new Error(`Activation ${n} has not been implemented for the CPU backend.`)}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var a=n(0),o=n(14);
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
function r(e,t,n){return({inputs:r,attrs:i,backend:s})=>{const{x:d}=r;if(Object(o.a)(d,e),"string"===d.dtype||"string"===n)throw new Error("unaryKernelFunc does not support string input/output");const f=s,c=f.data.get(d.dataId).values,l=a.Hf.sizeFromShape(d.shape),u=n||d.dtype,p=a.Hf.getArrayFromDType(u,l);for(let e=0;e<l;++e)p[e]=t(c[e],i);return f.makeTensorInfo(d.shape,u,p)}}function i(e,t,n){return({inputs:a,attrs:r,backend:i})=>{const{x:s}=a;if(Object(o.a)(s,e),"string"===s.dtype||"string"===n)throw new Error("unaryKernelFunc does not support string input/output");const d=i,f=d.data.get(s.dataId).values,c=n||s.dtype,l=t(f,c,r);return d.makeTensorInfo(s.shape,c,l)}}},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n(70);
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
function r(e,t,n="float32"){if("complex64"===n){const n=r(e,t,"float32"),a=r(e,t,"float32");return Object(o.a)({inputs:{real:n,imag:a},backend:e})}const i=a.Hf.makeZerosTypedArray(a.Hf.sizeFromShape(t),n);return e.makeTensorInfo(t,n,i)}},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var a=n(0),o=n(116),r=n(70),i=n(202),s=n(81),d=n(137),f=n(125),c=n(119),l=n(161),u=n(100),p=n(180);
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
function I(e,t,n){const o=e.shape,i=o[0],s=o[1],d=n.data.get(e.dataId),f=d.complexTensorInfos.real,c=d.complexTensorInfos.imag,l=[i,s],p=a.Hf.sizeFromShape(l),I=a.Hf.getTypedArrayFromDType("float32",p),h=a.Hf.getTypedArrayFromDType("float32",p);for(let e=0;e<i;e++){const o=Object(u.a)({inputs:{x:f},backend:n,attrs:{begin:[e,0],size:[1,s]}}),i=Object(u.a)({inputs:{x:c},backend:n,attrs:{begin:[e,0],size:[1,s]}}),d=Object(r.a)({inputs:{real:o,imag:i},backend:n}),{real:l,imag:p}=m(d,t,n),g=a.Ad.mergeRealAndImagArrays(l,p);for(let t=0;t<s;t++){const n=a.Ad.getComplexWithIndex(g,t);I[e*s+t]=n.real,h[e*s+t]=n.imag}n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(d)}const g=n.makeTensorInfo(l,"float32",I),b=n.makeTensorInfo(l,"float32",h),T=Object(r.a)({inputs:{real:g,imag:b},backend:n});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(b),T}function m(e,t,n){const u=a.Hf.sizeFromShape(e.shape),I=n.data.get(e.dataId),m=n.data.get(I.complexTensorInfos.real.dataId).values,h=n.data.get(I.complexTensorInfos.imag.dataId).values;if(0==((g=u)&g-1)){const I=function e(t,n,s,l,u){if(1===s)return{real:t,imag:n};const I=a.Ad.mergeRealAndImagArrays(t,n),m=s/2,h=a.Ad.complexWithEvenIndex(I),g=h.real,b=h.imag,T=[g.length],k=u.makeTensorInfo(T,"float32",g),H=u.makeTensorInfo(T,"float32",b),A=Object(r.a)({inputs:{real:k,imag:H},backend:u}),x=a.Ad.complexWithOddIndex(I),y=x.real,v=x.imag,S=[y.length],O=u.makeTensorInfo(S,"float32",y),j=u.makeTensorInfo(S,"float32",v),F=Object(r.a)({inputs:{real:O,imag:j},backend:u}),N=e(g,b,m,l,u),W=N.real,D=N.imag,E=[W.length],w=u.makeTensorInfo(E,"float32",W),z=u.makeTensorInfo(E,"float32",D),M=Object(r.a)({inputs:{real:w,imag:z},backend:u}),C=e(y,v,m,l,u),V=C.real,B=C.imag,G=[V.length],R=u.makeTensorInfo(G,"float32",V),Y=u.makeTensorInfo(G,"float32",B),_=Object(r.a)({inputs:{real:R,imag:Y},backend:u}),P=a.Ad.exponents(s,l),U=[P.real.length],J=u.makeTensorInfo(U,"float32",P.real),K=u.makeTensorInfo(U,"float32",P.imag),L=Object(r.a)({inputs:{real:J,imag:K},backend:u}),Z=Object(f.a)({inputs:{a:L,b:_},backend:u}),$=Object(o.a)({inputs:{a:M,b:Z},backend:u}),q=Object(p.a)({inputs:{a:M,b:Z},backend:u}),Q=Object(c.a)({inputs:{input:$},backend:u}),X=Object(c.a)({inputs:{input:q},backend:u}),ee=Object(d.a)({inputs:{input:$},backend:u}),te=Object(d.a)({inputs:{input:q},backend:u}),ne=Object(i.a)({inputs:[Q,X],backend:u,attrs:{axis:0}}),ae=Object(i.a)({inputs:[ee,te],backend:u,attrs:{axis:0}}),oe=u.data.get(ne.dataId).values,re=u.data.get(ae.dataId).values;return u.disposeIntermediateTensorInfo(k),u.disposeIntermediateTensorInfo(H),u.disposeIntermediateTensorInfo(A),u.disposeIntermediateTensorInfo(O),u.disposeIntermediateTensorInfo(j),u.disposeIntermediateTensorInfo(F),u.disposeIntermediateTensorInfo(w),u.disposeIntermediateTensorInfo(z),u.disposeIntermediateTensorInfo(M),u.disposeIntermediateTensorInfo(R),u.disposeIntermediateTensorInfo(Y),u.disposeIntermediateTensorInfo(_),u.disposeIntermediateTensorInfo(J),u.disposeIntermediateTensorInfo(K),u.disposeIntermediateTensorInfo(L),u.disposeIntermediateTensorInfo(Z),u.disposeIntermediateTensorInfo($),u.disposeIntermediateTensorInfo(q),u.disposeIntermediateTensorInfo(Q),u.disposeIntermediateTensorInfo(ee),u.disposeIntermediateTensorInfo(X),u.disposeIntermediateTensorInfo(te),u.disposeIntermediateTensorInfo(ne),u.disposeIntermediateTensorInfo(ae),{real:oe,imag:re}}(m,h,u,t,n),g=[e.shape[0],e.shape[1]];if(t){const e=n.makeTensorInfo(g,"float32",I.real),t=n.makeTensorInfo(g,"float32",I.imag),o=n.makeTensorInfo([],"float32",a.Hf.createScalarValue(u,"float32")),r=Object(s.a)({inputs:{x:o},backend:n}),i=l.b.kernelFunc({inputs:{a:e,b:o},backend:n}),d=l.b.kernelFunc({inputs:{a:t,b:r},backend:n}),f=n.data.get(i.dataId).values,c=n.data.get(d.dataId).values;return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(d),{real:f,imag:c}}return I}{const e=function(e,t,n){const o=new Float32Array(2*t);for(let r=0;r<t;r++){let i=0,s=0;for(let o=0;o<t;o++){const d=a.Ad.exponent(r*o,t,n),f=a.Ad.getComplexWithIndex(e,o);i+=f.real*d.real-f.imag*d.imag,s+=f.real*d.imag+f.imag*d.real}n&&(i/=t,s/=t),a.Ad.assignToTypedArray(o,i,s,r)}return o}(a.Ad.mergeRealAndImagArrays(m,h),u,t);return a.Ad.splitRealAndImagArrays(e)}var g}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);
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
 */function o(e){return(t,n,o,r,i)=>{const s=a.Ad.assertAndGetBroadcastShape(t,n),d=s.length,f=a.Hf.computeStrides(s),c=a.Hf.sizeFromShape(s),l=a.Hf.getTypedArrayFromDType(i,c),u=t.length,p=n.length,I=a.Hf.computeStrides(t),m=a.Hf.computeStrides(n),h=a.Ad.getBroadcastDims(t,s),g=a.Ad.getBroadcastDims(n,s);if(h.length+g.length===0)for(let t=0;t<l.length;++t)l[t]=e(o[t%o.length],r[t%r.length]);else for(let t=0;t<l.length;++t){const n=a.Hf.indexToLoc(t,d,f),i=n.slice(-u);h.forEach(e=>i[e]=0);const s=a.Hf.locToIndex(i,u,I),c=n.slice(-p);g.forEach(e=>c[e]=0);const b=a.Hf.locToIndex(c,p,m);l[t]=e(o[s],r[b])}return[l,s]}}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),o=n(14),r=n(117),i=n(70);
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
function s(e,t,n,s){return null==n?({inputs:n,backend:r})=>{const{a:i,b:d}=n,f=r;Object(o.a)([i,d],e);const c=f.data.get(i.dataId).values,l=f.data.get(d.dataId).values,u="string"===i.dtype?a.Ad.fromUint8ToStringArray(c):c,p="string"===i.dtype?a.Ad.fromUint8ToStringArray(l):l,I=s||i.dtype,[m,h]=t(i.shape,d.shape,u,p,I);return f.makeTensorInfo(h,I,m)}:({inputs:e,backend:a})=>{const{a:o,b:d}=e,f=a;if("complex64"===o.dtype||"complex64"===d.dtype){const e=Object(r.a)({inputs:{x:o},backend:f,attrs:{dtype:"complex64"}}),t=f.data.get(e.dataId),a=t.complexTensorInfos.real,s=t.complexTensorInfos.imag,c=f.data.get(a.dataId).values,l=f.data.get(s.dataId).values,u=Object(r.a)({inputs:{x:d},backend:f,attrs:{dtype:"complex64"}}),p=f.data.get(u.dataId),I=p.complexTensorInfos.real,m=p.complexTensorInfos.imag,h=f.data.get(I.dataId).values,g=f.data.get(m.dataId).values,[b,T,k]=n(o.shape,d.shape,c,l,h,g),H=f.makeTensorInfo(k,"float32",b),A=f.makeTensorInfo(k,"float32",T),x=Object(i.a)({inputs:{real:H,imag:A},backend:f});return f.disposeIntermediateTensorInfo(e),f.disposeIntermediateTensorInfo(u),f.disposeIntermediateTensorInfo(H),f.disposeIntermediateTensorInfo(A),x}{const e=f.data.get(o.dataId).values,n=f.data.get(d.dataId).values,a=s||o.dtype,[r,i]=t(o.shape,d.shape,e,n,a);return f.makeTensorInfo(i,a,r)}}}function d(e){return(t,n,o,r,i,s)=>{const d=a.Ad.assertAndGetBroadcastShape(t,n),f=a.Hf.sizeFromShape(d),c=d.length,l=a.Hf.computeStrides(d),u=a.Hf.getTypedArrayFromDType("float32",f),p=a.Hf.getTypedArrayFromDType("float32",f),I=a.Ad.getBroadcastDims(t,d),m=a.Ad.getBroadcastDims(n,d),h=a.Ad.mergeRealAndImagArrays(o,r),g=a.Ad.mergeRealAndImagArrays(i,s),b=t.length,T=a.Hf.computeStrides(t),k=n.length,H=a.Hf.computeStrides(n);if(I.length+m.length===0)for(let t=0;t<u.length;t++){const n=t%h.length,a=t%g.length,o=e(h[2*n],h[2*n+1],g[2*a],g[2*a+1]);u[t]=o.real,p[t]=o.imag}else for(let t=0;t<u.length;t++){const n=a.Hf.indexToLoc(t,c,l),o=n.slice(-b);I.forEach(e=>o[e]=0);const r=a.Hf.locToIndex(o,b,T),i=n.slice(-k);m.forEach(e=>i[e]=0);const s=a.Hf.locToIndex(i,k,H),d=e(h[2*r],h[2*r+1],g[2*s],g[2*s+1]);u[t]=d.real,p[t]=d.imag}return[u,p,d]}}},553:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));
/** @license See the LICENSE file. */
const a="4.1.0"},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);
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
 */function o(e){return(t,n,o)=>{const r=a.Hf.getTypedArrayFromDType(n,t.length);for(let n=0;n<t.length;++n)r[n]=e(t[n],o);return r}}}}]);