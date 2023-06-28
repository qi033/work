$(function () {
  $("#nav-right ul li:eq(0)").css("background-color", "rgba(252, 150, 211)");
  $("#nav-right ul li:eq(1)").css("background-color", "rgba(139, 86, 233)");
  $("#nav-right ul li:eq(2)").css("background-color", "rgba(37, 155, 229)");
  $("#nav-right ul li:eq(3)").css("background-color", "rgba(123, 204, 155)");
  $("#nav-right ul li:eq(4)").css("background-color", "rgba(229, 233, 236)");
  $("#nav-right ul li:eq(5)").css("background-color", "rgba(15, 144, 80)");
});
let co = [
  {
    id: 1,
    back: [
      "linear-gradient(0deg, rgb(161, 140, 209) 0%, rgb(251, 194, 235) 100%)",
      "linear-gradient(0deg, rgb(255, 154, 158) 0%, rgb(254, 207, 239) 99%, rgb(254, 207, 239) 100%)",
      "linear-gradient(0deg, rgb(251, 194, 235) 0%, rgb(166, 193, 238) 100%)",
      "linear-gradient(0deg, rgb(253, 203, 241) 0%, rgb(253, 203, 241) 1%, rgb(230, 222, 233) 100%)",
      "linear-gradient(120deg, rgb(240, 147, 251) 0%, rgb(245, 87, 108) 100%)",
    ],
  },
  {
    id: 2,
    back: [
      "linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%);",
      "linear-gradient(120deg, rgb(224, 195, 252) 0%, rgb(142, 197, 252) 100%);",
      "linear-gradient(0deg, rgb(251, 194, 235) 0%, rgb(166, 193, 238) 100%)",
      "linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)",
      "linear-gradient(0deg, rgb(106, 17, 203) 0%, rgb(37, 117, 252) 100%);",
    ],
  },
  {
    id: 3,
    back: [
      "linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%);",
      "linear-gradient(120deg, rgb(224, 195, 252) 0%, rgb(142, 197, 252) 100%);",
      "linear-gradient(0deg, rgb(251, 194, 235) 0%, rgb(166, 193, 238) 100%)",
      "linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)",
      "linear-gradient(0deg, rgb(106, 17, 203) 0%, rgb(37, 117, 252) 100%);",
    ],
  },
  {
    id: 4,
    back: [
      "linear-gradient(120deg, rgb(212, 252, 121) 0%, rgb(150, 230, 161) 100%);",
      "linear-gradient(0deg, rgb(67, 233, 123) 0%, rgb(56, 249, 215) 100%);",
      "linear-gradient(0deg, rgb(79, 181, 118) 0%, rgb(68, 196, 137) 30%, rgb(40, 169, 174) 46%, rgb(40, 162, 183) 59%, rgb(76, 119, 136) 71%, rgb(108, 79, 99) 80%, rgb(67, 44, 57) 100%);",
      "linear-gradient(-20deg, rgb(110, 69, 226) 0%, rgb(136, 211, 206) 100%);",
      "linear-gradient(0deg, rgb(106, 17, 203) 0%, rgb(37, 117, 252) 100%);",
    ],
  },
  {
    id: 5,
    back: [
      "linear-gradient(120deg, rgb(253, 251, 251) 0%, rgb(235, 237, 238) 100%);",
      "linear-gradient(0deg, rgb(168, 237, 234) 0%, rgb(254, 214, 227) 100%);",
      "linear-gradient(135deg, rgb(245, 247, 250) 0%, rgb(195, 207, 226) 100%);",
      "linear-gradient(135deg, rgb(253, 252, 251) 0%, rgb(226, 209, 195) 100%);",
      "linear-gradient(0deg, rgb(219, 220, 215) 0%, rgb(221, 220, 215) 24%, rgb(226, 201, 204) 30%, rgb(231, 98, 125) 46%, rgb(184, 35, 90) 59%, rgb(128, 19, 87) 71%, rgb(61, 22, 53) 84%, rgb(28, 26, 39) 100%)",
    ],
  },
  {
    id: 6,
    back: [
      "linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%);",
      "linear-gradient(120deg, rgb(224, 195, 252) 0%, rgb(142, 197, 252) 100%);",
      "linear-gradient(0deg, rgb(251, 194, 235) 0%, rgb(166, 193, 238) 100%)",
      "linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)",
      "linear-gradient(0deg, rgb(106, 17, 203) 0%, rgb(37, 117, 252) 100%);",
    ],
  },
];
let wallpaper = [
  "./images/166972.webp",
  "./images/167387.webp",
  "./images/167649.webp",
  "./images/168747.webp",
  "./images/202305045g26fa.webp",
  "./images/20230504793d0d.webp",
  "./images/202305057g35cj.webp",
  "./images/20230505mb5h58.webp",
  "./images/202306078e0723.webp",
  "./images/20230607b4i633.webp",
  "./images/2023061236f99k.webp",
  "./images/2023061241b4l4.webp",
  "./images/2023061248k48l (1).webp",
  "./images/2023061248k48l.webp",
  "./images/20230612dfbg92.webp",
  "./images/20230612dfbg92.webp",
  "./images/20230612dikcge.webp",
  "./images/20230612ijncb4.webp",
];
$("#left-bos ul li:eq(2)").on("click", function () {
  $("#right-bos1").css("display", "none");
  $("#right-bos2").css("display", "block");
  $("#right-bos").css("display", "none");
});
$("#files").on("click", function () {
  $("#text").click();
});
$("#text").click(function () {
  console.log($(this));
});
$("#left-bos ul li:eq(1)").on("click", function () {
  $("#right-bos1").css("display", "block");
  $("#right-bos2").css("display", "none");
  $("#right-bos").css("display", "none");
  let wall = "";
  wallpaper.forEach((item) => {
    wall += `<div class="div-imgs"><img src ="${item}" class="imgs"></div>`;
  });
  $("#right-bos1").html(wall);
});
$("#right-bos1").on("mouseenter", ".imgs", function () {
  $(this).animate({ width: "180px", height: "120px" });
});
$("#right-bos1").on("mouseleave", ".imgs", function () {
  $(this).animate({ width: "160px", height: "100px" });
});
$("#right-bos1").on("click", ".imgs", function () {
  let srcy = `background-image:url(` + $(this).attr("src") + `)`;
  console.log(srcy);
  $("body").attr("style", srcy);
});
$("#right-bos1").on("cllick", ".imgs", function () {});
$("#left-bos ul li:eq(0)").on("click", function () {
  $("#right-bos1").css("display", "none");
  $("#right-bos").css("display", "block");
  $("#right-bos2").css("display", "none");
});
$("#colour1").on("click", function () {
  let cos = co[0].back;
  let html = "";
  cos.forEach((item, index) => {
    html += `<div class="col" style="background:${item};"></div>`;
  });
  $("#con-right").html(html);
});
$("#colour2").on("click", function () {
  let cos = co[1].back;
  let html = "";
  cos.forEach((item, index) => {
    html += `<div class="col" style="background:${item}"></div>`;
  });
  $("#con-right").html(html);
});
$("#colour3").on("click", function () {
  let cos = co[2].back;
  let html = "";
  cos.forEach((item, index) => {
    html += `<div class="col" style="background:${item}"></div>`;
  });
  $("#con-right").html(html);
});
$("#colour4").on("click", function () {
  let cos = co[3].back;
  let html = "";
  cos.forEach((item, index) => {
    html += `<div class="col" style="background:${item}"></div>`;
  });
  $("#con-right").html(html);
});
$("#colour5").on("click", function () {
  let cos = co[4].back;
  let html = "";
  cos.forEach((item, index) => {
    html += `<div class="col" style="background:${item}"></div>`;
  });
  $("#con-right").html(html);
});
$("#colour6").on("click", function () {
  let cos = co[5].back;
  let html = "";
  cos.forEach((item, index) => {
    html += `<div class="col" style="background:${item}"></div>`;
  });
  $("#con-right").html(html);
});
$("#left-bos ul li").on("click", function () {
  $(this)
    .css("background-color", "rgba(24, 144, 235)")
    .siblings()
    .css("background-color", " rgba(37, 37, 44)");
});
$("#con-right").on("click", ".col", function () {
  let att = $(this).attr("style");
  console.log(att);
  $("body").attr("style", att);
  $("body").css("repeat", "none");
});
// $("#con-right").on("mouserout", ".col", function () {
//   $(this).remove("<span class='co-span'></span>");
// });
$("#bos a").on("click", function () {
  $("#bos").css("display", "none");
});
$("#show").on("click", function () {
  $("#bos").css("display", "block");
});
// //使 DIV 元素拖动：
// dragElement(document.getElementById("bos"));

// function dragElement(elmnt) {
//   var pos1 = 0,
//     pos2 = 0,
//     pos3 = 0,
//     pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* 如果存在，header 就是你移动 DIV 的地方：*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* 否则，将 DIV 从 DIV 内的任何位置移动：*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // 在启动时获取鼠标光标位置：
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // 当光标移动时调用一个函数：
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // 计算新的光标位置：
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // 设置元素的新位置：
//     elmnt.style.top = elmnt.offsetTop - pos2 + "px";
//     elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
//   }

//   function closeDragElement() {
//     /* 释放鼠标按钮时停止移动：*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
layui.use(function () {
  var upload = layui.upload;
  var layer = layui.layer;
  var element = layui.element;
  var $ = layui.$;
  // 单图片上传
  var uploadInst = upload.render({
    elem: "#ID-upload-demo-btn",
    url: "https://httpbin.org/post", // 此处用的是第三方的 http 请求演示，实际使用时改成您自己的上传接口即可。
    before: function (obj) {
      // 预读本地文件示例，不支持ie8
      obj.preview(function (index, file, result) {
        $("#ID-upload-demo-img").attr("src", result); // 图片链接（base64）
      });

      element.progress("filter-demo", "0%"); // 进度条复位
      layer.msg("上传中", { icon: 16, time: 0 });
    },
    done: function (res) {
      // 若上传失败
      if (res.code > 0) {
        return layer.msg("上传失败");
      }
      // 上传成功的一些操作
      // …
      $("#ID-upload-demo-text").html(""); // 置空上传失败的状态
    },
    error: function () {
      // 演示失败状态，并实现重传
      var demoText = $("#ID-upload-demo-text");
      demoText.html(
        '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
      );
      demoText.find(".demo-reload").on("click", function () {
        uploadInst.upload();
      });
    },
    // 进度条
    progress: function (n, elem, e) {
      element.progress("filter-demo", n + "%"); // 可配合 layui 进度条元素使用
      if (n == 100) {
        layer.msg("上传完毕", { icon: 1 });
      }
    },
  });
  // 多图片上传
  upload.render({
    elem: "#ID-upload-demo-btn-2",
    url: "https://httpbin.org/post", // 此处用的是第三方的 http 请求演示，实际使用时改成您自己的上传接口即可。
    multiple: true,
    before: function (obj) {
      // 预读本地文件示例，不支持ie8
      obj.preview(function (index, file, result) {
        $("#upload-demo-preview").append(
          '<img src="' +
            result +
            '" alt="' +
            file.name +
            '" style="width: 90px; height: 90px;">'
        );
      });
    },
    done: function (res) {
      // 上传完毕
      // …
    },
  });
});
