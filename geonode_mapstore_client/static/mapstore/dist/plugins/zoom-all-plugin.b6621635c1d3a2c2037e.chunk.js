(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7236],{1550:(t,e,n)=>{"use strict";n.d(e,{pP:()=>r,TR:()=>i,N7:()=>a,mq:()=>c,uv:()=>u,Qy:()=>s,IL:()=>p,Li:()=>l,OW:()=>f,ZO:()=>y,Um:()=>m,TF:()=>h,Ls:()=>d,Ec:()=>v,Eu:()=>b,JJ:()=>g,nZ:()=>E,YD:()=>O,GI:()=>x,Jb:()=>_,Uh:()=>S,LP:()=>T,xy:()=>C,o6:()=>P,FP:()=>R,Mo:()=>N,sO:()=>j,Px:()=>w,hd:()=>M,BV:()=>I,SO:()=>A,H0:()=>L,$X:()=>z,ou:()=>U,NE:()=>Z});var o=n(97395),r="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",a="CHANGE_MOUSE_POINTER",c="CHANGE_ZOOM_LVL",u="PAN_TO",s="ZOOM_TO_EXTENT",p="ZOOM_TO_POINT",l="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",y="CHANGE_MAP_STYLE",m="CHANGE_ROTATION",h="CREATION_ERROR_LAYER",d="UPDATE_VERSION",v="INIT_MAP",b="RESIZE_MAP",g="CHANGE_MAP_LIMITS",E="SET_MAP_RESOLUTIONS",O="REGISTER_EVENT_LISTENER",x="UNREGISTER_EVENT_LISTENER",_="MOUSE_MOVE",S="MOUSE_OUT";function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,o.vU)({title:"warning",message:"map.errorLoadingFont",values:t,position:"tc",autoDismiss:10})}function C(t,e,n){return{type:p,pos:t,zoom:e,crs:n}}function P(t,e,n,o,i,a,c,u){return{type:r,center:t,zoom:e,bbox:n,size:o,mapStateSource:i,projection:a,viewerOptions:c,resolution:u}}function R(t,e){return{type:i,point:t,layer:e}}function N(t){return{type:a,pointer:t}}function j(t,e){return{type:c,zoom:t,mapStateSource:e}}function w(t,e,n){return{type:s,extent:t,crs:e,maxZoom:n}}function M(t,e){return{type:y,style:t,mapStateSource:e}}function I(t){var e=t.restrictedExtent,n=t.crs,o=t.minZoom;return{type:g,restrictedExtent:e,crs:n,minZoom:o}}function A(t){return{type:E,resolutions:t}}var L=function(t,e){return{type:O,eventName:t,toolName:e}},z=function(t,e){return{type:x,eventName:t,toolName:e}},U=function(t){return{type:_,position:t}},Z=function(){return{type:S}}},50966:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(61365),r=n(30294);const i=(0,o.Z)(r.OverlayTrigger)},61365:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var o=n(24852),r=n.n(o),i=n(37275);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}const c=function(t){return function(e){return r().createElement(t,a({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},19461:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>G}),n(48966);var o=n(27418),r=n.n(o),i=n(24852),a=n.n(i),c=n(30294),u=n(71703),s=n(22222),p=n(1550),l=n(45697),f=n.n(l),y=n(38560),m=n(50966),h=n(52259),d=n(37275);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?x(t):e}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(o);if(r){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return O(this,t)});function u(){var t;b(this,u);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return S(x(t=i.call.apply(i,[this].concat(n))),"addTooltip",(function(e){var n=a().createElement(c.Tooltip,{id:"locate-tooltip"},t.props.tooltip);return a().createElement(m.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:n},e)})),S(x(t),"zoomToMaxExtent",(function(){var e=t.props.mapConfig.maxExtent,n=t.props.mapConfig.size,o=1,r=t.props.mapConfig.center,i=t.props.mapConfig.projection||"EPSG:3857";e&&"[object Array]"===Object.prototype.toString.call(e)&&(o=(0,h.getZoomForExtent)(e,n,0,21),0===(r=(0,h.getCenterForExtent)(e,i)).x&&0===r.y||(r=(0,d.qg)(r,"EPSG:4326")));var a=(0,h.getBbox)(r,o,n);t.props.changeMapView(r,o,a,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),S(x(t),"zoomToInitialExtent",(function(){var e=t.props.mapInitialConfig,n=(0,h.getBbox)(e.center,e.zoom,t.props.mapConfig.size);t.props.changeMapView(e.center,e.zoom,n,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),t}return e=u,(n=[{key:"render",value:function(){var t=this;return this.addTooltip(a().createElement(y.Z,{id:this.props.id,style:this.props.style,bsSize:this.props.btnSize,onClick:function(){return t.props.useInitialExtent?t.zoomToInitialExtent():t.zoomToMaxExtent()},className:this.props.className,bsStyle:this.props.bsStyle},this.props.glyphicon?a().createElement(c.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&g(e.prototype,n),u}(a().Component);S(T,"propTypes",{id:f().string,image:f().string,glyphicon:f().string,text:f().string,btnSize:f().oneOf(["large","small","xsmall"]),mapConfig:f().object,mapInitialConfig:f().object,changeMapView:f().func,btnType:f().oneOf(["normal","image"]),help:f().oneOfType([f().string,f().element]),tooltip:f().element,tooltipPlace:f().string,className:f().string,useInitialExtent:f().bool,bsStyle:f().string,style:f().object}),S(T,"defaultProps",{id:"mapstore-zoomtomaxextent",glyphicon:"resize-full",text:void 0,btnSize:"xsmall",btnType:"normal",useInitialExtent:!1,tooltipPlace:"left",bsStyle:"default",className:"square-button"});const C=T;var P=n(5346),R=n(827);function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t,e){return!e||"object"!==N(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var z=(0,s.P1)([R.Od,function(t){return t.mapInitialConfig}],(function(t,e){return{mapConfig:t,mapInitialConfig:e}})),U=(0,u.connect)(z,{changeMapView:p.o6})(C),Z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(o);if(r){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function c(){return w(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"render",value:function(){return a().createElement(U,j({key:"zoomToMaxExtent"},this.props,{useInitialExtent:!0}))}}])&&M(e.prototype,n),c}(a().Component);const G={ZoomAllPlugin:r()(Z,{Toolbar:{name:"ZoomAll",position:7,tooltip:"zoombuttons.zoomAllTooltip",icon:a().createElement(c.Glyphicon,{glyph:"resize-full"}),help:a().createElement(P.Z,{msgId:"helptexts.zoomToMaxExtentButton"}),tool:!0,priority:1}}),reducers:{}}},60536:(t,e,n)=>{(t.exports=n(9252)()).push([t.id,".msgapi #mapstore-zoomtomaxextent {\n    z-index: 1;\n    position: relative;\n}\n",""])},9252:t=>{t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},56029:(t,e,n)=>{var o=n(33448);t.exports=function(t,e,n){for(var r=-1,i=t.length;++r<i;){var a=t[r],c=e(a);if(null!=c&&(void 0===u?c==c&&!o(c):n(c,u)))var u=c,s=a}return s}},53407:t=>{t.exports=function(t,e){return t<e}},95395:(t,e,n)=>{var o=n(89465),r=n(47816),i=n(67206);t.exports=function(t,e){var n={};return e=i(e,3),r(t,(function(t,r,i){o(n,e(t,r,i),t)})),n}},22762:(t,e,n)=>{var o=n(56029),r=n(67206),i=n(53407);t.exports=function(t,e){return t&&t.length?o(t,r(e,2),i):void 0}},44908:(t,e,n)=>{var o=n(45652);t.exports=function(t){return t&&t.length?o(t):[]}},87185:(t,e,n)=>{var o=n(45652);t.exports=function(t,e){return e="function"==typeof e?e:void 0,t&&t.length?o(t,void 0,e):[]}},14246:t=>{var e={},n=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},o=n((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),r=n((function(){return document.head||document.getElementsByTagName("head")[0]})),i=null,a=0;function c(t,n){for(var o=0;o<t.length;o++){var r=t[o],i=e[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(p(r.parts[a],n))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(p(r.parts[a],n));e[r.id]={id:r.id,refs:1,parts:c}}}}function u(t){for(var e=[],n={},o=0;o<t.length;o++){var r=t[o],i=r[0],a={css:r[1],media:r[2],sourceMap:r[3]};n[i]?n[i].parts.push(a):e.push(n[i]={id:i,parts:[a]})}return e}function s(){var t=document.createElement("style"),e=r();return t.type="text/css",e.appendChild(t),t}function p(t,e){var n,o,c,u,p;if(e.singleton){var l=a++;n=i||(i=s()),o=y.bind(null,n,l,!1),c=y.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(u=document.createElement("link"),p=r(),u.rel="stylesheet",p.appendChild(u),n=u,o=h.bind(null,n),c=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(),o=m.bind(null,n),c=function(){n.parentNode.removeChild(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else c()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(n=n||{}).singleton&&(n.singleton=o());var r=u(t);return c(r,n),function(t){for(var o=[],i=0;i<r.length;i++){var a=r[i];(s=e[a.id]).refs--,o.push(s)}for(t&&c(u(t),n),i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete e[s.id]}}}};var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function y(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function m(t,e){var n=e.css,o=e.media;if(e.sourceMap,o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function h(t,e){var n=e.css,o=(e.media,e.sourceMap);o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}},48966:(t,e,n)=>{var o=n(60536);"string"==typeof o&&(o=[[t.id,o,""]]),n(14246)(o,{}),o.locals&&(t.exports=o.locals)}}]);