<template>
  <el-dialog :title="title" :size="size" v-model="Visible" @close="close">
    <div class="content">
      <el-form ref="form" :model="form" label-width="80px">
        <div class="base">
          <h4>基础信息</h4>
          <el-row type="flex" :gutter="0">
            <el-col :span="6">
              <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="路径">
                <el-input v-model="form.path"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="方法">
                <el-select v-model="form.method" placeholder="选择类型">
                  <el-option :key="key" v-for="(item, key) in Metadata.methods" :label="item.label"
                             :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="描述">
            <el-input type="textarea" v-model="form.description"></el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="newApi">确定添加，编辑详情</el-button>
    </div>
  </el-dialog>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
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
</style>
<script type="text/ecmascript-6">
  import BaseDialog from 'src/extend/BaseDialog'
  import Server from 'src/extend/Server'
  import {mapState} from 'vuex'

  export default {
    mixins: [ BaseDialog ],
    name: 'DAddApi',
    data: function () {
      return {
        form: {
          request: '',
          response: '',
          description: '',
          method: 'get',
          name: '',
          path: '',
          projectId: ''
        }
      }
    },
    computed: mapState({
      Metadata: state => state.Metadata
    }),
    components: {},
    mounted: function () {
    },
    methods: {
      newApi: function () {
        Server({
          url: 'api/add',
          data: this.form,
          method: 'post'
        }).then((response) => {
          var data = response.data.data
          this.$router.push({ path: '/api/new', query: { id: data.id } })
          this.close()
        }).catch((e) => {
          console.log(e)
        })
      }
    }
  }
</script>

