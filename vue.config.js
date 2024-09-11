const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  // dev: {
  //   autoOpenBrowser: true,
  // }
  // 关闭eslint校验
  lintOnSave: false,
  devServer: {
    //设置主机地址
    //host: 'localhost'
    //设置默认端口
    // port: '9090',
    //自动打开浏览器
    open: true
  }
})
