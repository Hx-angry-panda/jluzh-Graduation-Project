<template>
    <button class="jluzh-button" :disabled="disabled"
            :class="{isDisabled: disabled, [`icon-${iconPosition}`]: true}">
        <jluzh-icon v-if="icon" :name="icon" class="icon"></jluzh-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        name:'jluzh-Button',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value){
                    return ['left','right'].indexOf(value) >= 0
                }
            }
        },
        components:{
            'jluzh-icon': Icon
        }
    }
</script>

<style lang="scss" scoped>
    $button-font-color: #555555;
    $button-border-color: #CCCCCC;
    $button-font-size: 16px;
    $button-bg: white;
    $button-hover-color: #40A9FF;
    $button-active-color: #007BFF;
    $button-disabled-color: #AAAAAA;
    $button-disabled-bg: #F2F2F2;
    $button-disabled-border-color: #CCCCCC;
    *{margin: 0; padding: 0; box-sizing: border-box;}
    .jluzh-button{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        padding: 7px 10px;
        color: $button-font-color;
        border: 1px solid $button-border-color;
        border-radius: 5px;
        font-size: $button-font-size;
        line-height: $button-font-size;
        background: $button-bg;
        outline: none;
        &:hover{
            color: $button-hover-color;
            border-color: $button-hover-color;
        }
        &:active{
            color: $button-active-color;
            border-color: $button-active-color;
        }
        > .icon{
            margin-right: 0.5em;
            order: 1;
        }
        > .content{
            order: 2;
        }
        
    }
    .isDisabled{
        color: $button-disabled-color;
        background: $button-disabled-bg;
        border-color: $button-disabled-border-color;
        cursor: not-allowed;
        &:hover{
            color: $button-disabled-color;
            border-color: $button-disabled-border-color;
        }
        &:active{
            color: $button-disabled-color;
            background: $button-disabled-bg;
        }
    }
    .icon-right{
        > .icon{
            margin-right: 0;
            margin-left: 0.5em;
            order: 2;
        }
        > .content{
            order: 1;
        }
    }
</style>