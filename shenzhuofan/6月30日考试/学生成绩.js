$(function () {
    // 柱状图
    histogramfun()
    // 饼状图
    pies1fun()
    pies2fun()
    pies3fun()
    pies4fun()
    // 折线图
    foldline()
    // 雷达图
    radarchart()
    // 排序图
    sort()
 })
 // 柱状图
 function histogramfun() {
    let histogram = document.getElementById('histogram')
    let myChart = echarts.init(histogram);
    let option = {
       backgroundColor: 'white',
       title: {
          text: '分数对比-本月对比',
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
          data: ['考试分数(笔试)', '考试分数(机试)', '考试分数(平均分)'],
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
          data: ['第一周', '第二周', '第三周', '第四周'],
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
          name: '（分）',
          nameTextStyle: {
             color: "#000",
             fontFamily: "Alibaba PuHuiTi",
             fontSize: 14,
             fontWeight: 600,
             padding: [10, 0, 0, -30]
          },
          nameGap: 25,  // 表现为上下位置
          type: 'value',
          max: '100',
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
          name: '考试分数(笔试)',
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
          data: [24.5, 36, 38, 54,]
       },
 
       {
          name: '考试分数(机试)',
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
          data: [70, 60, 70, 65,]
       },
 
       {
          name: '考试分数(平均分)',
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
          data: [47.25, 48, 54, 51]
       }
       ]
    };
    option && myChart.setOption(option);
 }
 // 饼状图1
 function pies1fun() {
    let pies1 = document.getElementById('pies1')
    let myChart = echarts.init(pies1);
    const bgColors = [
       'rgba(255, 169, 101, 0.4)',
       'rgba(107, 165, 255, 0.4)',
       'rgba(162, 134, 254, 0.4)',
       'rgba(75, 210, 201, 0.4)'
    ];
    const colors = ['#FFA965', '#6BA5FF', '#A286FE', '#4BD2C9']
    const names = [
       '笔试',
       '机试',
    ]
 
    const bgSeriesData = []
    const seriesData = []
    const values = [24.5, 70]
 
    names.forEach((item, index) => {
       bgSeriesData.push({
          name: item,
          value: values[index],
          itemStyle: {
             color: bgColors[index]
          }
       })
       seriesData.push({
          name: item,
          value: values[index],
          itemStyle: {
             color: colors[index]
          }
       })
    })
 
 
 
    option = {
       backgroundColor: '#fff',
       title: {
          text: '总分',
          subtext: `100`,
          top: '48%',
          left: 'center',
          textStyle: {
             color: '#666666',
             fontSize: 20,
             fontWeight: 400
          },
          subtextStyle: {
             color: '#333333',
             fontSize: 16,
             fontWeight: 400
          }
       },
       series: [
          {
             type: 'pie',
             radius: ['40%', '54%'],
             labelLine: {
                show: true,
                length2: 100,
                length: 20,
                lineStyle: {
                   color: '#DDDDDD'
                }
             },
             label: {
                show: true,
                position: 'outside',
                distanceToLabelLine: -70,
                rich: {
                   name0: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 0, 8, 6]
                   },
                   name1: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 0, 8, 6]
                   },
                   name2: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 20, 8, 6]
                   },
                   name3: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 20, 8, 6]
                   },
                   zb0: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12]
                   },
                   zb1: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12]
                   },
                   zb2: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12],
                      align: 'left'
                   },
                   zb3: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12],
                      align: 'left'
                   },
                   dot0: {
                      backgroundColor: '#FFA965',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot1: {
                      backgroundColor: '#6BA5FF',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot2: {
                      backgroundColor: '#A286FE',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot3: {
                      backgroundColor: '#4BD2C9',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   }
                },
                formatter: (params) => {
                   const x = params.dataIndex
                   return '{dot' + x + '|}' + '{name' + x + '|' + params.data.name + '}' + '\n' + '{zb' + x + '|占比' + params.percent + '%}'
                }
             },
             data: seriesData
          },
          {
             type: 'pie',
             radius: ['32%', '40%'],
             center: ['50%', '50%'],
             labelLine: {
                show: false
             },
             label: {
                show: false
             },
             silent: true,
             data: bgSeriesData
          }
       ]
    };
 
    option && myChart.setOption(option);
 }
 // 饼状图2
 function pies2fun() {
    let pies2 = document.getElementById('pies2')
    let myChart = echarts.init(pies2);
    const bgColors = [
       'rgba(255, 169, 101, 0.4)',
       'rgba(107, 165, 255, 0.4)',
       'rgba(162, 134, 254, 0.4)',
       'rgba(75, 210, 201, 0.4)'
    ];
    const colors = ['#FFA965', '#6BA5FF', '#A286FE', '#4BD2C9']
    const names = [
       '笔试',
       '机试',
    ]
 
    const bgSeriesData = []
    const seriesData = []
    const values = [36, 60]
 
    names.forEach((item, index) => {
       bgSeriesData.push({
          name: item,
          value: values[index],
          itemStyle: {
             color: bgColors[index]
          }
       })
       seriesData.push({
          name: item,
          value: values[index],
          itemStyle: {
             color: colors[index]
          }
       })
    })
 
 
 
    option = {
       backgroundColor: '#fff',
       title: {
          text: '总分',
          subtext: `100`,
          top: '48%',
          left: 'center',
          textStyle: {
             color: '#666666',
             fontSize: 20,
             fontWeight: 400
          },
          subtextStyle: {
             color: '#333333',
             fontSize: 16,
             fontWeight: 400
          }
       },
       series: [
          {
             type: 'pie',
             radius: ['40%', '54%'],
             labelLine: {
                show: true,
                length2: 100,
                length: 20,
                lineStyle: {
                   color: '#DDDDDD'
                }
             },
             label: {
                show: true,
                position: 'outside',
                distanceToLabelLine: -70,
                rich: {
                   name0: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 0, 8, 6]
                   },
                   name1: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 0, 8, 6]
                   },
                   name2: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 20, 8, 6]
                   },
                   name3: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 20, 8, 6]
                   },
                   zb0: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12]
                   },
                   zb1: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12]
                   },
                   zb2: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12],
                      align: 'left'
                   },
                   zb3: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12],
                      align: 'left'
                   },
                   dot0: {
                      backgroundColor: '#FFA965',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot1: {
                      backgroundColor: '#6BA5FF',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot2: {
                      backgroundColor: '#A286FE',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot3: {
                      backgroundColor: '#4BD2C9',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   }
                },
                formatter: (params) => {
                   const x = params.dataIndex
                   return '{dot' + x + '|}' + '{name' + x + '|' + params.data.name + '}' + '\n' + '{zb' + x + '|占比' + params.percent + '%}'
                }
             },
             data: seriesData
          },
          {
             type: 'pie',
             radius: ['32%', '40%'],
             center: ['50%', '50%'],
             labelLine: {
                show: false
             },
             label: {
                show: false
             },
             silent: true,
             data: bgSeriesData
          }
       ]
    };
 
    option && myChart.setOption(option);
 }
 // 饼状图3
 function pies3fun() {
    let pies3 = document.getElementById('pies3')
    let myChart = echarts.init(pies3);
    const bgColors = [
       'rgba(255, 169, 101, 0.4)',
       'rgba(107, 165, 255, 0.4)',
       'rgba(162, 134, 254, 0.4)',
       'rgba(75, 210, 201, 0.4)'
    ];
    const colors = ['#FFA965', '#6BA5FF', '#A286FE', '#4BD2C9']
    const names = [
       '笔试',
       '机试',
    ]
 
    const bgSeriesData = []
    const seriesData = []
    const values = [38, 70]
 
    names.forEach((item, index) => {
       bgSeriesData.push({
          name: item,
          value: values[index],
          itemStyle: {
             color: bgColors[index]
          }
       })
       seriesData.push({
          name: item,
          value: values[index],
          itemStyle: {
             color: colors[index]
          }
       })
    })
 
 
 
    option = {
       backgroundColor: '#fff',
       title: {
          text: '总分',
          subtext: `100`,
          top: '48%',
          left: 'center',
          textStyle: {
             color: '#666666',
             fontSize: 20,
             fontWeight: 400
          },
          subtextStyle: {
             color: '#333333',
             fontSize: 16,
             fontWeight: 400
          }
       },
       series: [
          {
             type: 'pie',
             radius: ['40%', '54%'],
             labelLine: {
                show: true,
                length2: 100,
                length: 20,
                lineStyle: {
                   color: '#DDDDDD'
                }
             },
             label: {
                show: true,
                position: 'outside',
                distanceToLabelLine: -70,
                rich: {
                   name0: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 0, 8, 6]
                   },
                   name1: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 0, 8, 6]
                   },
                   name2: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 20, 8, 6]
                   },
                   name3: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 20, 8, 6]
                   },
                   zb0: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12]
                   },
                   zb1: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12]
                   },
                   zb2: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12],
                      align: 'left'
                   },
                   zb3: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12],
                      align: 'left'
                   },
                   dot0: {
                      backgroundColor: '#FFA965',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot1: {
                      backgroundColor: '#6BA5FF',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot2: {
                      backgroundColor: '#A286FE',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot3: {
                      backgroundColor: '#4BD2C9',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   }
                },
                formatter: (params) => {
                   const x = params.dataIndex
                   return '{dot' + x + '|}' + '{name' + x + '|' + params.data.name + '}' + '\n' + '{zb' + x + '|占比' + params.percent + '%}'
                }
             },
             data: seriesData
          },
          {
             type: 'pie',
             radius: ['32%', '40%'],
             center: ['50%', '50%'],
             labelLine: {
                show: false
             },
             label: {
                show: false
             },
             silent: true,
             data: bgSeriesData
          }
       ]
    };
 
    option && myChart.setOption(option);
 }
 // 饼状图4
 function pies4fun() {
    let pies4 = document.getElementById('pies4')
    let myChart = echarts.init(pies4);
    const bgColors = [
       'rgba(255, 169, 101, 0.4)',
       'rgba(107, 165, 255, 0.4)',
       'rgba(162, 134, 254, 0.4)',
       'rgba(75, 210, 201, 0.4)'
    ];
    const colors = ['#FFA965', '#6BA5FF', '#A286FE', '#4BD2C9']
    const names = [
       '笔试',
       '机试',
    ]
 
    const bgSeriesData = []
    const seriesData = []
    const values = [37, 65]
 
    names.forEach((item, index) => {
       bgSeriesData.push({
          name: item,
          value: values[index],
          itemStyle: {
             color: bgColors[index]
          }
       })
       seriesData.push({
          name: item,
          value: values[index],
          itemStyle: {
             color: colors[index]
          }
       })
    })
 
 
 
    option = {
       backgroundColor: '#fff',
       title: {
          text: '总分',
          subtext: `100`,
          top: '48%',
          left: 'center',
          textStyle: {
             color: '#666666',
             fontSize: 20,
             fontWeight: 400
          },
          subtextStyle: {
             color: '#333333',
             fontSize: 16,
             fontWeight: 400
          }
       },
       series: [
          {
             type: 'pie',
             radius: ['40%', '54%'],
             labelLine: {
                show: true,
                length2: 100,
                length: 20,
                lineStyle: {
                   color: '#DDDDDD'
                }
             },
             label: {
                show: true,
                position: 'outside',
                distanceToLabelLine: -70,
                rich: {
                   name0: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 0, 8, 6]
                   },
                   name1: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 0, 8, 6]
                   },
                   name2: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 20, 8, 6]
                   },
                   name3: {
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: 400,
                      padding: [0, 20, 8, 6]
                   },
                   zb0: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12]
                   },
                   zb1: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12]
                   },
                   zb2: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12],
                      align: 'left'
                   },
                   zb3: {
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: 13,
                      padding: [8, 0, 0, 12],
                      align: 'left'
                   },
                   dot0: {
                      backgroundColor: '#FFA965',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot1: {
                      backgroundColor: '#6BA5FF',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot2: {
                      backgroundColor: '#A286FE',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   },
                   dot3: {
                      backgroundColor: '#4BD2C9',
                      width: 6,
                      height: 6,
                      padding: [0, 0, 0, 0],
                      borderRadius: 3,
                      verticalAlign: 'top'
                   }
                },
                formatter: (params) => {
                   const x = params.dataIndex
                   return '{dot' + x + '|}' + '{name' + x + '|' + params.data.name + '}' + '\n' + '{zb' + x + '|占比' + params.percent + '%}'
                }
             },
             data: seriesData
          },
          {
             type: 'pie',
             radius: ['32%', '40%'],
             center: ['50%', '50%'],
             labelLine: {
                show: false
             },
             label: {
                show: false
             },
             silent: true,
             data: bgSeriesData
          }
       ]
    };
 
    option && myChart.setOption(option);
 }
 
 // 折线图
 function foldline(){
    let foldline = document.getElementById('foldline')
    let myChart = echarts.init(foldline);
    option = {
       title: {
         text: '总分'
       },
       tooltip: {
         trigger: 'axis'
       },
       legend: {
         data: ['平均分']
       },
       grid: {
         left: '3%',
         right: '4%',
         bottom: '3%',
         containLabel: true
       },
       toolbox: {
         feature: {
           saveAsImage: {}
         }
       },
       xAxis: {
         type: 'category',
         boundaryGap: false,
         data: ['第一周', '第二周', '第三周', '第四周']
       },
       yAxis: {
         type: 'value',
         max:100
       },
       series: [
         {
           name: '平均分',
           type: 'line',
           stack: 'Total',
           data: [47.25, 48, 54, 51]
         }
       ]
     };
     option && myChart.setOption(option);
 }
 
 // 雷达图
 function radarchart(){
    let radarchart = document.getElementById('radarchart')
    let myChart = echarts.init(radarchart);
    var dataname=['第一周','第二周','第三周','第四周']
 var datavaule=[24.5,36,38,37] 
 var datavaule1=[70,60,70,65]
 
 var indicator = []
 for (var i = 0; i < dataname.length; i++) {
     indicator.push({
         name: dataname[i],
         max: 100,
     })
 }
 
 option = {
     tooltip: {
         show: true,
         trigger: "item",
     },
     legend: {
         data: ['笔试','机试'],
         type: "scroll",
         icon:"circle",
         right: '20',
         top: '15',
         itemGap: 30,
         itemWidth: 16,
         itemHeight: 16,
         textStyle: {
             fontSize: '15',
             color: '#656565',
         },
 
     },
     radar: {
         center: ["50%", "60%"],
         radius: "65%",
         startAngle: 90,
         splitNumber: 4,
         splitArea: {
             areaStyle: {
                 color: ["transparent"]
             }
         },
         axisLabel: {
             show: false,
         },
         axisLine: {
             show: true,
             lineStyle: {
                 color: "#E7E7E7"
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: "#E7E7E7"
             }
         },
         name: {
             formatter: '{value}',
             textStyle: {
               color: '#656565' , 
               fontSize: 15,
             },
         },
         indicator: indicator
     },
 
     series: [{
         name: "笔试",
         type: "radar",
         symbol: "circle",
         symbolSize:6,
         areaStyle: {
             normal: {
                 color: 'rgba(170, 216, 255, 0.18)',
             }
         },
         itemStyle: {
             color: '#4B95F3',
         },
         lineStyle: {
             normal: {
                 color: "#4B95F3",
                 width: 2
             }
         },
         data: [datavaule]
     },{
         name: "机试",
         type: "radar",
         symbol: "circle",
         symbolSize:6,
         areaStyle: {
             normal: {
                 color: 'rgba(103, 193, 57, 0.18)',
             }
         },
         itemStyle: {
             color: '#67C139',
         },
         lineStyle: {
             normal: {
                 color: "#67C139",
                 width: 2
             }
         },
         data: [datavaule1]
     }]
 };
    option && myChart.setOption(option);
 }
 
 // 排序图
 function sort(){
    let sort = document.getElementById('sort')
    let myChart = echarts.init(sort);
    var year =['第四周','第三周' ,'第二周', '第一周']
    var data = [
    [51, 59.5, 61, 61],
    [54, 65, 60, 65.5],
    [48, 65, 45, 49],
    [47.25, 55, 61, 64],
 ] 
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例',
        },
        tooltip: {},
        legend: {
            data: ['平均分对比']
        },
        yAxis: {
            data: ['杨宏承', '余浩', '苏鹏杰', '申卓凡'],
            inverse: true,
        },
        xAxis: {
          max:100
        },
        series: [{
            realtimeSort: true,
            name: '平均分对比',
            showBackground: true,
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            },
            stack: {},
            type: 'bar',
            data: [120, 206, 392, 150]
        }],
        animationDuration: 0,
        animationDurationUpdate: 500,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };
 
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
 
    for (let i = 0; i < data.length; i++) {
        setTimeout(function() {
            var option1 = {
                title: {
                    text: year[data.length - i - 1].toString()
                },
                series: [{
                    data: data[data.length - i - 1]
                }]
            }
            console.log(option1)
            myChart.setOption(option1)
        }, 1000 * i)
    }
     option && myChart.setOption(option);
 }