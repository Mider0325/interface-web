<template>
  <div class="editWarp">

    <div class="editStructure" v-if="content.id">

      <el-alert v-if="content.status==2"
                title="注意该接口处于审核中状态。修改不会被保存。"
                :closable="false"
                type="warning">
      </el-alert>
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
              <el-tab-pane name="body">

                <span slot="label">
                  请求(body)
                  <el-tooltip effect="light">
                  <div slot="content">
                    <div class="tipcontent" v-html="tips.body"></div>
                  </div>
                  <i class="header-icon el-icon-information"></i>
                </el-tooltip>
                </span>
                <object-editer key="2" :required="true" :projectId="content.projectId"
                               :infos.sync="content.request.body"></object-editer>
              </el-tab-pane>
              <el-tab-pane name="query">
                <span slot="label">
                  请求(query)
                  <el-tooltip effect="light">
                    <div slot="content">
                      <div class="tipcontent" v-html="tips.query"></div>
                    </div>
                    <i class="header-icon el-icon-information"></i>
                  </el-tooltip>
                </span>


                <object-editer key="1" :required="true" :projectId="content.projectId"
                               :infos.sync="content.request.query"></object-editer>
              </el-tab-pane>
              <el-tab-pane name="path">
                <span slot="label">
                  请求(path)
                  <el-tooltip effect="light">
                  <div slot="content">
                    <div class="tipcontent" v-html="tips.path"></div>
                  </div>
                  <i class="header-icon el-icon-information"></i>
                </el-tooltip>
                </span>
                <object-editer key="3" :projectId="content.projectId"
                               :infos.sync="content.request.path"></object-editer>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="response">
          <h4>响应数据</h4>
          <div class="contentWarp">
            <object-editer class="objectEditer" key="4" :projectId="content.projectId"
                           :infos.sync="content.response"></object-editer>
          </div>
        </div>

      </el-form>

      <div class="layout-nav bottom" v-if="content.status==1">
        <div class="tip">
          提示：如果该接口所在项目你有管理员权限，你可以直接保存并发布接口，否则只能保存接口，需要发布的话，需要申请发布。申请后等管理员审核。
        </div>
        <el-button v-if="content.role>2" @click="applyPublish" type="warning" size="small">
          <el-tooltip content="发布后会通知管理者，管理者统一后该api的修改能同步导项目中">
            <span>申请发布 <i class="ifont icon-menu"></i></span>
          </el-tooltip>
        </el-button>

        <el-dropdown v-if="content.role>2" split-button size="small" type="primary" @command="handleCommand"
                     @click="upDateApi">
          保存
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :disabled="true" command="publish">保存并发布 <span>(需要管理员权限)</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown v-if="content.role<=2" split-button size="small" type="primary" @command="handleCommand"
                     @click="publish">
          保存并发布
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="upDateApi">保存</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>


      </div>

    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .editWarp
    max-width 1200px
    height 100%
    margin auto
    padding 20px
    .tip
      float left
      font-size 10px
      margin-left 220px
      width 400px
    .bottom
      width 100%
      position: fixed
      bottom 0px
      left 0
      padding 10px
      text-align right
      border-top 1px solid #ddd
    .response
      margin-bottom 50px
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import ObjectEditer from 'src/components/ObjectEditer/index.vue'
  import {apiToJson} from 'src/extend/Util'
  import {mapState} from 'vuex'
  import Server from 'src/extend/Server'
  var body = require('src/assets/tip/requestparams/body.md')
  var query = require('src/assets/tip/requestparams/query.md')
  var path = require('src/assets/tip/requestparams/path.md')
  export default{
    mixins: [ BasePage ],
    components: { ObjectEditer },
    name: 'api_cnew',
    props: { contents: {} },
    data () {
      return {
        activeRequestName: 'body',
        content: apiToJson(this.contents),
        tips: {
          body: body,
          path: path,
          query: query
        }
      }
    },
    watch: {
      contents: function (newVal) {
        console.log(newVal)
        this.content = apiToJson(newVal)
      },
      'content.path': function (newValue, oldValue) {
        this.content.path = newValue.replace(/^\//, '')
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
            this._apublish(value)
          }).catch((e) => {

          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },
      _apublish: function (value) {
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
          this.$router.push({ path: '/project', query: { id: this.content.projectId }, hash: 'apis' })
        }).catch(() => {
          this.$message('发布失败')
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
            this.$router.push({ path: '/project', query: { id: this.content.projectId }, hash: 'doc' })
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
        } else if (command == 'upDateApi') {
          this.upDateApi()
        }
      }
    }
  }
</script>
