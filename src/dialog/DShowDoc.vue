<template>
  <el-dialog :title="title" size="full" v-model="Visible" @close="close">
    <div class="content" :style="{height: (appInfo.size.height-100) + 'px'}">
      <doc-viewer v-if="apiInfo" :apiInfo="apiInfo"></doc-viewer>
    </div>
    <div slot="footer" class="dialog-footer">
    </div>
  </el-dialog>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">
  .content
    overflow: auto
    margin auto
    min-height 600px
    max-width 1200px
</style>
<script type="text/ecmascript-6">
  import BaseDialog from 'src/extend/BaseDialog'
  import {mapState} from 'vuex'
  import DocViewer from 'src/components/DocViewer'

  export default {
    mixins: [ BaseDialog ],
    components: { DocViewer },
    name: 'DAddGroup',
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
    },
    methods: {
      success: function (data) {
      }
    }
  }
</script>

