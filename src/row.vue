<template>
    <div class="jluzh-row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'jluzh-Row',
        props: {
            gutter: {
                type: [Number,String]
            },
            align: {
                type: String,
                validator(value){
                    return ['left','right','center'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) =>{
                vm.gutter = this.gutter
            })
        },
        computed: {
            rowStyle: function(){
                let {gutter} = this
                return {
                    marginLeft: -gutter/2 + 'px',
                    marginRight: -gutter/2 + 'px'
                }
            },
            rowClass: function () {
                let {align} = this
                return [align && `align-${align}`]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .jluzh-row{
        display: flex;
        flex-wrap: wrap;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-center{
            justify-content: center;
        }
        &.align-right{
            justify-content: flex-end;
        }
    }
</style>