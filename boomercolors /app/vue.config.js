module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:3082',
          changeOrigin: true
        },
      }
    }
  }