parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aaNl":[function(require,module,exports) {

},{"./woff2/VictorMono-Regular.woff2":[["VictorMono-Regular.a87480ee.woff2","kMip"],"kMip"],"./woff/VictorMono-Regular.woff":[["VictorMono-Regular.0ae2414d.woff","ctdl"],"ctdl"],"./woff2/VictorMono-Italic.woff2":[["VictorMono-Italic.f7627f40.woff2","sTNh"],"sTNh"],"./woff/VictorMono-Italic.woff":[["VictorMono-Italic.3b26ad5f.woff","sal6"],"sal6"],"./woff2/VictorMono-Bold.woff2":[["VictorMono-Bold.6c55b34b.woff2","Pj6I"],"Pj6I"],"./woff/VictorMono-Bold.woff":[["VictorMono-Bold.492efce4.woff","6MPZ"],"6MPZ"],"./woff2/VictorMono-BoldItalic.woff2":[["VictorMono-BoldItalic.f40d7055.woff2","nwCQ"],"nwCQ"],"./woff/VictorMono-BoldItalic.woff":[["VictorMono-BoldItalic.392fa2b5.woff","m6V1"],"m6V1"]}],"ENeC":[function(require,module,exports) {
!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function u(n){return r(4,n,function(r){return function(t){return function(e){return function(u){return n(r,t,e,u)}}}})}function a(n){return r(5,n,function(r){return function(t){return function(e){return function(u){return function(a){return n(r,t,e,u,a)}}}}})}function i(n){return r(6,n,function(r){return function(t){return function(e){return function(u){return function(a){return function(i){return n(r,t,e,u,a,i)}}}}}})}function f(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function o(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function c(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function v(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function s(n,r,t,e,u,a,i){return 6===n.a?n.f(r,t,e,u,a,i):n(r)(t)(e)(u)(a)(i)}function d(n,r){return{a:n,b:r}}function l(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=h(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=h(n.a,r);return t}var b={$:0};function h(n,r){return{$:1,a:n,b:r}}var g=t(h);function m(n){for(var r=b,t=n.length;t--;)r=h(n[t],r);return r}var p=e(function(n,r,t){for(var e=[],u=0;n>u;u++)e[u]=t(r+u);return e}),$=t(function(n,r){for(var t=[],e=0;n>e&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,d(t,r)});function y(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var w=Math.ceil,x=Math.floor,j=Math.log,A=e(function(n,r,t){return t.slice(n,r)}),k=t(function(n,r){return r.indexOf(n)>-1}),_=t(function(n,r){return 0===r.indexOf(n)}),L=t(function(n,r){var t=n.length;if(1>t)return b;for(var e=0,u=[];(e=r.indexOf(n,e))>-1;)u.push(e),e+=t;return m(u)});function N(n){return{$:2,b:n}}N(function(n){return"number"!=typeof n?B("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?Wn(n):!isFinite(n)||n%1?B("an INT",n):Wn(n)}),N(function(n){return"boolean"==typeof n?Wn(n):B("a BOOL",n)}),N(function(n){return"number"==typeof n?Wn(n):B("a FLOAT",n)}),N(function(n){return Wn(D(n))}),N(function(n){return"string"==typeof n?Wn(n):n instanceof String?Wn(n+""):B("a STRING",n)});var E=t(function(n,r){return T(n,q(r))});function T(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Wn(n.c):B("null",r);case 3:return I(r)?C(n.b,r,m):B("a LIST",r);case 4:return I(r)?C(n.b,r,O):B("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return B("an OBJECT with a field named `"+t+"`",r);var e=T(n.b,r[t]);return cr(e)?e:Dn(f(Mn,t,e.a));case 7:var u=n.e;return I(r)?r.length>u?(e=T(n.b,r[u]),cr(e)?e:Dn(f(Sn,u,e.a))):B("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):B("an ARRAY",r);case 8:if("object"!=typeof r||null===r||I(r))return B("an OBJECT",r);var a=b;for(var i in r)if(r.hasOwnProperty(i)){if(e=T(n.b,r[i]),!cr(e))return Dn(f(Mn,i,e.a));a=h(d(i,e.a),a)}return Wn(Pn(a));case 9:for(var o=n.f,c=n.g,v=0;c.length>v;v++){if(e=T(c[v],r),!cr(e))return e;o=o(e.a)}return Wn(o);case 10:return e=T(n.b,r),cr(e)?T(n.h(e.a),r):e;case 11:for(var s=b,l=n.g;l.b;l=l.b){if(e=T(l.a,r),cr(e))return e;s=h(e.a,s)}return Dn(Rn(Pn(s)));case 1:return Dn(f(qn,n.a,D(r)));case 0:return Wn(n.a)}}function C(n,r,t){for(var e=r.length,u=[],a=0;e>a;a++){var i=T(n,r[a]);if(!cr(i))return Dn(f(Sn,a,i.a));u[a]=i.a}return Wn(t(u))}function I(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function O(n){return f(or,n.length,function(r){return n[r]})}function B(n,r){return Dn(f(qn,"Expecting "+n,D(r)))}function F(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return F(n.b,r.b);case 6:return n.d===r.d&&F(n.b,r.b);case 7:return n.e===r.e&&F(n.b,r.b);case 9:return n.f===r.f&&z(n.g,r.g);case 10:return n.h===r.h&&F(n.b,r.b);case 11:return z(n.g,r.g)}}function z(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;t>e;e++)if(!F(n[e],r[e]))return!1;return!0}function D(n){return n}function q(n){return n}function M(n){return{$:0,a:n}}function S(n){return{$:2,b:n,c:null}}D(null);var W=t(function(n,r){return{$:3,b:n,d:r}}),R=0;function G(n){var r={$:0,e:R++,f:n,g:null,h:[]};return P(r),r}var H=!1,K=[];function P(n){if(K.push(n),!H){for(H=!0;n=K.shift();)V(n);H=!1}}function V(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,P(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var Z={};function J(n,r){var t={g:r,h:void 0},e=n.c,u=n.d,a=n.e,i=n.f;function v(n){return f(W,v,{$:5,b:function(r){var f=r.a;return 0===r.$?o(u,t,f,n):a&&i?c(e,t,f.i,f.j,n):o(e,t,a?f.i:f.j,n)}})}return t.h=G(f(W,v,n.b))}var Y,Q=t(function(n,r){return S(function(t){n.g(r),t(M(0))})});function U(n){return{$:2,m:n}}function X(n,r,t){var e,u={};for(var a in nn(!0,r,u,null),nn(!1,t,u,null),n)(e=n[a]).h.push({$:"fx",a:u[a]||{i:b,j:b}}),P(e)}function nn(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,t,e){function u(n){for(var r=e;r;r=r.q)n=r.p(n);return n}return f(n?Z[t].e:Z[t].f,u,r.l)}(n,u,e);return void(t[u]=function(n,r,t){return t=t||{i:b,j:b},n?t.i=h(r,t.i):t.j=h(r,t.j),t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)nn(n,i.a,t,e);return;case 3:return void nn(n,r.o,t,{p:r.n,q:e})}}var rn="undefined"!=typeof document?document:{};function tn(n,r){n.appendChild(r)}function en(n){return{$:0,a:n}}var un=t(function(n,r){return t(function(t,e){for(var u=[],a=0;e.b;e=e.b){var i=e.a;a+=i.b||0,u.push(i)}return a+=u.length,{$:1,c:r,d:cn(t),e:u,f:n,b:a}})})(void 0);t(function(n,r){return t(function(t,e){for(var u=[],a=0;e.b;e=e.b){var i=e.a;a+=i.b.b||0,u.push(i)}return a+=u.length,{$:2,c:r,d:cn(t),e:u,f:n,b:a}})})(void 0);var an,fn=t(function(n,r){return{$:"a2",n:n,o:r}}),on=t(function(n,r){return{$:"a3",n:n,o:r}});function cn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?vn(i,u,a):i[u]=a}else"className"===u?vn(r,u,q(a)):r[u]=q(a)}return r}function vn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function sn(n,r){var t=n.$;if(5===t)return sn(n.k||(n.k=n.m()),r);if(0===t)return rn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=sn(e,a)).elm_event_node_ref=a,i}if(3===t)return dn(i=n.h(n.g),r,n.d),i;var i=n.f?rn.createElementNS(n.f,n.c):rn.createElement(n.c);Y&&"a"==n.c&&i.addEventListener("click",Y(i)),dn(i,r,n.d);for(var f=n.e,o=0;f.length>o;o++)tn(i,sn(1===t?f[o]:f[o].b,r));return i}function dn(n,r,t){for(var e in t){var u=t[e];"a1"===e?ln(n,u):"a0"===e?gn(n,r,u):"a3"===e?bn(n,u):"a4"===e?hn(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function ln(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function bn(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}function hn(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;void 0!==a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function gn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=mn(r,a),n.addEventListener(u,i,an&&{passive:2>vr(a)}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){an=!0}}))}catch(n){}function mn(n,r){function t(r){var e=t.q,u=T(e.a,r);if(cr(u)){for(var a,i=vr(e),f=u.a,o=i?3>i?f.a:f.n:f,c=1==i?f.b:3==i&&f.N,v=(c&&r.stopPropagation(),(2==i?f.b:3==i&&f.K)&&r.preventDefault(),n);a=v.j;){if("function"==typeof a)o=a(o);else for(var s=a.length;s--;)o=a[s](o);v=v.p}v(o,c)}}return t.q=r,t}function pn(n,r){return n.$==r.$&&F(n.a,r.a)}function $n(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function yn(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void $n(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=[],u=0;t>u;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,f=r.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return yn(n.k,r.k,v,0),void(v.length>0&&$n(t,1,e,v));case 4:for(var s=n.j,d=r.j,l=!1,b=n.k;4===b.$;)l=!0,"object"!=typeof s?s=[s,b.j]:s.push(b.j),b=b.k;for(var h=r.k;4===h.$;)l=!0,"object"!=typeof d?d=[d,h.j]:d.push(h.j),h=h.k;return l&&s.length!==d.length?void $n(t,0,e,r):((l?function(n,r){for(var t=0;n.length>t;t++)if(n[t]!==r[t])return!1;return!0}(s,d):s===d)||$n(t,2,e,d),void yn(b,h,t,e+1));case 0:return void(n.a!==r.a&&$n(t,3,e,r.a));case 1:return void wn(n,r,t,e,jn);case 2:return void wn(n,r,t,e,An);case 3:if(n.h!==r.h)return void $n(t,0,e,r);var g=xn(n.d,r.d);g&&$n(t,4,e,g);var m=r.i(n.g,r.g);return void(m&&$n(t,5,e,m))}}}function wn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=xn(n.d,r.d);a&&$n(t,4,e,a),u(n,r,t,e)}else $n(t,0,e,r)}function xn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&pn(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var f=xn(n[u],r[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in r)o in n||((e=e||{})[o]=r[o]);return e}function jn(n,r,t,e){var u=n.e,a=r.e,i=u.length,f=a.length;i>f?$n(t,6,e,{v:f,i:i-f}):f>i&&$n(t,7,e,{v:i,e:a});for(var o=f>i?i:f,c=0;o>c;c++){var v=u[c];yn(v,a[c],t,++e),e+=v.b||0}}function An(n,r,t,e){for(var u=[],a={},i=[],f=n.e,o=r.e,c=f.length,v=o.length,s=0,d=0,l=e;c>s&&v>d;){var b=(_=f[s]).a,h=(L=o[d]).a,g=_.b,m=L.b,p=void 0,$=void 0;if(b!==h){var y=f[s+1],w=o[d+1];if(y){var x=y.a,j=y.b;$=h===x}if(w){var A=w.a,k=w.b;p=b===A}if(p&&$)yn(g,k,u,++l),_n(a,u,b,m,d,i),l+=g.b||0,Ln(a,u,b,j,++l),l+=j.b||0,s+=2,d+=2;else if(p)l++,_n(a,u,h,m,d,i),yn(g,k,u,l),l+=g.b||0,s+=1,d+=2;else if($)Ln(a,u,b,g,++l),l+=g.b||0,yn(j,m,u,++l),l+=j.b||0,s+=2,d+=1;else{if(!y||x!==A)break;Ln(a,u,b,g,++l),_n(a,u,h,m,d,i),l+=g.b||0,yn(j,k,u,++l),l+=j.b||0,s+=2,d+=2}}else yn(g,m,u,++l),l+=g.b||0,s++,d++}for(;c>s;){var _;Ln(a,u,(_=f[s]).a,g=_.b,++l),l+=g.b||0,s++}for(;v>d;){var L,N=N||[];_n(a,u,(L=o[d]).a,L.b,void 0,N),d++}(u.length>0||i.length>0||N)&&$n(t,8,e,{w:u,x:i,y:N})}var kn="_elmW6BL";function _n(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return yn(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}_n(n,r,t+kn,e,u,a)}function Ln(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return yn(e,a.z,i,u),void $n(r,9,u,{w:i,A:a})}Ln(n,r,t+kn,e,u)}else{var f=$n(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:f}}}function Nn(n,r,t,e){return 0===t.length?n:(function n(r,t,e,u){!function r(t,e,u,a,i,f,o){for(var c=u[a],v=c.r;v===i;){var s=c.$;if(1===s)n(t,e.k,c.s,o);else if(8===s)c.t=t,c.u=o,(d=c.s.w).length>0&&r(t,e,d,0,i,f,o);else if(9===s){c.t=t,c.u=o;var d,l=c.s;l&&(l.A.s=t,(d=l.w).length>0&&r(t,e,d,0,i,f,o))}else c.t=t,c.u=o;if(!(c=u[++a])||(v=c.r)>f)return a}var b=e.$;if(4===b){for(var h=e.k;4===h.$;)h=h.k;return r(t,h,u,a,i+1,f,t.elm_event_node_ref)}for(var g=e.e,m=t.childNodes,p=0;g.length>p;p++){var $=1===b?g[p]:g[p].b,y=++i+($.b||0);if(!(i>v||v>y||(c=u[a=r(m[p],$,u,a,i,y,o)])&&(v=c.r)<=f))return a;i=y}return a}(r,t,e,0,0,t.b,u)}(n,r,t,e),En(n,t))}function En(n,r){for(var t=0;r.length>t;t++){var e=r[t],u=e.t,a=Tn(u,e);u===n&&(n=a)}return n}function Tn(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=sn(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return dn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return En(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;t.i>e;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];u.length>e;e++)n.insertBefore(sn(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=En(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=rn.createDocumentFragment(),e=0;n.length>e;e++){var u=n[e].A;tn(t,2===u.c?u.s:sn(u.z,r.u))}return t}}(t.y,r);n=En(n,t.w);for(var u=t.x,a=0;u.length>a;a++){var i=u[a],f=i.A,o=2===f.c?f.s:sn(f.z,r.u);n.insertBefore(o,n.childNodes[i.r])}return e&&tn(n,e),n}(n,r);case 5:return r.s(n);default:y(10)}}var Cn=u(function(n,r,t,e){return function(n,r,t,e,u,a){var i=f(E,n,D(r?r.flags:void 0));cr(i)||y(2);var o={},c=(i=t(i.a)).a,v=a(d,c),s=function(n,r){var t;for(var e in Z){var u=Z[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=J(u,r)}return t}(o,d);function d(n,r){v(c=(i=f(e,n,c)).a,r),X(o,i.b,u(c))}return X(o,i.b,u(c)),s?{ports:s}:{}}(r,e,n.au,n.aC,n.aB,function(r,t){var e=n.L&&n.L(r),u=n.aD,a=rn.title,i=rn.body,c=function n(r){if(3===r.nodeType)return en(r.textContent);if(1!==r.nodeType)return en("");for(var t=b,e=r.attributes,u=e.length;u--;){var a=e[u];t=h(f(on,a.name,a.value),t)}var i=r.tagName.toLowerCase(),c=b,v=r.childNodes;for(u=v.length;u--;)c=h(n(v[u]),c);return o(un,i,t,c)}(i);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(In(e),r(n),1)}return function(u,a){n=u,a?(r(n),2===t&&(t=1)):(0===t&&In(e),t=2)}}(t,function(n){Y=e;var t=u(n),f=un("body")(b)(t.G),o=function(n,r){var t=[];return yn(n,r,t,0),t}(c,f);i=Nn(i,c,o,r),c=f,Y=0,a!==t.H&&(rn.title=a=t.H)})})}),In=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});function On(){return jr(rn.location.href).a||y(1)}var Bn=t(function(n,r){return f(Gr,Ar,S(function(){history.pushState({},"",r),n()}))}),Fn=("undefined"!=typeof document&&document,"undefined"!=typeof window?window:{addEventListener:function(){},removeEventListener:function(){}}),zn=g,Dn=function(n){return{$:1,a:n}},qn=t(function(n,r){return{$:3,a:n,b:r}}),Mn=t(function(n,r){return{$:0,a:n,b:r}}),Sn=t(function(n,r){return{$:1,a:n,b:r}}),Wn=function(n){return{$:0,a:n}},Rn=function(n){return{$:2,a:n}},Gn=function(n){return{$:0,a:n}},Hn={$:1},Kn=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=f(n,t.a,r);n=u,r=a,t=e}}),Pn=function(n){return o(Kn,zn,b,n)},Vn=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Zn=[],Jn=w,Yn=t(function(n,r){return j(r)/j(n)}),Qn=Jn(f(Yn,2,32)),Un=c(Vn,0,Qn,Zn,Zn),Xn=p,nr=x,rr=function(n){return n.length},tr=t(function(n,r){return function n(r,t,e){if("object"!=typeof r)return r===t?0:t>r?-1:1;if(void 0===r.$)return(e=n(r.a,t.a))?e:(e=n(r.b,t.b))?e:n(r.c,t.c);for(;r.b&&t.b&&!(e=n(r.a,t.a));r=r.b,t=t.b);return e||(r.b?1:t.b?-1:0)}(n,r)>0?n:r}),er=$,ur=t(function(n,r){for(;;){var t=f(er,32,n),e=t.b,u=f(zn,{$:0,a:t.a},r);if(!e.b)return Pn(u);n=e,r=u}}),ar=t(function(n,r){for(;;){var t=Jn(r/32);if(1===t)return f(er,32,n).a;n=f(ur,n,b),r=t}}),ir=t(function(n,r){if(r.a){var t=32*r.a,e=nr(f(Yn,32,t-1)),u=n?Pn(r.d):r.d,a=f(ar,u,r.a);return c(Vn,rr(r.c)+t,f(tr,5,e*Qn),a,r.c)}return c(Vn,rr(r.c),Qn,Zn,r.c)}),fr=a(function(n,r,t,e,u){for(;;){if(0>r)return f(ir,!1,{d:e,a:t/32|0,c:u});var a={$:1,a:o(Xn,32,r,n)};n=n,r-=32,t=t,e=f(zn,a,e),u=u}}),or=t(function(n,r){if(n>0){var t=n%32;return v(fr,r,n-t-32,n,b,o(Xn,t,n-t,r))}return Un}),cr=function(n){return!n.$},vr=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},sr=i(function(n,r,t,e,u,a){return{T:a,V:r,az:e,Z:t,ab:n,ac:u}}),dr=k,lr=A,br=t(function(n,r){return 1>n?r:o(lr,n,r.length,r)}),hr=L,gr=function(n){return""===n},mr=t(function(n,r){return 1>n?"":o(lr,0,n,r)}),pr=a(function(n,r,t,e,u){if(gr(u)||f(dr,"@",u))return Hn;var a=f(hr,":",u);if(a.b){if(a.b.b)return Hn;var i=a.a,o=function(n){for(var r=0,t=n.charCodeAt(0),e=43==t||45==t?1:0,u=e;n.length>u;++u){var a=n.charCodeAt(u);if(48>a||a>57)return Hn;r=10*r+a-48}return u==e?Hn:Gn(45==t?-r:r)}(f(br,i+1,u));if(1===o.$)return Hn;var c=o;return Gn(s(sr,n,f(mr,i,u),c,r,t,e))}return Gn(s(sr,n,u,Hn,r,t,e))}),$r=u(function(n,r,t,e){if(gr(e))return Hn;var u=f(hr,"/",e);if(u.b){var a=u.a;return v(pr,n,f(br,a,e),r,t,f(mr,a,e))}return v(pr,n,"/",r,t,e)}),yr=e(function(n,r,t){if(gr(t))return Hn;var e=f(hr,"?",t);if(e.b){var u=e.a;return c($r,n,Gn(f(br,u+1,t)),r,f(mr,u,t))}return c($r,n,Hn,r,t)}),wr=t(function(n,r){if(gr(r))return Hn;var t=f(hr,"#",r);if(t.b){var e=t.a;return o(yr,n,Gn(f(br,e+1,r)),f(mr,e,r))}return o(yr,n,Hn,r)}),xr=_,jr=function(n){return f(xr,"http://",n)?f(wr,0,f(br,7,n)):f(xr,"https://",n)?f(wr,1,f(br,8,n)):Hn},Ar=function(n){for(;;)n=n},kr=M,_r=kr(0),Lr=u(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,v=a.b;if(v.b){var s=v.a,d=v.b;if(d.b){var l=d.b;return f(n,u,f(n,i,f(n,s,f(n,d.a,t>500?o(Kn,n,r,Pn(l)):c(Lr,n,r,t+1,l)))))}return f(n,u,f(n,i,f(n,s,r)))}return f(n,u,f(n,i,r))}return f(n,u,r)}return r}),Nr=e(function(n,r,t){return c(Lr,n,r,0,t)}),Er=t(function(n,r){return o(Nr,t(function(r,t){return f(zn,n(r),t)}),b,r)}),Tr=W,Cr=t(function(n,r){return f(Tr,function(r){return kr(n(r))},r)}),Ir=e(function(n,r,t){return f(Tr,function(r){return f(Tr,function(t){return kr(f(n,r,t))},t)},r)}),Or=Q,Br=t(function(n,r){var t=r;return function(n){return S(function(r){r(M(G(n)))})}(f(Tr,Or(n),t))});Z.Task={b:_r,c:e(function(n,r){return f(Cr,function(){return 0},(t=f(Er,Br(n),r),o(Nr,Ir(zn),kr(b),t)));var t}),d:e(function(){return kr(0)}),e:t(function(n,r){return f(Cr,n,r)}),f:void 0};var Fr,zr,Dr,qr,Mr,Sr,Wr,Rr=(Sr="Task",function(n){return{$:1,k:Sr,l:n}}),Gr=t(function(n,r){return Rr(f(Cr,n,r))}),Hr=U(b),Kr=t(function(n,r){return d(n,r)}),Pr=t(function(n,r){return f(Kr,r,n)}),Vr=function(n){switch(n.az){case"/":case"/about":return 0;case"/blog":return 1;case"/projects":return 3;case"/publications":return 4;default:return 2}},Zr=e(function(n,r,t){return f(Pr,Hr,{w:t,x:{},r:Vr(r)})}),Jr=U(b),Yr=Bn,Qr=t(function(n,r){return 1===n.$?r:r+":"+(n.a+"")}),Ur=e(function(n,r,t){return 1===r.$?t:l(t,l(n,r.a))}),Xr=t(function(n,r){var t=r.r,e=r.w,u=r.x;switch(n.$){case 0:return f(Pr,f(Yr,e,function(n){return o(Ur,"#",n.T,o(Ur,"?",n.ac,l(f(Qr,n.Z,l(n.ab?"https://":"http://",n.V)),n.az)))}(n.a)),{w:e,x:u,r:t});case 1:return f(Pr,function(n){return f(Gr,Ar,S(function(){try{Fn.location=n}catch(n){rn.location.reload(!1)}}))}(n.a),{w:e,x:u,r:t});default:return f(Pr,Hr,{w:e,x:u,r:n.a})}}),nt=un("a"),rt=D,tt=t(function(n,r){return f(fn,n,rt(r))}),et=tt("className"),ut=un("div"),at=t(function(n,r){return f(ut,f(zn,et("centre"),n),m([r]))}),it=un("h1"),ft=t(function(n,r){var t=r.a,e=r.b,u=r.c;return f(ut,f(zn,et("cover"),n),m([f(ut,b,m([t])),f(it,b,m([e])),f(ut,b,m([u]))]))}),ot=function(n){return f(tt,"href",/^javascript:/i.test((r=n).replace(/\s/g,""))?"":r);var r},ct=en,vt=ct(""),st=un("span"),dt=f(at,m([et("mb-8")]),f(ft,b,{a:vt,b:f(st,m([et("font:serif text:c-g3")]),m([f(it,m([et("text:c-w")]),m([ct("Hi. ")])),f(st,b,m([ct("I'm a ")])),f(nt,m([ot("#"),et("text:c-w hover:text:c-1")]),m([ct("PhD student")])),f(st,b,m([ct(" at Queen Mary University of London. ")])),f(st,b,m([ct("I'm also a ")])),f(nt,m([ot("#"),et("text:c-w hover:text:c-5")]),m([ct("web developer")])),f(st,b,m([ct(" that speaks ")])),f(nt,m([ot("#"),et("text:c-w hover:text:c-3")]),m([ct("elm")])),f(st,b,m([ct(" and ")])),f(nt,m([ot("#"),et("text:c-w hover:text:c-4")]),m([ct("javascript")])),f(st,b,m([ct(".")]))])),c:vt})),lt=un("p"),bt=t(function(n,r){return f(ut,f(zn,et("stack"),n),r)}),ht=f(at,m([et("mb-8")]),f(bt,m([et("px-4 font-size:s3")]),m([f(it,m([et("text:c-1")]),m([ct("What I do.")])),f(lt,m([et("mb-12")]),m([ct("My research investigates the how programming languages and their design can affect the way we write code.")])),f(lt,m([et("mb-12")]),m([ct("I have a particular interest in music computing and audio programming on the Web and I'm a member of the Centre for Digital Music research group.")])),f(lt,m([et("mb-12")]),m([f(st,b,m([ct("Beyond my research I'm an active member of the ")])),f(nt,m([ot("#"),et("underline")]),m([ct("elm community")])),f(st,b,m([ct(" and a strong advocate for functional programming in general.")]))]))]))),gt=un("section"),mt=f(at,m([et("mb-8")]),f(gt,b,m([f(it,m([et("text:c-4")]),m([ct("What I know.")]))]))),pt=f(at,m([et("mb-8")]),f(gt,b,m([f(it,m([et("text:c-2")]),m([ct("What I've made.")]))]))),$t=f(at,m([et("mb-8")]),f(gt,b,m([f(it,m([et("text:c-5")]),m([ct("Where I'm found.")]))]))),yt=f(at,m([et("mb-8")]),f(gt,b,m([f(it,m([et("text:c-3 mb-8")]),m([ct("Where I've been.")]))])));Fr={Main:{init:(Dr=(zr={au:Zr,aw:function(n){return{$:2,a:Vr(n)}},ax:function(n){return n.$?{$:1,a:n.a}:{$:0,a:n.a}},aB:function(){return Jr},aC:Xr,aD:function(n){switch(n.r){case 0:return{G:m([dt,ht,pt,yt,mt,$t]),H:"Andy Thompson – pd-andy"};case 1:case 2:case 3:default:return{G:b,H:""}}}}).aw,qr=zr.ax,Mr=function(){Mr.a(Dr(On()))},Cn({L:function(n){return Mr.a=n,Fn.addEventListener("popstate",Mr),0>Fn.navigator.userAgent.indexOf("Trident")||Fn.addEventListener("hashchange",Mr),t(function(r,t){if(!(t.ctrlKey||t.metaKey||t.shiftKey||t.button>=1||r.target||r.hasAttribute("download"))){t.preventDefault();var e=r.href,u=On(),a=jr(e).a;n(qr(a&&u.ab===a.ab&&u.V===a.V&&u.Z.a===a.Z.a?{$:0,a:a}:function(n){return{$:1,a:n}}(e)))}})},au:function(n){return o(zr.au,n,On(),Mr)},aD:zr.aD,aC:zr.aC,aB:zr.aB}))((Wr=0,{$:0,a:Wr}))(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?y(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,Fr):n.Elm=Fr}(this);
},{}],"epB2":[function(require,module,exports) {
"use strict";require("victormono");var i=require("./elm/Main.elm");i.Elm.Main.init({flags:{}});
},{"victormono":"aaNl","./elm/Main.elm":"ENeC"}]},{},["epB2"], null)