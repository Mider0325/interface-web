<template>
  <div class="content">
    <!--接口列表信息-->
    <el-table :data="apiList" border style="width: 100%"  @selection-change="handleSelectionChange">
      <el-table-column label="更新时间" sortable prop="createTime" width="160">
        <template scope="scope">
          <span style="margin-left: 10px">{{ createTime|datetime }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称" width="180">
      </el-table-column>
      <el-table-column label="类型" width="90">
        <template scope="scope">
          <span :class="scope.row.method">{{ scope.row.method.toUpperCase() }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="path" sortable label="路径">
      </el-table-column>
      <el-table-column label="发布状态" prop="status" :filters="[{ text: '待发布', value: '1' }, { text: '审核中', value: '2' },{ text: '已发布', value: '3' }]" :filter-method="filterStatus" width="100">
        <template scope="scope">
          <el-tag v-if="scope.row.status==1">
            待发布
          </el-tag>
          <el-tag type="warning" v-if="scope.row.status==2">
            审核中
          </el-tag>
          <el-tag type="success" v-if="scope.row.status==3">
            已发布
          </el-tag>
        </template>
      </el-table-column>

       <el-table-column label="对比状态" prop="modifyStatus" :filters="[{ text: '更新', value: 'update' }, { text: '新增', value: 'insert' }]" :filter-method="filterStatus" width="100">
        <template scope="scope">
          <el-tag v-if="scope.row.modifyStatus=='update'">
            更新
          </el-tag>
          <el-tag type="warning" v-if="scope.row.modifyStatus=='insert'">
            新增
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column  label="操作">
        <template scope="scope">
          <el-button type="primary" @click = "viewDiff(scope.$index)">查看详情</el-button>
        </template>
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        type="selection"
        width="55">
      </el-table-column>
    </el-table>
    <!--接口列表信息/-->
      <el-button type="warning" style="float:right;margin-top:50px" @click = "submit">覆盖草稿</el-button>
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
  export default {
    mixins: [BasePage],
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
        apiDraftList: {},
        apiId: '',
        createTime: '',
        multipleSelection: []
      }
    },
    mounted: function () {
      this.apiId = this.$route.query.apiId
      this.createTime = this.$route.query.createTime
      this.loadDrafApis()
    },
    methods: {
      loadProject: function () {
        Server({
          url: 'api/getDetailDrafById',
          method: 'get',
          params: {
            id: this.apiId
          }
        }).then((response) => {
          let apiList = JSON.parse(response.data.data[0].apis)
          apiList.forEach((item, index, items) => {
            items[index].createTime =  this.createTime
            items[index].modifyStatus = 'insert'
            items[index].status = 1
            this.apiDraftList.forEach(function (list, j, lists) {
              if ((list.path == item.path) && (list.method.toUpperCase() == item.method.toUpperCase())) {
                items[index].modifyStatus = 'update'
                items[index].status = list.status
                items[index].id = list.id
              }
            })
          })
          this.apiList = apiList
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
          this.apiDraftList = data
          this.loadProject()
          // this.setTableFilter(data)
        }).catch(() => {

        })
      },
      viewDiff: function (index) {
        let info = this.apiList[index]
        info.diffType = 'sync'
        this.openDialog({
          name: 'DDiffShowDoc',
          data: {
            title: '历史版本比对',
            info: info
          }
        })
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      submit: function () {
        // 判断是否有path,method相同的重复接口
        for (let i = 0; i < this.multipleSelection.length; i++) {
          if (this.multipleSelection[i].status == 2) {
            this.$message('审核中状态的接口不能被覆盖')
            return
          }
          for (let j = i + 1; j < this.multipleSelection.length; j++) {
            if (this.multipleSelection[i].path == this.multipleSelection[j].path && this.multipleSelection[i].method.toUpperCase() == this.multipleSelection[j].method.toUpperCase()) {
              this.$message('勾选的数据中存在路径,类型相同的重复接口')
              return
            }
          }
        }
        Server({
          url: 'api/batchUpdate',
          method: 'post',
          data: {
            projectId: parseInt(this.$route.query.id),
            apis: this.multipleSelection
          }
        }).then((response) => {
          this.$message('覆盖草稿成功')
        }).catch(() => {
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
