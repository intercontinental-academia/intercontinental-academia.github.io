(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{467:function(t,e,n){var content=n(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("077501e4",content,!0,{sourceMap:!1})},468:function(t,e,n){"use strict";n(467)},469:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-card__title{word-break:normal}div.section-title{color:#fff;border-radius:0!important;align-items:center;width:50%;text-align:right}div.section-title,div.section-title content{text-transform:uppercase}",""]),t.exports=r},470:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:""},isSession:{type:Boolean,default:!1},previous:{type:String,default:""},next:{type:String,default:""},nextName:{type:String,default:""},previousName:{type:String,default:""}},data:function(){return{}},computed:{returnTooltip:function(){return this.previousName.length>0?"Back to "+this.previousName:"Back to the program"}},mounted:function(){},methods:{}},o=(n(468),n(44)),l=n(66),c=n.n(l),v=n(127),m=n(198),_=n(466),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-space-between mb-12 mt-3"},[t.isSession?n("div",{staticClass:"d-flex section-title justify-space-between",style:"background-color: "+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"auto;")},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:"","x-large":"",to:t.previous,nuxt:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"white","x-large":""}},[t._v("mdi-chevron-left")])],1)]}}],null,!1,89319704)},[t._v(" "),n("span",[t._v(t._s(t.returnTooltip))])]),t._v(" "),n("div",{staticClass:"content text-h4 pa-3 mr-2",domProps:{textContent:t._s(t.title)}})],1):n("div",{staticClass:"section-title",style:"background-color: "+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"100%;")},[n("div",{staticClass:"content text-h4 pa-3 mr-2",domProps:{textContent:t._s(t.title)}})]),t._v(" "),t.isSession&&t.next.length?n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"text-h4 py-8 my-0",attrs:{text:"","x-large":"",to:t.next,color:t.$vuetify.theme.themes.light.primary,nuxt:""}},[t._v(t._s(t.nextName)+" "),n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-chevron-right")])],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:m.a,VTooltip:_.a})},476:function(t,e,n){var content=n(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("47d17a7e",content,!0,{sourceMap:!1})},482:function(t,e,n){"use strict";n(476)},483:function(t,e,n){var r=n(13)(!1);r.push([t.i,"#conceptText{-moz-columns:500px 2;columns:500px 2}",""]),t.exports=r},504:function(t,e,n){"use strict";n.r(e);var r=n(19),o=(n(59),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,v,m,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,n=t.$content,e.next=3,n("Pages_content/about/concept").fetch();case 3:return r=e.sent,e.next=6,n("Programs").sortBy("_","asc").fetch();case 6:return o=e.sent,e.next=9,n("Chairs").sortBy("slug","asc").fetch();case 9:return l=e.sent,e.next=12,n("Partners_and_Sponsors").sortBy("slug","asc").fetch();case 12:return c=e.sent,e.next=15,n("Institutions").sortBy("slug","asc").fetch();case 15:return v=e.sent,e.next=18,n("Steering_Committee").sortBy("slug","asc").fetch();case 18:return m=e.sent,_=o[o.length-1],console.log("editions: ",o),e.abrupt("return",{concept:r,editions:o,current:_,chairs:l,steering:m,institutions:v,partners:c});case 22:case"end":return e.stop()}}),e)})))()},mounted:function(){}}),l=(n(482),n(44)),c=n(66),v=n.n(c),m=n(204),_=n(127),f=n(456),d=n(198),h=n(165),x=n(460),y=n(466),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-9"},[n("TitleBlock",{staticClass:"mt-9",attrs:{title:"THE "+t.editions.length+"TH EDITION"}}),t._v(" "),n("v-row",{staticClass:"mr-3",attrs:{justify:"center"}},[n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("\n        "+t._s(t.current.title)+"\n      ")]),t._v(" "),n("nuxt-content",{attrs:{document:t.current}})],1),t._v(" "),n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("CHAIRS")]),t._v(" "),n("v-row",t._l(t.chairs,(function(e){return n("v-col",{key:e.slug,staticClass:"d-flex",attrs:{cols:"12",xl:"6"}},[t.$vuetify.breakpoint.smAndUp?n("v-avatar",{staticClass:"my-3 mr-6",attrs:{size:"125",tile:"",rounded:"",color:e.image.length?"transparent":t.$vuetify.theme.themes.light.primary}},[e.image?n("v-img",{attrs:{src:e.image,alt:e.firstname+" "+e.lastname}}):n("span",{staticClass:"white--text headline"},[t._v(t._s(e.firstname[0])+" "+t._s(e.lastname[0]))])],1):t._e(),t._v(" "),n("div",{staticClass:"mt-3"},[n("div",{staticClass:"text-h5 font-weight-black"},[t._v("\n              "+t._s(e.firstname)+" "+t._s(e.lastname)+"\n            ")]),t._v(" "),n("div",{staticClass:"text-h6 mb-3"},[t._v("\n              "+t._s(e.title_and_institution)+"\n            ")]),t._v(" "),n("p",[t._v(t._s(e.presentation))])])],1)})),1)],1),t._v(" "),n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("\n        Steering committee\n      ")]),t._v(" "),n("ul",t._l(t.steering,(function(e){return n("li",{key:e.slug},[n("b",[t._v(t._s(e.firstname)+" "+t._s(e.lastname))]),t._v("\n          - "+t._s(e.presentation)+"\n        ")])})),0)]),t._v(" "),n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("\n        Institutions\n      ")]),t._v(" "),n("v-row",t._l(t.institutions,(function(e){return n("v-col",{key:e.slug,staticClass:"d-flex",attrs:{cols:"12",justify:"center"}},[t.$vuetify.breakpoint.smAndUp?n("v-avatar",{staticClass:"my-3 mr-6",attrs:{size:"125",tile:"",rounded:"",color:e.logo.length?"transparent":t.$vuetify.theme.themes.light.primary}},[e.logo?n("v-img",{attrs:{src:e.logo,alt:e.name,contain:""}}):n("span",{staticClass:"white--text headline"},[t._v(t._s(e.name))])],1):t._e(),t._v(" "),n("div",{staticClass:"flex-column align-content-start"},[n("div",{staticClass:"text-h5 font-weight-black"},[e.url?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",href:e.url,target:"_blank",rel:"noopener noreferrer",title:e.name}},"v-btn",l,!1),o),[n("v-icon",[t._v("mdi-open-in-new")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Visit the website of "+t._s(e.name))])]):t._e(),t._v("\n              "+t._s(e.name)+"\n            ")],1),t._v(" "),n("nuxt-content",{attrs:{document:e}}),t._v(" "),e.copyright?n("small",{staticClass:"muted caption"},[t._v("Image of © "+t._s(e.copyright))]):t._e()],1)],1)})),1)],1)],1),t._v(" "),n("TitleBlock",{staticClass:"mt-9",attrs:{title:"PARTNERS"}}),t._v(" "),n("div",{staticClass:"mb-12"},t._l(t.partners,(function(e){return n("v-tooltip",{key:e,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[n("v-avatar",t._g(t._b({staticClass:"mx-6",attrs:{color:"indigo",size:"100"}},"v-avatar",l,!1),o),[e.logo?n("v-img",{attrs:{src:e.logo,alt:e.name,contain:""}}):t._e()],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.name))])])})),1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{TitleBlock:n(470).default}),v()(component,{VAvatar:m.a,VBtn:_.a,VCol:f.a,VIcon:d.a,VImg:h.a,VRow:x.a,VTooltip:y.a})}}]);