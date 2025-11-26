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
        { name: "John", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Jean", id: 2 }
      ])
const onStart = () => {

}
const onEnd = () => {

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