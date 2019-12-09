const path = require('path');

// SASS compiler to CSS
module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/styles/main.scss']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
    module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ],
        exclude: path.resolve(__dirname, '/node_modules/')
      },
    ],
  },
}