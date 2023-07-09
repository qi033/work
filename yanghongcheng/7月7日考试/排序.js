var chartDom = document.getElementById("quanbu");
var myChart = echarts.init(chartDom);
var option;
var title = ''
var count = 0
var datelist = ["10.4版本","10.5版本","10.6版本","10.7版本"]
var dataSourc = [
    {"name":"SKT","data":[93.8,81.2,82.4,83.3,82.4]},
    {"name":"SSW","data":[88.2,93.8,83.4,82.3,87.4]},
    {"name":"SKT","data":[83.3,88.2,83.1,85.2,86.8]},
    {"name":"DWG","data":[82.4,83.3,93.8,81.2,82.4]},
    {"name":"SSG","data":[81.2,82.4,88.2,93.8,88.2]},

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