<template>
    <div class="jluzh-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'jluzh-Button-Group',
        mounted() {
            for(let node of this.$el.children){
                let name = node.nodeName.toLowerCase()
                if(name !== 'button'){
                    console.warn(`按钮组里的子元素只能是 jluzh-button，但你写的是${name}`)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    *{margin: 0; padding: 0; box-sizing: border-box;}
    .jluzh-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .jluzh-button{
            border-radius: 0;
            &:first-child{
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }
            &:last-child{
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
            &:not(:first-child){
                margin-left: -1px;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>