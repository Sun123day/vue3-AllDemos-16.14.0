<template>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; ">
    <h1>Naive UI 级联树选择勾选节点（含半选）</h1>
    <div style="display: flex;">
      <div style="width: 600px; background-color: #baebfa;">
        <n-tree
              :data="treeDataList"
              block-line
              block-node
              checkable
              :on-update:checked-keys="checkedOnChange"
              checkbox-placement="right"
              :checked-keys="checkedKeys"
              cascade
              label-field="label"
              key-field="key" 
              :default-expand-all="true"
          />
      </div>
      <div style="width: 600px; margin-left: 16px;">
        <div style="margin-right: 16px;">
          选中的节点为：{{ checkedKeys }}
        </div>
        <div style="margin-right: 16px;">
          第一层节点为：{{ firstLevelKeys }}
        </div>
        <div style="margin-right: 16px;">
          第二层（有效层）节点为：{{ secondLevelKeys }}
        </div>
        <div style="margin-right: 16px;">
          有效层中被勾选的节点为：{{ checkedSecondKeys }}
        </div>
        <div style="margin-right: 16px;">
          拆分树中含勾选的根节点为：{{ checkedSingleSecondTreeKeys }}
        </div>
        <div style="margin-right: 16px;">
          合并后的有效节点：{{ validSecondTreeKeys }}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { NTree } from 'naive-ui'
// 引入同级目录下的 treeData.js 文件
import treeData from './treeData.js'
export default defineComponent({
    components: {
        NTree,
    },
    setup() {
        // 将引入的属性节点赋值给treeDataList
        const treeDataList = ref(treeData)

        // 所有叶子节点
        // const leafKeys = ref([])

        // 主动勾选的节点
        const checkedKeys = ref([])
        // 所有根节点的下一层的节点=》第一层节点
        const firstLevelKeys = ref([])
        // 第一层节点的下一层的节点=》第二层节点（有效层节点）
        const secondLevelKeys = ref([])
        // 有效层节点中被勾选的节点
        const checkedSecondKeys = ref([])
        // 根据第二层节点，进行拆分成单独树
        const singleTrees = ref([])
        // 向下遍历每一个有效节点层所在树，将含有勾选节点的有效层节点标记出来
        const checkedSingleSecondTreeKeys = ref([])
        // 将checkedSecondKeys和checkedSingleSecondTreeKeys合并
        const validSecondTreeKeys = ref([])

        // 拿到第一层节点
        const getFirstLevelKeys = (treeData) => {
            return treeData.map(item => item.key);
        }
        
        firstLevelKeys.value = getFirstLevelKeys(treeDataList.value)

        // 拿到第二层节点
        const getSecondLevelKeys = (firstLevel, treeData) => {
          const second = [];
          firstLevel.forEach(key => {
            const children = treeData.find(item => item.key === key)?.children || [];
            second.push(...children.map(child => child.key));
          });
          return second;
        }
        
        secondLevelKeys.value = getSecondLevelKeys(firstLevelKeys.value, treeDataList.value)

        // 拿到勾选节点中的有效节点
        const getCheckedFirstLevelKeys = (checkedKeys, secondLevel) => {
          const valid = [];
          checkedKeys.forEach(key => {
            if (secondLevel.includes(key)) {
              valid.push(key);
            }
          });
          return valid;
        };

        // 根据第二层节点，进行拆分成单独树
        const splitTreeData = (treeData) => {
          // 过滤出所有第二层节点
          const secondLevelNodes = treeData.flatMap(node => node.children || []);
          console.log("secondLevelNodes", secondLevelNodes);
          console.log("secondLevelKeys", secondLevelKeys.value);
          // 为每个第二层节点创建一个单独的树
          const splitTrees = secondLevelNodes.map(node => ({
              key: node.key,
              label: node.label,
              children: node.children || []
          }));

          return splitTrees;
        }
        
        singleTrees.value = splitTreeData(treeDataList.value)

        // 向下遍历每一个有效节点层所在树，将含有勾选节点的有效层节点标记出来
        const getCheckedSingleTrees = (checkedKeys, splitTreeData) => {
          const checkedTrees = [];
          splitTreeData.forEach(tree => {
            // console.log("tree", tree);
            const checkedNodes = tree.children.filter(node => checkedKeys.includes(node.key));
            // 处理子节点，如果有子节点也要检查
            if (tree.children) {
                tree.children.forEach(child => {
                    // 如果当前节点有子节点，则递归检查
                    if (child.children) {
                        const checkedChildNodes = getCheckedSingleTrees(checkedKeys, [child]);
                        if (checkedChildNodes.length > 0 || checkedKeys.includes(child.key)) {
                            checkedNodes.push(child);
                        }
                    }
                });
            }

            // 如果当前树的节点有勾选的，则将根节点加入 checkedTrees
            if (checkedNodes.length > 0) {
                checkedTrees.push(tree.key); // 将根节点的 key 加入
            }
          });
          console.log("checkedTrees", checkedTrees);
          return checkedTrees;
        };

        const getMergeSecondTreeKeys = (checkedSecondKeys, checkedSingleSecondTreeKeys) => {
          // 使用 Set 来存储合并后的节点，Set 会自动去除重复项
          const mergedKeys = new Set([...checkedSecondKeys,...checkedSingleSecondTreeKeys]);
          // 将 Set 转换回数组并返回
          return Array.from(mergedKeys);
        }
        
        const checkedOnChange = (keys) => {
            checkedKeys.value = keys
            // 拿到勾选节点中的有效节点
            checkedSecondKeys.value = getCheckedFirstLevelKeys(checkedKeys.value, secondLevelKeys.value)

            // 向下遍历每一个有效节点层所在树，将含有勾选节点的有效层节点标记出来
            checkedSingleSecondTreeKeys.value = getCheckedSingleTrees(checkedKeys.value, singleTrees.value)

            // 合并后剔除重复节点
            validSecondTreeKeys.value = getMergeSecondTreeKeys(checkedSecondKeys.value, checkedSingleSecondTreeKeys.value)
        }
        return {
            treeDataList,
            checkedKeys,
            firstLevelKeys,
            secondLevelKeys,
            checkedSecondKeys,
            singleTrees,
            validSecondTreeKeys,
            checkedOnChange,
            getFirstLevelKeys,
            getSecondLevelKeys,
            getCheckedFirstLevelKeys,
            checkedSingleSecondTreeKeys,
            getCheckedSingleTrees,
            splitTreeData,
        }
    },
})
</script>