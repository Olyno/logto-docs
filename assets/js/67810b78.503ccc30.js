"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2617],{49613:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return p}});var o=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),d=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},k=function(t){var e=d(t.components);return o.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,k=a(t,["components","mdxType","originalType","parentName"]),c=d(n),p=r,f=c["".concat(s,".").concat(p)]||c[p]||u[p]||i;return n?o.createElement(f,l(l({ref:e},k),{},{components:n})):o.createElement(f,l({ref:e},k))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:r,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62044:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return u}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),l=["components"],a={},s="TokenUtils",d={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/index",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/index",title:"TokenUtils",description:"object TokenUtils",source:"@site/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/index.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"withReservedScopes",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-scope-utils/with-reserved-scopes"},next:{title:"decodeIdToken",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/decode-id-token"}},k={},u=[{value:"Functions",id:"functions",level:2}],c={toc:u};function p(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tokenutils"},"TokenUtils"),(0,i.kt)("p",null,"object TokenUtils"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/decode-id-token"},"decodeIdToken")),(0,i.kt)("td",{parentName:"tr",align:null},"fun ",(0,i.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/decode-id-token"},"decodeIdToken"),"(token: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"): ",(0,i.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/"},"IdTokenClaims"),(0,i.kt)("br",null),"Decode ID token without verification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token"},"verifyIdToken")),(0,i.kt)("td",{parentName:"tr",align:null},"fun ",(0,i.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token"},"verifyIdToken"),"(idToken: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", clientId: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", issuer: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", jwks: JsonWebKeySet)",(0,i.kt)("br",null),"Verify id token")))))}p.isMDXComponent=!0}}]);