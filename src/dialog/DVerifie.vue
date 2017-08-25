<template>
  <el-dialog :title="apiInfo.publishedUserName+' 提交申请'" :size="size" v-model="Visible" @close="close">
    <div class="content">
      <div class="info">
        <div class="desc">
          申请说明：{{apiInfo.publishedDescription||'无'}}
        </div>
        <div class="time">{{apiInfo.update_time|datetime}}</div>
      </div>
      <hr>
      <div class="doc">
        <el-row>
          <el-col :span="12">
            <el-alert
                title="待审核版本" :closable="false"
                type="success">
            </el-alert>
            <doc-viewer v-if="apiInfos.info1" :apiInfo="apiInfos.info1"></doc-viewer>
          </el-col>
          <el-col :span="12">
            <el-alert
                title="上一次版本" :closable="false"
                type="info">
            </el-alert>
            <doc-viewer v-if="apiInfos.info2" :apiInfo="apiInfos.info2"></doc-viewer>
          </el-col>
        </el-row>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="refuse">拒绝</el-button>
      <el-button type="primary" @click="pass">通过</el-button>
    </div>
  </el-dialog>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">
  .content
    .info
      position relative
      .desc
        padding 10px
      .time
        position absolute
        bottom -15px
        right 0
    .doc
      max-height 500px
      overflow: auto
      .sp
        background-color red
        height 100%
        width 20px
</style>
<script type="text/ecmascript-6">
  import BaseDialog from 'src/extend/BaseDialog'
  import Server from 'src/extend/Server'
  import DocViewer from 'src/components/DocViewer'
  import { apiToJson, diffObject } from 'src/extend/Util'
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    mixins: [BaseDialog],
    name: 'DVerifie',
    data: function () {
      return {
        size: 'large',
        apiInfoJson: null,
        version: null,
        apiInfo: {},
        apiInfos: {
          info1: null,
          info2: null,
          info_1: null,
          info_2: null
        }
      }
    },
    components: {
      ElCol,
      DocViewer},
    computed: {},
    mounted: function () {
      this.getVersions()
      this.loadApiInfo(this.id)
    },

    methods: {
      getVersions: function () {
        Server({
          url: 'api/getHistoryList',
          params: {
            apiId: this.id
          },
          method: 'get'
        }).then((response) => {
          var data = response.data.data
          if (data[0]) {
            this.changeInfo(data[0].id, 2)
          }
        }).catch((e) => {
          console.log(e)
          this.$message('获取接口详情失败，重试')
        })
      },
      dealDiff: function () {
        if (this.apiInfos.info1 && this.apiInfos.info2) {
          // response
          this.apiInfos.info1.response = diffObject(JSON.parse(JSON.stringify(this.apiInfos.info_1.response)), this.apiInfos.info2.response, true)
          this.apiInfos.info2.response = diffObject(JSON.parse(JSON.stringify(this.apiInfos.info_2.response)), this.apiInfos.info1.response, false)

          // request.query
          this.apiInfos.info1.request.query = diffObject(JSON.parse(JSON.stringify(this.apiInfos.info_1.request.query)), this.apiInfos.info2.request.query, true)
          this.apiInfos.info2.request.query = diffObject(JSON.parse(JSON.stringify(this.apiInfos.info_2.request.query)), this.apiInfos.info1.request.query, false)

          // request.path
          this.apiInfos.info1.request.path = diffObject(JSON.parse(JSON.stringify(this.apiInfos.info_1.request.path)), this.apiInfos.info2.request.path, true)
          this.apiInfos.info2.request.path = diffObject(JSON.parse(JSON.stringify(this.apiInfos.info_2.request.path)), this.apiInfos.info1.request.path, false)

          // request.body
          this.apiInfos.info1.request.body = diffObject(JSON.parse(JSON.stringify(this.apiInfos.info_1.request.body)), this.apiInfos.info2.request.body, true)
          this.apiInfos.info2.request.body = diffObject(JSON.parse(JSON.stringify(this.apiInfos.info_2.request.body)), this.apiInfos.info1.request.body, false)
        }
      },
      changeInfo: function (id, key) {
        Server({
          url: 'api/getInterfaceInfo',
          params: {
            apiId: id,
            type: 1
          },
          method: 'get'
        }).then((response) => {
          var data = response.data.data
          this.$set(this.apiInfos, 'info' + key, apiToJson(data))
          this.$set(this.apiInfos, 'info_' + key, apiToJson(data))
          this.dealDiff()
        }).catch((e) => {
          console.log(e)
          this.$message('获取接口详情失败，重试')
        })
      },
      loadApiInfo: function () {
        Server({
          url: 'api/getInterfaceInfo',
          params: {
            apiId: this.id,
            type: 2
          },
          method: 'get'
        }).then((response) => {
          var data = response.data.data
          this.apiInfo = data
          this.$set(this.apiInfos, 'info' + 1, apiToJson(data))
          this.$set(this.apiInfos, 'info_' + 1, apiToJson(data))
        }).catch((e) => {

        })
      },
      audit: function (value, status) {
        Server({
          url: 'api/audit',
          data: {
            apiId: this.apiInfo.id,
            description: value,
            status: status
          },
          method: 'post'
        }).then((response) => {
          this.close()
          this.$message('修改成功')
          this.callback(status)
        }).catch(() => {
          this.close()
        })
      },
      refuse: function () {
        this.$prompt('输入备注', '拒绝发布', {
          inputPattern: /.{0,30}/,
          inputErrorMessage: '备注0到30个字'
        }).then(({value}) => {
          this.audit(value, 2)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },
      pass: function () {
        this.$prompt('输入备注', '通过发布', {
          inputPattern: /.{0,30}/,
          inputErrorMessage: '备注0到30个字'
        }).then(({value}) => {
          this.audit(value, 1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>

