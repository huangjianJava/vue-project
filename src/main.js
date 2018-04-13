// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
//import Layout from './components/Layout'
import App from './App'
//import indexPage from './pages/index'   之前测试引入的 index 界面
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import loginPage from './pages/login/Login'
import homePage from './pages/login/Home'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

let router = new VueRouter({    //前端路由设置,路由可以带参数，可以嵌套,可以命名，重定向
  mode: 'history',
  routes: [
    {path: '/login',component: loginPage},
    {path: '/home',component: homePage}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
