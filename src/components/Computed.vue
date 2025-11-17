<script setup lang="ts">
import { computed, ref } from 'vue';
let firstName = ref("张");
let lastName = ref("三");
let name = computed(() => firstName.value + " " + lastName.value);
</script>

<template>
    <div class="flex flex-col bg-base-100 text-base-content m-2 p-2 rounded-box gap-2 font-bold">
        <div class="flex gap-2 items-center">
            请输入姓：<input type="text" placeholder="姓" v-model="firstName"
                class="border-2 border-base-300 border-dashed rounded-field focus:outline-base-content p-1 ">
        </div>
        <div class="flex gap-2 items-center">
            请输入名：<input type="text" placeholder="名" v-model="lastName"
                class="border-2 border-base-300 border-dashed rounded-field focus:outline-base-content p-1">
        </div>
        <div class="flex gap-2 items-center">
            显示全名：{{ name }}
        </div>
    </div>
</template>

<style scoped></style>