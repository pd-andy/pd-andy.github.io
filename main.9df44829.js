parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ENeC":[function(require,module,exports) {
!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function a(n){return r(4,n,function(r){return function(t){return function(e){return function(a){return n(r,t,e,a)}}}})}function i(n){return r(5,n,function(r){return function(t){return function(e){return function(a){return function(i){return n(r,t,e,a,i)}}}}})}function u(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function o(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function f(n,r,t,e,a){return 4===n.a?n.f(r,t,e,a):n(r)(t)(e)(a)}function c(n,r,t,e,a,i){return 5===n.a?n.f(r,t,e,a,i):n(r)(t)(e)(a)(i)}var l=e(function(n,r,t){for(var e=[],a=0;n>a;a++)e[a]=t(r+a);return e}),s=t(function(n,r){for(var t=[],e=0;n>e&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,w(t,r)}),v={$:0};function d(n,r){return{$:1,a:n,b:r}}var b=t(d);function h(n){for(var r=v,t=n.length;t--;)r=d(n[t],r);return r}function m(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function p(n,r){for(var t,e=[],a=g(n,r,0,e);a&&(t=e.pop());a=g(t.a,t.b,0,e));return a}function g(n,r,t,e){if(t>100)return e.push(w(n,r)),!0;if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&m(5),!1;for(var a in 0>n.$&&(n=Qn(n),r=Qn(r)),n)if(!g(n[a],r[a],t+1,e))return!1;return!0}var y=0;function w(n,r){return{a:n,b:r}}var $=Math.ceil,x=Math.floor,k=Math.log;function j(n){return{$:2,b:n}}j(function(n){return"number"!=typeof n?N("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?$r(n):!isFinite(n)||n%1?N("an INT",n):$r(n)}),j(function(n){return"boolean"==typeof n?$r(n):N("a BOOL",n)}),j(function(n){return"number"==typeof n?$r(n):N("a FLOAT",n)}),j(function(n){return $r(C(n))});var A=j(function(n){return"string"==typeof n?$r(n):n instanceof String?$r(n+""):N("a STRING",n)}),_=t(function(n,r){return I(n,P(r))});function I(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?$r(n.c):N("null",r);case 3:return E(r)?T(n.b,r,h):N("a LIST",r);case 4:return E(r)?T(n.b,r,L):N("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return N("an OBJECT with a field named `"+t+"`",r);var e=I(n.b,r[t]);return rr(e)?e:wr(u(kr,t,e.a));case 7:var a=n.e;return E(r)?r.length>a?(e=I(n.b,r[a]),rr(e)?e:wr(u(jr,a,e.a))):N("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r):N("an ARRAY",r);case 8:if("object"!=typeof r||null===r||E(r))return N("an OBJECT",r);var i=v;for(var o in r)if(r.hasOwnProperty(o)){if(e=I(n.b,r[o]),!rr(e))return wr(u(kr,o,e.a));i=d(w(o,e.a),i)}return $r(lr(i));case 9:for(var f=n.f,c=n.g,l=0;c.length>l;l++){if(e=I(c[l],r),!rr(e))return e;f=f(e.a)}return $r(f);case 10:return e=I(n.b,r),rr(e)?I(n.h(e.a),r):e;case 11:for(var s=v,b=n.g;b.b;b=b.b){if(e=I(b.a,r),rr(e))return e;s=d(e.a,s)}return wr(Ar(lr(s)));case 1:return wr(u(xr,n.a,C(r)));case 0:return $r(n.a)}}function T(n,r,t){for(var e=r.length,a=[],i=0;e>i;i++){var o=I(n,r[i]);if(!rr(o))return wr(u(jr,i,o.a));a[i]=o.a}return $r(t(a))}function E(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function L(n){return u(yr,n.length,function(r){return n[r]})}function N(n,r){return wr(u(xr,"Expecting "+n,C(r)))}function F(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return F(n.b,r.b);case 6:return n.d===r.d&&F(n.b,r.b);case 7:return n.e===r.e&&F(n.b,r.b);case 9:return n.f===r.f&&M(n.g,r.g);case 10:return n.h===r.h&&F(n.b,r.b);case 11:return M(n.g,r.g)}}function M(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;t>e;e++)if(!F(n[e],r[e]))return!1;return!0}function C(n){return n}function P(n){return n}function S(n){return{$:0,a:n}}function D(n){return{$:2,b:n,c:null}}C(null);var O=t(function(n,r){return{$:3,b:n,d:r}}),q=0;function R(n){var r={$:0,e:q++,f:n,g:null,h:[]};return U(r),r}var B=!1,Q=[];function U(n){if(Q.push(n),!B){for(B=!0;n=Q.shift();)W(n);B=!1}}function W(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,U(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var z={};function G(n,r){var t={g:r,h:void 0},e=n.c,a=n.d,i=n.e,c=n.f;function l(n){return u(O,l,{$:5,b:function(r){var u=r.a;return 0===r.$?o(a,t,u,n):i&&c?f(e,t,u.i,u.j,n):o(e,t,i?u.i:u.j,n)}})}return t.h=R(u(O,l,n.b))}var H=t(function(n,r){return D(function(t){n.g(r),t(S(y))})});function J(n){return function(r){return{$:1,k:n,l:r}}}function Y(n){return{$:2,m:n}}function K(n,r,t){var e,a={};for(var i in V(!0,r,a,null),V(!1,t,a,null),n)(e=n[i]).h.push({$:"fx",a:a[i]||{i:v,j:v}}),U(e)}function V(n,r,t,e){switch(r.$){case 1:var a=r.k,i=function(n,t,e){function a(n){for(var r=e;r;r=r.q)n=r.p(n);return n}return u(n?z[t].e:z[t].f,a,r.l)}(n,a,e);return void(t[a]=function(n,r,t){return t=t||{i:v,j:v},n?t.i=d(r,t.i):t.j=d(r,t.j),t}(n,i,t[a]));case 2:for(var o=r.m;o.b;o=o.b)V(n,o.a,t,e);return;case 3:return void V(n,r.o,t,{p:r.n,q:e})}}function X(n){z[n]&&m(3)}var Z=t(function(n,r){return r});function nn(n){var r=[],t=z[n].r,a=(0,D(function(n){var r=setTimeout(function(){n(S(y))},0);return function(){clearTimeout(r)}}));return z[n].b=a,z[n].c=e(function(n,e){for(;e.b;e=e.b)for(var i=r,u=P(t(e.a)),o=0;i.length>o;o++)i[o](u);return a}),{subscribe:function(n){r.push(n)},unsubscribe:function(n){var t=(r=r.slice()).indexOf(n);0>t||r.splice(t,1)}}}var rn,tn=t(function(n,r){return function(t){return n(r(t))}});var en="undefined"!=typeof document?document:{};function an(n,r){n.appendChild(r)}function un(n){return{$:0,a:n}}var on=t(function(n,r){return t(function(t,e){for(var a=[],i=0;e.b;e=e.b){var u=e.a;i+=u.b||0,a.push(u)}return i+=a.length,{$:1,c:r,d:vn(t),e:a,f:n,b:i}})})(void 0);t(function(n,r){return t(function(t,e){for(var a=[],i=0;e.b;e=e.b){var u=e.a;i+=u.b.b||0,a.push(u)}return i+=a.length,{$:2,c:r,d:vn(t),e:a,f:n,b:i}})})(void 0);var fn,cn=t(function(n,r){return{$:"a0",n:n,o:r}}),ln=t(function(n,r){return{$:"a2",n:n,o:r}}),sn=t(function(n,r){return{$:"a3",n:n,o:r}});function vn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,a=t.n,i=t.o;if("a2"!==e){var u=r[e]||(r[e]={});"a3"===e&&"class"===a?dn(u,a,i):u[a]=i}else"className"===a?dn(r,a,P(i)):r[a]=P(i)}return r}function dn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function bn(n,r){var t=n.$;if(5===t)return bn(n.k||(n.k=n.m()),r);if(0===t)return en.createTextNode(n.a);if(4===t){for(var e=n.k,a=n.j;4===e.$;)"object"!=typeof a?a=[a,e.j]:a.push(e.j),e=e.k;var i={j:a,p:r};return(u=bn(e,i)).elm_event_node_ref=i,u}if(3===t)return hn(u=n.h(n.g),r,n.d),u;var u=n.f?en.createElementNS(n.f,n.c):en.createElement(n.c);rn&&"a"==n.c&&u.addEventListener("click",rn(u)),hn(u,r,n.d);for(var o=n.e,f=0;o.length>f;f++)an(u,bn(1===t?o[f]:o[f].b,r));return u}function hn(n,r,t){for(var e in t){var a=t[e];"a1"===e?mn(n,a):"a0"===e?yn(n,r,a):"a3"===e?pn(n,a):"a4"===e?gn(n,a):("value"!==e&&"checked"!==e||n[e]!==a)&&(n[e]=a)}}function mn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function pn(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}function gn(n,r){for(var t in r){var e=r[t],a=e.f,i=e.o;void 0!==i?n.setAttributeNS(a,t,i):n.removeAttributeNS(a,t)}}function yn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var a in t){var i=t[a],u=e[a];if(i){if(u){if(u.q.$===i.$){u.q=i;continue}n.removeEventListener(a,u)}u=wn(r,i),n.addEventListener(a,u,fn&&{passive:2>Cr(i)}),e[a]=u}else n.removeEventListener(a,u),e[a]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){fn=!0}}))}catch(n){}function wn(n,r){function t(r){var e=t.q,a=I(e.a,r);if(rr(a)){for(var i,u=Cr(e),o=a.a,f=u?3>u?o.a:o.m:o,c=1==u?o.b:3==u&&o._,l=(c&&r.stopPropagation(),(2==u?o.b:3==u&&o.X)&&r.preventDefault(),n);i=l.j;){if("function"==typeof i)f=i(f);else for(var s=i.length;s--;)f=i[s](f);l=l.p}l(f,c)}}return t.q=r,t}function $n(n,r){return n.$==r.$&&F(n.a,r.a)}function xn(n,r,t,e){var a={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(a),a}function kn(n,r,t,e){if(n!==r){var a=n.$,i=r.$;if(a!==i){if(1!==a||2!==i)return void xn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=[],a=0;t>a;a++)e[a]=r[a].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),i=1}switch(i){case 5:for(var u=n.l,o=r.l,f=u.length,c=f===o.length;c&&f--;)c=u[f]===o[f];if(c)return void(r.k=n.k);r.k=r.m();var l=[];return kn(n.k,r.k,l,0),void(l.length>0&&xn(t,1,e,l));case 4:for(var s=n.j,v=r.j,d=!1,b=n.k;4===b.$;)d=!0,"object"!=typeof s?s=[s,b.j]:s.push(b.j),b=b.k;for(var h=r.k;4===h.$;)d=!0,"object"!=typeof v?v=[v,h.j]:v.push(h.j),h=h.k;return d&&s.length!==v.length?void xn(t,0,e,r):((d?function(n,r){for(var t=0;n.length>t;t++)if(n[t]!==r[t])return!1;return!0}(s,v):s===v)||xn(t,2,e,v),void kn(b,h,t,e+1));case 0:return void(n.a!==r.a&&xn(t,3,e,r.a));case 1:return void jn(n,r,t,e,_n);case 2:return void jn(n,r,t,e,In);case 3:if(n.h!==r.h)return void xn(t,0,e,r);var m=An(n.d,r.d);m&&xn(t,4,e,m);var p=r.i(n.g,r.g);return void(p&&xn(t,5,e,p))}}}function jn(n,r,t,e,a){if(n.c===r.c&&n.f===r.f){var i=An(n.d,r.d);i&&xn(t,4,e,i),a(n,r,t,e)}else xn(t,0,e,r)}function An(n,r,t){var e;for(var a in n)if("a1"!==a&&"a0"!==a&&"a3"!==a&&"a4"!==a)if(a in r){var i=n[a],u=r[a];i===u&&"value"!==a&&"checked"!==a||"a0"===t&&$n(i,u)||((e=e||{})[a]=u)}else(e=e||{})[a]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[a].f,o:void 0}:"string"==typeof n[a]?"":null;else{var o=An(n[a],r[a]||{},a);o&&((e=e||{})[a]=o)}for(var f in r)f in n||((e=e||{})[f]=r[f]);return e}function _n(n,r,t,e){var a=n.e,i=r.e,u=a.length,o=i.length;u>o?xn(t,6,e,{v:o,i:u-o}):o>u&&xn(t,7,e,{v:u,e:i});for(var f=o>u?u:o,c=0;f>c;c++){var l=a[c];kn(l,i[c],t,++e),e+=l.b||0}}function In(n,r,t,e){for(var a=[],i={},u=[],o=n.e,f=r.e,c=o.length,l=f.length,s=0,v=0,d=e;c>s&&l>v;){var b=(_=o[s]).a,h=(I=f[v]).a,m=_.b,p=I.b,g=void 0,y=void 0;if(b!==h){var w=o[s+1],$=f[v+1];if(w){var x=w.a,k=w.b;y=h===x}if($){var j=$.a,A=$.b;g=b===j}if(g&&y)kn(m,A,a,++d),En(i,a,b,p,v,u),d+=m.b||0,Ln(i,a,b,k,++d),d+=k.b||0,s+=2,v+=2;else if(g)d++,En(i,a,h,p,v,u),kn(m,A,a,d),d+=m.b||0,s+=1,v+=2;else if(y)Ln(i,a,b,m,++d),d+=m.b||0,kn(k,p,a,++d),d+=k.b||0,s+=2,v+=1;else{if(!w||x!==j)break;Ln(i,a,b,m,++d),En(i,a,h,p,v,u),d+=m.b||0,kn(k,A,a,++d),d+=k.b||0,s+=2,v+=2}}else kn(m,p,a,++d),d+=m.b||0,s++,v++}for(;c>s;){var _;Ln(i,a,(_=o[s]).a,m=_.b,++d),d+=m.b||0,s++}for(;l>v;){var I,T=T||[];En(i,a,(I=f[v]).a,I.b,void 0,T),v++}(a.length>0||u.length>0||T)&&xn(t,8,e,{w:a,x:u,y:T})}var Tn="_elmW6BL";function En(n,r,t,e,a,i){var u=n[t];if(!u)return i.push({r:a,A:u={c:0,z:e,r:a,s:void 0}}),void(n[t]=u);if(1===u.c){i.push({r:a,A:u}),u.c=2;var o=[];return kn(u.z,e,o,u.r),u.r=a,void(u.s.s={w:o,A:u})}En(n,r,t+Tn,e,a,i)}function Ln(n,r,t,e,a){var i=n[t];if(i){if(0===i.c){i.c=2;var u=[];return kn(e,i.z,u,a),void xn(r,9,a,{w:u,A:i})}Ln(n,r,t+Tn,e,a)}else{var o=xn(r,9,a,void 0);n[t]={c:1,z:e,r:a,s:o}}}function Nn(n,r,t,e){return 0===t.length?n:(function n(r,t,e,a){!function r(t,e,a,i,u,o,f){for(var c=a[i],l=c.r;l===u;){var s=c.$;if(1===s)n(t,e.k,c.s,f);else if(8===s)c.t=t,c.u=f,(v=c.s.w).length>0&&r(t,e,v,0,u,o,f);else if(9===s){c.t=t,c.u=f;var v,d=c.s;d&&(d.A.s=t,(v=d.w).length>0&&r(t,e,v,0,u,o,f))}else c.t=t,c.u=f;if(!(c=a[++i])||(l=c.r)>o)return i}var b=e.$;if(4===b){for(var h=e.k;4===h.$;)h=h.k;return r(t,h,a,i,u+1,o,t.elm_event_node_ref)}for(var m=e.e,p=t.childNodes,g=0;m.length>g;g++){var y=1===b?m[g]:m[g].b,w=++u+(y.b||0);if(!(u>l||l>w||(c=a[i=r(p[g],y,a,i,u,w,f)])&&(l=c.r)<=o))return i;u=w}return i}(r,t,e,0,0,t.b,a)}(n,r,t,e),Fn(n,t))}function Fn(n,r){for(var t=0;r.length>t;t++){var e=r[t],a=e.t,i=Mn(a,e);a===n&&(n=i)}return n}function Mn(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=bn(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return hn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Fn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;t.i>e;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var a=(t=r.s).e,i=n.childNodes[e=t.v];a.length>e;e++)n.insertBefore(bn(a[e],r.u),i);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var u=t.A;return void 0!==u.r&&n.parentNode.removeChild(n),u.s=Fn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=en.createDocumentFragment(),e=0;n.length>e;e++){var a=n[e].A;an(t,2===a.c?a.s:bn(a.z,r.u))}return t}}(t.y,r);n=Fn(n,t.w);for(var a=t.x,i=0;a.length>i;i++){var u=a[i],o=u.A,f=2===o.c?o.s:bn(o.z,r.u);n.insertBefore(f,n.childNodes[u.r])}return e&&an(n,e),n}(n,r);case 5:return r.s(n);default:m(10)}}var Cn=a(function(n,r,t,e){return function(n,r,t,e,a,i){var o=u(_,n,C(r?r.flags:void 0));rr(o)||m(2);var f={},c=(o=t(o.a)).a,l=i(v,c),s=function(n,r){var t;for(var e in z){var a=z[e];a.a&&((t=t||{})[e]=a.a(e,r)),n[e]=G(a,r)}return t}(f,v);function v(n,r){l(c=(o=u(e,n,c)).a,r),K(f,o.b,a(c))}return K(f,o.b,a(c)),s?{ports:s}:{}}(r,e,n.aK,n.aQ,n.aP,function(r,t){var a=n.aS,i=e.node,f=function n(r){if(3===r.nodeType)return un(r.textContent);if(1!==r.nodeType)return un("");for(var t=v,e=r.attributes,a=e.length;a--;){var i=e[a];t=d(u(sn,i.name,i.value),t)}var f=r.tagName.toLowerCase(),c=v,l=r.childNodes;for(a=l.length;a--;)c=d(n(l[a]),c);return o(on,f,t,c)}(i);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(Pn(e),r(n),1)}return function(a,i){n=a,i?(r(n),2===t&&(t=1)):(0===t&&Pn(e),t=2)}}(t,function(n){var t=a(n),e=function(n,r){var t=[];return kn(n,r,t,0),t}(f,t);i=Nn(i,f,e,r),f=t})})}),Pn=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Sn,Dn,On,qn=function(n){return{$:0,a:n}},Rn=b,Bn=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,a=n,i=o(n,t.b,t.c,o(Bn,n,r,t.e));n=a,r=i,t=e}}),Qn=function(n){return o(Bn,e(function(n,r,t){return u(Rn,w(n,r),t)}),v,n)},Un={aD:"teal",p:h([qn("I'm a PhD student on the Media and Arts Technology programme at Queen Mary University of London. My research is in the field of music computing, particularly looking at how programming languages are designed for musicians and audio programmers."),qn("Outside of my research, I have a keen interest in front-end web development and functional programming – and mixing the two (why aren't you using Elm yet?)"),qn("I'm currently looking for front-end work in London. If you'd like to learn a little more about me then keep scrolling or you can reach out to me via email, linkedin, or social media.")]),r:"About",aI:"about"},Wn=function(n){return{$:3,a:n}},zn={aD:"blue",p:h([Wn({M:"PhD Media and Arts Technology",R:"Queen Mary University of London",w:"2017 – 2021"}),Wn({M:"MA Computational Art",R:"Goldsmiths University of London",w:"2016 – 2017"}),Wn({M:"Ba(Hons) Creative Music Technology",R:"Bath Spa University",w:"2013 – 2016"})]),r:"Education",aI:"education"},Gn=function(n){return{$:4,a:n}},Hn={aD:"indigo",p:h([Gn({x:v,U:"Institute of Coding",u:"Demonstrator – Introduction to Coding Bootcamp",w:"July 2019, September 2019"}),Gn({x:v,U:"Queen Mary University of London",u:"Lead Demonstrator – The Semantic Web",w:"Jan 2019 – May 2019"})]),r:"Experience",aI:"experience"},Jn=function(n){return{$:5,a:n}},Yn={aD:"purple",p:h([Jn({x:h([qn("Flow is a complete framework for building complex Web Audio applications with javascript. It's built on an elm-like Model-View-Update architecture and couples strict separation of concerns with a concise declarative API for Web Audio programming.")]),O:"https://github.com/flow-lang/flow-framework",Q:"javascript / web audio / framework",u:"Flow"}),Jn({x:h([qn("Programming with the vanilla Web Audio API is a largely imperative, and object-oriented, affair. Elm-web-audio is an alternative, declarative, API for Web Audio programming in Elm.")]),O:"https://github.com/pd-andy/elm-web-audio",Q:"elm / web audio / library",u:"elm-web-audio"}),Jn({x:h([qn("Do is your typical, run-of-the-mill, front-end developer todo list app. Built as a first proper project using Elm as well as an opportunity to test out a utility-first css approach with tailwind, do supports creating / completing / discarding todos that get saved locally using the localStorage API.")]),O:"https://github.com/pd-andy/do-app",Q:"elm / localstorage / tailwindcss / application",u:"do-app"})]),r:"Projects",aI:"projects"},Kn=function(n){return{$:6,a:n}},Vn=function(n){return{$:1,a:n}},Xn={aD:"pink",p:h([qn("Here you'll find a memory dump of the various technologies I've learned and used up until now. These things are usually rated on a fairly arbitrary scale, so here's my best attempt at keeping it real:"),Vn("Languages"),Kn({g:"Comfortable",h:"JavaScript"}),Kn({g:"Comfortable",h:"Elm"}),Kn({g:"Familiar",h:"TypeScript"}),Kn({g:"Familiar",h:"CSS"}),Kn({g:"Familiar",h:"Haskell"}),Kn({g:"Aware",h:"ReasonML"}),Vn("Frameworks"),Kn({g:"Familiar",h:"Vue"}),Kn({g:"Aware",h:"React"}),Vn("Misc"),Kn({g:"Comfortable",h:"Web Audio API"}),Kn({g:"Familiar",h:"Git"})]),r:"Skills",aI:"skills"},Zn=e(function(n,r,t){return{ah:r,aj:t,h:n}}),nr=h([o(Zn,"Email","fas fa-envelope","mailto:andrew.thompson@qmul.ac.uk"),o(Zn,"Twitter","fab fa-twitter-square","https://twitter.com/_pdandy"),o(Zn,"Telegram","fab fa-telegram","https://t.me/pd_andy"),o(Zn,"LinkedIn","fab fa-linkedin-in","https://www.linkedin.com/in/andrew-thompson-3a6939124/"),o(Zn,"GitHub","fab fa-github-square","https://github.com/pd-andy")]),rr=function(n){return!n.$},tr=a(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),er=$,ar=t(function(n,r){return k(r)/k(n)}),ir=er(u(ar,2,32)),ur=[],or=f(tr,0,ir,ur,ur),fr=s,cr=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,a=n,i=u(n,t.a,r);n=a,r=i,t=e}}),lr=function(n){return o(cr,Rn,v,n)},sr=t(function(n,r){for(;;){var t=u(fr,32,n),e=t.b,a=u(Rn,{$:0,a:t.a},r);if(!e.b)return lr(a);n=e,r=a}}),vr=t(function(n,r){for(;;){var t=er(r/32);if(1===t)return u(fr,32,n).a;n=u(sr,n,v),r=t}}),dr=x,br=t(function(n,r){return function n(r,t,e){if("object"!=typeof r)return r===t?0:t>r?-1:1;if(void 0===r.$)return(e=n(r.a,t.a))?e:(e=n(r.b,t.b))?e:n(r.c,t.c);for(;r.b&&t.b&&!(e=n(r.a,t.a));r=r.b,t=t.b);return e||(r.b?1:t.b?-1:0)}(n,r)>0?n:r}),hr=function(n){return n.length},mr=t(function(n,r){if(r.a){var t=32*r.a,e=dr(u(ar,32,t-1)),a=n?lr(r.d):r.d,i=u(vr,a,r.a);return f(tr,hr(r.c)+t,u(br,5,e*ir),i,r.c)}return f(tr,hr(r.c),ir,ur,r.c)}),pr=l,gr=i(function(n,r,t,e,a){for(;;){if(0>r)return u(mr,!1,{d:e,a:t/32|0,c:a});var i={$:1,a:o(pr,32,r,n)};n=n,r-=32,t=t,e=u(Rn,i,e),a=a}}),yr=t(function(n,r){if(n>0){var t=n%32;return c(gr,r,n-t-32,n,v,o(pr,t,n-t,r))}return or}),wr=function(n){return{$:1,a:n}},$r=function(n){return{$:0,a:n}},xr=t(function(n,r){return{$:3,a:n,b:r}}),kr=t(function(n,r){return{$:0,a:n,b:r}}),jr=t(function(n,r){return{$:1,a:n,b:r}}),Ar=function(n){return{$:2,a:n}},_r=Y(v),Ir=function(n){return{$:0,a:n}},Tr=(Dn=A,X(Sn="onFocusChange"),z[Sn]={f:tn,r:Dn,a:function(n,r){var t=v,a=z[n].r,i=S(null);return z[n].b=i,z[n].c=e(function(n,r){return t=r,i}),{send:function(n){var e=u(_,a,C(n));rr(e)||m(4);for(var i=e.a,o=t;o.b;o=o.b)r(o.a(i))}}}},J(Sn)),Er=Y,Lr=C,Nr=function(n,r){return X(n),z[n]={e:Z,r:r,a:nn},J(n)}("scrollToElement",Lr),Fr=t(function(n,r){return n.$?w(r,Nr(n.a)):w(function(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}(r,{N:n.a}),_r)}),Mr=function(n){return{$:0,a:n}},Cr=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Pr=on("button"),Sr=un,Dr=t(function(n,r){return u(ln,n,Lr(r))}),Or=Dr("className"),qr=cn,Rr=t(function(n,r){return u(qr,n,{$:0,a:r})}),Br=function(n){return u(Rr,"click",Mr(n))},Qr=e(function(n,r,t){var e=t.aI,a=t.aD;return u(Pr,h([Or(p(n,e)?"text-"+a+"-600":"text-gray-900"),Or("font-bold text-xl"),Or("my-2"),Br(r(e))]),h([Sr(e)]))}),Ur=on("nav"),Wr=Dr("id"),zr=a(function(n,r,t,e){if(e.b){var a=e.a,i=e.b;if(i.b){var c=i.a,l=i.b;if(l.b){var s=l.a,v=l.b;if(v.b){var d=v.b;return u(n,a,u(n,c,u(n,s,u(n,v.a,t>500?o(cr,n,r,lr(d)):f(zr,n,r,t+1,d)))))}return u(n,a,u(n,c,u(n,s,r)))}return u(n,a,u(n,c,r))}return u(n,a,r)}return r}),Gr=e(function(n,r,t){return f(zr,n,r,0,t)}),Hr=t(function(n,r){return o(Gr,t(function(r,t){return u(Rn,n(r),t)}),v,r)}),Jr=on("a"),Yr=on("code"),Kr=on("div"),Vr=on("h2"),Xr=on("h3"),Zr=on("i"),nt=on("p"),rt=on("pre"),tt=on("span"),et=t(function(n,r){return u(sn,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),function(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}(r))}),at=function(n){return u(Dr,"href",/^javascript:/i.test((r=n).replace(/\s/g,""))?"":r);var r},it=function(n){switch(n.$){case 0:var r=n.a;return u(nt,h([Or("mt-4 text-lg text-justify")]),h([Sr(r)]));case 1:return r=n.a,u(Vr,h([Or("mt-4 text-2xl font-bold border-b-2 border-gray-900 mb-4")]),h([Sr(r)]));case 2:var t=n.a;return u(rt,h([Or("font-mono bg-gray-800 mt-4 p-2 border-l-8 border-gray-900 overflow-y-scroll text-white rounded-r-lg shadow")]),u(Hr,function(n){return u(Yr,h([Or("pl-2")]),h([Sr(n+"\n")]))},t));case 3:var e=n.a.M,a=n.a.R,i=n.a.w;return u(Kr,h([Or("pt-6")]),h([u(Vr,h([Or("text-2xl")]),h([Sr(e)])),u(Xr,h([Or("text-lg")]),h([Sr(a)])),u(tt,h([Or("italic")]),h([Sr(i)]))]));case 4:var o=n.a.u,f=n.a.U;return i=n.a.w,u(Kr,h([Or("pt-6")]),h([u(Vr,h([Or("text-2xl")]),h([Sr(o)])),u(Xr,h([Or("text-lg")]),h([Sr(f)])),u(tt,h([Or("italic")]),h([Sr(i)]))]));case 5:o=n.a.u;var c=n.a.Q,l=n.a.x,s=n.a.O;return u(Kr,h([Or("pt-6")]),h([u(Vr,h([Or("text-2xl font-bold")]),h([Sr(o)])),u(Xr,h([Or("text-md italic border-b-2 border-gray-900 inline-block pb-1")]),h([Sr(c)])),u(Kr,h([Or("mb-2"),u(et,"data-description","")]),u(Hr,it,l)),u(Jr,h([Or("text-md"),at(s)]),h([u(Zr,h([Or("fab fa-github-square mr-2")]),v),u(tt,h([Or("italic underline")]),h([Sr("Find it on GitHub.")]))]))]));default:var d=n.a.h,b=n.a.g;return u(Kr,h([Or("mt-4 text-lg flex justify-between")]),h([u(tt,h([Or("")]),h([Sr(d)])),u(tt,h([Or("")]),h([Sr(b)]))]))}},ut=on("h1"),ot=on("section"),ft=function(n){return u(ot,h([Wr(n.aI),Or("bg-"+n.aD+"-100 p-8 lg:p-12")]),h([u(ut,h([Or("lg:text-6xl text-4xl font-semibold border-b-4 border-gray-900 mb-4")]),h([Sr(n.r)])),u(Kr,h([Or("container")]),u(Hr,it,n.p))]))},ct=function(n){return u(Jr,h([Or("flex flex-col items-center my-6"),at(n.aj)]),h([u(Zr,h([Or(n.ah),Or("fa-2x")]),v),u(tt,h([Or("text-sm my-2")]),h([Sr(n.h)]))]))},lt=function(n){return{$:1,a:n}},st=on("aside"),vt=on("main"),dt=S,bt=dt(0),ht=O,mt=t(function(n,r){return u(ht,function(r){return dt(n(r))},r)}),pt=e(function(n,r,t){return u(ht,function(r){return u(ht,function(t){return dt(u(n,r,t))},t)},r)}),gt=H,yt=t(function(n,r){var t=r;return function(n){return D(function(r){r(S(R(n)))})}(u(ht,gt(n),t))});z.Task={b:bt,c:e(function(n,r){return u(mt,function(){return 0},(t=u(Hr,yt(n),r),o(Gr,pt(Rn),dt(v),t)));var t}),d:e(function(){return dt(0)}),e:t(function(n,r){return u(mt,n,r)}),f:void 0},J("Task"),On={Main:{init:Cn({aK:function(){return w({N:"about",P:h([Un,zn,Hn,Yn,Xn]),Y:nr},_r)},aP:function(){return Er(h([Tr(Ir)]))},aQ:Fr,aS:function(n){return u(Kr,h([Wr("app")]),h([u(st,h([Or("flex flex-col items-center justify-around bg-white text-gray-900 px-10")]),h([u(Kr,v,h([u(ut,h([Or("text-3xl")]),h([Sr("Andrew Thompson")])),u(Vr,h([Or("text-xl mb-4")]),h([Sr("PhD student @ Queen Mary University of London")])),(t=n.Y,u(Kr,h([Wr("socials"),Or("flex justify-around")]),u(Hr,ct,t)))])),(r=u(Hr,u(Qr,n.N,lt),n.P),u(Ur,h([Wr("nav"),Or("flex flex-col items-center justify-center")]),r))])),u(vt,h([Or("shadow-xl")]),u(Hr,ft,n.P))]));var r,t}})(Mr(0))(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?m(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,On):n.Elm=On}(this);
},{}],"E6X2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e,t){var n=t.node,o=t.flags,r=e.init({node:n,flags:o});return new Promise(function(e){window.requestAnimationFrame(function(){e(r)})})};exports.default=e;
},{}],"Gt/b":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t="",e=function(e){var i=Array.from(e.target.children).map(function(t){var e=t.getBoundingClientRect();return{y:Math.abs(e.y),id:t.id,inViewport:e.y<window.innerHeight&&e.y>-window.innerHeight-e.height}}).filter(function(t){return t.inViewport}).sort(function(t,e){return t.y-e.y}).shift();return i.id!==t?(t=i.id,i.id):(t=i.id,null)};exports.default=e;
},{}],"p34n":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){document.querySelector("#".concat(e)).scrollIntoView({behavior:"smooth"}),window.history.pushState(null,null,"#".concat(e))};exports.default=e;
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=require("./elm/Main.elm"),r=o(require("./js/elmPromisify")),n=o(require("./js/mostInViewport")),t=o(require("./js/scrollTo"));function o(e){return e&&e.__esModule?e:{default:e}}var l=document.querySelector("#elm-container"),u={};(0,r.default)(e.Elm.Main,{node:l,flags:u}).then(function(e){e.ports.scrollToElement.subscribe(t.default),document.querySelector("main").addEventListener("scroll",function(r){var t=(0,n.default)(r);t&&(e.ports.onFocusChange.send(t),window.history.pushState(null,null,"#".concat(t)))})});
},{"./elm/Main.elm":"ENeC","./js/elmPromisify":"E6X2","./js/mostInViewport":"Gt/b","./js/scrollTo":"p34n"}]},{},["epB2"], null)
//# sourceMappingURL=/main.9df44829.js.map