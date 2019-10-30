const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
      contentBase: './public',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
      rules: [
        {
          test: /\.js$/,
         exclude: /node_modules/,
          use: {
               loader: 'babel-loader',
          },
        },
        {
            test: /\.html$/,
            use: {
                    loader: "html-loader",
                },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
  },
  plugins: [
      new HtmlWebPackPlugin ( {
          template: "./src/index.html",
          filename: "./index.html"
      },)
  ],
};