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
          <!--<el-button-group>
            <el-button size="mini" type="primary" icon="edit"></el-button>
            <el-button size="mini" type="primary" icon="share"></el-button>
            <el-button size="mini" type="primary" icon="delete"></el-button>
          </el-button-group>-->
        </div>
      </div>
      <div>
        <view-doc :apiInfo="value"></view-doc>
      </div>
    </div>
  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .parametersContent
    .el-tooltip
      display inline-block
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
  import ViewDoc from './View.vue'
  var body = require('src/assets/tip/requestparams/body.md')
  var query = require('src/assets/tip/requestparams/query.md')
  var path = require('src/assets/tip/requestparams/path.md')
  export default {
    mixins: [ BaseComponent ],
    name: 'RequestViewer_View',
    components: { ViewDoc },
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

    }
  }
</script>

