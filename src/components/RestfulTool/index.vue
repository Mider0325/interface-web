<template>
  <div class="tool">
    <!--请求路径信息-->
    <div class="path">
      <div class="input" :gutter="20">
        <el-select class="el-my-select" v-model="requestInfo.method">
          <el-option :key="key" v-for="(item, key) in Metadata.methods" :label="item.label"
                     :value="item.value"></el-option>
        </el-select>
        <el-autocomplete
            class="noborder inline-input evn"
            @focus="pathParamsVisable=false"
            v-model="requestInfo.domain"
            :fetch-suggestions="queryEvnPath"
            placeholder="环境"
        >
        </el-autocomplete>
        <!--  <div class="inline-input division">/</div>
        -->
        <el-input class="noborder inline-input path" placeholder="路径" v-model="requestInfo.path"></el-input>
        <el-button class="params" type="primary" @click="pathParamsVisable = !pathParamsVisable">参数</el-button>
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
      <object-edit :info="requestInfo.request.query" :on-change="requestQueryChange"></object-edit>
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
              <el-dropdown-item command="JSON(application/json)">JSON(application/json)</el-dropdown-item>
              <el-dropdown-item command="Text">Text</el-dropdown-item>
              <el-dropdown-item command="Text(text/plain)">Text(text/plain)</el-dropdown-item>
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
                         :contents="requestBodyCopy"></code-viewer>
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
            <el-radio-group class="elradios" size="small" v-model="responseBodyViewType">
              <el-radio-button label="Pretty">Pretty</el-radio-button>
              <el-radio-button label="Raw">Raw</el-radio-button>
              <el-radio-button label="Preview">Preview</el-radio-button>
            </el-radio-group>
            <el-dropdown class="responeType" size="small" v-if="responseBodyViewType=='Pretty'" split-button
                         type="primary"
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
          <div :key="key" v-for="(item, kye) in responseCookies">
            {{item}}
          </div>
        </div>
        <div class="tabContent headers" v-if="responseTabName=='Headers'">
          <div :key="key" v-for="(item,key) in responseInfo.headers">
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
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 100%
    .path
      display flex
      .input
        -webkit-flex 1
        display: flex;
        .inline-input
          display block
          width auto
        .evn
          -webkit-flex 1
          border-bottom 1px solid #ddd
          min-width 100px
        .division
          padding: 8px 0px;
          font-size: 15px;
          line-height: 20px;
        .path
          margin-right 10px
          -webkit-flex 1
          border-bottom 1px solid #ddd
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
      .elradios
        vertical-align top
      .responeType
        position relative
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
  import {jsonToMock} from 'src/extend/Util'

  export default {
    mixins: [ BaseComponent ],
    name: 'RestfulTool_index',
    components: { ObjectEdit, CodeViewer },
    props: {
      info: {
        type: Object,
        default: function () {
          return {
            path: '',
            name: '',
            method: '',
            description: '',
            request: {
              path: [],
              query: [],
              body: []
            },
            resopnse: {}
          }
        }
      }
    },
    data: function () {
      return {
        projectInfo: {},
        requestBodyViewType: 'raw',
        requestTabName: 'Authorization',
        requestLoading: false,
        requestBodyType: 'JSON(application/json)',
        requestBodyType_view: 'json',
        requestBodyCopy: '',
        requestInfo: {
          path: '',
          formDataBody: {},
          urlencodedBody: {},
          binaryBody: undefined,
          domain: 'good',
          method: 'post',
          header: {},
          request: {
            body: '',
            path: {},
            query: {},
            header: {}
          }
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
      'requestInfo.method': function (newVal) {
        this.showBody = ![ 'get', 'copy', 'head', 'purge', 'unlock' ].includes(newVal)
        if (!this.showBody && this.requestTabName == 'Body') {
          this.requestTabName = 'Authorization'
        }
      }
    },
    mounted () {
      this.instance = axios.create({
        baseURL: '',
        timeout: 40000,
        headers: {}
      })
      this.dealRequestMock()
      // 初始化默认body类型
      this.requestBodyViewTypeSelect('JSON(application/json)')
      window.document.addEventListener('result1.success', (response) => {
        this.sendSuccess(response.detail)
      })
      window.document.addEventListener('result1.error', (response) => {
        this.sendError(response.detail)
      })
    },
    methods: {
      queryEvnPath: function (queryString, cb) {
        console.log(this.projectInfo.environment)
        var restaurants = []
        var list = []
        if (this.projectInfo.environment) {
          list = this.projectInfo.environment.split('\n')
          list.forEach((value) => {
            restaurants.push({
              value: value.split(' ')[ 1 ],
              desc: value.split(' ')[ 0 ]
            })
          })
        }
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      createFilter (queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      requestBodyInfoChange: function (data) {
        this.requestBodyCopy = data
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
        // 使用mockRequest里面保存的数据
        var apiInfo = {}
        try {
          apiInfo = JSON.parse(this.info.mockRequest)
        } catch (e) {
          apiInfo = Object.assign({}, this.info)
          apiInfo.request = {}
        } finally {
        }
        apiInfo = apiInfo || {}
        apiInfo.request = apiInfo.request || {}
        apiInfo.request.body = apiInfo.request.body || jsonToMock(this.info.request.body)
        try {
          this.requestBodyCopy = JSON.stringify(apiInfo.request.body)
        } catch (e) {
          this.requestBodyCopy == ''
        }
        apiInfo.request.path = apiInfo.request.path || jsonToMock(this.info.request.path)
        apiInfo.request.query = apiInfo.request.query || jsonToMock(this.info.request.query)
        apiInfo.path = apiInfo.path || this.info.path
        apiInfo.header = apiInfo.header || {}
        apiInfo.domain = apiInfo.domain || ''
        if (this.info.projectId) {
          this.loadProject(this.info.projectId)
        }
        this.requestInfo = Object.assign(this.requestInfo, apiInfo)
      },
      /**
       * 加载项目信息
       */
      loadProject: function (id) {
        Server({
          url: 'project/projectinfo',
          method: 'get',
          params: { id: id }
        }).then((response) => {
          this.projectInfo = response.data.data
        })
      },
      requestHeaderChange: function (data) {
        this.requestInfo.header = data
      },
      requestQueryChange: function (data) {
        this.requestInfo.request.query = data
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
        this.responseInfo.responseType = data.request.responseType
        this.responseInfo.responseText = data.request.responseText
        if (this.responseBodyType == 'json') {
          try {
            this.responseInfo.responseText = JSON.stringify(JSON.parse(data.request.responseText), null, 4)
          } catch (e) {
          }
        }
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
            for (var key in this.requestInfo.request.query) {
              fd.append(key, this.requestInfo.request.query[ key ])
            }
            data = fd
          } else if (this.requestBodyViewType == 'xwwwformurlencoded') {
            data = qs.stringify(this.requestInfo.request.query)
          } else if (this.requestBodyViewType == 'binary') {
            data = this.binaryBody
          } else if (this.requestBodyViewType == 'raw') {
            data = this.requestBodyCopy
          } else {
            data = this.requestInfo.request.query
          }
        }
        return data
      },
      /* 发送消息内容 */
      /**
       * 保存mock数据
       */
      save: function () {
        if (this.requestBodyType.toUpperCase() == 'JSON(APPLICATION/JSON)') {
          this.requestInfo.request.body = JSON.parse(this.requestBodyCopy)
        } else {
          this.requestInfo.request.body = this.requestBodyCopy
        }
        Server({
          url: 'mock/addMock',
          data: {
            apiId: this.info.id - 0,
            type: this.info.type - 0,
            mockRequest: JSON.stringify(this.requestInfo)
          },
          method: 'post'
        }).then((response) => {
          this.$message('保存成功')
        })
      },
      getSendUrl: function () {
        var url = this.requestInfo.domain + this.requestInfo.path
        /*
         var queryString = []
         if (Object.keys(query).lenght > 0) {
         for (var key in query) {
         queryString.push(key + '=' + query[ key ])
         }
         queryString = queryString.join('&')
         } else {
         queryString = ''
         }
         */
        return url
      },
      sendSuccess: function (response) {
        console.log(response)
        this.dealResponse(response)
        this.requestLoading = false
      },
      sendError: function (response) {
        console.log(response)
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
      },
      /**
       * 发送请求测试
       */
      send: function () {
        this.requestLoading = true
        this.responseInfo.error = false
        var data = this.dealParams()

        var info = {
          baseURL: this.getSendUrl(),
          url: '',
          data: data,
          method: this.requestInfo.method,
          params: this.requestInfo.request.query,
          headers: this.requestInfo.header
        }
        if (document.body.getAttribute('data-interface-version') > '0') {
          window.document.dispatchEvent(new window.CustomEvent('request', { detail: info }))
        } else {
          this.instance(info).then((response) => {
            this.sendSuccess((response))
          }).catch((response) => {
            this.sendError(response)
          })
        }
      }
    }
  }
</script>

