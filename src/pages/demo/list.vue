<template>
  <div class="page">
    <el-row class="tableInfoWarp">
      <el-col :span="24" class="searchWarp">
        <el-form :inline="true" :model="tableInfo.search">
          <el-form-item label="运单编号" label-position="left">
            <el-input v-model="tableInfo.search.wayOrderNumber" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="客服运单">
            <el-input v-model="tableInfo.search.customerOrderNumber" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="下单时间">
            <el-date-picker
                v-model="tableInfo.search.updateTime1"
                type="daterange"
                placeholder="选择日期范围"
                style="width: 220px">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button native-type="button" @click="search" type="primary">查询</el-button>
            <el-button native-type="button" type="warning">警告</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="24" class="dataWarp">
        <el-table
            :data="tableInfo.data"
            border
            style="width: 100%">
          <el-table-column
              inline-template
              label="修改时间"
              width="180">
            <div>
              {{432432 | moneyFormat}}
            </div>
          </el-table-column>
          <el-table-column
              prop="wayOrderNumber"
              label="运单编号"
              width="180">
          </el-table-column>
          <el-table-column
              prop="driverName"
              label="司机">
          </el-table-column>
          <el-table-column
              prop="lineEnd"
              label="路线">
          </el-table-column>
          <el-table-column
              prop="lineEnd"
              label="状态">
          </el-table-column>
          <el-table-column
              inline-template
              fixed="right"
              label="操作"
              width="100">
              <span>
               fdsa
              </span>
          </el-table-column>
        </el-table>

        <el-pagination class="paginationWarp"
                       @current-change="loadData"
                       :current-page="tableInfo.pagination.curr"
                       :page-size="tableInfo.pagination.size"
                       layout="total, prev, pager, next, jumper"
                       :total="tableInfo.pagination.total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'demo_list',
    data () {
      return {
        // 一个典型列表数据格式
        tableInfo: {
          search: {
            wayOrderNumber: '',
            customerOrderNumber: '',
            updateTime1: 0,
            updateTime2: 0
          },
          data: [],
          pagination: {
            size: 10,
            total: 0,
            curr: 0
          }
        }
      }
    },
    mounted: function () {
      this.loadData(1)
    },
    methods: {
      loadData (pageId) {
        this.tableInfo.pagination.curr = pageId
        var data = Object.assign({}, this.tableInfo.search)
        data.updateTime2 = new Date(data.updateTime1[ 1 ]) - 0 || 0
        data.updateTime1 = new Date(data.updateTime1[ 0 ]) - 0 || 0
        data.pageId = pageId - 1
        data.pageSize = this.tableInfo.pagination.size
        Server({
          url: 'approve/page',
          mock: true,
          method: 'post',
          data: data
        }).then((response) => {
          var data = response.data
          if (data.result == 1) {
            // 设置分页信息
            this.tableInfo.pagination.total = data.approveList.totalElements
            this.tableInfo.data = data.approveList.content
          }
        }).catch(() => {

        })
      },
      search () {
        this.loadData(this.tableInfo.pagination.curr)
      }
    }
  }
</script>
