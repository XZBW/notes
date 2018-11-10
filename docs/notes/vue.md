# 基础
options vue object
- el： dom元素对象
    - "#DomObj"
    - document.querySelector('#DomObj') //更为优化，避免了vue判断查询
- template：模板
- data：数据
    - data:{key:"数据"}   //可选
    - data:function(){return{key:"数据"}} //可选
- methods
- components:{}     //声明组件
- watch		//监控数据
	- 深度监控
	- obj:{deep:true,handler:function(a){console.log(a.data)}}
- cumputed 监事多个数据
# 指令
- v-text    //innertext
- v-html    //innerHtml
- v-model	//双向绑定（一般用在input[text] ）
- - v-bind 给元素的属性赋值 (单向绑定)
    - v-bind:'atrr="value"
    - 简写 :atrr="value"
- if-else 判断,以下三个指令必须是相邻的DOM，（删除DOM元素）
    - v-if
    - v-else-if
    - v-else
- v-show (隐藏DOM元素)

- v-on 给元素添加事件
    - v-on:click='on'
    - 简写 @click='on
- 'v-for
    - 数组(item,index) in item
    - 对象(key,value,index) in items
# 组件 component
-   父组件通过 props 向下传递数据给子组件
- 子组件通过 events 给父组件发送消息

  ### 全局组件
	- xxxx
	- xxxx
# 过滤器（管道）
```javascript
Vue.filter('dataReverse',(data)=>{
    return data.split('').reverse().join('')
})
```

