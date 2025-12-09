(function(){"use strict";function DI(n,t){for(var e=0;e<t.length;e++){const s=t[e];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const r=Object.getOwnPropertyDescriptor(s,o);r&&Object.defineProperty(n,o,r.get?r:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}/**
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
 */const WI=1e-7,MI=1e-4;class ef{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Al{refCount(t){return Oe("refCount")}incRef(t){return Oe("incRef")}timerAvailable(){return!0}time(t){return Oe("time")}read(t){return Oe("read")}readSync(t){return Oe("readSync")}readToGPU(t,e){return Oe("readToGPU")}numDataIds(){return Oe("numDataIds")}disposeData(t,e){return Oe("disposeData")}write(t,e,s){return Oe("write")}move(t,e,s,o,r){return Oe("move")}createTensorFromGPUData(t,e,s){return Oe("createTensorFromGPUData")}memory(){return Oe("memory")}floatPrecision(){return Oe("floatPrecision")}epsilon(){return this.floatPrecision()===32?WI:MI}dispose(){return Oe("dispose")}}function Oe(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
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
 */function FI(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,No(n,t,e)}function Xs(n,t,e){return Math.max(n,Math.min(t,e))}function Ol(n){return n%2===0?n:n+1}function No(n,t,e){const s=n[t];n[t]=n[e],n[e]=s}function VI(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function v(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Pl(n,t,e=""){v(Rt(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function Kl(n){v(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Z(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function Rt(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Ro(n){return n%1===0}function Zl(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function $o(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function nf(n,t=o=>0,e,s){return new Promise((o,r)=>{let i=0;const a=()=>{if(n()){o();return}i++;const c=t(i);if(e!=null&&i>=e){r();return}s!=null?s(a,c):setTimeout(a,c)};a()})}function sf(n,t){let e=1,s=-1;for(let r=0;r<n.length;++r)if(n[r]>=0)e*=n[r];else if(n[r]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${r}`);s=r}else if(n[r]<0)throw Error(`Shapes can not be < 0. Found ${n[r]} at dim ${r}`);if(s===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const o=n.slice();return o[s]=t/e,o}function It(n,t){const e=t.length;return n=n==null?t.map((s,o)=>o):[].concat(n),v(n.every(s=>s>=-e&&s<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),v(n.every(s=>Ro(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?e+s:s)}function ds(n,t){const e=[],s=[],o=t!=null&&Array.isArray(t)&&t.length===0,r=t==null||o?null:It(t,n).sort();let i=0;for(let a=0;a<n.length;++a){if(r!=null){if(r[i]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(r[i]==null||r[i]>a)&&n[a]===1&&(e.push(n[a]),s.push(a)),r[i]<=a&&i++}n[a]!==1&&(e.push(n[a]),s.push(a))}return{newShape:e,keptDims:s}}function xe(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else throw new Error(`Unknown data type ${n}`);return e}function ne(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function zI(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function XI(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function of(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function fa(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function AI(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function br(n){return typeof n=="string"||n instanceof String}function OI(n){return typeof n=="boolean"}function Bl(n){return typeof n=="number"}function xr(n){return Array.isArray(n)?xr(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Bl(n)?"float32":br(n)?"string":OI(n)?"bool":"float32"}function Hl(n){return!!(n&&n.constructor&&n.call&&n.apply)}function _l(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function ct(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let s=t-3;s>=0;--s)e[s]=e[s+1]*n[s+1];return e}function rf(n,t,e,s=!1){const o=new Array;if(t.length===1){const r=t[0]*(s?2:1);for(let i=0;i<r;i++)o[i]=e[n+i]}else{const r=t[0],i=t.slice(1),a=i.reduce((c,l)=>c*l)*(s?2:1);for(let c=0;c<r;c++)o[c]=rf(n+c*a,i,e,s)}return o}function wn(n,t,e=!1){if(n.length===0)return t[0];const s=n.reduce((o,r)=>o*r)*(e?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return rf(0,n,t,e)}function PI(n,t){if(Array.isArray(n))return n;if(t==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(t==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${t}`)}function Ul(n,t){const e=Se(n,t);for(let s=0;s<e.length;s++)e[s]=1;return e}function Se(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function af(n,t){const e=n.reduce((s,o)=>s*o,1);if(t==null||t==="float32")return wn(n,new Float32Array(e));if(t==="int32")return wn(n,new Int32Array(e));if(t==="bool")return wn(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function jn(n){n.forEach(t=>{v(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function Vn(n,t,e){if(t===0)return 0;if(t===1)return n[0];let s=n[n.length-1];for(let o=0;o<n.length-1;++o)s+=e[o]*n[o];return s}function Go(n,t,e){if(t===0)return[];if(t===1)return[n];const s=new Array(t);for(let o=0;o<s.length-1;++o)s[o]=Math.floor(n/e[o]),n-=s[o]*e[o];return s[s.length-1]=n,s}function Yl(n){return n&&n.then&&typeof n.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const cf="tfjsflags";class KI{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=ZI,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(A().getBool("IS_TEST")||A().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,s){if(this.flagRegistry[t]={evaluationFn:e,setHook:s},this.urlFlags[t]!=null){const o=this.urlFlags[t];A().getBool("IS_TEST")||A().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${o}.`),this.set(t,o)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(Yl(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);cf in t&&t[cf].split(",").forEach(s=>{const[o,r]=s.split(":");this.urlFlags[o]=HI(o,r)})}}function ZI(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...s)=>(BI(t,s[0],s[1]),s.join("="))),t}function BI(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function HI(n,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${n}.`)}function A(){return lf}let lf=null;function _I(n){lf=n}/**
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
 */let Ql;function uf(){if(Ql==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Ql=n}return Ql}function UI(){const n=uf();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Jl(n,t){const e=UI();if(e.has(n))return e.get(n);{const s=t();return e.set(n,s),e.get(n)}}const ma="Abs",yr="Acos",Ir="Acosh",Lo="Add",jl="AddN",ql="All",tu="Any",ga="ArgMax",ba="ArgMin",Cr="Asin",wr="Asinh",vr="Atan",Sr="Atanh",kr="Atan2",xa="AvgPool",eu="AvgPoolGrad",ya="AvgPool3D",nu="AvgPool3DGrad",Ia="BatchMatMul",Ca="BatchToSpaceND",su="Bincount",YI="BroadcastTo",df="BroadcastArgs",Tr="Cast",Nr="Ceil",Rr="ClipByValue",ou="Complex",wa="ComplexAbs",va="Concat",Sa="Conv2D",ru="Conv2DBackpropFilter",ka="Conv2DBackpropInput",Ta="Conv3D",iu="Conv3DBackpropFilterV2",au="Conv3DBackpropInputV2",$r="Cos",Gr="Cosh",cu="Cumprod",Na="Cumsum",lu="CropAndResize",uu="DenseBincount",du="DepthToSpace",Ra="DepthwiseConv2dNative",hu="DepthwiseConv2dNativeBackpropFilter",pu="DepthwiseConv2dNativeBackpropInput",hf="Diag",$a="Dilation2D",fu="Dilation2DBackpropInput",mu="Dilation2DBackpropFilter",Lr="RealDiv",pf="Einsum",Er="Elu",gu="EluGrad",Dr="Erf",Ga="Equal",Wr="Exp",La="ExpandDims",Mr="Expm1",bu="FFT",xu="Fill",yu="FlipLeftRight",Fr="Floor",Vr="FloorDiv",Ea="FusedBatchNorm",Da="GatherV2",ff="GatherNd",Wa="Greater",zr="GreaterEqual",Xr="Identity",Iu="IFFT",Cu="Imag",Ar="IsFinite",Or="IsInf",Pr="IsNan",Ma="LeakyRelu",Fa="Less",Va="LessEqual",mf="LinSpace",Kr="Log",Zr="Log1p",za="LogicalAnd",Xa="LogicalNot",Aa="LogicalOr",QI="LogSoftmax",Oa="LRN",wu="LRNGrad",Pa="Max",Br="Maximum",Ka="MaxPool",vu="MaxPoolGrad",Za="MaxPool3D",Su="MaxPool3DGrad",gf="MaxPoolWithArgmax",Ba="Mean",Ha="Min",Hr="Minimum",_a="MirrorPad",_r="Mod",bf="Multinomial",Ur="Multiply",Ua="Neg",Ya="NotEqual",ku="NonMaxSuppressionV3",Tu="NonMaxSuppressionV4",Nu="NonMaxSuppressionV5",Qa="OnesLike",Ja="OneHot",ja="Pack",qa="PadV2",Yr="Pow",tc="Prelu",ec="Prod",xf="RaggedGather",yf="RaggedRange",If="RaggedTensorToTensor",Ru="Range",$u="Real",Qr="Reciprocal",Jr="Relu",nc="Reshape",sc="ResizeNearestNeighbor",Gu="ResizeNearestNeighborGrad",oc="ResizeBilinear",Lu="ResizeBilinearGrad",jr="Relu6",rc="Reverse",qr="Round",ti="Rsqrt",Cf="ScatterNd",wf="SearchSorted",ic="Select",ei="Selu",ac="Slice",ni="Sin",si="Sinh",oi="Sign",ri="Sigmoid",ii="Softplus",ai="Sqrt",cc="Sum",lc="SpaceToBatchND",uc="SplitV",dc="Softmax",vf="SparseFillEmptyRows",Sf="SparseReshape",kf="SparseSegmentMean",Tf="SparseSegmentSum",Nf="SparseToDense",ci="SquaredDifference",Eu="Square",Du="StridedSlice",Rf="StringNGrams",$f="StringSplit",Gf="StringToHashBucketFast",li="Sub",ui="Tan",di="Tanh",hi="Tile",Wu="TopK",Mu="Transform",Eo="Transpose",Fu="Unique",hc="Unpack",pc="UnsortedSegmentSum",fc="ZerosLike",pi="Step",Vu="FromPixels",zu="RotateWithOffset",mc="_FusedMatMul",gc="FusedConv2D",Lf="FusedDepthwiseConv2D";/**
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
 */function Qe(...n){A().getBool("IS_TEST")||A().getBool("PROD")||console.warn(...n)}function JI(...n){A().getBool("IS_TEST")||A().getBool("PROD")||console.log(...n)}/**
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
 */const bc=Jl("kernelRegistry",()=>new Map),Xu=Jl("gradRegistry",()=>new Map);function Au(n,t){const e=Wf(n,t);return bc.get(e)}function Ef(n){return Xu.get(n)}function Df(n){const t=bc.entries(),e=[];for(;;){const{done:s,value:o}=t.next();if(s)break;const[r,i]=o,[a]=r.split("_");a===n&&e.push(i)}return e}function Je(n){const{kernelName:t,backendName:e}=n,s=Wf(t,e);bc.has(s)&&Qe(`The kernel '${t}' for backend '${e}' is already registered`),bc.set(s,n)}function jI(n){const{kernelName:t}=n;Xu.has(t)&&A().getBool("DEBUG")&&Qe(`Overriding the gradient for '${t}'`),Xu.set(t,n)}function Wf(n,t){return`${t}_${n}`}var As=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qI(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function tC(n){if(n.__esModule)return n;var t=n.default;if(typeof t=="function"){var e=function s(){if(this instanceof s){var o=[null];o.push.apply(o,arguments);var r=Function.bind.apply(t,o);return new r}return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var o=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:function(){return n[s]}})}),e}var Mf=Pt,ln=null;try{ln=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Pt(n,t,e){this.low=n|0,this.high=t|0,this.unsigned=!!e}Pt.prototype.__isLong__,Object.defineProperty(Pt.prototype,"__isLong__",{value:!0});function Pe(n){return(n&&n.__isLong__)===!0}Pt.isLong=Pe;var Ff={},Vf={};function Os(n,t){var e,s,o;return t?(n>>>=0,(o=0<=n&&n<256)&&(s=Vf[n],s)?s:(e=Kt(n,(n|0)<0?-1:0,!0),o&&(Vf[n]=e),e)):(n|=0,(o=-128<=n&&n<128)&&(s=Ff[n],s)?s:(e=Kt(n,n<0?-1:0,!1),o&&(Ff[n]=e),e))}Pt.fromInt=Os;function un(n,t){if(isNaN(n))return t?Ps:dn;if(t){if(n<0)return Ps;if(n>=Xf)return Zf}else{if(n<=-Af)return Ke;if(n+1>=Af)return Kf}return n<0?un(-n,t).neg():Kt(n%Do|0,n/Do|0,t)}Pt.fromNumber=un;function Kt(n,t,e){return new Pt(n,t,e)}Pt.fromBits=Kt;var xc=Math.pow;function Ou(n,t,e){if(n.length===0)throw Error("empty string");if(n==="NaN"||n==="Infinity"||n==="+Infinity"||n==="-Infinity")return dn;if(typeof t=="number"?(e=t,t=!1):t=!!t,e=e||10,e<2||36<e)throw RangeError("radix");var s;if((s=n.indexOf("-"))>0)throw Error("interior hyphen");if(s===0)return Ou(n.substring(1),t,e).neg();for(var o=un(xc(e,8)),r=dn,i=0;i<n.length;i+=8){var a=Math.min(8,n.length-i),c=parseInt(n.substring(i,i+a),e);if(a<8){var l=un(xc(e,a));r=r.mul(l).add(un(c))}else r=r.mul(o),r=r.add(un(c))}return r.unsigned=t,r}Pt.fromString=Ou;function vn(n,t){return typeof n=="number"?un(n,t):typeof n=="string"?Ou(n,t):Kt(n.low,n.high,typeof t=="boolean"?t:n.unsigned)}Pt.fromValue=vn;var zf=65536,eC=1<<24,Do=zf*zf,Xf=Do*Do,Af=Xf/2,Of=Os(eC),dn=Os(0);Pt.ZERO=dn;var Ps=Os(0,!0);Pt.UZERO=Ps;var Wo=Os(1);Pt.ONE=Wo;var Pf=Os(1,!0);Pt.UONE=Pf;var Pu=Os(-1);Pt.NEG_ONE=Pu;var Kf=Kt(-1,2147483647,!1);Pt.MAX_VALUE=Kf;var Zf=Kt(-1,-1,!0);Pt.MAX_UNSIGNED_VALUE=Zf;var Ke=Kt(0,-2147483648,!1);Pt.MIN_VALUE=Ke;var tt=Pt.prototype;tt.toInt=function(){return this.unsigned?this.low>>>0:this.low},tt.toNumber=function(){return this.unsigned?(this.high>>>0)*Do+(this.low>>>0):this.high*Do+(this.low>>>0)},tt.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Ke)){var e=un(t),s=this.div(e),o=s.mul(e).sub(this);return s.toString(t)+o.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var r=un(xc(t,6),this.unsigned),i=this,a="";;){var c=i.div(r),l=i.sub(c.mul(r)).toInt()>>>0,u=l.toString(t);if(i=c,i.isZero())return u+a;for(;u.length<6;)u="0"+u;a=""+u+a}},tt.getHighBits=function(){return this.high},tt.getHighBitsUnsigned=function(){return this.high>>>0},tt.getLowBits=function(){return this.low},tt.getLowBitsUnsigned=function(){return this.low>>>0},tt.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Ke)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,e=31;e>0&&!(t&1<<e);e--);return this.high!=0?e+33:e+1},tt.isZero=function(){return this.high===0&&this.low===0},tt.eqz=tt.isZero,tt.isNegative=function(){return!this.unsigned&&this.high<0},tt.isPositive=function(){return this.unsigned||this.high>=0},tt.isOdd=function(){return(this.low&1)===1},tt.isEven=function(){return(this.low&1)===0},tt.equals=function(t){return Pe(t)||(t=vn(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low},tt.eq=tt.equals,tt.notEquals=function(t){return!this.eq(t)},tt.neq=tt.notEquals,tt.ne=tt.notEquals,tt.lessThan=function(t){return this.comp(t)<0},tt.lt=tt.lessThan,tt.lessThanOrEqual=function(t){return this.comp(t)<=0},tt.lte=tt.lessThanOrEqual,tt.le=tt.lessThanOrEqual,tt.greaterThan=function(t){return this.comp(t)>0},tt.gt=tt.greaterThan,tt.greaterThanOrEqual=function(t){return this.comp(t)>=0},tt.gte=tt.greaterThanOrEqual,tt.ge=tt.greaterThanOrEqual,tt.compare=function(t){if(Pe(t)||(t=vn(t)),this.eq(t))return 0;var e=this.isNegative(),s=t.isNegative();return e&&!s?-1:!e&&s?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1},tt.comp=tt.compare,tt.negate=function(){return!this.unsigned&&this.eq(Ke)?Ke:this.not().add(Wo)},tt.neg=tt.negate,tt.add=function(t){Pe(t)||(t=vn(t));var e=this.high>>>16,s=this.high&65535,o=this.low>>>16,r=this.low&65535,i=t.high>>>16,a=t.high&65535,c=t.low>>>16,l=t.low&65535,u=0,d=0,h=0,p=0;return p+=r+l,h+=p>>>16,p&=65535,h+=o+c,d+=h>>>16,h&=65535,d+=s+a,u+=d>>>16,d&=65535,u+=e+i,u&=65535,Kt(h<<16|p,u<<16|d,this.unsigned)},tt.subtract=function(t){return Pe(t)||(t=vn(t)),this.add(t.neg())},tt.sub=tt.subtract,tt.multiply=function(t){if(this.isZero())return dn;if(Pe(t)||(t=vn(t)),ln){var e=ln.mul(this.low,this.high,t.low,t.high);return Kt(e,ln.get_high(),this.unsigned)}if(t.isZero())return dn;if(this.eq(Ke))return t.isOdd()?Ke:dn;if(t.eq(Ke))return this.isOdd()?Ke:dn;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(Of)&&t.lt(Of))return un(this.toNumber()*t.toNumber(),this.unsigned);var s=this.high>>>16,o=this.high&65535,r=this.low>>>16,i=this.low&65535,a=t.high>>>16,c=t.high&65535,l=t.low>>>16,u=t.low&65535,d=0,h=0,p=0,f=0;return f+=i*u,p+=f>>>16,f&=65535,p+=r*u,h+=p>>>16,p&=65535,p+=i*l,h+=p>>>16,p&=65535,h+=o*u,d+=h>>>16,h&=65535,h+=r*l,d+=h>>>16,h&=65535,h+=i*c,d+=h>>>16,h&=65535,d+=s*u+o*l+r*c+i*a,d&=65535,Kt(p<<16|f,d<<16|h,this.unsigned)},tt.mul=tt.multiply,tt.divide=function(t){if(Pe(t)||(t=vn(t)),t.isZero())throw Error("division by zero");if(ln){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var e=(this.unsigned?ln.div_u:ln.div_s)(this.low,this.high,t.low,t.high);return Kt(e,ln.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?Ps:dn;var s,o,r;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return Ps;if(t.gt(this.shru(1)))return Pf;r=Ps}else{if(this.eq(Ke)){if(t.eq(Wo)||t.eq(Pu))return Ke;if(t.eq(Ke))return Wo;var i=this.shr(1);return s=i.div(t).shl(1),s.eq(dn)?t.isNegative()?Wo:Pu:(o=this.sub(t.mul(s)),r=s.add(o.div(t)),r)}else if(t.eq(Ke))return this.unsigned?Ps:dn;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();r=dn}for(o=this;o.gte(t);){s=Math.max(1,Math.floor(o.toNumber()/t.toNumber()));for(var a=Math.ceil(Math.log(s)/Math.LN2),c=a<=48?1:xc(2,a-48),l=un(s),u=l.mul(t);u.isNegative()||u.gt(o);)s-=c,l=un(s,this.unsigned),u=l.mul(t);l.isZero()&&(l=Wo),r=r.add(l),o=o.sub(u)}return r},tt.div=tt.divide,tt.modulo=function(t){if(Pe(t)||(t=vn(t)),ln){var e=(this.unsigned?ln.rem_u:ln.rem_s)(this.low,this.high,t.low,t.high);return Kt(e,ln.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))},tt.mod=tt.modulo,tt.rem=tt.modulo,tt.not=function(){return Kt(~this.low,~this.high,this.unsigned)},tt.and=function(t){return Pe(t)||(t=vn(t)),Kt(this.low&t.low,this.high&t.high,this.unsigned)},tt.or=function(t){return Pe(t)||(t=vn(t)),Kt(this.low|t.low,this.high|t.high,this.unsigned)},tt.xor=function(t){return Pe(t)||(t=vn(t)),Kt(this.low^t.low,this.high^t.high,this.unsigned)},tt.shiftLeft=function(t){return Pe(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Kt(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):Kt(0,this.low<<t-32,this.unsigned)},tt.shl=tt.shiftLeft,tt.shiftRight=function(t){return Pe(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Kt(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):Kt(this.high>>t-32,this.high>=0?0:-1,this.unsigned)},tt.shr=tt.shiftRight,tt.shiftRightUnsigned=function(t){if(Pe(t)&&(t=t.toInt()),t&=63,t===0)return this;var e=this.high;if(t<32){var s=this.low;return Kt(s>>>t|e<<32-t,e>>>t,this.unsigned)}else return t===32?Kt(e,0,this.unsigned):Kt(e>>>t-32,0,this.unsigned)},tt.shru=tt.shiftRightUnsigned,tt.shr_u=tt.shiftRightUnsigned,tt.toSigned=function(){return this.unsigned?Kt(this.low,this.high,!1):this},tt.toUnsigned=function(){return this.unsigned?this:Kt(this.low,this.high,!0)},tt.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()},tt.toBytesLE=function(){var t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]},tt.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]},Pt.fromBytes=function(t,e,s){return s?Pt.fromBytesLE(t,e):Pt.fromBytesBE(t,e)},Pt.fromBytesLE=function(t,e){return new Pt(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)},Pt.fromBytesBE=function(t,e){return new Pt(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)};const Bf=qI(Mf),nC=DI({__proto__:null,default:Bf},[Mf]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */const Ks=Bf||nC;function yc(n){return Ks.fromString(n,!0,16)}const Hf=yc("c3a5c85c97cb3127"),Zs=yc("b492b66fbe98f273"),Ne=yc("9ae16a3b2f90404f");function Ku(n){return n.xor(n.shru(47))}function _f(n,t,e){const s=n.slice(t,t+e);return Ks.fromBytes(Array.from(s),!0,!0)}function Mt(n,t){return _f(n,t,8)}function Uf(n,t){return _f(n,t,4)}function pe(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function hs(n,t,e=yc("9ddfea08eb382d69")){let s=n.xor(t).mul(e);s=s.xor(s.shru(47));let o=t.xor(s).mul(e);return o=o.xor(o.shru(47)),o=o.mul(e),o}function sC(n,t,e,s,o,r){o=o.add(n),r=pe(r.add(o).add(s),21);const i=o;return o=o.add(t),o=o.add(e),r=r.add(pe(o,44)),[o.add(s),r.add(i)]}function Ic(n,t,e,s){return sC(Mt(n,t),Mt(n,t+8),Mt(n,t+16),Mt(n,t+24),e,s)}function oC(n,t=n.length){if(t>=8){const e=Ne.add(t*2),s=Mt(n,0).add(Ne),o=Mt(n,t-8),r=pe(o,37).mul(e).add(s),i=pe(s,25).add(o).mul(e);return hs(r,i,e)}if(t>=4){const e=Ne.add(t*2),s=Uf(n,0);return hs(s.shl(3).add(t),Uf(n,t-4),e)}if(t>0){const e=n[0],s=n[t>>1],o=n[t-1],r=e+(s<<8),i=t+(o<<2);return Ku(Ne.mul(r).xor(Hf.mul(i))).mul(Ne)}return Ne}function rC(n,t=n.length){const e=Ne.add(t*2),s=Mt(n,0).mul(Zs),o=Mt(n,8),r=Mt(n,t-8).mul(e),i=Mt(n,t-16).mul(Ne);return hs(pe(s.add(o),43).add(pe(r,30)).add(i),s.add(pe(o.add(Ne),18)).add(r),e)}function iC(n,t=n.length){const e=Ne.add(t*2),s=Mt(n,0).mul(Ne),o=Mt(n,8),r=Mt(n,t-8).mul(e),i=Mt(n,t-16).mul(Ne),a=pe(s.add(o),43).add(pe(r,30)).add(i),c=hs(a,s.add(pe(o.add(Ne),18)).add(r),e),l=Mt(n,16).mul(e),u=Mt(n,24),d=a.add(Mt(n,t-32)).mul(e),h=c.add(Mt(n,t-24)).mul(e);return hs(pe(l.add(u),43).add(pe(d,30)).add(h),l.add(pe(u.add(s),18)).add(d),e)}function aC(n,t=n.length){const e=Ks.fromNumber(81,!0);if(t<=32)return t<=16?oC(n,t):rC(n,t);if(t<=64)return iC(n,t);let s=e,o=e.mul(Zs).add(113),r=Ku(o.mul(Ne).add(113)).mul(Ne),i=[Ks.UZERO,Ks.UZERO],a=[Ks.UZERO,Ks.UZERO];s=s.mul(Ne).add(Mt(n,0));let c=0;const l=(t-1>>6)*64,u=l+(t-1&63)-63;do s=pe(s.add(o).add(i[0]).add(Mt(n,c+8)),37).mul(Zs),o=pe(o.add(i[1]).add(Mt(n,c+48)),42).mul(Zs),s=s.xor(a[1]),o=o.add(i[0]).add(Mt(n,c+40)),r=pe(r.add(a[0]),33).mul(Zs),i=Ic(n,c,i[1].mul(Zs),s.add(a[0])),a=Ic(n,c+32,r.add(a[1]),o.add(Mt(n,c+16))),[r,s]=[s,r],c+=64;while(c!==l);const d=Zs.add(r.and(255).shl(1));return c=u,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=pe(s.add(o).add(i[0]).add(Mt(n,c+8)),37).mul(d),o=pe(o.add(i[1]).add(Mt(n,c+48)),42).mul(d),s=s.xor(a[1].mul(9)),o=o.add(i[0].mul(9).add(Mt(n,c+40))),r=pe(r.add(a[0]),33).mul(d),i=Ic(n,c,i[1].mul(d),s.add(a[0])),a=Ic(n,c+32,r.add(a[1]),o.add(Mt(n,c+16))),[r,s]=[s,r],hs(hs(i[0],a[0],d).add(Ku(o).mul(Hf)).add(r),hs(i[1],a[1],d).add(s),d)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function ps(n,t){return t==="string"?fs(n):Bs([n],t)}function cC(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function Bs(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=Hs(n)),A().getBool("DEBUG")&&zI(n,t),cC(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let s=0;s<e.length;++s)Math.round(n[s])!==0&&(e[s]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Me(){return A().platform.now()}function fs(n,t="utf-8"){return t=t||"utf-8",A().platform.encode(n,t)}function ms(n,t="utf-8"){return t=t||"utf-8",A().platform.decode(n,t)}function Sn(n){return A().platform.isTypedArray(n)}function Hs(n,t=[],e=!1){if(t==null&&(t=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||Yl(n)||n==null||Sn(n)&&e)t.push(n);else if(Array.isArray(n)||Sn(n))for(let s=0;s<n.length;++s)Hs(n[s],t,e);else{let s=-1;for(const o of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(o)&&(s=Math.max(s,Number(o)));for(let o=0;o<=s;o++)Hs(n[o],t,e)}return t}/**
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
 */class lC{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new dC)}profileKernel(t,e,s){let o;const r=()=>{o=s()};let i;const a=Me();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(r);else{r();for(const l of o)l.dataSync();i=Promise.resolve({kernelMs:Me()-a})}if(A().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<o.length;l++){const u=o[l];u.data().then(d=>{uC(d,u.dtype,t)})}return{kernelName:t,outputs:o,inputs:e,timeMs:i.then(l=>l.kernelMs),extraInfo:i.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:s,timeMs:o,inputs:r,extraInfo:i}=t;s.forEach(a=>{Promise.all([a.data(),o,i]).then(c=>{this.logger.logKernelProfile(e,a,c[0],c[1],r,c[2])})})}}function uC(n,t,e){if(t!=="float32")return!1;for(let s=0;s<n.length;s++){const o=n[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${e}'`),!0}return!1}class dC{logKernelProfile(t,e,s,o,r,i){const a=typeof o=="number"?$o(`${o}ms`,9):o.error,c=$o(t,25),l=e.rank,u=e.size,d=$o(e.shape.toString(),14);let h="";for(const p in r){const f=r[p];if(f!=null){const m=f.shape||e.shape,g=m.length;h+=`${p}: ${g}D ${g>0?m:""} `}}console.log(`%c${c}	%c${a}	%c${l}D ${d}	%c${u}	%c${h}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function hC(n,t,e){const s={},o={};for(let c=0;c<t.length;c++)s[t[c].id]=!0;for(let c=0;c<n.length;c++){const l=n[c],u=l.inputs;for(const d in u){const h=u[d];let p=!1;for(let f=0;f<t.length;f++)if(s[h.id]){l.outputs.forEach(m=>s[m.id]=!0),p=!0,o[l.id]=!0;break}if(p)break}}const r={};r[e.id]=!0;const i={};for(let c=n.length-1;c>=0;c--){const l=n[c],u=l.inputs;for(let d=0;d<l.outputs.length;d++)if(r[l.outputs[d].id]){for(const h in u)r[u[h].id]=!0,i[l.id]=!0;break}}const a=[];for(let c=0;c<n.length;c++){const l=n[c];if(o[l.id]&&i[l.id]){const u={};for(const h in l.inputs){const p=l.inputs[h];s[p.id]&&(u[h]=p)}const d=Object.assign({},l);d.inputs=u,d.outputs=l.outputs,a.push(d)}}return a}function pC(n,t,e,s){for(let o=t.length-1;o>=0;o--){const r=t[o],i=[];if(r.outputs.forEach(c=>{const l=n[c.id];l!=null?i.push(l):i.push(null)}),r.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);const a=r.gradient(i);for(const c in r.inputs){if(!(c in a))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(a)}.`);const l=e(()=>a[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);const u=r.inputs[c];if(!Rt(l.shape,u.shape))throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=l;else{const d=n[u.id];n[u.id]=s(d,l),d.dispose()}}}}/**
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
 */const Yf=20,fi=3,Zu=7;function fC(n,t,e,s){const o=ct(t),r=mC(n,t,e,o),i=t.length,a=Cc(n,t,e,o,r),c=["Tensor"];return s&&(c.push(`  dtype: ${e}`),c.push(`  rank: ${i}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(a.map(l=>"    "+l).join(`
`)),c.join(`
`)}function mC(n,t,e,s){const o=Z(t),r=s[s.length-1],i=new Array(r).fill(0),a=t.length,c=e==="complex64"?gi(n):n;if(a>1)for(let l=0;l<o/r;l++){const u=l*r;for(let d=0;d<r;d++)i[d]=Math.max(i[d],mi(c[u+d],0,e).length)}return i}function mi(n,t,e){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(Zu))} + ${parseFloat(n[1].toFixed(Zu))}j`:br(n)?s=`'${n}'`:e==="bool"?s=Qf(n):s=parseFloat(n.toFixed(Zu)).toString(),$o(s,t)}function Qf(n){return n===0?"false":"true"}function Cc(n,t,e,s,o,r=!0){const i=e==="complex64"?2:1,a=t[0],c=t.length;if(c===0){if(e==="complex64"){const m=gi(n);return[mi(m[0],0,e)]}return e==="bool"?[Qf(n[0])]:[n[0].toString()]}if(c===1){if(a>Yf){const g=fi*i;let b=Array.from(n.slice(0,g)),x=Array.from(n.slice((a-fi)*i,a*i));return e==="complex64"&&(b=gi(b),x=gi(x)),["["+b.map((I,y)=>mi(I,o[y],e)).join(", ")+", ..., "+x.map((I,y)=>mi(I,o[a-fi+y],e)).join(", ")+"]"]}return["["+(e==="complex64"?gi(n):Array.from(n)).map((g,b)=>mi(g,o[b],e)).join(", ")+"]"]}const l=t.slice(1),u=s.slice(1),d=s[0]*i,h=[];if(a>Yf){for(let m=0;m<fi;m++){const g=m*d,b=g+d;h.push(...Cc(n.slice(g,b),l,e,u,o,!1))}h.push("...");for(let m=a-fi;m<a;m++){const g=m*d,b=g+d;h.push(...Cc(n.slice(g,b),l,e,u,o,m===a-1))}}else for(let m=0;m<a;m++){const g=m*d,b=g+d;h.push(...Cc(n.slice(g,b),l,e,u,o,m===a-1))}const p=c===2?",":"";h[0]="["+(a>0?h[0]+p:"");for(let m=1;m<h.length-1;m++)h[m]=" "+h[m]+p;let f=`,
`;for(let m=2;m<c;m++)f+=`
`;return h[h.length-1]=" "+h[h.length-1]+"]"+(r?"":f),h}function gi(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class ke{constructor(t,e,s){if(this.dtype=e,this.shape=t.slice(),this.size=Z(t),s!=null){const o=s.length;v(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||ne(e,this.size),this.strides=ct(t)}set(t,...e){e.length===0&&(e=[0]),v(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const s=this.locToIndex(e);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const o of t){if(o<0||o>=this.shape[e]){const r=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(r)}e++}let s=t[t.length-1];for(let o=0;o<t.length-1;++o)s+=this.strides[o]*t[o];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let s=0;s<t.length-1;++s)e+=this.strides[s]*t[s];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let s=0;s<e.length-1;++s)e[s]=Math.floor(t/this.strides[s]),t-=e[s]*this.strides[s];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return kn().makeTensor(this.values,this.shape,this.dtype)}}let kn=null,Mo=null;function gC(n){kn=n}function bC(n){Mo=n}class se{constructor(t,e,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Z(t),this.strides=ct(t),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Mo.buffer(this.shape,this.dtype,t)}bufferSync(){return Mo.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return wn(this.shape,t,this.dtype==="complex64")}arraySync(){return wn(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=kn().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(s=>ms(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),kn().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=kn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>ms(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await kn().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(kn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Mo.print(this,t)}clone(){return this.throwIfDisposed(),Mo.clone(this)}toString(t=!1){const e=this.dataSync();return fC(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Mo.cast(this,t)}variable(t=!0,e,s){return this.throwIfDisposed(),kn().makeVariable(this,t,e,s)}}Object.defineProperty(se,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function P(){return Jl("Tensor",()=>se)}P();class wc extends se{constructor(t,e,s,o){super(t.shape,t.dtype,t.dataId,o),this.trainable=e,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Rt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);kn().disposeTensor(this),this.dataId=t.dataId,kn().incRef(this,null)}dispose(){kn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(wc,Symbol.hasInstance,{value:n=>n instanceof se&&n.assign!=null&&n.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */var Jf;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Jf||(Jf={}));var Bu;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Bu||(Bu={}));var Hu;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(Hu||(Hu={}));var _u;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(_u||(_u={}));var Uu;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Uu||(Uu={}));const xC={float32:_u,int32:Bu,bool:Hu,complex64:Uu};function Ze(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return xC[n][t]}function Yu(n){return Ze(n,"int32")}/**
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
 */function qt(n,t){if(n.dtype===t.dtype)return[n,t];const e=Ze(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function jf(n){const t=[];return qf(n,t,new Set),t}function qf(n,t,e){if(n==null)return;if(n instanceof se){t.push(n);return}if(!yC(n))return;const s=n;for(const o in s){const r=s[o];e.has(r)||(e.add(r),qf(r,t,e))}}function yC(n){return Array.isArray(n)||typeof n=="object"}/**
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
 */function Qu(n){return n.kernelName!=null}class tm{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Fo{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new tm}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,s=1){return t in this.registryFactory?(Qe(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:s}=this.initializeBackend(t);if(!(s?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new lC(this.backendInstance),!0}setupRegisteredKernels(){Df(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Df(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=e.factory();if(s&&!(s instanceof Al)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,r=s.then(i=>o<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,Qe(`Initialization of backend ${t} failed`),Qe(i.stack||i.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return Qe(`Initialization of backend ${t} failed`),Qe(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e],{success:o,asyncInit:r}=this.initializeBackend(s);if(r||o)return{name:s,asyncInit:r}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const s=this.state.tensorInfo.get(e),o=s.backend,r=this.readSync(e),i=o.refCount(e);o.disposeData(e,!0),s.backend=t,t.move(e,r,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let s=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=e(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(t,e,s){t();try{const o=s();return e(),o}catch(o){throw e(),o}}nextTensorId(){return Fo.nextTensorId++}nextVariableId(){return Fo.nextVariableId++}clone(t){const e=L.runKernel(Xr,{x:t}),s={x:t},o=i=>({x:()=>{const a="float32",c={x:i},l={dtype:a};return L.runKernel(Tr,c,l)}}),r=[];return this.addTapeNode(this.state.activeScope.name,s,[e],o,r,{}),e}runKernel(t,e,s){if(this.backendName==null&&this.backend,!(Au(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,s){const o=this.backend.numDataIds();let r=0;s.forEach(c=>{r+=c.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=o-e-r-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,s=[];const o=this.isTapeOn(),r=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let c;const l=Qu(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Qu(t)){const{kernelName:f,inputs:m,attrs:g}=t;this.backendName==null&&this.backend;const b=Au(f,this.backendName);v(b!=null,()=>`Cannot find registered kernel '${f}' for backend '${this.backendName}'`),a=()=>{const x=this.backend.numDataIds();c=b.kernelFunc({inputs:m,attrs:g,backend:this.backend});const I=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(f,x,I);const y=I.map(C=>C.rank!=null?C:this.makeTensorFromTensorInfo(C));if(o){const C=this.getTensorsForGradient(f,m,y);s=this.saveTensorsForBackwardMode(C)}return y}}else{const{forwardFunc:f}=t,m=g=>{o&&(s=g.map(b=>this.keep(this.clone(b))))};a=()=>{const g=this.backend.numDataIds();c=this.tidy(()=>f(this.backend,m));const b=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,g,b),b}}const{inputs:u,attrs:d}=t,h=Qu(t)?null:t.backwardsFunc;let p;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(p=this.profiler.profileKernel(l,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),e=p.outputs)}),o&&this.addTapeNode(l,u,e,h,s,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-r,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(f=>u[f]!=null?u[f].shape:null),outputShapes:e.map(f=>f.shape),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(c)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,e,s){const o=Ef(t);if(o!=null){const r=o.inputsToSave||[],i=o.outputsToSave||[];let a;o.saveAllInputs?(v(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(l=>e[l])):a=r.map(l=>e[l]);const c=s.filter((l,u)=>i[u]);return a.concat(c)}return[]}makeTensor(t,e,s,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let r=t;s==="string"&&br(t[0])&&(r=t.map(c=>fs(c)));const i=o.write(r,e,s),a=new se(e,s,i,this.nextTensorId());if(this.trackTensor(a,o),s==="string"){const c=this.state.tensorInfo.get(i),l=AI(r);this.state.numBytes+=l-c.bytes,c.bytes=l}return a}makeTensorFromDataId(t,e,s,o){s=s||"float32";const r={dataId:t,shape:e,dtype:s};return this.makeTensorFromTensorInfo(r,o)}makeTensorFromTensorInfo(t,e){const{dataId:s,shape:o,dtype:r}=t,i=new se(o,r,s,this.nextTensorId());return this.trackTensor(i,e),i}makeVariable(t,e=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.cast(o));const r=new wc(t,e,s,this.nextTensorId());if(this.state.registeredVariables[r.name]!=null)throw new Error(`Variable with name ${r.name} was already registered`);return this.state.registeredVariables[r.name]=r,this.incRef(r,this.backend),r}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*fa(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof wc||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*fa(t.dtype);this.state.numBytes-=s}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=await o.kernelTimeMs,o.extraInfo=await o.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,s,o,r,i){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:s,saved:r},c=Ef(t);c!=null&&(o=c.gradFunc),o!=null&&(a.gradient=l=>(l=l.map((u,d)=>{if(u==null){const h=s[d],p=Se(h.size,h.dtype);return this.makeTensor(p,h.shape,h.dtype)}return u}),o(l.length>1?l:l[0],r,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=jf(t),s=new Set(e.map(r=>r.id));for(let r=0;r<this.state.activeScope.track.length;r++){const i=this.state.activeScope.track[r];!i.kept&&!s.has(i.id)&&i.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(r=>{!r.kept&&r.scopeId===o.id&&this.track(r)})}gradients(t,e,s,o=!1){if(v(e.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const r=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));v(r instanceof se,()=>"The result y returned by f() must be a tensor.");const i=hC(this.state.activeTape,e,r);if(!o&&i.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[r.id]=s??IC(r.shape),pC(a,i,l=>this.tidy(l),CC);const c=e.map(l=>a[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const u of l.saved)u.dispose()}),this.state.activeTape=null),{value:r,grads:c}})}customGrad(t){return v(Hl(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{v(e.every(a=>a instanceof se),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};e.forEach((a,c)=>{o[c]=a});const r=(a,c)=>(s=t(...e,c),v(s.value instanceof se,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),v(Hl(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,c)=>{const l=s.gradFunc(a,c),u=Array.isArray(l)?l:[l];v(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),v(u.every(h=>h instanceof se),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const d={};return u.forEach((h,p)=>{d[p]=()=>h}),d};return this.runKernelFunc({forwardFunc:r,backwardsFunc:i,inputs:o})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=Me(),s=await this.backend.time(t);return s.wallMs=Me()-e,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new tm;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Fo.nextTensorId=0,Fo.nextVariableId=0;function IC(n){const t=Ul(Z(n),"float32");return L.makeTensor(t,n,"float32")}function em(){const n=uf();if(n._tfengine==null){const t=new KI(n);n._tfengine=new Fo(t)}return _I(n._tfengine.ENV),gC(()=>n._tfengine),n._tfengine}const L=em();function CC(n,t){const e={a:n,b:t};return L.runKernel(Lo,e)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function wC(){return typeof navigator<"u"&&navigator!=null}function nm(n){if(n||wC()){if(n||(n=navigator),n.product==="ReactNative")return!0;const t=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!t){const e=n;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function sm(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
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
 */const je=A();je.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),je.registerFlag("IS_BROWSER",()=>sm()),je.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"),je.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),je.registerFlag("PROD",()=>!1),je.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>je.getBool("DEBUG")),je.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),je.registerFlag("IS_TEST",()=>!1),je.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0),je.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),je.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),je.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
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
 */function bi(n,t){let e=n;if(Sn(n))return t==="string"?[]:[n.length];if(typeof n=="object"){if("texture"in n){const r=n.channels||"RGBA";return[n.height,n.width*r.length]}else if("buffer"in n&&!(n.buffer instanceof ArrayBuffer))return[n.buffer.size/(t==null?4:fa(t))]}if(!Array.isArray(n))return[];const o=[];for(;Array.isArray(e)||Sn(e)&&t!=="string";)o.push(e.length),e=e[0];return Array.isArray(n)&&A().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&om(n,o,[]),o}function om(n,t,e){if(e=e||[],!Array.isArray(n)&&!Sn(n)){v(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}v(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),v(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const s=t.slice(1);for(let o=0;o<n.length;++o)om(n[o],s,e.concat(o))}function rm(n,t,e,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${s}' must be ${n} tensor, but got ${t} tensor`)}}function N(n,t,e,s="numeric"){if(n instanceof se)return rm(s,n.dtype,t,e),n;let o=xr(n);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),rm(s,o,t,e),n==null||!Sn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const c=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${c}'`)}const r=bi(n,o);!Sn(n)&&!Array.isArray(n)&&(n=[n]);const a=o!=="string"?Bs(n,o):Hs(n,[],!0);return L.makeTensor(a,r,o)}function im(n,t,e,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((r,i)=>N(r,`${t}[${i}]`,e,s))}/**
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
 */const vC="__op";function W(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+vC;const o=(...r)=>{L.startScope(e);try{const i=s(...r);return Yl(i)&&console.error("Cannot return a Promise inside of tidy."),L.endScope(i),i}catch(i){throw L.endScope(null),i}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}/**
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
 */function SC(n,t){const e=N(n,"real","complex"),s=N(t,"imag","complex");Pl(e.shape,s.shape,`real and imag shapes, ${e.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:e,imag:s};return L.runKernel(ou,o)}const Vo=W({complex_:SC});/**
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
 */function xi(n,t,e,s){if(s==null)s=xr(n);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(typeof n=="object"&&("texture"in n||"buffer"in n&&!(n.buffer instanceof ArrayBuffer))){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return L.backend.createTensorFromGPUData(n,t||e,s)}if(!Sn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){jn(t);const o=Z(t),r=Z(e);v(o===r,()=>`Based on the provided shape, [${t}], the tensor should have ${o} values but has ${r}`);for(let i=0;i<e.length;++i){const a=e[i],c=i===e.length-1?a!==Z(t.slice(i)):!0;v(e[i]===t[i]||!c,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!Sn(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=s!=="string"?Bs(n,s):Hs(n,[],!0),L.makeTensor(n,t,s)}/**
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
 */function qe(n,t,e){const s=bi(n,e);return xi(n,t,s,e)}/**
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
 */const am=4;async function cm(n,t){const e=[],s=[],o=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<o.length;++i){const a=o[i],c=Array.isArray(n)?n[i].tensor:n[a];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${c.dtype}`);const l={name:a,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){const u=new Promise(async d=>{const h=await c.bytes(),p=h.reduce((g,b)=>g+b.length,0)+am*h.length,f=new Uint8Array(p);let m=0;for(let g=0;g<h.length;g++){const b=h[g],x=new Uint8Array(new Uint32Array([b.length]).buffer);f.set(x,m),m+=am,f.set(b,m),m+=b.length}d(f)});s.push(u)}else s.push(c.data());t!=null&&(l.group=t),e.push(l)}const r=await Promise.all(s);return{data:kC(r),specs:e}}function kC(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(r=>{if(t+=r.byteLength,e.push(r.byteLength===r.buffer.byteLength?r:new r.constructor(r)),!(r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${r.constructor.name}`)});const s=new Uint8Array(t);let o=0;return e.forEach(r=>{s.set(new Uint8Array(r.buffer),o),o+=r.byteLength}),s.buffer}const Ju=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function lm(n){return Ju?Buffer.byteLength(n):new Blob([n]).size}function TC(n){if(Ju)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let s=0,o=t.length;s<o;s++)e+=String.fromCharCode(t[s]);return btoa(e)}function NC(n){if(Ju){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let s=0;s<t.length;++s)e.set([t.charCodeAt(s)],s);return e.buffer}function RC(n){if(n.length===1)return n[0];let t=0;n.forEach(o=>{t+=o.byteLength});const e=new Uint8Array(t);let s=0;return n.forEach(o=>{e.set(new Uint8Array(o),s),s+=o.byteLength}),e.buffer}function um(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:lm(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:lm(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}/**
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
 */class Re{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Re.instance==null&&(Re.instance=new Re),Re.instance}static registerSaveRouter(t){Re.getInstance().saveRouters.push(t)}static registerLoadRouter(t){Re.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return Re.getHandlers(t,"save")}static getLoadHandlers(t,e){return Re.getHandlers(t,"load",e)}static getHandlers(t,e,s){const o=[];return(e==="load"?Re.getInstance().loadRouters:Re.getInstance().saveRouters).forEach(i=>{const a=i(t,s);a!==null&&o.push(a)}),o}}const $C=n=>Re.getSaveHandlers(n);/**
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
 */const ju="tensorflowjs",qu=1,_s="models_store",gs="model_info_store";function dm(){if(!A().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function td(n){const t=n.result;t.createObjectStore(_s,{keyPath:"modelPath"}),t.createObjectStore(gs,{keyPath:"modelPath"})}class Us{constructor(t){if(this.indexedDB=dm(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((s,o)=>{const r=this.indexedDB.open(ju,qu);r.onupgradeneeded=()=>td(r),r.onsuccess=()=>{const i=r.result;if(e==null){const a=i.transaction(_s,"readonly"),l=a.objectStore(_s).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return i.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(l.result.modelArtifacts)},l.onerror=u=>(i.close(),o(l.error)),a.oncomplete=()=>i.close()}else{const a=um(e),c=i.transaction(gs,"readwrite");let l=c.objectStore(gs);const u=l.put({modelPath:this.modelPath,modelArtifactsInfo:a});let d;u.onsuccess=()=>{d=i.transaction(_s,"readwrite");const p=d.objectStore(_s).put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a});p.onsuccess=()=>s({modelArtifactsInfo:a}),p.onerror=f=>{l=c.objectStore(gs);const m=l.delete(this.modelPath);m.onsuccess=()=>(i.close(),o(p.error)),m.onerror=g=>(i.close(),o(p.error))}},u.onerror=h=>(i.close(),o(u.error)),c.oncomplete=()=>{d==null?i.close():d.oncomplete=()=>i.close()}}},r.onerror=i=>o(r.error)})}}Us.URL_SCHEME="indexeddb://";const hm=n=>A().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Us.URL_SCHEME)?GC(n.slice(Us.URL_SCHEME.length)):null;Re.registerSaveRouter(hm),Re.registerLoadRouter(hm);function GC(n){return new Us(n)}function LC(n){return n.startsWith(Us.URL_SCHEME)?n.slice(Us.URL_SCHEME.length):n}class EC{constructor(){this.indexedDB=dm()}async listModels(){return new Promise((t,e)=>{const s=this.indexedDB.open(ju,qu);s.onupgradeneeded=()=>td(s),s.onsuccess=()=>{const o=s.result,r=o.transaction(gs,"readonly"),a=r.objectStore(gs).getAll();a.onsuccess=()=>{const c={};for(const l of a.result)c[l.modelPath]=l.modelArtifactsInfo;t(c)},a.onerror=c=>(o.close(),e(a.error)),r.oncomplete=()=>o.close()},s.onerror=o=>e(s.error)})}async removeModel(t){return t=LC(t),new Promise((e,s)=>{const o=this.indexedDB.open(ju,qu);o.onupgradeneeded=()=>td(o),o.onsuccess=()=>{const r=o.result,i=r.transaction(gs,"readwrite"),a=i.objectStore(gs),c=a.get(t);let l;c.onsuccess=()=>{if(c.result==null)return r.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const u=a.delete(t),d=()=>{l=r.transaction(_s,"readwrite");const p=l.objectStore(_s).delete(t);p.onsuccess=()=>e(c.result.modelArtifactsInfo),p.onerror=f=>s(c.error)};u.onsuccess=d,u.onerror=h=>(d(),r.close(),s(c.error))}},c.onerror=u=>(r.close(),s(c.error)),i.oncomplete=()=>{l==null?r.close():l.oncomplete=()=>r.close()}},o.onerror=r=>s(o.error)})}}/**
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
 */const qn="/",zo="tensorflowjs_models",pm="info",DC="model_topology",WC="weight_specs",MC="weight_data",FC="model_metadata";function fm(n){return{info:[zo,n,pm].join(qn),topology:[zo,n,DC].join(qn),weightSpecs:[zo,n,WC].join(qn),weightData:[zo,n,MC].join(qn),modelMetadata:[zo,n,FC].join(qn)}}function mm(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function VC(n){const t=n.split(qn);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(qn)}function zC(n){return n.startsWith(Ys.URL_SCHEME)?n.slice(Ys.URL_SCHEME.length):n}class Ys{constructor(t){if(!A().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=fm(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),o=um(t);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,TC(t.weightData));const r={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(r)),{modelArtifactsInfo:o}}catch{throw mm(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=o;const r=this.LS.getItem(this.keys.modelMetadata);if(r!=null){const a=JSON.parse(r);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(e.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=NC(i),e}}Ys.URL_SCHEME="localstorage://";const gm=n=>A().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ys.URL_SCHEME)?XC(n.slice(Ys.URL_SCHEME.length)):null;Re.registerSaveRouter(gm),Re.registerLoadRouter(gm);function XC(n){return new Ys(n)}class AC{constructor(){v(A().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),v(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=zo+qn,s=qn+pm;for(let o=0;o<this.LS.length;++o){const r=this.LS.key(o);if(r.startsWith(e)&&r.endsWith(s)){const i=VC(r);t[i]=JSON.parse(this.LS.getItem(r))}}return t}async removeModel(t){t=zC(t);const e=fm(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(e.info));return mm(e),s}}/**
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
 */const bm="://";class zn{constructor(){this.managers={}}static getInstance(){return zn.instance==null&&(zn.instance=new zn),zn.instance}static registerManager(t,e){v(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(bm)&&(t=t.slice(0,t.indexOf(bm))),v(t.length>0,()=>"scheme must not be an empty string.");const s=zn.getInstance();v(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=e}static getManager(t){const e=zn.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(zn.getInstance().managers)}}/**
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
 */class OC{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window>"u"||!A().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const o=this.functionRefs[s.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}}if(A().get("IS_BROWSER")){A().setPlatform("browser",new OC);try{zn.registerManager(Ys.URL_SCHEME,new AC)}catch{}try{zn.registerManager(Us.URL_SCHEME,new EC)}catch{}}/**
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
 */const PC={importFetch:()=>require("node-fetch")};let ed;class KC{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return A().global.fetch!=null?A().global.fetch(t,e):(ed==null&&(ed=PC.importFetch()),ed(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}A().get("IS_NODE")&&!A().get("IS_BROWSER")&&A().setPlatform("node",new KC);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Ct(n,t="float32",e){return t=t||"float32",jn(n),new ke(n,t,e)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function ZC(n,t){const e=N(n,"x","cast");if(!XI(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:e},o={dtype:t};return L.runKernel(Tr,s,o)}const ot=W({cast_:ZC});/**
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
 */function BC(n){const e={x:N(n,"x","clone","string_or_numeric")};return L.runKernel(Xr,e)}const Qs=W({clone_:BC});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function HC(n,t=!1){console.log(n.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */em(),bC({buffer:Ct,cast:ot,clone:Qs,print:HC});/**
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
 */function Ft(){return L}function vc(){return L.memory()}function M(n,t){return L.tidy(n,t)}function wt(n){jf(n).forEach(e=>e.dispose())}function tn(n){return L.keep(n)}function xm(n,t,e=1){return L.registerBackend(n,t,e)}function bs(){return L.backend}/**
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
 */function _C(n,t){let e=N(n,"a","add"),s=N(t,"b","add");[e,s]=qt(e,s);const o={a:e,b:s};return L.runKernel(Lo,o)}const Q=W({add_:_C});/**
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
 */function UC(n,t){let e=N(n,"a","floorDiv"),s=N(t,"b","floorDiv");[e,s]=qt(e,s);const o={a:e,b:s};return L.runKernel(Vr,o)}const ym=W({floorDiv_:UC});/**
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
 */function YC(n,t){let e=N(n,"a","div"),s=N(t,"b","div");if([e,s]=qt(e,s),e.dtype==="int32"&&s.dtype==="int32")return ym(e,s);const o={a:e,b:s},r={};return L.runKernel(Lr,o,r)}const dt=W({div_:YC});/**
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
 */function QC(n,t){let e=N(n,"a","mul"),s=N(t,"b","mul");[e,s]=qt(e,s);const o={a:e,b:s};return L.runKernel(Ur,o)}const E=W({mul_:QC});/**
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
 */function JC(n){const t=N(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return L.runKernel(wa,e)}else{const e={x:t};return L.runKernel(ma,e)}}const $e=W({abs_:JC});/**
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
 */function jC(n){const e={x:N(n,"x","acos")};return L.runKernel(yr,e)}const qC=W({acos_:jC});/**
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
 */function tw(n){const e={x:N(n,"x","acosh")};return L.runKernel(Ir,e)}const ew=W({acosh_:tw});/**
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
 */function nw(n,t=null,e=!1){const o={x:N(n,"x","all","bool")},r={axis:t,keepDims:e};return L.runKernel(ql,o,r)}const Im=W({all_:nw});/**
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
 */function sw(n,t=null,e=!1){const o={x:N(n,"x","any","bool")},r={axis:t,keepDims:e};return L.runKernel(tu,o,r)}const nd=W({any_:sw});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function ow(n,t=0){const s={x:N(n,"x","argMax")},o={axis:t};return L.runKernel(ga,s,o)}const yi=W({argMax_:ow});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function rw(n,t=0){const s={x:N(n,"x","argMin")},o={axis:t};return L.runKernel(ba,s,o)}const iw=W({argMin_:rw});/**
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
 */function aw(n){const e={x:N(n,"x","asin")};return L.runKernel(Cr,e)}const cw=W({asin_:aw});/**
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
 */function lw(n){const e={x:N(n,"x","asinh")};return L.runKernel(wr,e)}const uw=W({asinh_:lw});/**
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
 */function dw(n){const e={x:N(n,"x","atan")};return L.runKernel(vr,e)}const hw=W({atan_:dw});/**
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
 */function pw(n,t){let e=N(n,"a","atan2"),s=N(t,"b","atan2");[e,s]=qt(e,s);const o={a:e,b:s};return L.runKernel(kr,o)}const fw=W({atan2_:pw});/**
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
 */function mw(n){const e={x:N(n,"x","atanh")};return L.runKernel(Sr,e)}const gw=W({atanh_:mw});/**
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
 */function Ii(n,t,e,s,o="NHWC",r){const i=n[3],a=[...t,i],c=es(o);return ye(n,a,e,r,s,null,null,c)}function hn(n,t,e,s,o,r,i="channelsLast"){const[a,c]=Ci(t);let l;if(i==="channelsLast")l=[a,c,n[3],n[3]];else if(i==="channelsFirst")l=[a,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return ye(n,l,e,s,o,r,!1,i)}function ts(n,t,e,s,o,r,i="NDHWC"){const[a,c,l]=od(t);let u,d;if(i==="NDHWC")d="channelsLast",u=[a,c,l,n[4],n[4]];else if(i==="NCDHW")d="channelsFirst",u=[a,c,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return xs(n,u,e,s,o,!1,d,r)}function ye(n,t,e,s,o,r,i=!1,a="channelsLast"){let[c,l,u,d]=[-1,-1,-1,-1];if(a==="channelsLast")[c,l,u,d]=n;else if(a==="channelsFirst")[c,d,l,u]=n;else throw new Error(`Unknown dataFormat ${a}`);const[h,p,,f]=t,[m,g]=Ci(e),[b,x]=Ci(s),I=Xo(h,b),y=Xo(p,x),{padInfo:C,outHeight:w,outWidth:k}=yw(o,l,u,m,g,I,y,r,a),S=i?f*d:f;let T;return a==="channelsFirst"?T=[c,S,w,k]:a==="channelsLast"&&(T=[c,w,k,S]),{batchSize:c,dataFormat:a,inHeight:l,inWidth:u,inChannels:d,outHeight:w,outWidth:k,outChannels:S,padInfo:C,strideHeight:m,strideWidth:g,filterHeight:h,filterWidth:p,effectiveFilterHeight:I,effectiveFilterWidth:y,dilationHeight:b,dilationWidth:x,inShape:n,outShape:T,filterShape:t}}function xs(n,t,e,s,o,r=!1,i="channelsLast",a){let[c,l,u,d,h]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[c,l,u,d,h]=n;else if(i==="channelsFirst")[c,h,l,u,d]=n;else throw new Error(`Unknown dataFormat ${i}`);const[p,f,m,,g]=t,[b,x,I]=od(e),[y,C,w]=od(s),k=Xo(p,y),S=Xo(f,C),T=Xo(m,w),{padInfo:R,outDepth:G,outHeight:F,outWidth:V}=Iw(o,l,u,d,b,x,I,k,S,T,a),z=r?g*h:g;let X;return i==="channelsFirst"?X=[c,z,G,F,V]:i==="channelsLast"&&(X=[c,G,F,V,z]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:u,inWidth:d,inChannels:h,outDepth:G,outHeight:F,outWidth:V,outChannels:z,padInfo:R,strideDepth:b,strideHeight:x,strideWidth:I,filterDepth:p,filterHeight:f,filterWidth:m,effectiveFilterDepth:k,effectiveFilterHeight:S,effectiveFilterWidth:T,dilationDepth:y,dilationHeight:C,dilationWidth:w,inShape:n,outShape:X,filterShape:t}}function bw(n,t,e,s,o){s==null&&(s=sd(n,t,e));const r=n[0],i=n[1],a=wi((r-t+2*s)/e+1,o),c=wi((i-t+2*s)/e+1,o);return[a,c]}function xw(n,t,e,s,o,r){o==null&&(o=sd(n,t[0],s[0]));const i=[0,0,0,e];for(let a=0;a<3;a++)n[a]+2*o>=t[a]&&(i[a]=wi((n[a]-t[a]+2*o)/s[a]+1,r));return i}function sd(n,t,e,s=1){const o=Xo(t,s);return Math.floor((n[0]*(e-1)-e+o)/2)}function Ci(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function od(n){return typeof n=="number"?[n,n,n]:n}function Xo(n,t){return t<=1?n:n+(n-1)*(t-1)}function yw(n,t,e,s,o,r,i,a,c){let l,u,d;if(typeof n=="number"){l={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const p=bw([t,e],r,s,n,a);u=p[0],d=p[1]}else if(n==="same"){u=Math.ceil(t/s),d=Math.ceil(e/o);const h=Math.max(0,(u-1)*s+r-t),p=Math.max(0,(d-1)*o+i-e),f=Math.floor(h/2),m=h-f,g=Math.floor(p/2),b=p-g;l={top:f,bottom:m,left:g,right:b,type:"SAME"}}else if(n==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-r+1)/s),d=Math.ceil((e-i+1)/o);else if(typeof n=="object"){const h=c==="channelsLast"?n[1][0]:n[2][0],p=c==="channelsLast"?n[1][1]:n[2][1],f=c==="channelsLast"?n[2][0]:n[3][0],m=c==="channelsLast"?n[2][1]:n[3][1];l={top:h,bottom:p,left:f,right:m,type:h===0&&p===0&&f===0&&m===0?"VALID":"EXPLICIT"},u=wi((t-r+h+p)/s+1,a),d=wi((e-i+f+m)/o+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:l,outHeight:u,outWidth:d}}function Iw(n,t,e,s,o,r,i,a,c,l,u){let d,h,p,f;if(n==="valid"&&(n=0),typeof n=="number"){d={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=xw([t,e,s,1],[a,c,l],1,[o,r,i],n,u);h=g[0],p=g[1],f=g[2]}else if(n==="same"){h=Math.ceil(t/o),p=Math.ceil(e/r),f=Math.ceil(s/i);const m=(h-1)*o+a-t,g=(p-1)*r+c-e,b=(f-1)*i+l-s,x=Math.floor(m/2),I=m-x,y=Math.floor(g/2),C=g-y,w=Math.floor(b/2),k=b-w;d={top:y,bottom:C,left:w,right:k,front:x,back:I,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:d,outDepth:h,outHeight:p,outWidth:f}}function wi(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function Js(n){const[t,e,s]=Ci(n);return t===1&&e===1&&s===1}function Te(n,t){return Js(n)||Js(t)}function js(n){return Ci(n).every(t=>t>0)}function es(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function Fe(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")v(Ro(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(o=>{v(Ro(o),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${o}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}/**
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
 */function Cw(n,t){const s={x:N(n,"x","reshape","string_or_numeric")},o={shape:t};return L.runKernel(nc,s,o)}const D=W({reshape_:Cw});/**
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
 */function ww(n,t,e,s,o){const r=N(n,"x","avgPool","float32"),i=1;v(Te(e,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);let a=r,c=!1;r.rank===3&&(c=!0,a=D(r,[1,r.shape[0],r.shape[1],r.shape[2]])),v(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),Fe("avgPool",s,o);const l={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o};let d=L.runKernel(xa,l,u);return d=ot(d,r.dtype),c?D(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const rd=W({avgPool_:ww});/**
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
 */function vw(n,t,e,s,o,r="NDHWC"){const i=N(n,"x","avgPool3d","float32");let a=i,c=!1;i.rank===4&&(c=!0,a=D(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),v(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),v(r==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),v(typeof e=="number"&&e>0||Array.isArray(e)&&e[0]>0&&e[1]>0&&e[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${e}'`),Fe("avgPool3d",s,o);const l={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r};let d=L.runKernel(ya,l,u);return d=ot(d,a.dtype),c?D(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Sw=W({avgPool3d_:vw});/**
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
 */function kw(n,t=0){v(n.length>=1,()=>"Pass at least one tensor to concat");const e=im(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(r=>{if(r.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${r.dtype}. `)}),e.length===1)return Qs(e[0]);const s=e,o={axis:t};return L.runKernel(va,s,o)}const Ve=W({concat_:kw});/**
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
 */function Tw(n,t,e=!1,s=!1){let o=N(n,"a","matMul"),r=N(t,"b","matMul");[o,r]=qt(o,r);const i={a:o,b:r},a={transposeA:e,transposeB:s};return L.runKernel(Ia,i,a)}const $t=W({matMul_:Tw});/**
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
 */function Nw(n){const e={x:N(n,"x","sigmoid","float32")};return L.runKernel(ri,e)}const Ao=W({sigmoid_:Nw});/**
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
 */function Rw(n,t,e){const s=N(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const o={x:s},r={begin:t,size:e};return L.runKernel(ac,o,r)}const Vt=W({slice_:Rw});/**
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
 */function $w(n){const e={x:N(n,"x","tanh","float32")};return L.runKernel(di,e)}const id=W({tanh_:$w});/**
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
 */function Gw(n,t,e){const s=N(n,"x","batchToSpaceND"),o=t.reduce((a,c)=>a*c);v(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),v(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),v(s.shape[0]%o===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${o}`);const r={x:s},i={blockShape:t,crops:e};return L.runKernel(Ca,r,i)}const ad=W({batchToSpaceND_:Gw});function Lw(n){let t;return n.rank===0||n.rank===1?t=D(n,[1,1,1,n.size]):n.rank===2?t=D(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=D(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}/**
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
 */function Ew(n,t,e,s,o,r){r==null&&(r=.001);const i=N(n,"x","batchNorm"),a=N(t,"mean","batchNorm"),c=N(e,"variance","batchNorm");let l;o!=null&&(l=N(o,"scale","batchNorm"));let u;s!=null&&(u=N(s,"offset","batchNorm")),v(a.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),v(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),v(l==null||a.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const h={x:Lw(i),scale:l,offset:u,mean:a,variance:c},p={varianceEpsilon:r},f=L.runKernel(Ea,h,p);return D(f,i.shape)}const Sc=W({batchNorm_:Ew});function Dw(n,t,e,s,o,r){const i=N(n,"x","batchNorm"),a=N(t,"mean","batchNorm"),c=N(e,"variance","batchNorm");let l;o!=null&&(l=N(o,"scale","batchNorm"));let u;return s!=null&&(u=N(s,"offset","batchNorm")),v(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),v(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),v(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&v(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&v(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),Sc(i,a,c,u,l,r)}const Ww=W({batchNorm2d_:Dw});function Mw(n,t,e,s,o,r){const i=N(n,"x","batchNorm"),a=N(t,"mean","batchNorm"),c=N(e,"variance","batchNorm");let l;o!=null&&(l=N(o,"scale","batchNorm"));let u;return s!=null&&(u=N(s,"offset","batchNorm")),v(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),v(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),v(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&v(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&v(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),Sc(i,a,c,u,l,r)}const Fw=W({batchNorm3d_:Mw});function Vw(n,t,e,s,o,r){const i=N(n,"x","batchNorm"),a=N(t,"mean","batchNorm"),c=N(e,"variance","batchNorm");let l;o!=null&&(l=N(o,"scale","batchNorm"));let u;return s!=null&&(u=N(s,"offset","batchNorm")),v(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),v(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),v(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&v(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&v(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),Sc(i,a,c,u,l,r)}const zw=W({batchNorm4d_:Vw});/**
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
 */function Xw(n,t,e){const s=N(n,"x","bincount"),o=N(t,"weights","bincount");v(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),v(e>=0,()=>`size must be non-negative, but got ${e}.`),v(o.size===s.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${o.shape}.`);const r={x:s,weights:o},i={size:e};return L.runKernel(su,r,i)}const Aw=W({bincount_:Xw});/**
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
 */function Ow(n,t){let e=N(n,"broadcastTo","x");const s=e.shape;if(jn(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const l=e.shape.slice();for(;l.length<t.length;)l.unshift(1);e=D(e,l)}const o=e.shape,r=Array.from(t);for(let l=t.length-1;l>=0;l--)if(o[l]===t[l])r[l]=1;else if(e.shape[l]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(r.map((l,u)=>l>1?u:-1).filter(l=>l>=0).length===0)return Qs(e);const a={x:e},c={reps:r};return L.runKernel(hi,a,c)}const vi=W({broadcastTo_:Ow});/**
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
 */function Pw(n){const e={x:N(n,"x","ceil","float32")};return L.runKernel(Nr,e)}const Kw=W({ceil_:Pw});/**
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
 */function kc(n,t,e){jn(n);const s={shape:n,value:t,dtype:e};return L.runKernel(xu,{},s)}/**
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
 */function Zw(n,t,e){const s=N(n,"x","clipByValue");if(v(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return kc(s.shape,t,s.dtype);const o={x:s},r={clipValueMin:t,clipValueMax:e};return L.runKernel(Rr,o,r)}const en=W({clipByValue_:Zw});function Bw(n){return Ve(n,0)}const Hw=W({concat1d_:Bw});function _w(n,t){return Ve(n,t)}const Uw=W({concat2d_:_w});function Yw(n,t){return Ve(n,t)}const Qw=W({concat3d_:Yw});function Jw(n,t){return Ve(n,t)}const jw=W({concat4d_:Jw});/**
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
 */function qw(n,t,e,s,o="NHWC",r=[1,1],i){const a=N(n,"x","conv2d","float32"),c=N(t,"filter","conv2d","float32");let l=a,u=!1;a.rank===3&&(u=!0,l=D(a,[1,a.shape[0],a.shape[1],a.shape[2]])),v(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),v(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),Fe("conv2d",s,i);const d=o==="NHWC"?l.shape[3]:l.shape[1];v(d===c.shape[2],()=>`Error in conv2d: depth of input (${d}) must match input depth for filter ${c.shape[2]}.`),v(Te(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`),v(js(r),()=>"Error in conv2D: Dilated rates should be larger than 0."),v(js(e),()=>"Error in conv2D: Strides should be larger than 0.");const h={x:l,filter:c},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=L.runKernel(Sa,h,p);return u?D(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const qs=W({conv2d_:qw});function t2(n,t,e,s,o="NWC",r=1,i){const a=N(n,"x","conv1d"),c=N(t,"filter","conv1d");let l=a,u=!1;a.rank===2&&(u=!0,l=D(a,[1,a.shape[0],a.shape[1]])),v(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),v(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),Fe("conv1d",s,i),v(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),v(Te(e,r),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${r}'`),v(js(r),()=>"Error in conv1D: Dilated rates should be larger than 0."),v(js(e),()=>"Error in conv1D: Stride should be larger than 0."),v(o==="NWC",()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`);const d=D(c,[1,c.shape[0],c.shape[1],c.shape[2]]),h=D(l,[l.shape[0],1,l.shape[1],l.shape[2]]),g=qs(h,d,[1,e],s,"NHWC",[1,r],i);return u?D(g,[g.shape[2],g.shape[3]]):D(g,[g.shape[0],g.shape[2],g.shape[3]])}const Cm=W({conv1d_:t2});/**
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
 */function e2(n,t,e,s,o,r="NHWC",i){v(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,c=t,l=!1;t.rank===3&&(l=!0,c=D(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),v(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),v(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),v(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const u=r==="NHWC"?a[3]:a[1],d=r==="NHWC"?c.shape[3]:c.shape[1];v(u===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${e.shape[2]}.`),v(d===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${d}) must match output depth for filter ${e.shape[3]}.`),Fe("conv2dDerInput",o,i);const h={dy:c,filter:e},p={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,inputShape:a},f=L.runKernel(ka,h,p);return l?D(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const cd=W({conv2DBackpropInput_:e2});function n2(n,t,e,s,o,r){const i=N(n,"x","conv2dTranspose"),a=N(t,"filter","conv2dTranspose");return cd(e,i,a,s,o,"NHWC",r)}const wm=W({conv2dTranspose_:n2});/**
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
 */function s2(n,t,e,s,o="NDHWC",r=[1,1,1]){const i=N(n,"x","conv3d"),a=N(t,"filter","conv3d");let c=i,l=!1;i.rank===4&&(l=!0,c=D(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),v(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),v(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),v(c.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${a.shape[3]}.`),v(Te(e,r),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`),v(o==="NDHWC",()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`),v(js(r),()=>"Error in conv3D: Dilated rates should be larger than 0."),v(js(e),()=>"Error in conv3D: Strides should be larger than 0.");const u={x:c,filter:a},d={strides:e,pad:s,dataFormat:o,dilations:r},h=L.runKernel(Ta,u,d);return l?D(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const o2=W({conv3d_:s2});/**
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
 */function r2(n,t,e,s,o){v(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let r=n,i=t,a=!1;t.rank===4&&(a=!0,i=D(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),r=[1,n[0],n[1],n[2],n[3]]);const c=r[4],l=i.shape[4];v(r.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${r.length}.`),v(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),v(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),v(c===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${e.shape[3]}.`),v(l===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${e.shape[4]}.`);const u={dy:i,filter:e},d={pad:o,strides:s,inputShape:r},h=L.runKernel(au,u,d);return a?D(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const vm=W({conv3DBackpropInput_:r2});function i2(n,t,e,s,o){const r=N(n,"x","conv3dTranspose"),i=N(t,"filter","conv3dTranspose");return vm(e,r,i,s,o)}const a2=W({conv3dTranspose_:i2});/**
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
 */function c2(n){const e={x:N(n,"x","cos","float32")};return L.runKernel($r,e)}const ld=W({cos_:c2});/**
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
 */function l2(n){const e={x:N(n,"x","cosh","float32")};return L.runKernel(Gr,e)}const Sm=W({cosh_:l2});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u2(n,t=0,e=!1,s=!1){const r={x:N(n,"x","cumprod")},i={axis:t,exclusive:e,reverse:s};return L.runKernel(cu,r,i)}const ud=W({cumprod_:u2});/**
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
 */function d2(n,t=0,e=!1,s=!1){const r={x:N(n,"x","cumsum")},i={axis:t,exclusive:e,reverse:s};return L.runKernel(Na,r,i)}const km=W({cumsum_:d2});/**
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
 */function h2(n,t,e,s=!1){const o=N(n,"x","denseBincount"),r=N(t,"weights","denseBincount");v(o.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`),v(o.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`),v(e>=0,()=>`size must be non-negative, but got ${e}.`),v(r.size===o.size||r.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${r.shape}.`);const i={x:o,weights:r},a={size:e,binaryOutput:s};return L.runKernel(uu,i,a)}const Tm=W({denseBincount_:h2});/**
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
 */function p2(n,t,e="NHWC"){const s=N(n,"x","depthToSpace","float32"),o=e==="NHWC"?s.shape[1]:s.shape[2],r=e==="NHWC"?s.shape[2]:s.shape[3],i=e==="NHWC"?s.shape[3]:s.shape[1];v(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),v(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t}  for depthToSpace with input shape
    ${s.shape}`),v(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t} for depthToSpace with input shape
        ${s.shape}`),v(i%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${s.shape}`);const a={x:s},c={blockSize:t,dataFormat:e};return L.runKernel(du,a,c)}const f2=W({depthToSpace_:p2});/**
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
 */function m2(n,t,e,s,o="NHWC",r=[1,1],i){const a=N(n,"x","depthwiseConv2d","float32"),c=N(t,"filter","depthwiseConv2d","float32");let l=a,u=!1;a.rank===3&&(u=!0,l=D(a,[1,a.shape[0],a.shape[1],a.shape[2]])),v(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),v(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);const d=o==="NHWC"?l.shape[3]:l.shape[1];v(d===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${d}) must match the inChannels dimension in filter ${c.shape[2]}.`),Fe("depthwiseConv2d",s,i);const h={x:l,filter:c},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=L.runKernel(Ra,h,p);return u?D(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const dd=W({depthwiseConv2d_:m2});/**
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
 */function g2(n,t,e,s,o=[1,1],r="NHWC"){const i=N(n,"x","dilation2d"),a=N(t,"filter","dilation2d");v(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),v(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),v(r==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${r}`);let c=i,l=!1;i.rank===3&&(c=D(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=!0),v(c.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${a.shape[2]}`);const u={x:c,filter:a},d={strides:e,pad:s,dilations:o},h=L.runKernel($a,u,d);return l?D(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const b2=W({dilation2d_:g2});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function Oo(n,t){const e=n.length,s=[];for(let o=0;o<e;o++){const r=e-1-o,i=n[r]||1;(t[t.length-1-o]||1)>1&&i===1&&s.unshift(r)}return s}function ce(n,t){const e=[];for(let s=0;s<t.length;s++){const o=n[n.length-s-1],r=t.length-s-1,i=t[r];(o==null||o===1&&i>1)&&e.unshift(r)}return e}function gt(n,t){const e=[],s=Math.max(n.length,t.length);for(let o=0;o<s;o++){let r=n[n.length-o-1];r==null&&(r=1);let i=t[t.length-o-1];if(i==null&&(i=1),r===1)e.unshift(i);else if(i===1)e.unshift(r);else if(r!==i){const a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else e.unshift(r)}return e}/**
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
 */function x2(n,t){let e=N(n,"a","equal","string_or_numeric"),s=N(t,"b","equal","string_or_numeric");[e,s]=qt(e,s),gt(e.shape,s.shape);const o={a:e,b:s};return L.runKernel(Ga,o)}const Xn=W({equal_:x2});/**
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
 */function y2(n,t,e){const s=N(t,"a","where"),o=N(e,"b","where"),r=N(n,"condition","where","bool"),i=gt(gt(r.shape,s.shape),o.shape),a=vi(r,i),c=vi(s,i),l=vi(o,i),u={condition:a,t:c,e:l};return L.runKernel(ic,u)}const Be=W({where_:y2});/**
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
 */function I2(n){const e={x:N(n,"x","zerosLike")};return L.runKernel(fc,e)}const kt=W({zerosLike_:I2});/**
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
 */function C2(n,t){let e=N(n,"a","div"),s=N(t,"b","div");[e,s]=qt(e,s);const o=dt(e,s),r=kt(o),i=Xn(s,r);return Be(i,r,o)}const w2=W({divNoNan_:C2});/**
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
 */function v2(n,t){const e=N(n,"t1","dot"),s=N(t,"t2","dot");v((e.rank===1||e.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${s.rank}.`);const o=e.rank===1?e.size:e.shape[1],r=s.rank===1?s.size:s.shape[0];if(v(o===r,()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${r}.`),e.rank===1&&s.rank===1){const i=D(e,[1,-1]),a=D(s,[-1,1]),c=$t(i,a);return D(c,[])}else if(e.rank===1&&s.rank===2){const i=D(e,[1,-1]),a=D(s,[s.shape[0],s.shape[1]]),c=$t(i,a);return D(c,[c.size])}else if(e.rank===2&&s.rank===1){const i=D(s,[-1,1]),a=$t(e,i);return D(a,[a.size])}else{const i=D(s,[s.shape[0],s.shape[1]]);return $t(e,i)}}const S2=W({dot_:v2});/**
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
 */function k2(n){const e={x:N(n,"x","elu","float32")};return L.runKernel(Er,e)}const Tc=W({elu_:k2});/**
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
 */function T2(n){let t=N(n,"x","erf");v(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=ot(t,"float32"));const e={x:t};return L.runKernel(Dr,e)}const N2=W({erf_:T2});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function hd(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function Nm(n,t,e){const s=n.length+t.length,o=[];let r=0,i=0;for(let a=0;a<s;a++)e.indexOf(a)===-1?o.push(n[r++]):o.push(t[i++]);return o}function fe(n,t){const e=[],s=n.length;for(let r=0;r<s;r++)t.indexOf(r)===-1&&e.push(n[r]);const o=t.map(r=>n[r]);return[e,o]}function oe(n,t){const e=t.map(s=>1);return Nm(n,e,t)}function Ie(n,t,e){v(hd(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function Yt(n,t){if(hd(n,t))return null;const e=[];for(let s=0;s<t;++s)n.indexOf(s)===-1&&e.push(s);return n.forEach(s=>e.push(s)),e}function ys(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function te(n,t){const e=[];for(let s=t-n;s<t;++s)e.push(s);return e}/**
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
 */function R2(n,t=null,e=!1){const o={x:N(n,"x","max")},r={reductionIndices:t,keepDims:e};return L.runKernel(Pa,o,r)}const Tn=W({max_:R2});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function $2(n,t=null,e=!1){const o={x:N(n,"x","min")},r={axis:t,keepDims:e};return L.runKernel(Ha,o,r)}const Nc=W({min_:$2});/**
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
 */function G2(n,t){let e=N(n,"base","pow"),s=N(t,"exp","pow");[e,s]=qt(e,s);const o={a:e,b:s};return L.runKernel(Yr,o)}const Po=W({pow_:G2});/**
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
 */function Gt(n,t){if((Sn(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Sn(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return xi(n,[],[],t)}/**
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
 */function L2(n){const e={x:N(n,"x","sqrt","float32")};return L.runKernel(ai,e)}const Ge=W({sqrt_:L2});/**
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
 */function E2(n){const t=N(n,"x","square"),e={};return L.runKernel("Square",{x:t},e)}const Zt=W({square_:E2});/**
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
 */function D2(n,t=null,e=!1){let s=N(n,"x","sum");s.dtype==="bool"&&(s=ot(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return L.runKernel(cc,o,r)}const ut=W({sum_:D2});/**
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
 */function W2(n,t="euclidean",e=null,s=!1){n=N(n,"x","norm");const o=Rm(n,t,e);let r=o.shape;if(s){const i=It(e,n.shape);r=oe(o.shape,i)}return D(o,r)}function Rm(n,t,e=null){if(n.rank===0)return $e(n);if(n.rank!==1&&e===null)return Rm(D(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return ut($e(n),e);if(t===1/0)return Tn($e(n),e);if(t===-1/0)return Nc($e(n),e);if(t==="euclidean"||t===2)return Ge(ut(Po($e(n),Gt(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return Tn(ut($e(n),e[0]),e[1]-1);if(t===1/0)return Tn(ut($e(n),e[1]),e[0]);if(t===-1/0)return Nc(ut($e(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return Ge(ut(Zt(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const Rc=W({norm_:W2});/**
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
 */function M2(n,t=null,e=!1){return Rc(n,"euclidean",t,e)}const F2=W({euclideanNorm_:M2});/**
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
 */function V2(n){const e={x:N(n,"x","exp")};return L.runKernel(Wr,e)}const ns=W({exp_:V2});/**
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
 */function z2(n,t=0){const e=N(n,"x","expandDims","string_or_numeric");v(t<=e.rank,()=>"Axis must be <= rank of the tensor");const s={input:e},o={dim:t};return L.runKernel(La,s,o)}const He=W({expandDims_:z2});/**
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
 */function X2(n){const e={x:N(n,"x","expm1")};return L.runKernel(Mr,e)}const A2=W({expm1_:X2});/**
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
 */function O2(n,t){const e=N(n,"x","tile","string_or_numeric");v(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const s={x:e},o={reps:t};return L.runKernel(hi,s,o)}const Nn=W({tile_:O2});/**
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
 */function P2(n,t,e,s="float32"){t==null&&(t=n);const o=Ct([n,t],s),r=n<=t?n:t;for(let a=0;a<r;++a)o.set(1,a,a);const i=D(o.toTensor(),[n,t]);if(e==null)return i;if(e.length===1)return Nn(He(i,0),[e[0],1,1]);if(e.length===2)return Nn(He(He(i,0),0),[e[0],e[1],1,1]);if(e.length===3)return Nn(He(He(He(i,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const $m=W({eye_:P2});/**
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
 */function K2(n){const e={x:N(n,"x","floor","float32")};return L.runKernel(Fr,e)}const $c=W({floor_:K2});/**
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
 */function Z2(n,t,e=0,s=0){const o=N(n,"x","gather"),r=N(t,"indices","gather","int32"),i={x:o,indices:r},a={axis:e,batchDims:s};return L.runKernel(Da,i,a)}const pd=W({gather_:Z2});/**
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
 */function B2(n,t){let e=N(n,"a","greater","string_or_numeric"),s=N(t,"b","greater","string_or_numeric");[e,s]=qt(e,s),gt(e.shape,s.shape);const o={a:e,b:s};return L.runKernel(Wa,o)}const nn=W({greater_:B2});/**
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
 */function H2(n,t){let e=N(n,"a","greaterEqual","string_or_numeric"),s=N(t,"b","greaterEqual","string_or_numeric");[e,s]=qt(e,s),gt(e.shape,s.shape);const o={a:e,b:s};return L.runKernel(zr,o)}const to=W({greaterEqual_:H2});/**
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
 */function _2(n){const e={input:N(n,"input","imag")};return L.runKernel(Cu,e)}const fd=W({imag_:_2});/**
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
 */function U2(n){const e={x:N(n,"x","isFinite")};return L.runKernel(Ar,e)}const Y2=W({isFinite_:U2});/**
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
 */function Q2(n){const e={x:N(n,"x","isInf")};return L.runKernel(Or,e)}const J2=W({isInf_:Q2});/**
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
 */function j2(n){const e={x:N(n,"x","isNaN")};return L.runKernel(Pr,e)}const q2=W({isNaN_:j2});/**
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
 */function tv(n,t=.2){const s={x:N(n,"x","leakyRelu")},o={alpha:t};return L.runKernel(Ma,s,o)}const md=W({leakyRelu_:tv});/**
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
 */function ev(n,t){let e=N(n,"a","less","string_or_numeric"),s=N(t,"b","less","string_or_numeric");[e,s]=qt(e,s),gt(e.shape,s.shape);const o={a:e,b:s};return L.runKernel(Fa,o)}const Gm=W({less_:ev});/**
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
 */function nv(n,t){let e=N(n,"a","lessEqual","string_or_numeric"),s=N(t,"b","lessEqual","string_or_numeric");[e,s]=qt(e,s),gt(e.shape,s.shape);const o={a:e,b:s};return L.runKernel(Va,o)}const Ko=W({lessEqual_:nv});/**
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
 */function sv(n,t=5,e=1,s=1,o=.5){const r=N(n,"x","localResponseNormalization");v(r.rank===4||r.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${r.rank}.`),v(Ro(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=r,a=!1;r.rank===3&&(a=!0,i=D(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const c={x:i},l={depthRadius:t,bias:e,alpha:s,beta:o},u=L.runKernel(Oa,c,l);return a?D(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const ov=W({localResponseNormalization_:sv});/**
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
 */function rv(n){const e={x:N(n,"x","log","float32")};return L.runKernel(Kr,e)}const An=W({log_:rv});/**
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
 */function iv(n){const e={x:N(n,"x","log1p")};return L.runKernel(Zr,e)}const Lm=W({log1p_:iv});/**
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
 */function av(n,t){v(Hl(n),()=>"The f passed in variableGrads(f) must be a function"),v(t==null||Array.isArray(t)&&t.every(l=>l instanceof wc),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const e=t!=null;if(!e){t=[];for(const l in L.registeredVariables)t.push(L.registeredVariables[l])}const s=e?t.filter(l=>!l.trainable):null,o=t.length;t=t.filter(l=>l.trainable),v(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);const r=!0,{value:i,grads:a}=L.gradients(n,t,null,r);v(a.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),v(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const c={};return t.forEach((l,u)=>{a[u]!=null&&(c[l.name]=a[u])}),s!=null&&s.forEach(l=>c[l.name]=null),{value:i,grads:c}}function Zo(n){return L.customGrad(n)}/**
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
 */function cv(n){const e={x:N(n,"x","neg")};return L.runKernel(Ua,e)}const re=W({neg_:cv});/**
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
 */function lv(n){const e={x:N(n,"x","softplus")};return L.runKernel(ii,e)}const Si=W({softplus_:lv});/**
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
 */function uv(n){const t=N(n,"x","logSigmoid");return Zo(s=>({value:re(Si(re(s))),gradFunc:i=>E(i,Ao(re(s)))}))(t)}const dv=W({logSigmoid_:uv});/**
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
 */function hv(n,t){let e=N(n,"a","sub"),s=N(t,"b","sub");[e,s]=qt(e,s);const o={a:e,b:s};return L.runKernel(li,o)}const ft=W({sub_:hv});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function pv(n,t=-1){const e=N(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return Zo((o,r)=>{const a=Tn(o,t,!0),c=ft(o,a),l=ft(ot(c,"float32"),An(ut(ns(c),t,!0)));return r([l]),{value:l,gradFunc:(d,h)=>{const[p]=h,f=!0,m=ns(p);return ft(d,E(ut(d,t,f),m))}}})(e)}const Em=W({logSoftmax_:pv});/**
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
 */function fv(n,t=null,e=!1){const s=N(n,"x","logSumExp"),o=It(t,s.shape),r=Tn(s,o,!0),i=ft(s,r),a=ns(i),c=ut(a,o),l=An(c),u=Q(D(r,l.shape),l);if(e){const d=oe(u.shape,o);return D(u,d)}return u}const mv=W({logSumExp_:fv});/**
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
 */function gv(n,t){const e=N(n,"a","logicalAnd","bool"),s=N(t,"b","logicalAnd","bool");gt(e.shape,s.shape);const o={a:e,b:s};return L.runKernel(za,o)}const ss=W({logicalAnd_:gv});/**
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
 */function bv(n){const e={x:N(n,"x","logicalNot","bool")};return L.runKernel(Xa,e)}const gd=W({logicalNot_:bv});/**
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
 */function xv(n,t){const e=N(n,"a","logicalOr","bool"),s=N(t,"b","logicalOr","bool");gt(e.shape,s.shape);const o={a:e,b:s};return L.runKernel(Aa,o)}const Dm=W({logicalOr_:xv});/**
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
 */function yv(n,t){const e=N(n,"a","logicalXor","bool"),s=N(t,"b","logicalXor","bool");return gt(e.shape,s.shape),ss(Dm(n,t),gd(ss(n,t)))}const Iv=W({logicalXor_:yv});/**
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
 */function Cv(n,t,e,s,o){const r=N(n,"x","maxPool"),i=1;let a=r,c=!1;r.rank===3&&(c=!0,a=D(r,[1,r.shape[0],r.shape[1],r.shape[2]])),v(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),v(Te(e,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),Fe("maxPool",s,o);const l={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o},d=L.runKernel(Ka,l,u);return c?D(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const bd=W({maxPool_:Cv});/**
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
 */function wv(n,t=[1,1,1],e,s,o,r="NDHWC"){const i=N(n,"x","maxPool3d");let a=i,c=!1;i.rank===4&&(c=!0,a=D(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),v(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),v(r==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),Fe("maxPool3d",s,o);const l={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r},d=L.runKernel(Za,l,u);return c?D(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const vv=W({maxPool3d_:wv});/**
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
 */function Sv(n,t){let e=N(n,"a","maximum"),s=N(t,"b","maximum");[e,s]=qt(e,s),e.dtype==="bool"&&(e=ot(e,"int32"),s=ot(s,"int32")),gt(e.shape,s.shape);const o={a:e,b:s};return L.runKernel(Br,o)}const Is=W({maximum_:Sv});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function kv(n,t=null,e=!1){const o={x:N(n,"x","mean")},r={axis:t,keepDims:e};return L.runKernel(Ba,o,r)}const ie=W({mean_:kv});/**
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
 */function me(n,t="float32"){if(jn(n),t==="complex64"){const s=me(n,"float32"),o=me(n,"float32");return Vo(s,o)}const e=Se(Z(n),t);return L.makeTensor(e,n,t)}/**
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
 */function eo(n,t="float32"){if(jn(n),t==="complex64"){const s=eo(n,"float32"),o=me(n,"float32");return Vo(s,o)}const e=Ul(Z(n),t);return L.makeTensor(e,n,t)}/**
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
 */function Tv(n,t){let e=N(n,"a","minimum"),s=N(t,"b","minimum");[e,s]=qt(e,s),e.dtype==="bool"&&(e=ot(e,"int32"),s=ot(s,"int32")),gt(e.shape,s.shape);const o={a:e,b:s};return L.runKernel(Hr,o)}const xd=W({minimum_:Tv});/**
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
 */function Nv(n,t,e){v(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const s=N(n,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");v(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const o=e==="reflect"?1:0;for(let a=0;a<s.rank;a++)v(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),v(t[a][0]>=0&&t[a][0]<=s.shape[a]-o&&t[a][1]>=0&&t[a][1]<=s.shape[a]-o,()=>`Padding in dimension ${a} cannot be greater than or equal to ${s.shape[a]-o} or less than 0 for input of shape ${s.shape}`);const r={paddings:t,mode:e},i={x:s};return L.runKernel(_a,i,r)}const Rv=W({mirrorPad_:Nv});/**
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
 */function $v(n,t){let e=N(n,"a","mod"),s=N(t,"b","mod");[e,s]=qt(e,s);const o={a:e,b:s};return L.runKernel(_r,o)}const Gv=W({mod_:$v});/**
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
 */function Lv(n,t=null,e=!1){n=N(n,"x","moments");const s=It(t,n.shape),o=ie(n,s,e);let r=o.shape;e||(r=oe(o.shape,s));const i=Zt(ft(ot(n,"float32"),D(o,r))),a=ie(i,s,e);return{mean:o,variance:a}}const yd=W({moments_:Lv});/**
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
 */function Ev(n,t){let e=N(n,"a","notEqual","string_or_numeric"),s=N(t,"b","notEqual","string_or_numeric");[e,s]=qt(e,s),gt(e.shape,s.shape);const o={a:e,b:s};return L.runKernel(Ya,o)}const Gc=W({notEqual_:Ev});/**
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
 */function Dv(n,t,e=1,s=0,o="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const i={indices:N(n,"indices","oneHot","int32")},a={dtype:o,depth:t,onValue:e,offValue:s};return L.runKernel(Ja,i,a)}const Wm=W({oneHot_:Dv});/**
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
 */function Wv(n){const e={x:N(n,"x","onesLike")};return L.runKernel(Qa,e)}const pn=W({onesLike_:Wv});/**
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
 */function Mv(n,t,e=0){const s=N(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const o={paddings:t,constantValue:e},r={x:s};return L.runKernel(qa,r,o)}const Id=W({pad_:Mv});/**
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
 */function Fv(n,t,e){const s=N(n,"x","spaceToBatchND");v(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),v(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),v(s.shape.reduce((i,a,c)=>c>0&&c<=t.length?i&&(a+e[c-1][0]+e[c-1][1])%t[c-1]===0:i,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const o={x:s},r={blockShape:t,paddings:e};return L.runKernel(lc,o,r)}const Cd=W({spaceToBatchND_:Fv});/**
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
 */function Vv(n,t,e,s,o,r,i){o==null&&(o=[1,1]),r==null&&(r=1),s===0&&(s="valid");const a=N(n,"x","maxPool");let c=a,l=!1;a.rank===3&&(l=!0,c=D(a,[1,a.shape[0],a.shape[1],a.shape[2]])),v(Te(r,o),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${r} and dilations '${o}'`);const u=hn(c.shape,t,r,o,s),d=[u.dilationHeight,u.dilationWidth];let h;s==="same"?h=Xv([u.filterHeight,u.filterWidth],d):h=[[0,0],[0,0]];const p=d[0]===1&&d[1]===1,[f,m]=zv([u.inHeight,u.inWidth],d,h),g=p?s:"valid",b=p?c:Cd(c,d,f),I=(e==="avg"?()=>rd(b,t,r,g,i):()=>bd(b,t,r,g,i))(),y=p?I:ad(I,d,m);return l?D(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function zv(n,t,e){const s=e.map(u=>u[0]),o=e.map(u=>u[1]),r=n.concat(s,o),i=t.map((u,d)=>(u-r[d]%u)%u),a=o.map((u,d)=>u+i[d]),c=t.map((u,d)=>[s[d],a[d]]),l=t.map((u,d)=>[0,i[d]]);return[c,l]}function Xv(n,t){const s=n.map((i,a)=>i+(i-1)*(t[a]-1)).map(i=>i-1),o=s.map(i=>Math.floor(i/2)),r=s.map((i,a)=>i-o[a]);return s.map((i,a)=>[o[a],r[a]])}const Av=W({pool_:Vv});/**
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
 */function Ov(n,t){const e=N(n,"x","prelu"),s=N(t,"alpha","prelu"),o={x:e,alpha:s};return L.runKernel(tc,o)}const wd=W({prelu_:Ov});/**
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
 */function Pv(n,t=null,e=!1){let s=N(n,"x","prod");s.dtype==="bool"&&(s=ot(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return L.runKernel(ec,o,r)}const Kv=W({prod_:Pv});var vd={exports:{}};vd.exports,function(n){(function(t,e,s){function o(c){var l=this,u=a();l.next=function(){var d=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=d-(l.c=d|0)},l.c=1,l.s0=u(" "),l.s1=u(" "),l.s2=u(" "),l.s0-=u(c),l.s0<0&&(l.s0+=1),l.s1-=u(c),l.s1<0&&(l.s1+=1),l.s2-=u(c),l.s2<0&&(l.s2+=1),u=null}function r(c,l){return l.c=c.c,l.s0=c.s0,l.s1=c.s1,l.s2=c.s2,l}function i(c,l){var u=new o(c),d=l&&l.state,h=u.next;return h.int32=function(){return u.next()*4294967296|0},h.double=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.quick=h,d&&(typeof d=="object"&&r(d,u),h.state=function(){return r(u,{})}),h}function a(){var c=4022871197,l=function(u){u=String(u);for(var d=0;d<u.length;d++){c+=u.charCodeAt(d);var h=.02519603282416938*c;c=h>>>0,h-=c,h*=c,c=h>>>0,h-=c,c+=h*4294967296}return(c>>>0)*23283064365386963e-26};return l}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.alea=i})(As,n,!1)}(vd);var Zv=vd.exports,Sd={exports:{}};Sd.exports,function(n){(function(t,e,s){function o(a){var c=this,l="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var d=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^d^d>>>8},a===(a|0)?c.x=a:l+=a;for(var u=0;u<l.length+64;u++)c.x^=l.charCodeAt(u)|0,c.next()}function r(a,c){return c.x=a.x,c.y=a.y,c.z=a.z,c.w=a.w,c}function i(a,c){var l=new o(a),u=c&&c.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var h=l.next()>>>11,p=(l.next()>>>0)/4294967296,f=(h+p)/(1<<21);while(f===0);return f},d.int32=l.next,d.quick=d,u&&(typeof u=="object"&&r(u,l),d.state=function(){return r(l,{})}),d}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.xor128=i})(As,n,!1)}(Sd);var Bv=Sd.exports,kd={exports:{}};kd.exports,function(n){(function(t,e,s){function o(a){var c=this,l="";c.next=function(){var d=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(d^d<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,a===(a|0)?c.x=a:l+=a;for(var u=0;u<l.length+64;u++)c.x^=l.charCodeAt(u)|0,u==l.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function r(a,c){return c.x=a.x,c.y=a.y,c.z=a.z,c.w=a.w,c.v=a.v,c.d=a.d,c}function i(a,c){var l=new o(a),u=c&&c.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var h=l.next()>>>11,p=(l.next()>>>0)/4294967296,f=(h+p)/(1<<21);while(f===0);return f},d.int32=l.next,d.quick=d,u&&(typeof u=="object"&&r(u,l),d.state=function(){return r(l,{})}),d}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.xorwow=i})(As,n,!1)}(kd);var Hv=kd.exports,Td={exports:{}};Td.exports,function(n){(function(t,e,s){function o(a){var c=this;c.next=function(){var u=c.x,d=c.i,h,p;return h=u[d],h^=h>>>7,p=h^h<<24,h=u[d+1&7],p^=h^h>>>10,h=u[d+3&7],p^=h^h>>>3,h=u[d+4&7],p^=h^h<<7,h=u[d+7&7],h=h^h<<13,p^=h^h<<9,u[d]=p,c.i=d+1&7,p};function l(u,d){var h,p=[];if(d===(d|0))p[0]=d;else for(d=""+d,h=0;h<d.length;++h)p[h&7]=p[h&7]<<15^d.charCodeAt(h)+p[h+1&7]<<13;for(;p.length<8;)p.push(0);for(h=0;h<8&&p[h]===0;++h);for(h==8?p[7]=-1:p[h],u.x=p,u.i=0,h=256;h>0;--h)u.next()}l(c,a)}function r(a,c){return c.x=a.x.slice(),c.i=a.i,c}function i(a,c){a==null&&(a=+new Date);var l=new o(a),u=c&&c.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var h=l.next()>>>11,p=(l.next()>>>0)/4294967296,f=(h+p)/(1<<21);while(f===0);return f},d.int32=l.next,d.quick=d,u&&(u.x&&r(u,l),d.state=function(){return r(l,{})}),d}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.xorshift7=i})(As,n,!1)}(Td);var _v=Td.exports,Nd={exports:{}};Nd.exports,function(n){(function(t,e,s){function o(a){var c=this;c.next=function(){var u=c.w,d=c.X,h=c.i,p,f;return c.w=u=u+1640531527|0,f=d[h+34&127],p=d[h=h+1&127],f^=f<<13,p^=p<<17,f^=f>>>15,p^=p>>>12,f=d[h]=f^p,c.i=h,f+(u^u>>>16)|0};function l(u,d){var h,p,f,m,g,b=[],x=128;for(d===(d|0)?(p=d,d=null):(d=d+"\0",p=0,x=Math.max(x,d.length)),f=0,m=-32;m<x;++m)d&&(p^=d.charCodeAt((m+32)%d.length)),m===0&&(g=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,m>=0&&(g=g+1640531527|0,h=b[m&127]^=p+g,f=h==0?f+1:0);for(f>=128&&(b[(d&&d.length||0)&127]=-1),f=127,m=4*128;m>0;--m)p=b[f+34&127],h=b[f=f+1&127],p^=p<<13,h^=h<<17,p^=p>>>15,h^=h>>>12,b[f]=p^h;u.w=g,u.X=b,u.i=f}l(c,a)}function r(a,c){return c.i=a.i,c.w=a.w,c.X=a.X.slice(),c}function i(a,c){a==null&&(a=+new Date);var l=new o(a),u=c&&c.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var h=l.next()>>>11,p=(l.next()>>>0)/4294967296,f=(h+p)/(1<<21);while(f===0);return f},d.int32=l.next,d.quick=d,u&&(u.X&&r(u,l),d.state=function(){return r(l,{})}),d}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.xor4096=i})(As,n,!1)}(Nd);var Uv=Nd.exports,Rd={exports:{}};Rd.exports,function(n){(function(t,e,s){function o(a){var c=this,l="";c.next=function(){var d=c.b,h=c.c,p=c.d,f=c.a;return d=d<<25^d>>>7^h,h=h-p|0,p=p<<24^p>>>8^f,f=f-d|0,c.b=d=d<<20^d>>>12^h,c.c=h=h-p|0,c.d=p<<16^h>>>16^f,c.a=f-d|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,a===Math.floor(a)?(c.a=a/4294967296|0,c.b=a|0):l+=a;for(var u=0;u<l.length+20;u++)c.b^=l.charCodeAt(u)|0,c.next()}function r(a,c){return c.a=a.a,c.b=a.b,c.c=a.c,c.d=a.d,c}function i(a,c){var l=new o(a),u=c&&c.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var h=l.next()>>>11,p=(l.next()>>>0)/4294967296,f=(h+p)/(1<<21);while(f===0);return f},d.int32=l.next,d.quick=d,u&&(typeof u=="object"&&r(u,l),d.state=function(){return r(l,{})}),d}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.tychei=i})(As,n,!1)}(Rd);var Yv=Rd.exports,Mm={exports:{}};const Qv=tC(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));(function(n){(function(t,e,s){var o=256,r=6,i=52,a="random",c=s.pow(o,r),l=s.pow(2,i),u=l*2,d=o-1,h;function p(y,C,w){var k=[];C=C==!0?{entropy:!0}:C||{};var S=b(g(C.entropy?[y,I(e)]:y??x(),3),k),T=new f(k),R=function(){for(var G=T.g(r),F=c,V=0;G<l;)G=(G+V)*o,F*=o,V=T.g(1);for(;G>=u;)G/=2,F/=2,V>>>=1;return(G+V)/F};return R.int32=function(){return T.g(4)|0},R.quick=function(){return T.g(4)/4294967296},R.double=R,b(I(T.S),e),(C.pass||w||function(G,F,V,z){return z&&(z.S&&m(z,T),G.state=function(){return m(T,{})}),V?(s[a]=G,F):G})(R,S,"global"in C?C.global:this==s,C.state)}function f(y){var C,w=y.length,k=this,S=0,T=k.i=k.j=0,R=k.S=[];for(w||(y=[w++]);S<o;)R[S]=S++;for(S=0;S<o;S++)R[S]=R[T=d&T+y[S%w]+(C=R[S])],R[T]=C;(k.g=function(G){for(var F,V=0,z=k.i,X=k.j,O=k.S;G--;)F=O[z=d&z+1],V=V*o+O[d&(O[z]=O[X=d&X+F])+(O[X]=F)];return k.i=z,k.j=X,V})(o)}function m(y,C){return C.i=y.i,C.j=y.j,C.S=y.S.slice(),C}function g(y,C){var w=[],k=typeof y,S;if(C&&k=="object")for(S in y)try{w.push(g(y[S],C-1))}catch{}return w.length?w:k=="string"?y:y+"\0"}function b(y,C){for(var w=y+"",k,S=0;S<w.length;)C[d&S]=d&(k^=C[d&S]*19)+w.charCodeAt(S++);return I(C)}function x(){try{var y;return h&&(y=h.randomBytes)?y=y(o):(y=new Uint8Array(o),(t.crypto||t.msCrypto).getRandomValues(y)),I(y)}catch{var C=t.navigator,w=C&&C.plugins;return[+new Date,t,w,t.screen,I(e)]}}function I(y){return String.fromCharCode.apply(0,y)}if(b(s.random(),e),n.exports){n.exports=p;try{h=Qv}catch{}}else s["seed"+a]=p})(typeof self<"u"?self:As,[],Math)})(Mm);var Jv=Mm.exports,jv=Zv,qv=Bv,tS=Hv,eS=_v,nS=Uv,sS=Yv,no=Jv;no.alea=jv,no.xor128=qv,no.xorwow=tS,no.xorshift7=eS,no.xor4096=nS,no.tychei=sS;var $d=no;/**
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
 */class Fm{constructor(t,e,s,o,r){this.mean=t,this.stdDev=e,this.dtype=s,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=r||Math.random();this.random=$d.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const o=this.nextVal;return this.nextVal=NaN,o}let t,e,s=!1;for(;!s;){let o,r,i;do o=2*this.random()-1,r=2*this.random()-1,i=o*o+r*r;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*o*a,e=this.mean+this.stdDev*r*a,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class oS{constructor(t=0,e=1,s,o){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=s,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=$d.alea(o)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
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
 */function rS(n,t=0,e=1,s,o){if(jn(n),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const r=new Fm(t,e,s,!1,o),i=Ct(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const iS=W({randomNormal_:rS});/**
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
 */function aS(n,t=0,e=1,s="float32",o){jn(n);const r=Ct(n,s),i=new oS(t,e,null,o);for(let a=0;a<r.values.length;a++)r.values[a]=i.nextValue();return r.toTensor()}const Lc=W({randomUniform_:aS});/**
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
 */function ki(n,t,e=1,s="float32"){if(e===0)throw new Error("Cannot have a step of zero");const o={start:n,stop:t,step:e,dtype:s};return L.runKernel(Ru,{},o)}/**
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
 */function cS(n){const e={input:N(n,"input","real")};return L.runKernel($u,e)}const Ec=W({real_:cS});/**
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
 */function lS(n){const e={x:N(n,"x","reciprocal")};return L.runKernel(Qr,e)}const uS=W({reciprocal_:lS});/**
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
 */function dS(n){const e={x:N(n,"x","relu")};return L.runKernel(Jr,e)}const so=W({relu_:dS});/**
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
 */function hS(n){const e={x:N(n,"x","relu6")};return L.runKernel(jr,e)}const Vm=W({relu6_:hS});/**
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
 */function pS(n,t){const s={x:N(n,"x","reverse")},o={dims:t};return L.runKernel(rc,s,o)}const oo=W({reverse_:pS});/**
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
 */function fS(n){const e={x:N(n,"x","round")};return L.runKernel(qr,e)}const zm=W({round_:fS});/**
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
 */function mS(n){const e={x:N(n,"x","rsqrt","float32")};return L.runKernel(ti,e)}const Xm=W({rsqrt_:mS});/**
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
 */function gS(n){const e={x:N(n,"x","selu")};return L.runKernel(ei,e)}const Am=W({selu_:gS});function bS(n,t,e,s,o,r=[1,1],i="NHWC"){const a=N(n,"x","separableConv2d"),c=N(t,"depthwiseFilter","separableConv2d"),l=N(e,"pointwiseFilter","separableConv2d");let u=a,d=!1;if(a.rank===3&&(d=!0,u=D(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");v(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),v(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),v(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),v(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),v(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);const h=c.shape[2],p=c.shape[3];v(l.shape[2]===h*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${h*p}, but got ${l.shape[2]}.`);const f=dd(u,c,s,o,i,r),g=qs(f,l,1,"valid",i);return d?D(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const Om=W({separableConv2d_:bS});/**
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
 */function xS(n){const e={x:N(n,"x","sign")};return L.runKernel(oi,e)}const yS=W({sign_:xS});/**
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
 */function IS(n){const e={x:N(n,"x","sin","float32")};return L.runKernel(ni,e)}const Pm=W({sin_:IS});/**
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
 */function CS(n){const e={x:N(n,"x","sinh")};return L.runKernel(si,e)}const Km=W({sinh_:CS});/**
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
 */function wS(n,t,e){const s=N(n,"x","slice1d");return v(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),Vt(s,[t],[e])}const Gd=W({slice1d_:wS});/**
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
 */function vS(n,t,e){const s=N(n,"x","slice2d");return v(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),Vt(s,t,e)}const Zm=W({slice2d_:vS});/**
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
 */function SS(n,t,e){const s=N(n,"x","slice3d");return v(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),Vt(s,t,e)}const Ld=W({slice3d_:SS});/**
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
 */function kS(n,t,e){const s=N(n,"x","slice4d");return v(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),Vt(s,t,e)}const Dc=W({slice4d_:kS});/**
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
 */function TS(n,t=-1){const e=N(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const s={logits:e},o={dim:t};return L.runKernel(dc,s,o)}const Ed=W({softmax_:TS});/**
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
 */function NS(n){v(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return L.runKernel(bu,t)}const Bm=W({fft_:NS});/**
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
 */function RS(n){v(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return L.runKernel(Iu,t)}const Dd=W({ifft_:RS});/**
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
 */function $S(n){const t=n.shape[n.shape.length-1],e=n.size/t;let s;if(t<=2){const o=D(n,[e,t]);s=Dd(o)}else{const o=[e,2*(t-1)],r=D(Ec(n),[e,t]),i=D(fd(n),[e,t]),a=oo(Vt(r,[0,1],[e,t-2]),1),c=E(oo(Vt(i,[0,1],[e,t-2]),1),Gt(-1)),l=Ve([r,a],1),u=Ve([i,c],1),d=D(Vo(l,u),[o[0],o[1]]);s=Dd(d)}if(s=Ec(s),n.rank===3&&n.shape[0]!==0){const o=s,r=n.shape[0];s=D(s,[r,s.shape[0]/r,s.shape[1]]),o.dispose()}return s}const GS=W({irfft_:$S});/**
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
 */function LS(n,t,e=0){const o={x:N(n,"x","split")},r={numOrSizeSplits:t,axis:e};return L.runKernel(uc,o,r)}const sn=W({split_:LS});/**
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
 */function ES(n,t){v(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const s=n.size/e;let o;if(t!=null&&t<e){const f=n.shape.map(g=>0),m=n.shape.map(g=>g);m[n.shape.length-1]=t,o=Vt(n,f,m),e=t}else if(t!=null&&t>e){const f=n.shape.map(m=>m);f[n.shape.length-1]=t-e,o=Ve([n,me(f)],n.shape.length-1),e=t}else o=n;const r=kt(o),i=D(Vo(o,r),[s,e]),a=Bm(i),c=Math.floor(e/2)+1,l=Ec(a),u=fd(a),d=sn(l,[c,e-c],l.shape.length-1),h=sn(u,[c,e-c],u.shape.length-1),p=o.shape.slice();return p[o.shape.length-1]=c,D(Vo(d[0],h[0]),p)}const DS=W({rfft_:ES});/**
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
 */function WS(n,t){let e=N(n,"a","squaredDifference"),s=N(t,"b","squaredDifference");[e,s]=qt(e,s),gt(e.shape,s.shape);const o={a:e,b:s},r={};return L.runKernel(ci,o,r)}const MS=W({squaredDifference_:WS});/**
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
 */function FS(n,t){const e=N(n,"x","squeeze","string_or_numeric");return D(e,ds(e.shape,t).newShape)}const Ti=W({squeeze_:FS});/**
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
 */function VS(n,t=0){const e=im(n,"tensors","stack","string_or_numeric");v(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&v(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const s=e,o={axis:t};return L.runKernel(ja,s,o)}const os=W({stack_:VS});/**
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
 */function zS(n,t=0){const s={x:N(n,"x","step")},o={alpha:t};return L.runKernel(pi,s,o)}const Ni=W({step_:zS});/**
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
 */function XS(n,t,e,s,o=0,r=0,i=0,a=0,c=0){const u={x:N(n,"x","stridedSlice","string_or_numeric")},d={begin:t,end:e,strides:s,beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:c};return L.runKernel(Du,u,d)}const AS=W({stridedSlice_:XS});/**
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
 */function OS(n){const e={x:N(n,"x","tan","float32")};return L.runKernel(ui,e)}const PS=W({tan_:OS});/**
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
 */function on(n,t){Kl(n);const e=bi(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return xi(n,null,e,t)}/**
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
 */function Wd(n,t,e){if(Kl(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=bi(n,e);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return xi(n,t,s,e)}/**
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
 */function KS(n,t,e){if(Kl(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const s=bi(n,e);if(s.length!==3&&s.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return xi(n,t,s,e)}/**
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
 */function ZS(n,t=1,e=!0){const s=N(n,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const o=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${t}`);const r={x:s},i={k:t,sorted:e},[a,c]=L.runKernel(Wu,r,i);return{values:a,indices:c}}const BS=W({topk_:ZS});/**
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
 */function HS(n,t=0,e=1,s,o){if(jn(n),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const r=new Fm(t,e,s,!0,o),i=Ct(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const Hm=W({truncatedNormal_:HS});/**
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
 */function _S(n,t=0){const e=N(n,"x","unique","string_or_numeric");v(e.rank>0,()=>"The input tensor must be at least 1D");const s={x:e},o={axis:t},[r,i]=L.runKernel(Fu,s,o);return{values:r,indices:i}}const US=W({unique_:_S});/**
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
 */function YS(n,t,e){const s=N(n,"x","unsortedSegmentSum"),o=N(t,"segmentIds","unsortedSegmentSum","int32");v(Ro(e),()=>"numSegments must be of dtype int");const r={x:s,segmentIds:o},i={numSegments:e};return L.runKernel(pc,r,i)}const _m=W({unsortedSegmentSum_:YS});/**
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
 */function QS(n,t=0){const e=N(n,"x","unstack","string_or_numeric");v(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const s={value:e},o={axis:t};return L.runKernel(hc,s,o)}const ro=W({unstack_:QS});/**
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
 */function JS(n,t=!0,e,s){return L.makeVariable(n,t,e,s)}/**
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
 */function Um(n,t){const e=[];for(let r=0;r<t.length;r++)t[r]&&e.push(r);const s=Ct(n,"int32"),o=Ct([e.length,n.length],"int32");for(let r=0;r<e.length;r++){const i=s.indexToLoc(e[r]),a=r*n.length;o.values.set(i,a)}return o.toTensor()}/**
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
 */function jS(n,t,e){const s=N(n,"x","transpose");if(t==null&&(t=s.shape.map((i,a)=>a).reverse()),v(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(i=>{v(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const o={x:s},r={perm:t};return s.dtype==="complex64"?M(()=>{let i=Ec(s),a=fd(s);return i=L.runKernel(Eo,{x:i},r),a=L.runKernel(Eo,{x:a},r),e&&(a=re(a)),Vo(i,a)}):L.runKernel(Eo,o,r)}const St=W({transpose_:jS});function Ym(n,t,e){const s=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,r=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${s}, and batchDim: ${o}.`;if(e.rank<o)throw new Error(r+` update.rank < ${o}. `);if(n.length<s+(e.rank-o))throw new Error(r+` Output shape length < ${s+(e.rank-o)}`);if(e.rank!==o+n.length-s)throw new Error(r+` update.rank != ${o+n.length-s}`);for(let i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(r+` updates.shape[${i}] (${e.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<e.rank-o;++i)if(e.shape[i+o]!==n[i+s])throw new Error(r+` updates.shape[${i+o}] (${e.shape[i+o]}) != shape[${i+o}] (${n[i+o]})`)}function qS(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}Ym(e,t,n)}function Ri(n,t,e){const s=t.shape.length,o=s>1?t.shape[s-1]:1,r=e.length;let i=1;for(let d=o;d<r;++d)i*=e[d];const a=o<1?1:o,c=Z(t.shape)/a,l=[...ct(e.slice(0,o)),1],u=Z(e);return{sliceRank:o,numUpdates:c,sliceSize:i,strides:l,outputSize:u}}/**
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
 */function tk(n,t){if(t==null)return n.shape.slice();if(Rt(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let s=0;s<n.shape.length;s++)t[s]==null&&n.shape[s]!=null?e.push(n.shape[s]):e.push(t[s]);return e}return t}/**
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
 */function ek(n,t,e,s){const o=N(n,"x","dropout");if(v(o.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`),v(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof se?o.clone():o;const r=tk(o,e),i=1-t,a=dt($c(Q(Lc(r,0,1,"float32",s),i)),i);return E(o,a)}const nk=W({dropout_:ek});/**
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
 */function sk(n,t,e,s,o,r="NHWC",i){let a=n;n.rank===3&&(a=D(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let c=t;c.rank===3&&(c=D(t,[1,t.shape[0],t.shape[1],t.shape[2]])),v(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),v(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),v(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const l=r==="NHWC"?a.shape[3]:a.shape[1],u=r==="NHWC"?c.shape[3]:c.shape[1];v(l===e[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${e[2]}.`),v(u===e[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${e[3]}).`),Fe("conv2dDerFilter",o,i);const d={x:a,dy:c},h={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,filterShape:e};return L.runKernel(ru,d,h)}const Md=W({conv2DBackpropFilter_:sk});/**
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
 */function Fd(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return E(n,Ni(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function Vd(n,t){let e=t;const s=ce(n.shape,t.shape);return s.length>0&&(e=ut(e,s)),D(e,n.shape)}function zd(n,t,e,s){if(t==="linear")return n;if(t==="relu")return so(n);if(t==="elu")return Tc(n);if(t==="relu6")return Vm(n);if(t==="prelu")return wd(n,e);if(t==="leakyrelu")return md(n,s);if(t==="sigmoid")return Ao(n);throw new Error(`Unknown fused activation ${t}.`)}const Xd=(n,t)=>!(n>0)||t==="linear";/**
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
 */function ok({x:n,filter:t,strides:e,pad:s,dataFormat:o="NHWC",dilations:r=[1,1],dimRoundingMode:i,bias:a,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:u}){if(c=c||"linear",Xd(L.state.gradientDepth,c)===!1){v(o==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let w=qs(n,t,e,s,o,r,i);return a!=null&&(w=Q(w,a)),zd(w,c,l,u)}const d=N(n,"x","conv2d","float32"),h=N(t,"filter","conv2d","float32");let p=d,f=!1;d.rank===3&&(f=!0,p=D(d,[1,d.shape[0],d.shape[1],d.shape[2]])),v(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),v(h.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${h.rank}.`),Fe("fused conv2d",s,i);const m=o==="NHWC"?p.shape[3]:p.shape[1];v(h.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${h.shape[2]}.`),v(Te(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`);const g=ye(p.shape,h.shape,e,r,s,i);let b;a!=null&&(b=N(a,"bias","fused conv2d"),[b]=qt(b,d),o==="NHWC"?gt(g.outShape,b.shape):(v(b.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${b.shape.length}.`),v(b.shape.length===0||b.shape[0]===g.outChannels||b.shape[0]===1,()=>`Error in fused conv2d: bias shape (${b.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let x;if(l!=null){const w=l.shape;if(v(w.length<=1||w.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${w.length}.`),w.length===1)v(w[0]===1||w[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${w}) is not compatible with the number of output channels (${g.outChannels}).`);else if(w.length===3)try{gt(w,g.outShape)}catch{const S=`Error in fused conv2d: PReLU activation weights (${w}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(S)}x=N(l,"prelu weights","fused conv2d")}const I=(w,k)=>{v(o==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`);const[S,T,R,G]=k,F=Fd(w,R,c);v(Js(r),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);const V=cd(T.shape,F,S,e,s),z=Md(T,F,S.shape,e,s),X=[V,z];if(G!=null){const O=Vd(G,F);X.push(O)}return X},y={x:p,filter:h,bias:b,preluActivationWeights:x},C={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i,activation:c,leakyreluAlpha:u};return a==null?Zo((k,S,T)=>{let R=L.runKernel(gc,y,C);return T([S,k,R]),f&&(R=D(R,[R.shape[1],R.shape[2],R.shape[3]])),{value:R,gradFunc:I}})(p,h):Zo((k,S,T,R)=>{let G=L.runKernel(gc,y,C);return R([S,k,G,T]),f&&(G=D(G,[G.shape[1],G.shape[2],G.shape[3]])),{value:G,gradFunc:I}})(p,h,b)}const rk=W({fusedConv2d_:ok});/**
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
 */function ik(n,t,e,s,o,r=[1,1],i){let a=n;n.rank===3&&(a=D(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let c=t;c.rank===3&&(c=D(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={x:a,dy:c},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,filterShape:e};return L.runKernel(hu,l,u)}const ak=W({depthwiseConv2dNativeBackpropFilter_:ik});/**
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
 */function ck(n,t,e,s,o,r=[1,1],i){let a=t,c=!1;t.rank===3&&(c=!0,a=D(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={dy:a,filter:e},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,inputShape:n},d=L.runKernel(pu,l,u);return c?D(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const lk=W({depthwiseConv2dNativeBackpropInput_:ck});/**
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
 */function uk({a:n,b:t,transposeA:e=!1,transposeB:s=!1,bias:o,activation:r="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(Xd(L.state.gradientDepth,r)===!1){let G=$t(n,t,e,s);return o!=null&&(G=Q(G,o)),zd(G,r,i,a)}let c=N(n,"a","fused matMul"),l=N(t,"b","fused matMul");[c,l]=qt(c,l);const u=e?c.shape[c.rank-2]:c.shape[c.rank-1],d=s?l.shape[l.rank-1]:l.shape[l.rank-2],h=e?c.shape[c.rank-1]:c.shape[c.rank-2],p=s?l.shape[l.rank-2]:l.shape[l.rank-1],f=c.shape.slice(0,-2),m=l.shape.slice(0,-2),g=Z(f),b=Z(m);v(u===d,()=>`Error in fused matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${e} and transposeB=${s} must match.`);const I=gt(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([h,p]),y=e?D(c,[g,u,h]):D(c,[g,h,u]),C=s?D(l,[b,p,d]):D(l,[b,d,p]);let w;o!=null&&(w=N(o,"bias","fused matMul"),[w]=qt(w,c),gt(I,w.shape));let k;i!=null&&(k=N(i,"prelu weights","fused matMul"));const S=(G,F)=>{const[V,z,X,O]=F,B=Fd(D(G,X.shape),X,r);let K,H;if(!e&&!s?(K=$t(B,z,!1,!0),H=$t(V,B,!0,!1)):!e&&s?(K=$t(B,z,!1,!1),H=$t(B,V,!0,!1)):e&&!s?(K=$t(z,B,!1,!0),H=$t(V,B,!1,!1)):(K=$t(z,B,!0,!0),H=$t(B,V,!0,!0)),o!=null){const U=Vd(O,B);return[K,H,U]}else return[K,H]},T={a:y,b:C,bias:w,preluActivationWeights:k},R={transposeA:e,transposeB:s,activation:r,leakyreluAlpha:a};return o==null?Zo((F,V,z)=>{const X=L.runKernel(mc,T,R);return z([F,V,X]),{value:D(X,I),gradFunc:S}})(y,C):Zo((F,V,z,X)=>{const O=L.runKernel(mc,T,R);return X([F,V,O,z]),{value:D(O,I),gradFunc:S}})(y,C,w)}const Qm=W({fusedMatMul_:uk});/**
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
 */function dk(n,t,e,s,o="bilinear",r=0){const i=N(n,"image","cropAndResize"),a=N(t,"boxes","cropAndResize","float32"),c=N(e,"boxInd","cropAndResize","int32"),l=a.shape[0];v(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),v(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${a.shape}.`),v(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${a.shape}.`),v(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),v(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),v(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);const u={image:i,boxes:a,boxInd:c},d={method:o,extrapolationValue:r,cropSize:s};return L.runKernel(lu,u,d)}const hk=W({cropAndResize_:dk});/**
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
 */function pk(n){const t=N(n,"image","flipLeftRight","float32");v(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return L.runKernel(yu,e,{})}const fk=W({flipLeftRight_:pk});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function mk(n){const t=N(n,"image","grayscaleToRGB"),e=t.rank-1,s=t.shape[e];v(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),v(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const o=new Array(t.rank);return o.fill(1,0,e),o[e]=3,Nn(t,o)}const gk=W({grayscaleToRGB_:mk});/**
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
 */function bk(n,t,e=0,s=.5){const o=N(n,"image","rotateWithOffset","float32");v(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);const r={image:o},i={radians:t,fillValue:e,center:s};return L.runKernel(zu,r,i)}const xk=W({rotateWithOffset_:bk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licen