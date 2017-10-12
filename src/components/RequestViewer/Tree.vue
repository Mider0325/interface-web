<template>
  <tree-item
      class="item"
      :model="treeData">
  </tree-item>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import TreeItem from 'src/components/RequestViewer/TreeItem.vue'

  export default {
    mixins: [ BaseComponent ],
    name: 'RequestViewer_Tree',
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
        treeData: {
          name: 'My Tree',
          children: [
            { name: 'hello' },
            { name: 'wat' },
            {
              name: 'child folder',
              children: [
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            }
          ]
        }
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

        var vals = key.split(this.split)

        var data = {
          name: vals[ 0 ],
          schema: '',
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
        console.log(data.name, data.schema, value)

        checkType(data, vals[ 1 ])
        checkType(data, vals[ 2 ])
        checkType(data, vals[ 3 ])

        // todo 错误验证
        return data
      },
      getParameters: function (data) {
        var me = this
        var array = []

        if (!data) {
          return array
        }

        function deepWalk (data, deep) {
          var deepKey = ''
          for (var i = 0; i < deep; i++) {
            deepKey += '|----'
          }
          for (let key in data) {
            var parame = {}
            Object.assign(parame, me.analysisKey(key, data[ key ]))
            parame.name = deepKey + parame.name
            array.push(parame)
            if (typeof data[ key ] === 'object') {
              if (parame.schema == 'object') {
                deepWalk(data[ key ], deep + 1)
              } else if (parame.schema == 'array') {
                if (data[ key ][ 0 ]) {
                  deepWalk(data[ key ][ 0 ], deep + 1)
                }
              }
            }
          }
          return
        }

        deepWalk(data, 0)
        return array
      }
    }
  }
</script>

