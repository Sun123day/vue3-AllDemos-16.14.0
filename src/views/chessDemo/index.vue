<template>
  <div>
    <div>
      <p>井字棋Demo</p>
    </div>
    <div class="wrapper">
      <p>这是第 {{ clickCnt }} 步棋</p>
      <el-row class="row">
        <el-button class="fixed-size" :disabled="!buttonsClickable[0]" @click="handleClick(0)"> {{ buttonsValue[0] }} </el-button>
        <el-button class="fixed-size" :disabled="!buttonsClickable[1]" @click="handleClick(1)"> {{ buttonsValue[1] }} </el-button>
        <el-button class="fixed-size" :disabled="!buttonsClickable[2]" @click="handleClick(2)"> {{ buttonsValue[2] }} </el-button>
      </el-row>
      <el-row class="row">
        <el-button class="fixed-size" :disabled="!buttonsClickable[3]" @click="handleClick(3)"> {{ buttonsValue[3] }} </el-button>
        <el-button class="fixed-size" :disabled="!buttonsClickable[4]" @click="handleClick(4)"> {{ buttonsValue[4] }} </el-button>
        <el-button class="fixed-size" :disabled="!buttonsClickable[5]" @click="handleClick(5)"> {{ buttonsValue[5] }} </el-button>
      </el-row>
      <el-row class="row">
        <el-button class="fixed-size" :disabled="!buttonsClickable[6]" @click="handleClick(6)"> {{ buttonsValue[6] }} </el-button>
        <el-button class="fixed-size" :disabled="!buttonsClickable[7]" @click="handleClick(7)"> {{ buttonsValue[7] }} </el-button>
        <el-button class="fixed-size" :disabled="!buttonsClickable[8]" @click="handleClick(8)"> {{ buttonsValue[8] }} </el-button>
      </el-row>
      <p>{{ resultTXT }}</p>
      <el-button 
        v-if="restFlag"
        @click="handleRest">重新开始</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      restFlag: false,
      resultTXT: '',
      clickCnt: 0,
      buttonsValue: ['', '', '', '', '', '', '', '', ''],   //全置为空
      buttonsClickable: [true, true, true, true, true, true, true, true, true],   //全部可选
    }
  },
  methods:{
    handleRest(){
      this.resultTXT = ''
      this.clickCnt = 0
      this.buttonsValue = ['', '', '', '', '', '', '', '', '']   //全置为空
      this.buttonsClickable = [true, true, true, true, true, true, true, true, true]   //全部可选
      this.restFlag = false
    },

    handleClick(index){
      if (!this.buttonsClickable[index]) {
        // 如果按钮已经被点击过了，直接退出
        return;
      }

      this.clickCnt += 1;
      const value = this.clickCnt % 2 !== 0 ? 'X' : 'O';
      this.buttonsValue[index] = value;
      this.buttonsClickable[index] = false;   //选了的禁选

      // 检查游戏是否结束，如果结束则禁用所有按钮
      if (this.checkGameEnd()) {
        this.buttonsClickable = [false, false, false, false, false, false, false, false, false];
      }
    },
    checkGameEnd() {
      // 检查游戏是否结束，例如判断是否有一方获胜或平局
      if (
        (this.buttonsValue[0] === this.buttonsValue[1] && this.buttonsValue[1] === this.buttonsValue[2] && this.buttonsValue[0]) ||
        (this.buttonsValue[3] === this.buttonsValue[4] && this.buttonsValue[4] === this.buttonsValue[5] && this.buttonsValue[3]) ||
        (this.buttonsValue[6] === this.buttonsValue[7] && this.buttonsValue[7] === this.buttonsValue[8] && this.buttonsValue[6]) ||
        (this.buttonsValue[0] === this.buttonsValue[3] && this.buttonsValue[3] === this.buttonsValue[6] && this.buttonsValue[0]) ||
        (this.buttonsValue[1] === this.buttonsValue[4] && this.buttonsValue[4] === this.buttonsValue[7] && this.buttonsValue[1]) ||
        (this.buttonsValue[2] === this.buttonsValue[5] && this.buttonsValue[5] === this.buttonsValue[8] && this.buttonsValue[2]) ||
        (this.buttonsValue[0] === this.buttonsValue[4] && this.buttonsValue[4] === this.buttonsValue[8] && this.buttonsValue[0]) ||
        (this.buttonsValue[2] === this.buttonsValue[4] && this.buttonsValue[4] === this.buttonsValue[6] && this.buttonsValue[2])
      ) {
        // 游戏结束，有一方获胜
        let winner = ''
        if (this.buttonsValue[0] && this.buttonsValue[0] === this.buttonsValue[1] && this.buttonsValue[1] === this.buttonsValue[2]) {
          //1横
          winner = this.buttonsValue[0];
        } else if (this.buttonsValue[3] && this.buttonsValue[3] === this.buttonsValue[4] && this.buttonsValue[4] === this.buttonsValue[5]) {
          //2横
          winner = this.buttonsValue[3];
        } else if (this.buttonsValue[6] && this.buttonsValue[6] === this.buttonsValue[7] && this.buttonsValue[7] === this.buttonsValue[8]) {
          //3横
          winner = this.buttonsValue[6];
        } else if (this.buttonsValue[0] && this.buttonsValue[0] === this.buttonsValue[3] && this.buttonsValue[3] === this.buttonsValue[6]) {
          //1纵
          winner = this.buttonsValue[0];
        } else if (this.buttonsValue[1] && this.buttonsValue[1] === this.buttonsValue[4] && this.buttonsValue[4] === this.buttonsValue[7]) {
          //2纵
          winner = this.buttonsValue[1];
        } else if (this.buttonsValue[2] && this.buttonsValue[2] === this.buttonsValue[5] && this.buttonsValue[5] === this.buttonsValue[8]) {
          //3纵
          winner = this.buttonsValue[2];
        } else if (this.buttonsValue[0] && this.buttonsValue[0] === this.buttonsValue[4] && this.buttonsValue[4] === this.buttonsValue[8]) {
          //左向右斜
          winner = this.buttonsValue[0];
        } else if (this.buttonsValue[2] && this.buttonsValue[2] === this.buttonsValue[4] && this.buttonsValue[4] === this.buttonsValue[6]) {
          //右向左斜
          winner = this.buttonsValue[2];
        }
        this.resultTXT = '获胜方为' + winner;
        this.restFlag = true
         // 设置获胜方的标记
        return true;
      } else if (this.clickCnt === 9) {
        // 游戏结束，平局
        this.resultTXT = '游戏结束，平局'
        this.restFlag = true
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.row {
  display: flex;
  margin-bottom: 10px;
}

.fixed-size {
  width: 50px; /* 设置按钮的固定宽度 */
  height: 50px; /* 设置按钮的固定高度 */
}
</style>
