<template>
  <div>
    <div id="sizeContent" class="sizeContent"></div>
    <div v-if="initStatus" class="wrapper">
      <c-header></c-header>
      <c-content></c-content>
      <c-dialogs></c-dialogs>
      <div v-loading.fullscreen.lock="showLoading"></div>
    </div>
    <welcome v-else @loadend="initStatus=true"></welcome>
  </div>

</template>
<style lang="styl" rel="stylesheet/stylus" type="text/css">
  @import "assets/style/app.styl";
  .sizeContent
    position: fixed
    width 100%
    height 100%
    left 0
    top 0
    visibility hidden

</style>
<script type='text/ecmascript-6'>
  import CHeader from 'src/components/Header'
  import CContent from 'src/components/Content'
  import CFooter from 'src/components/Footer'
  import CDialogs from 'src/components/Dialogs'
  import Welcome from 'src/components/Welcome'
  import {mapState} from 'vuex'
  export default {
    data: function () {
      return {
        initStatus: false,
        showLoading: false // 全屏loading
      }
    },
    components: {
      CHeader, CContent, CFooter, CDialogs, Welcome
    },
    mounted: function () {
      /* var auth = window.sessionStorage.getItem('session')
       if (!auth) {
       this.logout()
       } */
      window.EMA.bind('logout', () => {
        this.logout()
      })
      window.EMA.bind('loading.show', () => {
        this.showLoading = true
      })
      window.EMA.bind('loading.hide', () => {
        this.showLoading = false
      })
      window.EMA.bind('alert.show', (title, fn) => {
        this.$alert(title, '注意', {
          callback: action => {
            if (typeof fn == 'function') {
              fn()
            }
          }
        })
      })
      this.$store.dispatch('changeAppSize', {
        width: document.getElementById('sizeContent').offsetWidth,
        height: document.getElementById('sizeContent').offsetHeight
      })
    },
    computed: mapState({
      theme: state => state.app.theme
    }),
    methods: {
      logout: function () {
        window.sessionStorage.removeItem('session')
        window.location.replace(`/login.html?url=${encodeURIComponent(window.location.href)}`)
      }
    }
  }
</script>
