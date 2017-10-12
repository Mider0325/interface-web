<template>
  <div class="codeviewer">
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .codeviewer
    height 100%
    width 100%
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  var debounce = require('lodash/debounce')
  import ace from 'ace'
  export default {
    mixins: [ BaseComponent ],
    name: 'CodeViewer',
    props: {
      ctype: {
        type: String,
        required: true
      },
      contents: {
        type: String,
        default: function () {
          return '{}'
        }
      },
      options: {
        type: Object,
        default: function () {
          return {
            'readOnly': true,
            'theme': 'ace/theme/solarized_dark'
          }
        }
      },
      // 内容变化后会调用
      onChange: {
        type: Function,
        default: function () {
        }
      }
    },
    editer: null,
    data: function () {
      return {
        editerId: 'editer_' + (new Date() - 0) + '_' + parseInt(Math.random() * 1000),
        content: ''
      }
    },
    watch: {
      contents: function (newVal) {
        if (newVal != this.$options.editor.getValue()) {
          this.$options.editor.setValue(newVal || '') // editor初始化
        }
      },
      ctype: function (val, old) {
        this.$options.editor.getSession().setMode('ace/mode/' + val)
      }
    },
    mounted () {
      this.$options.editor = ace.edit(this.$el)
      this.$options.editor.setOptions(this.options)
      this.$options.editor.$blockScrolling = Infinity
      this.$options.editor.getSession().setMode('ace/mode/' + this.ctype)
      this.changeContent()
      this.$options.editor.resize()
      this.$options.editor.getSession().on('change', debounce(e => this.editorChange(e), 300))  // 监听editor内容变化 去抖
    },
    beforDestroy: function () {
      if (this.$options.editor) {
        this.$options.editor.container.remove()
      }
    },
    methods: {
      editorChange: function () {
        var content = this.$options.editor.getValue()
        this.onChange(content)
      },
      changeContent: function () {
        this.$options.editor.setValue(this.contents || '')
      }
    }
  }
</script>

