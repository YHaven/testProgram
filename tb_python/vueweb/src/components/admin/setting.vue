<template>
  <div class="home-page">
    
  </div>
</template>
<script>
import { appConfig } from '../../common/appConfig'
export default {
  name: 'MZSetting',
  components: { SliderBanner },
  data() {
    return {
      appConfigUrl: appConfig
    }
  },
  mounted() {
    // this.addScrollEvent()
    // window.scrollTo(0, 0)
  },
  methods: {}
}
</script>

<style>

</style>
