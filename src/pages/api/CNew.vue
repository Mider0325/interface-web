<template>
  <div class="editWarp">
    <div class="editStructure" v-show="model=='editStructure'">
      <el-form ref="form" :model="content" label-width="80px">
        <div class="base">
          <h4>基础信息</h4>
          <el-row type="flex" :gutter="0">
            <el-col :span="6">
              <el-form-item label="名称">
                <el-input v-model="content.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="路径">
                <el-input v-model="content.path"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="方法">
                <el-select v-model="content.method" placeholder="选择类型">
                  <el-option :key="key" v-for="(item, key) in Metadata.methods" :label="item.label"
                             :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="描述">
            <el-input type="textarea" v-model="content.description"></el-input>
          </el-form-item>
        </div>
        <div class="request">
          <h4>发送数据</h4>
          <div class="contentWarp">
            <el-tabs v-model="activeRequestName">
              <el-tab-pane label="请求(query)" name="query"></el-tab-pane>
              <el-tab-pane label="请求(body)" name="body"></el-tab-pane>
              <el-tab-pane label="请求(path)" name="path"></el-tab-pane>
            </el-tabs>
            <div class="objectEditer" v-if="activeRequestName=='query'">
              <!--对象编辑器-->
              <object-editer key="1" :required="true" :datas="content.request.query"></object-editer>
            </div>
            <div class="objectEditer" v-if="activeRequestName=='body'">
              <object-editer key="2" :required="true" :datas="content.request.body"></object-editer>
            </div>
            <div class="objectEditer" v-if="activeRequestName=='path'">
              <object-editer key="3" :datas="content.request.path"></object-editer>
            </div>
          </div>
        </div>
        <div class="response">
          <h4>响应数据</h4>
          <div class="contentWarp">
            <object-editer class="objectEditer" key="4" :datas="content.response"></object-editer>
          </div>
        </div>
      </el-form>
    </div>
    <div class="editText" v-show="model=='editText'"></div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .editWarp
    max-width 1200px
    height 100%
    padding 20px
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import ObjectEditer from 'src/components/ObjectEditer/index.vue'
  import {apiToJson} from 'src/extend/Util'
  import {mapState} from 'vuex'

  export default{
    mixins: [ BasePage ],
    components: { ObjectEditer },
    name: 'api_cnew',
    props: { contents: {} },
    data () {
      return {
        model: 'editStructure',
        activeRequestName: 'query',
        content: apiToJson(this.contents)
      }
    },
    computed: mapState({
      Metadata: state => state.Metadata
    }),
    mounted: function () {
    },
    methods: {}
  }
</script>
