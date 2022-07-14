"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1865],{49613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var o=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),p=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),g=p(n),m=r,c=g["".concat(s,".").concat(m)]||g[m]||k[m]||a;return n?o.createElement(c,i(i({ref:e},d),{},{components:n})):o.createElement(c,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},93436:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return k}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={},s="io.logto.sdk.core.type",p={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/index",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/index",title:"io.logto.sdk.core.type",description:"Types",source:"@site/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.type/index.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.type",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.type/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"makeRequest",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/make-request"},next:{title:"CodeTokenResponse",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/"}},d={},k=[{value:"Types",id:"types",level:2}],g={toc:k};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iologtosdkcoretype"},"io.logto.sdk.core.type"),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/"},"CodeTokenResponse")),(0,a.kt)("td",{parentName:"tr",align:null},"data class ",(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/"},"CodeTokenResponse"),"(val accessToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val refreshToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val idToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val scope: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val expiresIn: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/"},"IdTokenClaims")),(0,a.kt)("td",{parentName:"tr",align:null},"data class ",(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/"},"IdTokenClaims"),"(val iss: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val sub: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val aud: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val exp: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),", val iat: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),", val atHash: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/"},"OidcConfigResponse")),(0,a.kt)("td",{parentName:"tr",align:null},"data class ",(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/"},"OidcConfigResponse"),"(val authorizationEndpoint: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val tokenEndpoint: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val endSessionEndpoint: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val jwksUri: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val issuer: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val revocationEndpoint: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response/"},"RefreshTokenTokenResponse")),(0,a.kt)("td",{parentName:"tr",align:null},"data class ",(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response/"},"RefreshTokenTokenResponse"),"(val accessToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val refreshToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val idToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?, val scope: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val expiresIn: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),")")))))}m.isMDXComponent=!0}}]);