(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[78225],{68143:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>z});var o=n(24852),r=n.n(o),i=n(67076),c=n(22222),u=n(71703),s=n(75263),a=n.n(s),l=n(22843),d=n(1757),f=n(67306),p=n(96311),b=n(57579),y=n(55927);const h=(0,i.compose)((0,u.connect)((function(){return{}}),{backFromWizard:function(){return(0,b.Rz)("layer",void 0)}}),(0,i.withProps)((function(t){var e=t.backFromWizard;return{exitButton:{onClick:void 0===e?function(){}:e,glyph:"arrow-left",tooltipId:"widgets.builder.wizard.backToLayerSelection"}}})));var m=n(75480),g=n(49832),v=n(7691),w=n(24412),P=n(80717);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,O(o.key),o)}}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function j(t,e,n){return(e=O(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O(t){var e=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==C(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===C(e)?e:String(e)}var _=(0,i.compose)((0,u.connect)(p.Nb,{toggleConnection:b.w2,triggerShowConnections:y.G9}),(0,u.connect)(p.Tw),(0,i.withProps)((function(t){var e=t.availableDependencies;return{availableDependencies:(void 0===e?[]:e).filter((function(t){return"map"!==t}))}})),h)(g.Z),D=(0,i.compose)((0,u.connect)((0,c.P1)(f.P0,d.HU,f.DZ,d.ie,(function(t,e,n){return{showConnections:t,hasConnections:(arguments.length>3&&void 0!==arguments[3]?arguments[3]:[]).length>0,hasWidgets:e,canEdit:n}})),{onShowConnections:y.G9,onAddWidget:b.A4}),(0,i.withProps)((function(t){var e=t.onAddWidget,n=void 0===e?function(){}:e,o=t.hasWidgets,r=t.canEdit,i=t.hasConnections,c=t.showConnections,u=t.onShowConnections,s=void 0===u?function(){}:u;return{buttons:[{glyph:"plus",tooltipId:"dashboard.editor.addACardToTheDashboard",bsStyle:"primary",visible:r,id:"ms-add-card-dashboard",onClick:function(){return n()}},{glyph:c?"bulb-on":"bulb-off",tooltipId:c?"dashboard.editor.hideConnections":"dashboard.editor.showConnections",bsStyle:c?"success":"primary",visible:!!o&&!!i||!r,onClick:function(){return s(!c)}}]}})))(P.Z),M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,o,i,c=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(o);if(i){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),c.apply(this,arguments)}return e=u,(n=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var t=this,e=this.props.pluginCfg.selectedService||"",n=this.props.pluginCfg.services||{};return this.props.editing?r().createElement("div",{className:"dashboard-editor de-builder"},r().createElement(_,{disableEmptyMap:this.props.disableEmptyMap,defaultSelectedService:e,defaultServices:n,enabled:this.props.editing,onClose:function(){return t.props.setEditing(!1)},catalog:this.props.catalog})):r().createElement("div",{className:"ms-vertical-toolbar dashboard-editor de-toolbar",id:this.props.id},r().createElement(D,{transitionProps:!1,btnGroupProps:{vertical:!0},btnDefaultProps:{tooltipPosition:"right",className:"square-button-md",bsStyle:"primary"}}),this.props.loading?r().createElement(m.Z,{style:{position:"fixed",bottom:0}}):null)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(r().Component);j(M,"propTypes",{id:a().string,editing:a().bool,loading:a().bool,limitDockHeight:a().bool,fluid:a().bool,zIndex:a().number,dockSize:a().number,position:a().string,onMount:a().func,onUnmount:a().func,setEditing:a().func,dimMode:a().string,src:a().string,style:a().object,pluginCfg:a().object,catalog:a().object,disableEmptyMap:a().bool}),j(M,"defaultProps",{id:"dashboard-editor",editing:!1,dockSize:500,loading:!0,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:function(){},onUnmount:function(){},setEditing:function(){}});var T=(0,u.connect)((0,c.P1)(f.i$,f.MZ,(function(t,e){return{editing:t,loading:e}})),{setEditing:y.D_,onMount:function(){return(0,y.Nl)(!0)},onUnmount:function(){return(0,y.Nl)(!1)}})(M);const z=(0,l.rx)("DashboardEditor",{component:T,reducers:{dashboard:w.Z},epics:v.ZP})},74621:(t,e,n)=>{"use strict";n.d(e,{np:()=>o,L3:()=>r,jl:()=>i,y8:()=>c,qg:()=>u}),n(27418),n(27361);var o=function(t){return t&&t.security&&t.security.user},r=function(t){return o(t)&&o(t).role},i=function(t){return t&&t.security&&t.security.user},c=function(t){return t.security&&t.security.token},u=function(t){return"ADMIN"===r(t)}}}]);