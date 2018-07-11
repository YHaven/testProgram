<template>
  <div class="home-page">
    
  </div>
</template>
<script>
import { appConfig } from '../../common/appConfig'
import SliderBanner from '../common/SliderBanner'
export default {
  name: 'IYanyiIndex',
  components: { SliderBanner },
  data () {
    return {
      appConfigUrl: appConfig,
      banner: [
        {
          url: '/static/img/homeStatic/home-banner-1.jpg'
        }
      ]
    }
  },
  mounted () {
    // this.addScrollEvent()
    // window.scrollTo(0, 0)
  },
  methods: {
    routerGo (url, type) {
      if (type === 2) {
        window.open(url)
      } else {
        this.$router.push({path: url})
      }
    }
  }
}
</script>

<style>

</style>
