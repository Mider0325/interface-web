<template>
  <div class="project-edit-container">
    <div class="project-edit-errors">


    </div>
    <div class="row prepend-top-default">
      <div class="col-lg-3 profile-settings-sidebar">
        <h4 class="prepend-top-0">
          <div v-if="id">
            更新项目
          </div>
          <div v-else>
            新建项目
          </div>
        </h4>
        <p>

        <div v-if="id">
          修改自己的项目内容
        </div>
        <div v-else>
          创建的项目必须在指定的一个组里面，可以自己新建分组
        </div>
        </p>
      </div>
      <div class="col-lg-9">

        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="图标">
            <div class="headIcon">
              <img :src="form.logo">
            </div>
            <upload :on-success="uploadEnd"></upload>
          </el-form-item>
          <el-form-item label="所属组">
            <el-select v-model="form.groupId" filterable placeholder="请选择">
              <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                <span style="float: left">{{ item.name }}</span>
                <img :src="item.logo" class="group-img"></img>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目名称"
                        prop="name"
                        :rules="[{ required: true,message: '输入1-10位项目名', trigger: 'blur'}]"
          >
            <el-input placeholder="项目名称" v-model="form.name">
            </el-input>
          </el-form-item>
          <el-form-item label="描述"
                        prop="description"
                        :rules="[{ required: true,message: '输入描述', trigger: 'blur'}]"
          >
            <el-input type="textarea" v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="环境">
            <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" :placeholder="evnPlaceholder"
                      v-model="form.environment"></el-input>
            <div class="desc">
              <div>例子如下。环境名称+空格+地址</div>
              <div>开发环境 http://www.baidu.com</div>
              <div>测试环境 http://google.com</div>
              <div>线上环境 http://google.com</div>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" :loading="loading" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .group-img
    width 30px
    height 30px
    border-radius 50%
    overflow hidden
    float right
    position relative
    bottom 5px

  .desc
    line-height 15px;
    color darkred
    margin 5px
    padding 5px
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 3px;

  .headIcon
    width 150px
    height 150px
    border-radius 50%
    overflow hidden
    margin 20px
    img
      width: 100%
      height 100%
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Upload from 'src/components/Upload'
  import Server from 'src/extend/Server'
  export default{
    mixins: [ BasePage ],
    components: { Upload },
    name: 'projects_cnew',
    props: {
      id: { // 项目id
        type: Number
      },
      info: {
        type: Object
      }
    },
    data () {
      return {
        // 一个典型列表数据格式
        loading: false,
        options: [],
        value: '',
        evnPlaceholder: `dev http://www.baidu.com
qa http://google.com`,
        form: {
          environment: '',
          logo: '',
          name: '',
          groupId: '',
          description: ''
        }
      }
    },
    mounted: function () {
      if (this.id) {
        this.getProjectInfo()
      }
      this.getGrops()
    },
    methods: {
      uploadEnd: function (url) {
        this.form.logo = url
      },
      getProjectInfo: function () {
        Server({
          url: 'project/projectinfo',
          method: 'get',
          params: { id: this.id }
        }).then((response) => {
          var data = response.data.data
          this.form = {
            logo: data.logo,
            name: data.projectName,
            groupId: data.groupId,
            description: data.description,
            environment: data.environment
          }
        })
      },
      getGrops: function () {
        Server({
          url: 'project/group',
          method: 'get',
          params: {
            type: 0,
            start: 0,
            count: 100
          }
        }).then((response) => {
          var data = response.data.data
          this.options = data
        }).catch(() => {

        })
      },
      onSubmit: function () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = true
            if (this.id) {
              Server({
                url: 'project/project',
                method: 'put',
                data: { ...this.form, id: this.id }
              }).then((response) => {
                this.loading = false
                this.$notify({
                  title: '成功',
                  message: '修改成功',
                  type: 'success'
                })
              }).catch(() => {
                this.loading = false
                this.$notify({
                  itle: '警告',
                  message: '修改失败',
                  type: 'warning'
                })
              })
            } else {
              Server({
                url: 'project/project',
                method: 'post',
                data: this.form
              }).then((response) => {
                this.loading = false
                this.$notify({
                  title: '成功',
                  message: '创建成功',
                  type: 'success'
                })
                this.$router.push({
                  path: '/dashboard/projects'
                })
              }).catch(() => {
                this.loading = false
              })
            }
          } else {
            this.$message('信息填写错误')
            return false
          }
        })
      }
    }
  }
</script>
