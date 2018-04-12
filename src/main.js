// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/Layout'
import indexPage from './pages/index'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({    //前端路由设置,路由可以带参数，可以嵌套,可以命名，重定向
  mode: 'history',
  routes: [
    {path: '/',component: indexPage}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { Layout },
  template: '<Layout/>'
})
