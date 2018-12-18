'use strict'

module.exports = {
  '/proxy': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    secure: false,
    logLevel: 'error',
    pathRewrite: {
      '^/proxy': ''
    }
  }
}
