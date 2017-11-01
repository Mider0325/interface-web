<template>
  <el-dialog :title="title" v-model="Visible" @close="close">
    <div class="mockContent">
      <code-viewer :contents="info" :options="{readOnly:true}"
                   :ctype="'json'"></code-viewer>
    </div>
  </el-dialog>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .mockContent
    height 400px
  .footer
    margin-top 10px
    text-align right
</style>
<script type="text/ecmascript-6">
  import BaseDialog from 'src/extend/BaseDialog'
  import CodeViewer from 'src/components/CodeViewer'
  export default {
    mixins: [ BaseDialog ],
    name: 'DShowJson',
    data: function () {
      return {
        info: '{}',
        error: false
      }
    },
    components: { CodeViewer },
    computed: {},
    methods: {
    }
  }
</script>

