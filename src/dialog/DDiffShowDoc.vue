<template>
  <el-dialog :title="title" size="full" v-model="Visible" @close="close">
    <div class="content">
      <el-row>
        <el-col :span="12">
          <div class="grid-content">
            <div class="head">
              <el-select v-model="select1" placeholder="请选择版本" :disabled="disabled">
                <el-option
                    v-for="item in options1"
                    :key="item.id"
                    :label="item.version"
                    :value="item.id">
                </el-option>
              </el-select>
            </div>
            <div class="apidoc">
              <doc-viewer v-if="apiInfos.info1" :apiInfo="apiInfos.info1"></doc-viewer>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content">
            <div class="head">
              <el-select v-model="select2" placeholder="请选择版本" :disabled="disabled">
                <el-option
                    v-for="item in options2"
                    :key="item.id"
                    :label="item.version"
                    :value="item.id">
                </el-option>
              </el-select>
            </div>
            <div class="apidoc">
              <doc-viewer v-if="apiInfos.info2" :apiInfo="apiInfos.info2"></doc-viewer>
            </div>
          </div>
        </el-col>
      </el-row>

    </div>
    <div slot="footer" class="dialog-footer">
    </div>
  </el-dialog>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .content
    overflow auto
    position absolute
    width 100%
    .grid-content
      margin-right 5px
      border-right 1px solid #dddddd
      .head
        height 50px
        border-bottom 1px solid #dddddd
</style>
<script type="text/ecmascript-6">
  import BaseDialog from 'src/extend/BaseDialog'
  import {mapState} from 'vuex'
  import DocViewer from 'src/components/DocViewer'
  import Server from 'src/extend/Server'
  import {apiToJson, diffObject} from 'src/extend/Util'

  export default {
    mixins: [ BaseDialog ],
    components: { DocViewer },
    name: 'DDiffShowDoc',
    data: function () {
      return {
        select1: '',
        select2: '',
        options1: [],
        options2: [],
        apiInfos: {
          info1: null,
          info2: null,
          info_1: null,
          info_2: null
        },
        disabled: false
      }
    },
    computed: {
      ...mapState({
        Metadata: state => state.Metadata
      })
    },
    watch: {
      select1: function (newVal) {
        if (this.info.diffType != 'sync') {
          this.changeInfo(newVal, 1)
        }
      },
      select2: function (newVal) {
        if (this.info.diffType != 'sync') {
          this.changeInfo(newVal, 2)
        }
      }
    },
    created: function () {
      if (this.info.diffType == 'sync') {
        this.disabled = true
        this.options1 = [{id: '-1', version: '待同步'}]
        this.options2 = [{id: this.info.id || '-1', version: '草稿'}]
        this.select1 = '-1'
        this.select2 = this.info.id || '-1'
        this.$set(this.apiInfos, 'info1', apiToJson(this.info))
        this.$set(this.apiInfos, 'info_1', apiToJson(this.info))
        if (this.info.id) {
          this.changeInfo(this.info.id, 2, 2)
        } else {
          this.dealDiff()
        }
      } else {
        Server({
          url: 'api/getHistoryList',
          params: {
            apiId: this.info.fixedId
          },
          method: 'get'
        }).then((response) => {
          var data = response.data.data
          this.options1 = data
          this.options2 = data
          console.log('---------', data)
        }).catch((e) => {
          console.log(e)
          this.$message('获取接口详情失败，重试')
        })
      }
    },
    methods: {
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
      changeInfo: function (id, key, type) {
        Server({
          url: 'api/getInterfaceInfo',
          params: {
            apiId: id,
            type: type || 1
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
      }
    }
  }
</script>

