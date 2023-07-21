//express_demo.js 文件
var express = require('express');
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var fs = require("fs")

const util = require('util');

var app = express();
app.use(cookieParser());
 
// app.use('/public', express.static('public'));
// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// app.get('/index.html', function (req, res) {
//     res.sendFile( __dirname + "/" + "index.html" );
//  })

// app.get('/user', (req, res) => {
//    // 输出 JSON 格式
//    var response = {
//        "first_name":req.query.first_name,
//        "last_name":req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
//  })

//  app.post('/user',urlencodedParser,(req, res) => {
//     // 输出 JSON 格式
//     var response = {
//         "first_name":req.body.first_name,
//         "last_name":req.body.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
//   })
  
//显示登录
  app.get('/login.html', function (req, res) {
    res.sendFile( __dirname + "/" + "login.html" );
 })
 app.get('/userinfo',function(req,res){
    // res.json(util.inspect(req.cookies))
    const userid = req.cookies.userid;
    var data = fs.readFileSync('user.json');
    data = JSON.parse(data)
    let index = data.list.findIndex((item) => {
        return item.id == userid;
    })
    res.json(data.list[index])
 })

 app.post('/save',urlencodedParser,(req, res) => {
    console.log(req.body);
    var data = fs.readFileSync('user.json');
    data = JSON.parse(data)
    const userid = req.cookies.userid;
    let index = data.list.findIndex((item) => {
        return item.id == userid;
    })
    data.list[index]= {
        id:userid,
        ...req.body
    }
    fs.writeFileSync('user.json',JSON.stringify(data,null,4))
    res.json({
        msg:""
    })
 })

  app.post('/login',urlencodedParser,(req, res) => {
    var data = fs.readFileSync('user.json');
    data = JSON.parse(data)
    console.log("同步读取: " + data.list);
    let index = data.list.findIndex((item) => {
        return item.username == req.body.username && item.pwd == req.body.password;
    })
    if(index > -1){
        res.cookie("userid",data.list[index].id)
        res.sendFile( __dirname + "/" + "userinfo.html" );
        // res.json({
        //     code:200,
        //     msg:'登陆成功'
        // }) 
    }else{
        res.json({
            code:-1,
            msg:'用户不存在或密码错误'
        })
    }
  })
 
app.listen(8081, function () {
    console.log('启动成功');
})