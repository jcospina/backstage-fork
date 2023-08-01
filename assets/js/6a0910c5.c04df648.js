/*! For license information please see 6a0910c5.c04df648.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[877558],{479339:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=t(824246),o=t(511151);const i={id:"plugin-permission-node.createconditionfactory",title:"createConditionFactory",description:"API reference for createConditionFactory"},c=void 0,a={unversionedId:"reference/plugin-permission-node.createconditionfactory",id:"reference/plugin-permission-node.createconditionfactory",title:"createConditionFactory",description:"API reference for createConditionFactory",source:"@site/../docs/reference/plugin-permission-node.createconditionfactory.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.createconditionfactory",permalink:"/docs/reference/plugin-permission-node.createconditionfactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.createconditionfactory.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.createconditionfactory",title:"createConditionFactory",description:"API reference for createConditionFactory"}},s={},u=[{value:"Remarks",id:"remarks",level:2}];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-node",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.createconditionfactory",children:(0,n.jsx)(r.code,{children:"createConditionFactory"})})]}),"\n",(0,n.jsx)(r.p,{children:"Creates a condition factory function for a given authorization rule and parameter types."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"createConditionFactory: <TResourceType extends string, TParams extends PermissionRuleParams = PermissionRuleParams>(rule: PermissionRule<unknown, unknown, TResourceType, TParams>) => (params: TParams) => PermissionCondition<TResourceType, TParams>\n"})}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"For example, an isEntityOwner rule for catalog entities might take an array of entityRef strings. The rule itself defines _how_ to check a given resource, whereas a condition also includes _what_ to verify."}),"\n",(0,n.jsxs)(r.p,{children:["Plugin authors should generally use the ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.createconditionexports",children:"createConditionExports"})," in order to efficiently create multiple condition factories. This helper should generally only be used to construct condition factories for third-party rules that aren't part of the backend plugin with which they're intended to integrate."]})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))t.call(i,u)&&(a[u]=i[u]);if(r){c=r(i);for(var f=0;f<c.length;f++)n.call(i,c[f])&&(a[c[f]]=i[c[f]])}}return a}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,i={},u=null,f=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,n)&&!s.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:f,props:i,_owner:c.current}}r.jsx=u,r.jsxs=u},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,a=60110,s=60112;r.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),c=l("react.provider"),a=l("react.context"),s=l("react.forward_ref"),r.Suspense=l("react.suspense"),u=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function v(){}function g(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var _=g.prototype=new v;_.constructor=g,n(_,m.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,i={},c=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(c=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(i[n]=r[n]);var s=arguments.length-2;if(1===s)i.children=t;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:c,ref:a,props:i,_owner:b.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,t,n,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return c=c(s=e),e=""===n?"."+O(s,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(x,"$&/")+"/"),P(c,r,t,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(x,"$&/")+"/")+e)),r.push(c)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=n+O(a=e[u],u);s+=P(a,r,t,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(a=e.next()).done;)s+=P(a=a.value,r,t,f=n+O(a,u++),c);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function R(e,r,t){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function S(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:R,forEach:function(e,r,t){R(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return R(e,(function(){r++})),r},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var i=n({},e.props),c=e.key,a=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,s=b.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in r)j.call(r,f)&&!k.hasOwnProperty(f)&&(i[f]=void 0===r[f]&&void 0!==u?u[f]:r[f])}var f=arguments.length-2;if(1===f)i.children=t;else if(1<f){u=Array(f);for(var l=0;l<f;l++)u[l]=arguments[l+2];i.children=u}return{$$typeof:o,type:e.type,key:c,ref:a,props:i,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=C,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:S}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>i});var n=t(667294);const o=n.createContext({});function i(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||c:i(e),n.createElement(o.Provider,{value:a},r)}}}]);