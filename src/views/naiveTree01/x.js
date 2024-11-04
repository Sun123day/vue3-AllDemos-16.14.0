[
  {
      "key": "root02",
      "label": "测试智慧宿舍root02",
      "children": [
          {
              "key": "测试智慧宿舍WEB根节点",
              "parentId": "-1",
              "label": "测试智慧宿舍WEB"
          },
          {
              "key": "测试智慧宿舍WEB的第二个内容根节点",
              "parentId": "-1",
              "label": "测试智慧宿舍WEB的第二个内容"
          }
      ]
  },
  {
      "key": "root03",
      "label": "数字化中台root03",
      "children": [
          {
              "key": "数字化中台WEB根节点",
              "parentId": "-1",
              "label": "数字化中台WEB",
              "children": [
                  {
                      "key": "首页",
                      "parentId": "数字化中台WEB根节点",
                      "label": "首页"
                  },
                  {
                      "key": "应用中心",
                      "parentId": "数字化中台WEB根节点",
                      "label": "应用中心",
                      "children": [
                          {
                              "key": "应用端点管理",
                              "parentId": "应用中心",
                              "label": "应用端点管理",
                              "children": [
                                  {
                                      "key": "应用端点管理-新增",
                                      "parentId": "应用端点管理",
                                      "label": "新增"
                                  },
                                  {
                                      "key": "应用端点管理-删除",
                                      "parentId": "应用端点管理",
                                      "label": "删除"
                                  }
                              ]
                          }
                      ]
                  }
              ]
          },
          {
              "key": "数字化中台WEB的第二个内容根节点",
              "parentId": "-1",
              "label": "数字化中台WEB的第二个内容"}]}]上述为数据结构示例，请结合vue3代码，修改解决 const getCheckedSingleTrees中返回的checkedTrees始终为[]的问题