(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{509:function(t,e,n){var content=n(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("077501e4",content,!0,{sourceMap:!1})},511:function(t,e,n){"use strict";n(509)},512:function(t,e,n){var o=n(13)(!1);o.push([t.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}div.section-title{color:#fff;border-radius:0!important;align-items:center;width:50%;text-align:right}div.section-title,div.section-title content{text-transform:uppercase}",""]),t.exports=o},513:function(t,e,n){"use strict";n.r(e);n(30),n(185);var o={props:{title:{type:String,default:""},isSession:{type:Boolean,default:!1},isSatellite:{type:Boolean,default:!1},nextSatellite:{type:Boolean,default:!1},previous:{type:String,default:""},next:{type:String,default:""},nextName:{type:String,default:""},previousName:{type:String,default:""}},data:function(){return{expand:!1,searchString:""}},computed:{returnTooltip:function(){return this.previousName.length>0?"Back to "+this.previousName:"Back to the program"}},mounted:function(){},methods:{showInput:function(){var t=this;this.expand=!0,this.$nextTick((function(){t.focusInput()}))},focusInput:function(){this.$refs.search.focus()},onClickOutside:function(){this.expand=!1}}},r=(n(511),n(44)),l=n(88),c=n.n(l),d=n(143),v=n(100),f=n(220),h=n(594),m=n(504),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-space-between mb-12 mt-3"},[t.isSession?n("div",{staticClass:"d-flex section-title justify-space-between",style:"background-color:"+(t.isSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"auto;")},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:"","x-large":"",to:t.previous,nuxt:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{color:"white","x-large":""}},[t._v("mdi-chevron-left")])],1)]}}],null,!1,89319704)},[t._v(" "),n("span",[t._v(t._s(t.returnTooltip))])]),t._v(" "),n("div",{staticClass:"content pa-3 mr-2",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",domProps:{textContent:t._s(t.title)}})],1):n("div",{staticClass:"section-title",style:"background-color:"+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"100%;")},[n("div",{staticClass:"content pa-3 mr-2",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",domProps:{textContent:t._s(t.title)}})]),t._v(" "),t.isSession&&t.next.length?n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"py-8 my-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",style:"color:"+(t.nextSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+"!important",attrs:{text:"","x-large":"",to:t.next,nuxt:""}},[t._v(t._s(t.nextName)+" "),n("v-icon",{attrs:{right:"","x-large":""}},[t._v("mdi-chevron-right")])],1)],1):t._e(),t._v(" "),["program","fellows","mentors","blog","blog-page-page"].includes(t.$route.name)?n("div",{staticClass:"d-flex"},[n("v-expand-x-transition",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:!t.expand,expression:"!expand"}],staticClass:"py-8 my-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",attrs:{text:"",nuxt:""},on:{click:function(e){return t.showInput()}}},"v-btn",r,!1),o),[n("v-icon",{attrs:{large:"",color:t.$vuetify.theme.themes.light.primary}},[t._v("mdi-magnify")])],1)]}}],null,!1,2453248715)},[t._v(" "),n("span",[t._v("Search in the program")])])],1),t._v(" "),n("v-expand-x-transition",[n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"search",style:"max-width:"+(t.expand?"300px":"0px")+";",attrs:{height:"64",large:"",placeholder:"Search",outlined:"","prepend-inner-icon":"mdi-magnify",color:t.$vuetify.theme.themes.light.primary,"hide-details":"",clearable:""},on:{keyup:function(e){return t.$emit("search",t.searchString)},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;e.preventDefault(),t.expand=!1,t.$emit("esc")},"click:clear":function(e){t.expand=!1,t.$emit("esc")}},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VExpandXTransition:v.b,VIcon:f.a,VTextField:h.a,VTooltip:m.a})}}]);