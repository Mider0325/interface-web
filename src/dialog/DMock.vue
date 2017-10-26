<template>
  <el-dialog :title="title" size="large" v-model="Visible" @close="close">
    <div class="mockContent">
      <code-viewer :contents="mockInfo" :options="{}" :on-change="InfoChange"
                   :ctype="'json'"></code-viewer>
    </div>
    <div class="footer">
      <el-button type="success" @click="newMock">重新mock</el-button>
      <el-button type="primary" @click="onSubmit">确认修改</el-button>
    </div>
  </el-dialog>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .mockContent
    height 500px
  .footer
    margin-top: 10px;
    text-align: right;

</style>
<script type="text/ecmascript-6">
  import BaseDialog from 'src/extend/BaseDialog'
  import Server from 'src/extend/Server'
  import CodeViewer from 'src/components/CodeViewer'
  import {apiToJson, jsonToMock} from 'src/extend/Util'
  export default {
    mixins: [ BaseDialog ],
    name: 'DMock',
    data: function () {
      return {
        editData: '',
        mockInfo: '',
        info: null
      }
    },
    components: { CodeViewer },
    computed: {},
    mounted: function () {
      var data = this.info
      if (data.mockResponse) {
        this.mockInfo = data.mockResponse
      } else {
        data = apiToJson(data)
        this.mockInfo = JSON.stringify(jsonToMock(data.response), null, 4)
      }
      this.editData = this.mockInfo
    },
    methods: {
      InfoChange (data) {
        this.editData = data
      },
      newMock () {
        var data = this.info
        data = apiToJson(data)
        this.mockInfo = JSON.stringify(jsonToMock(data.response), null, 4)
        this.editData = this.mockInfo
      },
      onSubmit () {
        Server({
          url: 'api/updataInterfaceMock',
          data: {
            apiId: this.info.id,
            content: this.editData
          },
          method: 'put'
        }).then((response) => {
          this.$message('修改成功')
          this.close()
        }).catch((e) => {
          this.$message('修改失败')
        })
      }
    }
  }
</script>

