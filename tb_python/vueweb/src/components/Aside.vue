<template>
    <div class="aside" v-bind:class="{isCollapse:isCollapse}">
    <el-menu :default-active="defaultActive" class="el-menu-vertical" @close="handleClose" :collapse="isCollapse" :unique-opened="true" :router="true" background-color="#424242"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index="flowCenter" :route="{path: '/flowCenter'}">
        <i class="icon el-icon-tm el-icon-tm-gongzuotai"></i>
        <span slot="title">我的事项</span>
      </el-menu-item>
      <el-menu-item index="scheduleBoard" :route="{path: '/scheduleBoard'}">
        <i class="icon el-icon-tm el-icon-tm-kanban02"></i>
        <span slot="title">档期看板</span>
      </el-menu-item>
      <!-- <el-submenu index="5">
        <template slot="title">
          <i class="icon el-icon-tm el-icon-tm-ziyuan"></i>
          <span slot="title">场厅预约</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="venueRent" :route="{path: '/venueRent'}">
            <i class="icon el-icon-tm el-icon-tm-zulinchengjiaoguanli"></i>
            <span slot="title">租赁场厅</span>
          </el-menu-item>
          <el-menu-item index="orderManage" :route="{path: '/orderManage'}">
            <i class="icon el-icon-tm el-icon-tm-fabu-copy"></i>
            <span slot="title">预约单管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
      <el-menu-item index="reservationPublish" :route="{path: '/reservationPublish'}">
        <i class="icon el-icon-tm el-icon-tm-fabu-copy"></i>
        <span slot="title">档期发布</span>
      </el-menu-item>
      <el-menu-item index="reservationManage" :route="{path: '/reservationManage'}">
        <i class="icon el-icon-tm el-icon-tm-qianyuedan"></i>
        <span slot="title">剧目受约单</span>
      </el-menu-item>
      <el-menu-item index="venueRent" :route="{path: '/venueRent'}">
        <i class="icon el-icon-tm el-icon-tm-zulinchengjiaoguanli"></i>
        <span slot="title">租赁场厅</span>
      </el-menu-item>
      <el-menu-item index="orderManage" :route="{path: '/orderManage'}">
        <i class="icon el-icon-tm el-icon-tm-zidiandingdan"></i>
        <span slot="title">场厅预约单</span>
      </el-menu-item>
      <el-menu-item index="troupe" :route="{path: '/troupe'}">
        <i class="icon el-icon-tm el-icon-tm-shezhi"></i>
        <span slot="title">我的剧团</span>
      </el-menu-item>
    </el-menu>
    </div>
  
</template>

<script>
// import * as api from '../api'
import { appConfig } from '../common/appConfig'
import { mapGetters } from 'vuex'
export default {
  props: {
    isCollapse: false
  },
  data() {
    return {
      defaultActive: 'troupe',
      appConfigUrl: appConfig,
      logo: 'this.src="/static/img/LOGO03.png"',
      asideWordShow: true,
      isAsideShow: true,
      // isCollapse: false,
      asideClass: 'asideShow noPadding',
      asideChangeButton: true,
      selectEntityClass: 'selectEntityGrow'
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
    this.entityGroups = []
    this.getMenuActive()
  },
  methods: {
    getMenuActive() {
      let activeName = this.$route.path.substr(1)
      if (activeName === '') {
        activeName = 'troupe'
      }
      var activeArray = ['troupe/']
      activeArray.forEach(a => {
        if (activeName.indexOf(a) === 0) {
          activeName = a.replace('/', '')
        }
      })
      this.defaultActive = activeName
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      //        console.log(key, keyPath)
    },
    changeAside() {
      if (this.isCollapse) {
        this.isCollapse = false
        this.asideChangeButton = true
        this.$parent.routerShow = 'router-wrapper noPadding'
      } else {
        this.isCollapse = true
        this.asideChangeButton = false
        this.$parent.routerShow = 'routerGrow noPadding'
      }
    },
    changeAsideBak() {
      if (this.isAsideShow) {
        this.asideChangeButton = false
        this.asideClass = 'asideHide noPadding'
        this.isAsideShow = false
        this.asideWordShow = false
        // 修改父级class显示,让router偏移
        this.$parent.routerShow = 'routerGrow noPadding'
        this.selectEntityClass = 'selectEntityCut'
      } else {
        this.asideChangeButton = true
        this.asideClass = 'asideShow noPadding'
        this.isAsideShow = true
        this.asideWordShow = true
        this.$parent.routerShow = 'router-wrapper noPadding'
        this.selectEntityClass = 'selectEntityGrow'
      }
    }
  }
}
</script>
<style>
.aside .entity {
  background: #5a5655;
}
.aside .el-menu-item.is-active {
  background-color: #ff5253 !important;
}
.aside .el-menu-item.is-active:hover span {
  color: #fff;
}
.aside .el-menu-item.is-active:hover i {
  color: #fff;
}
.aside .el-menu-item:hover span {
  color: #ff5253;
}
.aside .el-menu-item:hover i {
  color: #ff5253;
}
</style>
