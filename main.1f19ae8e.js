parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aaNl":[function(require,module,exports) {

},{"./woff2/VictorMono-Regular.woff2":[["VictorMono-Regular.a87480ee.woff2","kMip"],"kMip"],"./woff/VictorMono-Regular.woff":[["VictorMono-Regular.0ae2414d.woff","ctdl"],"ctdl"],"./woff2/VictorMono-Italic.woff2":[["VictorMono-Italic.f7627f40.woff2","sTNh"],"sTNh"],"./woff/VictorMono-Italic.woff":[["VictorMono-Italic.3b26ad5f.woff","sal6"],"sal6"],"./woff2/VictorMono-Bold.woff2":[["VictorMono-Bold.6c55b34b.woff2","Pj6I"],"Pj6I"],"./woff/VictorMono-Bold.woff":[["VictorMono-Bold.492efce4.woff","6MPZ"],"6MPZ"],"./woff2/VictorMono-BoldItalic.woff2":[["VictorMono-BoldItalic.f40d7055.woff2","nwCQ"],"nwCQ"],"./woff/VictorMono-BoldItalic.woff":[["VictorMono-BoldItalic.392fa2b5.woff","m6V1"],"m6V1"]}],"ENeC":[function(require,module,exports) {
!function(n){"use strict";function r(n,r,e){return e.a=n,e.f=r,e}function e(n){return r(2,n,function(r){return function(e){return n(r,e)}})}function t(n){return r(3,n,function(r){return function(e){return function(t){return n(r,e,t)}}})}function u(n){return r(4,n,function(r){return function(e){return function(t){return function(u){return n(r,e,t,u)}}}})}function i(n){return r(5,n,function(r){return function(e){return function(t){return function(u){return function(i){return n(r,e,t,u,i)}}}}})}function a(n){return r(6,n,function(r){return function(e){return function(t){return function(u){return function(i){return function(a){return n(r,e,t,u,i,a)}}}}}})}function o(n,r,e){return 2===n.a?n.f(r,e):n(r)(e)}function f(n,r,e,t){return 3===n.a?n.f(r,e,t):n(r)(e)(t)}function c(n,r,e,t,u){return 4===n.a?n.f(r,e,t,u):n(r)(e)(t)(u)}function s(n,r,e,t,u,i){return 5===n.a?n.f(r,e,t,u,i):n(r)(e)(t)(u)(i)}function v(n,r,e,t,u,i,a){return 6===n.a?n.f(r,e,t,u,i,a):n(r)(e)(t)(u)(i)(a)}function l(n,r){return{a:n,b:r}}function d(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var e=h(n.a,r);n=n.b;for(var t=e;n.b;n=n.b)t=t.b=h(n.a,r);return e}var b={$:0};function h(n,r){return{$:1,a:n,b:r}}var m=e(h);function g(n){for(var r=b,e=n.length;e--;)r=h(n[e],r);return r}var p=t(function(n,r,e){for(var t=[],u=0;n>u;u++)t[u]=e(r+u);return t}),y=e(function(n,r){for(var e=[],t=0;n>t&&r.b;t++)e[t]=r.a,r=r.b;return e.length=t,l(e,r)});function $(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var x=Math.ceil,w=Math.floor,A=Math.log,j=t(function(n,r,e){return e.slice(n,r)}),k=e(function(n,r){return r.indexOf(n)>-1}),L=e(function(n,r){return 0===r.indexOf(n)}),N=e(function(n,r){var e=n.length;if(1>e)return b;for(var t=0,u=[];(t=r.indexOf(n,t))>-1;)u.push(t),t+=e;return g(u)});function _(n){return{$:2,b:n}}_(function(n){return"number"!=typeof n?S("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?Pn(n):!isFinite(n)||n%1?S("an INT",n):Pn(n)}),_(function(n){return"boolean"==typeof n?Pn(n):S("a BOOL",n)}),_(function(n){return"number"==typeof n?Pn(n):S("a FLOAT",n)}),_(function(n){return Pn(B(n))}),_(function(n){return"string"==typeof n?Pn(n):n instanceof String?Pn(n+""):S("a STRING",n)});var E=e(function(n,r){return T(n,M(r))});function T(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Pn(n.c):S("null",r);case 3:return q(r)?C(n.b,r,g):S("a LIST",r);case 4:return q(r)?C(n.b,r,D):S("an ARRAY",r);case 6:var e=n.d;if("object"!=typeof r||null===r||!(e in r))return S("an OBJECT with a field named `"+e+"`",r);var t=T(n.b,r[e]);return cr(t)?t:Bn(o(On,e,t.a));case 7:var u=n.e;return q(r)?r.length>u?(t=T(n.b,r[u]),cr(t)?t:Bn(o(Fn,u,t.a))):S("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):S("an ARRAY",r);case 8:if("object"!=typeof r||null===r||q(r))return S("an OBJECT",r);var i=b;for(var a in r)if(r.hasOwnProperty(a)){if(t=T(n.b,r[a]),!cr(t))return Bn(o(On,a,t.a));i=h(l(a,t.a),i)}return Pn(Wn(i));case 9:for(var f=n.f,c=n.g,s=0;c.length>s;s++){if(t=T(c[s],r),!cr(t))return t;f=f(t.a)}return Pn(f);case 10:return t=T(n.b,r),cr(t)?T(n.h(t.a),r):t;case 11:for(var v=b,d=n.g;d.b;d=d.b){if(t=T(d.a,r),cr(t))return t;v=h(t.a,v)}return Bn(Gn(Wn(v)));case 1:return Bn(o(Mn,n.a,B(r)));case 0:return Pn(n.a)}}function C(n,r,e){for(var t=r.length,u=[],i=0;t>i;i++){var a=T(n,r[i]);if(!cr(a))return Bn(o(Fn,i,a.a));u[i]=a.a}return Pn(e(u))}function q(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function D(n){return o(fr,n.length,function(r){return n[r]})}function S(n,r){return Bn(o(Mn,"Expecting "+n,B(r)))}function I(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return I(n.b,r.b);case 6:return n.d===r.d&&I(n.b,r.b);case 7:return n.e===r.e&&I(n.b,r.b);case 9:return n.f===r.f&&z(n.g,r.g);case 10:return n.h===r.h&&I(n.b,r.b);case 11:return z(n.g,r.g)}}function z(n,r){var e=n.length;if(e!==r.length)return!1;for(var t=0;e>t;t++)if(!I(n[t],r[t]))return!1;return!0}function B(n){return n}function M(n){return n}function O(n){return{$:0,a:n}}function F(n){return{$:2,b:n,c:null}}B(null);var P=e(function(n,r){return{$:3,b:n,d:r}}),G=0;function H(n){var r={$:0,e:G++,f:n,g:null,h:[]};return W(r),r}var R=!1,V=[];function W(n){if(V.push(n),!R){for(R=!0;n=V.shift();)J(n);R=!1}}function J(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,W(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var U={};function K(n,r){var e={g:r,h:void 0},t=n.c,u=n.d,i=n.e,a=n.f;function s(n){return o(P,s,{$:5,b:function(r){var o=r.a;return 0===r.$?f(u,e,o,n):i&&a?c(t,e,o.i,o.j,n):f(t,e,i?o.i:o.j,n)}})}return e.h=H(o(P,s,n.b))}var Z,Q=e(function(n,r){return F(function(e){n.g(r),e(O(0))})});function Y(n){return{$:2,m:n}}function X(n,r,e){var t,u={};for(var i in nn(!0,r,u,null),nn(!1,e,u,null),n)(t=n[i]).h.push({$:"fx",a:u[i]||{i:b,j:b}}),W(t)}function nn(n,r,e,t){switch(r.$){case 1:var u=r.k,i=function(n,e,t){function u(n){for(var r=t;r;r=r.q)n=r.p(n);return n}return o(n?U[e].e:U[e].f,u,r.l)}(n,u,t);return void(e[u]=function(n,r,e){return e=e||{i:b,j:b},n?e.i=h(r,e.i):e.j=h(r,e.j),e}(n,i,e[u]));case 2:for(var a=r.m;a.b;a=a.b)nn(n,a.a,e,t);return;case 3:return void nn(n,r.o,e,{p:r.n,q:t})}}var rn="undefined"!=typeof document?document:{};function en(n,r){n.appendChild(r)}function tn(n){return{$:0,a:n}}var un=e(function(n,r){return e(function(e,t){for(var u=[],i=0;t.b;t=t.b){var a=t.a;i+=a.b||0,u.push(a)}return i+=u.length,{$:1,c:r,d:cn(e),e:u,f:n,b:i}})})(void 0);e(function(n,r){return e(function(e,t){for(var u=[],i=0;t.b;t=t.b){var a=t.a;i+=a.b.b||0,u.push(a)}return i+=u.length,{$:2,c:r,d:cn(e),e:u,f:n,b:i}})})(void 0);var an,on=e(function(n,r){return{$:"a2",n:n,o:r}}),fn=e(function(n,r){return{$:"a3",n:n,o:r}});function cn(n){for(var r={};n.b;n=n.b){var e=n.a,t=e.$,u=e.n,i=e.o;if("a2"!==t){var a=r[t]||(r[t]={});"a3"===t&&"class"===u?sn(a,u,i):a[u]=i}else"className"===u?sn(r,u,M(i)):r[u]=M(i)}return r}function sn(n,r,e){var t=n[r];n[r]=t?t+" "+e:e}function vn(n,r){var e=n.$;if(5===e)return vn(n.k||(n.k=n.m()),r);if(0===e)return rn.createTextNode(n.a);if(4===e){for(var t=n.k,u=n.j;4===t.$;)"object"!=typeof u?u=[u,t.j]:u.push(t.j),t=t.k;var i={j:u,p:r};return(a=vn(t,i)).elm_event_node_ref=i,a}if(3===e)return ln(a=n.h(n.g),r,n.d),a;var a=n.f?rn.createElementNS(n.f,n.c):rn.createElement(n.c);Z&&"a"==n.c&&a.addEventListener("click",Z(a)),ln(a,r,n.d);for(var o=n.e,f=0;o.length>f;f++)en(a,vn(1===e?o[f]:o[f].b,r));return a}function ln(n,r,e){for(var t in e){var u=e[t];"a1"===t?dn(n,u):"a0"===t?mn(n,r,u):"a3"===t?bn(n,u):"a4"===t?hn(n,u):("value"!==t&&"checked"!==t||n[t]!==u)&&(n[t]=u)}}function dn(n,r){var e=n.style;for(var t in r)e[t]=r[t]}function bn(n,r){for(var e in r){var t=r[e];void 0!==t?n.setAttribute(e,t):n.removeAttribute(e)}}function hn(n,r){for(var e in r){var t=r[e],u=t.f,i=t.o;void 0!==i?n.setAttributeNS(u,e,i):n.removeAttributeNS(u,e)}}function mn(n,r,e){var t=n.elmFs||(n.elmFs={});for(var u in e){var i=e[u],a=t[u];if(i){if(a){if(a.q.$===i.$){a.q=i;continue}n.removeEventListener(u,a)}a=gn(r,i),n.addEventListener(u,a,an&&{passive:2>sr(i)}),t[u]=a}else n.removeEventListener(u,a),t[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){an=!0}}))}catch(n){}function gn(n,r){function e(r){var t=e.q,u=T(t.a,r);if(cr(u)){for(var i,a=sr(t),o=u.a,f=a?3>a?o.a:o.n:o,c=1==a?o.b:3==a&&o.N,s=(c&&r.stopPropagation(),(2==a?o.b:3==a&&o.K)&&r.preventDefault(),n);i=s.j;){if("function"==typeof i)f=i(f);else for(var v=i.length;v--;)f=i[v](f);s=s.p}s(f,c)}}return e.q=r,e}function pn(n,r){return n.$==r.$&&I(n.a,r.a)}function yn(n,r,e,t){var u={$:r,r:e,s:t,t:void 0,u:void 0};return n.push(u),u}function $n(n,r,e,t){if(n!==r){var u=n.$,i=r.$;if(u!==i){if(1!==u||2!==i)return void yn(e,0,t,r);r=function(n){for(var r=n.e,e=r.length,t=[],u=0;e>u;u++)t[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:t,f:n.f,b:n.b}}(r),i=1}switch(i){case 5:for(var a=n.l,o=r.l,f=a.length,c=f===o.length;c&&f--;)c=a[f]===o[f];if(c)return void(r.k=n.k);r.k=r.m();var s=[];return $n(n.k,r.k,s,0),void(s.length>0&&yn(e,1,t,s));case 4:for(var v=n.j,l=r.j,d=!1,b=n.k;4===b.$;)d=!0,"object"!=typeof v?v=[v,b.j]:v.push(b.j),b=b.k;for(var h=r.k;4===h.$;)d=!0,"object"!=typeof l?l=[l,h.j]:l.push(h.j),h=h.k;return d&&v.length!==l.length?void yn(e,0,t,r):((d?function(n,r){for(var e=0;n.length>e;e++)if(n[e]!==r[e])return!1;return!0}(v,l):v===l)||yn(e,2,t,l),void $n(b,h,e,t+1));case 0:return void(n.a!==r.a&&yn(e,3,t,r.a));case 1:return void xn(n,r,e,t,An);case 2:return void xn(n,r,e,t,jn);case 3:if(n.h!==r.h)return void yn(e,0,t,r);var m=wn(n.d,r.d);m&&yn(e,4,t,m);var g=r.i(n.g,r.g);return void(g&&yn(e,5,t,g))}}}function xn(n,r,e,t,u){if(n.c===r.c&&n.f===r.f){var i=wn(n.d,r.d);i&&yn(e,4,t,i),u(n,r,e,t)}else yn(e,0,t,r)}function wn(n,r,e){var t;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var i=n[u],a=r[u];i===a&&"value"!==u&&"checked"!==u||"a0"===e&&pn(i,a)||((t=t||{})[u]=a)}else(t=t||{})[u]=e?"a1"===e?"":"a0"===e||"a3"===e?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var o=wn(n[u],r[u]||{},u);o&&((t=t||{})[u]=o)}for(var f in r)f in n||((t=t||{})[f]=r[f]);return t}function An(n,r,e,t){var u=n.e,i=r.e,a=u.length,o=i.length;a>o?yn(e,6,t,{v:o,i:a-o}):o>a&&yn(e,7,t,{v:a,e:i});for(var f=o>a?a:o,c=0;f>c;c++){var s=u[c];$n(s,i[c],e,++t),t+=s.b||0}}function jn(n,r,e,t){for(var u=[],i={},a=[],o=n.e,f=r.e,c=o.length,s=f.length,v=0,l=0,d=t;c>v&&s>l;){var b=(L=o[v]).a,h=(N=f[l]).a,m=L.b,g=N.b,p=void 0,y=void 0;if(b!==h){var $=o[v+1],x=f[l+1];if($){var w=$.a,A=$.b;y=h===w}if(x){var j=x.a,k=x.b;p=b===j}if(p&&y)$n(m,k,u,++d),Ln(i,u,b,g,l,a),d+=m.b||0,Nn(i,u,b,A,++d),d+=A.b||0,v+=2,l+=2;else if(p)d++,Ln(i,u,h,g,l,a),$n(m,k,u,d),d+=m.b||0,v+=1,l+=2;else if(y)Nn(i,u,b,m,++d),d+=m.b||0,$n(A,g,u,++d),d+=A.b||0,v+=2,l+=1;else{if(!$||w!==j)break;Nn(i,u,b,m,++d),Ln(i,u,h,g,l,a),d+=m.b||0,$n(A,k,u,++d),d+=A.b||0,v+=2,l+=2}}else $n(m,g,u,++d),d+=m.b||0,v++,l++}for(;c>v;){var L;Nn(i,u,(L=o[v]).a,m=L.b,++d),d+=m.b||0,v++}for(;s>l;){var N,_=_||[];Ln(i,u,(N=f[l]).a,N.b,void 0,_),l++}(u.length>0||a.length>0||_)&&yn(e,8,t,{w:u,x:a,y:_})}var kn="_elmW6BL";function Ln(n,r,e,t,u,i){var a=n[e];if(!a)return i.push({r:u,A:a={c:0,z:t,r:u,s:void 0}}),void(n[e]=a);if(1===a.c){i.push({r:u,A:a}),a.c=2;var o=[];return $n(a.z,t,o,a.r),a.r=u,void(a.s.s={w:o,A:a})}Ln(n,r,e+kn,t,u,i)}function Nn(n,r,e,t,u){var i=n[e];if(i){if(0===i.c){i.c=2;var a=[];return $n(t,i.z,a,u),void yn(r,9,u,{w:a,A:i})}Nn(n,r,e+kn,t,u)}else{var o=yn(r,9,u,void 0);n[e]={c:1,z:t,r:u,s:o}}}function _n(n,r,e,t){return 0===e.length?n:(function n(r,e,t,u){!function r(e,t,u,i,a,o,f){for(var c=u[i],s=c.r;s===a;){var v=c.$;if(1===v)n(e,t.k,c.s,f);else if(8===v)c.t=e,c.u=f,(l=c.s.w).length>0&&r(e,t,l,0,a,o,f);else if(9===v){c.t=e,c.u=f;var l,d=c.s;d&&(d.A.s=e,(l=d.w).length>0&&r(e,t,l,0,a,o,f))}else c.t=e,c.u=f;if(!(c=u[++i])||(s=c.r)>o)return i}var b=t.$;if(4===b){for(var h=t.k;4===h.$;)h=h.k;return r(e,h,u,i,a+1,o,e.elm_event_node_ref)}for(var m=t.e,g=e.childNodes,p=0;m.length>p;p++){var y=1===b?m[p]:m[p].b,$=++a+(y.b||0);if(!(a>s||s>$||(c=u[i=r(g[p],y,u,i,a,$,f)])&&(s=c.r)<=o))return i;a=$}return i}(r,e,t,0,0,e.b,u)}(n,r,e,t),En(n,e))}function En(n,r){for(var e=0;r.length>e;e++){var t=r[e],u=t.t,i=Tn(u,t);u===n&&(n=i)}return n}function Tn(n,r){switch(r.$){case 0:return function(n){var e=n.parentNode,t=vn(r.s,r.u);return t.elm_event_node_ref||(t.elm_event_node_ref=n.elm_event_node_ref),e&&t!==n&&e.replaceChild(t,n),t}(n);case 4:return ln(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return En(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var e=r.s,t=0;e.i>t;t++)n.removeChild(n.childNodes[e.v]);return n;case 7:for(var u=(e=r.s).e,i=n.childNodes[t=e.v];u.length>t;t++)n.insertBefore(vn(u[t],r.u),i);return n;case 9:if(!(e=r.s))return n.parentNode.removeChild(n),n;var a=e.A;return void 0!==a.r&&n.parentNode.removeChild(n),a.s=En(n,e.w),n;case 8:return function(n,r){var e=r.s,t=function(n,r){if(n){for(var e=rn.createDocumentFragment(),t=0;n.length>t;t++){var u=n[t].A;en(e,2===u.c?u.s:vn(u.z,r.u))}return e}}(e.y,r);n=En(n,e.w);for(var u=e.x,i=0;u.length>i;i++){var a=u[i],o=a.A,f=2===o.c?o.s:vn(o.z,r.u);n.insertBefore(f,n.childNodes[a.r])}return t&&en(n,t),n}(n,r);case 5:return r.s(n);default:$(10)}}var Cn=u(function(n,r,e,t){return function(n,r,e,t,u,i){var a=o(E,n,B(r?r.flags:void 0));cr(a)||$(2);var f={},c=(a=e(a.a)).a,s=i(l,c),v=function(n,r){var e;for(var t in U){var u=U[t];u.a&&((e=e||{})[t]=u.a(t,r)),n[t]=K(u,r)}return e}(f,l);function l(n,r){s(c=(a=o(t,n,c)).a,r),X(f,a.b,u(c))}return X(f,a.b,u(c)),v?{ports:v}:{}}(r,t,n.au,n.aC,n.aB,function(r,e){var t=n.L&&n.L(r),u=n.aD,i=rn.title,a=rn.body,c=function n(r){if(3===r.nodeType)return tn(r.textContent);if(1!==r.nodeType)return tn("");for(var e=b,t=r.attributes,u=t.length;u--;){var i=t[u];e=h(o(fn,i.name,i.value),e)}var a=r.tagName.toLowerCase(),c=b,s=r.childNodes;for(u=s.length;u--;)c=h(n(s[u]),c);return f(un,a,e,c)}(a);return function(n,r){r(n);var e=0;function t(){e=1===e?0:(qn(t),r(n),1)}return function(u,i){n=u,i?(r(n),2===e&&(e=1)):(0===e&&qn(t),e=2)}}(e,function(n){Z=t;var e=u(n),o=un("body")(b)(e.G),f=function(n,r){var e=[];return $n(n,r,e,0),e}(c,o);a=_n(a,c,f,r),c=o,Z=0,i!==e.H&&(rn.title=i=e.H)})})}),qn=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});function Dn(){return Ar(rn.location.href).a||$(1)}var Sn=e(function(n,r){return o(Hr,jr,F(function(){history.pushState({},"",r),n()}))}),In=("undefined"!=typeof document&&document,"undefined"!=typeof window?window:{addEventListener:function(){},removeEventListener:function(){}}),zn=m,Bn=function(n){return{$:1,a:n}},Mn=e(function(n,r){return{$:3,a:n,b:r}}),On=e(function(n,r){return{$:0,a:n,b:r}}),Fn=e(function(n,r){return{$:1,a:n,b:r}}),Pn=function(n){return{$:0,a:n}},Gn=function(n){return{$:2,a:n}},Hn=function(n){return{$:0,a:n}},Rn={$:1},Vn=t(function(n,r,e){for(;;){if(!e.b)return r;var t=e.b,u=n,i=o(n,e.a,r);n=u,r=i,e=t}}),Wn=function(n){return f(Vn,zn,b,n)},Jn=u(function(n,r,e,t){return{$:0,a:n,b:r,c:e,d:t}}),Un=[],Kn=x,Zn=e(function(n,r){return A(r)/A(n)}),Qn=Kn(o(Zn,2,32)),Yn=c(Jn,0,Qn,Un,Un),Xn=p,nr=w,rr=function(n){return n.length},er=e(function(n,r){return function n(r,e,t){if("object"!=typeof r)return r===e?0:e>r?-1:1;if(void 0===r.$)return(t=n(r.a,e.a))?t:(t=n(r.b,e.b))?t:n(r.c,e.c);for(;r.b&&e.b&&!(t=n(r.a,e.a));r=r.b,e=e.b);return t||(r.b?1:e.b?-1:0)}(n,r)>0?n:r}),tr=y,ur=e(function(n,r){for(;;){var e=o(tr,32,n),t=e.b,u=o(zn,{$:0,a:e.a},r);if(!t.b)return Wn(u);n=t,r=u}}),ir=e(function(n,r){for(;;){var e=Kn(r/32);if(1===e)return o(tr,32,n).a;n=o(ur,n,b),r=e}}),ar=e(function(n,r){if(r.a){var e=32*r.a,t=nr(o(Zn,32,e-1)),u=n?Wn(r.d):r.d,i=o(ir,u,r.a);return c(Jn,rr(r.c)+e,o(er,5,t*Qn),i,r.c)}return c(Jn,rr(r.c),Qn,Un,r.c)}),or=i(function(n,r,e,t,u){for(;;){if(0>r)return o(ar,!1,{d:t,a:e/32|0,c:u});var i={$:1,a:f(Xn,32,r,n)};n=n,r-=32,e=e,t=o(zn,i,t),u=u}}),fr=e(function(n,r){if(n>0){var e=n%32;return s(or,r,n-e-32,n,b,f(Xn,e,n-e,r))}return Yn}),cr=function(n){return!n.$},sr=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},vr=a(function(n,r,e,t,u,i){return{T:i,V:r,az:t,Z:e,ab:n,ac:u}}),lr=k,dr=j,br=e(function(n,r){return 1>n?r:f(dr,n,r.length,r)}),hr=N,mr=function(n){return""===n},gr=e(function(n,r){return 1>n?"":f(dr,0,n,r)}),pr=i(function(n,r,e,t,u){if(mr(u)||o(lr,"@",u))return Rn;var i=o(hr,":",u);if(i.b){if(i.b.b)return Rn;var a=i.a,f=function(n){for(var r=0,e=n.charCodeAt(0),t=43==e||45==e?1:0,u=t;n.length>u;++u){var i=n.charCodeAt(u);if(48>i||i>57)return Rn;r=10*r+i-48}return u==t?Rn:Hn(45==e?-r:r)}(o(br,a+1,u));if(1===f.$)return Rn;var c=f;return Hn(v(vr,n,o(gr,a,u),c,r,e,t))}return Hn(v(vr,n,u,Rn,r,e,t))}),yr=u(function(n,r,e,t){if(mr(t))return Rn;var u=o(hr,"/",t);if(u.b){var i=u.a;return s(pr,n,o(br,i,t),r,e,o(gr,i,t))}return s(pr,n,"/",r,e,t)}),$r=t(function(n,r,e){if(mr(e))return Rn;var t=o(hr,"?",e);if(t.b){var u=t.a;return c(yr,n,Hn(o(br,u+1,e)),r,o(gr,u,e))}return c(yr,n,Rn,r,e)}),xr=e(function(n,r){if(mr(r))return Rn;var e=o(hr,"#",r);if(e.b){var t=e.a;return f($r,n,Hn(o(br,t+1,r)),o(gr,t,r))}return f($r,n,Rn,r)}),wr=L,Ar=function(n){return o(wr,"http://",n)?o(xr,0,o(br,7,n)):o(wr,"https://",n)?o(xr,1,o(br,8,n)):Rn},jr=function(n){for(;;)n=n},kr=O,Lr=kr(0),Nr=u(function(n,r,e,t){if(t.b){var u=t.a,i=t.b;if(i.b){var a=i.a,s=i.b;if(s.b){var v=s.a,l=s.b;if(l.b){var d=l.b;return o(n,u,o(n,a,o(n,v,o(n,l.a,e>500?f(Vn,n,r,Wn(d)):c(Nr,n,r,e+1,d)))))}return o(n,u,o(n,a,o(n,v,r)))}return o(n,u,o(n,a,r))}return o(n,u,r)}return r}),_r=t(function(n,r,e){return c(Nr,n,r,0,e)}),Er=e(function(n,r){return f(_r,e(function(r,e){return o(zn,n(r),e)}),b,r)}),Tr=P,Cr=e(function(n,r){return o(Tr,function(r){return kr(n(r))},r)}),qr=t(function(n,r,e){return o(Tr,function(r){return o(Tr,function(e){return kr(o(n,r,e))},e)},r)}),Dr=Q,Sr=e(function(n,r){var e=r;return function(n){return F(function(r){r(O(H(n)))})}(o(Tr,Dr(n),e))});U.Task={b:Lr,c:t(function(n,r){return o(Cr,function(){return 0},(e=o(Er,Sr(n),r),f(_r,qr(zn),kr(b),e)));var e}),d:t(function(){return kr(0)}),e:e(function(n,r){return o(Cr,n,r)}),f:void 0};var Ir,zr,Br,Mr,Or,Fr,Pr,Gr=(Fr="Task",function(n){return{$:1,k:Fr,l:n}}),Hr=e(function(n,r){return Gr(o(Cr,n,r))}),Rr=Y(b),Vr=e(function(n,r){return l(n,r)}),Wr=e(function(n,r){return o(Vr,r,n)}),Jr=function(n){switch(n.az){case"/":case"/about":return 0;case"/blog":return 1;case"/projects":return 3;case"/publications":return 4;default:return 2}},Ur=t(function(n,r,e){return o(Wr,Rr,{w:e,x:{},r:Jr(r)})}),Kr=Y(b),Zr=Sn,Qr=e(function(n,r){return 1===n.$?r:r+":"+(n.a+"")}),Yr=t(function(n,r,e){return 1===r.$?e:d(e,d(n,r.a))}),Xr=e(function(n,r){var e=r.r,t=r.w,u=r.x;switch(n.$){case 0:return o(Wr,o(Zr,t,function(n){return f(Yr,"#",n.T,f(Yr,"?",n.ac,d(o(Qr,n.Z,d(n.ab?"https://":"http://",n.V)),n.az)))}(n.a)),{w:t,x:u,r:e});case 1:return o(Wr,function(n){return o(Hr,jr,F(function(){try{In.location=n}catch(n){rn.location.reload(!1)}}))}(n.a),{w:t,x:u,r:e});default:return o(Wr,Rr,{w:t,x:u,r:n.a})}}),ne=B,re=e(function(n,r){return o(on,n,ne(r))}),ee=re("className"),te=un("a"),ue=un("div"),ie=e(function(n,r){return o(ue,o(zn,ee("centre"),n),g([r]))}),ae=un("h1"),oe=e(function(n,r){var e=r.a,t=r.b,u=r.c;return o(ue,o(zn,ee("cover"),n),g([o(ue,b,g([e])),o(ae,b,g([t])),o(ue,b,g([u]))]))}),fe=function(n){return o(re,"href",/^javascript:/i.test((r=n).replace(/\s/g,""))?"":r);var r},ce=tn,se=ce(""),ve=un("span"),le=o(ie,g([ee("mb-8")]),o(oe,b,{a:se,b:o(ve,g([ee("font:serif text:c-g3")]),g([o(ae,g([ee("text:c-w")]),g([ce("Hi. ")])),o(ve,b,g([ce("I'm a ")])),o(te,g([fe("#"),ee("text:c-w hover:text:c-1")]),g([ce("PhD student")])),o(ve,b,g([ce(" at Queen Mary University of London. ")])),o(ve,b,g([ce("I'm also a ")])),o(te,g([fe("#"),ee("text:c-w hover:text:c-5")]),g([ce("web developer")])),o(ve,b,g([ce(" that speaks ")])),o(te,g([fe("#"),ee("text:c-w hover:text:c-3")]),g([ce("elm")])),o(ve,b,g([ce(" and ")])),o(te,g([fe("#"),ee("text:c-w hover:text:c-4")]),g([ce("javascript")])),o(ve,b,g([ce(".")]))])),c:se})),de=un("hr"),be=un("p"),he=e(function(n,r){return o(ue,o(zn,ee("stack"),n),r)}),me=o(ie,g([ee("mb-8")]),o(he,g([ee("px-4 font-size:s3")]),g([o(ae,g([ee("text:c-1")]),g([ce("What I do.")])),o(be,g([ee("mb-12")]),g([ce("My research investigates the how programming languages and their design can affect the way we write code.")])),o(be,g([ee("mb-12")]),g([ce("I have a particular interest in music computing and audio programming on the Web and I'm a member of the Centre for Digital Music research group.")])),o(be,g([ee("mb-12")]),g([o(ve,b,g([ce("Beyond my research I'm an active member of the ")])),o(te,g([fe("#"),ee("underline")]),g([ce("elm community")])),o(ve,b,g([ce(" and a strong advocate for functional programming in general.")]))]))]))),ge=un("h2"),pe=un("section"),ye=o(ie,g([ee("mb-8")]),o(pe,g([ee("px-4 font-size:s3")]),g([o(ae,g([ee("text:c-4")]),g([ce("What I know.")])),o(ue,g([ee("my-12")]),g([o(ge,b,g([ce("PhD Media & Arts Technology")])),o(be,g([ee("text:c-g2")]),g([ce("September 2017 – September 2021")])),o(be,g([ee("text:c-g3")]),g([ce("Queen Mary University of London")]))])),o(ue,g([ee("text-right my-12")]),g([o(ge,b,g([ce("MA Computational Arts")])),o(be,g([ee("text:c-g2")]),g([ce("September 2016 – September 2017")])),o(be,g([ee("text:c-g3")]),g([ce("Goldsmiths University")]))])),o(ue,g([ee("my-12")]),g([o(ge,b,g([ce("Ba(Hons) Creative Music Technology")])),o(be,g([ee("text:c-g2")]),g([ce("September 2013 – September 2016")])),o(be,g([ee("text:c-g3")]),g([ce("Bath Spa University")]))]))]))),$e=o(ie,g([ee("mb-8")]),o(pe,g([ee("px-4 font-size:s3")]),g([o(ae,g([ee("text:c-2")]),g([ce("What I've made.")])),o(ue,g([ee("my-12")]),g([o(ge,b,g([ce("flow")])),o(be,g([ee("font:mono text:c-g3")]),g([ce("javascript | framework | model-view-update")])),o(be,g([ee("text:c-g2")]),g([ce("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae aliquet nec. Viverra suspendisse potenti nullam ac tortor vitae. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Neque laoreet suspendisse interdum consectetur libero id.")]))])),o(ue,g([ee("text-right my-12")]),g([o(ge,b,g([ce("elm-web-audio")])),o(be,g([ee("font:mono text:c-g3")]),g([ce("elm | library | web audio api")])),o(be,g([ee("text:c-g2")]),g([ce("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae aliquet nec. Viverra suspendisse potenti nullam ac tortor vitae. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Neque laoreet suspendisse interdum consectetur libero id.")]))]))]))),xe=o(ie,g([ee("mb-8")]),o(pe,g([ee("px-4 font-size:s3")]),g([o(ae,g([ee("text:c-3 mb-8")]),g([ce("Where I've been.")])),o(ue,g([ee("my-12")]),g([o(ge,b,g([ce("Elm Developer")])),o(be,g([ee("text:c-g2")]),g([ce("2020 – Present")])),o(be,g([ee("text:c-g3")]),g([ce("Dnata Travel")]))])),o(ue,g([ee("text-right my-12")]),g([o(ge,b,g([ce("Lead Demonstrator")])),o(be,g([ee("text:c-g2")]),g([ce("Jan 2019 – May 2019, Jan 2020 – Present")])),o(be,g([ee("text:c-g3")]),g([ce("Queen Mary University of London")]))])),o(ue,g([ee("my-12")]),g([o(ge,b,g([ce("Demonstrator")])),o(be,g([ee("text:c-g2")]),g([ce("July 2019 – September 2019")])),o(be,g([ee("text:c-g3")]),g([ce("Institute of Coding")]))]))])));Ir={Main:{init:(Br=(zr={au:Ur,aw:function(n){return{$:2,a:Jr(n)}},ax:function(n){return n.$?{$:1,a:n.a}:{$:0,a:n.a}},aB:function(){return Kr},aC:Xr,aD:function(n){switch(n.r){case 0:return{G:g([le,o(de,g([ee("mx-64 my-12 border")]),b),me,o(de,g([ee("mx-64 my-12 border")]),b),$e,o(de,g([ee("mx-64 my-12 border")]),b),xe,o(de,g([ee("mx-64 my-12 border")]),b),ye]),H:"Andy Thompson – pd-andy"};case 1:case 2:case 3:default:return{G:b,H:""}}}}).aw,Mr=zr.ax,Or=function(){Or.a(Br(Dn()))},Cn({L:function(n){return Or.a=n,In.addEventListener("popstate",Or),0>In.navigator.userAgent.indexOf("Trident")||In.addEventListener("hashchange",Or),e(function(r,e){if(!(e.ctrlKey||e.metaKey||e.shiftKey||e.button>=1||r.target||r.hasAttribute("download"))){e.preventDefault();var t=r.href,u=Dn(),i=Ar(t).a;n(Mr(i&&u.ab===i.ab&&u.V===i.V&&u.Z.a===i.Z.a?{$:0,a:i}:function(n){return{$:1,a:n}}(t)))}})},au:function(n){return f(zr.au,n,Dn(),Or)},aD:zr.aD,aC:zr.aC,aB:zr.aB}))((Pr=0,{$:0,a:Pr}))(0)}},n.Elm?function n(r,e){for(var t in e)t in r?"init"==t?$(6):n(r[t],e[t]):r[t]=e[t]}(n.Elm,Ir):n.Elm=Ir}(this);
},{}],"epB2":[function(require,module,exports) {
"use strict";require("victormono");var i=require("./elm/Main.elm");i.Elm.Main.init({flags:{}});
},{"victormono":"aaNl","./elm/Main.elm":"ENeC"}]},{},["epB2"], null)