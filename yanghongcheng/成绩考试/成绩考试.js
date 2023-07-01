var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom);
var option;
option = {
  backgroundColor: "RGB(2,22,76)",
  title: {
    text: "考试成绩分析",
    top: 21,
    left: "21",
    textStyle: {
      fontSize: 18,
      color: "#fff",
    },
  },
  animation: false,
  grid: {
    top: "67",
    left: "32",
    bottom: "15",
    right: "39",
    containLabel: true,
  },
  legend: {
    show: true,
    top: 15,
    right: 26,
    data: ["机试", "笔试", "平均分"],
    textStyle: {
      color: "RGB(193,223,255)",
    },
  },
  xAxis: [
    {
      type: "category",
      data: ["第一周", "第二周", "第三周", "第四周"],
      axisTick: {
        alignWithLabel: true,
      },
      nameTextStyle: {
        color: "#fff",
      },
      axisLine: {
        lineStyle: {
          color: "RGB(47,68,114)",
        },
      },
      axisLabel: {
        textStyle: {
          color: "white",
        },
        margin: 20,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        textStyle: {
          color: "white",
        },
        formatter: "{value}",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "RGB(47,68,114)",
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "RGB(47,68,114)",
        },
      },
    },
  ],
  series: [
    {
      name: "机试",
      type: "bar",
      //silent: true,
      barWidth: "12",
      //barGap: '-100%', // Make series be overlap
      data: [
        {
          value: 70,
        },
        {
          value: 60,
        },
        {
          value: 70,
        },
        {
          value: 65,
        },
      ],
    },
    {
      name: "笔试",
      type: "bar",
      //silent: true,
      barWidth: "12",
      //barGap: '-100%', // Make series be overlap
      data: [
        {
          value: 24.5,
        },
        {
          value: 36,
        },
        {
          value: 38,
        },
        {
          value: 37,
        },
      ],
    },
    {
      name: "平均分",
      type: "bar",
      //silent: true,
      barWidth: "12",
      //barGap: '-100%', // Make series be overlap
      data: [
        {
          value: 47.25,
        },
        {
          value: 48,
        },
        {
          value: 54,
        },
        {
          value: 51,
        },
      ],
    },
  ],
};
myChart.setOption(option);
