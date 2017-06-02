<template>
  <div class="page-with-layout-nav" :style="{height: (appInfo.size.height-50-58) + 'px'}">

    <div class="content">
      <el-form ref="form" :model="oneData" label-width="40px">
        <el-form-item label="名称">
          <el-input placeholder="名称" v-model="oneData.name">
          </el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="oneData.remark"></el-input>
        </el-form-item>

        <div class="form-group">
          <object-editer key="10" :infos.sync="oneData.content"></object-editer>
        </div>
        <el-form-item>
          <el-button type="primary" @click="updata">更新</el-button>
        </el-form-item>

      </el-form>
    </div>
    <el-menu class="slider" default-active="active">
      <el-menu-item class="item" @click="addOne" index="add">
        <i class="el-icon-plus"></i> 添加
      </el-menu-item>
      <el-menu-item class="item" @click="selectOne(item)" v-for="(item,index) in datas" :key="item.id"
                    :index="item.name">
        <i class="el-icon-caret-right"></i>{{item.name}} <i @click="deleteItem(item)" class="el-icon-delete"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .page-with-layout-nav
    width 100%
    display flex
    .slider
      height 100%
      width 200px
      overflow auto
      .el-icon-delete
        position absolute
        right 5px
        top 20px
    .content
      padding 10px
      flex 1
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  import {mapState} from 'vuex'
  import ObjectEditer from 'src/components/ObjectEditer/index.vue'

  export default{
    mixins: [ BasePage ],
    components: { ObjectEditer },
    name: 'projects_cbaseobject',
    props: {
      id: { // 项目id
        type: String
      }
    },
    data () {
      return {
        active: '',
        datas: [],
        oneData: {
          id: '',
          name: 'ffds',
          remark: 'fdsa',
          content: []
        }
      }
    },
    mounted: function () {
      this.loadData()
    },
    computed: mapState({
      appInfo: state => state.app,
      Metadata: state => state.Metadata
    }),
    methods: {
      loadData () {
        Server({
          url: 'api/getDatas',
          method: 'get',
          params: {
            projectId: this.id
          }
        }).then((response) => {
          this.datas = response.data.data.datas
          if (this.datas.length > 0) {
            this.selectOne(this.datas[ 0 ])
          }
        })
      },
      deleteItem (item) {
        Server({
          url: 'api/deleteData',
          method: 'delete',
          data: {
            id: item.id
          }
        }).then((response) => {
          var index = this.datas.indexOf(item)
          this.datas.splice(index, 1)
          if (this.datas.length > 0) {
            this.selectOne(this.datas[ 0 ])
          }
        })
      },
      addOne () {
        var data = {
          content: '[]',
          name: 'newObject',
          projectId: this.id - 0,
          remark: '新内容'
        }
        Server({
          url: 'api/addData',
          method: 'post',
          data: data
        }).then((response) => {
          data.id = response.data.data.id
          this.datas.unshift(data)
          this.selectOne(data)
        })
      },
      updata: function () {
        var item = this.oneData
        var data = Object.assign({}, item)
        data.content = JSON.stringify(data.content)
        Server({
          url: 'api/updateData',
          method: 'put',
          data: data
        }).then((response) => {
          this.$message('修改成功')
        })
      },
      selectOne: function (data) {
        this.oneData = data
        this.active = data.name
        if (typeof data.content == 'string') {
          this.oneData.content = JSON.parse(data.content)
        }
      }
    }
  }
</script>
