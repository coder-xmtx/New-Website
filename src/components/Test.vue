<script setup lang="ts">
import { ref } from 'vue';

// 定义变量
let name = ref("xmtx");
let age = ref(20);
let profession = "student";

// 定义方法
function changeName() {
    name.value = "xmtx Su";
}

function changeAge() {
    age.value += 1;
}

function showProfession() {
    alert(profession);
}
</script>

<template>
    <div class="xmtx">
        <h1>xmtx的个人信息 - 变量版</h1>
        <p>姓名: {{ name }}</p>
        <p>年龄: {{ age }}</p>
        <p>职业: {{ profession }}</p>
        <button @click="changeName" class="btn">切换姓名</button>
        <button @click="changeAge" class="btn">年龄加1</button>
        <button @click="showProfession" class="btn">显示职业</button>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.xmtx {
    background-color: #cbdcff;
    color: #001643;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
}

.btn {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #0044cd;
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #0022a3;
}

.btn:first-of-type {
    margin-left: 0;
}
</style>