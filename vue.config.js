const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devServer: {
    proxy: {
      '/swan': {
        target: !isProduction ? 'https://lzc-docker.suanshubang.com' : '',
        ws: true
      }
    }
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