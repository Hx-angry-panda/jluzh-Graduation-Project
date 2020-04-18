<template>
    <div class="collapse">
        <!-- 默认状态 可同时打开多个面板 -->
        <jluzh-collapse :selected.sync="selectedCollapse">
            <jluzh-collapse-item title="Collapse1" name="1">内容1</jluzh-collapse-item>
            <jluzh-collapse-item title="Collapse2" name="2">内容2</jluzh-collapse-item>
            <jluzh-collapse-item title="Collapse3" name="3">内容3</jluzh-collapse-item>
        </jluzh-collapse>
        <!-- 每次只能打开一个面板 -->
        <jluzh-collapse single :selected.sync="selectedCollapse" style="margin-top: 3em;">
            <jluzh-collapse-item title="Collapse1" name="1">内容1</jluzh-collapse-item>
            <jluzh-collapse-item title="Collapse2" name="2">内容2</jluzh-collapse-item>
            <jluzh-collapse-item title="Collapse3" name="3">内容3</jluzh-collapse-item>
        </jluzh-collapse>
        <!-- 默认打开面板2 -->
        <jluzh-collapse single :selected.sync="selectedCollapse2" style="margin-top: 3em;">
            <jluzh-collapse-item title="Collapse1" name="1">内容1</jluzh-collapse-item>
            <jluzh-collapse-item title="Collapse2" name="2">内容2</jluzh-collapse-item>
            <jluzh-collapse-item title="Collapse3" name="3">内容3</jluzh-collapse-item>
        </jluzh-collapse>
    </div>

</template>
<script>
    import Collapse from '../../../src/collapse'
    import CollapseItem from '../../../src/collapse-item'
    export default {
        components: {
            'jluzh-collapse': Collapse,
            'jluzh-collapse-item': CollapseItem
        },
        data(){
            return {
                selectedCollapse: [],
                selectedCollapse2: ['2']
            }
        }
    }
</script>
<style scoped>
</style>