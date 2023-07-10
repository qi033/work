$(function(){
  KDAfun()
  datasfun()
})
// 柱状图
function KDAfun() {
  let kda = document.getElementById('kda')
  let myChart = echarts.init(kda);
  let option = {
     backgroundColor: 'white',
     title: {
        text: 'K/D/A',
        left: '10',
        top: "20",
        // padding: [10, 0, 0, 50],
        textStyle: {
           color: "#000",
           fontFamily: "Alibaba PuHuiTi",
           fontSize: 14,
           fontWeight: 600,
           // padding: [0, 0, 0, 35]
        },
     },

     tooltip: {
        trigger: 'axis',
        backgroundColor: "rgba(1, 13, 19, 0.5)",
        borderWidth: 0,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
           type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        textStyle: {
           color: "rgba(212, 232, 254, 1)",
           // fontSize: fontChart(0.24),
        },
        confine: true
     },
     grid: {
        top: '25%',
        left: '5%',
        right: '5%',
        bottom: '8%',
        containLabel: true,
     },
     legend: {
        data: ['杀敌数(K)', '死亡数(D)', '助攻数(A)'],
        left: "center",
        top: 30,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        borderRadius: 4,
        textStyle: {
           color: "#000",
           fontFamily: "Alibaba PuHuiTi",
           fontSize: 14,
           fontWeight: 400,
        },
     },
     xAxis: {
        type: 'category',
        data: ['周二', '周三', '周四', '周五'],
        axisLine: {
           show: false,
           lineStyle: {
              color: '#ECECEC'
           }
        },
        axisTick: {
           show: false,
        },
        axisLabel: {
           // interval: 0,
           // rotate: 40,
           show: true,
           textStyle: {
              fontFamily: 'Microsoft YaHei',
              color: '#666666'
           }
        },
     },

     yAxis: {
        name: '（评分）',
        nameTextStyle: {
           color: "#000",
           fontFamily: "Alibaba PuHuiTi",
           fontSize: 14,
           fontWeight: 600,
           padding: [10, 0, 0, -30]
        },
        nameGap: 25,  // 表现为上下位置
        type: 'value',
        max: '50',
        axisLine: {
           show: false,
           lineStyle: {
              color: '#666666',
           }
        },
        splitLine: {
           show: true,
           lineStyle: {
              color: '#ECECEC'
           }
        },
        axisLabel: {
           textStyle: {
              fontFamily: 'Microsoft YaHei',
              color: '#393939',
              fontSize: 12
           }
        }
     },
     series: [{
        name: '杀敌数(K)',
        type: 'bar',
        barWidth: '25',
        itemStyle: {
           normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: '#7E7CEB'
              }, {
                 offset: 1,
                 color: '#79C7F3'
              }]),

           },
        },
        data: [22, 23, 20, 23,28]
     },

     {
        name: '死亡数(D)',
        type: 'bar',
        barWidth: '25',
        itemStyle: {
           normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: '#F98563'
              }, {
                 offset: 1,
                 color: '#FBAC69'
              }]),

           }
        },
        data: [18, 20, 17, 22,16]
     },

     {
        name: '助攻数(A)',
        type: 'bar',
        barWidth: '25',
        itemStyle: {
           normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: '#13c2c2'
              }, {
                 offset: 1,
                 color: '#87e8de'
              }]),

           }
        },
        data: [16, 9, 8, 6,7]
     }
     ]
  };
  option && myChart.setOption(option);
}
// 雷达图
function datasfun(){
  let datas = document.getElementById('datas')
  let myChart = echarts.init(datas);
  var data = [57, 52.6, 52.5, 41.4, 61.6];
var indicatorname = ['枪法', '致胜', '突破', '狙杀', '道具'];
var maxdata = [100, 100, 100, 100, 100];


// （独立解决问题）：

// （指派型结果）

// （善于学习）：

// （体验至上）：

// （主动参与）:

function contains(arrays, obj) {
    var i = arrays.length;
    while (i--) {
        if (arrays[i] === obj) {
            return i;
        }
    }
    return false;
}

var indicator = [];
for (var i = 0; i < indicatorname.length; i++) {
    indicator.push({
        name: indicatorname[i],
        max: maxdata[i]
    })
}

function innerdata(i) {
    var innerdata = [];
    for (let j = 0; j < data.length; j++) {
        innerdata.push(100 - 20 * i)
    }
    return innerdata
}

optionData = getData(data)

function getData(data) {
    var res = {
        series: [{
            type: 'radar',
            symbolSize: 20,
            symbol: "circle",
            areaStyle: {
                color: "#39B2FF",
                opacity: 0.3
            },
            lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00A2FF'
                }, {
                    offset: 1,
                    color: '#0060FF'
                }], false),
                width: 3
            },
            itemStyle: {
                color: "#fff ",
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00DEFF'
                }, {
                    offset: 1,
                    color: '#1598FF'
                }], false),
                borderWidth: 4,
                opacity: 1
            },
            label: {
                show: false,
            },
            data: [{
                value: data,
            }],
            z: 100
        }, ],
    };
    for (let i = 0; i < data.length; i++) {
        res.series.push({
            type: 'radar',
            data: [{
                value: innerdata(i),
            }],
            symbol: 'none',
            lineStyle: {
                width: 0
            },
            itemStyle: {
                color: '#fff'
            },
            areaStyle: {
                color: '#fff',
                shadowColor: 'rgba(14,122,191,0.15)',
                shadowBlur: 30,
                shadowOffsetY: 20
            }
        });
    }
    return res;
}

option = {
    backgroundColor: '#fff',
    tooltip: {
        formatter: function() {
            var html = '';
            for (var i = 0; i < data.length; i++) {
                html += indicatorname[i] + ' : ' + data[i] + '%<br>'
            }
            return html
        }
    },
    radar: {
        indicator: indicator,
        splitArea: {
            show: true,
            areaStyle: {
                color: '#fff',
                shadowColor: 'rgba(14,122,191,0.19)',
                shadowBlur: 30,
                shadowOffsetY: 20
            }
        },
        splitLine: {
            show: false,

        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        name: {
            textStyle: {
                rich: {
                    a: {
                        fontSize: '17',
                        color: '#333',
                        align: 'left',
                        lineHeight: '30',
                        fontWeight: 'bold',
                    },
                    b: {
                        fontSize: '15',
                        color: '#666',
                        align: 'left',
                    }
                },
            },

            formatter: function(params, index) {
                var i = contains(indicatorname, params);
                var percent = data[i] / 100 * 100;
                return  '{b|' + params + '}'
            },
        },
    },
    series: optionData.series
};
option && myChart.setOption(option);
}
