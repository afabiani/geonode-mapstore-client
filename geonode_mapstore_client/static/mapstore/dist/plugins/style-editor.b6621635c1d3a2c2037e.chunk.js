(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1701,7654],{67007:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>L});var n=r(72500),o=r.n(n),a=r(1469),i=r.n(a),s=r(84596),l=r.n(s),c=r(27361),u=r.n(c),f=r(27418),p=r.n(f),y=r(5055),b=r.n(y),d=r(75875),m=r.n(d),v=r(37275),g=r(86267);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w={},P=function(e){var t=(i()(e)&&e||e.split(","))[0],r=o().parse(t,!0);return o().format(p()({},r,{search:null},{query:p()({service:"WMS",version:"1.3.0",request:"GetCapabilities"},r.query)}))},j=function(e){var t=e&&e.Title,r=e.LogoURL&&S(S({},u()(e,"LogoURL.$")||{}),{},{format:u()(e,"LogoURL.Format")}),n=u()(e,'OnlineResource.$["xlink:href"]');return{title:t,logo:r,imageUrl:u()(e,'LogoURL.OnlineResource.$["xlink:href"]'),link:n}},E=function e(t){return t.Layer?(i()(t.Layer)&&t.Layer||[t.Layer]).reduce((function(t,r){return t.concat(e(r)).concat(r.Layer&&r.Name?[r]:[])}),[]):t.Name&&[t]||[]},T=function(e){return e.Request&&e.Request.GetMap&&e.Request.GetMap.DCPType&&e.Request.GetMap.DCPType.HTTP&&e.Request.GetMap.DCPType.HTTP.Get&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource.$||void 0},x=function(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,l=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Capability,c=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Service,u=T(l),f=l.Layer&&(null===(e=l.Layer.SRS||l.Layer.CRS)||void 0===e?void 0:e.map((function(e){return e.toUpperCase()})))||[],y=l.Layer&&l.Layer.Attribution&&j(l.Layer.Attribution),b=l.Request&&l.Request.GetMap&&l.Request.GetMap.Format||[],d=E(l),m=i()(d)?d:[d],v=m.filter((function(e){return!s||-1!==e.Name.toLowerCase().indexOf(s.toLowerCase())||e.Title&&-1!==e.Title.toLowerCase().indexOf(s.toLowerCase())||e.Abstract&&-1!==e.Abstract.toLowerCase().indexOf(s.toLowerCase())}));return{numberOfRecordsMatched:v.length,numberOfRecordsReturned:Math.min(a,v.length),nextRecord:o+Math.min(a,v.length)+1,service:c,layerOptions:{version:(null===(t=n.WMS_Capabilities||n.WMT_MS_Capabilities)||void 0===t||null===(r=t.$)||void 0===r?void 0:r.version)||"1.3.0"},records:v.filter((function(e,t){return t>=o-1&&t<o-1+a})).map((function(e){return p()({},e,{formats:b,onlineResource:u,SRS:f,credits:e.Attribution?j(e.Attribution):y})}))}},N=function(e,t,r,n){var o=w[e];return o&&(new Date).getTime()<o.timestamp+1e3*((0,v.u8)("cacheExpire")||60)?new Promise((function(e){e(x(o.data,t,r,n))})):m().get(P(e)).then((function(o){var a;return b().parseString(o.data,{explicitArray:!1},(function(e,t){a=t})),w[e]={timestamp:(new Date).getTime(),data:a},x(a,t,r,n)}))};const L={flatLayers:E,parseUrl:P,getDimensions:function(e){return l()(e.Dimension||e.dimension||[]).map((function(t,r){var n=e.Extent&&l()(e.Extent)[r]||e.extent&&l()(e.extent)[r];return{name:t.$.name,units:t.$.units,unitSymbol:t.$.unitSymbol,default:t.$.default||n&&n.$.default,values:t._&&t.split(",")||n&&n._&&n.split(",")}}))},getCapabilities:function(e,t){var n=o().parse(e,!0),a=o().format(p()({},n,{query:p()({service:"WMS",version:"1.1.1",request:"GetCapabilities"},n.query)}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7260)]).then(function(){var n=r(67260).unmarshaller;e(m().get(P(a)).then((function(e){var r;if(t)return b().parseString(e.data,{explicitArray:!1},(function(e,t){r=t})),r;var o=n.unmarshalString(e.data);return o&&o.value})))}.bind(null,r)).catch(r.oe)}))},describeLayer:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=o().parse(e,!0),i=o().format(p()({},a,{query:p()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},a.query,n.query||{})}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7260)]).then(function(){var t=r(67260).unmarshaller;e(m().get(P(i)).then((function(e){var r=t.unmarshalString(e.data);return r&&r.value&&r.value.layerDescription&&r.value.layerDescription[0]})))}.bind(null,r)).catch(r.oe)}))},getRecords:N,describeLayers:function(e,t){var r=o().parse(e,!0),n=o().format(p()({},r,{query:p()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},r.query)}));return m().get(P(n)).then((function(e){var t;return b().parseString(e.data,{explicitArray:!1},(function(e,r){t=r&&r.WMS_DescribeLayerResponse&&r.WMS_DescribeLayerResponse.LayerDescription})),(t=Array.isArray(t)?t:[t]).map((function(e){return S(S({},e&&e.$||{}),{},{layerName:e&&e.$&&e.$.name,query:S({},e&&e.query&&e.query.$||{})})}))}))},textSearch:function(e,t,r,n){return N(e,t,r,n)},parseLayerCapabilities:function e(t,r,n){return l()(n||u()(t,"capability.layer.layer")).reduce((function(n,o){return n||(!o.name&&o.layer?e(t,r,l()(o.layer)):2===r.name.split(":").length&&o.name&&2===o.name.split(":").length?r.name===o.name&&o:o.name&&2===o.name.split(":").length?r.name===o.name.split(":")[1]&&o:2===r.name.split(":").length?r.name.split(":")[1]===o.name&&o:r.name===o.name&&o)}),null)},getBBox:function(e,t){for(var r=e,n=r.EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,g.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;!n&&r.Layer&&r.Layer.length;)n=(r=r.Layer[0]).EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,g.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;n||(n={westBoundLongitude:-180,southBoundLatitude:-90,eastBoundLongitude:180,northBoundLatitude:90});var o={extent:[n.westBoundLongitude||n.minx,n.southBoundLatitude||n.miny,n.eastBoundLongitude||n.maxx,n.northBoundLatitude||n.maxy],crs:"EPSG:4326"};return t?{crs:o.crs,bounds:{minx:o.extent[0],miny:o.extent[1],maxx:o.extent[2],maxy:o.extent[3]}}:o},reset:function(){Object.keys(w).forEach((function(e){delete w[e]}))}}},52595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(61365).Z)(r(30294).Overlay)},45869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(24852),o=r.n(n),a=r(45697),i=r.n(a);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(s,e);var t,r,n,a,i=(n=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(a){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function s(){return l(this,s),i.apply(this,arguments)}return t=s,(r=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&c(t.prototype,r),s}(o().Component);y(b,"propTypes",{disabled:i().bool,className:i().string,checked:i().bool,onChange:i().func,onClick:i().func}),y(b,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const d=b},2576:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(24852),o=r.n(n),a=r(80307),i=r.n(a),s=r(45697),l=r.n(s),c=r(30294),u=r(52595),f=r(50966);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(l,e);var t,r,n,a,s=(n=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(a){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function l(){return y(this,l),s.apply(this,arguments)}return t=l,(r=[{key:"renderPopover",value:function(){return o().createElement(c.Popover,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(c.Glyphicon,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(f.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(u.Z,{placement:this.props.placement,show:!0,target:function(){return i().findDOMNode(e.target)}},this.renderPopover())])}}])&&b(t.prototype,r),l}(o().Component);g(h,"propTypes",{id:l().string,title:l().string,text:l().string,glyph:l().string,bsStyle:l().string,placement:l().string,left:l().number,top:l().number,trigger:l().oneOfType([l().array,l().bool])}),g(h,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const S=h},94943:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>J});var n=r(49977),o=r.n(n),a=r(27361),i=r.n(a),s=r(91175),l=r.n(s),c=r(1469),u=r.n(c),f=r(41106),p=r.n(f),y=r(97395),b=r(80416),d=r(60604),m=r(90825),v=r(80833),g=r(82904),h=r(24262),S=r(96909),O=r(9082),w=r(75875),P=r.n(w),j=r(19155),E=r.n(j),T=r(84596),x=r.n(T),N=r(99009);function L(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const k=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,o=void 0===n?[]:n,a=e.options,i=void 0===a?{}:a,s=(0,N.$N)(r),l=s.name,c=s.workspace,u="".concat(t,"rest/").concat(c&&"workspaces/".concat(c,"/")||"","layers/").concat(l,".json");return P().get(u,i).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&x()(t.styles.style)||[],n=o.map((function(e){return e.name})),a=r.filter((function(e){var t=e.name;return-1===n.indexOf(t)}));return{layer:M(M({},t),{},{styles:{"@class":"linked-hash-set",style:a}})}})).then((function(e){return P().put(u,e).then((function(){return e}))}))},B=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,o=void 0===n?[]:n,a=e.options,i=void 0===a?{}:a,s=(0,N.$N)(r),l=s.name,c=s.workspace,u="".concat(t,"rest/").concat(c&&"workspaces/".concat(c,"/")||"","layers/").concat(l,".json");return P().get(u,i).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&x()(t.styles.style)||[];return{layer:M(M({},t),{},{styles:{"@class":"linked-hash-set",style:[].concat(L(r),L(o))}})}})).then((function(e){return P().put(u,e).then((function(){return e}))}))},U=function(e){var t=e.baseUrl,r=e.layerName,n=e.styleName,o=e.options,a=void 0===o?{}:o,i=(0,N.$N)(r),s=i.name,l=i.workspace,c="".concat(t,"rest/").concat(l&&"workspaces/".concat(l,"/")||"","layers/").concat(s,".json");return P().get(c,a).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&x()(t.styles.style)||[],o=t.defaultStyle||{},a=E()([o].concat(L(r)),"name");return{layer:M(M({},t),{},{defaultStyle:{name:n},styles:{"@class":"linked-hash-set",style:a}})}})).then((function(e){return P().put(c,e).then((function(){return e}))}))};var _=r(93222),W=r(75110),A=r(7147),I=r(8954);function Z(e){return function(e){if(Array.isArray(e))return $(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var G=function(e){var t=e.status,r=e.styleName,n=e.baseUrl;return"edit"===t?o().Observable.defer((function(){return O.ZP.getStyleCodeByName({baseUrl:n,styleName:r})})).switchMap((function(e){return o().Observable.of((0,S.FU)({languageVersion:e.languageVersion,code:e.code,templateId:"",format:e.format,init:!0}))})).catch((function(e){return o().Observable.of((0,S.Fe)("edit",e))})):o().Observable.empty()},X=function(e){var t=e.styleName,r=e.baseUrl,n=e.onSuccess$,a=e.onError$;return o().Observable.defer((function(){return O.ZP.deleteStyle({baseUrl:r,styleName:t})})).switchMap((function(){return n||o().Observable.empty()})).catch((function(){return a||o().Observable.empty()}))},z=function(e){var t=e.baseUrl,r=e.update,n=e.code,a=e.format,i=e.styleName,s=e.status,l=e.languageVersion,c=e.options,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return o().Observable.defer((function(){return O.ZP[r?"updateStyle":"createStyle"]({baseUrl:t,code:n,format:a,styleName:i,languageVersion:l,options:c})})).switchMap((function(){var e;return u()(f)&&(e=o().Observable).of.apply(e,[(0,S.Wm)()].concat(Z(f)))||f})).catch((function(e){var t;return(t=o().Observable).of.apply(t,[(0,S.Fe)(s,e),(0,S.Wm)()].concat(Z(p)))})).startWith((0,S.pt)(s))};const J={toggleStyleEditorEpic:function(e,t){return e.ofType(S.vZ).filter((function(){return!(0,_.aN)(t.getState())})).switchMap((function(e){var r=t.getState(),n=(0,W.jN)(r),a=!!i()(n,"options.availableStyles");if(!e.enabled)return function(e){var t=(0,_.gc)(e),r=(0,_.Z0)(e).baseUrl,n=void 0===r?"":r;return o().Observable.of((0,S.l1)(),(0,d.fU)({owner:N.s1})).merge(t?X({styleName:t,baseUrl:n}):o().Observable.empty())}(r);if((0,_.ji)(r)&&a)return o().Observable.empty();var s=e.layer||(0,W.Iz)(r);if(!s||s&&!s.url)return o().Observable.empty();var l=(0,h.Nd)(s);if(!l)return s.availableStyles?o().Observable.of((0,b.Xy)({availableStyles:s.availableStyles}),(0,S.Wm)()):(0,v.kB)(s).switchMap((function(e){var t=(0,h.IA)(e);return t.availableStyles?o().Observable.of((0,b.Xy)({availableStyles:t.availableStyles}),(0,b.tV)(s.id,"layer",V({},t)),(0,S.Wm)()):o().Observable.of((0,S.Fe)("availableStyles",{status:401}),(0,S.Wm)())})).startWith((0,S.pt)("global"));var c=s.url.split(l),u="".concat(c[0]).concat(l),f=(0,_.Z0)(r);return o().Observable.defer((function(){return(0,I.eb)({baseUrl:u,styleService:f})})).switchMap((function(e){var t,r=[(0,S.E0)(e)];return(t=(0,v.kB)(s).switchMap((function(e){var t=(0,h.IA)(e);return t.availableStyles?o().Observable.defer((function(){return O.ZP.getStylesInfo({baseUrl:u,styles:t&&t.availableStyles||[]})})).switchMap((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return o().Observable.of((0,d.W)(s.id,N.s1,"override",{}),(0,b.Xy)({availableStyles:e}),(0,b.tV)(s.id,"layer",V(V({},t),{},{availableStyles:e})),(0,S.Wm)())}(e)})):o().Observable.of((0,S.Fe)("availableStyles",{status:401}),(0,S.Wm)())}))).startWith.apply(t,r).catch((function(e){var t=-1!==e.message.indexOf("could not be unmarshalled")?"parsingCapabilities":"global";return o().Observable.of((0,S.Fe)(t,e),(0,S.Wm)())}))})).startWith((0,S.pt)("global"),(0,S.l1)())}))},updateLayerOnStatusChangeEpic:function(e,t){return e.ofType(S.g$).filter((function(e){return!!e.status})).switchMap((function(r){var n=t.getState(),a=(0,_.Vf)(n),i=a&&a.params||{},s=a&&!a.describeFeatureType&&(0,m.H)(a.url,a,{query:i}),l=(0,_.i7)(n)||a.availableStyles&&a.availableStyles[0]&&a.availableStyles[0].name,c=(0,_.Ri)(n),u=(0,_.Z0)(n).baseUrl,f=void 0===u?"":u;return s&&function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){};return(r=o().Observable).of.apply(r,[(0,S.pt)("global")].concat(Z(a))).merge(e.ofType(b.K$).filter((function(){var e=(0,W.Iz)(t.getState());return n(e)})).switchMap((function(){var e=(0,W.Iz)(t.getState());return i(e)})).catch((function(e){return o().Observable.of((0,S.Fe)("global",e),(0,S.Wm)())})).takeUntil(e.ofType(S.E2)))}(e,t,(function(e){return e&&e.describeLayer}),[s],(function(e){return o().Observable.concat(G({status:r.status,styleName:l,baseUrl:f}),o().Observable.of((0,S.xR)(!(e&&e.describeLayer&&401===e.describeLayer.error)),(0,S.bB)({editorType:c.msEditorType||"textarea",styleJSON:c.msStyleJSON}),(0,S.Wm)()))}))||o().Observable.concat(G({status:r.status,styleName:l,baseUrl:f}),o().Observable.of((0,S.bB)({editorType:c.msEditorType||"textarea",styleJSON:c.msStyleJSON})))}))},updateTemporaryStyleEpic:function(e,t){return e.ofType(S.TB,S.DX).switchMap((function(e){var r=t.getState(),n=(0,_.gc)(r),o=(0,_.Vf)(r),a=(0,N.$N)(o.name).workspace,i=e.format&&e.format!==(0,_.iB)(r),s=n||"".concat(a?"".concat(a,":"):"").concat((0,N.Vi)()),l=e.format||(0,_.iB)(r),c=(0,_.ex)(r),u=(0,_.Z0)(r).baseUrl,f=void 0===u?"":u,p=(0,_.j5)(r),b="sld"===l&&(e.code||"").match(/version=\"1\.1\.0\"/)&&{version:"1.1.0"}||e.format&&!e.languageVersion&&{version:"1.0.0"}||e.languageVersion||{version:"1.0.0"},m=p.version!==b.version?{params:{raw:!0}}:{},v=b,g=function(t){return z({update:!0,code:e.code,format:l,styleName:t,status:c,baseUrl:f,languageVersion:v,options:m},[(0,d.B1)(N.s1,[{style:t,_v_:Date.now(),singleTile:!0}]),(0,S.k5)({temporaryId:t,templateId:e.templateId||"",code:e.code,format:l,init:e.init,languageVersion:v})],"edit"===c?[]:[(0,y.vU)({title:"styleeditor.updateTmpErrorTitle",message:"styleeditor.updateTmpStyleErrorMessage",uid:"updateTmpStyleError",autoDismiss:5})])},h=("css"===l?"* { stroke: #888888; }":"sld"===l&&'<?xml version="1.0" encoding="ISO-8859-1"?>\n<StyledLayerDescriptor version="1.0.0"\n\t\txsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"\n\t\txmlns="http://www.opengis.net/sld"\n\t\txmlns:ogc="http://www.opengis.net/ogc"\n\t\txmlns:xlink="http://www.w3.org/1999/xlink"\n\t\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n\n\t<NamedLayer>\n\t\t<Name>Default Style</Name>\n\t\t<UserStyle>\n\t\t\t<Title>${styleTitle}</Title>\n\t\t\t<Abstract>${styleAbstract}</Abstract>\n\t\t\t<FeatureTypeStyle>\n\t\t\t\t<Rule>\n\t\t\t\t\t<Name>Rule Name</Name>\n\t\t\t\t\t<Title>Rule Title</Title>\n\t\t\t\t\t<Abstract>Rule Abstract</Abstract>\n\t\t\t\t\t<LineSymbolizer>\n\t\t\t\t\t\t<Stroke>\n\t\t\t\t\t\t\t<CssParameter name="stroke">#0000FF</CssParameter>\n\t\t\t\t\t\t</Stroke>\n\t\t\t\t\t\t</LineSymbolizer>\n\t\t\t\t\t<PointSymbolizer>\n\t\t\t\t\t\t<Graphic>\n\t\t\t\t\t\t\t<Mark>\n\t\t\t\t\t\t\t\t<WellKnownName>square</WellKnownName>\n\t\t\t\t\t\t\t\t<Fill>\n\t\t\t\t\t\t\t\t\t<CssParameter name="fill">#FF0000</CssParameter>\n\t\t\t\t\t\t\t\t</Fill>\n\t\t\t\t\t\t\t</Mark>\n\t\t\t\t\t\t</Graphic>\n\t\t\t\t\t</PointSymbolizer>\n\t\t\t\t\t</Rule>\n\t\t\t\t</FeatureTypeStyle>\n\t\t\t</UserStyle>\n\t\t</NamedLayer>\n\t</StyledLayerDescriptor>\n')||"",O=function(e){return z({code:h,format:l,styleName:e,status:c,baseUrl:f},g(e),[(0,y.vU)({title:"styleeditor.createTmpErrorTitle",message:"styleeditor.createTmpStyleErrorMessage",uid:"createTmpStyleError",autoDismiss:5}),(0,S.k5)({temporaryId:null,templateId:"",code:"",format:"",init:"",languageVersion:null})])};return i&&n&&X({styleName:n,baseUrl:f,onSuccess$:O("".concat(a?"".concat(a,":"):"").concat((0,N.Vi)())),onError$:g(s)})||n&&g(s)||O(s)}))},createStyleEpic:function(e,t){return e.ofType(S.vA).switchMap((function(e){var r=t.getState(),n=(0,_.gB)(r),a=(0,_.Vf)(r),i=(0,N.$N)(a.name).workspace,s="".concat(i?"".concat(i,":"):"").concat((0,N.nK)(e.settings)),c=(0,_.iB)(r),u=e.settings||{},f=u.title,m=void 0===f?"":f,v=u._abstract,g=void 0===v?"":v,h=(0,_.Z0)(r).baseUrl,w=void 0===h?"":h,P=V({title:m,description:g},{msStyleJSON:null,msEditorType:"visual"});return o().Observable.defer((function(){return O.ZP.createStyle({baseUrl:w,code:p()(n)({styleTitle:m,styleAbstract:g}),format:c,styleName:s,metadata:P})})).switchMap((function(){return o().Observable.of((0,d.B1)(N.s1,[{}]),(0,b.Xy)({style:s||""},!0),(0,S.Nf)(""),(0,S.Wm)()).merge(function(e){var t=e.baseUrl,r=e.layer,n=e.styleName,a=e.format,i=e.title,s=e._abstract,c=e.metadata;return o().Observable.defer((function(){return B({baseUrl:t,layerName:r.name,styles:[{name:n}]})})).switchMap((function(){var e=V({filename:"".concat(n,".").concat(a),format:a,name:n,title:i,_abstract:s},c&&{metadata:c}),t=l()(r.availableStyles),u=r.availableStyles&&[t,e].concat(Z(r.availableStyles.filter((function(e,t){return t>0}))))||[e];return o().Observable.of((0,b.Xy)({availableStyles:u},!0),(0,S.Wm)())})).catch((function(){return o().Observable.of((0,S.Wm)())})).startWith((0,S.pt)("global"))}({layer:a,styleName:s,format:c,title:m,_abstract:g,baseUrl:w,metadata:P}))})).catch((function(e){return o().Observable.of((0,S.Fe)("",e),(0,S.Wm)(),(0,y.vU)({title:"styleeditor.createStyleErrorTitle",message:"styleeditor.createStyleErrorMessage",uid:"createStyleError",autoDismiss:5}))})).startWith((0,S.pt)(""))}))},updateStyleCodeEpic:function(e,t){return e.ofType(S.ch).switchMap((function(){var e=t.getState(),r=(0,_.iB)(e),n=(0,_.j5)(e),a=(0,_.gB)(e),i=(0,_.i7)(e),s=(0,_.gc)(e),l=(0,_.Vf)(e),c=(0,_.Z0)(e).baseUrl,u=void 0===c?"":c,f=(0,_.WW)(e)||{},p={msStyleJSON:f.styleJSON||null,msEditorType:f.editorType},d=(l.availableStyles||[]).map((function(e){return e.name===i?V(V({},e),{},{metadata:V(V({},e.metadata),p)}):e}));return o().Observable.defer((function(){return O.ZP.updateStyle({baseUrl:u,code:a,format:r,styleName:i,languageVersion:n,options:{params:{raw:!0}},metadata:p})})).switchMap((function(){return o().Observable.of((0,S.Wm)(),(0,b.tV)(l.id,"layer",{_v_:Date.now(),availableStyles:d}),(0,b.Xy)({availableStyles:d}),(0,S.k5)({temporaryId:s,templateId:"",code:a,format:r,init:!0,languageVersion:n}),(0,y.Vp)({title:"styleeditor.savedStyleTitle",message:"styleeditor.savedStyleMessage",uid:"savedStyleTitle",autoDismiss:5}))})).catch((function(e){return o().Observable.of((0,S.Fe)("global",e),(0,S.Wm)(),(0,y.vU)({title:"styleeditor.updateStyleErrorTitle",message:"styleeditor.updateStyleErrorMessage",uid:"updateStyleError",autoDismiss:5}))})).startWith((0,S.pt)("global"))}))},deleteStyleEpic:function(e,t){return e.ofType(S.j1).filter((function(e){return!!e.styleName})).switchMap((function(e){var r=e.styleName,n=t.getState(),a=(0,_.Vf)(n),i=(0,_.Z0)(n).baseUrl,s=void 0===i?"":i,l=(0,A.tL)(n),c=(0,A.Gd)(n);return o().Observable.defer((function(){return k({baseUrl:s,layerName:a.name,styles:[{name:r}]})})).switchMap((function(){var e=a.availableStyles&&a.availableStyles.filter((function(e){return e.name!==r}))||[];return o().Observable.concat(o().Observable.of((0,b.Xy)({style:"",availableStyles:e},!0),(0,S.Wm)(),(0,g.Xg)("layersettings","originalSettings",V(V({},l),{},{style:""})),(0,g.Xg)("layersettings","initialSettings",V(V({},c),{},{style:""}))),X({styleName:r,baseUrl:s,onSuccess$:o().Observable.of((0,y.Vp)({title:"styleeditor.deletedStyleSuccessTitle",message:"styleeditor.deletedStyleSuccessMessage",uid:"deletedStyleSuccess",autoDismiss:5})),onError$:o().Observable.of((0,y.vU)({title:"styleeditor.deletedStyleErrorTitle",message:"styleeditor.deletedStyleErrorMessage",uid:"deletedStyleError",autoDismiss:5}))}))})).catch((function(){return o().Observable.of((0,S.Wm)())})).startWith((function(){return o().Observable.of((0,S.pt)("global"))}))}))},setDefaultStyleEpic:function(e,t){return e.ofType(S.rb).switchMap((function(){var e=t.getState(),r=(0,_.Z0)(e).baseUrl,n=void 0===r?"":r,a=(0,_.Vf)(e),i=(0,_.i7)(e);return o().Observable.defer((function(){return U({baseUrl:n,layerName:a.name,styleName:i})})).switchMap((function(){var e=a.availableStyles.filter((function(e){var t=e.name;return i===t})),t=a.availableStyles.filter((function(e){var t=e.name;return i!==t})),r=[].concat(Z(e),Z(t));return o().Observable.of((0,b.Xy)({availableStyles:r},!0),(0,y.Vp)({title:"styleeditor.setDefaultStyleSuccessTitle",message:"styleeditor.setDefaultStyleSuccessMessage",uid:"setDefaultStyleSuccess",autoDismiss:5}),(0,S.Wm)())})).startWith((0,S.pt)("global")).catch((function(){return o().Observable.of((0,y.vU)({title:"styleeditor.setDefaultStyleErrorTitle",message:"styleeditor.setDefaultStyleErrorMessage",uid:"setDefaultStyleError",autoDismiss:5}),(0,S.Wm)())}))}))}}},80833:(e,t,r)=>{"use strict";r.d(t,{kB:()=>m,HI:()=>v});var n=r(72500),o=r.n(n),a=(r(91175),r(90173)),i=r(49977),s=r(67007),l=r(75875),c=r.n(l),u=(r(86267),r(24262)),f=r(10284),p=r(33044);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}a.default;var m=function(e){return i.Observable.defer((function(){return s.ZP.getCapabilities((0,u.Fh)(e))})).let(f.oB).map((function(t){return s.ZP.parseLayerCapabilities(t,e)}))},v=function(e){return function(e){return i.Observable.defer((function(){return c().get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.search,n=void 0===r?{}:r,a=e.url,i=o().parse(n.url||a,!0);return o().format(b(b({},i),{},{search:void 0,query:b(b({},i.query),{},{service:"WMS",version:"1.1.1",layers:t,outputFormat:"application/json",request:"DescribeLayer"})}))}(e))})).let(f.oB)}(e).map((function(e){var t=e.data,r=void 0===t?{}:t;return r&&r.layerDescriptions[0]})).map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.owsURL;return b(b({},e),{},{params:{},search:r?{type:"wfs",url:(0,p.cleanAuthParamsFromURL)(r)}:void 0})}))}},98592:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>W});var n=r(1469),o=r.n(n),a=r(47037),i=r.n(a),s=r(27418),l=r.n(s),c=r(45697),u=r.n(c),f=r(24852),p=r.n(f),y=r(71703),b=r(67076),d=r(22222),m=r(80416),v=r(96909),g=r(15402),h=r(65539),S=r(82030),O=r(73014),w=r(32425),P=r(74621),j=r(93222),E=r(99009),T=r(63977);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){B(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(l,e);var t,r,n,a,s=(n=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(n);if(a){var r=k(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return R(this,e)});function l(){return D(this,l),s.apply(this,arguments)}return t=l,(r=[{key:"UNSAFE_componentWillMount",value:function(){var e=!this.props.editingAllowedRoles||o()(this.props.editingAllowedRoles)&&i()(this.props.userRole)&&-1!==this.props.editingAllowedRoles.indexOf(this.props.userRole);this.props.onInit(this.props.styleService,e&&(0,E.uW)(this.props.layer,this.props.styleService))}},{key:"render",value:function(){return p().createElement(h.Z,{className:"ms-style-editor-container",header:this.props.showToolbar?p().createElement("div",{className:"ms-style-editor-container-header"},this.props.header,p().createElement("div",{className:"text-center"},p().createElement(T.lC,{enableSetDefaultStyle:this.props.enableSetDefaultStyle}))):null,footer:p().createElement("div",{style:{height:25}})},this.props.isEditing?p().createElement(T.m2,{config:this.props.editorConfig}):p().createElement(T.tM,{showDefaultStyleIcon:this.props.canEdit&&this.props.enableSetDefaultStyle}))}}])&&C(t.prototype,r),l}(p().Component);B(U,"propTypes",{layer:u().object,header:u().node,isEditing:u().bool,showToolbar:u().node.bool,onInit:u().func,styleService:u().object,userRole:u().string,editingAllowedRoles:u().array,enableSetDefaultStyle:u().bool,canEdit:u().bool,editorConfig:u().object}),B(U,"defaultProps",{layer:{},onInit:function(){},editingAllowedRoles:["ADMIN"],editorConfig:{}});var _=(0,b.compose)(b.toClass,(0,b.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.active;return!t}),(function(){return function(){return null}})),(0,y.connect)((0,d.P1)([j.ex,j.aN,j.Vf,j.p,P.L3,j.z_,j.Z0],(function(e,t,r,n,o,a,i){return{isEditing:"edit"===e,loading:t,layer:r,error:n,userRole:o,canEdit:a,styleService:i}})),{onInit:v.E0,onUpdateParams:m.Xy},(function(e,t,r){var n,o,a,i=(null===(n=r.styleService)||void 0===n?void 0:n.baseUrl)===(null===(o=e.styleService)||void 0===o?void 0:o.baseUrl)&&(null===(a=e.styleService)||void 0===a?void 0:a.isStatic),s=r.styleService&&!i?L(L({},r.styleService),{},{isStatic:!0}):L({},e.styleService);return L(L(L(L({},r),e),t),{},{styleService:s})})),(0,S.Z)((function(e){var t=e.error;return!!(null!=t&&t.availableStyles||null!=t&&t.global||null!=t&&t.parsingCapabilities)}),(function(e){var t=e.error;return{glyph:"exclamation-mark",title:p().createElement(g.Z,{msgId:"styleeditor.errorTitle"}),description:p().createElement(g.Z,{msgId:((null==t?void 0:t.availableStyles)?"styleeditor.missingAvailableStylesMessage":(null==t?void 0:t.parsingCapabilities)&&"styleeditor.parsingCapabilitiesError")||(null==t?void 0:t.global)&&"styleeditor.globalError"}),style:{display:"flex",width:"100%",height:"100%",overflow:"hidden"},mainViewStyle:{margin:"auto",width:300}}})),(0,O.Z)((function(e){return"global"===e.loading}),{size:150,style:{margin:"auto"}},(function(e){return p().createElement("div",{style:{position:"relative",height:"100%",display:"flex"}},p().createElement(w.Z,e))})),(0,b.compose)((0,y.connect)((function(){return{}}),{toggleStyleEditor:v.Wv}),(0,b.lifecycle)({componentDidMount:function(){this.props.toggleStyleEditor(null,!0)}})))(U);const W={StyleEditorPlugin:l()(_,{TOC:{priority:1,container:"TOCItemSettings"},TOCItemsSettings:{name:"StyleEditor",target:"style",priority:1,ToolbarComponent:T.lC}}),reducers:{styleeditor:r(32244).Z},epics:r(94943).ZP}},32244:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(96909),o=r(47037),a=r.n(o);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.wL:return s(s({},e),{},{service:t.service,canEdit:t.canEdit});case n.Nm:return s(s({},e),{},{canEdit:t.canEdit});case n.gF:return s(s({},e),{},{temporaryId:t.temporaryId,templateId:t.templateId,code:t.code,format:t.format,error:null,languageVersion:t.languageVersion,initialCode:t.init?t.code:e.initialCode});case n.g$:return""===t.status?s(s({},e),{},{status:t.status,code:"",templateId:"",initialCode:"",addStyle:!1,error:{}}):s(s({},e),{},{status:t.status});case n.dJ:return{service:e.service&&s({},e.service)||{},canEdit:e.canEdit,loading:e.loading};case n.uz:return s(s({},e),{},{addStyle:t.add});case n.lX:return s(s({},e),{},{loading:!t.status||t.status});case n.E2:return s(s({},e),{},{loading:!1,enabled:!0});case n.mF:var r,o,i,c=(null==t||null===(r=t.error)||void 0===r?void 0:r.statusText)||(null==t||null===(o=t.error)||void 0===o?void 0:o.message)||"",u=a()(null==t||null===(i=t.error)||void 0===i?void 0:i.messageId)&&{messageId:t.error.messageId},f=c.match(/line\s([\d]+)|column\s([\d]+)|lineNumber:\s([\d]+)|columnNumber:\s([\d]+)/g),p=f&&2===f.length&&f.reduce((function(e,t){var r=t.split(" "),n=r[0].replace(/Number:/g,""),o=parseFloat(r[1]);return n&&!isNaN(o)&&s(s({},e),{},l({},n,o))||s({},e)}),s({message:c},u))||s({message:c},u);return s(s({},e),{},{loading:!1,canEdit:!(t.error&&(401===t.error.status||403===t.error.status||t.error.message&&-1!==t.error.message.indexOf("could not be unmarshalled"))),error:s(s({},e.error),{},l({},t.status||"global",s({status:t.error&&t.error.status||404},p)))});case n.dk:return s(s({},e),{},{metadata:s(s({},e.metadata),t.metadata)});default:return e}}},7654:(e,t,r)=>{var n=r(81763);e.exports=function(e){return n(e)&&e!=+e}}}]);