var myChart5 = echarts.init(document.getElementById('main3'));
option5 = {
    title: {
        text: '学生四周平均分'
    },
    tooltip: {
        padding: 3,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function(obj) {
            var value = obj.value;
            var yindex = obj.dataIndex;
            var xindex = obj.seriesIndex;
            setTimeout(function() {
                stockPieManagement("ebox");
                pieChartsFn(yindex, xindex);
            }, 100)
            return '<div style="width:200px;height:200px;" id="ebox" class="ebox"></div>'

        }
    },
    legend: {
        // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['第一周', '第二周', '第三周', '第四周']
    },
    yAxis: {
        type: 'value'
    },
    series: [

        {
            name: '',
            type: 'line',
            stack: '总量',
            symbolSize: 10,
            data: [50.625,62.35,66,59.05]
        }

    ]
};

function stockPieManagement(odiv) {
    myChartToolpie = echarts.init(document.getElementById(odiv));
    myChartTool = {
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            // data: [{
            //     value: 335,
            //     name: '直接访问'
            // }, {
            //     value: 310,
            //     name: '邮件营销'
            // }, {
            //     value: 234,
            //     name: '联盟广告'
            // }, {
            //     value: 135,
            //     name: '视频广告'
            // }, {
            //     value: 1548,
            //     name: '搜索引擎'
            // }]
        }]
    };
    myChartToolpie.setOption(myChartTool);
}


myChart5.setOption(option5);