var myChart2 = echarts.init(document.getElementById('min2'));
let total2
let data2 = [
    {value: 30, name: '机试'},
    {value: 70, name: '笔试'},
]
option2 = {
    backgroundColor: "#1e3756",
    tooltip: {
        trigger: 'item',
    },
    title: {
        zlevel: 0,
        text: total2,
        subtext: '',
        top: '30%',
        left: '50%',
        textAlign: 'center',
        textStyle: {
            color: '#FFA042',
            fontSize: 50,
        },
        subtextStyle: {
            fontSize: 50,
            color: 'black',
        },
    },
    legend: {
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        itemWidth: 15, // 图例图形的宽度
        itemHeight: 10, // 图例图形的高度
        itemGap: 30,
        textStyle: {
            color: '#fff',
            fontSize: 14,
            marginTop: 60,
        },
    },
    series: [
        {
            color: ['#163d59'],
            type: 'gauge',
            center: ['50%', '50%'],
            startAngle: 150,
            endAngle: -209.999,
            splitNumber: 12,
            radius: '50%',
            pointer: {
                show: false,
            },
            progress: {
                show: false,
                roundCap: true,
                width: 1,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    width: 10,
                    color: [
                        [0, '#163d59'],
                        [0.5, '#163d59'],
                        [1, '#163d59'],
                    ],
                },
            },
            axisTick: {
                distance: -25,
                length: 10,
                splitNumber: 10,
                lineStyle: {
                    width: 1,
                    color: '#099fe4',
                },
            },
            splitLine: {
                distance: -35,
                length: 10,
                lineStyle: {
                    width: 2,
                    color: '#099fe4',
                },
            },
            axisLabel: {
                show: false,
            },
            anchor: {
                show: false,
            },
            title: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [],
        },
        {
            color: ['#15e1fc', '#12b795', '#1d8ac4', '#1cadfe'],
            name: '',
            type: 'pie',
            radius: ['30%', '45%'],
            center: ['50%', '50%'],
            startAngle: 150,
            avoidLabelOverlap: false,
            itemStyle: {
                // borderColor: '#122227',
                borderColor: 'transparent',
                borderWidth: 3,
            },
            labelLine: {
                length: 30,
            },
            label: {
                bleedMargin: 5,
                alignTo: 'labelLine',
                position: 'outer',
                formatter: '{a|{c}({d}%)}\n {per|{b}} ',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1,
                borderRadius: 4,

                rich: {
                    a: {
                        color: '#fff',
                        lineHeight: 26,
                        align: 'center',
                        fontSize: 10,
                    },
                    hr: {
                        borderColor: 'auto',
                        width: '100%',
                        borderWidth: 1,
                        height: 0,
                    },
                    per: {
                        color: '#1ef0ed',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        padding: [5, 5],
                        borderRadius: 4,
                        fontSize: 10,
                    },
                },
            },
            data: [],
        },
    ],
};

option2.series[1].data = data2
myChart2.setOption(option2);