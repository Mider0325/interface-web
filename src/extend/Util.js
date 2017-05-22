/**
 * Created with WebStorm.
 * User: kevan
 * Email:258137678@qq.com
 * Date: 2017/1/23
 * Time: 上午11:02
 * To change this template use File | Settings | File Templates.
 */
var mock = require('mockjs')
exports.pipe = function () {
  var args = [].slice.call(arguments, 0)
  var val = args[ 0 ]
  for (let arg of args) {
    if (args.indexOf(arg) != 0 && typeof arg === 'function') val = arg(val)
  }
  return val
}
/**
 * 转换api接口数据为json对象，主要处理了request和response数据
 * @param data
 */
exports.apiToJson = function (data) {
  var apiInfo = {
    name: '',
    path: '',
    description: '',
    method: ''
  }
  Object.assign(apiInfo, data)
  // 处理response和request数据
  apiInfo.request = getJson(apiInfo, Object)
  apiInfo.request.query = apiInfo.request.query || []
  apiInfo.request.path = apiInfo.request.path || []
  apiInfo.request.body = apiInfo.request.body || []
  apiInfo.response = getJson(apiInfo, Array)
  function getJson (str, Types) {
    var obj
    try {
      obj = JSON.parse(str)
    } catch (e) {
      obj = new Types()
    }
    return obj
  }

  return apiInfo
}

/**
 * 对给定的json数据拆解成为可以
 * @param data
 */
exports.jsonToMock = function (data) {
  var info = {}
  var work = function (data, info) {
    for (var key in data) {
      let value = data[ key ]
      info[ value.name ] = value.mock
      // 数组处理
      if (value.type == 'object') {
        info[ value.name + value.mock ] = {}
        work(value.child, info[ value.name + value.mock ])
      } else if (value.type == 'array') {
        info[ value.name + value.mock ] = []
        var data1 = {}
        info[ value.name + value.mock ].push(data1)
        work(value.child, data1)
      }
    }
  }
  work(data, info)
  return mock.mock(info)
}
