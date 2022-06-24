"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[1875],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,c(c({ref:e},p),{},{components:r})):n.createElement(m,c({ref:e},p))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3279:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={title:"Overview",slug:"/api-contract"},s=void 0,l={unversionedId:"api-contract/intro",id:"api-contract/intro",title:"Overview",description:"The @polkadot/api-contract interfaces provide a thin layer on-top of the available API transactions to allow you to manage Substrate contracts in a consistent way.",source:"@site/docs/api-contract/intro.md",sourceDirName:"api-contract",slug:"/api-contract",permalink:"/docs/api-contract",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/intro.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/api-contract"},sidebar:"reference",previous:{title:"FAQ",permalink:"/docs/util-crypto/FAQ"},next:{title:"Overview",permalink:"/docs/api-contract/start"}},p={},u=[],f={toc:u};function d(t){var e=t.components,r=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/api-contract")," interfaces provide a thin layer on-top of the available API transactions to allow you to manage Substrate contracts in a consistent way. "),(0,o.kt)("p",null,"Since not all Substrate chains have contracts available, we assume that you are connecting to a chain that has the FRAME ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts#readme"},"contracts pallet")," and that you are using a compatible compiler ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},"cargo-contract for ink!"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/solang#build-for-substrate"},"Solang for Solidity"),"."),(0,o.kt)("p",null,"The API contracts interfaces transparently handle any encoding and decoding of messages and results using the available ABIs, allowing the developer to work with contract deployments and calls without having to handle encoding themselves."),(0,o.kt)("p",null,"To get started, follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-contract/start"},"getting started")," journey for installation and use for the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api/tree/master/packages/api-contract/src/promise"},"Promise-based version")," for the contracts interfaces."))}d.isMDXComponent=!0}}]);