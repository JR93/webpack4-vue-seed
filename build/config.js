const path = require('path')

module.exports = {
  port: 5200,
  proxy: {},
  provide: {},
  pxto: '', // rem | vw
  development: {
    outputPath: path.resolve(__dirname, '../dev'),
    publicPath: '/'
  },
  test: {
    outputPath: path.resolve(__dirname, '../dist'),
    publicPath: '//webtest.yystatic.com/project/xxx'
  },
  production: {
    outputPath: path.resolve(__dirname, '../output'),
    publicPath: '//web.yystatic.com/project/xxx'
  }
}
