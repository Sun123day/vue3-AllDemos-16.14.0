<template>
  <div>
    <h1>复制井字棋——使用数组判断</h1>
    <div class="wrapper">
      <p>这是第{{ chessCnt }}步棋</p>
      <div class="chess-container">
        <!-- 整出3行3列九宫格 -->
        <el-row v-for="row in 3" :key="row" class="row">
          <el-button 
            v-for="col in 3" 
            :key="3 * (row - 1) + (col - 1)"
            class="button" 
            :disabled="!buttonsClickable[3 * (row - 1) + (col - 1)]" 
            @click="handleClick(3 * (row - 1) + (col - 1))"
          >{{ btnVal[3 * (row - 1) + (col - 1)] }}</el-button>
        </el-row>
      </div>
      <p>{{ resultTxt }}</p>
      <el-button
        v-if="winnerFlag"
        @click="handleReset"
      >重新开始</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const chessCnt = ref(0);
const winnerFlag = ref(false);
const btnVal = ref(['', '', '', '', '', '', '', '', '']);
const resultTxt = ref('');
const buttonsClickable = ref([true, true, true, true, true, true, true, true, true]);

const handleClick = (index) => {
  if (!buttonsClickable.value[index]) {
    return;
  }

  chessCnt.value++;
  const value = chessCnt.value % 2 !== 0 ? 'X' : 'O';
  btnVal.value[index] = value;
  buttonsClickable.value[index] = false;

  if (checkGameEnd()) {
    // 两行代码效果一样
    // buttonsClickable.value = buttonsClickable.value.map(() => false);
    buttonsClickable.value.fill(false);
  }
}

const checkGameEnd = () => {
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横向
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // 纵向
    [0, 4, 8], [2, 4, 6] // 对角线
  ];
  
  console.log("btnVal", btnVal.value);
  
  for (const [a, b, c] of winningConditions) {
    if (btnVal.value[a] && btnVal.value[a] === btnVal.value[b] && btnVal.value[a] === btnVal.value[c]) {
      resultTxt.value = `游戏结束，${btnVal.value[a]}获胜！`;
      winnerFlag.value = true;
      return true;
    }
  }

  if (!btnVal.value.includes('')) {
    resultTxt.value = '游戏结束，平局！';
    winnerFlag.value = true;
    return true;
  }

  return false;
}

const handleReset = () => {
  chessCnt.value = 0;
  resultTxt.value = '';
  // 下方逐个赋值可以使用.fill()来代替
  // btnVal.value = ['', '', '', '', '', '', '', '', ''];
  // buttonsClickable.value = [true, true, true, true, true, true, true, true, true];
  btnVal.value.fill('');
  buttonsClickable.value.fill(true);
  winnerFlag.value = false;
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 没有用上 */
/* .chess-container {
  display: flex;
  flex-direction: column;
} */

/* 如何搞出三份的样式 */
.row {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.button {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
</style>