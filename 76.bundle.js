(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{199:function(n,e,t){"use strict";(function(n,r){
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
let a;function i(){if(null==a){let e;if("undefined"!=typeof window)e=window;else if(void 0!==n)e=n;else if(void 0!==r)e=r;else{if("undefined"==typeof self)throw new Error("Could not find a global object");e=self}a=e}return a}function o(n,e){const t=function(){const n=i();return null==n._tfGlobals&&(n._tfGlobals=new Map),n._tfGlobals}();if(t.has(n))return t.get(n);{const r=e();return t.set(n,r),t.get(n)}}t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return o}))}).call(this,t(273),t(274))},42:function(n,e,t){"use strict";t.d(e,"c",(function(){return u})),t.d(e,"e",(function(){return s})),t.d(e,"h",(function(){return f})),t.d(e,"b",(function(){return c})),t.d(e,"d",(function(){return l})),t.d(e,"g",(function(){return d})),t.d(e,"f",(function(){return b})),t.d(e,"a",(function(){return h}));var r=t(6),a=t(34),i=t(7),o=t(36);function u(){return r.a}function s(){return r.a.memory()}function f(n,e){return r.a.tidy(n,e)}function c(n){Object(o.getTensorsInContainer)(n).forEach(n=>n.dispose())}function l(n){return r.a.keep(n)}function d(n){return r.a.setBackend(n)}function b(n,e,t=1){return r.a.registerBackend(n,e,t)}function h(){return r.a.backend}Object(i.e)((function(n){Object(a.b)().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}))},68:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return o}));var r=t(6),a=t(7),i=(t(2),t(5));function o(n,e){i.b(i.u(n),()=>"The f passed in variableGrads(f) must be a function"),i.b(null==e||Array.isArray(e)&&e.every(n=>n instanceof a.c),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const t=null!=e;if(!t){e=[];for(const n in r.a.registeredVariables)e.push(r.a.registeredVariables[n])}const o=t?e.filter(n=>!n.trainable):null,u=e.length;e=e.filter(n=>n.trainable),i.b(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${u} variables is trainable.`);const{value:s,grads:f}=r.a.gradients(n,e,null,!0);i.b(f.some(n=>null!=n),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),i.b(0===s.rank,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${s.rank} tensor`);const c={};return e.forEach((n,e)=>{null!=f[e]&&(c[n.name]=f[e])}),null!=o&&o.forEach(n=>c[n.name]=null),{value:s,grads:c}}function u(n){return r.a.customGrad(n)}}}]);