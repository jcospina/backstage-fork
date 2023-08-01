/*! For license information please see 2a1f69eb.7b65471c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[768161],{756462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(824246),o=n(511151);const a={id:"oauth",title:"OAuth and OpenID Connect",description:"This section describes how Backstage allows plugins to request OAuth Access Tokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth to various third party APIs"},i=void 0,s={unversionedId:"auth/oauth",id:"auth/oauth",title:"OAuth and OpenID Connect",description:"This section describes how Backstage allows plugins to request OAuth Access Tokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth to various third party APIs",source:"@site/../docs/auth/oauth.md",sourceDirName:"auth",slug:"/auth/oauth",permalink:"/docs/auth/oauth",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/oauth.md",tags:[],version:"current",frontMatter:{id:"oauth",title:"OAuth and OpenID Connect",description:"This section describes how Backstage allows plugins to request OAuth Access Tokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth to various third party APIs"},sidebar:"docs",previous:{title:"Sign-in Identities and Resolvers",permalink:"/docs/auth/identity-resolver"},next:{title:"OIDC provider from scratch",permalink:"/docs/auth/oidc"}},c={},u=[{value:"Summary",id:"summary",level:2},{value:"Background",id:"background",level:2},{value:"OAuth in @backstage/core-app-api and auth-backend",id:"oauth-in-backstagecore-app-api-and-auth-backend",level:2},{value:"OAuth Flow",id:"oauth-flow",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:3}];function h(e){const t=Object.assign({p:"p",h2:"h2",a:"a",code:"code",h3:"h3",img:"img"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This section describes how Backstage allows plugins to request OAuth Access\nTokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth\nto various third party APIs."}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.p,{children:["There are occasions when the user wants to perform actions towards third party\nservices that require authorization via OAuth. Backstage provides standardized\n",(0,r.jsx)(t.a,{href:"/docs/api/utility-apis",children:"Utility APIs"})," such as the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/core-plugin-api/src/apis/definitions/auth.ts",children:"GoogleAuthApi"}),"\nfor that use-case. Backstage also includes a set of implementations of these\nAPIs that integrate with the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/auth-backend",children:"auth-backend"}),"\nplugin to provide a popup-based OAuth flow."]}),"\n",(0,r.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,r.jsxs)(t.p,{children:["Access control in OAuth is implemented in terms of scope, which is a list of\npermissions given to the app. An OAuth service can issue Access Tokens that are\ntied to a certain set of scopes, such as viewing profile information, reading\nand/or writing user data in the service. The scope format and handling is\nspecific to each OAuth provider, and the set of available scopes are typically\nfound in the documentation describing the auth solution of the provider, for\nexample\n",(0,r.jsx)(t.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"developers.google.com/identity/protocols/oauth2/scopes"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"As a part of logging in with an OAuth provider, the user needs to consent to\nboth the login itself and the set of scopes that the app is requesting to use.\nThis is done by loading a page provided by the OAuth provider, where a user can\nchoose an account to log in with, and accept or reject the request. If the user\naccepts the login request, a token is issued, and any holder of the token can\nuse it to make authenticated requests towards the third party service."}),"\n",(0,r.jsx)(t.h2,{id:"oauth-in-backstagecore-app-api-and-auth-backend",children:"OAuth in @backstage/core-app-api and auth-backend"}),"\n",(0,r.jsx)(t.p,{children:"The default OAuth implementation in Backstage is based on an OAuth server-side\noffline access flow, which means that it uses the backend as a helper in order\nto trade credentials. A benefit of this type of flow is that it does not require\nthe use of third party cookies, and is robust on a wide selection of browsers\nand privacy browsing plugins, strict security settings, etc."}),"\n",(0,r.jsx)(t.p,{children:"The implementation also uses a popup-based flow, where auth requests are handled\nin a new popup window that is opened by the app. By using a popup-based flow it\nis possible to request authentication at any point in the app, without requiring\na redirect. Because of this there is no need to ask for all scopes upfront, or\ninterrupt the app with a redirect and forcing plugin authors to take care in\nrestoring state after a redirect has been made. All in all it makes it much\neasier to make authenticated requests inside a plugin."}),"\n",(0,r.jsx)(t.h2,{id:"oauth-flow",children:"OAuth Flow"}),"\n",(0,r.jsxs)(t.p,{children:["The following describes the OAuth flow implemented by the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/auth-backend",children:"auth-backend"}),"\nand\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/core-app-api/src/lib/AuthConnector/DefaultAuthConnector.ts",children:"DefaultAuthConnector"}),"\nin ",(0,r.jsx)(t.code,{children:"@backstage/core-app-api"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Component and APIs can request Access or ID Tokens from any available Auth\nprovider. If there already exists a cached fresh token that covers (at least)\nthe requested scopes, it will be returned immediately. If the OAuth provider\nimplements token refreshes, this check will also trigger a token refresh attempt\nif no session is available."}),"\n",(0,r.jsx)(t.p,{children:"If new scopes are requested, or the user is not yet logged in with that\nprovider, a dialog is shown informing the user that they need to log in with the\nspecified provider. If the user agrees to continue, a separate popup window is\nopened that implements the entire consent flow."}),"\n",(0,r.jsxs)(t.p,{children:["The popup window is pointed to the ",(0,r.jsx)(t.code,{children:"/start"})," endpoint of the auth provider in the\n",(0,r.jsx)(t.code,{children:"auth-backend"})," plugin, which then redirects to the OAuth consent screen of the\nprovider. The consent screen is controlled by the OAuth provider, and will do\nthings like prompting the user to log in with an account, and possibly reviewing\nthe set of requested scopes. If the login request is accepted, the popup window\nwill be redirected back to the ",(0,r.jsx)(t.code,{children:"/handler/frame"})," endpoint of the auth backend.\nThe redirect URL will contain a short-term authorization code, which is picked\nup by the backend and exchanged for long-term tokens via a call to the OAuth\nprovider. The Access and possibly ID Token is then handed back to the main\nBackstage page via ",(0,r.jsx)(t.code,{children:"postMessage"}),". If the OAuth provider implements offline\nrefresh, a refresh token will be stored in an HTTP-only cookie scoped to the\nspecific provider in the ",(0,r.jsx)(t.code,{children:"auth-backend"})," plugin."]}),"\n",(0,r.jsxs)(t.p,{children:["To protect against certain attacks, the above flow also includes a simple nonce\ncheck and a lightweight CSRF protection header. The nonce check is done to\nprotect against attacks where an attacker tricks a user to log in with an\naccount of the attacker's choosing in order to gather data. In the first part of\nthe flow where the popup is directed to the ",(0,r.jsx)(t.code,{children:"/start"})," endpoint, a nonce is\ngenerated and placed in both a cookie and the OAuth state. The nonces received\nin the cookie and OAuth state in the redirect handler are then checked, and the\nauth attempt will fail if they're not valid. The CSRF protection for the\n",(0,r.jsx)(t.code,{children:"/refresh"})," and ",(0,r.jsx)(t.code,{children:"/logout"})," endpoints is implemented by simply checking for the\npresence of a ",(0,r.jsx)(t.code,{children:"X-Requested-With"})," header."]}),"\n",(0,r.jsxs)(t.p,{children:["The target origin of the ",(0,r.jsx)(t.code,{children:"postMessage"})," is also of importance to keep the flow\nsecure. It is configured to a single value for each auth provider and\nenvironment. Without a single configured origin, any page could open a popup and\nrequest an access token."]}),"\n",(0,r.jsx)(t.h3,{id:"sequence-diagram",children:"Sequence Diagram"}),"\n",(0,r.jsx)(t.p,{children:"The following diagram visualizes the flow described in the previous section."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Sequence Diagram",src:n(938203).Z+"",width:"1214",height:"1145"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},938203:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/oauth-popup-flow-7431baabe02096c65743ce4eb4b4cd5a.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))n.call(a,u)&&(s[u]=a[u]);if(t){i=t(a);for(var h=0;h<i.length;h++)r.call(a,i[h])&&(s[i[h]]=a[i[h]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,h=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(h=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:h,props:a,_owner:i.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,c=60112;t.Suspense=60113;var u=60115,h=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),i=l("react.provider"),s=l("react.context"),c=l("react.forward_ref"),t.Suspense=l("react.suspense"),u=l("react.memo"),h=l("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function m(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var v=b.prototype=new m;v.constructor=b,r(v,y.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!j.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),h=0;h<c;h++)u[h]=arguments[h+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:k.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===r?"."+x(c,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(_,"$&/")+"/"),C(i,t,n,"",(function(e){return e}))):null!=i&&(A(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var h=r+x(s=e[u],u);c+=C(s,t,n,h,i)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),u=0;!(s=e.next()).done;)c+=C(s=s.value,t,n,h=r+x(s,u++),i);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function I(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function q(){var e=S.current;if(null===e)throw Error(p(321));return e}var P={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var a=r({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(h in t)w.call(t,h)&&!j.hasOwnProperty(h)&&(a[h]=void 0===t[h]&&void 0!==u?u[h]:t[h])}var h=arguments.length-2;if(1===h)a.children=n;else if(1<h){u=Array(h);for(var l=0;l<h;l++)u[l]=arguments[l+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:s,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),r.createElement(o.Provider,{value:s},t)}}}]);