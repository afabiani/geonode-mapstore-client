(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[73497],{57604:(t,e,r)=>{"use strict";r.d(e,{XV:()=>n,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>u,yR:()=>c,pF:()=>l,PZ:()=>f});var n="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",u=function(t,e,r){return{type:n,dimension:e,layerId:t,data:r}},c=function(t){return{type:o,time:t}},l=function(t){return{type:i,offsetTime:t}},f=function(t){return{type:a,time:t}}},62187:(t,e,r)=>{"use strict";r.d(e,{NH:()=>n,E7:()=>o,N7:()=>i,L9:()=>a,hQ:()=>u,NC:()=>c,c9:()=>l,up:()=>f,AN:()=>s,FZ:()=>p,Fi:()=>y,KB:()=>m,E0:()=>d,Q_:()=>b,hY:()=>v,wO:()=>h,sT:()=>g,wR:()=>O,h1:()=>S,hS:()=>E,zK:()=>w,VS:()=>A,oz:()=>P,FH:()=>T,XN:()=>j,Ym:()=>C,RQ:()=>_});var n="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:SET_FRAMES",u="PLAYBACK:APPEND_FRAMES",c="PLAYBACK:FRAMES_LOADING",l="PLAYBACK:SET_CURRENT_FRAME",f="PLAYBACK:SELECT_PLAYBACK_RANGE",s="PLAYBACK:SET_INTERVAL_DATA",p="PLAYBACK:SETTINGS_CHANGE",y="PLAYBACK:TOGGLE_ANIMATION_MODE",m="PLAYBACK:ANIMATION_STEP_MOVE",d="PLAYBACK:UPDATE_METADATA",b={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},v=function(){return{type:n}},h=function(){return{type:o}},g=function(){return{type:i}},O=function(t){return{type:a,frames:t}},S=function(t){return{type:l,frame:t}},E=function(t){return{type:u,frames:t}},w=function(t){return{type:c,loading:t}},A=function(t){return{type:f,range:t}},P=function(t,e){return{type:p,name:t,value:e}},T=function(){return{type:y}},j=function(t){return{type:m,direction:t}},C=function(t){var e=t.next,r=t.previous,n=t.forTime;return{type:d,forTime:n,next:e,previous:r}},_=function(t){return{type:s,timeIntervalData:t}}},96361:(t,e,r)=>{"use strict";r.d(e,{i8:()=>b,ot:()=>v,Ci:()=>h,CX:()=>g});var n=r(66654),o=r.n(n),i=r(13880),a=r.n(i),u=r(49977),c=r(75875),l=r.n(c),f=r(10284);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return Object.keys(t).reduce((function(e,r){return void 0!==t[r]&&null!==t[r]?y(y({},e),{},m({},r,t[r])):e}),{})},b=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.service,i=void 0===o?"WMTS":o,a=n.version,c=void 0===a?"1.0.0":a,s=n.tileMatrixSet,p=void 0===s?"EPSG:4326":s,m=n.bbox,b=n.domains,v=n.expandLimit;return u.Observable.defer((function(){return l().get(t,{params:d(y({service:i,REQUEST:"DescribeDomains",version:c,layer:e,tileMatrixSet:p,bbox:m,domains:b,expandLimit:v},r))})})).let(f.oB).switchMap((function(t){return(0,f.sw)(t.data)}))},v=function(t,e,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=i.service,c=void 0===a?"WMTS":a,s=i.version,p=void 0===s?"1.1.0":s,m=i.tileMatrixSet,b=void 0===m?"EPSG:4326":m,v=i.bbox;return u.Observable.defer((function(){return l().get(t,{params:d(y({service:c,REQUEST:"GetHistogram",resolution:o,histogram:r,version:p,layer:e,tileMatrixSet:b,bbox:v},n))})})).let(f.oB).switchMap((function(t){return(0,f.sw)(t.data)}))},h=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.time,i=n.fromValue,a=n.sort,c=void 0===a?"asc":a,s=n.limit,p=void 0===s?20:s,y=n.fromEnd,m=void 0!==y&&y,b=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},v=b.bbox,h=b.tileMatrixSet,g=void 0===h?"EPSG:4326":h,O=b.service,S=void 0===O?"WMTS":O,E=b.version,w=void 0===E?"1.0.0":E;return u.Observable.defer((function(){return l().get(t,{params:d({service:S,version:w,request:"GetDomainValues",tileMatrixSet:g,bbox:v,layer:e,domain:r,fromValue:i,sort:c,limit:p,fromEnd:m,time:o})})})).let(f.oB).switchMap((function(t){return(0,f.sw)(t.data)}))},g=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).url;return o()(t,"/wms")?a()(t,/\/wms$/,"/gwc/service/wmts"):o()(t,"/ows")?a()(t,/\/ows$/,"/gwc/service/wmts"):t}},52595:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=(0,r(61365).Z)(r(80681).Overlay)},65295:(t,e,r)=>{"use strict";r.d(e,{Z:()=>P});var n=r(24852),o=r.n(n),i=r(1391),a=r.n(i),u=r(14293),c=r.n(u),l=r(75263),f=r.n(l),s=r(30381),p=r.n(s),y=r(80681),m=r(15135),d=r(38560);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,E(n.key),n)}}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}function S(t,e,r){return(e=E(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function E(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}var w=(0,m.Z)(y.Glyphicon),A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(l,t);var e,r,n,i,u=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(n);if(i){var r=O(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return g(t)}(this,t)});function l(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return S(g(t=u.call.apply(u,[this].concat(r))),"onUpdate",(function(e,r){var n=p()(t.props.date).utc(),o=r?p()(n).add(1,e):p()(n).subtract(1,e);o.isValid()&&!isNaN(o.toDate().getTime())&&t.props.onUpdate(o.toISOString())})),S(g(t),"onChange",(function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(""!==r){var o=p()(t.props.date).utc(),i=o["day"===e?"date":e]&&p()(o)["day"===e?"date":e](n(r));i.isValid()&&!isNaN(i.toDate().getTime())&&t.props.onUpdate(i.toISOString())}})),S(g(t),"getForm",(function(){var e=t.props.date&&p()(t.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:e&&e.date()},{name:"month",placeholder:"MM",readOnly:!0,value:e&&e.month(),format:function(t){return!c()(t)&&""!==t&&p().monthsShort(t)},parseValue:function(t){return t-1}},{name:"year",placeholder:"YYYY",value:e&&e.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:e&&e.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:e&&e.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:e&&e.seconds()},{name:"separator",value:e&&e.utcOffset(),type:"separator",format:function(t){return"UTC "+(t>=0?"+":"-")+a()(t/60,2,0)}}]})),t}return e=l,(r=[{key:"render",value:function(){var t=this,e=this.getForm();return o().createElement(y.Form,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(y.FormGroup,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return t.props.clickable&&t.props.onIconClick(t.props.date,t.props.glyph)}},o().createElement(w,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),e.map((function(e){return"icon"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},o().createElement(w,{glyph:e.value}))||"separator"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},e.format&&e.format(e.value)||e.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},t.props.showButtons&&o().createElement(d.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name,!0)}},o().createElement(w,{glyph:"chevron-up"})),o().createElement(y.FormControl,{type:"text",readOnly:e.readOnly,placeholder:e.placeholder||e.name,disabled:!t.props.date,value:e.format&&e.format(e.value)||e.value,onChange:function(r){return t.onChange(e.name,r.target.value,e.parseValue)}}),t.props.showButtons&&o().createElement(d.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name)}},o().createElement(w,{glyph:"chevron-down"})))}))))}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),l}(o().Component);S(A,"propTypes",{date:f().string,clickable:f().bool,onUpdate:f().func,onIconClick:f().func,glyph:f().string,style:f().object,className:f().string,tooltip:f().string,tooltipId:f().string,showButtons:f().bool}),S(A,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const P=A},89919:(t,e,r)=>{"use strict";r.d(e,{hP:()=>l});var n=r(84596),o=r.n(n),i=r(49977),a=r.n(i);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,function(t){if(Array.isArray(t))return u(t)}(e=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},l=function(t,e,r){return function(n){return(r?c(n,o()(t)).catch(r):c(n,o()(t))).concat(a().Observable.from(o()(e)))}}},50886:(t,e,r)=>{"use strict";r.d(e,{w:()=>d});var n=r(49977),o=r.n(n),i=r(96361),a=r(55237);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=function(t,e,r,n,u){return o().Observable.forkJoin(i.Ci.apply(void 0,p(t(r,f({sort:"asc",fromValue:e?(0,a.p)(u,1e-4,"remove"):u},"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})),i.Ci.apply(void 0,p(t(r,f({sort:"desc",fromValue:e?(0,a.p)(u,1e-4,"add"):u},"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})))}},37307:(t,e,r)=>{"use strict";r.d(e,{Z:()=>y});var n=r(57604),o=r(80416),i=r(82904),a=r(61868),u=r(30381),c=r.n(u),l=r(66604),f=r.n(l),s=r(35937),p=r.n(s);const y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.XV:return(0,a.t8)("data[".concat(e.dimension,"][").concat(e.layerId,"]"),e.data,t);case n.mE:return(0,a.t8)("currentTime",e.time,t);case n.at:return(0,a.t8)("offsetTime",e.offsetTime,t);case n.mD:if(t.offsetTime&&t.currentTime){var r=c()(t.offsetTime).diff(t.currentTime),u=c()(e.time).add(r);return(0,a.t8)("currentTime",e.time,(0,a.t8)("offsetTime",u.toISOString(),t))}return(0,a.t8)("currentTime",e.time,t);case o.sb:var l=f()(t.data,(function(t){return p()(t,(function(t,r){return r!==e.node}))}));return(0,a.t8)("data",l,t);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,t)));default:return t}}},76843:(t,e,r)=>{"use strict";r.d(e,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>c,E2:()=>l,Np:()=>f,KC:()=>s,Wq:()=>p,rp:()=>y,PF:()=>m});var n=r(22222),o=function(t){return t&&t.playback&&t.playback.settings},i=function(t){return(o(t)||{}).frameDuration||5},a=function(t){return t&&t.playback&&t.playback.status},u=function(t){return t&&t.playback&&t.playback.frames},c=function(t){var e=u(t)||[];return e[e.length-1]},l=function(t){return t&&t.playback&&t.playback.framesLoading},f=function(t){return t&&t.playback&&t.playback.currentFrame},s=function(t){return function(t){return t&&t.playback&&t.playback.playbackRange}(t)},p=function(t){return(u(t)||[])[f(t)]},y=function(t){return t&&t.playback&&t.playback.metadata},m=(0,n.P1)(u,f,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{hasNext:t[e+1],hasPrevious:t[e-1]}}))},10284:(t,e,r)=>{"use strict";r.d(e,{sw:()=>b,oB:()=>v});var n=r(49977),o=r.n(n),i=r(27361),a=r.n(i),u=r(5055),c=r(7526);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t){var e="function"==typeof Map?new Map:void 0;return f=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return s(t,arguments,m(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,t)},f(t)}function s(t,e,r){return s=p()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&y(o,r.prototype),o},s.apply(null,arguments)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}r(49843);var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(i,t);var e,r,n,o=(r=i,n=p(),function(){var t,e=m(r);if(n){var o=m(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,t)).name="OGCError",r.code=e,r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(f(Error)),b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0};return o().Observable.bindNodeCallback((function(t,r){return(0,u.parseString)(t,e,r)}))(t)},v=function(t){return t.switchMap((function(t){return"string"==typeof t.data&&t.data.indexOf("ExceptionReport")>0?o().Observable.bindNodeCallback((function(t,e){return(0,u.parseString)(t,{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data).map((function(t){var e=a()(t,"ExceptionReport.Exception.ExceptionText");throw new d(e||"Undefined OGC Service Error",a()(t,"ExceptionReport.Exception.exceptionCode"))})):o().Observable.of(t)}))}},18190:t=>{var e=Math.floor;t.exports=function(t,r){var n="";if(!t||r<1||r>9007199254740991)return n;do{r%2&&(n+=t),(r=e(r/2))&&(t+=t)}while(r);return n}},78302:(t,e,r)=>{var n=r(18190),o=r(80531),i=r(40180),a=r(62689),u=r(88016),c=r(83140),l=Math.ceil;t.exports=function(t,e){var r=(e=void 0===e?" ":o(e)).length;if(r<2)return r?n(e,t):e;var f=n(e,l(t/u(e)));return a(e)?i(c(f),0,t).join(""):f.slice(0,t)}},1391:(t,e,r)=>{var n=r(78302),o=r(88016),i=r(40554),a=r(79833);t.exports=function(t,e,r){t=a(t);var u=(e=i(e))?o(t):0;return e&&u<e?n(e-u,r)+t:t}},13880:(t,e,r)=>{var n=r(79833);t.exports=function(){var t=arguments,e=n(t[0]);return t.length<3?e:e.replace(t[1],t[2])}},19081:(t,e,r)=>{"use strict";t.exports=r(1174)}}]);