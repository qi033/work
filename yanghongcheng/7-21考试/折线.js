
var chartDom = document.getElementById("bing1");
var myChart = echarts.init(chartDom);
 option = {
    title: {
        left: 20,
        top: '8%',
        text: '单位：万元',
        textStyle: {
            fontSize: 9,
        },
    },
    tooltip: {
        trigger: 'axis',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 11,
        },
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '24%',
        bottom: '10%',
        containLabel: true,
    },
    legend: {
        top: '8%',
        data: ['本周', '上周'],
        itemWidth: 13,
        itemHeight: 9,
        textStyle: {
            fontSize: 9,
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['星期一', '星期二', '星期三', '星期四', '今天'],
        axisLabel: {
            fontSize: 9,
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            fontSize: 9,
        },
    },
    series: [
        {
            name: '本周',
            type: 'line',
            lineStyle: {
                type: 'dashed',
            },
            data: [2, 0, 8, 12, 1, 7, 30,],
        },
        {
            name: '上周',
            type: 'line',
            lineStyle: {
                type: 'dashed',
            },
            data: [1, 8, 7, 10, 5, 7, 3,],
        },
    ],
};

if (option && typeof option === 'object') {
    myChart.setOption(option, true);
}
myChart.setOption(option);
