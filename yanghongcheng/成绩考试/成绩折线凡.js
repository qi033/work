var chartDom = document.getElementById("mainfan");
var myChart = echarts.init(chartDom);
var option;
let ydata2 = [
    {
       value: 64,
       itemStyle: {
          borderColor: "rgba(251, 73, 123, 1)"
       }
    },
    {
       value: 49,
       itemStyle: {
          borderColor: "rgba(22, 200, 197, 1)"
       }
    },
    {
       value: 65.5,
       itemStyle: {
          borderColor: "rgba(81, 242, 103, 1)"
       }
    },
    {
       value: 61,
       itemStyle: {
          borderColor: "rgba(0, 160, 233, 1)"
       }
    }
 ]
 let imgData2 = [
    "https://s1.328888.xyz/2022/08/04/jwjid.png",
    "https://s1.328888.xyz/2022/08/04/jw03U.png",
    "https://s1.328888.xyz/2022/08/04/jw6XR.png",
    "https://s1.328888.xyz/2022/08/04/jwhuP.png"
 ];
 let mdata2 = ydata2.map((item, index) => ({
    name: "坐标",
    value: item.value + "%",
    coord: [index, item.value],
    symbol: "image://" + imgData2[index],
    symbolSize: [40, 30]
 }));
 option = {
    backgroundColor: 'RGBA(0, 16, 40, 1)',
    title: {
       text: '过去四周成绩起伏',
    },
    xAxis: [
       {
          type: "category",
          boundaryGap: false,
          data: ["第一周", "第二周", "第三周", "第四周"],
          axisLabel: {
             fontFamily: "MicrosoftYaHei",
             fontSize: 12,
             color: "#fff"
          },
          axisLine: {
             show: false
          },
          axisTick: {
             show: false
          }
       }
    ],
    yAxis: [
       {
          show: false
       }
    ],
    series: [
       {
          name: "比例",
          type: "line",
          data: ydata2,
          showAllSymbol: true,
          symbol: "circle",
          symbolSize: 8,
          itemStyle: {
             color: "#fff",
             borderWidth: 3
          },
          markPoint: {
             data: mdata2,
             symbolOffset: [0, "-50%"],
             label: {
                fontFamily: "MicrosoftYaHei",
                fontSize: 12,
                color: "#fff",
                position: [7,7],
             }
          },
          lineStyle: {
             color: "rgba(0, 160, 233, 1)",
             shadowColor: "rgba(0, 160, 233, .8)",
             shadowBlur: 10
          }
       }
    ]
 }
 myChart.setOption(option);
 