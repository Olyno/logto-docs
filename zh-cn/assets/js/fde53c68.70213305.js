"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6536],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,g=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22814:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(59496),r=n(45924),a="tabItem_UXuk";function i(e){var t=e.children,n=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},t)}},58198:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(665),r=n(59496),a=n(45924),i=n(21010),l=n(10061),u=n(41993),c=n(5671),p="tabList_ra65",d="tabItem_Xj8K";function s(e){var t,n,i=e.lazy,s=e.block,m=e.defaultValue,g=e.values,f=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,u.U)(),T=C.tabGroupChoices,N=C.setTabGroupChoices,x=(0,r.useState)(h),E=x[0],Z=x[1],O=[],w=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var L=T[f];null!=L&&L!==E&&y.some((function(e){return e.value===L}))&&Z(L)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),o=y[n].value;o!==E&&(w(t),Z(o),null!=f&&N(f,String(o)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,r=O.indexOf(e.currentTarget)+1;n=null!=(o=O[r])?o:O[0];break;case"ArrowLeft":var a,i=O.indexOf(e.currentTarget)-1;n=null!=(a=O[i])?a:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},v)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:D,onClick:D},i,{className:(0,a.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,i.Z)();return r.createElement(s,(0,o.Z)({key:String(t)},e))}},91023:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return k},default:function(){return T},frontMatter:function(){return v},metadata:function(){return y},toc:function(){return h}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=n(22952),l=n(27087),u=n(69016),c=n(89970),p=n(60647),d=n(7915),s=n(58198),m=n(22814),g=n.p+"assets/images/android-redirect-uri-31fb47b7ad4896f9b79a035d84a4be53.png",f=["components"],v={sidebar_label:"Android"},k="Android\uff1a\u96c6\u6210 Logto Android SDK",y={unversionedId:"docs/recipes/integrate-logto/android",id:"docs/recipes/integrate-logto/android",title:"Android\uff1a\u96c6\u6210 Logto Android SDK",description:"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/android.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/android",permalink:"/zh-cn/docs/recipes/integrate-logto/android",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/android.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Android"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd17 \u5728\u4f60\u7684\u5e94\u7528\u4e2d\u96c6\u6210 Logto",permalink:"/zh-cn/docs/recipes/integrate-logto/"},next:{title:"iOS",permalink:"/zh-cn/docs/recipes/integrate-logto/ios"}},b={},h=[{value:"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56",id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56",level:2},{value:"\u521d\u59cb\u5316 LogtoClient",id:"\u521d\u59cb\u5316-logtoclient",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u914d\u7f6e Redirect URI",id:"\u914d\u7f6e-redirect-uri",level:3},{value:"\u767b\u5f55",id:"\u767b\u5f55-1",level:3},{value:"\u9000\u51fa\u767b\u5f55",id:"\u9000\u51fa\u767b\u5f55",level:2},{value:"\u5ef6\u5c55\u9605\u8bfb",id:"\u5ef6\u5c55\u9605\u8bfb",level:2}],C={toc:h};function T(e){var t=e.components,n=(0,r.Z)(e,f);return(0,a.kt)("wrapper",(0,o.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"android\u96c6\u6210-logto-android-sdk"},"Android\uff1a\u96c6\u6210 Logto Android SDK"),(0,a.kt)(i.ZP,{type:"\u539f\u751f\u5e94\u7528",mdxType:"AppNote"}),(0,a.kt)("h2",{id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56"},"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Logto Andorid SDK \u652f\u6301\u7684\u6700\u5c0f Android API \u7ea7\u522b\u4e3a 24\u3002")),(0,a.kt)("p",null,"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," \u6dfb\u52a0\u5230\u6784\u5efa\u811a\u672c\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,a.kt)("p",null,"\u6dfb\u52a0 Logto Android SDK \u4f9d\u8d56\uff1a"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(m.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'))),(0,a.kt)(m.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n")))),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316-logtoclient"},"\u521d\u59cb\u5316 LogtoClient"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u521b\u5efa LogtoClient \u524d\uff0c\u9700\u8981\u786e\u4fdd Application \u5df2\u7ecf\u521d\u59cb\u5316\u3002")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(m.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(l.ZP,{mdxType:"KotlinSetupCode"})),(0,a.kt)(m.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(u.ZP,{mdxType:"JavaSetupCode"}))),(0,a.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,a.kt)("h3",{id:"\u914d\u7f6e-redirect-uri"},"\u914d\u7f6e Redirect URI"),(0,a.kt)(c.ZP,{figureSrc:g,redirectUri:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)("p",null,"\u6ce8\u610f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LOGTO_REDIRECT_SCHEME")," \u5e94\u4e3a\u81ea\u5b9a\u4e49\u7684\u53cd\u5411\u57df\u540d\u683c\u5f0f\u7684\u4e00\u4e32\u5b57\u7b26\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u4e0a\u8ff0\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"$(LOGTO_REDIRECT_SCHEME)")," \u66ff\u6362\u6210\u4f60\u5b9a\u4e49\u7684\u503c\u3002")),(0,a.kt)("p",null,"\u4f8b\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")),(0,a.kt)("h3",{id:"\u767b\u5f55-1"},"\u767b\u5f55"),(0,a.kt)(p.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(m.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // \u5f53 `logtoException` \u4e3a null \u65f6\uff0c\u5219\u767b\u5f55\u6210\u529f\u3002\n}\n'))),(0,a.kt)(m.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // \u5f53 `logtoException` \u4e3a null \u65f6\uff0c\u5219\u767b\u5f55\u6210\u529f\u3002\n});\n')))),(0,a.kt)("p",null,"\u5f53\u6210\u529f\u767b\u5f55\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," \u7684\u503c\u5c06\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,a.kt)("h2",{id:"\u9000\u51fa\u767b\u5f55"},"\u9000\u51fa\u767b\u5f55"),(0,a.kt)("p",null,"\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".signOut(completion)")," \u64cd\u4f5c\u4f1a\u6e05\u9664\u672c\u5730\u5b58\u50a8\u7684\u7528\u6237\u76f8\u5173\u51ed\u636e\uff0c\u5373\u4f7f\u5728\u9000\u51fa\u767b\u5f55\u8fc7\u7a0b\u4e2d\u53d1\u751f\u4e86\u5f02\u5e38\u3002"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(m.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"logtoClient.signOut { logtoException: LogtoException? ->\n    // \u65e0\u8bba\u662f\u5426\u5b58\u5728 `logtoException`\uff0c\u672c\u5730\u5b58\u50a8\u7684\u7528\u6237\u76f8\u5173\u51ed\u636e\u90fd\u5df2\u6e05\u9664\u3002\n}\n"))),(0,a.kt)(m.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"logtoClient.signOut(logtoException -> {\n    // \u65e0\u8bba\u662f\u5426\u5b58\u5728 `logtoException`\uff0c\u672c\u5730\u5b58\u50a8\u7684\u7528\u6237\u76f8\u5173\u51ed\u636e\u90fd\u5df2\u6e05\u9664\u3002\n});\n")))),(0,a.kt)("h2",{id:"\u5ef6\u5c55\u9605\u8bfb"},"\u5ef6\u5c55\u9605\u8bfb"),(0,a.kt)(d.ZP,{mdxType:"FurtherReadings"}))}T.isMDXComponent=!0},69016:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // \u4f8b\u5982\uff1a http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}u.isMDXComponent=!0},27087:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // \u4f8b\u5982\uff1a http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}u.isMDXComponent=!0},22952:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"\u672c\u7bc7\u6559\u7a0b\u9ed8\u8ba4\u4f60\u5df2\u7ecf\u5728\u7ba1\u7406\u754c\u9762\u4e2d\u6210\u529f\u521b\u5efa\u4e86\u4e00\u4e2a\u300c",n.type,"\u300d\u7c7b\u578b\u7684\u5e94\u7528\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b8c\u6210\u8fd9\u4e00\u6b65\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"\u8fd9\u7bc7\u6559\u7a0b"),"\uff0c\u521b\u5efa\u5e94\u7528\u4e4b\u540e\u518d\u7ee7\u7eed\u3002")))}u.isMDXComponent=!0},89970:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u5728\u8fd9\u91cc\u5207\u6362\u5230\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u7684\u5e94\u7528\u8be6\u60c5\u9875\u3002\u6dfb\u52a0\u4e00\u4e2a\u503c\u4e3a"," ",(0,a.kt)("code",null,n.redirectUri)," \u7684 Redirect URI \u5e76\u70b9\u6309\u300c\u4fdd\u5b58\u53d8\u66f4\u300d\u3002"),(0,a.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"50%"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," \u662f\u4e00\u4e2a OAuth 2.0 \u7684\u6982\u5ff5\uff0c\u7528\u4e8e\u8868\u660e\u5728 authentication \u540e\u91cd\u5b9a\u5411\u81f3\u7684\u4f4d\u7f6e\u3002"))}u.isMDXComponent=!0},7915:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/customize-sie/"},"\u81ea\u5b9a\u4e49\u767b\u5f55\u4f53\u9a8c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-passcode-sign-in"},"\u542f\u7528\u77ed\u4fe1\u6216\u90ae\u4ef6\u9a8c\u8bc1\u7801\u767b\u5f55")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-social-sign-in"},"\u542f\u7528\u793e\u4ea4\u767b\u5f55")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/protect-your-api/"},"\u4fdd\u62a4\u4f60\u7684 API"))))}u.isMDXComponent=!0},60647:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"\u5728\u8c03\u7528 ",(0,a.kt)("code",null,n.calling)," \u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u5728\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u6b63\u786e\u914d\u7f6e\u4e86 Redirect URI\u3002")))}u.isMDXComponent=!0}}]);