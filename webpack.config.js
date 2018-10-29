const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
	path: path.resolve('./build/'),
	filename: 'bundle.js'
},
  module: {
        rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          }
        ]
   }
};