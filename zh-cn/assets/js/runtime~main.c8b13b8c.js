!function(){"use strict";var e,c,a,f,d,b={},t={};function n(e){var c=t[e];if(void 0!==c)return c.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=b,e=[],n.O=function(c,a,f,d){if(!a){var b=1/0;for(u=0;u<e.length;u++){a=e[u][0],f=e[u][1],d=e[u][2];for(var t=!0,r=0;r<a.length;r++)(!1&d||b>=d)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(t=!1,d<b&&(b=d));if(t){e.splice(u--,1);var o=f();void 0!==o&&(c=o)}}return c}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[a,f,d]},n.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(c,{a:c}),c},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var b={};c=c||[null,a({}),a([]),a(a)];for(var t=2&f&&e;"object"==typeof t&&!~c.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((function(c){b[c]=function(){return e[c]}}));return b.default=function(){return e},n.d(d,b),d},n.d=function(e,c){for(var a in c)n.o(c,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:c[a]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(c,a){return n.f[a](e,c),c}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",99:"a91dcc8b",120:"17c63cfb",158:"0b71e71d",185:"c97e3428",297:"a708706a",316:"79318c55",409:"8b09e8e3",447:"ac811b3c",523:"ac528851",526:"f3a62456",539:"92302762",553:"cfcba740",593:"d80d58f4",609:"5f7a39a8",684:"ba180340",759:"993caaee",783:"d0c44f67",803:"13aa648a",868:"6db5d1a2",885:"b9120504",893:"a39c37aa",932:"a4e152f4",946:"3d6218be",1004:"e1c743f6",1039:"640791d0",1090:"c8bd0431",1107:"4082bb37",1124:"29f3d226",1162:"1cb076a9",1167:"c5f498af",1201:"506de462",1216:"7a3b0286",1405:"e00723e0",1460:"3f19ff29",1461:"1c5ee66c",1472:"aef09e82",1508:"db78d25a",1509:"7c00ae5d",1539:"bf014ce9",1571:"6804366c",1610:"6ee98b3f",1665:"45d555bd",1674:"87e67e8c",1696:"61ec1664",1721:"965e0f7e",1735:"fe122054",1760:"77fa7f92",1816:"269dc2d7",1856:"60587719",1861:"804a4eba",1870:"61a99fee",1873:"42839f59",1884:"d92ea3e5",1905:"e6610ace",1939:"a17a4eab",1982:"300a8c8c",1992:"1c09c42e",2079:"72637a5c",2084:"2ffa211c",2136:"8947bd81",2205:"d5881ae9",2361:"7e015788",2451:"615fd452",2464:"e06ae8f0",2519:"ee4e7447",2564:"bb23968c",2604:"54c1da8c",2685:"0cbf66b4",2746:"b4bb972e",2828:"4223dbae",2846:"cb33b72d",2875:"cad2e180",2923:"c1965389",2935:"f5f9fc3b",2960:"7ee45ca5",2994:"53d79c1e",2998:"0c0f5e79",3049:"8f110cf0",3073:"ecd34ced",3075:"1091fa18",3105:"b771205b",3130:"28e1227d",3249:"00dcc411",3266:"c27965a1",3375:"0c691bfb",3378:"29f8d3bd",3382:"cbbb60f6",3410:"ac53b674",3435:"58f8c4cc",3447:"88fe3ac3",3482:"605b72c1",3501:"412bf9f8",3526:"8c880d50",3545:"5cf43670",3551:"1d08614d",3572:"34074128",3581:"9d7af44e",3607:"2e56a676",3637:"d06b2a77",3773:"0d4e0542",3856:"86f319e1",3861:"b1e4ce5d",3884:"85e50c6a",3917:"dedd2c43",3953:"46aa984f",3978:"8c2d4645",4022:"bd31f939",4089:"d927d190",4118:"4a80692f",4144:"45761ffc",4193:"4ed2cb40",4208:"f9501fb8",4230:"73182117",4300:"14d23762",4315:"10bcdcb1",4426:"c08a2307",4512:"4a498064",4621:"e4d53997",4648:"4b9544c6",4665:"d4870dc8",4669:"28f27729",4789:"4474f986",4819:"0fdd4adf",4838:"2d34a582",4866:"1e785dd7",4879:"1a51771e",4894:"67029b66",4985:"d308a562",4991:"22a4fb83",5021:"4c09fe8a",5110:"cd37f35e",5137:"f9e1c949",5178:"fa9973ba",5274:"b3369afe",5370:"f0a3af46",5388:"e4348221",5396:"48104731",5399:"ea17d889",5403:"c6c9ae08",5430:"205222f6",5507:"08646e0c",5540:"3aad387e",5661:"98acd899",5665:"d66232fa",5764:"602954ff",5907:"3a6a1e70",5967:"d6346bae",5971:"22f87832",5977:"1fa2bff5",5981:"01d312bc",6024:"25daba0a",6060:"5e717b21",6078:"ec7fff4c",6193:"58ad64d4",6195:"258b64b0",6204:"cf087162",6361:"b99f1fec",6388:"7e176742",6402:"56f85367",6536:"fde53c68",6540:"389cf9b6",6629:"823d4963",6722:"17972f0f",6734:"aebcf907",6821:"6ad83fdd",6846:"8954c245",6876:"1ec87505",6902:"ee3f8c09",6931:"085d0e97",7015:"5d129107",7037:"de0f9193",7056:"3fe6b277",7057:"10a12b15",7214:"a938d909",7244:"ca34a2e6",7250:"1732299e",7342:"3f0928cc",7355:"9d94cda2",7500:"f1f1ff92",7579:"9e9d1882",7645:"a7434565",7670:"b93e7275",7712:"5ed03df8",7729:"a97deacd",7730:"1cbaac76",7798:"b158ef79",7843:"997805ff",7848:"72f95380",7918:"17896441",7955:"44201294",7973:"fc8d1e75",7994:"98732d94",8e3:"b5893e4b",8070:"eb847969",8102:"084a2019",8150:"6b9ba9e5",8175:"1c38984d",8274:"7c864919",8376:"0838ad8b",8378:"5c385297",8447:"f0b3b920",8456:"ae6206ca",8495:"9ea828a1",8522:"6babd35e",8523:"8f5db588",8546:"d16bade1",8571:"56974728",8593:"43d3e6fb",8609:"b6e37812",8617:"d88ce928",8634:"6ccf0383",8677:"395176a6",8686:"dabfaeb5",8705:"1fdceb63",8710:"780b97d7",8737:"52b6893f",8832:"7df39147",8843:"054361e9",8882:"a97d08dc",8909:"68032bd2",8915:"85f3b9eb",8952:"4e38099b",8993:"2d73717d",9049:"b1324114",9069:"068090ba",9103:"cb4c2849",9124:"cabaeb37",9145:"ff5921c7",9168:"b9c06196",9188:"fccd1763",9205:"813f1ee9",9220:"15e71439",9273:"abcc661f",9334:"247783bb",9343:"728a5a52",9369:"b37f9578",9411:"6fdb3f66",9438:"b04053b3",9449:"24b48211",9497:"9b81e59a",9514:"1be78505",9560:"0bd91fa6",9632:"50b63fb9",9712:"7981a0ab",9789:"7638e8e3",9836:"94c6dbb5",9918:"10e36d3c",9947:"af627702",9990:"57ccef13"}[e]||e)+"."+{53:"2b30def0",99:"6dee564d",120:"a13c16e8",158:"f1d749b5",185:"a2c625e4",297:"5cc95e04",316:"1a5e1214",409:"4e038ada",447:"5c57bece",523:"e31f7d51",526:"fc5b65e5",539:"8a5abdd1",553:"ab859adb",593:"6cd81d33",609:"6354ea67",684:"242b0ffc",759:"b38fd1b5",783:"bb64ed9f",803:"23ab8df2",868:"0666a239",885:"c6b3ab4b",893:"2248c8e3",932:"538b1932",946:"7bccb574",1004:"36d8efac",1039:"987e9206",1090:"5b0c0771",1107:"1d533b9f",1124:"6755d339",1162:"183f384f",1167:"ba7a219c",1201:"48678061",1216:"e1997e03",1405:"a4698361",1460:"85b872a6",1461:"75a31acf",1472:"4c085f74",1508:"055db9e5",1509:"49dbc0c4",1539:"9cb8c094",1571:"027370fd",1610:"568dc4ae",1629:"eabc21c1",1665:"8a0ddcee",1674:"2fc4a270",1696:"6ea2e283",1721:"d9a6f691",1735:"b039619f",1760:"f216c066",1816:"8b11c67f",1856:"d8886c9b",1861:"bddf3e61",1870:"1b6fdc21",1873:"0953d0ea",1884:"8c0ebcde",1905:"d0a9cfbb",1939:"4123a714",1982:"a585cf40",1992:"3b968389",2079:"bc4906cf",2084:"5e259b21",2136:"0c02fdc3",2205:"5127c377",2361:"61f07f3b",2451:"913b07f8",2464:"8c58fdd0",2519:"8f376a2f",2564:"7e78e0f7",2604:"7ab81519",2685:"1c65aa60",2746:"7174025d",2828:"2395f96c",2846:"1eebfb8a",2875:"b05ac4ce",2923:"5734d760",2935:"df0862e1",2960:"a2e3fc87",2994:"4231808b",2998:"17422b41",3049:"a585dbed",3073:"95c68d7b",3075:"f2c304a3",3105:"92c7e4c4",3130:"c07462d5",3249:"c3d02681",3266:"a970b884",3375:"8b33d0ed",3378:"d34c67fb",3382:"76d79665",3410:"e61afce7",3435:"36a4a9ee",3447:"f7ac5e34",3482:"4c61e488",3501:"be6bd434",3526:"01f517ae",3545:"d6fa8f9b",3551:"737f7286",3572:"edddc41d",3581:"338c41b0",3607:"c7cd7550",3637:"f3651212",3773:"e5ccab4d",3856:"f4e87faa",3861:"28ef7a12",3884:"25a55e2a",3917:"c273106e",3953:"3bb86e13",3978:"e930b4aa",4022:"be56d46e",4089:"e98624cc",4118:"785c6023",4144:"f824d605",4193:"1d8eff13",4208:"c0a81775",4230:"d263107f",4300:"67970a50",4315:"5480fd29",4426:"c411e381",4512:"dfa87380",4621:"18d71e43",4648:"0b4ff100",4665:"10a3429b",4669:"88b2cdc8",4688:"29e1d729",4789:"8812740e",4819:"86b06831",4838:"bae8e913",4866:"5191c7ce",4879:"bf429ec2",4894:"2758a13f",4985:"534c21fc",4991:"6ff347d3",5021:"446e56d1",5110:"7c2cdd8e",5137:"becd489a",5178:"492d7657",5274:"8d4a4772",5370:"766b4ac5",5388:"f8558f7c",5396:"5a788816",5399:"7a983485",5403:"99dcfd32",5430:"f5d95a53",5507:"6ba6efa5",5540:"ee2bbd59",5661:"3648e9c2",5665:"aa0a935f",5764:"9e556028",5907:"f9a04e17",5967:"92e27cb2",5971:"af6d3a39",5977:"b3c83a3c",5981:"bd7e662a",6024:"c586d39f",6060:"10544a43",6078:"fbb0d4df",6193:"0d2e9ca2",6195:"5036bac3",6204:"b16a7227",6361:"1ecd32d2",6388:"e287785d",6402:"a87c2eab",6536:"70213305",6540:"29712e1a",6629:"3adac7db",6722:"9b15de28",6734:"f438589b",6821:"5db1e001",6846:"b5251a12",6876:"aac0d404",6902:"dae149f3",6931:"3fe724f6",7015:"5a2a41b3",7037:"11e7aef5",7056:"a685e4c9",7057:"3ab97874",7214:"59df2d6b",7244:"1109c647",7250:"07b42b95",7342:"56071a49",7355:"dd866e0b",7500:"c3bbde3f",7579:"b801b794",7645:"d1e0ca84",7670:"07ceb001",7712:"fafdb271",7729:"0d87b70d",7730:"89f97ed6",7798:"fcc34f8f",7843:"c9c36dcb",7848:"42aacb1e",7918:"99e8fc47",7955:"79a34317",7973:"f3524a8b",7994:"34da6975",8e3:"a16de29f",8070:"365fd316",8102:"6e383a68",8150:"2f4940c9",8175:"2a372e0f",8274:"145283fb",8376:"c54b13b1",8378:"43caf9bc",8447:"b2822ce4",8456:"2643e4a7",8495:"c08c8d14",8522:"fc94919b",8523:"d3967e89",8546:"a7fbd22e",8571:"d88749fa",8593:"b7801dd9",8609:"65aec66e",8617:"219c8680",8634:"d5d2df0c",8677:"ed993674",8686:"d49917e3",8705:"ccf22ad8",8710:"a0fada50",8737:"60eb26e8",8832:"d960c3bc",8843:"67470693",8882:"9b602ef6",8909:"e480595f",8915:"2b1cb357",8952:"fa1f7f8e",8993:"4d40fc1a",9049:"40c7f1fe",9069:"0a00da74",9103:"b889f9b9",9124:"dd7feee2",9145:"70b58b4e",9168:"e179f157",9188:"886c1c2d",9205:"85e949d8",9220:"19b5ac00",9273:"953ea6e4",9334:"4ef35d6d",9343:"ce326684",9369:"16edc0c7",9411:"8c63ec6d",9438:"a183726a",9449:"9fde3d66",9497:"b201720a",9514:"d766cc4b",9560:"3dcc6584",9632:"203ce7c8",9712:"871b3ea8",9789:"e09b36a7",9836:"c666fc92",9918:"36bffb3d",9947:"62018bfb",9990:"6656d99c"}[e]+".js"},n.miniCssF=function(e){},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},f={},d="@logto/docs:",n.l=function(e,c,a,b){if(f[e])f[e].push(c);else{var t,r;if(void 0!==a)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+a){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",d+a),t.src=e),f[e]=[c];var l=function(c,a){t.onerror=t.onload=null,clearTimeout(s);var d=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((function(e){return e(a)})),c)return c(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},n.p="/zh-cn/",n.gca=function(e){return e={17896441:"7918",34074128:"3572",44201294:"7955",48104731:"5396",56974728:"8571",60587719:"1856",73182117:"4230",92302762:"539","935f2afb":"53",a91dcc8b:"99","17c63cfb":"120","0b71e71d":"158",c97e3428:"185",a708706a:"297","79318c55":"316","8b09e8e3":"409",ac811b3c:"447",ac528851:"523",f3a62456:"526",cfcba740:"553",d80d58f4:"593","5f7a39a8":"609",ba180340:"684","993caaee":"759",d0c44f67:"783","13aa648a":"803","6db5d1a2":"868",b9120504:"885",a39c37aa:"893",a4e152f4:"932","3d6218be":"946",e1c743f6:"1004","640791d0":"1039",c8bd0431:"1090","4082bb37":"1107","29f3d226":"1124","1cb076a9":"1162",c5f498af:"1167","506de462":"1201","7a3b0286":"1216",e00723e0:"1405","3f19ff29":"1460","1c5ee66c":"1461",aef09e82:"1472",db78d25a:"1508","7c00ae5d":"1509",bf014ce9:"1539","6804366c":"1571","6ee98b3f":"1610","45d555bd":"1665","87e67e8c":"1674","61ec1664":"1696","965e0f7e":"1721",fe122054:"1735","77fa7f92":"1760","269dc2d7":"1816","804a4eba":"1861","61a99fee":"1870","42839f59":"1873",d92ea3e5:"1884",e6610ace:"1905",a17a4eab:"1939","300a8c8c":"1982","1c09c42e":"1992","72637a5c":"2079","2ffa211c":"2084","8947bd81":"2136",d5881ae9:"2205","7e015788":"2361","615fd452":"2451",e06ae8f0:"2464",ee4e7447:"2519",bb23968c:"2564","54c1da8c":"2604","0cbf66b4":"2685",b4bb972e:"2746","4223dbae":"2828",cb33b72d:"2846",cad2e180:"2875",c1965389:"2923",f5f9fc3b:"2935","7ee45ca5":"2960","53d79c1e":"2994","0c0f5e79":"2998","8f110cf0":"3049",ecd34ced:"3073","1091fa18":"3075",b771205b:"3105","28e1227d":"3130","00dcc411":"3249",c27965a1:"3266","0c691bfb":"3375","29f8d3bd":"3378",cbbb60f6:"3382",ac53b674:"3410","58f8c4cc":"3435","88fe3ac3":"3447","605b72c1":"3482","412bf9f8":"3501","8c880d50":"3526","5cf43670":"3545","1d08614d":"3551","9d7af44e":"3581","2e56a676":"3607",d06b2a77:"3637","0d4e0542":"3773","86f319e1":"3856",b1e4ce5d:"3861","85e50c6a":"3884",dedd2c43:"3917","46aa984f":"3953","8c2d4645":"3978",bd31f939:"4022",d927d190:"4089","4a80692f":"4118","45761ffc":"4144","4ed2cb40":"4193",f9501fb8:"4208","14d23762":"4300","10bcdcb1":"4315",c08a2307:"4426","4a498064":"4512",e4d53997:"4621","4b9544c6":"4648",d4870dc8:"4665","28f27729":"4669","4474f986":"4789","0fdd4adf":"4819","2d34a582":"4838","1e785dd7":"4866","1a51771e":"4879","67029b66":"4894",d308a562:"4985","22a4fb83":"4991","4c09fe8a":"5021",cd37f35e:"5110",f9e1c949:"5137",fa9973ba:"5178",b3369afe:"5274",f0a3af46:"5370",e4348221:"5388",ea17d889:"5399",c6c9ae08:"5403","205222f6":"5430","08646e0c":"5507","3aad387e":"5540","98acd899":"5661",d66232fa:"5665","602954ff":"5764","3a6a1e70":"5907",d6346bae:"5967","22f87832":"5971","1fa2bff5":"5977","01d312bc":"5981","25daba0a":"6024","5e717b21":"6060",ec7fff4c:"6078","58ad64d4":"6193","258b64b0":"6195",cf087162:"6204",b99f1fec:"6361","7e176742":"6388","56f85367":"6402",fde53c68:"6536","389cf9b6":"6540","823d4963":"6629","17972f0f":"6722",aebcf907:"6734","6ad83fdd":"6821","8954c245":"6846","1ec87505":"6876",ee3f8c09:"6902","085d0e97":"6931","5d129107":"7015",de0f9193:"7037","3fe6b277":"7056","10a12b15":"7057",a938d909:"7214",ca34a2e6:"7244","1732299e":"7250","3f0928cc":"7342","9d94cda2":"7355",f1f1ff92:"7500","9e9d1882":"7579",a7434565:"7645",b93e7275:"7670","5ed03df8":"7712",a97deacd:"7729","1cbaac76":"7730",b158ef79:"7798","997805ff":"7843","72f95380":"7848",fc8d1e75:"7973","98732d94":"7994",b5893e4b:"8000",eb847969:"8070","084a2019":"8102","6b9ba9e5":"8150","1c38984d":"8175","7c864919":"8274","0838ad8b":"8376","5c385297":"8378",f0b3b920:"8447",ae6206ca:"8456","9ea828a1":"8495","6babd35e":"8522","8f5db588":"8523",d16bade1:"8546","43d3e6fb":"8593",b6e37812:"8609",d88ce928:"8617","6ccf0383":"8634","395176a6":"8677",dabfaeb5:"8686","1fdceb63":"8705","780b97d7":"8710","52b6893f":"8737","7df39147":"8832","054361e9":"8843",a97d08dc:"8882","68032bd2":"8909","85f3b9eb":"8915","4e38099b":"8952","2d73717d":"8993",b1324114:"9049","068090ba":"9069",cb4c2849:"9103",cabaeb37:"9124",ff5921c7:"9145",b9c06196:"9168",fccd1763:"9188","813f1ee9":"9205","15e71439":"9220",abcc661f:"9273","247783bb":"9334","728a5a52":"9343",b37f9578:"9369","6fdb3f66":"9411",b04053b3:"9438","24b48211":"9449","9b81e59a":"9497","1be78505":"9514","0bd91fa6":"9560","50b63fb9":"9632","7981a0ab":"9712","7638e8e3":"9789","94c6dbb5":"9836","10e36d3c":"9918",af627702:"9947","57ccef13":"9990"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(c,a){var f=n.o(e,c)?e[c]:void 0;if(0!==f)if(f)a.push(f[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var d=new Promise((function(a,d){f=e[c]=[a,d]}));a.push(f[2]=d);var b=n.p+n.u(c),t=new Error;n.l(b,(function(a){if(n.o(e,c)&&(0!==(f=e[c])&&(e[c]=void 0),f)){var d=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+c+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,f[1](t)}}),"chunk-"+c,c)}},n.O.j=function(c){return 0===e[c]};var c=function(c,a){var f,d,b=a[0],t=a[1],r=a[2],o=0;if(b.some((function(c){return 0!==e[c]}))){for(f in t)n.o(t,f)&&(n.m[f]=t[f]);if(r)var u=r(n)}for(c&&c(a);o<b.length;o++)d=b[o],n.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return n.O(u)},a=self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[];a.forEach(c.bind(null,0)),a.push=c.bind(null,a.push.bind(a))}()}();