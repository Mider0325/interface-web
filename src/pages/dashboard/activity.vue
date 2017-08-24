<template>
  <div class="content-wrapper">
    <div class="flash-container flash-container-page">
    </div>
    <div class="container-fluid container-limited ">
      <div class="content">
        <section class="activities">
          <div class="nav-block top-area">
            <div class="controls">

            </div>
            <el-tabs class="nav-links" :active-name="activeName" @tab-click="tabHandleClick">

              <el-tab-pane v-for="item in getMessage(messages)" :name="item.key" :key="item.key">
                <span slot="label">
                  {{item.name}}
                    <el-badge :hidden="updataMessageNum[item.key]==0" :value="updataMessageNum[item.key]"></el-badge>
                </span>
              </el-tab-pane>
            </el-tabs>
          </div>

          <div v-if="hasList(list)">
            <div class="blank-state">
              <div class="blank-state-icon">
                <i class="ifont icon-empty"></i>
              </div>
              <h3 class="blank-state-title">
                暂无记录
              </h3>
            </div>
          </div>
          <div class="content_list" v-else>
            <!--接口消息-->
            <div v-for="(item,index) in list" @click="reade(item)" class="event-block event-item">
              <div class="event-item-timestamp">

                <time class="js-timeago" data-placement="top" data-container="body">{{item.time|datetime}}</time>

              </div>
              <router-link
                  :to="{path:'/user',query:{id:item.userId}}">
                <img class="avatar has-tooltip  s40" :src="item.userPhoto">
              </router-link>
              <div class="event-title">
                <span class="author_name"><router-link
                    :to="{path:'/user',query:{id:item.userId}}">{{item.userName}}</router-link></span>
                <span class="accepted"></span>
                {{item.title}}
              </div>
              <div class="event-body">
                <div class="event-note">
                  {{item.content}}
                </div>
              </div>
              <div class="readyStatus">
                <div v-if="item.readStatus==1" class="ifont icon-weidu"></div>
                <div v-if="item.readStatus==2" class="ifont icon-yidu"></div>
              </div>
            </div>
            <!--接口消息-->
          </div>

          <div class="loading" v-loading.body="loading"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">
  .event-item
    position relative
    .event-item-timestamp
      line-height 90px
      position: absolute;
      right: 0
    .readyStatus
      position absolute
      right 0
      top 0
      font-size 40px
      .icon-weidu
        color #1a98ea
      .icon-yidu
        color #dddddd
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  import {mapState} from 'vuex'
  import $ from 'jQuery'

  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'dashboard_activity',
    data () {
      return {
        messages: {
          'groups': { id: '1', key: 'groups', name: '分组消息' },
          'project': { id: '2', key: 'project', name: '项目消息' },
          'api': { id: '3', key: 'api', name: '接口消息' }
        },
        loading: false,
        activeName: 'api',
        list: []
      }
    },
    computed: mapState({
      updataMessageNum: state => state.updataMessageNum // 用户信息
    }),
    mounted: function () {
      this.tabHandleClick()
      $(window).scroll(function () {
        console.log('good')
      })
    },
    methods: {
      hasList: function (list) {
        return this.list.length <= 0
      },
      getMessage: function () {
        var array = []
        for (var key in this.messages) {
          array.push(this.messages[ key ])
        }
        array.sort(function (a, b) {
          return b.id - a.id
        })
        return array
      },
      tabHandleClick: function (tab) {
        this.list = []
        if (tab) {
          this.activeName = tab.name
        }
        this.loadMessage()
      },
      reade: function (item) {
        Server({
          url: 'notice/changeReadStatus',
          data: {
            id: item.id
          },
          method: 'put'
        }).then((response) => {
          item.readStatus = 2
        }).catch(() => {
        })
      },
      loadMessage: function () {
        this.loading = true
        var start = 0
        if (this.list[ this.list.length - 1 ]) {
          start = this.list[ this.list.length - 1 ].id
        }
        Server({
          url: 'notice/listMessage',
          params: {
            count: 25,
            start: start,
            status: 3,
            type: this.messages[ this.activeName ].id
          },
          method: 'get'
        }).then((response) => {
          this.loading = false
          this.list = this.list.concat(response.data.data)
        }).catch(() => {
          this.loading = false
        })
      }
    }
  }
</script>
