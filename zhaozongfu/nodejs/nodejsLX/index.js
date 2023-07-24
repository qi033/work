const express = require('express');
const app = express();
const port = 3000; // 指定端口号
const bodyParser = require('body-parser');
// GET请求处理程序
app.use(bodyParser.urlencoded({ extended: false })); // 解析urlencoded格式的请求体
app.use(bodyParser.json()); // 解析json格式的请求体
app.get('/api/users', (req, res) => {
    // 处理GET请求逻辑，例如从数据库获取用户数据
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Tom' }
    ];

    res.json(users); // 发送JSON响应
});

// POST请求处理程序
app.post('/api/users', (req, res) => {
    // 处理POST请求逻辑，例如将新用户数据保存到数据库
    // req.body 可以获取POST请求的数据
    // ...
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});