<template>
  <div class="div-table">
    <div class="div-table-line placeholder-request-args div-editing-line"
         @keydown.shift.enter.stop="addItem(item,key)"
         @keydown.ctrl.68.stop="parentAddItem(data,item)"
         @keydown.ctrl.delete.stop="removeItem(item)"
         @keydown.ctrl.187.stop="changeOpen(item)"
         @keydown.ctrl.73.stop="importJson(item)"
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
              popper-class="my-autocomplete"
              :fetch-suggestions="querySearch"
              placeholder="输入"
              custom-item="my-item-zh"
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
          <span v-if="canAdd(item)" @click="addItem(item,key)">
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
  import {jsonDismantle} from 'src/extend/Util'
  import $ from 'jQuery'
  import Vue from 'vue'

  Vue.component('my-item-zh', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item
      return h('li', ctx.data, [
        h('div', { attrs: { class: 'name' } }, [ item.value ]),
        h('span', { attrs: { class: 'addr', style: 'font-size:10px' } }, [ item.desc ])
      ])
    },
    props: {
      item: { type: Object, required: true }
    }
  })
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
      canAdd: function (item) {
        var flag = false
        if (item.type.indexOf('object') != -1) {
          flag = true
        }
        return flag
      },
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
      importJson: function (item) {
        this.openDialog({
          name: 'DImportJson',
          data: {
            title: '导入数据'
          },
          methods: {
            onImport: function (data) {
              item.type = 'object'
              item.child = jsonDismantle(data)
            }
          }
        })
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
        if (item.type.indexOf('object') == -1) {
          item.type = 'object'
        }
      },
      parentAddItem: function (data, item) {
        data.push(Object.assign({}, item))
      }
    }
  }
</script>
