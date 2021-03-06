import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "Todo" */ '@/views/Todo')
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "About" */ '@/views/About')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
