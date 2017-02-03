<template>
  <div class="content-wrapper page-with-layout-nav">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">
        <div class="project-members-page prepend-top-default">
          <div class="panel panel-default">
            <div class="panel-heading">
              添加用户到项目
              <div class="controls">
                <a class="btn btn-grouped" title="Import members from another project"
                   href="/h5developer/driver-loan2/project_members/import">Import members
                </a></div>
            </div>
            <div class="panel-body">
              <p class="light">
                下面列举的是可以访问项目的所有用户
              </p>
              <el-form ref="form" :model="form" label-width="80px">

                <el-form-item label="账号">
                  <el-autocomplete
                      v-model="form.name"
                      :fetch-suggestions="querySearchAsync"
                      :value="name"
                      placeholder="请输入内容"
                      @select="handleSelect"
                  ></el-autocomplete>
                </el-form-item>
                <el-form-item label="权限">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="item in Metadata.projectPower"
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

          <div class="panel panel-default">
            <div class="panel-heading">
              <strong>driver-loan2</strong>
              project members
              <span class="badge">0</span>
              <div class="controls">
                <form class="form-inline member-search-form"
                      action="/h5developer/driver-loan2/project_members" accept-charset="UTF-8"
                      method="get"><input name="utf8" type="hidden" value="✓">
                  <div class="form-group">
                    <input type="search" name="search" id="search"
                           placeholder="Find existing member by name" class="form-control"
                           spellcheck="false" value="">
                  </div>
                  <button name="button" type="submit" class="btn" title="Search"><i
                      class="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <ul class="content-list">

            </ul>
          </div>


          <div class="panel panel-default">
            <div class="panel-heading">
              <strong>h5developer</strong>
              group members
              <span class="badge">13</span>
              <div class="controls">
                <a class="btn" href="/groups/h5developer/group_members">Manage group members</a>
              </div>
            </div>
            <ul class="content-list">
              <li class="group_member js-toggle-container" id="group_member_72">
                <div class="controls">
                  <strong class="control-text">Owner</strong>
                </div>
                <span class="">
                                    <img class="avatar s40" alt=""
                                         src="http://secure.gravatar.com/avatar/fc5654afbe167b98e93674175607b80e?s=80&amp;d=identicon">
                                    <strong>
                                        <a>王坤明</a>
                                    </strong>
                                    <span class="cgray">wangkm</span>
                                    <span class="label label-success">It's you</span>
                                    <div class="cgray">
                                    Joined <time class="js-timeago" datetime="2016-10-08T09:42:57Z" title=""
                                                 data-toggle="tooltip"
                                                 data-placement="top" data-container="body"
                                                 data-original-title="Oct 8, 2016 5:42pm GMT+0800">2 months ago</time>
                                    </div>
                                </span>
                <div class="edit-member hide js-toggle-content">
                  <br>
                  <form class="edit_group_member" id="edit_group_member_72"
                        action="/groups/h5developer/group_members/72" accept-charset="UTF-8"
                        data-remote="true" method="post"><input name="utf8" type="hidden"
                                                                value="✓"><input type="hidden"
                                                                                 name="_method"
                                                                                 value="patch">
                    <div class="prepend-top-10">
                      <select class="form-control" name="group_member[access_level]"
                              id="group_member_access_level">
                        <option value="10">Guest</option>
                        <option value="20">Reporter</option>
                        <option value="30">Developer</option>
                        <option value="40">Master</option>
                        <option selected="selected" value="50">Owner</option>
                      </select>
                    </div>
                    <div class="prepend-top-10">
                      <input type="submit" name="commit" value="Save" class="btn btn-save btn-sm">
                    </div>
                  </form>
                </div>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  import {mapState} from 'vuex'

  export default{
    mixins: [BasePage],
    components: {},
    name: 'projects_members',
    data () {
      return {
        userQueryList: [],
        form: {
          name: '',
          groupId: '',
          description: ''
        },
        // 一个典型列表数据格式
        tableInfo: {
          search: {},
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
    computed: mapState({
      Metadata: state => state.Metadata
    }),
    methods: {
      querySearchAsync (queryString, cb) {
        Server({
          url: 'users/search',
          method: 'get',
          mock: true,
          params: {key: queryString}
        }).then((response) => {
          var results = response.data.data
          cb(results)
        }).catch(() => {
        })
      },
      createStateFilter (queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      loadData (pageId) {
        this.tableInfo.pagination.curr = pageId
        var data = Object.assign({}, this.tableInfo.search)
        data.pageId = pageId - 1
        data.pageSize = this.tableInfo.pagination.size
        Server({
          url: 'projects',
          method: 'post',
          mock: true,
          data: data
        }).then((response) => {
          var data = response.data
          // 设置分页信息
          this.tableInfo.pagination.total = data.totalNum
          this.tableInfo.data = data.list
        }).catch(() => {
        })
      },
      onSubmit: function () {
      },
      search () {
        this.loadData(this.tableInfo.pagination.curr)
      },
      handleSelect (item) {
        window.console.log(item)
      }
    }
  }
</script>
