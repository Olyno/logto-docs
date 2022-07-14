"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1397],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||c;return n?o.createElement(d,a(a({ref:t},l),{},{components:n})):o.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26390:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var o=n(665),r=n(40151),c=(n(59496),n(49613)),a=["components"],i={sidebar_label:"Connector setup tips",sidebar_position:1},s="Connector setup tips",p={unversionedId:"docs/recipes/configure-connectors/connector-setup-tips",id:"docs/recipes/configure-connectors/connector-setup-tips",title:"Connector setup tips",description:"A connector can be classified into two categories by its use cases: SMS or Email connector and Social connector.",source:"@site/docs/docs/recipes/configure-connectors/connector-setup-tips.md",sourceDirName:"docs/recipes/configure-connectors",slug:"/docs/recipes/configure-connectors/connector-setup-tips",permalink:"/docs/recipes/configure-connectors/connector-setup-tips",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-connectors/connector-setup-tips.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Connector setup tips",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83e\ude9b Configure connectors",permalink:"/docs/recipes/configure-connectors/"},next:{title:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users",permalink:"/docs/recipes/manage-users/"}},l={},u=[{value:"SMS or Email Connector",id:"sms-or-email-connector",level:2},{value:"Social Connector",id:"social-connector",level:2}],m={toc:u};function f(e){var t=e.components,i=(0,r.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"connector-setup-tips"},"Connector setup tips"),(0,c.kt)("p",null,"A connector can be classified into two categories by its use cases: ",(0,c.kt)("a",{parentName:"p",href:"/docs/recipes/configure-connectors/connector-setup-tips/#sms-or-email-connector"},(0,c.kt)("em",{parentName:"a"},"SMS or Email connector"))," and ",(0,c.kt)("a",{parentName:"p",href:"/docs/recipes/configure-connectors/connector-setup-tips/#social-connector"},(0,c.kt)("em",{parentName:"a"},"Social connector")),"."),(0,c.kt)("p",null,"Let's go over some worthy of notice tips for previously mentioned cases."),(0,c.kt)("h2",{id:"sms-or-email-connector"},"SMS or Email Connector"),(0,c.kt)("p",null,'Suppose you are now on the "Connectors" page in Admin Console. Click the "Set up" button and select an SMS or Email connector to enter the configuration process.'),(0,c.kt)("p",null,"Follow the README on the left and compose the connector config JSON in the text input box on your right. You can check whether the config can work before saving changes."),(0,c.kt)("p",null,"You can change the current SMS or Email connector in the top-right corner on the connector details page, where a review of the connector README is also available."),(0,c.kt)("admonition",{type:"note"},(0,c.kt)("p",{parentName:"admonition"},"You can bring ONLY ONE ",(0,c.kt)("em",{parentName:"p"},"SMS Connector")," (or ",(0,c.kt)("em",{parentName:"p"},"Email Connector"),") alive."),(0,c.kt)("p",{parentName:"admonition"},"If you change the living SMS or Email connector and save changes, the previous SMS or Email connector will be disabled automatically. Also, the ",(0,c.kt)("em",{parentName:"p"},"config")," of past connectors will lose track.",(0,c.kt)("br",null),"\nYou may keep the old connectors' ",(0,c.kt)("em",{parentName:"p"},"config")," properly if you want to switch back to those connectors in the future.")),(0,c.kt)("p",null,"You can check out ",(0,c.kt)("a",{parentName:"p",href:"../../tutorials/get-started/enable-passcode-sign-in"},"how to enable SMS or email passcode sign-in")," as soon as you finish the setup."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Add SMS or email connector modal",src:n(61337).Z,width:"1922",height:"876"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Configure SMS or email connector guide",src:n(55399).Z,width:"1920",height:"1274"})),(0,c.kt)("h2",{id:"social-connector"},"Social Connector"),(0,c.kt)("p",null,'Suppose you are now on the "Connectors" page in Admin Console. Go to the "Social connectors" tab and add a new connector to enter the configuration process.'),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"You may find that some connectors do not have a secondary choice of platform, such as Google, Facebook, and GitHub. These connectors' ",(0,c.kt)("em",{parentName:"p"},"platform")," are ",(0,c.kt)("em",{parentName:"p"},"Universal"),". Explore ",(0,c.kt)("a",{parentName:"p",href:"../../references/connectors/#platform"},(0,c.kt)("em",{parentName:"a"},"platform")," description")," to know more."),(0,c.kt)("p",{parentName:"admonition"},"Choose a proper ",(0,c.kt)("em",{parentName:"p"},"platform")," from either ",(0,c.kt)("em",{parentName:"p"},"Web")," or ",(0,c.kt)("em",{parentName:"p"},"Native")," for connectors to fit your use case.",(0,c.kt)("br",null),"\nYou can set up a single ",(0,c.kt)("em",{parentName:"p"},"Native")," connector w/o adding a ",(0,c.kt)("em",{parentName:"p"},"Web")," connector if you only provide native mobile apps and vice versa.")),(0,c.kt)("p",null,"Follow the README to compose the connector config JSON with little effort."),(0,c.kt)("p",null,"See ",(0,c.kt)("a",{parentName:"p",href:"../../tutorials/get-started/enable-social-sign-in"},"how to enable social sign-in")," to bring your social connector into use."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Add social connector modal",src:n(80576).Z,width:"1923",height:"838"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Configure social connector guide",src:n(43577).Z,width:"1920",height:"1016"})))}f.isMDXComponent=!0},61337:function(e,t,n){t.Z=n.p+"assets/images/add-sms-or-email-connector-modal-a6029985db6fa80a745236fdbdbef0a8.png"},80576:function(e,t,n){t.Z=n.p+"assets/images/add-social-connector-modal-8479cdf1fa075147136563adcb656f69.png"},55399:function(e,t,n){t.Z=n.p+"assets/images/configure-sms-or-email-connector-guide-5a235e285786c18a75c310c59ee86a12.png"},43577:function(e,t,n){t.Z=n.p+"assets/images/configure-social-connector-guide-3843db33ae019f7bb465ce2b48a6904c.png"}}]);