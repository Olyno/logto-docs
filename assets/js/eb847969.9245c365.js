"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[8070],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40795:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(665),a=n(40151),o=(n(59496),n(49613)),i=["components"],c={},s=void 0,p={unversionedId:"sdk/JavaScript/js/functions/fetchTokenByAuthorizationCode",id:"sdk/JavaScript/js/functions/fetchTokenByAuthorizationCode",title:"fetchTokenByAuthorizationCode",description:"fetchTokenByAuthorizationCode(namedParameters, requester): Promise\\>",source:"@site/docs/sdk/JavaScript/js/functions/fetchTokenByAuthorizationCode.md",sourceDirName:"sdk/JavaScript/js/functions",slug:"/sdk/JavaScript/js/functions/fetchTokenByAuthorizationCode",permalink:"/sdk/JavaScript/js/functions/fetchTokenByAuthorizationCode",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/JavaScript/js/functions/fetchTokenByAuthorizationCode.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"fetchOidcConfig",permalink:"/sdk/JavaScript/js/functions/fetchOidcConfig"},next:{title:"fetchTokenByRefreshToken",permalink:"/sdk/JavaScript/js/functions/fetchTokenByRefreshToken"}},l={},u=[{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"fetchTokenByAuthorizationCode"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"__namedParameters"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"requester"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"KeysToCamelCase"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"SnakeCaseCodeTokenResponse"),">",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/sdk/JavaScript/js/types/FetchTokenByAuthorizationCodeParameters"},(0,o.kt)("inlineCode",{parentName:"a"},"FetchTokenByAuthorizationCodeParameters")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"requester")),(0,o.kt)("td",{parentName:"tr",align:"left"},"<T",">","(...",(0,o.kt)("inlineCode",{parentName:"td"},"args"),": ","[input: RequestInfo, init?: RequestInit]",") => ",(0,o.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"KeysToCamelCase"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"SnakeCaseCodeTokenResponse"),">",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/logto-io/js/blob/5254dee/packages/js/src/core/fetch-token.ts#L44"},"packages/js/src/core/fetch-token.ts:44")))}f.isMDXComponent=!0}}]);