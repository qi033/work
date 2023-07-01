var chartDom = document.getElementById("quanbu");
var myChart = echarts.init(chartDom);
var option;
var title = ''
var count = 0
var datelist = ["第一周","第二周","第三周","第四周"]
var dataSourc = [
    {"name":"杨宏承","data":[47.25,48,54,51]},
    {"name":"刘振洲","data":[75,65.5,64,65.5]},
    {"name":"申卓凡","data":[64,49,65.5,61]},
    {"name":"苏鹏杰","data":[61,45,60,61]},
    {"name":"余浩","data":[55,65,65,59]},
    {"name":"刘佳佳","data":[83.75,68.75,60,51.5]},
    {"name":"赵宗福","data":[77.5,71.5,54.5,51]},
    {"name":"杨浩冰","data":[67.5,58,53,56]},

]
var colorlist = ['#FF6600', '#FF8247', '#FF3030', '#FF1493', '#D02090', '#1E90FF', '#FFE1FF', '#EE1289', '#A020F0']
function getydatalist () {
    title = datelist[count]
    var list = dataSourc.map((item, index) => {
        return {
            name: item.name,
            value: item.data[count],
            data: {
                value: item.data[count],
                itemStyle: { color: colorlist[index] }
            }
        }
    })
    count++
    return bubbleSort(list)
}
function bubbleSort (arr) {
    var len = arr.length
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j].value > arr[j + 1].value) {
                var temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
renderecharts()
myChart.setOption(option)
var dsq = setInterval(() => {
    renderecharts()
    myChart.setOption(option)
    if (count === datelist.length) {
        clearInterval(dsq)
    }
}, 1000)
function renderecharts () {
    var list1 = []
    var list2 = []
    var echartData = getydatalist()
    echartData.map(item => {
        list1.push(item.name)
        list2.push(item.data)
    })
    option = {
        title: {
            text: title,
            left: 96
        },
        xAxis: {
            type: 'value',
        },
        yAxis: {
            type: 'category',
            data: list1
        },
        series: [{
            data: list2,
            type: 'bar',
            barWidth: 30,
            label: {
                show: true,
                color: '#000',
                position: 'right'
            }
        }]
    }
    
}
myChart.setOption(option);