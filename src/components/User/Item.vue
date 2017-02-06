<template>
  <li class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation">
    <div class="select2-result-label" id="select2-result-label-25" role="option">
      <div class="user-result undefined">
        <div class="user-image"><img class="avatar s24" :src="item.photo">
        </div>
        <div class="user-name">{{item.name}}</div>
      </div>
    </div>
  </li>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">

</style>
<script type="text/ecmascript-6">
  export default {
    mixins: [],
    name: 'CUser_Item',
    props: {
      item: Object,
      default: function () {
        return {
          name: '',
          email: '',
          photo: ''
        }
      }
    },
    data: function () {
      return {}
    },
    methods: {}
  }
</script>

