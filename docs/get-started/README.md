---
title: 快速上手
---

# Get Started

## 安装

参照[安装](/install/)章节

## 添加样式

使用本组件库前，请在CSS中开启 `border-box`
```css
*，*::before,*::after{ box-sizing: border-box }
```

## 引入

1. 使用 Vue CLI，在 APP.vue 添加如下代码
```vue
<script>
import {Button, ButtonGroup, Icon, Input, Row, Col, Header, Content, Sider, Footer, Layout, Collapse, CollapseItem} from 'jluzh-hx'
import 'jluzh-hx/dist/index.css'
export default {
  name: 'App',
  components: {
    'jluzh-button': Button,
    'jluzh-button-group': ButtonGroup,
    'jluzh-icon': Icon,
    'jluzh-input': Input,
    'jluzh-row': Row,
    'jluzh-col': Col,
    'jluzh-header': Header,
    'jluzh-content': Content,
    'jluzh-sider': Sider,
    'jluzh-footer': Footer,
    'jluzh-layout': Layout,
    'jluzh-collapse': Collapse,
    'jluzh-collapse-item': CollapseItem
  },
  data(){
    return{
      selectedCollapse: [],
      inputInput: function(){},
      changeInput: function(){},
      focusInput: function(){},
      blurInput: function(){}
    }
  }
}
</script>
```

2. 使用 WebPack，在 src/index.js 中添加以下代码
```js
import Vue from 'vue'
import {Button, ButtonGroup, Icon, Input, Row, Col, Header, Content, Sider, Footer, Layout, Collapse, CollapseItem} from 'jluzh-hx'
import 'jluzh-hx/dist/index.css'

Vue.component('jluzh-button',Button)
Vue.component('jluzh-button-group',ButtonGroup)
Vue.component('jluzh-icon',Icon)
Vue.component('jluzh-input',Input)
Vue.component('jluzh-row',Row)
Vue.component('jluzh-col',Col)
Vue.component('jluzh-header',Header)
Vue.component('jluzh-content',Content)
Vue.component('jluzh-sider',Sider)
Vue.component('jluzh-footer',Footer)
Vue.component('jluzh-layout',Layout)
Vue.component('jluzh-collapse',Collapse)
Vue.component('jluzh-collapse-item',CollapseItem)

new Vue({
    el: '#app',
    data: {
        selectedCollapse: [],
        inputInput: function(){},
        changeInput: function(){},
        focusInput: function(){},
        blurInput: function(){}
    }
})
```

3. 使用 Parcel，在 index.js 中添加以下代码
```js
import Vue from 'vue'
import {Button, ButtonGroup, Icon, Input, Row, Col, Header, Content, Sider, Footer, Layout, Collapse, CollapseItem} from 'jluzh-hx'
import 'jluzh-hx/dist/index.css'
new Vue({
    el: '#app',
    components: {
        'jluzh-button': Button,
        'jluzh-button-group': ButtonGroup,
        'jluzh-icon': Icon,
        'jluzh-input': Input,
        'jluzh-row': Row,
        'jluzh-col': Col,
        'jluzh-header': Header,
        'jluzh-content': Content,
        'jluzh-sider': Sider,
        'jluzh-footer': Footer,
        'jluzh-layout': Layout,
        'jluzh-collapse': Collapse,
        'jluzh-collapse-item': CollapseItem
      },
      data(){
        return{
          selectedCollapse: [],
          inputInput: function(){},
          changeInput: function(){},
          focusInput: function(){},
          blurInput: function(){}
        }
      }
})



```