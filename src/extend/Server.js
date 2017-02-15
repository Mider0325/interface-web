/**
 * Created with WebStorm.
 * User: stoneship
 * Email:258137678@qq.com
 * Date: 16/11/7
 * Time: 上午10:31
 * To change this template use File | Settings | File Templates.
 */
import axios from 'axios'
import Config from '../config'
var instance = axios.create({
  baseURL: Config.host,
  timeout: 30000,
  headers: {},
  needLoading: false,  // 是否需要加载效果
  ignoreCode: false  // 是否忽略服务端的错误提示
})

instance.interceptors.request.use(function (config) {
  if (config.needLoading) {
    window.EMA.fire('loading.show')
  }
  if (config.mock) {
    config.url = config.url.replace(Config.host, Config.mockhost)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  if (response.config.needLoading) {
    window.EMA.fire('loading.hide')
  }
  var code = response.data.code
  if (response.data.code && response.data.code != 1) {
    switch (code) {
      case 999:
        window.EMA.fire('alert.show', '用户认证失败,重新登录', function () {
          window.EMA.fire('logout')
        })
        break
      default:
        window.EMA.fire('alert.show', response.data.msg, function () {})
    }
    throw new Error(response)
  } else {
    return response
  }
}, function (error) {
  window.console.log(error)
  var status = error.response.status
  var message = error.message
  if (status != 200) {
    if (status == 401) {
      window.EMA.fire('alert.show', '用户认证失败,重新登录', function () {
        window.EMA.fire('logout')
      })
    } else if (status == 403) {
      window.EMA.fire('alert.show', '用户无权限,重新登录', function () {
        window.EMA.fire('logout')
      })
    } else {
      window.EMA.fire('alert.show', message, function () {})
    }
  }
  return Promise.reject(error)
})

export default instance
