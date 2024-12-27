const res = {
    "code": "200",
    "msg": "成功",
    "data": {
        "resourceIdList": [],
        "resourceTreeList": [
            {
                "key": "1848654362062381057",
                "label": "智慧能源-DEV",
                "children": [
                    {
                        "key": "1848657490761506818",
                        "parentId": "-1",
                        "label": "WEB-WEB",
                        "children": [
                            {
                                "key": "1850820741364514818",
                                "parentId": "1848657490761506818",
                                "label": "能耗总览",
                            },
                            {
                                "key": "1850821186443083778",
                                "parentId": "1848657490761506818",
                                "label": "能耗监测",
                                "children": [
                                    {
                                        "key": "1850821546452779010",
                                        "parentId": "1850821186443083778",
                                        "label": "用能监测",
                                        "children": [
                                            {
                                                "key": "1850822937904742401",
                                                "parentId": "1850821546452779010",
                                                "label": "分项概览",
                                            },
                                            {
                                                "key": "1850823163843510274",
                                                "parentId": "1850821546452779010",
                                                "label": "用能详情",
                                            }
                                        ]
                                    },
                                    {
                                        "key": "1850822637944897537",
                                        "parentId": "1850821186443083778",
                                        "label": "告警中心",
                                        "children": [
                                            {
                                                "key": "1850823470853980161",
                                                "parentId": "1850822637944897537",
                                                "label": "用能告警",
                                            },
                                            {
                                                "key": "1850823796315193345",
                                                "parentId": "1850822637944897537",
                                                "label": "目标配置",
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "key": "1848663847728340993",
                                "parentId": "1848657490761506818",
                                "label": "用能费用",
                                "children": [
                                    {
                                        "key": "1848666379691253762",
                                        "parentId": "1848663847728340993",
                                        "label": "费用总览",
                                    },
                                    {
                                        "key": "1850791554801008641",
                                        "parentId": "1848663847728340993",
                                        "label": "分项电费",
                                    },
                                    {
                                        "key": "1848667137044144130",
                                        "parentId": "1848663847728340993",
                                        "label": "费用明细",
                                    },
                                    {
                                        "key": "1848667424358162434",
                                        "parentId": "1848663847728340993",
                                        "label": "价格管理",
                                        "children": [
                                            {
                                                "key": "1848667669439733761",
                                                "parentId": "1848667424358162434",
                                                "label": "价格设置",
                                            },
                                            {
                                                "key": "1848667948973318145",
                                                "parentId": "1848667424358162434",
                                                "label": "价格应用",
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "key": "1864565393187975169",
                                "parentId": "1848657490761506818",
                                "label": "能耗分析",
                                "children": [
                                    {
                                        "key": "1864566142903037953",
                                        "parentId": "1864565393187975169",
                                        "label": "能源流向",
                                    },
                                    {
                                        "key": "1864568266483347457",
                                        "parentId": "1864565393187975169",
                                        "label": "冷站能耗",
                                        "children": [
                                            {
                                                "key": "1864569020258496513",
                                                "parentId": "1864568266483347457",
                                                "label": "冷站能量分析",
                                            },
                                            {
                                                "key": "1864569580705591298",
                                                "parentId": "1864568266483347457",
                                                "label": "冷站能耗分析",
                                            },
                                            {
                                                "key": "1864569850147680258",
                                                "parentId": "1864568266483347457",
                                                "label": "冷站能效分析",
                                            }
                                        ]
                                    },
                                    {
                                        "key": "1864570726383923201",
                                        "parentId": "1864565393187975169",
                                        "label": "热源能耗",
                                        "children": [
                                            {
                                                "key": "1864570955623608322",
                                                "parentId": "1864570726383923201",
                                                "label": "热源能量分析",
                                            },
                                            {
                                                "clientEndpointId": "1848657490669232130",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": false,
                                                "key": "1864571223195037697",
                                                "parentId": "1864570726383923201",
                                                "label": "热源能耗分析",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-analysis/hot-source/usage",
                                                "componentPath": "/views/EnergyAnalysis/HotSource/Usage/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1848657490669232130",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": false,
                                                "key": "1864571448064258050",
                                                "parentId": "1864570726383923201",
                                                "label": "热源能效分析",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-analysis/hot-source/efficiency",
                                                "componentPath": "/views/EnergyAnalysis/HotSource/Efficiency/Index.vue"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1848657490669232130",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1848663970122326018",
                                "parentId": "1848657490761506818",
                                "label": "双碳管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrEnergy/dual-carbon",
                                "icons": "icon-nengyuan",
                                "children": [
                                    {
                                        "clientEndpointId": "1848657490669232130",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1848668277202771969",
                                        "parentId": "1848663970122326018",
                                        "label": "碳排放总览",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/dual-carbon/overview",
                                        "componentPath": "/views/DualCarbon/EmissionsOverview/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1848657490669232130",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1848668401849098241",
                                        "parentId": "1848663970122326018",
                                        "label": "碳排放监测",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/dual-carbon/monitor",
                                        "componentPath": "/views/DualCarbon/EmissionsMonitor/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1848657490669232130",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1848668555259961345",
                                        "parentId": "1848663970122326018",
                                        "label": "告警中心",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/dual-carbon/alarm",
                                        "componentPath": "/views/DualCarbon/AlarmCenter/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1848657490669232130",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1848669389527998465",
                                        "parentId": "1848663970122326018",
                                        "label": "系统配置",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/dual-carbon/system-config",
                                        "componentPath": "/views/DualCarbon/SystemConfig/Index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1848657490669232130",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1848664150980714498",
                                "parentId": "1848657490761506818",
                                "label": "远程抄表",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrEnergy/remote-meter",
                                "icons": "icon-meter",
                                "children": [
                                    {
                                        "clientEndpointId": "1848657490669232130",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1848669817938403329",
                                        "parentId": "1848664150980714498",
                                        "label": "抄表总览",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/remote-meter/overview",
                                        "componentPath": "/views/RemoteReadMeter/Overview/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1848657490669232130",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1848670041557721089",
                                        "parentId": "1848664150980714498",
                                        "label": "设备管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "/rxLynkrEnergy/remote-meter/device-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1848657490669232130",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1848670275323060226",
                                                "parentId": "1848670041557721089",
                                                "label": "系统拓扑",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/remote-meter/device-manage/system-topo",
                                                "componentPath": "/views/RemoteReadMeter/DeviceManage/SystemTopo/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1848657490669232130",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1848670440243093506",
                                                "parentId": "1848670041557721089",
                                                "label": "系统平面",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/remote-meter/device-manage/system-plan",
                                                "componentPath": "/views/RemoteReadMeter/DeviceManage/SystemPlan/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1848657490669232130",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1848670608136888322",
                                                "parentId": "1848670041557721089",
                                                "label": "采集器管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/remote-meter/device-manage/collector-manage",
                                                "componentPath": "/views/RemoteReadMeter/DeviceManage/CollectorManage/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1848657490669232130",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1848670734058283009",
                                                "parentId": "1848670041557721089",
                                                "label": "表具管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/remote-meter/device-manage/meter-manage",
                                                "componentPath": "/views/RemoteReadMeter/DeviceManage/MeterManage/Index.vue"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1848657490669232130",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1848670953940475905",
                                        "parentId": "1848664150980714498",
                                        "label": "明细查询",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/remote-meter/bill-manage",
                                        "componentPath": "/views/RemoteReadMeter/BillManage/BillInquiry/Index.vue"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1854414617346056194",
                "label": "监控中心",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1854415089448525825",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1854415089561772033",
                        "parentId": "-1",
                        "label": "WEB-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "children": [
                            {
                                "clientEndpointId": "1854415089448525825",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1854415170054660097",
                                "parentId": "1854415089561772033",
                                "label": "22222",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "3333",
                                "componentPath": "3333",
                                "icons": "2222"
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1837809503785193474",
                "label": "智慧停车",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1838035710908829698",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1754050507143430145",
                        "parentId": "-1",
                        "label": "智慧停车",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "path": "1",
                        "children": [
                            {
                                "clientEndpointId": "1838035710908829698",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1754051154991431682",
                                "parentId": "1754050507143430145",
                                "label": "数据看板",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "/index",
                                "componentPath": "/billBorad/index.vue",
                                "icons": "nav-billBord"
                            },
                            {
                                "clientEndpointId": "1838035710908829698",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1754052890187579394",
                                "parentId": "1754050507143430145",
                                "label": "基础信息",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/basic",
                                "icons": "nav-basic",
                                "children": [
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1754054788235968513",
                                        "parentId": "1754052890187579394",
                                        "label": "内部车管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/basic/whiteLists",
                                        "componentPath": "/whiteLists/index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1754054497159659522",
                                        "parentId": "1754052890187579394",
                                        "label": "黑名单管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/blackLists",
                                        "componentPath": "/blackLists/index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1759768357954961410",
                                        "parentId": "1754052890187579394",
                                        "label": "待审核管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/basic/toBeReviewed",
                                        "componentPath": "/toBeReviewed/index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1838035710908829698",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1754055037524426753",
                                "parentId": "1754050507143430145",
                                "label": "设备管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/device",
                                "icons": "nav-device",
                                "children": [
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1754055573405483010",
                                        "parentId": "1754055037524426753",
                                        "label": "车场设备监测",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/device/deviceMonitor",
                                        "componentPath": "/deviceMonitor/index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1765191081003106306",
                                        "parentId": "1754055037524426753",
                                        "label": "车位设备监测",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/device/lotMonitor",
                                        "componentPath": "/IotMonitor/index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1838035710908829698",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1754056383556272130",
                                "parentId": "1754050507143430145",
                                "label": "车场监测",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/parkingMonitor",
                                "icons": "nav-parkingMonitor",
                                "children": [
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1838615074851549186",
                                        "parentId": "1754056383556272130",
                                        "label": "车场监控",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/parkingMonitor/zoneMonitor",
                                        "componentPath": "/zoneMonitor/index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1754057523320635394",
                                        "parentId": "1754056383556272130",
                                        "label": "在场车辆明细",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/parkingMonitor/presentCarDetail",
                                        "componentPath": "/presentCarDetail/index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1754057824974979073",
                                        "parentId": "1754056383556272130",
                                        "label": "实时车位报表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/parkingMonitor/nowParkingDetail",
                                        "componentPath": "/nowParkingDetail/index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1838035710908829698",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1754058059633704962",
                                "parentId": "1754050507143430145",
                                "label": "停车管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/parkingManage",
                                "icons": "nav-parkingManage",
                                "children": [
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1754058383580774402",
                                        "parentId": "1754058059633704962",
                                        "label": "预约审核",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/parkingManage/appointmentManagement",
                                        "componentPath": "/appointmentManagement/index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1754059489987837953",
                                        "parentId": "1754058059633704962",
                                        "label": "停车记录",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/parkingManage/parkingRecords",
                                        "componentPath": "/parkingRecords/index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1838035710908829698",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1754059685387878402",
                                "parentId": "1754050507143430145",
                                "label": "计费管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/payment",
                                "icons": "nav-payment",
                                "children": [
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1759785811674447874",
                                        "parentId": "1754059685387878402",
                                        "label": "临停车计费明细",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/payment/tripsBillDetail",
                                        "componentPath": "/tripsBillDetail/index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1759786134019293186",
                                        "parentId": "1754059685387878402",
                                        "label": "欠费车辆明细",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/payment/arrearsDetail",
                                        "componentPath": "/arrearsDetail/index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1838035710908829698",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1754060282497384449",
                                "parentId": "1754050507143430145",
                                "label": "统计分析",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/statistic",
                                "icons": "nav-statistic",
                                "children": [
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1754060507635040257",
                                        "parentId": "1754060282497384449",
                                        "label": "停车分析",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/statistic/parkingAnalysis",
                                        "componentPath": "/parkingAnalysis/index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1754060713592143874",
                                        "parentId": "1754060282497384449",
                                        "label": "收入分析",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/statistic/revenueAnalysis",
                                        "componentPath": "/revenueAnalysis/index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1838035710908829698",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1760485151309086722",
                                        "parentId": "1754060282497384449",
                                        "label": "月卡分析",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/statistic/monthlyCardType",
                                        "componentPath": "/monthlyCardType/index.vue"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1817760608342556674",
                "label": "微前端测试",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1825823441823326209",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1825823441911406593",
                        "parentId": "-1",
                        "label": "WEB-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "children": [
                            {
                                "clientEndpointId": "1825823441823326209",
                                "isShow": true,
                                "isOutsideChain": true,
                                "isCache": true,
                                "key": "1834519989251756034",
                                "parentId": "1825823441911406593",
                                "label": "运营总览",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "/micro-vue/dashboard",
                                "componentPath": "/layout/EmptyComponent.vue",
                                "icons": "icon-dashboard"
                            },
                            {
                                "clientEndpointId": "1825823441823326209",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1846088216129925121",
                                "parentId": "1825823441911406593",
                                "label": "能耗监测",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/micro-vue/enegy-monitor",
                                "icons": "icon-monitor",
                                "children": [
                                    {
                                        "clientEndpointId": "1825823441823326209",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1846088371679883266",
                                        "parentId": "1846088216129925121",
                                        "label": "用能监测",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "/mricro-vue/enegy-monitor/energy-usage-monitor",
                                        "children": [
                                            {
                                                "clientEndpointId": "1825823441823326209",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": true,
                                                "key": "1846088665599930370",
                                                "parentId": "1846088371679883266",
                                                "label": "分项概览",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/micro-vue/enegy-monitor/energy-usage-monitor/subitem",
                                                "componentPath": "/layout/EmptyComponent.vue",
                                                "children": [
                                                    {
                                                        "clientEndpointId": "1825823441823326209",
                                                        "isShow": true,
                                                        "isOutsideChain": false,
                                                        "isCache": true,
                                                        "key": "1846089243751182337",
                                                        "parentId": "1846088665599930370",
                                                        "label": "新增",
                                                        "resourceType": "3",
                                                        "resourceTypeName": "按钮"
                                                    },
                                                    {
                                                        "clientEndpointId": "1825823441823326209",
                                                        "isShow": true,
                                                        "isOutsideChain": false,
                                                        "isCache": true,
                                                        "key": "1846089326970368001",
                                                        "parentId": "1846088665599930370",
                                                        "label": "编辑",
                                                        "resourceType": "3",
                                                        "resourceTypeName": "按钮"
                                                    }
                                                ]
                                            },
                                            {
                                                "clientEndpointId": "1825823441823326209",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": true,
                                                "key": "1846088820680126465",
                                                "parentId": "1846088371679883266",
                                                "label": "用能详情",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/micro-vue/enegy-monitor/energy-usage-monitor/detail",
                                                "componentPath": "/layout/EmptyComponent.vue"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1825823441823326209",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1846088484368248834",
                                        "parentId": "1846088216129925121",
                                        "label": "告警中心",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "/micro-vue/enegy-monitor/alarm-center",
                                        "children": [
                                            {
                                                "clientEndpointId": "1825823441823326209",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1846088953115275266",
                                                "parentId": "1846088484368248834",
                                                "label": "用能告警",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/micro-vue/enegy-monitor/alarm-center/alarm",
                                                "componentPath": "asdf",
                                                "icons": ""
                                            },
                                            {
                                                "clientEndpointId": "1825823441823326209",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": true,
                                                "key": "1846089059264720898",
                                                "parentId": "1846088484368248834",
                                                "label": "目标配置",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/micro-vue/enegy-monitor/alarm-center/target-config",
                                                "componentPath": "asdf"
                                            },
                                            {
                                                "clientEndpointId": "1825823441823326209",
                                                "isShow": false,
                                                "isOutsideChain": true,
                                                "isCache": true,
                                                "key": "1851087211164139521",
                                                "parentId": "1846088484368248834",
                                                "label": "测试内页",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/micro-vue/enegy-monitor/alarm-center/target-config/detail",
                                                "componentPath": "asdf"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "clientEndpointId": "1839594802894893057",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1839594802978779138",
                        "parentId": "-1",
                        "label": "web端-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录"
                    }
                ]
            },
            {
                "key": "1855915080214126593",
                "label": "智慧物业DEV",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1855915196505399298",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1855915196593479682",
                        "parentId": "-1",
                        "label": "WEB-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "children": [
                            {
                                "clientEndpointId": "1855915196505399298",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1855938033958002690",
                                "parentId": "1855915196593479682",
                                "label": "内容管理",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "content-manage",
                                "componentPath": "content-manage/index",
                                "icons": "wy-nrgl"
                            },
                            {
                                "clientEndpointId": "1855915196505399298",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1855961052768116738",
                                "parentId": "1855915196593479682",
                                "label": "投诉建议",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "complaint-suggestion",
                                "icons": "wy-tsjy",
                                "children": [
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1855961445157838850",
                                        "parentId": "1855961052768116738",
                                        "label": "投诉管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "complaint-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1855962772961239041",
                                                "parentId": "1855961445157838850",
                                                "label": "投诉管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "complaint-index",
                                                "componentPath": "complaint-suggestion/complaint-manage/index"
                                            },
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1855962911985639425",
                                                "parentId": "1855961445157838850",
                                                "label": "投诉类型管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "complaint-type",
                                                "componentPath": "complaint-suggestion/complaint-manage/type"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1856981446593617921",
                                        "parentId": "1855961052768116738",
                                        "label": "建议管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "suggestion-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1856981833413304322",
                                                "parentId": "1856981446593617921",
                                                "label": "建议管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "suggestion-index",
                                                "componentPath": "complaint-suggestion/suggestion-manage/index"
                                            },
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1856982107414601729",
                                                "parentId": "1856981446593617921",
                                                "label": "建议类型管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "suggestion-type",
                                                "componentPath": "complaint-suggestion/suggestion-manage/type"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1855915196505399298",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1859124048143110146",
                                "parentId": "1855915196593479682",
                                "label": "满意度管理",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "satisfaction-manage",
                                "componentPath": "satisfaction-manage/index",
                                "icons": "wy-mydgl"
                            },
                            {
                                "clientEndpointId": "1855915196505399298",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1857300965086253057",
                                "parentId": "1855915196593479682",
                                "label": "空间管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "space-manage",
                                "icons": "wy-kjgl",
                                "children": [
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1857302228087656449",
                                        "parentId": "1857300965086253057",
                                        "label": "楼栋管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "space-building",
                                        "componentPath": "space-manage/building"
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1857302778954960897",
                                        "parentId": "1857300965086253057",
                                        "label": "空间管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "space-index",
                                        "componentPath": "space-manage/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1855915196505399298",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1859128283224133634",
                                "parentId": "1855915196593479682",
                                "label": "服务管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "service-manage",
                                "icons": "wy-fwgl",
                                "children": [
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860140735554441218",
                                        "parentId": "1859128283224133634",
                                        "label": "服务设置",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "service-setting",
                                        "componentPath": "service-manage/service-setting/index"
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860141104955183106",
                                        "parentId": "1859128283224133634",
                                        "label": "费用统计",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "expense-statistics",
                                        "componentPath": "service-manage/expense-statistics/index"
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860252006215897089",
                                        "parentId": "1859128283224133634",
                                        "label": "工单列表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order-1/work-order-list",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order-1/work-order-list"
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860252171974791169",
                                        "parentId": "1859128283224133634",
                                        "label": "工单工作台",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "work-order-workbench",
                                        "icons": "ax-gdgzt",
                                        "children": [
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": true,
                                                "key": "1860252403479400450",
                                                "parentId": "1860252171974791169",
                                                "label": "我发起的",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "task/initiated",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/initiated"
                                            },
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860252503106703362",
                                                "parentId": "1860252171974791169",
                                                "label": "任务分配",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "task/assign",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/assign"
                                            },
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": true,
                                                "key": "1860252657905881090",
                                                "parentId": "1860252171974791169",
                                                "label": "待接任务",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "task/un-receive",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/un-receive"
                                            },
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": true,
                                                "key": "1860252823593472001",
                                                "parentId": "1860252171974791169",
                                                "label": "待完成任务",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "task/un-finished",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/un-finished"
                                            },
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": true,
                                                "key": "1860252996402991105",
                                                "parentId": "1860252171974791169",
                                                "label": "已完成任务",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "task/history",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/history"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860140906480717826",
                                        "parentId": "1859128283224133634",
                                        "label": "人员绩效",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "personnel-performance",
                                        "componentPath": "service-manage/personnel-performance/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1855915196505399298",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1857362593274187778",
                                "parentId": "1855915196593479682",
                                "label": "租控管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "rent-control-manage",
                                "icons": "wy-zkgl",
                                "children": [
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1857362861399265281",
                                        "parentId": "1857362593274187778",
                                        "label": "租控管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "rent-index",
                                        "componentPath": "rent-control-manage/rent/index"
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1857363153926803458",
                                        "parentId": "1857362593274187778",
                                        "label": "客户管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "customer-manage",
                                        "componentPath": "rent-control-manage/customer-manage/index"
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1857363280431206402",
                                        "parentId": "1857362593274187778",
                                        "label": "合同管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "contract-manage",
                                        "componentPath": "rent-control-manage/contract-manage/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1855915196505399298",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1858404997120970753",
                                "parentId": "1855915196593479682",
                                "label": "缴费管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "payment-manage",
                                "icons": "wy-jfgl",
                                "children": [
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858405175710240769",
                                        "parentId": "1858404997120970753",
                                        "label": "缴费中心",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "payment-center",
                                        "componentPath": "payment-manage/payment-center/index"
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858405599771152386",
                                        "parentId": "1858404997120970753",
                                        "label": "账单管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "bill-manage",
                                        "componentPath": "payment-manage/bill-manage/index"
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858407445269106689",
                                        "parentId": "1858404997120970753",
                                        "label": "费用配置",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "expense-setting",
                                        "componentPath": "payment-manage/expense-setting/index"
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858407708713340929",
                                        "parentId": "1858404997120970753",
                                        "label": "抄表管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "meter-reading-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1858408081951870977",
                                                "parentId": "1858407708713340929",
                                                "label": "仪表管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "meter-manage",
                                                "componentPath": "payment-manage/meter-reading-manage/meter-manage/index"
                                            },
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1858408281885954050",
                                                "parentId": "1858407708713340929",
                                                "label": "明细查询",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "detail-query",
                                                "componentPath": "payment-manage/meter-reading-manage/detail-query/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858408656462467073",
                                        "parentId": "1858404997120970753",
                                        "label": "空间收费标准绑定",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "payment-standard-bind",
                                        "componentPath": "payment-manage/payment-standard-bind/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1855915196505399298",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1858755369882669058",
                                "parentId": "1855915196593479682",
                                "label": "排班管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "workforce-manage",
                                "icons": "wy-pbgl",
                                "children": [
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858755734845837313",
                                        "parentId": "1858755369882669058",
                                        "label": "组织机构管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "organization",
                                        "componentPath": "workforce-manage/organization/index"
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858761398401945602",
                                        "parentId": "1858755369882669058",
                                        "label": "员工管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "staff",
                                        "componentPath": "workforce-manage/staff/index"
                                    },
                                    {
                                        "clientEndpointId": "1855915196505399298",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1859169950824189954",
                                        "parentId": "1858755369882669058",
                                        "label": "排班管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "shift-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1859170147939700737",
                                                "parentId": "1859169950824189954",
                                                "label": "班次管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "shift",
                                                "componentPath": "workforce-manage/shift/index"
                                            },
                                            {
                                                "clientEndpointId": "1855915196505399298",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1859170961374629890",
                                                "parentId": "1859169950824189954",
                                                "label": "排班管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "manage",
                                                "componentPath": "workforce-manage/shift/manage"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1846747893612175361",
                "label": "智慧运行监控",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1846748294344368129",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1846748294424059906",
                        "parentId": "-1",
                        "label": "WEB-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录"
                    }
                ]
            },
            {
                "key": "1825785502288437250",
                "label": "数据中台",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1825785651635019777",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1825785651744071682",
                        "parentId": "-1",
                        "label": "数据中台",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "path": "1",
                        "children": [
                            {
                                "clientEndpointId": "1825785651635019777",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1825792717816717314",
                                "parentId": "1825785651744071682",
                                "label": "首页",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "/index",
                                "componentPath": "/billBoard/index.vue",
                                "icons": "nav-index"
                            },
                            {
                                "clientEndpointId": "1825785651635019777",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1825792918065373185",
                                "parentId": "1825785651744071682",
                                "label": "项目管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/project",
                                "icons": "nav-projectManage",
                                "children": [
                                    {
                                        "clientEndpointId": "1825785651635019777",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1825793015188676609",
                                        "parentId": "1825792918065373185",
                                        "label": "项目信息",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/project/projectManage",
                                        "componentPath": "/projectManage/index.vue",
                                        "icons": "nav-projectManage"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1825785651635019777",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1825793101088022529",
                                "parentId": "1825785651744071682",
                                "label": "数据源管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/datasource",
                                "icons": "nav-dataSource",
                                "children": [
                                    {
                                        "clientEndpointId": "1825785651635019777",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1825793387802255361",
                                        "parentId": "1825793101088022529",
                                        "label": "数据源信息",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/datasource/dataSource",
                                        "componentPath": "/dataSource/index.vue",
                                        "icons": "nav-dataSource"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1825785651635019777",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1825793954045878274",
                                "parentId": "1825785651744071682",
                                "label": "任务调度",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/mission",
                                "icons": "nav-dataSource",
                                "children": [
                                    {
                                        "clientEndpointId": "1825785651635019777",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1825794198045319170",
                                        "parentId": "1825793954045878274",
                                        "label": "任务构建",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/mission/missionStructure",
                                        "componentPath": "/missionStructure/index.vue",
                                        "icons": "nav-missionStructure"
                                    },
                                    {
                                        "clientEndpointId": "1825785651635019777",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1825794287073615874",
                                        "parentId": "1825793954045878274",
                                        "label": "任务管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/mission/missionManage",
                                        "componentPath": "/missionManage/index.vue",
                                        "icons": "nav-missionManage"
                                    },
                                    {
                                        "clientEndpointId": "1825785651635019777",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1825794361837084673",
                                        "parentId": "1825793954045878274",
                                        "label": "任务模版",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/mission/missionDataModal",
                                        "componentPath": "/missionDataModal/index.vue",
                                        "icons": "nav-missionDataModal"
                                    },
                                    {
                                        "clientEndpointId": "1825785651635019777",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1825794437066121218",
                                        "parentId": "1825793954045878274",
                                        "label": "执行器管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/mission/conductManage",
                                        "componentPath": "/conductManage/index.vue",
                                        "icons": "nav-conductManage"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1825785651635019777",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1825793872122732546",
                                "parentId": "1825785651744071682",
                                "label": "运维监控",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/maintain",
                                "icons": "nav-dataSource",
                                "children": [
                                    {
                                        "clientEndpointId": "1825785651635019777",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1825794031665668098",
                                        "parentId": "1825793872122732546",
                                        "label": "资源监控",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/maintain/sourceManage",
                                        "componentPath": "/sourceManage/index.vue",
                                        "icons": "nav-sourceManage"
                                    },
                                    {
                                        "clientEndpointId": "1825785651635019777",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1825794114373148673",
                                        "parentId": "1825793872122732546",
                                        "label": "日志信息",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/maintain/logManage",
                                        "componentPath": "/logManage/index.vue",
                                        "icons": "nav-logManage"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1853724148043620354",
                "label": "菜单复制测试",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1853724232349130754",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1849275112523888402",
                        "parentId": "-1",
                        "label": "WEB-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "children": [
                            {
                                "clientEndpointId": "1853724232349130754",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1849461194083346193",
                                "parentId": "1849275112523888402",
                                "label": "巡检管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrOperator/inspection",
                                "icons": "icon-xunjian",
                                "children": [
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849461632744630033",
                                        "parentId": "1849461194083346193",
                                        "label": "巡检点管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/inspection/point",
                                        "componentPath": "/views/InspectionMgt/PointMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849461739053459217",
                                        "parentId": "1849461194083346193",
                                        "label": "巡检路线管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/inspection/route",
                                        "componentPath": "/views/InspectionMgt/RouteMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849461878719588113",
                                        "parentId": "1849461194083346193",
                                        "label": "巡检配置表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/inspection/config",
                                        "componentPath": "/views/InspectionMgt/ConfigMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": false,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1853021046088943378",
                                        "parentId": "1849461194083346193",
                                        "label": "新增巡检路线",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/inspection/route/create",
                                        "componentPath": "/views/InspectionMgt/RouteMgt/CreatePage/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": false,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1853021764006987538",
                                        "parentId": "1849461194083346193",
                                        "label": "新增巡检配置表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/inspection/config/create",
                                        "componentPath": "/views/InspectionMgt/ConfigMgt/CreatePage/Index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1853724232349130754",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1849462071263307537",
                                "parentId": "1849275112523888402",
                                "label": "保养设备管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrOperator/maintain",
                                "icons": "icon-jiankang",
                                "children": [
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849462222564435729",
                                        "parentId": "1849462071263307537",
                                        "label": "保养设备管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/maintain/device",
                                        "componentPath": "/views/DeviceMaintain/DeviceMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849462341967882001",
                                        "parentId": "1849462071263307537",
                                        "label": "保养项目管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/maintain/project",
                                        "componentPath": "/views/DeviceMaintain/ProjectMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849462459324507921",
                                        "parentId": "1849462071263307537",
                                        "label": "保养配置表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/maintain/config",
                                        "componentPath": "/views/DeviceMaintain/ConfigMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": false,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1853023604777961234",
                                        "parentId": "1849462071263307537",
                                        "label": "新增保养项目",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/maintain/project/create",
                                        "componentPath": "/views/DeviceMaintain/ProjectMgt/CreatePage/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": false,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1853023829466826513",
                                        "parentId": "1849462071263307537",
                                        "label": "新增保养配置表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/maintain/config/create",
                                        "componentPath": "/views/DeviceMaintain/ConfigMgt/CreatePage/Index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1853724232349130754",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1849462566203762450",
                                "parentId": "1849275112523888402",
                                "label": "设备报警中心",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrOperator/alarm",
                                "icons": "icon-baojing",
                                "children": [
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849462693916124946",
                                        "parentId": "1849462566203762450",
                                        "label": "报警日志",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/alarm/record",
                                        "componentPath": "/views/AlarmCenter/Record/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849462862560700177",
                                        "parentId": "1849462566203762450",
                                        "label": "报警规则配置",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/alarm/rule",
                                        "componentPath": "/views/AlarmCenter/RuleConfig/Index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1853724232349130754",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1849462960774522642",
                                "parentId": "1849275112523888402",
                                "label": "综管工单中心",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrOperator/work-order",
                                "icons": "icon-baojing",
                                "children": [
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849463054898898706",
                                        "parentId": "1849462960774522642",
                                        "label": "巡检工单",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/inspection",
                                        "componentPath": "/views/WorkOrder/Inspection/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849463150457726737",
                                        "parentId": "1849462960774522642",
                                        "label": "保养工单",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/device-maintain",
                                        "componentPath": "/views/WorkOrder/DeviceMaintain/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849463278086203154",
                                        "parentId": "1849462960774522642",
                                        "label": "告警工单",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/warn-order",
                                        "componentPath": "/views/WorkOrder/WarnOrder/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1853724232349130754",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849463384487307026",
                                        "parentId": "1849462960774522642",
                                        "label": "报事报修工单",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/report-repair",
                                        "componentPath": "/views/WorkOrder/ReportRepair/Index.vue"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1852293439814901761",
                "label": "智慧能源-SIT",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1852293743545425922",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1852293743650283521",
                        "parentId": "-1",
                        "label": "WEB-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "children": [
                            {
                                "clientEndpointId": "1852293743545425922",
                                "isShow": true,
                                "isOutsideChain": true,
                                "isCache": false,
                                "key": "1852294149575024642",
                                "parentId": "1852293743650283521",
                                "label": "能耗总览",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "/rxLynkrEnergy/dashboard",
                                "componentPath": "/views/Dashboard/Index.vue"
                            },
                            {
                                "clientEndpointId": "1852293743545425922",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1852294453536235522",
                                "parentId": "1852293743650283521",
                                "label": "能耗监测",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrEnergy/energy-monitor",
                                "icons": "icon-monitor",
                                "children": [
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1852294967791460353",
                                        "parentId": "1852294453536235522",
                                        "label": "用能监测",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "/rxLynkrEnergy/energy-monitor/energy-usage-monitor",
                                        "children": [
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1852295227897028610",
                                                "parentId": "1852294967791460353",
                                                "label": "分项概览",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-monitor/energy-usage-monitor/subitem",
                                                "componentPath": "/views/EnergyMonitor/EnergyUsageMonitor/EnergyUsageSubitem/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1852295373653286913",
                                                "parentId": "1852294967791460353",
                                                "label": "用能详情",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-monitor/energy-usage-monitor/detail",
                                                "componentPath": "/views/EnergyMonitor/EnergyUsageMonitor/EnergyUsageDetail/Index.vue"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1852295094694322177",
                                        "parentId": "1852294453536235522",
                                        "label": "告警中心",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "/rxLynkrEnergy/energy-monitor/alarm-center",
                                        "children": [
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1852295574623363073",
                                                "parentId": "1852295094694322177",
                                                "label": "用能告警",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-monitor/alarm-center/alarm",
                                                "componentPath": "/views/EnergyMonitor/AlarmCenter/EnergyUsageAlarm/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1852295726864015361",
                                                "parentId": "1852295094694322177",
                                                "label": "目标配置",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-monitor/alarm-center/target-config",
                                                "componentPath": "/views/EnergyMonitor/AlarmCenter/TargetConfig/Index.vue"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1852293743545425922",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1852294594150277121",
                                "parentId": "1852293743650283521",
                                "label": "用能费用",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrEnergy/energy-cost",
                                "icons": "icon-cost",
                                "children": [
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1852296016212271105",
                                        "parentId": "1852294594150277121",
                                        "label": "费用总览",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/energy-cost/cost-overview",
                                        "componentPath": "/views/EnergyCost/CostOverview/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1852296180603822082",
                                        "parentId": "1852294594150277121",
                                        "label": "分项电费",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/energy-cost/cost-overview/item-elec-fee",
                                        "componentPath": "/views/EnergyCost/CostOverview/ItemElecFee/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1852296336040534018",
                                        "parentId": "1852294594150277121",
                                        "label": "费用明细",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/energy-cost/cost-details",
                                        "componentPath": "/views/EnergyCost/CostDetails/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1852296547215351809",
                                        "parentId": "1852294594150277121",
                                        "label": "价格管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "/rxLynkrEnergy/energy-cost/price-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1852296678908108801",
                                                "parentId": "1852296547215351809",
                                                "label": "价格设置",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-cost/price-manage/setting",
                                                "componentPath": "/views/EnergyCost/PriceManage/PriceSetting/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1852296838811754498",
                                                "parentId": "1852296547215351809",
                                                "label": "价格应用",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-cost/price-manage/apply",
                                                "componentPath": "/views/EnergyCost/PriceManage/PriceApply/Index.vue"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1852293743545425922",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1864572470459412481",
                                "parentId": "1852293743650283521",
                                "label": "能耗分析",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrEnergy/energy-analysis",
                                "children": [
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1864572924819976193",
                                        "parentId": "1864572470459412481",
                                        "label": "能源流向",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/energy-analysis/energy-flow",
                                        "componentPath": "/views/EnergyAnalysis/EnergyFlow/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1864573014376755202",
                                        "parentId": "1864572470459412481",
                                        "label": "冷站能耗",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "/rxLynkrEnergy/energy-analysis/cold-station",
                                        "children": [
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": false,
                                                "key": "1864573126821851138",
                                                "parentId": "1864573014376755202",
                                                "label": "冷站能量分析",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-analysis/cold-station/energy",
                                                "componentPath": "/views/EnergyAnalysis/ColdStation/Energy/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": false,
                                                "key": "1864573239615074305",
                                                "parentId": "1864573014376755202",
                                                "label": "冷站能耗分析",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-analysis/cold-station/usage",
                                                "componentPath": "/views/EnergyAnalysis/ColdStation/Usage/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": false,
                                                "key": "1864573333462626305",
                                                "parentId": "1864573014376755202",
                                                "label": "冷站能效分析",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-analysis/cold-station/efficiency",
                                                "componentPath": "/views/EnergyAnalysis/ColdStation/Efficiency/Index.vue"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1864573428060958722",
                                        "parentId": "1864572470459412481",
                                        "label": "热源能耗",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "/rxLynkrEnergy/energy-analysis/hot-source",
                                        "children": [
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": false,
                                                "key": "1864573541110034434",
                                                "parentId": "1864573428060958722",
                                                "label": "热源能量分析",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-analysis/hot-source/energy",
                                                "componentPath": "/views/EnergyAnalysis/HotSource/Energy/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": false,
                                                "key": "1864573699507924994",
                                                "parentId": "1864573428060958722",
                                                "label": "热源能耗分析",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-analysis/hot-source/usage",
                                                "componentPath": "/views/EnergyAnalysis/HotSource/Usage/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": false,
                                                "key": "1864573800963944449",
                                                "parentId": "1864573428060958722",
                                                "label": "热源能效分析",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/energy-analysis/hot-source/efficiency",
                                                "componentPath": "/views/EnergyAnalysis/HotSource/Efficiency/Index.vue"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1852293743545425922",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1852294720981835778",
                                "parentId": "1852293743650283521",
                                "label": "双碳管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrEnergy/dual-carbon",
                                "icons": "icon-nengyuan",
                                "children": [
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1852297004763586561",
                                        "parentId": "1852294720981835778",
                                        "label": "碳排放总览",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/dual-carbon/overview",
                                        "componentPath": "/views/DualCarbon/EmissionsOverview/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1852297161659916290",
                                        "parentId": "1852294720981835778",
                                        "label": "碳排放监测",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/dual-carbon/monitor",
                                        "componentPath": "/views/DualCarbon/EmissionsMonitor/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1852297358863507458",
                                        "parentId": "1852294720981835778",
                                        "label": "告警中心",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/dual-carbon/alarm",
                                        "componentPath": "/views/DualCarbon/AlarmCenter/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1852297510282076161",
                                        "parentId": "1852294720981835778",
                                        "label": "系统配置",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/dual-carbon/system-config",
                                        "componentPath": "/views/DualCarbon/SystemConfig/Index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1852293743545425922",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1852294848111190018",
                                "parentId": "1852293743650283521",
                                "label": "远程抄表",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrEnergy/remote-meter",
                                "icons": "icon-meter",
                                "children": [
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1852297738049560578",
                                        "parentId": "1852294848111190018",
                                        "label": "抄表总览",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/remote-meter/overview",
                                        "componentPath": "/views/RemoteReadMeter/Overview/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1852297852331761665",
                                        "parentId": "1852294848111190018",
                                        "label": "设备管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "/rxLynkrEnergy/remote-meter/device-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1852298391169802242",
                                                "parentId": "1852297852331761665",
                                                "label": "系统拓扑",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/remote-meter/device-manage/system-topo",
                                                "componentPath": "/views/RemoteReadMeter/DeviceManage/SystemTopo/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1852298522342465537",
                                                "parentId": "1852297852331761665",
                                                "label": "系统平面",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/remote-meter/device-manage/system-plan",
                                                "componentPath": "/views/RemoteReadMeter/DeviceManage/SystemPlan/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1852298679381401602",
                                                "parentId": "1852297852331761665",
                                                "label": "采集器管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/remote-meter/device-manage/collector-manage",
                                                "componentPath": "/views/RemoteReadMeter/DeviceManage/CollectorManage/Index.vue"
                                            },
                                            {
                                                "clientEndpointId": "1852293743545425922",
                                                "isShow": true,
                                                "isOutsideChain": true,
                                                "isCache": false,
                                                "key": "1852298823728373761",
                                                "parentId": "1852297852331761665",
                                                "label": "表具管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "/rxLynkrEnergy/remote-meter/device-manage/meter-manage",
                                                "componentPath": "/views/RemoteReadMeter/DeviceManage/MeterManage/Index.vue"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1852293743545425922",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1852298160495665154",
                                        "parentId": "1852294848111190018",
                                        "label": "明细查询",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrEnergy/remote-meter/bill-manage",
                                        "componentPath": "/views/RemoteReadMeter/BillManage/BillInquiry/Index.vue"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1858783242513338370",
                "label": "智慧物业SIT",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1858785342232252417",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1858785342332915714",
                        "parentId": "-1",
                        "label": "WEB-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "children": [
                            {
                                "clientEndpointId": "1858785342232252417",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1858785540337618945",
                                "parentId": "1858785342332915714",
                                "label": "内容管理",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "content-manage",
                                "componentPath": "content-manage/index",
                                "icons": "wy-nrgl"
                            },
                            {
                                "clientEndpointId": "1858785342232252417",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1858785661808857089",
                                "parentId": "1858785342332915714",
                                "label": "投诉建议",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "complaint-suggestion",
                                "icons": "wy-tsjy",
                                "children": [
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858786222989955073",
                                        "parentId": "1858785661808857089",
                                        "label": "投诉管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "complaint-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1858786401046548481",
                                                "parentId": "1858786222989955073",
                                                "label": "投诉管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "complaint-index",
                                                "componentPath": "complaint-suggestion/complaint-manage/index"
                                            },
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1858786483955355649",
                                                "parentId": "1858786222989955073",
                                                "label": "投诉类型管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "complaint-type",
                                                "componentPath": "complaint-suggestion/complaint-manage/type"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858786276500885505",
                                        "parentId": "1858785661808857089",
                                        "label": "建议管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "suggestion-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1858786586766135297",
                                                "parentId": "1858786276500885505",
                                                "label": "建议管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "suggestion-index",
                                                "componentPath": "complaint-suggestion/suggestion-manage/index"
                                            },
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1858786692915580930",
                                                "parentId": "1858786276500885505",
                                                "label": "建议类型管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "suggestion-type",
                                                "componentPath": "complaint-suggestion/suggestion-manage/type"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1858785342232252417",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1859796385708429313",
                                "parentId": "1858785342332915714",
                                "label": "满意度管理",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "satisfaction-mana",
                                "componentPath": "satisfaction-manage/index",
                                "icons": "wy-mydgl"
                            },
                            {
                                "clientEndpointId": "1858785342232252417",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1858785759737466882",
                                "parentId": "1858785342332915714",
                                "label": "空间管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "space-manage",
                                "icons": "wy-kjgl",
                                "children": [
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858786796133208065",
                                        "parentId": "1858785759737466882",
                                        "label": "楼栋管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "space-building",
                                        "componentPath": "space-manage/building"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858786875581714434",
                                        "parentId": "1858785759737466882",
                                        "label": "空间管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "space-index",
                                        "componentPath": "space-manage/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1858785342232252417",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1859796660951240705",
                                "parentId": "1858785342332915714",
                                "label": "服务管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "service-manage",
                                "icons": "wy-fwgl",
                                "children": [
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860512054951333889",
                                        "parentId": "1859796660951240705",
                                        "label": "服务设置",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "service-setting",
                                        "componentPath": "service-manage/service-setting/index"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860512263366299650",
                                        "parentId": "1859796660951240705",
                                        "label": "工单列表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order-1/work-order-list",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order-1/work-order-list"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860512333943853058",
                                        "parentId": "1859796660951240705",
                                        "label": "工单工作台",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "work-order-workbench",
                                        "children": [
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860512577230262273",
                                                "parentId": "1860512333943853058",
                                                "label": "我发起的",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "task/initiated",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/initiated"
                                            },
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860512653562400769",
                                                "parentId": "1860512333943853058",
                                                "label": "任务分配",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "task/assign",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/assign"
                                            },
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860512718095962113",
                                                "parentId": "1860512333943853058",
                                                "label": "待接任务",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "task/un-receive",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/un-receive"
                                            },
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860512811540860930",
                                                "parentId": "1860512333943853058",
                                                "label": "待完成任务",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "task/un-finished",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/un-finished"
                                            },
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860512952091987969",
                                                "parentId": "1860512333943853058",
                                                "label": "已完成任务",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "task/history",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/history"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860512436213567489",
                                        "parentId": "1859796660951240705",
                                        "label": "人员绩效",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "personnel-performance",
                                        "componentPath": "service-manage/personnel-performance/index"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860512149818101761",
                                        "parentId": "1859796660951240705",
                                        "label": "费用统计",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "expense-statistics",
                                        "componentPath": "service-manage/expense-statistics/index"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860671840275714049",
                                        "parentId": "1859796660951240705",
                                        "label": "工单基础配置",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "base-config",
                                        "icons": "",
                                        "children": [
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860671941354246145",
                                                "parentId": "1860671840275714049",
                                                "label": "业务类型维护",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "work-order/work-order-type",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/work-order-type"
                                            },
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860672081863430145",
                                                "parentId": "1860671840275714049",
                                                "label": "表单管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "work-order/form-desin",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/form-design"
                                            },
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860672189619294210",
                                                "parentId": "1860671840275714049",
                                                "label": "流程管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "work-order/work-flow",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/work-flow"
                                            },
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860672449343180802",
                                                "parentId": "1860671840275714049",
                                                "label": "工单模板管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "work-order/template",
                                                "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/template"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1858785342232252417",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1858785827613888514",
                                "parentId": "1858785342332915714",
                                "label": "租控管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "rent-control-manage",
                                "icons": "wy-zkgl",
                                "children": [
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858786963221696513",
                                        "parentId": "1858785827613888514",
                                        "label": "租控管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "rent-index",
                                        "componentPath": "rent-control-manage/rent/index"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858787038656253954",
                                        "parentId": "1858785827613888514",
                                        "label": "客户管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "customer-manage",
                                        "componentPath": "rent-control-manage/customer-manage/index"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858787136261902337",
                                        "parentId": "1858785827613888514",
                                        "label": "合同管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "contract-manage",
                                        "componentPath": "rent-control-manage/contract-manage/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1858785342232252417",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1858785891962900481",
                                "parentId": "1858785342332915714",
                                "label": "缴费管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "payment-manage",
                                "icons": "wy-jfgl",
                                "children": [
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858787258064490498",
                                        "parentId": "1858785891962900481",
                                        "label": "缴费中心",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "payment-center",
                                        "componentPath": "payment-manage/payment-center/index"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858787350947352577",
                                        "parentId": "1858785891962900481",
                                        "label": "账单管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "bill-manage",
                                        "componentPath": "payment-manage/bill-manage/index"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858787416806313986",
                                        "parentId": "1858785891962900481",
                                        "label": "费用配置",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "expense-setting",
                                        "componentPath": "payment-manage/expense-setting/index"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858787490043056130",
                                        "parentId": "1858785891962900481",
                                        "label": "抄表管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "meter-reading-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1858787606854422529",
                                                "parentId": "1858787490043056130",
                                                "label": "仪表管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "meter-manage",
                                                "componentPath": "payment-manage/meter-reading-manage/meter-manage/index"
                                            },
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1858787688601407490",
                                                "parentId": "1858787490043056130",
                                                "label": "明细查询",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "detail-query",
                                                "componentPath": "payment-manage/meter-reading-manage/detail-query/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858787814204035073",
                                        "parentId": "1858785891962900481",
                                        "label": "空间收费标准绑定",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "payment-standard-bind",
                                        "componentPath": "payment-manage/payment-standard-bind/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1858785342232252417",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1858785941434716162",
                                "parentId": "1858785342332915714",
                                "label": "排班管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "workforce-manage",
                                "icons": "wy-pbgl",
                                "children": [
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858787906063486977",
                                        "parentId": "1858785941434716162",
                                        "label": "组织机构管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "organization",
                                        "componentPath": "workforce-manage/organization/index"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1858787989815349249",
                                        "parentId": "1858785941434716162",
                                        "label": "员工管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "staff",
                                        "componentPath": "workforce-manage/staff/index"
                                    },
                                    {
                                        "clientEndpointId": "1858785342232252417",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1860160838819958785",
                                        "parentId": "1858785941434716162",
                                        "label": "排班管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "shift-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860160939403563009",
                                                "parentId": "1860160838819958785",
                                                "label": "班次管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "shift",
                                                "componentPath": "workforce-manage/shift/index"
                                            },
                                            {
                                                "clientEndpointId": "1858785342232252417",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1860161007359676418",
                                                "parentId": "1860160838819958785",
                                                "label": "排班设置",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "manage",
                                                "componentPath": "workforce-manage/shift/manage"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1837702465059033089",
                "label": "智慧安消",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1837770402671366145",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1837770402751057921",
                        "parentId": "-1",
                        "label": "web端-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "children": [
                            {
                                "clientEndpointId": "1837770402671366145",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1837778486336688129",
                                "parentId": "1837770402751057921",
                                "label": "视频监控",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "video-surveillance",
                                "icons": "ax-spjk",
                                "children": [
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837779008447844353",
                                        "parentId": "1837778486336688129",
                                        "label": "数据看板",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "video-data-board",
                                        "componentPath": "video-surveillance/data-board/index"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837779077788078082",
                                        "parentId": "1837778486336688129",
                                        "label": "告警监控",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "alarm-monitoring",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837779155093295105",
                                                "parentId": "1837779077788078082",
                                                "label": "告警中心",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "alarm-center",
                                                "componentPath": "video-surveillance/alarm-monitoring/alarm-center/index",
                                                "icons": ""
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837779237830135809",
                                                "parentId": "1837779077788078082",
                                                "label": "视频中心",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "video-center",
                                                "componentPath": "video-surveillance/alarm-monitoring/video-center/index"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": false,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837779306499280897",
                                                "parentId": "1837779077788078082",
                                                "label": "视频轮巡",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "video-rotation",
                                                "componentPath": "video-surveillance/alarm-monitoring/video-rotation/index"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837779363143356418",
                                                "parentId": "1837779077788078082",
                                                "label": "视频回放",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "video-playback",
                                                "componentPath": "video-surveillance/alarm-monitoring/video-playback/index"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837779431149801473",
                                                "parentId": "1837779077788078082",
                                                "label": "轨迹查看",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "track-viewing",
                                                "componentPath": "video-surveillance/alarm-monitoring/track-viewing/index",
                                                "icons": ""
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": false,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837779504155856898",
                                                "parentId": "1837779077788078082",
                                                "label": "采集记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "collect-record",
                                                "componentPath": "video-surveillance/alarm-monitoring/collect-record/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837779562083389442",
                                        "parentId": "1837778486336688129",
                                        "label": "事件规则管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "event-rule-manage",
                                        "componentPath": "video-surveillance/event-rule-manage/index"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837779730405003265",
                                        "parentId": "1837778486336688129",
                                        "label": "设备联动规则管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "device-linkage-manage",
                                        "componentPath": "video-surveillance/device-linkage-manage/index"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837779786734505986",
                                        "parentId": "1837778486336688129",
                                        "label": "视频监控设备管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "video-equipment-manage",
                                        "componentPath": "video-surveillance/video-equipment-manage/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1837770402671366145",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1837778628376793089",
                                "parentId": "1837770402751057921",
                                "label": "智慧通行",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "wisdom-pass",
                                "icons": "ax-zhtx",
                                "children": [
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837779862982758402",
                                        "parentId": "1837778628376793089",
                                        "label": "数据看板",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "wisdom-data-board",
                                        "componentPath": "wisdom-pass/data-board/index"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837779937549094913",
                                        "parentId": "1837778628376793089",
                                        "label": "设备管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "equipment-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837779988551831553",
                                                "parentId": "1837779937549094913",
                                                "label": "设备管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "index",
                                                "componentPath": "wisdom-pass/equipment-manage/equipment-manage"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837780039994970114",
                                                "parentId": "1837779937549094913",
                                                "label": "门禁管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "entrance-manage",
                                                "componentPath": "wisdom-pass/equipment-manage/entrance-manage"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837780109733662722",
                                        "parentId": "1837778628376793089",
                                        "label": "授权管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "accredit-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837780173407391745",
                                                "parentId": "1837780109733662722",
                                                "label": "门禁授权",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "entrance-guard",
                                                "componentPath": "wisdom-pass/accredit-manage/entrance-guard"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837780241258647553",
                                                "parentId": "1837780109733662722",
                                                "label": "临时授权管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "temporary-authorization-manage",
                                                "componentPath": "wisdom-pass/accredit-manage/temporary-authorization-manage"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837780314587664386",
                                        "parentId": "1837778628376793089",
                                        "label": "设备告警",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "device-alarm",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837780377548361729",
                                                "parentId": "1837780314587664386",
                                                "label": "告警规则",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "alarm-rule",
                                                "componentPath": "wisdom-pass/device-alarm/alarm-rule",
                                                "icons": ""
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837780439762472962",
                                                "parentId": "1837780314587664386",
                                                "label": "设备告警",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "equipment-alarm",
                                                "componentPath": "wisdom-pass/device-alarm/equipment-alarm"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837780485375528961",
                                        "parentId": "1837778628376793089",
                                        "label": "统计分析",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "statistical-analysis",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837780544116756481",
                                                "parentId": "1837780485375528961",
                                                "label": "门禁下发记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "entrance-record",
                                                "componentPath": "wisdom-pass/statistical-analysis/entrance-guard-send-record"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837780600840523778",
                                                "parentId": "1837780485375528961",
                                                "label": "通行记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "traffic-record",
                                                "componentPath": "wisdom-pass/statistical-analysis/traffic-record"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837780662958166018",
                                                "parentId": "1837780485375528961",
                                                "label": "门禁进出统计",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "access-control-sstatistics",
                                                "componentPath": "wisdom-pass/statistical-analysis/access-control-sstatistics"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1837770402671366145",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1837778684681129985",
                                "parentId": "1837770402751057921",
                                "label": "智慧访客",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "smart-visitor",
                                "icons": "ax-zhfk",
                                "children": [
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837780775843663873",
                                        "parentId": "1837778684681129985",
                                        "label": "数据看板",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "visitor-overview",
                                        "componentPath": "visitor/overview/index"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837780895599431682",
                                        "parentId": "1837778684681129985",
                                        "label": "黑名单管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "black-list",
                                        "componentPath": "visitor/backlist-management/index"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837780978759897089",
                                        "parentId": "1837778684681129985",
                                        "label": "访客管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "h",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837781029351591938",
                                                "parentId": "1837780978759897089",
                                                "label": "访客人员管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "visitor-person",
                                                "componentPath": "visitor/person-management/index"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837781091435679745",
                                                "parentId": "1837780978759897089",
                                                "label": "访客审批",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "approve",
                                                "componentPath": "visitor/approve/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837781181562884098",
                                        "parentId": "1837778684681129985",
                                        "label": "访客规则管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "r",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837781239586885634",
                                                "parentId": "1837781181562884098",
                                                "label": "访客规则",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "visitor-type",
                                                "componentPath": "visitor/rule-management/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837781336106209281",
                                        "parentId": "1837778684681129985",
                                        "label": "统计分析",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "sat",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837781717049675778",
                                                "parentId": "1837781336106209281",
                                                "label": "访客进出记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "access-manage",
                                                "componentPath": "visitor/access-management/index"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1837770402671366145",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1837778721033162754",
                                "parentId": "1837770402751057921",
                                "label": "智慧消防",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "wisdom-fire-protection",
                                "icons": "ax-zhxf",
                                "children": [
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837782101348585474",
                                        "parentId": "1837778721033162754",
                                        "label": "数据看板",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "fire-data-board",
                                        "componentPath": "wisdom-fire-protection/data-board/index"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837782002077798402",
                                        "parentId": "1837778721033162754",
                                        "label": "巡检管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "inspection-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837782169124343809",
                                                "parentId": "1837782002077798402",
                                                "label": "巡检点管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "inspection-point",
                                                "componentPath": "wisdom-fire-protection/inspection-manage/inspection-point/index"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1849021628629176322",
                                                "parentId": "1837782002077798402",
                                                "label": "巡检路线管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "inspection-path",
                                                "componentPath": "wisdom-fire-protection/inspection-manage/inspection-path/index"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837782228465356801",
                                                "parentId": "1837782002077798402",
                                                "label": "巡检配置表",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "check-template",
                                                "componentPath": "wisdom-fire-protection/inspection-manage/check-template/index"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837782287999307778",
                                                "parentId": "1837782002077798402",
                                                "label": "巡检记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "inspection-record",
                                                "componentPath": "wisdom-fire-protection/inspection-manage/inspection-record/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837782346778284033",
                                        "parentId": "1837778721033162754",
                                        "label": "预案管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "plan-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837782449547120641",
                                                "parentId": "1837782346778284033",
                                                "label": "预案管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "plan-manage-index",
                                                "componentPath": "wisdom-fire-protection/plan-manage/plan-manage/index"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837782531700953090",
                                                "parentId": "1837782346778284033",
                                                "label": "预案记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "plan-record",
                                                "componentPath": "wisdom-fire-protection/plan-manage/plan-record/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837782619659702273",
                                        "parentId": "1837778721033162754",
                                        "label": "消防管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "fire-alarm",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837782737616113666",
                                                "parentId": "1837782619659702273",
                                                "label": "消防告警",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "fire-alarm-index",
                                                "componentPath": "wisdom-fire-protection/fire-alarm/fire-alarm/index"
                                            },
                                            {
                                                "clientEndpointId": "1837770402671366145",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837782799507263489",
                                                "parentId": "1837782619659702273",
                                                "label": "告警规则",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "fire-alarm-rule",
                                                "componentPath": "wisdom-fire-protection/fire-alarm/alarm-rule/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1853364608659890177",
                                        "parentId": "1837778721033162754",
                                        "label": "消防设备管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "fire-equipment-index",
                                        "componentPath": "wisdom-fire-protection/fire-equipment-manage/fire-equipment-manage/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1837770402671366145",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1837778843137740801",
                                "parentId": "1837770402751057921",
                                "label": "工单基础配置",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "base-config",
                                "icons": "ax-gdjcpz",
                                "children": [
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837783544252076034",
                                        "parentId": "1837778843137740801",
                                        "label": "业务类型维护",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order/work-order-type",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/work-order-type"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837783683242921986",
                                        "parentId": "1837778843137740801",
                                        "label": "表单管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order/form-design",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/form-design"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837783863916761089",
                                        "parentId": "1837778843137740801",
                                        "label": "流程管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order/work-flow",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/work-flow"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837784058238865410",
                                        "parentId": "1837778843137740801",
                                        "label": "工单模板管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order/template",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/template"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837784175968784385",
                                        "parentId": "1837778843137740801",
                                        "label": "工单列表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order-1/work-order-list",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order-1/work-order-list"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1837770402671366145",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1838097116572160001",
                                "parentId": "1837770402751057921",
                                "label": "工单工作台",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "work-order-workbench",
                                "icons": "ax-gdgzt",
                                "children": [
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1838099330128678914",
                                        "parentId": "1838097116572160001",
                                        "label": "我发起的",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "task/initiated",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/initiated"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1838099909282369537",
                                        "parentId": "1838097116572160001",
                                        "label": "任务分配",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "task/assign",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/assign"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1838099975124553729",
                                        "parentId": "1838097116572160001",
                                        "label": "待接任务",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "task/un-receive",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/un-receive"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1838100052845006849",
                                        "parentId": "1838097116572160001",
                                        "label": "待完成任务",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "task/un-finished",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/un-finished"
                                    },
                                    {
                                        "clientEndpointId": "1837770402671366145",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1838100189654814722",
                                        "parentId": "1838097116572160001",
                                        "label": "历史任务",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "task/history",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/history"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1",
                "label": "数字化中台",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1670707480465387521",
                        "isShow": true,
                        "isCache": false,
                        "key": "1670707481568489473",
                        "parentId": "-1",
                        "label": "系统web端-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "path": "--",
                        "children": [
                            {
                                "clientEndpointId": "1670707480465387521",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1838481866361171970",
                                "parentId": "1670707481568489473",
                                "label": "首页",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/home",
                                "icons": "home"
                            },
                            {
                                "clientEndpointId": "1670707480465387521",
                                "isShow": true,
                                "isCache": false,
                                "key": "1670725633560547328",
                                "parentId": "1670707481568489473",
                                "label": "用户中心",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/base",
                                "icons": "user-center",
                                "children": [
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1670734144235376640",
                                        "parentId": "1670725633560547328",
                                        "label": "用户管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/base/user_manage",
                                        "componentPath": "/userManage/src/index.vue",
                                        "icons": "user-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670802869089210368",
                                                "parentId": "1670734144235376640",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670803636609093632",
                                                "parentId": "1670734144235376640",
                                                "label": "详情",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670803694888947712",
                                                "parentId": "1670734144235376640",
                                                "label": "编辑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670803765839794176",
                                                "parentId": "1670734144235376640",
                                                "label": "角色配置",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670803818444754944",
                                                "parentId": "1670734144235376640",
                                                "label": "岗位配置",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670803954042408960",
                                                "parentId": "1670734144235376640",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670965523074256896",
                                                "parentId": "1670734144235376640",
                                                "label": "启停",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1863485978202390529",
                                                "parentId": "1670734144235376640",
                                                "label": "修改密码",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isCache": false,
                                        "key": "1670784776594001920",
                                        "parentId": "1670725633560547328",
                                        "label": "组织架构管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/base/org_manague",
                                        "componentPath": "/orgManage/src/index.vue",
                                        "icons": "organize-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670973696552210432",
                                                "parentId": "1670784776594001920",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670973804467458048",
                                                "parentId": "1670784776594001920",
                                                "label": "编辑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670973890882703360",
                                                "parentId": "1670784776594001920",
                                                "label": "新增2",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670973945333157888",
                                                "parentId": "1670784776594001920",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isCache": false,
                                        "key": "1670784877223743488",
                                        "parentId": "1670725633560547328",
                                        "label": "岗位管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/base/post_manage",
                                        "componentPath": "/postManage/src/index.vue",
                                        "icons": "post-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670974058839412736",
                                                "parentId": "1670784877223743488",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670974153358053376",
                                                "parentId": "1670784877223743488",
                                                "label": "编辑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670974204520173568",
                                                "parentId": "1670784877223743488",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1670707480465387521",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1742740210248015873",
                                "parentId": "1670707481568489473",
                                "label": "权限中心",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/privilige",
                                "icons": "limits",
                                "children": [
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isCache": false,
                                        "key": "1670785051706789888",
                                        "parentId": "1742740210248015873",
                                        "label": "角色管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/base/role_manage",
                                        "componentPath": "/roleManage/src/index.vue",
                                        "icons": "role-center",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670974460624375808",
                                                "parentId": "1670785051706789888",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670974563212857344",
                                                "parentId": "1670785051706789888",
                                                "label": "详情",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670974617763975168",
                                                "parentId": "1670785051706789888",
                                                "label": "编辑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670974680535928832",
                                                "parentId": "1670785051706789888",
                                                "label": "权限配置",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670974740694831104",
                                                "parentId": "1670785051706789888",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isCache": false,
                                        "key": "1670707481568489474",
                                        "parentId": "1742740210248015873",
                                        "label": "权限管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/base/limit_manage",
                                        "componentPath": "/limitManage/src/index.vue",
                                        "icons": "permission-manage"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1670707480465387521",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1742740766525972482",
                                "parentId": "1670707481568489473",
                                "label": "应用中心",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/application",
                                "icons": "app-center",
                                "children": [
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isCache": false,
                                        "key": "1670783510895661056",
                                        "parentId": "1742740766525972482",
                                        "label": "应用管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/client/client_anage",
                                        "componentPath": "/clientManage/src/index.vue",
                                        "icons": "app-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670966400187109376",
                                                "parentId": "1670783510895661056",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670966793260503040",
                                                "parentId": "1670783510895661056",
                                                "label": "编辑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670969124320448512",
                                                "parentId": "1670783510895661056",
                                                "label": "重置密钥",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670969187604107264",
                                                "parentId": "1670783510895661056",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1825788915747250177",
                                        "parentId": "1742740766525972482",
                                        "label": "应用分类",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/clinet/type",
                                        "componentPath": "/appCategoryManage/src/index.vue",
                                        "icons": "app-classify",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1825792511838642177",
                                                "parentId": "1825788915747250177",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1825792652163276801",
                                                "parentId": "1825788915747250177",
                                                "label": "编辑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1825792746228932610",
                                                "parentId": "1825788915747250177",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isCache": false,
                                        "key": "1670783660758142976",
                                        "parentId": "1742740766525972482",
                                        "label": "应用端点管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/client/node_manage",
                                        "componentPath": "/clientNodeManage/src/index.vue",
                                        "icons": "app-endpoint",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670971579678593024",
                                                "parentId": "1670783660758142976",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670971660842569728",
                                                "parentId": "1670783660758142976",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1742749685650493441",
                                        "parentId": "1742740766525972482",
                                        "label": "功能管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/base/resource_manage",
                                        "componentPath": "/resourceManage/src/index.vue",
                                        "icons": "function-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670707481568489475",
                                                "parentId": "1742749685650493441",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮",
                                                "path": ""
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670722384610725888",
                                                "parentId": "1742749685650493441",
                                                "label": "修改",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670722445411356672",
                                                "parentId": "1742749685650493441",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1742750443271819266",
                                        "parentId": "1742740766525972482",
                                        "label": "工程初始化",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/application/init",
                                        "componentPath": "/appInit/src/index.vue",
                                        "icons": "engineer-manage"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1670707480465387521",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1831286588298305537",
                                "parentId": "1670707481568489473",
                                "label": "消息中心",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/message",
                                "icons": "info-center",
                                "children": [
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1831286772914790401",
                                        "parentId": "1831286588298305537",
                                        "label": "消息模板",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/message/template",
                                        "componentPath": "/messageTemplate/src/index.vue",
                                        "icons": "info-module",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1831286848940744705",
                                                "parentId": "1831286772914790401",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1831286897305264129",
                                                "parentId": "1831286772914790401",
                                                "label": "编辑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1831286956008742913",
                                                "parentId": "1831286772914790401",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1831287082357956610",
                                        "parentId": "1831286588298305537",
                                        "label": "标签管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/message/tag_manage",
                                        "componentPath": "/tagManage/src/index.vue",
                                        "icons": "tag-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1831287141061435394",
                                                "parentId": "1831287082357956610",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1831287213866164225",
                                                "parentId": "1831287082357956610",
                                                "label": "编辑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1831287267448397825",
                                                "parentId": "1831287082357956610",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1831287360381591554",
                                        "parentId": "1831286588298305537",
                                        "label": "消息记录",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/message/records",
                                        "componentPath": "/messageRecords/src/index.vue",
                                        "icons": "info-record"
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1831287463196565505",
                                        "parentId": "1831286588298305537",
                                        "label": "消息统计",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/message/statistics",
                                        "componentPath": "/messageStatistics/src/index.vue",
                                        "icons": "info-statistic"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1670707480465387521",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1742741669677064194",
                                "parentId": "1670707481568489473",
                                "label": "日志中心",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/log",
                                "icons": "log-center",
                                "children": [
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1742751495299731458",
                                        "parentId": "1742741669677064194",
                                        "label": "操作日志",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/log/operation",
                                        "componentPath": "/operationLog/index.vue",
                                        "icons": "operate-log",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1820348364981846017",
                                                "parentId": "1742751495299731458",
                                                "label": "导出",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1670707480465387521",
                                "isShow": true,
                                "isCache": false,
                                "key": "1670783920653996032",
                                "parentId": "1670707481568489473",
                                "label": "字典管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/dictionary",
                                "icons": "dictionary",
                                "children": [
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isCache": false,
                                        "key": "1670784408535437312",
                                        "parentId": "1670783920653996032",
                                        "label": "数据字典管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/dictionary/dictionary_manage",
                                        "componentPath": "/dictionaryManage/src/index.vue",
                                        "icons": "data-dict",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670973290531000320",
                                                "parentId": "1670784408535437312",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670973367110602752",
                                                "parentId": "1670784408535437312",
                                                "label": "编辑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670973460094128128",
                                                "parentId": "1670784408535437312",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isCache": false,
                                        "key": "1670784031199072256",
                                        "parentId": "1670783920653996032",
                                        "label": "字典枚举管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/dictionary/dict_enum_manage",
                                        "componentPath": "/dictEnumManage/src/index.vue",
                                        "icons": "dict-enums",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670972325845274624",
                                                "parentId": "1670784031199072256",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670972432837775360",
                                                "parentId": "1670784031199072256",
                                                "label": "编辑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isCache": false,
                                                "key": "1670972529470345216",
                                                "parentId": "1670784031199072256",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1670707480465387521",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1820351640141873154",
                                "parentId": "1670707481568489473",
                                "label": "设备空间管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/deviceSpace",
                                "icons": "device-space",
                                "children": [
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1820354143843565569",
                                        "parentId": "1820351640141873154",
                                        "label": "设备信息管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/deviceSpace/info_manage",
                                        "componentPath": "/deviceInfoManage/index.vue",
                                        "icons": "device-info",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1820355503154577409",
                                                "parentId": "1820354143843565569",
                                                "label": "新增",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1820357334647750658",
                                                "parentId": "1820354143843565569",
                                                "label": "编辑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1820357827193257985",
                                                "parentId": "1820354143843565569",
                                                "label": "删除",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1820355723208736769",
                                                "parentId": "1820354143843565569",
                                                "label": "导出",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1820396626770182145",
                                        "parentId": "1820351640141873154",
                                        "label": "平台空间管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/deviceSpace/Platform",
                                        "componentPath": "/platformSpaceManage/src/index.vue",
                                        "icons": "platform-space",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1820401047247831042",
                                                "parentId": "1820396626770182145",
                                                "label": "新增区域",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1820401142433366018",
                                                "parentId": "1820396626770182145",
                                                "label": "区域导入",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1823652697925873665",
                                                "parentId": "1820396626770182145",
                                                "label": "映射空间绑定",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1821515051585970177",
                                                "parentId": "1820396626770182145",
                                                "label": "解绑",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1822890540347142146",
                                                "parentId": "1820396626770182145",
                                                "label": "映射空间设备详情",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1823652368933056513",
                                                "parentId": "1820396626770182145",
                                                "label": "设备导入",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1821514989808066561",
                                                "parentId": "1820396626770182145",
                                                "label": "绑定设备",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            },
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1823653462065147905",
                                                "parentId": "1820396626770182145",
                                                "label": "设备信息设备详情",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1670707480465387521",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1744555525538893826",
                                "parentId": "1670707481568489473",
                                "label": "文档中心",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/doc",
                                "icons": "document-center",
                                "children": [
                                    {
                                        "clientEndpointId": "1670707480465387521",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1744601429616676866",
                                        "parentId": "1744555525538893826",
                                        "label": "用户资源",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/doc/user",
                                        "componentPath": "/docManage/src/index.vue",
                                        "icons": "user-resource",
                                        "children": [
                                            {
                                                "clientEndpointId": "1670707480465387521",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1744601586252959746",
                                                "parentId": "1744601429616676866",
                                                "label": "下载",
                                                "resourceType": "3",
                                                "resourceTypeName": "按钮"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "clientEndpointId": "1813019022828290049",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1813019022903787521",
                        "parentId": "-1",
                        "label": "app-app2.0",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "path": "--"
                    }
                ]
            },
            {
                "key": "1846789382371303426",
                "label": "数字资产",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1846789593189605377",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1846789593277685761",
                        "parentId": "-1",
                        "label": "WEB-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "children": [
                            {
                                "clientEndpointId": "1846789593189605377",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1846789755731468289",
                                "parentId": "1846789593277685761",
                                "label": "数字资产",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "rx-mid-frame-web/",
                                "children": [
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1846789885914275841",
                                        "parentId": "1846789755731468289",
                                        "label": "资产列表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web/asset-manage-web/assetList",
                                        "componentPath": "/layout/EmptyComponent.vue"
                                    },
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": false,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1853343794191409153",
                                        "parentId": "1846789755731468289",
                                        "label": "空间三维图",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web/meoi-aim-web/spaceRoom",
                                        "componentPath": "/layout/EmptyComponent.vue"
                                    },
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": false,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1853747805138722818",
                                        "parentId": "1846789755731468289",
                                        "label": "资产详情",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web/meoi-aim-web/fullScreenDetail",
                                        "componentPath": "/layout/EmptyComponent.vue"
                                    },
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1846790234091839489",
                                        "parentId": "1846789755731468289",
                                        "label": "资产地图",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web/meoi-aim-web/assetsMap",
                                        "componentPath": "/layout/EmptyComponent.vue"
                                    },
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1846790342967582721",
                                        "parentId": "1846789755731468289",
                                        "label": "专业概览",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web/meoi-aim-web/subjectOverview",
                                        "componentPath": "/layout/EmptyComponent.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1846789593189605377",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1864134730051792898",
                                "parentId": "1846789593277685761",
                                "label": "运行监控",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "rx-mid-frame-web-edge/",
                                "children": [
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1864135129978679297",
                                        "parentId": "1864134730051792898",
                                        "label": "冷热源监测",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web-edge/meos-autocontrol-web-edge/AC",
                                        "componentPath": "/layout/EmptyComponent.vue"
                                    },
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1864158842908356609",
                                        "parentId": "1864134730051792898",
                                        "label": "空调末端监测",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web-edge/meos-autocontrol-web-edge/ac-operation-control",
                                        "componentPath": "123"
                                    },
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1864159082403115009",
                                        "parentId": "1864134730051792898",
                                        "label": "照明系统监测",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web-edge/meos-autocontrol-web-edge/lightxplantrunmonitor",
                                        "componentPath": "/rx-mid-frame-web-edge/meos-autocontrol-web-edge/AC"
                                    },
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1864159237772718081",
                                        "parentId": "1864134730051792898",
                                        "label": "通风系统监测",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web-edge/meos-autocontrol-web-edge/ventilation-perception",
                                        "componentPath": "/rx-mid-frame-web-edge/meos-autocontrol-web-edge/AC"
                                    },
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1864159412352233474",
                                        "parentId": "1864134730051792898",
                                        "label": "给排水系统监测",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web-edge/meos-autocontrol-web-edge/WS",
                                        "componentPath": "/rx-mid-frame-web-edge/meos-autocontrol-web-edge/AC"
                                    },
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1864159556393021442",
                                        "parentId": "1864134730051792898",
                                        "label": "强电系统监测",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web-edge/meos-autocontrol-web-edge/SE",
                                        "componentPath": "/rx-mid-frame-web-edge/meos-autocontrol-web-edge/AC"
                                    },
                                    {
                                        "clientEndpointId": "1846789593189605377",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1864159717684981761",
                                        "parentId": "1864134730051792898",
                                        "label": "电梯系统监测",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rx-mid-frame-web-edge/meos-autocontrol-web-edge/elevator-system",
                                        "componentPath": "elevator-system"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1825799978828029954",
                "label": "工单系统",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1825800237524312066",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1825800237608198145",
                        "parentId": "-1",
                        "label": "web端-web端",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "children": [
                            {
                                "clientEndpointId": "1825800237524312066",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1826507778526396417",
                                "parentId": "1825800237608198145",
                                "label": "工单主页",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "work-order-home",
                                "icons": "nav-home",
                                "children": [
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826507980264030210",
                                        "parentId": "1826507778526396417",
                                        "label": "工单总览",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "overview",
                                        "componentPath": "work-order-management/overview/index"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826508065643282433",
                                        "parentId": "1826507778526396417",
                                        "label": "个人总览",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "person-overview",
                                        "componentPath": "work-order-management/overview/personOverview"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1825800237524312066",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1826497219965861889",
                                "parentId": "1825800237608198145",
                                "label": "工单配置",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "work-order",
                                "icons": "0704",
                                "children": [
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826497374853120002",
                                        "parentId": "1826497219965861889",
                                        "label": "业务类型管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order-type",
                                        "componentPath": "work-order-management/work-order-type/index",
                                        "icons": "#"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826505878057893890",
                                        "parentId": "1826497219965861889",
                                        "label": "表单管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "form-design",
                                        "componentPath": "system/form/index"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826505974262644737",
                                        "parentId": "1826497219965861889",
                                        "label": "流程管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-flow",
                                        "componentPath": "flowable/definition/index"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826506068248608769",
                                        "parentId": "1826497219965861889",
                                        "label": "工单模板管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "template",
                                        "componentPath": "work-order-management/work-order-setting/template"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826506150993838082",
                                        "parentId": "1826497219965861889",
                                        "label": "常用语管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "QuickResponse",
                                        "componentPath": "work-order-management/work-order-setting/QuickResponse"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1825800237524312066",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1826506512911941633",
                                "parentId": "1825800237608198145",
                                "label": "工单管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "work-order-1",
                                "icons": "1304",
                                "children": [
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826506621972234241",
                                        "parentId": "1826506512911941633",
                                        "label": "工单列表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order-list",
                                        "componentPath": "work-order-management/work-order-list/index"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1834508091181518850",
                                        "parentId": "1826506512911941633",
                                        "label": "工单模板统计",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "template-statistics",
                                        "componentPath": "work-order-management/work-order-list/templateStatistics"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1836229682974183426",
                                        "parentId": "1826506512911941633",
                                        "label": "员工任务统计",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "personnel-performance",
                                        "componentPath": "work-order-management/personnel-performance/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1825800237524312066",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1826506962235146241",
                                "parentId": "1825800237608198145",
                                "label": "工作台",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "task",
                                "icons": "0207",
                                "children": [
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826507051380883458",
                                        "parentId": "1826506962235146241",
                                        "label": "我发起的",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "process",
                                        "componentPath": "task/initiated/index"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826507336249622529",
                                        "parentId": "1826506962235146241",
                                        "label": "任务分配",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "assign",
                                        "componentPath": "task/assign/index"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826507493338890241",
                                        "parentId": "1826506962235146241",
                                        "label": "待接任务",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "un-receive",
                                        "componentPath": "task/un-receive/index"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826507588708974594",
                                        "parentId": "1826506962235146241",
                                        "label": "待完成任务",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "un-finished",
                                        "componentPath": "task/un-finished/index"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826507674839007233",
                                        "parentId": "1826506962235146241",
                                        "label": "历史任务",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "history",
                                        "componentPath": "task/history/index"
                                    },
                                    {
                                        "clientEndpointId": "1825800237524312066",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1826507271644758018",
                                        "parentId": "1826506962235146241",
                                        "label": "任务管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "manage",
                                        "componentPath": "task/manage/index"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1849267873100648450",
                "label": "综管中心-DEV",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1849275112439992321",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1849275112523878402",
                        "parentId": "-1",
                        "label": "WEB-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "children": [
                            {
                                "clientEndpointId": "1849275112439992321",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": false,
                                "key": "1858101229879873537",
                                "parentId": "1849275112523878402",
                                "label": "运维综管中心",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "/rxLynkrOperator/operation/config",
                                "componentPath": "/views/InspectionCenter/Index.vue"
                            },
                            {
                                "clientEndpointId": "1849275112439992321",
                                "isShow": false,
                                "isOutsideChain": false,
                                "isCache": false,
                                "key": "1858102098948050946",
                                "parentId": "1849275112523878402",
                                "label": "专业保养进度分析",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "/rxLynkrOperator/operation/config/profession",
                                "componentPath": "/views/InspectionCenter/UpkeepDetail/Profession.vue"
                            },
                            {
                                "clientEndpointId": "1849275112439992321",
                                "isShow": false,
                                "isOutsideChain": false,
                                "isCache": false,
                                "key": "1858102297405739010",
                                "parentId": "1849275112523878402",
                                "label": "系统保养进度分析",
                                "resourceType": "2",
                                "resourceTypeName": "菜单",
                                "path": "/rxLynkrOperator/operation/config/system",
                                "componentPath": "/views/InspectionCenter/UpkeepDetail/System.vue"
                            },
                            {
                                "clientEndpointId": "1849275112439992321",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1849461194083336193",
                                "parentId": "1849275112523878402",
                                "label": "巡检管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrOperator/inspection",
                                "icons": "icon-xunjian",
                                "children": [
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849461632744620033",
                                        "parentId": "1849461194083336193",
                                        "label": "巡检点管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/inspection/point",
                                        "componentPath": "/views/InspectionMgt/PointMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849461739053449217",
                                        "parentId": "1849461194083336193",
                                        "label": "巡检路线管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/inspection/route",
                                        "componentPath": "/views/InspectionMgt/RouteMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849461878719578113",
                                        "parentId": "1849461194083336193",
                                        "label": "巡检配置表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/inspection/config",
                                        "componentPath": "/views/InspectionMgt/ConfigMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": false,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1853021046088933378",
                                        "parentId": "1849461194083336193",
                                        "label": "新增巡检路线",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/inspection/route/create",
                                        "componentPath": "/views/InspectionMgt/RouteMgt/CreatePage/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": false,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1853021764006977538",
                                        "parentId": "1849461194083336193",
                                        "label": "新增巡检配置表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/inspection/config/create",
                                        "componentPath": "/views/InspectionMgt/ConfigMgt/CreatePage/Index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1849275112439992321",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1849462071263297537",
                                "parentId": "1849275112523878402",
                                "label": "保养设备管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrOperator/maintain",
                                "icons": "icon-jiankang",
                                "children": [
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849462222564425729",
                                        "parentId": "1849462071263297537",
                                        "label": "保养设备管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/maintain/device",
                                        "componentPath": "/views/DeviceMaintain/DeviceMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849462341967872001",
                                        "parentId": "1849462071263297537",
                                        "label": "保养项目管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/maintain/project",
                                        "componentPath": "/views/DeviceMaintain/ProjectMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849462459324497921",
                                        "parentId": "1849462071263297537",
                                        "label": "保养配置表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/maintain/config",
                                        "componentPath": "/views/DeviceMaintain/ConfigMgt/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": false,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1853023604777951234",
                                        "parentId": "1849462071263297537",
                                        "label": "新增保养项目",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/maintain/project/create",
                                        "componentPath": "/views/DeviceMaintain/ProjectMgt/CreatePage/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": false,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1853023829466816513",
                                        "parentId": "1849462071263297537",
                                        "label": "新增保养配置表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/maintain/config/create",
                                        "componentPath": "/views/DeviceMaintain/ConfigMgt/CreatePage/Index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1849275112439992321",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1849462566203752450",
                                "parentId": "1849275112523878402",
                                "label": "设备报警中心",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrOperator/alarm",
                                "icons": "icon-baojing",
                                "children": [
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849462693916114946",
                                        "parentId": "1849462566203752450",
                                        "label": "报警日志",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/alarm/record",
                                        "componentPath": "/views/AlarmCenter/Record/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849462862560690177",
                                        "parentId": "1849462566203752450",
                                        "label": "报警规则配置",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/alarm/rule",
                                        "componentPath": "/views/AlarmCenter/RuleConfig/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": false,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1859215449715429378",
                                        "parentId": "1849462566203752450",
                                        "label": "报警规则配置详情",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/alarm/rule/edit",
                                        "componentPath": "/views/AlarmCenter/RuleConfig/ConfigPage/Index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1849275112439992321",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1849462960774512642",
                                "parentId": "1849275112523878402",
                                "label": "综管工单中心",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrOperator/work-order",
                                "icons": "icon-baojing",
                                "children": [
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1858103388046413826",
                                        "parentId": "1849462960774512642",
                                        "label": "工单统计分析",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/statistical",
                                        "componentPath": "/views/WorkOrder/Statistical/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849463054898888706",
                                        "parentId": "1849462960774512642",
                                        "label": "巡检工单",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/inspection",
                                        "componentPath": "/views/WorkOrder/Inspection/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": false,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1858105243031883777",
                                        "parentId": "1849462960774512642",
                                        "label": "巡检工单详情",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/inspection/detail",
                                        "componentPath": "/views/WorkOrder/Inspection/Detail/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849463150457716737",
                                        "parentId": "1849462960774512642",
                                        "label": "保养工单",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/device-maintain",
                                        "componentPath": "/views/WorkOrder/DeviceMaintain/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": false,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1858105443469283330",
                                        "parentId": "1849462960774512642",
                                        "label": "保养工单详情",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator//work-order/device-maintain/detail",
                                        "componentPath": "/views/WorkOrder/DeviceMaintain/Detail/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849463278086193154",
                                        "parentId": "1849462960774512642",
                                        "label": "告警工单",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/warn-order",
                                        "componentPath": "/views/WorkOrder/WarnOrder/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": false,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1858105652869910530",
                                        "parentId": "1849462960774512642",
                                        "label": "报警处理工单详情",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/warn-order/detail",
                                        "componentPath": "/views/WorkOrder/WarnOrder/Detail/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": false,
                                        "key": "1849463384487297026",
                                        "parentId": "1849462960774512642",
                                        "label": "报事报修工单",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/report-repair",
                                        "componentPath": "/views/WorkOrder/ReportRepair/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": false,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1858105839348666369",
                                        "parentId": "1849462960774512642",
                                        "label": "报事报修工单详情",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/report-repair/detail",
                                        "componentPath": "/views/WorkOrder/ReportRepair/Detail/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": false,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1858106149857185794",
                                        "parentId": "1849462960774512642",
                                        "label": "新增报事报修工单",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/work-order/report-repair/add",
                                        "componentPath": "/views/WorkOrder/ReportRepair/Add/Index.vue"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1849275112439992321",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1858104097781370882",
                                "parentId": "1849275112523878402",
                                "label": "设备健康管理",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "/rxLynkrOperator/health",
                                "children": [
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1858104327142690818",
                                        "parentId": "1858104097781370882",
                                        "label": "专业健康分析",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/health/profession",
                                        "componentPath": "/views/Health/Profession/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1858104516821700610",
                                        "parentId": "1858104097781370882",
                                        "label": "系统健康分析",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/health/system",
                                        "componentPath": "/views/Health/System/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1858104736389320705",
                                        "parentId": "1858104097781370882",
                                        "label": "报警次数与累计运行时间分析",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/health/alarm",
                                        "componentPath": "/views/Health/Alarm/Index.vue"
                                    },
                                    {
                                        "clientEndpointId": "1849275112439992321",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": false,
                                        "key": "1858104933735518210",
                                        "parentId": "1858104097781370882",
                                        "label": "总支电量偏差",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "/rxLynkrOperator/health/electric-quantity",
                                        "componentPath": "/views/Health/ElectricQuantity/Index.vue"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "1837383665231077378",
                "label": "智慧安消DEV",
                "resourceType": "1",
                "resourceTypeName": "目录",
                "children": [
                    {
                        "clientEndpointId": "1837385039809355778",
                        "isShow": true,
                        "isOutsideChain": false,
                        "isCache": false,
                        "key": "1837385039897436161",
                        "parentId": "-1",
                        "label": "web端-WEB",
                        "resourceType": "1",
                        "resourceTypeName": "目录",
                        "children": [
                            {
                                "clientEndpointId": "1837385039809355778",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1837385215009628161",
                                "parentId": "1837385039897436161",
                                "label": "视频监控",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "video-surveillance",
                                "icons": "ax-spjk",
                                "children": [
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837385442366070786",
                                        "parentId": "1837385215009628161",
                                        "label": "数据看板",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "video-data-board",
                                        "componentPath": "video-surveillance/data-board/index"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837385521894268929",
                                        "parentId": "1837385215009628161",
                                        "label": "告警监控",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "alarm-monitoring",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837385910286819329",
                                                "parentId": "1837385521894268929",
                                                "label": "告警中心",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "alarm-center",
                                                "componentPath": "video-surveillance/alarm-monitoring/alarm-center/index"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837385986610569217",
                                                "parentId": "1837385521894268929",
                                                "label": "视频中心",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "video-center",
                                                "componentPath": "video-surveillance/alarm-monitoring/video-center/index"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837386055443292161",
                                                "parentId": "1837385521894268929",
                                                "label": "视频轮巡",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "video-rotation",
                                                "componentPath": "video-surveillance/alarm-monitoring/video-rotation/index"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837386131293085698",
                                                "parentId": "1837385521894268929",
                                                "label": "视频回放",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "video-playback",
                                                "componentPath": "video-surveillance/alarm-monitoring/video-playback/index"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837386199580549122",
                                                "parentId": "1837385521894268929",
                                                "label": "轨迹查看",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "track-viewing",
                                                "componentPath": "video-surveillance/alarm-monitoring/track-viewing/index"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837386267100454914",
                                                "parentId": "1837385521894268929",
                                                "label": "采集记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "collect-record",
                                                "componentPath": "video-surveillance/alarm-monitoring/collect-record/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837385640995725314",
                                        "parentId": "1837385215009628161",
                                        "label": "事件规则管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "event-rule-manage",
                                        "componentPath": "video-surveillance/event-rule-manage/index",
                                        "icons": ""
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837385743009587201",
                                        "parentId": "1837385215009628161",
                                        "label": "设备联动规则管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "device-linkage-manage",
                                        "componentPath": "video-surveillance/device-linkage-manage/index"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837385814019153921",
                                        "parentId": "1837385215009628161",
                                        "label": "视频监控设备管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "video-equipment-manage",
                                        "componentPath": "video-surveillance/video-equipment-manage/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1837385039809355778",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1837385291534704642",
                                "parentId": "1837385039897436161",
                                "label": "智慧通行",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "wisdom-pass",
                                "icons": "ax-zhtx",
                                "children": [
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837386398306672642",
                                        "parentId": "1837385291534704642",
                                        "label": "数据看板",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "wisdom-data-board",
                                        "componentPath": "wisdom-pass/data-board/index"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837386472386469889",
                                        "parentId": "1837385291534704642",
                                        "label": "设备管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "equipment-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837386731447656450",
                                                "parentId": "1837386472386469889",
                                                "label": "设备管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "index",
                                                "componentPath": "wisdom-pass/equipment-manage/equipment-manage"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837386809633677313",
                                                "parentId": "1837386472386469889",
                                                "label": "门禁管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "entrance-manage",
                                                "componentPath": "wisdom-pass/equipment-manage/entrance-manage"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837386523569561602",
                                        "parentId": "1837385291534704642",
                                        "label": "授权管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "accredit-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837386901254053890",
                                                "parentId": "1837386523569561602",
                                                "label": "门禁授权",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "entrance-guard",
                                                "componentPath": "wisdom-pass/accredit-manage/entrance-guard"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837386986889158657",
                                                "parentId": "1837386523569561602",
                                                "label": "临时授权管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "temporary-authorization-manage",
                                                "componentPath": "wisdom-pass/accredit-manage/temporary-authorization-manage"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837386579798401025",
                                        "parentId": "1837385291534704642",
                                        "label": "设备告警",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "device-alarm",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837387065578496001",
                                                "parentId": "1837386579798401025",
                                                "label": "告警规则",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "alarm-rule",
                                                "componentPath": "wisdom-pass/device-alarm/alarm-rule"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837387173556658178",
                                                "parentId": "1837386579798401025",
                                                "label": "设备告警",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "equipment-alarm",
                                                "componentPath": "wisdom-pass/device-alarm/equipment-alarm"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837386638078255105",
                                        "parentId": "1837385291534704642",
                                        "label": "统计分析",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "statistical-analysis",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837387259690885122",
                                                "parentId": "1837386638078255105",
                                                "label": "门禁下发记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "entrance-record",
                                                "componentPath": "wisdom-pass/statistical-analysis/entrance-guard-send-record"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837387429069463554",
                                                "parentId": "1837386638078255105",
                                                "label": "通行记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "traffic-record",
                                                "componentPath": "wisdom-pass/statistical-analysis/traffic-record"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837387501966467073",
                                                "parentId": "1837386638078255105",
                                                "label": "门禁进出统计",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "access-control-sstatistics",
                                                "componentPath": "wisdom-pass/statistical-analysis/access-control-sstatistics"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1837385039809355778",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1837385364184244225",
                                "parentId": "1837385039897436161",
                                "label": "智慧访客",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "smart-visitor",
                                "icons": "ax-zhfk",
                                "children": [
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837396642600591361",
                                        "parentId": "1837385364184244225",
                                        "label": "数据看板",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "visitor-overview",
                                        "componentPath": "visitor/overview/index"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837385510817112066",
                                        "parentId": "1837385364184244225",
                                        "label": "黑名单管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "black-list",
                                        "componentPath": "visitor/backlist-management/index"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837385797485207554",
                                        "parentId": "1837385364184244225",
                                        "label": "访客管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "h",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837385919921135618",
                                                "parentId": "1837385797485207554",
                                                "label": "访客人员管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "visitor-person",
                                                "componentPath": "visitor/person-management/index"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837397005089120258",
                                                "parentId": "1837385797485207554",
                                                "label": "访客审批",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "approve",
                                                "componentPath": "visitor/approve/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837385602324242434",
                                        "parentId": "1837385364184244225",
                                        "label": "访客规则管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "r",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837385709958471682",
                                                "parentId": "1837385602324242434",
                                                "label": "访客类型",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "visitor-type",
                                                "componentPath": "visitor/rule-management/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837386002376957954",
                                        "parentId": "1837385364184244225",
                                        "label": "统计分析",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "sat",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837386096316784641",
                                                "parentId": "1837386002376957954",
                                                "label": "访客进出记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "access-manage",
                                                "componentPath": "visitor/access-management/index"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1837385039809355778",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1837386234661707777",
                                "parentId": "1837385039897436161",
                                "label": "智慧消防",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "wisdom-fire-protection",
                                "icons": "ax-zhxf",
                                "children": [
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837386403599884289",
                                        "parentId": "1837386234661707777",
                                        "label": "数据看板",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "fire-data-board",
                                        "componentPath": "wisdom-fire-protection/data-board/index"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837386530586632194",
                                        "parentId": "1837386234661707777",
                                        "label": "巡检管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "inspection-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837386612933402625",
                                                "parentId": "1837386530586632194",
                                                "label": "巡检点管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "inspection-point",
                                                "componentPath": "wisdom-fire-protection/inspection-manage/inspection-point/index"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1845749708920025090",
                                                "parentId": "1837386530586632194",
                                                "label": "巡检路线管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "inspection-path",
                                                "componentPath": "wisdom-fire-protection/inspection-manage/inspection-path/index"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837386698954383361",
                                                "parentId": "1837386530586632194",
                                                "label": "巡检配置表",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "check-template",
                                                "componentPath": "wisdom-fire-protection/inspection-manage/check-template/index"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837759167263412225",
                                                "parentId": "1837386530586632194",
                                                "label": "巡检记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "inspection-record",
                                                "componentPath": "wisdom-fire-protection/inspection-manage/inspection-record/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837386784358801410",
                                        "parentId": "1837386234661707777",
                                        "label": "预案管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "plan-manage",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837387491128385538",
                                                "parentId": "1837386784358801410",
                                                "label": "预案管理",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "plan-manage-index",
                                                "componentPath": "wisdom-fire-protection/plan-manage/plan-manage/index"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837387617230135297",
                                                "parentId": "1837386784358801410",
                                                "label": "预案记录",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "plan-record",
                                                "componentPath": "wisdom-fire-protection/plan-manage/plan-record/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837387726844076034",
                                        "parentId": "1837386234661707777",
                                        "label": "消防管理",
                                        "resourceType": "1",
                                        "resourceTypeName": "目录",
                                        "path": "fire-alarm",
                                        "children": [
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837387808637198337",
                                                "parentId": "1837387726844076034",
                                                "label": "消防告警",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "fire-alarm-index",
                                                "componentPath": "wisdom-fire-protection/fire-alarm/fire-alarm/index"
                                            },
                                            {
                                                "clientEndpointId": "1837385039809355778",
                                                "isShow": true,
                                                "isOutsideChain": false,
                                                "isCache": true,
                                                "key": "1837387879596433410",
                                                "parentId": "1837387726844076034",
                                                "label": "告警规则",
                                                "resourceType": "2",
                                                "resourceTypeName": "菜单",
                                                "path": "fire-alarm-rule",
                                                "componentPath": "wisdom-fire-protection/fire-alarm/alarm-rule/index"
                                            }
                                        ]
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1852976367783911425",
                                        "parentId": "1837386234661707777",
                                        "label": "消防设备管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "fire-equipment-index",
                                        "componentPath": "wisdom-fire-protection/fire-equipment-manage/fire-equipment-manage/index"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1837385039809355778",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1837389812122001410",
                                "parentId": "1837385039897436161",
                                "label": "工单基础配置",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "base-config",
                                "icons": "ax-gdjcpz",
                                "children": [
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1837685414823309313",
                                        "parentId": "1837389812122001410",
                                        "label": "业务类型管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order/work-order-type",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/work-order-type"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1837390217895747586",
                                        "parentId": "1837389812122001410",
                                        "label": "表单管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order/form-design",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/form-design"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837390096055410690",
                                        "parentId": "1837389812122001410",
                                        "label": "流程管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order/work-flow",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/work-flow"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837390348711895042",
                                        "parentId": "1837389812122001410",
                                        "label": "工单模板管理",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order/template",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order/template"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": false,
                                        "isCache": true,
                                        "key": "1837390472393531393",
                                        "parentId": "1837389812122001410",
                                        "label": "工单列表",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "work-order-1/work-order-list",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/work-order-1/work-order-list"
                                    }
                                ]
                            },
                            {
                                "clientEndpointId": "1837385039809355778",
                                "isShow": true,
                                "isOutsideChain": false,
                                "isCache": true,
                                "key": "1838065349114990594",
                                "parentId": "1837385039897436161",
                                "label": "工单工作台",
                                "resourceType": "1",
                                "resourceTypeName": "目录",
                                "path": "work-order-workbench",
                                "icons": "ax-gdgzt",
                                "children": [
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1838065801399373826",
                                        "parentId": "1838065349114990594",
                                        "label": "我发起的",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "task/initiated",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/initiated"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1838066453798195201",
                                        "parentId": "1838065349114990594",
                                        "label": "任务分配",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "task/assign",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/assign"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1838067111393759234",
                                        "parentId": "1838065349114990594",
                                        "label": "待接任务",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "task/un-receive",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/un-receive"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1838067265316327425",
                                        "parentId": "1838065349114990594",
                                        "label": "待完成任务",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "task/un-finished",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/un-finished"
                                    },
                                    {
                                        "clientEndpointId": "1837385039809355778",
                                        "isShow": true,
                                        "isOutsideChain": true,
                                        "isCache": true,
                                        "key": "1838067391816536066",
                                        "parentId": "1838065349114990594",
                                        "label": "历史任务",
                                        "resourceType": "2",
                                        "resourceTypeName": "菜单",
                                        "path": "task/history",
                                        "componentPath": "http://localhost/?Authorization={Authorization}&fromClientId={fromClientId}/#/task/history"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}