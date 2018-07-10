// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/site.scss'
// import axios from 'axios'
import store from './store'
import VueCookie from 'vue-cookie'
import VueLazyLoad from 'vue-lazyload'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueCookie)
Vue.use(VueLazyLoad)
// Vue.use(axios)

// 全屏加载效果
// 如果来源页面不是本页面则显示加载效果。减少loading效果的闪动
let loadingInstance = null
if (!document.referrer || document.referrer.split('/')[2] !== location.host) {
  let loading = ElementUI.Loading
  loadingInstance = loading.service({
    lock: true,
    text: '加载中...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.8)'
  })
}
router.beforeEach((to, from, next) => {
  if (!to.meta.AllowAnonymous) {
    if (loadingInstance) {
      loadingInstance.close()
    }
  } else {
    if (loadingInstance) {
      loadingInstance.close()
    }
  }
  // if (to.path === '/login' && from.path !== '/register') {
  //   let returnUrl = to.query.returnUrl
  //   if (returnUrl) {
  //     let result = []
  //     let strArr = returnUrl.split('&')
  //     strArr.forEach(item => {
  //       let parts = item.split('=')
  //       result[parts[0]] = parts[1]
  //     })
  //     if (result.autoToRegister) {
  //       // 如果需要自动注册则直接定位到注册页
  //       router.push({path: '/register', query: to.query})
  //       // returnUrl = encodeURIComponent(returnUrl) // 注意需要使用encodeURIComponent编码‘=’等字符
  //       // window.location.href = location.origin + '/register?returnUrl=' + returnUrl
  //       return
  //     }
  //   }
  // }
  next()
})
// /* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
let UserHandle = ''
window.UserHandle = UserHandle
window.view = null
window.appid = app.toString()
