/**
 * Created with WebStorm.
 * User: kevan
 * Email:258137678@qq.com
 * Date: 2017/1/23
 * Time: 上午11:02
 * To change this template use File | Settings | File Templates.
 */
var Mock = require('mockjs')
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
  apiInfo = Object.assign(apiInfo, data)
  // 处理response和request数据
  apiInfo.request = getJson(apiInfo.request, Object)
  apiInfo.request.query = apiInfo.request.query || []
  apiInfo.request.path = apiInfo.request.path || []
  apiInfo.request.body = apiInfo.request.body || []
  apiInfo.response = getJson(apiInfo.response, Array)
  function getJson (str, Types) {
    var obj
    try {
      obj = JSON.parse(str || '')
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
      if (value.type == 'number') {
        if ((value.mock - 0) == value.mock) {
          info[ value.name ] = value.mock - 0
        }
      } else if (value.type == 'boolean') {
        if (value.mock == 'true') {
          info[ value.name ] = true
        } else if (value.mock == 'false') {
          info[ value.name ] = false
        }
      }
      // 数组处理
      if (value.type == 'object') {
        info[ value.name + value.mock ] = {}
        work(value.child, info[ value.name + value.mock ])
      } else if (value.type.indexOf('array') != -1) {
        info[ value.name ] = []
        var type = value.type.replace('array(', '').replace(')', '')
        var arrayLength = value.mock - 0
        for (let i = 0; i < arrayLength; i++) {
          if (type == 'object') {
            var data1 = {}
            info[ value.name ].push(data1)
            work(value.child, data1)
          } else if (type == 'array') {
          } else if (type == 'number') {
            info[ value.name ].push(Mock.mock('@integer'))
          } else if (type == 'string') {
            info[ value.name ].push(Mock.mock('@string'))
          } else if (type == 'boolean') {
            info[ value.name ].push(Mock.mock('@boolean'))
          }
        }
      }
    }
  }
  work(data, info)
  return Mock.mock(info)
}

/**
 * 对给定的json数据拆解成为可以
 * @param data
 */
exports.jsonDismantle = function (data) {
  var info = []
  var work = function (data) {
    var list = []
    var base = {
      name: '',
      require: 'true',
      type: 'string',
      mock: '',
      description: ''
    }
    for (var key in data) {
      let obj = Object.assign({}, base)
      // 设置名称
      obj.name = key
      // 判断设置类型
      let value = data[ key ]
      obj.mock = (typeof value == 'number') ? value + '' : value
      if (value) {
        obj.type = typeof value
        if (typeof value === 'object') {
          obj.mock = ''
          obj.type = 'object'
          if (value instanceof Array) {
            obj.type = 'array'
            // 如果是数组，初始化数组数量
            obj.mock = value.length
            value = value[ 0 ]
            let arryType = typeof value
            if (value instanceof Array) {
              arryType = 'array'
            }
            obj.type += `(${arryType})`
          }
          if (typeof value == 'object') {
            obj.child = work(value)
          }
        }
      } else {
        obj.type = 'string'
      }
      list.push(obj)
    }
    return list
  }
  info = work(data, info)

  return info
}

/**
 * 对给定的json数据拆解成为可以
 * @param data
 */
exports.diffObject = function (target, aim, isMain) {
  var flatData = function (data) {
    var obj = {}
    data.forEach((value) => {
      obj[ value.name ] = value
    })
    return obj
  }

  var diffwork = function (tds, ads) {
    // 先扁平数据方便查找
    tds = tds || []
    ads = ads || []
    var adsObject = flatData(ads)
    tds.forEach((value) => {
      // 判断对方key是否存在 如果不存在，则是新加的，如果存在，比较里面的个个字段是否一样。
      var asdValue = adsObject[ value.name ]
      if (asdValue) {
        // 存在，判断里面每个字段，并记录问题信息
        var upCache = {}
        for (let key in value) {
          if (key != 'child' && key != '_meta') {
            if (value[ key ] != asdValue[ key ]) {
              upCache[ key ] = { from: value[ key ], to: asdValue[ key ] }
            }
          }
        }
        value._meta = {
          type: Object.keys(upCache).length > 0 ? 'updata' : 'no',
          num: Object.keys(upCache).length,
          infos: upCache
        }
        if (value.child && value.child.length > 0) {
          diffwork(value.child, asdValue.child)
        }
      } else {
        // 不存在，设置为是新加字段
        value._meta = {
          type: isMain ? 'add' : 'delete'
        }
      }
    })
  }
  diffwork(target, aim)
  return target
}
// var data1 = [ {
//   description: '流程标题',
//   mock: 'fdsa',
//   name: 'title',
//   require: 'true',
//   type: 'string',
//   child: [
//     {
//       description: 'aaaaa',
//       mock: 'fdsa',
//       name: 'title',
//       require: 'true',
//       type: 'string'
//     }
//   ]
// } ]
// var data2 = [
//   {
//     description: '流标题',
//     mock: 'fdsa',
//     name: 'title',
//     require: 'true',
//     type: 'string',
//     child: [
//       {
//         description: 'aaaaa',
//         mock: 'fdsssa',
//         name: 'title',
//         require: 'true',
//         type: 'string'
//       }
//     ]
//   }
// ]
// console.log('-----------------------')
// console.log(JSON.stringify(diffObject(data1, data2), null, 4))
// var fs = require('fs')
// fs.writeFile('aa.json', JSON.stringify(diffObject(data1, data2), null, 4), 'utf-8')
