const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const cleanPlugin = new CleanWebpackPlugin();
//1.导入HTML插件，得到一个构造函数
const HtmlPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlPlugin({
  template: "./src/index.html", //指定原文件的存放路径
  filename: "./index.html", //指定生成文件的存放路径
});
console.log(path.join(__dirname, "./src"), "***********");
module.exports = {
  mode: "development", // mode用来指定结构模式，可选值有development 和 production
  devtool: "eval-source-map",
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "js/bundle.js", //加一层js/
  },
  entry: path.join(__dirname, "./src/index.js"), //打包入口文件路径
  plugins: [htmlPlugin, cleanPlugin],
  module: {
    rules: [
      { test: /\.css/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true, // 可选，压缩HTML文件
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.png|jpg|gif$/,
        use: ["url-loader?limit=1000&outputPath=images"],
      },
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
    ],
  },
  devServer: {
    open: true, //初次打包完成后，自动打开浏览器
    host: "127.0.0.1", //实是打包所使用的主机地址
    port: 9000, //实时打包使用的端口号 (在http协议中，端口是80则可以省略不显示)
    hot: true, //热更新
  },
};
