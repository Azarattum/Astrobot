(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{453:function(e,t,a){"use strict";a.d(t,"b",(function(){return TimeDistributed})),a.d(t,"a",(function(){return Bidirectional}));var r=a(0),i=a(21),s=a(31),n=a(20),l=a(8),c=a(205),o=a(12),u=a(16),h=a(71),d=a(96);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
class Wrapper extends n.b{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return null!=this.layer&&this.layer.trainable}set trainable(e){null!=this.layer&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){const e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},t=super.getConfig();return Object.assign(e,t),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),null!=this.layer&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,a={}){const r=t.layer,i=Object(d.a)(r,a);delete t.layer;const s={layer:i};return Object.assign(s,t),new e(s)}}class TimeDistributed extends Wrapper{constructor(e){super(e),this.supportsMasking=!0}build(e){if((e=Object(u.a)(e)).length<3)throw new l.e("TimeDistributed layer expects an input shape >= 3D, but received input shape "+JSON.stringify(e));this.inputSpec=[{shape:e}];const t=[e[0]].concat(e.slice(2));this.layer.built||(this.layer.build(t),this.layer.built=!0),super.build(e)}computeOutputShape(e){const t=[(e=Object(u.a)(e))[0]].concat(e.slice(2)),a=this.layer.computeOutputShape(t),r=e[1];return[a[0],r].concat(a.slice(1))}call(e,t){return Object(r.Af)(()=>{e=Object(u.b)(e);return Object(h.k)((e,a)=>[Object(u.b)(this.layer.call(e,t)),[]],e,[],!1,null,null,!1,!0)[1]})}}TimeDistributed.className="TimeDistributed",r.df.registerClass(TimeDistributed);class Bidirectional extends Wrapper{constructor(e){super(e);const t=e.layer.getConfig(),a={};a.className=e.layer.getClassName(),a.config=t,this.forwardLayer=Object(d.a)(a),t.goBackwards=!0!==t.goBackwards;const r={};var i;if(r.className=e.layer.getClassName(),r.config=t,this.backwardLayer=Object(d.a)(r),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=void 0===e.mergeMode?"concat":e.mergeMode,i=this.mergeMode,o.d(c.a,"BidirectionalMergeMode",i),e.weights)throw new l.c("weights support is not implemented for Bidirectional layer yet.");this._stateful=e.layer.stateful,this.returnSequences=e.layer.returnSequences,this.returnState=e.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=e.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(e){this._trainable=e,null!=this.forwardLayer&&(this.forwardLayer.trainable=e),null!=this.backwardLayer&&(this.backwardLayer.trainable=e)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(e){const t=e.length,a=Math.floor(t/2);this.forwardLayer.setWeights(e.slice(0,a)),this.backwardLayer.setWeights(e.slice(a))}computeOutputShape(e){let t,a,r,i=this.forwardLayer.computeOutputShape(e);return Array.isArray(i)&&Array.isArray(i[0])||(i=[i]),i=i,this.returnState?(r=i.slice(1),t=i[0]):t=i[0],t=t,"concat"===this.mergeMode?(t[t.length-1]*=2,a=[t]):a=null==this.mergeMode?[t,t.slice()]:[t],this.returnState?null==this.mergeMode?a.concat(r).concat(r.slice()):[t].concat(r).concat(r.slice()):o.m(a)}apply(e,t){let a=null==t?null:t.initialState,r=null==t?null:t.constants;null==t&&(t={});const i=Object(h.l)(e,a,r,this.numConstants);if(e=i.inputs,a=i.initialState,r=i.constants,Array.isArray(e)&&(a=e.slice(1),e=e[0]),(null==a||0===a.length)&&null==r)return super.apply(e,t);const s=[],c=[];if(null!=a){const e=a.length;if(e%2>0)throw new l.e("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");t.initialState=a,s.push(...a);const r=a.map(e=>new n.a({shape:e.shape}));this.forwardLayer.stateSpec=r.slice(0,e/2),this.backwardLayer.stateSpec=r.slice(e/2),c.push(...r)}if(null!=r)throw new l.c("Support for constants in Bidirectional layers is not implemented yet.");const o=s[0]instanceof n.d;for(const e of s)if(e instanceof n.d!==o)throw new l.e("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(o){const a=[e].concat(s),r=this.inputSpec.concat(c),i=this.inputSpec;this.inputSpec=r;const n=super.apply(a,t);return this.inputSpec=i,n}return super.apply(e,t)}call(e,t){return Object(r.Af)(()=>{const a=t.initialState;let s,n,l,c;if(null==a)s=this.forwardLayer.call(e,t),n=this.backwardLayer.call(e,t);else{const r=a.slice(0,a.length/2),i=a.slice(a.length/2);s=this.forwardLayer.call(e,Object.assign(t,{initialState:r})),n=this.backwardLayer.call(e,Object.assign(t,{initialState:i}))}return this.returnState&&(Array.isArray(s)&&(l=s.slice(1).concat(n.slice(1))),s=s[0],n=n[0]),this.returnSequences&&(n=r.Ze(n,1)),"concat"===this.mergeMode?c=i.e([s,n]):"sum"===this.mergeMode?c=r.td(s,n):"ave"===this.mergeMode?c=r.Ie(.5,r.td(s,n)):"mul"===this.mergeMode?c=r.Ie(s,n):null==this.mergeMode&&(c=[s,n]),this.returnState?null==this.mergeMode?c.concat(l):[c].concat(l):c})}resetStates(e){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(e){Object(s.g)(this.forwardLayer.name,()=>{this.forwardLayer.build(e)}),Object(s.g)(this.backwardLayer.name,()=>{this.backwardLayer.build(e)}),this.built=!0}computeMask(e,t){let a;if(Array.isArray(t)&&(t=t[0]),a=this.returnSequences?null==this.mergeMode?[t,t]:t:null==this.mergeMode?[null,null]:null,this.returnState){const e=this.forwardLayer.states.map(e=>null);return Array.isArray(a)?a.concat(e).concat(e):[a].concat(e).concat(e)}return a}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),null!=this.forwardLayer&&this.forwardLayer.setFastWeightInitDuringBuild(e),null!=this.backwardLayer&&this.backwardLayer.setFastWeightInitDuringBuild(e)}getConfig(){const e={mergeMode:this.mergeMode},t=super.getConfig();return Object.assign(e,t),e}static fromConfig(e,t){const a=Object(d.a)(t.layer);if(delete t.layer,null!=t.numConstants)throw new l.c("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const r=t;return r.layer=a,new e(r)}}Bidirectional.className="Bidirectional",r.df.registerClass(Bidirectional)}}]);