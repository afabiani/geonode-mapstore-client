(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[59010],{362520:(e,t,n)=>{"use strict";n.d(t,{dn:()=>r,Kn:()=>o,FV:()=>l,yS:()=>i});var r="MAP_LAYOUT:UPDATE_MAP_LAYOUT",o="MAP_LAYOUT:FORCE_UPDATE_MAP_LAYOUT";function l(e){return{type:r,layout:e}}function i(){return{type:o}}},55105:(e,t,n)=>{"use strict";n.d(t,{Ss:()=>s,Nr:()=>f,ic:()=>d,Jz:()=>v,VM:()=>p,CF:()=>m});var r=n(91175),o=n.n(r),l=n(800827),i=n(552259);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e.maplayout&&e.maplayout.layout||{}},f=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=s(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){return u(u({},e),{},c({},t,n[t]))}),{})||{}},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=s(e),r=!!o()(t.filter((function(e){return n[e.key]})).map((function(e){return"not"===e.type?n[e.key]!==e.value&&n[e.key]:n[e.key]===e.value})));return r},v=function(e){return y(e,[{key:"right",value:658}])},p=function(e){return y(e,[{key:"bottom",value:30,type:"not"}])},m=function(e){var t=(0,l.Od)(e),n=f(e);return n&&t&&t.size&&{left:(0,i.parseLayoutValue)(n.left,t.size.width),bottom:(0,i.parseLayoutValue)(n.bottom,t.size.height),right:(0,i.parseLayoutValue)(n.right,t.size.width),top:(0,i.parseLayoutValue)(n.top,t.size.height)}}},586300:(e,t,n)=>{"use strict";n.d(t,{N4:()=>i,vq:()=>a,YD:()=>u});var r=n(375875),o=n.n(r),l={},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/map.json";return l.newMapConfig?new Promise((function(e){return e(l.newMapConfig)})):o().get(e).then((function(e){var t=e.data;return l.newMapConfig=t,t})).then((function(e){return window.overrideNewMapConfig?window.overrideNewMapConfig(e):e}))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/geostory.json";return l.newGeoStoryConfig?new Promise((function(e){return e(l.newGeoStoryConfig)})):o().get(e).then((function(e){var t=e.data;return l.newGeoStoryConfig=t,t})).then((function(e){return window.overrideNewGeoStoryConfig?window.overrideNewGeoStoryConfig(e):e}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/styleTemplates.json";return l.styleTemplatesConfig?new Promise((function(e){return e(l.styleTemplatesConfig)})):o().get(e).then((function(e){var t=e.data;return l.styleTemplatesConfig=null==t?void 0:t.templates,l.styleTemplatesConfig}))}},567587:(e,t,n)=>{"use strict";n.d(t,{z:()=>u});var r=n(409082),o=["msForceVisual"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=e.baseUrl,l=e.styleName;return n.e(2568).then(n.t.bind(n,402568,23)).then((function(e){var n=e.default;return(0,r.bc)({baseUrl:t,styleName:l}).then((function(e){var a=(null==e?void 0:e.metadata)||{},u=a.msForceVisual,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(a,o);if(!u||""===u)return e;var s=i(i({},c),{},{msForceVisual:"",msEditorType:"visual",msStyleJSON:"",msMD5Hash:n(null==e?void 0:e.code)});return(0,r.Uz)(i(i({},e),{},{baseUrl:t,styleName:l,metadata:s,options:{params:{raw:!0}}})).then((function(){return i(i({},e),{},{metadata:s})}))}))}))}},632247:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(124852);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const l=function(e,t){var n,l,i=function(){if("undefined"==typeof window)return t;try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.log("Error to get item key “".concat(e,"”:"),n),t}},a=(n=(0,r.useState)(i),l=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(n,l)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(n,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],c=a[1];return(0,r.useEffect)((function(){c(i())}),[]),(0,r.useEffect)((function(){var e=function(){c(i())};return window.addEventListener("localStorage",e),function(){window.removeEventListener("localStorage",e)}}),[]),[u,function(t){try{var n=t instanceof Function?t(u):t;c(n),window.localStorage.setItem(e,JSON.stringify(n)),window.dispatchEvent(new Event("localStorage"))}catch(t){console.log("Error “".concat(e,"”:"),t)}}]}},133096:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>de});var r=n(124852),o=n.n(r),l=n(322843),i=n(171703),a=n(22222),u=n(480681),c=n(278720),s=n(532244),f=n(394943),d=n(49977),y=n(423570),v=n.n(y),p=n(580416),m=n(396909),g=n(782904),b=n(460604),O=n(99009),h=n(409082),S=n(893222),w="GEONODE:REQUEST_DATASET_AVAILABLE_STYLES",E=n(717621),j=n.n(E),P=n(535721),C=n(567587),N=n(362520),A=n(55105),T=n(737275),k=n(226735);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){var t=e.type,n=e.title,r=j()("hsl(".concat(Math.floor(270*Math.random()),", 90%, 70%)")).toHexString();switch(t){case"raster":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\traster-channels: auto;\n\traster-opacity: 1;\n}\n";case"point":default:return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tmark: symbol('square');\n\t:mark {\n\t\tfill: "+r+";\n\t\tsize: 4;\n\t}\n}\n";case"linestring":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tstroke: "+r+";\n}\n";case"polygon":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tfill: "+r+";\n}\n"}}const Z={gnRequestDatasetAvailableStyles:function(e,t){return e.ofType(w).switchMap((function(e){var n,r=t.getState(),o=(null==e||null===(n=e.options)||void 0===n?void 0:n.styleService)||(0,S.Z0)(r);return d.Observable.concat(d.Observable.of((0,g.Xg)("visualStyleEditor","enabled",!0)),d.Observable.defer((function(){return function(e){var t,n,r,o,l,i,a=e.layer,u=e.styleService,c=null==a||null===(t=a.extendedParams)||void 0===t||null===(n=t.mapLayer)||void 0===n||null===(r=n.dataset)||void 0===r?void 0:r.subtype,s=(null==a?void 0:a.availableStyles)||[];return 0===s.length?function(e,t){var n,r="visual";return e?(0,C.z)({baseUrl:null==t?void 0:t.baseUrl,styleName:(0,P.UH)(e)}).then((function(e){var t=e||{},n=t.metadata,r=void 0===n?{}:n,o=t.code,l=t.format,i=t.languageVersion;return{msEditorType:null==r?void 0:r.msEditorType,msStyleJSON:null==r?void 0:r.msStyleJSON,code:o,format:l,languageVersion:i}})).catch((function(){return{msEditorType:r,msStyleJSON:null,code:n}})):new Promise((function(e){return e({msStyleJSON:null,msEditorType:r,code:n})}))}(null==a||null===(o=a.extendedParams)||void 0===o||null===(l=o.mapLayer)||void 0===l||null===(i=l.dataset)||void 0===i?void 0:i.default_style,u).then((function(e){var t,n,r,o,l=e||{},i=l.msEditorType,s=l.msStyleJSON,f=l.code,d=l.format,y=l.languageVersion,p=a.name.split(":"),m=1===p.length?p[0]:p[p.length-1],g=(o=m,"geonode:".concat(v()(),"_ms_").concat(o)),b={title:m,description:"",msStyleJSON:s,msEditorType:i,gnDatasetPk:null==a||null===(t=a.extendedParams)||void 0===t||null===(n=t.mapLayer)||void 0===n||null===(r=n.dataset)||void 0===r?void 0:r.pk};return h.ZP.createStyle(U({baseUrl:null==u?void 0:u.baseUrl,code:f||M({type:c,title:m}),format:f&&d?d:"css",styleName:g,metadata:b,options:{params:{raw:!0}}},f&&d&&{languageVersion:y})).then((function(){return[[{name:g,title:m,metadata:b,format:d}],!0]}))})):new Promise((function(e){return e([s])}))}({layer:e.layer,styleService:o})})).switchMap((function(t){var n,r,l,i,a=(l=t,i=1,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(l,i)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(l,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],u=(null==e||null===(n=e.options)||void 0===n?void 0:n.style)||(null==a||null===(r=a[0])||void 0===r?void 0:r.name);return d.Observable.concat(d.Observable.defer((function(){return h.ZP.getStylesInfo({baseUrl:null==o?void 0:o.baseUrl,styles:a})})).switchMap((function(t){return d.Observable.of((0,p.tV)(e.layer.id,"layer",{availableStyles:t}),(0,p.Xy)({style:u},!0),(0,b.W)(e.layer.id,O.s1,"override",{}),(0,m.Nf)("edit"))})))})))}))},gnUpdateStyleInfoOnSave:function(e,t){return e.ofType(m.ch).switchMap((function(){var e=t.getState(),n=(0,S.Vf)(e);return d.Observable.of((0,p.tV)(n.id,"layers",{style:n.style}))}))},gnUpdateVisualStyleEditorMapLayout:function(e,t){return e.ofType(N.dn,g.At).filter((function(){var e,n,r;return null===(e=t.getState())||void 0===e||null===(n=e.controls)||void 0===n||null===(r=n.visualStyleEditor)||void 0===r?void 0:r.enabled})).filter((function(e){return e.source!==k.O.PANEL})).map((function(e){var n=e.layout,r=(0,T.u8)("mapLayout")||{left:{sm:300,md:500,lg:600},right:{md:658},bottom:{sm:30}},o=(0,N.FV)(U(U(U({},(0,A.Ss)(t.getState())),n),{},{left:r.left.md,boundingMapRect:U(U({},(null==n?void 0:n.boundingMapRect)||{}),{},{left:r.left.md})}));return U(U({},o),{},{source:k.O.PANEL})}))}};var V=n(805346),x=n(303744),z=n(399534),_=n(694745),F=n(76907),R=n(815135),J=n(675110),G=n(632247),Y=n(283958),q=n(290702),B=n(166287),X=n(586300);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ee=(0,R.Z)(x.Z);function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ae=(0,R.Z)(x.Z),ue=(0,i.connect)((0,a.P1)([S.QW,S.gB,S.aN,S.p,J.l2],(function(e,t,n,r,o){var l;return{isStyleChanged:void 0!==e&&void 0!==t&&e!==t,loading:n,error:!(null==r||null===(l=r.edit)||void 0===l||!l.status),layerLoading:o&&o.some((function(e){return e.loading}))}})),{onClick:m.Lc})((function(e){var t=e.variant,n=e.onClick,r=e.size,l=e.isStyleChanged,i=e.error,a=e.loading,u=e.layerLoading,c=e.msgId,s=void 0===c?"gnviewer.applyStyle":c,f=!!(a||u||i);return l?o().createElement(ae,{variant:t||"primary",className:l?"gn-pending-changes-icon":"",size:r,disabled:f,onClick:f?function(){}:function(){return n()}},o().createElement(V.Z,{msgId:s})):null})),ce=(0,i.connect)((0,a.P1)([S.Vf,S.lC,S.Ed,S.gB,S.i7,function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.visualStyleEditor)||void 0===n?void 0:n.tmpCode}],(function(e,t,n,r,o,l){var i;return{geometryType:t,format:n,selectedStyle:null==e||null===(i=e.availableStyles)||void 0===i?void 0:i.find((function(e){return e.name===o})),code:r,tmpCode:l}})),{onSelect:m.p2,onUpdateMetadata:m.bB,onStoreTmpCode:g.Xg.bind(null,"visualStyleEditor","tmpCode")})((function(e){var t=e.code,n=e.format,l=e.geometryType,i=e.onSelect,a=e.selectedStyle,u=e.onUpdateMetadata,c=e.tmpCode,s=e.onStoreTmpCode,f=(0,r.useRef)(),d=Q((0,r.useState)([]),2),y=d[0],v=d[1],p=Q((0,r.useState)(),2),m=p[0],g=p[1],b=Q((0,r.useState)(!1),2),O=b[0],h=b[1];(0,r.useEffect)((function(){return f.current=!0,(0,X.YD)().then((function(e){f.current&&v(e)})),function(){f.current=!1}}),[]);var S=(0,r.useRef)();S.current=function(e){e?s(t):(g(void 0),c&&i(c))},(0,r.useEffect)((function(){return function(){s("")}}),[]);var w=y.filter((function(e){return e.types.includes(l)}));return(null==w?void 0:w.length)>0?o().createElement(q.Z,{key:O,placement:"right",open:O,onOpen:function(e){h(e),S.current(e)},content:o().createElement("div",{className:"gn-visual-style-editor-templates"},o().createElement("ul",null,w.map((function(e,t){var r;return o().createElement("li",{key:t,className:"gn-visual-style-editor-template".concat(m===t?" selected":""),onClick:function(){return function(e,t){var r,o=e.code;g(t);var l=(null==a||null===(r=a.metadata)||void 0===r?void 0:r.title)||(null==a?void 0:a.label)||(null==a?void 0:a.title)||(null==a?void 0:a.name)||"";(0,B.getStyleParser)(n).then((function(e){e.writeStyle(H(H({},o),{},{name:l})).then((function(e){f.current&&i(e)}))}))}(e,t)}},o().createElement("div",{className:"gn-visual-style-editor-template-preview"},null!=e&&null!==(r=e.preview)&&void 0!==r&&r.config?o().createElement(Y.Z,e.preview.config):null==e?void 0:e.preview),o().createElement("div",{className:"gn-visual-style-editor-template-title"},e.title))}))),o().createElement("div",{className:"gn-visual-style-editor-templates-footer"},o().createElement(ee,{size:"xs",disabled:void 0===m,variant:"primary",onClick:function(){s(t),u({styleJSON:null,editorType:"visual"}),h(!1)}},o().createElement(V.Z,{msgId:"gnviewer.copy"}))))},o().createElement(ee,{size:"xs"},o().createElement(V.Z,{msgId:"gnviewer.copyFrom"}))):null})),se=(0,i.connect)((0,a.P1)([S.Vf,S.gc,S.Z0,S.QW,function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.visualStyleEditor)||void 0===n?void 0:n.enabled},function(e){return(0,A.ic)(e,{height:!0})},J.Iz,S.gB,F.L4],(function(e,t,n,r,o,l,i,a,u){return{layer:e,temporaryStyleId:t,styleService:n,initialCode:r,enabled:o,style:l,originalStyle:null==i?void 0:i.style,isStyleChanged:void 0!==r&&void 0!==a&&r!==a,resourceType:u}})),{onUpdateStatus:m.Nf,onUpdateParams:p.Xy,onInit:m.E0,onReset:m.Wv.bind(null,void 0,!1),onSave:m.Lc,onClose:g.Xg.bind(null,"visualStyleEditor","enabled",!1),onUpdateNode:p.tV},(function(e,t,n){var r,o,l,i=(null===(r=n.styleService)||void 0===r?void 0:r.baseUrl)===(null===(o=e.styleService)||void 0===o?void 0:o.baseUrl)&&(null===(l=e.styleService)||void 0===l?void 0:l.isStatic),a=n.styleService&&!i?re(re({},n.styleService),{},{isStatic:!0}):re({},e.styleService);return re(re(re(re({},n),e),t),{},{styleService:a})}))((function(e){var t=e.layer,n=e.editorConfig,l=e.styleService,i=e.onInit,a=e.onReset,s=e.temporaryStyleId,f=e.showLayerProperties,d=e.initialCode,y=e.enabled,v=e.onClose,p=e.style,m=e.isStyleChanged,g=e.resourceType,b=le((0,r.useState)(!1),2),O=b[0],S=b[1],w=le((0,G.Z)("style-notifcation",!1),2),E=w[0],j=w[1],P=le((0,r.useState)(!1),2),C=P[0],N=P[1],A=(0,r.useRef)();function T(e){e?(a(),v()):S(!0)}return A.current=function(){s&&h.ZP.deleteStyle({baseUrl:l.baseUrl,styleName:s})},(0,r.useEffect)((function(){function e(){A.current()}return i(l),window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e),a()}}),[]),y&&t.id?o().createElement("div",{className:"gn-visual-style-editor",style:p},f&&o().createElement("div",{className:"gn-visual-style-editor-layer-info"},o().createElement("div",{className:"gn-visual-style-editor-layer-title"},t.title),o().createElement(ae,{onClick:T.bind(null,!m),className:"square-button"},o().createElement(u.Glyphicon,{glyph:"1-close"}))),!C&&!E&&"map"===g&&o().createElement("div",{className:"gn-visual-style-editor-alert alert-info"},o().createElement("div",{className:"gn-visual-style-editor-alert-message"},o().createElement(V.Z,{msgId:"gnviewer.stylesFirstClone"}),o().createElement(ae,{size:"xs",variant:"transparent",onClick:function(){j(!0)}},o().createElement("p",null,o().createElement(V.Z,{msgId:"gnviewer.dismissMessage"})))),o().createElement(ae,{size:"xs",variant:"transparent",onClick:function(){N(!0)}},o().createElement(u.Glyphicon,{glyph:"remove"}))),o().createElement("div",{className:"gn-visual-style-editor-body"},o().createElement("div",null,o().createElement(c.m2,{key:d,config:n,header:o().createElement(o().Fragment,null,o().createElement(ce,null),o().createElement(ue,{variant:"primary",size:"xs"}))}))),o().createElement(z.Z,null,o().createElement(_.Z,{title:o().createElement(V.Z,{msgId:"gnviewer.styleEditorCloseTitle"}),fitContent:!0,clickOutEnabled:!1,show:O,onClose:function(){S(!1)},buttons:[{text:o().createElement(V.Z,{msgId:"gnviewer.styleEditorCloseCancel"}),onClick:function(){S(!1)}},{text:o().createElement(V.Z,{msgId:"gnviewer.styleEditorCloseConfirm"}),bsStyle:"primary",onClick:function(){S(!1),T(!0)}}]},o().createElement("div",{style:{padding:"1rem"}},o().createElement(V.Z,{msgId:"gnviewer.styleEditorCloseMessage"}))))):null})),fe=(0,i.connect)((0,a.P1)([S.Vf,F.HG,F.V$],(function(e,t,n){return{layer:e,enabled:!(null==t||!t.includes("change_resourcebase")),isNew:n}})),{onClick:function(e,t){return{type:w,layer:e,options:t}}})((function(e){var t,n=e.layer,r=e.status,l=e.onClick,i=void 0===l?function(){}:l,a=e.enabled,c=e.isNew,s=e.btnProps,f=void 0===s?{}:s,d=e.hide,y=e.selectedStyle;return d||"LAYER"!==r||null==n||null===(t=n.extendedParams)||void 0===t||!t.mapLayer||!a&&!c?null:o().createElement(ae,te({variant:"primary",className:"square-button-md"},f,{onClick:function(e){e.stopPropagation(),e.preventDefault(),i(n,{style:y})},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},tooltipId:o().createElement(V.Z,{msgId:"gnviewer.editLayerStyle"})}),o().createElement(u.Glyphicon,{glyph:"dropper"}))}));const de=(0,l.rx)("VisualStyleEditor",{component:se,containers:{TOC:{target:"toolbar",Component:fe},LayerSettings:{target:"style-button",Component:fe}},reducers:{styleeditor:s.Z},epics:re(re({},f.ZP),Z)})},226735:(e,t,n)=>{"use strict";n.d(t,{O:()=>r});var r={PANEL:"PANEL"}}}]);