/**
 * Created by ZhangKj on 2017/3/1.
 */
var SIGN_REGEXP = /([yMdhsmS])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-MM-dd'
function padding (s, len) {
  len = len - (s + '').length
  for (var i = 0; i < len; i++) { s = '0' + s }
  return s
}

var base64encodechars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
var base64decodechars = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
  -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
  -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1]

export default {
  getQueryStringByName: function (name) {
    var reg = new RegExp('"(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    var context = ''
    if (r != null) {
      context = r[2]
    }
    reg = null
    r = null
    return context === null || context === '' || context === 'undefined' ? '' : context
  },
  isArray: function (o) {
    if (!o) {
      return false
    }
    return Object.prototype.toString.call(o) === '[object Array]'
  },
  cloneObj: function (obj) {
    let str
    if (!obj) {
      return obj
    }
    let newobj = obj.constructor === Array ? [] : {}
    if (typeof obj !== 'object') {
      return
    } else if (window.JSON) {
      str = JSON.stringify(obj) // 序列化对象
      newobj = JSON.parse(str) // 还原
    } else {
      for (var i in obj) {
        newobj[i] = typeof obj[i] === 'object' ? this.cloneObj(obj[i]) : obj[i]
      }
    }
    return newobj
  },
  formatDate: {
    format: function (date, pattern) {
      pattern = pattern || DEFAULT_PATTERN
      return pattern.replace(SIGN_REGEXP, function ($0) {
        switch ($0.charAt(0)) {
          case 'y': return padding(date.getFullYear(), $0.length)
          case 'M': return padding(date.getMonth() + 1, $0.length)
          case 'd': return padding(date.getDate(), $0.length)
          case 'w': return date.getDay() + 1
          case 'h': return padding(date.getHours(), $0.length)
          case 'm': return padding(date.getMinutes(), $0.length)
          case 's': return padding(date.getSeconds(), $0.length)
          case 'S': return padding(date.getMilliseconds(), $0.length)  // 毫秒
        }
      })
    },
    parse: function (dateString, pattern) {
      var matchs1 = pattern.match(SIGN_REGEXP)
      var matchs2 = dateString.match(/(\d)+/g)
      if (matchs1.length === matchs2.length) {
        var _date = new Date(1970, 0, 1)
        for (var i = 0; i < matchs1.length; i++) {
          var _int = parseInt(matchs2[i])
          var sign = matchs1[i]
          switch (sign.charAt(0)) {
            case 'y': _date.setFullYear(_int); break
            case 'M': _date.setMonth(_int - 1); break
            case 'd': _date.setDate(_int); break
            case 'h': _date.setHours(_int); break
            case 'm': _date.setMinutes(_int); break
            case 's': _date.setSeconds(_int); break
            case 'S': _date.setMilliseconds(_int); break  // 毫秒
          }
        }
        return _date
      }
      return null
    }
  },
  generateUUID: function () {
    var d = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
  },
  // 获取cookie
  getCookie: function (name) {
    var arr = null
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    arr = document.cookie.match(reg)
    if (arr) {
      return (arr[2])
    } else {
      return null
    }
  },
  // 设置cookie,增加到vue实例方便全局调用
  setCookie: function (cname, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = cname + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
  },
  // 删除cookie
  delCookie: function (name) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    document.cookie = name + '=' + escape('') + ';expires=' + exp.toGMTString()
    // var cval = this.getCookie(name)
    // if (cval != null) {
    //   document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    // }
  },
  base64encode: function (str) {
    var out
    var i
    var len
    var c1
    var c2
    var c3
    len = str.length
    i = 0
    out = ''
    while (i < len) {
      c1 = str.charCodeAt(i++) & 0xff
      if (i === len) {
        out += base64encodechars.charAt(c1 >> 2)
        out += base64encodechars.charAt((c1 & 0x3) << 4)
        out += '=='
        break
      }
      c2 = str.charCodeAt(i++)
      if (i === len) {
        out += base64encodechars.charAt(c1 >> 2)
        out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4))
        out += base64encodechars.charAt((c2 & 0xf) << 2)
        out += '='
        break
      }
      c3 = str.charCodeAt(i++)
      out += base64encodechars.charAt(c1 >> 2)
      out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4))
      out += base64encodechars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6))
      out += base64encodechars.charAt(c3 & 0x3f)
    }
    return out
  },
  base64decode: function (str) {
    var c1
    var c2
    var c3
    var c4
    var i
    var len
    var out
    len = str.length
    i = 0
    out = ''
    while (i < len) {
      do {
        c1 = base64decodechars[str.charCodeAt(i++) & 0xff]
      } while (i < len && c1 === -1)
      if (c1 === -1) {
        break
      }
      do {
        c2 = base64decodechars[str.charCodeAt(i++) & 0xff]
      } while (i < len && c2 === -1)
      if (c2 === -1) {
        break
      }
      out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4))
      do {
        c3 = str.charCodeAt(i++) & 0xff
        if (c3 === 61) {
          return out
        }
        c3 = base64decodechars[c3]
      } while (i < len && c3 === -1)
      if (c3 === -1) {
        break
      }
      out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2))
      do {
        c4 = str.charCodeAt(i++) & 0xff
        if (c4 === 61) {
          return out
        }
        c4 = base64decodechars[c4]
      } while (i < len && c4 === -1)
      if (c4 === -1) {
        break
      }
      out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }
    return out
  },
  // 检查toCheckStr是否以startStr开头
  startWith: function (toCheckStr, startStr) {
    if(startStr === null || startStr ==='' || !toCheckStr || toCheckStr.length === 0 || startStr.length > toCheckStr.length)
      return false
    if(toCheckStr.substr(0, startStr.length) === startStr)
      return true
    else
      return false
    return true
  },
  // 检查toCheckStr是否以endStr开头
  endWith: function (toCheckStr, endStr) {
    if(endStr === null ||endStr === '' || !toCheckStr || toCheckStr.length ===0 || endStr.length > toCheckStr.length)
      return false
    if(toCheckStr.substring(toCheckStr.length - endStr.length) === endStr)
      return true
    else
      return false
    return true
  },
  // 新增一个时间方法
  createTime: function () {
    let time = new Date()
    let year = time.getFullYear()
    let month = time.getMonth() + 1
    let date = time.getDate()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
  },
  // 判断剧院，剧团，all
  getEntityTypeCnNameByEparams (enterEntity) {
    let ret = 'ALL'
    if (enterEntity === 'all') {
      ret = 'ALL'
    }
    if (enterEntity === 'juyuan') {
      ret = '剧院'
    }
    if (enterEntity === 'jutuan') {
      ret = '剧团'
    }
    return ret
  },
  // 根据经营体类型,判断EntityTypeCnName
  getEntityTypeCnNameByValue (value) {
    let ret = 'ALL'
    if (value === 999999) {
      ret = 'ALL'
    }
    if (value === 1) {
      ret = '剧院'
    }
    if (value === 2) {
      ret = '剧团'
    }
    return ret
  },
  // 模态框关闭前确认
  dialogCloseConfirm: function (done, subThis) {
    subThis.$confirm('确认关闭？')
      .then(_ => {
        done()
      })
      .catch(_ => {})
  },
  // 计算有用宽度,高度
  usefullHeightAndWidth: function (e) {
    // 参数e标识获取高度和宽度
    let winWidth = 0
    let winHeight = 0
    // 获取窗口宽度
    if (window.innerWidth) {
      winWidth = window.innerWidth
    } else if ((document.body) && (document.body.clientWidth)) {
      winWidth = document.body.clientWidth
    }
    // 获取窗口高度
    if (window.innerHeight) {
      winHeight = window.innerHeight
    } else if ((document.body) && (document.body.clientHeight)) {
      winHeight = document.body.clientHeight
    }
    // 通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
      winHeight = document.documentElement.clientHeight
      winWidth = document.documentElement.clientWidth
    }
    if (e === 'height') {
      return winHeight
    }
    if (e === 'width') {
      return winWidth
    }
  },
  // 计算鼠标相对于浏览器窗口位置
  getMousePos: function (event) {
    let e = event || window.event
    return {'x': e.clientX, 'y': e.clientY}
  },
  // 删除数组指定元素removeByValue进行元素删除
  removeByValue (arr, val, func) {
    if (!(arr instanceof Array)) {
      throw new Error('first args need a array')
    }
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i], val)) {
        arr.splice(i, 1)
        break
      }
    }
  },
  validateRules: {
    // el校验11位手机号
    phoneNumber(rule, value, callback) {
      if (/^[1][3,4,5,7,8][0-9]{9}$/g.test(value)) {
        callback()
      } else {
        callback('请输入正确的手机号！')
      }
    },
    // 手机或电话
    telPhoneNumber(rule, value, callback) {
      if (/^[1][3,4,5,7,8][0-9]{9}$/g.test(value) || /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(value)) {
        callback()
      } else {
        callback('请输入正确的号码！')
      }
    },
    // 判断组织网址
    webUrl(rule, value, callback) {
      if (/^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/.test(value)) {
        callback()
      } else {
        callback('请输入正确格式网址！')
      }
    },
    // 校验邮箱名称允许汉字、字母、数字，域名只允许英文域名
    mailString(rule, value, callback) {
      if (value) {
        if (/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g.test(value)) {
          callback()
        } else {
          callback('邮箱格式不正确！')
        }
      } else {
        callback()
      }
    },
  },
  loadingFun (type) {
    var that = this
    if (typeof type === 'undefined') {
      that.loadingTip = that.$loading({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.8)'
      })
    } else if (type === 'close') {
      that.loadingTip.close()
    }
  },
  // 数字格式化
  toThousands (num) {
    var num = (num || 0).toString(), result = '', sof = '00'
    if (num.indexOf('.')>0) {
      sof = num.split('.')[1]
      num = num.split('.')[0]
    }
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    if (result.indexOf('-') === 0) { 
      result = result.replace('-,','-') 
    }
    return result + '.' + sof;
  },
  // 参数去空
  paramsRemoveNull (obj) {
    if (!(obj instanceof Object)) {
      throw new Error('first args need a object')
    }
    for (let item in obj) {
      if (typeof obj[item] === 'undefined' || obj[item] === ''){
        delete obj[item]
      }
    }
    return obj
  },
  // 公用方法(api请求时,判断请求参数是否有值，有值obj动态添加)
  objAddAttr (attr, value, obj) {
    if (value !== '' && value !== undefined && value.length !== 0) {
      obj[attr] = value
    }
    return obj
  },
  /** 
  *@param {string} url 完整的URL地址 
  *@returns {object} 自定义的对象 
  *@description 用法示例：var myURL = parseURL('http://abc.com:8080/dir/index.html?id=255&m=hello#top');
  myURL.file='index.html'
  myURL.hash= 'top'
  myURL.host= 'abc.com'
  myURL.query= '?id=255&m=hello'
  myURL.params= Object = { id: 255, m: hello }
  myURL.path= '/dir/index.html'
  myURL.segments= Array = ['dir', 'index.html']
  myURL.port= '8080'
  myURL.protocol= 'http'
  myURL.source= 'http://abc.com:8080/dir/index.html?id=255&m=hello#top'
  myURL.orgin= 'http://abc.com:8080/'
  */  
  parseURL(url) {  
    var a =  document.createElement('a')
    a.href = url
    let newLocation = {
      source: url,
      protocol: a.protocol.replace(':',''),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: (function(){
          var ret = {},
              seg = a.search.replace(/^\?/,'').split('&'),
              len = seg.length, i = 0, s
          for (;i<len;i++) {
              if (!seg[i]) { continue }
              s = seg[i].split('=')
              ret[s[0]] = s[1]
          }  
          return ret
      })(),
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
      hash: a.hash.replace('#',''),
      path: a.pathname.replace(/^([^\/])/,'/$1'),
      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
      segments: a.pathname.replace(/^\//,'').split('/'),
      orgin: a.origin
    }
    return newLocation
  }
}
