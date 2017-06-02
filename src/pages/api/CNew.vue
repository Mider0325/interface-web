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
              <object-editer key="1" :required="true" :infos.sync="content.request.query"></object-editer>
            </div>
            <div class="objectEditer" v-if="activeRequestName=='body'">
              <object-editer key="2" :required="true" :infos.sync="content.request.body"></object-editer>
            </div>
            <div class="objectEditer" v-if="activeRequestName=='path'">
              <object-editer key="3" :infos.sync="content.request.path"></object-editer>
            </div>
          </div>
        </div>
        <div class="response">
          <h4>响应数据</h4>
          <div class="contentWarp">
            <object-editer class="objectEditer" key="4" :infos.sync="content.response"></object-editer>
          </div>
        </div>

      </el-form>
      <div class="bottom">
        <el-button v-if="content.status==1" @click="applyPublish" type="warning" size="small">
          <el-tooltip content="发布后会通知管理者，管理者统一后该api的修改能同步导项目中">
            <span>申请发布 <i class="ifont icon-menu"></i></span>
          </el-tooltip>
        </el-button>
        <el-dropdown v-if="content.status==1" split-button size="small" type="primary" @command="handleCommand"
                     @click="upDateApi">
          保存
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="publish">保存并发布</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="editText" v-show="model=='editText'"></div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .editWarp
    max-width 1200px
    height 100%
    margin auto
    padding 20px
    .bottom
      position: fixed
      bottom 0px
      border-top 1px solid #ddd
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import ObjectEditer from 'src/components/ObjectEditer/index.vue'
  import {apiToJson} from 'src/extend/Util'
  import {mapState} from 'vuex'
  import Server from 'src/extend/Server'

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
    watch: {
      contents: function (newVal) {
        console.log(newVal)
        this.content = apiToJson(newVal)
      }
    },
    computed: mapState({
      Metadata: state => state.Metadata
    }),
    mounted: function () {
      console.log('fdsafdsa-----', this.contents)
      console.log('fdsafdsa', this.content)
    },
    methods: {
      upDateApi: function () {
        Server({
          url: 'api/update',
          data: {
            apiId: this.content.id + '',
            request: JSON.stringify(this.content.request),
            response: JSON.stringify(this.content.response),
            description: this.content.description,
            name: this.content.name,
            method: this.content.method,
            publishStatus: '1',
            path: this.content.path
          },
          method: 'put'
        }).then((response) => {
          this.$message('修改成功')
        }).catch((e) => {

        })
      },
      /**
       * 删除api
       */
      delectApi: function () {

      },
      /**
       * 申请发布项目
       */
      applyPublish: function () {
        this.$prompt('输入备注', '申请发布', {
          inputPattern: /.{0,30}/,
          inputErrorMessage: '备注0到30个字'
        }).then(({ value }) => {
          Server({
            url: 'api/requestRelease',
            method: 'post',
            data: {
              apiId: this.content.id + '',
              description: value
            }
          }).then((response) => {
            this.content.status = 2
            this.$message('申请成功')
          }).catch(() => {
            this.$message('发布失败')
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },
      /**
       * 发布项目
       */
      publish: function () {
        this.$prompt('输入备注', '发布', {
          inputPattern: /.{0,30}/,
          inputErrorMessage: '备注0到30个字'
        }).then(({ value }) => {
          Server({
            url: 'api/update',
            data: {
              apiId: this.content.id + '',
              request: JSON.stringify(this.content.request),
              response: JSON.stringify(this.content.response),
              remark: value,
              name: this.content.name,
              method: this.content.method,
              publishStatus: '3',
              path: this.content.path
            },
            method: 'put'
          }).then((response) => {
            this.$message('修改成功')
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },
      handleCommand (command) {
        if (command == 'publish') {
          if (this.content.role < 3) {
            this.publish()
          } else {
            this.$message('需要管理员权限才能保存并发布。请申请发布等待管理员审核。')
          }
        }
      }
    }
  }
</script>
