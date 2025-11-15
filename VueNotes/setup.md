# setup

直接在 `setup()` 里面定义变量，然后将值返回，在 `<template>` 里用 `{{ }}` 来调用
注意：`setup()`中的`this`是`undefined`，所以说在 Vue3 里可以不考虑`this`

```Vue
<script lang="ts">
export default {
    setup() {
        let name = "xmtx";
        let age = 20;
        let profession = "student";

        return {
            name,
            age,
            profession,
        };
    }
}
</script>

<template>
    <div class="xmtx">
        <h1>xmtx的个人信息</h1>
        <p>姓名: {{ name }}</p>
        <p>年龄: {{ age }}</p>
        <p>职业: {{ profession }}</p>
    </div>
</template>
```
