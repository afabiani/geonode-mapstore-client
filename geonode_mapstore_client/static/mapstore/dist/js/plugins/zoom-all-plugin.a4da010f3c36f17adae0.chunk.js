(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[87236],{801550:(t,e,n)=>{"use strict";n.d(e,{pP:()=>o,TR:()=>r,N7:()=>i,mq:()=>c,uv:()=>a,Qy:()=>u,IL:()=>l,Li:()=>s,OW:()=>p,ZO:()=>f,Um:()=>y,TF:()=>m,Ls:()=>d,Ec:()=>b,Eu:()=>h,JJ:()=>v,nZ:()=>g,YD:()=>O,GI:()=>E,Jb:()=>_,Uh:()=>S,e$:()=>T,eh:()=>P,$j:()=>x,Mk:()=>j,xy:()=>C,o6:()=>w,FP:()=>N,Mo:()=>A,sO:()=>M,Px:()=>I,hd:()=>R,Ju:()=>z,BV:()=>Z,SO:()=>k,H0:()=>L,$X:()=>G,ou:()=>U,NE:()=>B});var o="CHANGE_MAP_VIEW",r="CLICK_ON_MAP",i="CHANGE_MOUSE_POINTER",c="CHANGE_ZOOM_LVL",a="PAN_TO",u="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",p="CHANGE_MAP_SCALES",f="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",m="CREATION_ERROR_LAYER",d="UPDATE_VERSION",b="INIT_MAP",h="RESIZE_MAP",v="CHANGE_MAP_LIMITS",g="SET_MAP_RESOLUTIONS",O="REGISTER_EVENT_LISTENER",E="UNREGISTER_EVENT_LISTENER",_="MOUSE_MOVE",S="MOUSE_OUT",T="MAP:MAP_PLUGIN_LOAD",P="MAP:ORIENTATION",x="MAP:UPDATE_MAP_VIEW";function j(t,e,n,o){return{type:T,mapType:e,loading:t,loaded:n,error:o}}function C(t,e,n){return{type:l,pos:t,zoom:e,crs:n}}function w(t,e,n,r,i,c,a,u){return{type:o,center:t,zoom:e,bbox:n,size:r,mapStateSource:i,projection:c,viewerOptions:a,resolution:u}}function N(t,e){return{type:r,point:t,layer:e}}function A(t){return{type:i,pointer:t}}function M(t,e){return{type:c,zoom:t,mapStateSource:e}}function I(t,e,n,o){return{type:u,extent:t,crs:e,maxZoom:n,options:o}}function R(t,e){return{type:f,style:t,mapStateSource:e}}function z(){return{type:h}}function Z(t){var e=t.restrictedExtent,n=t.crs,o=t.minZoom;return{type:v,restrictedExtent:e,crs:n,minZoom:o}}function k(t){return{type:g,resolutions:t}}var L=function(t,e){return{type:O,eventName:t,toolName:e}},G=function(t,e){return{type:E,eventName:t,toolName:e}},U=function(t){return{type:_,position:t}},B=function(){return{type:S}}},38560:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var o=n(480681),r=n(124852),i=n.n(r),c=n(294184),a=n.n(c),u=["disabled","className","onClick"];function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l.apply(this,arguments)}const s=(p=o.Button,i().forwardRef((function(t,e){var n=t.disabled,o=t.className,r=t.onClick,c=void 0===r?function(){}:r,s=function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,u);return i().createElement(p,l({ref:e,className:n?a()("disabled",o):o,onClick:function(){n||c.apply(void 0,arguments)}},s),s.children)})));var p},35522:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>V});var o=n(893379),r=n.n(o),i=n(154840);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var c=n(727418),a=n.n(c),u=n(124852),l=n.n(u),s=n(480681),p=n(171703),f=n(22222),y=n(801550),m=n(675263),d=n.n(m),b=n(38560),h=n(950966),v=n(552259),g=n(737275);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function T(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return P(t)}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(o);if(r){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function c(){var t;E(this,c);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return j(P(t=i.call.apply(i,[this].concat(n))),"addTooltip",(function(e){var n=l().createElement(s.Tooltip,{id:"locate-tooltip"},t.props.tooltip);return l().createElement(h.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:n},e)})),j(P(t),"zoomToMaxExtent",(function(){var e=t.props.mapConfig.maxExtent,n=t.props.mapConfig.size,o=1,r=t.props.mapConfig.center,i=t.props.mapConfig.projection||"EPSG:3857";e&&"[object Array]"===Object.prototype.toString.call(e)&&(o=(0,v.getZoomForExtent)(e,n,0,21),0===(r=(0,v.getCenterForExtent)(e,i)).x&&0===r.y||(r=(0,g.qg)(r,"EPSG:4326")));var c=(0,v.getBbox)(r,o,n);t.props.changeMapView(r,o,c,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),j(P(t),"zoomToInitialExtent",(function(){var e=t.props.mapInitialConfig,n=(0,v.getBbox)(e.center,e.zoom,t.props.mapConfig.size);t.props.changeMapView(e.center,e.zoom,n,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),t}return e=c,(n=[{key:"render",value:function(){var t=this;return this.addTooltip(l().createElement(b.Z,{id:this.props.id,style:this.props.style,bsSize:this.props.btnSize,onClick:function(){return t.props.useInitialExtent?t.zoomToInitialExtent():t.zoomToMaxExtent()},className:this.props.className,bsStyle:this.props.bsStyle},this.props.glyphicon?l().createElement(s.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(l().Component);j(C,"propTypes",{id:d().string,image:d().string,glyphicon:d().string,text:d().string,btnSize:d().oneOf(["large","small","xsmall"]),mapConfig:d().object,mapInitialConfig:d().object,changeMapView:d().func,btnType:d().oneOf(["normal","image"]),help:d().oneOfType([d().string,d().element]),tooltip:d().element,tooltipPlace:d().string,className:d().string,useInitialExtent:d().bool,bsStyle:d().string,style:d().object}),j(C,"defaultProps",{id:"mapstore-zoomtomaxextent",glyphicon:"resize-full",text:void 0,btnSize:"xsmall",btnType:"normal",useInitialExtent:!1,tooltipPlace:"left",bsStyle:"default",className:"square-button"});const w=C;var N=n(805346),A=n(800827);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function I(){return I=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},I.apply(this,arguments)}function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function z(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Z(t,e){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Z(t,e)}function k(t,e){if(e&&("object"===M(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var G=(0,f.P1)([A.Od,function(t){return t.mapInitialConfig}],(function(t,e){return{mapConfig:t,mapInitialConfig:e}})),U=(0,p.connect)(G,{changeMapView:y.o6})(w),B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Z(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(o);if(r){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function c(){return R(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"render",value:function(){return l().createElement(U,I({key:"zoomToMaxExtent"},this.props,{useInitialExtent:!0}))}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(l().Component);const V={ZoomAllPlugin:a()(B,{Toolbar:{name:"ZoomAll",position:7,tooltip:"zoombuttons.zoomAllTooltip",icon:l().createElement(s.Glyphicon,{glyph:"resize-full"}),help:l().createElement(N.Z,{msgId:"helptexts.zoomToMaxExtentButton"}),tool:!0,priority:1}}),reducers:{}}},154840:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(923645),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,".msgapi #mapstore-zoomtomaxextent {\n    z-index: 1;\n    position: relative;\n}\n",""]);const i=r},923645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},893379:(t,e,n)=>{"use strict";var o,r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function c(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},o=[],r=0;r<t.length;r++){var a=t[r],u=e.base?a[0]+e.base:a[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var p=c(s),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:s,updater:d(f,e),references:1}),o.push(s)}return o}function u(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var c=r(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var l,s=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=s(e,r);else{var i=document.createTextNode(r),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function f(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var y=null,m=0;function d(t,e){var n,o,r;if(e.singleton){var i=m++;n=y||(y=u(e)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=u(e),o=f.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var u=a(t,e),l=0;l<n.length;l++){var s=c(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=u}}}}}]);