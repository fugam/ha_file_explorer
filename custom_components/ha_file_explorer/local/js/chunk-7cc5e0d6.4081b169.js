(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cc5e0d6"],{1572:function(t,e,i){"use strict";var s=i("f7d3");e["a"]=s["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:s["a"].options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}})},"19cc":function(t,e,i){"use strict";i("aed2");var s=i("f7d3"),n=i("2491");e["a"]=Object(n["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},"45b0":function(t,e,i){},"4b29":function(t,e,i){"use strict";var s=i("430a");e["a"]=s["a"].extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}})},5543:function(t,e,i){},"689b":function(t,e,i){"use strict";i("45b0");var s=i("1572"),n=i("95f8"),a=i("80fb"),o=i("238b"),l=i("1c29"),r=i("4b29"),c=i("e0d6"),h=i("0992"),d=i("f7d3"),u=i("274a"),v=i("0bb1"),m=i("2491"),f=i("e466"),p=i("d2bb");const g=Object(m["a"])(o["a"],a["a"],l["a"],r["a"],c["a"],h["a"],d["a"]);e["a"]=g.extend({name:"v-menu",directives:{ClickOutside:u["a"],Resize:v["a"]},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(p["g"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":Object(p["g"])(this.maxHeight);return t||"0"},calculatedMaxWidth(){return Object(p["g"])(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return Object(p["g"])(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(p["g"])(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?Object(p["g"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find(t=>t.tabIndex>-1))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=e.offsetTop-e.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(f["e"])("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame(()=>{this.startTransition().then(()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))})})},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==p["s"].tab){if(t.keyCode===p["s"].down)this.nextTile();else if(t.keyCode===p["s"].up)this.prevTile();else if(t.keyCode===p["s"].end)this.lastTile();else if(t.keyCode===p["s"].home)this.firstTile();else{if(t.keyCode!==p["s"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=n["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=l["a"].options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(t.on=t.on||{},t.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler(){this.runDelay("open",()=>{this.hasJustFocused||(this.hasJustFocused=!0)})},mouseLeaveHandler(t){this.runDelay("close",()=>{this.$refs.content.contains(t.relatedTarget)||requestAnimationFrame(()=>{this.isActive=!1,this.callDeactivate()})})},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile(){const t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile(){const t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown(t){if(t.keyCode===p["s"].esc){setTimeout(()=>{this.isActive=!1});const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}else!this.isActive&&[p["s"].up,p["s"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick(()=>this.changeListIndex(t))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent(()=>[this.$createElement(s["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])])])}})},aed2:function(t,e,i){},e283:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("HeaderPanel"),i("v-card",{attrs:{elevation:"2"}},[i("FilePathNav"),i("v-divider"),t.moveFile.name?[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"orange lighten-1",attrs:{dark:""}},[t._v(" mdi-file-lock ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.moveFile.name))]),i("v-list-item-subtitle",[i("span",{staticClass:"font-weight-light"},[t._v("文件路径："+t._s(t.moveFile.path))]),i("br"),i("span",{staticClass:"text--disabled"},[t._v("注意：切换到对应目录后，点击移动文件小图标")])])],1),i("v-list-item-action",[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.moveFileToClick}},"v-btn",n,!1),s),[i("v-icon",{attrs:{color:"orange lighten-1"}},[t._v("mdi-file-move")])],1)]}}],null,!1,2520716464)},[i("span",[t._v("移动到当前目录")])])],1)],1),i("v-divider")]:t._e(),i("v-list",{attrs:{subheader:"","two-line":""}},[t.folderList.length>0?i("v-subheader",{staticClass:"pointer",class:{fold:!t.showFolder},attrs:{inset:""},on:{click:function(e){t.showFolder=!t.showFolder}}},[t._v("文件夹")]):t._e(),t._l(t.folderList,(function(e){return i("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.showFolder,expression:"showFolder"}],key:e.name},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}}),i("v-list-item-subtitle",[i("span",{staticClass:"text--disabled"},[t._v(t._s(e.edit))]),e.sizeName?i("span",{staticClass:"font-weight-light"},[t._v(" — "+t._s(e.sizeName))]):t._e()])],1),i("v-list-item-action",[i("v-btn",{attrs:{icon:""},on:{click:function(i){return t.openFolder(e)}}},[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-folder-open")])],1)],1)],1)})),t.folderList.length>0?i("v-divider",{attrs:{inset:""}}):t._e(),t.fileList.length>0?i("v-subheader",{staticClass:"pointer",class:{fold:!t.showFile},attrs:{inset:""},on:{click:function(e){t.showFile=!t.showFile}}},[t._v("文件列表")]):t._e(),t._l(t.fileList,(function(e){return i("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.showFile,expression:"showFile"}],key:e.name},[i("v-list-item-avatar",[i("v-icon",{class:e.color,attrs:{dark:""},domProps:{textContent:t._s(e.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}}),i("v-list-item-subtitle",[i("span",{staticClass:"text--disabled"},[t._v(t._s(e.edit))]),e.sizeName?i("span",{staticClass:"font-weight-light"},[t._v(" — "+t._s(e.sizeName))]):t._e()])],1),i("v-list-item-action",[i("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",n,!1),s),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[i("v-list",["www"===t.filePathList[0]?i("v-list-item",{attrs:{href:t.getLink(e),target:"_blank"}},[i("v-list-item-title",[t._v("打开")])],1):t._e(),i("v-list-item",{on:{click:function(i){return t.editClick(e)}}},[i("v-list-item-title",[t._v("编辑")])],1),i("v-list-item",{on:{click:function(i){return t.renameClick(e)}}},[i("v-list-item-title",[t._v("重命名")])],1),i("v-list-item",{on:{click:function(i){return t.deleteClick(e)}}},[i("v-list-item-title",[t._v("删除")])],1),i("v-list-item",{on:{click:function(i){return t.moveFileClick(e)}}},[i("v-list-item-title",[t._v("移动到...")])],1),/.+\.zip$/.test(e.name)?i("v-list-item",{on:{click:function(i){return t.unzipClick(e)}}},[i("v-list-item-title",[t._v("解压到当前文件夹")])],1):t._e(),i("v-divider"),i("v-list-item",{on:{click:function(i){return t.downloadFileClick(e)}}},[i("v-list-item-title",[t._v("下载文件")])],1),i("v-divider"),i("v-list-item",{on:{click:function(i){return t.uploadQnClick(e)}}},[i("v-list-item-title",[t._v("上传此文件到七牛云")])],1)],1)],1)],1)],1)}))],2)],2),i("RenameFile",{ref:"RenameFile"})],1)},n=[],a=i("1c03"),o=(i("147f"),i("3261"),i("ddef"),i("389c"),i("f18c"),i("28df"),i("7736")),l={components:{HeaderPanel:function(){return i.e("chunk-2d0daf50").then(i.bind(null,"6e8c"))},FilePathNav:function(){return i.e("chunk-35d96bf8").then(i.bind(null,"0412"))},RenameFile:function(){return Promise.all([i.e("chunk-6fbb8d7f"),i.e("chunk-543c295d")]).then(i.bind(null,"b3b4"))}},data:function(){return{showFolder:!0,showFile:!0,folders:[{title:"测试",subtitle:"相关信息"}],files:[{title:"测试",subtitle:"相关信息",icon:"mdi-information",color:"red"}],moveFile:{name:"",path:""}}},computed:Object(o["e"])(["filePathList","fileList","folderList"]),created:function(){this.initData()},methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["getFileList","fetchApi","operationFile","refreshFileList"])),{},{initData:function(){this.getFileList([])},getLink:function(t){var e=t.name,i=this.filePathList,s=JSON.parse(JSON.stringify(i));return s[0]="local","/".concat(s.join("/"),"/").concat(e)},openFolder:function(t){var e=this.filePathList;e.push(t.name),this.getFileList(e)},editClick:function(t){var e=t.name;this.$router.push({name:"editFile",params:{name:e}})},deleteClick:function(t){var e=t.name;top.confirm("确定删除文件【".concat(e,"】？"))&&this.operationFile({type:"delete",name:e})},moveFileClick:function(t){var e=t.name;this.moveFile={name:e,path:this.$store.getters.getFilePath(e)},document.body.scrollIntoView()},moveFileToClick:function(){var t=this,e=this.moveFile,i=e.name,s=e.path;this.fetchApi({type:"move-file",url:s,path:this.$store.getters.getFilePath(i)}).then((function(e){var i=e.code,s=e.msg;0==i&&(t.moveFile={name:"",path:""}),t.$toast(s),t.refreshFileList()}))},unzipClick:function(t){var e=this,i=t.name;top.confirm("警告：请确定知道这个功能怎么使用？")&&this.fetchApi({type:"unzip",path:this.$store.getters.getFilePath(i)}).then((function(t){var i=t.msg;e.$toast(i),e.refreshFileList()}))},downloadFileClick:function(t){var e=this,i=t.name;this.fetchApi({type:"download-file",path:this.$store.getters.getFilePath(i)}).then((function(t){var i=t.msg;e.$toast(i)}))},uploadQnClick:function(t){var e=this,i=t.name;this.fetchApi({type:"qn-upload",path:this.$store.getters.getFilePath(i)}).then((function(t){var i=t.msg;e.$toast(i)}))},renameClick:function(t){var e=t.name;this.$refs["RenameFile"].show(e)}})},r=l,c=(i("fa57"),i("4ac2")),h=i("7aad"),d=i.n(h),u=i("0199"),v=i("8f7f"),m=i("0d12"),f=i("1809"),p=i("2eda"),g=i("1a1a"),b=i("7fe4"),k=i("df1d"),C=i("527e"),x=i("4c42"),_=i("689b"),T=i("19cc"),w=i("6fac"),F=Object(c["a"])(r,s,n,!1,null,"3b754d25",null);e["default"]=F.exports;d()(F,{VBtn:u["a"],VCard:v["a"],VContainer:m["a"],VDivider:f["a"],VIcon:p["a"],VList:g["a"],VListItem:b["a"],VListItemAction:k["a"],VListItemAvatar:C["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VMenu:_["a"],VSubheader:T["a"],VTooltip:w["a"]})},fa57:function(t,e,i){"use strict";i("5543")}}]);
//# sourceMappingURL=chunk-7cc5e0d6.4081b169.js.map