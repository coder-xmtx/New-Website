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
    <div class="flex flex-col bg-base-100 text-base-content m-2 p-2 rounded-box gap-2 font-bold">
        <div class="border-b" id="1">
            <h2>情况一：监视【ref】定义的【基本类型】数据</h2>
            <div class="flex gap-10 items-center">
                总数：{{ sum }}
                <button @click="changeSum"
                    class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">
                    总数加1</button>
            </div>
        </div>

    </div>
</template>

<style scoped></style>