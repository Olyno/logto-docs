"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1870],{49613:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var a=n(59496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(n),k=o,u=m["".concat(d,".").concat(k)]||m[k]||p[k]||r;return n?a.createElement(u,i(i({ref:e},c),{},{components:n})):a.createElement(u,i({ref:e},c))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1532:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={},d="WechatSocialSession",s={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/index",id:"sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/index",title:"WechatSocialSession",description:"class WechatSocialSession(val context String, val callbackUri Completion&lt;SocialException, String&gt;) : SocialSession",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/index.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session",slug:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/",permalink:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Companion",permalink:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-result-activity/-companion/"},next:{title:"Companion",permalink:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/-companion/"}},c={},p=[{value:"Constructors",id:"constructors",level:2},{value:"Types",id:"types",level:2},{value:"Functions",id:"functions",level:2},{value:"Properties",id:"properties",level:2}],m={toc:p};function k(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wechatsocialsession"},"WechatSocialSession"),(0,r.kt)("p",null,"class WechatSocialSession(val context: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", val redirectTo: ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val callbackUri: ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val completion: ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">",") : ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session/"},"SocialSession")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WechatSocialSession"),(0,r.kt)("td",{parentName:"tr",align:null},"fun WechatSocialSession(context: ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", redirectTo: ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", callbackUri: ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,r.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,r.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">",")")))),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/-companion/"},"Companion")),(0,r.kt)("td",{parentName:"tr",align:null},"object ",(0,r.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/-companion/"},"Companion"))))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handleMissingAppIdError"),(0,r.kt)("td",{parentName:"tr",align:null},"fun handleMissingAppIdError()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,r.kt)("td",{parentName:"tr",align:null},"fun handleResult(result: BaseResp?)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start"),(0,r.kt)("td",{parentName:"tr",align:null},"open override fun start()")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callbackUri"),(0,r.kt)("td",{parentName:"tr",align:null},"open override val callbackUri: ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"completion"),(0,r.kt)("td",{parentName:"tr",align:null},"open override val completion: ",(0,r.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,r.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"open override val context: ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirectTo"),(0,r.kt)("td",{parentName:"tr",align:null},"open override val redirectTo: ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}k.isMDXComponent=!0}}]);