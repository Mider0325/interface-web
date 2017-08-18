<template>
  <div class="content">

    <div class="project-home-panel text-center">
      <div class="container-fluid container-limited">
        <div class="project-avatar">
          <img :src="project.logo|defaultProject">
        </div>
        <h1 class="project-title">
          {{project.projectName}}
        </h1>
        <div class="project-home-desc">
          <p>{{project.description}}</p>
        </div>
        <div class="project-home-url">
          <el-input placeholder="请输入内容" :autofocus="true" :readonly="true" v-model="mockBaseUrl">
            <template slot="prepend">
              接口mock基础地址
              <el-tooltip effect="light">
                <div slot="content">
                  通过基础地址+接口path可以获取到mock数据
                  <div>
                    例如:{{mockBaseUrl}}<span style="color: red">users/info</span>
                  </div>
                </div>
                <i class="header-icon el-icon-information"></i>
              </el-tooltip>
            </template>
            <template class="copy" slot="append"><span class="copy">复制</span></template>
          </el-input>
        </div>

      </div>
    </div>
    <!--接口列表信息-->
    <div v-if="!hasData">
      <div class="blank-state">
        <div class="blank-state-icon">
          <i class="ifont icon-empty"></i> <span>暂无接口信息，请先添加接口,然后发布</span>
        </div>
        <h3 class="blank-state-title">
          <el-button @click="newApi" type="primary">添加接口</el-button>
        </h3>
      </div>
      <el-alert class="tipWarp"
                title="项目介绍"
                type="info">
        <div v-html="projectMd"></div>
      </el-alert>
    </div>
    <el-table v-else
              :data="apiList"
              border
              @row-click="selectOneRow"
              highlight-current-row
              style="width: 100%">
      <!-- <el-table-column type="expand">
         <template scope="props">
           <doc-viewer v-if="props.row.apiInfo" :apiInfo="props.row.apiInfo"></doc-viewer>
         </template>
       </el-table-column>-->
      <el-table-column
          type="index">
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
          sortable
          prop="endStatus"
          :width="100"
          label="服务端"
      >
        <template scope="scope">
          <div @click.stop>
            <el-switch
                :key="1"
                :width="80"
                v-model.number="scope.row.endStatus"
                on-text="可联调"
                off-text="开发中"
                :off-value="1"
                :on-value="2"
                @change="statusChange(scope.row,1)"
                on-color="#13ce66"
                off-color="#ff4949">
            </el-switch>
          </div>
        </template>
      </el-table-column>
      <el-table-column
          sortable
          prop="frontStatus"
          :width="100"
          label="客户端"
      >
        <template scope="scope">
          <div @click.stop>
            <el-switch
                :key="2"
                :width="80"
                v-model.number="scope.row.frontStatus"
                on-text="已联调"
                off-text="未联调"
                :off-value="1"
                :on-value="2"
                @change="statusChange(scope.row,2)"
                on-color="#13ce66"
                off-color="#ff4949">
            </el-switch>
          </div>
        </template>
      </el-table-column>
      <el-table-column
          prop="tag"
          label="标签"
          :width="100"
          :filters="tagTableFilters"
          :filter-method="filterTag">
        <template scope="scope">
          <el-tag v-for="(tag, key) in scope.row.tags"
                  :key="key"
                  :type="'primary'"
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
                  <div @click.stop="api_edit(scope.row)">编辑</div>
                </el-dropdown-item>
                <el-dropdown-item command="">
                  <div @click="api_mock(scope.row)">查看MOCK数据</div>
                </el-dropdown-item>
                <el-dropdown-item command="">
                  <div @click="diff_ver(scope.row)">查看历史版本</div>
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

  .project-home-url
    width 500px
    margin auto

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
  import Config from 'src/config'
  import DocViewer from 'src/components/DocViewer'
  import Clipboard from 'clipboard'
  import {apiToJson, jsonToMock} from 'src/extend/Util'
  var projectMd = require('src/assets/tip/help/project.md')

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
        mockBaseUrl: Config.host + 'mock/' + this.id + '/',
        info: {},
        tagTableFilters: [],
        role: 4,
        apiList: [],
        project: {},
        projectMd: projectMd
      }
    },
    mounted: function () {
      this.initClipboard()
      this.loadApis()
      this.loadProject()
    },
    computed: {
      hasData: function (list) {
        return this.apiList.length > 0
      }
    },
    methods: {
      diff_ver: function (data) {
        this.openDialog({
          name: 'DDiffShowDoc',
          data: {
            title: '历史版本比对',
            info: data
          }
        })
      },
      api_edit: function (data) {
        this.$router.push({
          path: '/api/new',
          query: {
            id: data.fixedId
          }
        })
      },
      api_mock: function (data) {
        Server({
          url: 'api/getInterfaceInfo',
          params: {
            apiId: data.id,
            type: 1
          },
          method: 'get'
        }).then((response) => {
          var data = response.data.data
          data = apiToJson(data)
          this.openDialog({
            name: 'DShowJson',
            data: {
              title: 'mock数据显示',
              info: JSON.stringify(jsonToMock(data.response), null, 4)
            }
          })
        }).catch((e) => {
          console.log(e)
          this.$message('获取接口详情失败，重试')
        })
      },
      statusChange: function (data, type) {
        var keys = {
          '1': 'endStatus',
          '2': 'frontStatus'
        }
        var status = data[ keys[ type + '' ] ]
        if (status == 1) {
          status = 2
        } else if (status == 2) {
          status = 1
        }
        Server({
          url: 'api/updateHistoryStatus',
          data: {
            id: data.id,
            type: type,
            status: status
          },
          method: 'post'
        }).then((response) => {
          data[ keys[ type + '' ] ] = status
        }).catch((e) => {

        })
      },
      newApi: function () {
        this.openDialog({
          name: 'DAddApi',
          data: {
            title: '添加接口',
            form: {
              projectId: this.$route.query.id
            }
          },
          methods: {}
        })
      },
      initClipboard: function () {
        var me = this
        var clipboard = new Clipboard('.copy', {
          text: function () {
            return me.mockBaseUrl
          }
        })
        clipboard.on('success', function () {
          me.$message('复制成功')
        })
      },
      getApiInfo: function (data) {
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
            this.$set(item, 'apiInfo', apiToJson(data))
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
          var data = response.data.data.tags
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
      selectOneRow: function (item, event, column) {
        Server({
          url: 'api/getInterfaceInfo',
          params: {
            apiId: item.id,
            type: 1
          },
          method: 'get'
        }).then((response) => {
          var data = response.data.data
          this.$set(item, 'apiInfo', apiToJson(data))
          this.openDialog({
            name: 'DShowDoc',
            data: {
              title: 'mock数据显示',
              apiInfo: item.apiInfo
            }
          })
        }).catch((e) => {

        })
      },
      filterTag (value, row) {
        var flag = false
        row.tags && row.tags.forEach(function (val) {
          if (val.id == value) {
            flag = true
          }
        })
        return flag
      }
    }
  }
</script>
