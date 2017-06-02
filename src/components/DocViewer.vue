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
              <el-tabs v-model="activeRequestName">
                <el-tab-pane label="请求(query)" name="query"></el-tab-pane>
                <el-tab-pane label="请求(body)" name="body"></el-tab-pane>
                <el-tab-pane label="请求(path)" name="path"></el-tab-pane>
              </el-tabs>
              <div class="objectEditer" v-if="activeRequestName=='query'">
                <!--对象编辑器-->
                <object-editer key="1" :editable="false" :required="true"
                               :infos.sync="apiInfo.request.query"></object-editer>
              </div>
              <div class="objectEditer" v-if="activeRequestName=='body'">
                <object-editer key="2" :editable="false" :required="true"
                               :infos.sync="apiInfo.request.body"></object-editer>
              </div>
              <div class="objectEditer" v-if="activeRequestName=='path'">
                <object-editer key="3" :editable="false" :infos.sync="apiInfo.request.path"></object-editer>
              </div>
            </div>
          </section>
          <section class="responses">
            <h4>响应数据</h4>
            <div class="apiInfo">
              <object-editer class="objectEditer" :editable="false" key="4"
                             :infos.sync="apiInfo.response"></object-editer>
            </div>
          </section>
          <section class="responses">
            <h4>
              调试
              <el-switch
                  v-model="openTry"
                  on-text="关闭调试"
                  :width="100"
                  off-text="开启调试">
              </el-switch>
            </h4>
          </section>
        </div>
        <hr>
        <div>
          <restful-tool :info="apiInfo" v-if="openTry"></restful-tool>
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
  import RestfulTool from 'src/components/RestfulTool/index.vue'
  import ObjectEditer from 'src/components/ObjectEditer/index.vue'

  export default {
    mixins: [ BaseComponent ],
    name: 'DocViewer',
    components: { RestfulTool, ObjectEditer },
    props: {
      apiInfo: {
        type: Object,
        default: function () {
          return {
            request: {}
          }
        }
      }
    },
    data: function () {
      return {
        activeRequestName: 'query',
        openTry: false
      }
    },
    watch: {},
    mounted () {
    },
    methods: {}
  }
</script>

