"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[3137],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,i(i({ref:e},u),{},{components:r})):n.createElement(b,i({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8673:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var n=r(3117),a=(r(7294),r(3905));const o={},i="\u901a\u8fc7 Docker \u5b89\u88c5",c={unversionedId:"getting-started/install/install-by-docker",id:"getting-started/install/install-by-docker",title:"\u901a\u8fc7 Docker \u5b89\u88c5",description:"Starcoin \u652f\u6301\u901a\u8fc7 Docker \u8fd0\u884c\u8282\u70b9\uff0c\u5e76\u63d0\u4f9b\u4e86 starcoin \u5e94\u7528\u955c\u50cf\uff0c\u53ef\u4ee5\u76f4\u63a5\u62c9\u53d6\u5230\u672c\u5730\u8fd0\u884c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/01-install/02-install-by-docker.md",sourceDirName:"02-getting-started/01-install",slug:"/getting-started/install/install-by-docker",permalink:"/zh/docs/getting-started/install/install-by-docker",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/01-install/02-install-by-docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ece\u6e90\u7801\u6784\u5efa Starcoin",permalink:"/zh/docs/getting-started/install/build"},next:{title:"Install by Homebrew",permalink:"/zh/docs/getting-started/install/install-by-homebrew"}},l={},s=[{value:"\u62c9\u53d6 Docker \u955c\u50cf",id:"\u62c9\u53d6-docker-\u955c\u50cf",level:2},{value:"\u955c\u50cf tag \u8bf4\u660e",id:"\u955c\u50cf-tag-\u8bf4\u660e",level:2},{value:"\u8fd0\u884c\u68c0\u67e5",id:"\u8fd0\u884c\u68c0\u67e5",level:2},{value:"\u652f\u6301\u7684\u955c\u50cf\u4ed3\u5e93",id:"\u652f\u6301\u7684\u955c\u50cf\u4ed3\u5e93",level:2}],u={toc:s};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u901a\u8fc7-docker-\u5b89\u88c5"},"\u901a\u8fc7 Docker \u5b89\u88c5"),(0,a.kt)("p",null,"Starcoin \u652f\u6301\u901a\u8fc7 Docker \u8fd0\u884c\u8282\u70b9\uff0c\u5e76\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"starcoin")," \u5e94\u7528\u955c\u50cf\uff0c\u53ef\u4ee5\u76f4\u63a5\u62c9\u53d6\u5230\u672c\u5730\u8fd0\u884c\u3002"),(0,a.kt)("h2",{id:"\u62c9\u53d6-docker-\u955c\u50cf"},"\u62c9\u53d6 Docker \u955c\u50cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull starcoin/starcoin:latest\n")),(0,a.kt)("p",null,"Starcoin \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5728\u955c\u50cf\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/starcoin")," \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h2",{id:"\u955c\u50cf-tag-\u8bf4\u660e"},"\u955c\u50cf tag \u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"latest\uff1a\u8868\u793a\u6700\u65b0\u7684 release \u7248\u672c\uff0c\u5305\u62ec pre-release \u7684\u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"v1.10.1\uff1a\u8868\u793a Starcoin \u7684 v1.10.1 \u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"master\uff1a\u8868\u793a\u6839\u636e Starcoin \u6e90\u7801\u4ed3\u5e93 master \u5206\u652f\u6784\u5efa\u51fa\u6765\u7684\u955c\u50cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"sha-7ab632b\uff1a\u8868\u793a\u6839\u636e git commit ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin/commit/7ab632b36a039439d424c83951ca8d2366d311c7"},"7ab632b")," \u6784\u5efa\u7684\u7248\u672c\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"7ab632b")," \u662f\u8be5 commit \u54c8\u5e0c\u7684\u524d 7 \u4f4d\u3002")),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull starcoin/starcoin:v1.10.1\ndocker pull starcoin/starcoin:master\ndocker pull starcoin/starcoin:sha-7ab632b\n")),(0,a.kt)("h2",{id:"\u8fd0\u884c\u68c0\u67e5"},"\u8fd0\u884c\u68c0\u67e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker container run -it starcoin/starcoin:latest bash\n\n# \u6ce8\u610f\uff1a\u5f53\u63d0\u793a\u7b26\u6539\u53d8\uff0c\u8bf4\u660e\u5df2\u6210\u529f\u8fdb\u5165\u4ea4\u4e92\u5f0f\u8fd0\u884c\nroot@4d622b3fc3b4:/# ls\nbin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  starcoin  sys  tmp  usr  var\n\n# \u6210\u529f\u8f93\u51fa\u7248\u672c\u4fe1\u606f\uff0c\u8bf4\u660e\u5b89\u88c5\u6210\u529f\nroot@4d622b3fc3b4:/# ./starcoin/starcoin --version\nstarcoin 1.11.7-rc (build:1.11.7-rc)\n")),(0,a.kt)("h2",{id:"\u652f\u6301\u7684\u955c\u50cf\u4ed3\u5e93"},"\u652f\u6301\u7684\u955c\u50cf\u4ed3\u5e93"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker hub: ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/starcoin/starcoin/"},"https://hub.docker.com/r/starcoin/starcoin/")),(0,a.kt)("li",{parentName:"ul"},"Github package: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin/pkgs/container/starcoin"},"https://github.com/starcoinorg/starcoin/pkgs/container/starcoin"))))}p.isMDXComponent=!0}}]);