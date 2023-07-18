//引入框架
var express = require("express");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var cookieParser = require("cookie-parser");
var util = require("util");
var fs = require("fs");
//获取框架的实例对象
var app = express();
app.use(cookieParser());
//设置静态文件目录
//静态目录指 对外开放一个目录任何来源都可以访问 没有限制
app.use("/public", express.static("public"));
//调用app的get方法传入2个参数
//第一个参数 访问路径  也叫做路由
//第二个参数 回调函数 做具体的业务使用
//  req==request 请求的一些信息  res==response 响应的一些
app.get("/", function (req, res) {
  //调用响应的函数send发送 响应信息
  res.send("Hello World");
});
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
//访问路径： http://localgost:8081/user
app.get("/user", (req, res) => {
  //   req.wr("Content-type", "application/json");
  var response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
app.post("/user", urlencodedParser, (req, res) => {
  res.setHeader("Content-type", "application/json");
  // 输出 JSON 格式
  var response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
//显示登录页面
app.get("/login.html", function (req, res) {
  res.sendFile(__dirname + "/" + "login.html");
});
app.get("/userinfo", function (req, res) {
  const userid = req.cookies.userid;
  var data = fs.readFileSync("user.json");
  data = JSON.parse(data);
  let index = data.list.findIndex((item) => {
    return item.id == userid;
  });
  res.json(data.list[index]);
});
app.post("/save", urlencodedParser, (req, res) => {
  console.log(req.body);
  var data = fs.readFileSync("user.json");
  data = JSON.parse(data);
  const userid = req.cookies.userid;
  let index = data.list.findIndex((item) => {
    return item.id == userid;
  });
  data.list[index] = {
    id: userid,
    ...req.body,
  };
  fs.writeFileSync("user.json", JSON.stringify(data, null, 4));
  res.json({
    msg: "success",
  });
});
app.post("/login", urlencodedParser, (req, res) => {
  var data = fs.readFileSync("user.json");
  data = JSON.parse(data);
  let index = data.list.findIndex((item) => {
    return item.username == req.body.username && item.pwd == req.body.password;
  });
  if (index > -1) {
    res.cookie("userid", data.list[index].id);
    res.sendFile(__dirname + "/" + "userinfo.html");
    // res.json({
    //   code: 200,
    //   msg: "登录成功",
    // });
  } else {
    res.json({
      code: -1,
      msg: "用户不存在或密码错误",
    });
  }
});
app.get("/cookie", (req, res) => {
  //   req.wr("Content-type", "application/json");
  console.log("Cookies: " + util.inspect(req.cookies));
  res.json({
    cookie: util.inspect(req.cookies),
  });
});
//启动一个对外的服务端口是8081
app.listen(8081, function () {
  console.log("启动成功");
});

//作业
//完成一个登录的接口 可以至少3个人进行登录,登录成功之后 显示登录人的基本信息在一个表单内，点击保存修改信息
// let users = [
//     {
//         id,
//         username,
//         pwd,
//         nickname,
//         age,
//         sex,
//         desc,
//     },{

//     }
//   ]
