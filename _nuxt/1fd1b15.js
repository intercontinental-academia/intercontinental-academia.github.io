(window.webpackJsonp=window.webpackJsonp||[]).push([[13,11],{518:function(t,e,r){var content=r(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("19ae6984",content,!0,{sourceMap:!1})},521:function(t,e,r){"use strict";r(518)},522:function(t,e,r){var l=r(13)(!1);l.push([t.i,".frame[data-v-0745fc3a]{display:flex;position:relative;overflow:hidden;width:100%;height:100%}.overlay[data-v-0745fc3a]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;z-index:2;justify-content:space-between}.v-image[data-v-0745fc3a]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-0745fc3a]{transform:scale(1.1);opacity:.8}",""]),t.exports=l},525:function(t,e,r){"use strict";r.r(e);r(20);var l={props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:""}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",modifiers:{format:"webp",quality:70,height:this.height,width:this.height*this.ratio}})}},mounted:function(){}},o=(r(521),r(44)),c=r(88),n=r.n(c),m=r(182),d=r(223),h=r(504),f=r(70),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"frame"},[r("div",{staticClass:"overlay"},[t._t("default")],2),t._v(" "),t.src?r("v-img",t._b({attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size,height:t.height},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!1,4034393411)},"v-img",t.$attrs,!1)):r("v-sheet")],1)}),[],!1,null,"0745fc3a",null);e.default=component.exports;n()(component,{VImg:m.a,VProgressCircular:d.a,VRow:h.a,VSheet:f.a})},553:function(t,e,r){"use strict";r.r(e);r(20);var l={props:{item:{type:Object,required:!0},i:{type:Number,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=r(44),c=r(88),n=r.n(c),m=r(224),d=r(57),h=r(499),f=r(504),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"my-12",attrs:{nuxt:"",to:"/program/"+t.item.slug}},[r("OptimizedImage",{staticClass:"white--text",attrs:{src:t.item.image,height:"500"}},[r("v-row",{staticClass:"justify-space-between align-end pb-9"},[r("v-col",{staticClass:"justify-start align-start",attrs:{cols:"auto"}},[r("v-card-title",{staticClass:"text-h4 text-uppercase program-item",style:"background-color:"+(t.item.satellite?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v(t._s(t.item.name))]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"headline program-item",style:"background-color:"+(t.item.satellite?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v("\n          "+t._s(t.item.date)+"\n        ")])],1),t._v(" "),r("v-col",{staticClass:"align-end",attrs:{cols:"auto"}},[r("v-card-title",{staticClass:"align-end program-item headline",style:"background-color:"+(t.item.satellite?"#fba421":t.$vuetify.theme.themes.light.primary)},[t._v("["+t._s(t.item.location)+"]")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;n()(component,{OptimizedImage:r(525).default}),n()(component,{VCard:m.a,VCardTitle:d.d,VCol:h.a,VRow:f.a})}}]);