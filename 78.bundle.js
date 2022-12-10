(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{133:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"d",(function(){return u})),r.d(e,"f",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"e",(function(){return c})),r.d(e,"a",(function(){return f}));var n=r(0);
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
 *
 * =============================================================================
 */function i(t,e){return s(t,e)}function s(t,e,r=new Map,n=new Set){if(null==t)return null;if("function"==typeof Blob&&t instanceof Blob)return t.slice();if(n.has(t))throw new Error("Circular references are not supported.");if(r.has(t))return r.get(t);const i=e(t);if(i.recurse&&null!==i.value)throw new Error("A deep map function may not return both a value and recurse=true.");if(i.recurse){if(c(t)){const i=Array.isArray(t)?[]:{};n.add(t);for(const u in t){const o=s(t[u],e,r,n);i[u]=o}return n.delete(t),t.__proto__&&(i.__proto__=t.__proto__),i}throw new Error("Can't recurse into non-iterable type: "+t)}return r.set(t,i.value),i.value}function u(t,e=o){return function t(e,r,n=new Set){const i=e[0];if(n.has(i))throw new Error("Circular references are not supported.");const s=r(e);if(s.recurse&&null!==s.value)throw new Error("A deep zip function may not return both a value and recurse=true.");if(s.recurse){if(c(i)){const s=Array.isArray(i)?[]:{};n.add(i);for(const u in i){const i=e.map(t=>t[u]),o=t(i,r,n);s[u]=o}return n.delete(i),s}throw new Error("Can't recurse into non-iterable type: "+i)}return s.value}(t,e)}function o(t){return null===t?null:c(t[0])?{value:null,recurse:!0}:{value:t,recurse:!1}}async function a(t,e){const r=new Map;s(t,e,r);for(const t of Array.from(r.keys())){const e=r.get(t);if(n.Hf.isPromise(e)){const n=await e;r.set(t,n)}}return s(t,e,r)}function c(t){let e=!1;if(n.de().get("IS_BROWSER"))e=t instanceof TextDecoder;else{const{StringDecoder:n}=r(1256);e=t instanceof n}return null!=t&&!ArrayBuffer.isView(t)&&(Array.isArray(t)||"object"==typeof t&&!(t instanceof n.hd)&&!(t instanceof Promise)&&!e)}function f(t){return null==t||(null===(e=t)||"object"!=typeof e&&"function"!=typeof e)||Array.isArray(t)||"object"==typeof t&&t instanceof n.hd||n.Hf.isTypedArray(t);var e}},210:function(t,e,r){"use strict";r(134),r(315),r(83),r(759),r(760),r(317)},317:function(t,e,r){"use strict";r.d(e,"a",(function(){return URLDataSource}));var n=r(373),i=r(761),s=r(375),u=r(318);
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
 *
 * =============================================================================
 */
class URLDataSource extends n.a{constructor(t,e={}){super(),this.url=t,this.fileOptions=e}async iterator(){return Object(s.a)(this.url)?new u.a(this.url,this.fileOptions).iterator():Object(i.a)(this.url,this.fileOptions)}}},318:function(t,e,r){"use strict";r.d(e,"a",(function(){return FileDataSource}));var n=r(0),i=r(373),s=r(374),u=r(375);
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
 *
 * =============================================================================
 */
class FileDataSource extends i.a{constructor(t,e={}){super(),this.input=t,this.options=e}async iterator(){if(Object(u.a)(this.input)&&Object(n.de)().get("IS_NODE")){const t=r(1258);this.input=t.readFileSync(this.input.slice(7))}return new s.a(this.input,this.options)}}},372:function(t,e,r){"use strict";r.d(e,"a",(function(){return RingBuffer}));
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
 *
 * =============================================================================
 */
class RingBuffer{constructor(t){if(this.capacity=t,this.begin=0,this.end=0,null==t)throw new RangeError("Can't create a ring buffer of unknown capacity.");if(t<1)throw new RangeError("Can't create ring buffer of capacity < 1.");this.data=new Array(t),this.doubledCapacity=2*t}wrap(t){for(;t<0;)t+=this.doubledCapacity;return t%this.doubledCapacity}get(t){if(t<0)throw new RangeError("Can't get item at a negative index.");return this.data[t%this.capacity]}set(t,e){if(t<0)throw new RangeError("Can't set item at a negative index.");this.data[t%this.capacity]=e}length(){let t=this.end-this.begin;return t<0&&(t=this.doubledCapacity+t),t}isFull(){return this.length()===this.capacity}isEmpty(){return 0===this.length()}push(t){if(this.isFull())throw new RangeError("Ring buffer is full.");this.set(this.end,t),this.end=this.wrap(this.end+1)}pushAll(t){for(const e of t)this.push(e)}pop(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");this.end=this.wrap(this.end-1);const t=this.get(this.end);return this.set(this.end,void 0),t}unshift(t){if(this.isFull())throw new RangeError("Ring buffer is full.");this.begin=this.wrap(this.begin-1),this.set(this.begin,t)}shift(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const t=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),t}shuffleExcise(t){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const e=this.wrap(this.begin+t),r=this.get(e);return this.set(e,this.pop()),r}}},375:function(t,e,r){"use strict";
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
 *
 * =============================================================================
 */
function n(t){return"string"==typeof t&&"file://"===t.slice(0,7)}r.d(e,"a",(function(){return n}))},551:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));
/** @license See the LICENSE file. */
const n="4.1.0"},757:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(0),i=r(133);
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
 *
 * =============================================================================
 */
function s(t){return Object(i.b)(t,u)}function u(t){return t instanceof n.hd?{value:t.clone(),recurse:!1}:Object(i.e)(t)?{value:null,recurse:!0}:{value:t,recurse:!1}}},758:function(t,e,r){"use strict";r.d(e,"a",(function(){return GrowingRingBuffer}));var n=r(372);
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
 *
 * =============================================================================
 */class GrowingRingBuffer extends n.a{constructor(){super(GrowingRingBuffer.INITIAL_CAPACITY)}isFull(){return!1}push(t){super.isFull()&&this.expand(),super.push(t)}unshift(t){super.isFull()&&this.expand(),super.unshift(t)}expand(){const t=2*this.capacity,e=new Array(t),r=this.length();for(let t=0;t<r;t++)e[t]=this.get(this.wrap(this.begin+t));this.data=e,this.capacity=t,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=r}}GrowingRingBuffer.INITIAL_CAPACITY=32}}]);