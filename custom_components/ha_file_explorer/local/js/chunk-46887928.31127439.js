(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46887928"],{"0fb4":function(t,e,i){"use strict";var s=i("baaa"),n=i("1b73"),a=i("b9ec"),o=i("6f63"),l=i("feee"),r=i("f219"),c=i("d1cd"),h=i("1dfa"),u=i("eeea"),d=i("01e4"),f=i("c4ec").f,v=i("4c65").f,m=i("eb5b").f,p=i("f8a3").trim,g="Number",b=n[g],x=b.prototype,T=r(d(x))==g,A=function(t){var e,i,s,n,a,o,l,r,c=h(t,!1);if("string"==typeof c&&c.length>2)if(c=p(c),e=c.charCodeAt(0),43===e||45===e){if(i=c.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+c}for(a=c.slice(2),o=a.length,l=0;l<o;l++)if(r=a.charCodeAt(l),r<48||r>n)return NaN;return parseInt(a,s)}return+c};if(a(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var I,y=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof y&&(T?u((function(){x.valueOf.call(i)})):r(i)!=g)?c(new b(A(e)),i,y):A(e)},k=s?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;k.length>C;C++)l(b,I=k[C])&&!l(y,I)&&m(y,I,v(b,I));y.prototype=x,x.constructor=y,o(n,g,y)}},1572:function(t,e,i){"use strict";var s=i("f7d3");e["a"]=s["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:s["a"].options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}})},"19cc":function(t,e,i){"use strict";i("aed2");var s=i("f7d3"),n=i("2491");e["a"]=Object(n["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},"45b0":function(t,e,i){},"4b29":function(t,e,i){"use strict";var s=i("430a");e["a"]=s["a"].extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}})},"689b":function(t,e,i){"use strict";i("45b0");var s=i("1572"),n=i("95f8"),a=i("80fb"),o=i("238b"),l=i("1c29"),r=i("4b29"),c=i("e0d6"),h=i("0992"),u=i("f7d3"),d=i("274a"),f=i("0bb1"),v=i("2491"),m=i("e466"),p=i("d2bb");const g=Object(v["a"])(o["a"],a["a"],l["a"],r["a"],c["a"],h["a"],u["a"]);e["a"]=g.extend({name:"v-menu",directives:{ClickOutside:d["a"],Resize:f["a"]},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(p["g"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":Object(p["g"])(this.maxHeight);return t||"0"},calculatedMaxWidth(){return Object(p["g"])(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return Object(p["g"])(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(p["g"])(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?Object(p["g"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find(t=>t.tabIndex>-1))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=e.offsetTop-e.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame(()=>{this.startTransition().then(()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))})})},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==p["s"].tab){if(t.keyCode===p["s"].down)this.nextTile();else if(t.keyCode===p["s"].up)this.prevTile();else if(t.keyCode===p["s"].end)this.lastTile();else if(t.keyCode===p["s"].home)this.firstTile();else{if(t.keyCode!==p["s"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=n["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=l["a"].options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(t.on=t.on||{},t.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler(){this.runDelay("open",()=>{this.hasJustFocused||(this.hasJustFocused=!0)})},mouseLeaveHandler(t){this.runDelay("close",()=>{this.$refs.content.contains(t.relatedTarget)||requestAnimationFrame(()=>{this.isActive=!1,this.callDeactivate()})})},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile(){const t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile(){const t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown(t){if(t.keyCode===p["s"].esc){setTimeout(()=>{this.isActive=!1});const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}else!this.isActive&&[p["s"].up,p["s"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick(()=>this.changeListIndex(t))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent(()=>[this.$createElement(s["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])])])}})},8221:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},aed2:function(t,e,i){},d1cd:function(t,e,i){var s=i("4ce1"),n=i("eef6");t.exports=function(t,e,i){var a,o;return n&&"function"==typeof(a=e.constructor)&&a!==i&&s(o=a.prototype)&&o!==i.prototype&&n(t,o),t}},f122:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("AppBar",{attrs:{color:"deep-purple",title:"云备份"}}),i("v-card",{attrs:{elevation:"2"}},[i("div",{staticStyle:{padding:"0 10px"}},[i("v-text-field",{attrs:{label:"搜索前缀"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loadData.apply(null,arguments)}},model:{value:t.name,callback:function(e){t.name="string"===typeof e?e.trim():e},expression:"name"}})],1),i("v-list",{attrs:{subheader:"","two-line":""}},[i("v-subheader",{attrs:{inset:""},on:{click:t.loadData}},[t._v("文件列表")]),t._l(t.fileList,(function(e){return i("v-list-item",{key:e.name},[i("v-list-item-avatar",[i("v-icon",{class:e.color,attrs:{dark:""},domProps:{textContent:t._s(e.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.name.replace("HomeAssistant/","")))]),i("v-list-item-subtitle",[i("span",{staticClass:"text--disabled"},[t._v(t._s(e.edit))]),i("span",{staticClass:"font-weight-light"},[t._v(" — "+t._s(t._f("fileSizeFormat")(e.sizeName)))])])],1),i("v-list-item-action",[i("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",n,!1),s),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[i("v-list",[i("v-list-item",{on:{click:function(i){return t.restoreClick(e)}}},[i("v-list-item-title",[t._v("还原")])],1),i("v-list-item",{on:{click:function(i){return t.deleteClick(e)}}},[i("v-list-item-title",[t._v("删除")])],1),i("v-list-item",{attrs:{href:e.url,target:"_blank"}},[i("v-list-item-title",[t._v("下载文件")])],1)],1)],1)],1)],1)}))],2)],1),i("RestoreDialog",{ref:"RestoreDialog"})],1)},n=[],a=i("1c03"),o=(i("147f"),i("3261"),i("ddef"),i("389c"),i("5580"),i("0fb4"),i("f18c"),i("7736")),l={components:{RestoreDialog:function(){return i.e("chunk-1655e5b6").then(i.bind(null,"b828"))}},data:function(){return{fileList:[],name:""}},activated:function(){this.loadData()},methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["fetchApi"])),{},{loadData:function(){var t=this;this.fetchApi({type:"qn-list",name:this.name}).then((function(e){var i=e.data;console.log(i),t.fileList=i.list.items.map((function(t){return{name:t.key,edit:new Date(Number(String(t.putTime).substr(0,13))).toLocaleString(),sizeName:t.fsize,color:"blue",icon:"mdi-file",url:"".concat(i.download).concat(t.key)}}))}))},restoreClick:function(t){console.log(t),this.$refs["RestoreDialog"].show(t.url)},deleteClick:function(t){var e=this;this.fetchApi({type:"qn-delete",key:t.name}).then((function(t){var i=t.msg;e.$toast(i),e.loadData()}))}})},r=l,c=i("4ac2"),h=i("7aad"),u=i.n(h),d=i("0199"),f=i("8f7f"),v=i("0d12"),m=i("2eda"),p=i("1a1a"),g=i("7fe4"),b=i("df1d"),x=i("527e"),T=i("4c42"),A=i("689b"),I=i("19cc"),y=i("7f13"),k=Object(c["a"])(r,s,n,!1,null,"c95bc0de",null);e["default"]=k.exports;u()(k,{VBtn:d["a"],VCard:f["a"],VContainer:v["a"],VIcon:m["a"],VList:p["a"],VListItem:g["a"],VListItemAction:b["a"],VListItemAvatar:x["a"],VListItemContent:T["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VMenu:A["a"],VSubheader:I["a"],VTextField:y["a"]})},f8a3:function(t,e,i){var s=i("8a56"),n=i("8221"),a="["+n+"]",o=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),r=function(t){return function(e){var i=String(s(e));return 1&t&&(i=i.replace(o,"")),2&t&&(i=i.replace(l,"")),i}};t.exports={start:r(1),end:r(2),trim:r(3)}}}]);
//# sourceMappingURL=chunk-46887928.31127439.js.map