                                
/**
 * Created by ZhangKj on 2017/11/2.
 * 应用通用配置
 */
let isDevelopment = !(process.env.NODE_ENV === 'production')
let version = process.env.version || ''
var appConfig = function () {}
appConfig.footerInfo = {
  version: version,
  webYear: '2018',
  webHost: 'mizun.com',
  webCodeF: '', //浙公网安备
  webCodeS: '', //增值电信业务经营许可证
  webCodeT: '' //浙ICP备
}

if (isDevelopment === false) {
  appConfig.tmUrl = '//' // 剧院管家地址
} else {
  appConfig.tmUrl = '//' // 剧院管家地址
}
// 从后端获取配置
appConfig.GetFromRemote = function () {
  // to do
}
export {appConfig}
