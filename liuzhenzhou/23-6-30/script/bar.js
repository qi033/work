let dataIndex = 0;
var option;
layui.use("table", function () {
  var $ = layui.$;
  showList();
  initEcharts(dataIndex);
  function showList() {
    let html = "";
    students.forEach((item, index) => {
      html += `<button class="layui-btn layui-btn-lg layui-btn-radius layui-btn-normal" dataBtnIndex = ${index}>${item.name}</button>`;
    });
    $("#studentBtn").html(html);
  }
  $("button").click(function () {
    dataIndex = $(this).attr("dataBtnIndex");
    initEcharts(dataIndex);
  });
  function initEcharts(dataIndex = 0) {
    var myChart = echarts.init(document.getElementById("main"));
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      legend: {
        data: ["机试", "笔试"],
        top: "6%",
      },
      title: {
        text: `${students[dataIndex].name}的成绩柱状图`,
        left: "center",
      },
      xAxis: { type: "category", data: xData(dataIndex) },
      yAxis: [
        {
          type: "value",
          name: "成绩",
          min: 0,
          max: 100,
          interval: 10,
          axisLabel: {
            formatter: "{value} 分",
          },
        },
        {
          type: "value",
          name: "平均分",
          min: 0,
          max: 100,
          interval: 25,
          axisLabel: {
            formatter: "{value} 分",
          },
        },
      ],
      series: getScore(dataIndex),
    };
    option && myChart.setOption(option);
  }
  //获取X轴的数据
  function xData(dataIndex) {
    let res = students[dataIndex].result.map((item, index) => {
      return item.date;
    });
    return res;
  }
  //获取成绩
  function getScore(dataIndex) {
    let jishiScore = students[dataIndex].result.map((item) => {
      return item.subject.filter((item) => {
        return item.name == "机试";
      })[0].score;
    });
    let bishiScore = students[dataIndex].result.map((item) => {
      return item.subject.filter((item) => {
        return item.name == "笔试";
      })[0].score;
    });
    let pingjunScore = students[dataIndex].result.map((item) => {
      return item.subject.filter((item) => {
        return item.name == "平均分";
      })[0].score;
    });
    return [
      {
        label: {
          show: true,
          position: "top",
        },
        data: jishiScore,
        name: "机试",
        type: "bar",
        itemStyle: {
          normal: {
            color: function (item) {
              var indexColor = item.value;
              if (indexColor <= 50) {
                return "red";
              } else {
                return "blue";
              }
            },
          },
        },
      },
      {
        label: {
          show: true,
          position: "top",
        },
        data: bishiScore,
        name: "笔试",
        type: "bar",
        itemStyle: {
          normal: {
            color: function (item) {
              var indexColor = item.value;
              if (indexColor <= 50) {
                return "red";
              } else {
                return "green";
              }
            },
          },
        },
      },
      {
        name: "平均分",
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + " 分";
          },
        },
        data: pingjunScore,
      },
    ];
  }
});
