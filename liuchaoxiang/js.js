var ans = echarts.init(document.getElementById("noe"));
var option = {
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
      name: "笔试",
      type: "bar",
      barWidth: "12",
      data: [
        {
          value: 55,
        },
        {
          value: 41,
        },
        {
          value: 48,
        },
        {
          value: 51,
        },
      ],
    },
    {
      name: "机试",
      type: "bar",
      barWidth: "12",
      data: [
        {
          value: 95,
        },
        {
          value: 90,
        },
        {
          value: 80,
        },
        {
          value: 80,
        },
      ],
    },
    {
      name: "平均分",
      type: "bar",
      barWidth: "12",
      data: [
        {
          value: 75,
        },
        {
          value: 65.5,
        },
        {
          value: 64,
        },
        {
          value: 65.5,
        },
      ],
    },
  ],
};
ans.setOption(option);
document.getElementById("liu").onclick = function () {
  var option = {
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
        name: "笔试",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 55,
          },
          {
            value: 41,
          },
          {
            value: 48,
          },
          {
            value: 51,
          },
        ],
      },
      {
        name: "机试",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 95,
          },
          {
            value: 90,
          },
          {
            value: 80,
          },
          {
            value: 80,
          },
        ],
      },
      {
        name: "平均分",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 75,
          },
          {
            value: 65.5,
          },
          {
            value: 64,
          },
          {
            value: 65.5,
          },
        ],
      },
    ],
  };
  ans.setOption(option);
  var two = echarts.init(document.getElementById("two"));
  var two1 = echarts.init(document.getElementById("two1"));
  var two2 = echarts.init(document.getElementById("two2"));
  var two3 = echarts.init(document.getElementById("two3"));
    var dataList = [
      { value: 55, name: '笔试' },
      { value: 95, name: '机试' },
    
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
    var options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two.setOption(options);
  var dataList = [
      { value: 41, name: '笔试' },
      { value: 90, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
  options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two1.setOption(options);
  var dataList = [
      { value: 48, name: '笔试' },
      { value: 80, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
    options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two2.setOption(options);
  var dataList = [
      { value: 51, name: '笔试' },
      { value: 80, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
  options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
             if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two3.setOption(options);
  var three = echarts.init(document.getElementById("three"));
  var option = {
    xAxis: {
      data: ["第一周", "第二周", "第三周", "第四周"],
    },
    yAxis: {},
    series: [
      {
        data: [75,65.5,64,65.5],
        type: "line",
        label: {
          show: true,
          position: "bottom",
          textStyle: {
            fontSize: 15,
          },
        },
      },
    ],
  };
  three.setOption(option);
  var four = echarts.init(document.getElementById("four"));
  var lengData = [];
  var indicators = [
    // 上
    {
      text: "第一周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 0,
    },
    // 左
    {
      text: "第二周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 1,
    },
    // 下
    {
      text: "第三周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 2,
    },
    // 右
    {
      text: "第四周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 3,
    },
  ];
  option = {
    legend: {
      data: lengData,
      itemGap: 15,
      itemWidth: 5, // 设置宽度
      itemHeight: 5,
      bottom: 80,
      textStyle: {
        color: "#595959",
      },
    },
    radar: [
      {
        name: {
          formatter: function (value, indicator) {
            return "{title|" + value + "}";
          },
          color: "#fff",
          rich: {
            title: {
              fontSize: 15,
              borderRadius: 3,
              padding: [6, 10],
            },
          },
        },
        // 坐标轴线
        axisLine: {
          lineStyle: {
            color: "#b3ddfb",
          },
        },
        // 刻度
        axisTick: {
          show: false,
          length: 6,
        },
        // 刻度标签
        axisLabel: {
          show: true,
          formatter: function (param) {
            return param;
          },
          color: "#c8c8c8",
        },
        // 分割线
        splitLine: {
          lineStyle: {
            color: "#c8c8c8",
          },
        },
        // 分割区域
        splitArea: {
          areaStyle: {
            color: ["#fefefe", "#f6f8fc"],
          },
        },
        indicator: indicators,
        center: ["50%", "50%"],
        radius: 150,
      },
    ],
    series: [],
    backgroundColor: "#fff",
  };
  // 上左下右
  var data = [[75,65.5,64,65.5]];
  var areaStyle = ["#fff3da", "#d6cdcd", "#bdb9c6", "#c6c8ba"];
  var lineStyle = ["#ffc93c", "#373b9a", "#6876b2", "#8bb572"];
  var itemStyle = ["#ffc63a", "#383b96", "#4d70cc", "#7ecf69"];
  var datas = [];
  for (var i = 0; i < data.length; i++) {
    datas.push({
      value: data[i],
      name: lengData[i],
      areaStyle: {
        color: areaStyle[i],
      },
      lineStyle: {
        color: lineStyle[i],
      },
      itemStyle: {
        color: itemStyle[i],
        borderType: "solid",
      },
    });
  }
  option.series.push({
    type: "radar",
    label: {
      normal: {
        show: true,
        position: "top",
        formatter: function (params) {
          return params.value;
        },
      },
    },
    areaStyle: {},
    data: datas,
  });
  four.setOption(option);
};
document.getElementById("zheng").onclick = function () {
  var option = {
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
        name: "笔试",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 58,
          },
          {
            value: 41,
          },
          {
            value: 85,
          },
          {
            value: 27.5,
          },
        ],
      },
      {
        name: "机试",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 90,
          },
          {
            value: 50,
          },
          {
            value: 60,
          },
          {
            value: 50,
          },
        ],
      },
      {
        name: "平均分",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 74,
          },
          {
            value: 45.5,
          },
          {
            value: 72.5,
          },
          {
            value: 38.75,
          },
        ],
      },
    ],
  };
  ans.setOption(option);
  var two = echarts.init(document.getElementById("two"));
  var two1 = echarts.init(document.getElementById("two1"));
  var two2 = echarts.init(document.getElementById("two2"));
  var two3 = echarts.init(document.getElementById("two3"));
    var dataList = [
      { value: 58, name: '笔试' },
      { value: 90, name: '机试' },
    
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
    var options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two.setOption(options);
  var dataList = [
      { value: 41, name: '笔试' },
      { value: 50, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
  options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two1.setOption(options);
  var dataList = [
      { value: 85, name: '笔试' },
      { value: 60, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
    options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two2.setOption(options);
  var dataList = [
      { value: 27.5, name: '笔试' },
      { value: 50, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
  options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
             if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two3.setOption(options);
  var three = echarts.init(document.getElementById("three"));
  var option = {
    xAxis: {
      data: ["第一周", "第二周", "第三周", "第四周"],
    },
    yAxis: {},
    series: [
      {
        data: [74,45.5,72.5,38.75],
        type: "line",
        label: {
          show: true,
          position: "bottom",
          textStyle: {
            fontSize: 15,
          },
        },
      },
    ],
  };
  three.setOption(option);
  var four = echarts.init(document.getElementById("four"));
  var lengData = [];
  var indicators = [
    // 上
    {
      text: "第一周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 0,
    },
    // 左
    {
      text: "第二周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 1,
    },
    // 下
    {
      text: "第三周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 2,
    },
    // 右
    {
      text: "第四周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 3,
    },
  ];
  option = {
    legend: {
      data: lengData,
      itemGap: 15,
      itemWidth: 5, // 设置宽度
      itemHeight: 5,
      bottom: 80,
      textStyle: {
        color: "#595959",
      },
    },
    radar: [
      {
        name: {
          formatter: function (value, indicator) {
            return "{title|" + value + "}";
          },
          color: "#fff",
          rich: {
            title: {
              fontSize: 15,
              borderRadius: 3,
              padding: [6, 10],
            },
          },
        },
        // 坐标轴线
        axisLine: {
          lineStyle: {
            color: "#b3ddfb",
          },
        },
        // 刻度
        axisTick: {
          show: false,
          length: 6,
        },
        // 刻度标签
        axisLabel: {
          show: true,
          formatter: function (param) {
            return param;
          },
          color: "#c8c8c8",
        },
        // 分割线
        splitLine: {
          lineStyle: {
            color: "#c8c8c8",
          },
        },
        // 分割区域
        splitArea: {
          areaStyle: {
            color: ["#fefefe", "#f6f8fc"],
          },
        },
        indicator: indicators,
        center: ["50%", "50%"],
        radius: 150,
      },
    ],
    series: [],
    backgroundColor: "#fff",
  };
  // 上左下右
  var data = [[74,45.5,72.5,38.75]];
  var areaStyle = ["#fff3da", "#d6cdcd", "#bdb9c6", "#c6c8ba"];
  var lineStyle = ["#ffc93c", "#373b9a", "#6876b2", "#8bb572"];
  var itemStyle = ["#ffc63a", "#383b96", "#4d70cc", "#7ecf69"];
  var datas = [];
  for (var i = 0; i < data.length; i++) {
    datas.push({
      value: data[i],
      name: lengData[i],
      areaStyle: {
        color: areaStyle[i],
      },
      lineStyle: {
        color: lineStyle[i],
      },
      itemStyle: {
        color: itemStyle[i],
        borderType: "solid",
      },
    });
  }
  option.series.push({
    type: "radar",
    label: {
      normal: {
        show: true,
        position: "top",
        formatter: function (params) {
          return params.value;
        },
      },
    },
    areaStyle: {},
    data: datas,
  });
  four.setOption(option);
};
document.getElementById("zhao").onclick = function () {
  var option = {
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
        name: "笔试",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 60,
          },
          {
            value: 53,
          },
          {
            value: 49,
          },
          {
            value: 42,
          },
        ],
      },
      {
        name: "机试",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 95,
          },
          {
            value: 90,
          },
          {
            value: 60,
          },
          {
            value: 60,
          },
        ],
      },
      {
        name: "平均分",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 75.5,
          },
          {
            value: 71.5,
          },
          {
            value: 54.5,
          },
          {
            value: 51,
          },
        ],
      },
    ],
  };
  ans.setOption(option);
  var two = echarts.init(document.getElementById("two"));
  var two1 = echarts.init(document.getElementById("two1"));
  var two2 = echarts.init(document.getElementById("two2"));
  var two3 = echarts.init(document.getElementById("two3"));
    var dataList = [
      { value: 60, name: '笔试' },
      { value: 95, name: '机试' },
    
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
    var options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two.setOption(options);
  var dataList = [
      { value: 53, name: '笔试' },
      { value: 90, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
  options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two1.setOption(options);
  var dataList = [
      { value: 49, name: '笔试' },
      { value: 60, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
    options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two2.setOption(options);
  var dataList = [
      { value: 42, name: '笔试' },
      { value: 60, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
  options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
             if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two3.setOption(options);
  var three = echarts.init(document.getElementById("three"));
  var option = {
    xAxis: {
      data: ["第一周", "第二周", "第三周", "第四周"],
    },
    yAxis: {},
    series: [
      {
        data: [77.5, 71.5, 54.5, 51],
        type: "line",
        label: {
          show: true,
          position: "bottom",
          textStyle: {
            fontSize: 15,
          },
        },
      },
    ],
  };
  three.setOption(option);
  var four = echarts.init(document.getElementById("four"));
  var lengData = [];
  var indicators = [
    // 上
    {
      text: "第一周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 0,
    },
    // 左
    {
      text: "第二周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 1,
    },
    // 下
    {
      text: "第三周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 2,
    },
    // 右
    {
      text: "第四周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 3,
    },
  ];
  option = {
    legend: {
      data: lengData,
      itemGap: 15,
      itemWidth: 5, // 设置宽度
      itemHeight: 5,
      bottom: 80,
      textStyle: {
        color: "#595959",
      },
    },
    radar: [
      {
        name: {
          formatter: function (value, indicator) {
            return "{title|" + value + "}";
          },
          color: "#fff",
          rich: {
            title: {
              fontSize: 15,
              borderRadius: 3,
              padding: [6, 10],
            },
          },
        },
        // 坐标轴线
        axisLine: {
          lineStyle: {
            color: "#b3ddfb",
          },
        },
        // 刻度
        axisTick: {
          show: false,
          length: 6,
        },
        // 刻度标签
        axisLabel: {
          show: true,
          formatter: function (param) {
            return param;
          },
          color: "#c8c8c8",
        },
        // 分割线
        splitLine: {
          lineStyle: {
            color: "#c8c8c8",
          },
        },
        // 分割区域
        splitArea: {
          areaStyle: {
            color: ["#fefefe", "#f6f8fc"],
          },
        },
        indicator: indicators,
        center: ["50%", "50%"],
        radius: 150,
      },
    ],
    series: [],
    backgroundColor: "#fff",
  };
  // 上左下右
  var data = [[77.5, 71.5, 54.5, 51]];
  var areaStyle = ["#fff3da", "#d6cdcd", "#bdb9c6", "#c6c8ba"];
  var lineStyle = ["#ffc93c", "#373b9a", "#6876b2", "#8bb572"];
  var itemStyle = ["#ffc63a", "#383b96", "#4d70cc", "#7ecf69"];
  var datas = [];
  for (var i = 0; i < data.length; i++) {
    datas.push({
      value: data[i],
      name: lengData[i],
      areaStyle: {
        color: areaStyle[i],
      },
      lineStyle: {
        color: lineStyle[i],
      },
      itemStyle: {
        color: itemStyle[i],
        borderType: "solid",
      },
    });
  }
  option.series.push({
    type: "radar",
    label: {
      normal: {
        show: true,
        position: "top",
        formatter: function (params) {
          return params.value;
        },
      },
    },
    areaStyle: {},
    data: datas,
  });
  four.setOption(option);
};
document.getElementById("yu").onclick = function () {
  var option = {
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
        name: "笔试",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 50,
          },
          {
            value: 40,
          },
          {
            value: 60,
          },
          {
            value: 49,
          },
        ],
      },
      {
        name: "机试",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 60,
          },
          {
            value: 90,
          },
          {
            value: 70,
          },
          {
            value: 70,
          },
        ],
      },
      {
        name: "平均分",
        type: "bar",
        barWidth: "12",
        data: [
          {
            value: 40,
          },
          {
            value: 65,
          },
          {
            value: 65,
          },
          {
            value: 59.5,
          },
        ],
      },
    ],
  };
  ans.setOption(option);
  var two = echarts.init(document.getElementById("two"));
  var two1 = echarts.init(document.getElementById("two1"));
  var two2 = echarts.init(document.getElementById("two2"));
  var two3 = echarts.init(document.getElementById("two3"));
    var dataList = [
      { value: 50, name: '笔试' },
      { value: 60, name: '机试' },
    
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
    var options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two.setOption(options);
  var dataList = [
      { value: 40, name: '笔试' },
      { value: 90, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
  options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two1.setOption(options);
  var dataList = [
      { value: 60, name: '笔试' },
      { value: 70, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
    options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
              if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two2.setOption(options);
  var dataList = [
      { value: 49, name: '笔试' },
      { value: 70, name: '机试' },
    ];
    var colorList = ['#4D88FE', '#50CCCB'];
  options = {
      legend: {
        icon: 'circle',
        data: dataList.map((item) => item.name),
        bottom: 0,
        itemGap: 20,
        itemWidth: 8,
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          label: {
            fontWeight:'bold',
            rich: {
              rich_blue: {
                color: '#4D88FE',
              },
              rich_orange: {
                color: '#FFBF3C',
              },
              rich_green: {
                color: '#50CCCB',
              },
            },
            formatter: function (params) {
             if (params.name === '笔试') {
                return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
              }else if(params.name === '机试'){
                 return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
              }
            },
          },
          labelLine: {
            length: 10,
            length2: 60,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
          },
          data: dataList,
        },
      ],
    };
  two3.setOption(options);
  var three = echarts.init(document.getElementById("three"));
  var option = {
    xAxis: {
      data: ["第一周", "第二周", "第三周", "第四周"],
    },
    yAxis: {},
    series: [
      {
        data: [55,65,65,59.5],
        type: "line",
        label: {
          show: true,
          position: "bottom",
          textStyle: {
            fontSize: 15,
          },
        },
      },
    ],
  };
  three.setOption(option);
  var four = echarts.init(document.getElementById("four"));
  var lengData = [];
  var indicators = [
    // 上
    {
      text: "第一周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 0,
    },
    // 左
    {
      text: "第二周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 1,
    },
    // 下
    {
      text: "第三周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 2,
    },
    // 右
    {
      text: "第四周",
      max: 100,
      min: 0,
      color: "#515151",
      index: 3,
    },
  ];
  option = {
    legend: {
      data: lengData,
      itemGap: 15,
      itemWidth: 5, // 设置宽度
      itemHeight: 5,
      bottom: 80,
      textStyle: {
        color: "#595959",
      },
    },
    radar: [
      {
        name: {
          formatter: function (value, indicator) {
            return "{title|" + value + "}";
          },
          color: "#fff",
          rich: {
            title: {
              fontSize: 15,
              borderRadius: 3,
              padding: [6, 10],
            },
          },
        },
        // 坐标轴线
        axisLine: {
          lineStyle: {
            color: "#b3ddfb",
          },
        },
        // 刻度
        axisTick: {
          show: false,
          length: 6,
        },
        // 刻度标签
        axisLabel: {
          show: true,
          formatter: function (param) {
            return param;
          },
          color: "#c8c8c8",
        },
        // 分割线
        splitLine: {
          lineStyle: {
            color: "#c8c8c8",
          },
        },
        // 分割区域
        splitArea: {
          areaStyle: {
            color: ["#fefefe", "#f6f8fc"],
          },
        },
        indicator: indicators,
        center: ["50%", "50%"],
        radius: 150,
      },
    ],
    series: [],
    backgroundColor: "#fff",
  };
  // 上左下右
  var data = [[55,65,65,59.5]];
  var areaStyle = ["#fff3da", "#d6cdcd", "#bdb9c6", "#c6c8ba"];
  var lineStyle = ["#ffc93c", "#373b9a", "#6876b2", "#8bb572"];
  var itemStyle = ["#ffc63a", "#383b96", "#4d70cc", "#7ecf69"];
  var datas = [];
  for (var i = 0; i < data.length; i++) {
    datas.push({
      value: data[i],
      name: lengData[i],
      areaStyle: {
        color: areaStyle[i],
      },
      lineStyle: {
        color: lineStyle[i],
      },
      itemStyle: {
        color: itemStyle[i],
        borderType: "solid",
      },
    });
  }
  option.series.push({
    type: "radar",
    label: {
      normal: {
        show: true,
        position: "top",
        formatter: function (params) {
          return params.value;
        },
      },
    },
    areaStyle: {},
    data: datas,
  });
  four.setOption(option);
};
var two = echarts.init(document.getElementById("two"));
var two1 = echarts.init(document.getElementById("two1"));
var two2 = echarts.init(document.getElementById("two2"));
var two3 = echarts.init(document.getElementById("two3"));
  var dataList = [
    { value: 55, name: '笔试' },
    { value: 95, name: '机试' },
  
  ];
  var colorList = ['#4D88FE', '#50CCCB'];
  var options = {
    legend: {
      icon: 'circle',
      data: dataList.map((item) => item.name),
      bottom: 0,
      itemGap: 20,
      itemWidth: 8,
    },
    series: [
      {
        type: 'pie',
        radius: '40%',
        center: ['50%', '50%'],
        label: {
          fontWeight:'bold',
          rich: {
            rich_blue: {
              color: '#4D88FE',
            },
            rich_orange: {
              color: '#FFBF3C',
            },
            rich_green: {
              color: '#50CCCB',
            },
          },
          formatter: function (params) {
            if (params.name === '笔试') {
              return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
            }else if(params.name === '机试'){
               return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
            }
          },
        },
        labelLine: {
          length: 10,
          length2: 60,
        },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 2,
            color: function (params) {
              return colorList[params.dataIndex];
            },
          },
        },
        data: dataList,
      },
    ],
  };
two.setOption(options);
var dataList = [
    { value: 41, name: '笔试' },
    { value: 90, name: '机试' },
  ];
  var colorList = ['#4D88FE', '#50CCCB'];
options = {
    legend: {
      icon: 'circle',
      data: dataList.map((item) => item.name),
      bottom: 0,
      itemGap: 20,
      itemWidth: 8,
    },
    series: [
      {
        type: 'pie',
        radius: '40%',
        center: ['50%', '50%'],
        label: {
          fontWeight:'bold',
          rich: {
            rich_blue: {
              color: '#4D88FE',
            },
            rich_orange: {
              color: '#FFBF3C',
            },
            rich_green: {
              color: '#50CCCB',
            },
          },
          formatter: function (params) {
            if (params.name === '笔试') {
              return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
            }else if(params.name === '机试'){
               return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
            }
          },
        },
        labelLine: {
          length: 10,
          length2: 60,
        },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 2,
            color: function (params) {
              return colorList[params.dataIndex];
            },
          },
        },
        data: dataList,
      },
    ],
  };
two1.setOption(options);
var dataList = [
    { value: 48, name: '笔试' },
    { value: 80, name: '机试' },
  ];
  var colorList = ['#4D88FE', '#50CCCB'];
  options = {
    legend: {
      icon: 'circle',
      data: dataList.map((item) => item.name),
      bottom: 0,
      itemGap: 20,
      itemWidth: 8,
    },
    series: [
      {
        type: 'pie',
        radius: '40%',
        center: ['50%', '50%'],
        label: {
          fontWeight:'bold',
          rich: {
            rich_blue: {
              color: '#4D88FE',
            },
            rich_orange: {
              color: '#FFBF3C',
            },
            rich_green: {
              color: '#50CCCB',
            },
          },
          formatter: function (params) {
            if (params.name === '笔试') {
              return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
            }else if(params.name === '机试'){
               return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
            }
          },
        },
        labelLine: {
          length: 10,
          length2: 60,
        },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 2,
            color: function (params) {
              return colorList[params.dataIndex];
            },
          },
        },
        data: dataList,
      },
    ],
  };
two2.setOption(options);
var dataList = [
    { value: 51, name: '笔试' },
    { value: 80, name: '机试' },
  ];
  var colorList = ['#4D88FE', '#50CCCB'];
options = {
    legend: {
      icon: 'circle',
      data: dataList.map((item) => item.name),
      bottom: 0,
      itemGap: 20,
      itemWidth: 8,
    },
    series: [
      {
        type: 'pie',
        radius: '40%',
        center: ['50%', '50%'],
        label: {
          fontWeight:'bold',
          rich: {
            rich_blue: {
              color: '#4D88FE',
            },
            rich_orange: {
              color: '#FFBF3C',
            },
            rich_green: {
              color: '#50CCCB',
            },
          },
          formatter: function (params) {
           if (params.name === '笔试') {
              return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
            }else if(params.name === '机试'){
               return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
            }
          },
        },
        labelLine: {
          length: 10,
          length2: 60,
        },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 2,
            color: function (params) {
              return colorList[params.dataIndex];
            },
          },
        },
        data: dataList,
      },
    ],
  };
two3.setOption(options);
var three = echarts.init(document.getElementById("three"));
var option = {
  xAxis: {
    data: ["第一周", "第二周", "第三周", "第四周"],
  },
  yAxis: {},
  series: [
    {
      data: [75, 71.5, 64, 65.5],
      type: "line",
      label: {
        show: true,
        position: "bottom",
        textStyle: {
          fontSize: 15,
        },
      },
    },
  ],
};
three.setOption(option);
var four = echarts.init(document.getElementById("four"));
var lengData = [];
var indicators = [
  // 上
  {
    text: "第一周",
    max: 100,
    min: 0,
    color: "#515151",
    index: 0,
  },
  // 左
  {
    text: "第二周",
    max: 100,
    min: 0,
    color: "#515151",
    index: 1,
  },
  // 下
  {
    text: "第三周",
    max: 100,
    min: 0,
    color: "#515151",
    index: 2,
  },
  // 右
  {
    text: "第四周",
    max: 100,
    min: 0,
    color: "#515151",
    index: 3,
  },
];
option = {
  legend: {
    data: lengData,
    itemGap: 15,
    itemWidth: 5, // 设置宽度
    itemHeight: 5,
    bottom: 80,
    textStyle: {
      color: "#595959",
    },
  },
  radar: [
    {
      name: {
        formatter: function (value, indicator) {
          return "{title|" + value + "}";
        },
        color: "#fff",
        rich: {
          title: {
            fontSize: 15,
            borderRadius: 3,
            padding: [6, 10],
          },
        },
      },
      // 坐标轴线
      axisLine: {
        lineStyle: {
          color: "#b3ddfb",
        },
      },
      // 刻度
      axisTick: {
        show: false,
        length: 6,
      },
      // 刻度标签
      axisLabel: {
        show: true,
        formatter: function (param) {
          return param;
        },
        color: "#c8c8c8",
      },
      // 分割线
      splitLine: {
        lineStyle: {
          color: "#c8c8c8",
        },
      },
      // 分割区域
      splitArea: {
        areaStyle: {
          color: ["#fefefe", "#f6f8fc"],
        },
      },
      indicator: indicators,
      center: ["50%", "50%"],
      radius: 150,
    },
  ],
  series: [],
  backgroundColor: "#fff",
};
// 上左下右
var data = [[75, 65.5, 64, 65.5]];
var areaStyle = ["#fff3da", "#d6cdcd", "#bdb9c6", "#c6c8ba"];
var lineStyle = ["#ffc93c", "#373b9a", "#6876b2", "#8bb572"];
var itemStyle = ["#ffc63a", "#383b96", "#4d70cc", "#7ecf69"];
var datas = [];
for (var i = 0; i < data.length; i++) {
  datas.push({
    value: data[i],
    name: lengData[i],
    areaStyle: {
      color: areaStyle[i],
    },
    lineStyle: {
      color: lineStyle[i],
    },
    itemStyle: {
      color: itemStyle[i],
      borderType: "solid",
    },
  });
}
option.series.push({
  type: "radar",
  label: {
    normal: {
      show: true,
      position: "top",
      formatter: function (params) {
        return params.value;
      },
    },
  },
  areaStyle: {},
  data: datas,
});
four.setOption(option);
var five = echarts.init(document.getElementById("five"));
var years = ['第一周','第二周','第三周','第四周'];
var jdData =[
    ["刘佳佳","赵宗福","刘振周","杨浩冰","郑泽元","刘超祥","赵帅博","甘天鸽","杨洪承","余浩","苏鹏杰","申卓凡",],
    ["刘佳佳","赵宗福","刘振周","杨浩冰","郑泽元","刘超祥","赵帅博","甘天鸽","杨洪承","余浩","苏鹏杰","申卓凡",],
    ["刘佳佳","赵宗福","刘振周","杨浩冰","郑泽元","刘超祥","赵帅博","甘天鸽","杨洪承","余浩","苏鹏杰","申卓凡",],
    ["刘佳佳","赵宗福","刘振周","杨浩冰","郑泽元","刘超祥","赵帅博","甘天鸽","杨洪承","余浩","苏鹏杰","申卓凡",]]
var data =[
    [83.75,77.5,75,67.5,74,42,64.75,36.5,47.25,55,61,64],
    [68.75,71.5,65.5,58,45.5,60,54,35,48,65,45,49],
    [60,54.5,64,53,72.5,60.25,55.75,62.5,54,65,60,65.5],
    [51.5,51,65.5,56,38.75,44.25,48,43.5,51,59.5,61,61],
];

option = {
                  
    baseOption: {
         timeline: {
        data: years,
        axisType: 'category',
        autoPlay: true,
        playInterval: 5000,
        left: '10%',
        right: '10%',
        bottom: '0%',
        width: '80%',
        label: {
            normal: {
                textStyle: {
                    
                    color: '#ff8800',
                }
            },
            emphasis: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        symbolSize: 10,
        lineStyle: {
            color: '#555'
        },
        checkpointStyle: {
            borderColor: '#777',
            borderWidth: 2,
            borderHeight:1,
        },
        controlStyle: {
            showNextBtn: true,
            showPrevBtn: true,
            normal: {
                color: '#ff8800',
                borderColor: '#ff8800'
            },
            emphasis: {
                color: '#aaa',
                borderColor: '#aaa'
            }
        },

    },
        title: {
            text: '',
            right: '2%',
            bottom: '8%',
            textStyle: {
                fontSize: 28,
                color: '#666'
            }
        },
        tooltip: {
            'trigger': 'axis'
        },
        calculable: true,
        grid: {
            left: '8%',
            right: '2%',
            bottom: '6%',
            top:'0%',
            containLabel: true
        },
        label:{
            normal:{
                textStyle:{
                    color:'#fff'
                }
            }
        },
        yAxis: [{
              offset: '37',
            'type': 'category',
            data: '',
            nameTextStyle:{
                color:'#fff'
            },
            axisLabel:{
                //rotate:45,
                textStyle:{
                    fontSize:12,
                    color:'#333',
                },
                interval: 0
            },
            axisLine:{

                lineStyle:{
                    color:'#333'
                },
            },
            splitLine:{
                show:false,
                lineStyle:{
                    color:'#333'
                }
            },

        }],
        xAxis: [{
            'type': 'value',
            'name': '',
           
            splitNumber:8,
            nameTextStyle:{
                color:'#333'
            },
            axisLine:{
                lineStyle:{
                    color:'#333'
                }
            },
            axisLabel: {
                formatter: '{value} '
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#ccc'
                }
            },
        }],
        series: [{
            'name': '',
            'type': 'bar',
            markLine : {
                label:{
                    normal:{
                        show:false
                    }
                },
                lineStyle:{
                    normal:{
                        color:'red',
                        width:1,
                        height:1
                    }
                },
            },
            barWidth:'50%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}'
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8',
                            '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8',
                            '#bda29a', '#376956', '#c3bed4', '#495a80',
                            '#9966cc', '#bdb76a', '#eee8ab', '#a35015',
                            '#04dd98', '#d9b3e6', '#b6c3fc','#315dbc',
                        ];
                        return colorList[params.dataIndex]
                    },

                }
            },
        }],
        animationDurationUpdate: 2000,
        animationEasingUpdate: 'quinticInOut'
    },
    options: []
};
for (var n = 0; n < years.length; n++) {
    
           var res = [];
//alert(jdData.length);
   for(j=0;j<data[n].length;j++){
        res.push({
        name: jdData[n][j],
        value: data[n][j]
    });
 
}

res.sort(function(a, b) {
return b.value - a.value;
}).slice(0, 6);

res.sort(function(a, b) {
return a.value - b.value;
});
var res1=[];
var res2=[];
//console.log(res);
for(t=0;t<res.length;t++){
  res1[t]=res[t].name;
    res2[t]=res[t].value;
}
  console.log(jdData[n]);
    option.options.push({
        title: {
            text: years[n]
        },
        yAxis:{
            data:res1,
        },
        series: [{
            data: res2
        }]
    });
}  
five.setOption(option);