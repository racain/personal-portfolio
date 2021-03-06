const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/styles/main.scss',
          './src/app.js'
        ]
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ],
  },
}