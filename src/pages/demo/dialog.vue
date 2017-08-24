<template>
  <div class="page">
    <div class="desc">
      弹出框有很多类型,基本的弹框 alert confirm 等,
      然后就是我们系统应用相关的弹出框,在我们的项目结构
      中提供不同的调用方。具体代码,参考 pages/demo-dialog.vue
      其中基础的alert,confirm使用的 element中的 messageBox相关组件
    </div>
    <h1>基础提示</h1>
    <el-button @click.native="alert" type="text">alert</el-button>
    <el-button @click.native="confirm" type="text">confirm</el-button>
    <el-button @click.native="prompt" type="text">prompt</el-button>
    <h1>复杂提示</h1>
    <el-button @click.native="showDialog" type="text">显示DDemo</el-button>
    <el-button @click="showDialog1" type="text">显示DDemo</el-button>
    <el-button @click="showDialog3" type="text">显示DDemo3</el-button>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">
  .desc {
    color: #4a4f52;
    margin: 30px;
  }
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'demo_dialog',
    methods: {
      alert: function () {
        this.$alert('这是一段内容', '标题名称', {
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      },
      confirm: function () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      prompt: function () {
        this.$prompt('请输入邮箱', '提示', {
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },
      showDialog: function () {
        // 复杂弹出框传入参数 必须包含  name, 以及可选的有 data methods,这两块的数据会覆盖 弹出框对象中的方法和数据

        this.openDialog({
          name: 'DGroupsNew',
          data: {
            title: '提交内容测试'
          },
          methods: {
            oktest: function () {
              console.log(this)
            }
          }
        })
      },
      showDialog1: function () {
        this.openDialog({
          name: 'DDemo2',
          data: {
            title: 'fdsa'
          },
          methods: {
            oktest: function () {
              console.log('fdsa')
            }
          }
        })
      },
      showDialog3: function () {
        this.openDialog({
          name: 'DDemo2',
          data: {
            dialog: '432432',
            title: 'fdsa'
          },
          methods: {
            oktest: function () {
              console.log('fdsafdsafdsa')
            },
            good: function () {
              console.log('good')
            }
          }
        })
      }
    }
  }
</script>
