"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[2156],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3125:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var o=n(3117),a=(n(7294),n(3905));const r={},i="How to use Starcoin CLI",s={unversionedId:"getting-started/setup/starcoin-usage",id:"getting-started/setup/starcoin-usage",title:"How to use Starcoin CLI",description:"starcoin is used to start a local network or join a starcoin network. Running a local network or join test network makes it easier to test and debug your code changes. You can use the CLI command dev to compile, publish, and execute Move programs on your local network or test network.",source:"@site/docs/02-getting-started/02-setup/01-starcoin-usage.md",sourceDirName:"02-getting-started/02-setup",slug:"/getting-started/setup/starcoin-usage",permalink:"/docs/getting-started/setup/starcoin-usage",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/02-getting-started/02-setup/01-starcoin-usage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting up a node and participating in a network",permalink:"/docs/getting-started/setup/"},next:{title:"How working with the Starcoin console",permalink:"/docs/getting-started/setup/starcoin-console"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Start CLI console",id:"start-cli-console",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to use CLI with pipeline?",id:"how-to-use-cli-with-pipeline",level:3},{value:"Node exit for an unexpected error: file limit the maximum number of open file descriptors is too small, got xxxx, expect greater or equal to 45056",id:"node-exit-for-an-unexpected-error-file-limit-the-maximum-number-of-open-file-descriptors-is-too-small-got-xxxx-expect-greater-or-equal-to-45056",level:3},{value:"Options",id:"options",level:2},{value:"Chain-related options",id:"chain-related-options",level:3},{value:"Node-related options",id:"node-related-options",level:3},{value:"RPC related options",id:"rpc-related-options",level:3},{value:"P2P network related options",id:"p2p-network-related-options",level:3},{value:"Transaction pool related options",id:"transaction-pool-related-options",level:3},{value:"Miner related options",id:"miner-related-options",level:3},{value:"Log and Metrics related options",id:"log-and-metrics-related-options",level:3},{value:"Rocksdb related options",id:"rocksdb-related-options",level:3},{value:"CLI related options",id:"cli-related-options",level:3},{value:"Subcommand",id:"subcommand",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-starcoin-cli"},"How to use Starcoin CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"starcoin")," is used to start a local network or join a starcoin network. Running a local network or join test network makes it easier to test and debug your code changes. You can use the CLI command dev to compile, publish, and execute Move programs on your local network or test network. "),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Starcoin\n\nUSAGE:\n    starcoin [OPTIONS] [SUBCOMMAND]\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"starcoin")," to set up a node and join the main network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ starcoin\n")),(0,a.kt)("p",null,"You can join to other netowrks using ",(0,a.kt)("inlineCode",{parentName:"p"},"-n|--net")," options. For example, start a local dev network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ starcoin -n dev\n.....\n2022-03-31T21:45:53.852430+08:00 INFO - Ipc rpc server start at :"/var/folders/_4/1ghtd3z15qjcw8yj905dcql40000gn/T/.tmph3EJ8S/dev/starcoin.ipc"\n2022-03-31T21:45:53.855938+08:00 INFO - Rpc: http server start at :0.0.0.0:9850\n2022-03-31T21:45:53.856575+08:00 INFO - Rpc: tcp server start at: 0.0.0.0:9860\n2022-03-31T21:45:53.857295+08:00 INFO - Listening for new connections on 0.0.0.0:9870.\n2022-03-31T21:45:53.857405+08:00 INFO - Rpc: websocket server start at: 0.0.0.0:9870\n2022-03-31T21:45:53.857479+08:00 INFO - Service starcoin_rpc_server::service::RpcService start.\n2022-03-31T21:45:53.857537+08:00 INFO - starcoin_rpc_server::service::RpcService service actor started\nWaiting SIGINT or SIGTERM ...\n')),(0,a.kt)("p",null,"As shown above, there are four RPC ways we can interact with node."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IPC file: .../dev/starcoin.ipc"),(0,a.kt)("li",{parentName:"ul"},"HTTP server: 0.0.0.0:9850"),(0,a.kt)("li",{parentName:"ul"},"TCP server: 0.0.0.0:9860"),(0,a.kt)("li",{parentName:"ul"},"WebSocket server: 0.0.0.0:9870")),(0,a.kt)("p",null,"The local dev mode will use a temporary directory by default, all the data will be reset each time restart the network. Once the dev network is started, we can connect to the node through IPC (inter-process communication) file to execute commands, such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ starcoin -c /var/folders/_4/1ghtd3z15qjcw8yj905dcql40000gn/T/.tmph3EJ8S/dev/starcoin.ipc chain info\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: The IPC file path is different on Windows, and you need to use the following command (dev in the middle needs to change according to the connected network):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ starcoin.exe --connect \\\\.\\pipe\\dev\\starcoin.ipc console\n")),(0,a.kt)("p",null,"Connect through the WebSocket RPC interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ starcoin -c ws://127.0.0.1:9870 chain info\n")),(0,a.kt)("p",null,"Or connect to a remote seed node through the RPC interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ starcoin -c ws://main.seed.starcoin.org:9870 chain info\n")),(0,a.kt)("h2",{id:"start-cli-console"},"Start CLI console"),(0,a.kt)("p",null,"Get into an interactive console by running the subcommand ",(0,a.kt)("inlineCode",{parentName:"p"},"console"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ starcoin -n dev console\n\n......\n                                                (%&&&&(%&%(  &#\n                                        ,#%%%&%%%#/        (%&&%\n                                %#%#%%%%#&&%                 %&\n                                / %%%                          #&\n                            &#%%%#%%%%#                        *&%\n                        (#%%%#/ %%%%%%#                      #&%\n                    #%#%%#&&   #%%%%%%%(                   &%%&\n                (#%%##      #%%%%%%%%%/                *%%\n            #%%%&#%%##&&&&%%%(%%%%%%%%%%%&&&&&&&& &%  (&#/#\n            ((##%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&%%  ####\n        ###%#(& &#%%%%%%%%%%%%%%%%%%%%%&&&&%##&(%&%\n        (#%##       (#%%%%%%%%%%%%%%%%%%&%#(#%%#\n        (###(%           &&#%%%%%%%%%%%%%%&%%#&&\n    ####                %%%%%%%%%%%%(    %%\n    /###/                #%%%%%%%%#%%#     %%#\n    /###(                (%%%%%%#%%%##%%%(  *%%#\n    ###(                (%%%%###&#     %&#%%&(%%%\n    (##(&              &#%#(#               %%&&%\n    (###%#       (%%%#((&                    &&%#\n        (#%%%%%%#(\n\n     \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557\u2588\u2588\u2588\u2557  \u2588\u2588\u2557\n    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2551\n    \u255a\u2588\u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u255a\u2550\u255d\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557\u2588\u2588\u2551\n     \u255a\u2550\u2550\u2550\u2588\u2588\u2557   \u2588\u2588\u2551   \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2551\n    \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d   \u2588\u2588\u2551   \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2551\n    \u255a\u2550\u2550\u2550\u2550\u2550\u255d    \u255a\u2550\u255d   \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u255d  \u255a\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u2550\u255d\n\nstarcoin%\n")),(0,a.kt)("p",null,"Then you can run command in the console directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% chain info\n{\n  "ok": {\n    "block_info": {\n      "block_accumulator_info": {\n        "accumulator_root": "0x155fff75365299de34f6c17a941936f4873ff6a6ce263a38d51cc49bcdd05002",\n        "frozen_subtree_roots": [\n          "0x155fff75365299de34f6c17a941936f4873ff6a6ce263a38d51cc49bcdd05002"\n        ],\n        "num_leaves": "1",\n        "num_nodes": "1"\n      },\n      "block_hash": "0x155fff75365299de34f6c17a941936f4873ff6a6ce263a38d51cc49bcdd05002",\n      "total_difficulty": "0x01",\n      "txn_accumulator_info": {\n        "accumulator_root": "0xd9d8bfad3b1d05486ff3b0831c4cbd94c6ede35598cd76a69c0e3879aaf12090",\n        "frozen_subtree_roots": [\n          "0xd9d8bfad3b1d05486ff3b0831c4cbd94c6ede35598cd76a69c0e3879aaf12090"\n        ],\n        "num_leaves": "1",\n        "num_nodes": "1"\n      }\n    },\n    "chain_id": 254,\n    "genesis_hash": "0x155fff75365299de34f6c17a941936f4873ff6a6ce263a38d51cc49bcdd05002",\n    "head": {\n      "author": "0x00000000000000000000000000000001",\n      "author_auth_key": null,\n      "block_accumulator_root": "0x414343554d554c41544f525f504c414345484f4c4445525f4841534800000000",\n      "block_hash": "0x155fff75365299de34f6c17a941936f4873ff6a6ce263a38d51cc49bcdd05002",\n      "body_hash": "0xd54136a5c1455409ef22392f2b2451e730222fd2ff8297ab3e47db8dc6d7afab",\n      "chain_id": 254,\n      "difficulty": "0x01",\n      "extra": "0x00000000",\n      "gas_used": "0",\n      "nonce": 0,\n      "number": "0",\n      "parent_hash": "0x3a9c4141b1893c28c96eda9dd937145fe3cee63c0160b91a391b9afe789c5fd5",\n      "state_root": "0x1ee14fb341b111b6fcd822f97a6b718b88e6dcd930d69e7b7620e1f4f31a2afc",\n      "timestamp": "0",\n      "txn_accumulator_root": "0xd9d8bfad3b1d05486ff3b0831c4cbd94c6ede35598cd76a69c0e3879aaf12090"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Getting into the console in this way, a ",(0,a.kt)("inlineCode",{parentName:"p"},"starcoin")," node will be set up if there's no other node exists. The console communicates with the node through IPC(inter-process communication).  In this way, the node's lifecycle is bound to the console's, and the node will exit automatically when the console exit."),(0,a.kt)("p",null,"Connect to a node through IPC or WebSocket RPC:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ starcoin -c ws://127.0.0.1:9870 console\n$ starcoin -c ~/.starcoin/main/starcoin.ipc console\n$ starcoin -c ws://main.seed.starcoin.org:9870 console\n")),(0,a.kt)("p",null,"If connected to a remote seed node through RPC, the methods related to the account is not availabel. You can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"--local-account-dir")," option and import an account to use the account methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ starcoin --connect ws://main.seed.starcoin.org:9870 --local-account-dir ~/.starcoin/main/account_vaults console\nstarcoin% account import -i <private-key> -p <your-password>\n")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-use-cli-with-pipeline"},"How to use CLI with pipeline?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"starcoin")," output log to stderr and result to stdout, so you can use the pipeline as other Linux shell commands. For example, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"jq")," to get the latest block number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin -c ws://main.seed.starcoin.org:9870 chain info | jq '.ok.head.number'\n")),(0,a.kt)("h3",{id:"node-exit-for-an-unexpected-error-file-limit-the-maximum-number-of-open-file-descriptors-is-too-small-got-xxxx-expect-greater-or-equal-to-45056"},"Node exit for an unexpected error: file limit the maximum number of open file descriptors is too small, got xxxx, expect greater or equal to 45056"),(0,a.kt)("p",null,"The reason for this error is that the default maximum number of file descriptors that can be opened by the ubuntu is not enough."),(0,a.kt)("p",null,"this step will help you set the Max file descriptors to 65535"),(0,a.kt)("p",null,"you just nedd add ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultLimitNOFILE=65536")," to the end of ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system.conf")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/user.conf"),",then ",(0,a.kt)("inlineCode",{parentName:"p"},"reboot")," the ubuntu"),(0,a.kt)("p",null,"finally,you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ulimit -n")," to check the max file descriptors limitation"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"chain-related-options"},"Chain-related options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"}," -n, --net <net>\n            Chain Network\n                Builtin network: test,dev,halley,proxima,barnard,main\n                Custom network format: chain_name:chain_id\n                Such as:\n                my_chain:123 will init a new chain with id `123`.\n                Custom network first start should also set the `genesis-config` option.\n                Use starcoin_generator command to generate a genesis config.\n\n--genesis-config <genesis-config>\n    Init chain by a custom genesis config. if want to reuse builtin network config, just pass a builtin network\n    name. This option only work for node init start\n\n--disable-seed             Do not connect to seed node, include builtin and config seed. This option is skip for\n                            config file, only support cli option\n\n--seed <seeds>\n    P2P network seed, multi seed should use ',' as delimiter [default: ]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"disable-seed: Node will connect to the seed node by default, and search other nodes through the seed node. With this option, the node will not connect to the seed node anymore.")),(0,a.kt)("h3",{id:"node-related-options"},"Node-related options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\n-d, --data-dir <base-data-dir>\n            Path to data dir, this dir is base dir, the final data_dir is base_dir/chain_network_name\n\n--local-account-dir <account-dir>\n            Path to the local account provider dir, load the accounts from local dir path\n\n--vault-dir <dir>\n            Account vault dir config. Default: account_vaults in data_dir\n\n--cache-sizes <cache-sizes>                                               cache sizes\n\n--node-key <node-key>\n    Node network private key string This option is skip for config file, only support cli option, after init\n    will write the key to node_key_file\n--node-key-file <node-key-file>\n    Node network private key file, default is network_key under the data dir\n\n--node-name <node-name>\n    Node network name, just for display, if absent will generate a random name\n\n\n")),(0,a.kt)("h3",{id:"rpc-related-options"},"RPC related options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"--disable-http-rpc         disable http jsonrpc endpoint\n--disable-ipc-rpc          disable ipc jsonrpc endpoint\n--disable-tcp-rpc          disable tcp jsonrpc endpoint\n--disable-websocket-rpc    disable websocket jsonrpc endpoint\n\n\n--event-query-max-block-range <block-query-max-range>\n\n\n--http-apis <http-apis>                                                   rpc apiset to serve\n--http-ip-headers <http-ip-headers>...\n    list of http header which identify a ip, Default: X-Real-IP,X-Forwarded-For\n\n--http-max-request-body <http-max-request-body>                           max request body in bytes\n--http-port <http-port>                                                   Default http port is 9850\n--http-threads <http-threads>\n    How many thread to use for http service\n\n--ipc-apis <ipc-apis>                                                     rpc apiset to serve\n--jsonrpc-custom-global-api-quota <jsonrpc-custom-global-api-quota>...\n    customize api quota, eg: node.info=100/s\n\n--jsonrpc-custom-user-api-quota <jsonrpc-custom-user-api-quota>...\n    customize api quota of user, eg: node.info=100/s\n\n--jsonrpc-default-global-api-quota <jsonrpc-default-global-api-quota>     default api quota, eg: 1000/s\n--jsonrpc-default-user-api-quota <jsonrpc-default-user-api-quota>         default api quota of user, eg: 1000/s\n \n\n--websocket-apis <websocket-apis>                                         rpc apiset to serve\n--websocket-max-request-body <websocket-max-request-body>\n    Max request body in bytes, Default is 10M\n\n --rpc-address <rpc-address>                                               Rpc address, default is 0.0.0.0\n--websocket-port <websocket-port>                                         Default websocket port is 9870\n\n\n--tcp-apis <tcp-apis>                                                     rpc apiset to serve\n--tcp-port <tcp-port>                                                     Default tcp port is 9860\n--query-max-txn-info-range <txn-info-query-max-range>\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"disable-http-rpc\uff5cdisable-ipc-rpc\uff5cdisable-tcp-rpc\uff5cdisable-tcp-rpc\uff5cdisable-websocket-rpc\uff1aBy default, the node will open all the ports. You can disable some ports with the corresponding flag.")),(0,a.kt)("h3",{id:"p2p-network-related-options"},"P2P network related options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"--discover-local <discover-local>\n    Enable peer discovery on local networks. By default this option is `false`. only support cli option\n\n--listen <listen>\n    p2p network listen address, Default is /ip4/0.0.0.0/tcp/9840\n\n--max-incoming-peers <max-incoming-peers>\n            max count for incoming peers. Default 25\n\n--max-outgoing-peers <max-outgoing-peers>\n    max count for outgoing connected peers. Default 75. max peers = max_incoming_peers + max_outgoing_peers\n\n--max-peers-to-propagate <max-peers-to-propagate>\n    max peers to propagate new block and new transactions. Default 128\n\n--max-retry-times <max-retry-times>\n    max retry times once sync block failed, default 15.\n\n\n--min-peers-to-propagate <min-peers-to-propagate>\n    min peers to propagate new block and new transactions. Default 8\n\n--p2prpc-custom-global-api-quota <p2prpc-custom-global-api-quota>...\n        customize global p2p rpc quota, eg: get_block=100/s number_of_values = 1 forces the user to repeat the -D\n        option for each key-value pair: my_program -D a=1 -D b=2\n\n--p2prpc-custom-user-api-quota <p2prpc-custom-user-api-quota>...\n    customize p2p rpc quota of a peer, eg: get_block=10/s\n\n--p2prpc-default-global-api-quota <p2prpc-default-global-api-quota>\n    default global p2p rpc quota, eg: 1000/s\n\n--p2prpc-default-user-api-quota <p2prpc-default-user-api-quota>\n    default p2p rpc quota of a peer, eg: 1000/s\n\n--unsupported-protocols <unsupported-protocols>...\n--unsupported-rpc-protocols <unsupported-rpc-protocols>...\n\n--peer-select-strategy <peer-select-strategy>                             peer select strategy, default random.\n")),(0,a.kt)("h3",{id:"transaction-pool-related-options"},"Transaction pool related options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"--txpool-max-count <txpool-max-count>\n    Maximal number of transactions in the pool. default to 4096\n\n--txpool-max-mem-usage <txpool-max-mem-usage>\n    Maximal memory usage. Default to half of current free mem of system\n\n--txpool-max-per-sender <txpool-max-per-sender>\n    Maximal number of transactions from single sender. default to 128\n\n--txpool-min-gas-price <txpool-min-gas-price>\n    reject transaction whose gas_price is less than the min_gas_price. default to 1\n\n--txpool-tx-propagate-interval <txpool-tx-propagate-interval>\n    interval(s) of tx propagation timer. default to 2\n")),(0,a.kt)("h3",{id:"miner-related-options"},"Miner related options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"--disable-stratum          disable stratum\n--stratum-address <address>                                               Stratum address, default is 0.0.0.0\n--stratum-port <stratum-port>                                             Default tcp port is 9880\n--miner-block-gas-limit <block-gas-limit>\n    Node local block_gas_limit, use min(config.block_gas_limit, onchain.block_gas_limit)\n\n--disable-miner-client <disable-miner-client>\n    Don't start a miner client in node. The main network miner client is disable in default. This flag support\n    both cli and config file\n\n--disable-mint-empty-block <disable-mint-empty-block>\n            Do not mint empty block, default is true in Dev network, only support cli\n\n--miner-thread <miner-thread>\n            Miner client thread number, not work for dev network, default is 1\n\n")),(0,a.kt)("h3",{id:"log-and-metrics-related-options"},"Log and Metrics related options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"--disable-metrics <disable-metrics>                                       disable metrics\n--metrics-address <metrics-address>\n    Metrics server listen address, default is 0.0.0.0\n\n--metrics-port <metrics-port>                                             Metrics server port, default is 9101\n\n--logger-disable-file <logger-disable-file>                               disable file logger\n--logger-disable-stderr <logger-disable-stderr>                           disable stderr logger\n--logger-max-backup <logger-max-backup>\n--logger-max-file-size <logger-max-file-size>\n\n")),(0,a.kt)("h3",{id:"rocksdb-related-options"},"Rocksdb related options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"--rocksdb-bytes-per-sync <rocksdb-bytes-per-sync>                         rocksdb bytes per sync\n--rocksdb-max-open-files <rocksdb-max-open-files>                         rocksdb max open files\n--rocksdb-max-total-wal-sizes <rocksdb-max-total-wal-sizes>               rocksdb max total WAL sizes\n--rocksdb-wal-bytes-per-sync <rocksdb-wal-bytes-per-sync>                 rocksdb wal bytes per sync\n")),(0,a.kt)("h3",{id:"cli-related-options"},"CLI related options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-c, --connect <connect>                                                       Connect and attach to a node\n--watch-timeout <watch-timeout>                                           Watch timeout in seconds\n-o <output-format>\n            set output-format, support [json|table] [default: json]\n")),(0,a.kt)("h3",{id:"subcommand"},"Subcommand"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"account"),(0,a.kt)("li",{parentName:"ul"},"state"),(0,a.kt)("li",{parentName:"ul"},"node"),(0,a.kt)("li",{parentName:"ul"},"chain"),(0,a.kt)("li",{parentName:"ul"},"txpool"),(0,a.kt)("li",{parentName:"ul"},"dev"),(0,a.kt)("li",{parentName:"ul"},"contract"),(0,a.kt)("li",{parentName:"ul"},"console")))}d.isMDXComponent=!0}}]);