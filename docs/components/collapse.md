---
title: 折叠面板
---

# 折叠面板

## 展示

折叠面板展示
<ClientOnly>
    <collapse-demo></collapse-demo>
</ClientOnly>

## 使用方法
```html
<!-- 可同时打开多个面板，默认打开面板1 -->
<jluzh-collapse :selected.sync="selectedCollapse">
    <jluzh-collapse-item title="Collapse1" name="1">内容1</jluzh-collapse-item>
    <jluzh-collapse-item title="Collapse2" name="2">内容2</jluzh-collapse-item>
    <jluzh-collapse-item title="Collapse3" name="3">内容3</jluzh-collapse-item>
</jluzh-collapse>

<!-- 每次只能打开一个面板，默认不打开面板 -->
<jluzh-collapse single :selected.sync="selectedCollapse2">
    <jluzh-collapse-item title="Collapse1" name="1">内容1</jluzh-collapse-item>
    <jluzh-collapse-item title="Collapse2" name="2">内容2</jluzh-collapse-item>
    <jluzh-collapse-item title="Collapse3" name="3">内容3</jluzh-collapse-item>
</jluzh-collapse>
```

```js
//设置默认打开面板
...
selectedCollapse: ['1'],
selectedCollapse2:[]
...
```
