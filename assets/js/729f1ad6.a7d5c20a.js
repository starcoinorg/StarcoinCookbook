"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[1696],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905));const i={},l="Binary Canonical Serialization (BCS)",s={unversionedId:"web3/understanding-resource-and-bcs/bcs",id:"web3/understanding-resource-and-bcs/bcs",title:"Binary Canonical Serialization (BCS)",description:'BCS (formerly "Libra Canonical Serialization" or LCS) is a serialization format developed',source:"@site/docs/04-web3/05-understanding-resource-and-bcs/01-bcs.md",sourceDirName:"04-web3/05-understanding-resource-and-bcs",slug:"/web3/understanding-resource-and-bcs/bcs",permalink:"/docs/web3/understanding-resource-and-bcs/bcs",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/04-web3/05-understanding-resource-and-bcs/01-bcs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Understanding and bcs serialize",permalink:"/docs/web3/understanding-resource-and-bcs/"},next:{title:"BCS in JS SDK",permalink:"/docs/web3/understanding-resource-and-bcs/bcs-in-js"}},o={},d=[{value:"Rust Implementation",id:"rust-implementation",level:2},{value:"Application to Cryptography",id:"application-to-cryptography",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:2},{value:"Detailed Specifications",id:"detailed-specifications",level:2},{value:"Recursion and Depth of BCS Data",id:"recursion-and-depth-of-bcs-data",level:3},{value:"Booleans and Integers",id:"booleans-and-integers",level:3},{value:"ULEB128-Encoded Integers",id:"uleb128-encoded-integers",level:3},{value:"Optional Data",id:"optional-data",level:3},{value:"Fixed and Variable Length Sequences",id:"fixed-and-variable-length-sequences",level:3},{value:"Strings",id:"strings",level:3},{value:"Tuples",id:"tuples",level:3},{value:"Structures",id:"structures",level:3},{value:"Externally Tagged Enumerations",id:"externally-tagged-enumerations",level:3},{value:"Maps (Key / Value Stores)",id:"maps-key--value-stores",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"binary-canonical-serialization-bcs"},"Binary Canonical Serialization (BCS)"),(0,r.kt)("p",null,'BCS (formerly "Libra Canonical Serialization" or LCS) is a serialization format developed\nin the context of the ',(0,r.kt)("a",{parentName:"p",href:"https://diem.com"},"Diem")," blockchain."),(0,r.kt)("p",null,"BCS was designed with the following main goals in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"provide good performance and concise (binary) representations;"),(0,r.kt)("li",{parentName:"ul"},"support a rich set of data types commonly used in Rust;"),(0,r.kt)("li",{parentName:"ul"},"enforce canonical serialization, meaning that every value of a given type should have a single valid representation.")),(0,r.kt)("p",null,"BCS also aims to mitigate the consequence of malicious inputs by enforcing well-defined limits\non large or nested containers during (de)serialization."),(0,r.kt)("h2",{id:"rust-implementation"},"Rust Implementation"),(0,r.kt)("p",null,"This crate provides a Rust implementation of BCS as an encoding format for the ",(0,r.kt)("a",{parentName:"p",href:"https://serde.rs"},"Serde library"),".\nAs such, this implementation covers most data types supported by Serde -- including user-defined structs,\ntagged variants (Rust enums), tuples, and maps -- excluding floats, single unicode characters (char), and sets."),(0,r.kt)("p",null,"BCS is also available in other programming languages, thanks to the separate project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/novifinancial/serde-reflection"},"serde-reflection"),"."),(0,r.kt)("h2",{id:"application-to-cryptography"},"Application to Cryptography"),(0,r.kt)("p",null,"The BCS format guarantees canonical serialization, meaning that for any given data type, there\nis a one-to-one correspondance between in-memory values and valid byte representations."),(0,r.kt)("p",null,"In the context of a cryptographic application, canonical serialization has several benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It provides a natural and reliable way to associate in-memory values to cryptographic hashes."),(0,r.kt)("li",{parentName:"ul"},"It allows the signature of a message to be defined equivalently as the signature of the serialized bytes or as the signature of the in-memory value.")),(0,r.kt)("p",null,"Note that BCS ensures canonical serialization for each data type separately. The data type of a serialized value\nmust be enforced by the application itself. This requirement is typically fulfilled\nusing unique hash seeds for each data type."),(0,r.kt)("h2",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,r.kt)("p",null,"By design, BCS does not provide implicit versioning or backwards/forwards compatibility, therefore\napplications must carefully plan in advance for adhoc extension points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enums may be used for explicit versioning and backward compatibility (e.g. extensible query interfaces)."),(0,r.kt)("li",{parentName:"ul"},"In some cases, data fields of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Vec<u8>")," may also be added to allow (future) unknown payloads in serialized form.")),(0,r.kt)("h2",{id:"detailed-specifications"},"Detailed Specifications"),(0,r.kt)("p",null,"BCS supports the following data types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Booleans"),(0,r.kt)("li",{parentName:"ul"},"Signed 8-bit, 16-bit, 32-bit, 64-bit, and 128-bit integers"),(0,r.kt)("li",{parentName:"ul"},"Unsigned 8-bit, 16-bit, 32-bit, 64-bit, and 128-bit integers"),(0,r.kt)("li",{parentName:"ul"},"Option"),(0,r.kt)("li",{parentName:"ul"},"Unit (an empty value)"),(0,r.kt)("li",{parentName:"ul"},"Fixed and variable length sequences"),(0,r.kt)("li",{parentName:"ul"},"UTF-8 Encoded Strings"),(0,r.kt)("li",{parentName:"ul"},"Tuples"),(0,r.kt)("li",{parentName:"ul"},'Structures (aka "structs")'),(0,r.kt)("li",{parentName:"ul"},'Externally tagged enumerations (aka "enums")'),(0,r.kt)("li",{parentName:"ul"},"Maps")),(0,r.kt)("p",null,"BCS is not a self-describing format.\nAs such, in order to deserialize a message, one must know the message type and layout ahead of time."),(0,r.kt)("p",null,"Unless specified, all numbers are stored in little endian, two's complement format."),(0,r.kt)("h3",{id:"recursion-and-depth-of-bcs-data"},"Recursion and Depth of BCS Data"),(0,r.kt)("p",null,"Recursive data-structures (e.g. trees) are allowed. However, because of the possibility of stack\noverflow during (de)serialization, the ",(0,r.kt)("em",{parentName:"p"},"container depth")," of any valid BCS data cannot exceed the constant\n",(0,r.kt)("inlineCode",{parentName:"p"},"MAX_CONTAINER_DEPTH"),". Formally, we define ",(0,r.kt)("em",{parentName:"p"},"container depth")," as the number of structs and enums traversed\nduring (de)serialization."),(0,r.kt)("p",null,"This definition aims to minimize the number of operations while ensuring that\n(de)serialization of a known BCS format cannot cause arbitrarily large stack allocations."),(0,r.kt)("p",null,"As an example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"v2")," are values of depth ",(0,r.kt)("inlineCode",{parentName:"p"},"n1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"n2"),","),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a struct value ",(0,r.kt)("inlineCode",{parentName:"li"},"Foo { v1, v2 }")," has depth ",(0,r.kt)("inlineCode",{parentName:"li"},"1 + max(n1, n2)"),";"),(0,r.kt)("li",{parentName:"ul"},"an enum value ",(0,r.kt)("inlineCode",{parentName:"li"},"E::Foo { v1, v2 }")," has depth ",(0,r.kt)("inlineCode",{parentName:"li"},"1 + max(n1, n2)"),";"),(0,r.kt)("li",{parentName:"ul"},"a pair ",(0,r.kt)("inlineCode",{parentName:"li"},"(v1, v2)")," has depth ",(0,r.kt)("inlineCode",{parentName:"li"},"max(n1, n2)"),";"),(0,r.kt)("li",{parentName:"ul"},"the value ",(0,r.kt)("inlineCode",{parentName:"li"},"Some(v1)")," has depth ",(0,r.kt)("inlineCode",{parentName:"li"},"n1"),".")),(0,r.kt)("p",null,"All string and integer values have depths ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h3",{id:"booleans-and-integers"},"Booleans and Integers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Original data"),(0,r.kt)("th",{parentName:"tr",align:null},"Hex representation"),(0,r.kt)("th",{parentName:"tr",align:null},"Serialized bytes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"True / False"),(0,r.kt)("td",{parentName:"tr",align:null},"0x01 / 0x00"),(0,r.kt)("td",{parentName:"tr",align:null},"01 / 00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8-bit signed integer"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"0xFF"),(0,r.kt)("td",{parentName:"tr",align:null},"FF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8-bit unsigned integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0x01"),(0,r.kt)("td",{parentName:"tr",align:null},"01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16-bit signed integer"),(0,r.kt)("td",{parentName:"tr",align:null},"-4660"),(0,r.kt)("td",{parentName:"tr",align:null},"0xEDCC"),(0,r.kt)("td",{parentName:"tr",align:null},"CC ED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16-bit unsigned integer"),(0,r.kt)("td",{parentName:"tr",align:null},"4660"),(0,r.kt)("td",{parentName:"tr",align:null},"0x1234"),(0,r.kt)("td",{parentName:"tr",align:null},"34 12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32-bit signed integer"),(0,r.kt)("td",{parentName:"tr",align:null},"-305419896"),(0,r.kt)("td",{parentName:"tr",align:null},"0xEDCBA988"),(0,r.kt)("td",{parentName:"tr",align:null},"88 A9 CB ED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32-bit unsigned integer"),(0,r.kt)("td",{parentName:"tr",align:null},"305419896"),(0,r.kt)("td",{parentName:"tr",align:null},"0x12345678"),(0,r.kt)("td",{parentName:"tr",align:null},"78 56 34 12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64-bit signed integer"),(0,r.kt)("td",{parentName:"tr",align:null},"-1311768467750121216"),(0,r.kt)("td",{parentName:"tr",align:null},"0xEDCBA98754321100"),(0,r.kt)("td",{parentName:"tr",align:null},"00 11 32 54 87 A9 CB ED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64-bit unsigned integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1311768467750121216"),(0,r.kt)("td",{parentName:"tr",align:null},"0x12345678ABCDEF00"),(0,r.kt)("td",{parentName:"tr",align:null},"00 EF CD AB 78 56 34 12")))),(0,r.kt)("h3",{id:"uleb128-encoded-integers"},"ULEB128-Encoded Integers"),(0,r.kt)("p",null,"The BCS format also uses the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/LEB128"},"ULEB128 encoding")," internally\nto represent unsigned 32-bit integers in two cases where small values are usually expected:\n(1) lengths of variable-length sequences and (2) tags of enum values (see the corresponding\nsections below)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Original data"),(0,r.kt)("th",{parentName:"tr",align:null},"Hex representation"),(0,r.kt)("th",{parentName:"tr",align:null},"Serialized bytes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ULEB128-encoded u32-integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2^0 = 1"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00000001"),(0,r.kt)("td",{parentName:"tr",align:null},"01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"2^7 = 128"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00000080"),(0,r.kt)("td",{parentName:"tr",align:null},"80 01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"2^14 = 16384"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00004000"),(0,r.kt)("td",{parentName:"tr",align:null},"80 80 01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"2^21 = 2097152"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00200000"),(0,r.kt)("td",{parentName:"tr",align:null},"80 80 80 01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"2^28 = 268435456"),(0,r.kt)("td",{parentName:"tr",align:null},"0x10000000"),(0,r.kt)("td",{parentName:"tr",align:null},"80 80 80 80 01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"9487"),(0,r.kt)("td",{parentName:"tr",align:null},"0x0000250f"),(0,r.kt)("td",{parentName:"tr",align:null},"8f 4a")))),(0,r.kt)("p",null,"In general, a ULEB128 encoding consists of a little-endian sequence of base-128 (7-bit)\ndigits. Each digit is completed into a byte by setting the highest bit to 1, except for the\nlast (highest-significance) digit whose highest bit is set to 0."),(0,r.kt)("p",null,"In BCS, the result of decoding ULEB128 bytes is required to fit into a 32-bit unsigned\ninteger and be in canonical form. For instance, the following values are rejected:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"80 80 80 80 80 01 (2^36) is too large."),(0,r.kt)("li",{parentName:"ul"},"80 80 80 80 10 (2^33) is too large."),(0,r.kt)("li",{parentName:"ul"},"80 00 is not a minimal encoding of 0.")),(0,r.kt)("h3",{id:"optional-data"},"Optional Data"),(0,r.kt)("p",null,"Optional or nullable data either exists in its full representation or does not. BCS represents\nthis as a single byte representing the presence ",(0,r.kt)("inlineCode",{parentName:"p"},"0x01")," or absence ",(0,r.kt)("inlineCode",{parentName:"p"},"0x00")," of data. If the data\nis present then the serialized form of that data follows. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let some_data: Option<u8> = Some(8);\nassert_eq!(to_bytes(&some_data)?, vec![1, 8]);\n\nlet no_data: Option<u8> = None;\nassert_eq!(to_bytes(&no_data)?, vec![0]);\n")),(0,r.kt)("h3",{id:"fixed-and-variable-length-sequences"},"Fixed and Variable Length Sequences"),(0,r.kt)("p",null,"Sequences can be made of up of any BCS supported types (even complex structures) but all\nelements in the sequence must be of the same type. If the length of a sequence is fixed and\nwell known then BCS represents this as just the concatenation of the serialized form of each\nindividual element in the sequence. If the length of the sequence can be variable, then the\nserialized sequence is length prefixed with a ULEB128-encoded unsigned integer indicating\nthe number of elements in the sequence. All variable length sequences must be\n",(0,r.kt)("inlineCode",{parentName:"p"},"MAX_SEQUENCE_LENGTH")," elements long or less."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let fixed: [u16; 3] = [1, 2, 3];\nassert_eq!(to_bytes(&fixed)?, vec![1, 0, 2, 0, 3, 0]);\n\nlet variable: Vec<u16> = vec![1, 2];\nassert_eq!(to_bytes(&variable)?, vec![2, 1, 0, 2, 0]);\n\nlet large_variable_length: Vec<()> = vec![(); 9_487];\nassert_eq!(to_bytes(&large_variable_length)?, vec![0x8f, 0x4a]);\n")),(0,r.kt)("h3",{id:"strings"},"Strings"),(0,r.kt)("p",null,"Only valid UTF-8 Strings are supported. BCS serializes such strings as a variable length byte\nsequence, i.e. length prefixed with a ULEB128-encoded unsigned integer followed by the byte\nrepresentation of the string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Note that this string has 10 characters but has a byte length of 24\nlet utf8_str = "\xe7\xe5\u221e\u2260\xa2\xf5\xdf\u2202\u0192\u222b";\nlet expecting = vec![\n    24, 0xc3, 0xa7, 0xc3, 0xa5, 0xe2, 0x88, 0x9e, 0xe2, 0x89, 0xa0, 0xc2,\n    0xa2, 0xc3, 0xb5, 0xc3, 0x9f, 0xe2, 0x88, 0x82, 0xc6, 0x92, 0xe2, 0x88, 0xab,\n];\nassert_eq!(to_bytes(&utf8_str)?, expecting);\n')),(0,r.kt)("h3",{id:"tuples"},"Tuples"),(0,r.kt)("p",null,"Tuples are typed composition of objects: ",(0,r.kt)("inlineCode",{parentName:"p"},"(Type0, Type1)")),(0,r.kt)("p",null,"Tuples are considered a fixed length sequence where each element in the sequence can be a\ndifferent type supported by BCS. Each element of a tuple is serialized in the order it is\ndefined within the tuple, i.e. ","[tuple.0, tuple.2]","."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let tuple = (-1i8, \"diem\");\nlet expecting = vec![0xFF, 4, b'd', b'i', b'e', b'm'];\nassert_eq!(to_bytes(&tuple)?, expecting);\n")),(0,r.kt)("h3",{id:"structures"},"Structures"),(0,r.kt)("p",null,"Structures are fixed length sequences consisting of fields with potentially different types.\nEach field within a struct is serialized in the order specified by the canonical structure\ndefinition. Structs can exist within other structs and as such, BCS recurses into each struct\nand serializes them in order. There are no labels in the serialized format, the struct ordering\ndefines the organization within the serialization stream."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize)]\nstruct MyStruct {\n    boolean: bool,\n    bytes: Vec<u8>,\n    label: String,\n}\n\n#[derive(Serialize)]\nstruct Wrapper {\n    inner: MyStruct,\n    name: String,\n}\n\nlet s = MyStruct {\n    boolean: true,\n    bytes: vec![0xC0, 0xDE],\n    label: \"a\".to_owned(),\n};\nlet s_bytes = to_bytes(&s)?;\nlet mut expecting = vec![1, 2, 0xC0, 0xDE, 1, b'a'];\nassert_eq!(s_bytes, expecting);\n\nlet w = Wrapper {\n    inner: s,\n    name: \"b\".to_owned(),\n};\nlet w_bytes = to_bytes(&w)?;\nassert!(w_bytes.starts_with(&s_bytes));\n\nexpecting.append(&mut vec![1, b'b']);\nassert_eq!(w_bytes, expecting);\n")),(0,r.kt)("h3",{id:"externally-tagged-enumerations"},"Externally Tagged Enumerations"),(0,r.kt)("p",null,"An enumeration is typically represented as a type that can take one of potentially many\ndifferent variants. In BCS, each variant is mapped to a variant index, a ULEB128-encoded 32-bit unsigned\ninteger, followed by serialized data if the type has an associated value. An\nassociated type can be any BCS supported type. The variant index is determined based on the\nordering of the variants in the canonical enum definition, where the first variant has an index\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", the second an index of ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize)]\nenum E {\n    Variant0(u16),\n    Variant1(u8),\n    Variant2(String),\n}\n\nlet v0 = E::Variant0(8000);\nlet v1 = E::Variant1(255);\nlet v2 = E::Variant2(\"e\".to_owned());\n\nassert_eq!(to_bytes(&v0)?, vec![0, 0x40, 0x1F]);\nassert_eq!(to_bytes(&v1)?, vec![1, 0xFF]);\nassert_eq!(to_bytes(&v2)?, vec![2, 1, b'e']);\n")),(0,r.kt)("p",null,"If you need to serialize a C-style enum, you should use a primitive integer type."),(0,r.kt)("h3",{id:"maps-key--value-stores"},"Maps (Key / Value Stores)"),(0,r.kt)("p",null,"Maps are represented as a variable-length, sorted sequence of ",(0,r.kt)("inlineCode",{parentName:"p"},"(Key, Value)")," tuples. Keys must be\nunique and the tuples sorted by increasing lexicographical order on the BCS bytes of each key.\nThe representation is otherwise similar to that of a variable-length sequence. In particular,\nit is preceded by the number of tuples, encoded in ULEB128."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let mut map = HashMap::new();\nmap.insert(b'e', b'f');\nmap.insert(b'a', b'b');\nmap.insert(b'c', b'd');\n\nlet expecting = vec![(b'a', b'b'), (b'c', b'd'), (b'e', b'f')];\n\nassert_eq!(to_bytes(&map)?, to_bytes(&expecting)?);\n")))}p.isMDXComponent=!0}}]);