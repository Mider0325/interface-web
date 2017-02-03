<template>
  <div class="editor">
    <div class="econ">
    </div>
  </div>

</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">

  .editor
    height 100%
    width 100%
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

</style>
<script type="text/ecmascript-6">
  /*
   * yaml 编辑器，提供统一的yaml编辑，以及错误提示，属于项目的基本组件。
   * */
  import BaseComponent from 'src/extend/BaseComponent'
  import CodeViewer from 'src/components/CodeViewer'
  import ace from 'ace'
  import jsYaml from 'js-yaml'
  import editorSetting from 'src/assets/data/editorSetting.json'
  var langTools = ace.require('ace/ext/language_tools')
  var debounce = require('lodash/debounce')
  var Range = ace.require('ace/range').Range
  import {pipe} from 'src/extend/Util'

  export default {
    mixins: [ BaseComponent ],
    name: 'YamlEditer',
    components: { CodeViewer },
    props: {
      // 传入的初始yaml内容
      contents: {
        type: String,
        default: function () {
          return 'hello mock'
        }
      },
      // 自动提示的内容列表
      autocompletes: {
        type: Array,
        default: function () {
          return [ '!number', '!string', '!object', '!array', '!boolean', '!true', '!false' ]
        }
      },
      // 文本内容改变之前。可以在改变之前对内容进行容错处理，处理后的数据才会进行yaml合法性检查。
      beforeChange: {
        type: Function,
        default: function (text) {
          return text
        }
      },
      // 内容变化后会调用
      onChange: {
        type: Function,
        default: function () {
        }
      }
    },
    data: function () {
      return {
        errorList: [],
        defArr: [],
        mockOutput: '' // mocked schema obj
      }
    },
    watch: {
      contents: function (newVal, oldVal) {
        if (newVal != this.$options.editor.getValue()) {
          this.$options.editor.setValue(newVal) // editor初始化
        }
      }
    },
    editor: null,
    computed: {},
    mounted () {
      this.$options.editor = ace.edit(this.$el.getElementsByClassName('econ')[ 0 ])
      langTools.addCompleter(this.genYamlCompleter()) // 配置mock关键字自动完成
      this.$options.editor.setOptions((editorSetting.enableLiveAutocompletion = false, editorSetting))  // 因 `@` `|` 不能触发提示，禁用自动提示 转为由`afterExec`触发
      this.$options.editor.setOption('useWorker', false)
      this.$options.editor.resize()
      this.$options.editor.$blockScrolling = Infinity
      this.$options.editor.setValue(this.contents) // editor初始化
      // 触发提示
      this.$options.editor.commands.on('afterExec', e => {
        if (e.command.name == 'insertstring' && /^[@\w|!]$/.test(e.args)) this.$options.editor.execCommand('startAutocomplete')
      })
      this.$options.editor.getSession().on('change', debounce(e => this.editorChange(e), 300))  // 监听editor内容变化 去抖
      this.editorChange()
    },
    methods: {
      /* ================对内容处理============== */
      /**
       * 清理不需要的mock数据
       * @param input
       * @returns {*}
       */
      trimDef (input) {
        var defArr = this.defArr || []
        for (let def of defArr) {
          delete input[ def ]
        }
        return input
      },
      /* ===============处理错误相关============== */
      annotation: function (error) {
        var session = this.$options.editor.getSession()
        session.setAnnotations(session.getAnnotations().concat([ {
          row: error.mark.line - 1,
          column: error.mark.column,
          text: error.message,
          type: 'error'
        } ]))
      },
      /**
       * 清除错误
       */
      cleanAnnotation: function () {
        var session = this.$options.editor.getSession()
        session.setAnnotations([])
      },
      /**
       * 标记错误
       * @param e
       */
      markerError (e) {
        for (let error of this.errorList) {
          // 相同行的错误只提示一个
          if (error.mark.line == e.mark.line) return
        }
        this.annotation(e)
      },
      /* ============================= */
      /**
       * editor Change事件处理
       * 检查内容是否有错误，有错误进行提示。没有错误的话。发送事件出去。
       */
      editorChange: function () {
        var content = this.$options.editor.getValue()
        var hasError = false
        try {
          pipe(content, this.beforeChange, jsYaml.safeLoad)
          this.cleanAnnotation()
        } catch (e) {
          console.error(e)
          hasError = true
          if (e instanceof jsYaml.YAMLException) this.markerError(e)
        } finally {
          if (!hasError) {
            this.onChange(content)
          }
        }
      },
      // 生成MockCompleter
      genYamlCompleter () {
        var mockWords = this.autocompletes.map(word => word.word)
        return {
          getCompletions: function (editor, session, pos, prefix, callback) {
            var row = pos.row
            var col = pos.column - prefix.length
            var at = session.getTextRange(new Range(row, col - 1, row, col))
            var wordList = mockWords
            if (prefix.length !== 0) {
              wordList = mockWords.filter(meta => {
                var reg = new RegExp(prefix.split('').join('\\w*'))
                return reg.test(meta)
              })
            }
            var isAt = /^[@|!]/.test(at)
            callback(null, wordList.map(function (word, index) {
              var isWordStartWithAt = isAt && new RegExp(`^${at}`).test(word)
              return {
                name: word,
                value: isWordStartWithAt ? word.replace(at, '') : word,
                score: isWordStartWithAt ? 1000 + index : 1000 - index,
                meta: 'mock'
              }
            }))
          }
        }
      }
    }
  }
</script>

