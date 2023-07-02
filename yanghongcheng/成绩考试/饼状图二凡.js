var chartDom = document.getElementById("bingfan3");
var myChart = echarts.init(chartDom);
var option;
const listfan3 = [
    {
        name: '笔试',
        value: 24.5,
    },
    {
        name: '机试',
        value: 70,
    },
    {
        name: '平均',
        value: 47.25,
    },
];

option = {
    backgroundColor: '#031d33',
    // color:['red','yellow','blue'],
    tooltip: {
        show: true,
    },
    title: {
        text: "第一周成绩分析",
        top: 3,
        left: "2",
        textStyle: {
          fontSize: 12,
          color: "#fff",
        },
      },
    series: [
        {
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#003359',
                },
            },
            label: {
                show: true,
                position: 'inside',
                align: 'center',
                verticalAlign: 'middle',
                formatter(params) {
                    console.log('label params', params);
                    // return params.value;
                    return `{name|${params.name}}\n {value|${params.value}}`;
                },
                rich: {
                    name: {
                        fontSize: 12,
                    },
                    value: {
                        fontSize: 13,
                        lineHeight:40
                    },
                },
            },
            data: listfan3,
            labelLine: {
                show: false,
            },
        },
    ],
};
myChart.setOption(option);