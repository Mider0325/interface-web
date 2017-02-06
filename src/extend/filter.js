var Vue = require('vue')
import Metadata from '../store/metadata'
/**
 * 时间格式化
 */
Vue.filter('datetime', function (value, format) {
  return (new Date(value)).Format(format || 'yyyy-MM-dd hh:mm')
})
/**
 * 充值时间格式化,value是以秒为单位
 */
Vue.filter('sdatetime', function (value, format) {
  var val = parseInt(value + '000')
  return (new Date(val)).Format(format || 'yyyy-MM-dd hh:mm')
})
/**
 * 时间格式化，只显示月日
 */
Vue.filter('daytime', function (value, format) {
  return (new Date(value)).Format(format || 'MM-dd')
})

/**
 * 金额格式化
 *  value 金额，以分为单位
 */
Vue.filter('moneyFormat', function (value, num) {
  value = value / 100 // 转换为元
  num = typeof num === 'undefined' ? 2 : num
  if (parseFloat(value) > 0) {
    var str = parseFloat(value).toFixed(num)
    var strArr = str.split('.')
    return (/^0+$/.test(strArr[ 1 ])) ? strArr[ 0 ] : str
  } else {
    return 0
  }
})
/**
 * 金额格式化（保存不同位小数）
 *  value 金额，以分为单位
 */
Vue.filter('moneyDecFormat', function (value) {
  value = parseFloat(value)
  if (isNaN(value)) {
    return ''
  }
  value = value / 100// 转换为元
  if (value > 10) {
    value = value.toFixed(0)
    return value
  }
  if (value >= 1 && value <= 10) {
    value = value.toFixed(1)
    return value
  }
  if (value < 1) {
    value = value.toFixed(2)
    return value
  }
})

/**
 * 金额格式化（保存不同位小数）
 *  value 金额，以分为单位
 */
Vue.filter('toArray', function (value) {
  var array = []
  value.forEach(function (value, key) {
  })
  return array
})
/**
 * 金额格式化（保存不同位小数）el
 *  value 金额，以分为单位
 */
Vue.filter('groupRole', function (value) {
  return Metadata.groupPower[ value - 1 ].label
})

