layui.use(function () {
    var element = layui.element;

    // hash 地址定位
    var hashName = 'tabid'; // hash 名称
    var layid = location.hash.replace(new RegExp('^#' + hashName + '='), ''); // 获取 lay-id 值

    // 初始切换
    element.tabChange('test-hash', layid);
    // 切换事件
    element.on('tab(test-hash)', function (obj) {
        location.hash = hashName + '=' + this.getAttribute('lay-id');
    });
});
$("#li1").click(function () {
    $(".her").css("backgroundColor", "#ff7B5C");
    $("#li1 .icon").css("backgroundColor", "#ff7B5C");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li11 .icon").css("backgroundColor", "");
    $("#li12 .icon").css("backgroundColor", "");
    $("#li13 .icon").css("backgroundColor", "");
    $("#li14 .icon").css("backgroundColor", "");
    $(".span2").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span11").css("display", "none");
    $(".span12").css("display", "none");
    $(".span13").css("display", "none");
    $(".span14").css("display", "none");
    $(".span1").css("display", "block");
})
$("#li2").click(function () {
    $(".her").css("backgroundColor", "#3FA8F4");
    $("#li2 .icon").css("backgroundColor", "#3FA8F4");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li11 .icon").css("backgroundColor", "");
    $("#li12 .icon").css("backgroundColor", "");
    $("#li13 .icon").css("backgroundColor", "");
    $("#li14 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "block");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span11").css("display", "none");
    $(".span12").css("display", "none");
    $(".span13").css("display", "none");
    $(".span14").css("display", "none");
    $(".span2").css("display", "none");
})
$("#li3").click(function () {
    $(".her").css("backgroundColor", "#619ac3");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "#619ac3");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li11 .icon").css("backgroundColor", "");
    $("#li12 .icon").css("backgroundColor", "");
    $("#li13 .icon").css("backgroundColor", "");
    $("#li14 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "block");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span11").css("display", "none");
    $(".span12").css("display", "none");
    $(".span13").css("display", "none");
    $(".span14").css("display", "none");
    $(".span2").css("display", "none");
})
$("#li4").click(function () {
    $(".her").css("backgroundColor", "#21373d");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "#21373d");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li11 .icon").css("backgroundColor", "");
    $("#li12 .icon").css("backgroundColor", "");
    $("#li13 .icon").css("backgroundColor", "");
    $("#li14 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "block");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span11").css("display", "none");
    $(".span12").css("display", "none");
    $(".span13").css("display", "none");
    $(".span14").css("display", "none");
    $(".span2").css("display", "none");
})
$("#li5").click(function () {
    $(".her").css("backgroundColor", "#248067");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "#248067");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li11 .icon").css("backgroundColor", "");
    $("#li12 .icon").css("backgroundColor", "");
    $("#li13 .icon").css("backgroundColor", "");
    $("#li14 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "block");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span11").css("display", "none");
    $(".span12").css("display", "none");
    $(".span13").css("display", "none");
    $(".span14").css("display", "none");
    $(".span2").css("display", "none");
})
$("#li6").click(function () {
    $(".her").css("backgroundColor", "#9fa39a");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "#9fa39a");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li11 .icon").css("backgroundColor", "");
    $("#li12 .icon").css("backgroundColor", "");
    $("#li13 .icon").css("backgroundColor", "");
    $("#li14 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "block");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span11").css("display", "none");
    $(".span12").css("display", "none");
    $(".span13").css("display", "none");
    $(".span14").css("display", "none");
    $(".span2").css("display", "none");
})
$("#li7").click(function () {
    $(".her").css("backgroundColor", "#b14b28");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "#b14b28");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li11 .icon").css("backgroundColor", "");
    $("#li12 .icon").css("backgroundColor", "");
    $("#li13 .icon").css("backgroundColor", "");
    $("#li14 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "block");
    $(".span8").css("display", "none");
    $(".span11").css("display", "none");
    $(".span12").css("display", "none");
    $(".span13").css("display", "none");
    $(".span14").css("display", "none");
    $(".span2").css("display", "none");
})
$("#li8").click(function () {
    $(".her").css("backgroundColor", "#5d3131");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "#5d3131");
    $("#li11 .icon").css("backgroundColor", "");
    $("#li12 .icon").css("backgroundColor", "");
    $("#li13 .icon").css("backgroundColor", "");
    $("#li14 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "block");
    $(".span11").css("display", "none");
    $(".span12").css("display", "none");
    $(".span13").css("display", "none");
    $(".span14").css("display", "none");
    $(".span2").css("display", "none");
})
$("#li11").click(function () {
    $(".her").css("backgroundColor", "#f04b22");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li11 .icon").css("backgroundColor", "#f04b22");
    $("#li12 .icon").css("backgroundColor", "");
    $("#li13 .icon").css("backgroundColor", "");
    $("#li14 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span11").css("display", "block");
    $(".span12").css("display", "none");
    $(".span13").css("display", "none");
    $(".span14").css("display", "none");
    $(".span2").css("display", "none");
})
$("#li12").click(function () {
    $(".her").css("backgroundColor", "#652b1c");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li11 .icon").css("backgroundColor", "");
    $("#li12 .icon").css("backgroundColor", "#652b1c");
    $("#li13 .icon").css("backgroundColor", "");
    $("#li14 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span11").css("display", "block");
    $(".span12").css("display", "none");
    $(".span13").css("display", "none");
    $(".span14").css("display", "none");
    $(".span2").css("display", "none");
})
$("#li13").click(function () {
    $(".her").css("backgroundColor", "#64483d");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li11 .icon").css("backgroundColor", "");
    $("#li12 .icon").css("backgroundColor", "");
    $("#li13 .icon").css("backgroundColor", "#64483d");
    $("#li14 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span11").css("display", "none");
    $(".span12").css("display", "none");
    $(".span13").css("display", "block");
    $(".span14").css("display", "none");
    $(".span2").css("display", "none");
})
$("#li14").click(function () {
    $(".her").css("backgroundColor", "#5d3131");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li11 .icon").css("backgroundColor", "");
    $("#li12 .icon").css("backgroundColor", "");
    $("#li13 .icon").css("backgroundColor", "");
    $("#li14 .icon").css("backgroundColor", "#5d3131");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span11").css("display", "none");
    $(".span12").css("display", "none");
    $(".span13").css("display", "none");
    $(".span14").css("display", "block");
    $(".span2").css("display", "none");
})
