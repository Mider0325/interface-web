<template>
  <el-dialog :title="title" v-model="Visible" @close="close">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="JSON导入" name="json"></el-tab-pane>
      <el-tab-pane label="JavaBean导入" name="java"></el-tab-pane>
      <el-tab-pane v-if="projectId" label="基础对象导入" name="data"></el-tab-pane>
    </el-tabs>
    <div v-if="activeName=='json'" class="mockContent">
      <code-viewer :contents="'{}'" :options="{}"
                   :ctype="'json'" :on-change="change"></code-viewer>
    </div>
    <div v-if="activeName=='java'" class="mockContent">
      <code-viewer :contents="'{}'" :options="{}"
                   :ctype="'java'" :on-change="javaChange"></code-viewer>
    </div>
    <div v-if="activeName=='data'" class="mockContent">
      TODO
    </div>

    <div>
      <h4>预览</h4>
      <object-editer class="objectEditer" key="4" :infos.sync="content.response"></object-editer>
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
  import Server from 'src/extend/Server'

  export default {
    mixins: [ BaseDialog ],
    name: 'DImportJson',
    data: function () {
      return {
        activeName: 'json',
        info: {},
        baseDatas: [],
        projectId: '',
        error: false
      }
    },
    components: { CodeViewer },
    computed: {},
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
        if (tab.name == 'data') {
          this.loadData()
        }
      },
      loadData () {
        Server({
          url: 'api/getDatas',
          method: 'get',
          params: {
            projectId: this.projectId
          }
        }).then((response) => {
          this.baseDatas = response.data.data.datas
        })
      },
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
      javaChange: function (info) {
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

