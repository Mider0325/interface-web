<template>
  <div class="page-with-layout-nav">

    <div class="content">
      <div v-if="hasBase==0">
        <el-alert class="tipWarp"
                  title="基础对象介绍"
                  type="info">
          <div v-html="baseObject"></div>
        </el-alert>
        <div class="blank-state">
          <div class="blank-state-icon">
            <i class="ifont icon-empty"></i> <span>暂无基础数据</span>
          </div>
          <h3 class="blank-state-title">
            <el-button @click="addOne" type="primary">添加基础数据</el-button>
          </h3>
        </div>
      </div>
      <el-form ref="form" v-else :model="oneData" label-width="40px">
        <el-form-item label="名称">
          <el-input :minlength="1" :maxlength="15" placeholder="1-15位标准变量名称" v-model="oneData.name">
          </el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" :minlength="1" :maxlength="50" v-model="oneData.remark"></el-input>
        </el-form-item>

        <div class="form-group">
          <object-editer key="10" :projectId="id" :infos.sync="oneData.content"></object-editer>
        </div>
        <el-form-item>
          <el-button type="primary" @click="updata">保存并更新</el-button>
        </el-form-item>
      </el-form>

    </div>
    <el-menu v-if="hasBase!=0" class="slider" :default-active="activedIndex" theme="dark">
      <el-menu-item class="item" @click="addOne" index="_add">
        <i class="el-icon-plus"></i> 添加
      </el-menu-item>
      <el-menu-item class="item" @click="selectOne(item)" v-for="(item,index) in datas" :key="item.id"
                    :index="item.name">
        <i class="el-icon-caret-right"></i>{{item.name}} <i @click="deleteItem(item)" class="el-icon-delete"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">
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
      overflow auto
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  import {mapState} from 'vuex'
  import ObjectEditer from 'src/components/ObjectEditer/index.vue'
  var baseObject = require('src/assets/tip/help/baseObject.md')

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
        activedIndex: '',
        datas: [],
        baseObject: baseObject,
        oneData: {
          id: '',
          name: '',
          remark: '',
          content: []
        }
      }
    },
    mounted: function () {
      this.loadData()
    },
    computed: mapState({
      appInfo: state => state.app,
      Metadata: state => state.Metadata,
      hasBase: function () {
        return this.datas.length
      }
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
          name: 'newObject' + parseInt(Math.random() * 100),
          projectId: this.id - 0,
          remark: ''
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
        this.activedIndex = data.name
        if (typeof data.content == 'string') {
          this.oneData.content = JSON.parse(data.content)
        }
      }
    }
  }
</script>
