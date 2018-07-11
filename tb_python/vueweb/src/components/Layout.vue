<template>
  <el-container>
    <el-header><MyHeader></MyHeader></el-header>
    <el-container>
      <el-aside width="200px"><my-aside></my-aside></el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer><MyFooter></MyFooter></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import MyFooter from './MainFooter.vue'
import MyHeader from './MainHeader.vue'
import MyAside from './Aside.vue'
// import { appConfig } from '../common/appConfig'
// import util from '../common/util'
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
  components: { MyHeader, MyAside, MyFooter }
}
</script>

<style>

</style>

