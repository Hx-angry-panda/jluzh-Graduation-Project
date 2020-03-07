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
    .jluzh-content{
        display: flex;
        flex-grow: 1;
    }
</style>