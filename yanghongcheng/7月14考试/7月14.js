var currentBox = null;
function showBox(boxNumber) {
  if (currentBox !== null) {
    currentBox.classList.add("hidden");
  }
  var box = document.getElementById("box" + boxNumber);
  box.classList.remove("hidden");
  currentBox = box;
}
function renderImage() {
    var box = document.getElementById("box");
    var image = new Image();
    image.src = "./小雨 (1).png";
    // image.width="100px";
    image.alt = "图片";
    var textNode = document.createTextNode("雨落屋檐");
    box.innerHTML = "";
    box.appendChild(image);
    box.appendChild(textNode);
  }
  function renderImage1() {
    var box = document.getElementById("box");
    var image = new Image();
    image.src = "./微距.png";
    // image.width="100px";
    image.alt = "图片";
    var textNode = document.createTextNode("春雨无声");
    box.innerHTML = "";
    box.appendChild(image);
    box.appendChild(textNode);
  }
    // 在页面加载完成时触发的事件处理函数
    window.addEventListener('DOMContentLoaded', function() {
        // 获取按钮元素
        var expandButton = document.getElementById('expandButton');
        var expandButtons = document.getElementById('expandButtons');
        // 触发按钮的点击事件
        expandButton.click();
        expandButtons.click();
      });