<template>
  <el-carousel :interval="5000" arrow="always" class="slide-banner" indicator-position="none">
    <el-carousel-item v-for="(item, index) in banner" :key="index">
      <div class="slider-img" :style="'background:url('+ item.url +') no-repeat center;'"></div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'IySliderBanner', // Iy 是 IYanyi的缩写
  props: {
    banner: Array
  },
  data () {
    return {
      slider: null
    }
  },
  mounted () {}
}
</script>
<style scope>
  .slide-banner .slider-img{width: 100%;height: 100%;}
</style>
