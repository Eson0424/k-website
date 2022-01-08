module.exports = {
  // close eslint
  lintOnSave: true,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        // pathRewrite: { '^/api': '' },
      },
    },
  },
}