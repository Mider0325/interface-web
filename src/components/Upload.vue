<template>
  <div>
    <div>
      <span class="select btn btn-default btn-lg ">选择文件</span>
      <el-progress class="progress1" :width="40" v-if="percentage>0" type="circle"
                   :percentage="percentage"></el-progress>
    </div>
    <div>只能上传jpg/png文件正方形图片，且不超过{{uploadSize}}</div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .progress1
    position: absolute;
    bottom: -0px;
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import Config from '../config'
  var Qiniu = window.Qiniu
  export default {
    mixins: [ BaseComponent ],
    name: 'Upload',
    data: function () {
      return {
        uploadSize: '300kb',
        percentage: 0,
        upstatus: 0 // 0:未上传   1:上传中
      }
    },
    props: {
      onSuccess: {
        type: Function,
        default: function () {

        }
      }
    },
    mounted: function () {
      var me = this
      // 引入Plupload 、qiniu.js后
      this.uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4',    // 上传模式,依次退化
        browse_button: me.$el.getElementsByClassName('select')[ 0 ],       // 上传选择的点选按钮，**必需**
        uptoken_url: Config.host + '/upload/init',            // Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
        //  uptoken : '', // 若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
        unique_names: true, //  默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
        // save_key: 'app',   //  默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
        domain: 'http://ok0m4xukx.bkt.clouddn.com/',   // bucket 域名，下载资源时用到，**必需**
        get_new_uptoken: false,  // 设置上传文件的时候是否每次都重新获取新的token
        max_file_size: me.uploadSize,           // 最大文件体积限制
        flash_swf_url: 'js/plupload/Moxie.swf',  // 引入flash,相对路径
        max_retries: 3,                   // 上传失败最大重试次数
        dragdrop: false,                   // 开启可拖曳上传
        chunk_size: '4mb',                // 分块上传时，每片的体积
        auto_start: true,                 // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
        init: {
          'BeforeUpload': function (up, file) {
            //  每个文件上传前,处理相关的事情
          },
          'UploadProgress': function (up, file) {
            //  每个文件上传时,处理相关的事情
            me.percentage = up.total.percent
          },
          'FileUploaded': function (up, file, info) {
            var domain = up.getOption('domain')
            var res = JSON.parse(info)
            var sourceLink = domain + res.key
            me.onSuccess(sourceLink)
          },
          'Error': function (up, err, errTip) {
            me.percentage = 0
            me.$notify({
              title: '失败',
              message: errTip,
              type: 'error'
            })
          },
          'UploadComplete': function (a, b, c) {
            if (me.percentage == 100) {
              me.percentage = -1
              me.$message({
                message: '上传图片成功',
                type: 'success'
              })
            }
          }
        }
      })
    },
    methods: {
      upload: function () {

      }
    }
  }
</script>

