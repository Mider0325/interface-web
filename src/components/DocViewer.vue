<template>
  <div class="path">
    <div class="operations">
      <div class="operation">
        <header>
          <a class="focus-editor" tooltip-trigger="mouseenter"> </a>
          <div class="http-method">
            <div :class="[apiInfo.method]" class="method">{{apiInfo.method}}</div>
            {{apiInfo.path}}
          </div>
        </header>
        <div class="content">
          <section class="description" v-if="apiInfo.description"><h4>描述</h4>
            <div>
              <p>{{apiInfo.description}}</p>
            </div>
          </section>
          <section class="parameters">
            <h4>参数</h4>
            <div class="apiInfo">
              <request-viewer :apiInfo="apiInfo.parameters"></request-viewer>
            </div>
          </section>
          <section class="responses">
            <h4>响应数据</h4>
            <div class="apiInfo">
              <request-viewer :apiInfo="apiInfo.responses"></request-viewer>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .path
    list-style: none;
    .operations
      .operation
        list-style: none;
        border-radius: 5px;
        header
          padding: 10px;
          color: #323235;
          position: relative;
          .method
            display inline-block
            font-size 20px
            margin-right 20px
            &.post
              color: #dd8a2e;
            &.get
              color: #0a8edd;
          .edit
            position: absolute;
            right: 30px;
            top: 10px;
            color: #ffffff;
        .content
          padding: 10px;
          display block
          .apiInfo
            padding-left 20px
          section
            display block
            width 100%
            .responseContent
              width 100%
              height 400px
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import CodeViewer from 'src/components/CodeViewer'
  import RequestViewer from 'src/components/RequestViewer/index.vue'
  export default {
    mixins: [ BaseComponent ],
    name: 'DocViewer',
    components: { CodeViewer, RequestViewer },
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
        parameters: {},
        split: '!',
        jsonViewOption: {
          'theme': '',
          'showLineNumbers': false
        }
      }
    },
    watch: {},
    mounted () {
    },
    methods: {
      getResponse: function (data) {
        var array = []
        if (data) {
          for (let key in data) {
            data[ key ].code = key
            array.push(data[ key ])
          }
        }
        return array
      }
    }
  }
</script>

