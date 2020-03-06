import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'

Vue.component('jluzh-button',Button)
Vue.component('jluzh-button-group',ButtonGroup)
Vue.component('jluzh-icon',Icon)
Vue.component('jluzh-input',Input)

new Vue({
    el: '#app',
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