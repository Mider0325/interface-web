/**
 * Created with WebStorm.
 * User: kevan
 * Email:258137678@qq.com
 * Date: 2017/1/23
 * Time: 上午11:28
 * To change this template use File | Settings | File Templates.
 */
var test = `pageSize!number: |
  fdafdsafdsa
list:
  - name!string!true!gogoog: 描述
    url!string!这是好多描述:
    pets:
      name!string:
      age!number:
      isgood!boolean:
    age!number!年龄:`
function Yaml2MockedYaml (test) {
  var str = ''
  var reg = /.*(!\w)*:(.*)[\n]?/mig
  var replacer = (m) => {
    var comment = ''
    var content = m
    var type = ''
    // 剥离备注

    content = content.replace(/:.*/i, (m) => {
      comment = m.replace(/:/, '')
      return ''
    })

    // 剥离类型
    content = content.replace(/(!string|!number|!boolean)/i, (m) => {
      type = m.replace('!', '')
      return ''
    })
    // 剥离是否必须
    content = content.replace(/(!true|!false)/i, (m) => {
      return ''
    })
    // 剥离是否必须
    content = content.replace(/(!.*)/i, (m) => {
      if (!comment) {
        comment = m.replace(/!/, '')
      }
      return ''
    })

    content = content.replace(/\n/, '')
    var count = ''
    var val = ''
    switch (type) {
      case 'string':
        count = '5-10'
        val = '\'@cword\''
        break
      case 'number':
        count = '10-100'
        val = '10'
        break
      case 'boolean':
        count = '1'
        val = 'true'
        break
    }
    count && (count = '|' + count)
    comment && (comment = '#' + comment)
    str += `${content}${count}: ${val} ${comment}` + '\n'
  }
  test.replace(reg, replacer)
  return str
}

console.log(Yaml2MockedYaml(test))

