"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[8e3],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(v,l(l({ref:t},s),{},{components:n})):a.createElement(v,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8661:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(9496),r=n(1626),o="tabItem_ZZXe";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},2418:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(5443),r=n(9496),o=n(1626),l=n(5874),i=n(2103),c=n(3299),u=n(2821),s="tabList_kQjL",p="tabItem_wrqk";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,v=e.values,g=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,c.U)(),y=w.tabGroupChoices,x=w.setTabGroupChoices,C=(0,r.useState)(N),E=C[0],O=C[1],T=[],z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var I=y[g];null!=I&&I!==E&&f.some((function(e){return e.value===I}))&&O(I)}var M=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==E&&(z(t),O(a),null!=g&&x(g,String(a)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var o,l=T.indexOf(e.currentTarget)-1;n=null!=(o=T[l])?o:T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return T.push(e)},onKeyDown:L,onFocus:M,onClick:M},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},6903:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),l=["components"],i={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,"\u672c\u7bc7\u6559\u7a0b\u9ed8\u8ba4\u4f60\u5df2\u7ecf\u5728\u7ba1\u7406\u754c\u9762\u4e2d\u6210\u529f\u521b\u5efa\u4e86\u4e00\u4e2a\u300c",n.type,"\u300d\u7c7b\u578b\u7684\u5e94\u7528\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b8c\u6210\u8fd9\u4e00\u6b65\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"\u8fd9\u7bc7\u6559\u7a0b"),"\uff0c\u521b\u5efa\u5e94\u7528\u4e4b\u540e\u518d\u7ee7\u7eed\u3002"))))}c.isMDXComponent=!0},4692:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),l=["components"],i={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,"\u5728\u8c03\u7528 ",(0,o.kt)("code",null,n.calling)," \u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u5728\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u6b63\u786e\u914d\u7f6e\u4e86 Redirect URI\u3002"))))}c.isMDXComponent=!0},9097:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return N}});var a=n(5443),r=n(3010),o=n(9496),l=n(9613),i=n(1626),c={note:o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},u={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function s(e){var t=e.children,n=e.type,a=e.title,r=void 0===a?n:a,l=e.icon,s=void 0===l?c[n]:l;return o.createElement("div",{className:(0,i.Z)("admonition","admonition-"+n,"alert","alert--"+u[n])},o.createElement("div",{className:"admonition-heading"},o.createElement("h5",null,o.createElement("span",{className:"admonition-icon"},s),r)),o.createElement("div",{className:"admonition-content"},t))}var p=n(2418),d=n(8661),m=n(6903),v=n(4692),g=["components"],h={sidebar_label:"Vue"},k="Vue\uff1a\u96c6\u6210 `@logto/vue`",f={unversionedId:"docs/recipes/integrate-logto/vue",id:"docs/recipes/integrate-logto/vue",title:"Vue\uff1a\u96c6\u6210 `@logto/vue`",description:"\u5b89\u88c5 SDK",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/vue.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/vue",permalink:"/zh-cn/docs/recipes/integrate-logto/vue",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/vue.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Vue"},sidebar:"docsSidebar",previous:{title:"\u539f\u751f JS",permalink:"/zh-cn/docs/recipes/integrate-logto/vanilla-js"},next:{title:"\u2694\ufe0f \u4fdd\u62a4\u4f60\u7684 API",permalink:"/zh-cn/docs/recipes/protect-your-api/"}},b={},N=[{value:"\u5b89\u88c5 SDK",id:"\u5b89\u88c5-sdk",level:2},{value:"\u521d\u59cb\u5316 LogtoClient",id:"\u521d\u59cb\u5316-logtoclient",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u8bbe\u7f6e\u56de\u8c03\u8def\u7531",id:"\u8bbe\u7f6e\u56de\u8c03\u8def\u7531",level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u767b\u5f55\u6309\u94ae",id:"\u521b\u5efa\u4e00\u4e2a\u767b\u5f55\u6309\u94ae",level:3},{value:"\u5224\u65ad\u5f53\u524d\u767b\u5f55\u72b6\u6001",id:"\u5224\u65ad\u5f53\u524d\u767b\u5f55\u72b6\u6001",level:3},{value:"\u767b\u51fa",id:"\u767b\u51fa",level:2},{value:"Further Readings",id:"further-readings",level:2}],w={toc:N};function y(e){var t=e.components,n=(0,r.Z)(e,g);return(0,l.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vue\u96c6\u6210-logtovue"},"Vue\uff1a\u96c6\u6210 ",(0,l.kt)("inlineCode",{parentName:"h1"},"@logto/vue")),(0,l.kt)(m.ZP,{type:"Single Page",mdxType:"AppNote"}),(0,l.kt)("h2",{id:"\u5b89\u88c5-sdk"},"\u5b89\u88c5 SDK"),(0,l.kt)(p.Z,{mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/vue\n"))),(0,l.kt)(d.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/vue\n"))),(0,l.kt)(d.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/vue\n"))),(0,l.kt)(d.Z,{value:"script",label:"script",mdxType:"TabItem"},(0,l.kt)("p",null,"{/",(0,l.kt)("em",{parentName:"p"}," This should be CDN URL "),"/}"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://logto.io/js/logto-sdk-vue/0.1.0/logto-sdk-vue.production.js" />\n')))),(0,l.kt)(s,{type:"note",mdxType:"Admonition"},"\u76ee\u524d\u4ec5\u652f\u6301 Vue 3 \u7684 \u7ec4\u5408\u5f0f\uff08Composition\uff09API\uff0c\u6211\u4eec\u4f1a\u5728\u540e\u7eed\u7248\u672c\u4e2d\u9646\u7eed\u6dfb\u52a0\u5bf9\u9009\u9879\u5f0f\uff08Options\uff09API \u548c Vue 2 \u7684\u652f\u6301\u3002"),(0,l.kt)("h2",{id:"\u521d\u59cb\u5316-logtoclient"},"\u521d\u59cb\u5316 LogtoClient"),(0,l.kt)("p",null,"Import \u5e76\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"createLogto")," \u4ee5\u63d2\u4ef6\u7684\u5f62\u5f0f\u5b89\u88c5 Logto:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { createLogto, LogtoConfig } from '@logto/vue';\n\nconst config: LogtoConfig = {\n  appId: '<your-application-id>',\n  endpoint: '<your-logto-endpoint>',\n};\n\nconst app = createApp(App);\n\napp.use(createLogto, config);\napp.mount('#app');\n")),(0,l.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5728\u5982\u4e0b\u4ee3\u7801\u793a\u4f8b\u4e2d, \u6211\u4eec\u5747\u5148\u5047\u8bbe\u4f60\u7684 Vue \u5e94\u7528\u8fd0\u884c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:1234")," \u4e0a\u3002"))),(0,l.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e24\u4e2a\u7ec4\u5408\u5f0f API ",(0,l.kt)("inlineCode",{parentName:"p"},"useHandleSignInCallback()")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"useLogto()"),"\uff0c\u5b83\u4eec\u53ef\u4ee5\u5e2e\u52a9\u4f60\u8f7b\u677e\u5b8c\u6210\u767b\u5f55\u8ba4\u8bc1\u6d41\u7a0b\u3002"),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u56de\u8c03\u8def\u7531"},"\u8bbe\u7f6e\u56de\u8c03\u8def\u7531"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ba9\u767b\u5f55\u8ba4\u8bc1\u6d41\u7a0b\u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u56de\u8c03\u8def\u7531\uff0c\u4ee5\u4fbf\u5728\u8ba4\u8bc1\u7ed3\u675f\u540e\u8df3\u8f6c\u56de\u4f60\u7684\u5e94\u7528\u65f6\u5b83\u80fd\u591f\u5904\u7406\u8ba4\u8bc1\u7ed3\u679c\u3002\uff08\u8bf7\u6ce8\u610f\uff1a\u6b64\u8def\u7531\u5730\u5740\u4e0d\u80fd\u53d7\u767b\u5f55\u4fdd\u62a4\uff09"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u6765\u521b\u5efa\u4e00\u4e2a CallbackView \u7ec4\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\n  import { useHandleSignInCallback } from \'@logto/vue\';\n  const { isLoading } = useHandleSignInCallback();\n<\/script>\n\n<template>\n  \x3c!-- \u5f53\u767b\u5f55\u8ba4\u8bc1\u5c1a\u672a\u5b8c\u6210\u65f6 --\x3e\n  <p v-if="isLoading">\u9875\u9762\u8df3\u8f6c\u4e2d...</p>\n</template>\n')),(0,l.kt)("p",null,"\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u5728\u8def\u7531\u8868\u4e2d\u6dfb\u52a0\u8fd9\u4e2a\u56de\u8c03\u8def\u7531\u3002\u5047\u8bbe\u6211\u4eec\u7684\u8def\u7531\u5730\u5740\u5b9a\u4e49\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"/callback"),"\uff0c\u4e14\u4f7f\u7528\u7684\u8def\u7531\u5de5\u5177\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"vue-router"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const router = createRouter({\n  ...\n  routes: [\n    {\n      path: "/callback",\n      name: "callback",\n      component: CallbackView,\n    },\n  ]\n});\n')),(0,l.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u767b\u5f55\u6309\u94ae"},"\u521b\u5efa\u4e00\u4e2a\u767b\u5f55\u6309\u94ae"),(0,l.kt)(v.ZP,{calling:".signIn()",mdxType:"SignInNote"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { useLogto } from '@logto/vue';\n\nconst { signIn } = useLogto();\nconst onClickSignIn = () => signIn(redirectUrl);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<button @click="onClickSignIn">\u767b\u5f55</button>\n')),(0,l.kt)("h3",{id:"\u5224\u65ad\u5f53\u524d\u767b\u5f55\u72b6\u6001"},"\u5224\u65ad\u5f53\u524d\u767b\u5f55\u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { useLogto } from '@logto/vue';\n\nconst { isAuthenticated } = useLogto();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div v-if="!isAuthenticated">\n  \x3c!-- \u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762 --\x3e\n</div>\n<div v-else>\n  \x3c!-- \u5b9e\u73b0\u7528\u6237\u767b\u5f55\u4e4b\u540e\u7684\u4e1a\u52a1\u903b\u8f91 --\x3e\n</div>\n')),(0,l.kt)("h2",{id:"\u767b\u51fa"},"\u767b\u51fa"),(0,l.kt)("p",null,"\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},".signOut()")," \u65b9\u6cd5\u4f1a\u6e05\u9664\u6240\u6709\u5728\u7f13\u5b58\u6216\u8005 localStorage \u4e2d\u7684 Logto \u6570\u636e\uff08\u5982\u679c\u6709\uff09\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u7528\u6237\u767b\u51fa\u540e\u80fd\u591f\u8df3\u8f6c\u56de\u4f60\u7684\u5e94\u7528\uff0c\u6211\u4eec\u9700\u8981\u9996\u5148\u5728\u7ba1\u7406\u754c\u9762\u4e2d\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:1234")," \u6dfb\u52a0\u5230\u5141\u8bb8\u767b\u51fa\u540e\u8df3\u8f6c\u7684\u5730\u5740\u5217\u8868\uff08Post Sign Out URIs\uff09\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { useLogto } from '@logto/vue';\n\nconst { signOut } = useLogto();\nconst onClickSignOut = () => signOut('http://localhost:1234');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<button @click="onClickSignOut">\u767b\u51fa</button>\n')),(0,l.kt)("h2",{id:"further-readings"},"Further Readings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://link-url-here.org"},"SDK Documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://link-url-here.org"},"OIDC Documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://link-url-here.org"},"Calling API to fetch accessToken"))))}y.isMDXComponent=!0}}]);