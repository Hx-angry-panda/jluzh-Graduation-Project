<template>
    <div class="grid">
        <!-- 基础栅格功能 -->
        <h4>基础栅格展示——设置 span</h4>
        <jluzh-row>
            <jluzh-col span="12" class="col">
                <div class="content">12</div>
            </jluzh-col>
            <jluzh-col span="12" class="col">
                <div class="content">12</div>
            </jluzh-col>
        </jluzh-row>
        <jluzh-row>
            <jluzh-col span="8" class="col">
                <div class="content">8</div>
            </jluzh-col>
            <jluzh-col span="8" class="col">
                <div class="content">8</div>
            </jluzh-col>
            <jluzh-col span="8" class="col">
                <div class="content">8</div>
            </jluzh-col>
        </jluzh-row>
        <jluzh-row>
            <jluzh-col span="6">
                <div class="content">6</div>
            </jluzh-col>
            <jluzh-col span="6">
                <div class="content">6</div>
            </jluzh-col>
            <jluzh-col span="6">
                <div class="content">6</div>
            </jluzh-col>
            <jluzh-col span="6">
                <div class="content">6</div>
            </jluzh-col>
        </jluzh-row>

        <!-- 栅格间隔功能 -->
        <h4>栅格间隔功能展示——设置 gutter</h4>
        <jluzh-row gutter="10">
            <jluzh-col span="8" class="col">
                <div class="content">8</div>
            </jluzh-col>
            <jluzh-col span="8" class="col">
                <div class="content">8</div>
            </jluzh-col>
            <jluzh-col span="8" class="col">
                <div class="content">8</div>
            </jluzh-col>
        </jluzh-row>
        <jluzh-row gutter="20">
            <jluzh-col span="6" class="col">
                <div class="content">6</div>
            </jluzh-col>
            <jluzh-col span="6" class="col">
                <div class="content">6</div>
            </jluzh-col>
            <jluzh-col span="6" class="col">
                <div class="content">6</div>
            </jluzh-col>
            <jluzh-col span="6" class="col">
                <div class="content">6</div>
            </jluzh-col>
        </jluzh-row>

        <!-- 栅格左右偏移功能 -->
        <h4>栅格左右偏移功能——设置 offset</h4>
        <jluzh-row>
            <jluzh-col span="8" class="col">
                <div class="content">8</div>
            </jluzh-col>
            <jluzh-col span="8" offset="8" class="col">
                <div class="content">8</div>
            </jluzh-col>
        </jluzh-row>
        <jluzh-row>
            <jluzh-col span="6" offset="6" class="col">
                <div class="content">6</div>
            </jluzh-col>
            <jluzh-col span="6" offset="6" class="col">
                <div class="content">6</div>
            </jluzh-col>
        </jluzh-row>

        <!-- 栅格排序功能 默认居左-->
        <h4>栅格排序功能展示——设置 align，默认居左</h4>
        <jluzh-row align="left">
            <jluzh-col span="6" class="col">
                <div class="content">6</div>
            </jluzh-col>
            <jluzh-col span="5" class="col">
                <div class="content">5</div>
            </jluzh-col>
        </jluzh-row>
        <jluzh-row align="center">
            <jluzh-col span="8" class="col">
                <div class="content">8</div>
            </jluzh-col>
            <jluzh-col span="8" class="col">
                <div class="content">8</div>
            </jluzh-col>
        </jluzh-row>
        <jluzh-row align="right">
            <jluzh-col span="12" class="col">
                <div class="content">12</div>
            </jluzh-col>
            <jluzh-col span="4" class="col">
                <div class="content">4</div>
            </jluzh-col>
        </jluzh-row>

        <!-- 适配多设备 -->
        <h4>适配多设备功能展示——设置 ipad，pc，narrow-pc，width-pc，默认为移动端设备</h4>
        <jluzh-row>
            <jluzh-col span="8" :ipad="{span:5,offset:5}" :pc="{span:4,offset:4}">
                <div class="content">4</div>
            </jluzh-col>
            <jluzh-col span="8" :ipad="{span:5,offset:5}" :pc="{span:4,offset:4}">
                <div class="content">4</div>
            </jluzh-col>
            <jluzh-col span="8" :ipad="{span:2,offset:2}" :pc="{span:4,offset:4}">
                <div class="content">4</div>
            </jluzh-col>
        </jluzh-row>

        <jluzh-row gutter="100" align="center">
            <jluzh-col span="8" offset="1" :ipad="{span:5,offset:5}" :pc="{span:4,offset:4}">
            </jluzh-col>
            <jluzh-col span="8" offset="1" :ipad="{span:5,offset:5}" :pc="{span:4,offset:4}">
            </jluzh-col>
        </jluzh-row>
    </div>

</template>
<script>
    import Col from '../../../src/col'
    import Row from '../../../src/row'
    export default {
        components: {
            'jluzh-col': Col,
            'jluzh-row': Row
        }
    }
</script>
<style scoped>
    .grid div{
        text-align: center;
    }
    .content{
        font-size: 20px;
        background: #3eaf7c;
        border: 1px solid #ccc;
    }
    .col{
        margin-bottom: 0.5em;
    }
</style>