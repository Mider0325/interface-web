<template>
  <div class="page">
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="leftcontrols">
          <!--<span class="members">
            <span class="member">
              <img src="http://ok0m4xukx.bkt.clouddn.com/b8ad7b37c8a20c71aa346271a9aca38d.jpg" alt="">
            </span>
            <el-popover
                ref="searchmember"
                width="400"
                trigger="click">
                <div>这里需要搜索用户组件</div>
            </el-popover>
            <span v-popover:searchmember class="member add">
              <i class="ifont icon-add"></i>
            </span>
          </span>-->
          <span class="tag">
            <i class="ifont icon-tag"></i>
            <el-tag
                v-for="(tag,key) in dynamicTags"
                :closable="true"
                :key="key"
                :close-transition="false"
                @close="handleClose(key,tag)"
            >
              {{tag.name}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="mini"
                :autofocus="true"
                :maxlength="10"
                :minlength="1"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-if="inputBtnVisible" class="button-new-tag" size="small"
                       @click="inputVisible = true,inputBtnVisible = false">+新标签</el-button>
          </span>
        </div>
        <div class="controls">


          <el-popover
              ref="setting"
              width="200"
              trigger="click">
            <div class="dropdown-menu-nav">
              <ul>
                <li @click="copyNew">
                  <a aria-label="Profile Settings">拷贝并新建</a>
                </li>
                <li class="divider"></li>
                <li @click="delectApi">
                  <a class="sign-out-link" aria-label="Sign out" rel="nofollow" data-method="delete">删除接口</a>
                </li>
              </ul>
            </div>
          </el-popover>
          <el-button type="primary" @click="$router.push({path:'/project',query:{id:apiInfo.projectId}})"
                     size="small">
            文档列表
            <i class="el-icon-document"></i>
          </el-button>
          <el-button type="primary" @click="$router.push({path:'/project',query:{id:apiInfo.projectId}})"
                     size="small">
            接口列表
            <i class="el-icon-document"></i>
          </el-button>
          <el-button v-popover:setting type="primary" size="small">
            <i class="el-icon-setting"></i>
          </el-button>
        </div>
      </div>
    </div>
    <div class="content-wrapper page-with-layout-nav" :style="{height: (appInfo.size.height-50-58) + 'px'}">
      <div style="width: 100%">
        <el-alert v-if="apiInfo.status==2"
                  title="注意该接口处于审核中状态。修改不会被保存。"
                  type="warning">
        </el-alert>

        <div class="content">
          <div class="editor">
            <c-new :contents="apiInfo"></c-new>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" type="text/css">
  .page
    overflow hidden
    display box
    -webkit-box-orient: vertical;
    .el-dropdown
      .el-button-group
        display inline-block
    .leftcontrols
      display inline-block
      float: left;
      padding: 10px 0;
      .members
        display inline-block
        height 25px
        .member
          background-color #ddd
          width: 25px
          height 25px
          border-radius 50%
          overflow hidden
          display inline-block
          img
            width 100%
        .add
          background-color #fafafa
          color #1a98ea
          border-radius 0%
          .icon-add
            font-size 25px
            line-height 29px
      .tag
        margin-left 40px
        position: relative;
        bottom: 7px;
        .icon-tag
          font-size 20px
        .input-new-tag
          display inline-block
          width 100px
        .el-tag
          margin-left 3px
    .layout-nav
      .controls-left
        float left
    .content-wrapper
      overflow auto
      display flex
      flex 1
      width 100%
      .content
        display flex
        height 100%
        width 100%
        .editor
          height 100%
          flex 1
          border-right 1px solid #ddd
          .econ
            height 100%
            width 100%
        .preview
          padding 5px
          height 100%
          flex 1
          overflow auto
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  import CodeViewer from 'src/components/CodeViewer'
  import DocViewer from 'src/components/DocViewer'
  import CNew from './CNew.vue'
  import {mapState} from 'vuex'
  export default{
    mixins: [ BasePage ],
    components: { CodeViewer, DocViewer, CNew },
    name: 'api_new',
    data () {
      return {
        dynamicTags: [],
        inputVisible: false,
        inputBtnVisible: true,
        inputValue: '',
        apiInfoJson: {},
        apiInfo: {
          id: '',
          request: '',
          response: '',
          description: '',
          name: '',
          method: 'get',
          path: 'demo',
          status: 1,
          projectId: '',
          tags: []
        }
      }
    },
    computed: mapState({
      appInfo: state => state.app
    }),
    mounted: function () {
      var id = this.$route.query.id
      this.addApi(id)
    },
    methods: {
      /**
       * 添加api接口
       */
      addApi: function (id) {
        if (id) {
          this.apiInfo.id = id
          Server({
            url: 'api/getInterfaceInfo',
            params: {
              apiId: id,
              type: 2
            },
            method: 'get'
          }).then((response) => {
            var data = response.data.data
            this.apiInfo = data
            this.dynamicTags = data.tags || []
          }).catch((e) => {

          })
        } else {

        }
      },
      upDateApi: function () {
      },
      /* =============tag=========== */
      /**
       * 删除标签
       */
      handleClose (key, tag) {
        Server({
          url: 'api/deleteApiTag',
          data: {
            apiId: this.apiInfo.id - 0,
            tagId: tag.id - 0
          },
          method: 'delete'
        }).then((response) => {
          this.dynamicTags.splice(this.dynamicTags.indexOf(key), 1)
          if (this.dynamicTags.length > 2) {
            this.inputBtnVisible = false
          } else {
            this.inputBtnVisible = true
          }
        }).catch((e) => {
          this.$message('删除失败')
        })
      },
      /**
       * 添加标签
       */
      handleInputConfirm () {
        let inputValue = this.inputValue
        if (!inputValue) {
          return
        }
        Server({
          url: 'api/addApiTag',
          data: {
            apiId: this.apiInfo.id,
            tagName: inputValue
          },
          method: 'post'
        }).then((response) => {
          var data = response.data.data
          this.dynamicTags.push({ id: data.tagId, name: inputValue })
          this.inputVisible = false
          this.inputValue = ''
          if (this.dynamicTags.length > 2) {
            this.inputBtnVisible = false
          } else {
            this.inputBtnVisible = true
          }
        }).catch((e) => {
          this.$message('标签添加失败')
        })
      },
      /* =============事件=========== */
      /**
       * 删除api
       */
      delectApi: function () {
        this.$confirm(`确认删除${this.apiInfo.path}接口`, '提示', {
          type: 'warning'
        }).then(() => {
          Server({
            url: 'api/delete',
            method: 'delete',
            data: {
              apiId: this.apiInfo.id - 0
            }
          }).then((response) => {
            this.$router.push({ path: '/project', query: { id: this.apiInfo.projectId }, hash: 'apis' })
          }).catch(() => {
            this.$message('删除失败')
          })
        }).catch(() => {
          this.$message('已取消')
        })
      },
      /**
       * 申请发布项目
       */
      applyPublish: function () {
      },
      /**
       * 发布项目
       */
      publish: function () {
      },
      /**
       * 拷贝并创建
       */
      copyNew: function () {
        Server({
          url: 'api/add',
          data: {
            request: this.apiInfo.request,
            response: this.apiInfo.response,
            description: this.apiInfo.description,
            method: this.apiInfo.method,
            name: this.apiInfo.name + '_copy',
            path: this.apiInfo.path + '_copy',
            projectId: this.apiInfo.projectId
          },
          method: 'post'
        }).then((response) => {
          var data = response.data.data
          this.$router.replace({ path: '/api/new', query: { id: data.id } })
          this.addApi(data.id)
          this.$message('拷贝成功')
        }).catch((e) => {
          console.log(e)
        })
      }
    }
  }
</script>
