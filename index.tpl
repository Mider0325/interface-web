<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body class='ui_blue'>
    <div id="app" ></div>
    <script src="//cdn.bootcss.com/babel-polyfill/6.20.0/polyfill.min.js"></script>
    <script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
    <script src="//cdn.bootcss.com/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js"></script>
    <script src="//cdn.staticfile.org/plupload/2.1.9/moxie.min.js"></script>
    <script src="//cdn.staticfile.org/plupload/2.1.9/plupload.full.min.js"></script>
    <script src="//cdn.staticfile.org/qiniu-js-sdk/1.0.14-beta/qiniu.min.js"></script>
    <script src="//cdn.bootcss.com/ace/1.2.6/ace.js"></script>
    <script src="//cdn.bootcss.com/ace/1.2.6/ext-language_tools.js"></script>
    <% if (process.env.NODE_ENV === 'production') { %>
        <script src="//cdn.bootcss.com/vue/2.1.8/vue.runtime.min.js"></script>
        <script src="//cdn.bootcss.com/vue-router/2.0.1/vue-router.min.js"></script>
        <script src="//cdn.bootcss.com/vuex/2.1.1/vuex.min.js"></script>
    <% } %>
  </body>
</html>
