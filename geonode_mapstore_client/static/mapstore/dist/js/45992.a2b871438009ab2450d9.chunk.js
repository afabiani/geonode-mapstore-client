(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[45992,34344],{45992:(t,r,e)=>{"use strict";e.d(r,{h:()=>s,Z:()=>f});var o=e(35937),n=e.n(o),i=e(36882),u=e(37275);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){p(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function p(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==c(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!==c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var s=function(t,r){var e,o,c,a,p=i.Z;if("custom"===t)e=r;else if(c=(a=t.split("."))[0],o=a[1],!(e=p[c]))throw new Error("No such provider ("+c+")");var s={url:e.url,options:e.options||{}};if(o&&"variants"in e){if(!(o in e.variants))throw new Error("No such variant of "+(c||e.url)+" ("+o+")");var f,b=e.variants[o];f="string"==typeof b?{variant:b}:b.options,s={url:b.url||s.url,options:l(l({},s.options||{}),f)}}else"function"==typeof s.url&&(s.url=s.url(a.splice(1,a.length-1).join(".")));var y="file:"===window.location.protocol||s.options.forceHTTP;0===s.url.indexOf("//")&&y&&(s.url="http:"+s.url),s.options.retina&&(r.detectRetina&&u.ZP.getBrowserProperties().retina?r.detectRetina=!1:s.options.retina=""),s.options.attribution&&(s.options.attribution=function t(r){return-1===r.indexOf("{attribution.")?r:r.replace(/\{attribution.(\w*)\}/,(function(r,e){return t(p[e].options.attribution)}))}(s.options.attribution));var v=l(l({},s.options),n()(r,(function(t){return void 0!==t})));return[s.url,v]};const f={getLayerConfig:s}}}]);