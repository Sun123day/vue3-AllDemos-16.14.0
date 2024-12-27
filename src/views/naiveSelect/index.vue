<template>
  <div class="container">
    <div class="content">
      <h1>选项下拉框</h1>
      <div style="display: flex; justify-content: center;">
        <n-select
          v-model:value="selectedValue"
          placeholder="请选择客户端"
          :options="options"
          @update:value="handleSelectChange"
          style="width: 150px"
        />
        
        <n-button
          type="info"
          @click="handleConfirm"
        >
          确认
        </n-button>

        <n-button
          @click="handleReset"
        >
          重置
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NSelect, NButton } from "naive-ui";

const options = ref([
  {
    label: "选项1",
    value: "1"
  },
  {
    label: "选项2",
    value: "2"
  },
  {
    label: "选项3",
    value: "3"
  }
]);
const selectedValue = ref("");
const  handleSelectChange =(value) => {
  selectedValue.value = value;
}
const handleReset = () => {
  selectedValue.value = "";
}
const handleConfirm = () => {
  console.log(selectedValue.value);
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 400px;
  height: 400px;

  border: 1px solid #61afef;
}
</style>