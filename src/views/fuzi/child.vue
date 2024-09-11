<template>
  <div>
    <div style="background-color: pink;">
      <div>
        <h2>子接收</h2>
        <div>{{ msg1 }}</div>
      </div>
      <div>
        <h2>子传递</h2>
        <el-button type="primary" @click="handleClick">点我给父组件传参</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 用于接收父组件的
import { defineProps  } from 'vue';
// 用于发给父组件的
import { defineEmits } from "vue";

defineProps({
  msg1: String
})

const emit = defineEmits(["son"])
const handleClick = () => {
  emit("son", "这是子组件传给父组件的东西")
}
</script>