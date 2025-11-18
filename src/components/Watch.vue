<script setup lang="ts">
import { ref, watch } from 'vue';

// --情况一：监视【ref】定义的【基本类型】数据--
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

// --情况二：监视【ref】定义的【对象类型】数据--
// 数据
let person = ref({
    name: "xmtx",
    age: 20
});

// 方法
function changeAge() {
    person.value.age++;
}

function changeName() {
    person.value.name += "~";
}

function changePerson() {
    person.value = {
        name: "xmtx",
        age: 20
    }
}

// 监视
watch(person, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue);
}, { deep: true });

// --情况三：监视【ref】定义的【对象类型】数据里的属性既有【基本类型】又有【对象类型】--
// 数据
let coder = ref({
    name: "xmtx",
    age: 20,
    language: {
        code1: "javascript",
        code2: "python"
    }
})

// 方法
function changeCoderName() {
    coder.value.name += "~";
}

function changeCoderAge() {
    coder.value.age++;
}

function changeCoderLanguage1() {
    coder.value.language.code1 = "golang";
}

function changeCoderLanguage2() {
    coder.value.language.code2 = "C++";
}

function changeAllLanguage() {
    coder.value.language = {
        code1: "java",
        code2: "C#"
    }
}

// 监视基本类型
watch(() => coder.value.name, (newValue, oldValue) => {
    console.log('coder.name变化了', newValue, oldValue);
}, { deep: true });

// 监视对象类型
watch(() => coder.value.language, (newValue, oldValue) => {
    console.log('coder.language变化了', newValue, oldValue);
}, { deep: true });

</script>

<template>
    <div class="flex flex-col bg-base-100 text-base-content m-2 p-2 rounded-box gap-2 font-bold">
        <div class="border-b" id="1">
            <h2 class="text-xl">情况一：监视【ref】定义的【基本类型】数据</h2>
            <div class="flex gap-10 items-center">
                总数：{{ sum }}
                <button @click="changeSum"
                    class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">
                    总数加1</button>
            </div>
        </div>
        <div class="border-b" id="2">
            <h2 class="text-xl">情况二：监视【ref】定义的【对象类型】数据</h2>
            <p>姓名：{{ person.name }} - 年龄：{{ person.age }}</p>
            <div class="flex gap-3 items-center">
                <button @click="changeName"
                    class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">
                    姓名加~</button>
                <button @click="changeAge"
                    class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">
                    年龄加1</button>
                <button @click="changePerson"
                    class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">
                    重置</button>
            </div>
        </div>
        <div class="border-b" id="3">
            <h2 class="text-xl">情况三：监视【ref】定义的【对象类型】数据里的属性既有【基本类型】又有【对象类型】</h2>
            <p>姓名：{{ coder.name }} - 年龄：{{ coder.age }} </p>
            <p>语言：{{ coder.language.code1 }} - {{ coder.language.code2 }}</p>
            <div class="flex gap-3 items-center">
                <button @click="changeCoderName"
                    class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">
                    姓名加~</button>
                <button @click="changeCoderAge"
                    class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">
                    年龄加1</button>
                <button @click="changeAllLanguage"
                    class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">
                    修改所有语言</button>
                <button @click="changeCoderLanguage1"
                    class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">
                    语言1改成golang</button>
                <button @click="changeCoderLanguage2"
                    class="bg-neutral text-neutral-content rounded-field px-2 py-1 m-1 font-bold transition duration-500">
                    语言2改成C++</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>