<template>
  <div>
    <h1>父子传参</h1>
    <div>
      <div>
        <h2>父传子</h2>
        <!-- 绑定事件监听器在子组件上 -->
        <Child :msg1="pMsg1" @son="getSon"></Child>
      </div>
      <div>
        <h2>父接收</h2>
        <div>{{ cMsg1 }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Child from './child.vue'

const pMsg1 = ref('父传给子的第一个消息')

const cMsg1 = ref('')
const getSon = (val) => {
  cMsg1.value = val
  console.log('子组件发来的消息', cMsg1.value);
}
</script>