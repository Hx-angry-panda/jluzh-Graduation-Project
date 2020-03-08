<template>
    <div class="jluzh-collapse-item">
        <div @click="toggle" class="title">
            {{title}}
        </div>
        <div v-if="open" class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'jluzh-Collapse-Item',
        inject: ['eventBus'],
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                open: false
            }
        },
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', (names) => {
                if(names.indexOf(this.name) >= 0){
                    this.open = true
                }else{
                    this.open = false
                }
            })
        },
        methods: {
            toggle: function () {
                if (this.open) {
                    this.eventBus.$emit('update:removeSelected', this.name)
                }else{
                    this.eventBus.$emit('update:addSelected', this.name)
                }
            }
        }

    }
</script>
<style lang="scss" scoped>
    $border-color: #CCCCCC;
    $title-color: #F2F2F2;
    $font-color: #555555;
    $content-background: #FFFFFF;
    .jluzh-collapse-item{
        > .title{
            border-top: 1px solid $border-color;
            border-left: 1px solid $border-color;
            border-right: 1px solid $border-color;
            background: $title-color;
            min-height: 27px;
            display: flex;
            align-items: center;
            padding: 0 0.5em;
            cursor: pointer;
            word-break: break-all;
            color: $font-color;
        }
        > .content{
            border-top: 1px solid $border-color;
            border-left: 1px solid $border-color;
            border-right: 1px solid $border-color;
            min-height: 27px;
            display: flex;
            align-items: center;
            padding: 0 0.5em;
            word-break: break-all;
            color: $font-color;
        }
        &:first-child {
            > .title {
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
        }
        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
                border-bottom: 1px solid $border-color;
                min-height: 28px;
            }
        }
        &:last-child {
            > .content:last-child {
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
                border-bottom: 1px solid $border-color;
                min-height: 28px;
            }
        }
    }
</style>