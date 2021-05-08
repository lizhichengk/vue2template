const isProduction = process.env.NODE_ENV === 'production';



module.exports = {
  devServer: {
    {{#with proxy}}
    proxy : {
      '/{{name}}': {
        target: !isProduction ? '{{url}}' : '',
        ws: true,
        changeOrigin: true,
      },
    }
    {{/with}}
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