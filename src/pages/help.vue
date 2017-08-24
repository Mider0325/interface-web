<template>
  <div class="content-wrapper">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited">
      <div class="content">
        <div>
          <h1>
            GoInterface 帮助文档
            <span>{{packageInfo.version}}</span>
          </h1>
          <p class="slead">
            欢迎使用GoInterface
          </p>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-8">
            <div class="documentation-index">
              <h1>
                文档说明
              </h1>
              <ul>
                <li v-for="item in doclist">
                  <router-link :to="item.router">{{item.name}}</router-link>
                  :{{item.desc}}
                </li>
              </ul>

            </div>
          </div>
          <div style="display: none" class="col-md-4">
            <div class="panel panel-default">
              <div class="panel-heading">
                快速帮助
              </div>
              <ul class="well-list">
                <li><a href="https://about.gitlab.com/getting-help/">See our website for getting help</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  export default{
    mixins: [ BasePage ],
    components: {},
    data () {
      return {
        doclist: [ {
          name: 'mockjs',
          desc: 'mock文档详情',
          router: {
            path: 'help/doc',
            query: {
              path: 'help/mockjs.html'
            }
          }
        } ]
      }
    },
    name: 'help'
  }
</script>
