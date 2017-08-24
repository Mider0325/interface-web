<template>
  <div class="content-wrapper">
    <div class="container-fluid container-limited ">
      <div v-html="page" class="content"></div>
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
    name: 'help_doc',
    data: function () {
      return {
        page: ''
      }
    },
    mounted: function () {
      var path = this.$route.query.path
      this.loadPage(path)
    },
    methods: {
      noPage: function () {
        this.page = '弄404'
      },
      loadPage: function (path) {
        System.import('../../assets/tip/' + path + '').then(module => {
          this.page = module
        }).catch(() => {
          console.error('不存在该页面', path)
          this.noPage()
        })
      }
    }
  }
</script>
