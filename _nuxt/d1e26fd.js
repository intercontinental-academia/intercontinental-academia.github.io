(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{501:function(t,e,r){"use strict";r.r(e);var n=r(20),o=(r(60),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,r=t.$content,e.next=3,r("Fellows").sortBy("slug").fetch();case 3:return n=e.sent,e.abrupt("return",{fellows:n});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){}}),c=r(37),l=r(56),v=r.n(l),f=r(208),m=r(461),w=r(202),d=r(465),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-9"},[r("TitleBlock",{attrs:{title:"FELLOWS"}}),t._v(" "),t._l(t.fellows,(function(e,n){return r("v-row",{key:n,staticClass:"mt-12 mx-6"},[r("v-col",{attrs:{cols:"4",justify:"top",align:"center"}},[r("v-avatar",{attrs:{size:"220"}},[e.image?r("img",{attrs:{alt:"Avatar",src:e.image}}):r("v-icon",{staticClass:"text-white",attrs:{"background-color":"primary","v-text":e.firstname[0]+e.lastname[0]}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"8"}},[r("p",[t._v(t._s(e.presentation))])])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;v()(component,{TitleBlock:r(216).default}),v()(component,{VAvatar:f.a,VCol:m.a,VIcon:w.a,VRow:d.a})}}]);