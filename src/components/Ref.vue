<script setup lang="ts">
import { ref } from 'vue';

// 定义对象
let obj = ref({ name: "xmtx", age: 20, profession: "student" });
const games = ref([
    { name: "minecraft", price: 100 },
    { name: "moment valley", price: 200 },
    { name: "pubg", price: 300 },
])
</script>

<template>
    <div class="xmtx">
        <h1>xmtx的个人信息 - 对象版</h1>
        <p>姓名: {{ obj.name }}</p>
        <p>年龄: {{ obj.age }}</p>
        <p>职业: {{ obj.profession }}</p>
        <p v-for="game in games" :key="game.name">游戏: {{ game.name }} - {{ game.price }}元</p>
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
</style>