(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{482:function(t,e,n){var content=n(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("47d17a7e",content,!0,{sourceMap:!1})},487:function(t,e,n){"use strict";n(482)},488:function(t,e,n){var r=n(13)(!1);r.push([t.i,"#conceptText{-moz-columns:500px 2;columns:500px 2}",""]),t.exports=r},509:function(t,e,n){"use strict";n.r(e);var r=n(20),c=(n(62),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,l,v,_,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,n=t.$content,e.next=3,n("Pages_content/about/concept").fetch();case 3:return r=e.sent,e.next=6,n("Programs").sortBy("_","asc").fetch();case 6:return c=e.sent,e.next=9,n("Chairs").sortBy("slug","asc").fetch();case 9:return o=e.sent,e.next=12,n("Partners_and_Sponsors").sortBy("slug","asc").fetch();case 12:return l=e.sent,e.next=15,n("Institutions").sortBy("slug","asc").fetch();case 15:return v=e.sent,e.next=18,n("Steering_Committee").sortBy("slug","asc").fetch();case 18:return _=e.sent,m=c[c.length-1],console.log("editions: ",c),e.abrupt("return",{concept:r,editions:c,current:m,chairs:o,steering:_,institutions:v,partners:l});case 22:case"end":return e.stop()}}),e)})))()},mounted:function(){}}),o=(n(487),n(35)),l=n(45),v=n.n(l),_=n(209),m=n(466),f=n(168),d=n(470),h=n(480),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-9"},[n("TitleBlock",{staticClass:"mt-9",attrs:{title:"THE "+t.editions.length+"TH EDITION"}}),t._v(" "),n("v-row",{staticClass:"mr-3",attrs:{justify:"center"}},[n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("\n        "+t._s(t.current.title)+"\n      ")]),t._v(" "),n("nuxt-content",{attrs:{document:t.current}})],1),t._v(" "),n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("CHAIRS")]),t._v(" "),n("v-row",t._l(t.chairs,(function(e){return n("v-col",{key:e.slug,staticClass:"d-flex",attrs:{cols:"12",xl:"6"}},[t.$vuetify.breakpoint.smAndUp?n("v-avatar",{staticClass:"my-3 mr-6",attrs:{size:"125",tile:"",rounded:"",color:e.image.length?"transparent":t.$vuetify.theme.themes.light.primary}},[e.image?n("v-img",{attrs:{src:e.image,alt:e.firstname+" "+e.lastname}}):n("span",{staticClass:"white--text headline"},[t._v(t._s(e.firstname[0])+" "+t._s(e.lastname[0]))])],1):t._e(),t._v(" "),n("div",{staticClass:"mt-3"},[n("b",[t._v(t._s(e.firstname)+" "+t._s(e.lastname))]),t._v(" "),n("p",{staticClass:"overline"},[n("b",[t._v(t._s(e.title_and_institution))])]),t._v(" "),n("p",[t._v(t._s(e.presentation))])])],1)})),1)],1),t._v(" "),n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("\n        Steering committee\n      ")]),t._v(" "),n("ul",t._l(t.steering,(function(e){return n("li",{key:e.slug},[n("b",[t._v(t._s(e.firstname)+" "+t._s(e.lastname))]),t._v("\n          - "+t._s(e.presentation)+"\n        ")])})),0)]),t._v(" "),n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("\n        Institutions\n      ")]),t._v(" "),n("v-row",t._l(t.institutions,(function(e){return n("v-col",{key:e.slug,staticClass:"d-flex",attrs:{cols:"12",justify:"center"}},[t.$vuetify.breakpoint.smAndUp?n("v-avatar",{staticClass:"my-3 mr-6",attrs:{size:"125",tile:"",rounded:"",color:e.logo.length?"transparent":t.$vuetify.theme.themes.light.primary}},[e.logo?n("v-img",{attrs:{src:e.logo,alt:e.name,contain:""}}):n("span",{staticClass:"white--text headline"},[t._v(t._s(e.name))])],1):t._e(),t._v(" "),n("nuxt-content",{attrs:{document:e}})],1)})),1)],1)],1),t._v(" "),n("TitleBlock",{staticClass:"mt-9",attrs:{title:"PARTNERS"}}),t._v(" "),n("div",{staticClass:"mb-12"},t._l(t.partners,(function(e){return n("v-tooltip",{key:e,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var c=r.on,o=r.attrs;return[n("v-avatar",t._g(t._b({staticClass:"mx-6",attrs:{color:"indigo",size:"100"}},"v-avatar",o,!1),c),[e.logo?n("v-img",{attrs:{src:e.logo,alt:e.name,contain:""}}):t._e()],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.name))])])})),1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{TitleBlock:n(217).default}),v()(component,{VAvatar:_.a,VCol:m.a,VImg:f.a,VRow:d.a,VTooltip:h.a})}}]);