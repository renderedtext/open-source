webpackJsonp([1],{"1Mb4":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),s=n("mtWM"),o={name:"Projects",data:function(){return{msg:"Welcome to Your Vue.js App",rawProjects:[],projectsCount:0}},computed:{projects:function(){var t=this.rawProjects.map(function(t){var e=t.license;return{name:t.name,description:t.description,starsCount:t.stargazers_count,forksCount:t.forks_count,license:e&&e.spdx_id,url:t.html_url}});return t.sort(function(t,e){return e.starsCount-t.starsCount})}},created:function(){var t=this;Object(s.get)("https://api.github.com/search/repositories?q=topic:semaphore-open-source+org:renderedtext+fork:true").then(function(e){var n=e.data;t.rawProjects=n.items,t.projectsCount=n.total_count})}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hr"),t._v(" "),t._l(t.projects,function(e){return n("div",{key:e.id},[n("span",[n("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v("\n        ⭐️ "+t._s(e.starsCount)+"\n        🍴 "+t._s(e.forksCount)+"\n        "),e.license?n("span",[t._v("\n          📄 "+t._s(e.license)+"\n        ")]):t._e()]),t._v(" "),n("p",{staticClass:"project"},[t._v(t._s(e.description))]),t._v(" "),n("hr")])])})],2)},staticRenderFns:[]};var i={name:"App",components:{Projects:n("VU/8")(o,a,!1,function(t){n("SpLB")},"data-v-1b53fbcc",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{staticClass:"cover",attrs:{src:n("s067")}}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"projects"},[e("Projects")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro-box"},[e("h1",[this._v("Semaphore ❤️ Open Source")]),this._v(" "),e("p",{staticClass:"intro",attrs:{align:"center"}},[this._v("\n    At Semaphore, we believe that open source is good for everyone. By being\n    open and freely available, it enables and encourages collaboration and the\n    development of technology, while solving real world problems.\n    ")])])}]};var p=n("VU/8")(i,c,!1,function(t){n("1Mb4")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:p},template:"<App/>"})},SpLB:function(t,e){},s067:function(t,e,n){t.exports=n.p+"static/img/cover.911997e.png"}},["NHnr"]);
//# sourceMappingURL=app.b0aad6321cc856cf7163.js.map