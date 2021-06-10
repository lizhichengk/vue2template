/**
 * vue.config基本配置
 */
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  outputDir: process.env.outputDir,
  publicPath: process.env.publicPath,
  productionSourceMap: false,
  parallel: isProduction ? true : false,
  lintOnSave: true,
  chainWebpack: (config) => {},
  pages: {
    index: {
      entry: "./src/main.js",
      title: '{{projectName}}'
    },
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
  chainWebpack: (config) => {
    config.plugins.delete('preload-index');
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
};
