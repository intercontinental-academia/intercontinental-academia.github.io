(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,5,6],{472:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("077501e4",content,!0,{sourceMap:!1})},473:function(t,e,n){"use strict";n(472)},474:function(t,e,n){var r=n(16)(!1);r.push([t.i,".v-card__title{word-break:normal}div.section-title{color:#fff;border-radius:0!important;align-items:center;width:50%;text-align:right}div.section-title,div.section-title content{text-transform:uppercase}",""]),t.exports=r},475:function(t,e,n){"use strict";n.r(e);n(30),n(172);var r={props:{title:{type:String,default:""},isSession:{type:Boolean,default:!1},isSatellite:{type:Boolean,default:!1},nextSatellite:{type:Boolean,default:!1},previous:{type:String,default:""},next:{type:String,default:""},nextName:{type:String,default:""},previousName:{type:String,default:""}},data:function(){return{expand:!1,searchString:""}},computed:{returnTooltip:function(){return this.previousName.length>0?"Back to "+this.previousName:"Back to the program"}},mounted:function(){},methods:{showInput:function(){var t=this;this.expand=!0,this.$nextTick((function(){t.focusInput()}))},focusInput:function(){this.$refs.search.focus()},onClickOutside:function(){this.expand=!1}}},o=(n(473),n(38)),c=n(71),l=n.n(c),h=n(129),v=n(90),d=n(205),f=n(528),m=n(471),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-space-between mb-12 mt-3"},[t.isSession?n("div",{staticClass:"d-flex section-title justify-space-between",style:"background-color:"+(t.isSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"auto;")},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:"","x-large":"",to:t.previous,nuxt:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"white","x-large":""}},[t._v("mdi-chevron-left")])],1)]}}],null,!1,89319704)},[t._v(" "),n("span",[t._v(t._s(t.returnTooltip))])]),t._v(" "),n("div",{staticClass:"content text-h4 pa-3 mr-2",domProps:{textContent:t._s(t.title)}})],1):n("div",{staticClass:"section-title",style:"background-color:"+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"100%;")},[n("div",{staticClass:"content text-h4 pa-3 mr-2",domProps:{textContent:t._s(t.title)}})]),t._v(" "),t.isSession&&t.next.length?n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"text-h4 py-8 my-0",style:"color:"+(t.nextSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+"!important",attrs:{text:"","x-large":"",to:t.next,nuxt:""}},[t._v(t._s(t.nextName)+" "),n("v-icon",{attrs:{right:"","x-large":""}},[t._v("mdi-chevron-right")])],1)],1):t._e(),t._v(" "),["program","fellows","mentors"].includes(t.$route.name)?n("div",{staticClass:"d-flex"},[n("v-expand-x-transition",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:!t.expand,expression:"!expand"}],staticClass:"text-h4 py-8 my-0",attrs:{text:"",nuxt:""},on:{click:function(e){return t.showInput()}}},"v-btn",o,!1),r),[n("v-icon",{attrs:{large:"",color:t.$vuetify.theme.themes.light.primary}},[t._v("mdi-magnify")])],1)]}}],null,!1,3087914956)},[t._v(" "),n("span",[t._v("Search in the program")])])],1),t._v(" "),n("v-expand-x-transition",[n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"search",style:"max-width:"+(t.expand?"300px":"0px")+";",attrs:{height:"64",large:"",placeholder:"Search",outlined:"","prepend-inner-icon":"mdi-magnify",color:t.$vuetify.theme.themes.light.primary,"hide-details":"",clearable:""},on:{keyup:function(e){return t.$emit("search",t.searchString)},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;e.preventDefault(),t.expand=!1,t.$emit("esc")},"click:clear":function(e){t.expand=!1,t.$emit("esc")}},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VExpandXTransition:v.b,VIcon:d.a,VTextField:f.a,VTooltip:m.a})},477:function(t,e,n){var content=n(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0f133c48",content,!0,{sourceMap:!1})},479:function(t,e,n){"use strict";n.r(e);var r={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting}}},o=n(38),c=n(219),l=n.n(c),h=n(139),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{ref:"ytPlayer",staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);e.default=component.exports;l()(component,{Intersect:h.a})},482:function(t,e,n){"use strict";n(477)},483:function(t,e,n){var r=n(16)(!1);r.push([t.i,".v-card__title{word-break:normal}.highlight{background-color:#ff9}",""]),t.exports=r},484:function(t,e,n){var content=n(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("197fcea4",content,!0,{sourceMap:!1})},485:function(t,e,n){var r=n(16)(!1);r.push([t.i,'.v-card__title{word-break:normal}.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=r},487:function(t,e,n){"use strict";n.r(e);n(20),n(22),n(30),n(172),n(305),n(77),n(47);var r={props:{item:{type:Object,default:function(){}},session:{type:Object,default:function(){}},search:{type:String,default:""},index:{type:Number,default:1}},data:function(){return{}},computed:{titleData:function(){return this.highlight(this.item.time+" "+this.item.name,this.search)}},updated:function(){},methods:{highlight:function(t,e){var n=new RegExp(e,"ig");return t.replace(n,(function(t,a,b){return'<strong style="color: darkslategray;background-color: yellow;">'+t+"</strong>"}))}}},o=(n(482),n(38)),c=n(71),l=n.n(c),h=n(129),v=n(208),d=n(35),f=(n(5),n(4),n(10),n(3),n(11),n(15)),m=n(0),x=(n(7),n(484),n(6)),y=n(90),_=n(76),k=n(26),w=n(99),C=n(24),S=n(44),$=n(64),O=n(142),j=n(12);function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var z=Object(x.a)(k.a,O.a,$.a,C.a,Object(w.a)("chipGroup"),Object(S.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return I(I(I(I({"v-chip":!0},$.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean($.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(f.a)(e,2),r=n[0],o=n[1];t.$attrs.hasOwnProperty(r)&&Object(j.a)(r,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(_.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(y.b,t)},genClose:function(){var t=this;return this.$createElement(_.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=I(I({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(o,data),e)}}),E=n(461),P=n(458),V=n(205),N=n(465),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[["program"].includes(t.$route.name)&&0===t.index?n("div",[n("span",{staticClass:"text-h5 mt-6",domProps:{innerHTML:t._s(t.highlight(t.item.session.name,t.search))}}),t._v(" "),n("v-divider")],1):t._e(),t._v(" "),n("v-card",{staticClass:"my-12 mx-3"},[n("v-row",{staticClass:"justify-space-between pb-9"},[n("v-col",{staticClass:"justify-start align-start",attrs:{cols:"auto"}},[n("div",{staticClass:"headline program-item",style:"background-color:"+(t.item.public?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v("\n          "+t._s(t.item.date)+"\n        ")])]),t._v(" "),n("v-col",{staticClass:"align-end",attrs:{cols:"auto"}},[n("v-card-title",{staticClass:"align-end program-item headline",style:"background-color:"+(t.item.public?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v("["+t._s(t.session.location)+"]\n        ")])],1),t._v(" "),n("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"px-12":"px-3",attrs:{cols:"12"}},[n("v-card-text",[n("div",{staticClass:"text-h5 mb-6 font-weight-black"},[t.item.public?n("v-chip",{staticClass:"mr-2",attrs:{label:""}},[t._v(" PUBLIC ")]):t._e(),t._v("\n            "+t._s(t.item.time)+"\n            "),n("span",{domProps:{innerHTML:t._s(t.highlight(t.item.name,t.search))}})],1),t._v(" "),t.item.youtube_video_id?n("YoutubeEmbedded",{staticClass:"mb-6",attrs:{yt:t.item.youtube_video_id}}):t._e(),t._v(" "),n("nuxt-content-highlight",{attrs:{document:t.item,"highlight-text":t.search}}),t._v(" "),n("div",{staticClass:"d-flex"},[t._l(t.item.attachements,(function(e){return[n("v-btn",{key:e,attrs:{href:e,target:"_blank"}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-file-pdf ")]),t._v("\n                "+t._s(e.substring(1))+"\n              ")],1)]}))],2),t._v(" "),t.item.apply_link?n("div",{staticClass:"d-flex justify-end"},[n("v-btn",{staticClass:"white--text font-weight-bold",attrs:{href:t.item.apply_link,target:"_blank",color:"#fba421"}},[t._v("\n              Subscribe!\n            ")])],1):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{YoutubeEmbedded:n(479).default}),l()(component,{VBtn:h.a,VCard:v.a,VCardText:d.b,VCardTitle:d.c,VChip:z,VCol:E.a,VDivider:P.a,VIcon:V.a,VRow:N.a})},492:function(t,e,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("ac335b94",content,!0,{sourceMap:!1})},510:function(t,e,n){"use strict";n(492)},511:function(t,e,n){var r=n(16)(!1);r.push([t.i,".v-card__title{word-break:normal}.program-item{color:#fff!important;display:inline;padding:.5rem;-webkit-box-decoration-break:clone;box-decoration-break:clone}",""]),t.exports=r},535:function(t,e,n){"use strict";n.r(e);var r=n(18),o=(n(53),n(72),n(175),n(22),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,h,v,d,f,m,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,n=t.$content,r=t.params,console.log("params: ",r),e.next=4,n("Programs").sortBy("_","desc").limit(1).fetch();case 4:return o=e.sent,e.next=7,n("Sessions").where({"related-program":"content"+o[0].path+".md"}).sortBy("start_date_and_time","asc").fetch();case 7:return c=e.sent,l=c.find((function(t){return t.slug===r.slug})),h=c.findIndex((function(t){return t.slug===r.slug})),console.log("index: ",h),console.log("session: ",l),e.next=14,n("Meetings").where({"related-session":"content"+l.path+".md"}).sortBy("start_date_and_time","asc").fetch();case 14:return v=e.sent,d=h<c.length-1?"/program/"+c[h+1].slug:"",f=h<c.length-1?c[h+1].name:"",m=0===h?"":c[h-1].name,x=0===h?"/program/":"/program/"+c[h-1].slug,e.abrupt("return",{session:l,sessions:c,meetings:v,next:d,previous:x,nextName:f,previousName:m,isSatellite:l.satellite,nextSatellite:!!d&&c[h+1].satellite});case 20:case"end":return e.stop()}}),e)})))()},mounted:function(){}}),c=(n(510),n(38)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-9"},[n("TitleBlock",{attrs:{title:t.session.name.toUpperCase(),"is-session":"","is-satellite":t.isSatellite,next:t.next,previous:t.previous,"next-name":t.nextName,"next-satellite":t.nextSatellite,"previous-name":t.previousName}}),t._v(" "),t._l(t.meetings,(function(e,r){return n("meeting-block",{key:r,attrs:{item:e,session:t.session}})}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitleBlock:n(475).default,MeetingBlock:n(487).default})}}]);