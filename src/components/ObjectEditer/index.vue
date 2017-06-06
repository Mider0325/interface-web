<template>
  <div class="ObjectEditer">

    <div style="margin: 0px 0 10px 0">
      <el-button v-if="empty(info)" size="small" @click="showMock" type="primary" icon="document">mock</el-button>
      <template v-if="editable">
        <el-button size="small" @click="importJson" type="primary" icon="upload">导入数据</el-button>
        <el-button size="small" @click="addItem(info)" type="primary" icon="plus">添加列</el-button>
      </template>
    </div>
    <div class="div-table">
      <ul class="div-table-header div-table-line cb">
        <li class="name">
          参数名称
        </li>
        <li class="type">类型</li>
        <li class="mock">
          mock
          <router-link tag="i" :to="{path:'/help/doc',query:{path:'help/mockjs.html'},hash:'DPD'}"
                       href="/help/doc?path=help%2Fmockjs.html#DPD" class="el-icon-warning"></router-link>
        </li>
        <li class="desc">
          描述
        </li>
        <li class="require" v-if="required">是否必须</li>
        <li class="operate">
          操作
          <el-popover
              ref="popover1"
              placement="top-start"
              title="常用快捷键"
              width="400"
              trigger="hover"
          >
            <pre>
ctrl+del 或 ctrl+backspace 删除行
ctrl+d 复制行
shift+enter 添加子行元素
ctrl+i 当前行导入json子元素
shift+up 向上移动光标
shift+down 向下移动光标
shift+left 向左移动光标
shift+right 向右移动光标
            </pre>
          </el-popover>
          <i class="el-icon-warning" v-popover:popover1></i>
        </li>
      </ul>
    </div>
    <div
        @keydown.shift.up="changeFocus($event,-inputnum)"
        @keydown.shift.down="changeFocus($event,inputnum)"
        @keydown.shift.left="changeFocus($event,-1)"
        @keydown.shift.right="changeFocus($event,1)"
    >
      <item :required="required" :editable="editable" :data="info"></item>
    </div>

  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .ObjectEditer
    width 100%
    .nameWarp
      display flex
      .levelPosition
        width 20px
        display inline-block
        height 100%
      .nameInput
        flex 1
        border none
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import Item from './Item.vue'
  import {jsonToMock, jsonDismantle} from 'src/extend/Util'
  import {mapState} from 'vuex'
  import $ from 'jQuery'
  export default {
    mixins: [ BaseComponent ],
    name: 'ObjectEditer',
    components: { Item },
    props: {
      infos: {
        type: Array,
        default: function () {
          return []
        }
      },
      required: {
        type: Boolean,
        default: function () {
          return false
        }
      },
      projectId: {
        type: [ String, Number ],
        default: function () {
          return ''
        }
      },
      editable: {
        type: Boolean,
        default: function () {
          return true
        }
      }
    },
    data: function () {
      return {
        focusInput: null,
        inputnum: 5,
        info: this.infos
      }
    },
    computed: mapState({
      Metadata: state => state.Metadata
    }),
    watch: {
      infos: function (newValue) {
        this.info = newValue
      }
    },
    mounted () {
      this.inputnum = this.required ? 5 : 4
    },
    methods: {
      changeFocus: function (event, flag) {
        if (this.focusInput) {
          this.focusInput.blur()
        }
        var allInput = $(event.currentTarget).find('input,textarea,select')
        allInput = [ ...allInput ]
        var currInput = event.target
        var index = allInput.indexOf(currInput)
        currInput.blur()
        index += flag
        if (index < 0) {
          index = 0
        }
        if (index >= allInput.length) {
          index = allInput.length - 1
        }
        this.focusInput = allInput[ index ]
        allInput[ index ].focus()
      },
      empty: function (data) {
        return data.length
      },
      showMock: function () {
        var me = this
        this.openDialog({
          name: 'DShowJson',
          data: {
            title: 'mock数据显示',
            info: JSON.stringify(jsonToMock(me.info), null, 4)
          },
          methods: {}
        })
      },
      importJson: function () {
        var me = this
        this.openDialog({
          name: 'DImportJson',
          data: {
            title: '导入数据',
            projectId: this.projectId
          },
          methods: {
            onImport: function (data) {
              me.$emit('update:infos', jsonDismantle(data))
            }
          }
        })
      },

      addItem: function (item) {
        item.push({
          name: '',
          require: 'true',
          type: 'string',
          mock: '',
          description: ''
        })
      }
    }
  }
</script>