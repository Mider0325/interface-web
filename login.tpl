<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="app" ></div>
    <% if (process.env.NODE_ENV === 'production') { %>
        <script src="//cdn.bootcss.com/vue/2.1.8/vue.runtime.min.js"></script>
        <script src="//cdn.bootcss.com/vue-router/2.0.1/vue-router.min.js"></script>
        <script src="//cdn.bootcss.com/vuex/2.1.1/vuex.min.js"></script>
    <% } %>
  </body>
</html>
