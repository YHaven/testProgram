<template>
  <div class="login-page">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLogin">
      <el-form-item label="用户名">
        <el-input v-model="formLogin.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLogin.password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="login">立即登陆</el-button>
    </el-form>
  </div>
</template>
<script>
import * as api from 'api'
import { appConfig } from '../common/appConfig'
export default {
  name: 'MZLogin',
  data() {
    return {
      labelPosition:'right',
      appConfigUrl: appConfig,
      formLogin:{
        username:'',
        password:''
      }
    }
  },
  mounted() {
    // this.addScrollEvent()
    // window.scrollTo(0, 0)
  },
  methods: {
    login() {
      let that = this
      let params =  that.formLogin
      api.login(params).then(res => {
        console.log(res)
        if(res.data.haserror){
          that.$notify.error({
          title: '错误',
          message: res.data.error
        });
        }
      })
    }
  }
}
</script>

<style>

</style>
