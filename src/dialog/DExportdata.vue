<template>
  <el-dialog size="large" :title="title" v-model="Visible" @close="close">
    <div class="importwarp">
      <div>
        <el-form ref="form" :model="oneData" label-width="40px">
          <el-form-item label="名称">
            <el-input :minlength="1" :maxlength="15" placeholder="1-15位标准变量名称" v-model="oneData.name">
            </el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" :minlength="1" :maxlength="50" v-model="oneData.remark"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="preview">
        <h4>预览</h4>
        <object-editer :editable="false" class="objectEditer" key="4" :infos.sync="preData"></object-editer>
      </div>
    </div>
    <div class="footer">
      <el-button type="primary" @click="importJson">确定</el-button>
    </div>
  </el-dialog>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .importwarp
    .preview
      min-width 600px
      max-height 400px
      overflow auto

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
  import Server from 'src/extend/Server'
  import ObjectEditer from 'src/components/ObjectEditer/index.vue'

  export default {
    mixins: [ BaseDialog ],
    name: 'DImportJson',
    data: function () {
      return {
        oneData: {
          name: '',
          remark: ''
        },
        preData: [],
        projectId: '',
        error: false
      }
    },
    components: { ObjectEditer },
    computed: {},
    methods: {
      importJson () {
        var data = {
          content: JSON.stringify(this.preData),
          name: this.oneData.name,
          projectId: this.projectId - 0,
          remark: this.oneData.remark
        }
        Server({
          url: 'api/addData',
          method: 'post',
          data: data
        }).then((response) => {
          var data = response.data
          if (data.code == 1) {
            this.$message('已经保存到基础对象')
            this.close()
          }
        })
      }
    }
  }
</script>

