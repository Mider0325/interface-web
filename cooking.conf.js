var path = require('path')
var cooking = require('cooking')
var packageInfo = require('./package.json')
function getIPAdress () {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[ devName ]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[ i ]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

cooking.set({
  entry: {
    app: [ './src/main.js' ]
  },
  dist: './dist',
  template: {
    './index.tpl': {
      filename: 'index.html', // 不指定默认使用键名
      template: './index.tpl',
      title: packageInfo.description
    },
    './login.tpl': {
      filename: 'login.html', // 不指定默认使用键名
      template: './login.tpl',
      title: packageInfo.description
    }
  },
  env: {
    'process.env.CODE_ENV': "'" + process.env.CODE_ENV + "'"
  },
  devServer: {
    port: 8099,
    // 热替换
    hot: true,
    log: false,
    publicPath: '/',
    hostname: 'web.ymmoa.com'
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  minimize: true,
  chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    // require('...')
  ],
  publicPath: '/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: false,
  alias: {
    'src': path.join(__dirname, 'src')
  },
  extends: [ 'vue2', 'less', 'lint', 'autoprefixer' ]
})

cooking.add('loader.stylus', {
  test: /\.styl$/,
  loaders: [ 'css-loader', 'stylus-loader' ]
})
cooking.add('loader.markdown', {
  test: /\.md$/,
  loaders: [ 'html-loader', 'markdown-loader' ]
})
cooking.add('externals.ace', 'ace')
cooking.add('externals.jQuery', 'jQuery')
if (process.env.NODE_ENV === 'production') {
  cooking.add('externals.vue', 'Vue')
  cooking.add('externals.vue-router', 'VueRouter')
  cooking.add('externals.vuex', 'Vuex')
} else {
  cooking.add('alias.vue', 'vue/dist/vue.common.js')
}
module.exports = cooking.resolve()
