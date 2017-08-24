<template>
  <span class="itemTree">
    <span v-if="info.required" class="required">*</span>
    <span class="request-label">{{info.label}}</span>
    <span class="schematype" :class="[info.schema]">{{info.schema}}</span>
     <el-tooltip v-if="info.description">
       <div style="max-width: 400px" slot="content">{{info.description}}</div>
      <span class="description">{{info.mindescription}}</span>
    </el-tooltip>
  </span>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">
  .itemTree
    overflow hidden
    .el-tooltip
      display inline-block
    .content
      max-width 500px
    .schematype
      margin: 0 3px;
      padding: 1px 5px;
      border-radius: 5px;
      &.schematype.number
        background-color: #416bbb;
        color #ffffff
      &.schematype.object
        background-color: #39bb2f;
        color #ffffff
      &.schematype.array
        background-color: #bb7220;
        color #ffffff
      &.schematype.string
        background-color: #bb221b;
        color #ffffff
      &.schematype.boolean
        background-color: #bb221b;
        color #ffffff

    .required.true
      display inline-block
      color red
      margin 2px

    .required.false
      display none

    .request-label
      font-weight bold

</style>
<script type="text/ecmascript-6">
  export default {
    mixins: [],
    name: 'RequestViewer_TreeItem',
    props: {
      info: Object
    },
    data: function () {
      return {}
    },
    methods: {}
  }
</script>

