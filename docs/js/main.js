!function(r){var n={};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=n,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var n in o)t.d(r,n,function(e){return o[e]}.bind(null,n));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=4)}([function(e,o){e.exports=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}},function(e,o){function n(e,o){for(var r=0;r<o.length;r++){var n=o[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,o,r){return o&&n(e.prototype,o),r&&n(e,r),e}},function(e,o,r){},function(e,o,r){},function(e,o,r){"use strict";r.r(o);r(2);var o=r(0),n=r.n(o),o=r(1),t=r.n(o),c=(r(3),{body:"body",preloaderContainer:".ds-preloader",colorFrom:"#383e9f",colorTo:!1});function u(e,o,r){setTimeout(function(){document.querySelector(e).classList.add(o)},r)}function i(){var e,o;e="body",o="ds-preloader-body",setTimeout(function(){document.querySelector(e).classList.remove(o)},1200),u(c.preloaderContainer,"ds-preloader-close",1200)}function l(){var e=document.createElement("div");e.classList.add("ds-preloader"),e.innerHTML='<div class="ds-preloader-counter">0%</div>',document.body.prepend(e),setTimeout(function(){document.querySelector(".ds-preloader").style.backgroundColor=c.colorFrom,u(c.preloaderContainer,"ds-preloader-open",50)},50),window.onload=function(){i(),setTimeout(function(){e.remove()},2e3)}}function a(e,o){o&&console.log("%c ".concat(e," "),"background: #00ff00; color: #000000")}var d=function(){a("ds-preloader status:",!0),a("colorFrom: ".concat(c.colorFrom),!0)},r=function(){function e(){n()(this,e),this.makeWithLove=!0}return t()(e,[{key:"config",value:function(e){(e=e)&&e.colorFrom&&(c.colorFrom=e.colorFrom,a("ds-preloader: bg-color = ".concat(e.colorFrom),!0))}},{key:"init",value:function(){l()}},{key:"status",value:function(){d()}}]),e}();window.dsPreloader=new r,window.dsPreloader.init();window.dsPreloader}]);