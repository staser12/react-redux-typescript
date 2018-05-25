module.exports = {
  entry: './src/app.tsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  }
};