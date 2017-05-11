<template>
  <div>
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="nav-control scrolling-tabs-container">
          <el-tabs class="nav-links" v-model="activeName" @tab-click="tabHandleClick">
            <el-tab-pane label="文档" name="doc"></el-tab-pane>
            <el-tab-pane label="接口" name="apis"></el-tab-pane>
            <el-tab-pane label="基础对象" name="object"></el-tab-pane>
            <el-tab-pane label="成员" name="member"></el-tab-pane>
            <el-tab-pane label="设置" name="setting"></el-tab-pane>
          </el-tabs>
        </div>
        <div class="controls">
          <router-link tag="span" :to="{path:'/api/new',query:{pid:this.$route.query.id}}" v-if="activeName=='apis'">
            <el-button type="primary" icon="search">添加接口</el-button>
          </router-link>
          <el-dropdown>
            <el-button type="primary">
              <i class="el-icon-setting"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="content-wrapper page-with-layout-nav">
      <div class="container-fluid container-limited ">
        <div class="content">
          <div v-if="activeName==='doc'">
            <c-doc :id="this.$route.query.id+''"></c-doc>
          </div>
          <div v-if="activeName==='member'">
            <member></member>
          </div>
          <div v-if="activeName==='object'">
          </div>
          <div class="apis" v-if="activeName==='apis'">
            <c-interface :id="this.$route.query.id+''"></c-interface>
          </div>
          <div v-if="activeName==='setting'">
            <div class="project-edit-container">
              <div class="prepend-top-default">
                <c-new :id="$route.query.id-0"></c-new>
              </div>
              <div class="prepend-top-default"></div>
              <hr>
              <div class="prepend-top-default append-bottom-default">
                <div class="col-lg-3">
                  <h4 class="prepend-top-0 danger-title">
                    删除项目
                  </h4>
                  <p class="append-bottom-0">
                    删除项目是不可逆的，确认
                  </p>
                </div>
                <div class="col-lg-9">
                  <el-button type="danger" @click="delectProject">删除</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .url
    width 400px

  .nav-control
    float left

  .project-tag
    margin 20px auto
    padding 10px
    border 1px dashed #ddd

  .apis
    margin 10px 0

  .content-wrapper
    .apiItem
      .header
        position relative
        width: 90%
        display inline-block
        .type
          font-size 18px
          font-weight bold
          display inline-block
          width 30px
        .path
          margin-left 20px
        .version
          background-color #5ac74b
          color #fff
          padding 2px 4px
          border-radius 4px

        .controls
          position: absolute;
          right 1px
          top 0
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import data from 'src/assets/data/project'
  import Server from 'src/extend/Server'
  import Member from './projects/members.vue'
  import CNew from './projects/CNew.vue'
  import CDoc from './projects/CDoc.vue'
  import CInterface from './projects/CInterface.vue'

  export default{
    mixins: [ BasePage ],
    components: { Member, CNew, CDoc, CInterface },
    name: 'project',
    data: function () {
      return {
        content: ``,
        project: data,
        activeName: 'doc'
      }
    },
    mounted: function () {
      if (!window.location.hash) {
        this.activeName = 'doc'
      } else {
        var tab = window.location.hash.replace('#', '')
        this.tabHandleClick({ name: tab })
      }
    },
    watch: {
      '$route' (to, from) {
        var tab = window.location.hash.replace('#', '')
        this.tabHandleClick({ name: tab })
      }
    },
    methods: {

      tabHandleClick (tab) {
        this.activeName = tab.name
        switch (tab.name) {
          case 'doc':
            break
          case 'member':

            break
          case 'apis':
            break
          case 'setting':
            break
        }
        window.location.hash = '#' + tab.name
      },
      /**
       * 删除当项目
       */
      delectProject: function () {
        this.$confirm('确认删除,删除后所有数据将清除', '提示', {
          type: 'warning'
        }).then(() => {
          Server({
            url: 'project/project',
            method: 'delete',
            data: {
              id: this.$route.query.id
            }
          }).then((response) => {
            this.$router.push({ path: 'dashboard_projects' })
          }).catch(() => {
          })
        }).catch(() => {
          this.$message('已取消')
        })
      }
    }
  }
</script>
