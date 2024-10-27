const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Entry point
  entry: {
    app: './src/index.js'
  },
  
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js',
  },
  
  // Module rules
  module: {
    rules: [
      // Rule to load images (including .jfif)
      {
        test: /\.(png|svg|jpg|jpeg|jfif|webp|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]', // Output folder for images
        },
      },
      
      // Rule to load fonts
      {
        test: /\.(svg|eot|woff2|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]', // Output folder for fonts
        },
      },

      // Rule to load HTML files
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // Rule to load CSS files
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: false }, // Extracts CSS into separate files
          },
          'css-loader', // Translates CSS into CommonJS
        ],
      },

      // Rule to load and compile Sass/SCSS files
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          'css-loader',  // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS
        ],
      },
    ],
  },

  // Webpack DevServer configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: false,
    compress: true,
    port: 9000,
    devMiddleware: {
      writeToDisk: true, // Write files to disk
    },
  },

  // Plugins
  plugins: [
    // Multiple HTML files to generate
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'egypt.html',
      template: './src/egypt.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'turkey.html',
      template: './src/turkey.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/contact.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'signin.html',
      template: './src/signin.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'tours.html',
      template: './src/tours.html',
    }),

    // CSS extraction into a separate file
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
  ],
};
