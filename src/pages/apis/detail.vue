<template>
  
  <div class="page">
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="leftcontrols">
          <doc-viewer v-if="apiInfo" :apiInfo="apiInfo"></doc-viewer>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .leftcontrols
    text-align left
</style>

<script type="text/ecmascript-6">
import BasePage from 'src/extend/BasePage'
import { mapState } from 'vuex'
import DocViewer from 'src/components/DocViewer'
import { apiToJson } from 'src/extend/Util'
import Server from 'src/extend/Server'

export default {
  mixins: [BasePage],
  components: { DocViewer },
  name: 'apis_detail',
  data: function () {
    return {
      apiInfo: null
    }
  },
  computed: mapState({
    appInfo: state => state.app,
    Metadata: state => state.Metadata
  }),
  mounted: function () {
    console.log(this.$route.query.id)
    Server({
      url: 'api/getInterfaceInfo',
      params: {
        apiId: this.$route.query.id,
        type: 1
      },
      method: 'get'
    }).then(response => {
      var data = response.data.data
      this.$set(this, 'apiInfo', apiToJson(data))
    }).catch(e => {
      console.log(e)
    })
  },
  methods: {
    success: function (data) {}
  }
}
</script>
