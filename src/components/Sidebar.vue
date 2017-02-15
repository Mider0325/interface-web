<template>
  <div class="nicescroll sidebar-expanded sidebar-wrapper">
    <div class="sidebar-action-buttons">
      <a @click.prevent="toggle" class="nav-header-btn toggle-nav-collapse">
        <el-tooltip content="Toggle navigation">
          <i class="ifont icon-menu"></i>
        </el-tooltip>
      </a>
      <a @click.prevent="setting" class="nav-header-btn pin-nav-btn has-tooltip js-nav-pin"
         :class="[{'is-active':theme.isLock}]"
         title="Unpin navigation"
         data-placement="right" data-container="body">
        <el-tooltip content="固定">
          <i class="ifont icon-guding fa-thumb-tack"></i>
        </el-tooltip>
      </a>
    </div>
    <ul class="nav nav-sidebar" tabindex="0" @click="closePanel" style="overflow: hidden; outline: none;">
      <li class="home">
        <router-link to="dashboard_projects" title="Projects" class="dashboard-shortcuts-projects">
          <span>
            项目
          </span>
        </router-link>
      </li>

      <li class="">
        <router-link to="dashboard_activity" class="dashboard-shortcuts-activity" title="Activity"><span>
动态
</span>
        </router-link>
      </li>
      </li>

    <!--  <li class="">
        <router-link to="dashboard_todo" class="dashboard-shortcuts-activity" title="Activity"><span>
TODO
</span>
        </router-link>
      </li>-->
      <li class="">
        <router-link to="dashboard_groups" title="Groups"><span>
我的分组
</span>
        </router-link>
      <li class="">
        <router-link to="help" title="Help"><span>
帮助
</span>
        </router-link>
      </li>
      <li class="">
        <router-link to="profile" title="Profile Settings" data-placement="bottom"><span>
用户设置
</span>
        </router-link>
      </li>
    </ul>

    <div id="ascrail2000" class="nicescroll-rails nicescroll-rails-vr"
         style="width: 7px; z-index: 1000; cursor: default; position: absolute; top: 50px; left: 213px; height: 906px; touch-action: none; display: none;">
      <div class="nicescroll-cursors"
           style="position: relative; top: 0px; float: right; width: 5px; height: 0px; background-color: rgb(255, 255, 255); border: 1px solid rgb(255, 255, 255); background-clip: padding-box; border-radius: 5px; touch-action: none;"></div>
    </div>
    <div id="ascrail2000-hr" class="nicescroll-rails nicescroll-rails-hr"
         style="height: 7px; z-index: 1000; top: 949px; left: 0px; position: absolute; cursor: default; display: none;">
      <div class="nicescroll-cursors"
           style="position: absolute; top: 0px; height: 5px; width: 0px; background-color: rgb(255, 255, 255); border: 1px solid rgb(255, 255, 255); background-clip: padding-box; border-radius: 5px;"></div>
    </div>
  </div>


</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .page-sidebar-pinned
    .nav-header-btn
      transform: rotate(90deg);

</style>

<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import {mapState} from 'vuex'
  export default {
    mixins: [ BaseComponent ],
    name: 'Sidebar',
    data: function () {
      return {
        currentPage: ''
      }
    },
    computed: mapState({
      activeIndex: state => state.app.activeIndex,
      navTwoIndex: state => state.app.navTwoIndex,
      theme: state => state.app.theme,
      mainNav: state => {
        if (state.app.menuData[ state.app.navIndex ]) {
          return state.app.menuData[ state.app.navIndex ].child
        } else {
          return []
        }
      }
    }),
    ready: function () {
    },
    initEvent: function () {
    },

    methods: {
      toggle: function () {
        Boolean
        var isOpen = !this.theme.isOpen
        this.$store.dispatch('updataTheme', {
          isOpen: isOpen,
          isLock: !isOpen
        })
      },
      closePanel: function () {
        var isOpen = this.theme.isLock
        if (!isOpen) {
          this.$store.dispatch('updataTheme', {
            isOpen: true,
            isLock: false
          })
        }
      },
      setting: function () {
        var isLock = !this.theme.isLock
        this.$store.dispatch('updataTheme', {
          isLock: isLock
        })
      },
      activeOne: function (data) {
        this.$router.push({
          path: '/' + data.resKey, params: data.params, query: data.query
        })
      }
    }
  }
</script>

