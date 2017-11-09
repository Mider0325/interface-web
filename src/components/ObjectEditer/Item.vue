<template>
  <div class="div-table">
    <div class="div-table-line placeholder-request-args div-editing-line" @keydown.shift.enter.stop="addItem(item,key)" @keydown.ctrl.68.stop="parentAddItem(data,item)" @keydown.ctrl.delete.stop="removeItem(item)" @keydown.ctrl.187.stop="changeOpen(item)" @keydown.ctrl.73.stop="importJson(item)"  @keydown.ctrl.69.stop="exportJson(item)" :key="key" v-for="(item,key) in data">
      <ul class="cb" :class="[item._meta?item._meta.type:'']">
        <li class="name input">
          <template v-if="editable">
            <el-input type="text" :minlength="1" :maxlength="25" placeholder="标准变量命名" @input="onNameChange(item)" :class="item._error" class="noborder" v-model="item.name"></el-input>
          </template>
          <template v-else>
            {{item.name}}
          </template>
        </li>
        <li class="type">
          <!--<el-select class="noborder" v-model="item.type" placeholder="请选择">
                    <el-option :key="key" v-for="(item, key) in Metadata.paramsType" :label="item"
                               :value="item"></el-option>

                  </el-select>-->
          <template v-if="editable">
            <select class="select noborder" v-model="item.type">
              <option :key="key" v-for="(item, key) in paramsType" :value="item">{{item}}</option>
            </select>
          </template>
          <template v-else>
            <span class="editWarp">{{item.type}}</span>
          </template>
        </li>
        <li class="mock input">
          <template v-if="editable">
            <el-autocomplete class="noborder" v-model="item.mock" popper-class="my-autocomplete" :fetch-suggestions="querySearch" placeholder="输入" custom-item="my-mock-item" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
          </template>
          <template v-else>
            <span class="editWarp">{{item.mock}}</span>
          </template>
        </li>
        <li class="desc input">
          <template v-if="editable">

            <el-input type="textarea" :minlength="1" :maxlength="200" resize="none" @focus="autoSelect" class="noborder" autosize v-model="item.description" placeholder="输入"></el-input>
          </template>
          <template v-else>
            <span class="editWarp">{{item.description}}</span>
          </template>
        </li>
        <li v-if="required" class="require">
          <template v-if="editable">

            <select class="select noborder" v-model="item.require">
              <option label="true" value="true">true</option>
              <option label="false" value="false">false</option>
            </select>
          </template>
          <template v-else>
            <span class="editWarp">{{item.require}}</span>
          </template>
        </li>
        <li class="operate">
          <template v-if="editable">
            <span class="item" @click="removeItem(item)">
              <i class="ifont icon-del"></i>
            </span>
            <span class="item" v-if="canAdd(item)" @click="addItem(item,key)">
              <i class="ifont icon-add"></i>
            </span>
          </template>
          <span class="item" v-if="item.child&&item.child.length>0" @click="changeOpen(item)">
            <i :class="!item._close?'el-icon-caret-top':'el-icon-caret-bottom'"></i>
          </span>
          <i v-if="item._meta" @click="tipInfo(item._meta)" class="el-icon-warning"></i>
        </li>
      </ul>
      <div v-if="item.child&&!item._close" class="sub div-editing-table">
        <object-editer-item :editable="editable" :required="required" :data="item.child" :projectId="projectId"></object-editer-item>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
.select {
  width: 100%;
  height: 100%;
  border: none;
}

.updata {
  background-color: #4a8bee;
  color: #fff;
}

.add {
  background-color: green;
  color: #fff;
}

.delete {
  background-color: red;
  color: #fff;
}

.editWarp {
  margin: 10px 10px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
}
</style>
<script type="text/ecmascript-6">
import BaseComponent from 'src/extend/BaseComponent'
import { mapState } from 'vuex'
import Vue from 'vue'
import cloneDeep from 'lodash/cloneDeep'
Vue.component('my-mock-item', {
  functional: true,
  render: function (h, ctx) {
    var item = ctx.props.item
    return h('li', ctx.data, [
      h('div', { attrs: { class: 'name' } }, [item.value]),
      h('span', { attrs: { class: 'addr', style: 'font-size:10px' } }, [item.desc])
    ])
  },
  props: {
    item: { type: Object, required: true }
  }
})
export default {
  mixins: [BaseComponent],
  name: 'ObjectEditerItem',
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    projectId: {
      type: [String, Number],
      default: function () {
        return ''
      }
    },
    required: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    editable: {
      type: Boolean,
      default: function () {
        return true
      }
    }
  },
  computed: mapState({
    Metadata: state => state.Metadata,
    paramsType: state => state.Metadata.paramsType.filter((value) => {
      return true
    })
  }),
  data: function () {
    return {}
  },
  watch: {},
  beforeCreated: function () {
    this.data.forEach((value) => {
      value.mock = value.mock + ''
    })
  },
  mounted () {
  },
  methods: {
    tipInfo: function (data) {
      this.$alert(JSON.stringify(data, null, 2))
    },
    onNameChange: function (item) {
    },
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
      if (!this.editable) {
        return
      }
      var id = this.data.indexOf(item)
      this.data.splice(id, 1)
      console.log(id)
    },
    /**
     * 导入数据
     */
    importJson: function (item) {
      if (!this.editable) {
        return
      }
      var me = this
      this.openDialog({
        name: 'DImportJson',
        data: {
          title: '导入数据',
          projectId: me.projectId
        },
        methods: {
          onImport: function (data, cover) {
            item.type = 'object'
            item.child = item.child || []
            if (cover) {
              item.child = data
            } else {
              me.$set(item, 'child', item.child.concat(data))
            }
          }
        }
      })
    },
    exportJson: function (item) {
      if (!this.editable) {
        return
      }
      this.openDialog({
        name: 'DExportdata',
        data: {
          title: '导出到基础数据',
          projectId: this.projectId,
          preData: [item]
        },
        methods: {}
      })
    },
    addItem: function (item) {
      if (!this.editable) {
        return
      }
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
      if (!this.editable) {
        return
      }
      data.push(cloneDeep(item))
    }
  }
}
</script>
