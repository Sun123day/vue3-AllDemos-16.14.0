<script setup>
import { ref, onMounted } from 'vue'

let initWidth = ref(0) // 父元素的宽-自适应值
let initHeight = ref(0) // 父元素的高-自适应值
let startclientX = ref(0) // 元素拖拽前距离浏览器的X轴位置
let startclientY = ref(0) //元素拖拽前距离浏览器的Y轴位置
let elLeft = ref(0) // 元素的左偏移量
let elTop = ref(0) // 元素的右偏移量
let back_box = ref()

// 页面初始化
function initBodySize() {
    initWidth.value = back_box.value.clientWidth; // 拿到父元素宽
    initHeight.value = initWidth.value * ((1080 * 0.88) / (1920 - 1080 * 0.02)); // 根据宽计算高实现自适应
}

// 拖拽开始事件
function dragstart(e) {
    startclientX.value = e.clientX; // 记录拖拽元素初始位置
    startclientY.value = e.clientY;
}

// 拖拽完成事件
function dragend(e) {
    let x = e.clientX - startclientX.value; // 计算偏移量
    let y = e.clientY - startclientY.value;
    let newLeft = elLeft.value + x;
    let newTop = elTop.value + y;

    // 限制拖拽范围
    newLeft = Math.max(0, Math.min(newLeft, initWidth.value - 100)); // 100是drag_box的宽度
    newTop = Math.max(0, Math.min(newTop, initHeight.value - 100)); // 100是drag_box的高度

    elLeft.value = newLeft;
    elTop.value = newTop;
}

onMounted(() => {
    initBodySize()
    window.addEventListener('resize', initBodySize) // 窗口大小变化时重新计算尺寸
})
</script>

<template>
    <div id="drag">
      <div class="back_box" ref="back_box">
        这是一个背景
        <div
          class="drag_box"
          draggable="true"
          @dragstart="dragstart($event)"
          @dragend="dragend($event)"
          :style="`left:${elLeft}px;top:${elTop}px`"
        >
          这是一个蓝色可拖拽元素
        </div>
      </div>
    </div>
  </template>

<style scoped>
.back_box {
  background: #ccc;
  width: 50vw;
  height: 30vh;
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -30%);
}

.drag_box {
  width: 100px;
  height: 100px;
  background: skyblue;
  position: absolute;
  z-index: 10;
  user-select: none; /* 不可选中,为了拖拽时不让文字高亮 */
}
</style>
