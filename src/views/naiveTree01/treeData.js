const treeData = [
    {
        "key": "root01",
        "label": "智慧停车总节点root01",
        "children": [
            {
                "key": "智慧停车WEB根节点",
                "parentId": "-1",
                "label": "智慧停车WEB",
                "children": [
                    {
                        "key": "数据看板",
                        "parentId": "智慧停车WEB根节点",
                        "label": "数据看板"
                    },
                    {
                        "key": "统计分析",
                        "parentId": "智慧停车WEB根节点",
                        "label": "统计分析",
                        "children": [
                            {
                                "key": "停车分析",
                                "parentId": "统计分析",
                                "label": "停车分析"
                            },
                            {
                                "key": "收入分析",
                                "parentId": "统计分析",
                                "label": "收入分析"
                            }
                        ]
                    }
                ]
            }
        ]
    },
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
                        "key": "用户中心",
                        "parentId": "数字化中台WEB根节点",
                        "label": "用户中心",
                        "children": [
                            {
                                "key": "用户管理",
                                "parentId": "用户中心",
                                "label": "用户管理",
                                "children": [
                                    {
                                        "key": "用户管理-新增",
                                        "parentId": "用户管理",
                                        "label": "新增"
                                    },
                                    {
                                        "key": "用户管理-详情",
                                        "parentId": "用户管理",
                                        "label": "详情"
                                    }
                                ]
                            },
                            {
                                "key": "岗位管理",
                                "parentId": "用户中心",
                                "label": "岗位管理",
                                "children": [
                                    {
                                        "key": "岗位管理-新增",
                                        "parentId": "岗位管理",
                                        "label": "新增"
                                    },
                                    {
                                        "key": "岗位管理-编辑",
                                        "parentId": "岗位管理",
                                        "label": "编辑"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "key": "权限中心",
                        "parentId": "数字化中台WEB根节点",
                        "label": "权限中心",
                        "children": [
                            {
                                "key": "角色管理",
                                "parentId": "权限中心",
                                "label": "角色管理",
                                "children": [
                                    {
                                        "key": "角色管理-新增",
                                        "parentId": "角色管理",
                                        "label": "新增"
                                    }
                                ]
                            },
                            {
                                "key": "权限管理",
                                "parentId": "权限中心",
                                "label": "权限管理"
                            }
                        ]
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
                "label": "数字化中台WEB的第二个内容"
            }
        ]
    }
]

export default treeData;