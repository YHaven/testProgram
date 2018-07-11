<template>
  <div class="wrapper">
    <MyHeader></MyHeader>
    <div class="controller">
      <my-aside :isCollapse="isCollapse"></my-aside>
      <div :class="routerShow" v-bind:style="{ 'min-height': minHeight + 'px' }">
        <div class="changeButtonWrap">
          <div v-if="asideChangeButton" class="asideButtonCut">
            <a class="changeButtonItem" @click="changeAside()">
            </a>
          </div>
          <div v-else class="asideButtonGrow">
            <a class="changeButtonItem" @click="changeAside()">
            </a>
          </div>
        </div>
        <router-view></router-view>
        <MyFooter></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyFooter from './MainFooter.vue'
import MyHeader from './MainHeader.vue'
import MyAside from './Aside.vue'
import { appConfig } from '../common/appConfig'
import util from '../common/util'
export default {
  data() {
    return {
      isCollapse: false,
      asideChangeButton: true,
      footerInfo: appConfig.footerInfo,
      minHeight: util.usefullHeightAndWidth('height') - 50,
      routerShow: 'router-wrapper noPadding'
    }
  },
  created() {},
  destroyed() {
    // 组件销毁时停止接收事件
    this.$root.eventHub.$off(eventDefines.SelEntityChanged)
  },
  mounted() {
    let that = this
    window.onresize = () => {
      return (() => {
        that.minHeight = util.usefullHeightAndWidth('height') - 50
      })()
    }
  },
  computed: {},
  methods: {
    getWindowHeightAndWidth() {
      // 窗口高度和宽度
      let height = util.usefullHeightAndWidth('height')
      let width = util.usefullHeightAndWidth('width')
      console.log(height)
      console.log(width)
    },
    changeAside() {
      if (this.isCollapse) {
        this.isCollapse = false
        this.asideChangeButton = true
        this.routerShow = 'router-wrapper noPadding'
      } else {
        this.isCollapse = true
        this.asideChangeButton = false
        this.routerShow = 'routerGrow noPadding'
      }
    }
  },
  components: { MyHeader, MyAside, MyFooter }
}
</script>

<style>
</style>

