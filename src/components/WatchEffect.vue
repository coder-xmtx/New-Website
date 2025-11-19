<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';

// 数据
const temp = ref(0);
const height = ref(10);

// 方法
const changeTemp = () => {
    temp.value += 10;
}
const changeHeight = () => {
    height.value += 10;
}

// watch监视
// watch([temp, height], (value) => {
//     const [temp, height] = value;
//     if (temp >= 100 || height >= 100) {
//         console.log("温度或高度已经超过100了，不能再加了");
//     }
// })

// watchEffect监视
watchEffect(() => {
    if (temp.value >= 100 || height.value >= 100) {
        console.log("温度或高度已经超过100了，不能再加了");
    }
})

</script>

<template>
    <div class="flex flex-col bg-base-100 text-base-content m-2 p-2 rounded-box gap-2 font-bold">
        <p>当前温度：{{ temp }}</p>
        <p>当前高度：{{ height }}</p>
        <div>
            <button @click="changeTemp"
                class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">温度+10</button>
            <button @click="changeHeight"
                class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">高度+10</button>
        </div>
    </div>
</template>

<style scoped></style>