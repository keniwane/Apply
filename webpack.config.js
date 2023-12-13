const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // dev mode
  mode: 'development',
  // entry to our root js file
  entry: path.resolve(__dirname, 'src/index.js'),
  // where to put the bundled file
  output: {
    // dist folder
    path: path.resolve(__dirname, 'dist'),
    // set the bundled file name  (default is main.js)
    filename: 'bundle[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  // source map is good for debugging
  // sometimes it's hard to find which line of code is the error because of the bundler
  // source map gives you the correct line
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  // define your loaders
  module: {
    rules: [
      {
        // pick which file(s) should have loaders appplied
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Job Tracker',
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],
};
