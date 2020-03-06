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
                    return['download','upload','setting','email','tel','address','like','filter'].indexOf(value) >= 0
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .jluzh-icon{
        width: var(--icon-width);
        height: var(--icon-height);
        vertical-align: middle;
    }
</style>