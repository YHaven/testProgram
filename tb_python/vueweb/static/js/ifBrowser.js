/*
 * @Author: yhw 
 * @Date: 2018-03-22 15:18:01 
 * @Last Modified by: yhw
 * @Last Modified time: 2018-04-12 08:51:15
 */
// 判断浏览器类型
function BrowserType() {
  var userAgent = navigator.userAgent;
  var isOpera = userAgent.indexOf("Opera") > -1;
  var isFF = userAgent.indexOf("Firefox") > -1;
  var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1;
  var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      if (fIEVersion == 7) {
          return "IE7"
      } else if (fIEVersion == 8) {
          return "IE8"
      } else if (fIEVersion == 9) {
          return "IE9"
      } else if (fIEVersion == 10) {
          return "IE10"
      } else if (fIEVersion == 11) {
          return "IE11"
      }
  }
  if (isIE11) {
    return "IE11"
  }
  if (isFF) {
      return "FF"
  }
  if (isOpera) {
      return "Opera"
  }
  if (isSafari) {
      return "Safari"
  }
  if (isChrome) {
      return "Chrome"
  }
  if (isEdge) {
      return "Edge"
  }
}
// 推荐浏览器
function recommendBrowser(){
    // 判断浏览器 
    var browser = BrowserType()
    // 后台不支持类型
    // if (browser !== 'Chrome' && browser !== 'Opera') {
    // 官网IE不支持类型
    if (browser === 'IE6' || browser === 'IE7' || browser === 'IE8') {
        // alert('不支持IE8以下浏览器！请升级或替换浏览器！')
        var errorHTML = '<div class="browser-error clear-b">';

        errorHTML += '<div class="browser-error-top">';
        errorHTML += '<img src="/static/img/browser_logo.png" alt="">';
        errorHTML += '<div class="browser-error-info">非常抱歉，暂不支持当前浏览器，请使用其他浏览器访问</div>';
        errorHTML += '</div>';

        errorHTML += '<div class="browser-re-list clear-b">';
        errorHTML += '<div class="browser-re-listitem">';
        errorHTML += '<div class="browser-listitem-icon"><a href="https://www.baidu.com/s?wd=360%E6%9E%81%E9%80%9F%E6%B5%8F%E8%A7%88%E5%99%A8" target="_blank"><img src="/static/img/browser_360js.png" alt="360极速浏览器"></a></div>';
        errorHTML += '<div class="browser-listitem-text">360极速浏览器<br>(极速模式)</div>';
        errorHTML += '</div>';
        errorHTML += '<div class="browser-re-listitem">';
        errorHTML += '<div class="browser-listitem-icon"><a href="https://www.baidu.com/s?wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8" target="_blank"><img src="/static/img/browser_chrome.png" alt="谷歌浏览器"></a></div>';
        errorHTML += '<div class="browser-listitem-text">谷歌浏览器</div>';
        errorHTML += '</div>';
        errorHTML += '</div>';
        
        errorHTML += '</div>';
        var body = document.body;
        var div = document.createElement("div");
        div.innerHTML = errorHTML;
        body.appendChild(div);
        // document.getElementById('app').innerHTML = errorHTML;
    }
}
recommendBrowser()