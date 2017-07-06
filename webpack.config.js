const path = require('path');
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: /src/,
        loader: "babel-loader",
        query: {
          presets: [["react"], ["es2015"], ["stage-0"]
          ],
          plugins: [
            ["transform-decorators-legacy"]
          ],
          // include: [   [     path.join(__dirname, 'src'),     path.join(__dirname,
          // 'node_modules', 'firebase-3-react')   ] ]
        }
      }
    ]
  },
  devtool: "inline-source-map"
};