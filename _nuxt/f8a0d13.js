(window.webpackJsonp=window.webpackJsonp||[]).push([[21,7,11,12],{509:function(t,e,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("077501e4",content,!0,{sourceMap:!1})},510:function(t,e,n){"use strict";n(509)},511:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}div.section-title{color:#fff;border-radius:0!important;align-items:center;width:50%;text-align:right}div.section-title,div.section-title content{text-transform:uppercase}",""]),t.exports=r},512:function(t,e,n){"use strict";n.r(e);n(30),n(185);var r={props:{title:{type:String,default:""},isSession:{type:Boolean,default:!1},isSatellite:{type:Boolean,default:!1},nextSatellite:{type:Boolean,default:!1},previous:{type:String,default:""},next:{type:String,default:""},nextName:{type:String,default:""},previousName:{type:String,default:""}},data:function(){return{expand:!1,searchString:""}},computed:{returnTooltip:function(){return this.previousName.length>0?"Back to "+this.previousName:"Back to the program"}},mounted:function(){},methods:{showInput:function(){var t=this;this.expand=!0,this.$nextTick((function(){t.focusInput()}))},focusInput:function(){this.$refs.search.focus()},onClickOutside:function(){this.expand=!1}}},o=(n(510),n(44)),c=n(88),l=n.n(c),h=n(143),v=n(100),d=n(219),f=n(591),m=n(504),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-space-between mb-12 mt-3"},[t.isSession?n("div",{staticClass:"d-flex section-title justify-space-between",style:"background-color:"+(t.isSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"auto;")},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:"","x-large":"",to:t.previous,nuxt:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"white","x-large":""}},[t._v("mdi-chevron-left")])],1)]}}],null,!1,89319704)},[t._v(" "),n("span",[t._v(t._s(t.returnTooltip))])]),t._v(" "),n("div",{staticClass:"content pa-3 mr-2",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",domProps:{textContent:t._s(t.title)}})],1):n("div",{staticClass:"section-title",style:"background-color:"+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"100%;")},[n("div",{staticClass:"content pa-3 mr-2",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",domProps:{textContent:t._s(t.title)}})]),t._v(" "),t.isSession&&t.next.length?n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"py-8 my-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",style:"color:"+(t.nextSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+"!important",attrs:{text:"","x-large":"",to:t.next,nuxt:""}},[t._v(t._s(t.nextName)+" "),n("v-icon",{attrs:{right:"","x-large":""}},[t._v("mdi-chevron-right")])],1)],1):t._e(),t._v(" "),["program","fellows","mentors","blog","blog-page-page"].includes(t.$route.name)?n("div",{staticClass:"d-flex"},[n("v-expand-x-transition",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:!t.expand,expression:"!expand"}],staticClass:"py-8 my-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",attrs:{text:"",nuxt:""},on:{click:function(e){return t.showInput()}}},"v-btn",o,!1),r),[n("v-icon",{attrs:{large:"",color:t.$vuetify.theme.themes.light.primary}},[t._v("mdi-magnify")])],1)]}}],null,!1,2453248715)},[t._v(" "),n("span",[t._v("Search in the program")])])],1),t._v(" "),n("v-expand-x-transition",[n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"search",style:"max-width:"+(t.expand?"300px":"0px")+";",attrs:{height:"64",large:"",placeholder:"Search",outlined:"","prepend-inner-icon":"mdi-magnify",color:t.$vuetify.theme.themes.light.primary,"hide-details":"",clearable:""},on:{keyup:function(e){return t.$emit("search",t.searchString)},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;e.preventDefault(),t.expand=!1,t.$emit("esc")},"click:clear":function(e){t.expand=!1,t.$emit("esc")}},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VExpandXTransition:v.b,VIcon:d.a,VTextField:f.a,VTooltip:m.a})},517:function(t,e,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("0f133c48",content,!0,{sourceMap:!1})},518:function(t,e,n){"use strict";n.r(e);var r={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting}}},o=n(44),c=n(236),l=n.n(c),h=n(154),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{ref:"ytPlayer",staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);e.default=component.exports;l()(component,{Intersect:h.a})},520:function(t,e,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("197fcea4",content,!0,{sourceMap:!1})},521:function(t,e,n){var r=n(13)(!1);r.push([t.i,'.v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=r},524:function(t,e,n){"use strict";n(517)},525:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.highlight{background-color:#ff9}",""]),t.exports=r},526:function(t,e,n){"use strict";n.r(e);n(20),n(24),n(30),n(185),n(325),n(83),n(50);var r={props:{item:{type:Object,default:function(){}},session:{type:Object,default:function(){}},search:{type:String,default:""},index:{type:Number,default:1}},data:function(){return{}},computed:{titleData:function(){return this.highlight(this.item.time+" "+this.item.name,this.search)}},updated:function(){},methods:{highlight:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=new RegExp(e,"ig");return t.replace(n,(function(t,a,b){return'<strong style="color: darkslategray;background-color: yellow;">'+t+"</strong>"}))}}},o=(n(524),n(44)),c=n(88),l=n.n(c),h=n(143),v=n(222),d=n(57),f=n(529),m=n(497),x=n(493),y=n(219),_=n(502),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[["program"].includes(t.$route.name)&&0===t.index?n("div",[n("span",{staticClass:"text-h5 mt-6",domProps:{innerHTML:t._s(t.highlight(t.item.session.name,t.search))}}),t._v(" "),n("v-divider")],1):t._e(),t._v(" "),n("v-card",{staticClass:"my-12 mx-3"},[n("v-row",{staticClass:"justify-space-between pb-9"},[n("v-col",{staticClass:"justify-start align-start",attrs:{cols:"auto"}},[n("div",{staticClass:"headline program-item",style:"background-color:"+(t.item.public?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v("\n          "+t._s(t.item.date)+"\n        ")])]),t._v(" "),n("v-col",{staticClass:"align-end",attrs:{cols:"auto"}},[n("v-card-title",{staticClass:"align-end program-item headline",style:"background-color:"+(t.item.public?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v("["+t._s(t.session.location)+"]\n        ")])],1),t._v(" "),n("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"px-12":"px-3",attrs:{cols:"12"}},[n("v-card-text",[n("div",{staticClass:"text-h5 mb-6 font-weight-black"},[t.item.public?n("v-chip",{staticClass:"mr-2",attrs:{label:""}},[t._v(" PUBLIC ")]):t._e(),t._v("\n            "+t._s(t.item.time)+"\n            "),n("span",{domProps:{innerHTML:t._s(t.highlight(t.item.name,t.search))}})],1),t._v(" "),t.item.youtube_video_id?n("YoutubeEmbed",{staticClass:"mb-6",attrs:{yt:t.item.youtube_video_id}}):t._e(),t._v(" "),n("nuxt-content-highlight",{attrs:{document:t.item,"highlight-text":t.search}}),t._v(" "),n("div",{staticClass:"d-flex"},t._l(t.item.attachements,(function(e){return n("v-btn",{key:e,attrs:{href:e,target:"_blank"}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-file-pdf-box ")]),t._v("\n              "+t._s(e.substring(1))+"\n            ")],1)})),1),t._v(" "),t.item.apply_link?n("div",{staticClass:"d-flex justify-end"},[n("v-btn",{staticClass:"white--text font-weight-bold",attrs:{href:t.item.apply_link,target:"_blank",color:"#fba421"}},[t._v("\n              Subscribe!\n            ")])],1):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{YoutubeEmbed:n(518).default}),l()(component,{VBtn:h.a,VCard:v.a,VCardText:d.c,VCardTitle:d.d,VChip:f.a,VCol:m.a,VDivider:x.a,VIcon:y.a,VRow:_.a})},529:function(t,e,n){"use strict";n(6),n(5),n(10),n(4),n(11);var r=n(17),o=n(1),c=(n(8),n(520),n(7)),l=n(100),h=n(82),v=n(27),d=n(107),f=n(23),m=n(39),x=n(69),y=n(155),_=n(12);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(v.a,y.a,x.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return w(w(w(w({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(r.a)(e,2),o=n[0],c=n[1];t.$attrs.hasOwnProperty(o)&&Object(_.a)(o,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=w(w({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(o,data),e)}})},537:function(t,e,n){var content=n(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("ac335b94",content,!0,{sourceMap:!1})},570:function(t,e,n){"use strict";n(537)},571:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.program-item{color:#fff!important;display:inline;padding:.5rem;-webkit-box-decoration-break:clone;box-decoration-break:clone}",""]),t.exports=r},601:function(t,e,n){"use strict";n.r(e);var r=n(18),o=(n(64),n(72),n(187),n(24),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,h,v,d,f,m,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,n=t.$content,r=t.params,e.next=3,n("Programs").sortBy("_","desc").limit(1).fetch();case 3:return o=e.sent,e.next=6,n("Sessions").where({"related-program":"content"+o[0].path+".md"}).sortBy("start_date_and_time","asc").fetch();case 6:return c=e.sent,l=c.find((function(t){return t.slug===r.slug})),h=c.findIndex((function(t){return t.slug===r.slug})),e.next=11,n("Meetings").where({"related-session":"content"+l.path+".md"}).sortBy("start_date_and_time","asc").fetch();case 11:return v=e.sent,d=h<c.length-1?"/program/"+c[h+1].slug:"",f=h<c.length-1?c[h+1].name:"",m=0===h?"":c[h-1].name,x=0===h?"/program/":"/program/"+c[h-1].slug,e.abrupt("return",{session:l,sessions:c,meetings:v,next:d,previous:x,nextName:f,previousName:m,isSatellite:l.satellite,nextSatellite:!!d&&c[h+1].satellite});case 17:case"end":return e.stop()}}),e)})))()},mounted:function(){}}),c=(n(570),n(44)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-9"},[n("TitleBlock",{attrs:{title:t.session.name.toUpperCase(),"is-session":"","is-satellite":t.isSatellite,next:t.next,previous:t.previous,"next-name":t.nextName,"next-satellite":t.nextSatellite,"previous-name":t.previousName}}),t._v(" "),t._l(t.meetings,(function(e,r){return n("meeting-block",{key:r,attrs:{item:e,session:t.session}})}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitleBlock:n(512).default,MeetingBlock:n(526).default})}}]);