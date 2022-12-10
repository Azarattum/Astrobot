(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{106:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(6),c=a(3),r=a(36),s=a(2),b=a(25),o=a(4);const u=Object(o.b)({lessEqual_:
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
function(t,e){let a=Object(s.a)(t,"a","lessEqual","string_or_numeric"),o=Object(s.a)(e,"b","lessEqual","string_or_numeric");[a,o]=Object(r.makeTypesMatch)(a,o),Object(b.assertAndGetBroadcastShape)(a.shape,o.shape);const u={a:a,b:o};return n.a.runKernel(c.Cb,u)}})},218:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(6),c=a(3),r=a(36),s=a(2),b=a(25),o=a(4);const u=Object(o.b)({less_:
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
function(t,e){let a=Object(s.a)(t,"a","less","string_or_numeric"),o=Object(s.a)(e,"b","less","string_or_numeric");[a,o]=Object(r.makeTypesMatch)(a,o),Object(b.assertAndGetBroadcastShape)(a.shape,o.shape);const u={a:a,b:o};return n.a.runKernel(c.Bb,u)}})},295:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(6),c=a(3),r=a(2),s=a(5),b=a(4),o=a(9);const u=Object(b.b)({localResponseNormalization_:
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
function(t,e=5,a=1,b=1,u=.5){const j=Object(r.a)(t,"x","localResponseNormalization");s.b(4===j.rank||3===j.rank,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${j.rank}.`),s.b(s.v(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let O=j,i=!1;3===j.rank&&(i=!0,O=Object(o.a)(j,[1,j.shape[0],j.shape[1],j.shape[2]]));const h={x:O},p={depthRadius:e,bias:a,alpha:b,beta:u},l=n.a.runKernel(c.yb,h,p);return i?Object(o.a)(l,[l.shape[1],l.shape[2],l.shape[3]]):l}})},480:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(6),c=a(3);
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
function r(t,e,a){if(a<=0)throw new Error("The number of values should be positive.");const r={start:t,stop:e,num:a};return n.a.runKernel(c.Db,{},r)}},583:function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var n=a(2),c=a(5),r=a(124),s=a(106),b=a(113),o=a(4),u=a(183),j=a(9),O=a(27),i=a(115),h=a(23),p=a(146),l=a(64),d=a(144);const f=Object(o.b)({bandPart_:
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
function(t,e,a){Object(c.b)(e%1==0,()=>`bandPart(): numLower must be an integer, got ${e}.`),Object(c.b)(a%1==0,()=>`bandPart(): numUpper must be an integer, got ${a}.`);const o=Object(n.a)(t,"a","bandPart");Object(c.b)(o.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${o.rank}.`);const f=o.shape,[m,g]=o.shape.slice(-2);if(!(e<=m))throw new Error(`bandPart(): numLower (${e}) must not be greater than the number of rows (${m}).`);if(!(a<=g))throw new Error(`bandPart(): numUpper (${a}) must not be greater than the number of columns (${g}).`);e<0&&(e=m),a<0&&(a=g);const k=Object(j.a)(Object(u.a)(0,m,1,"int32"),[-1,1]),v=Object(u.a)(0,g,1,"int32"),w=Object(h.a)(k,v),_=Object(b.a)(Object(s.a)(w,Object(O.a)(+e,"int32")),Object(r.a)(w,Object(O.a)(-a,"int32"))),$=Object(d.a)([m,g],o.dtype);return Object(j.a)(Object(i.a)(Object(p.a)(Object(j.a)(o,[-1,m,g])).map(t=>Object(l.a)(_,t,$))),f)}})},584:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a(6),c=a(5),r=a(24),s=a(10),b=a(156),o=a(4),u=a(114),j=a(176),O=a(115),i=a(23),h=a(28);const p=Object(o.b)({gramSchmidt_:
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
function(t){let e;if(Array.isArray(t)){e=!1,Object(c.b)(null!=t&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const a=t[0].shape[0];for(let e=1;e<t.length;++e)Object(c.b)(t[e].shape[0]===a,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[e].shape[0]} vs. ${a})`)}else e=!0,t=Object(u.a)(t,t.shape[0],0).map(t=>Object(j.a)(t,[0]));Object(c.b)(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const a=[],o=t;for(let e=0;e<t.length;++e)a.push(n.a.tidy(()=>{let t=o[e];if(e>0)for(let n=0;n<e;++n){const e=Object(s.a)(Object(h.a)(Object(s.a)(a[n],t)),a[n]);t=Object(i.a)(t,e)}return Object(r.a)(t,Object(b.a)(t,"euclidean"))}));return e?Object(O.a)(a,0):a}})},585:function(t,e,a){"use strict";a.d(e,"a",(function(){return y}));var n=a(6),c=a(42),r=a(5),s=a(126),b=a(58),o=a(24),u=a(294),j=a(80),O=a(43),i=a(10),h=a(49),p=a(156),l=a(4),d=a(9),f=a(44),m=a(115),g=a(23),k=a(185),v=a(89),w=a(146),_=a(64);function $(t,e=!1){return n.a.tidy(()=>{Object(r.b)(2===t.shape.length,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const a=t.shape[0],l=t.shape[1];let d=Object(u.a)(a),m=Object(s.a)(t);const w=Object(k.a)([[1]],[1,1]);let $=Object(s.a)(w);const y=a>=l?l:a;for(let t=0;t<y;++t){const e=m,r=$,u=d;[$,m,d]=n.a.tidy(()=>{const e=Object(f.a)(m,[t,t],[a-t,1]),n=Object(p.a)(e),c=Object(f.a)(m,[t,t],[1,1]),r=Object(_.a)(Object(j.a)(c,0),Object(k.a)([[-1]]),Object(k.a)([[1]])),u=Object(g.a)(c,Object(i.a)(r,n)),y=Object(o.a)(e,u);$=1===y.shape[0]?Object(s.a)(w):Object(b.a)([w,Object(f.a)(y,[1,0],[y.shape[0]-1,y.shape[1]])],0);const R=Object(h.a)(Object(o.a)(Object(O.a)(r,u),n)),q=Object(f.a)(m,[t,0],[a-t,l]),E=Object(i.a)(R,$),N=Object(v.a)($);if(0===t)m=Object(g.a)(q,Object(O.a)(E,Object(O.a)(N,q)));else{const e=Object(g.a)(q,Object(O.a)(E,Object(O.a)(N,q)));m=Object(b.a)([Object(f.a)(m,[0,0],[t,l]),e],0)}const P=Object(v.a)(E),z=Object(f.a)(d,[0,t],[a,d.shape[1]-t]);if(0===t)d=Object(g.a)(z,Object(O.a)(Object(O.a)(z,$),P));else{const e=Object(g.a)(z,Object(O.a)(Object(O.a)(z,$),P));d=Object(b.a)([Object(f.a)(d,[0,0],[a,t]),e],1)}return[$,m,d]}),Object(c.b)([e,r,u])}return!e&&a>l&&(d=Object(f.a)(d,[0,0],[a,l]),m=Object(f.a)(m,[0,0],[l,l])),[d,m]})}const y=Object(l.b)({qr_:
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
function(t,e=!1){if(Object(r.b)(t.rank>=2,()=>"qr() requires input tensor to have a rank >= 2, but got rank "+t.rank),2===t.rank)return $(t,e);{const a=t.shape.slice(0,t.shape.length-2).reduce((t,e)=>t*e),n=Object(w.a)(Object(d.a)(t,[a,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),c=[],r=[];n.forEach(t=>{const[a,n]=$(t,e);c.push(a),r.push(n)});return[Object(d.a)(Object(m.a)(c,0),t.shape),Object(d.a)(Object(m.a)(r,0),t.shape)]}}})},653:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(6),c=a(3),r=a(4);const s=Object(r.b)({localResponseNormalizationBackprop_:
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
function(t,e,a,r=5,s=1,b=1,o=.5){const u={x:t,y:e,dy:a},j={depthRadius:r,bias:s,alpha:b,beta:o};return n.a.runKernel(c.zb,u,j)}})}}]);