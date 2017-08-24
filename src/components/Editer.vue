<template>
  <div style="width: 100%">

    <div class="content">
      <div class="editor">
        <yaml-editer :contents="content" :on-change="editorChange"></yaml-editer>
      </div>
      <div class="preview">
        <doc-viewer :apiInfo="apiInfo"></doc-viewer>
      </div>
    </div>
  </div>

</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">
  .content
    display flex
    height 100%
    width 100%
    .editor
      height 100%
      flex 1
      border-right 1px solid #ddd
      .econ
        height 100%
        width 100%
    .preview
      padding 5px
      height 100%
      flex 1
      overflow auto
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import CodeViewer from 'src/components/CodeViewer'
  import DocViewer from 'src/components/DocViewer'
  import YamlEditer from 'src/components/YamlEditer'
  import jsYaml from 'js-yaml'
  export default {
    mixins: [ BaseComponent ],
    name: 'Editer',
    components: { CodeViewer, DocViewer, YamlEditer },
    editer: null,
    data: function () {
      return {
        content: `definitions: &defaults
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
    pageSize: int
    list:
      - name: int|描述
        url: string|描述
        pets:
          - $ref: $Pet
        age: int
  500:
    code: int
    error: string
`,
        apiInfo: {
          type: ''
        }

      }
    },

    mounted () {
    },
    methods: {
      editorChange: function (data) {
        var apiInfo
        var hasError = false
        this.content = data
        try {
          apiInfo = jsYaml.safeLoad(this.content)
          console.log(typeof this.apiInfo, this.apiInfo)
        } catch (e) {
          hasError = true
        } finally {
          if (!hasError) {
            this.apiInfo = apiInfo
          }
        }
      }
    }
  }
</script>

