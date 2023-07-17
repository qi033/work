//1.导入HTML插件，得到一个构造函数
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlPlugin({
  template: "./src/index.html", //指定原文件的存放路径
  filename: "./index.html", //指定生成文件的存放路径
});
module.exports = {
  mode: "development", // mode用来指定结构模式，可选值有development 和 production
  entry: ["./src/index.js"],
  plugins: [htmlPlugin, new CleanWebpackPlugin()],
  module: {
    rules: [
      { test: /\.css/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.jpg|png|gif$/, use: ["url-loader?limit=22229"] },
    ],
  },
  devServer: {
    open: true, //初次打包完成后，自动打开浏览器
    host: "127.0.0.1", //实是打包所使用的主机地址
    port: 9000, //实时打包使用的端口号 (在http协议中，端口是80则可以省略不显示)
    hot: true, //热更新
  },
};
