$(".card-panle").hover(function () {
  $(this).children(".rightcard").css("backgroundColor", " #40c9c6");
  $(this)
    .children(".rightcard")
    .children()
    .children(".i1")
    .css("backgroundColor", " #fff");
  $(this)
    .children(".rightcard")
    .children()
    .children(".i1")
    .css("color", "#40c9c6");
});
$(".card-panle").mouseleave(function () {
  $(this).children(".rightcard").css("backgroundColor", " #fff");
  $(this)
    .children(".rightcard")
    .children()
    .children(".i1")
    .css("backgroundColor", " #40c9c6");
  $(this)
    .children(".rightcard")
    .children()
    .children(".i1")
    .css("color", "#fff");
});
var myChart = echarts.init(document.getElementById("main"));
option = {
  title: {
    text: "用户登录量",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["本周", "上周"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "星期五",
      "星期六",
      "星期天",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "本周",
      type: "line",
      data: [25, 7, 8, 11, 41, 69, 81],
      smooth: true,
    },
    {
      name: "上周",
      type: "line",
      data: [48, 20, 4, 36, 21, 14, 21],
      smooth: true,
    },
  ],
};
myChart.setOption(option);

$("#jie").on("click", function () {
  var myChart = echarts.init(document.getElementById("main"));
  option = {
    title: {
      text: "接口请求量",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["本周", "上周"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "星期五",
        "星期六",
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "本周",
        type: "line",
        data: [10, 0, 70, 149, 11, 98, 184],
        smooth: true,
      },
      {
        name: "上周",
        type: "line",
        data: [13, 51, 70, 71, 52, 72, 32],
        smooth: true,
      },
    ],
  };
  myChart.setOption(option);
});
$("#yong").on("click", function () {
  var myChart = echarts.init(document.getElementById("main"));
  option = {
    title: {
      text: "用户登录量",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["本周", "上周"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "星期五",
        "星期六",
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "本周",
        type: "line",
        data: [25, 7, 8, 11, 41, 69, 81],
        smooth: true,
      },
      {
        name: "上周",
        type: "line",
        data: [48, 20, 4, 36, 21, 14, 21],
        smooth: true,
      },
    ],
  };
  myChart.setOption(option);
});
$("#ipliang").on("click", function () {
  var myChart = echarts.init(document.getElementById("main"));
  option = {
    title: {
      text: "用户登录量",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["本周", "上周"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "星期五",
        "星期六",
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "本周",
        type: "line",
        data: [1, 0, 6, 6, 1, 5, 2],
        smooth: true,
      },
      {
        name: "上周",
        type: "line",
        data: [1, 5, 6, 5, 5, 5, 2],
        smooth: true,
      },
    ],
  };
  myChart.setOption(option);
});
