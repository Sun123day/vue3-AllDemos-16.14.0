<template>
  <div>
    <div>
      <p>井字棋Demo</p>
    </div>
    <div>
      <p>这是第 {{ clickCnt }} 步棋</p>
      <div class="wrapper">
        <tic-tac-toe-row :buttons="buttons.slice(0, 3)" @click="handleClick"></tic-tac-toe-row>
        <tic-tac-toe-row :buttons="buttons.slice(3, 6)" @click="handleClick"></tic-tac-toe-row>
        <tic-tac-toe-row :buttons="buttons.slice(6, 9)" @click="handleClick"></tic-tac-toe-row>
      </div>
      <p>{{ resultTXT }}</p>
      <el-button v-if="gameOver" @click="restartGame">重新开始</el-button>
    </div>
  </div>
</template>

<script>
import TicTacToeRow from "@/components/chessDemo/TicTacToeRow.vue";
import calcWinner from "@/utils/chessDemo/calcWinner";

export default {
  components: {
    TicTacToeRow,
  },
  data() {
    return {
      resultTXT: "",
      clickCnt: 0,
      buttons: [null, null, null, null, null, null, null, null, null],
      gameOver: false,
    };
  },
  methods: {
    handleClick(index) {
      if (this.gameOver || this.buttons[index]) return;

      const value = this.clickCnt % 2 !== 0 ? "O" : "X";
      this.buttons.splice(index, 1, value);
      this.clickCnt += 1;

      const winner = calcWinner(this.buttons);
      if (winner) {
        this.resultTXT = `获胜方为 ${winner}`;
        this.gameOver = true;
      } else if (this.clickCnt === 9) {
        this.resultTXT = "游戏结束，平局";
        this.gameOver = true;
      }
    },

    restartGame() {
      this.resultTXT = "";
      this.clickCnt = 0;
      this.buttons = [null, null, null, null, null, null, null, null, null];
      this.gameOver = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.fixed-size {
  width: 50px; /* 设置按钮的固定宽度 */
  height: 50px; /* 设置按钮的固定高度 */
}
</style>
