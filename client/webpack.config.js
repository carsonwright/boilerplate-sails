var path = require('path');

module.exports = {
  entry: './src/lib/index.js',
  resolve: {
    extensions: [".jsx", ".js", ".json", ".scss"]
  },

  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader?modules!sass-loader"
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}