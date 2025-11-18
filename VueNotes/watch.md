# watch

`watch(数据,回调函数)`监视数据的变化，返回一个停止函数<br />
也就是当你想要停止监视的时候，只需调用函数本身（如下例`stopWatch`所示）

## 情况一：监视【ref】定义的【基本类型】数据

```Vue
<script setup lang="ts">
import { ref, watch } from 'vue';

// 数据
let sum = ref(0);

// 方法
function changeSum() {
    sum.value++;
}

// 监视:watch(要监视的对象,回调函数)
const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log(newValue, oldValue);
    if (newValue >= 5) {
        stopWatch(); // 停止监视
    }
})

</script>

<template>
    <div>
        <h2>情况一：监视【ref】定义的【基本类型】数据</h2>
        <div>
            总数：{{ sum }}
            <button @click="changeSum">总数加1</button>
        </div>
    </div>
</template>
```
