(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,5],{472:function(e,n,t){var content=t(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(17).default)("077501e4",content,!0,{sourceMap:!1})},473:function(e,n,t){"use strict";t(472)},474:function(e,n,t){var o=t(16)(!1);o.push([e.i,".v-card__title{word-break:normal}div.section-title{color:#fff;border-radius:0!important;align-items:center;width:50%;text-align:right}div.section-title,div.section-title content{text-transform:uppercase}",""]),e.exports=o},475:function(e,n,t){"use strict";t.r(n);t(30),t(172);var o={props:{title:{type:String,default:""},isSession:{type:Boolean,default:!1},isSatellite:{type:Boolean,default:!1},nextSatellite:{type:Boolean,default:!1},previous:{type:String,default:""},next:{type:String,default:""},nextName:{type:String,default:""},previousName:{type:String,default:""}},data:function(){return{expand:!1,searchString:""}},computed:{returnTooltip:function(){return this.previousName.length>0?"Back to "+this.previousName:"Back to the program"}},mounted:function(){},methods:{showInput:function(){var e=this;this.expand=!0,this.$nextTick((function(){e.focusInput()}))},focusInput:function(){this.$refs.search.focus()},onClickOutside:function(){this.expand=!1}}},r=(t(473),t(38)),l=t(71),c=t.n(l),v=t(129),h=t(90),d=t(205),x=t(528),f=t(471),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"d-flex justify-space-between mb-12 mt-3"},[e.isSession?t("div",{staticClass:"d-flex section-title justify-space-between",style:"background-color:"+(e.isSatellite?"#fba421":e.$vuetify.theme.themes.light.primary)+";width:"+(e.$vuetify.breakpoint.mdAndUp?"50%;":"auto;")},[t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("v-btn",e._g(e._b({attrs:{text:"",icon:"","x-large":"",to:e.previous,nuxt:""}},"v-btn",r,!1),o),[t("v-icon",{attrs:{color:"white","x-large":""}},[e._v("mdi-chevron-left")])],1)]}}],null,!1,89319704)},[e._v(" "),t("span",[e._v(e._s(e.returnTooltip))])]),e._v(" "),t("div",{staticClass:"content text-h4 pa-3 mr-2",domProps:{textContent:e._s(e.title)}})],1):t("div",{staticClass:"section-title",style:"background-color:"+e.$vuetify.theme.themes.light.primary+";width:"+(e.$vuetify.breakpoint.mdAndUp?"50%;":"100%;")},[t("div",{staticClass:"content text-h4 pa-3 mr-2",domProps:{textContent:e._s(e.title)}})]),e._v(" "),e.isSession&&e.next.length?t("div",{staticClass:"d-flex align-center"},[t("v-btn",{staticClass:"text-h4 py-8 my-0",style:"color:"+(e.nextSatellite?"#fba421":e.$vuetify.theme.themes.light.primary)+"!important",attrs:{text:"","x-large":"",to:e.next,nuxt:""}},[e._v(e._s(e.nextName)+" "),t("v-icon",{attrs:{right:"","x-large":""}},[e._v("mdi-chevron-right")])],1)],1):e._e(),e._v(" "),["program","fellows","mentors"].includes(e.$route.name)?t("div",{staticClass:"d-flex"},[t("v-expand-x-transition",[t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("v-btn",e._g(e._b({directives:[{name:"show",rawName:"v-show",value:!e.expand,expression:"!expand"}],staticClass:"text-h4 py-8 my-0",attrs:{text:"",nuxt:""},on:{click:function(n){return e.showInput()}}},"v-btn",r,!1),o),[t("v-icon",{attrs:{large:"",color:e.$vuetify.theme.themes.light.primary}},[e._v("mdi-magnify")])],1)]}}],null,!1,3087914956)},[e._v(" "),t("span",[e._v("Search in the program")])])],1),e._v(" "),t("v-expand-x-transition",[t("v-text-field",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"search",style:"max-width:"+(e.expand?"300px":"0px")+";",attrs:{height:"64",large:"",placeholder:"Search",outlined:"","prepend-inner-icon":"mdi-magnify",color:e.$vuetify.theme.themes.light.primary,"hide-details":"",clearable:""},on:{keyup:function(n){return e.$emit("search",e.searchString)},keydown:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"esc",27,n.key,["Esc","Escape"]))return null;n.preventDefault(),e.expand=!1,e.$emit("esc")},"click:clear":function(n){e.expand=!1,e.$emit("esc")}},model:{value:e.searchString,callback:function(n){e.searchString=n},expression:"searchString"}})],1)],1):e._e()])}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:v.a,VExpandXTransition:h.b,VIcon:d.a,VTextField:x.a,VTooltip:f.a})},480:function(e,n,t){var content=t(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(17).default)("48751daa",content,!0,{sourceMap:!1})},481:function(e,n,t){var o=t(16)(!1);o.push([e.i,'.v-card__title{word-break:normal}.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.16}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.32}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',""]),e.exports=o},486:function(e,n,t){"use strict";t.r(n);t(305),t(30),t(77),t(47);var o={props:{mentor:{type:Boolean,default:!1},item:{type:Object,default:function(){}},search:{type:String,default:""}},data:function(){return{}},computed:{},mounted:function(){},methods:{highlight:function(e,n){var t=new RegExp(n,"ig");return e.replace(t,(function(e,a,b){return'<strong style="color: darkslategray;background-color: yellow;">'+e+"</strong>"}))},getSocials:function(e){var n=[];e.website&&n.push({link:e.website,icon:"mdi-link-variant",tooltip:"Visit this "+(this.mentor?"mentor":"fellow")+" website"}),e.wikipedia&&n.push({link:e.wikipedia,icon:"mdi-wikipedia",tooltip:"Check the Wikipedia page of the "+(this.mentor?"mentor":"fellow")}),e.linkedin&&n.push({link:e.linkedin,icon:"mdi-linkedin",tooltip:"Get in touch on Linkedin"}),e.twitter&&n.push({link:e.twitter,icon:"mdi-twitter",tooltip:"Follow this "+(this.mentor?"mentor":"fellow")+" on Twitter"})}}},r=t(38),l=t(71),c=t.n(l),v=t(213),h=t(129),d=t(461),x=(t(5),t(4),t(7),t(10),t(3),t(11),t(0)),f=t(99),m=t(138),y=t(1),_=t(6);function w(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var k=Object(_.a)(Object(f.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(m.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(n){Object(x.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(y.l)(this))}}),O=t(90),j=t(140),P=t(26),C=Object(_.a)(j.a,P.a,Object(m.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel")).extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(O.a,this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(y.l)(n))])]})))}}),S=t(76),$=t(100);function B(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function A(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(n){Object(x.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var D=Object(_.a)(P.a,Object(m.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel")).extend().extend({name:"v-expansion-panel-header",directives:{ripple:$.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(y.l)(this,"actions")||[this.$createElement(S.a,this.expandIcon)];return this.$createElement(O.c,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:A(A({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(y.l)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),E=(t(173),t(480),t(70)),V=t(12);function I(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function M(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(n){Object(x.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var T=E.a.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return M(M({},E.a.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(V.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(V.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),o=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(o)}}}),R=t(205),z=t(465),H=t(471),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-row",{staticClass:"mt-12 mx-6",class:{"mx:6":e.$vuetify.breakpoint.mdAndUp}},[e.$vuetify.breakpoint.mdAndUp?t("v-col",{staticClass:"d-flex flex-column align-center",attrs:{cols:"3","col-md-offset":"1",justify:"center",align:"center"}},[t("v-avatar",{staticClass:"mb-3",attrs:{size:"160"}},[e.item.image?t("img",{attrs:{alt:"Avatar",src:e.item.image}}):t("v-icon",{staticClass:"white--text headline",style:"background-color:"+e.$vuetify.theme.themes.light.primary+"; font-style: normal;"},[e._v(e._s(e.item.firstname[0]+e.item.lastname[0]))])],1),e._v(" "),t("div",{staticClass:"flex-row justify-center"},[e.item.wikipedia?t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("v-btn",e._g(e._b({attrs:{icon:"",text:"",href:e.item.wikipedia,target:"_blank"}},"v-btn",r,!1),o),[t("v-icon",[e._v("mdi-wikipedia")])],1)]}}],null,!1,1139077672)},[e._v(" "),t("span",[e._v("Check the Wikipedia page of the "+e._s(e.mentor?"mentor":"fellow")+"\n        ")])]):e._e(),e._v(" "),e.item.linkedin?t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("v-btn",e._g(e._b({attrs:{icon:"",text:"",href:e.item.linkedin,target:"_blank"}},"v-btn",r,!1),o),[t("v-icon",[e._v("mdi-linkedin")])],1)]}}],null,!1,915892520)},[e._v(" "),t("span",[e._v("Get in touch on Linkedin")])]):e._e(),e._v(" "),e.item.twitter?t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("v-btn",e._g(e._b({attrs:{icon:"",text:"",href:e.item.twitter,target:"_blank"}},"v-btn",r,!1),o),[t("v-icon",[e._v("mdi-twitter")])],1)]}}],null,!1,988693416)},[e._v(" "),t("span",[e._v("Follow this "+e._s(e.mentor?"mentor":"fellow")+" on Twitter")])]):e._e()],1)],1):e._e(),e._v(" "),t("v-col",{attrs:{cols:"12",md:"8"}},[t("div",{staticClass:"text-h5 font-weight-black",domProps:{innerHTML:e._s(e.highlight(e.item.firstname+" "+e.item.lastname,e.search))}}),e._v(" "),t("div",{staticClass:"text-h6 mb-3",domProps:{innerHTML:e._s(e.highlight(e.item.title_and_institution,e.search))}}),e._v(" "),e.$vuetify.breakpoint.smAndDown?t("div",{staticClass:"flex-row justify-center mb-6"},[e.item.wikipedia?t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return e._l(e.getSocials(e.item),(function(n){return t("v-btn",e._g(e._b({key:n.link,attrs:{icon:"",text:"",href:e.socail.link,target:"_blank"}},"v-btn",r,!1),o),[t("v-icon",[e._v(e._s(n.icon))])],1)}))}}],null,!1,852153323)},[e._v(" "),t("span",[e._v(e._s(e.social.tooltip)+" ")])]):e._e()],1):e._e(),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.highlight(e.item.presentation,e.search))}}),e._v(" "),e.item.copyright?t("small",{staticClass:"muted caption"},[e._v("Image of © "+e._s(e.item.copyright))]):e._e(),e._v(" "),e.mentor?t("v-expansion-panels",{staticClass:"mt-6"},[t("v-expansion-panel",[t("v-expansion-panel-header",[e._v(" References ")]),e._v(" "),t("v-expansion-panel-content",[t("nuxt-content",{attrs:{document:e.item}})],1)],1)],1):e._e()],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VAvatar:v.a,VBtn:h.a,VCol:d.a,VExpansionPanel:k,VExpansionPanelContent:C,VExpansionPanelHeader:D,VExpansionPanels:T,VIcon:R.a,VRow:z.a,VTooltip:H.a})},533:function(e,n,t){"use strict";t.r(n);var o=t(18),r=(t(30),t(172),t(53),{asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function n(){var t,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.app,t=e.$content,n.next=3,t("Mentors").sortBy("slug").fetch();case 3:return o=n.sent,n.abrupt("return",{mentors:o});case 5:case"end":return n.stop()}}),n)})))()},data:function(){return{searching:!1,searchString:"",results:[]}},watch:{searchString:function(e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}n.searching=!1,t.next=8;break;case 4:return n.searching=!0,t.next=7,n.$content("Mentors").sortBy("start_date_and_time","asc").search(e).fetch();case 7:n.results=t.sent;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){}}),l=t(38),c=t(71),v=t.n(c),h=t(129),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"my-9"},[t("TitleBlock",{attrs:{title:"Mentors","search-string":e.searchString},on:{search:function(n){e.searchString=n},esc:function(n){e.searchString=""}}}),e._v(" "),e.searching?[e.results.length>0?t("div",{staticClass:"overline"},[e._v('\n      Searching for "'+e._s(e.searchString)+'" - '+e._s(e.results.length)+"\n      "+e._s(e.results.length>1?"results":"result")+"\n    ")]):t("div",{staticClass:"overline text-h6 d-flex flex-column align-center"},[t("div",[e._v('No result found mathing "'+e._s(e.searchString)+'"')]),e._v(" "),t("v-btn",{staticClass:"mt-3",attrs:{outlined:""},on:{click:function(n){e.searchString=""}}},[e._v("Cancel my search")])],1),e._v(" "),e._l(e.results,(function(n,o){return t("people-block",{key:o,attrs:{item:n,search:e.searchString}})}))]:e._l(e.mentors,(function(e,n){return[t("people-block",{key:n,attrs:{item:e,mentor:""}})]}))],2)}),[],!1,null,null,null);n.default=component.exports;v()(component,{TitleBlock:t(475).default,PeopleBlock:t(486).default}),v()(component,{VBtn:h.a})}}]);