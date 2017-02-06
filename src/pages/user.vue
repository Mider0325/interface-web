<template>
  <div class="content-wrapper">


    <div class="flash-container flash-container-page">
    </div>


    <div class=" ">
      <div class="content">
        <div class="user-profile">
          <div class="cover-block">
            <div class="cover-controls">
              <a class="btn btn-gray" href="/u/mingyuan.wei.atom?private_token=yfATUx1kcCzcuBAZbdyC"><i
                  class="fa fa-rss"></i>
              </a></div>
            <div class="avatar-holder">
              <a target="_blank"
                 href="http://secure.gravatar.com/avatar/706766aba6ccf2210430c35913569b9b?s=800&amp;d=identicon"><img
                  class="avatar s90" alt=""
                  :src="info.photo">
              </a></div>
            <div class="cover-title">
              {{info.name}}
            </div>
            <div class="cover-desc">
              <span class="middle-dot-divider">
                            {{info.email}}

              </span>
            </div>
            <div class="cover-desc">
              电话：{{info.telephone}}
            </div>
            <ul class="nav-links center user-profile-nav">
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

  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'user',
    data: function () {
      return {
        info: {}
      }
    },
    mounted: function () {
      var id = this.$route.query.id
      if (id && id != this.userInfo.userId) {
        Server({
          url: 'users/info',
          method: 'get',
          params: {
            uid: id
          }
        }).then((response) => {
          var data = response.data.data
          this.info = data
        })
      } else {
        this.info = this.userInfo
      }
    }
  }
</script>
