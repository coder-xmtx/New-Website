<script setup lang="ts">
import { ref, toRefs } from 'vue';

interface UserInfo {
    name: string;
    age: number;
    profession: string;
}

// 定义对象
let obj = ref<UserInfo>({ name: "xmtx", age: 20, profession: "student" });
const games = ref([
    { name: "minecraft", price: 100 },
    { name: "moment valley", price: 200 },
    { name: "pubg", price: 300 },
]);

let { name, age, profession } = toRefs(obj.value); // 解构obj.value;

function changeAge() {
    age.value++;
    console.log(1);
}

</script>

<template>
    <div class="xmtx">
        <h1>xmtx的个人信息 - 对象版</h1>
        <p>姓名: {{ name }}</p>
        <p>年龄: {{ age }}</p>
        <p>职业: {{ profession }}</p>
        <button @click="changeAge" class="btn">年龄加1</button>
        <p v-for="game in games" :key="game.name">游戏: {{ game.name }} - {{ game.price }}元</p>
    </div>
</template>

<style scoped>
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