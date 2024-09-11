<template>
  <div>
    <el-button
      v-for="(button, index) in buttons"
      :key="index"
      @click="handleClick(index)"
      class="fixed-size"
    >
      {{ button }}
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    buttons: Array,
  },
  methods: {
    handleClick(index) {
      this.$emit("click", index);
    },
  },
};
</script>

<style scoped>
.fixed-size {
  width: 50px;
  height: 50px;
}
</style>
