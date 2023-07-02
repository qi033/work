var myCharts = echarts.init(document.getElementById("mains"));
dataObj = {
  year: ["6.2(星期五)", "6.9(星期五)", "6.16(星期五)", "6.21(星期五)"],
  data: {
    value: [
      {
        name: "刘佳佳成绩",
        value: [83.75, 68.75, 60, 51.5],
      },
    ],
  },
};
let dataArr = [];

dataObj.data.value.map((item) => {
  let datachild = [];
  let newArr = {
    name: item.name,
    type: "line",
    smooth: true,
    symbolSize: 8,
    data: item.value,
    barWidth: "30%",
  };

  dataArr.push(newArr);
});
// console.log(dataArr);
option = {
  backgroundColor: "#fff",
  color: ["#f0c725", "#16f892"],
  title: {
    left: "center",
    textStyle: {
      color: "#000",
      fontSize: "14",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  legend: {
    x: "center",
    top: "25",
    textStyle: {
      color: "#c1cadf",
      fontSize: 14,
    },
  },
  grid: {
    left: "6%",
    right: "4%",
    top: "25%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    show: true,
    orient: "vertical",
    x: "right",
    y: "center",
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: dataObj.year,
      axisLine: {
        lineStyle: {
          color: "rgba(240,199,37,0.5)",
        },
      },
      axisLabel: {
        interval: 0,
        color: "rgba(0,0,0,0.5)",
        fontSize: "15",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "成绩(平均分)",
      min: 0,
      max: 100,
      nameTextStyle: {
        color: "#c1cadf",
        align: "right",
        lineHeight: 10,
      },
      axisLine: {
        lineStyle: {
          color: "rgba(240,199,37,1)",
        },
      },
      axisLabel: {
        interval: 0,
        color: "#000",
        fontSize: "15",
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: dataArr,
};
myCharts.setOption(option);

var myCharts1 = echarts.init(document.getElementById("mains1"));
dataObj = {
  year: ["6.2(星期五)", "6.9(星期五)", "6.16(星期五)", "6.21(星期五)"],
  data: {
    value: [
      {
        name: "赵宗福成绩",
        value: [77.5, 71.5, 54.5, 51],
      },
    ],
  },
};
let dataArr1 = [];

dataObj.data.value.map((item) => {
  let datachild = [];
  let newArr = {
    name: item.name,
    type: "line",
    smooth: true,
    symbolSize: 8,
    data: item.value,
    barWidth: "30%",
  };

  dataArr1.push(newArr);
});
// console.log(dataArr);
option = {
  backgroundColor: "#fff",
  color: ["#f0c725", "#16f892"],
  title: {
    left: "center",
    textStyle: {
      color: "#000",
      fontSize: "14",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  legend: {
    x: "center",
    top: "25",
    textStyle: {
      color: "#c1cadf",
      fontSize: 14,
    },
  },
  grid: {
    left: "6%",
    right: "4%",
    top: "25%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    show: true,
    orient: "vertical",
    x: "right",
    y: "center",
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: dataObj.year,
      axisLine: {
        lineStyle: {
          color: "rgba(240,199,37,0.5)",
        },
      },
      axisLabel: {
        interval: 0,
        color: "rgba(0,0,0,0.5)",
        fontSize: "15",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "成绩(平均分)",
      min: 0,
      max: 100,
      nameTextStyle: {
        color: "#c1cadf",
        align: "right",
        lineHeight: 10,
      },
      axisLine: {
        lineStyle: {
          color: "rgba(240,199,37,1)",
        },
      },
      axisLabel: {
        interval: 0,
        color: "#000",
        fontSize: "15",
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: dataArr1,
};
myCharts1.setOption(option);

var myCharts2 = echarts.init(document.getElementById("mains2"));
dataObj = {
  year: ["6.2(星期五)", "6.9(星期五)", "6.16(星期五)", "6.21(星期五)"],
  data: {
    value: [
      {
        name: "刘振洲成绩",
        value: [77, 65.5, 64, 65.5],
      },
    ],
  },
};
let dataArr2 = [];

dataObj.data.value.map((item) => {
  let datachild = [];
  let newArr = {
    name: item.name,
    type: "line",
    smooth: true,
    symbolSize: 8,
    data: item.value,
    barWidth: "30%",
  };

  dataArr2.push(newArr);
});
// console.log(dataArr);
option = {
  backgroundColor: "#fff",
  color: ["#f0c725", "#16f892"],
  title: {
    left: "center",
    textStyle: {
      color: "#000",
      fontSize: "14",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  legend: {
    x: "center",
    top: "25",
    textStyle: {
      color: "#c1cadf",
      fontSize: 14,
    },
  },
  grid: {
    left: "6%",
    right: "4%",
    top: "25%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    show: true,
    orient: "vertical",
    x: "right",
    y: "center",
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: dataObj.year,
      axisLine: {
        lineStyle: {
          color: "rgba(240,199,37,0.5)",
        },
      },
      axisLabel: {
        interval: 0,
        color: "rgba(0,0,0,0.5)",
        fontSize: "15",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "成绩(平均分)",
      min: 0,
      max: 100,
      nameTextStyle: {
        color: "#c1cadf",
        align: "right",
        lineHeight: 10,
      },
      axisLine: {
        lineStyle: {
          color: "rgba(240,199,37,1)",
        },
      },
      axisLabel: {
        interval: 0,
        color: "#000",
        fontSize: "15",
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: dataArr2,
};
myCharts2.setOption(option);

var myCharts3 = echarts.init(document.getElementById("mains3"));
dataObj = {
  year: ["6.2(星期五)", "6.9(星期五)", "6.16(星期五)", "6.21(星期五)"],
  data: {
    value: [
      {
        name: "杨宏承成绩",
        value: [47.25, 48, 54, 51],
      },
    ],
  },
};
let dataArr3 = [];

dataObj.data.value.map((item) => {
  let datachild = [];
  let newArr = {
    name: item.name,
    type: "line",
    smooth: true,
    symbolSize: 8,
    data: item.value,
    barWidth: "30%",
  };

  dataArr3.push(newArr);
});
// console.log(dataArr);
option = {
  backgroundColor: "#fff",
  color: ["#f0c725", "#16f892"],
  title: {
    left: "center",
    textStyle: {
      color: "#000",
      fontSize: "14",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  legend: {
    x: "center",
    top: "25",
    textStyle: {
      color: "#c1cadf",
      fontSize: 14,
    },
  },
  grid: {
    left: "6%",
    right: "4%",
    top: "25%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    show: true,
    orient: "vertical",
    x: "right",
    y: "center",
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: dataObj.year,
      axisLine: {
        lineStyle: {
          color: "rgba(240,199,37,0.5)",
        },
      },
      axisLabel: {
        interval: 0,
        color: "rgba(0,0,0,0.5)",
        fontSize: "15",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "成绩(平均分)",
      min: 0,
      max: 100,
      nameTextStyle: {
        color: "#c1cadf",
        align: "right",
        lineHeight: 10,
      },
      axisLine: {
        lineStyle: {
          color: "rgba(240,199,37,1)",
        },
      },
      axisLabel: {
        interval: 0,
        color: "#000",
        fontSize: "15",
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: dataArr3,
};
myCharts3.setOption(option);
