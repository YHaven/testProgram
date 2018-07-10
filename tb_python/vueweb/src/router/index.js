import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routePaths = []
let isAddWebRoutes = true
let webRoutes = [
  {
    path: '/',
    component (resolve) {
      require(['../components/Layout.vue'], resolve)
    },
    children: [
      { // 默认目录
        path: '',
        meta: {
          AllowAnonymous: true // 添加该字段，表示进入这个路由是不需要登录的
        },
        component (resolve) {
          require(['../components/index/index.vue'], resolve)
        }
      }
    ]
  },
  {
    path: '/error',
    meta: {
      AllowAnonymous: true // 添加该字段，表示进入这个路由是不需要登录的
    },
    component (resolve) {
      require(['../components/Error.vue'], resolve) // 认证授权错误信息页面
    }
  },
  {
    path: '/entry',
    component (resolve) {
      require(['../components/entry.vue'], resolve)
    }
  }
]
if (isAddWebRoutes) {
  webRoutes.forEach(path => {
    if (!path) {
      return
    }
    routePaths.push(path)
  })
}
routePaths.push({
  path: '*',
  meta: {
    AllowAnonymous: true // 添加该字段，表示进入这个路由是不需要登录的
  },
  component (resolve) {
    require(['../components/404.vue'], resolve)
  }
}) // 添加404错误页面

export default new Router({
  mode: 'history', // 不显示Url中的#/
  scrollBehavior (to, from, savedPosition) { // 打开滚动到顶部
    return { x: 0, y: 0 }
  },
  routes: routePaths
})
