<template>
  <div class="project-edit-container">
    <div class="project-edit-errors">


    </div>
    <div class="row prepend-top-default">
      <div class="col-lg-3 profile-settings-sidebar">
        <h4 class="prepend-top-0">
          <div v-if="type=='new'">
            新建项目
          </div>
          <div v-if="type=='edit'">
            更新项目
          </div>
        </h4>
        <p>
        <div v-if="type=='new'">
          创建的项目必须在指定的一个组里面，可以自己新建分组
        </div>
        <div v-if="type=='edit'">
          修改自己的项目内容
        </div>
        </p>
      </div>
      <div class="col-lg-9">

        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="图标">
            <div class="headIcon">
              <img :src="form.image">
            </div>
            <el-upload
                action="//jsonplaceholder.typicode.com/posts/"
                :multiple=false
                :show-upload-list=false
                :on-preview="handlePreview"
                :on-remove="handleRemove">
              <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="所属组">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                  v-for="item in options"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目名称">
            <el-input placeholder="项目名称" v-model="form.name">
            </el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
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
  import Server from 'src/extend/Server'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'projects_cnew',
    props: {
      type: {
        type: String,
        default: 'new'
      },
      info: {
        type: Object
      }
    },
    data () {
      return {
        // 一个典型列表数据格式
        options: [ {
          value: '1',
          label: 'H5deplov'
        }, {
          value: '2',
          label: 'Util'
        }, {
          value: '2',
          label: '添加新组'
        } ],
        value: '',
        form: {
          image: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          name: '',
          groupId: '',
          description: ''
        }
      }
    },
    mounted: function () {
    },
    methods: {
      onSubmit: function () {
        Server({
          url: 'project/project',
          mock: true,
          method: 'post'
        }).then((response) => {
          this.form = {
            image: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
            name: '',
            groupId: '',
            description: ''
          }
        }).catch(() => {

        })
      }
    }
  }
</script>
