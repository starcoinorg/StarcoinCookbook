"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[8095],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8668:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var a=t(3117),r=(t(7294),t(3905));const i={},o=void 0,l={unversionedId:"move/move-test/move-integration-test",id:"move/move-test/move-integration-test",title:"move-integration-test",description:"Move \u96c6\u6210\u6d4b\u8bd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-move/97-move-test/02-move-integration-test.md",sourceDirName:"03-move/97-move-test",slug:"/move/move-test/move-integration-test",permalink:"/starcoin-cookbook/zh/docs/move/move-test/move-integration-test",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/03-move/97-move-test/02-move-integration-test.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"move-unit-test",permalink:"/starcoin-cookbook/zh/docs/move/move-test/move-unit-test"},next:{title:"\u5982\u4f55 Debug Move \u6a21\u5757\u548c\u6392\u67e5\u95ee\u9898",permalink:"/starcoin-cookbook/zh/docs/move/move-test/how-to-debug"}},p={},s=[{value:"Move \u96c6\u6210\u6d4b\u8bd5",id:"move-\u96c6\u6210\u6d4b\u8bd5",level:2},{value:"\u7f16\u5199 test \u6307\u4ee4",id:"\u7f16\u5199-test-\u6307\u4ee4",level:3},{value:"<code>init</code> \u6307\u4ee4",id:"init-\u6307\u4ee4",level:4},{value:"<code>block</code> \u6307\u4ee4",id:"block-\u6307\u4ee4",level:4},{value:"<code>faucet</code> \u6307\u4ee4",id:"faucet-\u6307\u4ee4",level:4},{value:"call \u6307\u4ee4",id:"call-\u6307\u4ee4",level:4},{value:"call-api \u6307\u4ee4",id:"call-api-\u6307\u4ee4",level:4},{value:"Directive - package",id:"directive---package",level:4},{value:"deploy \u6307\u4ee4",id:"deploy-\u6307\u4ee4",level:4},{value:"<code>publish</code> \u6307\u4ee4",id:"publish-\u6307\u4ee4",level:4},{value:"<code>run</code> \u6307\u4ee4",id:"run-\u6307\u4ee4",level:4},{value:"<code>view</code> \u6307\u4ee4",id:"view-\u6307\u4ee4",level:4},{value:"<code>print-bytecode</code> \u6307\u4ee4",id:"print-bytecode-\u6307\u4ee4",level:4},{value:"\u96c6\u6210\u6d4b\u8bd5\u7684\u671f\u671b\u7ed3\u679c",id:"\u96c6\u6210\u6d4b\u8bd5\u7684\u671f\u671b\u7ed3\u679c",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"move-\u96c6\u6210\u6d4b\u8bd5"},"Move \u96c6\u6210\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u73b0\u5728\u4f60\u77e5\u9053\u5982\u4f55\u5728Move\u4e2d\u5199\u5355\u5143\u6d4b\u8bd5\u4e86\u3002\u4f46\u662f\u5355\u5143\u6d4b\u8bd5\u53ea\u9002\u5408\u4e8e\u7b80\u5355\u7684\u6d4b\u8bd5\u573a\u666f\uff0c\u5982\u6570\u5b66\u8ba1\u7b97\u3002\u5bf9\u4e8e\u6709\u7528\u6237\u4ea4\u4e92\u7684\u7aef\u5230\u7aef\u6d4b\u8bd5\u6848\u4f8b\uff0c\u96c6\u6210\u6d4b\u8bd5\u5c31\u5f00\u59cb\u53d1\u6325\u4f5c\u7528\u4e86\u3002"),(0,r.kt)("p",null,"\u96c6\u6210\u6d4b\u8bd5\u662f mpm \u7684\u4e00\u4e2a\u529f\u80fd\uff0c\u5b83\u53ef\u4ee5\u6a21\u62df\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8d26\u6237\u521d\u59cb\u5316\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5757\u7684\u751f\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u5757\u53d1\u5e03\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u811a\u672c\u6216\u811a\u672c\u51fd\u6570\u3002")),(0,r.kt)("p",null,"\u6240\u6709\u7684\u52a8\u4f5c\u90fd\u88ab\u5305\u88c5\u6210\u4e8b\u52a1\u3002\u6240\u6709\u7684\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\u5e94\u8be5\u5728\u8f6f\u4ef6\u5305\u6839\u8def\u5f84\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"integration-tests"),"\u76ee\u5f55\u4e2d\u3002"),(0,r.kt)("p",null,"\u96c6\u6210\u6d4b\u8bd5\u662f\u5728\u6e90\u7801\u6587\u4ef6\u6dfb\u52a0\u6ce8\u89e3\u6765\u8868\u793a\u6d4b\u8bd5\u6307\u4ee4\u3002\u6ce8\u89e3\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"//#"),"\u5f00\u5934\uff0c\u7528\u7a7a\u884c\u9694\u5f00\u3002\u6307\u4ee4\u7684\u5de5\u4f5c\u65b9\u5f0f\u7c7b\u4f3c\u4e8e\u547d\u4ee4\u884c\uff0c\u5f00\u53d1\u8005\u63d0\u4f9b\u547d\u4ee4\u540d\u79f0\u548c\u547d\u4ee4\u53c2\u6570\uff0c\nmpm \u5c06\u4f1a\u81ea\u52a8\u6267\u884c\u6307\u4ee4\uff0c\u5c31\u50cf\u7cfb\u7edf\u6267\u884c\u547d\u4ee4\u884c CLI \u547d\u4ee4\u4e00\u6837\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ mpm integration-test --help\nmpm-integration-test\nRun integration tests in tests dir\n\nUSAGE:\n    mpm integration-test [OPTIONS] [FILTER]\n\nARGS:\n    <FILTER>    The FILTER string is tested against the name of all tests, and only those tests\n                whose names contain the filter are run\n\nOPTIONS:\n        --abi\n            Generate ABIs for packages\n\n    -d, --dev\n            Compile in 'dev' mode. The 'dev-addresses' and 'dev-dependencies' fields will be used if\n            this flag is set. This flag is useful for development of packages that expose named\n            addresses that are not set to a specific value\n\n        --doc\n            Generate documentation for packages\n\n        --exact\n            Exactly match filters rather than by substring\n\n        --force\n            Force recompilation of all packages\n\n        --format <FORMAT>\n            Configure formatting of output: pretty = Print verbose output; terse = Display one\n            character per test; (json is unsupported, exists for compatibility with the default test\n            harness) [default: pretty] [possible values: pretty, terse]\n\n    -h, --help\n            Print help information\n\n        --install-dir <INSTALL_DIR>\n            Installation directory for compiled artifacts. Defaults to current directory\n\n        --list\n            List all tests\n\n    -p, --path <PACKAGE_PATH>\n            Path to a package which the command should be run with respect to [default: .]\n\n    -q, --quiet\n            Output minimal information\n\n        --test\n            Compile in 'test' mode. The 'dev-addresses' and 'dev-dependencies' fields will be used\n            along with any code in the 'test' directory\n\n        --test-threads <TEST_THREADS>\n            Number of threads used for running tests in parallel [env: RUST_TEST_THREADS=] [default:\n            32]\n\n        --ub\n            update test baseline\n\n    -v\n            Print additional diagnostics if available\n\n")),(0,r.kt)("h3",{id:"\u7f16\u5199-test-\u6307\u4ee4"},"\u7f16\u5199 test \u6307\u4ee4"),(0,r.kt)("h4",{id:"init-\u6307\u4ee4"},(0,r.kt)("inlineCode",{parentName:"h4"},"init")," \u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"task-init 0.1.0\n\nUSAGE:\n    task init [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --block-number <block-number>       block number to read state from. default to latest block number\n        --addresses <named-addresses>...\n    -n, --network <network>                 genesis with the network\n        --public-keys <public-keys>...      the `public-keys` option is deprecated, please remove it.\n        --rpc <rpc>                         use remote starcoin rpc as initial state\n        --debug                             enable debug mode, output more info to stderr.\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"init")," \u6307\u4ee4\u7528\u6765\u58f0\u660e\u67d0\u4e2a\u96c6\u6210\u6d4b\u8bd5\u7684\u7684\u521d\u59cb\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u58f0\u660e\u6d4b\u8bd5\u4ece\u4e00\u4e2a\u521b\u4e16\u5757\u5f00\u59cb\uff08\u901a\u8fc7\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"-n test")," \uff09\uff0c\u6216\u8005\u4ece\u4e00\u4e2a\u8fdc\u7a0b\u72b6\u6001\u5feb\u7167\u5f00\u59cb\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc http://main.seed.starcoin.org:9850 --block-number 100000"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"--address <named-addresses>")," \u53ef\u4ee5\u7528\u6765\u58f0\u660e\u989d\u5916\u7684\u547d\u540d\u5730\u5740\uff0c\u8fd9\u5c06\u5728\u540e\u9762\u7684\u96c6\u6210\u6d4b\u8bd5\u4e2d\u4f7f\u7528\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"--debug")," \u6a21\u5f0f\u5c06\u4f1a\u6253\u5370\u66f4\u591a\u7684\u4ea4\u6613\u4fe1\u606f\uff0c\u4fbf\u4e8e\u8c03\u8bd5\u3002"),(0,r.kt)("p",null,"\u4f8b\u5b50:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//# init -n dev\n\n//# init -n test --addresses alice=0xAA\n\n//# init -n barnard\n\n//# init --rpc http://main.seed.starcoin.org:9850 --block-number 100000\n\n")),(0,r.kt)("h4",{id:"block-\u6307\u4ee4"},(0,r.kt)("inlineCode",{parentName:"h4"},"block")," \u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"task-block 0.1.0\n\nUSAGE:\n    task block [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --author <author>\n        --number <number>\n        --timestamp <timestamp>\n        --uncles <uncles>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"block")," \u6307\u4ee4\u7533\u660e\u4e00\u4e2a\u65b0\u533a\u5757\u4ea7\u751f\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"block")," \u6307\u4ee4\u548c\u4e0b\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"block")," \u6307\u4ee4\u4e4b\u95f4\u7684\u5176\u4ed6\u6307\u4ee4\u90fd\u5728\u8fd9\u4e2a\u533a\u5757\u4e2d\u8fd0\u884c\u3002\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u533a\u5757\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"--author"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"--timestamp"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"--uncles"),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"block")," \u6307\u4ee4\uff0c\u4e8b\u52a1\u5c06\u5728\u9ed8\u8ba4\u7684\u5757\u4e0a\u8fd0\u884c\uff0c\u5176\u5757\u53f7\u662f\u521d\u59cb\u72b6\u6001\u7684\u4e0b\u4e00\u4e2a\u5757\u53f7\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u521d\u59cb\u72b6\u6001\u662f\u67d0\u4e2a\u8fdc\u7a0b\u72b6\u6001\uff0c\u5176\u6700\u65b0\u533a\u5757\u9ad8\u5ea6\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"h"),"\uff0c\u90a3\u4e48\u6d4b\u8bd5\u9ed8\u8ba4\u4f7f\u7528\u7684\u533a\u5757\u9ad8\u5ea6\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"h+1"),"\u3002"),(0,r.kt)("p",null,"\u4f8b\u5b50:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//# block\n\n//# block --author alice\n\n//# block --timestamp 100000000\n\n//# block --uncles 10\n")),(0,r.kt)("h4",{id:"faucet-\u6307\u4ee4"},(0,r.kt)("inlineCode",{parentName:"h4"},"faucet")," \u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"task-faucet 0.1.0\n\nUSAGE:\n    task faucet [OPTIONS] --addr <address>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --addr <address>\n        --amount <initial-balance>     [default: 100000000000]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"faucet")," \u6307\u4ee4\u53ef\u4ee5\u521b\u5efa\u5730\u5740\uff0c\u7ed9\u5730\u5740\u5145\u94b1\u3002\n\u5730\u5740\u53ef\u4ee5\u662f\u547d\u540d\u5730\u5740(named address)\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"alice"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tom"),"\uff0c \u6216\u8005\u662f\u5b57\u9762\u5730\u5740(raw address)\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0x2"),"\u3002\n\u5982\u679c\u662f\u547d\u540d\u5730\u5740\uff0c\u5b83\u4f1a\u4e3a\u8be5\u5730\u5740\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u5b57\u9762\u5730\u5740\u4ee5\u53ca\u5bf9\u5e94\u7684\u516c\u94a5\u3002"),(0,r.kt)("p",null,"\u4f8b\u5b50:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//# faucet --addr bob\n\n//# faucet --addr alice --amount 0\n\n//# faucet --addr tom --amount 10000000000000\n\n")),(0,r.kt)("h4",{id:"call-\u6307\u4ee4"},"call \u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"task-call 0.1.0\n\nCall a smart contract function \n\nUSAGE:\n    task call <function>  [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nARGS:\n    <function>       Smart contract function name\n\nOPTIONS:\n    -i, --args <args>               function arguments\n    -t, --type-args <type-args>     function type arguments\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"call")," \u6307\u4ee4\u53ef\u4ee5\u7528\u6765\u76f4\u63a5\u8c03\u7528\u667a\u80fd\u5408\u7ea6\u7684\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//# call 0x1::Account::balance --type-args 0x1::STC::STC --args 0x662ba5a1a1da0f1c70a9762c7eeb7aaf\n")),(0,r.kt)("h4",{id:"call-api-\u6307\u4ee4"},"call-api \u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"task-call-api 0.1.0\n\nCall a RPC api from remote starcoin node.\n\nUSAGE:\n    task call-api <method> <params>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nARGS:\n    <method>         api method to call, example: node.info\n    <params>         api params, should be a json array string\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"call-api")," \u6307\u4ee4\u53ef\u4ee5\u7528\u6765\u8c03\u7528\u8fdc\u7a0b RPC \u7684\u63a5\u53e3\u3002\u8fd4\u56de\u503c\u4f1a\u88ab\u4fdd\u5b58\u5728 mpm \u7684\u8fd0\u884c\u73af\u5883\u4e2d\uff0c\u53ef\u4ee5\u540e\u7eed\u7684\u6d4b\u8bd5\u6307\u4ee4\u4e2d\u7528\u6a21\u677f\u53d8\u91cf\u6765\u83b7\u53d6\u8fd4\u56de\u7ed3\u679c\u5e76\u5c06\u5176\u4f5c\u4e3a\u540e\u7eed\u6307\u4ee4\u7684\u53c2\u6570\u8f93\u5165\u3002\n\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://starcoinorg.github.io/jsonrpcdoc/"},"jsonrpc")," \u67e5\u770b Starcoin \u7684 API \u63a5\u53e3\u548c\u5b83\u4eec\u7684\u8f93\u51fa\u683c\u5f0f\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//# call-api chain.info\n\n//# call-api chain.get_block_by_hash [{{$.call-api[0].head.parent_hash}}]\n\n")),(0,r.kt)("h4",{id:"directive---package"},"Directive - package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"task-package 0.1.0\n\nPackage a module\n\nUSAGE:\n    task package [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --signers\n        --init-function\n        --type-args\n        --args\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package")," \u6307\u4ee4\u53ef\u4ee5\u5c06\u6a21\u5757\u6253\u5305\u5e76\u8fd4\u56de\u6253\u5305\u540e\u7684 bytes\uff0chash \u548c\u4fdd\u5b58\u4e0b\u6765\u7684\u4e34\u65f6\u6587\u4ef6\u3002\n\u8fd9\u5e38\u5728\u4e24\u9636\u6bb5\u63d0\u4ea4\u7684\u6d4b\u8bd5\u7528\u5230\u3002"),(0,r.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "file":"/tmp/.tmpnok0M6/0x3c6b00fadc6b4f37fa6e2c6c0949e97c89b00c07c0d1f1761671e6fe18792676.blob",\n    "hex":"0x662ba5a1a1da0f1c70a9762c7eeb7aaf0146a11ceb0b040000000601000203020505070107080b0813100c2307000000010000000004746573740568656c6c6f662ba5a1a1da0f1c70a9762c7eeb7aaf000100000001020000",\n    "package_hash":"0x3c6b00fadc6b4f37fa6e2c6c0949e97c89b00c07c0d1f1761671e6fe18792676"\n}\n')),(0,r.kt)("p",null,"\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//# package\nmodule creator::test {\n    public fun hello() {}\n}\n")),(0,r.kt)("h4",{id:"deploy-\u6307\u4ee4"},"deploy \u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"task-deploy 0.1.0\n\nDeploy a packed module.\n\nUSAGE:\n    task deploy [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nARGS:\n    <mv-or-package-file>    move bytecode file path or package binary path\n\nOPTIONS:\n        --signers\n        --gas-budget\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," \u6307\u4ee4\u53ef\u4ee5\u5c06\u6253\u5305\u540e\u7684\u6a21\u5757\u90e8\u7f72\u5230\u533a\u5757\u94fe\u4e0a\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--signers")," \u4e00\u822c\u5728\u4e24\u9636\u6bb5\u63d0\u4ea4\u4e2d\u7528\u5230\uff0c\u5728\u7b2c\u4e8c\u9636\u6bb5\u53d1\u5e03\u6a21\u578b\u662f\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u53d1\u8d77\u6a21\u578b\u90e8\u7f72\u7684\u4ea4\u6613\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"--gas-budget")," \u6307\u5b9a\u4ea4\u6613\u7684\u6700\u5927 gas \u3002"),(0,r.kt)("p",null,"\u793a\u4f8b: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//# deploy {{$.package[0].file}}\n")),(0,r.kt)("h4",{id:"publish-\u6307\u4ee4"},(0,r.kt)("inlineCode",{parentName:"h4"},"publish")," \u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"task-publish 0.1.0\nStarcoin-specific arguments for the publish command\n\nUSAGE:\n    task publish [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --gas-budget <gas-budget>\n    -k, --public-key <public-key>\n        --syntax <syntax>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pulish")," \u6307\u4ee4\u53ef\u4ee5\u5c06\u67d0\u4e2a\u6a21\u5757\u53d1\u5e03\u5230\u94fe\u4e0a\u3002\n\u6a21\u5757\u4ee3\u7801\u5fc5\u987b\u8ddf\u5728\u8be5\u6307\u4ee4\u540e\u9762\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--gas-budget")," \u6307\u5b9a\u4e86\u8be5\u4ea4\u6613\u7684\u6700\u5927gas\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--syntax")," \u6682\u65f6\u8fd8\u6ca1\u6709\u7528\u5230\uff0c\u53ef\u4ee5\u5ffd\u7565\u3002")),(0,r.kt)("p",null,"\u4f8b\u5b50:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//# publish\nmodule alice::Holder {\n    use StarcoinFramework::Signer;\n\n    struct Hold<T> has key, store {\n        x: T\n    }\n\n    public fun hold<T: store>(account: &signer, x: T) {\n        move_to(account, Hold<T>{x})\n    }\n\n    public fun get<T: store>(account: &signer): T\n    acquires Hold {\n        let Hold {x} = move_from<Hold<T>>(Signer::address_of(account));\n        x\n    }\n}\n\n//# publish\nmodule Dummy::DummyModule {}\n\n\n")),(0,r.kt)("h4",{id:"run-\u6307\u4ee4"},(0,r.kt)("inlineCode",{parentName:"h4"},"run")," \u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"task-run 0.1.0\nStarcoin-specifc arguments for the run command,\n\nUSAGE:\n    task run [FLAGS] [OPTIONS] [--] [NAME]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n    -v, --verbose    print detailed outputs\n\nOPTIONS:\n        --args <args>...\n        --gas-budget <gas-budget>\n    -k, --public-key <public-key>\n        --signers <signers>...\n        --syntax <syntax>\n        --type-args <type-args>...\n\nARGS:\n    <NAME>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"run")," \u6307\u4ee4\u53ef\u4ee5\u6267\u884c\u4e00\u4e2a\u811a\u672c\u6216\u8005\u811a\u672c\u51fd\u6570\u3002\n\u5982\u679c\u662f\u811a\u672c\uff0c\u90a3\u4e48\u811a\u672c\u4ee3\u7801\u5fc5\u987b\u8ddf\u5728\u8be5\u6307\u4ee4\u540e\u9762\u3002\n\u5982\u679c\u662f\u811a\u672c\u51fd\u6570\uff0c\u90a3\u4e48\u51fd\u6570\u540d\u5b57 ",(0,r.kt)("inlineCode",{parentName:"p"},"<NAME>")," \u5fc5\u987b\u63d0\u4f9b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--signers")," \u58f0\u660e\u4ea4\u6613\u7684\u53d1\u8d77\u8005\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--type-args")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"--args")," \u58f0\u660e\u4ea4\u6613\u8981\u6267\u884c\u7684\u51fd\u6570\u7684\u7c7b\u578b\u53c2\u6570\u548c\u53c2\u6570\u3002")),(0,r.kt)("p",null,"\u4f8b\u5b50:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//# run --signers alice\nscript {\nuse StarcoinFramework::STC::{STC};\nuse StarcoinFramework::Token;\nuse StarcoinFramework::Account;\nfun main(account: signer) {\n    let coin = Account::withdraw<STC>(&account, 0);\n    Token::destroy_zero(coin);\n}\n}\n\n//# run --signers alice --type-args 0x1::DummyToken::DummyToken 0x1::Account::accept_token\n\n")),(0,r.kt)("h4",{id:"view-\u6307\u4ee4"},(0,r.kt)("inlineCode",{parentName:"h4"},"view")," \u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"task-view 0.1.0\n\nUSAGE:\n    task view --address <address> --resource <resource>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --address <address>\n        --resource <resource>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"view")," \u6307\u4ee4\u53ef\u4ee5\u67e5\u8be2\u67d0\u4e2a\u5730\u5740\u4e0b\u7684\u67d0\u4e2a\u8d44\u6e90\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u4f8b\u5b50:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//# view --address alice --resource 01::Account::Account\n\n//# view --address StarcoinFramework --resource 0x1::Config::Config<0x1::VMConfig::VMConfig>\n")),(0,r.kt)("h4",{id:"print-bytecode-\u6307\u4ee4"},(0,r.kt)("inlineCode",{parentName:"h4"},"print-bytecode")," \u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"task-print-bytecode 0.1.0\nTranslates the given Move IR module or script into bytecode, then prints a textual representation of that bytecode\n\nUSAGE:\n    task print-bytecode [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --input <input>    The kind of input: either a script, or a module [default: script]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"print-bytecode")," \u6307\u4ee4\u53ef\u4ee5\u6253\u5370\u7ed9\u5b9a\u7684\u6a21\u5757\u6216\u8005\u811a\u672c\u7684\u5b57\u8282\u7801\u3002"),(0,r.kt)("h3",{id:"\u96c6\u6210\u6d4b\u8bd5\u7684\u671f\u671b\u7ed3\u679c"},"\u96c6\u6210\u6d4b\u8bd5\u7684\u671f\u671b\u7ed3\u679c"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u96c6\u6210\u6d4b\u8bd5\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a\u76f8\u5e94\u7684\u671f\u671b\u6587\u4ef6\uff0c\u5b83\u5305\u542b\u4e86\u96c6\u6210\u6d4b\u8bd5\u4e2d\u6bcf\u4e2a\u6307\u4ee4\u7684\u9884\u671f\u8f93\u51fa\u3002\nmpm \u5c06\u6bd4\u8f83\u96c6\u6210\u6d4b\u8bd5\u7684\u6d4b\u8bd5\u7ed3\u679c\u548c\u671f\u671b\u6587\u4ef6\u3002\n\u5982\u679c\u4e24\u8005\u4e0d\u540c\uff0c\u90a3\u4e48\u8be5\u96c6\u6210\u6d4b\u8bd5\u5c31\u4f1a\u5931\u8d25\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"mpm integration-test"),"\u65f6\u63d0\u4f9b",(0,r.kt)("inlineCode",{parentName:"p"},"--ub"),"\u53c2\u6570\u6765\u751f\u6210\u671f\u671b\u6587\u4ef6\u3002\n\u4f46\u4f60\u5fc5\u987b\u68c0\u67e5\u751f\u6210\u7684\u8f93\u51fa\u662f\u5426\u771f\u7684\u662f\u4f60\u7684\u96c6\u6210\u6d4b\u8bd5\u7684\u9884\u671f\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u4f8b\u5b50:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd coin-swap\nmpm pacakge build\nmpm integration-test test_coin_swap\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u96c6\u6210\u6d4b\u8bd5\u7684\u7528\u6cd5\uff0c\u5982\u6709\u7591\u95ee\uff0c\u6b22\u8fce\u5728 starcoin \u7684 discord \u8bba\u575b\u63d0\u51fa\u3002"))}u.isMDXComponent=!0}}]);