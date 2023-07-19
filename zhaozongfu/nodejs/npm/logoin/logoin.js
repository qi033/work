//引入框架
var express = require("express");
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//获取框架的实例对象
var app = express();
//调用app的get方法传入2个参数
//第一个参数 访问路径  也叫做路由
//第二个参数 回调函数 做具体的业务使用
//  req==request 请求的一些信息  res==response 响应的一些
app.get("/", function (req, res) {
    //调用响应的函数send发送 响应信息
    res.send("Hello World");
});
app.get("/logoin.html", (req, res) => {
    res.sendFile(__dirname + "/" + "logoin.html",)
});
app.get("/user", (req, res) => {
    // 输出 JSON 格式
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.post("/user", urlencodedParser, (req, res) => {
    res.setHeader("Content-Type", "application/json");
    // 输出 JSON 格式
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.post("/login", urlencodedParser, (req, res) => {
    res.setHeader("Content-Type", "application/json");
    if (req.body.name == "liyanyang" && req.body.password == "123456") {
        res.cookie("user", "liyanyang", { maxAge: 24 * 60 * 60 * 1000 })
        res.json({
            code: "200",
            mag: 'login success'
        })
    } else {
        res.json({
            code: "-1",
            mag: 'login faild'
        })
    }
    console.log(response);
    res.end(JSON.stringify(response));
});
//启动一个对外的服务端口是8081
app.listen(8081, function () {
    console.log("启动成功");
});