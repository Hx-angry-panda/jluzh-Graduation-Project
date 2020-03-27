---
title: 栅格布局
---

# 栅格布局

## 展示

栅格布局展示
<ClientOnly>
    <grid-demo></grid-demo>
</ClientOnly>

## 使用方法
```html
<!-- 基础栅格功能 -->
<jluzh-row>
    <jluzh-col span="12"></jluzh-col>
    <jluzh-col span="12"></jluzh-col>
</jluzh-row>

<!-- 栅格间隔功能 -->
<jluzh-row gutter="200">
    <jluzh-col span="10"></jluzh-col>
    <jluzh-col span="10"></jluzh-col>
</jluzh-row>

<!-- 栅格左右偏移功能 -->
<jluzh-row>
    <jluzh-col span="8"></jluzh-col>
    <jluzh-col span="8" offset="8"></jluzh-col>
</jluzh-row>

<!-- 栅格排序功能 默认居左-->
<jluzh-row align="center">
    <jluzh-col span="8"></jluzh-col>
    <jluzh-col span="8"></jluzh-col>
</jluzh-row>
<jluzh-row align="right">
    <jluzh-col span="16"></jluzh-col>
    <jluzh-col span="4"></jluzh-col>
</jluzh-row>

<!-- 适配多设备 -->
<jluzh-row>
    <jluzh-col span="8" :ipad="{span:5,offset:5}" :pc="{span:4,offset:4}" :narrow-pc="{span:1,offset=2}" :width-pc="{span:1,offset=2}">
    </jluzh-col>
    <jluzh-col span="8" :ipad="{span:5,offset:5}" :pc="{span:4,offset:4}":narrow-pc="{span:1,offset=2}" :width-pc="{span:1,offset=2}">
    </jluzh-col>
    <jluzh-col span="8" :ipad="{span:2,offset:2}" :pc="{span:4,offset:4}":narrow-pc="{span:1,offset=2}" :width-pc="{span:1,offset=2}">
     </jluzh-col>
</jluzh-row>

```
