module.exports = {
  mode: "development",
  entry: "./src/demo.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
