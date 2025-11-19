# 标签的 ref 属性

## 传统想法

虽然说 Vue 帮我们简洁了很多直接操作 DOM 的流程，但是有时候我们还是要标记一些内容<br/>
传统的做法是给某个标签一个`id`，然后用`document.querySeletor()`来获取 DOM，但是这种做法在 Vue 里面并不好，因为 Vue 是一种组件化的思想，这样子很可能会导致 DOM 元素标记错误<br/>

举个例子：<br/>
`LabelRef.vue`

```Vue
<script setup lang="ts">
// 控制台输出h2
const outputH2 = () => {
    console.log(document.querySelector("#title2"));
}

</script>

<template>
    <div>
        <h2 id="title2">labelRef.vue</h2>
        <button @click="outputH2">点击输出labelRef.vue里的h2</button>
    </div>
</template>
```

`App.vue`

```Vue
<script setup lang="ts">
import LabelRef from "./components/LabelRef.vue";
</script>

<template>
  <h2 id="title2">app.vue</h2>
  <LabelRef />
</template>
```

`App.vue`里面使用了`LabelRef.vue`组件，但是两个 vue 文件里都有`id="title2"`的标签，这时候如果点击【点击输出 labelRef.vue 里的 h2】按钮，会发现输出的竟然是`App.vue`自己的 h2 标签的内容，开发中肯定不能出现这种问题

## Vue 3.5+ 版本的正确做法

不应该使用`id`标记元素，应该使用`ref`，在`<script>`块里导入`useTemplateRef`，将`ref`的值写进`useTemplateRef()`

```Vue
<script setup lang="ts">
import { useTemplateRef } from 'vue';

// 控制台输出h2
const h2 = useTemplateRef("title2");
const outputH2 = () => {
    console.log(h2.value);
}

</script>

<template>
    <div>
        <h2 ref="title2">labelRef.vue</h2>
        <button @click="outputH2">点击输出labelRef.vue里的h2</button>
    </div>
</template>
```
