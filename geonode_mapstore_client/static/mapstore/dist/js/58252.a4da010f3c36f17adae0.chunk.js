(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[58252],{898939:(e,t,n)=>{"use strict";n.d(t,{d2:()=>r,yX:()=>o,Uo:()=>l,n2:()=>i,SA:()=>c});var r="CHANGE_HELP_STATE",o="CHANGE_HELP_TEXT",l="CHANGE_HELPWIN_VIZ";function i(e){return{type:o,helpText:e}}function c(e){return{type:l,helpwinViz:e}}},383606:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(747037),o=n.n(r),l=n(675263),i=n.n(l),c=n(124852),a=n.n(c),p=n(480681),s=n(86638);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(c,e);var t,n,r,l,i=(r=c,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(l){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(){var e;f(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(g(e=i.call.apply(i,[this].concat(n))),"onMouseOver",(function(){var t=o()(e.props.helpText)?e.props.helpText:(0,s.S$)(e.context.messages,e.props.helpText.props.msgId);e.props.changeHelpText(t),e.props.changeHelpwinVisibility(!0)})),e}return t=c,(n=[{key:"render",value:function(){return a().createElement(p.Badge,{id:this.props.id,onMouseOver:this.onMouseOver,className:(this.props.isVisible?"":"hidden ")+(this.props.className?this.props.className:"")},"?")}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(a().Component);h(v,"propTypes",{id:i().string,helpText:i().oneOfType([i().string,i().element]),isVisible:i().bool,changeHelpText:i().func,changeHelpwinVisibility:i().func,className:i().string}),h(v,"contextTypes",{messages:i().object}),h(v,"defaultProps",{helpText:"",isVisible:!1});const O=v},38560:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(480681),o=n(124852),l=n.n(o),i=n(294184),c=n.n(i),a=["disabled","className","onClick"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const s=(u=r.Button,l().forwardRef((function(e,t){var n=e.disabled,r=e.className,o=e.onClick,i=void 0===o?function(){}:o,s=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,a);return l().createElement(u,p({ref:t,className:n?c()("disabled",r):r,onClick:function(){n||i.apply(void 0,arguments)}},s),s.children)})));var u},658252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>H});var r=n(353131),o=n.n(r),l=n(727418),i=n.n(l),c=n(675263),a=n.n(c),p=n(124852),s=n.n(p),u=n(480681),f=n(171703),y=n(12838),b=n(782904),m=n(898939),g=n(383606),d=n(805346),h=n(950966),v=n(38560);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function C(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=(0,f.connect)((function(e){return{isVisible:e.controls&&e.controls.help&&e.controls.help.enabled}}),{changeHelpText:m.n2,changeHelpwinVisibility:m.SA})(g.Z),R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,l,c=(r=a,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(l){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(){var e;T(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return N(_(e=c.call.apply(c,[this].concat(n))),"getToolConfig",(function(t){return t.tool?{}:e.props.toolCfg})),N(_(e),"getTool",(function(t){if(t.tool)return!0===t.tool?t.plugin:t.tool;var n=function(){return{}},r={};return t.exclusive?(n=function(n){return{active:n.controls&&n.controls[e.props.stateSelector]&&n.controls[e.props.stateSelector].active===t.name}},r[e.props.eventSelector]=b.Xg.bind(null,e.props.stateSelector,"active",t.name,!0)):t.toggle?(n=function(n){return{bsStyle:n.controls[t.toggleControl||t.name]&&n.controls[t.toggleControl||t.name][t.toggleProperty||"enabled"]?e.props.activeStyle:e.props.toolStyle,active:n.controls[t.toggleControl||t.name]&&n.controls[t.toggleControl||t.name][t.toggleProperty||"enabled"]||!1}},r[e.props.eventSelector]=b.Xi.bind(null,t.toggleControl||t.name,t.toggleProperty||null)):t.action&&(r[e.props.eventSelector]=o()(t.action,e.context),n=t.selector||n),(0,f.connect)(n,r,(function(t,n,r){return e.mergeHandlers(S(S({},r),t),n)}))(e.props.tool)})),N(_(e),"renderTool",(function(t,n){if(t.element)return t.element;var r=t.help?s().createElement(k,{className:"mapstore-helpbadge",helpText:t.help}):s().createElement("span",null),o=t.tooltip?s().createElement(d.Z,{msgId:t.tooltip}):null,l=e.getTool(t),i=e.getToolConfig(t),c=t.childTools||[];return e.addTooltip(s().createElement(l,j({},i,{pluginCfg:t.cfg,tooltip:o,style:t.style,btnSize:e.props.toolSize,bsStyle:e.props.toolStyle,help:r,key:t.name||"tool"+n,mapType:e.props.mapType},t.cfg,{items:t.items||[]}),t.cfg&&t.cfg.glyph?s().createElement(u.Glyphicon,{glyph:t.cfg.glyph}):t.icon,r," ",t.text,c.length>0&&s().createElement(a,j({},t.innerProps,{mapType:e.props.mapType,tools:c,panels:t.childPanels}))),t)})),N(_(e),"renderTools",(function(){return e.props.tools.map(e.renderTool)})),N(_(e),"renderPanels",(function(){return e.props.panels.filter((function(e){return!e.panel.loadPlugin})).map((function(t){var n=t.panel,r=s().createElement(n,j({key:t.name,mapType:e.props.mapType},t.cfg,t.props||{},{items:t.items||[]})),o=t.title?s().createElement(d.Z,{msgId:t.title}):null;return t.wrap?s().createElement(u.Collapse,{key:"mapToolBar-item-collapse-"+t.name,in:e.props.activePanel===t.name},s().createElement(u.Panel,{header:o,style:e.props.panelStyle,className:e.props.panelClassName},r)):r}))})),N(_(e),"mergeHandlers",(function(e,t){return Object.keys(t).reduce((function(n,r){return i()(n,N({},r,e[r]?(0,y.qC)(e[r],t[r]):t[r]))}),e)})),N(_(e),"addTooltip",(function(t,n){if(n.tooltip){var r=s().createElement(u.Tooltip,{id:e.props.id+"-"+n.name+"-tooltip"},s().createElement(d.Z,{msgId:n.tooltip}));return s().createElement(h.Z,{key:e.props.id+"-"+n.name+"-overlay",rootClose:!0,placement:"left",overlay:r},t)}return t})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props.container;return s().createElement("span",{id:this.props.id,style:this.props.containerWrapperStyle},s().createElement(e,{id:this.props.id+"-container",style:this.props.style,className:this.props.className},this.renderTools()),this.renderPanels())}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s().Component);N(R,"propTypes",{id:a().string.isRequired,container:a().func,containerWrapperStyle:a().object,tool:a().oneOfType([a().object,a().func]),className:a().string,style:a().object,tools:a().array,panels:a().array,mapType:a().string,toolStyle:a().string,activeStyle:a().string,toolSize:a().string,stateSelector:a().string.isRequired,eventSelector:a().string,panelStyle:a().object,panelClassName:a().string,activePanel:a().string,toolCfg:a().object}),N(R,"contextTypes",{messages:a().object,router:a().object}),N(R,"defaultProps",{container:u.Panel,className:"tools-container",style:{},toolStyle:"default",activeStyle:"primary",tools:[],panels:[],tool:v.Z,mapType:"leaflet",eventSelector:"onClick",panelStyle:{},panelClassName:"tools-container-panel",toolSize:null,toolCfg:{}});const H=R},353131:(e,t,n)=>{var r=n(105976),o=n(497727),l=n(720893),i=n(846460),c=r((function(e,t){var n=i(t,l(c));return o(e,32,void 0,t,n)}));c.placeholder={},e.exports=c}}]);