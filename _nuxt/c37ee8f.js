(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8,11,13],{512:function(t,e,r){var content=r(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("19ae6984",content,!0,{sourceMap:!1})},516:function(t,e,r){"use strict";r(512)},517:function(t,e,r){var n=r(13)(!1);n.push([t.i,".frame[data-v-0745fc3a]{display:flex;position:relative;overflow:hidden;width:100%;height:100%}.overlay[data-v-0745fc3a]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;z-index:2;justify-content:space-between}.v-image[data-v-0745fc3a]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-0745fc3a]{transform:scale(1.1);opacity:.8}",""]),t.exports=n},518:function(t,e,r){"use strict";r.r(e);var n={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting}}},o=r(44),c=r(237),l=r.n(c),d=r(154),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[r("iframe",{ref:"ytPlayer",staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);e.default=component.exports;l()(component,{Intersect:d.a})},519:function(t,e,r){"use strict";r.r(e);r(20);var n={props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:""}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",modifiers:{format:"webp",quality:70,height:this.height,width:this.height*this.ratio}})}},mounted:function(){}},o=(r(516),r(44)),c=r(88),l=r.n(c),d=r(182),m=r(223),f=r(504),h=r(70),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"frame"},[r("div",{staticClass:"overlay"},[t._t("default")],2),t._v(" "),t.src?r("v-img",t._b({attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size,height:t.height},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!1,4034393411)},"v-img",t.$attrs,!1)):r("v-sheet")],1)}),[],!1,null,"0745fc3a",null);e.default=component.exports;l()(component,{VImg:d.a,VProgressCircular:m.a,VRow:f.a,VSheet:h.a})},523:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return l}));var n=r(18),o=(r(64),r(30),r(50),r(58),r(16),r(83),r(37),r(185),r(8),function(t){return t.toString().trim().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}),c=function(t,e){return t.length<=e?t:t.slice(0,e)+"..."},l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r,n,o,c){var l,d,m,f,h,v,_,y,w,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=parseInt(n)||1,d=5,t.next=4,r(e).where({published:!0}).search(o).only([]).fetch();case 4:if(m=t.sent,f=m.length,h=Math.ceil(f/d),v=f%d,_=function(){return 1==+l?0:+l===h?0===v?f-d:f-v:(l-1)*d},1!==l){t.next=19;break}return t.next=12,r(e).where({published:!0}).search(o).sortBy("date","desc").limit(d).skip(_()).fetch();case 12:return x=t.sent,t.next=15,r(e).where({published:!0,pinned:!0}).search(o).sortBy("date","desc").limit(1).fetch();case 15:w=t.sent,y=w?x.filter((function(t){var e;return t.slug!==(null===(e=w[0])||void 0===e?void 0:e.slug)})):x,t.next=23;break;case 19:return t.next=21,r(e).where({published:!0}).search(o).sortBy("date","desc").limit(d).skip(_()).fetch();case 21:y=t.sent,w=!1;case 23:if(0!==l&&y.length){t.next=25;break}return t.abrupt("return");case 25:return t.abrupt("return",{count:f,pages:h,pinnedPost:!!w.length&&w[0],posts:y});case 26:case"end":return t.stop()}}),t)})));return function(e,r,n,o,c){return t.apply(this,arguments)}}()},525:function(t,e,r){var content=r(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("011554b8",content,!0,{sourceMap:!1})},530:function(t,e,r){"use strict";r.r(e);var n={props:{src:{type:String,requried:!0,default:""}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=r(44),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("iframe",{attrs:{width:"100%",height:"166",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+t.src+"&color=%235c3190&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}})}),[],!1,null,null,null);e.default=component.exports},532:function(t,e,r){"use strict";r(525)},533:function(t,e,r){var n=r(13)(!1);n.push([t.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.nuxt-content ul{padding-bottom:1rem}.nuxt-content p{color:rgba(0,0,0,.6);font-size:.875rem!important;font-weight:400!important;line-height:1.375rem!important;letter-spacing:.0071428571em!important}",""]),t.exports=n},537:function(t,e,r){"use strict";r.r(e);r(20),r(327),r(30),r(83),r(50);var n=r(523),o={props:{item:{type:Object,default:function(){}},search:{type:String,default:""},index:{type:Number,default:null}},data:function(){return{show:!1}},computed:{},mounted:function(){},methods:{truncateString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(n.c)(t,250)},highlight:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,r=new RegExp(e,"ig");return t.replace(r,(function(t,a,b){return'<strong style="color: darkslategray;background-color: yellow;">'+t+"</strong>"}))},_srcset:function(t){return this.$img.getSizes(t,{sizes:"xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",modifiers:{format:"webp",quality:70}})}}},c=(r(532),r(44)),l=r(88),d=r.n(l),m=r(142),f=r(224),h=r(57),v=r(541),_=r(542),y=r(534),w=r(499),x=r(220),C=r(504),k=r(506),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",t._b({staticClass:"pa-6 my-3",attrs:{id:t.item.anchor&&t.item.anchor.toLowerCase()||t.item.post_title}},"v-card",t.$attrs,!1),[["blog","blog-page-page"].includes(t.$route.name)?r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"float-right",attrs:{text:"",icon:"",href:"https://intercontinental-academia.org/blog/"+t.item.slug,target:"_blank",rel:"noopener noreferrer",title:t.item.post_title,small:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-open-in-new")])],1)]}}],null,!1,3312608508)},[t._v(" "),r("span",[t._v("Open in a new tab")])]):t._e(),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[null===t.index&&["blog","blog-page-page"].includes(t.$route.name)?r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-icon",t._g(t._b({},"v-icon",o,!1),n),[t._v("mdi-pin")])]}}],null,!1,2294122853)},[t._v(" "),r("span",[t._v("This post is pinned")])]):t._e(),t._v("\n    "+t._s(new Date(t.item.date).toLocaleDateString("EN",{timezone:"UTC"}))+"\n    ")],1),t._v(" "),r("v-card-title",[r("span",{staticClass:"text-h4",domProps:{innerHTML:t._s(t.highlight(t.item.post_title,t.search))}})]),t._v(" "),r("div",{staticClass:"px-3"},t._l(t.item.tags,(function(e,n){return r("v-chip",{key:n,staticClass:"ma-2"},[t._v("\n      "+t._s(e)+"\n    ")])})),1),t._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[t.item.youtube_video_id?r("YoutubeEmbed",{staticClass:"mb-9 ml-3",attrs:{yt:t.item.youtube_video_id}}):t._e()],1)],1),t._v(" "),t.item.images&&1===t.item.images.length?r("OptimizedImage",{staticClass:"my-3",attrs:{src:t.item.images[0]}}):t._e(),t._v(" "),t.item.images&&t.item.images.length>1?r("div",{staticClass:"pb-8 pt-3"},[r("v-carousel",{attrs:{height:t.$vuetify.breakpoint.mdAndUp?"600":"300",cycle:""}},t._l(t.item.images,(function(image){return r("v-carousel-item",{key:image,attrs:{eager:"","lazy-src":t.$img(image,{width:10,quality:70}),src:t.$img(image,{height:"auto",quality:70}),srcset:t._srcset(image).srcset,sizes:t._srcset(image).size}})})),1)],1):t._e(),t._v(" "),t.item.copyright?r("small",{staticClass:"muted caption"},[t._v("© "+t._s(t.item.copyright))]):t._e(),t._v(" "),t.item.description&&"blog"===t.$route.name&&!t.show?[r("p",[t._v("\n        "+t._s(t.item.description)+"  "),t.item.description&&"blog"===t.$route.name?r("b",{staticClass:"primary--text text-decoration-underline",staticStyle:{cursor:"pointer"},on:{click:function(e){t.show=!t.show}}},[t._v("\n          Read more")]):t._e()])]:r("nuxt-content",{staticClass:"px-3",attrs:{document:t.item}}),t._v(" "),t.item.authors.length?[r("div",{staticClass:"mb-3 px-3 font-italic"},[t._v("\n        By\n        "),t._l(t.item.authors,(function(e,n){return r("span",{key:n},[t._v(t._s(e.name)),t.index<t.item.authors.length-1?[t._v(", ")]:t._e()],2)}))],2)]:t._e(),t._v(" "),t._l(t.item.audio,(function(track,t){return r("SoundCloudEmbed",{key:t,attrs:{src:track}})}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{YoutubeEmbed:r(518).default,OptimizedImage:r(519).default,SoundCloudEmbed:r(530).default}),d()(component,{VBtn:m.a,VCard:f.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VCarousel:v.a,VCarouselItem:_.a,VChip:y.a,VCol:w.a,VIcon:x.a,VRow:C.a,VTooltip:k.a})},604:function(t,e,r){"use strict";r.r(e);var n=r(18),o=(r(64),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,r=t.$content,n=t.params,e.next=3,r("/Blog",n.slug).fetch();case 3:return o=e.sent,e.abrupt("return",{item:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{}},created:function(){}}),c=r(44),l=r(88),d=r.n(l),m=r(608),f=r(220),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-breadcrumbs",{attrs:{nuxt:"",items:[{text:"Blog",disabled:!1,href:"/blog"},{text:t.item.post_title,disabled:!0}]},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),t._v(" "),r("PostBlock",{attrs:{item:t.item,flat:""}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{PostBlock:r(537).default}),d()(component,{VBreadcrumbs:m.a,VIcon:f.a})}}]);