<template>
  <div class="container container-table">      
    <div class="error-page">
        <div class="page-header">
            <h1>错误</h1>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="alert alert-danger">
                    很抱歉, 发生了一个错误 <strong v-if="error != null"><em>{{error}}</em></strong>
                </div>
                <div v-if="request_id!=null" class="request-id">Request Id: {{request_id}}</div>
            </div>
        </div>
    </div>
  </div>  
</template>
<script>
  export default {
    mounted () {
    },
    methods: {},
    data () {
      return {
        error: null,
        request_id: null
      }
    }
  }
</script>

<style>
</style>
