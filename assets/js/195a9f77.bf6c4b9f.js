"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[5662],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(a),f=c,b=p["".concat(i,".").concat(f)]||p[f]||l[f]||r;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function f(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,o=new Array(r);o[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:c,o[1]=d;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3209:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return l},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return s}});var n=a(3117),c=(a(7294),a(3905));const r={},o="Rotate Authentication Key",d={unversionedId:"getting-started/accounts/rotate-authentication-key",id:"getting-started/accounts/rotate-authentication-key",title:"Rotate Authentication Key",description:"This article guides you on how to complete a private key reset for your account on the Starcoin blockchain.",source:"@site/docs/02-getting-started/03-accounts/04-rotate-authentication-key.md",sourceDirName:"02-getting-started/03-accounts",slug:"/getting-started/accounts/rotate-authentication-key",permalink:"/docs/getting-started/accounts/rotate-authentication-key",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/02-getting-started/03-accounts/04-rotate-authentication-key.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multisig accounts and multisig transactions",permalink:"/docs/getting-started/accounts/multisig-account"},next:{title:"StarMask Introduction",permalink:"/docs/getting-started/accounts/use-starmask"}},i={},s=[{value:"Preparation",id:"preparation",level:2},{value:"Steps",id:"steps",level:2},{value:"Option 1: Step-by-step execution",id:"option-1-step-by-step-execution",level:3},{value:"Prepare a new account",id:"prepare-a-new-account",level:4},{value:"Execute rotate authentication key script function",id:"execute-rotate-authentication-key-script-function",level:4},{value:"Option 2\uff1arotate-authentication-key cmd",id:"option-2rotate-authentication-key-cmd",level:3},{value:"Caution",id:"caution",level:4},{value:"Change an account to a multi-sign account by rotating the authentication key",id:"change-an-account-to-a-multi-sign-account-by-rotating-the-authentication-key",level:3}],u={toc:s};function l(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"rotate-authentication-key"},"Rotate Authentication Key"),(0,c.kt)("p",null,"This article guides you on how to complete a private key reset for your account on the Starcoin blockchain."),(0,c.kt)("p",null,"Usage scenarios."),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"for resetting the account private key and keeping the address"),(0,c.kt)("li",{parentName:"ol"},"to reset an account to a multi-signature account and keep the address (just use the multi-signature account private key)")),(0,c.kt)("h2",{id:"preparation"},"Preparation"),(0,c.kt)("p",null,"Start a ",(0,c.kt)("inlineCode",{parentName:"p"},"starcoin")," dev node and connect it. See ",(0,c.kt)("a",{parentName:"p",href:"/docs/getting-started/setup/starcoin-console"},"Using the starcoin console")," for detailed steps."),(0,c.kt)("h2",{id:"steps"},"Steps"),(0,c.kt)("p",null,"There are two ways to reset the account auth key."),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"replace it step by step using the commands provided by ",(0,c.kt)("inlineCode",{parentName:"li"},"starcoin")),(0,c.kt)("li",{parentName:"ol"},"use the ",(0,c.kt)("inlineCode",{parentName:"li"},"rotate-authentication-key")," command to replace it directly")),(0,c.kt)("p",null,"Option 2 is a more convenient way to package all the commands in Option 1. Option 1 is more clear and controllable."),(0,c.kt)("h3",{id:"option-1-step-by-step-execution"},"Option 1: Step-by-step execution"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Prepare new account A"),(0,c.kt)("li",{parentName:"ul"},"Execute the auth key replacement contract: use the auth key of account A to replace the auth key of account B"),(0,c.kt)("li",{parentName:"ul"},"Delete accounts A, B"),(0,c.kt)("li",{parentName:"ul"},"Use A's private key and B's address to dump into the account to complete B's private key replacement")),(0,c.kt)("h4",{id:"prepare-a-new-account"},"Prepare a new account"),(0,c.kt)("p",null,"Create a new account A."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account create -p my-pass\n{\n  "ok": {\n    "address": "0xc04c62b99fd053ac31d21d6e06619aed",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n    "receipt_identifier": "stc1pcpxx9wvl6pf6cvwjr4hqvcv6a5fwhx2t"\n  }\n}\n')),(0,c.kt)("p",null,"Get account A's auth key:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xc04c62b99fd053ac31d21d6e06619aed\n{\n  "ok": {\n    "account": {\n      "address": "0xc04c62b99fd053ac31d21d6e06619aed",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n      "receipt_identifier": "stc1pcpxx9wvl6pf6cvwjr4hqvcv6a5fwhx2t"\n    },\n    "auth_key": "0x39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed",\n    "balances": {},\n    "sequence_number": null\n  }\n}\n')),(0,c.kt)("p",null,"Get account A's private key:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account export 0xc04c62b99fd053ac31d21d6e06619aed -p my-pass\n{\n  "ok": {\n    "account": "0xc04c62b99fd053ac31d21d6e06619aed",\n    "private_key": "0x92e13795c658f40ead01db2b3a7ed351b07d85d92bb0f03a9b04364f6de487c9"\n  }\n}\n')),(0,c.kt)("h4",{id:"execute-rotate-authentication-key-script-function"},"Execute rotate authentication key script function"),(0,c.kt)("p",null,"Get account B's info:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x2a20e0bd8a26e6ed50a4dbba839ed1dbd99806d38c9c606646c9db6836ea0040",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x38992286a9a2256ae4a659d5c46bb877daf8e186dc97ee9ba6971b08115d4dc2",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 101000000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,c.kt)("p",null,"execute ",(0,c.kt)("inlineCode",{parentName:"p"},"rotate_authentication_key"),"\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account execute-function -s 0xdaf8e186dc97ee9ba6971b08115d4dc2 --function 0x1::Account::rotate_authentication_key --arg x"39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed" -b\n')),(0,c.kt)("p",null,"After execution\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x2a20e0bd8a26e6ed50a4dbba839ed1dbd99806d38c9c606646c9db6836ea0040",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x38992286a9a2256ae4a659d5c46bb877daf8e186dc97ee9ba6971b08115d4dc2",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100941419\n    },\n    "sequence_number": 1\n  }\n}\n')),(0,c.kt)("p",null,"Remove account A and B\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account remove 0xc04c62b99fd053ac31d21d6e06619aed -p my-pass\n{\n  "ok": {\n    "address": "0xc04c62b99fd053ac31d21d6e06619aed",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n    "receipt_identifier": "stc1pcpxx9wvl6pf6cvwjr4hqvcv6a5fwhx2t"\n  }\n}\nstarcoin% account remove 0xdaf8e186dc97ee9ba6971b08115d4dc2 -p my-pass\n{\n  "ok": {\n    "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x2a20e0bd8a26e6ed50a4dbba839ed1dbd99806d38c9c606646c9db6836ea0040",\n    "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n  }\n}\n')),(0,c.kt)("p",null,"Import account by account A's private key & account B's address:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account import -i 0x92e13795c658f40ead01db2b3a7ed351b07d85d92bb0f03a9b04364f6de487c9 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n    "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n  }\n}\n')),(0,c.kt)("p",null,"In account B's latest info, we'll find auth key has been rotated:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100941419\n    },\n    "sequence_number": 1\n  }\n}\n')),(0,c.kt)("p",null,"To check the account, we initiate a transfer from account B:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account transfer -s 0xdaf8e186dc97ee9ba6971b08115d4dc2 -r 0xacff0c9a785004cdadec02ab76d44f32 -v 10000 -b\n")),(0,c.kt)("p",null,"The latest account info of A & B\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100646888\n    },\n    "sequence_number": 2\n  }\n}\nstarcoin% account show 0xacff0c9a785004cdadec02ab76d44f32\n{\n  "ok": {\n    "account": {\n      "address": "0xacff0c9a785004cdadec02ab76d44f32",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0xfedc9c99956e25a66a5780922ada3fc8f70cff4f7f4ee87436fab64e727cd09b",\n      "receipt_identifier": "stc1p4nlsexnc2qzvmt0vq24hd4z0xg0dqv6e"\n    },\n    "auth_key": "0x6c871cf1618930b492fcd4fc56d9b5d7acff0c9a785004cdadec02ab76d44f32",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 10000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,c.kt)("h3",{id:"option-2rotate-authentication-key-cmd"},"Option 2\uff1arotate-authentication-key cmd"),(0,c.kt)("p",null,"Account waiting for rotation\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0x19b757b48a015ee035c03d01254d977d\n{\n  "ok": {\n    "account": {\n      "address": "0x19b757b48a015ee035c03d01254d977d",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0xf3ebe5f3b54f670d128b23ac48451ce4901b61c91a2fa3dffd42d36b8686f6b2",\n      "receipt_identifier": "stc1prxm40dy2q90wqdwq85qj2nvh05t82esr"\n    },\n    "auth_key": "0x45dfd6aee42561ebef18f7efadea276319b757b48a015ee035c03d01254d977d",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100000000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,c.kt)("p",null,"Generating new keypair\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account generate-keypair\n{\n  "ok": [\n    {\n      "address": "0x1876d22b496bf344ab22b4f2fad63226",\n      "auth_key": "0x6e90f703921b70d637e0c6ab4bf329da1876d22b496bf344ab22b4f2fad63226",\n      "private_key": "0xe44035658755709e7567d1ee34c8563400fae6362efe4d8ea4dc1a6fa13f8a79",\n      "public_key": "0xff23b3c540ac5040846ccd2664fec13d9470ebfb4cb42afd5f25be2c5e0c00d5",\n      "receipt_identifier": "stc1prpmdy26fd0e5f2ezkne0443jychq0vzt"\n    }\n  ]\n}\n')),(0,c.kt)("p",null,"Executing ",(0,c.kt)("inlineCode",{parentName:"p"},"rotate-authentication-key")," cmd, please also change default account to any other address before execute."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account rotate-authentication-key 0x19b757b48a015ee035c03d01254d977d -i 0xe44035658755709e7567d1ee34c8563400fae6362efe4d8ea4dc1a6fa13f8a79 --password my-pass\ntxn 0x1d97effb8f8e2b598bd67e70047c2b9862e6d0cb823e77f8173dcaa546733be8 submitted.\n{\n  "ok": {\n    "address": "0x19b757b48a015ee035c03d01254d977d",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0xff23b3c540ac5040846ccd2664fec13d9470ebfb4cb42afd5f25be2c5e0c00d5",\n    "receipt_identifier": "stc1prxm40dy2q90wqdwq85qj2nvh05t82esr"\n  }\n}\n\nstarcoin% account show 0x19b757b48a015ee035c03d01254d977d\n{\n  "ok": {\n    "account": {\n      "address": "0x19b757b48a015ee035c03d01254d977d",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0xff23b3c540ac5040846ccd2664fec13d9470ebfb4cb42afd5f25be2c5e0c00d5",\n      "receipt_identifier": "stc1prxm40dy2q90wqdwq85qj2nvh05t82esr"\n    },\n    "auth_key": "0x6e90f703921b70d637e0c6ab4bf329da1876d22b496bf344ab22b4f2fad63226",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 99941419\n    },\n    "sequence_number": 1\n  }\n}\n')),(0,c.kt)("h4",{id:"caution"},"Caution"),(0,c.kt)("p",null,"Considering that the local state consistency with the on-chain state may be interrupted by unexpected failures, thus not getting the return value of the command, we need the means to recover. There are three cases of no return value as follows."),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"auth key has not been replaced: re-execute the command"),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("inlineCode",{parentName:"li"},"INVALID_AUTH_KEY")," error: Remove the account and re-import it with a new key manually. This is caused by an abnormal exit when removing the account."),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("inlineCode",{parentName:"li"},"account not existed")," error: Re-import with a new key manually. This is caused by an abnormal exit when importing the account.")),(0,c.kt)("h3",{id:"change-an-account-to-a-multi-sign-account-by-rotating-the-authentication-key"},"Change an account to a multi-sign account by rotating the authentication key"),(0,c.kt)("p",null,"TODO After ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starcoin/issues/3411"},"refactor multi-sign")," done."))}l.isMDXComponent=!0}}]);