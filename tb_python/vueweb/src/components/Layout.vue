<template>
  <div class="wrapper" id="page">
    <MainHeader></MainHeader>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
  import MainHeader from './MainHeader.vue'
  import MainFooter from './MainFooter.vue'
  export default {
    components: { MainHeader, MainFooter },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted () { },
    methods: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
