<template>
  <div class="content-wrapper">
    <div class="flash-container flash-container-page">
    </div>
    <div class="container-fluid container-limited ">
      <div class="content">
        <div class="top-area">
          <el-tabs class="nav-links" :active-name="activeName" @tab-click="tabHandleClick">
            <el-tab-pane label="我的参与的项目" name="me"></el-tab-pane>
            <el-tab-pane label="关注项目" name="star"></el-tab-pane>
          </el-tabs>
          <div class="nav-controls">

            <div class="dropdown inline">
              <el-input
                  size="large"
                  placeholder="搜索"
                  v-model="input6">
              </el-input>
            </div>

            <router-link class="btn btn-new" to="projects_new">创建项目</router-link>
          </div>
        </div>

        <div class="projects-list-holder">
          <ul v-if="activeName==='me'" class="projects-list content-list">
            <router-link :to="{path:'/project',query:{id:item.id}}" tag="li"
                         v-for="item in myProjects" :key="item.id" class="project-row">
              <div class="title">
                <div class="project">
                  <div class="dash-project-avatar">
                    <div class="avatar project-avatar s40 identicon">
                      <img class="avatar project-avatar s40" :src="item.logo">
                    </div>
                  </div>
                  <span class="project-full-name">
                  <router-link tag="span" :to="{path:'/user',query:{id:item.creatorId}}" class="namespace-name">
                    <span v-if="item.creatorId==userInfo.userId" class="label label-success">我自己</span>
                    <span v-else>{{item.creatorName}}</span>
                  /
                  </router-link>
                  <router-link tag="span" :to="{path:'/groups/index',query:{id:item.groupId}}" class="namespace-name">
                  {{item.groupName}}
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
          <ul v-if="activeName==='star'" class="projects-list content-list">
            <router-link :to="{path:'/project',query:{id:item.id}}" tag="li"
                         v-for="item in starProjects" :key="item.id" class="project-row">
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
                    <router-link tag="span" :to="{path:'/groups_index',query:{id:item.groupId}}" class="namespace-name">
                    {{item.groupName}}
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
      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .project-name, .namespace-name
    cursor pointer
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'dashboard_projects',
    data () {
      return {
        activeName: 'me',
        // 一个典型列表数据格式
        myProjects: [],
        starProjects: []
      }
    },
    mounted: function () {
      this.loadMyProject()
    },
    methods: {
      tabHandleClick (tab) {
        this.activeName = tab.name
        if (tab.name == 'me') {
          this.loadMyProject()
        } else if (tab.name == 'star') {
          this.loadStarProject()
        }
      },
      loadMyProject: function () {
        Server({
          url: ' project/project',
          method: 'get',
          params: {
            count: 100,
            start: 0
          }
        }).then((response) => {
          this.myProjects = response.data.data
        }).catch(() => {

        })
      },
      loadStarProject: function () {
        Server({
          url: 'project/getmyfavorateproject',
          method: 'get',
          mock: true,
          data: {
            count: 100,
            start: 0
          }
        }).then((response) => {
          this.starProjects = response.data.data
        }).catch(() => {

        })
      },
      search () {
        this.loadData(this.tableInfo.pagination.curr)
      }
    }
  }
</script>
