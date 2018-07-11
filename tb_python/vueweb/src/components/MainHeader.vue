<template>
  <div class="header clearfix"> 
    <div class="logo-img"></div>
    <div class="logo">米尊</div>
    <el-dropdown class="user-info">
      <span class="el-dropdown-link">
        用户<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click="logout()">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
// import * as api from '../api'
// import * as types from '../store/mutation-types'
import { appConfig } from '../common/appConfig'
// import util from '../common/util'
import { mapGetters } from 'vuex'
export default {
  name: 'MZIndex',
  data() {
    return {
      isLogin: true,
      isTopBarFixed: false,
      current: 'index',
      currentChild: '',
      appConfigUrl: appConfig,
      org: {
        userName: '',
        userImg: '',
        activeIndex: ''
      },
      currentMap: ['index']
    }
  },
  computed: {
    // 从全局导入Getter
    ...mapGetters(['userData'])
  },
  watch: {
    $route: 'show'
  },
  mounted() {
    this.loginInfo()
    this.addScrollEvent()
    this.show()
  },
  methods: {
    addScrollEvent() {
      $(window).scroll(this.handleScroll)
    },
    // 滚轮事件
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if ($('.topBar').length > 0) {
        if (scrollTop > 10) {
          this.isTopBarFixed = true
        } else {
          this.isTopBarFixed = false
        }
      }
    },
    show() {
      let fullPath = this.$route.fullPath
      let current = 'index'
      this.currentMap.forEach(element => {
        if (fullPath.indexOf(element) > 0) {
          current = element
        }
      })
      this.current = current
    },
    loginInfo() {
      if(this.userData.userId === ''){
        this.$router.push({path: '/login'})
      }
    },
    logout() {}
  }
}
</script>
<style>

</style>
