parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ENeC":[function(require,module,exports) {
!function(r){"use strict";function n(r,n,e){return e.a=r,e.f=n,e}function e(r){return n(2,r,function(n){return function(e){return r(n,e)}})}function t(r){return n(3,r,function(n){return function(e){return function(t){return r(n,e,t)}}})}function a(r){return n(4,r,function(n){return function(e){return function(t){return function(a){return r(n,e,t,a)}}}})}function u(r){return n(5,r,function(n){return function(e){return function(t){return function(a){return function(u){return r(n,e,t,a,u)}}}}})}function i(r,n,e){return 2===r.a?r.f(n,e):r(n)(e)}function o(r,n,e,t){return 3===r.a?r.f(n,e,t):r(n)(e)(t)}function f(r,n,e,t,a){return 4===r.a?r.f(n,e,t,a):r(n)(e)(t)(a)}function c(r,n,e,t,a,u){return 5===r.a?r.f(n,e,t,a,u):r(n)(e)(t)(a)(u)}var s=t(function(r,n,e){for(var t=[],a=0;r>a;a++)t[a]=e(n+a);return t}),l=e(function(r,n){for(var e=[],t=0;r>t&&n.b;t++)e[t]=n.a,n=n.b;return e.length=t,w(e,n)}),v={$:0};function d(r,n){return{$:1,a:r,b:n}}var b=e(d);function h(r){for(var n=v,e=r.length;e--;)n=d(r[e],n);return n}function g(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}function m(r,n){for(var e,t=[],a=p(r,n,0,t);a&&(e=t.pop());a=p(e.a,e.b,0,t));return a}function p(r,n,e,t){if(e>100)return t.push(w(r,n)),!0;if(r===n)return!0;if("object"!=typeof r||null===r||null===n)return"function"==typeof r&&g(5),!1;for(var a in 0>r.$&&(r=Br(r),n=Br(n)),r)if(!p(r[a],n[a],e+1,t))return!1;return!0}var y=0;function w(r,n){return{a:r,b:n}}var $=Math.ceil,x=Math.floor,k=Math.log;function j(r){return{$:2,b:r}}j(function(r){return"number"!=typeof r?N("an INT",r):r>-2147483647&&2147483647>r&&(0|r)===r?$n(r):!isFinite(r)||r%1?N("an INT",r):$n(r)}),j(function(r){return"boolean"==typeof r?$n(r):N("a BOOL",r)}),j(function(r){return"number"==typeof r?$n(r):N("a FLOAT",r)}),j(function(r){return $n(C(r))});var A=j(function(r){return"string"==typeof r?$n(r):r instanceof String?$n(r+""):N("a STRING",r)}),_=e(function(r,n){return I(r,P(n))});function I(r,n){switch(r.$){case 2:return r.b(n);case 5:return null===n?$n(r.c):N("null",n);case 3:return E(n)?T(r.b,n,h):N("a LIST",n);case 4:return E(n)?T(r.b,n,L):N("an ARRAY",n);case 6:var e=r.d;if("object"!=typeof n||null===n||!(e in n))return N("an OBJECT with a field named `"+e+"`",n);var t=I(r.b,n[e]);return rn(t)?t:wn(i(kn,e,t.a));case 7:var a=r.e;return E(n)?n.length>a?(t=I(r.b,n[a]),rn(t)?t:wn(i(jn,a,t.a))):N("a LONGER array. Need index "+a+" but only see "+n.length+" entries",n):N("an ARRAY",n);case 8:if("object"!=typeof n||null===n||E(n))return N("an OBJECT",n);var u=v;for(var o in n)if(n.hasOwnProperty(o)){if(t=I(r.b,n[o]),!rn(t))return wn(i(kn,o,t.a));u=d(w(o,t.a),u)}return $n(sn(u));case 9:for(var f=r.f,c=r.g,s=0;c.length>s;s++){if(t=I(c[s],n),!rn(t))return t;f=f(t.a)}return $n(f);case 10:return t=I(r.b,n),rn(t)?I(r.h(t.a),n):t;case 11:for(var l=v,b=r.g;b.b;b=b.b){if(t=I(b.a,n),rn(t))return t;l=d(t.a,l)}return wn(An(sn(l)));case 1:return wn(i(xn,r.a,C(n)));case 0:return $n(r.a)}}function T(r,n,e){for(var t=n.length,a=[],u=0;t>u;u++){var o=I(r,n[u]);if(!rn(o))return wn(i(jn,u,o.a));a[u]=o.a}return $n(e(a))}function E(r){return Array.isArray(r)||"undefined"!=typeof FileList&&r instanceof FileList}function L(r){return i(yn,r.length,function(n){return r[n]})}function N(r,n){return wn(i(xn,"Expecting "+r,C(n)))}function F(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 2:return r.b===n.b;case 5:return r.c===n.c;case 3:case 4:case 8:return F(r.b,n.b);case 6:return r.d===n.d&&F(r.b,n.b);case 7:return r.e===n.e&&F(r.b,n.b);case 9:return r.f===n.f&&M(r.g,n.g);case 10:return r.h===n.h&&F(r.b,n.b);case 11:return M(r.g,n.g)}}function M(r,n){var e=r.length;if(e!==n.length)return!1;for(var t=0;e>t;t++)if(!F(r[t],n[t]))return!1;return!0}function C(r){return r}function P(r){return r}function S(r){return{$:0,a:r}}function D(r){return{$:2,b:r,c:null}}C(null);var O=e(function(r,n){return{$:3,b:r,d:n}}),q=0;function R(r){var n={$:0,e:q++,f:r,g:null,h:[]};return U(n),n}var B=!1,Q=[];function U(r){if(Q.push(r),!B){for(B=!0;r=Q.shift();)W(r);B=!1}}function W(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,U(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}var z={};function G(r,n){var e={g:n,h:void 0},t=r.c,a=r.d,u=r.e,c=r.f;function s(r){return i(O,s,{$:5,b:function(n){var i=n.a;return 0===n.$?o(a,e,i,r):u&&c?f(t,e,i.i,i.j,r):o(t,e,u?i.i:i.j,r)}})}return e.h=R(i(O,s,r.b))}var H=e(function(r,n){return D(function(e){r.g(n),e(S(y))})});function J(r){return function(n){return{$:1,k:r,l:n}}}function Y(r){return{$:2,m:r}}function K(r,n,e){var t,a={};for(var u in V(!0,n,a,null),V(!1,e,a,null),r)(t=r[u]).h.push({$:"fx",a:a[u]||{i:v,j:v}}),U(t)}function V(r,n,e,t){switch(n.$){case 1:var a=n.k,u=function(r,e,t){function a(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return i(r?z[e].e:z[e].f,a,n.l)}(r,a,t);return void(e[a]=function(r,n,e){return e=e||{i:v,j:v},r?e.i=d(n,e.i):e.j=d(n,e.j),e}(r,u,e[a]));case 2:for(var o=n.m;o.b;o=o.b)V(r,o.a,e,t);return;case 3:return void V(r,n.o,e,{p:n.n,q:t})}}function X(r){z[r]&&g(3)}var Z=e(function(r,n){return n});function rr(r){var n=[],e=z[r].r,a=(0,D(function(r){var n=setTimeout(function(){r(S(y))},0);return function(){clearTimeout(n)}}));return z[r].b=a,z[r].c=t(function(r,t){for(;t.b;t=t.b)for(var u=n,i=P(e(t.a)),o=0;u.length>o;o++)u[o](i);return a}),{subscribe:function(r){n.push(r)},unsubscribe:function(r){var e=(n=n.slice()).indexOf(r);0>e||n.splice(e,1)}}}var nr,er=e(function(r,n){return function(e){return r(n(e))}});var tr="undefined"!=typeof document?document:{};function ar(r,n){r.appendChild(n)}function ur(r){return{$:0,a:r}}var ir=e(function(r,n){return e(function(e,t){for(var a=[],u=0;t.b;t=t.b){var i=t.a;u+=i.b||0,a.push(i)}return u+=a.length,{$:1,c:n,d:lr(e),e:a,f:r,b:u}})})(void 0);e(function(r,n){return e(function(e,t){for(var a=[],u=0;t.b;t=t.b){var i=t.a;u+=i.b.b||0,a.push(i)}return u+=a.length,{$:2,c:n,d:lr(e),e:a,f:r,b:u}})})(void 0);var or,fr=e(function(r,n){return{$:"a0",n:r,o:n}}),cr=e(function(r,n){return{$:"a2",n:r,o:n}}),sr=e(function(r,n){return{$:"a3",n:r,o:n}});function lr(r){for(var n={};r.b;r=r.b){var e=r.a,t=e.$,a=e.n,u=e.o;if("a2"!==t){var i=n[t]||(n[t]={});"a3"===t&&"class"===a?vr(i,a,u):i[a]=u}else"className"===a?vr(n,a,P(u)):n[a]=P(u)}return n}function vr(r,n,e){var t=r[n];r[n]=t?t+" "+e:e}function dr(r,n){var e=r.$;if(5===e)return dr(r.k||(r.k=r.m()),n);if(0===e)return tr.createTextNode(r.a);if(4===e){for(var t=r.k,a=r.j;4===t.$;)"object"!=typeof a?a=[a,t.j]:a.push(t.j),t=t.k;var u={j:a,p:n};return(i=dr(t,u)).elm_event_node_ref=u,i}if(3===e)return br(i=r.h(r.g),n,r.d),i;var i=r.f?tr.createElementNS(r.f,r.c):tr.createElement(r.c);nr&&"a"==r.c&&i.addEventListener("click",nr(i)),br(i,n,r.d);for(var o=r.e,f=0;o.length>f;f++)ar(i,dr(1===e?o[f]:o[f].b,n));return i}function br(r,n,e){for(var t in e){var a=e[t];"a1"===t?hr(r,a):"a0"===t?pr(r,n,a):"a3"===t?gr(r,a):"a4"===t?mr(r,a):("value"!==t&&"checked"!==t||r[t]!==a)&&(r[t]=a)}}function hr(r,n){var e=r.style;for(var t in n)e[t]=n[t]}function gr(r,n){for(var e in n){var t=n[e];void 0!==t?r.setAttribute(e,t):r.removeAttribute(e)}}function mr(r,n){for(var e in n){var t=n[e],a=t.f,u=t.o;void 0!==u?r.setAttributeNS(a,e,u):r.removeAttributeNS(a,e)}}function pr(r,n,e){var t=r.elmFs||(r.elmFs={});for(var a in e){var u=e[a],i=t[a];if(u){if(i){if(i.q.$===u.$){i.q=u;continue}r.removeEventListener(a,i)}i=yr(n,u),r.addEventListener(a,i,or&&{passive:2>Pn(u)}),t[a]=i}else r.removeEventListener(a,i),t[a]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){or=!0}}))}catch(r){}function yr(r,n){function e(n){var t=e.q,a=I(t.a,n);if(rn(a)){for(var u,i=Pn(t),o=a.a,f=i?3>i?o.a:o.m:o,c=1==i?o.b:3==i&&o._,s=(c&&n.stopPropagation(),(2==i?o.b:3==i&&o.X)&&n.preventDefault(),r);u=s.j;){if("function"==typeof u)f=u(f);else for(var l=u.length;l--;)f=u[l](f);s=s.p}s(f,c)}}return e.q=n,e}function wr(r,n){return r.$==n.$&&F(r.a,n.a)}function $r(r,n,e,t){var a={$:n,r:e,s:t,t:void 0,u:void 0};return r.push(a),a}function xr(r,n,e,t){if(r!==n){var a=r.$,u=n.$;if(a!==u){if(1!==a||2!==u)return void $r(e,0,t,n);n=function(r){for(var n=r.e,e=n.length,t=[],a=0;e>a;a++)t[a]=n[a].b;return{$:1,c:r.c,d:r.d,e:t,f:r.f,b:r.b}}(n),u=1}switch(u){case 5:for(var i=r.l,o=n.l,f=i.length,c=f===o.length;c&&f--;)c=i[f]===o[f];if(c)return void(n.k=r.k);n.k=n.m();var s=[];return xr(r.k,n.k,s,0),void(s.length>0&&$r(e,1,t,s));case 4:for(var l=r.j,v=n.j,d=!1,b=r.k;4===b.$;)d=!0,"object"!=typeof l?l=[l,b.j]:l.push(b.j),b=b.k;for(var h=n.k;4===h.$;)d=!0,"object"!=typeof v?v=[v,h.j]:v.push(h.j),h=h.k;return d&&l.length!==v.length?void $r(e,0,t,n):((d?function(r,n){for(var e=0;r.length>e;e++)if(r[e]!==n[e])return!1;return!0}(l,v):l===v)||$r(e,2,t,v),void xr(b,h,e,t+1));case 0:return void(r.a!==n.a&&$r(e,3,t,n.a));case 1:return void kr(r,n,e,t,Ar);case 2:return void kr(r,n,e,t,_r);case 3:if(r.h!==n.h)return void $r(e,0,t,n);var g=jr(r.d,n.d);g&&$r(e,4,t,g);var m=n.i(r.g,n.g);return void(m&&$r(e,5,t,m))}}}function kr(r,n,e,t,a){if(r.c===n.c&&r.f===n.f){var u=jr(r.d,n.d);u&&$r(e,4,t,u),a(r,n,e,t)}else $r(e,0,t,n)}function jr(r,n,e){var t;for(var a in r)if("a1"!==a&&"a0"!==a&&"a3"!==a&&"a4"!==a)if(a in n){var u=r[a],i=n[a];u===i&&"value"!==a&&"checked"!==a||"a0"===e&&wr(u,i)||((t=t||{})[a]=i)}else(t=t||{})[a]=e?"a1"===e?"":"a0"===e||"a3"===e?void 0:{f:r[a].f,o:void 0}:"string"==typeof r[a]?"":null;else{var o=jr(r[a],n[a]||{},a);o&&((t=t||{})[a]=o)}for(var f in n)f in r||((t=t||{})[f]=n[f]);return t}function Ar(r,n,e,t){var a=r.e,u=n.e,i=a.length,o=u.length;i>o?$r(e,6,t,{v:o,i:i-o}):o>i&&$r(e,7,t,{v:i,e:u});for(var f=o>i?i:o,c=0;f>c;c++){var s=a[c];xr(s,u[c],e,++t),t+=s.b||0}}function _r(r,n,e,t){for(var a=[],u={},i=[],o=r.e,f=n.e,c=o.length,s=f.length,l=0,v=0,d=t;c>l&&s>v;){var b=(_=o[l]).a,h=(I=f[v]).a,g=_.b,m=I.b,p=void 0,y=void 0;if(b!==h){var w=o[l+1],$=f[v+1];if(w){var x=w.a,k=w.b;y=h===x}if($){var j=$.a,A=$.b;p=b===j}if(p&&y)xr(g,A,a,++d),Tr(u,a,b,m,v,i),d+=g.b||0,Er(u,a,b,k,++d),d+=k.b||0,l+=2,v+=2;else if(p)d++,Tr(u,a,h,m,v,i),xr(g,A,a,d),d+=g.b||0,l+=1,v+=2;else if(y)Er(u,a,b,g,++d),d+=g.b||0,xr(k,m,a,++d),d+=k.b||0,l+=2,v+=1;else{if(!w||x!==j)break;Er(u,a,b,g,++d),Tr(u,a,h,m,v,i),d+=g.b||0,xr(k,A,a,++d),d+=k.b||0,l+=2,v+=2}}else xr(g,m,a,++d),d+=g.b||0,l++,v++}for(;c>l;){var _;Er(u,a,(_=o[l]).a,g=_.b,++d),d+=g.b||0,l++}for(;s>v;){var I,T=T||[];Tr(u,a,(I=f[v]).a,I.b,void 0,T),v++}(a.length>0||i.length>0||T)&&$r(e,8,t,{w:a,x:i,y:T})}var Ir="_elmW6BL";function Tr(r,n,e,t,a,u){var i=r[e];if(!i)return u.push({r:a,A:i={c:0,z:t,r:a,s:void 0}}),void(r[e]=i);if(1===i.c){u.push({r:a,A:i}),i.c=2;var o=[];return xr(i.z,t,o,i.r),i.r=a,void(i.s.s={w:o,A:i})}Tr(r,n,e+Ir,t,a,u)}function Er(r,n,e,t,a){var u=r[e];if(u){if(0===u.c){u.c=2;var i=[];return xr(t,u.z,i,a),void $r(n,9,a,{w:i,A:u})}Er(r,n,e+Ir,t,a)}else{var o=$r(n,9,a,void 0);r[e]={c:1,z:t,r:a,s:o}}}function Lr(r,n,e,t){return 0===e.length?r:(function r(n,e,t,a){!function n(e,t,a,u,i,o,f){for(var c=a[u],s=c.r;s===i;){var l=c.$;if(1===l)r(e,t.k,c.s,f);else if(8===l)c.t=e,c.u=f,(v=c.s.w).length>0&&n(e,t,v,0,i,o,f);else if(9===l){c.t=e,c.u=f;var v,d=c.s;d&&(d.A.s=e,(v=d.w).length>0&&n(e,t,v,0,i,o,f))}else c.t=e,c.u=f;if(!(c=a[++u])||(s=c.r)>o)return u}var b=t.$;if(4===b){for(var h=t.k;4===h.$;)h=h.k;return n(e,h,a,u,i+1,o,e.elm_event_node_ref)}for(var g=t.e,m=e.childNodes,p=0;g.length>p;p++){var y=1===b?g[p]:g[p].b,w=++i+(y.b||0);if(!(i>s||s>w||(c=a[u=n(m[p],y,a,u,i,w,f)])&&(s=c.r)<=o))return u;i=w}return u}(n,e,t,0,0,e.b,a)}(r,n,e,t),Nr(r,e))}function Nr(r,n){for(var e=0;n.length>e;e++){var t=n[e],a=t.t,u=Fr(a,t);a===r&&(r=u)}return r}function Fr(r,n){switch(n.$){case 0:return function(r){var e=r.parentNode,t=dr(n.s,n.u);return t.elm_event_node_ref||(t.elm_event_node_ref=r.elm_event_node_ref),e&&t!==r&&e.replaceChild(t,r),t}(r);case 4:return br(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Nr(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var e=n.s,t=0;e.i>t;t++)r.removeChild(r.childNodes[e.v]);return r;case 7:for(var a=(e=n.s).e,u=r.childNodes[t=e.v];a.length>t;t++)r.insertBefore(dr(a[t],n.u),u);return r;case 9:if(!(e=n.s))return r.parentNode.removeChild(r),r;var i=e.A;return void 0!==i.r&&r.parentNode.removeChild(r),i.s=Nr(r,e.w),r;case 8:return function(r,n){var e=n.s,t=function(r,n){if(r){for(var e=tr.createDocumentFragment(),t=0;r.length>t;t++){var a=r[t].A;ar(e,2===a.c?a.s:dr(a.z,n.u))}return e}}(e.y,n);r=Nr(r,e.w);for(var a=e.x,u=0;a.length>u;u++){var i=a[u],o=i.A,f=2===o.c?o.s:dr(o.z,n.u);r.insertBefore(f,r.childNodes[i.r])}return t&&ar(r,t),r}(r,n);case 5:return n.s(r);default:g(10)}}var Mr=a(function(r,n,e,t){return function(r,n,e,t,a,u){var o=i(_,r,C(n?n.flags:void 0));rn(o)||g(2);var f={},c=(o=e(o.a)).a,s=u(v,c),l=function(r,n){var e;for(var t in z){var a=z[t];a.a&&((e=e||{})[t]=a.a(t,n)),r[t]=G(a,n)}return e}(f,v);function v(r,n){s(c=(o=i(t,r,c)).a,n),K(f,o.b,a(c))}return K(f,o.b,a(c)),l?{ports:l}:{}}(n,t,r.aK,r.aQ,r.aP,function(n,e){var a=r.aS,u=t.node,f=function r(n){if(3===n.nodeType)return ur(n.textContent);if(1!==n.nodeType)return ur("");for(var e=v,t=n.attributes,a=t.length;a--;){var u=t[a];e=d(i(sr,u.name,u.value),e)}var f=n.tagName.toLowerCase(),c=v,s=n.childNodes;for(a=s.length;a--;)c=d(r(s[a]),c);return o(ir,f,e,c)}(u);return function(r,n){n(r);var e=0;function t(){e=1===e?0:(Cr(t),n(r),1)}return function(a,u){r=a,u?(n(r),2===e&&(e=1)):(0===e&&Cr(t),e=2)}}(e,function(r){var e=a(r),t=function(r,n){var e=[];return xr(r,n,e,0),e}(f,e);u=Lr(u,f,t,n),f=e})})}),Cr=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){return setTimeout(r,1e3/60)});"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Pr,Sr,Dr,Or=function(r){return{$:0,a:r}},qr=b,Rr=t(function(r,n,e){for(;;){if(-2===e.$)return n;var t=e.d,a=r,u=o(r,e.b,e.c,o(Rr,r,n,e.e));r=a,n=u,e=t}}),Br=function(r){return o(Rr,t(function(r,n,e){return i(qr,w(r,n),e)}),v,r)},Qr={aD:5,p:h([Or("I'm a PhD student on the Media and Arts Technology programme at Queen Mary University of London. My research is in the field of music computing, particularly looking at how programming languages are designed for musicians and audio programmers."),Or("Outside of my research, I have a keen interest in front-end web development and functional programming – and mixing the two (why aren't you using Elm yet?)"),Or("I'm currently looking for front-end work in London. If you'd like to learn a little more about me then keep scrolling or you can reach out to me via email, linkedin, or social media.")]),r:"About",aI:"about"},Ur=function(r){return{$:3,a:r}},Wr={aD:6,p:h([Ur({M:"PhD Media and Arts Technology",R:"Queen Mary University of London",w:"2017 – 2021"}),Ur({M:"MA Computational Art",R:"Goldsmiths University of London",w:"2016 – 2017"}),Ur({M:"Ba(Hons) Creative Music Technology",R:"Bath Spa University",w:"2013 – 2016"})]),r:"Education",aI:"education"},zr=function(r){return{$:4,a:r}},Gr={aD:7,p:h([zr({x:v,U:"Institute of Coding",u:"Demonstrator – Introduction to Coding Bootcamp",w:"July 2019, September 2019"}),zr({x:v,U:"Queen Mary University of London",u:"Lead Demonstrator – The Semantic Web",w:"Jan 2019 – May 2019"})]),r:"Experience",aI:"experience"},Hr=function(r){return{$:5,a:r}},Jr={aD:8,p:h([Hr({x:h([Or("Flow is a complete framework for building complex Web Audio applications with javascript. It's built on an elm-like Model-View-Update architecture and couples strict separation of concerns with a concise declarative API for Web Audio programming.")]),O:"https://github.com/flow-lang/flow-framework",Q:"javascript / web audio / framework",u:"Flow"}),Hr({x:h([Or("Programming with the vanilla Web Audio API is a largely imperative, and object-oriented, affair. Elm-web-audio is an alternative, declarative, API for Web Audio programming in Elm.")]),O:"https://github.com/pd-andy/elm-web-audio",Q:"elm / web audio / library",u:"elm-web-audio"}),Hr({x:h([Or("Do is your typical, run-of-the-mill, front-end developer todo list app. Built as a first proper project using Elm as well as an opportunity to test out a utility-first css approach with tailwind, do supports creating / completing / discarding todos that get saved locally using the localStorage API.")]),O:"https://github.com/pd-andy/do-app",Q:"elm / localstorage / tailwindcss / application",u:"do-app"})]),r:"Projects",aI:"projects"},Yr=function(r){return{$:6,a:r}},Kr=function(r){return{$:1,a:r}},Vr={aD:9,p:h([Or("Here you'll find a memory dump of the various technologies I've learned and used up until now. These things are usually rated on a fairly arbitrary scale, so here's my best attempt at keeping it real:"),Kr("Languages"),Yr({g:"Comfortable",h:"JavaScript"}),Yr({g:"Comfortable",h:"Elm"}),Yr({g:"Familiar",h:"TypeScript"}),Yr({g:"Familiar",h:"CSS"}),Yr({g:"Familiar",h:"Haskell"}),Yr({g:"Aware",h:"ReasonML"}),Kr("Frameworks"),Yr({g:"Familiar",h:"Vue"}),Yr({g:"Aware",h:"React"}),Kr("Misc"),Yr({g:"Comfortable",h:"Web Audio API"}),Yr({g:"Familiar",h:"Git"})]),r:"Skills",aI:"skills"},Xr=t(function(r,n,e){return{ah:n,aj:e,h:r}}),Zr=h([o(Xr,"Email","fas fa-envelope","mailto:andrew.thompson@qmul.ac.uk"),o(Xr,"Twitter","fab fa-twitter-square","https://twitter.com/_pdandy"),o(Xr,"Telegram","fab fa-telegram","https://t.me/pd_andy"),o(Xr,"LinkedIn","fab fa-linkedin-in","https://www.linkedin.com/in/andrew-thompson-3a6939124/"),o(Xr,"GitHub","fab fa-github-square","https://github.com/pd-andy")]),rn=function(r){return!r.$},nn=a(function(r,n,e,t){return{$:0,a:r,b:n,c:e,d:t}}),en=$,tn=e(function(r,n){return k(n)/k(r)}),an=en(i(tn,2,32)),un=[],on=f(nn,0,an,un,un),fn=l,cn=t(function(r,n,e){for(;;){if(!e.b)return n;var t=e.b,a=r,u=i(r,e.a,n);r=a,n=u,e=t}}),sn=function(r){return o(cn,qr,v,r)},ln=e(function(r,n){for(;;){var e=i(fn,32,r),t=e.b,a=i(qr,{$:0,a:e.a},n);if(!t.b)return sn(a);r=t,n=a}}),vn=e(function(r,n){for(;;){var e=en(n/32);if(1===e)return i(fn,32,r).a;r=i(ln,r,v),n=e}}),dn=x,bn=e(function(r,n){return function r(n,e,t){if("object"!=typeof n)return n===e?0:e>n?-1:1;if(void 0===n.$)return(t=r(n.a,e.a))?t:(t=r(n.b,e.b))?t:r(n.c,e.c);for(;n.b&&e.b&&!(t=r(n.a,e.a));n=n.b,e=e.b);return t||(n.b?1:e.b?-1:0)}(r,n)>0?r:n}),hn=function(r){return r.length},gn=e(function(r,n){if(n.a){var e=32*n.a,t=dn(i(tn,32,e-1)),a=r?sn(n.d):n.d,u=i(vn,a,n.a);return f(nn,hn(n.c)+e,i(bn,5,t*an),u,n.c)}return f(nn,hn(n.c),an,un,n.c)}),mn=s,pn=u(function(r,n,e,t,a){for(;;){if(0>n)return i(gn,!1,{d:t,a:e/32|0,c:a});var u={$:1,a:o(mn,32,n,r)};r=r,n-=32,e=e,t=i(qr,u,t),a=a}}),yn=e(function(r,n){if(r>0){var e=r%32;return c(pn,n,r-e-32,r,v,o(mn,e,r-e,n))}return on}),wn=function(r){return{$:1,a:r}},$n=function(r){return{$:0,a:r}},xn=e(function(r,n){return{$:3,a:r,b:n}}),kn=e(function(r,n){return{$:0,a:r,b:n}}),jn=e(function(r,n){return{$:1,a:r,b:n}}),An=function(r){return{$:2,a:r}},_n=Y(v),In=function(r){return{$:0,a:r}},Tn=(Sr=A,X(Pr="onFocusChange"),z[Pr]={f:er,r:Sr,a:function(r,n){var e=v,a=z[r].r,u=S(null);return z[r].b=u,z[r].c=t(function(r,n){return e=n,u}),{send:function(r){var t=i(_,a,C(r));rn(t)||g(4);for(var u=t.a,o=e;o.b;o=o.b)n(o.a(u))}}}},J(Pr)),En=Y,Ln=C,Nn=function(r,n){return X(r),z[r]={e:Z,r:n,a:rr},J(r)}("scrollToElement",Ln),Fn=e(function(r,n){return r.$?w(n,Nn(r.a)):w(function(r,n){var e={};for(var t in r)e[t]=r[t];for(var t in n)e[t]=n[t];return e}(n,{N:r.a}),_n)}),Mn=function(r){switch(r){case 0:return"text-gray-600";case 1:return"text-red-600";case 2:return"text-orange-600";case 3:return"text-yellow-600";case 4:return"text-green-600";case 5:return"text-teal-600";case 6:return"text-blue-600";case 7:return"text-indigo-600";case 8:return"text-purple-600";default:return"text-pink-600"}},Cn=function(r){return{$:0,a:r}},Pn=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Sn=ir("button"),Dn=ur,On=e(function(r,n){return i(cr,r,Ln(n))}),qn=On("className"),Rn=fr,Bn=e(function(r,n){return i(Rn,r,{$:0,a:n})}),Qn=function(r){return i(Bn,"click",Cn(r))},Un=t(function(r,n,e){var t=e.aI,a=e.aD;return i(Sn,h([qn(m(r,t)?Mn(a):"text-gray-900"),qn("font-bold text-xl"),qn("my-2"),Qn(n(t))]),h([Dn(t)]))}),Wn=ir("nav"),zn=On("id"),Gn=function(r){switch(r){case 0:return"bg-gray-100";case 1:return"bg-red-100";case 2:return"bg-orange-100";case 3:return"bg-yellow-100";case 4:return"bg-green-100";case 5:return"bg-teal-100";case 6:return"bg-blue-100";case 7:return"bg-indigo-100";case 8:return"bg-purple-100";default:return"bg-pink-100"}},Hn=a(function(r,n,e,t){if(t.b){var a=t.a,u=t.b;if(u.b){var c=u.a,s=u.b;if(s.b){var l=s.a,v=s.b;if(v.b){var d=v.b;return i(r,a,i(r,c,i(r,l,i(r,v.a,e>500?o(cn,r,n,sn(d)):f(Hn,r,n,e+1,d)))))}return i(r,a,i(r,c,i(r,l,n)))}return i(r,a,i(r,c,n))}return i(r,a,n)}return n}),Jn=t(function(r,n,e){return f(Hn,r,n,0,e)}),Yn=e(function(r,n){return o(Jn,e(function(n,e){return i(qr,r(n),e)}),v,n)}),Kn=ir("a"),Vn=ir("code"),Xn=ir("div"),Zn=ir("h2"),re=ir("h3"),ne=ir("i"),ee=ir("p"),te=ir("pre"),ae=ir("span"),ue=e(function(r,n){return i(sr,function(r){return/^(on|formAction$)/i.test(r)?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),ie=function(r){return i(On,"href",/^javascript:/i.test((n=r).replace(/\s/g,""))?"":n);var n},oe=function(r){switch(r.$){case 0:var n=r.a;return i(ee,h([qn("mt-4 text-lg text-justify")]),h([Dn(n)]));case 1:return n=r.a,i(Zn,h([qn("mt-4 text-2xl font-bold border-b-2 border-gray-900 mb-4")]),h([Dn(n)]));case 2:var e=r.a;return i(te,h([qn("font-mono bg-gray-800 mt-4 p-2 border-l-8 border-gray-900 overflow-y-scroll text-white rounded-r-lg shadow")]),i(Yn,function(r){return i(Vn,h([qn("pl-2")]),h([Dn(r+"\n")]))},e));case 3:var t=r.a.M,a=r.a.R,u=r.a.w;return i(Xn,h([qn("pt-6")]),h([i(Zn,h([qn("text-2xl")]),h([Dn(t)])),i(re,h([qn("text-lg")]),h([Dn(a)])),i(ae,h([qn("italic")]),h([Dn(u)]))]));case 4:var o=r.a.u,f=r.a.U;return u=r.a.w,i(Xn,h([qn("pt-6")]),h([i(Zn,h([qn("text-2xl")]),h([Dn(o)])),i(re,h([qn("text-lg")]),h([Dn(f)])),i(ae,h([qn("italic")]),h([Dn(u)]))]));case 5:o=r.a.u;var c=r.a.Q,s=r.a.x,l=r.a.O;return i(Xn,h([qn("pt-6")]),h([i(Zn,h([qn("text-2xl font-bold")]),h([Dn(o)])),i(re,h([qn("text-md italic border-b-2 border-gray-900 inline-block pb-1")]),h([Dn(c)])),i(Xn,h([qn("mb-2"),i(ue,"data-description","")]),i(Yn,oe,s)),i(Kn,h([qn("text-md"),ie(l)]),h([i(ne,h([qn("fab fa-github-square mr-2")]),v),i(ae,h([qn("italic underline")]),h([Dn("Find it on GitHub.")]))]))]));default:var d=r.a.h,b=r.a.g;return i(Xn,h([qn("mt-4 text-lg flex justify-between")]),h([i(ae,h([qn("")]),h([Dn(d)])),i(ae,h([qn("")]),h([Dn(b)]))]))}},fe=ir("h1"),ce=ir("section"),se=function(r){return i(ce,h([zn(r.aI),qn(Gn(r.aD)),qn("p-8 lg:p-12")]),h([i(fe,h([qn("lg:text-6xl text-4xl font-semibold border-b-4 border-gray-900 mb-4")]),h([Dn(r.r)])),i(Xn,h([qn("container")]),i(Yn,oe,r.p))]))},le=function(r){return i(Kn,h([qn("flex flex-col items-center my-6"),ie(r.aj)]),h([i(ne,h([qn(r.ah),qn("fa-2x")]),v),i(ae,h([qn("text-sm my-2")]),h([Dn(r.h)]))]))},ve=function(r){return{$:1,a:r}},de=ir("aside"),be=ir("main"),he=S,ge=he(0),me=O,pe=e(function(r,n){return i(me,function(n){return he(r(n))},n)}),ye=t(function(r,n,e){return i(me,function(n){return i(me,function(e){return he(i(r,n,e))},e)},n)}),we=H,$e=e(function(r,n){var e=n;return function(r){return D(function(n){n(S(R(r)))})}(i(me,we(r),e))});z.Task={b:ge,c:t(function(r,n){return i(pe,function(){return 0},(e=i(Yn,$e(r),n),o(Jn,ye(qr),he(v),e)));var e}),d:t(function(){return he(0)}),e:e(function(r,n){return i(pe,r,n)}),f:void 0},J("Task"),Dr={Main:{init:Mr({aK:function(){return w({N:"about",P:h([Qr,Wr,Gr,Jr,Vr]),Y:Zr},_n)},aP:function(){return En(h([Tn(In)]))},aQ:Fn,aS:function(r){return i(Xn,h([zn("app")]),h([i(de,h([qn("flex flex-col items-center justify-around bg-white text-gray-900 px-10")]),h([i(Xn,v,h([i(fe,h([qn("text-3xl")]),h([Dn("Andrew Thompson")])),i(Zn,h([qn("text-xl mb-4")]),h([Dn("PhD student @ Queen Mary University of London")])),(e=r.Y,i(Xn,h([zn("socials"),qn("flex justify-around")]),i(Yn,le,e)))])),(n=i(Yn,i(Un,r.N,ve),r.P),i(Wn,h([zn("nav"),qn("flex flex-col items-center justify-center")]),n))])),i(be,h([qn("shadow-xl")]),i(Yn,se,r.P))]));var n,e}})(Cn(0))(0)}},r.Elm?function r(n,e){for(var t in e)t in n?"init"==t?g(6):r(n[t],e[t]):n[t]=e[t]}(r.Elm,Dr):r.Elm=Dr}(this);
},{}],"E6X2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e,t){var n=t.node,o=t.flags,r=e.init({node:n,flags:o});return new Promise(function(e){window.requestAnimationFrame(function(){e(r)})})};exports.default=e;
},{}],"Gt/b":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t="",e=function(e){var i=Array.from(e.target.children).map(function(t){var e=t.getBoundingClientRect();return{y:Math.abs(e.y),id:t.id,inViewport:e.y<window.innerHeight&&e.y>-window.innerHeight-e.height}}).filter(function(t){return t.inViewport}).sort(function(t,e){return t.y-e.y}).shift();return i.id!==t?(t=i.id,i.id):(t=i.id,null)};exports.default=e;
},{}],"p34n":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){document.querySelector("#".concat(e)).scrollIntoView({behavior:"smooth"}),window.history.pushState(null,null,"#".concat(e))};exports.default=e;
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=require("./elm/Main.elm"),r=o(require("./js/elmPromisify")),n=o(require("./js/mostInViewport")),t=o(require("./js/scrollTo"));function o(e){return e&&e.__esModule?e:{default:e}}var l=document.querySelector("#elm-container"),u={};(0,r.default)(e.Elm.Main,{node:l,flags:u}).then(function(e){e.ports.scrollToElement.subscribe(t.default),document.querySelector("main").addEventListener("scroll",function(r){var t=(0,n.default)(r);t&&(e.ports.onFocusChange.send(t),window.history.pushState(null,null,"#".concat(t)))})});
},{"./elm/Main.elm":"ENeC","./js/elmPromisify":"E6X2","./js/mostInViewport":"Gt/b","./js/scrollTo":"p34n"}]},{},["epB2"], null)
//# sourceMappingURL=/main.3c5caa31.js.map