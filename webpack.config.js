const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PugPlugin = require('pug-plugin');

module.exports = {
  entry: './app.js', // Tu archivo principal de JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.[contenthash].js',
    clean: true, // Limpia la carpeta dist antes de cada compilación
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Procesa archivos CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Procesa imágenes
        type: 'asset/resource',
        generator: {
          filename: 'asset/img/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.pdf$/,
        type: 'asset/resources', // Mueve archivos PDF a la carpeta especificada
      },
    ],
  },
  plugins: [
    new PugPlugin({
        pretty: 'auto',
        entry: {
            index: './src/views/index.pug'
        }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.[contenthash].css',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: 'src/assets/img', to: 'images' }, // Copia imágenes
    //   ],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './src/views/index.html', // Archivo HTML estático generado
    // }),
  ],
  devtool: 'source-map', // Para depuración
  mode: 'production', // Modo producción
};