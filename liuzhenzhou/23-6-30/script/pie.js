// let stu = students[dataIndex].result[dataIndex].subject;
// console.log(stu);
var myChart1 = echarts.init(document.getElementById("main1"));
var myChart2 = echarts.init(document.getElementById("main2"));
var myChart3 = echarts.init(document.getElementById("main3"));
var myChart4 = echarts.init(document.getElementById("main4"));
var myChart5 = echarts.init(document.getElementById("main5"));
var myChart6 = echarts.init(document.getElementById("main6"));
var myChart7 = echarts.init(document.getElementById("main7"));
var myChart8 = echarts.init(document.getElementById("main8"));
var myChart9 = echarts.init(document.getElementById("main9"));
var myChart10 = echarts.init(document.getElementById("main10"));
var myChart11 = echarts.init(document.getElementById("main11"));
var myChart12 = echarts.init(document.getElementById("main12"));
var myChart13 = echarts.init(document.getElementById("main13"));
var myChart14 = echarts.init(document.getElementById("main14"));
var myChart15 = echarts.init(document.getElementById("main15"));
var myChart16 = echarts.init(document.getElementById("main16"));
option = {
  title: {
    text: "6.2(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 72.5, name: "笔试" },
        { value: 95, name: "机试" },
      ],
    },
  ],
};
option && myChart1.setOption(option);
option = {
  title: {
    text: "6.9(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 47.5, name: "笔试" },
        { value: 90, name: "机试" },
      ],
    },
  ],
};
option && myChart2.setOption(option);
option = {
  title: {
    text: "6.16(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 50, name: "笔试" },
        { value: 70, name: "机试" },
      ],
    },
  ],
};
option && myChart3.setOption(option);
option = {
  title: {
    text: "6.21(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 53, name: "笔试" },
        { value: 50, name: "机试" },
      ],
    },
  ],
};
myChart4.setOption(option);

option = {
  title: {
    text: "6.2(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 60, name: "笔试" },
        { value: 95, name: "机试" },
      ],
    },
  ],
};
myChart5.setOption(option);
option = {
  title: {
    text: "6.9(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 53, name: "笔试" },
        { value: 90, name: "机试" },
      ],
    },
  ],
};
option && myChart6.setOption(option);
option = {
  title: {
    text: "6.16(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 49, name: "笔试" },
        { value: 60, name: "机试" },
      ],
    },
  ],
};
option && myChart7.setOption(option);
option = {
  title: {
    text: "6.21(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 42, name: "笔试" },
        { value: 60, name: "机试" },
      ],
    },
  ],
};
option && myChart8.setOption(option);

option = {
  title: {
    text: "6.2(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 55, name: "笔试" },
        { value: 95, name: "机试" },
      ],
    },
  ],
};
option && myChart9.setOption(option);
option = {
  title: {
    text: "6.9(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 41, name: "笔试" },
        { value: 90, name: "机试" },
      ],
    },
  ],
};
option && myChart10.setOption(option);
option = {
  title: {
    text: "6.16(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 48, name: "笔试" },
        { value: 80, name: "机试" },
      ],
    },
  ],
};
option && myChart11.setOption(option);
option = {
  title: {
    text: "6.21(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 51, name: "笔试" },
        { value: 80, name: "机试" },
      ],
    },
  ],
};
option && myChart12.setOption(option);

option = {
  title: {
    text: "6.2(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 24.5, name: "笔试" },
        { value: 70, name: "机试" },
      ],
    },
  ],
};
option && myChart13.setOption(option);
option = {
  title: {
    text: "6.9(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 36, name: "笔试" },
        { value: 60, name: "机试" },
      ],
    },
  ],
};
option && myChart14.setOption(option);
option = {
  title: {
    text: "6.16(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 38, name: "笔试" },
        { value: 70, name: "机试" },
      ],
    },
  ],
};
option && myChart15.setOption(option);
option = {
  title: {
    text: "6.21(星期五)",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["笔试", "机试"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"],
        option: {
          funnel: {
            x: "25%",
            width: "50%",
            funnelAlign: "left",
            max: 1548,
          },
        },
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 37, name: "笔试" },
        { value: 65, name: "机试" },
      ],
    },
  ],
};
option && myChart16.setOption(option);
