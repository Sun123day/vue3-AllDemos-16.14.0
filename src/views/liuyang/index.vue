<template>
  <div>
    <h1>填入阶数，所有数字相加相同——数独</h1>
    <!-- <div>
      <el-input placeholder="请输入阶数" v-model="stage"></el-input>
    </div>
    <div>
      结果：{{ result }}
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const result = ref('')

const stage = ref(1)

</script>