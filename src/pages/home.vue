<template>
  <div class="content-wrapper">

    <div class="alert-wrapper">


      <div class="flash-container flash-container-page">
      </div>


    </div>
    <div class="container-fluid container-limited ">
      <div class="content" id="content-body">
        <div class="blank-state blank-state-welcome">
          <h2 class="blank-state-welcome-title">
            欢迎加入 {{packageInfo.description}}
          </h2>
          <p class="blank-state-text">
            API文档，文档历史，接口测试，MOCK数据,
          </p>
        </div>
        <div class="blank-state">
          <div class="blank-state-icon">
            <i class="ifont icon-group"></i>
          </div>
          <h3 class="blank-state-title">
            创建分组，管理自己的项目
          </h3>
          <p class="blank-state-text">
            所有的项目都在每个分组中，便于管理自己的项目
          </p>
          <router-link class="btn btn-new" to="groups/new">创建分组
          </router-link>
        </div>
        <div class="blank-state">
          <div class="blank-state-icon">
            <i class="ifont icon-project"></i>
          </div>
          <h3 class="blank-state-title">
            创建自己的项目
          </h3>
          <p class="blank-state-text">
            你可以免费创建
            <strong>20</strong>
            个项目.(当然是骗你的)
          </p>
          <router-link class="btn btn-new" to="/projects/new">新建项目
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'

  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'home',
    mounted: function () {

    }
  }
</script>
