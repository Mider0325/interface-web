<template>
  <div class="div-table">
    <div class="div-table-line placeholder-request-args div-editing-line"
         @keydown.shift.enter.stop="addItem(item,key)"
         @keydown.ctrl.68.stop="parentAddItem(data,item)"
         @keydown.ctrl.delete.stop="removeItem(item)"
         @keydown.ctrl.187.stop="changeOpen(item)"
         :key="key" v-for="(item,key) in data">
      <ul class="cb">
        <li class="name input">
          <el-input type="text" class="noborder" v-model="item.name"></el-input>
        </li>
        <li class="type">
          <!--<el-select class="noborder" v-model="item.type" placeholder="请选择">
            <el-option :key="key" v-for="(item, key) in Metadata.paramsType" :label="item"
                       :value="item"></el-option>

          </el-select>-->

          <select class="select noborder" v-model="item.type">
            <option :key="key" v-for="(item, key) in Metadata.paramsType" :value="item">{{item}}</option>
          </select>
        </li>
        <li class="mock input">
          <el-autocomplete
              class="noborder"
              v-model="item.mock"
              :fetch-suggestions="querySearch"
              placeholder="输入"
              :trigger-on-focus="false"
              @select="handleSelect"
          ></el-autocomplete>
        </li>
        <li class="desc input">
          <el-input type="textarea" resize="none" @focus="autoSelect" class="noborder" autosize
                    v-model="item.description" placeholder="输入"></el-input>
        </li>
        <li v-if="required" class="require">
          <select class="select noborder" v-model="item.require">
            <option label="true" value="true">true</option>
            <option label="false" value="false">false</option>
          </select>
        </li>
        <li class="operate">
          <span @click="removeItem(item)">
              <i class="ifont icon-del"></i>
          </span>
          <span v-if="item.child" @click="changeOpen(item)">
              <i :class="!item._close?'el-icon-caret-top':'el-icon-caret-bottom'"></i>
          </span>
          <span v-if="item.type=='object'||item.type=='array'" @click="addItem(item,key)">
                <i class="ifont icon-add"></i>
          </span>
        </li>
      </ul>
      <div v-if="item.child&&!item._close" class="sub div-editing-table">
        <object-editer-item :required="required" :data="item.child"></object-editer-item>
      </div>
    </div>
  </div>

</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .select
    width 100%
    height 100%
    border none
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import {mapState} from 'vuex'
  import $ from 'jQuery'

  export default {
    mixins: [ BaseComponent ],
    name: 'ObjectEditerItem',
    props: {
      data: {
        type: Array,
        default: function () {
          return []
        }
      },
      required: {
        type: Boolean,
        default: function () {
          return false
        }
      }
    },
    computed: mapState({
      Metadata: state => state.Metadata
    }),
    data: function () {
      return {}
    },
    watch: {},
    mounted () {
      this.$nextTick(function () {
        var input = $(this.$el).find('input')[ 0 ]
        input && input.focus()
      })
    },
    methods: {
      querySearch (queryString, cb) {
        var restaurants = this.Metadata.mockAdvice
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      createFilter (queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelect: function (item) {
        console.log(item)
      },
      autoSelect: function () {
      },
      changeOpen: function (item) {
        var flag = !item._close
        this.$set(item, '_close', flag)
      },
      removeItem: function (item) {
        var id = this.data.indexOf(item)
        this.data.splice(id, 1)
        console.log(id)
      },
      addItem: function (item) {
        if (!item.child) {
          this.$set(item, 'child', [])
        }
        item.child.unshift({
          name: '',
          require: 'true',
          type: 'string',
          mock: '',
          description: ''
        })
        item.type = 'object'
      },
      parentAddItem: function (data, item) {
        data.push(Object.assign({}, item))
      }
    }
  }
</script>

