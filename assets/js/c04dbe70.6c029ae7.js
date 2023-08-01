/*! For license information please see c04dbe70.6c029ae7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[202929],{314742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(824246),r=n(511151);const a={id:"creating-and-publishing",title:"Creating and publishing your docs",sidebar_label:"Creating and Publishing Documentation",description:"Guidance on how to create and publish documentation"},i=void 0,s={unversionedId:"features/techdocs/creating-and-publishing",id:"features/techdocs/creating-and-publishing",title:"Creating and publishing your docs",description:"Guidance on how to create and publish documentation",source:"@site/../docs/features/techdocs/creating-and-publishing.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/creating-and-publishing",permalink:"/docs/features/techdocs/creating-and-publishing",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/creating-and-publishing.md",tags:[],version:"current",frontMatter:{id:"creating-and-publishing",title:"Creating and publishing your docs",sidebar_label:"Creating and Publishing Documentation",description:"Guidance on how to create and publish documentation"},sidebar:"docs",previous:{title:"TechDocs Architecture",permalink:"/docs/features/techdocs/architecture"},next:{title:"TechDocs Configuration Options",permalink:"/docs/features/techdocs/configuration"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a basic documentation setup",id:"create-a-basic-documentation-setup",level:2},{value:"Use any software template",id:"use-any-software-template",level:3},{value:"Use the documentation template",id:"use-the-documentation-template",level:3},{value:"Enable documentation for an already existing entity",id:"enable-documentation-for-an-already-existing-entity",level:3},{value:"Writing and previewing your documentation",id:"writing-and-previewing-your-documentation",level:2}];function l(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3",em:"em",strong:"strong",img:"img",code:"code",pre:"pre",blockquote:"blockquote"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This section will guide you through how to:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"#create-a-basic-documentation-setup",children:"Create a basic documentation setup"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#use-any-software-template",children:"Use any software template"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#use-the-documentation-template",children:"Use the documentation template"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#enable-documentation-for-an-already-existing-entity",children:"Enable documentation for an already existing entity"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#writing-and-previewing-your-documentation",children:"Writing and previewing your documentation"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["A working Backstage instance with TechDocs installed (see\n",(0,o.jsx)(t.a,{href:"/docs/features/techdocs/getting-started",children:"TechDocs getting started"}),")"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"create-a-basic-documentation-setup",children:"Create a basic documentation setup"}),"\n",(0,o.jsxs)(t.p,{children:["If you have an existing repository that you'd like to add documentation to, skip\nto the\n",(0,o.jsx)(t.a,{href:"#enable-documentation-for-an-already-existing-entity",children:"Enable documentation for an already existing entity setup"}),"\nsection below. Otherwise, continue reading to create a new software entity\nincluding documentation from scratch."]}),"\n",(0,o.jsx)(t.h3,{id:"use-any-software-template",children:"Use any software template"}),"\n",(0,o.jsxs)(t.p,{children:["TechDocs is built on top of the\n",(0,o.jsx)(t.a,{href:"https://www.docslikecode.com/about/",children:"docs like code approach"}),". This, in short,\nmeans that you should keep documentation close to the code."]}),"\n",(0,o.jsx)(t.p,{children:"Your Backstage app has a set of software templates added by default. All of\nthese software templates include everything you need to get your TechDocs site\nup and running and to start writing your documentation."}),"\n",(0,o.jsxs)(t.p,{children:["If you have created software templates that do not include documentation by\ndefault, we highly recommend you to set that up. Follow our how-to guide\n",(0,o.jsx)(t.a,{href:"/docs/features/techdocs/how-to-guides#how-to-add-the-documentation-setup-to-your-software-templates",children:"How to add documentation setup to your software templates"}),"\nto get started."]}),"\n",(0,o.jsx)(t.h3,{id:"use-the-documentation-template",children:"Use the documentation template"}),"\n",(0,o.jsxs)(t.p,{children:["There could be ",(0,o.jsx)(t.em,{children:"some"})," situations where you don't want to keep your docs close to\nyour code, but still want to publish documentation - for example, an onboarding\ntutorial. For this use case, we have put together a documentation template. Your\nBackstage instance should by default have a documentation template added. If\nnot, copy the catalog locations from the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/create-app/templates/default-app/app-config.yaml.hbs",children:"create-app template"}),"\nto add the documentation template. The template creates a component with\n",(0,o.jsx)(t.strong,{children:"only"})," TechDocs configuration and default markdown files, and is otherwise\nempty."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Documentation Template",src:n(202563).Z+"",width:"2880",height:"1548"})}),"\n",(0,o.jsx)(t.p,{children:"Create an entity from the documentation template and you will get the needed\nsetup for free."}),"\n",(0,o.jsx)(t.h3,{id:"enable-documentation-for-an-already-existing-entity",children:"Enable documentation for an already existing entity"}),"\n",(0,o.jsx)(t.p,{children:"Prerequisites:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["An existing entity\n",(0,o.jsx)(t.a,{href:"/docs/features/software-catalog/#adding-components-to-the-catalog",children:"registered in backstage"}),"\n(e.g. via a ",(0,o.jsx)(t.code,{children:"catalog-info.yaml"})," file)."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Create an ",(0,o.jsx)(t.code,{children:"mkdocs.yml"})," file in the root of your repository with the following\ncontent:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"site_name: 'example-docs'\n\nnav:\n  - Home: index.md\n\nplugins:\n  - techdocs-core\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note - The plugins section above is optional. Backstage automatically adds the ",(0,o.jsx)(t.code,{children:"techdocs-core"})," plugin to the\nmkdocs file if it is missing. This functionality can be turned off with a ",(0,o.jsx)(t.a,{href:"/docs/features/techdocs/configuration",children:"configuration option"})," in Backstage."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Update your component's entity description by adding the following lines to its\n",(0,o.jsx)(t.code,{children:"catalog-info.yaml"})," in the root of its repository:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"metadata:\n  annotations:\n    backstage.io/techdocs-ref: dir:.\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The\n",(0,o.jsxs)(t.a,{href:"/docs/features/software-catalog/well-known-annotations#backstageiotechdocs-ref",children:[(0,o.jsx)(t.code,{children:"backstage.io/techdocs-ref"})," annotation"]}),"\nis used by TechDocs to download the documentation source files for generating an\nentity's TechDocs site."]}),"\n",(0,o.jsxs)(t.p,{children:["Create a ",(0,o.jsx)(t.code,{children:"/docs"})," folder in the root of your repository with at least an\n",(0,o.jsx)(t.code,{children:"index.md"})," file in it. ",(0,o.jsx)(t.em,{children:"(If you add more markdown files, make sure to update the\nnav in the mkdocs.yml file to get a proper navigation for your documentation.)"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note - Although ",(0,o.jsx)(t.code,{children:"docs"})," is a popular directory name for storing documentation,\nit can be renamed to something else and can be configured by ",(0,o.jsx)(t.code,{children:"mkdocs.yml"}),". See\n",(0,o.jsx)(t.a,{href:"https://www.mkdocs.org/user-guide/configuration/#docs_dir",children:"https://www.mkdocs.org/user-guide/configuration/#docs_dir"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"docs/index.md"})," can for example have the following content:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-md",children:"# example docs\n\nThis is a basic example of documentation.\n"})}),"\n",(0,o.jsx)(t.p,{children:"Commit your changes, open a pull request and merge. You will now get your\nupdated documentation next time you run Backstage!"}),"\n",(0,o.jsx)(t.h2,{id:"writing-and-previewing-your-documentation",children:"Writing and previewing your documentation"}),"\n",(0,o.jsxs)(t.p,{children:["Using the ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/techdocs-cli",children:"techdocs-cli"})," you can\npreview your docs inside a local Backstage instance and get live reload on\nchanges. This is useful when you want to preview your documentation while\nwriting."]}),"\n",(0,o.jsx)(t.p,{children:"To do this you can run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd /path/to/docs-repository/\nnpx @techdocs/cli serve\n"})})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},202563:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/documentation-template-c98610015ba2bb1209b3ef9819053b5a.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(e,r){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))n.call(a,u)&&(s[u]=a[u]);if(t){i=t(a);for(var l=0;l<i.length;l++)o.call(a,i[l])&&(s[i[l]]=a[i[l]])}}return s}},371426:(e,t,n)=>{n(862525);var o=n(827378),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;r=a("react.element"),t.Fragment=a("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var o,a={},u=null,l=null;for(o in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:u,ref:l,props:a,_owner:i.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var o=n(862525),r=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;r=d("react.element"),a=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),i=d("react.provider"),s=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),u=d("react.memo"),l=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var x=b.prototype=new y;x.constructor=b,o(x,g.prototype),x.isPureReactComponent=!0;var j={current:null},w=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,o)&&!v.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,o,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case a:c=!0}}if(c)return i=i(c=e),e=""===o?"."+O(c,0):o,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),E(i,t,n,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=o+O(s=e[u],u);c+=E(s,t,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=E(s=s.value,t,n,l=o+O(s,u++),i);else if("object"===s)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function S(e,t,n){if(null==e)return e;var o=[],r=0;return E(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(h(321));return e}var R={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:S,forEach:function(e,t,n){S(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=g,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var a=o({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)w.call(t,l)&&!v.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){u=Array(l);for(var d=0;d<l;d++)u[d]=arguments[d+2];a.children=u}return{$$typeof:r,type:e.type,key:i,ref:s,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>a});var o=n(667294);const r=o.createContext({});function a(e){const t=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),o.createElement(r.Provider,{value:s},t)}}}]);