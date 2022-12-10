(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{134:function(t,e,s){"use strict";s.d(e,"a",(function(){return Dataset})),s.d(e,"b",(function(){return o}));var i=s(0),n=s(153),a=s(83),r=s(133);
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
class Dataset{constructor(){this.size=null}batch(t,e=!0){const s=this;let n;return i.Hf.assert(t>0,()=>"batchSize needs to be positive, but it is\n      "+t),n=this.size===1/0||null==this.size?this.size:e?Math.ceil(this.size/t):Math.floor(this.size/t),o(async()=>(await s.iterator()).columnMajorBatch(t,e,l),n)}concatenate(t){const e=this;let s;return s=this.size===1/0||t.size===1/0?1/0:null!=this.size&&null!=t.size?this.size+t.size:null,o(async()=>(await e.iterator()).concatenate(await t.iterator()),s)}filter(t){const e=this;let s;return s=this.size===1/0?1/0:null,o(async()=>(await e.iterator()).filter(e=>i.Af(()=>t(e))),s)}async forEachAsync(t){return(await this.iterator()).forEachAsync(t)}map(t){const e=this;return o(async()=>(await e.iterator()).map(e=>i.Af(()=>t(e))),this.size)}mapAsync(t){const e=this;return o(async()=>(await e.iterator()).mapAsync(t),this.size)}prefetch(t){if(null==t)throw new RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");const e=this;return o(async()=>(await e.iterator()).prefetch(t),this.size)}repeat(t){const e=this;let s;return s=null!=this.size&&t>0?this.size*t:0===t?0:null!=this.size&&(void 0===t||t<0)?1/0:null,o(async()=>{const s=Object(a.e)(async()=>({value:await e.iterator(),done:!1}));return Object(a.d)(s.take(t))},s)}skip(t){const e=this;let s;return s=null!=this.size&&t>=0&&this.size>=t?this.size-t:null!=this.size&&(this.size<t||void 0===t||t<0)?0:null,o(async()=>(await e.iterator()).skip(t),s)}shuffle(t,e,s=!0){if(null==t||t<0)throw null==this.size?new RangeError("`Dataset.shuffle()` requires bufferSize to be specified."):new RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);const a=this,r=n.alea(e||i.Hf.now().toString());return o(async()=>{let e=r.int32();return s&&(e+=r.int32()),(await a.iterator()).shuffle(t,e.toString())},this.size)}take(t){const e=this;let s;return s=null!=this.size&&this.size>t?t:null!=this.size&&this.size<=t?this.size:null,o(async()=>(await e.iterator()).take(t),s)}async toArray(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArrayForTest()}}function o(t,e=null){return new class extends Dataset{constructor(){super(...arguments),this.size=e}async iterator(){return t()}}}function l(t){if(null===t)return null;const e=t[0];if(Object(r.a)(e)){return{value:function(t){if(0===t.length)throw new Error("Can't make a batch of zero elements.");return t[0]instanceof i.hd?i.rf(t):i.wf(t)}(t),recurse:!1}}return{value:null,recurse:!0}}Dataset.MAX_BUFFER_SIZE=1e4},314:function(t,e,s){"use strict";s(134),s(315),s(316),s(210),s(318),s(317);var i=s(551);s.d(e,"a",(function(){return i.a}))},315:function(t,e,s){"use strict";s.d(e,"a",(function(){return CSVDataset}));var i=s(0),n=s(134),a=s(316);
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
const r=Symbol("out"),o=Symbol("field"),l=Symbol("quote"),u=Symbol("quoteafterquote"),h=Symbol("quoteinquote");class CSVDataset extends n.a{constructor(t,e){super(),this.input=t,this.hasHeader=!0,this.fullColumnNames=null,this.columnNamesValidated=!1,this.columnConfigs=null,this.configuredColumnsOnly=!1,this.delimiter=",",this.delimWhitespace=!1,this.base=new a.a(t),e||(e={}),this.hasHeader=!1!==e.hasHeader,this.fullColumnNames=e.columnNames,this.columnConfigs=e.columnConfigs,this.configuredColumnsOnly=e.configuredColumnsOnly,e.delimWhitespace?(i.Hf.assert(null==e.delimiter,()=>"Delimiter should not be provided when delimWhitespace is true."),this.delimWhitespace=!0,this.delimiter=" "):this.delimiter=e.delimiter?e.delimiter:","}async columnNames(){return this.columnNamesValidated||await this.setColumnNames(),this.configuredColumnsOnly?Object.keys(this.columnConfigs):this.fullColumnNames}async setColumnNames(){const t=await this.maybeReadHeaderLine();if(!this.fullColumnNames&&!t)throw new Error("Column names must be provided if there is no header line.");this.fullColumnNames&&t&&i.Hf.assert(t.length===this.fullColumnNames.length,()=>"The length of provided columnNames ("+this.fullColumnNames.length.toString()+") does not match the length of the header line read from file ("+t.length.toString()+")."),this.fullColumnNames||(this.fullColumnNames=t);const e=this.fullColumnNames.reduce((t,e)=>(t[e]=t[e]+1||1,t),{}),s=Object.keys(e).filter(t=>e[t]>1);if(i.Hf.assert(0===s.length,()=>"Duplicate column names found: "+s.toString()),this.columnConfigs)for(const t of Object.keys(this.columnConfigs)){if(-1===this.fullColumnNames.indexOf(t))throw new Error('The key "'+t+'" provided in columnConfigs does not match any of the column names ('+this.fullColumnNames.toString()+").")}this.columnNamesValidated=!0}async maybeReadHeaderLine(){if(this.hasHeader){const t=await this.base.iterator(),e=await t.next();if(e.done)throw new Error("No data was found for CSV parsing.");const s=e.value;return this.parseRow(s,!1)}return null}async iterator(){this.columnNamesValidated||await this.setColumnNames();let t=await this.base.iterator();return this.hasHeader&&(t=t.skip(1)),t.map(t=>this.makeDataElement(t))}makeDataElement(t){const e=this.parseRow(t),s={},i={};for(let n=0;n<this.fullColumnNames.length;n++){const a=this.fullColumnNames[n],r=this.columnConfigs?this.columnConfigs[a]:null;if(!this.configuredColumnsOnly||r){const o=e[n];let l=null;if(""===o)if(r&&void 0!==r.default)l=r.default;else{if(r&&(r.required||r.isLabel))throw new Error(`Required column ${a} is empty in this line: ${t}`);l=void 0}else{const t=Number(o);if(isNaN(t))l=r&&"bool"===r.dtype?this.getBoolean(o):o;else if(r&&r.dtype)switch(r.dtype){case"float32":l=t;break;case"int32":l=Math.floor(t);break;case"bool":l=this.getBoolean(o);break;default:l=t}else l=t}r&&r.isLabel?i[a]=l:s[a]=l}}return 0===Object.keys(i).length?s:{xs:s,ys:i}}getBoolean(t){return"1"===t||"true"===t.toLowerCase()?1:0}parseRow(t,e=!0){const s=[];let i=0;const n=t.length;let a=r;for(let e=0;e<n;e++)switch(a){case r:switch(t.charAt(e)){case'"':i=e+1,a=l;break;case this.delimiter:if(i=e+1," "===this.delimiter&&this.delimWhitespace)break;s.push(""),a=r;break;default:a=o,i=e}break;case o:switch(t.charAt(e)){case this.delimiter:s.push(t.substring(i,e)),a=r,i=e+1}break;case l:switch(t.charAt(e)){case'"':a=u}break;case u:switch(t.charAt(e)){case this.delimiter:s.push(t.substring(i,e-1)),a=r,i=e+1;break;case'"':a=l;break;default:a=h}break;case h:switch(t.charAt(e)){case'"':a=l}}if(a===u?s.push(t.substring(i,n-1)):s.push(t.substring(i)),e&&s.length!==this.fullColumnNames.length)throw new Error(`Invalid row in csv file. Should have ${this.fullColumnNames.length} elements in a row, but got ${s}`);return s}}},316:function(t,e,s){"use strict";s.d(e,"a",(function(){return TextLineDataset}));var i=s(134);
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
 */class TextLineDataset extends i.a{constructor(t){super(),this.input=t}async iterator(){return(await this.input.iterator()).decodeUTF8().split("\n").map(t=>(t.endsWith("\r")&&(t=t.slice(0,-1)),t))}}},373:function(t,e,s){"use strict";s.d(e,"a",(function(){return DataSource}));
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
class DataSource{}},526:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));
/** @license See the LICENSE file. */
const i="4.1.0"}}]);