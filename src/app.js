import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('jluzh-button',Button)
Vue.component('jluzh-button-group',ButtonGroup)
Vue.component('jluzh-icon',Icon)
Vue.component('jluzh-input',Input)
Vue.component('jluzh-row',Row)
Vue.component('jluzh-col',Col)
Vue.component('jluzh-layout',Layout)
Vue.component('jluzh-header',Header)
Vue.component('jluzh-content',Content)
Vue.component('jluzh-sider',Sider)
Vue.component('jluzh-footer',Footer)
Vue.component('jluzh-collapse',Collapse)
Vue.component('jluzh-collapse-item',CollapseItem)

new Vue({
    el: '#app',
    data: {
        selectedCollapse: ['1','2','3']
    },
    methods: {
        inputInput: function (e) {
            console.log(e)
        },
        changeInput: function (e) {
            console.log(e)
        },
        focusInput: function (e) {
            console.log(e)
        },
        blurInput: function (e) {
            console.log(e)
        },
    }
})