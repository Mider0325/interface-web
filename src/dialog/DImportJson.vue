<template>
  <el-dialog :title="title" v-model="Visible" @close="close">
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="json"></el-tab-pane>
      <el-tab-pane label="配置管理" name="data"></el-tab-pane>
    </el-tabs>
    <div v-show="activeName=='json'" class="mockContent">
      <code-viewer :contents="'{}'" :options="{}"
                   :ctype="'json'" :on-change="change"></code-viewer>
    </div>
    <div v-show="activeName=='data'" class="mockContent">
      TODO
    </div>
    <div class="footer">
      <el-button v-if="!error" type="primary" @click="importJson">导入</el-button>
    </div>
  </el-dialog>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .mockContent
    height 500px

  .footer
    margin-top 10px
    text-align right
</style>
<script type="text/ecmascript-6">
  import BaseDialog from 'src/extend/BaseDialog'
  import CodeViewer from 'src/components/CodeViewer'

  export default {
    mixins: [ BaseDialog ],
    name: 'DImportJson',
    data: function () {
      return {
        activeName: 'json',
        info: {},
        error: false
      }
    },
    components: { CodeViewer },
    computed: {},
    methods: {
      change: function (info) {
        this.error = false
        var data = {}
        try {
          data = JSON.parse(info)
        } catch (e) {
          this.error = true
          data = {}
        }
        this.info = data
      },
      importJson: function () {
        this.onImport(this.info)
        this.close()
      },
      onSubmit () {
      }
    }
  }
</script>

