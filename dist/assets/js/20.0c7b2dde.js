(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{151:function(e,t,l){"use strict";l.r(t);var i=l(0),n=Object(i.a)({},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),l("p",[e._v("优化 requestAnimationFrame()")]),e._v(" "),e._m(3),l("h1",{attrs:{id:"jquery"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#jquery","aria-hidden":"true"}},[e._v("#")]),e._v(" "),l("a",{attrs:{href:"https://segmentfault.com/a/1190000014522257?utm_source=channel-hottest",target:"_blank",rel:"noopener noreferrer"}},[e._v("jQuery"),l("OutboundLink")],1)]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom","aria-hidden":"true"}},[this._v("#")]),this._v(" DOM")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[e._v("document对象有很多属性来描述文档信息\n"),l("ul",[l("li",[e._v("document.doctype")]),e._v(" "),l("li",[e._v("document.title")]),e._v(" "),l("li",[e._v("document.characterSet")]),e._v(" "),l("li",[e._v("document.head")]),e._v(" "),l("li",[e._v("document.body")]),e._v(" "),l("li",[e._v("document.images")]),e._v(" "),l("li",[e._v("document.readyState属性返回当前文档的状态，共有三种可能的值\n"),l("ul",[l("li",[e._v("loading：加载HTML代码阶段，尚未完成解析")]),e._v(" "),l("li",[e._v("interactive：加载外部资源阶段")]),e._v(" "),l("li",[e._v("complete：全部加载完成")])])]),e._v(" "),l("li",[e._v("document.location属性返回一个只读对象，提供了当前文档的URL信息")]),e._v(" "),l("li",[e._v("document.write()写入新内容，覆盖新文档。还没有用close方法关闭，它所写入的内容就会追加在已有内容的后面。\n"),l("ul",[l("li",[e._v("document.open方法用于新建一个文档，供write方法写入内容。它实际上等于清除当前文档，重新写入内容")]),e._v(" "),l("li",[e._v("document.close方法用于关闭open方法所新建的文档。一旦关闭，write方法就无法写入内容了。")])])])])]),e._v(" "),l("li",[e._v("Element对象表示HTML元素。\n"),l("ul",[l("li",[l("p",[l("strong",[e._v("主要属性")])]),e._v(" "),l("ul",[l("li",[e._v("nodeName：元素标签名，还有个类似的tagName")]),e._v(" "),l("li",[e._v("nodeType：元素类型")]),e._v(" "),l("li",[e._v("className：类名")]),e._v(" "),l("li",[e._v("id：元素id")]),e._v(" "),l("li",[e._v("children：子元素列表（HTMLCollection）")]),e._v(" "),l("li",[e._v("childNodes：子元素列表（NodeList）")]),e._v(" "),l("li",[e._v("firstChild：第一个子元素")]),e._v(" "),l("li",[e._v("lastChild：最后一个子元素")]),e._v(" "),l("li",[e._v("nextSibling：下一个兄弟元素")]),e._v(" "),l("li",[e._v("previousSibling：上一个兄弟元素")]),e._v(" "),l("li",[e._v("parentNode、parentElement：父元素")])])]),e._v(" "),l("li",[l("p",[l("strong",[e._v("查询元素")])]),e._v(" "),l("ul",[l("li",[e._v("getElementById()")]),e._v(" "),l("li",[e._v("getElementsByClassName() 返回一个类似数组的对象（HTMLCollection类型的对象）")]),e._v(" "),l("li",[e._v("getElementsByTagName()返回值是一个HTMLCollection对象")]),e._v(" "),l("li",[e._v("getElementsByName()()选择带name属性的标签，返回一个NodeList格式的对象")]),e._v(" "),l("li",[e._v("querySelector()")]),e._v(" "),l("li",[e._v("querySelectorAll()返回的是NodeList类型的对象")])])]),e._v(" "),l("li",[l("p",[l("strong",[e._v("创建元素")])]),e._v(" "),l("ul",[l("li",[e._v("createElement()创建元素节点")]),e._v(" "),l("li",[e._v("createTextNode()创建文本节点")]),e._v(" "),l("li",[e._v("createDocumentFragment()创建一个存在于DOM内存但不属于当前文档的DocumentFragment对象，对他任何改动都不会引发网页的重新渲染，比直接修改当前文档的DOM有更好的性能表现。"),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v('            var body=document.body\nvar cearteDiv =body.appendChild(document.createElement("div")).appendChild(document.crea            teTextNode("cearteDiv"))\nvar cearteFragmentDIV =body.appendChild(document.createDocumentFragment()).appendChild(d            ocument.createTextNode("我和上面写法一样，但不存在"))\n                                       //       document.createDocumentFragment().appendChild(doc         ument.getElementById(\'lg\'))//不存在\nvar cearteFragmentDIV2=body.appendChild(document.createDocumentFragment().appendChild(do            cument.createTextNode("要这样写才存在")))\n                                        \n\nvar cearteFragmentObj=document.createDocumentFragment()\ncearteFragmentObj.appendChild(document.createTextNode(" lalala"))\nbody.appendChild(cearteFragmentObj)         \n')])])])])])]),e._v(" "),l("li",[l("p",[l("strong",[e._v("修改元素")])]),e._v(" "),l("ul",[l("li",[e._v("appendChild() 在元素末尾添加元素")]),e._v(" "),l("li",[e._v("insertBefore() 在某个元素之前插入元素")]),e._v(" "),l("li",[e._v("replaceChild()接受两个参数：要插入的元素和要替换的元素")])])]),e._v(" "),l("li",[l("p",[l("strong",[e._v("删除元素")])]),e._v(" "),l("ul",[l("li",[e._v("parentNode.removeChild(childNode);parentNode是删除目标的父元素，childNode是删除目标")])])]),e._v(" "),l("li",[l("p",[l("strong",[e._v("克隆元素")])]),e._v(" "),l("ul",[l("li",[e._v("node.cloneNode(true);方法用于克隆元素，方法有一个布尔值参数，传入true的时候会深复制，也就是会复制元素及其子元素（IE还会复制其事件），false的时候只复制元素本身")])])])])]),e._v(" "),l("li",[l("strong",[e._v("属性操作")]),e._v(" "),l("ul",[l("li",[e._v("getAttribute()用于获取元素的attribute值")]),e._v(" "),l("li",[e._v("createAttribute()方法生成一个新的属性对象节点，并返回它。")]),e._v(" "),l("li",[e._v('setAttribute("","")方法用于设置元素属性')]),e._v(" "),l("li",[e._v("removeAttribute()用于删除元素属性")]),e._v(" "),l("li",[e._v("innerText是一个可写属性，返回元素内包含的文本内容，在多层次的时候会按照元素由浅到深的顺序拼接其内容")]),e._v(" "),l("li",[e._v("innerHTML属性作用和innerText类似，但是不是返回元素的文本内容，而是返回元素的HTML结构，在写入的时候也会自动构建DOM")])])]),e._v(" "),l("li",[l("strong",[e._v("修改样式")]),e._v(" "),l("ul",[l("li",[e._v('dom.style.xxx=""')]),e._v(" "),l("li",[e._v("getComputedStyle(dom).XXX //获取样式")]),e._v(" "),l("li",[e._v("dom.classList.add('class')   //新增 class")]),e._v(" "),l("li",[e._v("dom.classList.remove('class')  //删除 class")]),e._v(" "),l("li",[e._v("dom.classList.toggle('class')   //新增/删除切换")]),e._v(" "),l("li",[e._v("dom.classList.contains('class')   // 判断是否拥有 class")])])]),e._v(" "),l("li",[l("strong",[e._v("页面宽高")]),e._v(" "),l("ul",[l("li",[e._v("element.clientHeight 内容高度")]),e._v(" "),l("li",[e._v("element.offsetHeight 内容高度包括边框")]),e._v(" "),l("li",[e._v("element.scrollHeight 元素滚动内容的总长度。如果元素没出现滚动条， scrollHeight等于 clientHeight")]),e._v(" "),l("li",[e._v("element.scrollTop 滚动的高度")]),e._v(" "),l("li",[e._v("window.innerHeight 窗口的高度")]),e._v(" "),l("li",[e._v("element.getBoundingClientRect() 获取元素在视窗中的位置")])])]),e._v(" "),l("li",[l("strong",[e._v("event对象")]),e._v(" "),l("ul",[l("li",[e._v("e.preventDefault() 取消事件默认行为\n"),l("ul",[l("li",[e._v("e.cancelable 属性表明该事件是否可以被取消默认行为")])])]),e._v(" "),l("li",[e._v("e.stopPropagation() 取消事件进一步捕获或冒泡")]),e._v(" "),l("li",[e._v("e.target 事件的目标元素 常用做事件代理")])])]),e._v(" "),l("li",[l("strong",[e._v("常用事件")]),e._v(" "),l("ul",[l("li",[e._v("click 鼠标单击")]),e._v(" "),l("li",[e._v("dblclick 鼠标双击")]),e._v(" "),l("li",[e._v("mousedown 鼠标指针在目标元素上触发(包括子元素)")]),e._v(" "),l("li",[e._v("mouseout 鼠标指针在目标元素上离开触发(包括子元素)")]),e._v(" "),l("li",[e._v("mouseenter 鼠标指针在目标元素上触发(除了子元素)")]),e._v(" "),l("li",[e._v("mouseleave 鼠标指针在目标元素上离开触发(除了子元素)")]),e._v(" "),l("li",[e._v("focus 元素获取焦点触发")]),e._v(" "),l("li",[e._v("blur  元素失去焦点触发")]),e._v(" "),l("li",[e._v("keyup 按下去松开触发")]),e._v(" "),l("li",[e._v("change 元素失去焦点，并且里面的值发生改变时触发")]),e._v(" "),l("li",[e._v('input 元素value值发生变化时实时触发，常用于实时更新滑动条type="range"')]),e._v(" "),l("li",[l("strong",[e._v("媒体事件")]),e._v(" "),l("ul",[l("li",[e._v("playing 当音乐开始播放，暂停后重新开始播放，设置currentTime后开始播放时触发")]),e._v(" "),l("li",[e._v("pause 当音乐暂停时和结束时触发")]),e._v(" "),l("li",[e._v("ended 当音乐结束时触发")]),e._v(" "),l("li",[e._v("timeupdate 当currentTime更新时会触发timeupdate事件,这个事件的触发频率由系统决定")]),e._v(" "),l("li",[e._v("volumechange 当音量改变时触发")])])])])]),e._v(" "),l("li",[l("strong",[e._v("DOM元素位置和尺寸大小")]),e._v(" "),l("ul",[l("li",[e._v("高度\n"),l("ul",[l("li",[e._v("offsetHeight = content + border + padding = 200 + 2 * 2 + 10 * 2 = 224")]),e._v(" "),l("li",[e._v("clientHeight = content + padding = 200 + 2 * 10 = 220")]),e._v(" "),l("li",[e._v("window.getComputedStyle(dom).height = css设置的样式")]),e._v(" "),l("li",[e._v("dom.getBoundingClientRect()方法获取与元素相关的CSS属性边框集合。\n返回对象中共有6个属性。(bottom,right,left,top,height,width)")])])]),e._v(" "),l("li",[e._v("element.scrollTop 滚动的高度")]),e._v(" "),l("li",[e._v("window.innerHeight 窗口的高度")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"动画"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画","aria-hidden":"true"}},[this._v("#")]),this._v(" 动画")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v(" document.querySelector('.box').animate([\n    {width:'0px'},\n    {width:'100px'}\n  ],1000)\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择器","aria-hidden":"true"}},[this._v("#")]),this._v(" 选择器")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[e._v(".eq 获取指定下标的jQuery对象，与之类似的有.get会jQuery对象转DOM对象\n"),l("ul",[l("li",[e._v(".eq(index), .get([index]) get()不写参数把所有对象转为DOM对象返回")])])]),e._v(" "),l("li",[e._v(".next / .prev 选择相邻的下一个元素/选择相邻的下一个元素\n"),l("ul",[l("li",[e._v(".next([selector])/.prev([selector]) 紧跟着的兄弟元素满足选择器时，才会返回此元素")])])]),e._v(" "),l("li",[e._v(".nextAll / .prevAll 选择相邻的下面全部元素/选择相邻的上面全部元素\n"),l("ul",[l("li",[e._v(".nextAll([selector]), .prevAll([selector]) 筛选出满足选择器的元素，返回此元素")])])]),e._v(" "),l("li",[e._v(".siblings 匹配相邻的所有元素\n"),l("ul",[l("li",[e._v(".siblings([selectors]) 筛选出满足选择器的元素，返回此元素")])])]),e._v(" "),l("li",[e._v(".parent / .parents 匹配对象的每个父元素/匹配对象的每个祖先元素\n"),l("ul",[l("li",[e._v("$('li.item-a').parent()/$('li.item-a').parents('div') 筛选出满足选择器的元素，返回此元素")])])]),e._v(" "),l("li",[e._v(".children / .find 获得匹配元素集合中每个元素的子元素，选择器选择性筛选\n"),l("ul",[l("li",[e._v(".children([selector])/.find([selector])")])])]),e._v(" "),l("li",[e._v(".filter 遍历元素对每个元素进行过滤\n"),l("ul",[l("li",[e._v(".filter(selector) / $('li').filter(function(index，node) {return index % 3 == 2;})")])])]),e._v(" "),l("li",[e._v(".not 从匹配的元素集合中移除指定的元素，和filter相反\n"),l("ul",[l("li",[e._v(".not(selector), .not(function(index))")])])]),e._v(" "),l("li",[e._v(".has 筛选匹配元素集合中的那些有相匹配的选择器或DOM元素的后代元素\n"),l("ul",[l("li",[e._v(".has(selector), .has(dom)")])])]),e._v(" "),l("li",[e._v(".is 判断当前匹配的元素集合中的元素，是否为一个选择器，DOM元素，或者jQuery对象.\n"),l("ul",[l("li",[e._v(".is(selector), is(function(index)), is(dom/jqObj) 如果这些元素至少一个匹配给定的参数，那么返回true")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"dom操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom操作","aria-hidden":"true"}},[this._v("#")]),this._v(" DOM操作")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[e._v(".append() 向对象头部追加内容，可以一次添加多个内容，内容可以是DOM对象、HTML string、 jQuery对象\n"),l("ul",[l("li",[e._v(".append(content[,content]) / .append(function(index,html))")])])]),e._v(" "),l("li",[e._v(".prepend() 向对象头部追加内容，用法和append类似，内容添加到最开始\n"),l("ul",[l("li",[e._v(".prepend(content[,content]) / .prepend(function(index,html))")])])]),e._v(" "),l("li",[e._v(".before() 在对象前面(不是头部，而是外面，和对象并列同级)插入内容，参数和append类似\n"),l("ul",[l("li",[e._v(".before([content][,content]) / .before(function)")])])]),e._v(" "),l("li",[e._v(".after() 在对象后面(不是尾部，而是外面，和对象并列同级)插入内容，prepend类似\n"),l("ul",[l("li",[e._v(".after([content][,content]) / .after(function（index）)")])])]),e._v(" "),l("li",[e._v(".remove() 删除被选元素（及其子元素）\n"),l("ul",[l("li",[e._v(".remove([selector]) 可以添加一个可选的选择器参数来过滤匹配的元素")])])]),e._v(" "),l("li",[e._v(".empty() 清空被选择元素内所有子元素（不包括被选择元素）\n"),l("ul",[l("li",[e._v("$('body').empty();")])])]),e._v(" "),l("li",[e._v(".html() 这是一个读写两用的方法，用于获取/修改元素的innerHTML\n"),l("ul",[l("li",[e._v("$('div').html() 当没有传递参数的时候，返回元素的innerHTML")]),e._v(" "),l("li",[e._v("$('div').html('123') 当传递了一个string参数的时候，修改元素的innerHTML为参数值")])])]),e._v(" "),l("li",[e._v(".text() 和html方法类似，操作的是DOM的innerText值\n"),l("ul",[l("li",[e._v("$('div').text()")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"属性操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#属性操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性操作")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[e._v(".val() 用来读取或者修改input的value值\n"),l("ul",[l("li",[e._v(".val([value])")])])]),e._v(" "),l("li",[e._v(".attr() 读取或者修改元素特定属性的值\n"),l("ul",[l("li",[e._v(".attr(attributeName) 读取")]),e._v(" "),l("li",[e._v(".attr(attributeName,value) / .attr(attributesJson) / .attr( attributeName, function(index, attr) ) 修改")])])]),e._v(" "),l("li",[e._v(".removeAttr() 为匹配的元素集合中的每个元素中移除一个属性（attribute）\n"),l("ul",[l("li",[e._v("$('div').removeAttr('id');")])])]),e._v(" "),l("li",[e._v(".prop()主要用来操作元素的property的，property和attibute是非常相似的概念")]),e._v(" "),l("li",[e._v(".css() 处理元素的css样式\n"),l("ul",[l("li",[e._v("例如 $('.box').css('color','pink')")]),e._v(" "),l("li",[e._v(".css(propertyName,value) / .css( propertyName, function(index, value) ) / .css( propertiesJson )")])])]),e._v(" "),l("li",[e._v(".addClass() 给指定元素添加class类名\n"),l("ul",[l("li",[e._v(".addClass(className) / .addClass(function(index,currentClass))")])])]),e._v(" "),l("li",[e._v(".removeClass() 移除元素单个/多个/所有class\n"),l("ul",[l("li",[e._v("removeClass([className]) / ,removeClass(function(index,class))")])])]),e._v(" "),l("li",[e._v(".hasClass() 检查元素是否包含某个class，返回true/false\n"),l("ul",[l("li",[e._v('$( "#mydiv" ).hasClass( "foo" )')])])]),e._v(" "),l("li",[e._v(".toggleClass() 切换类，如果元素对象有这个类名则去除，没有则添加\n"),l("ul",[l("li",[e._v(".toggleClass(className)")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[e._v(".each() 遍历一个jQuery对象，为每个匹配元素执行一个函数 类似元素forEach()\n"),l("ul",[l("li",[e._v('$("li").each(function(index,node) {})')])])]),e._v(" "),l("li",[e._v(".$.each() 一个通用的迭代函数，它可以用来无缝迭代对象和数组。\n"),l("ul",[l("li",[e._v("jQuery.each( collection, callback(indexInArray, valueOfElement) )")])])]),e._v(" "),l("li",[e._v("$.extend() 当我们提供两个或多个对象给$.extend()，对象的所有属性都添加到目标对象（target参数）。\n"),l("ul",[l("li",[e._v("jQuery.extend([deep,] target [, object1 ] [, objectN ] )")])])]),e._v(" "),l("li",[e._v(".clone() 方法深度复制所有匹配的元素集合，包括所有匹配元素、匹配元素的下级元素、文字节点\n"),l("ul",[l("li",[e._v(".clone( [withDataAndEvents ] ) //可用于DOM元素的复制")])])]),e._v(" "),l("li",[e._v(".index() 从给定集合中查找特定元素index\n"),l("ul",[l("li",[e._v(".index() 没参数返回第一个元素index")]),e._v(" "),l("li",[e._v(".index(selector)如果参数是DOM对象或者jQuery对象，则返回参数在集合中的index")]),e._v(" "),l("li",[e._v(".index(element) 如果参数是选择器，返回第一个匹配元素index，没有找到返回-1")])])]),e._v(" "),l("li",[e._v(".ready() 当DOM准备就绪时，指定一个函数来执行。与原生DOMContentLoaded类似\n"),l("ul",[l("li",[e._v("$(document).ready(handler)和$(handler)完全等价")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"动画-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 动画")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[e._v("hide() 隐藏 display:none")]),e._v(" "),l("li",[e._v("show() 显示 display:block")]),e._v(" "),l("li",[e._v(".fadeIn()")]),e._v(" "),l("li",[e._v(".fadeOut()")]),e._v(" "),l("li",[e._v(".fadeTo()")]),e._v(" "),l("li",[e._v(".animate()自定义动画")]),e._v(" "),l("li",[e._v("清除动画\n"),l("ul",[l("li",[e._v(".clearQueue() 停止当前动画，清除动画队列中未执行的动画")]),e._v(" "),l("li",[e._v(".finish()停止当前动画，并清除动画队列中所有未完成的动画,最终展示动画队列最后一帧的最终状态")]),e._v(" "),l("li",[e._v(".stop(true,true ) 停止当前动画，并清除动画队列中所有未完成的动画,最终展示动画队列最后一帧的最终状态")]),e._v(" "),l("li",[e._v(".stop(true,true ) 停止当前动画，清除动画队列中未执行的动画")])])])])}],!1,null,null,null);n.options.__file="DOM和事件.md";t.default=n.exports}}]);