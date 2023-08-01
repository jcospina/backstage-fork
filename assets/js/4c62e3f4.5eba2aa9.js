/*! For license information please see 4c62e3f4.5eba2aa9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[407620],{867154:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(785893),a=i(511151);const o={title:"Announcing the Backstage Stability Index",author:"Patrik Oldsberg, Spotify",authorURL:"https://github.com/Rugvip"},r=void 0,s={permalink:"/blog/2020/12/22/stability-index",source:"@site/blog/2020-12-22-stability-index.mdx",title:"Announcing the Backstage Stability Index",description:"2022-01 update: The stability is now replaced by the versioning policy.",date:"2020-12-22T00:00:00.000Z",formattedDate:"December 22, 2020",tags:[],readingTime:3.72,hasTruncateMarker:!0,authors:[{name:"Patrik Oldsberg, Spotify",url:"https://github.com/Rugvip"}],frontMatter:{title:"Announcing the Backstage Stability Index",author:"Patrik Oldsberg, Spotify",authorURL:"https://github.com/Rugvip"},unlisted:!1,prevItem:{title:"New Backstage feature: Kubernetes for Service owners",permalink:"/blog/2021/01/12/new-backstage-feature-kubernetes-for-service-owners"},nextItem:{title:"New Cost Insights plugin: The engineer\u2019s solution to taming cloud costs",permalink:"/blog/2020/10/22/cost-insights-plugin"}},c={authorsImageUrls:[void 0]},l=[{value:"The Stability Index",id:"the-stability-index",level:2},{value:"Staying up to date",id:"staying-up-to-date",level:2},{value:"Impact",id:"impact",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",strong:"strong",img:"img",h2:"h2",ul:"ul",li:"li",code:"code"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["2022-01 update: The stability is now replaced by the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning policy"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"TL;DR"})," Backstage is heading out of alpha and moving onto the path to stable releases and an eventual version 1.0. As the community and ecosystem continue to grow at an increasing rate, we want to provide a solid foundation for everyone building things in, with, and around Backstage. So, today we\u2019re introducing the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"Stability Index"})," \u2014 a simple way to find out how likely (or unlikely) a specific package or plugin inside Backstage might be updated with major changes. By indicating the reliability of key features and APIs, this quick reference will help contributors and adopters better plan and coordinate their development efforts going forward."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Animation cycling between stability index scores",src:i(49650).Z+"",width:"1600",height:"900"})}),"\n","\n",(0,n.jsx)(t.p,{children:"Backstage has a great and growing community of users and contributors. With so much valuable feedback, this inevitably means that sometimes we will go back and revise design decisions that introduce breaking changes. Furthermore, as we continue to ship new features and systems, we\u2019ll continue this cycle of iterating, gathering feedback, and iterating again before reaching a stable API."}),"\n",(0,n.jsx)(t.p,{children:"This rapid evolution can create uncertainty around which parts of the project are considered stable and which are not. Regardless of whether you're contributing to the project directly, setting up your own Backstage, or building plugins, you will be using various parts of the project that vary in stability. While many API surfaces of Backstage are reasonably solid and are unlikely to see any big breaking changes, others are more unstable or experimental."}),"\n",(0,n.jsx)(t.h2,{id:"the-stability-index",children:"The Stability Index"}),"\n",(0,n.jsxs)(t.p,{children:["In order to tackle the problem of uncertainty, and help align contributors, we have recently introduced a Stability Index. Inspired by a ",(0,n.jsx)(t.a,{href:"https://nodejs.org/docs/latest-v4.x/api/documentation.html#documentation_stability_index",children:"similar concept with the same name in Node.js"}),", it\u2019s a score assigned to subsets of the project, indicating the level of maturity of the API and the commitment to backwards compatibility. However, because of the current phase of the project, we have used a slightly different implementation. Rather than the score indicating a perceived stability, a higher score is instead a commitment to providing a smoother upgrade path for users, both through better documentation and backwards compatibility. Importantly, the Stability Index does not supersede ",(0,n.jsx)(t.a,{href:"https://semver.org/",children:"semantic versioning"})," (or semver), meaning we will still adhere to semver and only do breaking changes in minor releases as long as we are on 0.x."]}),"\n",(0,n.jsxs)(t.p,{children:["You can find more details about the scores on the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"Stability Index"})," page, but the following is a TL;DR of the 0\u20133 scores:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"0"})," \u2014 There's a changelog entry."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"1"})," \u2014 There's a migration guide."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"2"})," \u2014 Two weeks of deprecation."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"3"})," \u2014 Three months of deprecation."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The Stability Index has been tailored for the phase that the project is currently in, and we do not intend to keep it in place in its current form forever. It is, for example, likely that we in the future will increase the deprecation time limits."}),"\n",(0,n.jsx)(t.h2,{id:"staying-up-to-date",children:"Staying up to date"}),"\n",(0,n.jsx)(t.p,{children:"In addition to the Stability Index, we have also recently adopted a weekly release cadence where we cut new releases every Thursday. Along with the two-week deprecation period of many of the API surfaces in Backstage, there is an excellent opportunity to form a routine to update your own Backstage projects either weekly or biweekly."}),"\n",(0,n.jsxs)(t.p,{children:["In order to make the update process easier, we\u2019ve added a new command to the Backstage CLI that allows you to easily update your project to use the latest Backstage release. The command is called ",(0,n.jsx)(t.code,{children:"version:bump"})," and is executed in the root of your project using the CLI. You can see what it looks like in action below."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Output of the backstage-cli version:bump command",src:i(646180).Z+"",width:"751",height:"635"})}),"\n",(0,n.jsx)(t.h2,{id:"impact",children:"Impact"}),"\n",(0,n.jsxs)(t.p,{children:["The Stability Index has already been active for a couple of weeks, and we have immediately seen an impact on the consideration and care taken when working in parts of the project that we have committed to keeping more stable. Both members of the core maintainer team and contributors from the community have taken care to roll out updates responsibly, with examples such as ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/3524",children:"PR #3524"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/3465",children:"PR #3465"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The core team is working hard to bring more stability to broader parts of Backstage, and engineering it in a way that allows for long-term evolution. There are more learnings to be discovered as we continue evolving Backstage, but we are confident that the Stability Index will allow for a clearer path and a smoother ride for everyone involved!"})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},675251:(e,t,i)=>{i(727418);var n=i(667294),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,i){var n,o={},l=null,d=null;for(n in void 0!==i&&(l=""+i),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:d,props:o,_owner:r.current}}t.jsx=l,t.jsxs=l},785893:(e,t,i)=>{e.exports=i(675251)},49650:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/stability-index-hero-7385c7770a4e9144eb8b0d76a8959303.gif"},646180:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/versions-bump-6005cfb8817c07025ab891beeb9e83d4.png"},511151:(e,t,i)=>{i.d(t,{Zo:()=>s,ah:()=>o});var n=i(667294);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function s({components:e,children:t,disableParentContext:i}){let s;return s=i?"function"==typeof e?e({}):e||r:o(e),n.createElement(a.Provider,{value:s},t)}}}]);