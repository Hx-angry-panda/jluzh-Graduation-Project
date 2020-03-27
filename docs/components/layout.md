---
title: 经典布局
---

# 经典布局

## 展示

经典布局展示
<ClientOnly>
    <layout-demo></layout-demo>
</ClientOnly>

## 使用方法
```html
<!-- 上中下布局 -->
<jluzh-layout>
    <jluzh-header>header</jluzh-header>
    <jluzh-content>content</jluzh-content>
    <jluzh-footer>footer</jluzh-footer>
</jluzh-layout>

<!-- 顶部-侧边布局 -->
<jluzh-layout>
    <jluzh-header>header</jluzh-header>
    <jluzh-layout>
        <jluzh-sider>sider</jluzh-sider>
        <jluzh-content>content</jluzh-content>
    </jluzh-layout>
    <jluzh-footer>footer</jluzh-footer>
</jluzh-layout>

<!-- 侧边布局 -->
<jluzh-layout>
    <jluzh-sider>sider</jluzh-sider>
    <jluzh-layout>
        <jluzh-header>header</jluzh-header>
        <jluzh-content>content</jluzh-content>
        <jluzh-footer>footer</jluzh-footer>
    </jluzh-layout>
</jluzh-layout>
```
