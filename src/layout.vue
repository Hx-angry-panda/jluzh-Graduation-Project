<template>
    <div class="jluzh-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'jluzh-Layout',
        data: function(){
          return {
              layoutClass: {
                  hasSider: false
              }
          }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if(vm.$options.name === 'jluzh-Sider'){
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    $layout-height: 100vh;
    .jluzh-layout{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        height: $layout-height;
    }
    .hasSider{
        flex-direction: row;
    }
</style>