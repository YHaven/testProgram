<template>
  <div class="header"> 
    <!-- 导航栏目 -->
    <nav id="topbar"  class="navbar navbar-default topBar" role="navigation" v-bind:class="{topBarFix:isTopBarFixed}">
        <div class="main-bar">
          <a class="bar-logo">
              <img src="/static/img/homeStatic/logo-color.png" alt="米尊" title="米尊" v-if="isTopBarFixed">
              <img src="/static/img/homeStatic/logo-white.png" alt="米尊" title="米尊" v-else>
          </a>
          <div class="bar-login">
              
              <div class="loginAndRegistion" v-if="org.userName === ''">
                  <div class="head-spilt-line">|</div>
                  <!--注册会跳转到用户中心注册-->
                  <div class="registion">
                      <a :href="appConfigUrl.omUrl + '?e=all&a=reg'">
                        <img src="/static/img/registion-b.png" alt="注册" v-if="isTopBarFixed"/>
                        <img src="/static/img/registion.png" alt="注册" v-else/>&nbsp;注册
                      </a>
                  </div>
                  <!--登录会先到组织后台判断-->
                  <div class="login">
                      <a href="javascript:void(0)" @click="login">
                        <img src="/static/img/login-b.png" alt="登录" v-if="isTopBarFixed"/>
                        <img src="/static/img/login.png" alt="登录" v-else/>&nbsp;登录
                      </a>
                  </div>
              </div>
              <div class="user" v-if="org.userName !== ''">
                  <div class="head-spilt-line">|</div>
                  <div class="no-padding userInfo text-center">
                      <div class="user-name">
                        <div class="imgIn">
                          <img :src="org.userImg" v-if="userHasImg" :title="org.userName" onerror="this.src='/static/img/defaultHeadImg.png'">
                          <img src="../assets/img/defaultHeadImg.png" v-else :title="org.userName" alt="用户头像">
                        </div>
                        <span class="name" :title="org.userName">{{org.userName}}</span>
                        <i class="el-icon-arrow-up"></i>
                      </div>
                      <ul class="head-menu">
                      <li class="head-menu-item" @click="entryOrg('user')">用户中心</li>
                      <li class="head-menu-item" @click="logout">退&nbsp;&nbsp;&nbsp;&nbsp;出</li>
                      </ul>
                  </div>
              </div>
          </div>
          
          <ul class="nav navbar-nav right">
              <li class="indexBar" v-bind:class="{current:current === 'index'}"><router-link class="navbar-nav-item" to="/">首页</router-link></li>
          </ul>
        </div>
        
    </nav>
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
    userData(newVal) {
      let headImgUrl = newVal.headImg ? newVal.headImg : null
      if (!headImgUrl) {
        this.userHasImg = false
      } else {
        this.userHasImg = true
        this.org.userImg = headImgUrl
      }
    },
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
    loginInfo() {},
    handleCommand(command) {
      switch (command) {
        case 'logout':
          this.logout()
          break
      }
    },
    login() {},
    logout() {}
  }
}
</script>
<style>
</style>
