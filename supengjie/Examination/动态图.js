var myChart7 = echarts.init(document.getElementById("main5"));
var year = ["第四周", "第三周", "第二周", "第一周"];
var data7 = [
  [51, 59.5, 61, 61],
  [54, 65, 60, 65.5],
  [48, 65, 45, 49],
  [47.25, 55, 61, 64],
];
// 指定图表的配置项和数据
var option7 = {
  title: {
    // text: 'ECharts 入门示例',
  },
  tooltip: {},
  legend: {
    data: ["考试成绩"],
  },
  yAxis: {
    data: ["杨宏承", "余浩", "刘振州", "申卓凡"],
    inverse: true,
  },
  xAxis: {},
  series: [
    {
      realtimeSort: true,
      name: "考试成绩",
      showBackground: true,
      label: {
        show: true,
        position: "right",
        valueAnimation: true,
      },
      stack: {},
      type: "bar",
      data: [0, 0, 0, 0],
    },
  ],
  animationDuration: 0,
  animationDurationUpdate: 500,
  animationEasing: "linear",
  animationEasingUpdate: "linear",
};

// 使用刚指定的配置项和数据显示图表。
myChart7.setOption(option7);

for (let i = 0; i < data7.length; i++) {
  setTimeout(function () {
    var option7 = {
      title: {
        // text: year[data7.length - i - 1].toString()+'分数'
      },
      series: [
        {
          data: data7[data7.length - i - 1],
        },
      ],
    };
    console.log(option7);
    myChart7.setOption(option7);
  }, 1000 * i);
}
myChart7.setOption(option7);
