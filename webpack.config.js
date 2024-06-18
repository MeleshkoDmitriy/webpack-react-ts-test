const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/client/index.tsx',
  mode: 'production',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: 'client_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader','sass-loader'],
      //   exclude: /node_modules/
      // },
      {
        test: /\.(png|svg|ttf)$/,
        type: 'assets/resource'
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   type: 'asset/resource'
      // }
    ]
  }
}