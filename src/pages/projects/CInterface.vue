<template>
  <div class="content">
    <!--接口列表信息-->
    <el-table
        :data="apiList"
        border
        style="width: 100%">
      <el-table-column
          label="更新时间"
          sortable
          prop="time"
          width="160">
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
          label="状态"
          prop="status"
          :filters="[{ text: '待发布', value: '1' }, { text: '审核中', value: '2' }]"
          :filter-method="filterStatus"
          width="100"
      >
        <template scope="scope">
          <el-tag v-if="scope.row.status==1">
            待发布
          </el-tag>
          <el-tag type="warning" v-if="scope.row.status==2">
            审核中
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
          prop="tag"
          label="标签"
          width="100"
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
      <el-table-column v-if="role<4" label="操作" width="200">
        <template scope="scope">
          <el-button v-if="role<3&&scope.row.status==2"
                     size="small"
                     type="warning"
                     @click="handleVerify(scope.$index, scope.row)">审核
          </el-button>
          <el-button v-if="role<4&&scope.row.status==1"
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
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  /**
   * 项目接口
   */
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'projects_cinterface',
    props: {
      id: { // 项目id
        type: String
      }
    },
    data () {
      return {
        tagTableFilters: [],
        role: 4, // 游客
        apiList: [],
        project: {}
      }
    },
    mounted: function () {
      this.loadProject()
    },
    methods: {
      loadProject: function () {
        Server({
          url: 'project/projectinfo',
          method: 'get',
          params: { id: this.id }
        }).then((response) => {
          this.project = response.data.data
          this.role = this.project.role
          this.loadDrafApis()
        }).catch(() => {
          this.$message('刷新重试')
        })
      },
      /* 草稿相关表格过滤 */
      loadDrafApis: function () {
        Server({
          url: 'api/draftList',
          method: 'get',
          params: {
            projectId: this.id,
            tagIds: ''
          }
        }).then((response) => {
          var data = response.data.data
          // 设置分页信息
          this.apiList = data
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
          var data = response.data.data.tags
          this.tagTableFilters = data.map((value) => {
            return {
              text: value.name,
              value: value.id
            }
          })
        }).catch(() => {

        })
      },
      /**
       * 编辑
       */
      handleEdit: function (index, row) {
        this.$router.push({
          path: '/apis/new',
          query: {
            id: row.id
          }
        })
      },
      /**
       * 删除
       */
      handleDelete: function (index, row) {
        this.$confirm('确认删除,删除后所有数据将清除', '提示', {
          type: 'warning'
        }).then(() => {
          Server({
            url: 'api/delete',
            method: 'delete',
            data: {
              apiId: row.id
            }
          }).then((response) => {
            this.apiList.forEach((value, index) => {
              if (value.id == row.id) {
                this.apiList.splice(index, 1)
              }
            })
          }).catch(() => {
          })
        }).catch(() => {
          this.$message('已取消')
        })
      },
      handleVerify: function (index, row) {
        this.openDialog({
          name: 'DVerifie',
          data: {
            title: '审核',
            id: row.id
          },
          methods: {
            callback: function (status) {
              row.status = 1
            }
          }
        })
      },
      filterStatus: function (value, row) {
        return row.status == value
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
