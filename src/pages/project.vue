<template>
  <div>
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="controls">
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
        <div class="nav-control scrolling-tabs-container">
          <el-tabs class="nav-links" v-model="activeName" @tab-click="tabHandleClick">
            <el-tab-pane label="文档" name="doc"></el-tab-pane>
            <el-tab-pane label="成员" name="member"></el-tab-pane>
            <el-tab-pane label="接口" name="apis"></el-tab-pane>
            <el-tab-pane label="设置" name="setting"></el-tab-pane>
          </el-tabs>
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
          <div v-if="activeName==='apis'">
            <!--接口列表信息-->

            <!--接口列表信息/-->
          </div>
          <div v-if="activeName==='setting'">
            <div class="project-edit-container">
              <div class="row prepend-top-default">
                <c-new type="edit"></c-new>
              </div>
              <div class="row prepend-top-default"></div>
              <hr>
              <div class="row prepend-top-default append-bottom-default">
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

  .project-tag
    margin 20px auto
    padding 10px
    border 1px dashed #ddd

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
        content: `path: /name
type: get
description: 获取用fdsafdsa户姓名
parameters:
  body:
    good:
      - name: good
        age: 123
    id!number!true!好多描述信息哈哈哈:
    name!string!good:
    pet:
      id!number!true!haoduo:
      name!string!good:
  path:
    name:
  query:
responses:
  200:
    pageSize: int
    list:
      - name: int|描述
        url: string|描述
        pets:
          - $ref: $Pet
        age: int
  500:
    code: int
    error: string
definitions:
  Pet:
    product_id: string|Unique identifier
    description: string|Description of product.
`,
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
      this.loadApis()
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
          url: 'api/list/1',
          mock: true,
          method: 'get'
        }).then((response) => {
          var data = response.data
          // 设置分页信息
          this.apiList = data.list
        }).catch(() => {

        })
      },
      tabHandleClick (tab) {
        this.activeName = tab.name
      },
      handleChange: function () {

      },
      /**
       * 删除当项目
       */
      delectProject: function () {
        this.$confirm('确认删除', '提示', {
          type: 'warning'
        }).then(() => {
          Server({
            url: 'project/project',
            method: 'delete',
            data: {
              id: ''
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
