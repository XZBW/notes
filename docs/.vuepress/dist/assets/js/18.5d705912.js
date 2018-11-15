(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{153:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("options vue object——new Vue({})")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("Vue.component('componentName',templateName)")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("vue提供的内置组件"),t._t("default"),t._v("用于占位给子组件传递DOM给父组件")],2),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("如果父组件有多个插槽可以用名字分类"),t._t("one"),t._v(" 调用的时候就")],2),s("div",{attrs:{slot:"one"},slot:"one"}),s("p"),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("el： dom元素对象\n"),s("ul",[s("li",[t._v('"#DomObj"')]),t._v(" "),s("li",[t._v("document.querySelector('#DomObj') //更为优化，避免了vue判断查询")])])]),t._v(" "),s("li",[t._v("data：数据\n"),s("ul",[s("li",[t._v('data:{key:"数据"}   //可选')]),t._v(" "),s("li",[t._v('data:function(){return{key:"数据"}} //可选')])])]),t._v(" "),s("li",[t._v("methods \t// 在 "),s("code",[t._v("methods")]),t._v(" 对象中定义方法")]),t._v(" "),s("li",[t._v("components:{}     //声明组件  components:{'templateName':template}")]),t._v(" "),s("li",[t._v("template：\t\t//模板或调用组件 {'templateName':template}")]),t._v(" "),s("li",[t._v("watch\t\t//监控数据\n"),s("ul",[s("li",[t._v("深度监控")]),t._v(" "),s("li",[t._v("obj:{deep:true,handler:function(a){console.log(a.data)}}")])])]),t._v(" "),s("li",[t._v("cumputed 监事多个数据")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指令","aria-hidden":"true"}},[this._v("#")]),this._v(" 指令")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("v-text    //innertext")])]),t._v(" "),s("li",[s("p",[t._v("v-html    //innerHtml")])]),t._v(" "),s("li",[s("p",[t._v("v-model\t//双向绑定（一般用在input[text] ）")])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("v-bind 给元素的属性赋值 (单向绑定)\n"),s("ul",[s("li",[t._v('v-bind:\'atrr="value"')]),t._v(" "),s("li",[t._v('简写 :atrr="value"')])])])])]),t._v(" "),s("li",[s("p",[t._v("if-else 判断,以下三个指令必须是相邻的DOM，（删除DOM元素）")]),t._v(" "),s("ul",[s("li",[t._v("v-if")]),t._v(" "),s("li",[t._v("v-else-if")]),t._v(" "),s("li",[t._v("v-else")])])]),t._v(" "),s("li",[s("p",[t._v("v-show (隐藏DOM元素)")])]),t._v(" "),s("li",[s("p",[t._v("v-on 给元素添加事件")]),t._v(" "),s("ul",[s("li",[t._v("v-on:click='on'")]),t._v(" "),s("li",[t._v("简写 @click='on'")])])]),t._v(" "),s("li",[s("p",[t._v("'v-for")]),t._v(" "),s("ul",[s("li",[t._v("数组(item,index) in item")]),t._v(" "),s("li",[t._v("对象(key,value,index) in items")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"组件-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件-component","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件 component")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("父组件通过 props 向下传递数据给子组件")]),this._v(" "),e("li",[this._v("子组件通过 events 给父组件发送消息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"全局组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"插槽slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插槽slot","aria-hidden":"true"}},[this._v("#")]),this._v(" 插槽slot")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"具名插槽slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具名插槽slot","aria-hidden":"true"}},[this._v("#")]),this._v(" 具名插槽slot")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"过滤器（管道）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过滤器（管道）","aria-hidden":"true"}},[this._v("#")]),this._v(" 过滤器（管道）")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Vue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("filter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'dataReverse'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("split")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("reverse")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"生命周期-事件函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期-事件函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 生命周期(事件函数)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"组件加载触发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件加载触发","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件加载触发")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("beforeCreate——组件加载完成前触发")]),this._v(" "),e("li",[this._v("created————组件加载完成触发\n"),e("ul",[e("li",[this._v("应用场景：触发ajax请求")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"页面加载触发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页面加载触发","aria-hidden":"true"}},[this._v("#")]),this._v(" 页面加载触发")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("beforeMount——页面加载前触发")]),this._v(" "),e("li",[this._v("mounted————页面加载完成后触发(到这里后的是Vue完成组装好的DOM)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"页面数组更改时触发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页面数组更改时触发","aria-hidden":"true"}},[this._v("#")]),this._v(" 页面数组更改时触发")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("beforeUpdate——页面数据发生更改前触发")]),this._v(" "),e("li",[this._v("updated————页面数据发生更改后触发")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"组件销毁的时候触发（v-if）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件销毁的时候触发（v-if）","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件销毁的时候触发（v-if）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("beforeDestroy——销毁前")]),this._v(" "),e("li",[this._v("destroyed————销毁后")]),this._v(" "),e("li")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由","aria-hidden":"true"}},[this._v("#")]),this._v(" 路由")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用路由5步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用路由5步骤","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用路由5步骤")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",{attrs:{start:"0"}},[s("li",[t._v("如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)用于创建router-view和router-link组件")]),t._v(" "),s("li",[t._v("定义 (路由) 组件:{template:'"),s("div",[t._v("123")]),t._v("'}")]),t._v(" "),s("li",[t._v("定义路由配置:{ path: '/foo', component: { template: '"),s("div",[t._v("foo")]),t._v("' } }")]),t._v(" "),s("li",[t._v("创建 router 实例，然后传路由配置")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("new VueRouter({routes // (缩写) 相当于 routes: routes})"),e("br"),this._v("\n注意  new VueRouter({routes:[path:'/xxx',component:xxx]})  建名字一定是routes.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("创建和挂载根实例。记得要通过 router 实例参数注入路由")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"全局路由和渲染前事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局路由和渲染前事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局路由和渲染前事件")])}],!1,null,null,null);n.options.__file="vue.md";e.default=n.exports}}]);