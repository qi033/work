$(document).ready(function () {
    // 点击图标
    $('#icon').click(function () {
        // 占满整个屏幕
        $('#box').toggleClass('show');
    });
    $("#span").on("click", function () {

        $('body').toggleClass('fff');
    })
    $("#span1").on("click", function () {

        $('body').toggleClass('fff1');
    })
    $("#span2").on("click", function () {

        $('body').toggleClass('fff2');
    })
    $("#span3").on("click", function () {

        $('body').toggleClass('fff3');
    })
    $("#span4").on("click", function () {

        $('body').toggleClass('fff4');
    })
    $("#span5").on("click", function () {
        $('body').toggleClass('fff5');
    })
    $("#span6").on("click", function () {

        $('body').toggleClass('fff6');
    })
    $("#span7").on("click", function () {

        $('body').toggleClass('fff7');
    })
    $("#span8").on("click", function () {

        $('body').toggleClass('fff8');
    })
    $("#span9").on("click", function () {
        $('body').toggleClass('fff9');
    })
    $("#span10").on("click", function () {

        $('body').toggleClass('fff10');
    })
    $("#span11").on("click", function () {

        $('body').toggleClass('fff11');
    })
    $("#span12").on("click", function () {

        $('body').toggleClass('fff12');
    })
    $("#span").on("click", function () {

        $('body').toggleClass('fff');
    })
    $(".div1").on("click", function () {

        $('body').toggleClass('div1');
    })
    $(".div2").on("click", function () {

        $('body').toggleClass('div2');
    })
    $(".div3").on("click", function () {

        $('body').toggleClass('div3');
    })
    $(".div4").on("click", function () {

        $('body').toggleClass('div4');
    })
    $(".div5").on("click", function () {
        $('body').toggleClass('div5');
    })
    $(".div6").on("click", function () {

        $('body').toggleClass('div6');
    })
    $(".div7").on("click", function () {

        $('body').toggleClass('div7');
    })
    $(".div8").on("click", function () {

        $('body').toggleClass('div8');
    })
    $(".div9").on("click", function () {
        $('body').toggleClass('div9');
    })
    $(".div10").on("click", function () {

        $('body').toggleClass('div10');
    })
    $(".div11").on("click", function () {

        $('body').toggleClass('div11');
    })
    $(".div11").on("click", function () {

        $('body').toggleClass('div12');
    })
});
$(".icon1").click(function () {
    $(".lloo").slideDown(2000);
    $("#box").slideUp(2000)

})
$(".lloo").click(function () {
    $("#box").slideDown(2000);
    $(".lloo").slideUp()
})
$(".li1").click(function () {
    $(".hhdged").css('display', 'block');
    $(".taikula").css('display', 'none');
    $(".taikula1").css('display', 'none');
});
$(".li2").click(function () {
    $(".taikula").css('display', 'block');
    $(".taikula1").css('display', 'none');
    $(".hhdged").css("display", "none");

});
$(".li3").click(function () {
    $(".taikula1").css('display', 'block');
    $(".taikula").css('display', 'none');
    $(".hhdged").css("display", "none");

});
const obj = [

    "https://www4.bing.com//th?id=OHR.PetraTreasury_ZH-CN6007151900_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp&w=360&h=202",


    "https://www4.bing.com//th?id=OHR.NhaTrang_ZH-CN5834700560_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp&w=360&h=202",


    "https://www4.bing.com//th?id=OHR.GoliathHeron_ZH-CN2413747227_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp&w=360&h=202",


    "https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1684885764637-9004d39ef891?ixid=M3w0MjI2NjN8MHwxfHRvcGljfHxxUFlzRHp2Sk9ZY3x8fHx8Mnx8MTY4NzMyNTA2MXw&ixlib=rb-4.0.3&w=400&h=240&fmt=webp",


    "https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1684154310265-5e8abb8387d5?ixid=M3w0MjI2NjN8MHwxfHRvcGljfHxxUFlzRHp2Sk9ZY3x8fHx8Mnx8MTY4NzMyNTA2MXw&ixlib=rb-4.0.3&w=400&h=240&fmt=webp",


    "https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1685118141935-3f9f2db4de26?ixid=M3wyNjY4NDZ8MHwxfHRvcGljfHxxUFlzRHp2Sk9ZY3x8fHx8Mnx8MTY4NzgwNjg3MHw&ixlib=rb-4.0.3&w=400&h=240&fmt=webp",


    "https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/5g/5g7ew7.jpg?w=400&h=200&fmt=webp",


    "https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/2y/2yz3m9.jpg?w=400&h=200&fmt=webp",

    "https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/we/weq9wx.jpg?w=400&h=200&fmt=webp",

    "https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/zy/zyz25o.jpg?w=400&h=200&fmt=webp",

    "https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/6d/6d5k6x.jpg?w=400&h=200&fmt=webp",

    ""
]
$(document).ready(function () {
    var container = $('.taikula');
    // 遍历图片数组
    $.each(obj, function (index, image) {
        // 创建一个新的img元素
        var img = $('<img>');

        // 设置img元素的src属性为图片路径
        img.attr('src', image);

        // 将img元素添加到容器中
        container.append(img);
    });
});
