/**
 * Created with WebStorm.
 * User: kevan
 * Email:258137678@qq.com
 * Date: 2017/1/23
 * Time: 上午11:02
 * To change this template use File | Settings | File Templates.
 */
export var pipe = function () {
  var args = [].slice.call(arguments, 0)
  var val = args[ 0 ]
  for (let arg of args) {
    if (args.indexOf(arg) != 0 && typeof arg === 'function') val = arg(val)
  }
  return val
}
