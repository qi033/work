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
    $(".her #icon1").css("display", "block");
    $(".her #icon2").css("display", "none");
    $(".her #icon3").css("display", "none");
    $(".her #icon4").css("display", "none");
    $(".her #icon5").css("display", "none");
    $(".her #icon6").css("display", "none");
    $(".her #icon7").css("display", "none");
    $(".her #icon8").css("display", "none");
    $(".her #icon9").css("display", "none");
    $("#li1 .icon").css("backgroundColor", "#ff7B5C");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li9 .icon").css("backgroundColor", "");
    $(".span2").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span9").css("display", "none");
    $(".span1").css("display", "block");
})
$("#li2").click(function () {
    $(".her").css("backgroundColor", "#3FA8F4");
    $(".her #icon1").css("display", "none");
    $(".her #icon3").css("display", "none");
    $(".her #icon4").css("display", "none");
    $(".her #icon5").css("display", "none");
    $(".her #icon6").css("display", "none");
    $(".her #icon7").css("display", "none");
    $(".her #icon8").css("display", "none");
    $(".her #icon9").css("display", "none");
    $(".her #icon2").css("display", "block");
    $("#li2 .icon").css("backgroundColor", "#3FA8F4");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li9 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span9").css("display", "none");
    $(".span2").css("display", "block");
})
$("#li3").click(function () {
    $(".her").css("backgroundColor", "#065784");
    $(".her #icon1").css("display", "none");
    $(".her #icon2").css("display", "none");
    $(".her #icon4").css("display", "none");
    $(".her #icon5").css("display", "none");
    $(".her #icon6").css("display", "none");
    $(".her #icon7").css("display", "none");
    $(".her #icon8").css("display", "none");
    $(".her #icon9").css("display", "none");
    $(".her #icon3").css("display", "block");
    $("#li3 .icon").css("backgroundColor", "#065784");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li9 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span2").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span9").css("display", "none");
    $(".span3").css("display", "block");
})
$("#li4").click(function () {
    $(".her").css("backgroundColor", "yellow");
    $(".her #icon1").css("display", "none");
    $(".her #icon2").css("display", "none");
    $(".her #icon3").css("display", "none");
    $(".her #icon5").css("display", "none");
    $(".her #icon6").css("display", "none");
    $(".her #icon7").css("display", "none");
    $(".her #icon8").css("display", "none");
    $(".her #icon9").css("display", "none");
    $(".her #icon4").css("display", "block");
    $("#li4 .icon").css("backgroundColor", "yellow");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li9 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span2").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span9").css("display", "none");
    $(".span4").css("display", "block");
})
$("#li5").click(function () {
    $(".her").css("backgroundColor", "green");
    $(".her #icon1").css("display", "none");
    $(".her #icon2").css("display", "none");
    $(".her #icon3").css("display", "none");
    $(".her #icon4").css("display", "none");
    $(".her #icon6").css("display", "none");
    $(".her #icon7").css("display", "none");
    $(".her #icon8").css("display", "none");
    $(".her #icon9").css("display", "none");
    $(".her #icon5").css("display", "block");
    $("#li5 .icon").css("backgroundColor", "green");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li9 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span9").css("display", "none");
    $(".span5").css("display", "block");
})
$("#li6").click(function () {
    $(".her").css("backgroundColor", "pink");
    $(".her #icon1").css("display", "none");
    $(".her #icon2").css("display", "none");
    $(".her #icon3").css("display", "none");
    $(".her #icon4").css("display", "none");
    $(".her #icon5").css("display", "none");
    $(".her #icon7").css("display", "none");
    $(".her #icon8").css("display", "none");
    $(".her #icon9").css("display", "none");
    $(".her #icon6").css("display", "block");
    $("#li6 .icon").css("backgroundColor", "pink");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li9 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span9").css("display", "none");
    $(".span6").css("display", "block");
})
$("#li7").click(function () {
    $(".her").css("backgroundColor", "red");
    $(".her #icon1").css("display", "none");
    $(".her #icon2").css("display", "none");
    $(".her #icon3").css("display", "none");
    $(".her #icon4").css("display", "none");
    $(".her #icon5").css("display", "none");
    $(".her #icon6").css("display", "none");
    $(".her #icon8").css("display", "none");
    $(".her #icon9").css("display", "none");
    $(".her #icon7").css("display", "block");
    $("#li7 .icon").css("backgroundColor", "red");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $("#li9 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span8").css("display", "none");
    $(".span9").css("display", "none");
    $(".span7").css("display", "block");
})
$("#li8").click(function () {
    $(".her").css("backgroundColor", "orange");
    $(".her #icon1").css("display", "none");
    $(".her #icon2").css("display", "none");
    $(".her #icon3").css("display", "none");
    $(".her #icon4").css("display", "none");
    $(".her #icon5").css("display", "none");
    $(".her #icon6").css("display", "none");
    $(".her #icon7").css("display", "none");
    $(".her #icon9").css("display", "none");
    $(".her #icon8").css("display", "block");
    $("#li8 .icon").css("backgroundColor", "orange");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li9 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span9").css("display", "none");
    $(".span8").css("display", "block");
})
$("#li9").click(function () {
    $(".her").css("backgroundColor", "rgb(66, 42, 25)");
    $(".her #icon1").css("display", "none");
    $(".her #icon2").css("display", "none");
    $(".her #icon3").css("display", "none");
    $(".her #icon4").css("display", "none");
    $(".her #icon5").css("display", "none");
    $(".her #icon6").css("display", "none");
    $(".her #icon7").css("display", "none");
    $(".her #icon8").css("display", "none");
    $(".her #icon9").css("display", "block");
    $("#li9 .icon").css("backgroundColor", "rgb(66, 42, 25)");
    $("#li1 .icon").css("backgroundColor", "");
    $("#li2 .icon").css("backgroundColor", "");
    $("#li3 .icon").css("backgroundColor", "");
    $("#li4 .icon").css("backgroundColor", "");
    $("#li5 .icon").css("backgroundColor", "");
    $("#li6 .icon").css("backgroundColor", "");
    $("#li7 .icon").css("backgroundColor", "");
    $("#li8 .icon").css("backgroundColor", "");
    $(".span1").css("display", "none");
    $(".span3").css("display", "none");
    $(".span4").css("display", "none");
    $(".span5").css("display", "none");
    $(".span6").css("display", "none");
    $(".span7").css("display", "none");
    $(".span8").css("display", "none");
    $(".span9").css("display", "block");
})