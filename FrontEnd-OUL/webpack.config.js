const path = require('path');
const ExtractCss = require('mini-css-extract-plugin');
const Copy = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {path: path.resolve(__dirname, 'dist'), filename: 'js/bundle.js'},
  optimization: { minimize: true },
  devServer: { port:9000, contentBase: path.join(__dirname, 'dist') },
  plugins:[
    new Copy([
      {context: 'src/', from: '*.html'},
      {context: 'src/img/', from: '*.png', to: 'img/'}
    ]),
    new ExtractCss({filename:'css/index.css'})
  ],
  module:{
    rules:[{
      test: /\.s?css$/, 
      use:[ ExtractCss.loader,
      'css-loader', 'sass-loader']
    }
  ]}
}