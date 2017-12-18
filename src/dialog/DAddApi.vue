<template>
  <el-dialog :title="title" :size="size" v-model="Visible" @close="close">
    <div class="content">
      <el-form ref="form" :model="form" label-width="80px">
        <div class="base">
          <h4>基础信息</h4>
          <el-row type="flex" :gutter="0">
            <el-col :span="24">
              <el-form-item label="名称">
                <el-input :minlength="1" placeholder="例如:用户信息" :maxlength="15" v-model.trim="form.name"></el-input>
              </el-form-item>
            </el-col>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="0">
            <el-col :span="17">
              <el-form-item label="路径">
                <el-input :minlength="1" :maxlength="70" placeholder="例如：user/info" v-model.trim="form.path"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="方法">
                <el-select v-model="form.method" placeholder="选择类型">
                  <el-option :key="key" v-for="(item, key) in Metadata.methods" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="描述">
            <el-input type="textarea" placeholder="该接口的简要描述1-50个字" :minlength="1" :maxlength="50" v-model.trim="form.description"></el-input>
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
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
.content {
  .info {
    position: relative;

    .desc {
      padding: 10px;
    }

    .time {
      position: absolute;
      bottom: -15px;
      right: 0;
    }
  }

  .doc {
    max-height: 400px;
    overflow: auto;
  }
}
</style>
<script type="text/ecmascript-6">
import BaseDialog from 'src/extend/BaseDialog'
import Server from 'src/extend/Server'
import { mapState } from 'vuex'

export default {
  mixins: [BaseDialog],
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
  watch: {
    'form.path': function (newValue, oldValue) {
      this.form.path = newValue.replace(/^\//, '')
    }
  },
  components: {},
  mounted: function () {
  },
  methods: {
    newApi: function () {
      var data = Object.assign({}, this.form)
      data.projectId = data.projectId - 0
      Server({
        url: 'api/add',
        data: data,
        method: 'post'
      }).then((response) => {
        var data = response.data.data
        this.$router.push({ path: '/apis/new', query: { id: data.id } })
        this.close()
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

