
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Module) {
  Module = Module || {};


var e;e||(e=typeof Module !== 'undefined' ? Module : {});var ba;e.ready=new Promise(function(a){ba=a});var ca={},t;for(t in e)e.hasOwnProperty(t)&&(ca[t]=e[t]);var da=!1,y=!1,ea=!1,fa=!1;da="object"===typeof window;y="function"===typeof importScripts;ea="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;fa=!da&&!ea&&!y;var z="",ha,ia,ja,ka;
if(ea)z=y?require("path").dirname(z)+"/":__dirname+"/",ha=function(a,b){ja||(ja=require("fs"));ka||(ka=require("path"));a=ka.normalize(a);return ja.readFileSync(a,b?null:"utf8")},ia=function(a){a=ha(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",A),e.inspect=function(){return"[Emscripten Module object]"};else if(fa)"undefined"!=
typeof read&&(ha=function(a){return read(a)}),ia=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(da||y)y?z=self.location.href:document.currentScript&&(z=document.currentScript.src),_scriptDir&&(z=_scriptDir),0!==z.indexOf("blob:")?z=z.substr(0,
z.lastIndexOf("/")+1):z="",ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},y&&(ia=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var la=e.print||console.log.bind(console),B=e.printErr||console.warn.bind(console);for(t in ca)ca.hasOwnProperty(t)&&(e[t]=ca[t]);ca=null;var ma;e.wasmBinary&&(ma=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);
"object"!==typeof WebAssembly&&B("no native wasm support detected");var na,oa=new WebAssembly.Table({initial:120,maximum:120,element:"anyfunc"}),pa=!1;function assert(a,b){a||A("Assertion failed: "+b)}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=D;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var n=a.charCodeAt(++f);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function ta(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&ua[c];)++c;c<<=1;if(32<c-a&&sa)return sa.decode(D.subarray(a,c));c=0;for(d="";;){var f=E[a+2*c>>1];if(0==f||c==b/2)return d;++c;d+=String.fromCharCode(f)}}function va(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)E[b>>1]=a.charCodeAt(f),b+=2;E[b>>1]=0;return b-d}function wa(a){return 2*a.length}
function xa(a,b){for(var c=0,d="";!(c>=b/4);){var f=F[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function ya(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var n=a.charCodeAt(++f);g=65536+((g&1023)<<10)|n&1023}F[b>>2]=g;b+=4;if(b+4>c)break}F[b>>2]=0;return b-d}
function za(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var Aa,Ba,D,E,ua,F,G,Ca,Da,Ea=e.INITIAL_MEMORY||16777216;e.wasmMemory?na=e.wasmMemory:na=new WebAssembly.Memory({initial:Ea/65536,maximum:Ea/65536});na&&(Aa=na.buffer);Ea=Aa.byteLength;var H=Aa;Aa=H;e.HEAP8=Ba=new Int8Array(H);e.HEAP16=E=new Int16Array(H);e.HEAP32=F=new Int32Array(H);e.HEAPU8=D=new Uint8Array(H);e.HEAPU16=ua=new Uint16Array(H);e.HEAPU32=G=new Uint32Array(H);e.HEAPF32=Ca=new Float32Array(H);
e.HEAPF64=Da=new Float64Array(H);F[2172]=5251728;function Fa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.sa;"number"===typeof c?void 0===b.ha?e.dynCall_v(c):e.dynCall_vi(c,b.ha):c(void 0===b.ha?null:b.ha)}}}var Ga=[],Ha=[],Ia=[],Ja=[];function Ka(){var a=e.preRun.shift();Ga.unshift(a)}var I=0,La=null,Ma=null;e.preloadedImages={};e.preloadedAudios={};
function A(a){if(e.onAbort)e.onAbort(a);la(a);B(a);pa=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Na(a){var b=J;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Oa(){return Na("data:application/octet-stream;base64,")}var J="chess-wasm.wasm";if(!Oa()){var Pa=J;J=e.locateFile?e.locateFile(Pa,z):z+Pa}
function Qa(){try{if(ma)return new Uint8Array(ma);if(ia)return ia(J);throw"both async and sync fetching of the wasm failed";}catch(a){A(a)}}function Ra(){return ma||!da&&!y||"function"!==typeof fetch||Na("file://")?new Promise(function(a){a(Qa())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Qa()})}Ha.push({sa:function(){Sa()}});function Ta(){return 0<Ta.la}var Ua={};
function Va(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Wa(a){return this.fromWireType(G[a>>2])}var K={},L={},Xa={};function Ya(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Za(a,b){a=Ya(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function $a(a){var b=Error,c=Za(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var ab=void 0;function bb(a){throw new ab(a);}
function M(a,b,c){function d(k){k=c(k);k.length!==a.length&&bb("Mismatched type converter count");for(var l=0;l<a.length;++l)N(a[l],k[l])}a.forEach(function(k){Xa[k]=b});var f=Array(b.length),g=[],n=0;b.forEach(function(k,l){L.hasOwnProperty(k)?f[l]=L[k]:(g.push(k),K.hasOwnProperty(k)||(K[k]=[]),K[k].push(function(){f[l]=L[k];++n;n===g.length&&d(f)}))});0===g.length&&d(f)}
function cb(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var db=void 0;function O(a){for(var b="";D[a];)b+=db[D[a++]];return b}var P=void 0;function S(a){throw new P(a);}
function N(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||S('type "'+d+'" must have a positive integer typeid pointer');if(L.hasOwnProperty(a)){if(c.ya)return;S("Cannot register type '"+d+"' twice")}L[a]=b;delete Xa[a];K.hasOwnProperty(a)&&(b=K[a],delete K[a],b.forEach(function(f){f()}))}function eb(a){return{count:a.count,$:a.$,ba:a.ba,R:a.R,S:a.S,T:a.T,U:a.U}}
function fb(a){S(a.O.S.P.name+" instance already deleted")}var gb=!1;function hb(){}function ib(a){--a.count.value;0===a.count.value&&(a.T?a.U.Y(a.T):a.S.P.Y(a.R))}function jb(a){if("undefined"===typeof FinalizationGroup)return jb=function(b){return b},a;gb=new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.R?ib(c):console.warn("object already deleted: "+c.R)});jb=function(b){gb.register(b,b.O,b.O);return b};hb=function(b){gb.unregister(b.O)};return jb(a)}
var kb=void 0,lb=[];function mb(){for(;lb.length;){var a=lb.pop();a.O.$=!1;a["delete"]()}}function T(){}var nb={};function ob(a,b,c){if(void 0===a[b].X){var d=a[b];a[b]=function(){a[b].X.hasOwnProperty(arguments.length)||S("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].X+")!");return a[b].X[arguments.length].apply(this,arguments)};a[b].X=[];a[b].X[d.ea]=d}}
function pb(a,b){e.hasOwnProperty(a)?(S("Cannot register public name '"+a+"' twice"),ob(e,a,a),e.hasOwnProperty(void 0)&&S("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),e[a].X[void 0]=b):e[a]=b}function qb(a,b,c,d,f,g,n,k){this.name=a;this.constructor=b;this.aa=c;this.Y=d;this.V=f;this.ta=g;this.da=n;this.qa=k;this.Aa=[]}
function rb(a,b,c){for(;b!==c;)b.da||S("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.da(a),b=b.V;return a}function sb(a,b){if(null===b)return this.ia&&S("null is not a valid "+this.name),0;b.O||S('Cannot pass "'+U(b)+'" as a '+this.name);b.O.R||S("Cannot pass deleted object as a pointer of type "+this.name);return rb(b.O.R,b.O.S.P,this.P)}
function vb(a,b){if(null===b){this.ia&&S("null is not a valid "+this.name);if(this.ga){var c=this.ja();null!==a&&a.push(this.Y,c);return c}return 0}b.O||S('Cannot pass "'+U(b)+'" as a '+this.name);b.O.R||S("Cannot pass deleted object as a pointer of type "+this.name);!this.fa&&b.O.S.fa&&S("Cannot convert argument of type "+(b.O.U?b.O.U.name:b.O.S.name)+" to parameter type "+this.name);c=rb(b.O.R,b.O.S.P,this.P);if(this.ga)switch(void 0===b.O.T&&S("Passing raw pointer to smart pointer is illegal"),
this.Fa){case 0:b.O.U===this?c=b.O.T:S("Cannot convert argument of type "+(b.O.U?b.O.U.name:b.O.S.name)+" to parameter type "+this.name);break;case 1:c=b.O.T;break;case 2:if(b.O.U===this)c=b.O.T;else{var d=b.clone();c=this.Ba(c,wb(function(){d["delete"]()}));null!==a&&a.push(this.Y,c)}break;default:S("Unsupporting sharing policy")}return c}
function xb(a,b){if(null===b)return this.ia&&S("null is not a valid "+this.name),0;b.O||S('Cannot pass "'+U(b)+'" as a '+this.name);b.O.R||S("Cannot pass deleted object as a pointer of type "+this.name);b.O.S.fa&&S("Cannot convert argument of type "+b.O.S.name+" to parameter type "+this.name);return rb(b.O.R,b.O.S.P,this.P)}function yb(a,b,c){if(b===c)return a;if(void 0===c.V)return null;a=yb(a,b,c.V);return null===a?null:c.qa(a)}var zb={};
function Ab(a,b){for(void 0===b&&S("ptr should not be undefined");a.V;)b=a.da(b),a=a.V;return zb[b]}function Bb(a,b){b.S&&b.R||bb("makeClassHandle requires ptr and ptrType");!!b.U!==!!b.T&&bb("Both smartPtrType and smartPtr must be specified");b.count={value:1};return jb(Object.create(a,{O:{value:b}}))}function V(a,b,c,d){this.name=a;this.P=b;this.ia=c;this.fa=d;this.ga=!1;this.Y=this.Ba=this.ja=this.oa=this.Fa=this.za=void 0;void 0!==b.V?this.toWireType=vb:(this.toWireType=d?sb:xb,this.W=null)}
function Cb(a,b){e.hasOwnProperty(a)||bb("Replacing nonexistant public symbol");e[a]=b;e[a].ea=void 0}function W(a,b){a=O(a);var c=e["dynCall_"+a];for(var d=[],f=1;f<a.length;++f)d.push("a"+f);f="return function dynCall_"+(a+"_"+b)+"("+d.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(d.length?", ":"")+d.join(", ")+");\n";c=(new Function("dynCall","rawFunction",f+"};\n"))(c,b);"function"!==typeof c&&S("unknown function pointer with signature "+a+": "+b);return c}var Db=void 0;
function Eb(a){a=Fb(a);var b=O(a);X(a);return b}function Gb(a,b){function c(g){f[g]||L[g]||(Xa[g]?Xa[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new Db(a+": "+d.map(Eb).join([", "]));}function Hb(a,b){for(var c=[],d=0;d<a;d++)c.push(F[(b>>2)+d]);return c}
function Ib(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Za(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}var Jb=[],Y=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Kb(a){4<a&&0===--Y[a].ka&&(Y[a]=void 0,Jb.push(a))}
function wb(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Jb.length?Jb.pop():Y.length;Y[b]={ka:1,value:a};return b}}function U(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Lb(a,b){switch(b){case 2:return function(c){return this.fromWireType(Ca[c>>2])};case 3:return function(c){return this.fromWireType(Da[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Mb(a,b,c){switch(b){case 0:return c?function(d){return Ba[d]}:function(d){return D[d]};case 1:return c?function(d){return E[d>>1]}:function(d){return ua[d>>1]};case 2:return c?function(d){return F[d>>2]}:function(d){return G[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}ab=e.InternalError=$a("InternalError");for(var Nb=Array(256),Ob=0;256>Ob;++Ob)Nb[Ob]=String.fromCharCode(Ob);db=Nb;P=e.BindingError=$a("BindingError");
T.prototype.isAliasOf=function(a){if(!(this instanceof T&&a instanceof T))return!1;var b=this.O.S.P,c=this.O.R,d=a.O.S.P;for(a=a.O.R;b.V;)c=b.da(c),b=b.V;for(;d.V;)a=d.da(a),d=d.V;return b===d&&c===a};T.prototype.clone=function(){this.O.R||fb(this);if(this.O.ba)return this.O.count.value+=1,this;var a=jb(Object.create(Object.getPrototypeOf(this),{O:{value:eb(this.O)}}));a.O.count.value+=1;a.O.$=!1;return a};
T.prototype["delete"]=function(){this.O.R||fb(this);this.O.$&&!this.O.ba&&S("Object already scheduled for deletion");hb(this);ib(this.O);this.O.ba||(this.O.T=void 0,this.O.R=void 0)};T.prototype.isDeleted=function(){return!this.O.R};T.prototype.deleteLater=function(){this.O.R||fb(this);this.O.$&&!this.O.ba&&S("Object already scheduled for deletion");lb.push(this);1===lb.length&&kb&&kb(mb);this.O.$=!0;return this};V.prototype.ua=function(a){this.oa&&(a=this.oa(a));return a};
V.prototype.ma=function(a){this.Y&&this.Y(a)};V.prototype.argPackAdvance=8;V.prototype.readValueFromPointer=Wa;V.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
V.prototype.fromWireType=function(a){function b(){return this.ga?Bb(this.P.aa,{S:this.za,R:c,U:this,T:a}):Bb(this.P.aa,{S:this,R:a})}var c=this.ua(a);if(!c)return this.ma(a),null;var d=Ab(this.P,c);if(void 0!==d){if(0===d.O.count.value)return d.O.R=c,d.O.T=a,d.clone();d=d.clone();this.ma(a);return d}d=this.P.ta(c);d=nb[d];if(!d)return b.call(this);d=this.fa?d.pa:d.pointerType;var f=yb(c,this.P,d.P);return null===f?b.call(this):this.ga?Bb(d.P.aa,{S:d,R:f,U:this,T:a}):Bb(d.P.aa,{S:d,R:f})};
e.getInheritedInstanceCount=function(){return Object.keys(zb).length};e.getLiveInheritedInstances=function(){var a=[],b;for(b in zb)zb.hasOwnProperty(b)&&a.push(zb[b]);return a};e.flushPendingDeletes=mb;e.setDelayFunction=function(a){kb=a;lb.length&&kb&&kb(mb)};Db=e.UnboundTypeError=$a("UnboundTypeError");e.count_emval_handles=function(){for(var a=0,b=5;b<Y.length;++b)void 0!==Y[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<Y.length;++a)if(void 0!==Y[a])return Y[a];return null};
var Qb={o:function(a){return Pb(a)},n:function(a){"uncaught_exception"in Ta?Ta.la++:Ta.la=1;throw a;},r:function(a){var b=Ua[a];delete Ua[a];var c=b.ja,d=b.Y,f=b.na,g=f.map(function(n){return n.xa}).concat(f.map(function(n){return n.Da}));M([a],g,function(n){var k={};f.forEach(function(l,h){var m=n[h],p=l.va,u=l.wa,w=n[h+f.length],q=l.Ca,x=l.Ea;k[l.ra]={read:function(r){return m.fromWireType(p(u,r))},write:function(r,C){var v=[];q(x,r,w.toWireType(v,C));Va(v)}}});return[{name:b.name,fromWireType:function(l){var h=
{},m;for(m in k)h[m]=k[m].read(l);d(l);return h},toWireType:function(l,h){for(var m in k)if(!(m in h))throw new TypeError('Missing field:  "'+m+'"');var p=c();for(m in k)k[m].write(p,h[m]);null!==l&&l.push(d,p);return p},argPackAdvance:8,readValueFromPointer:Wa,W:d}]})},t:function(a,b,c,d,f){var g=cb(c);b=O(b);N(a,{name:b,fromWireType:function(n){return!!n},toWireType:function(n,k){return k?d:f},argPackAdvance:8,readValueFromPointer:function(n){if(1===c)var k=Ba;else if(2===c)k=E;else if(4===c)k=
F;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[n>>g])},W:null})},g:function(a,b,c,d,f,g,n,k,l,h,m,p,u){m=O(m);g=W(f,g);k&&(k=W(n,k));h&&(h=W(l,h));u=W(p,u);var w=Ya(m);pb(w,function(){Gb("Cannot construct "+m+" due to unbound types",[d])});M([a,b,c],d?[d]:[],function(q){q=q[0];if(d){var x=q.P;var r=x.aa}else r=T.prototype;q=Za(w,function(){if(Object.getPrototypeOf(this)!==C)throw new P("Use 'new' to construct "+m);if(void 0===v.Z)throw new P(m+" has no accessible constructor");
var Q=v.Z[arguments.length];if(void 0===Q)throw new P("Tried to invoke ctor of "+m+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(v.Z).toString()+") parameters instead!");return Q.apply(this,arguments)});var C=Object.create(r,{constructor:{value:q}});q.prototype=C;var v=new qb(m,q,C,u,x,g,k,h);x=new V(m,v,!0,!1);r=new V(m+"*",v,!1,!1);var Z=new V(m+" const*",v,!1,!0);nb[a]={pointerType:r,pa:Z};Cb(w,q);return[x,r,Z]})},f:function(a,b,c,d,f,g){assert(0<b);var n=
Hb(b,c);f=W(d,f);var k=[g],l=[];M([],[a],function(h){h=h[0];var m="constructor "+h.name;void 0===h.P.Z&&(h.P.Z=[]);if(void 0!==h.P.Z[b-1])throw new P("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+h.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");h.P.Z[b-1]=function(){Gb("Cannot construct "+h.name+" due to unbound types",n)};M([],n,function(p){h.P.Z[b-1]=function(){arguments.length!==b-
1&&S(m+" called with "+arguments.length+" arguments, expected "+(b-1));l.length=0;k.length=b;for(var u=1;u<b;++u)k[u]=p[u].toWireType(l,arguments[u-1]);u=f.apply(null,k);Va(l);return p[0].fromWireType(u)};return[]});return[]})},a:function(a,b,c,d,f,g,n,k){var l=Hb(c,d);b=O(b);g=W(f,g);M([],[a],function(h){function m(){Gb("Cannot call "+p+" due to unbound types",l)}h=h[0];var p=h.name+"."+b;k&&h.P.Aa.push(b);var u=h.P.aa,w=u[b];void 0===w||void 0===w.X&&w.className!==h.name&&w.ea===c-2?(m.ea=c-2,m.className=
h.name,u[b]=m):(ob(u,b,p),u[b].X[c-2]=m);M([],l,function(q){var x=p,r=h,C=g,v=q.length;2>v&&S("argTypes array size mismatch! Must at least get return value and 'this' types!");var Z=null!==q[1]&&null!==r,Q=!1;for(r=1;r<q.length;++r)if(null!==q[r]&&void 0===q[r].W){Q=!0;break}var tb="void"!==q[0].name,R="",aa="";for(r=0;r<v-2;++r)R+=(0!==r?", ":"")+"arg"+r,aa+=(0!==r?", ":"")+"arg"+r+"Wired";x="return function "+Ya(x)+"("+R+") {\nif (arguments.length !== "+(v-2)+") {\nthrowBindingError('function "+
x+" called with ' + arguments.length + ' arguments, expected "+(v-2)+" args!');\n}\n";Q&&(x+="var destructors = [];\n");var ub=Q?"destructors":"null";R="throwBindingError invoker fn runDestructors retType classParam".split(" ");C=[S,C,n,Va,q[0],q[1]];Z&&(x+="var thisWired = classParam.toWireType("+ub+", this);\n");for(r=0;r<v-2;++r)x+="var arg"+r+"Wired = argType"+r+".toWireType("+ub+", arg"+r+"); // "+q[r+2].name+"\n",R.push("argType"+r),C.push(q[r+2]);Z&&(aa="thisWired"+(0<aa.length?", ":"")+aa);
x+=(tb?"var rv = ":"")+"invoker(fn"+(0<aa.length?", ":"")+aa+");\n";if(Q)x+="runDestructors(destructors);\n";else for(r=Z?1:2;r<q.length;++r)v=1===r?"thisWired":"arg"+(r-2)+"Wired",null!==q[r].W&&(x+=v+"_dtor("+v+"); // "+q[r].name+"\n",R.push(v+"_dtor"),C.push(q[r].W));tb&&(x+="var ret = retType.fromWireType(rv);\nreturn ret;\n");R.push(x+"}\n");q=Ib(R).apply(null,C);void 0===u[b].X?(q.ea=c-2,u[b]=q):u[b].X[c-2]=q;return[]});return[]})},s:function(a,b){b=O(b);N(a,{name:b,fromWireType:function(c){var d=
Y[c].value;Kb(c);return d},toWireType:function(c,d){return wb(d)},argPackAdvance:8,readValueFromPointer:Wa,W:null})},k:function(a,b,c){c=cb(c);b=O(b);N(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+U(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Lb(b,c),W:null})},c:function(a,b,c,d,f){function g(h){return h}b=O(b);-1===f&&(f=4294967295);var n=cb(c);if(0===d){var k=32-
8*c;g=function(h){return h<<k>>>k}}var l=-1!=b.indexOf("unsigned");N(a,{name:b,fromWireType:g,toWireType:function(h,m){if("number"!==typeof m&&"boolean"!==typeof m)throw new TypeError('Cannot convert "'+U(m)+'" to '+this.name);if(m<d||m>f)throw new TypeError('Passing a number "'+U(m)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return l?m>>>0:m|0},argPackAdvance:8,readValueFromPointer:Mb(b,n,0!==d),W:null})},b:function(a,b,c){function d(g){g>>=
2;return new f(Aa,G[g+1],G[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=O(c);N(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ya:!0})},l:function(a,b){b=O(b);var c="std::string"===b;N(a,{name:b,fromWireType:function(d){var f=G[d>>2];if(c)for(var g=d+4,n=0;n<=f;++n){var k=d+4+n;if(0==D[k]||n==f){if(g){var l=g;var h=D,m=l+(k-g);for(g=l;h[g]&&!(g>=m);)++g;if(16<g-l&&h.subarray&&qa)l=qa.decode(h.subarray(l,g));else{for(m=
"";l<g;){var p=h[l++];if(p&128){var u=h[l++]&63;if(192==(p&224))m+=String.fromCharCode((p&31)<<6|u);else{var w=h[l++]&63;p=224==(p&240)?(p&15)<<12|u<<6|w:(p&7)<<18|u<<12|w<<6|h[l++]&63;65536>p?m+=String.fromCharCode(p):(p-=65536,m+=String.fromCharCode(55296|p>>10,56320|p&1023))}}else m+=String.fromCharCode(p)}l=m}}else l="";if(void 0===q)var q=l;else q+=String.fromCharCode(0),q+=l;g=k+1}}else{q=Array(f);for(n=0;n<f;++n)q[n]=String.fromCharCode(D[d+4+n]);q=q.join("")}X(d);return q},toWireType:function(d,
f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||S("Cannot pass non-string to std::string");var n=(c&&g?function(){for(var h=0,m=0;m<f.length;++m){var p=f.charCodeAt(m);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|f.charCodeAt(++m)&1023);127>=p?++h:h=2047>=p?h+2:65535>=p?h+3:h+4}return h}:function(){return f.length})(),k=Pb(4+n+1);G[k>>2]=n;if(c&&g)ra(f,k+4,n+1);else if(g)for(g=0;g<n;++g){var l=
f.charCodeAt(g);255<l&&(X(k),S("String has UTF-16 code units that do not fit in 8 bits"));D[k+4+g]=l}else for(g=0;g<n;++g)D[k+4+g]=f[g];null!==d&&d.push(X,k);return k},argPackAdvance:8,readValueFromPointer:Wa,W:function(d){X(d)}})},h:function(a,b,c){c=O(c);if(2===b){var d=ta;var f=va;var g=wa;var n=function(){return ua};var k=1}else 4===b&&(d=xa,f=ya,g=za,n=function(){return G},k=2);N(a,{name:c,fromWireType:function(l){for(var h=G[l>>2],m=n(),p,u=l+4,w=0;w<=h;++w){var q=l+4+w*b;if(0==m[q>>k]||w==
h)u=d(u,q-u),void 0===p?p=u:(p+=String.fromCharCode(0),p+=u),u=q+b}X(l);return p},toWireType:function(l,h){"string"!==typeof h&&S("Cannot pass non-string to C++ string type "+c);var m=g(h),p=Pb(4+m+b);G[p>>2]=m>>k;f(h,p+4,m+b);null!==l&&l.push(X,p);return p},argPackAdvance:8,readValueFromPointer:Wa,W:function(l){X(l)}})},v:function(a,b,c,d,f,g){Ua[a]={name:O(b),ja:W(c,d),Y:W(f,g),na:[]}},d:function(a,b,c,d,f,g,n,k,l,h){Ua[a].na.push({ra:O(b),xa:c,va:W(d,f),wa:g,Da:n,Ca:W(k,l),Ea:h})},u:function(a,
b){b=O(b);N(a,{Ga:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},m:Kb,i:function(a){4<a&&(Y[a].ka+=1)},e:function(a,b){var c=L[a];void 0===c&&S("_emval_take_value has unknown type "+Eb(a));a=c.readValueFromPointer(b);return wb(a)},j:function(){A()},p:function(a,b,c){D.copyWithin(a,b,b+c)},q:function(){A("OOM")},memory:na,table:oa};
(function(){function a(f){e.asm=f.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==La&&(clearInterval(La),La=null),Ma&&(f=Ma,Ma=null,f()))}function b(f){a(f.instance)}function c(f){return Ra().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){B("failed to asynchronously prepare wasm: "+g);A(g)})}var d={a:Qb};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return B("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(ma||"function"!==typeof WebAssembly.instantiateStreaming||Oa()||Na("file://")||"function"!==typeof fetch)return c(b);fetch(J,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){B("wasm streaming compile failed: "+g);B("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Sa=e.___wasm_call_ctors=function(){return(Sa=e.___wasm_call_ctors=e.asm.w).apply(null,arguments)},Pb=e._malloc=function(){return(Pb=e._malloc=e.asm.x).apply(null,arguments)},Fb=e.___getTypeName=function(){return(Fb=e.___getTypeName=e.asm.y).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.z).apply(null,arguments)};var X=e._free=function(){return(X=e._free=e.asm.A).apply(null,arguments)};
e.dynCall_i=function(){return(e.dynCall_i=e.asm.B).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.C).apply(null,arguments)};e.dynCall_iii=function(){return(e.dynCall_iii=e.asm.D).apply(null,arguments)};e.dynCall_viii=function(){return(e.dynCall_viii=e.asm.E).apply(null,arguments)};e.dynCall_ii=function(){return(e.dynCall_ii=e.asm.F).apply(null,arguments)};e.dynCall_iiii=function(){return(e.dynCall_iiii=e.asm.G).apply(null,arguments)};
e.dynCall_iiiii=function(){return(e.dynCall_iiiii=e.asm.H).apply(null,arguments)};e.dynCall_vii=function(){return(e.dynCall_vii=e.asm.I).apply(null,arguments)};e.dynCall_viiiii=function(){return(e.dynCall_viiiii=e.asm.J).apply(null,arguments)};e.dynCall_iiiiii=function(){return(e.dynCall_iiiiii=e.asm.K).apply(null,arguments)};e.dynCall_viiii=function(){return(e.dynCall_viiii=e.asm.L).apply(null,arguments)};e.dynCall_viiiiii=function(){return(e.dynCall_viiiiii=e.asm.M).apply(null,arguments)};
e.dynCall_iiiiiii=function(){return(e.dynCall_iiiiiii=e.asm.N).apply(null,arguments)};var Rb;Ma=function Sb(){Rb||Tb();Rb||(Ma=Sb)};
function Tb(){function a(){if(!Rb&&(Rb=!0,e.calledRun=!0,!pa)){Fa(Ha);Fa(Ia);ba(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Ja.unshift(b)}Fa(Ja)}}if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ka();Fa(Ga);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}
e.run=Tb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();noExitRuntime=!0;Tb();


  return Module.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = Module;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return Module; });
    else if (typeof exports === 'object')
      exports["Module"] = Module;
    