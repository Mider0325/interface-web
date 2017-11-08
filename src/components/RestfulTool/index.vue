<template>
  <div class="tool">
    <!--请求路径信息-->
    <div class="path">
      <div class="input" :gutter="20">
        <el-select class="el-my-select" v-model="requestInfo.method">
          <el-option :key="key" v-for="(item, key) in Metadata.methods" :label="item.label"
                     :value="item.value"></el-option>
        </el-select>
        <el-autocomplete class="noborder inline-input evn" @focus="pathParamsVisable=false" v-model="requestInfo.domain"
                         :fetch-suggestions="queryEvnPath" placeholder="环境">
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
          <el-dropdown-item command="batchSend">并发访问</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!--请求路径信息-->

    <!--请求路径参数信息-->
    <div class="pathParams" v-if="pathParamsVisable">
      <object-edit key="query" :info="requestInfo.request.query" :on-change="requestQueryChange"></object-edit>
    </div>
    <!--请求路径参数信息-->

    <!-- 请求参数 -->
    <div class="requestWarp">
      <!-- tab切换标头-->
      <el-tabs v-model="requestTabName" @tab-click="requestTabClick" :active-name="requestTabName">
        <el-tab-pane label="Authorization" name="Authorization"></el-tab-pane>
        <el-tab-pane label="Header" name="Header"></el-tab-pane>
        <el-tab-pane label="Body" name="Body" :disabled="!showBody"></el-tab-pane>
        <el-tab-pane label="Path" name="Path" :disabled="!showPath"></el-tab-pane>
      </el-tabs>
      <!-- tab切换标头-->
      <!--tab内容-->
      <div class="tabContent" v-if="requestTabName=='Authorization'">
        <el-form :inline="true">
          <el-form-item label="认证方式">
            <el-select v-model="authorization.type" placeholder="请选择认证方式">
              <el-option
                  v-for="item in authorization.methods"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="环境">
            <el-select v-model="authorization.env" placeholder="请选择环境">
              <el-option
                  v-for="item in authorization.envs"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <!--sso认证-->
        <el-form :inline="true" v-if="authorization.type=='sso'" ref="ssoFormData" :model="authorization.ssoForm">
          <el-form-item label="工号：" prop="userName">
            <el-input placeholder="请输入工号" v-model.trim="authorization.ssoForm.userName">
            </el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input placeholder="请输入密码" v-model="authorization.ssoForm.password" type="password">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="authorization_ssoLogin()">登 录</el-button>
          </el-form-item>
        </el-form>
        <!--司机货主认证-->
        <el-form v-if="authorization.type=='drivershipper'" :inline="true" ref="dsFormData"
                 :model="authorization.dsForm">
          <el-form-item label="手机号：" prop="userName">
            <el-input placeholder="请输入手机" v-model.trim="authorization.dsForm.telephone">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="authorization_dsLogin()">登 录</el-button>
          </el-form-item>
        </el-form>

      </div>
      <div class="tabContent" v-if="requestTabName=='Header'">
        <object-edit key="header" :info="requestInfo.header" :on-change="requestHeaderChange"></object-edit>
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
              {{requestBodyType.toUpperCase()}}
              <i class="el-icon-caret-bottom el-icon--right"></i>
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
            <code-viewer key="raw" :ctype="requestBodyType_view" :options="{theme:''}"
                         :on-change="requestBodyInfoChange" :contents="requestBodyCopy"></code-viewer>
          </div>
          <div v-if="requestBodyViewType=='formdata'">
            <object-edit key="formdata" :info="requestInfo.formDataBody" :param-type='true'
                         :on-change="requestFormDataBodyChange"></object-edit>
          </div>
          <div v-if="requestBodyViewType=='xwwwformurlencoded'">
            <object-edit key="xwwwformurlencoded" :info="requestInfo.urlencodedBody"
                         :on-change="requestUrlEncodedBodyChange"></object-edit>
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

      <div class="tabContent" v-if="requestTabName=='Path'">
        <object-edit key="requestPath" :info="requestInfo.request.path" :on-change="requestPathChange"></object-edit>
      </div>
      <!--tab内容-->
    </div>
    <!-- 请求参数 end-->

    <!-- 请求结果 -->
    <div class="responseWarp" element-loading-text="拼命加载中" v-loading="requestLoading">
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
                         type="primary" @command="responseBodyViewTypeSelect">
              {{responseBodyType.toUpperCase()}}
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="json">JSON</el-dropdown-item>
                <el-dropdown-item command="html">HTML</el-dropdown-item>
                <el-dropdown-item command="text">TEXT</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div v-if="responseInfo.status" class="tip">
              状态码:
              <span>{{responseInfo.status}}</span>
            </div>
          </div>
          <div class="body">
            <div v-if="responseBodyViewType=='Pretty'" class="prettyWarp">
              <div v-if="responseInfo.verify" class="verify">
                <el-alert v-for="(item, key) in responseInfo.verify"
                          :key="key"
                          :title="item.desc"
                          :type="item.level==1?'error':'warning'"
                          show-icon>
                </el-alert>
              </div>
              <code-viewer key="pretty" :ctype="responseBodyType" :options="{theme:''}"
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
          <div :key="key" v-for="(item, key) in responseCookies">
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
        {{completionurl}} {{responseInfo.message}}
      </div>
      <div class="completionurl" v-if="completionurl">访问地址:{{completionurl}}</div>
    </div>
    <!-- 请求结果 end-->

  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .tool {
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 100%;

    .path {
      display: flex;

      .input {
        -webkit-flex: 1;
        display: flex;

        .inline-input {
          display: block;
          width: auto;
        }

        .evn {
          -webkit-flex: 1;
          border-bottom: 1px solid #ddd;
          min-width: 100px;
        }

        .division {
          padding: 8px 0px;
          font-size: 15px;
          line-height: 20px;
        }

        .path {
          margin-right: 10px;
          -webkit-flex: 1;
          border-bottom: 1px solid #ddd;
        }

        .el-my-select {
          width: 130px;
        }
      }

      .send {
        margin: 0 0 0 30px;
      }
    }

    .pathParams {
      margin: 10px 0;
    }

    .responseWarp {
      .completionurl {
        color: orange;
      }

      .errorWarp {
        margin-top: 20px;
        padding: 20px;
        border-radius: 5px;
        overflow: scroll;
        border: 1px solid #ddd;
      }

      .tabContent {
        padding: 0 20px;
      }

      .verify {
        padding: 10px 20px;
        max-height 100px
        overflow auto
      }

      .elradios {
        vertical-align: top;
      }

      .responeType {
        position: relative;
      }

      .nav {
        margin: 5px 0;

        .tip {
          float: right;
          line-height: 30px;

          > span {
            color: orange;
            margin: 0 3px;
          }
        }
      }

      .body {
        > div {
          height: 400px;
          border-radius: 5px;
          overflow: scroll;
          border: 1px solid #ddd;
        }
      }

      .headers {
        span {
          margin: 5px 10px;
        }

        .hkey {
          font-weight: bold;
        }
      }
    }

    .requestWarp {
      .tabContent {
        padding: 0 20px;
      }

      .nav {
        margin: 5px 0;
      }

      .bodyType {
        margin: 0 20px;
        color: orange;
      }

      .body {
        .raw {
          height: 200px;
          border-radius: 5px;
          overflow: scroll;
          border: 1px solid #ddd;
        }
      }
    }
  }
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
  import MD5 from 'crypto-js/md5'
  import Base64 from 'js-base64'
  import qs from 'qs'
  import { mapState } from 'vuex'
  import { jsonToMock } from 'src/extend/Util'

  export default {
    mixins: [BaseComponent],
    name: 'RestfulTool_index',
    components: {ObjectEdit, CodeViewer},
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
          headers: {},
          verify: null
        },
        responseBlobUrl: '',
        responseBodyViewType: 'Pretty',
        responseTabName: 'Body',
        responseBodyType: 'json',
        pathParamsVisable: false,
        responseCookies: [],
        completionurl: '',
        authorization: {
          methods: [
            {value: '', label: '不登录'},
            {value: 'sso', label: 'sso登录的认证'},
            {value: 'drivershipper', label: '司机货主端认证'}
          ],
          type: null,
          envs: [
            {value: 'dev', label: 'dev环境'},
            {value: 'qa', label: 'beta环境'},
            {value: '', label: '线上'}
          ],
          env: 'dev',
          ssoForm: {
            userName: '',
            telephone: '',
            captcha: '',
            password: ''
          },
          dsForm: {
            telephone: ''
          }
        },
        isChrome: true,
        showPath: false, // 显示path编辑区
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
        this.showBody = !['get', 'copy', 'head', 'purge', 'unlock'].includes(newVal)
        if (!this.showBody && this.requestTabName == 'Body') {
          this.requestTabName = 'Authorization'
        }
      }
    },
    mounted () {
      this.isChrome = window.navigator.userAgent.indexOf('Chrome') !== -1
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
              value: value.split(' ')[1],
              desc: value.split(' ')[0]
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
          header = header[0]
          this.requestBodyType_view = command.replace(header, '').toLocaleLowerCase()
          this.requestInfo.header['Content-Type'] = header.replace(/[(]|[)]/gi, '')
        } else {
          this.requestBodyType_view = command.toLocaleLowerCase()
          delete this.requestInfo.header['Content-Type']
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
          this.requestBodyCopy = JSON.stringify(apiInfo.request.body, null, 4)
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
        if ((/\/:\w+/gi).test(apiInfo.path)) {
          var arr = apiInfo.path.match(/(:\w+)/gi)
          arr.forEach((value) => {
            var key = value.replace(':', '')
            if (!apiInfo.request.path[key]) {
              apiInfo.request.path[key] = ''
            }
          })
          this.showPath = true
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
          params: {id: id}
        }).then((response) => {
          this.projectInfo = response.data.data
        })
      },
      requestHeaderChange: function (data) {
        this.requestInfo.header = data
      },
      requestPathChange: function (data) {
        this.requestInfo.request.path = data
      },
      requestQueryChange: function (data) {
        this.requestInfo.request.query = data
      },
      requestFormDataBodyChange: function (data) {
        this.requestInfo.formDataBody = data
      },
      requestUrlEncodedBodyChange: function (data) {
        this.requestInfo.urlencodedBody = data
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
        } else if (command == 'batchSend') {
          this.batchSend()
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
            this.verifyResponse(JSON.parse(data.request.responseText))
          } catch (e) {
          }
        }
        // deal data to url by blob
        var blob = new window.Blob([data.request.responseText], {type: 'text/html'})
        var url = window.URL.createObjectURL(blob)
        this.responseBlobUrl = url

        // deal cookies
        var me = this
        me.responseCookies = []
        var setcookie = data.headers['set-cookie']
        if (setcookie) {
          setcookie.forEach(
            function (cookiestr) {
              me.responseCookies.push(cookiestr)
            }
          )
        }
      },
      /**
       * 验证返回结果是否存在问题并显示错误信息
       */
      verifyResponse: function (data) {
        var aim = this.info.response
        // error level  1:错误  2: 警告
        // error type 1:缺少字段 2: 存在多余字段
        var error = []

        function walk (aim, data, path) {
          var tempData = Object.assign({}, data)
          for (var i = 0; i < aim.length; i++) {
            var aimCurr = aim[i]
            var curr = data[aimCurr.name]
            if (typeof data[aimCurr.name] != 'undefined') {
              delete tempData[aimCurr.name]
              if (/^array/ig.test(aimCurr.type)) {
                walk(aimCurr.child, curr[0], path + '.' + aimCurr.name)
              } else if (/^object/ig.test(aimCurr.type)) {
                walk(aimCurr.child, curr, path + '.' + aimCurr.name)
              } else {
                // todo 基础类型判断是否能对应
              }
            } else {
              // 如果不存在文档中定义的数据key，输出一级错误警告
              error.push({
                info: aimCurr,
                level: 1,
                type: 1,
                desc: `返回数据 ${path}路径下缺少${aimCurr.name} 字段`
              })
            }
          }
          // 判断是否存在多余字段
          for (let key in tempData) {
            error.push({
              info: aimCurr,
              level: 2,
              type: 2,
              desc: `返回数据 ${path}路径下存在多余 ${key} 字段`
            })
          }
        }

        walk(aim, data, 'object')
        if (error.length > 0) {
          this.responseInfo.verify = error
        } else {
          this.responseInfo.verify = null
        }
        console.log(JSON.stringify(error, null, 4))
      },
      responseTabClick: function () {
      },
      binaryChange: function (e) {
        var me = this
        var file = e.target.files[0]
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
            for (var key in this.requestInfo.formDataBody) {
              fd.append(key, this.requestInfo.formDataBody[key])
            }
            data = fd
          } else if (this.requestBodyViewType == 'xwwwformurlencoded') {
            data = qs.stringify(this.requestInfo.urlencodedBody)
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
        var domain = this.requestInfo.domain
        var path = this.requestInfo.path
        var pathObj = this.requestInfo.request.path
        for (let key in pathObj) {
          path = path.replace(':' + key, pathObj[key])
        }
        if (!domain) {
          this.$message('请设置环境信息')
        }
        var url = domain + path
        this.completionurl = url
        return url
      },
      sendSuccess: function (response) {
        console.log(response)
        this.dealResponse(response)
        this.requestLoading = false
      },
      sendError: function (response) {
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
      batchSend: function () {
        this.$prompt('输入并发次数', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[1-9][0-9]*/,
          inputErrorMessage: '输入数字'
        }).then(({value}) => {
          for (var i = 0; i < value - 0; i++) {
            this.send()
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },
      /**
       * 发送请求测试
       */
      send: function () {
        if (!this.isChrome) {
          this.$alert('接口访问模块需要你使用 chrome浏览器，开启跨域支持 教程地址: http://bbs.ymmoa.com/mblog/view/25')
          return
        }
        this.requestLoading = true
        this.responseInfo.error = false
        var data = this.dealParams()
        var params = this.requestInfo.request.query
        if (this.requestInfo.method.toUpperCase() == 'GET' && this.requestBodyViewType == 'xwwwformurlencoded') {
          params = this.requestInfo.urlencodedBody
        }
        var info = {
          baseURL: '',
          url: this.getSendUrl(),
          data: data,
          method: this.requestInfo.method,
          params: params,
          headers: this.requestInfo.header
        }
        if (document.body.getAttribute('data-interface-version') > '0') {
          window.document.dispatchEvent(new window.CustomEvent('request', {detail: info}))
        } else {
          this.instance(info).then((response) => {
            this.sendSuccess((response))
          }).catch((response) => {
            this.sendError(response)
          })
        }
      },
      /* 认证相关内容 */
      passportEncode: function (passport, uid) {
        if (passport) {
          var body = `u_${uid}:${passport}`
          return 'Basic ' + Base64.Base64.encode(body)
        }
        return ''
      },
      authorization_driverShiperLogin: function () {

      },
      authorization_ssoLogin: function () {
        const me = this
        this.$refs['ssoFormData'].validate((valid) => {
          var dev = this.authorization.env
          if (dev) {
            dev += '-'
          }
          if (valid) {
            var data = me.authorization.ssoForm
            while (data.userName.toString().length < 6) {
              data.userName = '0' + data.userName
            }
            var url = `http://${dev}sso.ymmoa.com/sso/login`
            axios.post(url, {
              username: data.userName + '',
              password: MD5(data.password) + '',
              captcha: data.captcha,
              telephone: data.telephone,
              channel: 'web',
              version: '1.1.0',
              refer: 'sso'
            }).then((response) => {
              var data = response.data
              if (data.error) {
                this.$alert(data.error.message || '登录失败')
              } else {
                this.requestInfo.header.authorization = me.passportEncode(data.result.passport, data.result.user.id)
                this.requestInfo.header.YSession = data.result.passport
                this.$message('登录成功')
              }
            }).catch((error) => {
              this.$alert(error.data.error.message || '登录失败')
            })
          }
        })
      },
      authorization_dsLogin: function () {
        const me = this
        this.$refs['dsFormData'].validate((valid) => {
          var dev = this.authorization.env
          if (!dev) {
            this.$message('司机货主不支持线上登录')
            return
          }
          if (dev == 'qa') {
            dev = 'beta'
          }
          if (valid) {
            var data = me.authorization.dsForm
            var url = `http://qa.ymmoa.com//wrench/ymm/GenerateAuthApi`
            axios.post(url, {
              telephone: data.telephone,
              env: dev
            }).then((response) => {
              var data = response.data
              if (!data.auth) {
                this.$alert('登录失败')
              } else {
                this.requestInfo.header.authorization = data.auth
                this.$message('登录成功')
              }
            }).catch((error) => {
              this.$alert(error.data.error.message || '登录失败')
            })
          }
        })
      }
    }
  }
</script>

