<script setup lang="ts">
import Test from "./components/Test.vue";
import Ref from "./components/Ref.vue";
import Computed from "./components/Computed.vue";
import Watch from "./components/Watch.vue";
import WatchEffect from "./components/WatchEffect.vue";
import LabelRef from "./components/LabelRef.vue";
import { useTemplateRef } from "vue";

// 控制台输出<LabelRef />
const test = useTemplateRef("test");

// 点击输出app.vue里的LabelRef实例
const testComponent = () => {
  console.log(test.value);
}

</script>

<template>
  <Test />
  <Ref />
  <Computed />
  <Watch />
  <WatchEffect />
  <h2 ref="title2">app.vue</h2>
  <button @click="testComponent">点击输出app.vue里的LabelRef实例</button>
  <LabelRef ref="test" />
</template>

<style></style>
