"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[1431],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,d=k["".concat(p,".").concat(m)]||k[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1828:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const o={},i="StarMask \u5165\u95e8",l={unversionedId:"getting-started/accounts/use-starmask",id:"getting-started/accounts/use-starmask",title:"StarMask \u5165\u95e8",description:"StarMask \u662f\u4e00\u6b3e\u57fa\u4e8e\u6d4f\u89c8\u5668\u6269\u5c55\u7684\u94b1\u5305\uff0c\u5b83\u8fd0\u884c\u5728 Web \u6d4f\u89c8\u5668\uff08Chrome\u3001Firefox \u6216 Edge\uff09\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/03-accounts/05-use-starmask.md",sourceDirName:"02-getting-started/03-accounts",slug:"/getting-started/accounts/use-starmask",permalink:"/zh/docs/getting-started/accounts/use-starmask",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/03-accounts/05-use-starmask.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u91cd\u7f6e\u8d26\u6237\u79c1\u94a5",permalink:"/zh/docs/getting-started/accounts/rotate-authentication-key"},next:{title:"Starcoin \u533a\u5757\u94fe\u6d4f\u89c8\u5668",permalink:"/zh/docs/getting-started/accounts/stc-scan"}},p={},s=[{value:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5",id:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5",level:2},{value:"\u5728\u7ebf\u5b89\u88c5",id:"\u5728\u7ebf\u5b89\u88c5",level:3},{value:"\u79bb\u7ebf\u5b89\u88c5",id:"\u79bb\u7ebf\u5b89\u88c5",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:4},{value:"\u5b89\u88c5 - Chrome",id:"\u5b89\u88c5---chrome",level:4},{value:"\u5b89\u88c5 - Firefox",id:"\u5b89\u88c5---firefox",level:4},{value:"\u5b89\u88c5 - Edge",id:"\u5b89\u88c5---edge",level:4},{value:"\u521b\u5efa\u94b1\u5305",id:"\u521b\u5efa\u94b1\u5305",level:2},{value:"\u4f7f\u7528\u94b1\u5305",id:"\u4f7f\u7528\u94b1\u5305",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"starmask-\u5165\u95e8"},"StarMask \u5165\u95e8"),(0,a.kt)("p",null,"StarMask \u662f\u4e00\u6b3e\u57fa\u4e8e\u6d4f\u89c8\u5668\u6269\u5c55\u7684\u94b1\u5305\uff0c\u5b83\u8fd0\u884c\u5728 Web \u6d4f\u89c8\u5668\uff08Chrome\u3001Firefox \u6216 Edge\uff09\u4e2d\u3002\nStarMask \u662f\u7528\u4e8e\u4e0e Starcoin \u533a\u5757\u94fe\u8fdb\u884c\u4ea4\u4e92\u7684\u8f6f\u4ef6\u52a0\u5bc6\u8d27\u5e01\u94b1\u5305\uff0c\u4f7f\u7528\u8fd9\u4e2a\u94b1\u5305\u548c\u8fdb\u884c\u5404\u9879\u6d4b\u8bd5\u90fd\u5f88\u5bb9\u6613\uff0c\u53ef\u4ee5\u8fde\u63a5\u591a\u79cd Starcoin \u8282\u70b9\u3002\nStarMask \u53ef\u7528\u4e8e\u5b58\u50a8\u548c\u7ba1\u7406 Starcoin \u7684\u94fe\u4e0a\u8d44\u4ea7\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 StarMask \u76f4\u63a5\u53c2\u4e0e Starcoin \u7684\u94fe\u4e0a\u6cbb\u7406\uff0c\u5305\u62ec\u6295\u7968\u3001IDO\u3001SWAP \u7b49\u7b49\u3002"),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5"},"\u4e0b\u8f7d\u4e0e\u5b89\u88c5"),(0,a.kt)("h3",{id:"\u5728\u7ebf\u5b89\u88c5"},"\u5728\u7ebf\u5b89\u88c5"),(0,a.kt)("p",null,"\u5728\u7ebf\u5b89\u88c5\u5373\u4ece Chrome \u5e94\u7528\u5546\u5e97\u5b89\u88c5\uff0c\u76ee\u524d\u4ec5\u652f\u6301 Chrome \u6d4f\u89c8\u5668\uff0c\u5982\u679c\u4f7f\u7528\u5176\u5b83\u6d4f\u89c8\u5668\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"#%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85"},"\u79bb\u7ebf\u5b89\u88c5"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/search/StarMask?hl=zh-CN"},"Chrome \u5e94\u7528\u5546\u5e97"),"\u641c\n\u7d22 ",(0,a.kt)("inlineCode",{parentName:"p"},"StarMask"),"\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u6dfb\u52a0\u81f3 Chrome"),"\uff0c\u5373\u53ef\u5b8c\u6210\u5b89\u88c5\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5982\u4f55\u624b\u52a8\u66f4\u65b0\u94b1\u5305")),(0,a.kt)("p",null,"\u5728 Chrome \u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome://extensions/"),"\uff0c\u5f00\u542f\u9875\u9762\u53f3\u4e0a\u89d2\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5f00\u53d1\u8005\u6a21\u5f0f"),"\u3002\n\u5728\u5f53\u524d\u9875\u7684\u5de6\u4e0a\u65b9\u5c31\u4f1a\u51fa\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"\u66f4\u65b0"),"\u6309\u94ae\uff0c\u70b9\u51fb\u66f4\u65b0\u5373\u53ef\u3002"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u56fe\u6587\u53c2\u8003")),(0,a.kt)("p",null,"\u66f4\u8be6\u7ec6\u7684\u56fe\u6587\u5b89\u88c5\u6b65\u9aa4\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starmask-extension/blob/main/docs/zh/how-to-install.md"},"\u5b89\u88c5\u6307\u5357 - Chrome \u6d4f\u89c8\u5668"),"\u3002"),(0,a.kt)("h3",{id:"\u79bb\u7ebf\u5b89\u88c5"},"\u79bb\u7ebf\u5b89\u88c5"),(0,a.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u79bb\u7ebf\u5b89\u88c5\u5728\u4e3b\u6d41\u7684\u6d4f\u89c8\u5668\uff08Chrome\u3001Firefox \u548c Edge\uff09\u4e2d\u4f7f\u7528 StarMask \u94b1\u5305\u3002"),(0,a.kt)("h4",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,a.kt)("p",null,"\u8bbf\u95ee StarMask \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starmask-extension"},"GitHub \u4ed3\u5e93"),"\uff0c\u4e0b\u8f7d\u5bf9\u5e94\u6d4f\u89c8\u5668\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starmask-extension/releases/latest"},"\u6700\u65b0\u53d1\u5e03\u7248\u672c"),"\u3002"),(0,a.kt)("p",null,"\u6ce8\uff1a\u76ee\u524d\u53d1\u5e03\u7684\u7248\u672c\u6709 Chrome \u7248\u672c \u548c Firefox \u7248\u672c\uff0c\u5bf9\u4e8e Edge \u6d4f\u89c8\u5668\uff0c\u53ef\u4ee5\u6682\u65f6\u4f7f\u7528 Chrome \u7248\u672c\u3002"),(0,a.kt)("h4",{id:"\u5b89\u88c5---chrome"},"\u5b89\u88c5 - Chrome"),(0,a.kt)("p",null,"\u6253\u5f00 Chrome \u6d4f\u89c8\u5668\uff0c\u5728\u5730\u5740\u680f\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome://extensions/"),"\uff0c\u5f00\u542f\u9875\u9762\u53f3\u4e0a\u89d2\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5f00\u53d1\u8005\u6a21\u5f0f"),"\u3002\n\u5c06\u5728\u8f7d\u597d\u7684\u538b\u7f29\u5305\u62d6\u62fd\u5230 Chrome \u4e2d\uff0c\u5373\u53ef\u5b8c\u6210\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u70b9\u51fb Chrome \u6d4f\u89c8\u5668\u53f3\u4e0a\u89d2\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u6269\u5c55\u7a0b\u5e8f"),"\u56fe\u6807\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u56fa\u5b9a")," StarMask\uff0c\u5373\u53ef\u5c06\u5176\u56fa\u5b9a\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"\u5de5\u5177\u680f"),"\uff0c\u65b9\u4fbf\u4f7f\u7528 StarMask\u3002"),(0,a.kt)("h4",{id:"\u5b89\u88c5---firefox"},"\u5b89\u88c5 - Firefox"),(0,a.kt)("p",null,"\u6253\u5f00 Firefox \u6d4f\u89c8\u5668\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u6253\u5f00\u5e94\u7528\u7a0b\u5e8f\u83dc\u5355"),"\u6309\u94ae\uff0c\u9009\u62e9",(0,a.kt)("inlineCode",{parentName:"p"},"\u6269\u5c55\u548c\u4e3b\u9898"),"\uff0c\u70b9\u51fb\u5f53\u524d\u9875\u9762\u4e0a\u65b9\u7684\u5c0f\u9f7f\u8f6e\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"\u7528\u4e8e\u6240\u6709\u9644\u52a0\u7ec4\u4ef6\u7684\u5de5\u5177"),"\uff09\uff0c\u9009\u62e9",(0,a.kt)("inlineCode",{parentName:"p"},"\u8c03\u8bd5\u9644\u52a0\u7ec4\u4ef6"),"\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e34\u65f6\u8f7d\u5165\u9644\u52a0\u7ec4\u4ef6"),"\uff0c\u9009\u62e9\u521a\u624d\u4e0b\u8f7d\u597d\u7684 StarMask \u538b\u7f29\u5305\uff0c\u5373\u53ef\u5b8c\u6210\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5728 Firefox \u6d4f\u89c8\u5668\u7684\u5730\u5740\u680f\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"about:debugging#/runtime/this-firefox"),"\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e34\u65f6\u8f7d\u5165\u9644\u52a0\u7ec4\u4ef6"),"\uff0c\u9009\u62e9 StarMask \u538b\u7f29\u5305\uff0c\u5373\u53ef\u5b8c\u6210\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u66f4\u8be6\u7ec6\u7684\u56fe\u6587\u5b89\u88c5\u6b65\u9aa4\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starmask-extension/blob/main/docs/zh/how-to-install-firefox.md"},"\u5b89\u88c5\u6307\u5357 - Firefox \u6d4f\u89c8\u5668"),"\u3002"),(0,a.kt)("h4",{id:"\u5b89\u88c5---edge"},"\u5b89\u88c5 - Edge"),(0,a.kt)("p",null,"\u6253\u5f00 Edge \u6d4f\u89c8\u5668\uff0c\u5728\u5730\u5740\u680f\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"edge://extensions/"),"\uff0c\u5f00\u542f\u5de6\u4fa7\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u5f00\u53d1\u4eba\u5458\u9009\u9879"),"\uff0c\u5c06\u4e0b\u8f7d\u597d\u7684 StarMask \u538b\u7f29\u5305\u62d6\u62fd\u5230 Edge \u4e2d\uff0c\u5373\u53ef\u5b8c\u6210\u5b89\u88c5\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u94b1\u5305"},"\u521b\u5efa\u94b1\u5305"),(0,a.kt)("p",null,"StarMask \u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5b83\u4f1a\u81ea\u52a8\u6253\u5f00\u6b22\u8fce\u9875\u9762\u3002\u5982\u679c\u6ca1\u6709\u81ea\u52a8\u6253\u5f00\uff0c\u4e5f\u53ef\u4ee5\u70b9\u51fb\u5de5\u5177\u680f\u4e0a\u7684 StatMask \u56fe\u6807\u3002\n\u70b9\u51fb\u8fd9\u4e2a\u56fe\u6807\u5c31\u80fd\u5f00\u59cb\u4f7f\u7528 StarMask \u4e86\uff0c\u4f60\u9700\u8981\u5148\u9605\u8bfb\u548c\u63a5\u53d7\u7528\u6237\u4f7f\u7528\u534f\u8bae\uff0c\u7136\u540e\u8f93\u5165",(0,a.kt)("strong",{parentName:"p"},"\u5bc6\u7801"),"\u6765\u521b\u5efa\u65b0\u7684 Starcoin \u94b1\u5305\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u5f00\u59cb\u4f7f\u7528"),"\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u521b\u5efa\u94b1\u5305"),"\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u6211\u540c\u610f"),"\uff0c\u8f93\u5165\u5bc6\u7801\u3002"),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u5bc6\u7801\u662f\u7528\u6765\u63a7\u5236\u5bf9 StarMask \u8f6f\u4ef6\u7684\u4f7f\u7528\uff0c\u4f8b\u5982\u5f53\u4ed6\u4eba\u4f7f\u7528\u4f60\u7684\u7535\u8111\u65f6\uff0c\u9700\u8981\u77e5\u9053\u5bc6\u7801\u624d\u80fd\u5bf9 StarMask \u8fdb\u884c\u64cd\u4f5c\u3002")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5b8c\u5bc6\u7801\u540e\uff0cStarMask \u4f1a\u4e3a\u4f60\u751f\u6210\u4e00\u4e2a\u94b1\u5305\u5e76\u8fdb\u5165\u52a9\u8bb0\u8bcd\u9875\u9762\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u5c0f\u9501"),"\u5c31\u4f1a\u663e\u793a\u753112\u4e2a\u82f1\u6587\u5355\u8bcd\u7ec4\u6210\u7684\u52a9\u8bb0\u8bcd\u5bc6\u8bed\u3002\n\u8fd9\u4e9b\u52a9\u8bb0\u8bcd\u53ef\u7528\u5728\u6240\u6709\u7684\u517c\u5bb9\u94b1\u5305\u4e0a\u8fdb\u884c\u94b1\u5305\u6062\u590d\u3002\n\u5982\u679c\u4f60\u5fd8\u8bb0\u4e86\u94b1\u5305\u5bc6\u7801\u6216\u662f\u7535\u8111\u51fa\u95ee\u9898\u4e86\uff0c\u53ea\u9700\u8981\u4f7f\u7528\u8fd912\u4e2a\u5355\u8bcd\u5c31\u53ef\u4ee5\u91cd\u7f6e\u94b1\u5305\u5bc6\u7801\u6216\u5728\u5176\u5b83\u8bbe\u5907\u5b8c\u6210\u94b1\u5305\u7684\u6062\u590d\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5efa\u8bae\u628a\u8fd912\u4e2a\u52a9\u8bb0\u8bcd\u5907\u4efd\u5728\u591a\u5f20\u7eb8\u4e0a\uff0c\u5e76\u5206\u522b\u4fdd\u5b58\u57282~3\u4e2a\u4e0d\u540c\u7684\u5730\u65b9\u3002\n\u4f8b\u5982\u4fdd\u9669\u67dc\u3001\u4e0a\u9501\u7684\u62bd\u5c49\u6216\u5176\u5b83\u80fd\u4fdd\u8bc1\u8fd9\u4e9b\u8bb0\u5f55\u7740\u52a9\u8bb0\u8bcd\u7684\u7eb8\u5f20\u5b89\u5168\u7684\u5730\u65b9\u3002\n\u8fd9\u4e9b\u7eb8\u7684\u4ef7\u503c\u7b49\u540c\u4e8e\u4f60\u5728 Starcoin \u94fe\u4e0a\u6240\u6301\u6709\u7684\u6570\u5b57\u8d27\u5e01\u7684\u4ef7\u503c\u3002\n\u5982\u679c\u4ed6\u4eba\u83b7\u5f97\u4e86\u8fd912\u4e2a\u52a9\u8bb0\u8bcd\uff0c\u5c31\u53ef\u4ee5\u7a83\u53d6\u4f60\u7684\u6570\u5b57\u8d27\u5e01\uff0c\u8bf7\u52a1\u5fc5\u59a5\u5584\u4fdd\u7ba1\uff01\n\u901a\u5e38\uff0c\u4e0d\u5efa\u8bae\u5c06\u52a9\u8bb0\u8bcd\u622a\u56fe\u3001\u6587\u672c\u6587\u4ef6\u4e0a\u4f20\u5230\u7f51\u76d8\u6216\u5176\u4ed6\u8054\u7f51\u8bbe\u5907\u8fdb\u884c\u4fdd\u5b58\uff0c\u800c\u5e94\u8be5\u9009\u62e9\u7eb8\u5f20\u6216\u8005\u79bb\u7ebf\u7684\u52a0\u5bc6\u786c\u76d8\u8fdb\u884c\u4fdd\u5b58\u3002\n\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u79bb\u7ebf\u52a0\u5bc6\u8bbe\u5907\u7684\u65b9\u5f0f\u4fdd\u5b58\uff0c\u53ef\u4ee5\u70b9\u51fb\u9875\u9762\u5de6\u4fa7",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e0b\u8f7d\u8d26\u6237\u52a9\u8bb0\u8bcd"),"\uff0c\u5c06\u5176\u79fb\u52a8\u5230\u52a0\u5bc6\u5b58\u50a8\u4ecb\u8d28\u540e\uff0c\u786e\u4fdd\u5728\u5f53\u524d\u7684\u7535\u8111\u4e0a\u6ca1\u6709\u4efb\u4f55\u5907\u4efd\uff01")),(0,a.kt)("p",null,"\u5728\u4f60\u786e\u5b9a\u5df2\u7ecf\u6b63\u786e\u4fdd\u5b58\u4e86\u52a9\u8bb0\u8bcd\u4e4b\u540e\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e0b\u4e00\u6b65"),"\uff0c\u6309\u7167\u521a\u624d\u7684\u52a9\u8bb0\u8bcd\u5e8f\u5217\u70b9\u51fb\u52a9\u8bb0\u8bcd\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u786e\u8ba4"),"\u3002\n\u5b8c\u6210\u52a9\u8bb0\u8bcd\u6821\u9a8c\u540e\uff0c\u5c31\u5b8c\u6210\u4e86\u94b1\u5305\u521b\u5efa\u7684\u6240\u6709\u6d41\u7a0b\u4e86\uff0c\u6109\u5feb\u5730\u5f00\u59cb Starcoin \u94fe\u4e0a\u4e4b\u65c5\u5427\uff01"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u94b1\u5305"},"\u4f7f\u7528\u94b1\u5305"),(0,a.kt)("p",null,"\u5b8c\u6210\u94b1\u5305\u7684\u521b\u5efa\u540e\uff0c\u5c31\u4f1a\u8fdb\u5165\u8d26\u6237\u9875\u9762\uff0cStarMask \u4f1a\u663e\u793a\u4f60\u7684 Starcoin \u8d26\u6237\u7684\u6982\u89c8\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u5728\u8d26\u6237\u9875\u9762\u7b2c\u4e00\u680f\u5de6\u4fa7\u663e\u793a Starcoin \u56fe\u6807\uff0c\u5de6\u4fa7\u663e\u793a\u7684\u662f\u5f53\u524d\u94b1\u5305\u8fde\u63a5\u7684 Starcoin \u7f51\u7edc\uff08\u9ed8\u8ba4\u663e\u793a\u201cStarcoin \u4e3b\u7f51\u7edc\u201d\uff09\u548c\u4e00\u4e2a\u5f69\u8272\u7684\u56fe\u6807\uff08\u7528\u4e8e\u5728\u591a\u4e2a\u8d26\u6237\u4e4b\u95f4\u8fdb\u884c\u533a\u5206\uff09\u3002"),(0,a.kt)("p",null,"\u6b64\u65f6\u70b9\u51fb\u6d4f\u89c8\u5668\u5de5\u5177\u680f\u4e0a\u7684 StarMask \u56fe\u6807\uff0c\u5f39\u51fa\u7684\u9875\u9762\u548c StarMask \u6269\u5c55\u9875\u57fa\u672c\u4e00\u81f4\u3002\n\u552f\u4e00\u533a\u522b\u662f\uff0cStarMask \u94b1\u5305\u5f39\u51fa\u9875\u7684\u7b2c\u4e8c\u680f\u5de6\u4fa7\u4f1a\u6709\u4e00\u4e2a Web3 \u7f51\u9875\u8fde\u63a5\u72b6\u6001\u6309\u94ae\u3002\n\u5982\u679c\u4f60\u7684\u94b1\u5305\u8fde\u63a5\u4e0a\u67d0\u4e2a Web3 \u7f51\u9875\uff0c\u5219\u4f1a\u663e\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"\u5df2\u8fde\u63a5"),"\uff0c\u70b9\u5f00\u540e\u53ef\u4ee5\u67e5\u770b\u8be6\u60c5\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u680f\u4e2d\u95f4\u663e\u793a\u7684\u662f\u8d26\u6237\u540d\u79f0\uff08\u9ed8\u8ba4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Account1"),"\uff09\u548c\u8d26\u6237\u7684 Starcoin \u5730\u5740\uff08\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"0xeD49\u2026683e"),"\uff09\u3002\n\u7b2c\u4e8c\u680f\u53f3\u4fa7\u663e\u793a\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u8d26\u6237\u9009\u9879"),"\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e09\u680f\u4e2d\u95f4\u663e\u793a\u5f53\u524d\u8d26\u6237\u6240\u6301\u6709\u7684 STC \u4ee3\u5e01\u6570\u91cf\uff0c\u4ee5\u53ca\u4e00\u4e2a\u7528\u4e8e\u53d1\u9001\u4ee3\u5e01\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u53d1\u9001"),"\u6309\u94ae\u3002\n\u5728\u4e0b\u65b9\u6709\u4e09\u4e2a\u6309\u94ae\u5206\u522b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u8d44\u4ea7"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"NFT")," \u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u6d3b\u52a8"),"\u3002"))}u.isMDXComponent=!0}}]);