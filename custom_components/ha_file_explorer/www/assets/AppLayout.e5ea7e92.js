var g=Object.defineProperty,k=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var d=(e,o,t)=>o in e?g(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,r=(e,o)=>{for(var t in o||(o={}))y.call(o,t)&&d(e,t,o[t]);if(_)for(var t of _(o))B.call(o,t)&&d(e,t,o[t]);return e},p=(e,o)=>k(e,C(o));import{m as x,s as $,q as E,d as Q,a as s,o as N,f as S,b as a,w as n,v as l,e as u,x as V,y as z,h as c}from"./index.94e53bf8.js";const D={class:"wrapper"},q=u("div",{class:"spacer"},null,-1),A=c("\u5B9E\u4F53"),F=c("\u547D\u4EE4"),L={id:"va-app-bar-shadow"},M={computed:r({},x(["loading"])),methods:{showQuickBarClick(e){$(e)},menuClick(){E()}}},G=Q(p(r({},M),{setup(e){return(o,t)=>{const m=s("mdi-icon"),i=s("va-button"),v=s("va-button-group"),h=s("va-button-dropdown"),w=s("va-app-bar"),f=s("va-progress-bar");return N(),S("div",D,[a(w,{"shadow-on-scroll":"","shadow-color":"primary",target:"#va-app-bar-shadow",style:{"z-index":"1","--va-app-bar-height":"56px"}},{default:n(()=>[a(i,{round:!0,onClick:o.menuClick,style:{"margin-left":"10px"}},{default:n(()=>[a(m,{name:"mdi-home-assistant",style:{color:"white"}})]),_:1},8,["onClick"]),l(o.$slots,"left"),q,l(o.$slots,"right"),a(h,{style:{"margin-right":"10px"}},{default:n(()=>[a(v,null,{default:n(()=>[a(i,{onClick:t[0]||(t[0]=b=>o.showQuickBarClick("e"))},{default:n(()=>[A]),_:1}),a(i,{onClick:t[1]||(t[1]=b=>o.showQuickBarClick("c"))},{default:n(()=>[F]),_:1})]),_:1})]),_:1})]),_:3}),u("div",L,[l(o.$slots,"default"),V(a(f,{indeterminate:"",style:{position:"fixed",bottom:"0",left:"0",width:"100%","z-index":"2"}},null,512),[[z,o.loading]])])])}}}));export{G as _};
