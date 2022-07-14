"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7981],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),k=i,f=p["".concat(s,".").concat(k)]||p[k]||u[k]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(665),i=n(40151),a=(n(59496),n(49613)),o=["components"],l={},s=void 0,c={unversionedId:"sdk/Swift/LogtoClient/Classes/LogtoClient",id:"sdk/Swift/LogtoClient/Classes/LogtoClient",title:"LogtoClient",description:"CLASS",source:"@site/docs/sdk/Swift/LogtoClient/Classes/LogtoClient.md",sourceDirName:"sdk/Swift/LogtoClient/Classes",slug:"/sdk/Swift/LogtoClient/Classes/LogtoClient",permalink:"/sdk/Swift/LogtoClient/Classes/LogtoClient",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Swift/LogtoClient/Classes/LogtoClient.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"LogtoClient Module",permalink:"/sdk/Swift/LogtoClient/"},next:{title:"AccessToken",permalink:"/sdk/Swift/LogtoClient/Structs/AccessToken"}},d={},u=[{value:"Structs",id:"structs",level:2},{value:"NotificationObject",id:"notificationobject",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>HandleNotification</code>",id:"handlenotification",level:3},{value:"<code>idToken</code>",id:"idtoken",level:3},{value:"<code>refreshToken</code>",id:"refreshtoken",level:3},{value:"<code>oidcConfig</code>",id:"oidcconfig",level:3},{value:"<code>isAuthenticated</code>",id:"isauthenticated",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>handle(forAppId:url:)</code>",id:"handleforappidurl",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>init(useConfig:socialPlugins:session:)</code>",id:"inituseconfigsocialpluginssession",level:3},{value:"<code>signInWithBrowser(redirectUri:)</code>",id:"signinwithbrowserredirecturi",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>signOut()</code>",id:"signout",level:3},{value:"<code>getAccessToken(for:)</code>",id:"getaccesstokenfor",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>fetchUserInfo()</code>",id:"fetchuserinfo",level:3},{value:"<code>getIdTokenClaims()</code>",id:"getidtokenclaims",level:3},{value:"<code>handle(url:)</code>",id:"handleurl",level:3}],p={toc:u};function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CLASS")),(0,a.kt)("h1",{id:"logtoclient"},(0,a.kt)("inlineCode",{parentName:"h1"},"LogtoClient")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public class LogtoClient\n")),(0,a.kt)("h2",{id:"structs"},"Structs"),(0,a.kt)("h3",{id:"notificationobject"},(0,a.kt)("a",{parentName:"h3",href:"/sdk/Swift/LogtoClient/Structs/LogtoClient.NotificationObject"},"NotificationObject")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"handlenotification"},(0,a.kt)("inlineCode",{parentName:"h3"},"HandleNotification")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'public static let HandleNotification = Notification.Name("Logto Handle")\n')),(0,a.kt)("p",null,"The notification name for LogtoClient to handle."),(0,a.kt)("h3",{id:"idtoken"},(0,a.kt)("inlineCode",{parentName:"h3"},"idToken")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public internal(set) var idToken: String?\n")),(0,a.kt)("p",null,"The cached ID Token in raw string.\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},".getIdTokenClaims()")," to retrieve structured data."),(0,a.kt)("h3",{id:"refreshtoken"},(0,a.kt)("inlineCode",{parentName:"h3"},"refreshToken")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public internal(set) var refreshToken: String?\n")),(0,a.kt)("p",null,"The cached Refresh Token."),(0,a.kt)("h3",{id:"oidcconfig"},(0,a.kt)("inlineCode",{parentName:"h3"},"oidcConfig")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public internal(set) var oidcConfig: LogtoCore.OidcConfigResponse?\n")),(0,a.kt)("p",null,"The config fetched from ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-discovery-1_0.html"},"OIDC Discovery")," endpoint."),(0,a.kt)("h3",{id:"isauthenticated"},(0,a.kt)("inlineCode",{parentName:"h3"},"isAuthenticated")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public var isAuthenticated: Bool\n")),(0,a.kt)("p",null,"Whether the user has been authenticated."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"handleforappidurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"handle(forAppId:url:)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public static func handle(forAppId appId: String? = nil, url: URL)\n")),(0,a.kt)("p",null,"Post a notification that tells Logto clients to handle the given URL."),(0,a.kt)("p",null,"Usually this function need to be called in ",(0,a.kt)("inlineCode",{parentName:"p"},"onOpenURL(perform:)")," in SwiftUI or ",(0,a.kt)("inlineCode",{parentName:"p"},"application(_:open:options:)")," in AppDelegate. See integration guide for detailed information."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"forAppId"),(0,a.kt)("td",{parentName:"tr",align:null},"If the notification is for specific client ID only. When ",(0,a.kt)("inlineCode",{parentName:"td"},"nil"),", all Logto clients will try to handle the notification.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"The URL that needs to be handled.")))),(0,a.kt)("h3",{id:"inituseconfigsocialpluginssession"},(0,a.kt)("inlineCode",{parentName:"h3"},"init(useConfig:socialPlugins:session:)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public init(\n    useConfig config: LogtoConfig,\n    socialPlugins: [LogtoSocialPlugin] = [],\n    session: NetworkSession = URLSession.shared\n)\n")),(0,a.kt)("h3",{id:"signinwithbrowserredirecturi"},(0,a.kt)("inlineCode",{parentName:"h3"},"signInWithBrowser(redirectUri:)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public func signInWithBrowser(\n    redirectUri: String\n) async throws\n")),(0,a.kt)("p",null,"Start a sign in session with WKWebView. If the function returns with no error threw, it means the user has signed in successfully."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Throws: An error if the session failed to complete.")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redirectUri"),(0,a.kt)("td",{parentName:"tr",align:null},"One of Redirect URIs of this application.")))),(0,a.kt)("h3",{id:"signout"},(0,a.kt)("inlineCode",{parentName:"h3"},"signOut()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func signOut() async -> Errors.SignOut?\n")),(0,a.kt)("p",null,"Clear all tokens in memory and Keychain. Also try to revoke the Refresh Token from the OIDC provider."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns: An error if failed to revoke the token. Usually the error is safe to ignore.")),(0,a.kt)("h3",{id:"getaccesstokenfor"},(0,a.kt)("inlineCode",{parentName:"h3"},"getAccessToken(for:)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@MainActor public func getAccessToken(for resource: String?) async throws -> String\n")),(0,a.kt)("p",null,"Get an Access Token for the given resource. If resource is ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),", return the Access Token for user endpoint."),(0,a.kt)("p",null,"If the cached Access Token has expired, this function will try to use ",(0,a.kt)("inlineCode",{parentName:"p"},"refreshToken")," to fetch a new Access Token from the OIDC provider."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Throws: An error if failed to get a valid Access Token."),(0,a.kt)("li",{parentName:"ul"},"Returns: Access Token in string.")),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resource"),(0,a.kt)("td",{parentName:"tr",align:null},"The resource indicator.")))),(0,a.kt)("h3",{id:"fetchuserinfo"},(0,a.kt)("inlineCode",{parentName:"h3"},"fetchUserInfo()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public func fetchUserInfo() async throws -> LogtoCore.UserInfoResponse\n")),(0,a.kt)("h3",{id:"getidtokenclaims"},(0,a.kt)("inlineCode",{parentName:"h3"},"getIdTokenClaims()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public func getIdTokenClaims() throws -> IdTokenClaims\n")),(0,a.kt)("p",null,"Get structured ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#IDToken"},"ID Token Claims"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Throws: An error if no ID Token presents or decode token failed.")),(0,a.kt)("h3",{id:"handleurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"handle(url:)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public func handle(url: URL) -> Bool\n")),(0,a.kt)("p",null,"Try to handle the given URL by iterating all social plugins."),(0,a.kt)("p",null,"The iteration stops when one of the social plugins handled the URL."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns: ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," if one of the social plugins handled this URL.")))}k.isMDXComponent=!0}}]);