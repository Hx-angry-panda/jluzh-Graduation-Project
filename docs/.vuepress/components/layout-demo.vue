<template>
    <div class="layout">
        <!-- 上中下布局 -->
        <h4>上中下布局展示</h4>
        <jluzh-layout style="height: inherit;">
            <jluzh-header style="background: #bae7ff; height:40px;">header</jluzh-header>
            <jluzh-content style="background: #40a9ff; height:150px; flex-grow: 0;">content</jluzh-content>
            <jluzh-footer style="background: #bae7ff; height: 40px;">footer</jluzh-footer>
        </jluzh-layout>

        <!-- 顶部-侧边布局 -->
        <h4>顶部-侧边布局展示</h4>
        <jluzh-layout style="height: inherit;">
            <jluzh-header style="background: #bae7ff; height:40px;">header</jluzh-header>
            <jluzh-layout style="height:150px;">
                <jluzh-sider style="background: #096dd9;width: 60px;">sider</jluzh-sider>
                <jluzh-content style="background: #40a9ff;">content</jluzh-content>
            </jluzh-layout>
            <jluzh-footer style="background: #bae7ff; height:40px;">footer</jluzh-footer>
        </jluzh-layout>

        <!-- 侧边布局 -->
        <h4>侧边布局展示</h4>
        <jluzh-layout style="height:230px;">
            <jluzh-sider style="background: #096dd9;width: 60px;">sider</jluzh-sider>
            <jluzh-layout>
                <jluzh-header style="background: #bae7ff; height:40px;">header</jluzh-header>
                <jluzh-content style="background: #40a9ff;height:150px; flex-grow: 0;">content</jluzh-content>
                <jluzh-footer style="background: #bae7ff; height:40px;">footer</jluzh-footer>
            </jluzh-layout>
        </jluzh-layout>

    </div>

</template>
<script>
    import Layout from '../../../src/layout'
    import Header from '../../../src/header'
    import Content from '../../../src/content'
    import Sider from '../../../src/sider'
    import Footer from '../../../src/footer'
    export default {
        components: {
            'jluzh-layout': Layout,
            'jluzh-header': Header,
            'jluzh-content': Content,
            'jluzh-sider': Sider,
            'jluzh-footer': Footer
        }
    }
</script>
<style scoped>
</style>