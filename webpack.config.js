const HtmlWebpackPlugin = require("html-webpack-plugin"); // <-- NEW
const path = require("path");

module.exports = {
  mode: "none",
  //entry: "./src/script.js",
  entry : {
    "ozarqa.js" : [
      path.resolve(__dirname, 'src/ozarqa.js'),
   //   path.resolve(__dirname, 'src/app.js')
    ],
    "app.js" : [
      path.resolve(__dirname, 'src/app.js')
    ]
  },
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};