<template>
    <div class="jluzh-content">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'jluzh-Content',
    }
</script>
<style lang="scss" scoped>
    *{margin: 0; padding: 0; box-sizing: border-box;}
    .jluzh-content{
        display: flex;
        flex-grow: 1;
    }
</style>