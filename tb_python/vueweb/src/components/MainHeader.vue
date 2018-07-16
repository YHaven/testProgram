<template>
    <el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>
			<el-col :span="10">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="userData.avatar" /> {{userData.name}}</span>
					<el-dropdown-menu slot="dropdown">
						<!-- <el-dropdown-item>我的消息</el-dropdown-item> -->
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
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
      sysName:'米尊',
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
    this.show()
  },
  methods: {
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
      // console.log(this.userData)
      if (!this.userData.id) {
        this.$router.push({ path: '/login' })
      }
    },
    logout() {
      var _this = this
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      })
        .then(() => {
          // sessionStorage.removeItem('user')
          localStorage.clear()
          _this.$router.push('/login')
        })
        .catch(() => {})
    }
  }
}
</script>
<style>

</style>
