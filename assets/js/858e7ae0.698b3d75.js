/*! For license information please see 858e7ae0.698b3d75.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[497305],{472368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(785893),s=n(511151);const o={title:"Switching out the Software Templates Sandbox",author:"Ben Lambert",authorURL:"https://github.com/benjdlambert",authorImageURL:"https://avatars.githubusercontent.com/u/3645856?v=4"},r=void 0,i={permalink:"/blog/2023/06/21/switching-out-sandbox",source:"@site/blog/2023-06-21-switching-out-sandbox.mdx",title:"Switching out the Software Templates Sandbox",description:"TL;DR: For the Backstage maintainers, ensuring that the project is highly secure for every adopter and end-user is one of our top priorities. With the recent vulnerabilities in the vm2 sandbox we have decided to move away from vm2 and use isolated-vm instead, in order to ensure the security of the Backstage end-users.",date:"2023-06-21T00:00:00.000Z",formattedDate:"June 21, 2023",tags:[],readingTime:3.53,hasTruncateMarker:!0,authors:[{name:"Ben Lambert",url:"https://github.com/benjdlambert",imageURL:"https://avatars.githubusercontent.com/u/3645856?v=4"}],frontMatter:{title:"Switching out the Software Templates Sandbox",author:"Ben Lambert",authorURL:"https://github.com/benjdlambert",authorImageURL:"https://avatars.githubusercontent.com/u/3645856?v=4"},unlisted:!1,prevItem:{title:"Adopter Spotlight: How Stash simplified monitoring, ownership and true app health with microservices",permalink:"/blog/2023/07/08/stash-adopter-post"},nextItem:{title:"Welcome: Backstage Deploy CLI (Alpha)",permalink:"/blog/2023/05/06/backstage-deploy-alpha"}},h={authorsImageUrls:[void 0]},d=[{value:"A quick download on templating strings",id:"a-quick-download-on-templating-strings",level:2},{value:"Why the change?",id:"why-the-change",level:2},{value:"What does this mean for Backstage?",id:"what-does-this-mean-for-backstage",level:2},{value:"What do you need to do?",id:"what-do-you-need-to-do",level:2}];function c(e){const t=Object.assign({p:"p",strong:"strong",code:"code",img:"img",h2:"h2",a:"a",pre:"pre"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"TL;DR"}),": For the Backstage maintainers, ensuring that the project is highly secure for every adopter and end-user is one of our top priorities. With the recent vulnerabilities in the ",(0,a.jsx)(t.code,{children:"vm2"})," sandbox we have decided to move away from ",(0,a.jsx)(t.code,{children:"vm2"})," and use ",(0,a.jsx)(t.code,{children:"isolated-vm"})," instead, in order to ensure the security of the Backstage end-users."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Backstage Security Audit &amp; Updates",src:n(173226).Z+"",width:"1200",height:"630"})}),"\n","\n",(0,a.jsx)(t.h2,{id:"a-quick-download-on-templating-strings",children:"A quick download on templating strings"}),"\n",(0,a.jsxs)(t.p,{children:["When using ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates",children:"Software Templates"}),", we allow template authors to ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/writing-templates/#the-templating-syntax",children:"write advanced templating strings"})," when composing actions together like the following:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"- id: template\n  name: Fetch Skeleton + Template\n  action: fetch:template\n  input:\n    url: ./skeleton\n    copyWithoutRender:\n      - .github/workflows/*\n    values:\n      // highlight-start\n      component_id: ${{ parameters.component_id }}\n      description: ${{ parameters.description }}\n      destination: ${{ parameters.repoUrl | parseRepoUrl }}\n      owner: ${{ parameters.owner }}\n      // highlight-end\n"})}),"\n",(0,a.jsxs)(t.p,{children:["These parts that are wrapped with ",(0,a.jsx)(t.code,{children:"${{ \u2026 }}"})," are evaluated by the Software Templates backend plugin.\nThe template strings provide a rich API that enables template authors to manipulate the parameters provided by users of the templates and to pass the parameters into both the built in filters and custom filters that template authors provided when configuring the plugin."]}),"\n",(0,a.jsxs)(t.p,{children:["This templating language is called ",(0,a.jsx)(t.a,{href:"https://github.com/mozilla/nunjucks",children:"Nunjucks"}),", which is based on ",(0,a.jsx)(t.a,{href:"https://pypi.org/project/Jinja2",children:"Jinja2"}),", both of which are popular templating engines.\nUnder the hood these templating strings compile into JavaScript. The ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/overview/threat-model/",children:"Backstage Threat Model"})," treats the code provided by the template language as untrusted, so adopters need a safe environment \u2013 a sandbox \u2013 to execute the JavaScript in.\nUp until the latest Backstage release, that sandbox was ",(0,a.jsx)(t.code,{children:"vm2"}),". Now, the project is instead using ",(0,a.jsx)(t.code,{children:"isolated-vm"})," as the sandbox to execute this JavaScript in."]}),"\n",(0,a.jsx)(t.h2,{id:"why-the-change",children:"Why the change?"}),"\n",(0,a.jsxs)(t.p,{children:["You might have seen over the last few months ",(0,a.jsx)(t.a,{href:"https://github.com/patriksimek/vm2/security/advisories",children:"some advisories and CVEs"})," that were found in the original ",(0,a.jsx)(t.a,{href:"https://github.com/patriksimek/vm2",children:(0,a.jsx)(t.code,{children:"vm2"})})," sandbox that we were using.\nBoth the ",(0,a.jsx)(t.code,{children:"vm2"})," maintainers and the Backstage maintainers have been quick at releasing new versions of the sandbox and the Software Templates backend plugin, respectively, to protect their users."]}),"\n",(0,a.jsxs)(t.p,{children:["We were recently made aware of another sandbox escape through our HackerOne BugBounty program, with a Proof of Concept using a Software Template.\nThe maintainers of the ",(0,a.jsx)(t.code,{children:"vm2"})," project have also been notified. We currently cannot find a simple solution to stop the latest escape. So, In the interest of moving quickly to protect the security of our end-users, we're moving away from that ",(0,a.jsx)(t.code,{children:"vm2"})," and moving towards ",(0,a.jsx)(t.a,{href:"https://github.com/laverdet/isolated-vm",children:(0,a.jsx)(t.code,{children:"isolated-vm"})})," instead."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"vm2"})," has been one of the most popular sandboxes to-date, and we want to thank the ",(0,a.jsx)(t.code,{children:"vm2"})," maintainers for the recent sandbox escape fixes and getting those shipped as fast as possible."]}),"\n",(0,a.jsx)(t.h2,{id:"what-does-this-mean-for-backstage",children:"What does this mean for Backstage?"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"isolated-vm"})," uses a quite different implementation and security model compared to ",(0,a.jsx)(t.code,{children:"vm2"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["It is a native dependency and executes code in a ",(0,a.jsx)(t.code,{children:"v8"})," engine so-called ",(0,a.jsx)(t.code,{children:"isolate"})," instead. This means that by design, it does not have any access to neither the node runtime nor any frameworks on top of ",(0,a.jsx)(t.code,{children:"v8"}),", which is precisely what we want to ensure in our sandbox."]}),"\n",(0,a.jsxs)(t.p,{children:["This method of sandboxing is much more secure than how the ",(0,a.jsx)(t.code,{children:"vm2"})," sandbox functions, and less prone to escapes."]}),"\n",(0,a.jsx)(t.p,{children:"While we can rest assured that this is a highly secure sandbox, the native dependency might mean there's a little more burden on adopters to install this dependency properly and have the right libraries set up.\nThis native dependency must be built upon installation, on the exact architecture that it executes on."}),"\n",(0,a.jsxs)(t.p,{children:["For those who compile and run Backstage on stripped-down environments, you will want to ensure that you have the build basics present, e.g. ",(0,a.jsx)(t.code,{children:"build-essential"})," or similar corresponding to your operating system of choice.\nThe ",(0,a.jsx)(t.code,{children:"isolated-vm"})," repo has ",(0,a.jsx)(t.a,{href:"https://github.com/laverdet/isolated-vm#requirements",children:"some further information"})," about the build environment requirements."]}),"\n",(0,a.jsx)(t.p,{children:"With all that said, we think this tradeoff is worth the effort to ensure better security."}),"\n",(0,a.jsx)(t.h2,{id:"what-do-you-need-to-do",children:"What do you need to do?"}),"\n",(0,a.jsx)(t.p,{children:"This change comes with the v1.15.0 release of Backstage that was released yesterday, so please make sure you are upgraded to the latest version of Backstage to keep your sandbox environments secure."}),"\n",(0,a.jsxs)(t.p,{children:["For more guidance on how to upgrade, check out the documentation for ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If you have any further questions you can either reach out to us in the ",(0,a.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"}),", or in the ",(0,a.jsx)(t.a,{href:"https://info.backstage.spotify.com/office-hours",children:"office hours"}),"."]})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},675251:(e,t,n)=>{n(727418);var a=n(667294),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;s=o("react.element"),t.Fragment=o("react.fragment")}var r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,h={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,o={},d=null,c=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,a)&&!h.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:c,props:o,_owner:r.current}}t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},173226:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/backstage-security-audit-d0283e8fb2fc980642fd9b4be7057cf5.png"},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>o});var a=n(667294);const s=a.createContext({});function o(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:o(e),a.createElement(s.Provider,{value:i},t)}}}]);