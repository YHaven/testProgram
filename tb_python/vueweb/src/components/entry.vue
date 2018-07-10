<template>
</template>
<script>
  import { appConfig } from '../common/appConfig'
  export default{
    data () {
      return {
        loadingTip: null
      }
    },
    mounted () {
      let url = appConfig.omUrl + '?e=all'
      window.location.href = url
      // this.$router.push({path: '/'})
    },
    methods: {
      // goto判断,内部,直接跳到/
      goTo (e, subThis) {
        subThis.$router.push({path: '/'})
      }
    }
  }
</script>

<style>
</style>
