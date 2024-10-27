const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { option } = require('commander');

module.exports = {
  // step one
  entry: {
    app: './src/index.js'
  },
  // step 2
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  // step four
    module: {
      rules: [
        // load images
        {
          test: /\.(png|svg|jpg|jpeg|ttf)$/i,
          type: 'asset/resource',
          generator:{
            filename: "./images/[name][ext]"
          }
        },
        // load Fonts 
        {
          test: /\.(svg|eot|woff2|jpeg|gif)$/i,
          type: 'asset/resource',
          generator:{
            filename: "./fonts/[name][ext]"
          }
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
          
        },
        {
          test: /\.css$/i,
          use: [
           {
            loader: MiniCssExtractPlugin.loader,
              options:{
                esModule: false
              }
           },
             "css-loader"],
        },
        // Sass Loader 
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },

      ],
    },
    // Server webpack 
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: false,
      compress: true,
      port: 9000,
      devMiddleware: {
        writeToDisk: true,
      }
    },
  
  // step three
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'egypt.html',
      template: './src/egypt.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'turkey.html',
      template: './src/turkey.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/contact.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'signin.html',
      template: './src/signin.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'tours.html',
      template: './src/tours.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    })
  ],

};