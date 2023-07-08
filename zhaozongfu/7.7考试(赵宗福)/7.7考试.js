layui.use(function () {
    var element = layui.element;

    // hash 地址定位
    var hashName = 'tabid'; // hash 名称
    var layid = location.hash.replace(new RegExp('^#' + hashName + '='), ''); // 获取 lay-id 值

    // 初始切换
    element.tabChange('test-hash', layid);
    // 切换事件
    element.on('tab(test-hash)', function (obj) {
        location.hash = hashName + '=' + this.getAttribute('lay-id');
    });
});
Splitting()
gsap.set('.char', {
    '--hue': gsap.utils.distribute({
        base: 0,
        amount: 330,
    })
})
gsap.to('.char', {
    '--weight': 700,
    '--saturation': 80,
    ease: 'sine.inOut',
    duration: 0.5,
    stagger: {
        yoyo: true,
        repeat: -1,
        each: 0.15,
    }
}).time(2)
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '数据统计',
        top: 10,
        left: 10,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['迪卢克', '温迪', '胡桃', '夜兰', '雷神'],
        left: 120,
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['单伤', '扩散', '班增伤', '扩加增', '满配对', '嗑药后', '顶配后']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '迪卢克',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [15353, 33764, 64753, 83644, 123847, 186446, 364647]
        },
        {
            name: '温迪',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [15226, 45644, 78575, 85765, 106343, 145734, 175437]
        },
        {
            name: '胡桃',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [30000, 41465, 130477, 156734, 184633, 330734, 683464]
        },
        {
            name: '夜兰',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [45746, 67757, 89866, 114644, 135534, 234655, 664842]
        },
        {
            name: '雷神',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [89568, 164758, 268484, 385773, 465783, 663447, 1036890]
        }
    ]
};

option && myChart.setOption(option);
var chartDom = document.getElementById('main1');
var myChart = echarts.init(chartDom);
var option1;
option1 = {
    title: {
        text: '角色好评度',
        top: 10,
        left: 10,
    },
    xAxis: {
        type: 'category',
        data: ['主角', '砂糖', '班尼特', '赛诺', '钟离', '万叶', '行秋']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [30, 60, 86, 80, 95, 98, 88],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 20,
            lineStyle: {
                color: '#5470C6',
                width: 4,
                type: 'dashed'
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: '#EE6666',
                color: 'yellow'
            }
        }
    ]
};

option1 && myChart.setOption(option1);
var map = new AMap.Map('container', {
    resizeEnable: true, // 默认使用 2D 模式
    center: [113.427532, 34.765086],
    zoom: 16
});
var driving = new AMap.Driving({
    map: map,
    panel: "panel"
});
driving.search(
    new AMap.LngLat(113.427532, 34.765086),
    new AMap.LngLat(113.428198, 34.774311),
    function (status, result) {
        if (status === "complete") {
            log.success("绘制驾车路线完成");
        } else {
            log.error("获取驾车数据失败：" + result);
        }
    })

