(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2530],{57604:(t,e,n)=>{"use strict";n.d(e,{XV:()=>r,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>u,yR:()=>c,pF:()=>s,PZ:()=>p});var r="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",u=function(t,e,n){return{type:r,dimension:e,layerId:t,data:n}},c=function(t){return{type:o,time:t}},s=function(t){return{type:i,offsetTime:t}},p=function(t){return{type:a,time:t}}},80416:(t,e,n)=>{"use strict";n.d(e,{yS:()=>r,Zz:()=>o,ms:()=>i,ih:()=>a,OX:()=>u,sb:()=>c,K$:()=>s,k7:()=>p,cX:()=>l,x9:()=>f,vs:()=>y,oE:()=>d,Po:()=>E,qv:()=>m,cI:()=>v,g6:()=>b,I4:()=>h,l$:()=>A,Xv:()=>S,k3:()=>O,CQ:()=>T,R8:()=>g,HN:()=>_,sH:()=>R,c7:()=>P,_7:()=>I,eF:()=>N,O6:()=>L,ED:()=>w,RP:()=>M,sF:()=>C,VP:()=>D,He:()=>Y,vO:()=>k,WO:()=>x,bh:()=>j,pV:()=>G,MK:()=>F,ZF:()=>U,tV:()=>B,Dv:()=>H,Yz:()=>K,kI:()=>V,XG:()=>W,A4:()=>Z,Rp:()=>X,$o:()=>z,ct:()=>Q,oh:()=>$,$h:()=>q,ud:()=>J,Qr:()=>tt,LR:()=>et,nN:()=>nt,UG:()=>rt,F5:()=>ot,c9:()=>it,Jh:()=>at,Xy:()=>ut});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",a="TOGGLE_NODE",u="SORT_NODE",c="REMOVE_NODE",s="UPDATE_NODE",p="MOVE_NODE",l="LAYER_LOADING",f="LAYER_LOAD",y="LAYER_ERROR",d="ADD_LAYER",E="ADD_GROUP",m="REMOVE_LAYER",v="SHOW_SETTINGS",b="HIDE_SETTINGS",h="UPDATE_SETTINGS",A="REFRESH_LAYERS",S="LAYERS:UPDATE_LAYERS_DIMENSION",O="LAYERS_REFRESHED",T="LAYERS_REFRESH_ERROR",g="LAYERS:BROWSE_DATA",_="LAYERS:DOWNLOAD",R="LAYERS:CLEAR_LAYERS",P="LAYERS:SELECT_NODE",I="LAYERS:FILTER_LAYERS",N="LAYERS:SHOW_LAYER_METADATA",L="LAYERS:HIDE_LAYER_METADATA",w="LAYERS:UPDATE_SETTINGS_PARAMS";function M(t,e,n){return{type:v,node:t,nodeType:e,options:n}}function C(){return{type:b}}function D(t){return{type:h,options:t}}function Y(t,e){return{type:r,newProperties:e,layer:t}}function k(t,e){return{type:o,layer:t,params:e}}function x(t,e){return{type:i,newProperties:e,group:t}}function j(t,e,n){return{type:a,node:t,nodeType:e,status:!n}}function G(t){return{type:"CONTEXT_NODE",node:t}}function F(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:u,node:t,order:e,sortLayers:n}}function U(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:c,node:t,nodeType:e,removeEmpty:n}}function B(t,e,n){return{type:s,node:t,nodeType:e,options:n}}function H(t,e,n){return{type:p,node:t,groupId:e,index:n}}function K(t){return{type:l,layerId:t}}function V(t,e){return{type:f,layerId:t,error:e}}function W(t,e,n){return{type:y,layerId:t,tilesCount:e,tilesErrorCount:n}}function Z(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:d,layer:t,foreground:e}}function X(t,e,n){return{type:E,group:t,parent:e,options:n}}function z(t){return{type:m,layerId:t}}function Q(t,e){return{type:r,layer:t,newProperties:{_v_:e||(new Date).getTime()}}}function $(t){return{type:O,layers:t}}function q(t,e){return{type:T,layers:t,error:e}}function J(t,e,n,r){return{type:S,dimension:t,value:e,options:n,layers:r}}function tt(t){return{type:g,layer:t}}function et(t){return{type:_,layer:t}}function nt(){return{type:R}}function rt(t,e,n){return{type:P,id:t,nodeType:e,ctrlKey:n}}function ot(t){return{type:I,text:t}}function it(t,e){return{type:N,metadataRecord:t,maskLoading:e}}function at(){return{type:L}}function ut(t,e){return{type:w,newParams:t,update:e}}},62187:(t,e,n)=>{"use strict";n.d(e,{NH:()=>r,E7:()=>o,N7:()=>i,L9:()=>a,hQ:()=>u,NC:()=>c,c9:()=>s,up:()=>p,FZ:()=>l,Fi:()=>f,KB:()=>y,E0:()=>d,Q_:()=>E,hY:()=>m,wO:()=>v,sT:()=>b,wR:()=>h,h1:()=>A,hS:()=>S,zK:()=>O,VS:()=>T,oz:()=>g,FH:()=>_,XN:()=>R,Ym:()=>P});var r="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:SET_FRAMES",u="PLAYBACK:APPEND_FRAMES",c="PLAYBACK:FRAMES_LOADING",s="PLAYBACK:SET_CURRENT_FRAME",p="PLAYBACK:SELECT_PLAYBACK_RANGE",l="PLAYBACK:SETTINGS_CHANGE",f="PLAYBACK:TOGGLE_ANIMATION_MODE",y="PLAYBACK:ANIMATION_STEP_MOVE",d="PLAYBACK:UPDATE_METADATA",E={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},m=function(){return{type:r}},v=function(){return{type:o}},b=function(){return{type:i}},h=function(t){return{type:a,frames:t}},A=function(t){return{type:s,frame:t}},S=function(t){return{type:u,frames:t}},O=function(t){return{type:c,loading:t}},T=function(t){return{type:p,range:t}},g=function(t,e){return{type:l,name:t,value:e}},_=function(){return{type:f}},R=function(t){return{type:y,direction:t}},P=function(t){var e=t.next,n=t.previous,r=t.forTime;return{type:d,forTime:r,next:e,previous:n}}},57676:(t,e,n)=>{"use strict";n.d(e,{qx:()=>r,HM:()=>o,Lv:()=>i,y3:()=>a,iv:()=>u,cO:()=>c,br:()=>s,aA:()=>p,_V:()=>l,kq:()=>f,JU:()=>y,PQ:()=>d,cb:()=>E,KI:()=>m,M5:()=>v,w2:()=>b,w:()=>h,Z7:()=>A,p:()=>S,_e:()=>O});var r="TIMELINE:SELECT_TIME",o=function(t,e,n,o){return{type:r,time:t,group:e,what:n,item:o}},i="TIMELINE:RANGE_CHANGE",a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,n=t.end;return{type:i,start:e,end:n}},u="TIMELINE:RANGE_DATA_LOADED",c=function(t,e,n,r){return{type:u,layerId:t,range:e,histogram:n,domain:r}},s="TIMELINE:LOADING",p=function(t,e){return{type:s,layerId:t,loading:e}},l="TIMELINE:SELECT_LAYER",f=function(t){return{type:l,layerId:t}},y="TIMELINE:ENABLE_OFFSET",d=function(t){return{type:y,enabled:t}},E="TIMELINE:AUTOSELECT",m=function(){return{type:E}},v="TIMELINE:SET_COLLAPSED",b=function(t){return{type:v,collapsed:t}},h="TIMELINE:SET_MAP_SYNC",A=function(t){return{type:h,mapSync:t}},S="TIMELINE:INIT_TIMELINE",O=function(t){return{type:S,showHiddenLayers:t}}},96361:(t,e,n)=>{"use strict";n.d(e,{i8:()=>E,ot:()=>m,Ci:()=>v,CX:()=>b});var r=n(66654),o=n.n(r),i=n(13880),a=n.n(i),u=n(49977),c=n(75875),s=n.n(c),p=n(10284);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(t){return Object.keys(t).reduce((function(e,n){return void 0!==t[n]&&null!==t[n]?f(f({},e),{},y({},n,t[n])):e}),{})},E=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.service,i=void 0===o?"WMTS":o,a=r.version,c=void 0===a?"1.0.0":a,l=r.tileMatrixSet,y=void 0===l?"EPSG:4326":l,E=r.bbox,m=r.domains,v=r.expandLimit;return u.Observable.defer((function(){return s().get(t,{params:d(f({service:i,REQUEST:"DescribeDomains",version:c,layer:e,tileMatrixSet:y,bbox:E,domains:m,expandLimit:v},n))})})).let(p.oB).switchMap((function(t){return(0,p.sw)(t.data)}))},m=function(t,e,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=i.service,c=void 0===a?"WMTS":a,l=i.version,y=void 0===l?"1.1.0":l,E=i.tileMatrixSet,m=void 0===E?"EPSG:4326":E,v=i.bbox;return u.Observable.defer((function(){return s().get(t,{params:d(f({service:c,REQUEST:"GetHistogram",resolution:o,histogram:n,version:y,layer:e,tileMatrixSet:m,bbox:v},r))})})).let(p.oB).switchMap((function(t){return(0,p.sw)(t.data)}))},v=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.time,i=r.fromValue,a=r.sort,c=void 0===a?"asc":a,l=r.limit,f=void 0===l?20:l,y=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},E=y.bbox,m=y.tileMatrixSet,v=void 0===m?"EPSG:4326":m,b=y.service,h=void 0===b?"WMTS":b,A=y.version,S=void 0===A?"1.0.0":A;return u.Observable.defer((function(){return s().get(t,{params:d({service:h,version:S,request:"GetDomainValues",tileMatrixSet:v,bbox:E,layer:e,domain:n,fromValue:i,sort:c,limit:f,time:o})})})).let(p.oB).switchMap((function(t){return(0,p.sw)(t.data)}))},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.url;return o()(e,"/wms")?a()(e,/\/wms$/,"/gwc/service/wmts"):o()(e,"/ows")?a()(e,/\/ows$/,"/gwc/service/wmts"):e}},52595:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=(0,n(61365).Z)(n(30294).Overlay)},65295:(t,e,n)=>{"use strict";n.d(e,{Z:()=>R});var r=n(24852),o=n.n(r),i=n(32475),a=n.n(i),u=n(14293),c=n.n(u),s=n(45697),p=n.n(s),l=n(5582),f=n.n(l),y=n(30294),d=n(15135),E=n(38560);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?S(t):e}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=(0,d.Z)(y.Glyphicon),_=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(s,t);var e,n,r,i,u=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(i){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function s(){var t;v(this,s);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return T(S(t=u.call.apply(u,[this].concat(n))),"onUpdate",(function(e,n){var r=f()(t.props.date).utc(),o=n?f()(r).add(1,e):f()(r).subtract(1,e);o.isValid()&&!isNaN(o.toDate().getTime())&&t.props.onUpdate(o.toISOString())})),T(S(t),"onChange",(function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(""!==n){var o=f()(t.props.date).utc(),i=o["day"===e?"date":e]&&f()(o)["day"===e?"date":e](r(n));i.isValid()&&!isNaN(i.toDate().getTime())&&t.props.onUpdate(i.toISOString())}})),T(S(t),"getForm",(function(){var e=t.props.date&&f()(t.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:e&&e.date()},{name:"month",placeholder:"MM",readOnly:!0,value:e&&e.month(),format:function(t){return!c()(t)&&""!==t&&f().monthsShort(t)},parseValue:function(t){return t-1}},{name:"year",placeholder:"YYYY",value:e&&e.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:e&&e.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:e&&e.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:e&&e.seconds()},{name:"separator",value:e&&e.utcOffset(),type:"separator",format:function(t){return"UTC "+(t>=0?"+":"-")+a()(t/60,2,0)}}]})),t}return e=s,(n=[{key:"render",value:function(){var t=this,e=this.getForm();return o().createElement(y.Form,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(y.FormGroup,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return t.props.clickable&&t.props.onIconClick(t.props.date,t.props.glyph)}},o().createElement(g,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),e.map((function(e){return"icon"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},o().createElement(g,{glyph:e.value}))||"separator"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},e.format&&e.format(e.value)||e.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},t.props.showButtons&&o().createElement(E.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name,!0)}},o().createElement(g,{glyph:"chevron-up"})),o().createElement(y.FormControl,{type:"text",readOnly:e.readOnly,placeholder:e.placeholder||e.name,disabled:!t.props.date,value:e.format&&e.format(e.value)||e.value,onChange:function(n){return t.onChange(e.name,n.target.value,e.parseValue)}}),t.props.showButtons&&o().createElement(E.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name)}},o().createElement(g,{glyph:"chevron-down"})))}))))}}])&&b(e.prototype,n),s}(o().Component);T(_,"propTypes",{date:p().string,clickable:p().bool,onUpdate:p().func,onIconClick:p().func,glyph:p().string,style:p().object,className:p().string,tooltip:p().string,tooltipId:p().string,showButtons:p().bool}),T(_,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const R=_},89919:(t,e,n)=>{"use strict";n.d(e,{hP:()=>p});var r=n(84596),o=n.n(r),i=n(49977),a=n.n(i);function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,u(e))},p=function(t,e,n){return function(r){return(n?s(r,o()(t)).catch(n):s(r,o()(t))).concat(a().Observable.from(o()(e)))}}},37307:(t,e,n)=>{"use strict";n.d(e,{Z:()=>y});var r=n(57604),o=n(80416),i=n(82904),a=n(61868),u=n(5582),c=n.n(u),s=n(66604),p=n.n(s),l=n(35937),f=n.n(l);const y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r.XV:return(0,a.t8)("data[".concat(e.dimension,"][").concat(e.layerId,"]"),e.data,t);case r.mE:return(0,a.t8)("currentTime",e.time,t);case r.at:return(0,a.t8)("offsetTime",e.offsetTime,t);case r.mD:if(t.offsetTime&&t.currentTime){var n=c()(t.offsetTime).diff(t.currentTime),u=c()(e.time).add(n);return(0,a.t8)("currentTime",e.time,(0,a.t8)("offsetTime",u.toISOString(),t))}return(0,a.t8)("currentTime",e.time,t);case o.sb:var s=p()(t.data,(function(t){return f()(t,(function(t,n){return n!==e.node}))}));return(0,a.t8)("data",s,t);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,t)));default:return t}}},76843:(t,e,n)=>{"use strict";n.d(e,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>c,E2:()=>s,Np:()=>p,KC:()=>l,Wq:()=>f,rp:()=>y,PF:()=>d});var r=n(22222),o=function(t){return t&&t.playback&&t.playback.settings},i=function(t){return(o(t)||{}).frameDuration||5},a=function(t){return t&&t.playback&&t.playback.status},u=function(t){return t&&t.playback&&t.playback.frames},c=function(t){var e=u(t)||[];return e[e.length-1]},s=function(t){return t&&t.playback&&t.playback.framesLoading},p=function(t){return t&&t.playback&&t.playback.currentFrame},l=function(t){return function(t){return t&&t.playback&&t.playback.playbackRange}(t)},f=function(t){return(u(t)||[])[p(t)]},y=function(t){return t&&t.playback&&t.playback.metadata},d=(0,r.P1)(u,p,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{hasNext:t[e+1],hasPrevious:t[e-1]}}))},10284:(t,e,n)=>{"use strict";n.d(e,{sw:()=>v,oB:()=>b});var r=n(49977),o=n.n(r),i=n(27361),a=n.n(i),u=n(5055),c=n(7526);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return f(t,arguments,E(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),d(r,t)})(t)}function f(t,e,n){return(f=y()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&d(o,n.prototype),o}).apply(null,arguments)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n(24384);var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(o,t);var e,n,r=(e=o,n=y(),function(){var t,r=E(e);if(n){var o=E(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return p(this,t)});function o(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=r.call(this,t)).name="OGCError",n.code=e,n}return o}(l(Error)),v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0};return o().Observable.bindNodeCallback((function(t,n){return(0,u.parseString)(t,e,n)}))(t)},b=function(t){return t.switchMap((function(t){return"string"==typeof t.data&&t.data.indexOf("ExceptionReport")>0?o().Observable.bindNodeCallback((function(t,e){return(0,u.parseString)(t,{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data).map((function(t){var e=a()(t,"ExceptionReport.Exception.ExceptionText");throw new m(e||"Undefined OGC Service Error",a()(t,"ExceptionReport.Exception.exceptionCode"))})):o().Observable.of(t)}))}},84715:(t,e,n)=>{"use strict";n.d(e,{y:()=>p,o:()=>l});var r=n(28368),o=n.n(r),i=n(13218),a=n.n(i),u=n(22222),c=function(t,e){return t===e},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return function(e,n){return Array.isArray(e)&&Array.isArray(n)?e===n||e.length===n.length&&e.reduce((function(e,r,o){return e&&t(r,n[o])}),!0):a()(e)&&a()(n)?e===n||Object.keys(e).length===Object.keys(n).length&&Object.keys(e).reduce((function(r,o){return r&&t(e[o],n[o])}),!0):e===n}},p=(0,u.wN)(u.PW,(function(t,e){return o()(t,e,s())})),l=function(t){return(0,u.wN)(u.PW,(function(e,n){return o()(e,n,s(t))}))}}}]);