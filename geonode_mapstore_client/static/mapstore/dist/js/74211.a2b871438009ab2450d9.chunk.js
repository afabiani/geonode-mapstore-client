(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[74211,47310],{21914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>c,Pn:()=>a,DZ:()=>s,e8:()=>f,E0:()=>l,F9:()=>p,X_:()=>y,pb:()=>E,qb:()=>m,Re:()=>d,ih:()=>b,xy:()=>O,jL:()=>_,oz:()=>I,ph:()=>v,lF:()=>T,gG:()=>P,cb:()=>g,GI:()=>h,B1:()=>R,fv:()=>N,gc:()=>F,zX:()=>A,ZF:()=>S,Zb:()=>D,DW:()=>j,Xp:()=>w,Fm:()=>G,sV:()=>M,Mn:()=>Y,LU:()=>C,XP:()=>U,WU:()=>L,JB:()=>q,g:()=>H,ws:()=>x,HP:()=>Z,aN:()=>k,Pg:()=>K,u0:()=>X,TM:()=>z,PM:()=>B,lK:()=>Q,sv:()=>V,MO:()=>J,oO:()=>$,Mc:()=>ee,Zw:()=>te,RA:()=>re,am:()=>ne,ZM:()=>oe,wm:()=>ie,Y$:()=>ue,Qu:()=>ce,kT:()=>ae});var n=r(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",c="CHANGE_MAPINFO_STATE",a="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",E="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",d="NO_QUERYABLE_LAYERS",b="CLEAR_WARNING",O="FEATURE_INFO_CLICK",_="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",I="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",v="TOGGLE_MAPINFO_STATE",T="UPDATE_CENTER_TO_MARKER",P="IDENTIFY:CHANGE_PAGE",g="IDENTIFY:CLOSE_IDENTIFY",h="IDENTIFY:CHANGE_FORMAT",R="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",N="IDENTIFY:EDIT_LAYER_FEATURES",F="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",A="IDENTIFY:SET_MAP_TRIGGER",S="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",D="IDENTIFY:SET_SHOW_IN_MAP_POPUP",j="IDENTIFY:IDENTIFY_IS_MOUNTED",w="IDENTIFY:INIT_PLUGIN";function G(e,t,r,n,i){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:i}}function M(e,t,r,n){return{type:i,error:t,reqId:e,requestParams:r,layerMetadata:n}}function Y(e,t,r,n){return{type:u,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function C(){return{type:d}}function U(){return{type:b}}function L(e,t){return{type:a,reqId:e,request:t}}function q(e,t,r,n){return{type:m,layer:e,request:t,metadata:r,queryableLayers:n}}function H(){return{type:s}}function x(e){return{type:f,infoFormat:e}}function Z(){return{type:l}}function k(){return{type:p}}function W(e){return{type:y,reverseGeocodeData:e.data}}function K(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(W(e))})).catch((function(e){t(W(e))}))}}function X(){return{type:E}}function z(){return{type:v}}function B(e){return{type:T,status:e}}function Q(e,t){return{type:O,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function V(e){return{type:_,point:e}}function J(e){return{type:I,enabled:e}}function $(e){return{type:P,index:e}}var ee=function(){return{type:g}},te=function(e){return{type:h,format:e}},re=function(e){return{type:R,showCoordinateEditor:e}},ne=function(e){return{type:N,layer:e}},oe=function(e){return{type:F,query:e}},ie=function(e){return{type:A,trigger:e}},ue=function(e){return{type:D,value:e}},ce=function(e){return{type:j,isMounted:e}},ae=function(e){return{type:w,cfg:e}}},47310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(75875),o=r.n(n),i=r(72500),u=r.n(i),c=r(27418),a=r.n(c),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(e,t){var r=a()({q:e},s,t||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=a()({lat:e.lat,lon:e.lng},t||{},s),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},15402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(75263),o=r.n(n),i=r(24852),u=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function l(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}var y=r(68195).FormattedHTMLMessage,E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(l,e);var t,r,n,o,i=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(o){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),i.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){return this.context.intl?u().createElement(y,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(u().Component);l(E,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),l(E,"contextTypes",{intl:o().object});const m=E},21751:(e,t,r)=>{"use strict";r.r(t),r.d(t,{IDENTIFY_POPUP:()=>T,default:()=>P});var n=r(24852),o=r.n(n),i=r(73014),u=r(11196),c=r(67076),a=r(71703),s=r(22222),f=r(7877),l=r(21914),p=r(42872),y=r(1469),E=r.n(y),m=r(52353),d=r.n(m),b=r(79870),O=r(827),_=(0,c.compose)((0,a.connect)((0,s.P1)(f.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,c.defaultProps)({index:0,responses:[]})),I=(0,s.P1)([f.q7,f.o9,f.OK,f.us,f.x0,O.hp,f.vR],(function(e,t,r,n,o,i,u){return{responses:e,validResponses:t,requests:r,format:n,showEmptyMessageGFI:o,missingResponses:(r||[]).length-(e||[]).length,renderValidOnly:i,loaded:u}}));const v=(0,c.compose)((0,a.connect)(I),(0,c.defaultProps)({responses:[],container:function(e){var t=e.index,r=e.children;return o().createElement(o().Fragment,null,E()(r)&&r[t]||r)},header:b.Z}),_,u.Yy,u.mI,(0,i.Z)((function(e){var t=e.loaded;return d()(t)})))(p.Z);var T="identify";const P={identify:v}},32425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(75263),o=r.n(n),i=r(24852),u=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return u().createElement("div",{className:o,style:s({width:t,height:t,overflow:"hidden"},n)},!i&&u().createElement("div",{className:"mapstore-".concat(l(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const y=p},10240:(e,t,r)=>{var n=r(29750),o=r(80531),i=r(40554),u=r(79833);e.exports=function(e,t,r){return e=u(e),r=null==r?0:n(i(r),0,e.length),t=o(t),e.slice(r,r+t.length)==t}}}]);