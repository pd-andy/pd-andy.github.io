parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jE9z":[function(require,module,exports) {

},{"./../webfonts/fa-brands-400.eot":[["fa-brands-400.9046b690.eot","OeOC"],"OeOC"],"./../webfonts/fa-brands-400.woff2":[["fa-brands-400.48fc701a.woff2","pV19"],"pV19"],"./../webfonts/fa-brands-400.woff":[["fa-brands-400.c1985361.woff","Vw87"],"Vw87"],"./../webfonts/fa-brands-400.ttf":[["fa-brands-400.81bfb96b.ttf","ZUts"],"ZUts"],"./../webfonts/fa-brands-400.svg":[["fa-brands-400.0c371f12.svg","2w9R"],"2w9R"],"./../webfonts/fa-regular-400.eot":[["fa-regular-400.0ec79e7c.eot","aZUn"],"aZUn"],"./../webfonts/fa-regular-400.woff2":[["fa-regular-400.44360617.woff2","z6Vs"],"z6Vs"],"./../webfonts/fa-regular-400.woff":[["fa-regular-400.fbfcbca9.woff","HYrK"],"HYrK"],"./../webfonts/fa-regular-400.ttf":[["fa-regular-400.c980d10d.ttf","2qzj"],"2qzj"],"./../webfonts/fa-regular-400.svg":[["fa-regular-400.6050b190.svg","Oses"],"Oses"],"./../webfonts/fa-solid-900.eot":[["fa-solid-900.e8b00e2f.eot","0T+/"],"0T+/"],"./../webfonts/fa-solid-900.woff2":[["fa-solid-900.d4f587c2.woff2","y7TU"],"y7TU"],"./../webfonts/fa-solid-900.woff":[["fa-solid-900.00b0a996.woff","PICE"],"PICE"],"./../webfonts/fa-solid-900.ttf":[["fa-solid-900.c074b2a6.ttf","lbz5"],"lbz5"],"./../webfonts/fa-solid-900.svg":[["fa-solid-900.0c23dc7f.svg","WVgM"],"WVgM"]}],"0JjY":[function(require,module,exports) {
module.exports="/do-app.6d038790.png";
},{}],"fl9N":[function(require,module,exports) {
module.exports="/flow-architecture.5427e0d2.png";
},{}],"ENeC":[function(require,module,exports) {
!function(n){"use strict";function e(n,e,r){return r.a=n,r.f=e,r}function r(n){return e(2,n,function(e){return function(r){return n(e,r)}})}function t(n){return e(3,n,function(e){return function(r){return function(t){return n(e,r,t)}}})}function a(n){return e(4,n,function(e){return function(r){return function(t){return function(a){return n(e,r,t,a)}}}})}function i(n){return e(5,n,function(e){return function(r){return function(t){return function(a){return function(i){return n(e,r,t,a,i)}}}}})}function o(n,e,r){return 2===n.a?n.f(e,r):n(e)(r)}function u(n,e,r,t){return 3===n.a?n.f(e,r,t):n(e)(r)(t)}function f(n,e,r,t,a){return 4===n.a?n.f(e,r,t,a):n(e)(r)(t)(a)}function c(n,e,r,t,a,i){return 5===n.a?n.f(e,r,t,a,i):n(e)(r)(t)(a)(i)}var s=t(function(n,e,r){for(var t=[],a=0;n>a;a++)t[a]=r(e+a);return t}),l=r(function(n,e){for(var r=[],t=0;n>t&&e.b;t++)r[t]=e.a,e=e.b;return r.length=t,w(r,e)}),d={$:0};function v(n,e){return{$:1,a:n,b:e}}var h=r(v);function b(n){for(var e=d,r=n.length;r--;)e=v(n[r],e);return e}function m(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function p(n,e){for(var r,t=[],a=g(n,e,0,t);a&&(r=t.pop());a=g(r.a,r.b,0,t));return a}function g(n,e,r,t){if(r>100)return t.push(w(n,e)),!0;if(n===e)return!0;if("object"!=typeof n||null===n||null===e)return"function"==typeof n&&m(5),!1;for(var a in 0>n.$&&(n=Vn(n),e=Vn(e)),n)if(!g(n[a],e[a],r+1,t))return!1;return!0}var y=0;function w(n,e){return{a:n,b:e}}var $=Math.ceil,x=Math.floor,j=Math.log;function k(n){return{$:2,b:n}}k(function(n){return"number"!=typeof n?q("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?xe(n):!isFinite(n)||n%1?q("an INT",n):xe(n)}),k(function(n){return"boolean"==typeof n?xe(n):q("a BOOL",n)}),k(function(n){return"number"==typeof n?xe(n):q("a FLOAT",n)}),k(function(n){return xe(C(n))});var A=k(function(n){return"string"==typeof n?xe(n):n instanceof String?xe(n+""):q("a STRING",n)}),L=r(function(n,e){return{$:6,d:n,b:e}}),T=r(function(n,e){return{$:10,b:e,h:n}}),I=r(function(n,e){return N(n,S(e))});function N(n,e){switch(n.$){case 2:return n.b(e);case 5:return null===e?xe(n.c):q("null",e);case 3:return E(e)?F(n.b,e,b):q("a LIST",e);case 4:return E(e)?F(n.b,e,_):q("an ARRAY",e);case 6:var r=n.d;if("object"!=typeof e||null===e||!(r in e))return q("an OBJECT with a field named `"+r+"`",e);var t=N(n.b,e[r]);return re(t)?t:$e(o(ke,r,t.a));case 7:var a=n.e;return E(e)?e.length>a?(t=N(n.b,e[a]),re(t)?t:$e(o(Ae,a,t.a))):q("a LONGER array. Need index "+a+" but only see "+e.length+" entries",e):q("an ARRAY",e);case 8:if("object"!=typeof e||null===e||E(e))return q("an OBJECT",e);var i=d;for(var u in e)if(e.hasOwnProperty(u)){if(t=N(n.b,e[u]),!re(t))return $e(o(ke,u,t.a));i=v(w(u,t.a),i)}return xe(le(i));case 9:for(var f=n.f,c=n.g,s=0;c.length>s;s++){if(t=N(c[s],e),!re(t))return t;f=f(t.a)}return xe(f);case 10:return t=N(n.b,e),re(t)?N(n.h(t.a),e):t;case 11:for(var l=d,h=n.g;h.b;h=h.b){if(t=N(h.a,e),re(t))return t;l=v(t.a,l)}return $e(Le(le(l)));case 1:return $e(o(je,n.a,C(e)));case 0:return xe(n.a)}}function F(n,e,r){for(var t=e.length,a=[],i=0;t>i;i++){var u=N(n,e[i]);if(!re(u))return $e(o(Ae,i,u.a));a[i]=u.a}return xe(r(a))}function E(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function _(n){return o(we,n.length,function(e){return n[e]})}function q(n,e){return $e(o(je,"Expecting "+n,C(e)))}function M(n,e){if(n===e)return!0;if(n.$!==e.$)return!1;switch(n.$){case 0:case 1:return n.a===e.a;case 2:return n.b===e.b;case 5:return n.c===e.c;case 3:case 4:case 8:return M(n.b,e.b);case 6:return n.d===e.d&&M(n.b,e.b);case 7:return n.e===e.e&&M(n.b,e.b);case 9:return n.f===e.f&&P(n.g,e.g);case 10:return n.h===e.h&&M(n.b,e.b);case 11:return P(n.g,e.g)}}function P(n,e){var r=n.length;if(r!==e.length)return!1;for(var t=0;r>t;t++)if(!M(n[t],e[t]))return!1;return!0}function C(n){return n}function S(n){return n}function O(n){return{$:0,a:n}}function B(n){return{$:2,b:n,c:null}}C(null);var R=r(function(n,e){return{$:3,b:n,d:e}}),D=0;function U(n){var e={$:0,e:D++,f:n,g:null,h:[]};return J(e),e}var V=!1,W=[];function J(n){if(W.push(n),!V){for(V=!0;n=W.shift();)Q(n);V=!1}}function Q(n){for(;n.f;){var e=n.f.$;if(0===e||1===e){for(;n.g&&n.g.$!==e;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===e)return void(n.f.c=n.f.b(function(e){n.f=e,J(n)}));if(5===e){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===e?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var z={};function G(n,e){var r={g:e,h:void 0},t=n.c,a=n.d,i=n.e,c=n.f;function s(n){return o(R,s,{$:5,b:function(e){var o=e.a;return 0===e.$?u(a,r,o,n):i&&c?f(t,r,o.i,o.j,n):u(t,r,i?o.i:o.j,n)}})}return r.h=U(o(R,s,n.b))}var H=r(function(n,e){return B(function(r){n.g(e),r(O(y))})});function Y(n){return function(e){return{$:1,k:n,l:e}}}function Z(n){return{$:2,m:n}}function K(n,e,r){var t,a={};for(var i in X(!0,e,a,null),X(!1,r,a,null),n)(t=n[i]).h.push({$:"fx",a:a[i]||{i:d,j:d}}),J(t)}function X(n,e,r,t){switch(e.$){case 1:var a=e.k,i=function(n,r,t){function a(n){for(var e=t;e;e=e.q)n=e.p(n);return n}return o(n?z[r].e:z[r].f,a,e.l)}(n,a,t);return void(r[a]=function(n,e,r){return r=r||{i:d,j:d},n?r.i=v(e,r.i):r.j=v(e,r.j),r}(n,i,r[a]));case 2:for(var u=e.m;u.b;u=u.b)X(n,u.a,r,t);return;case 3:return void X(n,e.o,r,{p:e.n,q:t})}}function nn(n){z[n]&&m(3)}var en=r(function(n,e){return e});function rn(n){var e=[],r=z[n].r,a=(0,B(function(n){var e=setTimeout(function(){n(O(y))},0);return function(){clearTimeout(e)}}));return z[n].b=a,z[n].c=t(function(n,t){for(;t.b;t=t.b)for(var i=e,o=S(r(t.a)),u=0;i.length>u;u++)i[u](o);return a}),{subscribe:function(n){e.push(n)},unsubscribe:function(n){var r=(e=e.slice()).indexOf(n);0>r||e.splice(r,1)}}}var tn,an=r(function(n,e){return function(r){return n(e(r))}});var on="undefined"!=typeof document?document:{};function un(n,e){n.appendChild(e)}function fn(n){return{$:0,a:n}}var cn=r(function(n,e){return r(function(r,t){for(var a=[],i=0;t.b;t=t.b){var o=t.a;i+=o.b||0,a.push(o)}return i+=a.length,{$:1,c:e,d:hn(r),e:a,f:n,b:i}})})(void 0);r(function(n,e){return r(function(r,t){for(var a=[],i=0;t.b;t=t.b){var o=t.a;i+=o.b.b||0,a.push(o)}return i+=a.length,{$:2,c:e,d:hn(r),e:a,f:n,b:i}})})(void 0);var sn,ln=r(function(n,e){return{$:"a0",n:n,o:e}}),dn=r(function(n,e){return{$:"a2",n:n,o:e}}),vn=r(function(n,e){return{$:"a3",n:n,o:e}});function hn(n){for(var e={};n.b;n=n.b){var r=n.a,t=r.$,a=r.n,i=r.o;if("a2"!==t){var o=e[t]||(e[t]={});"a3"===t&&"class"===a?bn(o,a,i):o[a]=i}else"className"===a?bn(e,a,S(i)):e[a]=S(i)}return e}function bn(n,e,r){var t=n[e];n[e]=t?t+" "+r:r}function mn(n,e){var r=n.$;if(5===r)return mn(n.k||(n.k=n.m()),e);if(0===r)return on.createTextNode(n.a);if(4===r){for(var t=n.k,a=n.j;4===t.$;)"object"!=typeof a?a=[a,t.j]:a.push(t.j),t=t.k;var i={j:a,p:e};return(o=mn(t,i)).elm_event_node_ref=i,o}if(3===r)return pn(o=n.h(n.g),e,n.d),o;var o=n.f?on.createElementNS(n.f,n.c):on.createElement(n.c);tn&&"a"==n.c&&o.addEventListener("click",tn(o)),pn(o,e,n.d);for(var u=n.e,f=0;u.length>f;f++)un(o,mn(1===r?u[f]:u[f].b,e));return o}function pn(n,e,r){for(var t in r){var a=r[t];"a1"===t?gn(n,a):"a0"===t?$n(n,e,a):"a3"===t?yn(n,a):"a4"===t?wn(n,a):("value"!==t&&"checked"!==t||n[t]!==a)&&(n[t]=a)}}function gn(n,e){var r=n.style;for(var t in e)r[t]=e[t]}function yn(n,e){for(var r in e){var t=e[r];void 0!==t?n.setAttribute(r,t):n.removeAttribute(r)}}function wn(n,e){for(var r in e){var t=e[r],a=t.f,i=t.o;void 0!==i?n.setAttributeNS(a,r,i):n.removeAttributeNS(a,r)}}function $n(n,e,r){var t=n.elmFs||(n.elmFs={});for(var a in r){var i=r[a],o=t[a];if(i){if(o){if(o.q.$===i.$){o.q=i;continue}n.removeEventListener(a,o)}o=xn(e,i),n.addEventListener(a,o,sn&&{passive:2>Ce(i)}),t[a]=o}else n.removeEventListener(a,o),t[a]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){sn=!0}}))}catch(n){}function xn(n,e){function r(e){var t=r.q,a=N(t.a,e);if(re(a)){for(var i,o=Ce(t),u=a.a,f=o?3>o?u.a:u.m:u,c=1==o?u.b:3==o&&u.aa,s=(c&&e.stopPropagation(),(2==o?u.b:3==o&&u.Y)&&e.preventDefault(),n);i=s.j;){if("function"==typeof i)f=i(f);else for(var l=i.length;l--;)f=i[l](f);s=s.p}s(f,c)}}return r.q=e,r}function jn(n,e){return n.$==e.$&&M(n.a,e.a)}function kn(n,e,r,t){var a={$:e,r:r,s:t,t:void 0,u:void 0};return n.push(a),a}function An(n,e,r,t){if(n!==e){var a=n.$,i=e.$;if(a!==i){if(1!==a||2!==i)return void kn(r,0,t,e);e=function(n){for(var e=n.e,r=e.length,t=[],a=0;r>a;a++)t[a]=e[a].b;return{$:1,c:n.c,d:n.d,e:t,f:n.f,b:n.b}}(e),i=1}switch(i){case 5:for(var o=n.l,u=e.l,f=o.length,c=f===u.length;c&&f--;)c=o[f]===u[f];if(c)return void(e.k=n.k);e.k=e.m();var s=[];return An(n.k,e.k,s,0),void(s.length>0&&kn(r,1,t,s));case 4:for(var l=n.j,d=e.j,v=!1,h=n.k;4===h.$;)v=!0,"object"!=typeof l?l=[l,h.j]:l.push(h.j),h=h.k;for(var b=e.k;4===b.$;)v=!0,"object"!=typeof d?d=[d,b.j]:d.push(b.j),b=b.k;return v&&l.length!==d.length?void kn(r,0,t,e):((v?function(n,e){for(var r=0;n.length>r;r++)if(n[r]!==e[r])return!1;return!0}(l,d):l===d)||kn(r,2,t,d),void An(h,b,r,t+1));case 0:return void(n.a!==e.a&&kn(r,3,t,e.a));case 1:return void Ln(n,e,r,t,In);case 2:return void Ln(n,e,r,t,Nn);case 3:if(n.h!==e.h)return void kn(r,0,t,e);var m=Tn(n.d,e.d);m&&kn(r,4,t,m);var p=e.i(n.g,e.g);return void(p&&kn(r,5,t,p))}}}function Ln(n,e,r,t,a){if(n.c===e.c&&n.f===e.f){var i=Tn(n.d,e.d);i&&kn(r,4,t,i),a(n,e,r,t)}else kn(r,0,t,e)}function Tn(n,e,r){var t;for(var a in n)if("a1"!==a&&"a0"!==a&&"a3"!==a&&"a4"!==a)if(a in e){var i=n[a],o=e[a];i===o&&"value"!==a&&"checked"!==a||"a0"===r&&jn(i,o)||((t=t||{})[a]=o)}else(t=t||{})[a]=r?"a1"===r?"":"a0"===r||"a3"===r?void 0:{f:n[a].f,o:void 0}:"string"==typeof n[a]?"":null;else{var u=Tn(n[a],e[a]||{},a);u&&((t=t||{})[a]=u)}for(var f in e)f in n||((t=t||{})[f]=e[f]);return t}function In(n,e,r,t){var a=n.e,i=e.e,o=a.length,u=i.length;o>u?kn(r,6,t,{v:u,i:o-u}):u>o&&kn(r,7,t,{v:o,e:i});for(var f=u>o?o:u,c=0;f>c;c++){var s=a[c];An(s,i[c],r,++t),t+=s.b||0}}function Nn(n,e,r,t){for(var a=[],i={},o=[],u=n.e,f=e.e,c=u.length,s=f.length,l=0,d=0,v=t;c>l&&s>d;){var h=(L=u[l]).a,b=(T=f[d]).a,m=L.b,p=T.b,g=void 0,y=void 0;if(h!==b){var w=u[l+1],$=f[d+1];if(w){var x=w.a,j=w.b;y=b===x}if($){var k=$.a,A=$.b;g=h===k}if(g&&y)An(m,A,a,++v),En(i,a,h,p,d,o),v+=m.b||0,_n(i,a,h,j,++v),v+=j.b||0,l+=2,d+=2;else if(g)v++,En(i,a,b,p,d,o),An(m,A,a,v),v+=m.b||0,l+=1,d+=2;else if(y)_n(i,a,h,m,++v),v+=m.b||0,An(j,p,a,++v),v+=j.b||0,l+=2,d+=1;else{if(!w||x!==k)break;_n(i,a,h,m,++v),En(i,a,b,p,d,o),v+=m.b||0,An(j,A,a,++v),v+=j.b||0,l+=2,d+=2}}else An(m,p,a,++v),v+=m.b||0,l++,d++}for(;c>l;){var L;_n(i,a,(L=u[l]).a,m=L.b,++v),v+=m.b||0,l++}for(;s>d;){var T,I=I||[];En(i,a,(T=f[d]).a,T.b,void 0,I),d++}(a.length>0||o.length>0||I)&&kn(r,8,t,{w:a,x:o,y:I})}var Fn="_elmW6BL";function En(n,e,r,t,a,i){var o=n[r];if(!o)return i.push({r:a,A:o={c:0,z:t,r:a,s:void 0}}),void(n[r]=o);if(1===o.c){i.push({r:a,A:o}),o.c=2;var u=[];return An(o.z,t,u,o.r),o.r=a,void(o.s.s={w:u,A:o})}En(n,e,r+Fn,t,a,i)}function _n(n,e,r,t,a){var i=n[r];if(i){if(0===i.c){i.c=2;var o=[];return An(t,i.z,o,a),void kn(e,9,a,{w:o,A:i})}_n(n,e,r+Fn,t,a)}else{var u=kn(e,9,a,void 0);n[r]={c:1,z:t,r:a,s:u}}}function qn(n,e,r,t){return 0===r.length?n:(function n(e,r,t,a){!function e(r,t,a,i,o,u,f){for(var c=a[i],s=c.r;s===o;){var l=c.$;if(1===l)n(r,t.k,c.s,f);else if(8===l)c.t=r,c.u=f,(d=c.s.w).length>0&&e(r,t,d,0,o,u,f);else if(9===l){c.t=r,c.u=f;var d,v=c.s;v&&(v.A.s=r,(d=v.w).length>0&&e(r,t,d,0,o,u,f))}else c.t=r,c.u=f;if(!(c=a[++i])||(s=c.r)>u)return i}var h=t.$;if(4===h){for(var b=t.k;4===b.$;)b=b.k;return e(r,b,a,i,o+1,u,r.elm_event_node_ref)}for(var m=t.e,p=r.childNodes,g=0;m.length>g;g++){var y=1===h?m[g]:m[g].b,w=++o+(y.b||0);if(!(o>s||s>w||(c=a[i=e(p[g],y,a,i,o,w,f)])&&(s=c.r)<=u))return i;o=w}return i}(e,r,t,0,0,r.b,a)}(n,e,r,t),Mn(n,r))}function Mn(n,e){for(var r=0;e.length>r;r++){var t=e[r],a=t.t,i=Pn(a,t);a===n&&(n=i)}return n}function Pn(n,e){switch(e.$){case 0:return function(n){var r=n.parentNode,t=mn(e.s,e.u);return t.elm_event_node_ref||(t.elm_event_node_ref=n.elm_event_node_ref),r&&t!==n&&r.replaceChild(t,n),t}(n);case 4:return pn(n,e.u,e.s),n;case 3:return n.replaceData(0,n.length,e.s),n;case 1:return Mn(n,e.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=e.s:n.elm_event_node_ref={j:e.s,p:e.u},n;case 6:for(var r=e.s,t=0;r.i>t;t++)n.removeChild(n.childNodes[r.v]);return n;case 7:for(var a=(r=e.s).e,i=n.childNodes[t=r.v];a.length>t;t++)n.insertBefore(mn(a[t],e.u),i);return n;case 9:if(!(r=e.s))return n.parentNode.removeChild(n),n;var o=r.A;return void 0!==o.r&&n.parentNode.removeChild(n),o.s=Mn(n,r.w),n;case 8:return function(n,e){var r=e.s,t=function(n,e){if(n){for(var r=on.createDocumentFragment(),t=0;n.length>t;t++){var a=n[t].A;un(r,2===a.c?a.s:mn(a.z,e.u))}return r}}(r.y,e);n=Mn(n,r.w);for(var a=r.x,i=0;a.length>i;i++){var o=a[i],u=o.A,f=2===u.c?u.s:mn(u.z,e.u);n.insertBefore(f,n.childNodes[o.r])}return t&&un(n,t),n}(n,e);case 5:return e.s(n);default:m(10)}}var Cn=a(function(n,e,r,t){return function(n,e,r,t,a,i){var u=o(I,n,C(e?e.flags:void 0));re(u)||m(2);var f={},c=(u=r(u.a)).a,s=i(d,c),l=function(n,e){var r;for(var t in z){var a=z[t];a.a&&((r=r||{})[t]=a.a(t,e)),n[t]=G(a,e)}return r}(f,d);function d(n,e){s(c=(u=o(t,n,c)).a,e),K(f,u.b,a(c))}return K(f,u.b,a(c)),l?{ports:l}:{}}(e,t,n.aN,n.aT,n.aS,function(e,r){var a=n.aV,i=t.node,f=function n(e){if(3===e.nodeType)return fn(e.textContent);if(1!==e.nodeType)return fn("");for(var r=d,t=e.attributes,a=t.length;a--;){var i=t[a];r=v(o(vn,i.name,i.value),r)}var f=e.tagName.toLowerCase(),c=d,s=e.childNodes;for(a=s.length;a--;)c=v(n(s[a]),c);return u(cn,f,r,c)}(i);return function(n,e){e(n);var r=0;function t(){r=1===r?0:(Sn(t),e(n),1)}return function(a,i){n=a,i?(e(n),2===r&&(r=1)):(0===r&&Sn(t),r=2)}}(r,function(n){var r=a(n),t=function(n,e){var r=[];return An(n,e,r,0),r}(f,r);i=qn(i,f,t,e),f=r})})}),Sn=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var On,Bn,Rn=function(n){return{$:0,a:n}},Dn=h,Un=t(function(n,e,r){for(;;){if(-2===r.$)return e;var t=r.d,a=n,i=u(n,r.b,r.c,u(Un,n,e,r.e));n=a,e=i,r=t}}),Vn=function(n){return u(Un,t(function(n,e,r){return o(Dn,w(n,e),r)}),d,n)},Wn={aF:"teal",r:b([Rn("I'm a PhD student on the Media and Arts Technology programme at Queen Mary University of London. My research is in the field of music computing, particularly looking at how programming languages are designed for musicians and audio programmers."),Rn("Outside of my research, I have a keen interest in front-end web development and functional programming – and mixing the two (why aren't you using Elm yet?)"),Rn("I'm currently looking for front-end work in London. If you'd like to learn a little more about me then keep scrolling or you can contact me using the links to the left.")]),t:"About",aL:"about"},Jn=function(n){return{$:4,a:n}},Qn={aF:"blue",r:b([Jn({L:"PhD Media and Arts Technology",S:"Queen Mary University of London",q:"2017 – 2021"}),Jn({L:"MA Computational Art",S:"Goldsmiths University of London",q:"2016 – 2017"}),Jn({L:"Ba(Hons) Creative Music Technology",S:"Bath Spa University",q:"2013 – 2016"})]),t:"Education",aL:"education"},zn=function(n){return{$:5,a:n}},Gn={aF:"indigo",r:b([zn({N:"Institute of Coding",o:"Demonstrator – Introduction to Coding Bootcamp",q:"September 2019"}),zn({N:"Institute of Coding",o:"Demonstrator – Introduction to Coding Bootcamp",q:"July 2019"}),zn({N:"Queen Mary University of London",o:"Lead Demonstrator – The Semantic Web",q:"Jan 2019 – May 2019"})]),t:"Experience",aL:"experience"},Hn=function(n){return{$:2,a:n}},Yn=function(n){return{$:6,a:n}},Zn=function(n){return{$:7,a:n}},Kn=function(n){return{$:1,a:n}},Xn={aF:"pink",r:b([Rn("Here you'll find a memory dump of the various technologies I've learned and used up until now. These things are usually rated on a fairly arbitrary scale, so here's my best attempt at keeping it real:"),Rn("• Comfortable = I've used this tech for quite a while now. I'm aware of best practices and some the quirks and I'd be comfortable being thrown into the deep end using this."),Rn("• Familiar = I've used this tech a little bit. With some guidance I could create some cool things, but I'll probably make some mistakes on the way."),Rn("• Aware = This tech is on my radar, and I might've used it a little bit in the past. Maybe it is similar to something else I'm comfortable with or maybe it's a totally different mindset shift. I haven't invested much time into learning this, but I'd be willing to in the future."),Kn("Languages"),Zn({h:"Familiar",j:"JavaScript"}),Zn({h:"Familiar",j:"Elm"}),Zn({h:"Comfortable",j:"Haskell"}),Zn({h:"Comfortable",j:"Processing (Java)"}),Zn({h:"Comfortable",j:"OpenFrameworks (C++)"}),Zn({h:"Aware",j:"ReasonML"}),Kn("Frameworks"),Zn({h:"Comfortable",j:"Vue"}),Kn("Misc"),Zn({h:"Familiar",j:"Web Audio API"})]),t:"Skills",aL:"skills"},ne=t(function(n,e,r){return{aj:e,al:r,j:n}}),ee=b([u(ne,"Email","fas fa-envelope","mailto:andrew.thompson@qmul.ac.uk"),u(ne,"Twitter","fab fa-twitter-square","https://twitter.com/_pdandy"),u(ne,"Telegram","fab fa-telegram","https://t.me/pd_andy"),u(ne,"GitHub","fab fa-github-square","https://github.com/pd-andy")]),re=function(n){return!n.$},te=a(function(n,e,r,t){return{$:0,a:n,b:e,c:r,d:t}}),ae=$,ie=r(function(n,e){return j(e)/j(n)}),oe=ae(o(ie,2,32)),ue=[],fe=f(te,0,oe,ue,ue),ce=l,se=t(function(n,e,r){for(;;){if(!r.b)return e;var t=r.b,a=n,i=o(n,r.a,e);n=a,e=i,r=t}}),le=function(n){return u(se,Dn,d,n)},de=r(function(n,e){for(;;){var r=o(ce,32,n),t=r.b,a=o(Dn,{$:0,a:r.a},e);if(!t.b)return le(a);n=t,e=a}}),ve=r(function(n,e){for(;;){var r=ae(e/32);if(1===r)return o(ce,32,n).a;n=o(de,n,d),e=r}}),he=x,be=r(function(n,e){return function n(e,r,t){if("object"!=typeof e)return e===r?0:r>e?-1:1;if(void 0===e.$)return(t=n(e.a,r.a))?t:(t=n(e.b,r.b))?t:n(e.c,r.c);for(;e.b&&r.b&&!(t=n(e.a,r.a));e=e.b,r=r.b);return t||(e.b?1:r.b?-1:0)}(n,e)>0?n:e}),me=function(n){return n.length},pe=r(function(n,e){if(e.a){var r=32*e.a,t=he(o(ie,32,r-1)),a=n?le(e.d):e.d,i=o(ve,a,e.a);return f(te,me(e.c)+r,o(be,5,t*oe),i,e.c)}return f(te,me(e.c),oe,ue,e.c)}),ge=s,ye=i(function(n,e,r,t,a){for(;;){if(0>e)return o(pe,!1,{d:t,a:r/32|0,c:a});var i={$:1,a:u(ge,32,e,n)};n=n,e-=32,r=r,t=o(Dn,i,t),a=a}}),we=r(function(n,e){if(n>0){var r=n%32;return c(ye,e,n-r-32,n,d,u(ge,r,n-r,e))}return fe}),$e=function(n){return{$:1,a:n}},xe=function(n){return{$:0,a:n}},je=r(function(n,e){return{$:3,a:n,b:e}}),ke=r(function(n,e){return{$:0,a:n,b:e}}),Ae=r(function(n,e){return{$:1,a:n,b:e}}),Le=function(n){return{$:2,a:n}},Te=Z(d),Ie=function(n){return{$:0,a:n}},Ne=A,Fe=(Bn=Ne,nn(On="onFocusChange"),z[On]={f:an,r:Bn,a:function(n,e){var r=d,a=z[n].r,i=O(null);return z[n].b=i,z[n].c=t(function(n,e){return r=e,i}),{send:function(n){var t=o(I,a,C(n));re(t)||m(4);for(var i=t.a,u=r;u.b;u=u.b)e(u.a(i))}}}},Y(On)),Ee=Z,_e=C,qe=function(n,e){return nn(n),z[n]={e:en,r:e,a:rn},Y(n)}("scrollToElement",_e),Me=r(function(n,e){return n.$?w(e,qe(n.a)):w(function(n,e){var r={};for(var t in n)r[t]=n[t];for(var t in e)r[t]=e[t];return r}(e,{O:n.a}),Te)}),Pe=function(n){return{$:0,a:n}},Ce=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Se=cn("button"),Oe=fn,Be=r(function(n,e){return o(dn,n,_e(e))}),Re=Be("className"),De=ln,Ue=r(function(n,e){return o(De,n,{$:0,a:e})}),Ve=function(n){return o(Ue,"click",Pe(n))},We=t(function(n,e,r){var t=r.aL,a=r.aF;return o(Se,b([Re(p(n,t)?"text-"+a+"-600":"text-gray-900"),Re("font-bold text-lg"),Re("my-2"),Ve(e(t))]),b([Oe(t)]))}),Je=cn("nav"),Qe=a(function(n,e,r,t){if(t.b){var a=t.a,i=t.b;if(i.b){var c=i.a,s=i.b;if(s.b){var l=s.a,d=s.b;if(d.b){var v=d.b;return o(n,a,o(n,c,o(n,l,o(n,d.a,r>500?u(se,n,e,le(v)):f(Qe,n,e,r+1,v)))))}return o(n,a,o(n,c,o(n,l,e)))}return o(n,a,o(n,c,e))}return o(n,a,e)}return e}),ze=t(function(n,e,r){return f(Qe,n,e,0,r)}),Ge=r(function(n,e){return u(ze,r(function(e,r){return o(Dn,n(e),r)}),d,e)}),He=cn("a"),Ye=cn("code"),Ze=cn("div"),Ke=cn("h2"),Xe=cn("h3"),nr=cn("i"),er=cn("img"),rr=cn("p"),tr=cn("pre"),ar=cn("span"),ir=function(n){return o(Be,"href",/^javascript:/i.test((e=n).replace(/\s/g,""))?"":e);var e},or=function(n){return o(Be,"src",/^\s*(javascript:|data:text\/html)/i.test(e=n)?"":e);var e},ur=function(n){switch(n.$){case 0:var e=n.a;return o(rr,b([Re("mt-4 text-lg text-justify")]),b([Oe(e)]));case 1:return e=n.a,o(Ke,b([Re("mt-4 text-2xl font-bold border-b-2 border-gray-900 mb-4")]),b([Oe(e)]));case 2:var r=n.a;return o(tr,b([Re("font-mono bg-gray-800 mt-4 p-2 border-l-8 border-gray-900 overflow-y-scroll text-white rounded-r-lg")]),o(Ge,function(n){return o(Ye,b([Re("pl-2")]),b([Oe(n+"\n")]))},r));case 3:var t=n.a;return o(Ze,b([Re("mt-4")]),b([o(er,b([or(t),Re("w-full rounded-lg")]),d)]));case 4:var a=n.a.L,i=n.a.S,u=n.a.q;return o(Ze,b([Re("pt-6")]),b([o(Ke,b([Re("text-2xl")]),b([Oe(a)])),o(Xe,b([Re("text-lg")]),b([Oe(i)])),o(ar,b([Re("italic")]),b([Oe(u)]))]));case 5:var f=n.a.o,c=n.a.N;return u=n.a.q,o(Ze,b([Re("pt-6")]),b([o(Ke,b([Re("text-2xl")]),b([Oe(f)])),o(Xe,b([Re("text-lg")]),b([Oe(c)])),o(ar,b([Re("italic")]),b([Oe(u)]))]));case 6:f=n.a.o;var s=n.a.R,l=n.a.M,v=n.a.P;return o(Ze,b([Re("pt-6")]),b([o(Ke,b([Re("text-2xl font-bold")]),b([Oe(f)])),o(Xe,b([Re("text-md italic border-b-2 border-gray-900 inline-block pb-1")]),b([Oe(s)])),o(Ze,b([Re("mb-2")]),o(Ge,ur,l)),o(He,b([Re("text-md"),ir(v)]),b([o(nr,b([Re("fab fa-github-square mr-2")]),d),o(ar,b([Re("italic underline")]),b([Oe("Find it on GitHub.")]))]))]));default:var h=n.a.j,m=n.a.h;return o(Ze,b([Re("mt-4 text-lg flex justify-between")]),b([o(ar,b([Re("")]),b([Oe(h)])),o(ar,b([Re("")]),b([Oe(m)]))]))}},fr=cn("h1"),cr=cn("section"),sr=Be("id"),lr=function(n){return o(cr,b([sr(n.aL),Re("bg-"+n.aF+"-200"),Re("p-8 lg:p-12")]),b([o(fr,b([Re("lg:text-6xl text-3xl font-semibold"),Re("border-b-4 border-gray-900 mb-4")]),b([Oe(n.t)])),o(Ze,d,o(Ge,ur,n.r))]))},dr=function(n){return o(He,b([Re("flex flex-col items-center my-6"),ir(n.al)]),b([o(nr,b([Re(n.aj),Re("fa-2x")]),d),o(ar,b([Re("text-sm my-2")]),b([Oe(n.j)]))]))},vr=function(n){return{$:1,a:n}},hr=cn("aside"),br=cn("main"),mr=O,pr=mr(0),gr=R,yr=r(function(n,e){return o(gr,function(e){return mr(n(e))},e)}),wr=t(function(n,e,r){return o(gr,function(e){return o(gr,function(r){return mr(o(n,e,r))},r)},e)}),$r=H,xr=r(function(n,e){var r=e;return function(n){return B(function(e){e(O(U(n)))})}(o(gr,$r(n),r))});z.Task={b:pr,c:t(function(n,e){return o(yr,function(){return 0},(r=o(Ge,xr(n),e),u(ze,wr(Dn),mr(d),r)));var r}),d:t(function(){return mr(0)}),e:r(function(n,e){return o(yr,n,e)}),f:void 0},Y("Task");var jr,kr=T,Ar=L;jr={Main:{init:Cn({aN:function(n){return w({O:"about",Q:b([Wn,Qn,Gn,(e=n.V.ae,{aF:"purple",r:b([Yn({M:b([Rn("Flow is a complete framework for creating interactive audio applications using the Web Audio API. It's main selling points are the highly declarative API for creating audio processing graphs and the implementation of the Model-View-Update (MVU) architecture for audio applications. MVU is an Elm-inspired architecture that places heavy focus on deterministic updates to application state and a strict separation of each layer of that application. View elements do not manipulate audio elements directly for example, instead specific Actions are dispatched to the runtime triggering a new application Model to be generated and thus a new view and audio graph.")]),P:"https://github.com/flow-lang/flow-framework",R:"javascript / web audio / framework",o:"Flow"}),Yn({M:b([Rn("Programming with the vanilla Web Audio API is a largely imperative, and object-oriented, affair. Audio nodes are created and stored in variables, and properties and methods are accessed and invoked on the nodes themselves. Elm-web-audio is new declarative API for Web Audio programming specifically in Elm."),Rn("The below snippet shows how to create a simple audio graph with the vanilla API. We create an oscillator and a gain node, set some parameters, and then connect them all together. "),Hn(b(["const osc = context.createOscillator()","const amp = context.createGain()","","osc.frequency.value = 440","amp.gain.value = 0.5","","osc.connect(amp)","amp.connect(context.destination)","","osc.start()"])),Rn("There's a lot of bookkeeping involved here, we have to store each node in a variable and then access that node to set some parameters. This quickly gets out of hand with larger audio graphs. Below is the elm-web-audio alternative. The library provides an API similar to Elm's own html library that leads to a highly declarative and very visual way of describing Web Audio graphs."),Hn(b(["N.oscillator [ P.frequency 440 ]","  [ N.gain [ P.gain 0.5 ]","    [ N.dac ]","  ]"])),Rn("This let's us focus on what the audio graph should be instead of how to create it. As Elm cannot call javascript code directly (pesky purity), a companion example implementation for a virtual audio graph is provded in the repository. The graph just needs to be sent via a port to javascript land to be constructed.")]),P:"https://github.com/pd-andy/elm-web-audio",R:"elm / web audio / library",o:"elm-web-audio"}),Yn({M:b([Rn("Do is your typical, run-of-the-mill, front-end developer todo list app. Built as a first proper project using Elm as well as an opportunity to test out a utility-first css approach with tailwind, do support creating / completing / discarding todos that get saved locally using the localStorage API."),(r=e,{$:3,a:r})]),P:"https://github.com/pd-andy/do-app",R:"javascript / localstorage / tailwindcss / application",o:"do-app"})]),t:"Projects",aL:"projects"}),Xn]),Z:ee},Te);var e,r},aS:function(){return Ee(b([Fe(Ie)]))},aT:Me,aV:function(n){return o(Ze,b([sr("app")]),b([o(hr,b([Re("flex flex-col items-center justify-around bg-gray-100 text-gray-900 px-10")]),b([o(Ze,d,b([o(fr,b([Re("text-3xl")]),b([Oe("Andrew Thompson")])),o(Ke,b([Re("text-xl mb-4")]),b([Oe("PhD student @ Queen Mary University of London")])),o(Ze,b([Re("flex justify-around")]),o(Ge,dr,n.Z))])),(e=o(Ge,o(We,n.O,vr),n.Q),o(Je,b([Re("flex flex-col items-center justify-center")]),e))])),o(br,b([Re("shadow-xl")]),o(Ge,lr,n.Q))]));var e}})(o(kr,function(n){return Pe({V:n})},o(Ar,"images",o(kr,function(n){return o(kr,function(e){return Pe({ae:e,aJ:n})},o(Ar,"do",Ne))},o(Ar,"flow",Ne)))))(0)}},n.Elm?function n(e,r){for(var t in r)t in e?"init"==t?m(6):n(e[t],r[t]):e[t]=r[t]}(n.Elm,jr):n.Elm=jr}(this);
},{}],"Gt/b":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t="",n=function(n){return function(e){var i=Array.from(e.target.children).map(function(t){var n=t.getBoundingClientRect();return{y:Math.abs(n.y),id:t.id,inViewport:n.y<window.innerHeight&&n.y>-window.innerHeight}}).filter(function(t){return t.inViewport}).sort(function(t,n){return t.y-n.y}).shift();i.id!==t&&(n.ports.onFocusChange.send(i.id),window.history.pushState(null,null,"#".concat(i.id))),t=i.id}};exports.default=n;
},{}],"p34n":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){document.querySelector("#".concat(e)).scrollIntoView({behavior:"smooth"}),window.history.pushState(null,null,"#".concat(e))};exports.default=e;
},{}],"epB2":[function(require,module,exports) {
"use strict";require("@fortawesome/fontawesome-free/css/all.css");var e=s(require("./img/do-app.png")),r=s(require("./img/flow-architecture.png")),o=require("./elm/Main.elm"),t=s(require("./js/mostInViewport")),l=s(require("./js/scrollTo"));function s(e){return e&&e.__esModule?e:{default:e}}var u=o.Elm.Main.init({node:document.querySelector("body"),flags:{images:{do:e.default,flow:r.default}}});u.ports.scrollToElement.subscribe(l.default),document.querySelector("main").addEventListener("scroll",(0,t.default)(u));
},{"@fortawesome/fontawesome-free/css/all.css":"jE9z","./img/do-app.png":"0JjY","./img/flow-architecture.png":"fl9N","./elm/Main.elm":"ENeC","./js/mostInViewport":"Gt/b","./js/scrollTo":"p34n"}]},{},["epB2"], null)
//# sourceMappingURL=/main.4b8ea757.js.map