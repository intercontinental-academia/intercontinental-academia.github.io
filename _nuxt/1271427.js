(window.webpackJsonp=window.webpackJsonp||[]).push([[23,7,8,10,12,13],{511:function(t,e,n){var content=n(514);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("077501e4",content,!0,{sourceMap:!1})},512:function(t,e,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("19ae6984",content,!0,{sourceMap:!1})},513:function(t,e,n){"use strict";n(511)},514:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.nuxt-content ul{padding-bottom:1rem}div.section-title{color:#fff;border-radius:0!important;align-items:center;width:50%;text-align:right}div.section-title,div.section-title content{text-transform:uppercase}",""]),t.exports=r},515:function(t,e,n){"use strict";n.r(e);n(30),n(185);var r={props:{title:{type:String,default:""},isSession:{type:Boolean,default:!1},isSatellite:{type:Boolean,default:!1},nextSatellite:{type:Boolean,default:!1},previous:{type:String,default:""},next:{type:String,default:""},nextName:{type:String,default:""},previousName:{type:String,default:""}},data:function(){return{expand:!1,searchString:""}},computed:{returnTooltip:function(){return this.previousName.length>0?"Back to "+this.previousName:"Back to the program"}},mounted:function(){},methods:{showInput:function(){var t=this;this.expand=!0,this.$nextTick((function(){t.focusInput()}))},focusInput:function(){this.$refs.search.focus()},onClickOutside:function(){this.expand=!1}}},o=(n(513),n(44)),c=n(88),l=n.n(c),h=n(142),v=n(100),d=n(220),f=n(596),m=n(506),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-space-between mb-12 mt-3"},[t.isSession?n("div",{staticClass:"d-flex section-title justify-space-between",style:"background-color:"+(t.isSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"auto;")},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:"","x-large":"",to:t.previous,nuxt:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"white","x-large":""}},[t._v("mdi-chevron-left")])],1)]}}],null,!1,89319704)},[t._v(" "),n("span",[t._v(t._s(t.returnTooltip))])]),t._v(" "),n("div",{staticClass:"content pa-3 mr-2",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",domProps:{textContent:t._s(t.title)}})],1):n("div",{staticClass:"section-title",style:"background-color:"+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"100%;")},[n("div",{staticClass:"content pa-3 mr-2",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",domProps:{textContent:t._s(t.title)}})]),t._v(" "),t.isSession&&t.next.length?n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"py-8 my-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",style:"color:"+(t.nextSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+"!important",attrs:{text:"","x-large":"",to:t.next,nuxt:""}},[t._v(t._s(t.nextName)+" "),n("v-icon",{attrs:{right:"","x-large":""}},[t._v("mdi-chevron-right")])],1)],1):t._e(),t._v(" "),["program","fellows","mentors","blog","blog-page-page"].includes(t.$route.name)?n("div",{staticClass:"d-flex"},[n("v-expand-x-transition",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:!t.expand,expression:"!expand"}],staticClass:"py-8 my-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",attrs:{text:"",nuxt:""},on:{click:function(e){return t.showInput()}}},"v-btn",o,!1),r),[n("v-icon",{attrs:{large:"",color:t.$vuetify.theme.themes.light.primary}},[t._v("mdi-magnify")])],1)]}}],null,!1,2453248715)},[t._v(" "),n("span",[t._v("Search in the program")])])],1),t._v(" "),n("v-expand-x-transition",[n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"search",style:"max-width:"+(t.expand?"300px":"0px")+";",attrs:{height:"64",large:"",placeholder:"Search",outlined:"","prepend-inner-icon":"mdi-magnify",color:t.$vuetify.theme.themes.light.primary,"hide-details":"",clearable:""},on:{keyup:function(e){return t.$emit("search",t.searchString)},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;e.preventDefault(),t.expand=!1,t.$emit("esc")},"click:clear":function(e){t.expand=!1,t.$emit("esc")}},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VExpandXTransition:v.b,VIcon:d.a,VTextField:f.a,VTooltip:m.a})},516:function(t,e,n){"use strict";n(512)},517:function(t,e,n){var r=n(13)(!1);r.push([t.i,".frame[data-v-0745fc3a]{display:flex;position:relative;overflow:hidden;width:100%;height:100%}.overlay[data-v-0745fc3a]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;z-index:2;justify-content:space-between}.v-image[data-v-0745fc3a]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-0745fc3a]{transform:scale(1.1);opacity:.8}",""]),t.exports=r},518:function(t,e,n){"use strict";n.r(e);var r={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting}}},o=n(44),c=n(237),l=n.n(c),h=n(154),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{ref:"ytPlayer",staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);e.default=component.exports;l()(component,{Intersect:h.a})},519:function(t,e,n){"use strict";n.r(e);n(20);var r={props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:""}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",modifiers:{format:"webp",quality:70,height:this.height,width:this.height*this.ratio}})}},mounted:function(){}},o=(n(516),n(44)),c=n(88),l=n.n(c),h=n(182),v=n(223),d=n(504),f=n(70),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frame"},[n("div",{staticClass:"overlay"},[t._t("default")],2),t._v(" "),t.src?n("v-img",t._b({attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size,height:t.height},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!1,4034393411)},"v-img",t.$attrs,!1)):n("v-sheet")],1)}),[],!1,null,"0745fc3a",null);e.default=component.exports;l()(component,{VImg:h.a,VProgressCircular:v.a,VRow:d.a,VSheet:f.a})},521:function(t,e,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("197fcea4",content,!0,{sourceMap:!1})},522:function(t,e,n){var r=n(13)(!1);r.push([t.i,'.v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.nuxt-content ul{padding-bottom:1rem}.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=r},526:function(t,e,n){var content=n(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("0f133c48",content,!0,{sourceMap:!1})},534:function(t,e,n){"use strict";n(6),n(5),n(10),n(4),n(11);var r=n(17),o=n(1),c=(n(8),n(521),n(7)),l=n(100),h=n(82),v=n(27),d=n(107),f=n(23),m=n(39),x=n(65),y=n(155),_=n(12);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(v.a,y.a,x.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return k(k(k(k({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(r.a)(e,2),o=n[0],c=n[1];t.$attrs.hasOwnProperty(o)&&Object(_.a)(o,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=k(k({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(o,data),e)}})},535:function(t,e,n){"use strict";n(526)},536:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.nuxt-content ul{padding-bottom:1rem}.highlight{background-color:#ff9}",""]),t.exports=r},538:function(t,e,n){"use strict";n.r(e);n(20),n(24),n(30),n(185),n(327),n(83),n(50);var r={props:{item:{type:Object,default:function(){}},session:{type:Object,default:function(){}},search:{type:String,default:""},index:{type:Number,default:1}},data:function(){return{}},computed:{titleData:function(){return this.highlight(this.item.time+" "+this.item.name,this.search)}},updated:function(){},methods:{highlight:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=new RegExp(e,"ig");return t.replace(n,(function(t,a,b){return'<strong style="color: darkslategray;background-color: yellow;">'+t+"</strong>"}))}}},o=(n(535),n(44)),c=n(88),l=n.n(c),h=n(142),v=n(224),d=n(57),f=n(534),m=n(499),x=n(495),y=n(220),_=n(504),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[["program"].includes(t.$route.name)&&0===t.index?n("div",[n("span",{staticClass:"text-h5 mt-6",domProps:{innerHTML:t._s(t.highlight(t.item.session.name,t.search))}}),t._v(" "),n("v-divider")],1):t._e(),t._v(" "),n("v-card",{staticClass:"my-12 mx-3"},[n("v-row",{staticClass:"justify-space-between pb-9"},[n("v-col",{staticClass:"justify-start align-start",attrs:{cols:"auto"}},[n("div",{staticClass:"headline program-item",style:"background-color:"+(t.item.public?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v("\n          "+t._s(t.item.date)+"\n        ")])]),t._v(" "),n("v-col",{staticClass:"align-end",attrs:{cols:"auto"}},[n("v-card-title",{staticClass:"align-end program-item headline",style:"background-color:"+(t.item.public?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v("["+t._s(t.session.location)+"]\n        ")])],1),t._v(" "),n("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"px-12":"px-3",attrs:{cols:"12"}},[n("v-card-text",[n("div",{staticClass:"text-h5 mb-6 font-weight-black"},[t.item.public?n("v-chip",{staticClass:"mr-2",attrs:{label:""}},[t._v(" PUBLIC ")]):t._e(),t._v("\n            "+t._s(t.item.time)+"\n            "),n("span",{domProps:{innerHTML:t._s(t.highlight(t.item.name,t.search))}})],1),t._v(" "),t.item.youtube_video_id?n("YoutubeEmbed",{staticClass:"mb-6",attrs:{yt:t.item.youtube_video_id}}):t._e(),t._v(" "),n("nuxt-content-highlight",{attrs:{document:t.item,"highlight-text":t.search}}),t._v(" "),n("div",{staticClass:"d-flex"},t._l(t.item.attachements,(function(e){return n("v-btn",{key:e,attrs:{href:e,target:"_blank"}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-file-pdf-box ")]),t._v("\n              "+t._s(e.substring(1))+"\n            ")],1)})),1),t._v(" "),t.item.apply_link?n("div",{staticClass:"d-flex justify-end"},[n("v-btn",{staticClass:"white--text font-weight-bold",attrs:{href:t.item.apply_link,target:"_blank",color:"#fba421"}},[t._v("\n              Subscribe!\n            ")])],1):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{YoutubeEmbed:n(518).default}),l()(component,{VBtn:h.a,VCard:v.a,VCardText:d.c,VCardTitle:d.d,VChip:f.a,VCol:m.a,VDivider:x.a,VIcon:y.a,VRow:_.a})},546:function(t,e,n){var content=n(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("45a554c6",content,!0,{sourceMap:!1})},550:function(t,e,n){"use strict";n.r(e);n(20);var r={props:{item:{type:Object,required:!0},index:{type:Number,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=n(44),c=n(88),l=n.n(c),h=n(224),v=n(57),d=n(499),f=n(504),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"my-12",attrs:{nuxt:"",to:"/program/"+t.item.slug}},[n("OptimizedImage",{staticClass:"white--text",attrs:{src:t.item.image,height:"500"}},[n("v-row",{staticClass:"justify-space-between align-end pb-9"},[n("v-col",{staticClass:"justify-start align-start",attrs:{cols:"auto"}},[n("v-card-title",{staticClass:"text-h4 text-uppercase program-item",style:"background-color:"+(t.item.satellite?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v(t._s(t.item.name))]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"headline program-item",style:"background-color:"+(t.item.satellite?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v("\n          "+t._s(t.item.date)+"\n        ")])],1),t._v(" "),n("v-col",{staticClass:"align-end",attrs:{cols:"auto"}},[n("v-card-title",{staticClass:"align-end program-item headline",style:"background-color:"+(t.item.satellite?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v("["+t._s(t.item.location)+"]")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{OptimizedImage:n(519).default}),l()(component,{VCard:h.a,VCardTitle:v.d,VCol:d.a,VRow:f.a})},570:function(t,e,n){"use strict";n(546)},571:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.nuxt-content ul{padding-bottom:1rem}.program-item{color:#fff!important;display:inline;padding:.5rem;-webkit-box-decoration-break:clone;box-decoration-break:clone}",""]),t.exports=r},601:function(t,e,n){"use strict";n.r(e);n(6),n(5),n(8),n(10),n(4),n(11);var r=n(1),o=n(18);n(30),n(185),n(51),n(72),n(64);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,n=t.$content,e.next=3,n("Programs").sortBy("_","desc").limit(1).fetch();case 3:return r=e.sent,o="content"+r[0].path+".md",e.next=7,n("Sessions").where({"related-program":o}).sortBy("start_date_and_time","asc").fetch();case 7:return c=e.sent,e.abrupt("return",{sessions:c,programs:r[0]});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{searching:!1,searchString:"",results:[]}},watch:{searchString:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=4;break}e.searching=!1,n.next=9;break;case 4:return e.searching=!0,n.next=7,e.$content("Meetings").sortBy("start_date_and_time","asc").search(t).fetch();case 7:r=n.sent,e.results=r.map((function(t){return l(l({},t),{},{session:e.sessions.find((function(e){return t["related-session"]==="content/Sessions/"+e.slug+".md"}))})}));case 9:case"end":return n.stop()}}),n)})))()}},mounted:function(){},methods:{}},v=(n(570),n(44)),d=n(88),f=n.n(d),m=n(142),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-9"},[n("TitleBlock",{attrs:{title:"PROGRAM","search-string":t.searchString},on:{search:function(e){t.searchString=e},esc:function(e){t.searchString=""}}}),t._v(" "),t.searching?[t.results.length>0?n("div",{staticClass:"overline"},[t._v('\n      Searching for "'+t._s(t.searchString)+'" - '+t._s(t.results.length)+"\n      "+t._s(t.results.length>1?"results":"result")+"\n    ")]):n("div",{staticClass:"overline text-h6 d-flex flex-column align-center"},[n("div",[t._v('No result found matching "'+t._s(t.searchString)+'"')]),t._v(" "),n("v-btn",{staticClass:"mt-3",attrs:{outlined:""},on:{click:function(e){t.searchString=""}}},[t._v("Cancel my search")])],1),t._v(" "),t._l(t.sessions,(function(e){return t._l(t.results.filter((function(t){return t.session.slug===e.slug})),(function(e,r){return n("meeting-block",{key:r,attrs:{item:e,session:e.session,search:t.searchString,index:r}})}))}))]:t._l(t.sessions,(function(t,e){return n("SessionBlock",{key:e,attrs:{item:t,index:e}})}))],2)}),[],!1,null,null,null);e.default=component.exports;f()(component,{TitleBlock:n(515).default,MeetingBlock:n(538).default,SessionBlock:n(550).default}),f()(component,{VBtn:m.a})}}]);