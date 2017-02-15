<template>
  <div class="view">
    <div v-for="(item,index) in infoList" class="inline">
      <el-input class="key" @input="change(index)" @focus="addOne(index)" size="small" v-model="item.key"
                placeholder="key"></el-input>
      <el-input class="value" @input="change(index)" @focus="addOne(index)" size="small" v-model="item.value"
                placeholder="value"></el-input>
      <div class="remove">
        <el-button v-if="getShow(index)" tabindex="100000000" size="small" type="primary" icon="delete"
                   @click="remove(index)"></el-button>
      </div>
    </div>

  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .view
    .inline
      display flex
      .key
        margin 2px 10px
        -webkit-flex 1
      .value
        margin 2px 10px
        -webkit-flex 1
      .remove
        margin 2px 10px
        width 50px
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'

  export default {
    mixins: [ BaseComponent ],
    name: 'RestfulTool_ObjectEdit',
    components: {},
    props: {
      onChange: {
        type: Function,
        default: function () {
        }
      },
      info: {
        type: Object,
        default: function () {
          return {
            a: 1,
            b: 2
          }
        }
      }
    },
    data: function () {
      return {
        infoList: []
      }
    },
    watch: {},
    mounted () {
      for (var key in this.info) {
        this.infoList.push({
          key: key,
          value: this.info[ key ]
        })
      }
      this.infoList.push({ value: '', key: '' })
    },
    methods: {
      getShow: function (index) {
        return this.infoList.length - 1 > index
      },
      remove (index) {
        this.infoList.splice(index, 1)
        this.change()
      },
      addOne (index) {
        if (this.infoList.length - 1 == index) {
          this.infoList.push({
            value: '',
            key: ''
          })
        }
      },
      change: function (index) {
        var temp = {}
        this.infoList.forEach(function (value) {
          if (value.key) {
            temp[ value.key ] = value.value
          }
        })
        this.onChange(temp)
      }
    }
  }
</script>

