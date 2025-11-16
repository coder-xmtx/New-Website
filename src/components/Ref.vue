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
}

</script>

<template>
    <div class="flex flex-col bg-base-100 text-base-content m-2 p-2 rounded-box">
        <h1 class="text-2xl font-bold">xmtx的个人信息 - 对象版</h1>
        <p>姓名: {{ name }}</p>
        <p>年龄: {{ age }}</p>
        <p>职业: {{ profession }}</p>
        <p v-for="game in games" :key="game.name">游戏: {{ game.name }} - {{ game.price }}元</p>
        <div class="flex gap-2">
            <button @click="changeAge"
                class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">
                年龄加1</button>
        </div>
    </div>
</template>

<style scoped></style>