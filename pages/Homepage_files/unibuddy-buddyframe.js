!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=137)}([function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){var n=r(26)("wks"),o=r(14),i=r(0).Symbol,u="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=n},function(t,e,r){t.exports=!r(10)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return s}));r(51),r(52),r(56),r(36),r(63),r(64),r(65);var n=r(13),o=r.n(n);function i(t,e){e=e.replace(/[[\]]/g,"\\$&");var r=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}function u(t){return function(t,e){var r={};return e.forEach(e=>{var n=i(t,e);n&&(r[e]=n)}),o.a.stringify(r)}(t,["ub_medium","ub_source","ub_campaign","ub_content"])}function c(t,e){var r=new URL(t),n={};r.searchParams.forEach((t,e)=>{n[e]=t}),Object.entries(e).forEach(t=>{var[e,r]=t;n[e]=r});var i=function(t){return"?".concat(o.a.stringify(t))}(n),u=r.origin;return r.pathname.length>1&&(u+=r.pathname),u+=i,r.hash&&(u+="".concat(r.hash)),u}function a(t,e){return u(t)||!e?t:c(t,{ub_medium:e.ub_medium,ub_source:e.ub_source,ub_campaign:e.ub_campaign,ub_content:e.ub_content})}function s(t,e){var r="",n=o.a.stringify(e);return-1!==t.indexOf("?")?r="".concat(t,"&").concat(n):-1===t.indexOf("?")&&(r="".concat(t,"?").concat(n)),r}},function(t,e,r){var n=r(5),o=r(15);t.exports=r(2)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(7),o=r(30),i=r(24),u=Object.defineProperty;e.f=r(2)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(6);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){var n=r(0),o=r(4),i=r(9),u=r(14)("src"),c=Function.toString,a=(""+c).split("toString");r(16).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,r,c){var s="function"==typeof r;s&&(i(r,"name")||o(r,"name",e)),t[e]!==r&&(s&&(i(r,u)||o(r,u,t[e]?""+t[e]:a.join(String(e)))),t===n?t[e]=r:c?t[e]?t[e]=r:o(t,e,r):(delete t[e],o(t,e,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var n=r(45),o=r(17);t.exports=function(t){return n(o(t))}},function(t,e,r){"use strict";var n=r(4),o=r(8),i=r(10),u=r(17),c=r(1);t.exports=function(t,e,r){var a=c(t),s=r(u,a,""[t]),l=s[0],f=s[1];i((function(){var e={};return e[a]=function(){return 7},7!=""[t](e)}))&&(o(String.prototype,t,l),n(RegExp.prototype,a,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},function(t,e,r){"use strict";var n=r(66),o=r(67),i=r(38);t.exports={formats:i,parse:o,stringify:n}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){var n=r(26)("keys"),o=r(14);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e,r){"use strict";e.a=class{static getDistanceFromTop(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e}static addCSS(t){var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");e.appendChild(r),r.type="text/css",r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}},function(t,e){t.exports=!1},function(t,e,r){var n=r(33),o=r(19);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){var n=r(6);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){"use strict";var n=r(7);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,r){var n=r(16),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(22)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){var n=r(5).f,o=r(9),i=r(1)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={freshersApp:{NAME:"Freshers App",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},ambassadorApp:{NAME:"Ambassador App",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},ambassadorDashboard:{NAME:"Ambassador Dashboard",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},embeddedUniversityWidget:{NAME:"Embedded University Widget",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},pwaUniversityWidget:{NAME:"PWA University Widget",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},embeddedUniversityCarousel:{NAME:"Embedded University Carousel",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},embeddedUniversityBuddyCards:{NAME:"Embedded University Buddy Cards",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},embeddedExternalBuddyCards:{NAME:"Embedded External Buddy Cards",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},embeddedExternalBuddyCardsCarousel:{NAME:"Embedded External Buddy Cards Carousel",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},embeddedUniversitySocialFeed:{NAME:"Embedded University Social Feed",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},liveEvents:{NAME:"Live Events",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product",LIVE_EVENT_SLUG:"liveEventSlug"},events:{messageSent:{name:"Message Sent"}}},engagementPortal:{NAME:"Engagement Portal",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},openDay:{NAME:"Open Day",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},ucas:{NAME:"UCAS Widget",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},discover:{NAME:"Discover Widget",properties:{UNIVERSITY_SLUG:"universitySlug",DISCOVER_SLUG:"discoverSlug",PRODUCT:"product"}},universityPopcard:{NAME:"University Popcard",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},universityDashboard:{NAME:"University Dashboard",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}},chatBubble:{NAME:"Chat Bubble",properties:{UNIVERSITY_SLUG:"universitySlug",PRODUCT:"product"}}}},function(t,e,r){t.exports=!r(2)&&!r(10)((function(){return 7!=Object.defineProperty(r(31)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(6),o=r(0).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){var n=r(44);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(9),o=r(11),i=r(46)(!1),u=r(18)("IE_PROTO");t.exports=function(t,e){var r,c=o(t),a=0,s=[];for(r in c)r!=u&&n(c,r)&&s.push(r);for(;e.length>a;)n(c,r=e[a++])&&(~i(s,r)||s.push(r));return s}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(6),o=r(28),i=r(1)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,r){"use strict";var n=r(57),o=r(58),i=r(20),u=r(11);t.exports=r(59)(Array,"Array",(function(t,e){this._t=u(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])}),"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),i=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r};t.exports={arrayToObject:i,assign:function(t,e){return Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var o=e[n],i=o.obj[o.prop],u=Object.keys(i),c=0;c<u.length;++c){var a=u[c],s=i[a];"object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(e.push({obj:i,prop:a}),r.push(s))}return function(t){for(;t.length>1;){var e=t.pop(),r=e.obj[e.prop];if(Array.isArray(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);e.obj[e.prop]=n}}}(e),t},decode:function(t,e,r){var n=t.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(t){return n}},encode:function(t,e,r){if(0===t.length)return t;var n="string"==typeof t?t:String(t);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"}));for(var i="",u=0;u<n.length;++u){var c=n.charCodeAt(u);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?i+=n.charAt(u):c<128?i+=o[c]:c<2048?i+=o[192|c>>6]+o[128|63&c]:c<55296||c>=57344?i+=o[224|c>>12]+o[128|c>>6&63]+o[128|63&c]:(u+=1,c=65536+((1023&c)<<10|1023&n.charCodeAt(u)),i+=o[240|c>>18]+o[128|c>>12&63]+o[128|c>>6&63]+o[128|63&c])}return i},isBuffer:function(t){return null!=t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,r,o){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var u=e;return Array.isArray(e)&&!Array.isArray(r)&&(u=i(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach((function(r,i){n.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t(e[i],r,o):e.push(r):e[i]=r})),e):Object.keys(r).reduce((function(e,i){var u=r[i];return n.call(e,i)?e[i]=t(e[i],u,o):e[i]=u,e}),u)}}},function(t,e,r){"use strict";var n=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,r){var n=r(33),o=r(19).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,r){var n=r(0),o=r(16),i=r(4),u=r(8),c=r(32),a=function(t,e,r){var s,l,f,p,d=t&a.F,y=t&a.G,v=t&a.S,g=t&a.P,h=t&a.B,b=y?n:v?n[e]||(n[e]={}):(n[e]||{}).prototype,m=y?o:o[e]||(o[e]={}),S=m.prototype||(m.prototype={});for(s in y&&(r=e),r)f=((l=!d&&b&&void 0!==b[s])?b:r)[s],p=h&&l?c(f,n):g&&"function"==typeof f?c(Function.call,f):f,b&&u(b,s,f,t&a.U),m[s]!=f&&i(m,s,p),g&&S[s]!=f&&(S[s]=f)};n.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,r){var n=r(7),o=r(49),i=r(19),u=r(18)("IE_PROTO"),c=function(){},a=function(){var t,e=r(31)("iframe"),n=i.length;for(e.style.display="none",r(50).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;n--;)delete a.prototype[i[n]];return a()};t.exports=Object.create||function(t,e){var r;return null!==t?(c.prototype=n(t),r=new c,c.prototype=null,r[u]=t):r=a(),void 0===e?r:o(r,e)}},function(t,e,r){var n=r(39),o=r(15),i=r(11),u=r(24),c=r(9),a=r(30),s=Object.getOwnPropertyDescriptor;e.f=r(2)?s:function(t,e){if(t=i(t),e=u(e,!0),a)try{return s(t,e)}catch(t){}if(c(t,e))return o(!n.f.call(t,e),t[e])}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(28);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){var n=r(11),o=r(47),i=r(48);t.exports=function(t){return function(e,r,u){var c,a=n(e),s=o(a.length),l=i(u,s);if(t&&r!=r){for(;s>l;)if((c=a[l++])!=c)return!0}else for(;s>l;l++)if((t||l in a)&&a[l]===r)return t||l||0;return!t&&-1}}},function(t,e,r){var n=r(34),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(34),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},function(t,e,r){var n=r(5),o=r(7),i=r(23);t.exports=r(2)?Object.defineProperties:function(t,e){o(t);for(var r,u=i(e),c=u.length,a=0;c>a;)n.f(t,r=u[a++],e[r]);return t}},function(t,e,r){var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){r(12)("replace",2,(function(t,e,r){return[function(n,o){"use strict";var i=t(this),u=null==n?void 0:n[e];return void 0!==u?u.call(n,i,o):r.call(String(i),n,o)},r]}))},function(t,e,r){var n=r(0),o=r(53),i=r(5).f,u=r(40).f,c=r(35),a=r(25),s=n.RegExp,l=s,f=s.prototype,p=/a/g,d=/a/g,y=new s(p)!==p;if(r(2)&&(!y||r(10)((function(){return d[r(1)("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(t,e){var r=this instanceof s,n=c(t),i=void 0===e;return!r&&n&&t.constructor===s&&i?t:o(y?new l(n&&!i?t.source:t,e):l((n=t instanceof s)?t.source:t,n&&i?a.call(t):e),r?this:f,s)};for(var v=function(t){t in s||i(s,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=u(l),h=0;g.length>h;)v(g[h++]);f.constructor=s,s.prototype=f,r(8)(n,"RegExp",s)}r(55)("RegExp")},function(t,e,r){var n=r(6),o=r(54).set;t.exports=function(t,e,r){var i,u=e.constructor;return u!==r&&"function"==typeof u&&(i=u.prototype)!==r.prototype&&n(i)&&o&&o(t,i),t}},function(t,e,r){var n=r(6),o=r(7),i=function(t,e){if(o(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=r(32)(Function.call,r(43).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return i(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:i}},function(t,e,r){"use strict";var n=r(0),o=r(5),i=r(2),u=r(1)("species");t.exports=function(t){var e=n[t];i&&e&&!e[u]&&o.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,r){r(12)("search",1,(function(t,e,r){return[function(r){"use strict";var n=t(this),o=null==r?void 0:r[e];return void 0!==o?o.call(r,n):new RegExp(r)[e](String(n))},r]}))},function(t,e,r){var n=r(1)("unscopables"),o=Array.prototype;null==o[n]&&r(4)(o,n,{}),t.exports=function(t){o[n][t]=!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){"use strict";var n=r(22),o=r(41),i=r(8),u=r(4),c=r(20),a=r(60),s=r(27),l=r(61),f=r(1)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,r,y,v,g,h){a(r,e,y);var b,m,S,x=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},E=e+" Iterator",O="values"==v,_=!1,j=t.prototype,U=j[f]||j["@@iterator"]||v&&j[v],T=U||x(v),A=v?O?x("entries"):T:void 0,w="Array"==e&&j.entries||U;if(w&&(S=l(w.call(new t)))!==Object.prototype&&S.next&&(s(S,E,!0),n||"function"==typeof S[f]||u(S,f,d)),O&&U&&"values"!==U.name&&(_=!0,T=function(){return U.call(this)}),n&&!h||!p&&!_&&j[f]||u(j,f,T),c[e]=T,c[E]=d,v)if(b={values:O?T:x("values"),keys:g?T:x("keys"),entries:A},h)for(m in b)m in j||i(j,m,b[m]);else o(o.P+o.F*(p||_),e,b);return b}},function(t,e,r){"use strict";var n=r(42),o=r(15),i=r(27),u={};r(4)(u,r(1)("iterator"),(function(){return this})),t.exports=function(t,e,r){t.prototype=n(u,{next:o(1,r)}),i(t,e+" Iterator")}},function(t,e,r){var n=r(9),o=r(62),i=r(18)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,r){var n=r(17);t.exports=function(t){return Object(n(t))}},function(t,e,r){for(var n=r(36),o=r(23),i=r(8),u=r(0),c=r(4),a=r(20),s=r(1),l=s("iterator"),f=s("toStringTag"),p=a.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},y=o(d),v=0;v<y.length;v++){var g,h=y[v],b=d[h],m=u[h],S=m&&m.prototype;if(S&&(S[l]||c(S,l,p),S[f]||c(S,f,h),a[h]=p,b))for(g in n)S[g]||i(S,g,n[g],!0)}},function(t,e,r){r(12)("split",2,(function(t,e,n){"use strict";var o=r(35),i=n,u=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var c=void 0===/()??/.exec("")[1];n=function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!o(t))return i.call(r,t,e);var n,a,s,l,f,p=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,v=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,d+"g");for(c||(n=new RegExp("^"+g.source+"$(?!\\s)",d));(a=g.exec(r))&&!((s=a.index+a[0].length)>y&&(p.push(r.slice(y,a.index)),!c&&a.length>1&&a[0].replace(n,(function(){for(f=1;f<arguments.length-2;f++)void 0===arguments[f]&&(a[f]=void 0)})),a.length>1&&a.index<r.length&&u.apply(p,a.slice(1)),l=a[0].length,y=s,p.length>=v));)g.lastIndex===a.index&&g.lastIndex++;return y===r.length?!l&&g.test("")||p.push(""):p.push(r.slice(y)),p.length>v?p.slice(0,v):p}}else"0".split(void 0,0).length&&(n=function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)});return[function(r,o){var i=t(this),u=null==r?void 0:r[e];return void 0!==u?u.call(r,i,o):n.call(String(i),r,o)},n]}))},function(t,e,r){r(12)("match",1,(function(t,e,r){return[function(r){"use strict";var n=t(this),o=null==r?void 0:r[e];return void 0!==o?o.call(r,n):new RegExp(r)[e](String(n))},r]}))},function(t,e,r){"use strict";var n=r(37),o=r(38),i={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},u=Array.isArray,c=Array.prototype.push,a=function(t,e){c.apply(t,u(e)?e:[e])},s=Date.prototype.toISOString,l={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,indices:!1,serializeDate:function(t){return s.call(t)},skipNulls:!1,strictNullHandling:!1},f=function t(e,r,o,i,u,c,s,f,p,d,y,v,g){var h=e;if("function"==typeof s?h=s(r,h):h instanceof Date&&(h=d(h)),null===h){if(i)return c&&!v?c(r,l.encoder,g):r;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||n.isBuffer(h))return c?[y(v?r:c(r,l.encoder,g))+"="+y(c(h,l.encoder,g))]:[y(r)+"="+y(String(h))];var b,m=[];if(void 0===h)return m;if(Array.isArray(s))b=s;else{var S=Object.keys(h);b=f?S.sort(f):S}for(var x=0;x<b.length;++x){var E=b[x];u&&null===h[E]||(Array.isArray(h)?a(m,t(h[E],o(r,E),o,i,u,c,s,f,p,d,y,v,g)):a(m,t(h[E],r+(p?"."+E:"["+E+"]"),o,i,u,c,s,f,p,d,y,v,g)))}return m};t.exports=function(t,e){var r=t,u=e?n.assign({},e):{};if(null!==u.encoder&&void 0!==u.encoder&&"function"!=typeof u.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===u.delimiter?l.delimiter:u.delimiter,s="boolean"==typeof u.strictNullHandling?u.strictNullHandling:l.strictNullHandling,p="boolean"==typeof u.skipNulls?u.skipNulls:l.skipNulls,d="boolean"==typeof u.encode?u.encode:l.encode,y="function"==typeof u.encoder?u.encoder:l.encoder,v="function"==typeof u.sort?u.sort:null,g=void 0===u.allowDots?l.allowDots:!!u.allowDots,h="function"==typeof u.serializeDate?u.serializeDate:l.serializeDate,b="boolean"==typeof u.encodeValuesOnly?u.encodeValuesOnly:l.encodeValuesOnly,m=u.charset||l.charset;if(void 0!==u.charset&&"utf-8"!==u.charset&&"iso-8859-1"!==u.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if(void 0===u.format)u.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,u.format))throw new TypeError("Unknown format option provided.");var S,x,E=o.formatters[u.format];"function"==typeof u.filter?r=(x=u.filter)("",r):Array.isArray(u.filter)&&(S=x=u.filter);var O,_=[];if("object"!=typeof r||null===r)return"";O=u.arrayFormat in i?u.arrayFormat:"indices"in u?u.indices?"indices":"repeat":"indices";var j=i[O];S||(S=Object.keys(r)),v&&S.sort(v);for(var U=0;U<S.length;++U){var T=S[U];p&&null===r[T]||a(_,f(r[T],T,j,s,p,d?y:null,x,v,g,h,E,b,m))}var A=_.join(c),w=!0===u.addQueryPrefix?"?":"";return u.charsetSentinel&&(w+="iso-8859-1"===m?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),A.length>0?w+A:""}},function(t,e,r){"use strict";var n=r(37),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},u=function(t){return t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(parseInt(e,10))}))},c=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/g,u=/(\[[^[\]]*])/.exec(n),c=u?n.slice(0,u.index):n,a=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;a.push(c)}for(var s=0;null!==(u=i.exec(n))&&s<r.depth;){if(s+=1,!r.plainObjects&&o.call(Object.prototype,u[1].slice(1,-1))&&!r.allowPrototypes)return;a.push(u[1])}return u&&a.push("["+n.slice(u.index)+"]"),function(t,e,r){for(var n=e,o=t.length-1;o>=0;--o){var i,u=t[o];if("[]"===u&&r.parseArrays)i=[].concat(n);else{i=r.plainObjects?Object.create(null):{};var c="["===u.charAt(0)&&"]"===u.charAt(u.length-1)?u.slice(1,-1):u,a=parseInt(c,10);r.parseArrays||""!==c?!isNaN(a)&&u!==c&&String(a)===c&&a>=0&&r.parseArrays&&a<=r.arrayLimit?(i=[])[a]=n:i[c]=n:i={0:n}}n=i}return n}(a,e,r)}};t.exports=function(t,e){var r=e?n.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots=void 0===r.allowDots?i.allowDots:!!r.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,void 0!==r.charset&&"utf-8"!==r.charset&&"iso-8859-1"!==r.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if(void 0===r.charset&&(r.charset=i.charset),""===t||null==t)return r.plainObjects?Object.create(null):{};for(var a="string"==typeof t?function(t,e){var r,c={},a=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,s=e.parameterLimit===1/0?void 0:e.parameterLimit,l=a.split(e.delimiter,s),f=-1,p=e.charset;if(e.charsetSentinel)for(r=0;r<l.length;++r)0===l[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===l[r]?p="utf-8":"utf8=%26%2310003%3B"===l[r]&&(p="iso-8859-1"),f=r,r=l.length);for(r=0;r<l.length;++r)if(r!==f){var d,y,v=l[r],g=v.indexOf("]="),h=-1===g?v.indexOf("="):g+1;-1===h?(d=e.decoder(v,i.decoder,p),y=e.strictNullHandling?null:""):(d=e.decoder(v.slice(0,h),i.decoder,p),y=e.decoder(v.slice(h+1),i.decoder,p)),y&&e.interpretNumericEntities&&"iso-8859-1"===p&&(y=u(y)),o.call(c,d)?c[d]=n.combine(c[d],y):c[d]=y}return c}(t,r):t,s=r.plainObjects?Object.create(null):{},l=Object.keys(a),f=0;f<l.length;++f){var p=l[f],d=c(p,a[p],r);s=n.merge(s,d,r)}return n.compact(s)}},,,,,function(t,e,r){"use strict";r(73);var n=r(7),o=r(25),i=r(2),u=/./.toString,c=function(t){r(8)(RegExp.prototype,"toString",t,!0)};r(10)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?c((function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):"toString"!=u.name&&c((function(){return u.call(this)}))},function(t,e,r){r(2)&&"g"!=/./g.flags&&r(5).f(RegExp.prototype,"flags",{configurable:!0,get:r(25)})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.r(e),r.d(e,"setupIframe",(function(){return a})),r.d(e,"loadScript",(function(){return c})),r.d(e,"init",(function(){return s}));r(72);var n=r(3),o=r(29),i=r(21);function u(t,e){return t&&t.getAttribute("data-ub-".concat(e))}function c(t,e){if(!document.getElementById("unibuddy-iframe-resizer")){var r=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.src=t,n.id="unibuddy-iframe-resizer",n.onreadystatechange=e,n.onload=e,r.appendChild(n)}}function a(){var t=document.getElementById("unibuddy-buddyframe");return i.a.addCSS("#".concat(t.id," { border:none; }")),t.src=n.c(t.src,{ub_medium:"product",ub_source:o.a.embeddedUniversityBuddyCards.NAME}),t}function s(){var t=window.location.toString(),e=n.b(t,"unibuddy");c("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.10/iframeResizer.min.js",()=>{for(var t=document.querySelectorAll("[id*=unibuddy-buddyframe]"),e=0;e<t.length;e+=1){var r=t[e];r.id="".concat(r.id,"-").concat(e),i.a.addCSS("#".concat(r.id," { border:none; }")),iFrameResize({log:!1,heightCalculationMethod:"lowestElement"},"#".concat(r.id));var c=r.src;if(!n.b(c,"ub_lang")){var a=u(r,"lang");a&&(c=n.a(c,{ub_lang:a}))}r.src=n.c(c,{ub_medium:"product",ub_source:o.a.embeddedUniversityBuddyCards.NAME})}}),e&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",a):a())}"undefined"!=typeof window&&s()}]);