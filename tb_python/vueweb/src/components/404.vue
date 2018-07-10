<template>
  <div class="container container-table">
      <div class="row vertical-10p">
        <div class="container c-404">
          <img src="/static/img/404.jpg" class="center-block logo">
          <div class="text-center col-sm-6 col-sm-offset-3">
            <h1>Sorry,你想访问的 地址有误或不存在</h1>
            <router-link to="/"><span>返回首页</span></router-link>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'NotFound'
  }
</script>

<style>
  .c-404{margin-top: 68px;}
  .c-404 h1{width: 326px;margin: 0 auto;margin-top: 20px;margin-bottom: 15px;font-size: 40px;font-weight: bold;}
  .c-404 .router-link-active{text-align: right;color: #ff0000;font-size: 20px;font-weight: bold;display: block;width: 326px;margin: 0 auto;}
  .c-404 .router-link-active span{border-bottom: 1px solid #ff0000;}
</style>
