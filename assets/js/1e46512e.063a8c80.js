"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[5899],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(k,o(o({ref:n},p),{},{components:t})):i.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5845:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var i=t(3117),a=(t(7294),t(3905));const r={},o="Write Move integration test",s={unversionedId:"move/move-test/move-integration-test",id:"move/move-test/move-integration-test",title:"Write Move integration test",description:"Now you know how to write unit test in Move.",source:"@site/docs/03-move/97-move-test/02-move-integration-test.md",sourceDirName:"03-move/97-move-test",slug:"/move/move-test/move-integration-test",permalink:"/starcoin-cookbook/docs/move/move-test/move-integration-test",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/03-move/97-move-test/02-move-integration-test.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Unit Tests",permalink:"/starcoin-cookbook/docs/move/move-test/move-unit-test"},next:{title:"How to debug Move module and troubleshooting",permalink:"/starcoin-cookbook/docs/move/move-test/how-to-debug"}},l={},c=[{value:"Integration Test Directives",id:"integration-test-directives",level:3},{value:"Directive - init",id:"directive---init",level:4},{value:"Directive - block",id:"directive---block",level:4},{value:"Directive - faucet",id:"directive---faucet",level:4},{value:"Directive - call",id:"directive---call",level:4},{value:"Directive - call-api",id:"directive---call-api",level:4},{value:"Directive - package",id:"directive---package",level:4},{value:"Directive - deploy",id:"directive---deploy",level:4},{value:"Directive - publish",id:"directive---publish",level:4},{value:"Directive - run",id:"directive---run",level:4},{value:"Directive - view",id:"directive---view",level:4},{value:"Directive - print-bytecode",id:"directive---print-bytecode",level:4},{value:"Integration Test Expectation",id:"integration-test-expectation",level:3}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"write-move-integration-test"},"Write Move integration test"),(0,a.kt)("p",null,"Now you know how to write unit test in Move.\nBut unit test only suits for simple test scenarios, like mathematical computation.\nFor end-to-end test cases with user interactions, integration test comes to play."),(0,a.kt)("p",null,"Integration test is a feature of mpm."),(0,a.kt)("p",null,"It can simulates:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"account initialization."),(0,a.kt)("li",{parentName:"ul"},"block generation."),(0,a.kt)("li",{parentName:"ul"},"module publishing."),(0,a.kt)("li",{parentName:"ul"},"execute scripts or script function.")),(0,a.kt)("p",null,"All actions are wrapped into transactions."),(0,a.kt)("p",null,"All integration test files should be in ",(0,a.kt)("inlineCode",{parentName:"p"},"integration-tests")," dir under the package root path."),(0,a.kt)("p",null,"Integration testing for Move adds new annotations to the Move source files. These annotations start with ",(0,a.kt)("inlineCode",{parentName:"p"},"//#"),", and are separated by an empty line. "),(0,a.kt)("p",null,"Directives works like a command line, you provide command name and command arguments,\nand move pacakge manager executes the directives like OS executes cli commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mpm integration-test --help\nmpm-integration-test\nRun integration tests in tests dir\n\nUSAGE:\n    mpm integration-test [OPTIONS] [FILTER]\n\nARGS:\n    <FILTER>    The FILTER string is tested against the name of all tests, and only those tests\n                whose names contain the filter are run\n\nOPTIONS:\n        --abi\n            Generate ABIs for packages\n\n    -d, --dev\n            Compile in 'dev' mode. The 'dev-addresses' and 'dev-dependencies' fields will be used if\n            this flag is set. This flag is useful for development of packages that expose named\n            addresses that are not set to a specific value\n\n        --doc\n            Generate documentation for packages\n\n        --exact\n            Exactly match filters rather than by substring\n\n        --force\n            Force recompilation of all packages\n\n        --format <FORMAT>\n            Configure formatting of output: pretty = Print verbose output; terse = Display one\n            character per test; (json is unsupported, exists for compatibility with the default test\n            harness) [default: pretty] [possible values: pretty, terse]\n\n    -h, --help\n            Print help information\n\n        --install-dir <INSTALL_DIR>\n            Installation directory for compiled artifacts. Defaults to current directory\n\n        --list\n            List all tests\n\n    -p, --path <PACKAGE_PATH>\n            Path to a package which the command should be run with respect to [default: .]\n\n    -q, --quiet\n            Output minimal information\n\n        --test\n            Compile in 'test' mode. The 'dev-addresses' and 'dev-dependencies' fields will be used\n            along with any code in the 'test' directory\n\n        --test-threads <TEST_THREADS>\n            Number of threads used for running tests in parallel [env: RUST_TEST_THREADS=] [default:\n            32]\n\n        --ub\n            update test baseline\n\n    -v\n            Print additional diagnostics if available\n\n")),(0,a.kt)("h3",{id:"integration-test-directives"},"Integration Test Directives"),(0,a.kt)("h4",{id:"directive---init"},"Directive - init"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"task-init 0.1.0\n\nUSAGE:\n    task init [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --block-number <block-number>       block number to read state from. default to latest block number\n        --addresses <named-addresses>...\n    -n, --network <network>                 genesis with the network\n        --public-keys <public-keys>...      the `public-keys` option is deprecated, please remove it.\n        --rpc <rpc>                         use remote starcoin rpc as initial state\n        --debug <debug>                     enable debug mode, output more info to stderr.\n")),(0,a.kt)("p",null,"Directive ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," can declare the initial state of you integration test.\nYou can either start from a fresh blockchain state by providing arg ",(0,a.kt)("inlineCode",{parentName:"p"},"-n test"),",\nor fork from a remote state snapshot like ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc http://main.seed.starcoin.org:9850 --block-number 100000"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"--address <named-addresses>")," can be used to declare additional named addressed which will be used in the integration test later. ",(0,a.kt)("inlineCode",{parentName:"p"},"--debug")," mode will print more information of transaction results."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//# init -n dev\n\n//# init -n test --addresses alice=0xAA\n\n//# init -n barnard\n\n//# init --rpc http://main.seed.starcoin.org:9850 --block-number 100000\n\n")),(0,a.kt)("h4",{id:"directive---block"},"Directive - block"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"task-block 0.1.0\n\nUSAGE:\n    task block [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --author <author>\n        --number <number>\n        --timestamp <timestamp>\n        --uncles <uncles>\n")),(0,a.kt)("p",null,"Directive ",(0,a.kt)("inlineCode",{parentName:"p"},"block")," start a new block."),(0,a.kt)("p",null,"Every directives between this block directive and next block directive are running in this block.\nYou can pass custom ",(0,a.kt)("inlineCode",{parentName:"p"},"--author"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--timestamp"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--uncles")," to fit your need."),(0,a.kt)("p",null,"If no block directive specified, transactions will run on default block whose block number is the next block number of initial state.\nIf you fork from a remote state of block number ",(0,a.kt)("inlineCode",{parentName:"p"},"h"),", then the next block's number is ",(0,a.kt)("inlineCode",{parentName:"p"},"h+1"),"."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//# block\n\n//# block --author alice\n\n//# block --timestamp 100000000\n\n//# block --uncles 10\n")),(0,a.kt)("h4",{id:"directive---faucet"},"Directive - faucet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"task-faucet 0.1.0\n\nUSAGE:\n    task faucet [OPTIONS] --addr <address>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --addr <address>\n        --amount <initial-balance>     [default: 100000000000]\n")),(0,a.kt)("p",null,"Directive ",(0,a.kt)("strong",{parentName:"p"},"faucet")," can create and faucet an address (can be named address like ",(0,a.kt)("inlineCode",{parentName:"p"},"alice"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tom")," or raw address like ",(0,a.kt)("inlineCode",{parentName:"p"},"0x1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x2"),") with some STC of given amount.\nIf the address is a named address, it will auto generate an raw address(and public key) and assign it to the named address."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//# faucet --addr bob\n\n//# faucet --addr alice --amount 0\n\n//# faucet --addr tom --amount 10000000000000\n\n")),(0,a.kt)("h4",{id:"directive---call"},"Directive - call"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"task-call 0.1.0\n\nCall a smart contract function \n\nUSAGE:\n    task call <function>  [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nARGS:\n    <function>       Smart contract function name\n\nOPTIONS:\n    -i, --args <args>               function arguments\n    -t, --type-args <type-args>     function type arguments\n")),(0,a.kt)("p",null,"Directive ",(0,a.kt)("inlineCode",{parentName:"p"},"call")," can use to call smart contract functions."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//# call 0x1::Account::balance --type-args 0x1::STC::STC --args 0x662ba5a1a1da0f1c70a9762c7eeb7aaf\n")),(0,a.kt)("h4",{id:"directive---call-api"},"Directive - call-api"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"task-call-api 0.1.0\n\nCall a RPC api from remote starcoin node.\n\nUSAGE:\n    task call-api <method> <params>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nARGS:\n    <method>         api method to call, example: node.info\n    <params>         api params, should be a json array string\n")),(0,a.kt)("p",null,"Directive ",(0,a.kt)("inlineCode",{parentName:"p"},"call-api")," can use to call starcoin RPC apis. The outputs are stored in mpm runtime context,\nuser can use the result through templete variable as the following directive's args.\nYou can check ",(0,a.kt)("a",{parentName:"p",href:"https://starcoinorg.github.io/jsonrpcdoc/"},"jsonrpc")," to get available APIs and their output schema."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//# call-api chain.info\n\n//# call-api chain.get_block_by_hash [{{$.call-api[0].head.parent_hash}}]\n\n")),(0,a.kt)("h4",{id:"directive---package"},"Directive - package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"task-package 0.1.0\n\nPackage a module\n\nUSAGE:\n    task package [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --signers\n        --init-function\n        --type-args\n        --args\n")),(0,a.kt)("p",null,"Directive ",(0,a.kt)("inlineCode",{parentName:"p"},"package")," package a module and return the packed binary blob, blob hash, and the temporary file path.\nIt's usefull in two-phase module upgrade test."),(0,a.kt)("p",null,"The output example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "file":"/tmp/.tmpnok0M6/0x3c6b00fadc6b4f37fa6e2c6c0949e97c89b00c07c0d1f1761671e6fe18792676.blob",\n    "hex":"0x662ba5a1a1da0f1c70a9762c7eeb7aaf0146a11ceb0b040000000601000203020505070107080b0813100c2307000000010000000004746573740568656c6c6f662ba5a1a1da0f1c70a9762c7eeb7aaf000100000001020000",\n    "package_hash":"0x3c6b00fadc6b4f37fa6e2c6c0949e97c89b00c07c0d1f1761671e6fe18792676"\n}\n')),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//# package\nmodule creator::test {\n    public fun hello() {}\n}\n")),(0,a.kt)("h4",{id:"directive---deploy"},"Directive - deploy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"task-deploy 0.1.0\n\nDeploy a packed module.\n\nUSAGE:\n    task deploy [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nARGS:\n    <mv-or-package-file>    move bytecode file path or package binary path\n\nOPTIONS:\n        --signers\n        --gas-budget\n")),(0,a.kt)("p",null,"Directive ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," can deploy a packed module to the blockchain."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--signers")," used in the second phase of a two-phase upgrade plan, any one call the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," directive.\n",(0,a.kt)("inlineCode",{parentName:"p"},"--gas-budget")," specifies the max gas of the transaction."),(0,a.kt)("p",null,"Examples: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//# deploy {{$.package[0].file}}\n")),(0,a.kt)("h4",{id:"directive---publish"},"Directive - publish"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"task-publish 0.1.0\nStarcoin-specific arguments for the publish command\n\nUSAGE:\n    task publish [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --gas-budget <gas-budget>\n    -k, --public-key <public-key>\n        --syntax <syntax>\n")),(0,a.kt)("p",null,"Directive ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," can publish a module to the blockchain.\nThe module code must follows the directive."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--gas-budget")," specifies the max gas of the transaction.\n",(0,a.kt)("inlineCode",{parentName:"p"},"--syntax")," can be ingored for now."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//# publish\nmodule alice::Holder {\n    use StarcoinFramework::Signer;\n\n    struct Hold<T> has key, store {\n        x: T\n    }\n\n    public fun hold<T: store>(account: &signer, x: T) {\n        move_to(account, Hold<T>{x})\n    }\n\n    public fun get<T: store>(account: &signer): T\n    acquires Hold {\n        let Hold {x} = move_from<Hold<T>>(Signer::address_of(account));\n        x\n    }\n}\n\n//# publish\nmodule Dummy::DummyModule {}\n\n\n")),(0,a.kt)("h4",{id:"directive---run"},"Directive - run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"task-run 0.1.0\nStarcoin-specifc arguments for the run command,\n\nUSAGE:\n    task run [FLAGS] [OPTIONS] [--] [NAME]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n    -v, --verbose    print detailed outputs\n\nOPTIONS:\n        --args <args>...\n        --gas-budget <gas-budget>\n    -k, --public-key <public-key>\n        --signers <signers>...\n        --syntax <syntax>\n        --type-args <type-args>...\n\nARGS:\n    <NAME>\n")),(0,a.kt)("p",null,"Directive ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," can execute a script of script function.\nIf it's a script, the script code must follow the directive.\nIf it's a script function, then ",(0,a.kt)("inlineCode",{parentName:"p"},"<NAME>")," should be provided."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--signers")," declare the transaction sender.\n",(0,a.kt)("inlineCode",{parentName:"p"},"--type-args")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--args")," declare type arguments and arguments of the script of script function."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//# run --signers alice\nscript {\nuse StarcoinFramework::STC::{STC};\nuse StarcoinFramework::Token;\nuse StarcoinFramework::Account;\nfun main(account: signer) {\n    let coin = Account::withdraw<STC>(&account, 0);\n    Token::destroy_zero(coin);\n}\n}\n\n//# run --signers alice --type-args 0x1::DummyToken::DummyToken 0x1::Account::accept_token\n\n")),(0,a.kt)("h4",{id:"directive---view"},"Directive - view"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"task-view 0.1.0\n\nUSAGE:\n    task view --address <address> --resource <resource>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --address <address>\n        --resource <resource>\n")),(0,a.kt)("p",null,"Directive ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," can query any resource of any address."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//# view --address alice --resource 01::Account::Account\n\n//# view --address StarcoinFramework --resource 0x1::Config::Config<0x1::VMConfig::VMConfig>\n")),(0,a.kt)("h4",{id:"directive---print-bytecode"},"Directive - print-bytecode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"task-print-bytecode 0.1.0\nTranslates the given Move IR module or script into bytecode, then prints a textual representation of that bytecode\n\nUSAGE:\n    task print-bytecode [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --input <input>    The kind of input: either a script, or a module [default: script]\n")),(0,a.kt)("p",null,"Directive ",(0,a.kt)("inlineCode",{parentName:"p"},"print-bytecode")," can print the bytecode of given module or script."),(0,a.kt)("h3",{id:"integration-test-expectation"},"Integration Test Expectation"),(0,a.kt)("p",null,"Each integration test should have an corresponding expectation file, which contains the expected output of each directives in integration test.\nMove package manager will compare the test result of a integration test with the expectation file.\nIf there are different outputs, then the integration test fails.\nYou can generate the expected file by providing ",(0,a.kt)("inlineCode",{parentName:"p"},"--ub")," argument when running ",(0,a.kt)("inlineCode",{parentName:"p"},"mpm integration-test")," for the first time.\nBut you have to check whether the generated output really is the expected output of your integration test."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd coin-swap\nmpm pacakge build\nmpm integration-test test_coin_swap\n")),(0,a.kt)("p",null,"This's all about integration test of move."))}d.isMDXComponent=!0}}]);