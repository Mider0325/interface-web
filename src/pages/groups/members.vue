<template>
  <div class="content-wrapper page-with-layout-nav">
    <div class="panel panel-default">
      <div class="panel-heading">
        添加用户到组
      </div>
      <div class="panel-body">
        <p class="light">
          该组的用户能访问该组的所有项目
        </p>
        <div class="new-group-member-holder">
          <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="账号">
              <el-autocomplete
                  v-model="form.name"
                  :fetch-suggestions="querySearchAsync"
                  custom-item="my-item-zh"
                  placeholder="请输入内容"
                  @select="handleSelect"
                  style="min-width: 300px;"
              ></el-autocomplete>
            </el-form-item>
            <el-form-item label="权限">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in Metadata.groupPower"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">添加用户到组</el-button>
            </el-form-item>

          </el-form>
        </div>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <strong>{{info.name}}</strong>
        组 存在用户
        <span class="badge">{{users.length}}</span>
        <div class="controls">

        </div>
      </div>
      <ul class="content-list">
        <li class="group_member js-toggle-container" v-for="item in users">
          <div class="controls">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{item.role | groupRole}}<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="e in Metadata.groupPower" trigger="click"
                                  :command="e.value + ',' + item.userId">{{e.label}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <a class="btn btn-remove" data-remote="true" rel="nofollow" @click="remove(item)">{{(item.userId === userInfo.userId)?'离开':'移除'}}</a>
          </div>
          <span class="list-item-name">
            <img class="avatar s40" alt="" :src="item.photo">
            <strong>
              <a href="/u/chentw">{{item.name}}</a>
            </strong>
            <span class="label label-success" v-if="item.userId === userInfo.userId">当前用户</span>
            <div class="cgray">{{item.email}}</div>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  import UserItem from 'src/components/User/item.vue'
  import {mapState} from 'vuex'
  import Vue from 'vue'
  Vue.component('my-item-zh', {
    functional: true,
    render: function (h, ctx) {
      return h('li', ctx.data, [h(UserItem, {
        props: {
          item: ctx.props.item
        }
      })])
    },
    props: {
      item: {type: Object, required: true}
    }
  })
  export default{
    mixins: [BasePage],
    components: {UserItem},
    name: 'groups_members',
    props: { info: {} },
    data () {
      return {
        // 一个典型列表数据格式
        form: {
          name: '',
          groupId: '',
          description: ''
        },
        req: {
          groupId: '',
          role: '',
          userId: ''
        },
        value: '',
        users: []
      }
    },
    computed: mapState({
      Metadata: state => state.Metadata
    }),
    mounted: function () {
      this.req.groupId = this.$route.query.id
      this.loadData()
    },
    methods: {
      querySearchAsync (queryString, cb) {
        Server({
          url: 'users/search',
          method: 'get',
          params: {key: queryString}
        }).then((response) => {
          var results = this.pretreatmentList(response.data.data)
          cb(results)
        }).catch(() => {

        })
      },
      pretreatmentList (list) {
        var result = []
        list.forEach(function (e) {
          result.push({
            'value': e.name,
            'email': e.email,
            'name': e.name,
            'photo': e.photo,
            'id': e.id
          })
        })
        return result
      },
      loadData () {
        Server({
          url: 'project/groupuser',
          method: 'get',
          params: {
            count: 100,
            id: this.req.groupId,
            start: 0
          }
        }).then((response) => {
          this.users = response.data.data
        }).catch(() => {

        })
      },
      onSubmit () {
        this.req.role = this.value
        Server({
          url: 'project/groupuser',
          method: 'post',
          data: this.req
        }).then((response) => {
          this.$message('添加成功')
          this.loadData()
        }).catch(() => {

        })
      },
      handleSelect (item) {
        window.console.log(item)
        this.req.userId = item.id
      },
      handleCommand (command) {
        var role = command.split(',')[0]
        var userId = command.split(',')[1]
        Server({
          url: 'project/groupuser',
          method: 'put',
          data: {
            groupId: this.req.groupId,
            role: role,
            userId: userId
          }
        }).then((response) => {
          this.$message('修改成功')
          this.loadData()
        }).catch(() => {

        })
      },
      remove (item) {
        Server({
          url: 'project/groupuser',
          method: 'delete',
          data: {
            groupId: this.req.groupId,
            userId: item.userId
          }
        }).then((response) => {
          this.$message('删除成功')
          if (item.userId === this.userInfo.userId) {
            this.$router.push({ path: 'dashboard_groups' })
          } else {
            this.loadData()
          }
        }).catch(() => {

        })
      }
    }
  }
</script>
