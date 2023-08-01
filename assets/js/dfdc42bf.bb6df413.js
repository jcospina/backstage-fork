/*! For license information please see dfdc42bf.bb6df413.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[437439],{801831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(824246),i=t(511151);const o={id:"aws-lightsail",title:"Deploying Backstage on AWS Lightsail",sidebar_label:"AWS Lightsail",description:"How to deploy Backstage on AWS Lightsail"},a=void 0,s={unversionedId:"deployment/backstage-deploy/aws-lightsail",id:"deployment/backstage-deploy/aws-lightsail",title:"Deploying Backstage on AWS Lightsail",description:"How to deploy Backstage on AWS Lightsail",source:"@site/../docs/deployment/backstage-deploy/aws.md",sourceDirName:"deployment/backstage-deploy",slug:"/deployment/backstage-deploy/aws-lightsail",permalink:"/docs/deployment/backstage-deploy/aws-lightsail",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/deployment/backstage-deploy/aws.md",tags:[],version:"current",frontMatter:{id:"aws-lightsail",title:"Deploying Backstage on AWS Lightsail",sidebar_label:"AWS Lightsail",description:"How to deploy Backstage on AWS Lightsail"},sidebar:"docs",previous:{title:"Koyeb",permalink:"/docs/deployment/koyeb"},next:{title:"Design",permalink:"/docs/dls/design"}},c={},l=[{value:"What is AWS Lightsail",id:"what-is-aws-lightsail",level:2},{value:"Creating user in AWS",id:"creating-user-in-aws",level:2},{value:"Configuring the Pulumi CLI",id:"configuring-the-pulumi-cli",level:2},{value:"Deploying your instance on Lightsail",id:"deploying-your-instance-on-lightsail",level:2},{value:"Cleaning up resources",id:"cleaning-up-resources",level:3}];function u(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",code:"code",h2:"h2",admonition:"admonition",a:"a",ul:"ul",li:"li",pre:"pre",h3:"h3"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["DISCLAIMER: The ",(0,r.jsx)(n.code,{children:"deploy"})," command is in alpha and still experimental. Do not use the ",(0,r.jsx)(n.code,{children:"deploy"})," command for production deployments."]})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Getting started with Backstage often involves setting up an instance on a cloud provider and sharing it with your team so they can experiment. To make this cloud deployment easier, we've built a ",(0,r.jsx)(n.code,{children:"deploy"})," command to stand up a proof-of-concept instance on AWS (using Lightsail)."]}),"\n",(0,r.jsx)(n.h2,{id:"what-is-aws-lightsail",children:"What is AWS Lightsail"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["AWS offers a free tier for up to three months on $10 USD/month Container service (Micro -1 node). By default we use the ",(0,r.jsx)(n.code,{children:"nano"})," node, so if you are a new user this approach shouldn't cost you anything. For more information, refer to the ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/lightsail/pricing/",children:"pricing"})," documentation."]})}),"\n",(0,r.jsxs)(n.p,{children:["AWS Lightsail offers a simple way to run containers in the cloud. To learn more about AWS Lightsail, please refer to the ",(0,r.jsx)(n.a,{href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services-deployments",children:"official documentation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"creating-user-in-aws",children:"Creating user in AWS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open the AWS console and navigate to the IAM section"}),"\n",(0,r.jsxs)(n.li,{children:["In the left side menu click on ",(0,r.jsx)(n.code,{children:"Users"})," and then click on ",(0,r.jsx)(n.code,{children:"Add users"})]}),"\n",(0,r.jsxs)(n.li,{children:["Specify a username and then click on ",(0,r.jsx)(n.code,{children:"Next"})]}),"\n",(0,r.jsxs)(n.li,{children:["Afterwards you can assign permissions, select ",(0,r.jsx)(n.code,{children:"Attach policies directly"})," and then click on ",(0,r.jsx)(n.code,{children:"Create policy"}),".\nThis should take you to a new window in which you can create a new policy based on ",(0,r.jsx)(n.code,{children:"JSON"}),".\nCopy over the following:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "VisualEditor0",\n      "Effect": "Allow",\n      "Action": [\n        "ecr:DescribeImageReplicationStatus",\n        "ecr:ListTagsForResource",\n        "ecr:UploadLayerPart",\n        "ecr:BatchGetRepositoryScanningConfiguration",\n        "ecr:DeleteRepository",\n        "ecr:GetRegistryScanningConfiguration",\n        "ecr:CompleteLayerUpload",\n        "ecr:TagResource",\n        "ecr:DescribeRepositories",\n        "ecr:DeleteRepositoryPolicy",\n        "ecr:BatchCheckLayerAvailability",\n        "ecr:GetLifecyclePolicy",\n        "ecr:GetRegistryPolicy",\n        "ecr:PutLifecyclePolicy",\n        "ecr:DescribeImageScanFindings",\n        "ecr:GetLifecyclePolicyPreview",\n        "ecr:CreateRepository",\n        "ecr:DescribeRegistry",\n        "ecr:GetDownloadUrlForLayer",\n        "ecr:GetAuthorizationToken",\n        "ecr:DeleteLifecyclePolicy",\n        "ecr:PutImage",\n        "ecr:UntagResource",\n        "ecr:SetRepositoryPolicy",\n        "ecr:BatchGetImage",\n        "ecr:InitiateLayerUpload",\n        "ecr:GetRepositoryPolicy",\n        "lightsail:CreateContainerService",\n        "lightsail:GetKeyPair",\n        "lightsail:GetContainerServiceDeployments",\n        "lightsail:CreateContainerServiceRegistryLogin",\n        "lightsail:GetContainerImages",\n        "lightsail:UntagResource",\n        "lightsail:RegisterContainerImage",\n        "lightsail:GetContainerServices",\n        "lightsail:GetContainerServicePowers",\n        "lightsail:GetKeyPairs",\n        "lightsail:CreateContainerServiceDeployment",\n        "lightsail:GetContainerServiceMetricData",\n        "lightsail:GetContainerAPIMetadata",\n        "lightsail:DeleteContainerService",\n        "lightsail:GetContainerLog",\n        "lightsail:TagResource"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Sid": "Statement1",\n      "Effect": "Allow",\n      "Action": [],\n      "Resource": []\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Then click on ",(0,r.jsx)(n.code,{children:"Next"})," and give the policy a name and a description of your liking. Afterwards, click on ",(0,r.jsx)(n.code,{children:"Create policy"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate back to the user creation window and press on the refresh button and search for the policy you just created. Now, create the user."}),"\n",(0,r.jsxs)(n.li,{children:["Now you will be redirected to all users, click on the user you just created and click on ",(0,r.jsx)(n.code,{children:"Security credentials"})]}),"\n",(0,r.jsxs)(n.li,{children:["Scroll below and click on ",(0,r.jsx)(n.code,{children:"Create access key"})]}),"\n",(0,r.jsxs)(n.li,{children:["Choose ",(0,r.jsx)(n.code,{children:"Command Line Interface (CLI)"})]}),"\n",(0,r.jsx)(n.li,{children:"Now export the following values"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ export AWS_ACCESS_KEY_ID=... (first value)\n$ export AWS_SECRET_ACCESS_KEY=.... (second secret value)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuring-the-pulumi-cli",children:"Configuring the Pulumi CLI"}),"\n",(0,r.jsxs)(n.p,{children:["Second, install the ",(0,r.jsx)(n.a,{href:"https://www.pulumi.com/docs/get-started/install/",children:"Pulumi CLI"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Then we need to execute the following commands, to set Pulumi up:"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Make sure to store your passphrase somewhere safe as it is used to encrypt/decrypt your Pulumi config."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ pulumi login --local\n$ export PULUMI_CONFIG_PASSPHRASE="<your-secret>"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["By using ",(0,r.jsx)(n.code,{children:"pulumi login --local"})," we are making sure that Pulumi stores our state on the local file disk. The environment variable ",(0,r.jsx)(n.code,{children:"PULUMI_CONFIG_PASSPHRASE"})," is used by Pulumi to generate a unique key for your stack"]}),"\n",(0,r.jsx)(n.h2,{id:"deploying-your-instance-on-lightsail",children:"Deploying your instance on Lightsail"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Make sure that ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/",children:"Docker"})," is running before you start this section."]})}),"\n",(0,r.jsx)(n.p,{children:"After you have made your changes to your local instance, it's time to deploy it on Lightsail."}),"\n",(0,r.jsxs)(n.p,{children:["First, we need to configure a new ",(0,r.jsx)(n.code,{children:"app-config"})," file and update the ",(0,r.jsx)(n.code,{children:"baseUrl"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ touch app-config.deployment.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"And then update the file with the following yaml:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"app:\n  baseUrl: ${BACKSTAGE_HOST}\n\nbackend:\n  baseUrl: ${BACKSTAGE_HOST}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The environment variable ",(0,r.jsx)(n.code,{children:"BACKSTAGE_HOST"})," will be set to the endpoint that AWS Lightsail creates."]}),"\n",(0,r.jsx)(n.p,{children:"Now we can deploy our instance!"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ npx backstage-deploy aws --stack backstage-poc --create-dockerfile\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the first part of the command, we are specifying that we want to deploy our instance on AWS. With the ",(0,r.jsx)(n.a,{href:"https://www.pulumi.com/docs/reference/cli/pulumi_stack/",children:(0,r.jsx)(n.code,{children:"--stack"})})," option, we are providing Pulumi a reference to our container deployment. Furthermore, with the ",(0,r.jsx)(n.code,{children:"--create-dockerfile"})," option, there will be a ",(0,r.jsx)(n.code,{children:"Dockerfile"})," and ",(0,r.jsx)(n.code,{children:".dockerignore"})," created in the root of the project."]}),"\n",(0,r.jsx)(n.p,{children:"After running the command, Pulumi will start creating the following resources for you in AWS:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ECR Repository"}),"\n",(0,r.jsx)(n.li,{children:"Lightsail Container Service"}),"\n",(0,r.jsx)(n.li,{children:"Lightsail Container Service Deployment"}),"\n",(0,r.jsx)(n.li,{children:"Policy that allows Lightsail to pull from ECR"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If it's the first time building the Docker image, it might take a while for everything to be fully provisioned. After the command is finished running, your Backstage instance should be up and running on AWS Lightsail! \ud83c\udf89"}),"\n",(0,r.jsx)(n.h3,{id:"cleaning-up-resources",children:"Cleaning up resources"}),"\n",(0,r.jsx)(n.p,{children:"Cleaning up the resources is also done with the deploy command."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ npx backstage-deploy aws --stack backstage-poc --destroy\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will delete everything that was originally created by the ",(0,r.jsx)(n.code,{children:"deploy"})," command."]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in o=Object(arguments[c]))t.call(o,l)&&(s[l]=o[l]);if(n){a=n(o);for(var u=0;u<a.length;u++)r.call(o,a[u])&&(s[a[u]]=o[a[u]])}}return s}},371426:(e,n,t)=>{t(862525);var r=t(827378),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),n.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,u=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:a.current}}n.jsx=l,n.jsxs=l},541535:(e,n,t)=>{var r=t(862525),i=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,s=60110,c=60112;n.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),o=d("react.portal"),n.Fragment=d("react.fragment"),n.StrictMode=d("react.strict_mode"),n.Profiler=d("react.profiler"),a=d("react.provider"),s=d("react.context"),c=d("react.forward_ref"),n.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||f}function m(){}function j(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var x=j.prototype=new m;x.constructor=j,r(x,g.prototype),x.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,b={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,t){var r,o={},a=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)w.call(n,r)&&!b.hasOwnProperty(r)&&(o[r]=n[r]);var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:v.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g;function _(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function A(e,n,t,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case o:c=!0}}if(c)return a=a(c=e),e=""===r?"."+_(c,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),A(a,n,t,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),n.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+_(s=e[l],l);c+=A(s,n,t,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=A(s=s.value,n,t,u=r+_(s,l++),a);else if("object"===s)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return c}function P(e,n,t){if(null==e)return e;var r=[],i=0;return A(e,r,"","",(function(e){return n.call(t,e,i++)})),r}function R(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var L={current:null};function E(){var e=L.current;if(null===e)throw Error(p(321));return e}var O={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:P,forEach:function(e,n,t){P(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return P(e,(function(){n++})),n},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(p(143));return e}},n.Component=g,n.PureComponent=j,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var o=r({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,c=v.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in n)w.call(n,u)&&!b.hasOwnProperty(u)&&(o[u]=void 0===n[u]&&void 0!==l?l[u]:n[u])}var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=k,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:R}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return E().useCallback(e,n)},n.useContext=function(e,n){return E().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return E().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return E().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return E().useLayoutEffect(e,n)},n.useMemo=function(e,n){return E().useMemo(e,n)},n.useReducer=function(e,n,t){return E().useReducer(e,n,t)},n.useRef=function(e){return E().useRef(e)},n.useState=function(e){return E().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>o});var r=t(667294);const i=r.createContext({});function o(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||a:o(e),r.createElement(i.Provider,{value:s},n)}}}]);