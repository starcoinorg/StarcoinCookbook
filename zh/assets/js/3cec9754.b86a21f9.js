"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[1753],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,f=c["".concat(o,".").concat(u)]||c[u]||p[u]||l;return n?a.createElement(f,s(s({ref:t},h),{},{components:n})):a.createElement(f,s({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<l;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4471:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905));const l={},s="Sparse Merkle Tree",i={unversionedId:"concepts/smt",id:"concepts/smt",title:"Sparse Merkle Tree",description:"\u8981\u4e86\u89e3\u4e3a\u4ec0\u4e48\u7528Sparse Merkle Tree (\u4e0b\u9762\u7b80\u79f0 SMT )\uff0c\u5148\u9700\u8981\u4e86\u89e3\u4e0b Merkle Tree",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/99-concepts/05-smt.md",sourceDirName:"99-concepts",slug:"/concepts/smt",permalink:"/zh/docs/concepts/smt",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/99-concepts/05-smt.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u72b6\u6001",permalink:"/zh/docs/concepts/state"},next:{title:"Accumulator",permalink:"/zh/docs/concepts/accumulator"}},o={},d=[{value:"SMT",id:"smt",level:2},{value:"\u4ecb\u7ecd\u4e0b\u4e3a\u5565\u9700\u8981\u7528SMT",id:"\u4ecb\u7ecd\u4e0b\u4e3a\u5565\u9700\u8981\u7528smt",level:3},{value:"SMT\u8bbe\u8ba1\u539f\u7406",id:"smt\u8bbe\u8ba1\u539f\u7406",level:3},{value:"Merkle Tree \u5230SMT",id:"merkle-tree-\u5230smt",level:4},{value:"\u57fa\u6570\u6811\u524d\u7f00\u538b\u7f29",id:"\u57fa\u6570\u6811\u524d\u7f00\u538b\u7f29",level:4},{value:"SMT \u6570\u636e\u7ed3\u6784\u548c\u64cd\u4f5c",id:"smt-\u6570\u636e\u7ed3\u6784\u548c\u64cd\u4f5c",level:3},{value:"\u5728\u7a7a\u6811\u79cd\u521b\u5efa LeafNode \u4f8b\u5b50",id:"\u5728\u7a7a\u6811\u79cd\u521b\u5efa-leafnode-\u4f8b\u5b50",level:2},{value:"\u63d2\u5165\u6d41\u7a0b",id:"\u63d2\u5165\u6d41\u7a0b",level:2},{value:"\u7a7a\u6811\u63d2\u5165\u53f6\u5b50",id:"\u7a7a\u6811\u63d2\u5165\u53f6\u5b50",level:3},{value:"\u65b0\u63d2\u5165\u53f6\u5b50\u8282\u70b9\u548c\u67d0\u4e2a\u53f6\u5b50\u8282\u70b9\u6709\u516c\u5171\u524d\u7f00",id:"\u65b0\u63d2\u5165\u53f6\u5b50\u8282\u70b9\u548c\u67d0\u4e2a\u53f6\u5b50\u8282\u70b9\u6709\u516c\u5171\u524d\u7f00",level:3},{value:"\u65b0\u63d2\u5165\u53f6\u5b50\u7ed3\u70b9\u548c\u67d0\u4e2a\u5185\u90e8\u8282\u70b9\u6709\u516c\u5171\u524d\u7f00",id:"\u65b0\u63d2\u5165\u53f6\u5b50\u7ed3\u70b9\u548c\u67d0\u4e2a\u5185\u90e8\u8282\u70b9\u6709\u516c\u5171\u524d\u7f00",level:3},{value:"\u5185\u90e8\u8282\u70b9\u63d2\u5165\u65b0\u5b50\u8282\u70b9",id:"\u5185\u90e8\u8282\u70b9\u63d2\u5165\u65b0\u5b50\u8282\u70b9",level:4},{value:"\u5185\u90e8\u8282\u70b9\u66f4\u65b0\u5b50\u8282\u70b9",id:"\u5185\u90e8\u8282\u70b9\u66f4\u65b0\u5b50\u8282\u70b9",level:4},{value:"\u67e5\u8be2\u6d41\u7a0b",id:"\u67e5\u8be2\u6d41\u7a0b",level:2},{value:"SMT API \u76f8\u5173\u8bf4\u660e",id:"smt-api-\u76f8\u5173\u8bf4\u660e",level:2},{value:"new",id:"new",level:3},{value:"updates",id:"updates",level:3},{value:"get_proof_with",id:"get_proof_with",level:3},{value:"Starcoin \u4e2d sha3_256  Struct \u793a\u4f8b\u4ee3\u7801",id:"starcoin-\u4e2d-sha3_256--struct-\u793a\u4f8b\u4ee3\u7801",level:3},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:3},{value:"\u76f8\u5173\u8d44\u6e90",id:"\u76f8\u5173\u8d44\u6e90",level:3}],h={toc:d};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sparse-merkle-tree"},"Sparse Merkle Tree"),(0,r.kt)("p",null,"\u8981\u4e86\u89e3\u4e3a\u4ec0\u4e48\u7528Sparse Merkle Tree (\u4e0b\u9762\u7b80\u79f0 SMT )\uff0c\u5148\u9700\u8981\u4e86\u89e3\u4e0b ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/concepts/merkletree"},"Merkle Tree")),(0,r.kt)("h2",{id:"smt"},"SMT"),(0,r.kt)("h3",{id:"\u4ecb\u7ecd\u4e0b\u4e3a\u5565\u9700\u8981\u7528smt"},"\u4ecb\u7ecd\u4e0b\u4e3a\u5565\u9700\u8981\u7528SMT"),(0,r.kt)("p",null,"Starcoin \u662f\u57fa\u4e8e\u8d26\u6237\u6a21\u578b\uff0c\u4e0d\u540c\u4e8e\u4ee5\u592a\u574a\u4e2a\u4eba\u8d26\u6237\u548c\u5408\u7ea6\u8d26\u6237\u662f\u5206\u5f00\u7684\uff0c Starcoin \u4e2d\u5408\u7ea6\u76f8\u5173\u4fe1\u606f\u4e5f\u90fd\u5b58\u50a8\u5728 State \u4e2d\u3002\nState \u5305\u62ec\u5408\u7ea6\u4ee3\u7801( CODE )\u548c\u8d44\u6e90( RESOURCE )\uff0c\u4f59\u989d\u76f8\u5173\u4fe1\u606f\u90fd\u5728RESOURCE\u4e2d\uff0c\u9700\u8981\u6570\u636e\u7ed3\u6784\u6765\u5904\u7406\u8d26\u6237\u5730\u5740\u5230\u72b6\u6001\u7684\u6620\u5c04\uff0c\n\u4e5f\u5c31\u662f AccountAddress -> State\uff0c \u76f4\u89c2\u4e0a\u6765\u8fd9\u4e2a\u6620\u5c04\u5c31\u662f Key -> Value \u4e4b\u95f4\u6620\u5c04\u3002\n\u5904\u7406\u8fd9\u4e2a\u53ef\u4ee5\u4f7f\u7528 HashMap\uff0c\u7cfb\u7edf\u4e2d\u7ef4\u62a4\u4e00\u4e2a\u5168\u5c40\u7684 HashMap\uff0c\u6bcf\u6b21\u6709\u65b0\u7684\u8d26\u6237\u521b\u5efa\u5c31\u63d2\u5165\u4e00\u5bf9 Key\uff0c Value\uff0c\n\u67e5\u8be2\u8d26\u6237\u4f59\u989d\u5c31\u5728 HashMap \u4e2d\u4f7f\u7528 Key \u6765\u67e5\u8be2\uff0c\n\u4e0d\u8003\u8651 Hash \u78b0\u649e\uff0c\u67e5\u8be2\u57fa\u672c\u662f\u5e38\u6570\u65f6\u95f4\u5b8c\u6210(O(1))\uff0c\u66f4\u65b0\u4e5f\u662f\uff0c\n\u8fd9\u79cd\u8bbe\u8ba1\u6700\u5927\u95ee\u9898\u662f\u4e0d\u80fd\u63d0\u4f9b Merkle Proof\uff0c \u6bd4\u5982\u8bc1\u660e\u67d0\u4e2a\u65f6\u95f4\u70b9\u8fd9\u4e2a\u8d26\u6237\u4f59\u989d\u5927\u4e8e\u591a\u5c11( StateProof )\u3002\n\u4e00\u79cd\u60f3\u6cd5\u662f\u57fa\u4e8e\u5f53\u65f6\u7684 HashMap \u6784\u5efa Merkle Tree\uff0c\n\u57fa\u4e8e\u8fd9\u79cd\u60f3\u6cd5\uff0c\u6bcf\u6b21\u6709\u65b0\u7684\u533a\u5757\u53d1\u5e03\u7684\u9700\u8981\u57fa\u4e8e HashMap \u6784\u5efa\u65b0\u7684 Merkle Tree\uff0c\n\u5e76\u5c06 Merkle Tree \u5bf9\u5e94\u7684 Root_Hash \u53d1\u5e03\u5230 BlockHeader \u4e2d\uff0c\n\u8fd9\u4e2a\u65b9\u6848\u662f\u6709\u95ee\u9898\u7684\uff0cHashMap \u6548\u7387\u5f88\u9ad8\uff0c\u4f46\u662f\u6bcf\u6b21\u6784\u5efa Merkle Tree \u6548\u7387\u5f88\u4f4e\u3002\n\u8fd8\u6709\u4e00\u79cd\u60f3\u6cd5\u662f\u6211\u4eec\u4e0d\u7528 HashMap\uff0c\u76f4\u63a5\u6784\u5efa Merkle Tree \u628a\u6240\u6709\u8d26\u6237\u7684\u72b6\u6001\u90fd\u5b58\u4e0b\u6765\uff0c\n\u8fd9\u4e2a\u65b9\u6cd5\u7684\u95ee\u9898\u5728\u4e8e Merkle Tree \u6ca1\u6709\u63d0\u4f9b\u9ad8\u6548\u67e5\u627e\u548c\u4fee\u6539\u7684\u65b9\u6cd5\u3002\n\u8fd9\u91cc\u4f7f\u7528\u4e86\u4e00\u79cd\u57fa\u4e8e\u538b\u7f29 Trie \u6570\u636e\u7ed3\u6784 Jellyfish-Merkle-Tree (JMT)"),(0,r.kt)("h3",{id:"smt\u8bbe\u8ba1\u539f\u7406"},"SMT\u8bbe\u8ba1\u539f\u7406"),(0,r.kt)("h4",{id:"merkle-tree-\u5230smt"},"Merkle Tree \u5230SMT"),(0,r.kt)("p",null,"\u5728 Starcoin \u4e2d Hash \u7684\u8ba1\u7b97\u90fd\u662f\u57fa\u4e8e sha3_256 ( Hash Struct \u4f1a\u52a0\u5165 prefix \u6587\u672b\u4f1a\u7ed9\u51fa\u793a\u4f8b\u4ee3\u7801) \u8ba1\u7b97\u6765\u7684\uff0c \u6240\u4ee5\u8fd9\u9897\u6811\u662f2\u7684256\u6b21\u65b9\u4e2a\u5143\u7d20\n\u4e0b\u56fe\u663e\u793a\u4e86 Merkle Tree\u5230 SMT\u7684\u4e24\u4e2a\u4f18\u5316\n",(0,r.kt)("img",{alt:"three_smt",src:n(9193).Z,width:"1960",height:"772"}),"\n\u56fe1\u662f\u4e00\u4e2a Merkle Tree\uff0c\u56fe2\u4f18\u5316\u5c06\u7a7a\u5b50\u6811\u7528 PlaceHolder (\u65b9\u683c)\u4ee3\u66ff\uff0c \u8282\u7701\u4e86\u7a7a\u95f4\uff0c\n\u56fe3\u4f18\u5316\u5c06\u53ea\u542b\u6709\u4e00\u4e2a\u53f6\u5b50\u8282\u70b9\u7684\u5b50\u6811\u8bbe\u7f6e\u6210\u8282\u70b9\uff0c \u8fd9\u6837\u51cf\u5c11\u4e86 Proof \u65f6\u5bf9 Hash \u7684\u8ba1\u7b97\u3002\n\u8fd9\u91cc A \u76842\u8fdb\u5236\u8def\u5f84\u8868\u793a\u4e3a0100\uff0c B \u7684\u4e3a1000\uff0c C \u7684\u4e3a1011"),(0,r.kt)("h4",{id:"\u57fa\u6570\u6811\u524d\u7f00\u538b\u7f29"},"\u57fa\u6570\u6811\u524d\u7f00\u538b\u7f29"),(0,r.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u57fa\u4e8e\u538b\u7f29\u7684\u4f18\u5316\n",(0,r.kt)("img",{alt:"radix_tree",src:n(3644).Z,width:"2852",height:"938"}),"\n\u8fd9\u91cc\u56fe\u4e2d\u7684 Merkle Tree \u7684Key\u7684\u957f\u5ea6\u90fd\u662f8\u4e2abit\uff0c\u6709\u5f88\u591a\u7a7a\u8282\u70b9\uff0c\u5f88\u7a00\u758f\uff0c\u53ef\u4ee5\u8fdb\u884c\u538b\u7f29\u4f18\u5316\u3002\nA \u76842\u8fdb\u5236\u8def\u5f84\u4e3a00010100\uff0c\u6bcf4\u4e2a bit \u538b\u7f29\u540e\u53d8\u62100x14\uff0c\nB \u76842\u8fdb\u5236\u8def\u5f84\u4e3a00011010\uff0c\u538b\u7f29\u540e\u4e3a0x1A\uff0c\nC \u76842\u8fdb\u5236\u8def\u5f84\u4e3a00011111\uff0c\u538b\u7f29\u540e\u4e3a0x1F\uff0c\nD \u76842\u8fdb\u5236\u8def\u5f84\u4e3a11101100\uff0c\u538b\u7f29\u540e\u4e3a0xDC\uff0c\n\u8fd9\u91cc\u6bcf4\u4e2a bit \u538b\u7f29\u53eb\u505a\u4e00\u4e2a Nibble\uff0c\nMerkle Tree \u53ef\u4ee5\u8ba4\u4e3a\u662f\u57fa\u6570\u7b49\u4e8e2\u7684\u57fa\u6570\u6811\uff0c\u56fe\u4e2d\u53f3\u8fb9\u53ef\u4ee5\u8ba4\u4e3a\u662f\u57fa\u6570\u7b49\u4e8e16\u7684\u57fa\u6570\u6811\uff0c\nSMT \u5c31\u662f\u57fa\u4e8e\u57fa\u657016\u7684\u57fa\u6570\u6811(\u8fd9\u91cc\u7b80\u79f0\u4e3a Radix16)\uff0c\u8fd9\u4e2a\u8bbe\u8ba1\u7684\u4f18\u70b9\u5c31\u662f\u964d\u4f4e\u6811\u7684\u9ad8\u5ea6\uff0c\u51cf\u5c11\u5185\u5b58\u8bbf\u95ee\u6b21\u6570\uff0c\u964d\u4f4e\u5185\u5b58\uff0c\n\u8fd9\u79cd Radix Tree \u76ee\u524d\u6709\u4e9b\u4f18\u5316\u624b\u6bb5\u6bd4\u5982 ADAPTIVE RADIX TREE (Starcoin\u4e2d\u56fa\u5b9a\u4e3a node16)\uff0c \u8bba\u6587(",(0,r.kt)("a",{parentName:"p",href:"https://db.in.tum.de/~leis/papers/ART.pdf"},"https://db.in.tum.de/~leis/papers/ART.pdf"),") \u6709\u66f4\u591a\u5185\u5bb9\uff0c\n\u8fd8\u6709\u5176\u4ed6\u4e00\u4e9b Radix Tree \u4f18\u5316\u601d\u8def\uff0c\u6bd4\u5982\u4ee5\u592a\u574a\u4f7f\u7528\u7684\u662f\u6539\u8fdb\u7248\u672c\u7684 Patricia Radix Tree (",(0,r.kt)("a",{parentName:"p",href:"https://eth.wiki/fundamentals/patricia-tree)%EF%BC%8C"},"https://eth.wiki/fundamentals/patricia-tree)\uff0c"),"\n\u8fd8\u6709 HAT RADIX TREE\uff0c \u8fd9\u4e9b\u8fd9\u91cc\u4e0d\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"smt-\u6570\u636e\u7ed3\u6784\u548c\u64cd\u4f5c"},"SMT \u6570\u636e\u7ed3\u6784\u548c\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4e0a\u9762\u63d0\u5230SMT\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2aRadix16 Trie\uff0c \u5728 Starcoin \u4e2d\u6bcf\u4e2a SMT \u4e2d Key \u7684\u957f\u5ea6\u662f256 bit\uff0c\u8fd9\u91cc\u57fa\u4e8e4\u4e2a bit (\u4e00\u4e2a Nibble )\u505a\u4e86\u538b\u7f29,\u5bf9\u4e8e\u4efb\u610f\u4e00\u4e2a\u8f93\u5165\uff0c\u6211\u4eec\u8ba1\u7b97sha3_256\u540e\u8fdb\u884c\u5904\u7406\uff0c\n\u8fd9\u6837\u6574\u4e2a\u6811\u7684\u9ad8\u5ea6\u5c31\u53d8\u4e3a64\u3002\nSMT \u7684\u8282\u70b9\u7c7b\u578b\u5206\u4e3a Null\uff0c InternalNode\uff0c LeafNode\uff0c\nNull \u5c31\u662f\u524d\u9762\u63d0\u5230\u7684 PlaceHolder(\u65b9\u683c)\uff0c InternalNode \u6700\u591a\u670916\u4e2a\u5b50\u8282\u70b9( InternalNode \u5bf9\u5e94\u4e00\u4e2a HashMap\uff0c \u5b50\u8282\u70b9\u7d22\u5f15\u4e3a\u4e3a0-16\uff0c\u5b50\u8282\u70b9\u7c7b\u578b\u662f InternalNode \u6216\u8005 LeafNode )\uff0c LeafNode \u5b58\u50a8\u7684\u662f\u5b9e\u9645\u7684 Key\uff0c Value \u7684\u952e\u503c\u5bf9\u3002\n\u533a\u5757\u94fe\u4e2d\u9700\u8981\u4fdd\u5b58\u5386\u53f2\u72b6\u6001\uff0c\u8fd9\u91cc\u5982\u4f55\u67e5\u8be2\u67d0\u4e2a Key \u7684\u5386\u53f2\u72b6\u6001\uff0c\u4e4b\u524d\u63d0\u5230 Merkle Tree \u91cc\u4fdd\u5b58 Root_Hash \u5c31\u8ba4\u4e3a\u662f\u4fdd\u5b58\u4e86\u6574\u68f5\u6811\uff0c\n\u9700\u8981\u63d0\u4f9b\u6811\u7684\u6839\u8282\u70b9\u503c( Root_Hash )\u548c\u67e5\u8be2\u7684 Key \uff0c\u8fd9\u4e2a\u6839\u8282\u70b9\u5c31\u662f\u5728 Starcoin \u4e2d BlockHeader \u4e2d\u7684 state_root \uff0c \u8fd9\u4e5f\u662f\u540e\u7eed\u8bb2\u5230 StateTree \u7684\u6784\u5efa\u9700\u8981\u7528\u5230 state_root\u3002\nStarcoin \u4e2d SMT \u9700\u8981\u6301\u4e45\u5316\u5230 KvStore \uff0c \u8fd9\u91cc\u7528\u7684\u662f RocksDB (\u6d4b\u8bd5\u4e2d MockTreeStore \u4f7f\u7528\u7684\u662f HashMap + BTreeSet)\uff0c\n\u4e3a\u4e86\u5c06\u6574\u4e2a SMT \u4fdd\u5b58\u5728 KvStore \u4e2d\uff0cSMT \u7684\u6240\u6709\u8282\u70b9\u90fd\u53ea\u5b58\u50a8 Hash \u503c(\u5bf9\u5e94\u7684\u5185\u5bb9\u901a\u8fc7 KvStore \u4fdd\u5b58\u548c\u67e5\u8be2)\uff0c\u5b58\u50a8\u65f6\u9700\u8981\u5c06 Null\uff0c InternalNode\uff0c LeafNode \u8282\u70b9\u5e8f\u5217\u5316\u5b58\u50a8\u5728 KvStore \u4e2d\u3002\n\u4f8b\u5982\u67e5\u627e Key \u4e3a Hello \u5bf9\u5e94\u7684 Value\uff0c \u5728 SMT \u4e2d\u8ba1\u7b97 ",(0,r.kt)("inlineCode",{parentName:"p"},'Key_Hash = sha3_256("Hello")'),"\uff0c \u64cd\u4f5c\u90fd\u662f\u5bf9 Key_Hash \u8fdb\u884c\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u8bf4\u660e\u4e0b SMT \u4e2d\u5404\u79cd\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Child {\n    // The hash value of this child node.\n    pub hash: HashValue,\n    // Whether the child is a leaf node.\n    pub is_leaf: bool,\n}\npub type Children = HashMap<Nibble, Child>;\n\npub struct InternalNode {\n    // Up to 16 Children.\n    Children: Children,\n    //Node's hash cache\n    cached_hash: Cell<Option<HashValue>>,\n}\n\npub trait RawKey: Clone + Ord {\n    /// Raw key's hash, will used as tree's nibble path\n    /// Directly use origin byte's sha3_256 hash, do not use CryptoHash to add salt.\n    fn key_hash(&self) -> HashValue {\n        HashValue::sha3_256_of(\n            self.encode_key()\n                .expect(\"Serialize key failed when hash.\")\n                .as_slice(),\n        )\n    }\n\n    /// Encode the raw key, the raw key's bytes will store to leaf node.\n    fn encode_key(&self) -> Result<Vec<u8>>;\n\n    fn decode_key(bytes: &[u8]) -> Result<Self>;\n}\n\npub struct LeafNode<K: RawKey> {\n    /// The origin key associated with this leaf node's Blob.\n    #[serde(\n    deserialize_with = \"deserialize_raw_key\",\n    serialize_with = \"serialize_raw_key\"\n    )]\n    raw_key: K,\n    /// The hash of the blob.\n    blob_hash: HashValue,\n    /// The blob associated with `raw_key`.\n    blob: Blob,\n    #[serde(skip)]\n    cached_hash: Cell<Option<HashValue>>,\n}\n")),(0,r.kt)("p",null,"Child \u7684\u5b9a\u4e49\u53ef\u4ee5\u770b\u5230\u53ea\u5b58\u50a8\u4e86 Hash \u503c\uff0cValue \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"KvStore.get(Hash)"),"  \u83b7\u53d6\uff0c \u7136\u540e\u518d\u53cd\u5e8f\u5217\u5316\u786e\u5b9a\u662f InternalNode \u8fd8\u662f LeafNode\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u8bf4\u660e\u4e0b\u5404\u4e2a\u64cd\u4f5c\u6d41\u7a0b"),(0,r.kt)("h2",{id:"\u5728\u7a7a\u6811\u79cd\u521b\u5efa-leafnode-\u4f8b\u5b50"},"\u5728\u7a7a\u6811\u79cd\u521b\u5efa LeafNode \u4f8b\u5b50"),(0,r.kt)("p",null,'\u6211\u4eec\u5728\u4e00\u9897\u7a7a\u6811\u79cd\u63d2\u5165 Key "Hello"\uff0c Value "World"\uff0c\n\u57fa\u4e8e\u8fd9\u4e2a\u4ea7\u751f\u4e00\u4e2a\u53f6\u5b50\u8282\u70b9\u548c\u53f6\u5b50\u8282\u70b9\u7684 Hash \u503c\uff0c\u8fd9\u4e2a Hash \u503c\u5c31\u662f SMT \u65b0\u7684\u6839\u8282\u70b9\uff0c\nHash \u503c\u548c LeafNode \u5e8f\u5217\u5316\u540e\u63d2\u5165\u5230 KvStore \u4e2d\u3002\u56fe\u4e2d\u8bf4\u660e\u4e86\u8fd9\u70b9'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"empty_tree_insert",src:n(6952).Z,width:"226",height:"201"})),(0,r.kt)("h2",{id:"\u63d2\u5165\u6d41\u7a0b"},"\u63d2\u5165\u6d41\u7a0b"),(0,r.kt)("p",null,"\u5728 Starcoin \u4e2d Hash \u503c\u662f256 bit\uff0c \u753b\u56fe\u4e0d\u65b9\u4fbf\uff0c\u8fd9\u91cc\u7528\u77ed\u70b9\u5730\u574016 bit\u505a\u4f8b\u5b50"),(0,r.kt)("h3",{id:"\u7a7a\u6811\u63d2\u5165\u53f6\u5b50"},"\u7a7a\u6811\u63d2\u5165\u53f6\u5b50"),(0,r.kt)("p",null,"\u5f00\u59cb\u4e3a\u7a7a SMT,\u63d2\u5165\u4e00\u4e2a Key1\uff0c Value1\uff0c \u751f\u6210\u7684 LeafNode1 \u7684 Hash1 \u4e3a0x1234\uff0c\n\u8fd9\u4e2a\u662f\u65b0\u7684\u6839\u8282\u70b9\uff0c \u5982\u4e0b\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"one_leaf",src:n(4271).Z,width:"281",height:"176"})),(0,r.kt)("h3",{id:"\u65b0\u63d2\u5165\u53f6\u5b50\u8282\u70b9\u548c\u67d0\u4e2a\u53f6\u5b50\u8282\u70b9\u6709\u516c\u5171\u524d\u7f00"},"\u65b0\u63d2\u5165\u53f6\u5b50\u8282\u70b9\u548c\u67d0\u4e2a\u53f6\u5b50\u8282\u70b9\u6709\u516c\u5171\u524d\u7f00"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u57fa\u7840\u4e0b\u65b0\u63d2\u5165 Key2\uff0c Value2\uff0c \u9700\u8981\u67e5\u627e Key2 \u63d2\u5165\u7684\u4f4d\u7f6e\uff0c \u5148\u8ba1\u7b97 Key2 \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Key2_Hash = Hash(Key2)"),"\uff0c\n\u5047\u8bbe Key2_Hash \u503c\u4e3a0x1236\uff0c  Key2_Hash \u548c Root_Hash1 \u6709\u516c\u5171\u524d\u7f000x123\uff0c \u5148\u7531 Key2\uff0c Value2 \u751f\u6210\u4e00\u4e2a LeafNode2\uff0c\n\u7531\u4e8e LeafNode1 \u7684 Hash \u503c\u548c Key2_Hash \u6709\u516c\u5171\u524d\u7f000x123\uff0c\u9700\u8981\u751f\u6210\u4e00\u4e2a InternalNode,\u8bb0\u4e3a Children1\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"Children1[4] = Hash(LeafNode1)\uff0c Children1[6] = Hash(LeafNode2)"),"\u3002\n\u516c\u5171\u524d\u7f000x12\uff0c 0x1\u4e5f\u9700\u8981\u751f\u6210 InternalNode\u3002\u8fd9\u91cc\u5148\u6784\u90200x12\u7684 InternalNode \u8bb0\u4e3a Children2\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"Children2[3] = Hash(Children1)"),"\uff0c\n\u7136\u540e\u6784\u90200x1\u7684 InternalNode \u8bb0\u4e3a Children3\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"Children3[2]= Hash(Children2)"),"\u3002\nLeafNode2\uff0cChildren1\uff0cChildren2\uff0c Children3 \u6309\u7167 Hash \u548c\u5e8f\u5217\u5316\u540e\u7684\u952e\u503c\u5bf9\u5199\u5165\u5230 KvStore\uff0c\n\u65b0\u751f\u6210\u7684\u6839\u8282\u70b9\u662f Hash(Children3)\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"two_leaf_insert",src:n(8733).Z,width:"572",height:"296"})),(0,r.kt)("h3",{id:"\u65b0\u63d2\u5165\u53f6\u5b50\u7ed3\u70b9\u548c\u67d0\u4e2a\u5185\u90e8\u8282\u70b9\u6709\u516c\u5171\u524d\u7f00"},"\u65b0\u63d2\u5165\u53f6\u5b50\u7ed3\u70b9\u548c\u67d0\u4e2a\u5185\u90e8\u8282\u70b9\u6709\u516c\u5171\u524d\u7f00"),(0,r.kt)("h4",{id:"\u5185\u90e8\u8282\u70b9\u63d2\u5165\u65b0\u5b50\u8282\u70b9"},"\u5185\u90e8\u8282\u70b9\u63d2\u5165\u65b0\u5b50\u8282\u70b9"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u57fa\u7840\u4e0a\uff0c\u5047\u5b9a\u63d2\u5165 Key3\uff0cValue3\uff0c\n\u5047\u5b9a\u63d2\u5165 Key3 \u7684 Hash \u503c Key3_Hash \u4e3a0x35ef\uff0c Children3 \u7684\u7d22\u5f153\u7684\u5b50\u8282\u70b9\u4e3a\u7a7a\uff0c \u5c06 Key3\uff0c Value3 \u751f\u6210\u65b0\u7684\u53f6\u5b50\u8282\u70b9 LeafNode3\uff0c\n",(0,r.kt)("inlineCode",{parentName:"p"},"Children3[3] = Hash(LeafNode3)"),"\u3002\n\u5c06 LeafNode3\uff0cChildren3 \u6309\u7167 Hash \u548c\u5e8f\u5217\u5316\u540e\u952e\u503c\u5bf9\u5199\u5165\u5230 KvStore\uff0c \u65b0\u751f\u6210\u7684\u6839\u8282\u70b9\u662f Hash(Children3)\u3002\n\u5982\u4e0b\u9762\u8fd9\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"internal_insert_leaf",src:n(538).Z,width:"751",height:"324"})),(0,r.kt)("h4",{id:"\u5185\u90e8\u8282\u70b9\u66f4\u65b0\u5b50\u8282\u70b9"},"\u5185\u90e8\u8282\u70b9\u66f4\u65b0\u5b50\u8282\u70b9"),(0,r.kt)("p",null,"\u5047\u5b9a\u63d2\u5165 Key3_Hash \u503c\u4e3a0x25ef\uff0cChildren3 \u7684\u7d22\u5f152\u7684\u5b50\u8282\u70b9\u4e3a Children2\uff0c\u9012\u5f52\u5904\u7406\u5728 Children2 \u63d2\u5165\uff0c\n\u66f4\u65b0 Children2\uff0c \u66f4\u65b0",(0,r.kt)("inlineCode",{parentName:"p"},"Children3[2] = Hash(Children2)"),"\uff0c\n\u5c06 Children2\uff0c Children3 \u6309\u7167 Hash \u548c\u5e8f\u5217\u5316\u503c\u5199\u5165\u5230 KvStore\uff0c\u65b0\u751f\u6210\u7684\u6839\u8282\u70b9\u662f Hash(Children3)\u3002\n\u5982\u4e0b\u9762\u8fd9\u56fe\uff0c\u8fd9\u79cd\u60c5\u51b5\u5bf9\u5e94\u5f53\u524d InternalNode \u4fee\u6539\u5df2\u5b58\u5728\u7684\u5b50\u8282\u70b9\uff0c\u9700\u8981\u9012\u5f52\u5904\u7406\n",(0,r.kt)("img",{alt:"internal_insert_recursive",src:n(6047).Z,width:"791",height:"326"})),(0,r.kt)("h2",{id:"\u67e5\u8be2\u6d41\u7a0b"},"\u67e5\u8be2\u6d41\u7a0b"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u6d41\u7a0b\u57fa\u7840\u4e0a\uff0c\u5047\u8bbe\u8981\u67e5\u8be2\u7684 Key4\uff0c\u5148\u8ba1\u7b97 Key4 \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Key4_Hash = Hash(key4)"),"\uff0c \u5728 Starcoin \u4e2d Key4_Hash \u662f\u4e2a256 bit \u7684\u503c\uff0c\u4e5f\u5c31\u662f64\u4e2a Nibble (\u4e00\u4e2a Nibble \u4e3a4bit)\uff0c \u8bb0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Nibble0..Nibble63"),"\u3002\n\u67e5\u627e\u5148\u4ece\u6839\u8282\u70b9 Root_Hash \u83b7\u53d6\u6839\u8282\u70b9\u5bf9\u5e94 Node \uff0c\u67e5\u770b Node \u662f LeafNode \u8fd8\u662f InternalNode\uff0c\n","[1]","\u5982\u679c\u662f LeafNode\uff0c\u67e5\u770b\u4e0b LeafNode \u5bf9\u5e94\u7684 Key \u7684 Hash \u503c\u662f\u5426\u548c Key4_Hash \u76f8\u7b49\uff0c\u76f8\u7b49\u5c31\u8fd4\u56de\u7ed3\u679c\uff0c \u4e0d\u76f8\u7b49\u8fd4\u56de None\n","[2]","\u5982\u679c\u662f IntenalNode \u67e5\u627e InternalNode \u5bf9\u5e94 Nibblei \u7684\u5b50\u8282\u70b9(\u521d\u59cb",(0,r.kt)("inlineCode",{parentName:"p"},"i = 0"),"\uff0c\u6bcf\u6b21",(0,r.kt)("inlineCode",{parentName:"p"},"i = i + 1"),")\uff0c\u67e5\u627e\u5230\u65b0 Node \u662f LeafNode\uff0c\u8d70\u6761\u4ef6","[1]","\uff0c \u5426\u5219\u8df3\u8f6c\u5230","[2]","\n\u6d41\u7a0b\u56fe\u5728\u4e0b\u9762\u56fe\u4e2d\uff0c\u4ee3\u7801\u5728 Starcoin \u4e2d\u5bf9\u5e94 get_proof_with"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"search",src:n(2592).Z,width:"653",height:"491"})),(0,r.kt)("h2",{id:"smt-api-\u76f8\u5173\u8bf4\u660e"},"SMT API \u76f8\u5173\u8bf4\u660e"),(0,r.kt)("h3",{id:"new"},"new"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn new(TreeReader: &'a) -> Self {\n    \n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc TreeReader \u662f\u4e00\u4e2a trait (\u53ef\u4ee5\u8ba4\u4e3a\u662f\u7c7b\u4f3c Java \u4e2d inteface )\uff0c \u5728 Starcoin \u4e2d\u662f\u63d0\u4f9b Key Value \u64cd\u4f5c\u7684\u6570\u636e\u7ed3\u6784\uff0c\n\u5728 Starcoin \u4e2d\u5bf9\u5e94\u7684 KvStore \u662f RocksDB\uff0c MockTreeStore \u4e2d\u4f7f\u662f HashMap + BTeeSet\uff0c\n\u6709 TreeReader \u5c31\u6709 TreeWriter\uff0c\u8fd9\u91cc TreeReader \u5bf9\u5e94\u7684\u662f SMT \u7684\u67e5\u627e\u548c\u5728\u5185\u5b58\u4e2d\u7684\u8ba1\u7b97\uff0c TreeWriter \u5bf9\u5e94\u7684\u662f\u6301\u4e45\u5316\u5230 KvStore \u64cd\u4f5c\uff0c\nStarcoin \u6301\u4e45\u5c42\u5e76\u6ca1\u6709\u5b9e\u73b0 TreeWriter trait\uff0c\u73b0\u5728\u76f4\u63a5\u5199 KvStore(\u8fd9\u90e8\u5206\u9700\u8981\u7ed3\u5408 \u4ee3\u7801\u4e2dStateDB \u7684 flush \u6765\u7406\u89e3)\uff0c Mock \u64cd\u4f5c\u7684 MockTreeStore \u4f7f\u7528\u4e86 TreeWriter\u3002\n\u53ef\u4ee5\u7b80\u5355\u8ba4\u4e3a SMT \u662f\u5185\u5b58\u4e2d\u4e00\u9897 Trie \u6811\uff0c\u6301\u4e45\u5316\u5728 RocksDB \u4e0a\u3002"),(0,r.kt)("h3",{id:"updates"},"updates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn updates(&self,\n    state_root_hash: Option<HashValue>,\n    blob_set: Vec<(KEY, Vec<u8>)>\n    ) -> Result<(HashValue, TreeUpdateBatch<KEY>)>;\n\npub struct StaleNodeIndex {\n    pub stale_since_version: HashValue,\n    pub node_key: HashValue,\n}\n\npub struct TreeUpdateBatch<KEY> {\n    pub node_batch: BTreeMap<HashValue, Node<KEY>>,\n    pub stale_node_index_batch: BTreeSet<StaleNodeIndex>,\n    pub num_new_leaves: usize,\n    pub num_stale_leaves: usize,\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc HashValue \u5c31\u662f\u4e4b\u524d\u63d0\u5230\u7684 sha3_256 \u7684\u8ba1\u7b97\u503c\uff0c\n\u8fd9\u91cc\u8bf4\u660e\u4e0b\u5404\u4e2a\u53c2\u6570\uff0c\nstate_root_hash \u662f\u67d0\u4e2a SMT \u6811\u7684\u6839\u8282\u70b9 Hash \u503c\uff0c\u901a\u8fc7 Hash \u503c\u552f\u4e00\u786e\u5b9a\u4e86\u8fd9\u9897 SMT\uff0c\nblob_set \u662f Key\uff0cValue \u5217\u8868\uff0c\n\u8fd9\u4e48\u8bbe\u8ba1\u662f\u4e3a\u4e86\u4e00\u4e2a Block \u6267\u884c\u4ea4\u6613\u540e\u6ee1\u8db3\u5e42\u7b49\u6027 \u8fd9\u91cc state_root_hash \u7b49\u4e8e\u524d\u4e00\u4e2a BlockHeader \u4e2d\u7684 state_root ( SMT \u7684 Root_Hash \u503c)\uff0c\n\u8fd4\u56de\u503c",(0,r.kt)("inlineCode",{parentName:"p"},"Result<(HashValue, TreeUpdateBatch<KEY>)>")," HashValue \u4ee3\u8868\u65b0\u7684 SMT \u7684 Hash \u503c\uff0c \u8fd9\u4e2a\u65b0\u7684 HashValue \u5b58\u50a8\u5728 BlockHeader \u4e2d\u7684 state_root\uff0c\n\u8fd4\u56de\u503c\u4e2d TreeUpdateBatch \u91cc\u9762\u7684 node_batch\uff0c \u8fd9\u91cc\u6bd4\u5982\u6211\u4eec blob_set \u662f",(0,r.kt)("inlineCode",{parentName:"p"},"[(Key1, Value1), (Key2, Value2]"),"\uff0c\nSMT \u4f1a\u4ea7\u751f LeafNode \u548c InternalNode\uff0c\u4f1a\u628a\u8fd9\u4e9b\u6309\u7167Hash\u503c\u548c\u81ea\u8eab\u5b58\u5230 BTreeMap \u4e2d\uff0c\nStaleNodeIndex \u4e2d stale_since_version \u662f\u8fd9\u6b21\u65b0\u4ea7\u751f\u7684\u6839\u8282\u70b9 Hash\uff0c node_key \u662f\u88ab\u4fee\u6539\u8fc7\u7684 Node \u7684 Hash\u3002"),(0,r.kt)("h3",{id:"get_proof_with"},"get_proof_with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn get_with_proof(&self, key: &K) -> Result<(Option<Vec<u8>>, SparseMerkleProof)>\n")),(0,r.kt)("p",null,"\u83b7\u53d6 Key \u5bf9\u5e94\u7684 Value \u7684\u503c\uff0c\u5982\u679c\u5b58\u5728\u5e76\u8fd4\u56de\u5bf9\u5e94\u7684 Merkle Proof \u8bc1\u660e\u3002\n",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/concepts/proof"},"proof")," \u5f85\u8865\u5145\u3002"),(0,r.kt)("h3",{id:"starcoin-\u4e2d-sha3_256--struct-\u793a\u4f8b\u4ee3\u7801"},"Starcoin \u4e2d sha3_256  Struct \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let buf = hex::decode(\n"0xfa000000000000007b161ceeef010000000000000000000000000000000000000000000000000000"\n.strip_prefix("0x").unwrap()\n).unwrap();\nlet blob = Blob::from(buf);\nlet salt_prefix: &[u8] = b"STARCOIN::Blob";\nlet ser = bcs::to_bytes(&blob)?;\nlet salt = [\nHashValue::sha3_256_of(salt_prefix).as_slice(),\nser.as_slice(),\n]\n.concat();\nlet hash = HashValue::sha3_256_of(&salt[..]);\n')),(0,r.kt)("h3",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.diem.com/papers/jellyfish-merkle-tree/2021-01-14.pdf"},"https://developers.diem.com/papers/jellyfish-merkle-tree/2021-01-14.pdf")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://westar.io/jellyfish-merkle-tree-in-libra-blockchain/"},"https://westar.io/jellyfish-merkle-tree-in-libra-blockchain/")),(0,r.kt)("h3",{id:"\u76f8\u5173\u8d44\u6e90"},"\u76f8\u5173\u8d44\u6e90"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(449).Z},"draw.io")))}p.isMDXComponent=!0},449:function(e,t,n){t.Z=n.p+"assets/files/smt-d0a8b2f5d64d43cbcdeaf186252002f6.drawio"},6952:function(e,t,n){t.Z=n.p+"assets/images/empty_tree_insert-cd6d861b3a69ce5edaee505601b4ddef.png"},538:function(e,t,n){t.Z=n.p+"assets/images/internal_insert_leaf-58bfccb771a77f8377cf667a81825563.png"},6047:function(e,t,n){t.Z=n.p+"assets/images/internal_insert_recursive-17ab6a7faccd024b1214d9d6866d96ce.png"},4271:function(e,t,n){t.Z=n.p+"assets/images/one_leaf-5047dff6ef89d06adde65dfb161c3ae2.png"},3644:function(e,t,n){t.Z=n.p+"assets/images/radix_tree-e8b7c31253e86eb783c38ab42077fcbc.png"},2592:function(e,t,n){t.Z=n.p+"assets/images/search-92ac19f6a8beb75ed1bc687085699f92.png"},9193:function(e,t,n){t.Z=n.p+"assets/images/three_smt-156d8e827819ceeb2c0f5f9fce42b5b6.png"},8733:function(e,t,n){t.Z=n.p+"assets/images/two_leaf_insert-fd529a2513fe1e764ad0e6b1bfd58865.png"}}]);