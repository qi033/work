var chartDom = document.getElementById("bing1");
var myChart = echarts.init(chartDom);
var option;
const list = [
    {
        name: 'SKT',
        value: 93.8,
    },
    {
        name: 'SSW',
        value: 88.2,
    },
    {
        name: 'SKT',
        value: 83.3,
    },
];

option = {
    backgroundColor: '#031d33',
    // color:['red','yellow','blue'],
    tooltip: {
        show: true,
    },
    title: {
        text: "前三战队胜率",
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
            data: list,
            labelLine: {
                show: false,
            },
        },
    ],
};
myChart.setOption(option);