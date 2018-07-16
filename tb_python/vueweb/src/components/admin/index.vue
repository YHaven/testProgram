<template>
  <div class="home-page">
    <SliderBanner :banner="banner"></SliderBanner>
  </div>
</template>
<script>
import { appConfig } from '../../common/appConfig'
import SliderBanner from '../common/SliderBanner'
export default {
  name: 'MZiIndex',
  components: { SliderBanner },
  data () {
    return {
      appConfigUrl: appConfig,
      banner: [
        {
          url: '/static/img/banner.png'
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

<style lang="scss" scoped>

</style>
