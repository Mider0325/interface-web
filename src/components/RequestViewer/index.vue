<template>
  <div>
    <div class="parametersContent" v-if="value" v-for="(value,key) in apiInfo">
      <div class="paramsItem">
        <h5>
          {{key}}
          <el-tooltip effect="light" v-if="tips[key]">
            <div slot="content">
              <div class="tipcontent" v-html="tips[key]"></div>
            </div>
            <i class="header-icon el-icon-information"></i>
          </el-tooltip>
        </h5>
        <div class="contral">
          <el-button-group>
            <el-button size="mini" type="primary" icon="edit"></el-button>
            <el-button size="mini" type="primary" icon="share"></el-button>
            <el-button size="mini" type="primary" icon="delete"></el-button>
          </el-button-group>
        </div>
      </div>
      <div>
        <el-tree :data="getParameters(value)" :default-expand-all="true" :render-content="renderContent"
                 @node-click="handleNodeClick"></el-tree>
      </div>
    </div>
  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .parametersContent
    .paramsItem
      position relative
      margin-top 20px
      .tipcontent
        width 400px
      .contral
        position absolute
        right 0
        top 0
        bottom 0
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import TreeItem from './TreeItem.vue'
  var body = require('src/assets/tip/requestparams/body.md')
  var query = require('src/assets/tip/requestparams/query.md')
  var path = require('src/assets/tip/requestparams/path.md')
  export default {
    mixins: [ BaseComponent ],
    name: 'RequestViewer',
    components: { TreeItem },
    props: {
      apiInfo: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data: function () {
      return {

        tips: {
          body: body,
          path: path,
          query: query
        }
      }
    },
    watch: {},
    mounted () {
      console.log('------------', body)
    },
    methods: {
      analysisKey: function (key, value) {
        function isType (val) {
          var map = [ 'string', 'number', 'boolean', 'object', 'array' ]
          return map.indexOf(val) != -1
        }

        function isRequire (val) {
          var map = [ 'true', 'false' ]
          return map.indexOf(val) != -1
        }

        function checkType (data, val) {
          if (isType(val)) {
            data.schema = val
          } else if (isRequire(val)) {
            data.required = val
          } else {
            data.description = val
          }
        }

        var vals = key.split('!')

        var data = {
          label: vals[ 0 ],
          schema: 'string',
          required: false,
          description: ''
        }
        // 动态计算参数类型。如果没有指定参数类型则尝试计算参数类型。
        if (value) {
          if (typeof value === 'object') {
            data.schema = 'object'
          }
          if (value instanceof Array) {
            data.schema = 'array'
          }
        }

        checkType(data, vals[ 1 ])
        checkType(data, vals[ 2 ])
        checkType(data, vals[ 3 ])

        if (value && typeof value !== 'object') {
          data.description = value
        }
        if (data.description) {
          data.mindescription = (data.description + '').substring(0, 20) + '...'
        }
        // todo 错误验证
        return data
      },
      getParameters: function (data) {
        var me = this

        function deepWalk (data) {
          var array = []
          for (let key in data) {
            var parame = {}
            Object.assign(parame, me.analysisKey(key, data[ key ]))
            if (typeof data[ key ] === 'object') {
              parame.children = []
              if (parame.schema == 'object') {
                parame.children = deepWalk(data[ key ])
              } else if (parame.schema == 'array') {
                if (data[ key ][ 0 ]) {
                  parame.children = deepWalk(data[ key ][ 0 ])
                }
              }
            }
            array.push(parame)
          }
          return array
        }

        return deepWalk(JSON.parse(JSON.stringify(data)))
      },
      renderContent: function (h, { node }) {
        return h(TreeItem, {
          props: {
            info: node.data
          }
        })
      },
      handleNodeClick: function () {

      }
    }
  }
</script>

