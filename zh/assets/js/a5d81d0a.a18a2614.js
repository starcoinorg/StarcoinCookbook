"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[500],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return b}});var t=a(7294);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function d(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?d(Object(a),!0).forEach((function(n){c(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,c=function(e,n){if(null==e)return{};var a,t,c={},d=Object.keys(e);for(t=0;t<d.length;t++)a=d[t],n.indexOf(a)>=0||(c[a]=e[a]);return c}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)a=d[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=t.createContext({}),i=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},s=function(e){var n=i(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,c=e.mdxType,d=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=i(a),b=c,p=f["".concat(o,".").concat(b)]||f[b]||u[b]||d;return a?t.createElement(p,r(r({ref:n},s),{},{components:a})):t.createElement(p,r({ref:n},s))}));function b(e,n){var a=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var d=a.length,r=new Array(d);r[0]=f;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:c,r[1]=l;for(var i=2;i<d;i++)r[i]=a[i];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6:function(e,n,a){a.r(n),a.d(n,{assets:function(){return o},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return i}});var t=a(3117),c=(a(7294),a(3905));const d={},r="\u91cd\u7f6e\u8d26\u6237\u79c1\u94a5",l={unversionedId:"getting-started/accounts/rotate-authentication-key",id:"getting-started/accounts/rotate-authentication-key",title:"\u91cd\u7f6e\u8d26\u6237\u79c1\u94a5",description:"\u8fd9\u7bc7\u6587\u7ae0\u6307\u5bfc\u4f60\u5982\u4f55\u5728 Starcoin \u533a\u5757\u94fe\u4e0a\u5b8c\u6210\u5bf9\u8d26\u6237\u7684\u79c1\u94a5\u91cd\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/03-accounts/04-rotate-authentication-key.md",sourceDirName:"02-getting-started/03-accounts",slug:"/getting-started/accounts/rotate-authentication-key",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/rotate-authentication-key",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/03-accounts/04-rotate-authentication-key.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u591a\u7b7e\u8d26\u6237\u548c\u591a\u7b7e\u4ea4\u6613",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/multisig-account"},next:{title:"StarMask \u5165\u95e8",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/use-starmask"}},o={},i=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u65b9\u6848\u4e00\uff1a\u5206\u6b65\u6267\u884c",id:"\u65b9\u6848\u4e00\u5206\u6b65\u6267\u884c",level:3},{value:"\u51c6\u5907\u65b0\u8d26\u6237",id:"\u51c6\u5907\u65b0\u8d26\u6237",level:4},{value:"\u6267\u884c auth key \u66ff\u6362\u5408\u7ea6",id:"\u6267\u884c-auth-key-\u66ff\u6362\u5408\u7ea6",level:4},{value:"\u65b9\u6848\u4e8c\uff1arotate-authentication-key \u547d\u4ee4",id:"\u65b9\u6848\u4e8crotate-authentication-key-\u547d\u4ee4",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:4},{value:"\u91cd\u7f6e\u4e00\u822c\u8d26\u6237\u4e3a\u591a\u7b7e\u8d26\u6237",id:"\u91cd\u7f6e\u4e00\u822c\u8d26\u6237\u4e3a\u591a\u7b7e\u8d26\u6237",level:3}],s={toc:i};function u(e){let{components:n,...a}=e;return(0,c.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u91cd\u7f6e\u8d26\u6237\u79c1\u94a5"},"\u91cd\u7f6e\u8d26\u6237\u79c1\u94a5"),(0,c.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u6307\u5bfc\u4f60\u5982\u4f55\u5728 Starcoin \u533a\u5757\u94fe\u4e0a\u5b8c\u6210\u5bf9\u8d26\u6237\u7684\u79c1\u94a5\u91cd\u7f6e\u3002"),(0,c.kt)("p",null,"\u4f7f\u7528\u573a\u666f\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u7528\u4e8e\u91cd\u7f6e\u8d26\u6237\u79c1\u94a5\u5e76\u4fdd\u7559\u5730\u5740"),(0,c.kt)("li",{parentName:"ol"},"\u5c06\u8d26\u6237\u91cd\u7f6e\u6210\u591a\u7b7e\u8d26\u6237\u5e76\u4fdd\u7559\u5730\u5740\uff08\u4f7f\u7528\u591a\u7b7e\u8d26\u6237\u79c1\u94a5\u5373\u53ef\uff09")),(0,c.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4e00\u4e2a ",(0,c.kt)("inlineCode",{parentName:"li"},"starcoin")," dev \u8282\u70b9\u5e76\u8fde\u63a5\u3002\u8be6\u7ec6\u6b65\u9aa4\u8bf7\u67e5\u9605",(0,c.kt)("a",{parentName:"li",href:"/starcoin-cookbook/zh/docs/getting-started/setup/starcoin-console"},"\u4f7f\u7528 starcoin \u63a7\u5236\u53f0"),"\u3002")),(0,c.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,c.kt)("p",null,"\u6211\u4eec\u6709\u4e24\u79cd\u65b9\u6cd5\u5b9e\u73b0\u91cd\u7f6e\u8d26\u6237 auth key\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"li"},"starcoin")," \u63d0\u4f9b\u7684\u64cd\u4f5c\u547d\u4ee4\u9010\u6b65\u5b8c\u6210\u66ff\u6362"),(0,c.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"li"},"rotate-authentication-key")," \u547d\u4ee4\u76f4\u63a5\u5b8c\u6210\u66ff\u6362")),(0,c.kt)("p",null,"\u5176\u4e2d\u65b9\u6848\u4e8c\u5bf9\u65b9\u6848\u4e00\u5404\u6761\u547d\u4ee4\u8fdb\u884c\u4e86\u6253\u5305\u64cd\u4f5c\uff0c\u66f4\u4e3a\u4fbf\u6377\u3002\u65b9\u6848\u4e00\u5219\u66f4\u52a0\u6e05\u6670\u53ef\u63a7\u3002"),(0,c.kt)("h3",{id:"\u65b9\u6848\u4e00\u5206\u6b65\u6267\u884c"},"\u65b9\u6848\u4e00\uff1a\u5206\u6b65\u6267\u884c"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u51c6\u5907\u65b0\u8d26\u6237 A"),(0,c.kt)("li",{parentName:"ul"},"\u6267\u884c auth key \u66ff\u6362\u5408\u7ea6\uff1a\u4f7f\u7528\u8d26\u6237 A \u7684 auth key \u66ff\u6362 B \u7684 auth key"),(0,c.kt)("li",{parentName:"ul"},"\u5220\u9664\u8d26\u6237 A \uff0cB"),(0,c.kt)("li",{parentName:"ul"},"\u4f7f\u7528 A \u7684\u79c1\u94a5\u4e0e B \u7684\u5730\u5740\u5012\u5165\u8d26\u6237\uff0c\u5b8c\u6210 B \u7684\u79c1\u94a5\u66ff\u6362")),(0,c.kt)("h4",{id:"\u51c6\u5907\u65b0\u8d26\u6237"},"\u51c6\u5907\u65b0\u8d26\u6237"),(0,c.kt)("p",null,"\u521b\u5efa\u65b0\u8d26\u6237 A\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account create -p my-pass\n{\n  "ok": {\n    "address": "0xc04c62b99fd053ac31d21d6e06619aed",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n    "receipt_identifier": "stc1pcpxx9wvl6pf6cvwjr4hqvcv6a5fwhx2t"\n  }\n}\n')),(0,c.kt)("p",null,"\u83b7\u53d6\u8d26\u6237 A \u7684 auth key\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xc04c62b99fd053ac31d21d6e06619aed\n{\n  "ok": {\n    "account": {\n      "address": "0xc04c62b99fd053ac31d21d6e06619aed",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n      "receipt_identifier": "stc1pcpxx9wvl6pf6cvwjr4hqvcv6a5fwhx2t"\n    },\n    "auth_key": "0x39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed",\n    "balances": {},\n    "sequence_number": null\n  }\n}\n')),(0,c.kt)("p",null,"\u83b7\u53d6\u8d26\u6237 A \u7684 private key:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account export 0xc04c62b99fd053ac31d21d6e06619aed -p my-pass\n{\n  "ok": {\n    "account": "0xc04c62b99fd053ac31d21d6e06619aed",\n    "private_key": "0x92e13795c658f40ead01db2b3a7ed351b07d85d92bb0f03a9b04364f6de487c9"\n  }\n}\n')),(0,c.kt)("h4",{id:"\u6267\u884c-auth-key-\u66ff\u6362\u5408\u7ea6"},"\u6267\u884c auth key \u66ff\u6362\u5408\u7ea6"),(0,c.kt)("p",null,"\u67e5\u770b\u8d26\u6237 B \uff08\u5f85\u66ff\u6362\u8d26\u6237\uff09\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x2a20e0bd8a26e6ed50a4dbba839ed1dbd99806d38c9c606646c9db6836ea0040",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x38992286a9a2256ae4a659d5c46bb877daf8e186dc97ee9ba6971b08115d4dc2",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 101000000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,c.kt)("p",null,"\u6267\u884c ",(0,c.kt)("inlineCode",{parentName:"p"},"rotate_authentication_key"),"\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account execute-function -s 0xdaf8e186dc97ee9ba6971b08115d4dc2 --function 0x1::Account::rotate_authentication_key --arg x"39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed" -b\n')),(0,c.kt)("p",null,"\u6267\u884c\u540e\u8d26\u6237 B \u7684\u72b6\u6001\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x2a20e0bd8a26e6ed50a4dbba839ed1dbd99806d38c9c606646c9db6836ea0040",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x38992286a9a2256ae4a659d5c46bb877daf8e186dc97ee9ba6971b08115d4dc2",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100941419\n    },\n    "sequence_number": 1\n  }\n}\n')),(0,c.kt)("p",null,"\u79fb\u9664\u8d26\u6237 A \u4e0e B\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account remove 0xc04c62b99fd053ac31d21d6e06619aed -p my-pass\n{\n  "ok": {\n    "address": "0xc04c62b99fd053ac31d21d6e06619aed",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n    "receipt_identifier": "stc1pcpxx9wvl6pf6cvwjr4hqvcv6a5fwhx2t"\n  }\n}\nstarcoin% account remove 0xdaf8e186dc97ee9ba6971b08115d4dc2 -p my-pass\n{\n  "ok": {\n    "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x2a20e0bd8a26e6ed50a4dbba839ed1dbd99806d38c9c606646c9db6836ea0040",\n    "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n  }\n}\n')),(0,c.kt)("p",null,"\u6839\u636e A \u8d26\u6237\u7684\u79c1\u94a5\uff0c B \u8d26\u6237\u7684\u5730\u5740\uff08\u539f\u5730\u5740\uff09\u5bfc\u5165\u8d26\u6237\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account import -i 0x92e13795c658f40ead01db2b3a7ed351b07d85d92bb0f03a9b04364f6de487c9 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n    "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n  }\n}\n')),(0,c.kt)("p",null,"\u67e5\u770b B \u8d26\u6237\u7684\u6700\u65b0\u72b6\u6001\uff0c\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0 B \u8d26\u6237\u5df2\u7ecf\u5b8c\u6210\u4e86 auth key \u7684\u66ff\u6362\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100941419\n    },\n    "sequence_number": 1\n  }\n}\n')),(0,c.kt)("p",null,"\u4e3a\u4e86\u68c0\u9a8c\u8d26\u6237\uff0c\u6211\u4eec\u4ece B \u8d26\u6237\u53d1\u8d77\u4e00\u7b14\u8f6c\u8d26\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account transfer -s 0xdaf8e186dc97ee9ba6971b08115d4dc2 -r 0xacff0c9a785004cdadec02ab76d44f32 -v 10000 -b\n")),(0,c.kt)("p",null,"\u67e5\u770b\u4e24\u4e2a\u8d26\u6237\u7684\u6700\u65b0\u60c5\u51b5\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100646888\n    },\n    "sequence_number": 2\n  }\n}\nstarcoin% account show 0xacff0c9a785004cdadec02ab76d44f32\n{\n  "ok": {\n    "account": {\n      "address": "0xacff0c9a785004cdadec02ab76d44f32",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0xfedc9c99956e25a66a5780922ada3fc8f70cff4f7f4ee87436fab64e727cd09b",\n      "receipt_identifier": "stc1p4nlsexnc2qzvmt0vq24hd4z0xg0dqv6e"\n    },\n    "auth_key": "0x6c871cf1618930b492fcd4fc56d9b5d7acff0c9a785004cdadec02ab76d44f32",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 10000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,c.kt)("h3",{id:"\u65b9\u6848\u4e8crotate-authentication-key-\u547d\u4ee4"},"\u65b9\u6848\u4e8c\uff1arotate-authentication-key \u547d\u4ee4"),(0,c.kt)("p",null,"\u5f85\u66ff\u6362\u8d26\u6237\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0x19b757b48a015ee035c03d01254d977d\n{\n  "ok": {\n    "account": {\n      "address": "0x19b757b48a015ee035c03d01254d977d",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0xf3ebe5f3b54f670d128b23ac48451ce4901b61c91a2fa3dffd42d36b8686f6b2",\n      "receipt_identifier": "stc1prxm40dy2q90wqdwq85qj2nvh05t82esr"\n    },\n    "auth_key": "0x45dfd6aee42561ebef18f7efadea276319b757b48a015ee035c03d01254d977d",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100000000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,c.kt)("p",null,"\u521b\u5efa\u65b0\u7684\u5bc6\u94a5\u5bf9\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account generate-keypair\n{\n  "ok": [\n    {\n      "address": "0x1876d22b496bf344ab22b4f2fad63226",\n      "auth_key": "0x6e90f703921b70d637e0c6ab4bf329da1876d22b496bf344ab22b4f2fad63226",\n      "private_key": "0xe44035658755709e7567d1ee34c8563400fae6362efe4d8ea4dc1a6fa13f8a79",\n      "public_key": "0xff23b3c540ac5040846ccd2664fec13d9470ebfb4cb42afd5f25be2c5e0c00d5",\n      "receipt_identifier": "stc1prpmdy26fd0e5f2ezkne0443jychq0vzt"\n    }\n  ]\n}\n')),(0,c.kt)("p",null,"\u76f4\u63a5\u5b8c\u6210 auth key \u7684\u66ff\u6362\uff0c\u539f\u8d26\u6237\u7684\u91cd\u65b0\u5bfc\u5165\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account rotate-authentication-key 0x19b757b48a015ee035c03d01254d977d -i 0xe44035658755709e7567d1ee34c8563400fae6362efe4d8ea4dc1a6fa13f8a79 --password my-pass\ntxn 0x1d97effb8f8e2b598bd67e70047c2b9862e6d0cb823e77f8173dcaa546733be8 submitted.\n{\n  "ok": {\n    "address": "0x19b757b48a015ee035c03d01254d977d",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0xff23b3c540ac5040846ccd2664fec13d9470ebfb4cb42afd5f25be2c5e0c00d5",\n    "receipt_identifier": "stc1prxm40dy2q90wqdwq85qj2nvh05t82esr"\n  }\n}\n\nstarcoin% account show 0x19b757b48a015ee035c03d01254d977d\n{\n  "ok": {\n    "account": {\n      "address": "0x19b757b48a015ee035c03d01254d977d",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0xff23b3c540ac5040846ccd2664fec13d9470ebfb4cb42afd5f25be2c5e0c00d5",\n      "receipt_identifier": "stc1prxm40dy2q90wqdwq85qj2nvh05t82esr"\n    },\n    "auth_key": "0x6e90f703921b70d637e0c6ab4bf329da1876d22b496bf344ab22b4f2fad63226",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 99941419\n    },\n    "sequence_number": 1\n  }\n}\n')),(0,c.kt)("h4",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,c.kt)("p",null,"\u8003\u8651\u5230\u672c\u5730\u72b6\u6001\u4e0e\u94fe\u4e0a\u72b6\u6001\u4e00\u81f4\u6027\u53ef\u80fd\u4f1a\u88ab\u610f\u5916\u6545\u969c\u6253\u65ad\uff0c\u4ece\u800c\u5f97\u4e0d\u5230\u547d\u4ee4\u7684\u8fd4\u56de\u503c\uff0c\u6211\u4eec\u9700\u8981\u6062\u590d\u624b\u6bb5\u3002\u65e0\u8fd4\u56de\u503c\u5171\u6709\u5982\u4e0b\u4e09\u79cd\u60c5\u51b5\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"auth key \u5e76\u672a\u88ab\u66ff\u6362\uff1a\u91cd\u65b0\u6267\u884c\u547d\u4ee4"),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("inlineCode",{parentName:"li"},"INVALID_AUTH_KEY")," \u9519\u8bef\uff1a\u5220\u9664\u8d26\u6237\u5e76\u4f7f\u7528\u65b0\u7684\u5bc6\u94a5\u91cd\u65b0\u5bfc\u5165\u5373\u53ef\u3002\u8fd9\u662f\u7531\u4e8e remove \u8d26\u6237\u65f6\u5f02\u5e38\u9000\u51fa\u5bfc\u81f4\u7684\u3002"),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("inlineCode",{parentName:"li"},"account not existed")," \u9519\u8bef\uff1a\u4f7f\u7528\u65b0\u7684\u5bc6\u94a5\u91cd\u65b0\u5bfc\u5165\u5373\u53ef\u3002\u8fd9\u662f\u7531\u4e8e import \u8d26\u6237\u65f6\u5f02\u5e38\u9000\u51fa\u5bfc\u81f4\u7684\u3002")),(0,c.kt)("h3",{id:"\u91cd\u7f6e\u4e00\u822c\u8d26\u6237\u4e3a\u591a\u7b7e\u8d26\u6237"},"\u91cd\u7f6e\u4e00\u822c\u8d26\u6237\u4e3a\u591a\u7b7e\u8d26\u6237"),(0,c.kt)("p",null,"TODO ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starcoin/issues/3411"},"\u591a\u7b7e\u91cd\u6784"),"\u5b8c\u6210\u540e\u8865\u5145"))}u.isMDXComponent=!0}}]);