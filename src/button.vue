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
    @import "../style.css";
    .jluzh-button{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        padding: var(--button-padding);
        color: var(--button-font-color);
        border: 1px solid;
        border-color: var(--button-border-color);
        border-radius: var(--button-border-radius);
        font-size: var(--button-font-size);
        line-height: var(--button-font-size);
        background: var(--button-bg);
        outline: none;
        &:hover{
            color: var(--button-hover-color);
            border-color: var(--button-hover-color);
        }
        &:active{
            color: var(--button-active-color);
            border-color: var(--button-active-color);
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
        color: var(--button-disabled-color);
        background: var(--button-disabled-bg);
        border-color: var(--button-button-border-color);
        cursor: not-allowed;
        &:hover{
            color: var(--button-disabled-color);
            border-color: var(--button-button-border-color);
        }
        &:active{
            color: var(--button-disabled-color);
            background: var(--button-disabled-bg);
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