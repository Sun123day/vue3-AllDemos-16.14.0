<script setup>
import { ref, reactive } from "vue";
import { CloseCircle } from "@vicons/ionicons5";
import draggable from "vuedraggable";
/*
draggable 对CSS样式没有什么要求万物皆可拖拽
:list="state.list"         //需要绑定的数组
ghost-class="ghost"        //被替换元素的样式
chosen-class="chosenClass" //选中元素的样式
animation="300"            //动画效果
@start="onStart"           //拖拽开始的事件
@end="onEnd"               //拖拽结束的事件
*/
const state = reactive({
  //需要拖拽的数据，拖拽后数据的顺序也会变化
  list: [
    { name: "卡片1", id: '01' },
    { name: "卡片2", id: '02' },
    { name: "卡片3", id: '03' },
    { name: "卡片4", id: '04' },
    { name: "卡片5", id: '05' },
    { name: "卡片6", id: '06' },
  ],
});

const list = ref([
    { name: "卡片1", id: '01' },
    { name: "卡片2", id: '02' },
    { name: "卡片3", id: '03' },
    { name: "卡片4", id: '04' },
    { name: "卡片5", id: '05' },
    { name: "卡片6", id: '06' },
  ])

//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽");
};

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽");
  // 结束拖拽后发现列表中的顺序是成功被改变了的
  // 如果是要保存改变后的顺序，就可以在这里发送请求或进行相关操作
};

//删除
const handleRemove = (item) => {
  // 如果长度等于1，不允许删除
  // if (state.list.length === 1) {
  if (list.value.length === 1) {
    return 
  }
  // 这是一个比较简单的删除方法
  // state.list = state.list.filter((element) => element.id !== item.id);
  list.value = list.value.filter((element) => element.id !== item.id);
};
</script>

<template>
  <div class="container">
    <div class="itxst">
      <!-- drag不生效 -->
      <div class="drag">
        <draggable
          :list="list"
          animation="300"
          ghost-class="ghost"
          chosen-class="chosenClass"
          @start="onStart"
          @end="onEnd"
          
          class="dragBox"
        >
        <!-- 只有在这里设置dragBox -->
          <template #item="{ element }">
            <div class="item">
              <p>{{ element.name }}</p>
              <n-icon size="20" color="red" 
                class="close-icon"
                @click="handleRemove(element)"
              >
                <CloseCircle />
              </n-icon>
            </div>
          </template>
        </draggable>
      </div>
      <!-- <div>{{ state.list }}</div> -->
      <div>{{ list }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.itxst {
  width: 600px;
  display: flex;
}
.itxst > div:nth-of-type(1) {
  flex: 1;
}
.itxst > div:nth-of-type(2) {
  width: 200px;
  padding-left: 20px;
}
.drag {
  display: flex;
}
.dragBox {
  width: 100%;
  height: 100%;
  display: flex; 
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.item {
  background: #79bbff;
  // border: solid 1px #535050;
  padding: 20px;
  text-align: center;
  width: 100px;
  height: 20px;
  display: flex;
  align-items: center;
  // justify-content: space-between;

  position: relative;

  user-select:none;

  .close-icon {
    position: relative;
    top: -30px;
    right: -75px;
    cursor: pointer;
  }
}

.item:hover {
  cursor: move;
}
// .item + .item {
//   margin-top: 10px;
// }
.ghost {
  border: solid 1px rgb(19, 41, 239);
}
.chosenClass {
  background-color: #f1f1f1;
}
</style>