var myChart = echarts.init(document.getElementById("main1"));
const dataList = [
  {
    name: "杨宏承",
    data1: [24.5, 36, 38, 37],
    data2: [70, 60, 70, 65],
    data3: [47.25, 48, 54, 51],
  },
  {
    name: "余浩",
    data1: [50, 40, 60, 49],
    data2: [60, 90, 70, 70],
    data3: [55, 65, 65, 59.5],
  },
  {
    name: "刘振州",
    data1: [55, 41, 48, 51],
    data2: [95, 90, 80, 80],
    data3: [75, 65.5, 64, 65.5],
  },
  {
    name: "申卓凡",
    data1: [68, 58, 51, 52],
    data2: [60, 40, 80, 70],
    data3: [64, 49, 65.5, 61],
  },
];

function fillDropdown() {
  const selectElement = document.getElementById("name");
  dataList.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = item.name;
    selectElement.appendChild(option);
  });
  selectElement.addEventListener("change", updateChartData);
}

function updateChartData(event) {
  const index = event.target.selectedIndex;
  const selectedData = dataList[index];

  const option = myChart.getOption();

  option.series[0].data = selectedData.data1;
  option.series[1].data = selectedData.data2;
  option.series[2].data = selectedData.data3;

  data1[0].value = selectedData.data1[0];
  data1[1].value = selectedData.data2[0];

  data2[0].value = selectedData.data1[1];
  data2[1].value = selectedData.data2[1];

  data3[0].value = selectedData.data1[2];
  data3[1].value = selectedData.data2[2];

  data4[0].value = selectedData.data1[3];
  data4[1].value = selectedData.data2[3];

  option5.series[0].data = selectedData.data3;
  
// 雷达图
  option6.series[0].data[0].value = selectedData.data1;
  option6.series[0].data[1].value = selectedData.data2;
  console.log(option6.series[0].data[0].value);
  console.log(option6.series[0].data[1].value);
  myChart.setOption(option);
  // 柱状图
  myChart1.setOption(option1);
  myChart2.setOption(option2);
  myChart3.setOption(option3);
  myChart4.setOption(option4);
  // 折线图
  myChart5.setOption(option5);
  // 雷达图
  myChart6.setOption(option6);
}

fillDropdown();

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["笔试", "机试", "平均分"],
  },
  xAxis: [
    {
      type: "category",
      axisTick: { show: false },
      data: ["第一周", "第二周", "第三周", "第四周"],
    },
    {
      type: "category",
      show: false,
      axisTick: { show: false },
      data: ["第一周", "第二周", "第三周", "第四周"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
    {
      type: "value",
      position: "right",
    },
  ],
  color: ["#5aabff", "#fc8452", "#ea7ccc"],
  series: [
    {
      name: "笔试",
      type: "bar",
      barGap: 0,
      xAxisIndex: 0,
      // data: [24.5, 36, 38, 37],
      data: [100, 100, 100, 100],
      itemStyle: {
        // opacity:0.5
      },
    },
    {
      name: "机试",
      type: "bar",
      xAxisIndex: 0,
      // data: [70, 60, 70, 65],
      data: [100, 100, 100, 100],
      itemStyle: {
        // opacity:0.5
      },
    },
    {
      name: "平均分",
      type: "bar",
      xAxisIndex: 0,
      // data: [47.25, 48, 54, 51],
      data: [100, 100, 100, 100],
      itemStyle: {
        // opacity:0.5
      },
    },

    {
      name: "笔试",
      type: "bar",
      barGap: 0,
      xAxisIndex: 1,
      yAxisIndex: 1,
      //   data: [110,110,110,110]
    },
    {
      name: "机试",
      type: "bar",
      xAxisIndex: 1,
      yAxisIndex: 1,
      //   data: [110,110,110,110]
    },
    {
      name: "平均分",
      type: "bar",
      xAxisIndex: 1,
      yAxisIndex: 1,
      //   data: [110,110,110,110]
    },
  ],
};
myChart.setOption(option);
