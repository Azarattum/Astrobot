(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{451:function(t,e,i){"use strict";i.d(e,"b",(function(){return ConvLSTM2DCell})),i.d(e,"a",(function(){return ConvLSTM2D}));var s=i(0),n=i(21),r=i(31),a=i(20),l=i(8),h=i(26),o=i(54),u=i(12),c=i(16),p=i(71),d=function(t,e){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(i[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(t);n<s.length;n++)e.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(i[s[n]]=t[s[n]])}return i};p.f;class ConvRNN2D extends p.e{constructor(t){if(t.unroll)throw new l.c("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new l.c("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new a.a({ndim:5})]}call(t,e){return s.Af(()=>{if(null!=this.cell.dropoutMask&&(s.Yd(this.cell.dropoutMask),this.cell.dropoutMask=null),null!=this.cell.recurrentDropoutMask&&(s.Yd(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new l.e("ConvRNN2D cell does not support constants");const i=null==e?null:e.mask,n=null==e?null:e.training,r=null==e?null:e.initialState;return super.call(t,{mask:i,training:n,initialState:r})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return s.Af(()=>{const{stateSize:e}=this.cell,i=t.shape,n=this.computeSingleOutputShape(i),r=[n[0],...n.slice(2)],a=s.Mf(r);return Array.isArray(e)?Array(e.length).fill(a):[a]})}resetStates(t,e=!1){s.Af(()=>{if(!this.stateful)throw new l.b("Cannot call resetStates() on an RNN Layer that is not stateful.");const i=this.inputSpec[0].shape,n=this.computeSingleOutputShape(i),r=[n[0],...n.slice(2)];if(null==i[0])throw new l.e("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(null==this.getStates())Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>s.Mf(r)):this.states_=[s.Mf(r)];else if(null==t)s.Yd(this.states_),null!=this.keptStates&&(s.Yd(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>s.Mf(r)):this.states_[0]=s.Mf(r);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new l.e(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: `+t);e?this.keptStates.push(this.states_.slice()):s.Yd(this.states_);for(let e=0;e<this.states_.length;++e){const i=t[e],n=r;if(!s.Hf.arraysEqual(i.shape,n))throw new l.e(`State ${e} is incompatible with layer ${this.name}: expected shape=${n}, received shape=${i.shape}`);this.states_[e]=i}}this.states_=this.states_.map(t=>s.qe(t.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:i,kernelSize:s,padding:n,strides:r,dilationRate:a}=this.cell,l="channelsFirst"===e,h=t[l?3:2],u=t[l?4:3],c=Object(o.a)(h,s[0],n,r[0],a[0]),p=Object(o.a)(u,s[1],n,r[1],a[1]);return[...t.slice(0,2),...l?[i,c,p]:[c,p,i]]}}ConvRNN2D.className="ConvRNN2D";class ConvLSTM2DCell extends p.d{constructor(t){const{filters:e,kernelSize:i,strides:s,padding:n,dataFormat:a,dilationRate:l}=t;super(Object.assign(Object.assign({},t),{units:e})),this.filters=e,Object(u.b)(this.filters,"filters"),this.kernelSize=Object(o.c)(i,2,"kernelSize"),this.kernelSize.forEach(t=>Object(u.b)(t,"kernelSize")),this.strides=Object(o.c)(s||1,2,"strides"),this.strides.forEach(t=>Object(u.b)(t,"strides")),this.padding=n||"valid",Object(r.c)(this.padding),this.dataFormat=a||"channelsLast",Object(r.a)(this.dataFormat),this.dilationRate=Object(o.c)(l||1,2,"dilationRate"),this.dilationRate.forEach(t=>Object(u.b)(t,"dilationRate"))}build(t){var e;t=Object(c.a)(t);const i="channelsFirst"===this.dataFormat?1:t.length-1;if(null==t[i])throw new l.e("The channel dimension of the input should be defined. Found "+t[i]);const r=t[i],a=this.kernelSize.concat([r,4*this.filters]);this.kernel=this.addWeight("kernel",a,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const o=this.kernelSize.concat([this.filters,4*this.filters]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",o,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let t;if(this.unitForgetBias){const i=this.biasInitializer,r=this.filters;t=new((e=class CustomInit extends h.g{apply(t,e){const a=i.apply([r]),l=s.Ne([r]),h=i.apply([2*r]);return n.e([a,l,h])}}).className="CustomInit",e)}else t=this.biasInitializer;this.bias=this.addWeight("bias",[4*this.filters],null,t,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return s.Af(()=>{if(3!==t.length)throw new l.e("ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got "+t.length+".");const i=e.training||!1,n=t[0],r=t[1],a=t[2];0<this.dropout&&this.dropout<1&&null==this.dropoutMask&&(this.dropoutMask=Object(p.j)({ones:()=>s.Oe(n),rate:this.dropout,training:i,count:4,dropoutFunc:this.dropoutFunc}));const h=this.dropoutMask,o=(t,e,i)=>e&&e[i]?s.Ie(e[i],t):t;let u=o(n,h,0),c=o(n,h,1),d=o(n,h,2),f=o(n,h,3);0<this.recurrentDropout&&this.recurrentDropout<1&&null==this.recurrentDropoutMask&&(this.recurrentDropoutMask=Object(p.j)({ones:()=>s.Oe(r),rate:this.recurrentDropout,training:i,count:4,dropoutFunc:this.dropoutFunc}));const b=this.recurrentDropoutMask;let g=o(r,b,0),w=o(r,b,1),C=o(r,b,2),S=o(r,b,3);const[v,O,m,k]=s.of(this.kernel.read(),4,3),[D,y,j,z]=this.useBias?s.of(this.bias.read(),4):[null,null,null,null];u=this.inputConv(u,v,D,this.padding),c=this.inputConv(c,O,y,this.padding),d=this.inputConv(d,m,j,this.padding),f=this.inputConv(f,k,z,this.padding);const[M,F,I,R]=s.of(this.recurrentKernel.read(),4,3);g=this.recurrentConv(g,M),w=this.recurrentConv(w,F),C=this.recurrentConv(C,I),S=this.recurrentConv(S,R);const N=this.recurrentActivation.apply(s.td(u,g)),A=this.recurrentActivation.apply(s.td(c,w)),L=s.td(s.Ie(A,a),s.Ie(N,this.activation.apply(s.td(d,C)))),T=s.Ie(this.recurrentActivation.apply(s.td(f,S)),this.activation.apply(L));return[T,T,L]})}getConfig(){const t=super.getConfig(),{units:e}=t,i=d(t,["units"]),s={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},i),s)}inputConv(t,e,i,r){const a=s.Rd(t,e,this.strides,r||"valid","channelsFirst"===this.dataFormat?"NCHW":"NHWC",this.dilationRate);return i?n.b(a,i,this.dataFormat):a}recurrentConv(t,e){return s.Rd(t,e,1,"same","channelsFirst"===this.dataFormat?"NCHW":"NHWC")}}ConvLSTM2DCell.className="ConvLSTM2DCell",s.df.registerClass(ConvLSTM2DCell);class ConvLSTM2D extends ConvRNN2D{constructor(t){const e=new ConvLSTM2DCell(t);super(Object.assign(Object.assign({},t),{cell:e}))}static fromConfig(t,e){return new t(e)}}ConvLSTM2D.className="ConvLSTM2D",s.df.registerClass(ConvLSTM2D)},706:function(t,e,i){"use strict";i.d(e,"a",(function(){return DepthwiseConv2D}));var s=i(0),n=i(50),r=i(21),a=i(31),l=i(39),h=i(8),o=i(26),u=i(30),c=i(54),p=i(16),d=i(104);class DepthwiseConv2D extends d.a{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=null==t.depthMultiplier?1:t.depthMultiplier,this.depthwiseInitializer=Object(o.q)(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=Object(l.e)(t.depthwiseConstraint),this.depthwiseRegularizer=Object(u.b)(t.depthwiseRegularizer)}build(t){if((t=Object(p.a)(t)).length<4)throw new h.e(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e="channelsFirst"===this.dataFormat?1:3;if(null==t[e]||t[e]<0)throw new h.e(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const i=t[e],s=[this.kernelSize[0],this.kernelSize[1],i,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",s,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[i*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return Object(s.Af)(()=>{let e=
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function(t,e,i=[1,1],r="valid",l,o){return Object(s.Af)(()=>{null==l&&(l=Object(n.b)()),Object(a.a)(l);let u=Object(d.j)(t,l);if(4!==t.rank)throw new h.e("Input for depthwiseConv2d is required to be 4-D, but is instead "+t.rank+"-D");if(4!==e.rank)throw new h.e("depthwiseKernel is required to be 4-D, but is instead "+e.rank+"-D");return u=s.Wd(u,e,i,"same"===r?"same":"valid","NHWC",o),"channelsFirst"===l&&(u=s.Df(u,[0,3,1,2])),u})}(t=Object(p.b)(t),this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(e=r.b(e,this.bias.read(),this.dataFormat)),null!=this.activation&&(e=this.activation.apply(e)),e})}computeOutputShape(t){t=Object(p.a)(t);const e="channelsFirst"===this.dataFormat?t[2]:t[1],i="channelsFirst"===this.dataFormat?t[3]:t[2],s="channelsFirst"===this.dataFormat?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,n=Object(c.a)(e,this.kernelSize[0],this.padding,this.strides[0]),r=Object(c.a)(i,this.kernelSize[1],this.padding,this.strides[1]);return"channelsFirst"===this.dataFormat?[t[0],s,n,r]:[t[0],n,r,s]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=Object(o.r)(this.depthwiseInitializer),t.depthwiseRegularizer=Object(u.e)(this.depthwiseRegularizer),t.depthwiseConstraint=Object(l.f)(this.depthwiseRegularizer),t}}DepthwiseConv2D.className="DepthwiseConv2D",s.df.registerClass(DepthwiseConv2D)}}]);