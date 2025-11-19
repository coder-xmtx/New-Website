<script setup lang="ts">
import { useTemplateRef } from 'vue';

// 控制台输出h2
const h2 = useTemplateRef("title2");
const outputH2 = () => {
    console.log(h2.value);
}

</script>

<template>
    <div class="flex flex-col bg-base-100 text-base-content m-2 p-2 rounded-box">
        <h2 ref="title2">labelRef.vue</h2>
        <button @click="outputH2">点击输出labelRef.vue里的h2</button>
    </div>
</template>

<style scoped></style>