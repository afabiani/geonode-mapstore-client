(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[76722],{82110:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(24852),o=n.n(r),i=n(96259),a=n(32425);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const f=function(e){var t=e.width,n=e.height,r=e.className,c=void 0===r?"loader-container":r,u=e.contentStyle,s=void 0===u?{}:u;return o().createElement("div",{className:c},o().createElement(i.Z,null,(function(e){var r=e.width,i=void 0===r?200:r,c=e.height,u=void 0===c?200:c,f=t||(u>0?Math.min(i,u):i),p=n||(u>0?Math.min(i,u):i),m=Math.min(f,p);return o().createElement(a.Z,{size:m,style:l({padding:m/10,margin:"auto",display:"flex"},s)})})))}},2576:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(24852),o=n.n(r),i=n(80307),a=n.n(i),c=n(75263),u=n.n(c),l=n(80681),s=n(52595),f=n(50966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function b(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,r,i,c=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(i){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"renderPopover",value:function(){return o().createElement(l.Popover,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(l.Glyphicon,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(f.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(s.Z,{placement:this.props.placement,show:!0,target:function(){return a().findDOMNode(e.target)}},this.renderPopover())])}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);b(g,"propTypes",{id:u().string,title:u().string,text:u().string,glyph:u().string,bsStyle:u().string,placement:u().string,left:u().number,top:u().number,trigger:u().oneOfType([u().array,u().bool])}),b(g,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const h=g},77605:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Pe});var r=n(27418),o=n.n(r),i=n(24852),a=n.n(i),c=n(71703),u=n(67076),l=n(22222),s=n(62187),f=n(30381),p=n.n(f),m=n(27361),y=n.n(m),d=n(57604),b=n(57676),v=n(80416),g=n(97395),h=n(85148),S=n(75982),P=n(76843),O=n(97291),w=n(55237);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=n(89919),j=n(50886),C=n(96361),A=n(49977),I=n.n(A);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||Z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===L(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(0,O.Li)(e()),i=(0,O.uy)(e()),a=(0,O.Ry)(e()),c=(0,P.KC)(e())||{},u=c.startPlaybackTime,l=c.endPlaybackTime,f=(0,P.dS)(e())===s.Q_.PLAY||(0,P.dS)(e())===s.Q_.PAUSE,p="end"===(0,O.pW)(e());return[a,i,"time",N({limit:20,time:u&&l&&f?(t=u,n=l,"".concat(t,"/").concat(n)):void 0,fromEnd:p},r),(0,O.F3)(o)(e())]},F=function(e,t){if((0,O.uy)(e())){var n=(0,h.aK)((0,O.fP)(e()))(e()),r=(0,O.gB)(e());return"multidim-extension"!==y()(r,"source.type")&&n&&n.length>0?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.fromValue,o=n.limit,i=void 0===o?20:o,a=(0,P.KC)(t())||{},c=a.startPlaybackTime,u=a.endPlaybackTime;return I().Observable.of(e.filter((function(e){return!c||!u||p()(e).isSameOrAfter(c)&&p()(e).isSameOrBefore(u)})).filter((function(e){return!r||p()(e).isAfter(r)})).slice(0,i))}(n,e,t):C.Ci.apply(void 0,(o=_(e,t),function(e){if(Array.isArray(e))return x(e)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||Z(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).map((function(t){var n=t.DomainValues.Domain.split(","),r=(0,O.Li)(e())?function(e,t){var n,r=(0,P.KC)(e())||{},o=(0,O.pW)(e()),i=null==r?void 0:r.endPlaybackTime,a=null==r?void 0:r.startPlaybackTime;return n=o&&"end"===o?t.map((function(e){return e.split("/")[1]})):t.map((function(e){return e.split("/")[0]})),a&&i?(0,w.pC)(n,a,i):n}(e,n):n;return r}))}var o;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.fromValue,r=t.limit,o=void 0===r?20:r,i=t.sort,a=void 0===i?"asc":i,c=(0,P.z2)(e()),u=c.timeStep,l=c.stepUnit,s=p().duration(u,l),f=(0,P.KC)(e())||{},m=f.startPlaybackTime,y=f.endPlaybackTime,d=void 0!==n?n:m||(0,h.WT)(e())||(new Date).toString(),b=[];d!==n&&b.push(p()(d).toISOString());for(var v=0;v<o&&(d=p()(d).add("asc"===a?s:-1*s),!y||d.isBefore(y));v++)b.push(d.toISOString());return I().Observable.of(b)}(e,t)};const U={retrieveFramesForPlayback:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(s.NH).exhaustMap((function(){return F(n,N({fromValue:(0,P.KC)(n())&&(0,P.KC)(n()).startPlaybackTime&&(0,P.KC)(n()).endPlaybackTime?void 0:(0,h.WT)(n())},"end"===(0,O.pW)(n())?{fromEnd:!0}:{})).map((function(e){return(0,s.wR)(e)})).let((0,T.hP)((0,s.zK)(!0),(0,s.zK)(!1)),(function(){return I().Observable.of((0,g.vU)({title:"There was an error retrieving animation",message:"Please contact the administrator"}),(0,s.sT)())})).let((0,T.hP)((0,b.aA)(!1,!0),(0,b.aA)(!1,!1))).concat(e.ofType(s.c9).filter((function(e){return e.frame%20==10})).switchMap((function(){return F(n,N({fromValue:(0,P.yt)(n())},"end"===(0,O.pW)(n())?{fromEnd:!0}:{})).map(s.hS).let((0,T.hP)((0,s.zK)(!0),(0,s.zK)(!1)))}))).takeUntil(e.ofType(s.N7,S.nk)).concat(I().Observable.of((0,b.aA)(!1,!1))).let(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return{}};return function(t){var n=(0,h.AF)(e());return I().Observable.from(n.map((function(e){return(0,v.He)(e.id,{singleTile:!0})}))).concat(t).concat(I().Observable.from(n.map((function(e){return(0,v.He)(e.id,{singleTile:e.singleTile})}))))}}(n))}))},updateCurrentTimeFromAnimation:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(s.c9).map((function(){return(0,P.Wq)(n())})).map((function(e){return e?(0,d.PZ)(e):(0,s.sT)()}))},timeDimensionPlayback:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(s.L9).exhaustMap((function(){return I().Observable.interval(1e3*(0,P.V3)(n())).startWith(0).let(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return function(r){return r.withLatestFrom(e.startWith(t)).filter((function(e){var t=E(e,2)[1];return n(t)})).map((function(e){return E(e,1)[0]}))}}(e.ofType(s.NH,s.E7).map((function(e){return e.type===s.NH})))).map((function(){return(0,s.h1)((0,P.Np)(n())+1)})).merge(e.ofType(s.KB).map((function(e){var t=e.direction;return(0,s.h1)(Math.max(0,(0,P.Np)(n())+t))}))).concat(I().Observable.of((0,s.sT)())).takeUntil(e.ofType(s.N7,S.nk))}))},playbackToggleGuideLayerToFixedStep:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(s.Fi).exhaustMap((function(){return(0,O.uy)(n())?I().Observable.of((0,b.kq)(void 0)):I().Observable.of((0,b.kq)(y()((0,O.rV)(n()),"[0].id")))}))},playbackMoveStep:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(s.KB).filter((function(){return(0,P.dS)(n())!==s.Q_.PLAY})).switchMap((function(e){var t=e.direction,r=void 0===t?1:t,o=(0,P.rp)(n())||{},i=(0,h.WT)(n());return i&&o.forTime===i?I().Observable.of(r>0?o.next:o.previous):F(n,N({limit:1,sort:r>0?"asc":"desc",fromValue:(0,h.WT)(n())},"end"===(0,O.pW)(n())?{fromEnd:!0}:{})).map((function(){return D(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],1)[0]}))})).filter((function(e){return!!e})).map((function(e){var t,r=null!==(t="end"===(0,O.pW)(n())?e.split("/")[1]:e.split("/")[0])&&void 0!==t?t:e;return(0,d.PZ)(r)}))},playbackCacheNextPreviousTimes:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(d.mE,d.mD,b._V,s.N7,b.w,b.lz).filter((function(){return(0,P.dS)(n())!==s.Q_.PLAY&&(0,P.dS)(n())!==s.Q_.PAUSE})).filter((function(){return(0,O.Li)(n())})).filter((function(e){return!!e})).switchMap((function(e){var t=e.time||(0,h.WT)(n()),r=(0,O.pW)(n());return(0,j.w)(_,!1,n,r,t).map((function(e){var n=D(e,2),r=n[0],o=n[1];return(0,s.Ym)({forTime:t,next:r,previous:o})}))}))},playbackFollowCursor:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(d.mD).filter((function(e){return(e.type===d.mD||(0,P.dS)(n())===s.Q_.PLAY)&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.start,r=t.end;return n&&r&&(p()(e).isBefore(n)||p()(e).isAfter(r))}((0,h.WT)(n()),(0,O.YK)(n()))})).filter((function(){return y()((0,P.z2)(n()),"following")})).switchMap((function(){return I().Observable.of((0,b.y3)((e=(0,h.WT)(n()),r=(t=(0,O.YK)(n())).start,o=t.end,i=p()(o).diff(p()(r)),{start:e,end:p()(e).add(i).toISOString()})));var e,t,r,o,i}))},playbackStopWhenDeleteLayer:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(v.sb).filter((function(){return!(0,O.Li)(n())&&"PLAY"===(0,P.dS)(n())})).switchMap((function(){return I().Observable.of((0,s.sT)())}))},setIsIntervalData:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(b._V,d.mE).filter((function(e){return e.layerId||(0,O.Li)(n())})).switchMap((function(e){var t=e.time||(0,h.WT)(n()),r=(0,O.pW)(n());return(0,j.w)(_,!0,n,r,t).map((function(e){var t=D(e,2),n=t[0],r=t[1],o=-1!==n.indexOf("/")||-1!==r.indexOf("/");return(0,s.RQ)(o)}))}))},switchOffSnapToLayer:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(v.yS).filter((function(e){var t=e.newProperties,r=e.layer,o=(0,O.Li)(n());return void 0!==(null==t?void 0:t.visibility)&&o===r&&(0,O.pn)(n())})).switchMap((function(){return I().Observable.of((0,s.FH)())}))}};var Y=n(37307),W=n(32215),B=n(5346),K=n(80717),V=n(7654),Q=n.n(V),z=n(80681),H=n(94184),G=n.n(H),q=n(2576),$=n(65295),J=n(45869),X=n(12346),ee=n(94192);function te(e){return te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te(e)}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==te(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==te(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===te(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ie=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};try{if(!Q()(parseInt(e,10))){var r=parseInt(e,10);return t(r<1?1:r)}return n()}catch(e){return n(e)}},ae=function(e){var t=e.startPlaybackTime,n=e.endPlaybackTime,r=p()(t).diff(n);return{startPlaybackTime:r>=0?n:t,endPlaybackTime:r>=0?t:n}};function ce(e){return ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ce(e)}function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==ce(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==ce(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===ce(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const se=(0,u.compose)((0,c.connect)((0,l.P1)(P.z2,O.Li,P.KC,O.pW,O.ei,O.Hc,(function(e,t,n,r,o,i){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({fixedStep:!t,playbackRange:n,currentSnapType:r,snapRadioButtonEnabled:o,endValuesSupport:i},e)})),{setPlaybackRange:s.VS,onSettingChange:s.oz,onChangeSnapType:b.m7,toggleAnimationMode:s.FH}),(0,u.withProps)((function(){return{snapTypes:[{id:"start",value:"start",label:"timeline.settings.snapToStart"},{id:"end",value:"end",label:"timeline.settings.snapToEnd"}]}})),(0,u.compose)((0,c.connect)((0,l.P1)(O.YK,O.dJ,(function(e,t){return{layerRange:t,viewRange:e}})),{moveTo:b.y3}),(0,u.withHandlers)({toggleAnimationRange:function(e){var t=e.fixedStep,n=e.layerRange,r=e.viewRange,o=void 0===r?{}:r,i=e.setPlaybackRange,a=void 0===i?function(){}:i;return function(e){var r=t?o:n;r={startPlaybackTime:p()(r&&r.start||new Date).subtract(1,"days").toISOString(),endPlaybackTime:p()(r&&r.end||new Date).add(1,"days").toISOString()},a(e?r:void 0)}},setPlaybackToCurrentViewRange:function(e){var t=e.viewRange,n=void 0===t?{}:t,r=e.setPlaybackRange,o=void 0===r?function(){}:r;return function(){n.start&&n.end&&o({startPlaybackTime:p()(n.start).toISOString(),endPlaybackTime:p()(n.end).toISOString()})}},setPlaybackToCurrentLayerDataRange:function(e){var t=e.setPlaybackRange,n=void 0===t?function(){}:t,r=e.layerRange;return function(){return r&&n({startPlaybackTime:r.start,endPlaybackTime:r.end})}}}),(0,u.withProps)((function(e){var t=e.playbackRange,n=e.fixedStep,r=e.moveTo,o=void 0===r?function(){}:r,i=e.setPlaybackToCurrentViewRange,a=void 0===i?function(){}:i,c=e.setPlaybackToCurrentLayerDataRange,u=void 0===c?function(){}:c;return{playbackButtons:[{glyph:"search",tooltipId:"playback.settings.range.zoomToCurrentPlayackRange",onClick:function(){return o({start:t.startPlaybackTime,end:t.endPlaybackTime})}},{glyph:"resize-horizontal",tooltipId:"playback.settings.range.setToCurrentViewRange",onClick:function(){return a()}},{glyph:"1-layer",visible:!n,tooltipId:"playback.settings.range.fitToSelectedLayerRange",onClick:function(){return u()}}]}}))))((function(e){var t=e.following,n=e.frameDuration,r=e.timeStep,o=e.stepUnit,i=e.onSettingChange,c=void 0===i?function(){}:i,u=e.toggleAnimationMode,l=void 0===u?function(){}:u,s=e.toggleAnimationRange,f=void 0===s?function(){}:s,p=e.fixedStep,m=void 0!==p&&p,y=e.playbackRange,d=void 0===y?{}:y,b=e.snapTypes,v=void 0===b?[]:b,g=e.currentSnapType,h=void 0===g?"start":g,S=e.snapRadioButtonEnabled,P=void 0!==S&&S,O=e.endValuesSupport,w=e.onChangeSnapType,E=void 0===w?function(){}:w,k=e.setPlaybackRange,T=void 0===k?function(){}:k,j=e.playbackButtons,C=e.dateSelectorStyle,A=void 0===C?{padding:0,margin:0,border:"none"}:C,I=e.style,L=void 0===I?{}:I;return a().createElement("div",{className:"ms-playback-settings",style:L},a().createElement("h4",null,a().createElement(B.Z,{msgId:"timeline.settings.title"})),a().createElement(z.FormGroup,{controlId:"timelineSettings"},a().createElement(z.Form,{componentClass:"fieldset",inline:!0,className:"snap-guide-form"},a().createElement(z.ControlLabel,null,a().createElement(B.Z,{msgId:"timeline.settings.snapToGuideLayer"})," ",a().createElement(q.Z,{text:a().createElement(B.Z,{msgId:"timeline.settings.snapToGuideLayerTooltip"})})),a().createElement("span",null,a().createElement(J.Z,{checked:!m,onChange:function(){return l()}}))),!m&&O&&a().createElement(z.Form,{componentClass:"fieldset",inline:!0,className:"snap-type-form",disabled:!P},a().createElement("div",{className:"snap-type-form-title"},a().createElement(z.ControlLabel,null,a().createElement(B.Z,{msgId:"timeline.settings.snapType"})," ",a().createElement(q.Z,{text:a().createElement(B.Z,{msgId:"timeline.settings.snapTypeTooltip"})}))),a().createElement("div",{className:"snap-type-container"},v.map((function(e){return a().createElement("div",{className:"snap-type-item"},a().createElement("input",{type:"radio",className:G()("snap-type-radio-btn",{disabled:!P}),value:e.value,name:"snapType",checked:h===e.value,onChange:function(e){var t=e.target.value;E(t)}}),a().createElement("div",{className:"snap-type-radio-btn-label"},a().createElement(B.Z,{msgId:e.label})))}))))),a().createElement("h4",null,a().createElement(B.Z,{msgId:"playback.settings.title"})),a().createElement(z.FormGroup,{controlId:"frameDuration"},a().createElement(z.ControlLabel,null,a().createElement(B.Z,{msgId:"playback.settings.frameDuration"})),a().createElement(z.InputGroup,null,a().createElement(ee.Z,{componentClass:"input",type:"number",value:n,onChange:function(){return ie(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",(function(e){c("frameDuration",e)}))}}),a().createElement(z.InputGroup.Addon,null,"s"))),a().createElement(z.ControlLabel,null,a().createElement(B.Z,{msgId:"playback.settings.step.label"})," ",a().createElement(q.Z,{text:a().createElement(B.Z,{msgId:"playback.settings.step.tooltip"})})),a().createElement(z.FormGroup,{controlId:"formPlaybackStep"},a().createElement(z.Form,{componentClass:"fieldset",inline:!0},a().createElement(ee.Z,{disabled:!m,componentClass:"input",type:"number",style:{input:{maxWidth:120}},value:r,onChange:function(){return ie(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",(function(e){c("timeStep",e)}))}}),a().createElement(z.FormControl,{disabled:!m,componentClass:"select",value:o,onChange:function(e){var t=e.target;return c("stepUnit",(void 0===t?{}:t).value)}},a().createElement(B.Z,{msgId:"playback.settings.step.year",msgParams:{number:r||1}},(function(e){return a().createElement("option",{value:"years"},e)})),a().createElement(B.Z,{msgId:"playback.settings.step.week",msgParams:{number:r||1}},(function(e){return a().createElement("option",{value:"weeks"},e)})),a().createElement(B.Z,{msgId:"playback.settings.step.day",msgParams:{number:r||1}},(function(e){return a().createElement("option",{value:"days"},e)})),a().createElement(B.Z,{msgId:"playback.settings.step.hour",msgParams:{number:r||1}},(function(e){return a().createElement("option",{value:"hour"},e)})),a().createElement(B.Z,{msgId:"playback.settings.step.minute",msgParams:{number:r||1}},(function(e){return a().createElement("option",{value:"minutes"},e)})),a().createElement(B.Z,{msgId:"playback.settings.step.second",msgParams:{number:r||1}},(function(e){return a().createElement("option",{value:"seconds"},e)}))))),a().createElement(X.Z,{onSwitch:function(e){return f(e)},expanded:d.startPlaybackTime&&d.endPlaybackTime,title:a().createElement(B.Z,{msgId:"playback.settings.range.title"}),buttons:j},a().createElement(z.FormGroup,{controlId:"formPlaybackMode",style:{margin:10}},a().createElement($.Z,{tooltipId:"playback.settings.range.animationStart",glyph:"play",date:d.startPlaybackTime,onUpdate:function(e){return T(ae(re(re({},d),{},{startPlaybackTime:e})))},style:A,showButtons:!0}),a().createElement($.Z,{glyph:"stop",tooltipId:"playback.settings.range.animationEnd",date:d.endPlaybackTime,onUpdate:function(e){return T(ae(re(re({},d),{},{endPlaybackTime:e})))},style:A,showButtons:!0}))),a().createElement(z.FormGroup,{controlId:"formPlaybackFollowingMode"},a().createElement(z.Form,{componentClass:"fieldset",inline:!0},a().createElement(z.ControlLabel,null,a().createElement(B.Z,{msgId:"playback.settings.mode.following"})," ",a().createElement(q.Z,{text:a().createElement(B.Z,{msgId:"playback.settings.mode.followingDescription"})})),a().createElement("span",null,a().createElement(J.Z,{checked:t,onChange:function(e){return c("following",e)}})))))}));var fe=(0,u.compose)((0,u.withState)("showSettings","onShowSettings",!1),(0,u.withState)("collapsed","setCollapsed",!0),(0,u.withProps)((function(e){var t=e.setCollapsed;return{buttons:[{glyph:"minus",onClick:function(){return t(!0)}}]}}))),pe=(0,l.P1)(P.dS,O.Li,P.rp,P.PF,(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;return t?e===s.Q_.PLAY||e===s.Q_.PAUSE?r:{hasNext:!!n.next,hasPrevious:!!n.previous}:{hasNext:!0,hasPrevious:!0}})),me=(0,u.compose)((0,c.connect)(pe,{stepMove:s.XN}),(0,u.withHandlers)({forward:function(e){var t=e.stepMove,n=void 0===t?function(){}:t;return function(){return n(1)}},backward:function(e){var t=e.stepMove,n=void 0===t?function(){}:t;return function(){return n(-1)}}}));const ye=(0,u.compose)(fe,me)((function(e){var t=e.status,n=e.statusMap,r=e.play,o=void 0===r?function(){}:r,i=e.forward,c=void 0===i?function(){}:i,u=e.backward,l=void 0===u?function(){}:u,s=e.pause,f=void 0===s?function(){}:s,p=e.stop,m=void 0===p?function(){}:p,y=e.hasPrevious,d=e.hasNext,b=e.showSettings,v=e.onShowSettings,g=void 0===v?function(){}:v,h=e.settingsStyle,S=void 0===h?{}:h;return a().createElement("div",{style:{display:"flex"}},t!==n.PLAY&&t!==n.PAUSE&&b&&a().createElement(se,{style:S}),a().createElement(K.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},buttons:[{glyph:"step-backward",key:"back",onClick:l,disabled:!y,tooltip:a().createElement(B.Z,{msgId:"playback.backwardStep"})},{glyph:t===n.PLAY?"pause":"play",key:"play",active:t===n.PLAY||t===n.PAUSE,disabled:!d,bsStyle:t===n.PLAY||t===n.PAUSE?"success":"primary",onClick:function(){return t===n.PLAY?f():o()},tooltipId:d&&(t===n.PLAY?"playback.pause":t===n.PAUSE?"playback.paused":"playback.play")},{glyph:"stop",key:"stop",disabled:t!==n.PLAY&&t!==n.PAUSE,onClick:m,tooltip:!(t!==n.PLAY&&t!==n.PAUSE)&&a().createElement(B.Z,{msgId:"playback.stop"})},{glyph:"step-forward",key:"forward",onClick:c,disabled:!d,tooltip:d&&a().createElement(B.Z,{msgId:"playback.forwardStep"})},{glyph:"cog",key:"settings",bsStyle:t!==n.PLAY&&t!==n.PAUSE&&b?"success":"primary",active:(t!==n.PLAY||t!==n.PAUSE)&&!!b,disabled:t===n.PLAY||t===n.PAUSE,onClick:function(){return t!==n.PLAY&&g(!b)},tooltip:!(t===n.PLAY||t===n.PAUSE)&&a().createElement(B.Z,{msgId:"playback.settings.tooltip"})}]}))}));function de(e){return de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},de(e)}function be(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==de(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==de(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===de(o)?o:String(o)),r)}var o}function ve(e,t){return ve=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ve(e,t)}function ge(e){return ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ge(e)}var he=(0,u.compose)((0,u.defaultProps)({statusMap:s.Q_}),(0,c.connect)((0,l.P1)(P.dS,h.WT,P.E2,(function(e,t,n){return{loading:n,currentTime:t,status:e}})),{play:s.hY,pause:s.wO,stop:s.sT}))(ye),Se=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ve(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ge(r);if(o){var n=ge(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===de(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return a().createElement("div",{className:"playback-plugin"},a().createElement(he,this.props))}}])&&be(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(a().Component);const Pe={PlaybackPlugin:o()(Se,{noRoot:!0,disablePluginIf:"{state('featuregridmode') === 'EDIT'}",Timeline:{name:"playback",position:1,priority:1}}),epics:U,reducers:{playback:W.Z,dimension:Y.Z}}},32215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(62187),o=n(82904),i=n(61868);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p={timeStep:1,stepUnit:"days",frameDuration:2,following:!0};const m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:r.Q_.STOP,currentFrame:-1,settings:p},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.NH:return(0,i.t8)("status",r.Q_.PLAY,e);case r.E7:return(0,i.t8)("status",r.Q_.PAUSE,e);case r.N7:return(0,i.t8)("status",r.Q_.STOP,(0,i.t8)("currentFrame",-1,e));case r.L9:return(0,i.t8)("frames",t.frames,(0,i.t8)("currentFrame",-1,e));case r.NC:return(0,i.t8)("framesLoading",t.loading,e);case r.hQ:return(0,i.t8)("frames",[].concat(s(e.frames||[]),s(t.frames)),e);case r.c9:return(0,i.t8)("currentFrame",t.frame,e);case r.up:return(0,i.t8)("playbackRange",t.range,e);case r.FZ:return(0,i.t8)("settings[".concat(t.name,"]"),t.value,e);case r.E0:return(0,i.t8)("metadata",{next:t.next,previous:t.previous,forTime:t.forTime},e);case r.AN:return(0,i.t8)("metadata",u(u({},e.metadata),{},{timeIntervalData:t.timeIntervalData}),e);case o.l:return(0,i.t8)("metadata",void 0,(0,i.t8)("framesLoading",void 0,(0,i.t8)("playbackRange",void 0,(0,i.t8)("frames",void 0,(0,i.t8)("currentFrame",-1,(0,i.t8)("status","STOP",(0,i.t8)("settings",p,e)))))));default:return e}}},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},7654:(e,t,n)=>{var r=n(81763);e.exports=function(e){return r(e)&&e!=+e}},93379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],u=t.base?c[0]+t.base:c[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var f=a(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:s,updater:d(p,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,y=0;function d(e,t){var n,r,o;if(t.singleton){var i=y++;n=m||(m=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var u=c(e,t),l=0;l<n.length;l++){var s=a(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=u}}}}}]);