(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b8e1363"],{"0cb2":function(t,i,n){var a=n("7b0b"),e=Math.floor,o="".replace,r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,i,n,s,c,u){var m=n+t.length,h=s.length,v=l;return void 0!==c&&(c=a(c),v=r),o.call(u,v,(function(a,o){var r;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return i.slice(0,n);case"'":return i.slice(m);case"<":r=c[o.slice(1,-1)];break;default:var l=+o;if(0===l)return a;if(l>h){var u=e(l/10);return 0===u?a:u<=h?void 0===s[u-1]?o.charAt(1):s[u-1]+o.charAt(1):a}r=s[l-1]}return void 0===r?"":r}))}},5319:function(t,i,n){"use strict";var a=n("d784"),e=n("d039"),o=n("825a"),r=n("50c4"),l=n("a691"),s=n("1d80"),c=n("8aa5"),u=n("0cb2"),m=n("14c3"),h=n("b622"),v=h("replace"),d=Math.max,p=Math.min,f=function(t){return void 0===t?t:String(t)},b=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),g=!e((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));a("replace",(function(t,i,n){var a=_?"$":"$0";return[function(t,n){var a=s(this),e=void 0==t?void 0:t[v];return void 0!==e?e.call(t,a,n):i.call(String(a),t,n)},function(t,e){if("string"===typeof e&&-1===e.indexOf(a)&&-1===e.indexOf("$<")){var s=n(i,this,t,e);if(s.done)return s.value}var h=o(this),v=String(t),b="function"===typeof e;b||(e=String(e));var _=h.global;if(_){var g=h.unicode;h.lastIndex=0}var k=[];while(1){var x=m(h,v);if(null===x)break;if(k.push(x),!_)break;var y=String(x[0]);""===y&&(h.lastIndex=c(v,r(h.lastIndex),g))}for(var C="",S=0,$=0;$<k.length;$++){x=k[$];for(var w=String(x[0]),A=d(p(l(x.index),v.length),0),z=[],j=1;j<x.length;j++)z.push(f(x[j]));var q=x.groups;if(b){var O=[w].concat(z,A,v);void 0!==q&&O.push(q);var H=String(e.apply(void 0,O))}else H=u(w,v,A,z,q,e);A>=S&&(C+=v.slice(S,A)+H,S=A+w.length)}return C+v.slice(S)}]}),!g||!b||_)},"57c1":function(t,i,n){"use strict";n.r(i);var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("AppBar",{attrs:{color:"light-blue",title:"插件列表"}}),n("v-container",[n("v-list",{attrs:{subheader:"","two-line":""}},[n("v-subheader",{attrs:{inset:""}},[t._v("我的插件")]),t._l(t.mylist,(function(i){return n("v-list-item",{key:i.title},[n("v-list-item-avatar",[n("v-icon",{staticClass:"green lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(i.name)}}),n("v-list-item-subtitle",[n("a",{staticClass:"text-decoration-none",attrs:{href:i.url,target:"_blank"}},[t._v(t._s(i.url))])])],1),n("v-list-item-action",[n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on,e=i.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",e,!1),a),[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}],null,!0)},[n("v-list",t._l(t.items,(function(a,e){return n("v-list-item",{key:e},[n("v-list-item-title",{on:{click:function(n){return t.pullClick(i,a.title)}}},[t._v(t._s(a.title))])],1)})),1)],1)],1)],1)})),n("v-divider",{attrs:{inset:""}}),n("v-subheader",{attrs:{inset:""}},[t._v("收藏插件")]),t._l(t.list,(function(i){return n("v-list-item",{key:i.title},[n("v-list-item-avatar",[n("v-icon",{staticClass:"blue lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(i.name)}}),n("v-list-item-subtitle",[n("a",{staticClass:"text-decoration-none",attrs:{href:i.url,target:"_blank"}},[t._v(t._s(i.url))])])],1),n("v-list-item-action",[n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on,e=i.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",e,!1),a),[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}],null,!0)},[n("v-list",t._l(t.items,(function(a,e){return n("v-list-item",{key:e},[n("v-list-item-title",{on:{click:function(n){return t.pullClick(i,a.title)}}},[t._v(t._s(a.title))])],1)})),1)],1)],1)],1)})),n("v-divider",{attrs:{inset:""}}),n("v-list-item",[n("v-list-item-avatar",[n("v-icon",{staticClass:"red lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),n("v-list-item-content",[n("v-form",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"自定义组件名称",required:""},model:{value:t.pull.domain,callback:function(i){t.$set(t.pull,"domain","string"===typeof i?i.trim():i)},expression:"pull.domain"}})],1),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-text-field",{attrs:{type:"url",label:"GitHub项目地址",required:""},model:{value:t.pull.url,callback:function(i){t.$set(t.pull,"url","string"===typeof i?i.trim():i)},expression:"pull.url"}})],1)],1)],1)],1),n("v-list-item-action",[n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on,e=i.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",e,!1),a),[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}])},[n("v-list",t._l(t.items,(function(i,a){return n("v-list-item",{key:a},[n("v-list-item-title",{on:{click:function(n){return t.gitClick(i.title)}}},[t._v(t._s(i.title))])],1)})),1)],1)],1)],1)],2),n("v-card",{staticStyle:{padding:"20px"},attrs:{elevation:"2"}},[n("v-card-text",{staticClass:"text--primary"},[n("p",{staticClass:"text-h6"},[t._v(" 注意：不会用千万别点下面的按钮，否则可能造成数据异常 ")]),t._v(" 修改pip的镜像源、github的域名解析、修改hacs的资源下载链接 ")]),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(i){return t.updateSourceClick("pip")}}},[t._v(" pip ")]),n("v-btn",{attrs:{color:"error",text:""},on:{click:function(i){return t.updateSourceClick("github")}}},[t._v(" GitHub ")]),n("v-btn",{attrs:{color:"orange",text:""},on:{click:function(i){return t.updateSourceClick("hacs")}}},[t._v(" HACS ")])],1)],1)],1)],1)},e=[],o=n("5530"),r=(n("ac1f"),n("5319"),n("5880")),l={data:function(){return{mylist:[{domain:"ha_cloud_music",name:"网易云音乐",url:"https://github.com/shaonianzhentan/ha_cloud_music"},{domain:"conversation",name:"语音小助手",url:"https://github.com/shaonianzhentan/conversation"},{domain:"ha_baidu_map",name:"百度地图",url:"https://github.com/shaonianzhentan/ha_baidu_map"},{domain:"ha_sidebar",name:"侧边栏管理",url:"https://github.com/shaonianzhentan/ha_sidebar"},{domain:"ha_file_explorer",name:"文件管理",url:"https://github.com/shaonianzhentan/ha_file_explorer"},{domain:"ha_qqmail",name:"QQ邮箱通知",url:"https://github.com/shaonianzhentan/ha_qqmail"},{domain:"xiaomi_tv",name:"小米电视",url:"https://github.com/shaonianzhentan/xiaomi_tv"},{domain:"hf_weather",name:"和风天气",url:"https://github.com/shaonianzhentan/hf_weather"},{domain:"mipad_android",name:"小米平板",url:"https://github.com/shaonianzhentan/MiPadAndroid"},{domain:"xiaomi_radio",name:"小米电台",url:"https://github.com/shaonianzhentan/xiaomi_radio"},{domain:"ha_status_notification",name:"状态提醒",url:"https://github.com/shaonianzhentan/ha_status_notification"}],list:[{domain:"sonoff",name:"SonoffLAN - 易微联",url:"https://github.com/AlexxIT/SonoffLAN"},{domain:"xiaomi_miio_airconditioningcompanion",name:"小米空调伴侣",url:"https://github.com/syssi/xiaomi_airconditioningcompanion"},{domain:"hacs",name:"HACS - 插件商店",url:"https://github.com/hacs/integration"},{domain:"havcs",name:"HAVCS - 智能音箱服务",url:"https://github.com/cnk700i/havcs"},{domain:"nodered",name:"hass-node-red",url:"https://github.com/zachowj/hass-node-red"},{domain:"ble_monitor",name:"米家蓝牙设备监听",url:"https://github.com/custom-components/ble_monitor"},{domain:"xiaomi_miot",name:"Xiaomi Miot - 小米云端设备",url:"https://github.com/al-one/hass-xiaomi-miot"}],pull:{domain:"",url:""},items:[{title:"github.com.cnpmjs.org"},{title:"hub.fastgit.org"},{title:"github.com"}]}},methods:Object(o["a"])(Object(o["a"])({},Object(r["mapActions"])(["fetchApi"])),{},{gitClick:function(t){this.pullClick(this.pull,t)},pullClick:function(t,i){var n=this,a=t.domain,e=t.url;if(!a||!e)return this.$toast("请输入组件名称和项目地址");this.fetchApi({type:"update",domain:a,url:e.replace("https://github.com/","https://".concat(i,"/"))}).then((function(t){0===t.code&&n.$toast(t.msg)}))},updateSourceClick:function(t){var i=this;top.confirm("会修改系统里相关文件配置，不懂千万别确定")&&this.fetchApi({type:"update-source",url:t}).then((function(t){i.$toast(t.msg)}))}})},s=l,c=n("2877"),u=Object(c["a"])(s,a,e,!1,null,"247610c4",null);i["default"]=u.exports}}]);