(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213ebd"],{af79:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v(" 下载网络文件 ")]),a("v-card-text",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.saveClick.apply(null,arguments)}}},[a("v-text-field",{attrs:{label:"URL地址",autofocus:!0},model:{value:t.url,callback:function(e){t.url="string"===typeof e?e.trim():e},expression:"url"}})],1),a("span",{staticClass:"red--text"},[t._v(" 警告：大文件、资源加载慢等链接可能会导致主程序卡死，也就是说HA会搞崩溃，使用前请先确定？")])],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.saveClick}},[t._v(" 下载到当前文件夹 ")])],1)],1)],1)},l=[],o=a("5530"),r=(a("a15b"),a("2f62")),s={data:function(){return{dialog:!1,url:""}},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["fetchApi"])),{},{show:function(){this.url="",this.dialog=!0},saveClick:function(){var t=this,e=this.url;if(!e)return this.$toast("请输入下载地址");var a=this.$store.state.filePathList;console.log(a),this.fetchApi({type:"download-url",path:a.join("/"),url:e}).then((function(e){var i=e.msg,l=e.code;t.$toast(i),0===l&&(t.dialog=!1,t.$store.dispatch("getFileList",a))}))}})},n=s,c=a("2877"),u=Object(c["a"])(n,i,l,!1,null,null,null);e["default"]=u.exports}}]);