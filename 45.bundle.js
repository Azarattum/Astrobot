(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{105:function(t,e,a){"use strict";a.d(e,"a",(function(){return Optimizer}));var i=a(42),s=a(68),n=a(27),r=a(85);
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
class Optimizer extends r.Serializable{minimize(t,e=!1,a){const{value:s,grads:n}=this.computeGradients(t,a);if(null!=a){const t=a.map(t=>({name:t.name,tensor:n[t.name]}));this.applyGradients(t)}else this.applyGradients(n);return Object(i.b)(n),e?s:(s.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return Object(s.b)(t,e)}dispose(){null!=this.iterations_&&Object(i.b)(this.iterations_)}async saveIterations(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:Object(n.a)(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Optimizer,Symbol.hasInstance,{value:t=>null!=t.minimize&&null!=t.computeGradients&&null!=t.applyGradients})},1099:function(t,e,a){"use strict";a(252);var i=a(34),s=a(361),n=a(362),r=a(167);
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
class PlatformBrowser{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Browser's encoder only supports utf-8, but got "+e);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){"undefined"!=typeof window&&Object(i.b)().getBool("USE_SETTIMEOUTCUSTOM")?(this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",t=>{if(t.source===window&&t.data.name===this.messageName){t.stopPropagation();(0,this.functionRefs[t.data.index])(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))):setTimeout(t,e)}}if(Object(i.b)().get("IS_BROWSER")){Object(i.b)().setPlatform("browser",new PlatformBrowser);try{r.a.registerManager(n.a.URL_SCHEME,new n.b)}catch(t){}try{r.a.registerManager(s.a.URL_SCHEME,new s.b)}catch(t){}}},1103:function(t,e,a){"use strict";(function(t){var e=a(34);
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
 */const i=()=>a(1104);let s;class PlatformNode{constructor(){this.util=a(1105),this.textEncoder=new this.util.TextEncoder}fetch(t,a){return null!=Object(e.b)().global.fetch?Object(e.b)().global.fetch(t,a):(null==s&&(s=i()),s(t,a))}now(){const e=t.hrtime();return 1e3*e[0]+e[1]/1e6}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)}decode(t,e){return 0===t.length?"":new this.util.TextDecoder(e).decode(t)}}Object(e.b)().get("IS_NODE")&&!Object(e.b)().get("IS_BROWSER")&&Object(e.b)().setPlatform("node",new PlatformNode)}).call(this,a(274))},154:function(t,e,a){"use strict";a.d(e,"a",(function(){return OptimizerConstructors}));var i=a(230),s=a(231),n=a(234),r=a(233),c=a(229),o=a(232),l=a(178);
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
class OptimizerConstructors{static sgd(t){return new l.a(t)}static momentum(t,e,a=!1){return new c.a(t,e,a)}static rmsprop(t,e=.9,a=0,i=null,s=!1){return new o.a(t,e,a,i,s)}static adam(t=.001,e=.9,a=.999,i=null){return new n.a(t,e,a,i)}static adadelta(t=.001,e=.95,a=null){return new i.a(t,e,a)}static adamax(t=.002,e=.9,a=.999,i=null,s=0){return new r.a(t,e,a,i,s)}static adagrad(t,e=.1){return new s.a(t,e)}}},178:function(t,e,a){"use strict";a.d(e,"a",(function(){return SGDOptimizer}));var i=a(6),s=a(42),n=a(22),r=a(10),c=a(27),o=a(85),l=a(105);
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
class SGDOptimizer extends l.a{constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(t=>t.name):Object.keys(t)).forEach((e,a)=>{const c=Array.isArray(t)?t[a].tensor:t[e];if(null==c)return;const o=i.a.registeredVariables[e];Object(s.h)(()=>{const t=Object(n.a)(Object(r.a)(this.c,c),o);o.assign(t)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,null!=this.c&&this.c.dispose(),this.c=Object(s.d)(Object(c.a)(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(0!==(t=await this.extractIterations(t)).length)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}SGDOptimizer.className="SGD",Object(o.registerClass)(SGDOptimizer)},229:function(t,e,a){"use strict";a.d(e,"a",(function(){return MomentumOptimizer}));var i=a(6),s=a(42),n=a(22),r=a(10),c=a(27),o=a(32),l=a(85),u=a(178);
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
class MomentumOptimizer extends u.a{constructor(t,e,a=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=a,this.accumulations=[],this.m=Object(c.a)(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(t=>t.name):Object.keys(t)).forEach((e,a)=>{const c=i.a.registeredVariables[e];if(null==this.accumulations[a]){const t=!1;this.accumulations[a]={originalName:e+"/momentum",variable:Object(s.h)(()=>Object(o.a)(c).variable(t))}}const l=this.accumulations[a].variable,u=Array.isArray(t)?t[a].tensor:t[e];null!=u&&Object(s.h)(()=>{let t;const e=Object(n.a)(Object(r.a)(this.m,l),u);t=this.useNesterov?Object(n.a)(Object(r.a)(this.c,Object(n.a)(u,Object(r.a)(e,this.m))),c):Object(n.a)(Object(r.a)(this.c,e),c),l.assign(e),c.assign(t)})}),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&Object(s.b)(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);this.accumulations=t.map(t=>({originalName:t.name,variable:t.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}MomentumOptimizer.className="Momentum",Object(l.registerClass)(MomentumOptimizer)},230:function(t,e,a){"use strict";a.d(e,"a",(function(){return AdadeltaOptimizer}));var i=a(6),s=a(42),n=a(22),r=a(24),c=a(10),o=a(66),l=a(41),u=a(32),m=a(85),h=a(105);
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
class AdadeltaOptimizer extends h.a{constructor(t,e,a=null){super(),this.learningRate=t,this.rho=e,this.epsilon=a,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==a&&(this.epsilon=i.a.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(t=>t.name):Object.keys(t)).forEach((e,a)=>{const m=i.a.registeredVariables[e];null==this.accumulatedGrads[a]&&(this.accumulatedGrads[a]={originalName:e+"/accum_grad",variable:Object(s.h)(()=>Object(u.a)(m).variable(!1))}),null==this.accumulatedUpdates[a]&&(this.accumulatedUpdates[a]={originalName:e+"/accum_var",variable:Object(s.h)(()=>Object(u.a)(m).variable(!1))});const h=Array.isArray(t)?t[a].tensor:t[e];if(null==h)return;const b=this.accumulatedGrads[a].variable,d=this.accumulatedUpdates[a].variable;Object(s.h)(()=>{const t=Object(n.a)(Object(c.a)(b,this.rho),Object(c.a)(Object(l.a)(h),1-this.rho)),e=Object(c.a)(Object(r.a)(Object(o.a)(Object(n.a)(d,this.epsilon)),Object(o.a)(Object(n.a)(b,this.epsilon))),h),a=Object(n.a)(Object(c.a)(d,this.rho),Object(c.a)(Object(l.a)(e),1-this.rho));b.assign(t),d.assign(a);const i=Object(n.a)(Object(c.a)(e,-this.learningRate),m);m.assign(i)})}),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&(Object(s.b)(this.accumulatedGrads.map(t=>t.variable)),Object(s.b)(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){const e=(t=await this.extractIterations(t)).length/2;this.accumulatedGrads=t.slice(0,e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)})),this.accumulatedUpdates=t.slice(e,2*e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}AdadeltaOptimizer.className="Adadelta",Object(m.registerClass)(AdadeltaOptimizer)},231:function(t,e,a){"use strict";a.d(e,"a",(function(){return AdagradOptimizer}));var i=a(6),s=a(42),n=a(22),r=a(24),c=a(143),o=a(10),l=a(66),u=a(41),m=a(85),h=a(105);
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
class AdagradOptimizer extends h.a{constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(t=>t.name):Object.keys(t)).forEach((e,a)=>{const m=i.a.registeredVariables[e];if(null==this.accumulatedGrads[a]){const t=!1;this.accumulatedGrads[a]={originalName:e+"/accumulator",variable:Object(s.h)(()=>Object(c.a)(m.shape,this.initialAccumulatorValue).variable(t))}}const h=Array.isArray(t)?t[a].tensor:t[e];if(null==h)return;const b=this.accumulatedGrads[a].variable;Object(s.h)(()=>{const t=Object(n.a)(b,Object(u.a)(h));b.assign(t);const e=Object(n.a)(Object(o.a)(Object(r.a)(h,Object(l.a)(Object(n.a)(t,i.a.backend.epsilon()))),-this.learningRate),m);m.assign(e)})}),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&Object(s.b)(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);this.accumulatedGrads=t.map(t=>({originalName:t.name,variable:t.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}AdagradOptimizer.className="Adagrad",Object(m.registerClass)(AdagradOptimizer)},232:function(t,e,a){"use strict";a.d(e,"a",(function(){return RMSPropOptimizer}));var i=a(6),s=a(42),n=a(22),r=a(24),c=a(10),o=a(66),l=a(41),u=a(23),m=a(32),h=a(85),b=a(105);
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
class RMSPropOptimizer extends b.a{constructor(t,e=.9,a=0,s=null,n=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=a,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=n,null==s&&(this.epsilon=i.a.backend.epsilon()),null==t)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(t=>t.name):Object.keys(t)).forEach((e,a)=>{const h=i.a.registeredVariables[e];null==this.accumulatedMeanSquares[a]&&(this.accumulatedMeanSquares[a]={originalName:e+"/rms",variable:Object(s.h)(()=>Object(m.a)(h).variable(!1))}),null==this.accumulatedMoments[a]&&(this.accumulatedMoments[a]={originalName:e+"/momentum",variable:Object(s.h)(()=>Object(m.a)(h).variable(!1))}),null==this.accumulatedMeanGrads[a]&&this.centered&&(this.accumulatedMeanGrads[a]={originalName:e+"/mg",variable:Object(s.h)(()=>Object(m.a)(h).variable(!1))});const b=Array.isArray(t)?t[a].tensor:t[e];if(null==b)return;const d=this.accumulatedMeanSquares[a].variable,O=this.accumulatedMoments[a].variable;Object(s.h)(()=>{const t=Object(n.a)(Object(c.a)(d,this.decay),Object(c.a)(Object(l.a)(b),1-this.decay));if(this.centered){const e=this.accumulatedMeanGrads[a].variable,i=Object(n.a)(Object(c.a)(e,this.decay),Object(c.a)(b,1-this.decay)),s=Object(r.a)(Object(c.a)(b,this.learningRate),Object(o.a)(Object(u.a)(t,Object(n.a)(Object(l.a)(i),this.epsilon)))),m=Object(n.a)(Object(c.a)(O,this.momentum),s);d.assign(t),e.assign(i),O.assign(m);const g=Object(u.a)(h,m);h.assign(g)}else{const t=Object(n.a)(Object(c.a)(d,this.decay),Object(c.a)(Object(l.a)(b),1-this.decay)),e=Object(n.a)(Object(c.a)(O,this.momentum),Object(r.a)(Object(c.a)(b,this.learningRate),Object(o.a)(Object(n.a)(t,this.epsilon))));d.assign(t),O.assign(e);const a=Object(u.a)(h,e);h.assign(a)}})}),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&Object(s.b)(this.accumulatedMeanSquares.map(t=>t.variable)),null!=this.accumulatedMeanGrads&&this.centered&&Object(s.b)(this.accumulatedMeanGrads.map(t=>t.variable)),null!=this.accumulatedMoments&&Object(s.b)(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2;this.accumulatedMeanSquares=t.slice(0,e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)})),this.accumulatedMoments=t.slice(e,2*e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)})),this.centered&&(this.accumulatedMeanGrads=t.slice(2*e,3*e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}RMSPropOptimizer.className="RMSProp",Object(h.registerClass)(RMSPropOptimizer)},233:function(t,e,a){"use strict";a.d(e,"a",(function(){return AdamaxOptimizer}));var i=a(6),s=a(42),n=a(76),r=a(22),c=a(24),o=a(174),l=a(10),u=a(27),m=a(23),h=a(32),b=a(85),d=a(105);
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
class AdamaxOptimizer extends d.a{constructor(t,e,a,n=null,r=0){super(),this.learningRate=t,this.beta1=e,this.beta2=a,this.epsilon=n,this.decay=r,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],Object(s.h)(()=>{this.iteration=Object(u.a)(0).variable(),this.accBeta1=Object(u.a)(e).variable()}),null==n&&(this.epsilon=i.a.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(t=>t.name):Object.keys(t);Object(s.h)(()=>{const a=Object(m.a)(1,this.accBeta1),s=Object(c.a)(-this.learningRate,Object(r.a)(Object(l.a)(this.iteration,this.decay),1));e.forEach((e,u)=>{const m=i.a.registeredVariables[e];null==this.accumulatedFirstMoment[u]&&(this.accumulatedFirstMoment[u]={originalName:e+"/m",variable:Object(h.a)(m).variable(!1)}),null==this.accumulatedWeightedInfNorm[u]&&(this.accumulatedWeightedInfNorm[u]={originalName:e+"/v",variable:Object(h.a)(m).variable(!1)});const b=Array.isArray(t)?t[u].tensor:t[e];if(null==b)return;const d=this.accumulatedFirstMoment[u].variable,O=this.accumulatedWeightedInfNorm[u].variable,g=Object(r.a)(Object(l.a)(d,this.beta1),Object(l.a)(b,1-this.beta1)),p=Object(l.a)(O,this.beta2),j=Object(n.a)(b),f=Object(o.a)(p,j);d.assign(g),O.assign(f);const v=Object(r.a)(Object(l.a)(Object(c.a)(s,a),Object(c.a)(g,Object(r.a)(f,this.epsilon))),m);m.assign(v)}),this.iteration.assign(Object(r.a)(this.iteration,1)),this.accBeta1.assign(Object(l.a)(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&Object(s.b)(this.accumulatedFirstMoment.map(t=>t.variable)),null!=this.accumulatedWeightedInfNorm&&Object(s.b)(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}AdamaxOptimizer.className="Adamax",Object(b.registerClass)(AdamaxOptimizer)},234:function(t,e,a){"use strict";a.d(e,"a",(function(){return AdamOptimizer}));var i=a(6),s=a(42),n=a(22),r=a(24),c=a(10),o=a(99),l=a(27),u=a(66),m=a(41),h=a(23),b=a(32),d=a(85),O=a(105);
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
class AdamOptimizer extends O.a{constructor(t,e,a,n=null){super(),this.learningRate=t,this.beta1=e,this.beta2=a,this.epsilon=n,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],Object(s.h)(()=>{this.accBeta1=Object(l.a)(e).variable(),this.accBeta2=Object(l.a)(a).variable()}),null==n&&(this.epsilon=i.a.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(t=>t.name):Object.keys(t);Object(s.h)(()=>{const a=Object(h.a)(1,this.accBeta1),o=Object(h.a)(1,this.accBeta2);e.forEach((e,l)=>{const h=i.a.registeredVariables[e];null==this.accumulatedFirstMoment[l]&&(this.accumulatedFirstMoment[l]={originalName:e+"/m",variable:Object(s.h)(()=>Object(b.a)(h).variable(!1))}),null==this.accumulatedSecondMoment[l]&&(this.accumulatedSecondMoment[l]={originalName:e+"/v",variable:Object(s.h)(()=>Object(b.a)(h).variable(!1))});const d=Array.isArray(t)?t[l].tensor:t[e];if(null==d)return;const O=this.accumulatedFirstMoment[l].variable,g=this.accumulatedSecondMoment[l].variable,p=Object(n.a)(Object(c.a)(O,this.beta1),Object(c.a)(d,1-this.beta1)),j=Object(n.a)(Object(c.a)(g,this.beta2),Object(c.a)(Object(m.a)(d),1-this.beta2)),f=Object(r.a)(p,a),v=Object(r.a)(j,o);O.assign(p),g.assign(j);const y=Object(n.a)(Object(c.a)(Object(r.a)(f,Object(n.a)(Object(u.a)(v),this.epsilon)),-this.learningRate),h);h.assign(y)}),this.accBeta1.assign(Object(c.a)(this.accBeta1,this.beta1)),this.accBeta2.assign(Object(c.a)(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&Object(s.b)(this.accumulatedFirstMoment.map(t=>t.variable)),null!=this.accumulatedSecondMoment&&Object(s.b)(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t),Object(s.h)(()=>{this.accBeta1.assign(Object(o.a)(this.beta1,this.iterations_+1)),this.accBeta2.assign(Object(o.a)(this.beta2,this.iterations_+1))});const e=t.length/2;this.accumulatedFirstMoment=t.slice(0,e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)})),this.accumulatedSecondMoment=t.slice(e,2*e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}AdamOptimizer.className="Adam",Object(d.registerClass)(AdamOptimizer)}}]);