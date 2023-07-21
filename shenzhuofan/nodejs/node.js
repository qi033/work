const http = require('http');


http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'application/json'});

    // 发送响应数据 "Hello World"
    let user = [
        {
            name:'super卷仔',
            age:20,
            class:'三清观',
        }
    ]
    user = JSON.stringify(user)
    response.end(user);
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');