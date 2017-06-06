<template>
  <el-dialog size="large" :title="title" v-model="Visible" @close="close">
    <div class="importwarp">
      <div class="import">
        <h4>导入</h4>
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
          <div @click="baseDataSelect(item)" class="item" v-for="(item,index) in baseDatas">
            <div class="name">{{item.name}}</div>
            <div class="remark">{{item.remark}}</div>
          </div>
        </div>
      </div>
      <div class="preview">
        <h4>预览</h4>
        <object-editer :editable="false" class="objectEditer" key="4" :infos.sync="preData"></object-editer>
      </div>
    </div>
    <div class="footer">
      <el-button v-if="!error" type="primary" @click="importJson">确定</el-button>
    </div>
  </el-dialog>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .importwarp
    display flex
    .import
      flex 1
      border-right 1px solid #ddd
      margin-right 10px
      padding-right 10px
    .preview
      min-width 600px

  .mockContent
    height 500px
    .item
      float: left
      width 200px
      padding 10px
      border 1px solid #ddd
      border-radius 5px
      margin 3px
      &:hover
        background-color #ddd
      &:active
        background-color #ddffdd
      .name
        font-weight bold
      .remark
        font-size 10px

  .footer
    margin-top 10px
    text-align right
</style>
<script type="text/ecmascript-6">
  import BaseDialog from 'src/extend/BaseDialog'
  import CodeViewer from 'src/components/CodeViewer'
  import Server from 'src/extend/Server'
  import {jsonDismantle} from 'src/extend/Util'
  import ObjectEditer from 'src/components/ObjectEditer/index.vue'

  export default {
    mixins: [ BaseDialog ],
    name: 'DImportJson',
    data: function () {
      return {
        activeName: 'json',
        info: {},
        baseDatas: [],
        preData: [],
        projectId: '',
        error: false
      }
    },
    components: { CodeViewer, ObjectEditer },
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
        this.preData = jsonDismantle(data)
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
        this.preData = jsonDismantle(data)
      },
      baseDataSelect: function (data) {
        var content = JSON.parse(data.content)
        this.preData = content
      },
      importJson: function () {
        this.onImport(this.preData)
        this.close()
      },
      onSubmit () {
      }
    }
  }
</script>

