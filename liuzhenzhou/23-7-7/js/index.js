var interleaveOffset = 0.5; //视差比值

var swiperOptions = {
  autoplay: true,
  loop: true,
  speed: 1000,
  grabCursor: true,
  watchSlidesProgress: true,
  mousewheelControl: true,
  keyboardControl: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    progress: function (swiper) {
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".slide-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
      }
    },
    touchStart: function (swiper) {
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function (swiper, speed) {
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    },
  },
};

var swiper = new Swiper(".swiper-container", swiperOptions);

var myChart = echarts.init(document.getElementById("main"));
let index = 0;
let data = [
  [
    [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
    [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
  ],
  [
    [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
    [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
  ],
  [
    [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
    [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
  ],
  [
    [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
    [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
  ],
];

setInterval(function () {
  //1.数组下标++ 切换数据
  index++;
  if (index > 3) {
    //数组最大下标为3,
    index = 0;
  }
  //2.替换数据
  option.series[0].data = data[index][0];
  option.series[1].data = data[index][1];
  //3.重新渲染 echarts图表
  myChart.setOption(option);
}, 3000);

option = {
  backgroundColor: "#222",
  title: {
    text: "单位:万",
    left: 30,
    // 文字颜色
    textStyle: {
      color: "#4c9bfd",
    },
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["预期销售额", "实际销售额"],
    left: "right",
    textStyle: {
      color: "#fff",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    // 文字颜色
    axisLabel: {
      color: "#4c9bfd",
    },
    data: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
  },
  yAxis: {
    /* 刻度为数据最大刻度 */
    max: "dataMax",
    type: "value",
    // 文字颜色
    axisLabel: {
      color: "#4c9bfd",
    },
    //修改刻度颜色
    splitLine: {
      lineStyle: {
        color: "#012f4a",
      },
    },
  },
  series: [
    {
      name: "预期销售额",
      type: "line",
      stack: "总量",
      //曲线
      smooth: true,
      //圆圈大小
      symbolSize: 8,
      itemStyle: {
        color: "#00f2f1", // 线颜色
      },
      data: data[0][0],
    },
    {
      name: "实际销售额",
      type: "line",
      stack: "总量",
      //曲线
      smooth: true,
      //圆圈大小
      symbolSize: 8,
      data: data[0][1],
      itemStyle: {
        color: "#ed3f35", // 线颜色
      },
    },
  ],
};
myChart.setOption(option);

var myCharts = echarts.init(document.getElementById("mains"));
var charts = {
  unit: "亿元",
  names: ["销售额", "税收收入"],
  lineX: [
    "2019-01",
    "2019-02",
    "2019-03",
    "2019-04",
    "2019-05",
    "2019-06",
    "2019-07",
    "2019-08",
    "2019-09",
  ],
  value: [
    [
      451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165,
      236, 527, 328, 129, 530,
    ],
    [
      360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65,
      325, 468, 108, 253, 98,
    ],
  ],
};
var color = ["rgba(23, 255, 243", "rgba(119,61,190"];
var lineY = [];

for (var i = 0; i < charts.names.length; i++) {
  var x = i;
  if (x > color.length - 1) {
    x = color.length - 1;
  }
  var datas = {
    name: charts.names[i],
    type: "line",
    color: color[x] + ")",
    smooth: true,
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: color[x] + ", 0.3)",
            },
            {
              offset: 0.8,
              color: color[x] + ", 0)",
            },
          ],
          false
        ),
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowBlur: 10,
      },
    },
    symbol: "circle",
    symbolSize: 5,
    data: charts.value[i],
  };
  lineY.push(datas);
}

lineY[0].markLine = {
  silent: true,
  data: [
    {
      yAxis: 5,
    },
    {
      yAxis: 100,
    },
    {
      yAxis: 200,
    },
    {
      yAxis: 300,
    },
    {
      yAxis: 400,
    },
  ],
};
var option = {
  backgroundColor: "#0d235e",
  tooltip: {
    trigger: "axis",
  },
  legend: {
    datas: charts.names,
    textStyle: {
      fontSize: 12,
      color: "rgb(0,253,255,0.6)",
    },
    right: "4%",
  },
  grid: {
    top: "14%",
    left: "4%",
    right: "4%",
    bottom: "12%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    datas: charts.lineX,
    axisLabel: {
      textStyle: {
        color: "rgb(0,253,255,0.6)",
      },
      formatter: function (params) {
        return params.split(" ")[0];
      },
    },
  },
  yAxis: {
    name: charts.unit,
    type: "value",
    axisLabel: {
      formatter: "{value}",
      textStyle: {
        color: "rgb(0,253,255,0.6)",
      },
    },
    splitLine: {
      lineStyle: {
        color: "rgb(23,255,243,0.3)",
      },
    },
    axisLine: {
      lineStyle: {
        color: "rgb(0,253,255,0.6)",
      },
    },
  },
  series: lineY,
};
setInterval(() => {
  myChart.setOption({
    legend: {
      selected: {
        出口: false,
        入口: false,
      },
    },
  });
  myChart.setOption({
    legend: {
      selected: {
        出口: true,
        入口: true,
      },
    },
  });
}, 10000);
myCharts.setOption(option);

const map = new AMap.Map("l", {
  viewMode: "2D",
  resizeEnable: true,
  zoom: 13,
  center: [113.428749, 34.765308],
});
var driving = new AMap.Driving({
  map: map,
  // panel: "panel",
});
driving.search([113.428749, 34.765308], [115.304179, 35.278702]);
map.setMapStyle("amap://styles/blue");
