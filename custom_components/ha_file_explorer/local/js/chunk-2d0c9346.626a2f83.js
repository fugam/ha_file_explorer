(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9346"],{"57c1":function(t,i,e){"use strict";e.r(i);var l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("AppBar",{attrs:{color:"light-blue",title:"插件列表"}}),e("v-container",[e("v-list",{attrs:{subheader:"","two-line":""}},[e("v-list-item",[e("v-list-item-avatar",[e("v-icon",{staticClass:"red lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),e("v-list-item-content",[e("v-form",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-text-field",{attrs:{label:"自定义组件名称",required:""},model:{value:t.pull.domain,callback:function(i){t.$set(t.pull,"domain","string"===typeof i?i.trim():i)},expression:"pull.domain"}})],1),e("v-col",{attrs:{cols:"12",md:"8"}},[e("v-text-field",{attrs:{type:"url",label:"GitHub项目地址",required:""},model:{value:t.pull.url,callback:function(i){t.$set(t.pull,"url","string"===typeof i?i.trim():i)},expression:"pull.url"}})],1)],1)],1)],1),e("v-list-item-action",[e("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(i){var l=i.on,n=i.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),l),[e("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}])},[e("v-list",t._l(t.items,(function(i,l){return e("v-list-item",{key:l},[e("v-list-item-title",{on:{click:function(e){return t.gitClick(i.title)}}},[t._v(t._s(i.title))])],1)})),1)],1)],1)],1),e("v-subheader",{attrs:{inset:""}},[t._v("我的插件")]),t._l(t.mylist,(function(i){return e("v-list-item",{key:i.title},[e("v-list-item-avatar",[e("v-icon",{staticClass:"green lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(i.name)}}),e("v-list-item-subtitle",[e("a",{staticClass:"text-decoration-none",attrs:{href:i.url,target:"_blank"}},[t._v(t._s(i.url))])])],1),e("v-list-item-action",[e("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(i){var l=i.on,n=i.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),l),[e("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}],null,!0)},[e("v-list",t._l(t.items,(function(l,n){return e("v-list-item",{key:n},[e("v-list-item-title",{on:{click:function(e){return t.pullClick(i,l.url)}}},[t._v(t._s(l.title))])],1)})),1)],1)],1)],1)})),e("v-divider",{attrs:{inset:""}}),e("v-subheader",{attrs:{inset:""}},[t._v("收藏插件")]),t._l(t.list,(function(i){return e("v-list-item",{key:i.title},[e("v-list-item-avatar",[e("v-icon",{staticClass:"blue lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(i.name)}}),e("v-list-item-subtitle",[e("a",{staticClass:"text-decoration-none",attrs:{href:i.url,target:"_blank"}},[t._v(t._s(i.url))])])],1),e("v-list-item-action",[e("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(i){var l=i.on,n=i.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),l),[e("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}],null,!0)},[e("v-list",t._l(t.items,(function(l,n){return e("v-list-item",{key:n},[e("v-list-item-title",{on:{click:function(e){return t.pullClick(i,l.url)}}},[t._v(t._s(l.title))])],1)})),1)],1)],1)],1)}))],2),e("v-card",{staticStyle:{padding:"20px"},attrs:{elevation:"2"}},[e("v-card-text",{staticClass:"text--primary"},[e("p",{staticClass:"text-h6"},[t._v(" 注意：不会用千万别点下面的按钮，否则可能造成数据异常 ")]),t._v(" 修改pip的镜像源、github的域名解析、修改hacs的资源下载链接 ")]),e("v-card-actions",[e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(i){return t.updateSourceClick("pip")}}},[t._v(" pip ")]),e("v-btn",{attrs:{color:"error",text:""},on:{click:function(i){return t.updateSourceClick("github")}}},[t._v(" GitHub ")]),e("v-btn",{attrs:{color:"error",text:""},on:{click:function(i){return t.updateSourceClick("github-clear")}}},[t._v(" 清除GitHub ")]),e("v-btn",{attrs:{color:"orange",text:""},on:{click:function(i){return t.updateSourceClick("hacs")}}},[t._v(" 安装HACS极速版 ")])],1)],1)],1)],1)},n=[],r=e("5530"),s=(e("ac1f"),e("5319"),e("2f62")),o={data:function(){return{mylist:[],list:[],pull:{domain:"",url:""},items:[{title:"github.com.cnpmjs.org",url:"github.com.cnpmjs.org"},{title:"hub.fastgit.org",url:"hub.fastgit.org"},{title:"ghproxy.com",url:"ghproxy.com/https://github.com"},{title:"github.com",url:"github.com"}]}},created:function(){var t=this;this.fetchApi({type:"gitee-list"}).then((function(i){var e=i.my,l=i.all;t.mylist=e,t.list=l}))},methods:Object(r["a"])(Object(r["a"])({},Object(s["b"])(["fetchApi"])),{},{gitClick:function(t){this.pullClick(this.pull,t)},pullClick:function(t,i){var e=this,l=t.domain,n=t.url;if(!l||!n)return this.$toast("请输入组件名称和项目地址");this.fetchApi({type:"update",domain:l,url:n.replace("https://github.com/","https://".concat(i,"/"))}).then((function(t){0===t.code&&e.$toast(t.msg)}))},updateSourceClick:function(t){var i=this;top.confirm("会修改系统里相关文件配置，不懂千万别确定")&&this.fetchApi({type:"update-source",url:t}).then((function(t){i.$toast(t.msg)}))}})},c=o,a=e("2877"),u=Object(a["a"])(c,l,n,!1,null,"8fd1dca4",null);i["default"]=u.exports}}]);