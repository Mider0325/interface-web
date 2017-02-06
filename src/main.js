import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './app'
import Login from './login'
import VueRouter from 'vue-router'
import './assets/style/theme/index.css'
import EmaProxy from 'ema-proxy'
import store from './store'
require('./assets/js/base')
require('./extend/filter')
require('./assets/style/base.css')

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.devtools = !(process.env.NODE_ENV === 'production')
// 创建一个路由器实例
// 并且配置路由规则
import routerMap from './RouterMap'
const router = new VueRouter(routerMap)
console.log(routerMap)
var appData = { // eslint-disable-line
  el: '#app',
  store: store,
  router: router
}
var isLogin = window.location.pathname.indexOf('/login.html')
if (isLogin != -1) {
  appData.render = h => h(Login)
} else {
  appData.render = h => h(App)
}
window.EMA = new EmaProxy()
export default new Vue(appData)
