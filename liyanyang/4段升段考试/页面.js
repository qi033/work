function ttn3() {
  let chartDom22 = document.getElementById("earch");
  let myChart22 = echarts.init(chartDom22);
  let option22;
  option22 = {
    tooltip: {},
    legend: {
      datas: ["本周", "上周"],
    },
    xAxis: {
      type: "category",
      datas: [
        "星期五",
        "星期六",
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "今天",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "本周",
        datas: [100, 80, 102, 60, 80, 90, 63],
        type: "line",
        smooth: true,
      },
      {
        name: "上周",
        data: [100, 80, 12, 80, 50, 40, 13],
        type: "line",
        smooth: true,
      },
    ],
  };
  myChart22.setOption(option22);
}
function ttn4() {
  let chartDom22 = document.getElementById("earch");
  let myChart22 = echarts.init(chartDom22);
  let option22;
  option22 = {
    tooltip: {},
    legend: {
      datas: ["本周", "上周"],
    },
    xAxis: {
      type: "category",
      datas: [
        "星期五",
        "星期六",
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "今天",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "本周",
        datas: [50, 80, 120, 200, 50, 40, 13],
        type: "line",
        smooth: true,
      },
      {
        name: "上周",
        data: [80, 80, 12, 120, 100, 50, 13],
        type: "line",
        smooth: true,
      },
    ],
  };
  myChart22.setOption(option22);
}
function ttn1() {
  let chartDom22 = document.getElementById("earch");
  let myChart22 = echarts.init(chartDom22);
  let option22;
  option22 = {
    tooltip: {},
    legend: {
      datas: ["本周", "上周"],
    },
    xAxis: {
      type: "category",
      datas: [
        "星期五",
        "星期六",
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "今天",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "本周",
        datas: [5, 80, 12, 100, 20, 40, 13],
        type: "line",
        smooth: true,
      },
      {
        name: "上周",
        data: [15, 80, 12, 80, 50, 40, 13],
        type: "line",
        smooth: true,
      },
    ],
  };
  myChart22.setOption(option22);
}
let chartDom22 = document.getElementById("earch");
let myChart22 = echarts.init(chartDom22);
let option22;
option22 = {
  tooltip: {},
  legend: {
    data: ["本周", "上周"],
  },
  xAxis: {
    type: "category",
    data: ["星期五", "星期六", "星期天", "星期一", "星期二", "星期三", "今天"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "本周",
      data: [85, 80, 12, 200, 10, 40, 13],
      type: "line",
      smooth: true,
    },
    {
      name: "上周",
      data: [5, 4, 12, 200, 10, 40, 13],
      type: "line",
      smooth: true,
    },
  ],
};
myChart22.setOption(option22);
