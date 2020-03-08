<template>
    <svg class="jluzh-icon">
        <use v-bind:xlink:href="`#icon-${name}`"/>
    </svg>
</template>

<script>
    import './svg.js'
    export default {
        name: 'jluzh-Icon',
        props: {
            name:{
                validator(value){
                    return['download','upload','setting','email','tel','address','like','filter','warning'].indexOf(value) >= 0
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $icon-width: 16px;
    $icon-height: 16px;
    *{margin: 0; padding: 0; box-sizing: border-box;}
    .jluzh-icon{
        width: $icon-width;
        height: $icon-height;
        vertical-align: middle;
    }
</style>