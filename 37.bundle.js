(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{374:function(t,e,r){"use strict";r.d(e,"a",(function(){return FileChunkIterator}));var s=r(0),a=r(762);
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
class FileChunkIterator extends a.a{constructor(t,e={}){super(),this.file=t,this.options=e,s.Hf.assert(t instanceof Uint8Array||!!Object(s.de)().get("IS_BROWSER")&&(t instanceof File||t instanceof Blob),()=>"FileChunkIterator only supports File, Blob and Uint8Array right now."),this.offset=e.offset||0,this.chunkSize=e.chunkSize||1048576}summary(){return"FileChunks "+this.file}async next(){if(this.offset>=(this.file instanceof Uint8Array?this.file.byteLength:this.file.size))return{value:null,done:!0};const t=new Promise((t,e)=>{const r=this.offset+this.chunkSize;if(this.file instanceof Uint8Array)t(new Uint8Array(this.file.slice(this.offset,r)));else{const s=new FileReader;s.onload=r=>{let a=s.result;if(a instanceof ArrayBuffer&&(a=new Uint8Array(a)),!(a instanceof Uint8Array))return e(new TypeError("FileReader returned unknown type."));t(a)},s.onabort=t=>e(new Error("Aborted")),s.onerror=t=>e(new Error(t.type));const a=this.file.slice(this.offset,r);s.readAsArrayBuffer(a)}this.offset=r});return{value:await t,done:!1}}}},759:function(t,e,r){"use strict";r.d(e,"a",(function(){return MicrophoneIterator}));var s=r(0),a=r(83);
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
 *
 * =============================================================================
 */
class MicrophoneIterator extends a.a{constructor(t){super(),this.microphoneConfig=t,this.isClosed=!1,this.fftSize=t.fftSize||1024;const e=Math.log2(this.fftSize);if(this.fftSize<0||e<4||e>14||!Number.isInteger(e))throw new Error("Invalid fftSize: it must be a power of 2 between 2 to 4 and 2 to 14, but got "+this.fftSize);if(this.numFrames=t.numFramesPerSpectrogram||43,this.sampleRateHz=t.sampleRateHz,this.columnTruncateLength=t.columnTruncateLength||this.fftSize,this.audioTrackConstraints=t.audioTrackConstraints,this.smoothingTimeConstant=t.smoothingTimeConstant||0,this.includeSpectrogram=!1!==t.includeSpectrogram,this.includeWaveform=!0===t.includeWaveform,!this.includeSpectrogram&&!this.includeWaveform)throw new Error("Both includeSpectrogram and includeWaveform are false. At least one type of data should be returned.")}summary(){return"microphone"}static async create(t={}){if(!Object(s.de)().get("IS_BROWSER"))throw new Error("microphone API is only supported in browser environment.");const e=new MicrophoneIterator(t);return await e.start(),e}async start(){try{this.stream=await navigator.mediaDevices.getUserMedia({audio:null==this.audioTrackConstraints||this.audioTrackConstraints,video:!1})}catch(t){throw new Error("Error thrown while initializing video stream: "+t.message)}if(!this.stream)throw new Error("Could not obtain audio from microphone.");const t=window.AudioContext||window.webkitAudioContext;if(this.audioContext=new t,this.sampleRateHz){if(this.audioContext.sampleRate!==this.sampleRateHz)throw new Error(`Mismatch in sampling rate: Expected: ${this.sampleRateHz}; Actual: `+this.audioContext.sampleRate)}else this.sampleRateHz=this.audioContext.sampleRate;const e=this.audioContext.createMediaStreamSource(this.stream);this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=2*this.fftSize,this.analyser.smoothingTimeConstant=this.smoothingTimeConstant,e.connect(this.analyser),this.freqData=new Float32Array(this.fftSize),this.timeData=new Float32Array(this.fftSize)}async next(){if(this.isClosed)return{value:null,done:!0};let t,e;const r=await this.getAudioData();if(this.includeSpectrogram){const e=this.flattenQueue(r.freqDataQueue);t=this.getTensorFromAudioDataArray(e,[this.numFrames,this.columnTruncateLength,1])}if(this.includeWaveform){const t=this.flattenQueue(r.timeDataQueue);e=this.getTensorFromAudioDataArray(t,[this.numFrames*this.fftSize,1])}return{value:{spectrogram:t,waveform:e},done:!1}}async capture(){return(await this.next()).value}async getAudioData(){const t=[],e=[];let r=0;return new Promise(s=>{const a=setInterval(()=>{this.includeSpectrogram&&(this.analyser.getFloatFrequencyData(this.freqData),this.freqData[0]===-1/0&&s({freqDataQueue:t,timeDataQueue:e}),t.push(this.freqData.slice(0,this.columnTruncateLength))),this.includeWaveform&&(this.analyser.getFloatTimeDomainData(this.timeData),e.push(this.timeData.slice())),++r===this.numFrames&&(clearInterval(a),s({freqDataQueue:t,timeDataQueue:e}))},this.fftSize/this.sampleRateHz*1e3)})}stop(){this.isClosed||(this.isClosed=!0,this.analyser.disconnect(),this.audioContext.close(),null!=this.stream&&this.stream.getTracks().length>0&&this.stream.getTracks()[0].stop())}toArray(){throw new Error("Can not convert infinite audio stream to array.")}getSampleRate(){return this.sampleRateHz}flattenQueue(t){const e=t[0].length,r=new Float32Array(t.length*e);return t.forEach((t,s)=>r.set(t,s*e)),r}getTensorFromAudioDataArray(t,e){const r=new Float32Array(s.Hf.sizeFromShape(e));return r.set(t,r.length-t.length),Object(s.wf)(r,e)}}},760:function(t,e,r){"use strict";r.d(e,"a",(function(){return WebcamIterator}));var s=r(0),a=r(83);
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
class WebcamIterator extends a.a{constructor(t,e){if(super(),this.webcamVideoElement=t,this.webcamConfig=e,this.isClosed=!0,this.resize=!1,this.needToResize())if(this.resize=!0,this.cropSize=[this.webcamConfig.resizeHeight,this.webcamConfig.resizeWidth],this.cropBoxInd=Object(s.xf)([0],"int32"),this.webcamConfig.centerCrop){const t=1*this.webcamConfig.resizeWidth/this.webcamVideoElement.width,e=1*this.webcamConfig.resizeHeight/this.webcamVideoElement.height,r=(1-t)/2,a=(1-e)/2,n=r+t,i=e+a;this.cropBox=Object(s.yf)([a,r,i,n],[1,4])}else this.cropBox=Object(s.yf)([0,0,1,1],[1,4])}summary(){return"webcam"}static async create(t,e={}){if(!Object(s.de)().get("IS_BROWSER"))throw new Error("tf.data.webcam is only supported in browser environment.");if(!t){if(t=document.createElement("video"),!e.resizeWidth||!e.resizeHeight)throw new Error("Please provide webcam video element, or resizeWidth and resizeHeight to create a hidden video element.");t.width=e.resizeWidth,t.height=e.resizeHeight}const r=new WebcamIterator(t,e);return await r.start(),r}async start(){this.webcamConfig.facingMode&&s.Hf.assert("user"===this.webcamConfig.facingMode||"environment"===this.webcamConfig.facingMode,()=>`Invalid webcam facing mode: ${this.webcamConfig.facingMode}. Please provide 'user' or 'environment'`);try{this.stream=await navigator.mediaDevices.getUserMedia({video:{deviceId:this.webcamConfig.deviceId,facingMode:this.webcamConfig.facingMode?this.webcamConfig.facingMode:"user",width:this.webcamVideoElement.width,height:this.webcamVideoElement.height}})}catch(t){throw t.message="Error thrown while initializing video stream: "+t.message,t}if(!this.stream)throw new Error("Could not obtain video from webcam.");try{this.webcamVideoElement.srcObject=this.stream}catch(t){console.log(t),this.webcamVideoElement.src=window.URL.createObjectURL(this.stream)}return this.webcamVideoElement.play(),this.isClosed=!1,new Promise(t=>{this.webcamVideoElement.onloadedmetadata=()=>{t()}})}async next(){if(this.isClosed)return{value:null,done:!0};let t;try{t=s.Gd.fromPixels(this.webcamVideoElement)}catch(t){throw new Error("Error thrown converting video to pixels: "+JSON.stringify(t))}if(!this.resize)return{value:t,done:!1};try{return{value:this.cropAndResizeFrame(t),done:!1}}catch(t){throw new Error("Error thrown cropping the video: "+t.message)}finally{t.dispose()}}needToResize(){return!(!this.webcamConfig.resizeWidth||!this.webcamConfig.resizeHeight||this.webcamVideoElement.width===this.webcamConfig.resizeWidth&&this.webcamVideoElement.height===this.webcamConfig.resizeHeight)}cropAndResizeFrame(t){return Object(s.Af)(()=>{const e=Object(s.ge)(Object(s.Id)(t,"float32"),0);let r;r=s.oe.cropAndResize(e,this.cropBox,this.cropBoxInd,this.cropSize,"bilinear");const a=r.shape;return Object(s.Ye)(r,a.slice(1))})}async capture(){return(await this.next()).value}stop(){this.stream.getTracks().forEach(t=>t.stop());try{this.webcamVideoElement.srcObject=null}catch(t){console.log(t),this.webcamVideoElement.src=null}this.isClosed=!0}toArray(){throw new Error("Can not convert infinite video stream to array.")}}},761:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var s=r(0),a=r(374);
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
async function n(t,e={},r){let n,o;"string"==typeof t?n=t:(n=t.url,o=i(t));const u=await(r||s.Hf.fetch)(n,o);if(u.ok){const t=new Uint8Array(await u.arrayBuffer());return new a.a(t,e)}throw new Error(u.statusText)}const i=t=>({method:t.method,headers:t.headers,body:t.body,mode:t.mode,credentials:t.credentials,cache:t.cache,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity})},762:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return ByteChunkIterator}));var s=r(0),a=r(83),n=r(763);
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
class ByteChunkIterator extends a.a{decodeUTF8(){return new Utf8Iterator(this)}}class Utf8Iterator extends n.a{constructor(t){super(),this.upstream=t,this.impl=new Utf8IteratorImpl(t)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class Utf8IteratorImpl extends a.b{constructor(t){if(super(),this.upstream=t,Object(s.de)().get("IS_BROWSER"))this.decoder=new TextDecoder("utf-8");else{const{StringDecoder:t}=r(1257);this.decoder=new t("utf8")}}summary(){return this.upstream.summary()+" -> Utf8"}async pump(){const e=await this.upstream.next();let r,a;return!e.done&&(r=e.value,a=Object(s.de)().get("IS_BROWSER")?this.decoder.decode(r,{stream:!0}):this.decoder.write(t.from(r.buffer)),this.outputQueue.push(a),!0)}}}).call(this,r(416).Buffer)},763:function(t,e,r){"use strict";r.d(e,"a",(function(){return StringIterator}));var s=r(83);
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
 */class StringIterator extends s.a{split(t){return new SplitIterator(this,t)}}class SplitIterator extends StringIterator{constructor(t,e){super(),this.upstream=t,this.impl=new SplitIteratorImpl(t,e)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class SplitIteratorImpl extends s.b{constructor(t,e){super(),this.upstream=t,this.separator=e,this.carryover=""}summary(){return`${this.upstream.summary()} -> Split('${this.separator}')`}async pump(){const t=await this.upstream.next();if(t.done)return""!==this.carryover&&(this.outputQueue.push(this.carryover),this.carryover="",!0);const e=t.value.split(this.separator);e[0]=this.carryover+e[0];for(const t of e.slice(0,-1))this.outputQueue.push(t);return this.carryover=e[e.length-1],!0}}},83:function(t,e,r){"use strict";r.d(e,"f",(function(){return c})),r.d(e,"e",(function(){return l})),r.d(e,"d",(function(){return m})),r.d(e,"g",(function(){return d})),r.d(e,"a",(function(){return LazyIterator})),r.d(e,"b",(function(){return OneToManyIterator})),r.d(e,"c",(function(){return s}));var s,a=r(0),n=r(153),i=r(757),o=r(133),u=r(758),h=r(372);
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
function c(t){return new ArrayIterator(t)}function l(t){return new FunctionCallIterator(t)}function m(t,e){return new ChainedIterator(t,e)}function d(t,e=s.FAIL){return new ZipIterator(t,e)}class LazyIterator{async toArray(){const t=[];let e=await this.next();for(;!e.done;)t.push(e.value),e=await this.next();return t}async toArrayForTest(){const t=this.prefetch(100),e=[];let r=await t.next();for(;!r.done;)e.push(r.value),r=await t.next();return e}async resolveFully(){let t=await this.next();for(;!t.done;)t=await this.next()}async resolveWhile(t){let e=await this.next(),r=t(e.value);for(;!e.done&&r;)e=await this.next(),r=t(e.value)}handleErrors(t){return new ErrorHandlingLazyIterator(this,t)}filter(t){return new FilterIterator(this,t)}map(t){return new MapIterator(this,t)}mapAsync(t){return new AsyncMapIterator(this,t)}serialMapAsync(t){return new AsyncMapIterator(this,t).serial()}flatmap(t){return new FlatmapIterator(this,t)}async forEachAsync(t){return this.map(t).resolveFully()}async serialForEach(t){return this.serialMapAsync(t).resolveWhile(t=>!0===t)}rowMajorBatch(t,e=!0){return new RowMajorBatchIterator(this,t,e)}columnMajorBatch(t,e=!0,r=o.f){return this.rowMajorBatch(t,e).map(t=>Object(o.d)(t,r))}concatenate(t,e){return new ChainedIterator(c([this,t]),e)}take(t){return t<0||null==t?this:new TakeIterator(this,t)}skip(t){return t<0||null==t?this:new SkipIterator(this,t)}prefetch(t){return new PrefetchIterator(this,t)}shuffle(t,e){return new ShuffleIterator(this,t,e)}serial(){return new SerialIterator(this)}}class ArrayIterator extends LazyIterator{constructor(t){super(),this.items=t,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};const t=this.items[this.trav];return this.trav++,{value:Object(i.a)(t),done:!1}}}class FunctionCallIterator extends LazyIterator{constructor(t){super(),this.nextFn=t}summary(){return"Function call"}async next(){try{return this.nextFn()}catch(t){throw t.message="Error thrown while iterating through a dataset: "+t.message,t}}}class SerialIterator extends LazyIterator{constructor(t){super(),this.upstream=t,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return this.upstream.summary()+" -> Serial"}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}}class SkipIterator extends LazyIterator{constructor(t,e){super(),this.upstream=t,this.maxCount=e,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return this.upstream.summary()+" -> Skip"}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){const t=await this.upstream.next();if(t.done)return t;a.Yd(t.value)}return this.upstream.next()}}class TakeIterator extends LazyIterator{constructor(t,e){super(),this.upstream=t,this.maxCount=e,this.count=0}summary(){return this.upstream.summary()+" -> Take"}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}}class RowMajorBatchIterator extends LazyIterator{constructor(t,e,r=!0){super(),this.upstream=t,this.batchSize=e,this.enableSmallLastBatch=r,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return this.upstream.summary()+" -> RowMajorBatch"}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){const t=[];for(;t.length<this.batchSize;){const e=await this.upstream.next();if(e.done)return this.enableSmallLastBatch&&t.length>0?{value:t,done:!1}:{value:null,done:!0};t.push(e.value)}return{value:t,done:!1}}}class FilterIterator extends LazyIterator{constructor(t,e){super(),this.upstream=t,this.predicate=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return this.upstream.summary()+" -> Filter"}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){const t=await this.upstream.next();if(t.done||this.predicate(t.value))return t;a.Yd(t.value)}}}class MapIterator extends LazyIterator{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return this.upstream.summary()+" -> Map"}async next(){const t=await this.upstream.next();if(t.done)return{value:null,done:!0};const e=a.zf.getTensorsInContainer(t.value),r=this.transform(t.value),s=a.zf.getTensorsInContainer(r);for(const t of e)a.zf.isTensorInList(t,s)||t.dispose();return{value:r,done:!1}}}class ErrorHandlingLazyIterator extends LazyIterator{constructor(t,e){super(),this.upstream=t,this.handler=e,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return this.upstream.summary()+" -> handleErrors"}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(t){if(!this.handler(t))return{value:null,done:!0}}}}class AsyncMapIterator extends LazyIterator{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return this.upstream.summary()+" -> AsyncMap"}async next(){const t=await this.upstream.next();if(t.done)return{value:null,done:!0};const e=a.zf.getTensorsInContainer(t.value),r=await this.transform(t.value),s=a.zf.getTensorsInContainer(r);for(const t of e)a.zf.isTensorInList(t,s)||t.dispose();return{value:r,done:!1}}}class OneToManyIterator extends LazyIterator{constructor(){super(),this.outputQueue=new u.a,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;0===this.outputQueue.length();)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}}class FlatmapIterator extends OneToManyIterator{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return this.upstream.summary()+" -> Flatmap"}async pump(){const t=await this.upstream.next();if(t.done)return!1;const e=a.zf.getTensorsInContainer(t.value),r=this.transform(t.value),s=a.zf.getTensorsInContainer(r);this.outputQueue.pushAll(r);for(const t of e)a.zf.isTensorInList(t,s)||t.dispose();return!0}}class ChainedIterator extends LazyIterator{constructor(t,e){super(),this.baseErrorHandler=e,this.lastRead=null,this.iterator=null,this.moreIterators=t}summary(){return"TODO: fill in upstream of chained summaries -> Chained"}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(t){if(await t,null==this.iterator){const t=await this.moreIterators.next();if(t.done)return{value:null,done:!0};this.iterator=t.value,null!=this.baseErrorHandler&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}const e=await this.iterator.next();return e.done?(this.iterator=null,this.readFromChain(t)):e}}!function(t){t[t.FAIL=0]="FAIL",t[t.SHORTEST=1]="SHORTEST",t[t.LONGEST=2]="LONGEST"}(s||(s={}));class ZipIterator extends LazyIterator{constructor(t,e=s.FAIL){super(),this.iterators=t,this.mismatchMode=e,this.count=0,this.currentPromise=null}summary(){return"{TODO: fill in upstream of zip summaries} -> Zip"}async nextState(t){await t;let e=0,r=0;const a=await Object(o.c)(this.iterators,(function(t){if(t instanceof LazyIterator){return{value:t.next().then(t=>(e++,t.done&&r++,t.value)),recurse:!1}}return{value:null,recurse:!0}}));if(e===r)return{value:null,done:!0};if(r>0)switch(this.mismatchMode){case s.FAIL:throw new Error(`Zipped streams should have the same length. Mismatched at element ${this.count}.`);case s.SHORTEST:return{value:null,done:!0};case s.LONGEST:}return this.count++,{value:a,done:!1}}async next(){return this.currentPromise=this.nextState(this.currentPromise),this.currentPromise}}class PrefetchIterator extends LazyIterator{constructor(t,e){super(),this.upstream=t,this.bufferSize=e,this.buffer=new h.a(e)}summary(){return this.upstream.summary()+" -> Prefetch"}refill(){for(;!this.buffer.isFull();){const t=this.upstream.next();this.buffer.push(t)}}next(){return this.refill(),this.buffer.shift()}}class ShuffleIterator extends PrefetchIterator{constructor(t,e,r){super(t,e),this.upstream=t,this.windowSize=e,this.upstreamExhausted=!1,this.random=n.alea(r||a.Hf.now().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(t){return Math.floor(this.random()*t)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){const t=this.chooseIndex(),e=await this.buffer.shuffleExcise(t);if(!e.done)return this.refill(),e;this.upstreamExhausted=!0}return{value:null,done:!0}}}}}]);