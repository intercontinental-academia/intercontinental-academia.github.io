(window.webpackJsonp=window.webpackJsonp||[]).push([[20,11],{509:function(t,e,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("077501e4",content,!0,{sourceMap:!1})},510:function(t,e,n){"use strict";n(509)},511:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}div.section-title{color:#fff;border-radius:0!important;align-items:center;width:50%;text-align:right}div.section-title,div.section-title content{text-transform:uppercase}",""]),t.exports=r},512:function(t,e,n){"use strict";n.r(e);n(30),n(185);var r={props:{title:{type:String,default:""},isSession:{type:Boolean,default:!1},isSatellite:{type:Boolean,default:!1},nextSatellite:{type:Boolean,default:!1},previous:{type:String,default:""},next:{type:String,default:""},nextName:{type:String,default:""},previousName:{type:String,default:""}},data:function(){return{expand:!1,searchString:""}},computed:{returnTooltip:function(){return this.previousName.length>0?"Back to "+this.previousName:"Back to the program"}},mounted:function(){},methods:{showInput:function(){var t=this;this.expand=!0,this.$nextTick((function(){t.focusInput()}))},focusInput:function(){this.$refs.search.focus()},onClickOutside:function(){this.expand=!1}}},o=(n(510),n(44)),c=n(88),l=n.n(c),d=n(143),h=n(100),f=n(219),v=n(591),m=n(504),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-space-between mb-12 mt-3"},[t.isSession?n("div",{staticClass:"d-flex section-title justify-space-between",style:"background-color:"+(t.isSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"auto;")},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:"","x-large":"",to:t.previous,nuxt:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"white","x-large":""}},[t._v("mdi-chevron-left")])],1)]}}],null,!1,89319704)},[t._v(" "),n("span",[t._v(t._s(t.returnTooltip))])]),t._v(" "),n("div",{staticClass:"content pa-3 mr-2",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",domProps:{textContent:t._s(t.title)}})],1):n("div",{staticClass:"section-title",style:"background-color:"+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"100%;")},[n("div",{staticClass:"content pa-3 mr-2",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",domProps:{textContent:t._s(t.title)}})]),t._v(" "),t.isSession&&t.next.length?n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"py-8 my-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",style:"color:"+(t.nextSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+"!important",attrs:{text:"","x-large":"",to:t.next,nuxt:""}},[t._v(t._s(t.nextName)+" "),n("v-icon",{attrs:{right:"","x-large":""}},[t._v("mdi-chevron-right")])],1)],1):t._e(),t._v(" "),["program","fellows","mentors","blog","blog-page-page"].includes(t.$route.name)?n("div",{staticClass:"d-flex"},[n("v-expand-x-transition",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:!t.expand,expression:"!expand"}],staticClass:"py-8 my-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",attrs:{text:"",nuxt:""},on:{click:function(e){return t.showInput()}}},"v-btn",o,!1),r),[n("v-icon",{attrs:{large:"",color:t.$vuetify.theme.themes.light.primary}},[t._v("mdi-magnify")])],1)]}}],null,!1,2453248715)},[t._v(" "),n("span",[t._v("Search in the program")])])],1),t._v(" "),n("v-expand-x-transition",[n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"search",style:"max-width:"+(t.expand?"300px":"0px")+";",attrs:{height:"64",large:"",placeholder:"Search",outlined:"","prepend-inner-icon":"mdi-magnify",color:t.$vuetify.theme.themes.light.primary,"hide-details":"",clearable:""},on:{keyup:function(e){return t.$emit("search",t.searchString)},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;e.preventDefault(),t.expand=!1,t.$emit("esc")},"click:clear":function(e){t.expand=!1,t.$emit("esc")}},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VExpandXTransition:h.b,VIcon:f.a,VTextField:v.a,VTooltip:m.a})},597:function(t,e,n){"use strict";n.r(e);var r=n(18),o=(n(30),n(185),n(64),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,n=t.$content,e.next=3,n("Mentors").sortBy("slug").fetch();case 3:return r=e.sent,e.abrupt("return",{mentors:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{searching:!1,searchString:"",results:[]}},watch:{searchString:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=4;break}e.searching=!1,n.next=8;break;case 4:return e.searching=!0,n.next=7,e.$content("Mentors").sortBy("start_date_and_time","asc").search(t).fetch();case 7:e.results=n.sent;case 8:case"end":return n.stop()}}),n)})))()}},mounted:function(){}}),c=n(44),l=n(88),d=n.n(l),h=n(143),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-9"},[n("TitleBlock",{attrs:{title:"Mentors","search-string":t.searchString},on:{search:function(e){t.searchString=e},esc:function(e){t.searchString=""}}}),t._v(" "),t.searching?[t.results.length>0?n("div",{staticClass:"overline"},[t._v('\n      Searching for "'+t._s(t.searchString)+'" - '+t._s(t.results.length)+"\n      "+t._s(t.results.length>1?"results":"result")+"\n    ")]):n("div",{staticClass:"overline text-h6 d-flex flex-column align-center"},[n("div",[t._v('No result found matching "'+t._s(t.searchString)+'"')]),t._v(" "),n("v-btn",{staticClass:"mt-3",attrs:{outlined:""},on:{click:function(e){t.searchString=""}}},[t._v("Cancel my search")])],1),t._v(" "),t._l(t.results,(function(e,r){return n("people-block",{key:r,attrs:{item:e,search:t.searchString}})}))]:t._l(t.mentors,(function(t,e){return[n("people-block",{key:e,attrs:{item:t,mentor:""}})]}))],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{TitleBlock:n(512).default,PeopleBlock:n(530).default}),d()(component,{VBtn:h.a})}}]);