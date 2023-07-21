const HtmlPlugin = require('html-webpack-plugin')

//2.创建HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template:'./src/index.html',  //指定原文件的存放路径
  filename:'./index.html',      //指定生成文件的存放路径
})

module.exports = {
  mode:'development',
  plugins:[htmlPlugin] , //3.通过plugins节点，使htmlPlugin插件生效
}