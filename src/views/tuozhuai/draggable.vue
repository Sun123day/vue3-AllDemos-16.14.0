<template>
  <div>
    <draggable
      :list="list"
      animation="300"
      ghost-class="ghost"
      chosen-class="chosenClass"
      @start="onStart"
      @end="onEnd"

      class="list-group"
    >
      <template #item="{ element }">
        <div class="list-group-item">
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { ref } from 'vue'
const list = ref([
        { name: "1==>John", id: 1 },
        { name: "2==>Joao", id: 2 },
        { name: "3==>Jean", id: 3 }
      ])
const onStart = () => {

}
const onEnd = () => {
  // 拖拽完成后的结果可以在这里进行显示和操作
  console.log("🚀 ~ draggable.vue:34 ~ list:", list.value)
}
</script>

<style lang="scss" scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.list-group-item {
  width: 160px;
  height: 48px;
  background-color: #898787;
  cursor: pointer;
}
</style>