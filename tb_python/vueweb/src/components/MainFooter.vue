<template>
  <div class="footer"> 
    <!--底部版权信息-->
      <div class="footer-container">
          <div class="copyRight text-center">
              <!-- <div class="beian">&copy; {{footerInfo.webYear}} {{footerInfo.webHost}} -  {{footerInfo.webCodeF}} 增值电信业务经营许可证：{{footerInfo.webCodeS}} - {{footerInfo.webCodeT}}&nbsp;&nbsp;|&nbsp;&nbsp;{{footerInfo.version}}</div> -->
              <!-- <div class="beian">&copy; {{footerInfo.webYear}} {{footerInfo.webHost}} - <a href="http://www.miitbeian.gov.cn/" target="_blank" title="备案号">{{footerInfo.webCodeT}}</a>&nbsp;&nbsp;|&nbsp;&nbsp;{{footerInfo.version}}</div> -->
              <div class="beian">&copy; {{footerInfo.webYear}} {{footerInfo.webHost}} - <a href="http://www.miitbeian.gov.cn/" target="_blank" title="备案号">{{footerInfo.webCodeT}}</a></div>
          </div>
      </div>
  </div>
</template>

<script>
import {appConfig} from '../common/appConfig'
export default {
  data () {
    return {
      appConfigUrl: appConfig,
      footerInfo: appConfig.footerInfo
    }
  },
  mounted () {},
  methods: {}
}
</script>
<style>

</style>
