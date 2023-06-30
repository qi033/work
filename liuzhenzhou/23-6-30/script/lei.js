var ChartsData = echarts.init(document.getElementById("myradar"));
option = {
  title: {
    textStyle: {
      color: "#fff",
      align: "center",
    },
  },
  backgroundColor: "#fff",
  color: [
    "#4C84FF",
    " #13C2C2",
    "#9A47FF",
    "#F04864",
    "#FF884C",
    "#FACC14",
    "#2FC25B",
    "#66B5FF",
  ],
  tooltip: {},
  legend: {
    show: true,
    bottom: 20,
    textStyle: {
      color: "#fff",
    },
  },
  radar: {
    splitLine: {
      lineStyle: {
        color: ["#fff", "#a00"], //一个一个圈的线条颜色
      },
    },
    splitArea: {
      areaStyle: {
        // color: ['#FF884C','#9A47FF']   //分隔区域颜色
      },
    },
    axisLine: {
      lineStyle: {
        color: "orange", //轴颜色
      },
    },
    shape: "polygon", //形状,支持 'polygon' 和 'circle'
    name: {
      textStyle: {
        color: "#fff",
        backgroundColor: "#898989",
        borderRadius: 3,
        padding: [3, 5, 5],
      },
    },
    indicator: [
      {
        name: "第一周",
        max: 100,
      },
      {
        name: "第二周",
        max: 100,
      },
      {
        name: "第三周",
        max: 100,
      },
      {
        name: "第四周",
        max: 100,
      },
    ],
    backgroundColor: "red",
  },
  series: [
    {
      name: "刘佳佳",
      type: "radar",
      // areaStyle: {normal: {}},   //显示面积
      data: [
        {
          value: [83.75, 68.75, 60, 51.5],
        },
      ],
    },
  ],
};
ChartsData.setOption(option);

var ChartsData1 = echarts.init(document.getElementById("myradar1"));
option = {
  title: {
    textStyle: {
      color: "#fff",
      align: "center",
    },
  },
  backgroundColor: "#fff",
  color: [
    "#4C84FF",
    " #13C2C2",
    "#9A47FF",
    "#F04864",
    "#FF884C",
    "#FACC14",
    "#2FC25B",
    "#66B5FF",
  ],
  tooltip: {},
  legend: {
    show: true,
    bottom: 20,
    textStyle: {
      color: "#fff",
    },
  },
  radar: {
    splitLine: {
      lineStyle: {
        color: ["#fff", "#a00"], //一个一个圈的线条颜色
      },
    },
    splitArea: {
      areaStyle: {
        // color: ['#FF884C','#9A47FF']   //分隔区域颜色
      },
    },
    axisLine: {
      lineStyle: {
        color: "orange", //轴颜色
      },
    },
    shape: "polygon", //形状,支持 'polygon' 和 'circle'
    name: {
      textStyle: {
        color: "#fff",
        backgroundColor: "#898989",
        borderRadius: 3,
        padding: [3, 5, 5],
      },
    },
    indicator: [
      {
        name: "第一周",
        max: 100,
      },
      {
        name: "第二周",
        max: 100,
      },
      {
        name: "第三周",
        max: 100,
      },
      {
        name: "第四周",
        max: 100,
      },
    ],
    backgroundColor: "red",
  },
  series: [
    {
      name: "赵宗福",
      type: "radar",
      // areaStyle: {normal: {}},   //显示面积
      data: [
        {
          value: [77.5, 71.5, 54.5, 51],
        },
      ],
    },
  ],
};
ChartsData1.setOption(option);

var ChartsData2 = echarts.init(document.getElementById("myradar2"));
option = {
  title: {
    textStyle: {
      color: "#fff",
      align: "center",
    },
  },
  backgroundColor: "#fff",
  color: [
    "#4C84FF",
    " #13C2C2",
    "#9A47FF",
    "#F04864",
    "#FF884C",
    "#FACC14",
    "#2FC25B",
    "#66B5FF",
  ],
  tooltip: {},
  legend: {
    show: true,
    bottom: 20,
    textStyle: {
      color: "#fff",
    },
  },
  radar: {
    splitLine: {
      lineStyle: {
        color: ["#fff", "#a00"], //一个一个圈的线条颜色
      },
    },
    splitArea: {
      areaStyle: {
        // color: ['#FF884C','#9A47FF']   //分隔区域颜色
      },
    },
    axisLine: {
      lineStyle: {
        color: "orange", //轴颜色
      },
    },
    shape: "polygon", //形状,支持 'polygon' 和 'circle'
    name: {
      textStyle: {
        color: "#fff",
        backgroundColor: "#898989",
        borderRadius: 3,
        padding: [3, 5, 5],
      },
    },
    indicator: [
      {
        name: "第一周",
        max: 100,
      },
      {
        name: "第二周",
        max: 100,
      },
      {
        name: "第三周",
        max: 100,
      },
      {
        name: "第四周",
        max: 100,
      },
    ],
    backgroundColor: "red",
  },
  series: [
    {
      name: "刘振洲",
      type: "radar",
      // areaStyle: {normal: {}},   //显示面积
      data: [
        {
          value: [77, 65.5, 64, 65.5],
        },
      ],
    },
  ],
};
ChartsData2.setOption(option);

var ChartsData3 = echarts.init(document.getElementById("myradar3"));
option = {
  title: {
    textStyle: {
      color: "#fff",
      align: "center",
    },
  },
  backgroundColor: "#fff",
  color: [
    "#4C84FF",
    " #13C2C2",
    "#9A47FF",
    "#F04864",
    "#FF884C",
    "#FACC14",
    "#2FC25B",
    "#66B5FF",
  ],
  tooltip: {},
  legend: {
    show: true,
    bottom: 20,
    textStyle: {
      color: "#fff",
    },
  },
  radar: {
    splitLine: {
      lineStyle: {
        color: ["#fff", "#a00"], //一个一个圈的线条颜色
      },
    },
    splitArea: {
      areaStyle: {
        // color: ['#FF884C','#9A47FF']   //分隔区域颜色
      },
    },
    axisLine: {
      lineStyle: {
        color: "orange", //轴颜色
      },
    },
    shape: "polygon", //形状,支持 'polygon' 和 'circle'
    name: {
      textStyle: {
        color: "#fff",
        backgroundColor: "#898989",
        borderRadius: 3,
        padding: [3, 5, 5],
      },
    },
    indicator: [
      {
        name: "第一周",
        max: 100,
      },
      {
        name: "第二周",
        max: 100,
      },
      {
        name: "第三周",
        max: 100,
      },
      {
        name: "第四周",
        max: 100,
      },
    ],
    backgroundColor: "red",
  },
  series: [
    {
      name: "杨宏承",
      type: "radar",
      // areaStyle: {normal: {}},   //显示面积
      data: [
        {
          value: [47.25, 48, 54, 51],
        },
      ],
    },
  ],
};
ChartsData3.setOption(option);
