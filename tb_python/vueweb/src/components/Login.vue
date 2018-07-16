<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
import * as api from 'api'
import { mapGetters } from 'vuex'
import * as types from '../store/mutation-types'
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        username: 'yhw',
        password: '123456'
      },
      rules2: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
          //{ validator: validaePass }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    }
  },
  computed: {
    // 从全局导入Getter
    ...mapGetters(['userData'])
  },
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields()
    },
    handleSubmit2(ev) {
      var that = this
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          //_this.$router.replace('/table');
          this.logining = true
          //NProgress.start();
          var loginParams = that.ruleForm2
          api.login(loginParams).then(res => {
            // console.log(res)
            this.logining = false
            if (res.data.haserror) {
              that.$notify.error({
                title: '错误',
                message: res.data.error
              })
            } else {
              // console.log('login')
              this.$store.dispatch(types.SYSTEM_USERDATA, res.data.userdata)
              // util.setCookie('_xsrf',res.data.userdata.xsrf_token)
              this.$router.push({ path: '/' })
            }
          })
        } else {
          console.log('login error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>
