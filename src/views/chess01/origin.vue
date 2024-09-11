<template>
  <div>
    <h1>复制井字棋</h1>
    <div class="wrapper">
      <p>这是第{{ chessCnt }}步棋</p>
      <!-- <el-button @click="click">点这个</el-button> -->
      <div class="chess-container">
        <el-row class="row">
          <el-button class="button" :disabled="!buttonsClickable.value[0]" @click="handleClick(0)">{{ btnVal.value[0] }}</el-button>
          <el-button class="button" :disabled="!buttonsClickable.value[1]" @click="handleClick(1)">{{ btnVal.value[1] }}</el-button>
          <el-button class="button" :disabled="!buttonsClickable.value[2]" @click="handleClick(2)">{{ btnVal.value[2] }}</el-button>
        </el-row>
        <el-row class="row">
          <el-button class="button" :disabled="!buttonsClickable.value[3]" @click="handleClick(3)">{{ btnVal.value[3] }}</el-button>
          <el-button class="button" :disabled="!buttonsClickable.value[4]" @click="handleClick(4)">{{ btnVal.value[4] }}</el-button>
          <el-button class="button" :disabled="!buttonsClickable.value[5]" @click="handleClick(5)">{{ btnVal.value[5] }}</el-button>
        </el-row>
        <el-row class="row">
          <el-button class="button" :disabled="!buttonsClickable.value[6]" @click="handleClick(6)">{{ btnVal.value[6] }}</el-button>
          <el-button class="button" :disabled="!buttonsClickable.value[7]" @click="handleClick(7)">{{ btnVal.value[7] }}</el-button>
          <el-button class="button" :disabled="!buttonsClickable.value[8]" @click="handleClick(8)">{{ btnVal.value[8] }}</el-button>
        </el-row>
      </div>
      <p>{{ resultTxt }}</p>
      <el-button
        v-if="winnerFlag"
        @click="handleRest"
      >重新开始</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const chessCnt = ref(0);

const winnerFlag = ref(false);

const click = () => {
  chessCnt.value++;
};

const btnVal = ref(['', '', '','', '', '', '', '', '']);

const resultTxt = ref('');

const buttonsClickable = ref([true, true, true, true, true, true, true, true, true]);

const handleClick = (index) => {
  if (!buttonsClickable[index]) {
    // 如果按钮已经被点击过了，直接退出
    return;
  }

  chessCnt.value ++;
  const value = chessCnt.value % 2 !== 0? 'X' : 'O';
  btnVal.value[index] = value;
  buttonsClickable[index] = false;   //选了的禁选

  console.log("chessCnt.value", chessCnt.value);

  // 检查游戏是否结束，如果结束则禁用所有按钮
  if (checkGameEnd()) {
    buttonsClickable.value = [false, false, false, false, false, false, false, false, false];
  }
}

const checkGameEnd = () => {
  // 检查游戏是否结束，例如判断是否有一方获胜或平局
  if (
        (btnVal.value[0] === btnVal.value[1] && btnVal.value[1] === btnVal.value[2] && btnVal.value[0]) ||
        (btnVal.value[3] === btnVal.value[4] && btnVal.value[4] === btnVal.value[5] && btnVal.value[3]) ||
        (btnVal.value[6] === btnVal.value[7] && btnVal.value[7] === btnVal.value[8] && btnVal.value[6]) ||
        (btnVal.value[0] === btnVal.value[3] && btnVal.value[3] === btnVal.value[6] && btnVal.value[0]) ||
        (btnVal.value[1] === btnVal.value[4] && btnVal.value[4] === btnVal.value[7] && btnVal.value[1]) ||
        (btnVal.value[2] === btnVal.value[5] && btnVal.value[5] === btnVal.value[8] && btnVal.value[2]) ||
        (btnVal.value[0] === btnVal.value[4] && btnVal.value[4] === btnVal.value[8] && btnVal.value[0]) ||
        (btnVal.value[2] === btnVal.value[4] && btnVal.value[4] === btnVal.value[6] && btnVal.value[2])
    ) {
      // 游戏结束，有一方获胜
      let winner = ''
      if (btnVal.value[0] && btnVal.value[0] === btnVal.value[1] && btnVal.value[1] === btnVal.value[2]) {
        //1横
        winner = btnVal.value[0];
      } else if (btnVal.value[3] && btnVal.value[3] === btnVal.value[4] && btnVal.value[4] === btnVal.value[5]) {
        //2横
        winner = btnVal.value[3];
      } else if (btnVal.value[6] && btnVal.value[6] === btnVal.value[7] && btnVal.value[7] === btnVal.value[8]) {
        //3横
        winner = btnVal.value[6];
      } else if (btnVal.value[0] && btnVal.value[0] === btnVal.value[3] && btnVal.value[3] === btnVal.value[6]) {
        //1竖
        winner = btnVal.value[0];
      } else if (btnVal.value[1] && btnVal.value[1] === btnVal.value[4] && btnVal.value[4] === btnVal.value[7]) {
        //2竖
        winner = btnVal.value[1];
      } else if (btnVal.value[2] && btnVal.value[2] === btnVal.value[5] && btnVal.value[5] === btnVal.value[8]) {
        //3竖
        winner = btnVal.value[2];
      } else if (btnVal.value[0] && btnVal.value[0] === btnVal.value[4] && btnVal.value[4] === btnVal.value[8]) {
        //1左斜
        winner = btnVal.value[0];
      } else if (btnVal.value[2] && btnVal.value[2] === btnVal.value[4] && btnVal.value[4] === btnVal.value[6]) {
        //1右斜
        winner = btnVal.value[2];
      } else {
        // 平局
        winner = '平局';
      }
        if(winner !== '平局'){
          resultTxt.value = `游戏结束，${winner}获胜！`;
        } else {
          resultTxt.value = '游戏结束，平局！';
        }
        winnerFlag.value = true;
        return true;
      } else {
        // 游戏未结束
        return false;
    }
  }

const handleRest = () => {
  chessCnt.value = 0;
  resultTxt.value = '';
  btnVal.value = ['', '', '', '', '', '', '', '', ''];   //全置为空
  buttonsClickable.value = [true, true, true, true, true, true, true, true, true];   //全部可选
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

.chess-container {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
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