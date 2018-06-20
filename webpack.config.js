// import scss to main.js file

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: "style-loader"
      //     },
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: true,
      //         importLoaders: 1,
      //         localIdentName: "[name]_[local]_[hash:base64]",
      //         sourceMap: true,
      //         minimize: true
      //       }
      //     }
      //   ]
      // }
      {
        test: /\.sass$/,
        use: [
          // WP uses loaders in an array from last to first
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles SASS to CSS
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
