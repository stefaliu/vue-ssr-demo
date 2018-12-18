const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.conf.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const utils = require('./utils')
// const config = require('../config')

module.exports = merge(baseConfig, {
  entry: './src/entry-server.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    // whitelist: [ /\.css$/, 'element-ui' ]
  }),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     // you can specify a publicPath here
          //     // by default it use publicPath in webpackOptions.output
          //     // publicPath: '../'
          //   }
          // },
          'css-loader'
        ]
      }
    ]
  },
  // module: {
  //   rules: utils.styleLoaders({
  //     sourceMap: config.build.productionSourceMap,
  //     extract: true,
  //     usePostCSS: true
  //   })
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    // new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: "[name].css",
      // chunkFilename: "[id].css"
    // }),
    new VueSSRServerPlugin()
  ]
})
