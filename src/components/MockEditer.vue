<template>
  <div class="content">
    <div class="editor">
      <yaml-editer :contents="contents" :before-change="yamlBeforeChange" :on-change="editorChange"></yaml-editer>
    </div>
    <div class="preview">
      <code-viewer :contents="jsonOutput" :ctype="'json'"></code-viewer>
    </div>
  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .content
    display flex
    height 100%
    width 100%
    .mock-helper {
      width 100px
      overflow-y auto
      background-color: #002B36;
      /*------------滚动条样式修改------------*/
      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-track-piece {
        background-color: rgba(0, 0, 0, 0);
        -webkit-border-radius: 6px;
      }
      &::-webkit-scrollbar-thumb:vertical {
        height: 5px;
        background-color: rgba(125, 122, 122, 0.56);
        -webkit-border-radius: 6px;
      }

      .mock-word {
        margin-bottom 1px
      }
    }
    .editor
      height 100%
      flex 1
      display -webkit-box
      -webkit-box-orient vertical
      .error-hint {
        background-color: #002B36;
        p {
          &::before {
            display inline-block
            content '>>'
            margin-right 40px
            color #fff
            text-decoration none
          }
          margin 0
          color red
          text-decoration underline
          cursor pointer
          line-height 2
        }
      }

      .econ
        -webkit-box-flex 1
        width 100%
    .preview
      height 100%
      flex 1

</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import CodeViewer from 'src/components/CodeViewer'
  import jsYaml from 'js-yaml'
  import YamlEditer from 'src/components/YamlEditer'
  import {pipe} from 'src/extend/Util'
  var Mock = require('mockjs')

  export default {
    mixins: [ BaseComponent ],
    name: 'MockEditer',
    components: { CodeViewer, YamlEditer },
    props: {
      contents: {
        type: String,
        default: function () {
          return 'hello mock'
        }
      },
      mockWords: {
        type: Array,
        default: function () {
          return [ '@cword', '@url', '@email', '|10-100: 10', '|1: true', '|10: \'@cword\'', { '@date': '日期' } ]  // mock 关键字
        }
      }
    },
    data: function () {
      return {
        errorList: [],
        defArr: [],
        jsonOutput: '', // mocked data json
        mockOutput: '' // mocked schema obj
      }
    },
    editor: null,
    computed: {},
    mounted () {
    },
    methods: {
      // 对编辑器内容进行管道操作 注意异常捕获处理
      yamlBeforeChange: function (value) {
        this.mockOutput = pipe(value, this.faultTolerant, jsYaml.safeLoad, this.trimDef)
        return this.mockOutput
      },
      // 折叠以某key开头的代码块
      collapseLinesWithStartKey (key) {
        if (!key) return null
        var patern = new RegExp(key)
        var ops = { regExp: true }
        this.$options.editor.find(patern, ops)
        this.$options.editor.getSession().toggleFoldWidget()
      },
      // 在当前光标处插入文本
      insert (text) {
        this.$options.editor.insert(text)
      },
      // editor Change事件处理
      editorChange: function (data) {
        try {
          this.jsonOutput = pipe(this.mockOutput, this.mock2Data, JSON.stringify)
        } catch (e) {
        }
      },
      // 清理不需要的mock数据
      trimDef (input) {
        var defArr = this.defArr || []
        for (let def of defArr) {
          delete input[ def ]
        }
        return input
      },
      // 容错
      faultTolerant (input) {
        // 容错属性值前面缺空格
        input = input.replace(/([\n\r]?)(.*)([\n\r]?)/gm, function (m, p1, p2, p3) {
          var s = p2.split(/:(?!\s)/)
          if (s.length >= 2) s[ 1 ] = s[ 0 ].indexOf(':') > -1 ? s[ 1 ] : ' ' + s[ 1 ]
          return p1 + s.join(':') + p3
        })
        input = input.replace(/['"]?(@\w+)['"]?/gm, '\'$1\'') // 容错mock占位符没转义
        return input
      },
      // mock配置 => mock输出
      mock2Data (input) {
        return Mock.mock(input)
      }
    }
  }
</script>

