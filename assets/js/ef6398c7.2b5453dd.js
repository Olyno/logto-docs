"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3874],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22814:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(59496),r=n(45924),o="tabItem_UXuk";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},58198:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(665),r=n(59496),o=n(45924),l=n(21010),i=n(10061),u=n(41993),s=n(5671),c="tabList_ra65",p="tabItem_Xj8K";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),N=w.tabGroupChoices,E=w.setTabGroupChoices,O=(0,r.useState)(y),C=O[0],D=O[1],T=[],L=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var j=N[g];null!=j&&j!==C&&b.some((function(e){return e.value===j}))&&D(j)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==C&&(L(t),D(a),null!=g&&E(g,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var o,l=T.indexOf(e.currentTarget)-1;n=null!=(o=T[l])?o:T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},42542:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),l=n(58198),i=n(22814),u=n.p+"assets/images/gitpod-running-b10e27a7c1a1dd8eb2202034cdfa7a1f.png",s=["components"],c={},p="\u26a1 Get started",d={unversionedId:"docs/tutorials/get-started/README",id:"docs/tutorials/get-started/README",title:"\u26a1 Get started",description:"Launch Logto",source:"@site/docs/docs/tutorials/get-started/README.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/",permalink:"/docs/tutorials/get-started/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/get-started/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udc81 Introduction",permalink:"/"},next:{title:"Check out the demo app",permalink:"/docs/tutorials/get-started/check-out-demo"}},m={},f=[{value:"Launch Logto",id:"launch-logto",level:2},{value:"Online",id:"online",level:3},{value:"Local",id:"local",level:3},{value:"Create an admin account",id:"create-an-admin-account",level:2},{value:"&quot;Get Started&quot; tab",id:"get-started-tab",level:2}],g={toc:f};function h(e){var t=e.components,c=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-get-started"},"\u26a1 Get started"),(0,o.kt)("h2",{id:"launch-logto"},"Launch Logto"),(0,o.kt)("h3",{id:"online"},"Online"),(0,o.kt)("p",null,"Prepend ",(0,o.kt)("inlineCode",{parentName:"p"},"https://gitpod.io/#")," to the Logto repo URL (or ",(0,o.kt)("a",{href:"https://gitpod.io/#https://github.com/logto-io/logto",target:"_blank"},"click here"),") and access it. Wait a few moment, you'll see the message like:"),(0,o.kt)("img",{src:u,alt:"Gitpod is running",width:"600px"}),(0,o.kt)("p",null,"Press Cmd (or Ctrl) and click the link that starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://3001-...")," to continue your Logto journey. Enjoy!"),(0,o.kt)("h3",{id:"local"},"Local"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"docker-compose",label:"Docker Compose",mdxType:"TabItem"},(0,o.kt)("p",null,"Docker Compose CLI usually comes with ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before the first stable version is available, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"prerelease")," tag for the Docker image.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | TAG=prerelease docker compose -p logto -f - up\n")),(0,o.kt)("p",null,"After a successful composition, you will see the message like:")),(0,o.kt)(i.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Prepare a ",(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL"),"@^14.0 instance\u3002"),(0,o.kt)("li",{parentName:"ol"},"Pull the image from ghcr.io:")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before the first stable version is available, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"prerelease")," tag for the Docker image.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/logto-io/logto:prerelease\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Map the container port, e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"3001:3001"),"; and set the following environment variables to the container:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"ALL_YES: 1\nNO_INQUIRY: 0\nDB_URL_DEFAULT: postgres://username:password@your_postgres_url:5432 # Replace with your Postgres DSN\n")),(0,o.kt)("p",null,"Finally run the container, you will see the message like:")),(0,o.kt)(i.Z,{value:"script",label:"Download script",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prerequisites")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," ",(0,o.kt)("inlineCode",{parentName:"li"},"^16.13.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://postgresql.org/"},"PostgreSQL")," ",(0,o.kt)("inlineCode",{parentName:"li"},"^14.0"))),(0,o.kt)("p",null,"Higher versions usually work but are not guaranteed."),(0,o.kt)("p",null,"We recommend using a new empty database which is dedicated for Logto, while it's not a hard requirement."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Download and start")),(0,o.kt)("p",null,"In your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'node -e "$(printf "%s" "$(curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/install.js)")"\n')),(0,o.kt)("p",null,"The script will download Logto and create a directory ",(0,o.kt)("inlineCode",{parentName:"p"},"logto")," in the location you ran it. After answering ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/core/configuration#questions"},"several simple questions"),", you will see the message like:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"App is running at http://localhost:3001\n")),(0,o.kt)("p",null,"Heading to ",(0,o.kt)("a",{target:"_blank",href:"http://localhost:3001/"},"http://localhost:3001/")," to continue your Logto journey. Enjoy!"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Configuration (optional)"),(0,o.kt)("p",null,"Logto uses environment variables for configuration, along with ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file support. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/core/configuration"},"Configuration")," for detailed usage and full variable list.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Check out ",(0,o.kt)("a",{parentName:"em",href:"/docs/references/core/"},"Core Service")," if you want more advanced controls or programmatic access to Logto.")),(0,o.kt)("h2",{id:"create-an-admin-account"},"Create an admin account"),(0,o.kt)("p",null,'Open the link and you will see a welcome page that briefly introduces Admin Console. Click "Create Account" to create an admin account.'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For now, you cannot create multiple admin accounts via Admin Console, and only the first account will have admin access. If you want to create multiple admin accounts, use the Management API instead.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Once you create the first account, the welcome page will be unavailable.")),(0,o.kt)("p",null,"On the create account page, enter your username and password to continue."),(0,o.kt)("h2",{id:"get-started-tab"},'"Get Started" tab'),(0,o.kt)("p",null,'Once you create the admin account, the browser will redirect you to the "Get Started" tab in Admin Console, which shows a few things that Logto can do at a glance.'),(0,o.kt)("p",null,"Our tutorial will follow the order you are seeing. So let's begin!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get started",src:n(29703).Z,width:"1920",height:"1160"})))}h.isMDXComponent=!0},29703:function(e,t,n){t.Z=n.p+"assets/images/get-started-0a25fd0e75ae7746aab3830e1380049f.png"}}]);