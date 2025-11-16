<script setup lang="ts">
import { ref } from 'vue';

// 定义变量
let name = ref("xmtx");
const age = ref(20);
let profession = "student";

// 定义方法
function changeName() {
    name.value = "xmtx Su";
}

function changeAge() {
    age.value++;
}

function showProfession() {
    alert(profession);
}
</script>

<template>
    <div class="flex flex-col bg-base-100 text-base-content m-2 p-2 rounded-box">
        <h1 class="text-2xl font-bold">xmtx的个人信息 - 变量版</h1>
        <p>姓名: {{ name }}</p>
        <p>年龄: {{ age }}</p>
        <p>职业: {{ profession }}</p>
        <div class="flex gap-2">
            <button @click="changeName"
                class=" bg-neutral text-neutral-content rounded-field px-2 py-1 m-1">切换姓名</button>
            <button @click="changeAge"
                class=" bg-neutral text-neutral-content rounded-field px-2 py-1 m-1">年龄加1</button>
            <button @click="showProfession"
                class=" bg-neutral text-neutral-content rounded-field px-2 py-1 m-1">显示职业</button>
        </div>
    </div>
</template>

<style scoped></style>