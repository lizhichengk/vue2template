const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: '{{projectName}}'
    }
  },
  devServer: {
    {{#if proxy}}
    proxy : {
      '/{{name}}': {
        target: !isProduction ? '{{url}}' : '',
        ws: true,
        changeOrigin: true,
      },
    }
    {{/if}}
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