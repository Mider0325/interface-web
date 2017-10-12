<template>
  <div>
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="controls">
          <el-button-group>
            <el-button type="primary">历史版本</el-button>
            <el-button type="primary">保存</el-button>
            <el-button type="primary">mock</el-button>
            <el-button type="primary">删除</el-button>
          </el-button-group>
        </div>
        <div class="nav-control scrolling-tabs-container">
          <div class="fade-left">
            <i class="fa fa-angle-left"></i>
          </div>
          <div class="fade-right">
            <i class="fa fa-angle-right"></i>
          </div>
          <ul class="nav-links scrolling-tabs">
            <li class="home">
              <a title="Project" class="shortcuts-project" href="/project">
                <span>项目</span>
              </a>
            </li>
            <li class="home">
              <span>当前版本V1.1</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="content-wrapper page-with-layout-nav">
      <editor :contents="get200(docyaml)"></editor>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .content-wrapper
    display flex
    height 700px
    width 100%
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Editor from 'src/components/MockEditer'
  import jsYaml from 'js-yaml'

  export default{
    mixins: [ BasePage ],
    components: { Editor },
    name: 'api_mock',
    data () {
      return {
        docyaml: `definitions: &defaults
  Pet:
    product_id: string|Unique identifier
    description: string|Description of product.
path: /name
type: get
description: 获取用fdsafdsa户姓名
parameters:
  body:
    <<: *defaults
    good:
      - fdsfdsa: good
        age: 123
    id!number!true!好多描述信息哈哈哈: fdsafdsa fdsafdsa 获取用fdsafdsa户姓名fdsafdsafdsafdsafdsafdsafdsafdsafdsafdfdsafdsaf fdsafds fdsafdsa fdsaf fdsa fdsafdsa fdsaf dsafds a fdsafd
    name!string!good:
    pet:
      id!number!true!haoduo:
      name!object!good:
        good: 123
        hao: 23
  path:
    name:
  query:
responses:
  200:
    pageSize!number:
    list:
      - name!string: 描述
        url!string!这是好多描述:
        pets:
          name!string:
          age!number:
          isgood!boolean:
        age!number!年龄:
  500:
    code: int
    error: string
`
      }
    },
    mounted: function () {
      console.log(jsYaml.dump(JSON.parse('{"a":1}')))
    },
    methods: {
      // apiYaml => MockedYaml
      Yaml2MockedYaml (input) {
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
        input.replace(reg, replacer)
        return str
      },
      /**
       * 获取状态为200的数据做mock处理
       * @param value
       */
      get200: function (value) {
        var json = jsYaml.safeLoad(value)
        json = json.responses[ '200' ]
        return this.Yaml2MockedYaml(jsYaml.dump(json))
      }
    }
  }
</script>
