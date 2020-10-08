// 柱状图模块1 (左)
(() => {
    // init不可以用jQuery写法, 得用原生Js
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '10%',
            left: '0%',
            right: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['tour', 'edu', 'game', 'medical', 'e-com', 'social', 'finance'],
            axisTick: {
                alignWithLabel: true
            },
            // 修改刻度标签样式
            axisLabel: {
                color: 'rgba(255, 255, 255, .6)',
                fontSize: '12',
            },
            // 不显示x轴
            axisLine: {
                show: false,
            }

        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: 'rgba(255, 255, 255, .6)',
                fontSize: '12',
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, .1)",
                    width: 2,
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, .1)",

                }
            }

        }],
        series: [{
            name: 'view',
            type: 'bar',
            barWidth: '35%', // bar的宽度
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                // 修改bar为圆角
                barBorderRadius: 5,
            }
        }]
    };
    myChart.setOption(option);
    // 添加屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();

// 柱状图模块2 (右)
(() => {
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var titleName = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
    var option = {
        legend: {
            data: ['2011年', '2012年']
        },
        grid: {
            top: '10%',
            left: '22%',
            right: '10%',
            bottom: '10%',
            containLabel: false,
        },
        xAxis: {
            show: false,
        },
        yAxis: [{
                inverse: true,
                type: 'category',
                data: titleName,
                axisLine: {
                    show: false, // 去除y轴线条的显示
                },
                axisTick: {
                    show: false, // 去除y轴刻度的显示
                },
                // 把刻度标签里的文字颜色设置为白色
                axisLabel: {
                    color: '#fff',
                }
            },
            {
                type: 'category',
                inverse: true,
                data: ['644', '793', '610', '793', '664'],
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                // 把刻度标签里的文字颜色设置为白色
                axisLabel: {
                    color: '#fff',
                }
            }
        ],
        series: [{
                // 内部柱子的配置
                name: 'strip',
                type: 'bar',
                barWidth: 10,
                barCategoryGap: 50,
                label: {
                    normal: {
                        show: true,
                        position: "inside",
                        formatter: "{c}%" // 这里{c}%会自动解析为data中的数据 + %
                    },
                },
                itemStyle: {
                    barBorderRadius: 20,
                    // 修改柱子的颜色, 不同柱子设置不同颜色
                    color: function (params) {
                        let num = myColor.length;
                        return myColor[params.dataIndex % num];
                    }
                },
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,
            },
            {
                name: 'frame',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15,
                },
                data: [100, 100, 100, 100, 100],
                yAxisIndex: 1,
            }
        ]
    };
    myChart.setOption(option);
    // 添加屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();

// 折线图模块1 (左)
(() => {
    var myChart = echarts.init(document.querySelector('.line .chart'));
    var xAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var yearData = [{
            "year": 2019,
            data: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            ],
        },
        {
            "year": 2020,
            data: [
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
                [99, 12, 111, 134, 90, 421, 310, 230, 212, 011, 210, 120],
            ]
        },
    ];
    var option = {
        color: ['#00f2f1', '#ed3f35'], // 修改线的颜色
        tooltip: {
            trigger: 'axis'
        },
        // 图例组件
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例组件的文字颜色
            },
            right: '10%',
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: '#012f4a', // 设定边框颜色
            containLabel: true,
        },
        xAxis: {
            axisLabel: {
                color: 'rgba(255, 255, 255, .6)',
                fontSize: '12',
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            type: 'category',
            boundaryGap: false,
            data: xAxisData,

        },
        yAxis: {
            axisLabel: {
                color: 'rgba(255, 255, 255, .6)',
                fontSize: '12',
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            type: 'value',
            splitLine: { // 分割线的颜色
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [{
                name: 'new fans',
                type: 'line',
                data: [24, 40, 101, 134, 90, 230, 210, 230, 102, 71, 210, 120],
                smooth: true, // 设定线条为圆滑
            },
            {
                name: 'new tourists',
                type: 'line',
                data: [99, 12, 111, 134, 90, 421, 310, 230, 212, 011, 210, 120],
                smooth: true,
            },
        ]
    };

    myChart.setOption(option);

    // 实现数据的切换效果
    $(".line h2").on("click", "a", function () {
        let obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        myChart.setOption(option); // 刷新
    });
    // 添加屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();

// 折线图模块2 (右)
(() => {
    var myChart = echarts.init(document.querySelector('.line2 .chart'));
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            textStyle: {
                color: 'rgba(255, 255, 255, .5)',
                fontSize: "12",
            },
        },
        grid: {
            left: "10",
            top: '30',
            right: '10',
            bottom: '10',
            containLabel: true,
        },
        xAxis: [{
                type: "category",
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },

                data: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30"
                ]
            },
            {
                axisPointer: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                position: "bottom",
                offset: 20
            }
        ],

        yAxis: [{
            type: "value",
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },

            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
                name: 'Forward',
                type: 'line',
                // 单独修改当前线条的样式
                lineStyle: {
                    color: "#0184d5",
                },
                // areaStyle：填充区域
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // symbol ->设置拐点
                symbol: 'circle',
                symbolSize: 8,
                showSymbol: false,

                itemStyle: { // 折线拐点标志的样式, ( legend会一样 )
                    color: '#0184d5',
                    borderColor: 'rgba(221, 220, 107, .1)',
                    borderWidth: 12
                },
                data: [
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40
                ],
                smooth: true,
            },
            {
                name: 'Ad',
                type: 'line',
                areaStyle: {},
                data: [
                    50,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    50,
                    60,
                    40,
                    60,
                    40,
                    80,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40
                ],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: { // 折线拐点标志的样式
                    color: '#00dd87',
                    borderColor: 'rgba(221, 220, 107, .1)',
                    borderWidth: 12
                },
                // symbol ->设置拐点
                symbol: 'circle',
                symbolSize: 8,
                showSymbol: false,
                smooth: true,
            },
        ]
    };

    myChart.setOption(option);
    // 添加屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();

// 饼形图模块1 (左)
(() => {
    var myChart = echarts.init(document.querySelector('.pie .chart'));
    var option = {
        tooltip: {
            trigger: 'item',
            // 查看文档的format语法, a,b,c,d分别指代不同的变量
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            // 将图例放在底部
            bottom: "6%",
            // 小图标的宽, 高度
            itemWidth: 10,
            itemHeight: 10,
            left: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [{
            name: "年龄分布",
            type: "pie",
            center: ["50%", "42%"],
            radius: ["40%", "60%"],
            color: [
                "#065aab",
                "#066eab",
                "#0682ab",
                "#0696ab",
                "#06a0ab",
                "#06b4ab",
                "#06c8ab",
                "#06dcab",
                "#06f0ab"
            ],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            data: [{
                    value: 1,
                    name: "0岁以下"
                },
                {
                    value: 4,
                    name: "20-29岁"
                },
                {
                    value: 2,
                    name: "30-39岁"
                },
                {
                    value: 2,
                    name: "40-49岁"
                },
                {
                    value: 1,
                    name: "50岁以上"
                }
            ]
        }]
    };
    myChart.setOption(option);
    // 添加屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();

// 饼形图模块2 (右)
(() => {
    var myChart = echarts.init(document.querySelector('.pie2 .chart'));
    var option = {
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom: "-3%",
            itemWidth: 8,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.6)",
            }
        },
        series: [{
            name: '地区分布',
            type: 'pie',
            radius: ["10%", "70%"],
            center: ['50%', '45%'],
            roseType: 'radius', // radius - 半径模式 | area - 面积模式
            data: [{
                    value: 20,
                    name: "云南"
                },
                {
                    value: 26,
                    name: "北京"
                },
                {
                    value: 24,
                    name: "山东"
                },
                {
                    value: 25,
                    name: "河北"
                },
                {
                    value: 20,
                    name: "江苏"
                },
                {
                    value: 25,
                    name: "浙江"
                },
                {
                    value: 30,
                    name: "深圳"
                },
                {
                    value: 42,
                    name: "广东"
                }
            ],
            //修改labelLine - 引导线的线条样式
            labelLine: {
                length: 6, // 连接图形的线条
                length2: 8, // 连接文字的线条
            },
        }]
    };
    myChart.setOption(option);
    // 添加屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();

