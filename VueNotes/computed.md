# computed 计算属性

可以在`setup`语法糖里使用计算属性，使得`<template>`模板的输出更加简单 <nbr />
`computed()`函数里面接收一个函数

```Vue
<script setup lang="ts">
import { computed, ref } from 'vue';
let firstName = ref("张");
let lastName = ref("三");
let name = computed(() => firstName.value + " " + lastName.value);
</script>

<template>
    <div >
        <div>
            请输入姓：<input type="text" placeholder="姓" v-model="firstName">
        </div>
        <div>
            请输入名：<input type="text" placeholder="名" v-model="lastName">
        </div>
        <div>
            显示全名：{{ name }}
        </div>
    </div>
</template>
```
