<template>
  <div class="view">
    <el-row :gutter="20" :key="index" v-for="(item,index) in infoList">
      <el-col :span="10">
        <el-input class="key" @input="change(index)" @focus="addOne(index)" size="small" v-model="item.key"
                  placeholder="key"></el-input>
      </el-col>
      <el-col :span="11">
        <el-input v-show="item.type=='Text'" class="value" @input="change(index)" @focus="addOne(index)" size="small"
                  v-model="item.value"
                  placeholder="value"></el-input>
        <input v-show="item.type=='File'" @change="change(index)" type="file"></el-col>
      <el-col :span="2">
        <el-select v-model="item.type" v-if="paramType" size="small" @change="change(index)">
          <el-option label="Text" value="Text"></el-option>
          <el-option label="File" value="File"></el-option>
        </el-select>
      </el-col>
      <el-col :span="1">
        <div class="remove">
          <el-button v-if="getShow(index)" tabindex="100000000" size="small" type="primary" icon="delete"
                     @click="remove(index)"></el-button>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .view
    .el-row
      margin-bottom 5px
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
          }
        }
      },
      paramType: {
        type: Boolean,
        default: false
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
          value: this.info[ key ],
          file: undefined,
          type: 'Text'
        })
      }
      this.change()//
      this.infoList.push({ value: '', key: '', file: undefined, type: 'Text' })
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
            key: '',
            file: undefined,
            type: 'Text'
          })
        }
      },
      change: function (index) {
        var temp = {}
        var files = this.$el.querySelectorAll('[type=file]')
        this.infoList.forEach(function (value, i) {
          if (value.key) {
            temp[ value.key ] = value.type == 'Text' ? value.value : files[ i ].files[ 0 ]
          }
        })
        this.onChange(temp)
      }
    }
  }
</script>

