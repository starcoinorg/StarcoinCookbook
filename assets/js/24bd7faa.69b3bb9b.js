"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[8468],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(i,".").concat(k)]||d[k]||p[k]||a;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],c={sidebar_position:3},i="How to set up a local dev network",s={unversionedId:"getting_started/setup/dev-network",id:"getting_started/setup/dev-network",title:"How to set up a local dev network",description:"TODO",source:"@site/docs/getting_started/setup/3.dev-network.md",sourceDirName:"getting_started/setup",slug:"/getting_started/setup/dev-network",permalink:"/starcoin-cookbook/docs/getting_started/setup/dev-network",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/getting_started/setup/3.dev-network.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Working with the Starcoin console",permalink:"/starcoin-cookbook/docs/getting_started/setup/starcoin-console"},next:{title:"How to participate in a test network",permalink:"/starcoin-cookbook/docs/getting_started/setup/test-network"}},u={},p=[{value:"Run Local Network",id:"run-local-network",level:2}],d={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-set-up-a-local-dev-network"},"How to set up a local dev network"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"local dev node set up."),(0,a.kt)("li",{parentName:"ol"},"How to get STC in dev node."),(0,a.kt)("li",{parentName:"ol"},"How to set up a local cluster"),(0,a.kt)("li",{parentName:"ol"},"Some useful tips for local dev node",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"How to skip time in local dev?")))),(0,a.kt)("h2",{id:"run-local-network"},"Run Local Network"),(0,a.kt)("p",null,"the following command could start new dev node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin -n dev\n")),(0,a.kt)("p",null,"after this command,you cound find node address in log or std output ,it could like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Self address is: /ip4/127.0.0.1/tcp/59476/p2p/12D3KooWPePRG6BDdjgtEYmPDxNyJfMWpQ1Rwgefuz9eqksLfxJb\n")),(0,a.kt)("p",null,"then you could setup another node by this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin -n dev --seed /ip4/127.0.0.1/tcp/59476/p2p/12D3KooWPePRG6BDdjgtEYmPDxNyJfMWpQ1Rwgefuz9eqksLfxJb\n\n")),(0,a.kt)("p",null,"You could use subcommand console to start cli console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin -n dev console\n")),(0,a.kt)("p",null,"repeat these steps , you cloud get multi node local dev network."),(0,a.kt)("p",null,"Run node by docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name starcoin -d --network host -v ~/.starcoin/:/root/.starcoin/ starcoin/starcoin:latest /starcoin/starcoin -n main\n")))}k.isMDXComponent=!0}}]);