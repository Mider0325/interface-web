<template>
  <div>
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="nav-control scrolling-tabs-container">
          <el-tabs class="nav-links" v-model="activeName" @tab-click="tabHandleClick">
            <el-tab-pane label="文档" name="doc"></el-tab-pane>
            <el-tab-pane label="成员" name="member"></el-tab-pane>
            <el-tab-pane label="接口" name="apis"></el-tab-pane>
            <el-tab-pane label="设置" name="setting"></el-tab-pane>
          </el-tabs>
        </div>
        <div class="controls">
          <router-link tag="span" :to="{path:'api_new',query:{pid:this.$route.query.id}}" v-if="activeName=='apis'">
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
            <div class="project-home-panel text-center">
              <div class="container-fluid container-limited">
                <h1 class="project-title">
                  shareDown
                </h1>
                <div class="project-home-desc">
                  <p>二维码分享下载</p>
                </div>
                <div class="project-repo-buttons project-action-buttons">
                  <div class="count-buttons">
                    <el-button>
                      关注<i class="el-icon-star-off"></i>
                    </el-button>
                    <el-input class="url" placeholder="请输入内容" v-model="input5">
                      <el-button slot="append" class="btn">
                        <i class="ifont icon-copy"></i>
                      </el-button>
                    </el-input>
                  </div>
                </div>
              </div>
            </div>
            <nav class="container-fluid container-limited project-tag">
              <el-tag>标签一</el-tag>
              <el-tag type="gray">标签二</el-tag>
              <el-tag type="primary">标签三</el-tag>
              <el-tag type="success">标签四</el-tag>
              <el-tag type="warning">标签五</el-tag>
              <el-tag type="danger">标签六</el-tag>

            </nav>
            <div class="container-fluid container-limited">
              <div v-for="item in apiList">
                <div class="apiItem">
                  <el-collapse @change="handleChange">
                    <el-collapse-item title="一致性 Consistency" name="1">
                      <template slot="title">
                        <div class="header">
                          <span class="type" :class="[item.type]">{{item.type}}</span>
                          <span class="path">{{item.path}}</span>
                          <span class="version">{{item.version}}</span>
                          <div class="controls" @click.stop>
                            <el-dropdown trigger="click">
                              <el-button type="primary" size="mini">
                                更多<i class="el-icon-caret-bottom el-icon--right"></i>
                              </el-button>
                              <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                  <router-link tag="span" to="api_new">编 辑</router-link>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                  <router-link tag="span" to="api_mock">MOCK数据</router-link>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                  <router-link tag="span" to="api_diff">版本比对</router-link>
                                </el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                          </div>
                        </div>
                      </template>
                      <doc-viewer :apiInfo="getApiInfo(content)"></doc-viewer>

                    </el-collapse-item>
                  </el-collapse>


                </div>
              </div>
            </div>
          </div>
          <div v-if="activeName==='member'">
            <member></member>
          </div>
          <div class="apis" v-if="activeName==='apis'">
            <!--接口列表信息-->
            <el-table
                :data="drafList"
                border
                style="width: 100%">
              <el-table-column
                  label="更新时间"
                  sortable
                  width="180">
                <template scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.time|datetime }}</span>
                </template>
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="名称"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="method"
                  label="类型"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="path"
                  sortable
                  label="路径"
              >
              </el-table-column>
              <el-table-column
                  label="状态"
              >
                <template scope="scope">
                  <span v-if="scope.row.status==1">
                    待发布
                  </span>
                  <span v-if="scope.row.status==2">
                    审核中
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                  prop="tag"
                  label="标签"
                  width="100"
                  :filters="tableFilters"
                  :filter-method="filterTag">
                <template scope="scope">

                  <el-tag v-for="tag in scope.row.tags"
                          :type='primary'
                          close-transition>{{tag.name}}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template scope="scope">
                  <el-button
                      size="small"
                      @click="handleEdit(scope.$index, scope.row)">编辑
                  </el-button>
                  <el-button
                      size="small"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <!--接口列表信息/-->
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
  import Clipboard from 'clipboard'
  import DocViewer from 'src/components/DocViewer'
  import jsYaml from 'js-yaml'
  import CNew from './projects/CNew.vue'

  export default{
    mixins: [ BasePage ],
    components: { Member, DocViewer, CNew },
    name: 'project',
    data: function () {
      return {
        tableFilters: [],
        drafList: [],
        content: ``,
        apiList: [],
        project: data,
        activeName: 'doc'
      }
    },
    mounted: function () {
      var me = this
      new Clipboard('.btn', {
        text: function () {
          return me.project.description
        }
      })
      if (!window.location.hash) {
        this.activeName = 'doc'
        this.loadApis()
      }
    },
    watch: {
      '$route' (to, from) {
        var tab = window.location.hash.replace('#', '')
        this.tabHandleClick({ name: tab })
      }
    },
    methods: {
      getApiInfo: function (data) {
        var apiInfo = {}
        try {
          apiInfo = jsYaml.safeLoad(data)
        } catch (e) {
          apiInfo = {}
        } finally {
        }
        return apiInfo
      },
      loadApis: function () {
        Server({
          url: 'api/list',
          method: 'get',
          params: {
            projectId: this.$route.query.id,
            tagIds: ''
          }
        }).then((response) => {
          var data = response.data
          // 设置分页信息
          this.apiList = data.list
        }).catch(() => {

        })
      },
      tabHandleClick (tab) {
        this.activeName = tab.name
        switch (tab.name) {
          case 'doc':
            this.loadApis()
            break
          case 'member':

            break
          case 'apis':
            this.loadDrafApis()
            break
          case 'setting':
            break
        }
        window.location.hash = '#' + tab.name
      },
      handleChange: function () {
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
      },

      /* 草稿相关表格过滤 */
      loadDrafApis: function () {
        Server({
          url: 'api/draftList',
          method: 'get',
          params: {
            projectId: this.$route.query.id,
            tagIds: ''
          }
        }).then((response) => {
          var data = response.data.data
          // 设置分页信息
          this.drafList = data
          this.setTableFilter(data)
        }).catch(() => {

        })
        this.loadTags()
      },
      loadTags: function () {
        Server({
          url: 'api/getTags',
          method: 'get',
          params: {
            projectId: this.$route.query.id
          }
        }).then((response) => {
          var data = response.data.data
          data.forEach(function (value) {
            value.text = value.name
            value.value = value.id
          })
          this.tableFilters = data
        }).catch(() => {

        })
      },
      /**
       * 编辑
       */
      handleEdit: function (index, row) {
        this.$router.push({
          path: 'api_new',
          query: {
            id: row.id
          }
        })
      },
      /**
       * 删除
       */
      handleDelete: function (index, row) {

      },
      filterTag (value, row) {
        var flag = false
        row.tags.forEach(function (val) {
          if (val.id == value) {
            flag = true
          }
        })
        return flag
      }
    }
  }
</script>
