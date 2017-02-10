<template>
  <div class="codeviewer">
  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .codeviewer
    height 100%
    width 100%
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
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
      contents: function (val) {
        this.changeContent()
      },
      ctype: function (val, old) {
        this.$options.editor.getSession().setMode('ace/mode/' + val)
      }
    },
    mounted () {
      this.$options.editor = ace.edit(this.$el)
      this.$options.editor.setOptions(this.options)
      this.$options.editor.getSession().setMode('ace/mode/' + this.ctype)
      this.$options.editor.$blockScrolling = Infinity
      this.changeContent()
      this.$options.editor.resize()
    },
    beforDestroy: function () {
      if (this.$options.editor) {
        this.$options.editor.container.remove()
      }
    },
    methods: {
      changeContent: function () {
        var str = ''
        if (!this.$options.editor) {
          return
        }
        if (this.ctype == 'json') {
          try {
            str = JSON.stringify(JSON.parse(this.contents), null, 2)
          } catch (e) {
          }
          this.$options.editor.setValue(str)
        } else {
          this.$options.editor.setValue(this.contents)
        }
      }
    }
  }
</script>

