"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3551],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(k,i(i({ref:t},l),{},{components:n})):r.createElement(k,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67953:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=n(665),a=n(40151),o=(n(59496),n(49613)),i=["components"],s={},c=void 0,p={unversionedId:"sdk/JavaScript/js/functions/fetchTokenByRefreshToken",id:"sdk/JavaScript/js/functions/fetchTokenByRefreshToken",title:"fetchTokenByRefreshToken",description:"fetchTokenByRefreshToken(namedParameters, requester): Promise\\>",source:"@site/docs/sdk/JavaScript/js/functions/fetchTokenByRefreshToken.md",sourceDirName:"sdk/JavaScript/js/functions",slug:"/sdk/JavaScript/js/functions/fetchTokenByRefreshToken",permalink:"/zh-cn/sdk/JavaScript/js/functions/fetchTokenByRefreshToken",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/JavaScript/js/functions/fetchTokenByRefreshToken.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"fetchTokenByAuthorizationCode",permalink:"/zh-cn/sdk/JavaScript/js/functions/fetchTokenByAuthorizationCode"},next:{title:"fetchUserInfo",permalink:"/zh-cn/sdk/JavaScript/js/functions/fetchUserInfo"}},l={},f=[{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:f};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"fetchTokenByRefreshToken"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"__namedParameters"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"requester"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"KeysToCamelCase"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"SnakeCaseRefreshTokenTokenResponse"),">",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/zh-cn/sdk/JavaScript/js/types/FetchTokenByRefreshTokenParameters"},(0,o.kt)("inlineCode",{parentName:"a"},"FetchTokenByRefreshTokenParameters")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"requester")),(0,o.kt)("td",{parentName:"tr",align:"left"},"<T",">","(...",(0,o.kt)("inlineCode",{parentName:"td"},"args"),": ","[input: RequestInfo, init?: RequestInit]",") => ",(0,o.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"KeysToCamelCase"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"SnakeCaseRefreshTokenTokenResponse"),">",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/logto-io/js/blob/5254dee/packages/js/src/core/fetch-token.ts#L75"},"packages/js/src/core/fetch-token.ts:75")))}d.isMDXComponent=!0}}]);