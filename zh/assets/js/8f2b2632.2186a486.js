"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[9966],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=s(n),m=r,d=k["".concat(p,".").concat(m)]||k[m]||u[m]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},764:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var a=n(3117),r=(n(7294),n(3905));const l={},i="\u5982\u4f55\u53c2\u4e0e\u4e3b\u7f51\u7edc",o={unversionedId:"getting-started/setup/main-network",id:"getting-started/setup/main-network",title:"\u5982\u4f55\u53c2\u4e0e\u4e3b\u7f51\u7edc",description:"\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/02-setup/06-main-network.md",sourceDirName:"02-getting-started/02-setup",slug:"/getting-started/setup/main-network",permalink:"/zh/docs/getting-started/setup/main-network",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/02-setup/06-main-network.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u66f4\u5feb\u5730\u540c\u6b65\u5757\u548c\u72b6\u6001\u3002",permalink:"/zh/docs/getting-started/setup/fast-sync-data"},next:{title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u7684 Starcoin \u7f51\u7edc",permalink:"/zh/docs/getting-started/setup/private-network"}},p={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"Windows \u52a0\u5165\u4e3b\u7f51\u7edc",id:"windows-\u52a0\u5165\u4e3b\u7f51\u7edc",level:2},{value:"Linux \u52a0\u5165\u4e3b\u7f51\u7edc\uff08\u63a8\u8350\uff09",id:"linux-\u52a0\u5165\u4e3b\u7f51\u7edc\u63a8\u8350",level:2},{value:"Docker \u52a0\u5165\u4e3b\u7f51\u7edc",id:"docker-\u52a0\u5165\u4e3b\u7f51\u7edc",level:2},{value:"\u79cd\u5b50\u8282\u70b9\u5730\u5740",id:"\u79cd\u5b50\u8282\u70b9\u5730\u5740",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5982\u4f55\u53c2\u4e0e\u4e3b\u7f51\u7edc"},"\u5982\u4f55\u53c2\u4e0e\u4e3b\u7f51\u7edc"),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"2021\u5e745\u670818\u65e5\uff0cStarcoin \u4e3e\u884c\u5168\u7403\u53d1\u5e03\u4f1a\uff0c\u5728\u805a\u5149\u706f\u7684\u7167\u8000\u4e0b\uff0c\u5ba3\u5e03\u542f\u52a8\u4e3b\u7f51\u3002\n\u8fd9\u662f\u4e00\u4e2a\u91cc\u7a0b\u7891\u65f6\u523b\uff0c\u610f\u5473\u7740 Starcoin \u8fd9\u8258\u8239\u8236\uff0c\u5728\u533a\u5757\u94fe\u7684\u84dd\u6d77\u91cc\uff0c\u6b63\u5f0f\u626c\u5e06\u8d77\u822a\u3002"),(0,r.kt)("h2",{id:"windows-\u52a0\u5165\u4e3b\u7f51\u7edc"},"Windows \u52a0\u5165\u4e3b\u7f51\u7edc"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. \u542f\u52a8")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin.exe --net main ^\n    --disable-metrics true ^\n    --node-name starcoin-main ^\n    --data-dir D:\\starcoin\\data ^\n    --logger-disable-file true ^\n    --stratum-address 0.0.0.0 --stratum-port 9880\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--net"),"\uff1a\u6307\u5b9a\u7f51\u7edc\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--disable-metrics"),"\uff1a\u662f\u5426\u8981\u7981\u7528\u6307\u6807\u76d1\u63a7\u670d\u52a1\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"true")," \u7981\u7528\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"false")," \u4e0d\u7981\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--node-name"),"\uff1a\u8282\u70b9\u540d\u79f0\uff0c\u4ec5\u7528\u4e8e\u663e\u793a\uff0c\u53ef\u6839\u636e\u81ea\u5df1\u7684\u559c\u597d\u53d6\u4e2a\u6709\u7279\u8272\u7684\u540d\u5b57\u3002\u82e5\u4e0d\u6307\u5b9a\uff0c\u5219\u968f\u673a\u751f\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--data-dir"),"\uff1a\u6570\u636e\u5b58\u653e\u76ee\u5f55\uff0c\u5efa\u8bae\u9009\u62e9\u4e00\u4e2a\u5bb9\u6613\u67e5\u627e\u7684\u8def\u5f84\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--logger-disable-file"),"\uff1a\u662f\u5426\u8981\u7981\u7528\u6587\u4ef6\u65e5\u5fd7\u91c7\u96c6\u5668\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"true")," \u7981\u7528\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"false")," \u4e0d\u7981\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--stratum-address"),"\uff1a\u6307\u5b9a\u77ff\u6c60\u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--stratum-port"),"\uff1a\u6307\u5b9a\u77ff\u6c60\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"9880"),"\u3002")),(0,r.kt)("p",null,"\u5728 Windows \u7684 cmd \u7a97\u53e3\u8f93\u5165\u4e0a\u8ff0\u547d\u4ee4\u540e\uff0c\u56de\u8f66\uff0c\u8282\u70b9\u5c31\u5f00\u59cb\u540c\u6b65\u533a\u5757\u6570\u636e\u4e86\uff0c\u7b49\u5f85\u540c\u6b65\u5b8c\u6210\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. \u67e5\u770b IPC \u6587\u4ef6\u8def\u5f84")),(0,r.kt)("p",null,"\u7528\u9f20\u6807\u62d6\u62fd\u4fa7\u8fb9\u680f\u5230\u9876\u90e8\uff0c\u53ef\u4ee5\u770b\u5230\u8f93\u51fa\u4e2d\u663e\u793a\u6709 IPC \u6587\u4ef6\u7684\u5b58\u653e\u8def\u5f84\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'2022-05-23T16:40:06.642907500+08:00 INFO - Ipc file path: "\\\\\\\\.\\\\pipe\\\\starcoin\\\\main\\\\starcoin.ipc\n\n# IPC \u6587\u4ef6\u8def\u5f84\u4e3a\uff1a\n\\\\\\\\.\\\\pipe\\\\starcoin\\\\main\\\\starcoin.ipc\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. \u67e5\u770b\u8282\u70b9\u540c\u6b65\u8fdb\u5ea6")),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u77e5\u9053\u8282\u70b9\u540c\u6b65\u6570\u636e\u7684\u8fdb\u5ea6\uff0c\u6b64\u65f6\u53ef\u4ee5\u518d\u6253\u5f00\u4e00\u4e2a\u65b0\u7684 cmd \u7a97\u53e3\uff0c\u7528 IPC \u6587\u4ef6\u6765\u8fde\u63a5\u5230 Starcoin \u63a7\u5236\u53f0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin.exe -c \\\\.\\pipe\\starcoin\\main\\starcoin.ipc console\n")),(0,r.kt)("p",null,"\u5728 Starcoin \u63a7\u5236\u53f0\u4e2d\u8f93\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node sync status\n")),(0,r.kt)("p",null,"\u5728\u8f93\u51fa\u7684 JSON \u6570\u636e\u4e2d\u53ef\u4ee5\u627e\u5230\u4e00\u4e9b\u5173\u952e\u4fe1\u606f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"chain_status.head.number")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"state.Synchronizing.target.number")," \u76f8\u7b49\u65f6\uff0c\u540c\u6b65\u624d\u5b8c\u6210\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. \u67e5\u770b\u9ed8\u8ba4\u8d26\u53f7")),(0,r.kt)("p",null,"\u6bcf\u4e2a\u65b0\u542f\u52a8\u7684\u8282\u70b9\uff0c\u90fd\u521d\u59cb\u5316\u6709\u4e00\u4e2a\u9ed8\u8ba4\u8d26\u6237\uff0c\u5bc6\u7801\u4e3a\u7a7a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b\u9ed8\u8ba4\u8d26\u6237\uff0c\u627e\u5230\u8d26\u6237\u5730\u5740\naccount default\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. \u5bfc\u51fa\u9ed8\u8ba4\u8d26\u6237\u7684\u79c1\u94a5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"account export <ADDRESS>\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u8bf7\u59a5\u5584\u4fdd\u7ba1\u597d\u79c1\u94a5\uff01"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6. \u9000\u51fa\u63a7\u5236\u53f0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"exit\n")),(0,r.kt)("h2",{id:"linux-\u52a0\u5165\u4e3b\u7f51\u7edc\u63a8\u8350"},"Linux \u52a0\u5165\u4e3b\u7f51\u7edc\uff08\u63a8\u8350\uff09"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. \u542f\u52a8")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"starcoin")," \u547d\u4ee4\uff0c\u9ed8\u8ba4\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," \u7f51\u7edc\uff0c\u9ed8\u8ba4\u7981\u7528\u6316\u77ff\u5ba2\u6237\u7aef\uff0c\u9ed8\u8ba4\u4e0d\u76d1\u542c\u77ff\u6c60\uff0c\u6570\u636e\u76ee\u5f55\u9ed8\u8ba4\u4e3a\u4e3b\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".starcoin/main"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u6570\u636e\u76ee\u5f55\uff0cubuntu \u662f\u6f14\u793a\u7684\u7528\u6237\u540d\uff0c\u8bf7\u6839\u636e\u4f60\u7684\u5b9e\u9645\u60c5\u51b5\u53d8\u66f4\n2022-05-24T10:07:29.069207121+08:00 INFO - Final data-dir is : "/home/ubuntu/.starcoin/main"\n\n# IPC \u6587\u4ef6\u8def\u5f84\n2022-05-24T10:07:29.061062410+08:00 INFO - Ipc file path: "/home/ubuntu/.starcoin/main/starcoin.ipc"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. \u67e5\u770b\u8282\u70b9\u540c\u6b65\u8fdb\u5ea6")),(0,r.kt)("p",null,"\u6253\u5f00\u4e00\u4e2a\u65b0\u7684\u547d\u4ee4\u884c\u7a97\u53e3\uff0c\u8f93\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin -c ~/.starcoin/main/starcoin.ipc console\n")),(0,r.kt)("p",null,"\u5728 Starcoin \u63a7\u5236\u53f0\u4e2d\u8f93\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node sync status\n")),(0,r.kt)("p",null,"\u5728\u8f93\u51fa\u7684 JSON \u6570\u636e\u4e2d\u53ef\u4ee5\u627e\u5230\u4e00\u4e9b\u5173\u952e\u4fe1\u606f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"chain_status.head.number")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"state.Synchronizing.target.number")," \u76f8\u7b49\u65f6\uff0c\u540c\u6b65\u624d\u5b8c\u6210\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. \u67e5\u770b\u9ed8\u8ba4\u8d26\u53f7")),(0,r.kt)("p",null,"\u6bcf\u4e2a\u65b0\u542f\u52a8\u7684\u8282\u70b9\uff0c\u90fd\u521d\u59cb\u5316\u6709\u4e00\u4e2a\u9ed8\u8ba4\u8d26\u6237\uff0c\u5bc6\u7801\u4e3a\u7a7a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b\u9ed8\u8ba4\u8d26\u6237\uff0c\u627e\u5230\u8d26\u6237\u5730\u5740\naccount default\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. \u5bfc\u51fa\u9ed8\u8ba4\u8d26\u6237\u7684\u79c1\u94a5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"account export <ADDRESS>\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u8bf7\u59a5\u5584\u4fdd\u7ba1\u597d\u79c1\u94a5\uff01"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. \u9000\u51fa\u63a7\u5236\u53f0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"exit\n")),(0,r.kt)("h2",{id:"docker-\u52a0\u5165\u4e3b\u7f51\u7edc"},"Docker \u52a0\u5165\u4e3b\u7f51\u7edc"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. \u62c9\u53d6 ",(0,r.kt)("a",{parentName:"strong",href:"https://hub.docker.com/r/starcoin/starcoin/"},"Docker \u955c\u50cf"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull starcoin/starcoin:latest\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u6307\u5b9a\u7248\u672c\uff0c\u53ef\u4ee5\u66f4\u6539\u62c9\u53d6\u7684\u6807\u7b7e\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.11.9"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull starcoin/starcoin:v1.11.9\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. \u542f\u52a8")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"starcoin")," \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5728\u955c\u50cf\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/starcoin")," \u76ee\u5f55\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name starcoin -v ~/.starcoin/:/root/.starcoin/ --network host starcoin/starcoin:latest /starcoin/starcoin\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--name"),"\uff1a\u6307\u5b9a\u5bb9\u5668\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v"),"\uff1a\u7ed1\u5b9a\u6302\u8f7d\u5377\uff0c\u7528\u4e8e\u6301\u4e45\u5316 Docker \u4e2d\u7684\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--network"),"\uff1a\u8ba9 Docker \u5bb9\u5668\u7684\u7f51\u7edc\u9644\u5c5e\u5728\u4e3b\u673a\u4e0a\uff0c\u4e24\u8005\u4e92\u901a\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. \u901a\u8fc7 Docker \u8fde\u63a5\u5230 Starcoin \u63a7\u5236\u53f0")),(0,r.kt)("p",null,"\u6253\u5f00\u4e00\u4e2a\u65b0\u7684\u547d\u4ee4\u884c\u7a97\u53e3\uff0c\u8f93\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -it -v ~/.starcoin/:/root/.starcoin/ starcoin/starcoin:latest /starcoin/starcoin -c /root/.starcoin/main/starcoin.ipc console\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--rm"),"\uff1a\u9000\u51fa Starcoin \u63a7\u5236\u53f0\u65f6\uff0c\u81ea\u52a8\u79fb\u9664\u5bb9\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-it"),"\uff1a\u4ea4\u4e92\u5f0f\u8fdb\u5165\u5bb9\u5668\uff0c\u5206\u914d\u865a\u62df\u7ec8\u7aef\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u542f\u7528\u65b0\u7684\u5bb9\u5668\uff0c\u53ef\u4ee5\u76f4\u63a5\u63a5\u5165\u542f\u52a8 Starcoin \u7684\u5bb9\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker container exec -it starcoin bash\n\n/starcoin/starcoin -c /root/.starcoin/main/starcoin.ipc console\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. \u67e5\u770b\u8282\u70b9\u540c\u6b65\u8fdb\u5ea6")),(0,r.kt)("p",null,"\u5728 Starcoin \u63a7\u5236\u53f0\u4e2d\u8f93\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node sync status\n")),(0,r.kt)("p",null,"\u5728\u8f93\u51fa\u7684 JSON \u6570\u636e\u4e2d\u53ef\u4ee5\u627e\u5230\u4e00\u4e9b\u5173\u952e\u4fe1\u606f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"chain_status.head.number")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"state.Synchronizing.target.number")," \u76f8\u7b49\u65f6\uff0c\u540c\u6b65\u624d\u5b8c\u6210\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. \u67e5\u770b\u9ed8\u8ba4\u8d26\u53f7")),(0,r.kt)("p",null,"\u6bcf\u4e2a\u65b0\u542f\u52a8\u7684\u8282\u70b9\uff0c\u90fd\u521d\u59cb\u5316\u6709\u4e00\u4e2a\u9ed8\u8ba4\u8d26\u6237\uff0c\u5bc6\u7801\u4e3a\u7a7a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b\u9ed8\u8ba4\u8d26\u6237\uff0c\u627e\u5230\u8d26\u6237\u5730\u5740\naccount default\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6. \u5bfc\u51fa\u9ed8\u8ba4\u8d26\u6237\u7684\u79c1\u94a5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"account export <ADDRESS>\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u8bf7\u59a5\u5584\u4fdd\u7ba1\u597d\u79c1\u94a5\uff01"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7. \u9000\u51fa\u63a7\u5236\u53f0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"exit\n")),(0,r.kt)("h2",{id:"\u79cd\u5b50\u8282\u70b9\u5730\u5740"},"\u79cd\u5b50\u8282\u70b9\u5730\u5740"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP: ",(0,r.kt)("a",{parentName:"li",href:"http://main.seed.starcoin.org"},"http://main.seed.starcoin.org")),(0,r.kt)("li",{parentName:"ul"},"HTTPS: ",(0,r.kt)("a",{parentName:"li",href:"https://main-seed.starcoin.org"},"https://main-seed.starcoin.org")),(0,r.kt)("li",{parentName:"ul"},"WebSocket: ws://main.seed.starcoin.org:9870")))}u.isMDXComponent=!0}}]);