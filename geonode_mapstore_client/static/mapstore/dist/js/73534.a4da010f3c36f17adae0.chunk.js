(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[73534],{921914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>E,km:()=>o,Ih:()=>u,Xw:()=>c,Pn:()=>i,DZ:()=>O,e8:()=>a,E0:()=>p,F9:()=>s,X_:()=>_,pb:()=>f,qb:()=>l,Re:()=>R,ih:()=>y,xy:()=>N,jL:()=>T,oz:()=>I,ph:()=>S,lF:()=>D,gG:()=>d,cb:()=>G,GI:()=>A,B1:()=>P,fv:()=>C,gc:()=>U,zX:()=>v,ZF:()=>b,Zb:()=>m,DW:()=>F,Xp:()=>g,Fm:()=>M,sV:()=>h,Mn:()=>L,LU:()=>j,XP:()=>Y,WU:()=>w,JB:()=>H,g:()=>q,ws:()=>Z,HP:()=>k,aN:()=>W,Pg:()=>Q,u0:()=>x,TM:()=>V,PM:()=>X,lK:()=>K,sv:()=>J,MO:()=>$,oO:()=>z,Mc:()=>ee,Zw:()=>te,RA:()=>re,am:()=>ne,ZM:()=>Ee,wm:()=>oe,Y$:()=>ue,Qu:()=>ce,kT:()=>ie});var n=r(647310),E="LOAD_FEATURE_INFO",o="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",c="CHANGE_MAPINFO_STATE",i="NEW_MAPINFO_REQUEST",O="PURGE_MAPINFO_RESULTS",a="CHANGE_MAPINFO_FORMAT",p="SHOW_MAPINFO_MARKER",s="HIDE_MAPINFO_MARKER",_="SHOW_REVERSE_GEOCODE",f="HIDE_REVERSE_GEOCODE",l="GET_VECTOR_INFO",R="NO_QUERYABLE_LAYERS",y="CLEAR_WARNING",N="FEATURE_INFO_CLICK",T="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",I="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",S="TOGGLE_MAPINFO_STATE",D="UPDATE_CENTER_TO_MARKER",d="IDENTIFY:CHANGE_PAGE",G="IDENTIFY:CLOSE_IDENTIFY",A="IDENTIFY:CHANGE_FORMAT",P="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",C="IDENTIFY:EDIT_LAYER_FEATURES",U="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",v="IDENTIFY:SET_MAP_TRIGGER",b="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",m="IDENTIFY:SET_SHOW_IN_MAP_POPUP",F="IDENTIFY:IDENTIFY_IS_MOUNTED",g="IDENTIFY:INIT_PLUGIN";function M(e,t,r,n,o){return{type:E,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:o}}function h(e,t,r,n){return{type:o,error:t,reqId:e,requestParams:r,layerMetadata:n}}function L(e,t,r,n){return{type:u,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function j(){return{type:R}}function Y(){return{type:y}}function w(e,t){return{type:i,reqId:e,request:t}}function H(e,t,r,n){return{type:l,layer:e,request:t,metadata:r,queryableLayers:n}}function q(){return{type:O}}function Z(e){return{type:a,infoFormat:e}}function k(){return{type:p}}function W(){return{type:s}}function B(e){return{type:_,reverseGeocodeData:e.data}}function Q(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(B(e))})).catch((function(e){t(B(e))}))}}function x(){return{type:f}}function V(){return{type:S}}function X(e){return{type:D,status:e}}function K(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},E=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:N,point:e,layer:t,filterNameList:r,overrideParams:n,itemId:E}}function J(e){return{type:T,point:e}}function $(e){return{type:I,enabled:e}}function z(e){return{type:d,index:e}}var ee=function(){return{type:G}},te=function(e){return{type:A,format:e}},re=function(e){return{type:P,showCoordinateEditor:e}},ne=function(e){return{type:C,layer:e}},Ee=function(e){return{type:U,query:e}},oe=function(e){return{type:v,trigger:e}},ue=function(e){return{type:m,value:e}},ce=function(e){return{type:F,isMounted:e}},ie=function(e){return{type:g,cfg:e}}},647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(375875),E=r.n(n),o=r(472500),u=r.n(o),c=r(727418),i=r.n(c),O={format:"json",bounded:0,polygon_geojson:1,priority:5};const a={geocode:function(e,t){var r=i()({q:e},O,t||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return E().get(n)},reverseGeocode:function(e,t){var r=i()({lat:e.lat,lon:e.lng},t||{},O),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return E().get(n)}}},925108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(782904),E=r(727418),o=r.n(E),u=r(921914);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return o()({},e,O({},t.control,o()({},e[t.control],O({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?o()({},e,O({},t.control,o()({},e[t.control],O({},t.property,void 0)))):o()({},e,O({},t.control,o()({},e[t.control],O({},t.property,t.value))));case n.dc:return o()({},e,O({},t.control,o()({},e[t.control],t.properties)));case n.l:var E=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),c=E.reduce((function(t,r){return o()(t,O({},r,o()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return o()({},e,c);case u.DW:return i(i({},e),{},{info:i(i({},e.info),{},{available:t.isMounted})});default:return e}}},643892:(e,t,r)=>{"use strict";r.d(t,{W:()=>n,Zf:()=>E,Eu:()=>o,Vy:()=>u,YB:()=>c,xm:()=>i,_f:()=>O,ek:()=>a,cd:()=>p,pt:()=>s,ww:()=>_,tR:()=>f,Js:()=>l,p2:()=>R,ZH:()=>y,eQ:()=>N,ql:()=>T,$X:()=>I,nS:()=>S,ih:()=>D,J5:()=>d,uA:()=>G,Pv:()=>A,_Z:()=>P,dh:()=>C,IH:()=>U,e3:()=>v,Oq:()=>b,Q$:()=>m,DF:()=>F,id:()=>g,Br:()=>M,bI:()=>h,U5:()=>L,e5:()=>j,b3:()=>Y,mN:()=>w,QN:()=>H,HV:()=>q,xe:()=>Z,vA:()=>k,gw:()=>W,qs:()=>B,CB:()=>Q,vg:()=>x,Z0:()=>V,lf:()=>X,jQ:()=>K,nk:()=>J,X7:()=>$,nO:()=>z,F4:()=>ee,EU:()=>te,Rk:()=>re,V1:()=>ne});var n="GEONODE:RESOURCE_LOADING",E="GEONODE:SET_RESOURCE",o="GEONODE:RESOURCE_ERROR",u="GEONODE:UPDATE_RESOURCE_PROPERTIES",c="GEONODE:SET_RESOURCE_TYPE",i="GEONODE:SET_NEW_RESOURCE",O="GEONODE:SET_RESOURCE_ID",a="GEONODE:SET_RESOURCE_PERMISSIONS",p="GEONODE:EDIT_TITLE_RESOURCE",s="GEONODE:EDIT_ABSTRACT_RESOURCE",_="GEONODE:EDIT_THUMBNAIL_RESOURCE",f="GEONODE:SET_FAVORITE_RESOURCE",l="GEONODE:SET_MAP_THUMBNAIL",R="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",y="GEONODE:REQUEST_RESOURCE_CONFIG",N="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",T="GEONODE:LOADING_RESOURCE_CONFIG",I="GEONODE:RESET_RESOURCE_STATE",S="GEONODE:RESOURCE_CONFIG_ERROR",D="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",d="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",G="GEONODE:RESET_GEO_LIMITS",A="GEONODE:PROCESS_RESOURCES",P="GEONODE_SET_RESOURCE_THUMBNAIL",C="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",U="GEONODE_DOWNLOAD_RESOURCE",v="GEONODE_DOWNLOAD_COMPLETE",b="GEONODE_UPDATE_SINGLE_RESOURCE";function m(){return{type:n}}function F(e){return{type:E,data:e}}function g(e){return{type:b,data:e}}function M(e){return{type:p,title:e}}function h(e){return{type:s,abstract:e}}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false";return{type:_,thumbnailUrl:e,thumbnailChanged:t}}function j(){return{type:P}}function Y(e){return{type:c,resourceType:e}}function w(e){return{type:o,error:e}}function H(e){return{type:u,properties:e}}function q(){return{type:i}}function Z(e){return{type:O,id:e}}function k(e){return{type:R,permissions:e}}function W(e){return{type:f,favorite:e}}function B(e){return{type:C,enabled:e}}function Q(e){return{type:l,bbox:e}}function x(e,t,r){return{type:y,resourceType:e,pk:t,options:r}}function V(e){return{type:N,resourceType:e}}function X(e){return{type:T,loading:e}}function K(e){return{type:S,message:e}}function J(){return{type:I}}function $(e){return{type:D,compactPermissions:e}}function z(e){return{type:d,compactPermissions:e}}function ee(){return{type:G}}function te(e,t,r){return{type:A,processType:e,resources:t,redirectTo:r}}function re(e){return{type:U,resource:e}}function ne(e){return{type:v,resource:e}}},100824:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(124852),E=r.n(n);const o=(0,n.forwardRef)((function(e,t){var r=e.enabled,n=e.className,o=e.children;return r?E().createElement("div",{ref:t,className:n||"gn-overlay-container",style:{position:"relative",height:"100%"}},o):null}))},228261:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(124852),E=r.n(n),o=r(675263),u=r.n(o),c=["id","className","style","children"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function O(e){var t=e.id,r=e.className,n=e.style,o=e.children,u=function(e,t){if(null==e)return{};var r,n,E=function(e,t){if(null==e)return{};var r,n,E={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(E[r]=e[r]);return E}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(E[r]=e[r])}return E}(e,c),O=r?" "+r:"";return E().createElement(E().Fragment,null,E().createElement("div",i({},u,{id:t,className:"gn-spinner".concat(O),style:n}),E().createElement("div",null)),o)}O.propTypes={id:u().string,className:u().string,style:u().object},O.defaultProps={};const a=O},51605:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(228261)}}]);