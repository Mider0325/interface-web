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
              <img :src="form.logo|defaultProject">
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
                <img :src="item.logo|defaultGroup" class="group-img"></img>
              </el-option>
            </el-select>
            <el-button type="text" @click="addGroup">添加组</el-button>

          </el-form-item>
          <el-form-item label="项目名称"
                        prop="name"
                        :rules="[
                        { required: true,message: '输入1-10位项目名', trigger: 'blur'},
                        { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
                        ]"
          >
            <el-input placeholder="项目名称"  :maxlength="15" v-model="form.name">
            </el-input>
          </el-form-item>
          <el-form-item label="描述"
                        prop="description"
                        :rules="[{ required: true,message: '输入描述', trigger: 'blur'},
                                { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }]"
          >
            <el-input type="textarea"  :maxlength="50" v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="环境">
            <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" :placeholder="evnPlaceholder"
                      v-model="form.environment"></el-input>
            <div class="desc">
              <div>例子如下。环境名称+空格+地址</div>
              <div>开发环境 http://www.baidu.com/</div>
              <div>测试环境 http://google.com/</div>
              <div>线上环境 http://google.com/</div>
            </div>
          </el-form-item>

          <el-form-item label="接入秘钥" v-if="id"
                        prop="security"
                        :rules="[
                        { message: '输入1-35位秘钥', trigger: 'blur'},
                        { min: 1, max: 35, message: '长度在 1 到 35 个字符', trigger: 'blur' }
                        ]"
          >
            <el-input placeholder="接入秘钥"  :maxlength="35" v-model="form.security">
              <el-button slot="append" @click="makeSecurity">随机生成</el-button>
            </el-input>
            <div class="desc">
              <div>java对接项目的时候需要的必要的项目 id:{{id}} 秘钥：{{form.security}}</div>
            </div>
          </el-form-item>

          <el-form-item label="钉钉webhook" v-if="id"
                        prop="ddwebhook"
                        :rules="[]"
          >
            <el-input placeholder="钉钉webhook地址"  :maxlength="260" v-model="form.ddwebhook">
            </el-input>
            <div class="desc">
              <div>开发中：期待中； 获取钉钉的webhook 地址填写，方便钉钉收到信息</div>
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

<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
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
    background url("/src/assets/image/header/default.png")
    background-size 100% 100%
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
        evnPlaceholder: `dev http://www.baidu.com/
qa http://google.com/`,
        form: {
          environment: '',
          logo: '',
          name: '',
          groupId: '',
          ddwebhook: '',
          security: '',
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
      makeSecurity () {
        var len = 32
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
        var maxPos = $chars.length
        var pwd = ''
        for (var i = 0; i < len; i++) {
          pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
        }
        this.form.security = pwd
      },
      addGroup: function () {
        this.openDialog({
          name: 'DAddGroup',
          data: {
            title: '添加分组'
          },
          methods: {
            onAdd: (data) => {
              this.options.unshift(data)
              this.form.groupId = data.id
            }
          }
        })
      },
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
            security: data.security,
            ddwebhook: data.ddwebhook,
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
