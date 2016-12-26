<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body class='ui_blue'>
    <div id="app" ></div>
    <% if (process.env.NODE_ENV === 'production') { %>
        <script src="http://static.ymm56.com/common-lib/vue/v2.1.3/vue.runtime.min.js"></script>
        <script src="http://static.ymm56.com/common-lib/vue-router/v2.0.1/vue-router.min.js"></script>
        <script src="http://static.ymm56.com/common-lib/vuex/v2.0.0/vuex.min.js"></script><% } %>
  </body>
</html>