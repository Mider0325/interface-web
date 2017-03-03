<template>
  <div class="tool">
    <!--请求路径信息-->
    <div class="path">
      <div class="input">
        <el-input placeholder="请输入路径" @focus="pathParamsVisable=false" v-model="requestInfo.url">
          <el-select class="el-my-select" v-model="method" slot="prepend" placeholder="请选择">
            <el-option v-for="item in Metadata.methods" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <el-button slot="append" type="primary" @click="pathParamsVisable = !pathParamsVisable">参数</el-button>
        </el-input>
      </div>
      <el-dropdown class="send" @click="send" v-if="responseBodyViewType=='Pretty'" split-button type="primary"
                   @command="sendTypeSelect">
        发送
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="saveandsend">保存并发送</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!--请求路径信息-->

    <!--请求路径参数信息-->
    <div class="pathParams" v-if="pathParamsVisable">
      <object-edit :info="requestInfo.query" :on-change="requestQueryChange"></object-edit>
    </div>
    <!--请求路径参数信息-->

    <!-- 请求参数 -->
    <div class="requestWarp">
      <!-- tab切换标头-->
      <el-tabs v-model="requestTabName" @tab-click="requestTabClick" :active-name="requestTabName">
        <el-tab-pane label="Authorization" name="Authorization"></el-tab-pane>
        <el-tab-pane label="Header" name="Header"></el-tab-pane>
        <el-tab-pane label="Body" name="Body" :disabled="!showBody"></el-tab-pane>
      </el-tabs>
      <!-- tab切换标头-->
      <!--tab内容-->
      <div class="tabContent" v-if="requestTabName=='Authorization'">
        暂未开放
      </div>
      <div class="tabContent" v-if="requestTabName=='Header'">
        <object-edit :info="requestInfo.header" :on-change="requestHeaderChange"></object-edit>
      </div>
      <div class="tabContent" v-if="requestTabName=='Body'">
        <div class="nav">
          <el-radio-group size="small" v-model="requestBodyViewType">
            <el-radio label="formdata">form-data</el-radio>
            <el-radio label="xwwwformurlencoded">x-www-form-urlencoded</el-radio>
            <el-radio label="raw">raw</el-radio>
            <el-radio label="binary">binary</el-radio>
          </el-radio-group>
          <el-dropdown size="small" class="bodyType" v-if="requestBodyViewType=='raw'" type="primary"
                       @command="requestBodyViewTypeSelect">

            <span class="el-dropdown-link">
            {{requestBodyType.toUpperCase()}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="Text">Text</el-dropdown-item>
              <el-dropdown-item command="Text(text/plain)">Text(text/plain)</el-dropdown-item>
              <el-dropdown-item command="JSON(application/json)">JSON(application/json)</el-dropdown-item>
              <el-dropdown-item command="javascript(application/javascript)">javascript(application/javascript)
              </el-dropdown-item>
              <el-dropdown-item command="XML(application/xml)">XML(application/xml)</el-dropdown-item>
              <el-dropdown-item command="XML(text/xml)">XML(text/xml)</el-dropdown-item>
              <el-dropdown-item command="HTML(text/html)">HTML(text/html)</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="body">
          <div class="raw" v-if="requestBodyViewType=='raw'">
            <code-viewer :ctype="requestBodyType_view"
                         :options="{theme:''}"
                         :on-change="requestBodyInfoChange"
                         :contents="requestInfo.body"></code-viewer>
          </div>
          <div v-if="requestBodyViewType=='formdata'">
            <object-edit :info="requestInfo.formDataBody" :param-type='true'
                         :on-change="requestQueryChange"></object-edit>
          </div>
          <div v-if="requestBodyViewType=='xwwwformurlencoded'">
            <object-edit :info="requestInfo.formDataBody"
                         :on-change="requestQueryChange"></object-edit>
          </div>
          <div v-if="requestBodyViewType=='binary'">
            <br>
            <form enctype="multipart/form-data">
              <input type="file" @change="binaryChange">
            </form>
            <br>
          </div>
        </div>
      </div>
      <!--tab内容-->
    </div>
    <!-- 请求参数 end-->

    <!-- 请求结果 -->
    <div class="responseWarp" element-loading-text="拼命加载中"
         v-loading="requestLoading">
      <div v-if="!responseInfo.error">
        <el-tabs v-model="responseTabName" @tab-click="responseTabClick">
          <el-tab-pane label="Body" name="Body"></el-tab-pane>
          <el-tab-pane label="Cookies" name="Cookies"></el-tab-pane>
          <el-tab-pane label="Headers" name="Headers"></el-tab-pane>
        </el-tabs>
        <div class="tabContent" v-if="responseTabName=='Body'">
          <div class="nav">
            <el-radio-group size="small" v-model="responseBodyViewType">
              <el-radio-button label="Pretty">Pretty</el-radio-button>
              <el-radio-button label="Raw">Raw</el-radio-button>
              <el-radio-button label="Preview">Preview</el-radio-button>
            </el-radio-group>
            <el-dropdown size="small" v-if="responseBodyViewType=='Pretty'" split-button type="primary"
                         @command="responseBodyViewTypeSelect">
              {{responseBodyType.toUpperCase()}}
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="json">JSON</el-dropdown-item>
                <el-dropdown-item command="html">HTML</el-dropdown-item>
                <el-dropdown-item command="text">TEXT</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div v-if="responseInfo.status" class="tip">
              状态码: <span>{{responseInfo.status}}</span>
            </div>
          </div>
          <div class="body">
            <div v-if="responseBodyViewType=='Pretty'">
              <code-viewer :ctype="responseBodyType"
                           :options="{theme:''}"
                           :contents="responseInfo.responseText"></code-viewer>
            </div>
            <div v-if="responseBodyViewType=='Raw'">
              {{responseInfo.responseText}}
            </div>
            <div v-if="responseBodyViewType=='Preview'">
              <iframe :src="responseBlobUrl" width="100%" height="100%">
              </iframe>
            </div>
          </div>
        </div>
        <div class="tabContent" v-if="responseTabName=='Cookies'">
          <div v-for="co in responseCookies">
            {{co}}
          </div>
        </div>
        <div class="tabContent headers" v-if="responseTabName=='Headers'">
          <div v-for="(item,key) in responseInfo.headers">
            <span class="hkey">{{key}}</span>
            :
            <span class="hvalue">{{item}}</span>
          </div>
        </div>
      </div>
      <div class="errorWarp" v-else>
        {{responseInfo.message}}
      </div>
    </div>
    <!-- 请求结果 end-->

  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .tool
    width: 100%
    .path
      display flex
      .input
        -webkit-flex 1
        .el-my-select
          width 130px
      .send
        margin 0 0 0 30px
    .pathParams
      margin 10px 0
    .responseWarp
      .errorWarp
        margin-top: 20px;
        padding 20px
        border-radius 5px
        overflow scroll
        border 1px solid #ddd
      .tabContent
        padding 0 20px
      .nav
        margin 5px 0
        .tip
          float right
          line-height: 30px;
          > span
            color orange
            margin 0 3px
      .body
        > div
          height 400px
          border-radius 5px
          overflow scroll
          border 1px solid #ddd
      .headers
        span
          margin 5px 10px
        .hkey
          font-weight bold
    .requestWarp
      .tabContent
        padding 0 20px
      .nav
        margin 5px 0
      .bodyType
        margin 0 20px
        color orange
      .body
        .raw
          height 200px
          border-radius 5px
          overflow scroll
          border 1px solid #ddd
</style>
<script type="text/ecmascript-6">
  /*
   * 模拟接口请求内容组件，负者对接口访问，获取返回数据，进行数据比对，得出一定的建议给到用户。
   * */
  import BaseComponent from 'src/extend/BaseComponent'
  import ObjectEdit from './ObjectEdit.vue'
  import CodeViewer from 'src/components/CodeViewer.vue'
  import Server from 'src/extend/Server'
  import axios from 'axios'
  import qs from 'qs'
  import {mapState} from 'vuex'
  import jsYaml from 'js-yaml'

  var URL = window.url
  export default {
    mixins: [ BaseComponent ],
    name: 'RestfulTool_index',
    components: { ObjectEdit, CodeViewer },
    props: {
      info: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data: function () {
      return {
        requestBodyViewType: 'raw',
        requestTabName: 'Authorization',
        requestLoading: false,
        requestBodyType: 'text',
        requestBodyType_view: 'text',
        requestInfo: {
          url: '',
          header: {},

          body: '',
          formDataBody: {},
          urlencodedBody: {},
          binaryBody: undefined,

          path: {},
          query: {}
        },
        responseInfo: {
          error: false,
          message: '',
          status: '',
          responseText: '',
          responseType: '',
          headers: {}
        },
        responseBlobUrl: '',
        responseBodyViewType: 'Pretty',
        responseTabName: 'Body',
        responseBodyType: 'json',
        pathParamsVisable: false,
        responseCookies: [],
        method: 'post',
        url: 'http://dwz.ymm56.com/dwz-web/dwz/generate',  // 初始化项目的基础url
        showBody: true // 是否显示body区域
      }
    },
    computed: mapState({
      Metadata: state => state.Metadata
    }),
    watch: {
      info: function (newVal) {
        this.dealRequestMock()
      },
      url: function (newVal, oldVal) {
        // url 变化 设置 提取query
        var url = URL.parse(newVal)
        if (typeof url.get == 'object') {
          this.requestInfo.query = url.get
        }
        console.log(url)
      },
      method: function (newVal) {
        this.showBody = ![ 'get', 'copy', 'head', 'purge', 'unlock' ].includes(newVal)
        if (!this.showBody && this.requestTabName == 'Body') {
          this.requestTabName = 'Authorization'
        }
      }
    },
    mounted () {
      this.instance = axios.create({
        baseURL: '',
        timeout: 1000,
        headers: {}
      })
      this.dealRequestMock()
    },
    methods: {

      requestBodyInfoChange: function (data) {
        this.requestInfo.body = data
      },
      requestBodyViewTypeSelect: function (command) {
        this.requestBodyType = command
        var header = command.match(/\(.*\)/gi)
        if (header) {
          header = header[ 0 ]
          this.requestBodyType_view = command.replace(header, '').toLocaleLowerCase()
          this.requestInfo.header[ 'Content-Type' ] = header.replace(/[(]|[)]/gi, '')
        } else {
          this.requestBodyType_view = command.toLocaleLowerCase()
          delete this.requestInfo.header[ 'Content-Type' ]
        }
      },
      dealRequestMock: function () {
        var apiInfo = {}
        try {
          apiInfo = jsYaml.safeLoad(this.info.mockRequest || '')
        } catch (e) {
          apiInfo = {}
        } finally {
        }
        apiInfo = apiInfo || {}
        apiInfo.header = apiInfo.header || {}
        apiInfo.body = apiInfo.body || ''
        apiInfo.path = apiInfo.path || {}
        apiInfo.query = apiInfo.query || {}
        apiInfo.url = apiInfo.url || (this.url + (this.info.path || ''))
        this.requestInfo = apiInfo
      },
      requestHeaderChange: function (data) {
        this.requestInfo.header = data
      },
      requestQueryChange: function (data) {
        this.requestInfo.query = data
        var url = URL.parse(this.requestInfo.url)
        this.requestInfo.url = URL.build(url)
      },
      requestTabClick: function () {
      },

      responseBodyViewTypeSelect: function (command) {
        this.responseBodyType = command
      },
      sendTypeSelect: function (command) {
        if (command == 'saveandsend') {
          this.send()
          this.save()
        }
      },
      dealResponse: function (data) {
        this.responseInfo.headers = data.headers
        this.responseInfo.status = data.status
        this.responseInfo.statusText = data.statusText
        this.responseInfo.responseText = data.request.responseText
        this.responseInfo.responseType = data.request.responseType
        // deal data to url by blob
        var blob = new window.Blob([ data.request.responseText ], { type: 'text/html' })
        var url = window.URL.createObjectURL(blob)
        this.responseBlobUrl = url

        // deal cookies
        var me = this
        me.responseCookies = []
        var setcookie = data.headers[ 'set-cookie' ]
        if (setcookie) {
          setcookie.forEach(
            function (cookiestr) {
              me.responseCookies.push(cookiestr)
            }
          )
        }
      },
      responseTabClick: function () {
      },
      binaryChange: function (e) {
        var me = this
        var file = e.target.files[ 0 ]
        var reader = new window.FileReader()
        // 将文件以二进制形式读取
        reader.readAsArrayBuffer(file)
        reader.onload = function (f) {
          me.binaryBody = this.result
        }
      },
      // 处理不同body 类型的参数
      dealParams: function () {
        var data = {}
        if (this.showBody) {
          if (this.requestBodyViewType == 'formdata') {
            var fd = new window.FormData()
            for (var key in this.requestInfo.query) {
              fd.append(key, this.requestInfo.query[ key ])
            }
            data = fd
          } else if (this.requestBodyViewType == 'xwwwformurlencoded') {
            data = qs.stringify(this.requestInfo.query)
          } else if (this.requestBodyViewType == 'binary') {
            data = this.binaryBody
          } else {
            data = this.requestInfo.query
          }
        }
        return data
      },
      /* 发送消息内容 */
      /**
       * 保存mock数据
       */
      save: function () {
        Server({
          url: 'mock/saveOrUpdateRequest',
          data: {
            apiId: this.info.id,
            type: this.info.type,
            mockRequest: jsYaml.dump(this.requestInfo)
          },
          method: 'post'
        }).then((response) => {
          this.$message('保存成功')
        })
      },
      /**
       * 发送请求测试
       */
      send: function () {
        this.requestLoading = true
        this.responseInfo.error = false

        var data = this.dealParams()

        this.instance({
          baseURL: this.requestInfo.url,
          url: '',
          data: data,
          method: this.method,
          params: {},
          headers: this.requestInfo.header
        }).then((response, a, b) => {
          console.log(response)
          this.dealResponse(response)
          this.requestLoading = false
        }).catch((response, a, b) => {
          if (response.code) {
            this.responseInfo.message = response.message
            this.responseInfo.error = true
          }
          if (response.response) {
            this.dealResponse(response.response)
          } else {
            this.responseInfo.message = response.message
            this.responseInfo.error = true
          }
          console.log(response.response)
          this.requestLoading = false
        })
      }
    }
  }
</script>

