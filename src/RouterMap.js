/**
 * Created with WebStorm.
 * User: stoneship
 * Email:258137678@qq.com
 * Date: 16/10/25
 * Time: 下午10:12
 * To change this template use File | Settings | File Templates.
 */
const PageRouter = require('./components/PageRouter.vue')
var map = {
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/:name/:name1/:name2/:name3/:name4/name5',
      component: PageRouter
    },
    {
      path: '/:name/:name1/:name2/:name3/:name4',
      component: PageRouter
    },
    {
      path: '/:name/:name1/:name2/:name3',
      component: PageRouter
    },
    {
      path: '/:name/:name1/:name2',
      component: PageRouter
    },
    {
      path: '/:name/:name1',
      component: PageRouter
    },
    {
      path: '/:name',
      component: PageRouter
    }
  ]
}
export default map
