var path = require('path');
var FlowtypePlugin = require('flowtype-loader/plugin');

module.exports = {
  entry: './src/js/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [    
            "syntax-flow",
            "tcomb",
            "transform-flow-strip-types"
          ]
        }
      }
    ]
  },
  plugins: [
    new FlowtypePlugin()
    // new FlowtypePlugin({cwd: '/path/'})
    // new FlowtypePlugin({failOnError: true})
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}