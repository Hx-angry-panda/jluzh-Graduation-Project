---
title: 输入框
---

# 文本输入框

## 展示

文本输入框展示
<ClientOnly>
    <input-demo></input-demo>
</ClientOnly>

## 使用方法
```html
<jluzh-input></jluzh-input>

<jluzh-input value="文本输入框"></jluzh-input>

<jluzh-input type="password"></jluzh-input>

<jluzh-input value="禁止状态" disabled></jluzh-input>

<jluzh-input value="禁止编辑" readonly></jluzh-input>

<jluzh-input type="password" iserror="密码错误"></jluzh-input>

<jluzh-input @input="inputInput"></jluzh-input>

<jluzh-input @change="changeInput"></jluzh-input>

<jluzh-input @focus="focusInput"></jluzh-input>

<jluzh-input @blur="blurInput"></jluzh-input>
```
