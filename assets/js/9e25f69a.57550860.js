/*! For license information please see 9e25f69a.57550860.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[879939],{926180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(824246),r=t(511151);const s={id:"addons",title:"TechDocs Addons",description:"How to find, use, or create TechDocs Addons."},a=void 0,i={unversionedId:"features/techdocs/addons",id:"features/techdocs/addons",title:"TechDocs Addons",description:"How to find, use, or create TechDocs Addons.",source:"@site/../docs/features/techdocs/addons.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/addons",permalink:"/docs/features/techdocs/addons",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/addons.md",tags:[],version:"current",frontMatter:{id:"addons",title:"TechDocs Addons",description:"How to find, use, or create TechDocs Addons."},sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/features/techdocs/concepts"},next:{title:"TechDocs Architecture",permalink:"/docs/features/techdocs/architecture"}},c={},d=[{value:"Concepts",id:"concepts",level:2},{value:"Addons",id:"addons",level:3},{value:"Locations",id:"locations",level:3},{value:"Addon Registry",id:"addon-registry",level:3},{value:"Installing and using Addons",id:"installing-and-using-addons",level:2},{value:"Available Addons",id:"available-addons",level:2},{value:"Creating an Addon",id:"creating-an-addon",level:2},{value:"Addons in the Content location",id:"addons-in-the-content-location",level:3},{value:"Testing Addons",id:"testing-addons",level:3}];function l(e){const n=Object.assign({h2:"h2",p:"p",h3:"h3",code:"code",ul:"ul",li:"li",a:"a",img:"img",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ol:"ol"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"concepts",children:"Concepts"}),"\n",(0,o.jsx)(n.p,{children:"TechDocs is a centralized platform for publishing, viewing, and discovering\ntechnical documentation across an entire organization. It's a solid foundation!\nBut it doesn't solve higher-order documentation needs on its own: how do you\ncreate and reinforce a culture of documentation? How do you build trust in the\nquality of technical documentation?"}),"\n",(0,o.jsx)(n.p,{children:"TechDocs Addons are a mechanism by which you can customize the TechDocs\nexperience in order to try and address some of these higher-order needs."}),"\n",(0,o.jsx)(n.h3,{id:"addons",children:"Addons"}),"\n",(0,o.jsx)(n.p,{children:"An Addon is just a react component. Like any react component, it can retrieve\nand render data using normal Backstage or native hooks, APIs, and components.\nProps can be used to configure its behavior, where appropriate."}),"\n",(0,o.jsx)(n.h3,{id:"locations",children:"Locations"}),"\n",(0,o.jsxs)(n.p,{children:["Addons declare a ",(0,o.jsx)(n.code,{children:"location"})," where they will be rendered. Most locations are\nrepresentative of physical spaces in the TechDocs UI:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Header"}),": For Addons which fill up the header from the right, on the same\nline as the title."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Subheader"}),": For Addons that sit below the header but above all content.\nThis is a great location for tooling/configuration of TechDocs display."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Settings"}),": These addons are items added to the settings menu list and are designed to make\nthe reader experience customizable, for example accessibility options."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"PrimarySidebar"}),": Left of the content, above of the navigation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SecondarySidebar"}),": Right of the content, above the table of contents."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Content"}),": A special location intended for Addons which augment the\nstatically generated content of the documentation itself."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Component"}),": A ",(0,o.jsx)(n.a,{href:"https://github.com/backstage/backstage/issues/11109",children:"proposed-but-not-yet-implemented"}),"\nvirtual location, aimed at simplifying a common type of Addon."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"TechDocs Addon Location Guide",src:t(573024).Z+"",width:"3582",height:"1968"})}),"\n",(0,o.jsx)(n.h3,{id:"addon-registry",children:"Addon Registry"}),"\n",(0,o.jsxs)(n.p,{children:["The installation and configuration of Addons happens within a Backstage app's\nfrontend. Addons are imported from plugins and added underneath a registry\ncomponent called ",(0,o.jsx)(n.code,{children:"<TechDocsAddons>"}),". This registry can be configured for both\nthe TechDocs Reader page as well as the Entity docs page."]}),"\n",(0,o.jsx)(n.p,{children:"Addons are rendered in the order in which they are registered."}),"\n",(0,o.jsx)(n.h2,{id:"installing-and-using-addons",children:"Installing and using Addons"}),"\n",(0,o.jsxs)(n.p,{children:["To start using Addons you need to add the ",(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})," package to your app. You can do that by running this command from the root of your project: ",(0,o.jsx)(n.code,{children:"yarn add --cwd packages/app @backstage/plugin-techdocs-module-addons-contrib"})]}),"\n",(0,o.jsxs)(n.p,{children:["Addons can be installed and configured in much the same way as extensions for\nother Backstage plugins: by adding them underneath an extension registry\ncomponent (",(0,o.jsx)(n.code,{children:"<TechDocsAddons>"}),") under the route representing the TechDocs Reader\npage in your ",(0,o.jsx)(n.code,{children:"App.tsx"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// packages/app/src/App.tsx\n\nimport { TechDocsReaderPage } from '@backstage/plugin-techdocs';\nimport { TechDocsAddons } from '@backstage/plugin-techdocs-react/alpha';\nimport { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';\n\n// ...\n\n<Route path=\"/docs/:namespace/:kind/:name/*\" element={<TechDocsReaderPage />}>\n  <TechDocsAddons>\n    <ReportIssue />\n    {/* Other addons can be added here. */}\n  </TechDocsAddons>\n</Route>;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you are using a custom ",(0,o.jsx)(n.a,{href:"/docs/features/techdocs/how-to-guides#how-to-customize-the-techdocs-reader-page",children:"TechDocs reader page"})," your setup will be very similar, here's an example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'<Route path="/docs/:namespace/:kind/:name/*" element={<TechDocsReaderPage />}>\n  <TechDocsAddons>\n    <ReportIssue />\n    {/* Other addons can be added here. */}\n  </TechDocsAddons>\n  {techDocsPage} // This is your custom TechDocs reader page\n</Route>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The process for configuring Addons on the documentation tab on the entity page\nis very similar; instead of adding the ",(0,o.jsx)(n.code,{children:"<TechDocsAddons>"})," registry under a\n",(0,o.jsx)(n.code,{children:"<Route>"}),", you'd add it as a child of ",(0,o.jsx)(n.code,{children:"<EntityTechdocsContent />"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// packages/app/src/components/catalog/EntityPage.tsx\n\nimport { EntityLayout } from '@backstage/plugin-catalog';\nimport { EntityTechdocsContent } from '@backstage/plugin-techdocs';\nimport { TechDocsAddons } from '@backstage/plugin-techdocs-react/alpha';\nimport { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';\n\n// ...\n\n<EntityLayout.Route path=\"/docs\" title=\"Docs\">\n  <EntityTechdocsContent>\n    <TechDocsAddons>\n      <ReportIssue />\n      {/* Other addons can be added here. */}\n    </TechDocsAddons>\n  </EntityTechdocsContent>\n</EntityLayout.Route>;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that on the entity page, because the Catalog plugin is responsible for the\npage header, TechDocs Addons whose location is ",(0,o.jsx)(n.code,{children:"Header"})," will not be rendered."]}),"\n",(0,o.jsx)(n.h2,{id:"available-addons",children:"Available Addons"}),"\n",(0,o.jsx)(n.p,{children:"Addons can, in principle, be provided by any plugin! To make it easier to\ndiscover available Addons, we've compiled a list of them here:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Addon"}),(0,o.jsx)(n.th,{children:"Package/Plugin"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://backstage.io/docs/reference/plugin-techdocs-module-addons-contrib.expandablenavigation",children:(0,o.jsx)(n.code,{children:"<ExpandableNavigation />"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})}),(0,o.jsx)(n.td,{children:"Allows TechDocs users to expand or collapse the entire TechDocs main navigation, and keeps the user's preferred state between documentation sites."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://backstage.io/docs/reference/plugin-techdocs-module-addons-contrib.reportissue",children:(0,o.jsx)(n.code,{children:"<ReportIssue />"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})}),(0,o.jsx)(n.td,{children:"Allows TechDocs users to select a portion of text on a TechDocs page and open an issue against the repository that contains the documentation, populating the issue description with the selected text according to a configurable template."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://backstage.io/docs/reference/plugin-techdocs-module-addons-contrib.textsize",children:(0,o.jsx)(n.code,{children:"<TextSize />"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})}),(0,o.jsx)(n.td,{children:"This TechDocs addon allows users to customize text size on documentation pages, they can select how much they want to increase or decrease the font size via slider or buttons. The default value for font size is 100% and this setting is kept in the browser's local storage whenever it is changed."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://backstage.io/docs/reference/plugin-techdocs-module-addons-contrib.lightbox",children:(0,o.jsx)(n.code,{children:"<LightBox />"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})}),(0,o.jsx)(n.td,{children:"This TechDocs addon allows users to open images in a light-box on documentation pages, they can navigate between images if there are several on one page. The image size of the light-box image is the same as the image size on the document page."})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Got an Addon to contribute? Feel free to add a row above!"}),"\n",(0,o.jsx)(n.h2,{id:"creating-an-addon",children:"Creating an Addon"}),"\n",(0,o.jsx)(n.p,{children:"The simplest Addons are plain old react components that get rendered in\nspecific locations within a TechDocs site. To package such a react component as\nan Addon, follow these steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Write the component in your plugin like any other component"}),"\n",(0,o.jsx)(n.li,{children:"Create, provide, and export the component from your plugin"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// plugins/your-plugin/src/plugin.ts\n\nimport {\n  createTechDocsAddonExtension,\n  TechDocsAddonLocations,\n} from '@backstage/plugin-techdocs-react/alpha';\nimport { CatGifComponent, CatGifComponentProps } from './addons';\n\n// ...\n\n// You must \"provide\" your Addon, just like any extension, via your plugin.\nexport const CatGif = yourPlugin.provide(\n  // This function \"creates\" the Addon given a component and location. If your\n  // component can be configured via props, pass the prop type here too.\n  createTechDocsAddonExtension<CatGifComponentProps>({\n    name: 'CatGif',\n    location: TechDocsAddonLocations.Header,\n    component: CatGifComponent,\n  }),\n);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"addons-in-the-content-location",children:"Addons in the Content location"}),"\n",(0,o.jsx)(n.p,{children:"Beyond the \"render a component in a region\" use-case, it's also possible for\nAddons to access and manipulate a TechDocs site's DOM; this could be used to,\nfor example, load and instantiate client-side diagramming libraries, replace\nelements with dynamically loaded content, etc."}),"\n",(0,o.jsxs)(n.p,{children:["This type of Addon is still expressed as a react component, but instead of\nreturning a react element to be rendered, it updates the DOM via side-effects\n(e.g. with ",(0,o.jsx)(n.code,{children:"useEffect"}),"). Access to the DOM is made available via utility hooks\nprovided by the Addon framework."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// plugins/your-plugin/src/addons/MakeAllImagesCatGifs.tsx\n\nimport React, { useEffect } from 'react';\nimport { useShadowRootElements } from '@backstage/plugin-techdocs-react/alpha';\n\n// This is a normal react component; in order to make it an Addon, you would\n// still create and provide it via your plugin as described above. The only\n// difference is that you'd set `location` to `TechDocsAddonLocations.Content`.\nexport const MakeAllImagesCatGifsAddon = () => {\n  // This hook can be used to get references to specific elements. If you need\n  // access to the whole shadow DOM, use the the underlying useShadowRoot()\n  // hook instead.\n  const images = useShadowRootElements<HTMLImageElement>(['img']);\n\n  useEffect(() => {\n    images.forEach(img => {\n      if (img.src !== 'https://example.com/cat.gif') {\n        img.src = 'https://example.com/cat.gif';\n      }\n    });\n  }, [images]);\n\n  // Nothing to render directly, so we can just return null.\n  return null;\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"testing-addons",children:"Testing Addons"}),"\n",(0,o.jsxs)(n.p,{children:["Install ",(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-addons-test-utils"})," as a ",(0,o.jsx)(n.code,{children:"devDependency"})," in\nyour plugin for access to utilities that make testing such Addons easier."]}),"\n",(0,o.jsx)(n.p,{children:"A test for the above Addon might look something like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// plugins/your-plugin/src/addons/MakeAllImagesCatGifs.test.tsx\nimport { TechDocsAddonTester } from '@backstage/plugin-techdocs-addons-test-utils';\n\n// Note: import your actual addon (the one provided by your plugin).\nimport { MakeAllImagesCatGifs } from '../plugin.ts';\n\ndescribe('MakeAllImagesCatGifs', () => {\n  it('replaces img srcs with cat gif', async () => {\n    const { getByTestId } = await TechDocsAddonTester.buildAddonsInTechDocs([\n      <MakeAllImagesCatGifs />,\n    ])\n      .withDom(<img data-testid=\"fixture\" src=\"http://example.com/dog.jpg\" />)\n      .renderWithEffects();\n\n    expect(getByTestId('fixture')).toHaveAttribute(\n      'src',\n      'https://example.com/cat.gif',\n    );\n  });\n});\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},573024:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/addon-locations-684d47051de7f2b16c25d8354d4f1f2f.png"},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(e,r){for(var s,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var d in s=Object(arguments[c]))t.call(s,d)&&(i[d]=s[d]);if(n){a=n(s);for(var l=0;l<a.length;l++)o.call(s,a[l])&&(i[a[l]]=s[a[l]])}}return i}},371426:(e,n,t)=>{t(862525);var o=t(827378),r=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;r=s("react.element"),n.Fragment=s("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,s={},d=null,l=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,o)&&!c.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:r,type:e,key:d,ref:l,props:s,_owner:a.current}}n.jsx=d,n.jsxs=d},541535:(e,n,t)=>{var o=t(862525),r=60103,s=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,i=60110,c=60112;n.Suspense=60113;var d=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;r=u("react.element"),s=u("react.portal"),n.Fragment=u("react.fragment"),n.StrictMode=u("react.strict_mode"),n.Profiler=u("react.profiler"),a=u("react.provider"),i=u("react.context"),c=u("react.forward_ref"),n.Suspense=u("react.suspense"),d=u("react.memo"),l=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}function y(){}function x(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var b=x.prototype=new y;b.constructor=x,o(b,m.prototype),b.isPureReactComponent=!0;var j={current:null},v=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var o,s={},a=null,i=null;if(null!=n)for(o in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(a=""+n.key),n)v.call(n,o)&&!A.hasOwnProperty(o)&&(s[o]=n[o]);var c=arguments.length-2;if(1===c)s.children=t;else if(1<c){for(var d=Array(c),l=0;l<c;l++)d[l]=arguments[l+2];s.children=d}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:r,type:e,key:a,ref:i,props:s,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var T=/\/+/g;function D(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function _(e,n,t,o,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case s:c=!0}}if(c)return a=a(c=e),e=""===o?"."+D(c,0):o,Array.isArray(a)?(t="",null!=e&&(t=e.replace(T,"$&/")+"/"),_(a,n,t,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),n.push(a)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var d=0;d<e.length;d++){var l=o+D(i=e[d],d);c+=_(i,n,t,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),d=0;!(i=e.next()).done;)c+=_(i=i.value,n,t,l=o+D(i,d++),a);else if("object"===i)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return c}function C(e,n,t){if(null==e)return e;var o=[],r=0;return _(e,o,"","",(function(e){return n.call(t,e,r++)})),o}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function O(){var e=R.current;if(null===e)throw Error(p(321));return e}var S={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:o};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(p(143));return e}},n.Component=m,n.PureComponent=x,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var s=o({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,c=j.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(l in n)v.call(n,l)&&!A.hasOwnProperty(l)&&(s[l]=void 0===n[l]&&void 0!==d?d[l]:n[l])}var l=arguments.length-2;if(1===l)s.children=t;else if(1<l){d=Array(l);for(var u=0;u<l;u++)d[u]=arguments[u+2];s.children=d}return{$$typeof:r,type:e.type,key:a,ref:i,props:s,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:i,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return O().useCallback(e,n)},n.useContext=function(e,n){return O().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return O().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return O().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return O().useLayoutEffect(e,n)},n.useMemo=function(e,n){return O().useMemo(e,n)},n.useReducer=function(e,n,t){return O().useReducer(e,n,t)},n.useRef=function(e){return O().useRef(e)},n.useState=function(e){return O().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>s});var o=t(667294);const r=o.createContext({});function s(e){const n=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:s(e),o.createElement(r.Provider,{value:i},n)}}}]);