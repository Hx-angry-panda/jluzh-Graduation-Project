<template>
    <div>
        <div class="input">
            <jluzh-input></jluzh-input>
            <jluzh-input value="文本输入框"></jluzh-input>
            <jluzh-input type="password"></jluzh-input>
        </div>
        <div class="input">
            <jluzh-input value="禁止状态" disabled></jluzh-input>
            <jluzh-input value="禁止编辑" readonly></jluzh-input>
            <jluzh-input type="password" iserror="密码错误"></jluzh-input>
        </div>
        <div class="input">
            <jluzh-input @input="inputInput"></jluzh-input>
            <jluzh-input @change="changeInput"></jluzh-input>
            <jluzh-input @focus="focusInput"></jluzh-input>
            <jluzh-input @blur="blurInput"></jluzh-input>
        </div>
    </div>

</template>
<script>
    import Input from '../../../src/input'
    export default {
        components: {
            'jluzh-input': Input
        }
    }
</script>
<style>
    .input {
        margin-bottom: 1em;
        display: flex;
        flex-wrap: wrap;
    }
</style>