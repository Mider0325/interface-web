<template>
  <div class="content">
    <div class="project-home-panel text-center">
      <div class="container-fluid container-limited">
        <div class="project-avatar">
          <img :src="project.logo" alt="">
        </div>
        <h1 class="project-title">
          {{project.projectName}}
        </h1>
        <div class="project-home-desc">
          <p>{{project.description}}</p>
        </div>
        <!--<div class="project-repo-buttons project-action-buttons">
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
        </div>-->
      </div>
    </div>
    <!--接口列表信息-->
    <div v-if="!hasData">
      <div class="blank-state">
        <div class="blank-state-icon">
          <i class="ifont icon-empty"></i> <span>暂无文档信息，请先添加接口,然后发布</span>
        </div>
        <h3 class="blank-state-title">
          <router-link tag="div" :to="{path:'api_new',query:{pid:id}}">
            <el-button type="primary">添加接口</el-button>
          </router-link>
        </h3>
      </div>
    </div>
    <el-table v-else
              @expand="handleChange"
              :data="apiList"
              border
              style="width: 100%">
      <el-table-column type="expand">
        <template scope="props">
          <doc-viewer v-if="props.row.content" :apiInfo="getApiInfo(props.row.content)"></doc-viewer>
        </template>
      </el-table-column>
      <el-table-column
          label="更新时间"
          sortable
          prop="time"
          width="160">
        <template scope="scope">
          <span :id="'doctableexpanded_'+scope.row.id" style="margin-left: 10px">{{ scope.row.time|datetime }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="name"
          label="名称"
          width="180">
      </el-table-column>
      <el-table-column
          label="类型"
          width="90">
        <template scope="scope">
          <span :class="scope.row.method">{{ scope.row.method.toUpperCase() }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="path"
          sortable
          label="路径"
      >
      </el-table-column>
      <el-table-column
          prop="version"
          sortable
          width="90"
          label="版本"
      >
        <template scope="scope">
          <el-tag type='success'>{{scope.row.version}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="tagTableFilters"
          :filter-method="filterTag">
        <template scope="scope">
          <el-tag v-for="tag in scope.row.tags"
                  :type='primary'
                  close-transition>{{tag.name}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template scope="scope">
          <div class="controls" @click.stop>
            <el-dropdown trigger="click">
              <el-button type="primary" size="mini">
                更多<i class="el-icon-caret-bottom el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link tag="span" to="api_new">拷贝路径</router-link>
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
        </template>
      </el-table-column>
    </el-table>
    <!--接口列表信息/-->
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .project-home-panel
    margin-bottom 30px
  .blank-state-icon
    span
      font-size 24px
  .project-avatar
    width 80px
    height 80px
    border-radius 50%
    overflow hidden
    margin 20px auto
    img
      width: 100%
      height 100%
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  import DocViewer from 'src/components/DocViewer'
  import Clipboard from 'clipboard'
  import jsYaml from 'js-yaml'
  import $ from 'jQuery'

  export default{
    mixins: [ BasePage ],
    components: { DocViewer },
    name: 'projects_cdoc',
    props: {
      id: { // 项目id
        type: String
      }
    },
    data () {
      return {
        info: {},
        tagTableFilters: [],
        role: 4,
        apiList: [],
        project: {}
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
      this.loadProject()
    },
    computed: {
      hasData: function (list) {
        return this.apiList.length > 0
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
        apiInfo.id = this.info.id
        apiInfo.type = this.info.type
        apiInfo.mockRequest = this.info.mockRequest
        apiInfo.mockResponse = this.info.mockResponse
        return apiInfo
      },
      /**
       * 加载项目信息
       */
      loadProject: function () {
        Server({
          url: 'project/projectinfo',
          method: 'get',
          params: { id: this.id }
        }).then((response) => {
          this.project = response.data.data
        })
      },
      handleChange: function (item, expanded) {
        if (expanded && !item.content) {
          Server({
            url: 'api/getInterfaceInfo',
            params: {
              apiId: item.id,
              type: 1
            },
            method: 'get'
          }).then((response) => {
            var data = response.data.data
            this.info = data
            this.$set(item, 'content', data.content)
            this.$nextTick(function () {
              $(window.document.body).scrollTo(`#doctableexpanded_${item.id}`, 200, {
                offset: {
                  top: -20
                }
              })
            })
          }).catch((e) => {

          })
        }
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
          this.tagTableFilters = data
        }).catch(() => {

        })
      },

      loadApis: function () {
        Server({
          url: 'api/list',
          method: 'get',
          params: {
            projectId: this.id,
            tagIds: ''
          }
        }).then((response) => {
          var data = response.data.data
          // 设置分页信息
          this.apiList = data
        }).catch(() => {

        })
        this.loadTags()
      },
      tableRowClassName (row, index) {
        return row.method
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
