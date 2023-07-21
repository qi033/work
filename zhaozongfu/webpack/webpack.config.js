//1.导入HTML插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

//2.创建HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',  //指定原文件的存放路径
    filename: './index.html',      //指定生成文件的存放路径
})

module.exports = {
    mode: 'development',
    plugins: [htmlPlugin], //3.通过plugins节点，使htmlPlugin插件生效
    devServer: {
        open: true, //初次打包完成后，自动打开浏览器
        host: '127.0.0.1',//实是打包所使用的主机地址
        port: 80, //实时打包使用的端口号 (在http协议中，端口是80则可以省略不显示)
        hot: true,//热更新
    },
}
