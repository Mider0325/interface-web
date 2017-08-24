<template>
  <div class="content">
    <restful-tool :info="apiInfo"></restful-tool>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">
  .content
    padding 30px
</style>

<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import RestfulTool from 'src/components/RestfulTool/index.vue'
  export default {
    mixins: [ BaseComponent ],
    name: 'demo_tool',
    components: { RestfulTool },
    data: function () {
      return {
        apiInfo: {
          path: 'users/info',
          name: '接口demo',
          method: 'get',
          description: '获取用fdsafdsa户姓名',
          request: {
            path: [],
            body: [{
              name: 'fdsa',
              mock: '@id',
              type: 'string'
            } ],
            query: [ {
              name: 'fdsa',
              mock: '@id',
              type: 'string'
            } ]
          },
          resopnse: {}
        }
      }
    },
    watch: {},
    mounted () {
    },
    methods: {}
  }
</script>
