<template>
  <el-dialog :title="title" size="large" v-model="Visible" @close="close">
    <div class="mockContent">
      <mock-editer></mock-editer>
    </div>
  </el-dialog>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">
  .mockContent
    height 500px
</style>
<script type="text/ecmascript-6">
  import BaseDialog from 'src/extend/BaseDialog'
  import MockEditer from '../components/MockEditer.vue'
  export default {
    mixins: [ BaseDialog ],
    name: 'DMock',
    data: function () {
      return {

      }
    },
    components: { MockEditer },
    computed: {},
    methods: {
      onSubmit () {
      },
      showDialog: function () {
      }
    }
  }
</script>

