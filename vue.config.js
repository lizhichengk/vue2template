const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devServer: {
    proxy: '{{{proxy}}}'
  },
  css: {
    loaderOptions: {
      less: {
        rules: [
          {
            test: /\.less$/i,
            loader: [
              "style-loader",
              "css-loader",
              "less-loader",
            ],
          },
        ],
      }
    }
  }
}