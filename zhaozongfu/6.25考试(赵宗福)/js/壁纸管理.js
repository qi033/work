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
    $(".div12").on("click", function () {

        $('body').toggleClass('div12');
    })
    $(".div13").on("click", function () {
        $('body').toggleClass('div13');
    })
    $(".div14").on("click", function () {

        $('body').toggleClass('div14');
    })
    $(".div15").on("click", function () {

        $('body').toggleClass('div15');
    })
    $(".div16").on("click", function () {

        $('body').toggleClass('div16');
    })
    $(".div17").on("click", function () {
        $('body').toggleClass('div17');
    })
    $(".div18").on("click", function () {

        $('body').toggleClass('div18');
    })
    $(".div19").on("click", function () {

        $('body').toggleClass('div19');
    })
    $(".div20").on("click", function () {

        $('body').toggleClass('div20');
    })
    $(".div21").on("click", function () {
        $('body').toggleClass('div21');
    })
    $(".div22").on("click", function () {

        $('body').toggleClass('div22');
    })
    $(".div23").on("click", function () {

        $('body').toggleClass('div23');
    })
    $(".div24").on("click", function () {

        $('body').toggleClass('div24');
    })
});
  $(".icon1").click(function(){
    $(".lloo").slideDown(2000);
    $("#box").slideUp(2000)
    
  })
  $(".lloo").click(function(){
    $("#box").slideDown(2000);
    $(".lloo").slideUp()
  })
   $(function () {
          //给li点击事件
          $("li").click(liFun);
        });
        function liFun() {
          let url = $(this).attr("data-url");
          $("#ifrm").prop("src", url);
          console.log(url);
        }