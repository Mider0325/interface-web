<template>
  <div class="content-wrapper page-with-layout-nav">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">
        <div class="top-area">
          <el-tabs class="nav-links" :active-name="activeName" @tab-click="tabHandleClick">
            <el-tab-pane label="成 员" name="member"></el-tab-pane>
            <el-tab-pane label="项 目" name="project"></el-tab-pane>
            <el-tab-pane label="设 置" name="setting"></el-tab-pane>
          </el-tabs>
        </div>
        <div v-if="activeName=='member'" class="group-members-page prepend-top-default">
          <members :id="info.id"></members>
        </div>
        <div v-if="activeName=='project'" class="projects-list-holder">
          <ul class="projects-list content-list">
            <router-link :to="{path:'/project',query:{id:item.id}}" tag="li"
                         v-for="item in projects" :key="item.id" class="project-row">
              <div class="title">
                <div class="project">
                  <div class="dash-project-avatar">
                    <div class="avatar project-avatar s40 identicon">
                      <img class="avatar project-avatar s40" :src="item.logo">
                    </div>
                  </div>
                  <span class="project-full-name">
                    <router-link tag="span" :to="{path:'/user',query:{id:item.creatorId}}" class="namespace-name">
                    {{item.creatorName}}
                    /
                    </router-link>
                    <router-link tag="span" :to="{path:'/project',query:{id:item.id}}" class="project-name filter-title">
                    {{item.projectName}}
                    </router-link>
                    </span>
                </div>
              </div>
              <div class="description">
                <p>{{item.description}}</p>
              </div>
            </router-link>
          </ul>
        </div>
        <div v-if="activeName=='setting'">
            <div class="panel panel-default prepend-top-default">
              <div class="panel-heading">
                基本设置
              </div>
              <div class="panel-body">
                <c-new :id="info.id"></c-new>
              </div>
            </div>
            <div class="panel panel-danger">
              <div class="panel-heading">删除分组</div>
              <div class="panel-body">
                <p>
                  删除分组会导致该分组的项目全部被删除
                  <br>
                  <strong>移除分组后不能回退，确定移除分组</strong>
                </p>
                <div class="form-actions">
                  <a class="btn btn-remove" rel="nofollow" @click="remove">移除分组</a>
                </div>
              </div>
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
  import Members from './members.vue'
  import CNew from './CNew.vue'
  export default{
    mixins: [ BasePage ],
    components: { Members, CNew },
    name: 'groups_index',
    data () {
      return {
        // 一个典型列表数据格式
        info: {},
        projects: [],
        activeName: 'member'
      }
    },
    mounted: function () {
      this.getDetail()
      this.getProjects()
    },
    methods: {
      tabHandleClick (tab) {
        this.activeName = tab.name
      },
      getProjects () {
        Server({
          url: 'project/groupproject',
          method: 'get',
          params: {
            count: 100,
            groupId: this.$route.query.id,
            start: 0
          }
        }).then((response) => {
          this.projects = response.data.data
        }).catch(() => {
        })
      },
      getDetail () {
        Server({
          url: 'project/groupinfo',
          method: 'get',
          params: {
            id: this.$route.query.id
          }
        }).then((response) => {
          this.info = response.data.data
        }).catch(() => {
        })
      },
      remove () {
        Server({
          url: 'project/group',
          method: 'delete',
          data: {
            id: this.$route.query.id
          }
        }).then((response) => {
          this.$message('删除成功')
          this.$router.push({ path: '/dashboard/groups' })
        }).catch(() => {
        })
      }
    }
  }
</script>
