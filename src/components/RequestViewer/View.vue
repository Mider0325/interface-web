<template>

  <div class="view">
    <div class="contral">
      <el-switch
          v-model="showType"
          on-color="#39bb2f"
          :width="70"
          on-text="TREE"
          off-text="JSON"
          off-color="#bb221b">
      </el-switch>
    </div>
    <el-tree v-if="showType" :data="getParameters(apiInfo)" :default-expand-all="true"
             :render-content="renderContent"
             @node-click="handleNodeClick"></el-tree>
    <div class="jsonView" v-else>
      <code-viewer :contents="getJsonParameters(apiInfo)" :options="{theme:'',readOnly:true,focusTimout:10000000}"
                   :ctype="'json'"></code-viewer>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .view
    width 100%
    position relative
    .jsonView
      width 100%
      height: 200px
    .contral
      opacity .7
      position: absolute
      top: -30px
      right 3px
      z-index 100
      &:hover
        opacity 1
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import TreeItem from './TreeItem.vue'
  import CodeViewer from 'src/components/CodeViewer'

  export default {
    mixins: [ BaseComponent ],
    name: 'RequestViewer',
    components: { CodeViewer },
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
        showType: true
      }
    },
    watch: {},
    mounted () {
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
      getJsonParameters: function (data) {
        var me = this
        var params = {}
        function deepWalk (data, params) {
          for (let key in data) {
            var parame = {}
            Object.assign(parame, me.analysisKey(key, data[ key ]))
            params[ parame.label ] = ''
            if (typeof data[ key ] === 'object') {
              if (parame.schema == 'object') {
                params[ parame.label ] = {}
                deepWalk(data[ key ], params[ parame.label ])
              } else if (parame.schema == 'array') {
                params[ parame.label ] = [ {} ]
                if (data[ key ][ 0 ]) {
                  deepWalk(data[ key ][ 0 ], params[ parame.label ][ 0 ])
                }
              }
            }
          }
        }

        deepWalk(data, params)
        return JSON.stringify(params)
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

