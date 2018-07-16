<template>
    <div class="aside" v-bind:class="{isCollapse:isCollapse}">
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @close="handleClose" :collapse="isCollapse" :unique-opened="true" :router="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="index" :route="{path: '/'}">
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-menu-item index="returns" :route="{path: '/returns'}">
        <i class="el-icon-menu"></i>
        <span slot="title">退款</span>
      </el-menu-item>
      <el-menu-item index="setting" :route="{path: '/setting'}">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
    </div>
  
</template>

<script>
// import * as api from '../api'
import { appConfig } from '../common/appConfig'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      defaultActive: 'index',
      isCollapse: false
    }
  },
  computed: {
    // 从全局导入Getter
    ...mapGetters(['userData'])
  },
  watch: {
    $route: 'getMenuActive'
  },
  mounted() {
    this.getMenuActive()
  },
  methods: {
    getMenuActive() {
      let activeName = this.$route.path.substr(1)
      if (activeName === '') {
        activeName = 'index'
      }
      var activeArray = ['index/']
      activeArray.forEach(a => {
        if (activeName.indexOf(a) === 0) {
          activeName = a.replace('/', '')
        }
      })
      this.defaultActive = activeName
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
</style>
