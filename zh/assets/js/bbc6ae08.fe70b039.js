"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[323],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),s=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=s(a),u=n,h=k["".concat(l,".").concat(u)]||k[u]||c[u]||o;return a?r.createElement(h,p(p({ref:e},m),{},{components:a})):r.createElement(h,p({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,p=new Array(o);p[0]=k;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3273:function(t,e,a){a.r(e),a.d(e,{assets:function(){return l},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var r=a(3117),n=(a(7294),a(3905));const o={},p="Dapp \u5f00\u53d1\u6307\u5357",i={unversionedId:"web3/README",id:"web3/README",title:"Dapp \u5f00\u53d1\u6307\u5357",description:"\u672c\u6587\u6863\u901a\u8fc7\u4ecb\u7ecd Dapp \u7684\u6574\u4f53\u5f00\u53d1\u6d41\u7a0b\uff0c\u8bb2\u89e3\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u7684\u76f8\u5173\u77e5\u8bc6\u4ee5\u53ca\u5de5\u5177\u94fe\uff0c\u5e2e\u52a9\u60a8\u57fa\u4e8e Starcoin \u5feb\u901f\u6784\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684 Dapp\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-web3/README.md",sourceDirName:"04-web3",slug:"/web3/",permalink:"/zh/docs/web3/",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-web3/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9a8c\u8bc1\u667a\u80fd\u5408\u7ea6\uff1aMove Prover \u6559\u7a0b",permalink:"/zh/docs/move/move-prover/mvp-tutorial"},next:{title:"StarMask",permalink:"/zh/docs/web3/starmask/"}},l={},s=[{value:"\u5f00\u53d1\u6d41\u7a0b",id:"\u5f00\u53d1\u6d41\u7a0b",level:2},{value:"\u5165\u95e8 Dapp",id:"\u5165\u95e8-dapp",level:2},{value:"StarMask",id:"starmask",level:2},{value:"SDK",id:"sdk",level:2},{value:"Starcoin \u8282\u70b9&amp;RPC \u63a5\u53e3",id:"starcoin-\u8282\u70b9rpc-\u63a5\u53e3",level:2},{value:"Move",id:"move",level:2},{value:"Stdlib &amp; \u534f\u8bae",id:"stdlib--\u534f\u8bae",level:2},{value:"\u5176\u4ed6\u5f00\u53d1\u8005\u5de5\u5177",id:"\u5176\u4ed6\u5f00\u53d1\u8005\u5de5\u5177",level:2}],m={toc:s};function c(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dapp-\u5f00\u53d1\u6307\u5357"},"Dapp \u5f00\u53d1\u6307\u5357"),(0,n.kt)("p",null,"\u672c\u6587\u6863\u901a\u8fc7\u4ecb\u7ecd Dapp \u7684\u6574\u4f53\u5f00\u53d1\u6d41\u7a0b\uff0c\u8bb2\u89e3\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u7684\u76f8\u5173\u77e5\u8bc6\u4ee5\u53ca\u5de5\u5177\u94fe\uff0c\u5e2e\u52a9\u60a8\u57fa\u4e8e Starcoin \u5feb\u901f\u6784\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684 Dapp\u3002"),(0,n.kt)("h2",{id:"\u5f00\u53d1\u6d41\u7a0b"},"\u5f00\u53d1\u6d41\u7a0b"),(0,n.kt)("p",null,"\u4efb\u4f55\u516c\u94fe\u7684 Dapp\uff0c\u4ece\u524d\u7aef\u9875\u9762\u5f00\u59cb\uff0c\u6700\u7ec8\u8c03\u7528\u5230\u94fe\u4e0a\u90e8\u7f72\u7684\u667a\u80fd\u5408\u7ea6\uff0c\u90fd\u5305\u542b\u4ee5\u4e0b\u7684\u4e3b\u8981\u73af\u8282\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dapp_1",src:a(7022).Z,width:"681",height:"191"})),(0,n.kt)("p",null,"\u8fd9\u91cc\u4ee5 Starcoin \u4e3a\u4f8b\u8fdb\u884c\u8bb2\u89e3\uff0c\u4e0a\u56fe\u6d89\u53ca\u5230\u7684\u4e3b\u8981\u7ec4\u4ef6\u6709\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4ea4\u4e92\u5165\u53e3\u9875\u9762\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u8ddf\u94fe\u8282\u70b9\u901a\u8baf\u7684 SDK\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u4e5f\u53ef\u80fd\u901a\u8fc7\u6d4f\u89c8\u5668\u63d2\u4ef6\u94b1\u5305 StarMask \u8ddf\u94fe\u7684\u8282\u70b9\u901a\u8baf\uff08\u5b9e\u9645\u4e0a\uff0cStarMask \u4e5f\u662f\u8c03\u7528\u4e86 JS \u7684 SDK\uff09\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u542f\u52a8\u94fe\u7684\u8282\u70b9\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u94fe\u4e0a\u90e8\u7f72\u7684\u5408\u7ea6\uff1b")),(0,n.kt)("p",null,"\u4e0a\u9762\u63d0\u5230\u7684\u6bcf\u4e00\u6b65\u90fd\u6d89\u53ca\u5230\u76f8\u5173\u7684\u77e5\u8bc6\u548c\u53ef\u7528\u7684\u5de5\u5177\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dapp_2",src:a(1516).Z,width:"721",height:"405"})),(0,n.kt)("p",null,"\u8fd9\u91cc\u6309\u4ece\u5de6\u5230\u53f3\u7684\u987a\u5e8f\uff0c\u5148\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u5f00\u53d1\u8005\u6bd4\u8f83\u5173\u5fc3\u7684\u5185\u5bb9\uff08\u540e\u9762\u4f1a\u5c55\u5f00\u4ecb\u7ecd\uff09\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5165\u95e8 Dapp\uff1a\u9002\u5408\u60f3\u5feb\u901f\u4e86\u89e3\u548c\u4f53\u9a8c Dapp\uff0c\u6216\u8005\u60f3\u5f00\u53d1 Dapp \u9875\u9762\u7684\u524d\u7aef\u5f00\u53d1\u8005\uff1b"),(0,n.kt)("li",{parentName:"ol"},"StarMask API\uff1aDapp \u5f00\u53d1\u4e2d\u7ecf\u5e38\u4f1a\u9047\u5230\u7b7e\u540d\u7b49\u573a\u666f\uff0c\u9700\u8981\u8c03\u7528\u6d4f\u89c8\u5668\u63d2\u4ef6\u94b1\u5305 StarMask \u7684 API\uff0c\u4e0e\u94b1\u5305\u8fdb\u884c\u4ea4\u4e92\uff0c\u5b8c\u6210\u7528\u6237\u64cd\u4f5c\u4ee5\u53ca\u5e38\u89c1\u7684\u94fe\u4ea4\u4e92\uff1b"),(0,n.kt)("li",{parentName:"ol"},"SDK\uff1aSDK \u662f\u8ddf\u94fe\u4ea4\u4e92\u7684\u53e6\u4e00\u79cd\u5e38\u7528\u65b9\u5f0f\uff0cStarcoin \u5305\u542b\u591a\u8bed\u8a00\u7248\u672c\u7684 SDK\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u9009\u62e9\u5bf9\u5e94\u7248\u672c\u7684 SDK\uff1a",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"JS SDK"),(0,n.kt)("li",{parentName:"ol"},"Java SDK"),(0,n.kt)("li",{parentName:"ol"},"Python SDK"),(0,n.kt)("li",{parentName:"ol"},"Go SDK"),(0,n.kt)("li",{parentName:"ol"},"Dart SDK"))),(0,n.kt)("li",{parentName:"ol"},"Starcoin \u8282\u70b9 RPC \u63a5\u53e3\uff1a\u5305\u542b\u4e86 Starcoin \u8282\u70b9\u5bf9\u5916\u7684\u6240\u6709\u670d\u52a1\u548c\u5bf9\u5e94\u63a5\u53e3\uff0c\u5f00\u53d1\u8005\u6216\u8005 SDK \u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e9b\u63a5\u53e3\u8ddf\u94fe\u8fdb\u884c\u4ea4\u4e92\uff1b"),(0,n.kt)("li",{parentName:"ol"},"Move \u667a\u80fd\u5408\u7ea6\uff1a\u5f00\u53d1\u8005\u901a\u8fc7 Move \u8bed\u8a00\u5c06\u903b\u8f91\u8868\u8fbe\u51fa\u6765\u5e76\u90e8\u7f72\u5230 Starcoin \u94fe\u4e0a\uff0c\u4f9b\u6240\u6709\u7684\u7528\u6237\u8c03\u7528\uff1b")),(0,n.kt)("p",null,"\u4ee5\u4e0a\u662f\u57fa\u4e8e Starcoin \u5f00\u53d1 Dapp \u53ef\u80fd\u6d89\u53ca\u7684\u4e3b\u8981\u73af\u8282\u548c\u5185\u5bb9\u7684\u7b80\u5355\u4ecb\u7ecd\uff0c\u4e0b\u9762\u5c06\u8fdb\u4e00\u6b65\u5bf9\u6bcf\u4e00\u4e2a\u73af\u8282\u5c55\u5f00\u6765\u4ecb\u7ecd\u3002\u5982\u679c\u60a8\u53ea\u5bf9\u5176\u4e2d\u7684\u67d0\u4e00\u90e8\u5206\u6216\u8005\u67d0\u4e00\u4e2a\u73af\u8282\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u76f4\u63a5\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684\u5185\u5bb9\u3002"),(0,n.kt)("h2",{id:"\u5165\u95e8-dapp"},"\u5165\u95e8 Dapp"),(0,n.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u5165\u95e8 Dapp\uff0c\u4e5f\u662f\u7528\u6237\u771f\u6b63\u80fd\u591f\u4f7f\u7528\u548c\u611f\u53d7 Dapp \u7684\u4ea7\u54c1\u5165\u53e3\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b83\u5feb\u901f\u5730\u4e86\u89e3\u4ec0\u4e48\u662f Dapp\uff0c\u611f\u53d7 Dapp \u5982\u4f55\u8ddf\u94fe\u8fdb\u884c\u4ea4\u4e92\u3002\u5982\u679c\u60a8\u662f\u5f00\u53d1\u4eba\u5458\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u5b83\u7684\u6e90\u4ee3\u7801\uff0c\u4e86\u89e3\u4e00\u4e2a\u7b80\u5355\u7684 Dapp \u7684\u4ee3\u7801\u7ed3\u6784\uff0c\u5feb\u901f\u4e0a\u624b\u6784\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684 Dapp\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f53\u9a8c\u5165\u53e3\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://starmask-test-dapp.starcoin.org/"},"https://starmask-test-dapp.starcoin.org/"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ee3\u7801\u4ed3\u5e93\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starmask-test-dapp"},"https://github.com/starcoinorg/starmask-test-dapp")))),(0,n.kt)("h2",{id:"starmask"},"StarMask"),(0,n.kt)("p",null,"StarMask \u662f Starcoin \u5b98\u65b9\u53d1\u5e03\u7684\u6d4f\u89c8\u5668\u63d2\u4ef6\u94b1\u5305\uff0c\u4e0d\u4ec5\u662f\u7528\u6237\u7ba1\u7406\u94fe\u4e0a\u6570\u5b57\u8d44\u4ea7\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u4e5f\u662f Dapp \u8ddf\u94fe\u4e0a\u8fdb\u884c\u4ea4\u4e92\u7684\u4e00\u79cd\u9009\u62e9\u3002\u4f8b\u5982\uff0c\u7528\u6237\u5bf9 Dapp \u7684\u4ea4\u6613\u8fdb\u884c\u7b7e\u540d\uff0c\u5e76\u5c06\u7b7e\u540d\u540e\u7684\u4ea4\u6613\u63d0\u4ea4\u5230\u8fdc\u7a0b\u8282\u70b9\u7684 Txpool \u4e2d\u3002\u8fd9\u91cc\u5e26\u60a8\u6df1\u5165\u4e86\u89e3\u4e00\u4e0b StarMask\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b89\u88c5\u6307\u5357\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starmask-extension/blob/main/docs/zh/how-to-install.md"},"https://github.com/starcoinorg/starmask-extension/blob/main/docs/zh/how-to-install.md"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u6307\u5357\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starmask-extension/blob/main/docs/zh/how-to-use.md"},"https://github.com/starcoinorg/starmask-extension/blob/main/docs/zh/how-to-use.md")))),(0,n.kt)("h2",{id:"sdk"},"SDK"),(0,n.kt)("p",null,"\u8ddf\u94fe\u4ea4\u4e92\uff0c\u9664\u4e86 StarMask \u8fd9\u79cd\u65b9\u5f0f\uff0c\u8fd8\u53ef\u4ee5\u9009\u62e9 SDK \u7684\u65b9\u5f0f\u3002Starcoin \u5b98\u65b9\u63d0\u4f9b\u4e86\u591a\u4e2a\u8bed\u8a00\u7248\u672c\u7684 SDK\uff0c\u4ee5\u65b9\u4fbf\u5f00\u53d1\u8005\u901a\u8fc7\u7f16\u7a0b\u7684\u65b9\u5f0f\u8ddf Starcoin \u8282\u70b9\u8fdb\u884c\u4ea4\u4e92\u3002\u4ee5\u4e0b\u662f Starcoin \u652f\u6301\u7684 SDK\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"JS SDK"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/zh/developer/sdk/javascript/"},"https://starcoin.org/zh/developer/sdk/javascript/")),(0,n.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin.js"},"https://github.com/starcoinorg/starcoin.js")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Java SDK"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-java#readme"},"https://github.com/starcoinorg/starcoin-java#readme")),(0,n.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-java"},"https://github.com/starcoinorg/starcoin-java")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Python SDK"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://starcoin-sdk-python.readthedocs.io"},"https://starcoin-sdk-python.readthedocs.io")),(0,n.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-sdk-python"},"https://github.com/starcoinorg/starcoin-sdk-python")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go SDK"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-go/blob/main/README.md"},"https://github.com/starcoinorg/starcoin-go/blob/main/README.md")),(0,n.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-go"},"https://github.com/starcoinorg/starcoin-go")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Dart SDK"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin.dart"},"https://github.com/starcoinorg/starcoin.dart"))))),(0,n.kt)("h2",{id:"starcoin-\u8282\u70b9rpc-\u63a5\u53e3"},"Starcoin \u8282\u70b9&RPC \u63a5\u53e3"),(0,n.kt)("p",null,"\u5728 Dapp \u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u4e2d\uff0c\u4e0d\u7ba1\u662f\u4f7f\u7528 StarMask \u8fd8\u662f\u4f7f\u7528 SDK \u8ddf\u94fe\u4ea4\u4e92\uff0c\u6700\u7ec8\u90fd\u662f\u5728\u8ddf\u5206\u5e03\u5f0f\u7f51\u7edc\u91cc\u9762\u7684\u4e00\u4e2a Starcoin \u8282\u70b9\u901a\u4fe1\u3002\u6240\u4ee5\uff0c\u4e00\u4e2a\u7a33\u5b9a\u7684 Starcoin \u8282\u70b9\u662f Dapp \u4ea4\u6613\u80fd\u591f\u6253\u5305\u4e0a\u94fe\u7684\u5fc5\u8981\u6761\u4ef6\u3002Starcoin \u8282\u70b9\u5bf9\u94fe\u4e0b\u73af\u5883\u63d0\u4f9b\u4e86\u7edf\u4e00\u5fc5\u8981\u7684\u63a5\u53e3\uff0c\u8fd9\u91cc\u6df1\u5165\u4ecb\u7ecd\u4e00\u4e0b Starcoin \u8282\u70b9\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u7f51\u7edc"),(0,n.kt)("p",{parentName:"li"},"Starcoin \u6839\u636e\u76ee\u6807\u7684\u4e0d\u540c\uff0c\u8bbe\u8ba1\u4e86\u591a\u4e2a\u4e0d\u540c\u7684\u7f51\u7edc\uff0c\u8986\u76d6\u4e86\u5f00\u53d1\u5468\u671f\u7684\u6bcf\u4e2a\u9636\u6bb5\u3002\u5305\u62ec Dev\u3001Test\u3001Halley\u3001Proxima\u3001Barnard\u3001Main\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dev\uff1a\u7528\u4e8e\u672c\u5730\u5f00\u53d1"),(0,n.kt)("li",{parentName:"ul"},"Test\uff1a\u7528\u4e8e\u5355\u5143\u6d4b\u8bd5\u548c\u96c6\u6210\u6d4b\u8bd5"),(0,n.kt)("li",{parentName:"ul"},"Halley\uff1a\u603b\u662f\u8fd0\u884c Stdlib \u7684 latest \u7248\u672c\uff0c\u5982\u679c Stdlib \u53d8\u66f4\u5219\u4f1a\u7acb\u523b\u91cd\u7f6e Genesis Block\uff0c \u6e05\u7406\u539f\u6765\u7684\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"Proxima\uff1a\u7528\u4e8e Dapp \u4e0a\u7ebf\u524d\u6d4b\u8bd5\uff0c\u4f1a\u5b9a\u671f\u6e05\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"Barnard\uff1a\u7528\u4e8e Dapp \u4e0a\u7ebf\u524d\u6d4b\u8bd5\uff0c\u4e0d\u5220\u9664\u6570\u636e\uff0c\u5fc5\u987b\u517c\u5bb9\u6027\u5347\u7ea7"),(0,n.kt)("li",{parentName:"ul"},"Main\uff1aStarcoin \u4e3b\u7f51")),(0,n.kt)("p",{parentName:"li"},"\u5728\u542f\u52a8 Starcoin \u8282\u70b9\u524d\uff0c\u5efa\u8bae\u5148\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u9009\u62e9\u4e0d\u540c\u7684\u7f51\u7edc\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8282\u70b9\u5b89\u88c5"),(0,n.kt)("p",{parentName:"li"},"Starcoin \u6709\u591a\u79cd\u5b89\u88c5\u65b9\u5f0f\uff08",(0,n.kt)("a",{parentName:"p",href:"https://starcoin.org/zh/developer/setup/install/"},"\u67e5\u770b\u8be6\u60c5"),"\uff09"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6839\u636e\u4e0d\u540c\u7684\u5e73\u53f0\uff0c\u4e0b\u8f7d\u5bf9\u5e94\u7684\u4e8c\u8fdb\u5236\uff0cStarcoin \u540c\u65f6\u652f\u6301 Windows\u3001Mac \u548c Linux\u3002",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin/releases"},"\u4e0b\u8f7d\u94fe\u63a5")),(0,n.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\u7f16\u8bd1\u6210\u4e8c\u8fdb\u5236\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/zh/developer/setup/build/"},"\u64cd\u4f5c\u6307\u5357")),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Docker \u5b89\u88c5\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/zh/developer/setup/run_by_docker/"},"\u64cd\u4f5c\u6307\u5357")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884c\u8282\u70b9"),(0,n.kt)("p",{parentName:"li"},"\u6839\u636e\u524d\u9762\u300c\u8282\u70b9\u5b89\u88c5\u300d\u7684\u4e0d\u540c\uff0c\u8282\u70b9\u8fd0\u884c\u65b9\u5f0f\u4e5f\u7a0d\u5fae\u6709\u70b9\u533a\u522b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Docker \u8fd0\u884c\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/zh/developer/setup/run_by_docker/"},"\u64cd\u4f5c\u6307\u5357")),(0,n.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u8fd0\u884c\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/zh/developer/setup/runnetwork/"},"\u64cd\u4f5c\u6307\u5357"))),(0,n.kt)("p",{parentName:"li"},"\u4e0d\u7ba1\u662f\u901a\u8fc7\u54ea\u79cd\u65b9\u5f0f\u8fd0\u884c\uff0c\u9700\u8981\u4fee\u6539-n \u53c2\u6570\u9009\u62e9\u7b26\u5408\u81ea\u5df1\u9700\u6c42\u7684\u7f51\u7edc\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u63a7\u5236\u53f0"),(0,n.kt)("p",{parentName:"li"},"Starcoin \u8282\u70b9\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u7ecf\u5e38\u9700\u8981\u901a\u8fc7\u63a7\u5236\u53f0\u8fde\u63a5\u4e0a\u8282\u70b9\uff0c\u4ee5\u547d\u4ee4\u884c\u7684\u5f62\u5f0f\u67e5\u770b\u8fd0\u884c\u72b6\u6001\u3002Starcoin \u63d0\u4f9b\u4e86 console \u547d\u4ee4\u7528\u4e8e\u8fde\u63a5\u8282\u70b9\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://starcoin.org/zh/developer/cli/console/"},"\u64cd\u4f5c\u6307\u5357"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u547d\u4ee4\u884c\u64cd\u4f5c\u6587\u6863"),(0,n.kt)("p",{parentName:"li"},"Starcoin \u652f\u6301\u4e86\u4e30\u5bcc\u7684\u547d\u4ee4\uff0c\u5e38\u7528\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"account\uff1a\u8d26\u53f7\u76f8\u5173\u7684\u547d\u4ee4"),(0,n.kt)("li",{parentName:"ul"},"chain\uff1a\u94fe\u76f8\u5173\u7684\u547d\u4ee4"),(0,n.kt)("li",{parentName:"ul"},"node\uff1a\u8282\u70b9\u76f8\u5173\u7684\u547d\u4ee4"),(0,n.kt)("li",{parentName:"ul"},"state\uff1a\u72b6\u6001\u76f8\u5173\u7684\u547d\u4ee4")),(0,n.kt)("p",{parentName:"li"},"\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u7684\u547d\u4ee4\uff0c\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"https://starcoin.org/zh/developer/cli/"},"\u66f4\u591a\u8be6\u60c5"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"RPC \u534f\u8bae"),(0,n.kt)("p",{parentName:"li"},"\u524d\u9762\u4ecb\u7ecd\u4e86\u8ddf\u8282\u70b9\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u91cd\u70b9\u4ecb\u7ecd\u4e86\u901a\u8fc7\u63a7\u5236\u53f0\u7684\u65b9\u5f0f\u8bbf\u95ee Starcoin \u8282\u70b9\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7 RPC \u63a5\u53e3\u7684\u5f62\u5f0f\u6765\u8bbf\u95ee Starcoin \u8282\u70b9\u3002\u53ef\u4ee5\u8bf4\uff0c\u8fd9\u662f\u901a\u8fc7\u7f16\u7a0b\u6765\u8bbf\u95ee\u8282\u70b9\u7684\u6700\u4f73\u65b9\u5f0f\uff0cSDK \u6b63\u662f\u901a\u8fc7\u8fd9\u4e9b RPC \u63a5\u53e3\u8ddf\u8282\u70b9\u8fdb\u884c\u4ea4\u4e92\u3002\u8fd9\u91cc\u662f\u8be6\u7ec6\u7684",(0,n.kt)("a",{parentName:"p",href:"https://starcoin.org/zh/developer/rpc/rpc_document/"},"RPC \u534f\u8bae\u6587\u6863"),"\uff0c\u5f00\u53d1\u8005\u5728\u5fc5\u8981\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u67e5\u770b RPC \u8be6\u60c5\u8fdb\u884c\u7f16\u7a0b\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884c\u539f\u7406"),(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u662f\u5f00\u53d1\u8005\uff0c\u60f3\u8fdb\u4e00\u6b65\u4e86\u89e3 Starcoin \u7684\u539f\u7406\uff0c\u53ef\u4ee5\u4ece\u4ee5\u4e0b\u65b9\u9762\u5165\u624b\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5173\u952e\u6982\u5ff5\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/zh/developer/key_concepts/"},"https://starcoin.org/zh/developer/key_concepts/")),(0,n.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin"},"https://github.com/starcoinorg/starcoin"))))),(0,n.kt)("h2",{id:"move"},"Move"),(0,n.kt)("p",null,"Starcoin \u662f\u7b2c\u4e00\u4e2a\u652f\u6301 Move \u667a\u80fd\u5408\u7ea6\u7684\u65e0\u8bb8\u53ef\u516c\u94fe\u3002"),(0,n.kt)("p",null,"\u5728\u533a\u5757\u94fe\u7684\u573a\u666f\u4e0b\uff0c\u5f00\u6e90\u662f\u5e38\u6001\u3002\u76f8\u6bd4\u8fc7\u53bb\u4e2d\u5fc3\u5316\u573a\u666f\uff0c\u5bf9\u667a\u80fd\u5408\u7ea6\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u65e2\u8981\u5b9e\u73b0\u4e1a\u52a1\uff0c\u53c8\u8981\u517c\u987e\u5b89\u5168\uff0c\u65e0\u7591\u662f\u4e00\u4e2a\u975e\u5e38\u5927\u7684\u6311\u6218\u3002\u800c DeFi \u7b49\u573a\u666f\u7684\u5b89\u5168\uff0c\u53c8\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\u3002\u6b63\u662f\u57fa\u4e8e\u8fd9\u4e9b\u8003\u8651\uff0c\u667a\u80fd\u5408\u7ea6\u8bed\u8a00 Move \u628a\u5b89\u5168\u5f53\u6210\u9996\u8981\u8bbe\u8ba1\u76ee\u6807\uff0c\u4ece\u8bed\u8a00\u5c42\u9762\u5bf9\u91d1\u878d\u573a\u666f\u8fdb\u884c\u5b89\u5168\u52a0\u56fa\uff0c\u5f00\u7bb1\u5373\u7528\uff0c\u6781\u5927\u7a0b\u5ea6\u5730\u964d\u4f4e\u667a\u80fd\u5408\u7ea6\u5f00\u53d1\u8005\u7684\u95e8\u69db\u3002\u53ef\u4ee5\u8bf4\uff0cMove \u662f\u76ee\u524d\u552f\u4e00\u4e0d\u5f71\u54cd\u8d27\u5e01\u529f\u80fd\u7684\u667a\u80fd\u5408\u7ea6\u3002"),(0,n.kt)("p",null,"Move \u8bed\u6cd5\u7b80\u5355\uff0c\u5b89\u5168\u7279\u6027\u5f00\u7bb1\u5373\u7528\uff0c\u80fd\u591f\u505a\u5230\u8f7b\u677e\u4e0a\u624b\u3002\u5bf9\u4e8e\u60f3\u8981\u7f16\u5199 Move \u5408\u7ea6\u7684\u5f00\u53d1\u8005\uff0cStarcoin \u51c6\u5907\u4e86\u975e\u5e38\u4e30\u5bcc\u7684\u5f00\u53d1\u6559\u7a0b\uff0c\u5b8c\u5584\u7684\u5f00\u53d1\u5de5\u5177\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Move \u6559\u7a0b\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u300a",(0,n.kt)("a",{parentName:"li",href:"https://move-book.com/cn/index.html"},"Move book"),"\u300b\u4e2d\u6587\u7248"),(0,n.kt)("li",{parentName:"ul"},"Move \u57fa\u7840\u7bc7\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://weibo.com/l/wblive/p/show/1022:2321324653445776015474"},"https://weibo.com/l/wblive/p/show/1022:2321324653445776015474")),(0,n.kt)("li",{parentName:"ul"},"Move \u8fdb\u9636\u7bc7\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://weibo.com/l/wblive/p/show/1022:2321324655638159687840"},"https://weibo.com/l/wblive/p/show/1022:2321324655638159687840")),(0,n.kt)("li",{parentName:"ul"},"Move & Dapp \u5b9e\u6218\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://weibo.com/l/wblive/p/show/1022:2321324658455788257683"},"https://weibo.com/l/wblive/p/show/1022:2321324658455788257683")),(0,n.kt)("li",{parentName:"ul"},"Move \u5f00\u53d1\u5b9e\u6218\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://weibo.com/l/wblive/p/show/1022:2321324661355444568427"},"https://weibo.com/l/wblive/p/show/1022:2321324661355444568427")),(0,n.kt)("li",{parentName:"ul"},"Move \u8bed\u8a00\u8bbe\u8ba1\u601d\u8def\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://weibo.com/l/wblive/p/show/1022:2321324661515499208925"},"https://weibo.com/l/wblive/p/show/1022:2321324661515499208925")),(0,n.kt)("li",{parentName:"ul"},"Move & DeFi \u5f00\u53d1\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://weibo.com/tv/show/1042211:4664043403935862"},"https://weibo.com/tv/show/1042211:4664043403935862")),(0,n.kt)("li",{parentName:"ul"},"Move & DeFi \u5b89\u5168\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://weibo.com/tv/show/1042211:4672003286958120"},"https://weibo.com/tv/show/1042211:4672003286958120")),(0,n.kt)("li",{parentName:"ul"},"Move \u4e3a DeFi \u800c\u751f\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://learnblockchain.cn/article/2636"},"https://learnblockchain.cn/article/2636")),(0,n.kt)("li",{parentName:"ul"},"Move \u4e2d\u6587\u793e\u533a \uff1a",(0,n.kt)("a",{parentName:"li",href:"https://www.movelang.io/"},"https://www.movelang.io/"))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"IDE\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Starcoin IDE\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=starcoinorg.starcoin-ide"},"https://marketplace.visualstudio.com/items?itemName=starcoinorg.starcoin-ide")),(0,n.kt)("li",{parentName:"ul"},"Move-Package-Manager\uff1a\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u8f7b\u91cf\u7ea7\u7684\u6d4b\u8bd5\u3001\u53d1\u5e03 Move \u5408\u7ea6\u7684\u5de5\u5177\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/guide-to-move-package-manager"},"\u4e0b\u8f7d\u94fe\u63a5\u548c\u64cd\u4f5c\u6307\u5357"))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6d4b\u8bd5"),(0,n.kt)("p",{parentName:"li"},"Move \u652f\u6301\u591a\u79cd\u6d4b\u8bd5\u65b9\u6848"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Speck Test\uff1a\u8bed\u6cd5\u8ddf UT \u5dee\u4e0d\u591a\uff0c\u4e3b\u8981\u533a\u522b\u662f ST \u4f1a\u9884\u5148\u521d\u59cb\u5316\u94fe",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/guide-to-move-package-manager/"},"\u4f7f\u7528\u6307\u5357")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u8bd1&\u90e8\u7f72"),(0,n.kt)("p",{parentName:"li"},"\u5408\u7ea6\u5b8c\u6210\u4e4b\u540e\uff0c\u9700\u8981\u7f16\u8bd1\u5e76\u90e8\u7f72\u5230 Starcoin \u7684\u94fe\u4e0a\u3002\u90e8\u7f72\u5408\u7ea6\u4e5f\u6709\u591a\u79cd\u65b9\u5f0f\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63a7\u5236\u53f0\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/en/developer/tutorials/deploy_move_contract/"},"\u64cd\u4f5c\u6307\u5357")),(0,n.kt)("li",{parentName:"ul"},"starmask-test-dapp\uff1aContract blob hex \u529f\u80fd\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://starmask-test-dapp.starcoin.org/"},"\u64cd\u4f5c\u5165\u53e3")),(0,n.kt)("li",{parentName:"ul"},"Move-Package-Manager\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/guide-to-move-package-manager"},"move package manager \u6307\u5357"))),(0,n.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u9009\u62e9\u5408\u9002\u7684\u7f51\u7edc\u8fdb\u884c\u90e8\u7f72\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Move",(0,n.kt)("a",{parentName:"p",href:"https://starcoin.org/zh/developer/move/example/"},"\u5165\u95e8\u4f8b\u5b50")))),(0,n.kt)("h2",{id:"stdlib--\u534f\u8bae"},"Stdlib & \u534f\u8bae"),(0,n.kt)("p",null,"Starcoin \u6709 Stdlib \u7279\u6027\uff0c\u5b8c\u5168\u4f7f\u7528 Move \u8bed\u8a00\u5f00\u53d1\uff0c\u611f\u5174\u8da3\u7684\u670b\u53cb\u53ef\u4ee5","[\u67e5\u770b\u6e90\u4ee3\u7801]"),(0,n.kt)("p",null,"Starcoin \u5728 Stdlib \u4e2d\u5b9a\u4e49\u4e86\u591a\u79cd\u5e38\u7528\u534f\u8bae\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff08\u66f4\u591a\u534f\u8bae\u5728\u9646\u7eed\u5236\u5b9a\u4e2d\uff09\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dapp_1",src:a(3248).Z,width:"700",height:"706"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"DAO \u534f\u8bae"),(0,n.kt)("p",{parentName:"li"},"DAO \u534f\u8bae\u662f Stdlib \u4e2d\u4e00\u4e2a\u57fa\u7840\u7684\u534f\u8bae\uff0c\u901a\u8fc7 DAO \u534f\u8bae\u80fd\u591f\u5f88\u597d\u7684\u8fdb\u884c\u94fe\u4e0a\u6cbb\u7406\u3002\u8fd9\u91cc\u662f\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"https://starcoin.org/zh/developer/blog/starcoin_stdlib_upgrade"},"\u94fe\u4e0a\u6cbb\u7406\u8fdb\u884c\u4ee3\u7801\u5347\u7ea7"),"\u7684\u4f8b\u5b50\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"NFT \u534f\u8bae"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/zh/developer/protocols/starcoin_nft/"},"\u534f\u8bae\u4ecb\u7ecd")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/sips/blob/master/sip-22/index.zh.md"},"SIP22")),(0,n.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-framework/tree/main/sources/NFT.move"},"https://github.com/starcoinorg/starcoin-framework/tree/main/sources/NFT.move")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-framework/tree/main/sources/MerkleNFT.move"},"https://github.com/starcoinorg/starcoin-framework/tree/main/sources/MerkleNFT.move")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stdlib",(0,n.kt)("a",{parentName:"p",href:"https://starcoin.org/zh/developer/stdlib/stdlib/"},"\u4f7f\u7528\u6307\u5357")))),(0,n.kt)("h2",{id:"\u5176\u4ed6\u5f00\u53d1\u8005\u5de5\u5177"},"\u5176\u4ed6\u5f00\u53d1\u8005\u5de5\u5177"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5b98\u7f51"),(0,n.kt)("p",{parentName:"li"},"Starcoin \u7684",(0,n.kt)("a",{parentName:"p",href:"https://starcoin.org/zh/"},"\u5b98\u7f51"),"\u3002\u901a\u8fc7\u5b98\u7f51\u80fd\u83b7\u53d6\u5230\u975e\u5e38\u591a\u7684\u4fe1\u606f\uff0c\u6bd4\u5982\u767d\u76ae\u4e66\u3001\u5f00\u53d1\u8005\u3001\u5de5\u5177\u94fe\u3001Starcoin \u6700\u65b0\u52a8\u6001\u7b49\u7b49\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6c34\u9f99\u5934"),(0,n.kt)("p",{parentName:"li"},"\u5728\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u514d\u4e0d\u4e86\u9700\u8981\u6d4b\u8bd5\u7f51\u7684 STC\uff0c\u6bd4\u5982\u652f\u4ed8 gas\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7 Starcoin \u63d0\u4f9b\u7684\u4e0d\u540c\u7f51\u7edc\uff08\u6682\u65f6\u53ea\u5f00\u653e Barnad\uff09\u7684\u6c34\u9f99\u5934\u7533\u8bf7 STC\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Barnard\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://faucet.starcoin.org"},"https://faucet.starcoin.org")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6d4f\u89c8\u5668"),(0,n.kt)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u4e5f\u662f\u5e38\u7528\u7684\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u662f\u94fe\u7684\u4e00\u4e2a\u8865\u5145\u3002Starcoin \u5e38\u7528\u7684\u6d4f\u89c8\u5668\u662f",(0,n.kt)("a",{parentName:"p",href:"https://stcscan.io/"},"stcscan"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6295\u7968 Dapp"),(0,n.kt)("p",{parentName:"li"},"\u6295\u7968 Dapp \u4e5f\u662f\u5e38\u7528\u7684\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u662f Starcoin \u94fe\u4e0a\u6cbb\u7406\u7684\u5165\u53e3\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a Dapp \u53d1\u8d77\u81ea\u5df1\u7684\u63d0\u6848\uff0c\u793e\u533a\u4f1a\u8fdb\u884c\u901a\u8fc7\u8fd9\u4e2a Dapp \u8fdb\u884c\u516c\u5f00\u3001\u516c\u5e73\u3001\u516c\u6b63\u5730\u6295\u7968\uff0c\u53ea\u6709\u6295\u7968\u901a\u8fc7\u624d\u80fd\u5728\u94fe\u4e0a\u6267\u884c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Starcoin logos && icons"))))}c.isMDXComponent=!0},7022:function(t,e,a){e.Z=a.p+"assets/images/dapp_1-4942ceb07950359f4cd81d2ef31bfdfb.png"},1516:function(t,e,a){e.Z=a.p+"assets/images/dapp_2-74ebae0ba86a50f301de39ebf2a93ee5.png"},3248:function(t,e,a){e.Z=a.p+"assets/images/pb-70072de3af92a69d04b9c237d6ee547b.jpg"}}]);