var myChart2 = echarts.init(document.getElementById('main2'));
 // 3.2 指定图表的配置项和数据
 option2 = {
    backgroundColor:'#222',
    title: {
      text: '单位:辆',
      left: 30,
      // 文字颜色
      textStyle: {
        color: '#4c9bfd'
      }
    },
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
        data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        axisTick: {
          alignWithLabel: true
        },
        //x底部文字
        axisLabel: {
          textStyle: {
            color: '#3398DB'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        //y右侧文字
        axisLabel: {
          textStyle: {
            color: '#3398DB'
          }
        },
        // y轴的分割线
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '收入统计',
        type: 'bar',
        barWidth: '15',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#00fffb' },
            { offset: 1, color: '#0061ce' }
          ])
        },
        data: [252,307,456,578,625,600,600,660,310,260,286,410].map(item=>{
          if( item < 500 ){
            return item
          }else{
            return {
              value: item,
              itemStyle: {
                color: '#254065',
                opacity: 0.5
              }
            }
          }
        })
      },
      {
        name: '收入统计',
        type: 'line',
        smooth: true,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        areaStyle: {
          opacity: 0.2,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#36d9ab'
            },
            {
              offset: 1,
              color: '#02137c'
            }
          ])
        },
        data: [252,307,456,578,625,600,600,660,310,260,286,410].map((item) => item * 1.5)
      }
    ]
  }
myChart2.setOption(option2);