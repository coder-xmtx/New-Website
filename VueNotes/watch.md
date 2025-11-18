# watch

`watch(数据,回调函数)`监视数据的变化，返回一个停止函数<br />
也就是当你想要停止监视的时候，只需调用函数本身（如下例`stopWatch`所示）

## 情况一：监视【ref】定义的【基本类型】数据

```Vue
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
    <div>
        <h2>情况一：监视【ref】定义的【基本类型】数据</h2>
        <div>
            总数：{{ sum }}
            <button @click="changeSum">总数加1</button>
        </div>
    </div>
</template>
```

## 情况二：监视【ref】定义的【对象类型】数据

监视的是对象的地址值

- 如果对象内某个属性发生了变化（比如下例的`changeAge`和`changeName`），并不会执行`watch`
- 如果对象的地址发生了变化（比如下例的`changePerson`），才会执行`watch`

针对第一种情况，如果对象内某个属性发生了变化也想监听到，就要开启深度监听<br />
watch 函数写入第三个参数：`watch(对象,回调函数,{deep:true})`

```Vue
<script setup lang="ts">
import { ref, watch } from 'vue';
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
})

</script>

<template>
    <h2>情况二：监视【ref】定义的【对象类型】数据</h2>
    <p>姓名：{{ person.name }} - 年龄：{{ person.age }}</p>
    <div>
        <button @click="changeName">姓名加~</button>
        <button @click="changeAge">年龄加1</button>
        <button @click="changePerson">重置</button>
    </div>
</template>
```

> [!Tip]
> 这时候会发现，当点击“姓名加~”和“年龄加 1”的按钮时，控制台输出的`newValue`和`oldValue`的值是一样的，为什么会出现这样的情况？我们可以看到，`watch`监听的是对象的地址，当其中一个属性发生改变时，其地址还是没变的，所以新值和旧值就一样了。在实际开发中这个问题也不是很重要，因为一般我们都只写一个值`value`，不会管旧的。
