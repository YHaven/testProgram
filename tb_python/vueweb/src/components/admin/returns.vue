<template>
  <div class="home-page">
    <div class="search-form">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="订单号">
          <el-input v-model="searchForm.order_id" placeholder="订单号"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-col :span="11">
            <el-date-picker type="datetime" placeholder="开始时间" v-model="searchForm.create_time_str_1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker type="datetime" placeholder="结束时间" v-model="searchForm.create_time_str_2" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="收货状态">
          <el-select v-model="searchForm.rerurn_express_info" placeholder="收货状态">
            
          </el-select>
        </el-form-item>
        <el-form-item label="退货状态">
          <el-select v-model="searchForm.state" placeholder="退货状态">
            <el-option v-for="item in stateOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn-block">
      <el-button type="primary">上传exl</el-button>
      <el-button type="warning">仓库一键同步</el-button>
      <el-button >添加退款单</el-button>
    </div>

    <el-table :data="dataList" style="width: 100%" v-loading="logining" :row-class-name="tableRowClassName">
      <el-table-column
        type="index"
        header-align="center"
        label="#"
        width="50">
      </el-table-column>
      <el-table-column
        prop="shop_id"
        label="店铺">
        <template slot-scope="scope">
          {{scope.row.shop_id === 1?'米尊优品' : '厨搭档家居旗舰店'}}
        </template>
      </el-table-column>
      <el-table-column
        sortable
        width="100"
        prop="create_time_str"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="return_op_user"
        label="登记人">
      </el-table-column>
      <el-table-column
        prop="taobao_userid"
        label="旺旺">
        <template slot-scope="scope">
          <div>
          <a target="_blank" :href="'http://www.taobao.com/webww/ww.php?ver=3&touid='+scope.row.taobao_userid+'&siteid=cntaobao&status=1&charset=utf-8'">
            <img border="0" :src="'http://amos.alicdn.com/online.aw?v=2&uid='+scope.row.taobao_userid+'&site=cntaobao&s=1&charset=utf-8'" alt="点这里给我发消息"
            />
          </a>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="退货备注" header-align="center">
        <el-table-column
          prop="sales_memo"
          header-align="center"
          label="客服备注"
          width="180">
        </el-table-column>
        <el-table-column
          prop="factory_memo"
          header-align="center"
          label="仓库备注"
          width="180">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="price"
        label="金额">
      </el-table-column>
      <el-table-column
        prop="express_no"
        label="单号">
      </el-table-column>
      <el-table-column
        prop="iswm"
        label="是否无名件">
        <template slot-scope="scope">
          {{scope.row.iswm ? scope.row.iswm === 1?'是': '否' : '-'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="return_type"
        label="退/换货">
      </el-table-column>
      <el-table-column
        prop="rerurn_express_info"
        label="收货状态">
      </el-table-column>
      <el-table-column
        prop="state"
        label="退单状态">
        <template slot-scope="scope">
          <div v-if="scope.row.state">
            <el-select v-model="scope.row.state" placeholder="退货状态" disabled="true">
              <el-option v-for="item in stateOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <div v-else>-</div>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="date"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="page-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="totalCount">
    </el-pagination>
  </div>
</template>
<script>
import * as api from '../../api'
import { appConfig } from '../../common/appConfig'
import util from '../../common/util'
import { mapGetters } from 'vuex'
export default {
  name: 'MZReturns',
  data() {
    return {
      appConfigUrl: appConfig,
      logining: false,
      searchForm: {
        order_id: '',
        create_time_str_1: '',
        create_time_str_2: '',
        rerurn_express_info: '',
        state: ''
      },
      stateOptions: [
        { label: '全部', value: '' },
        { label: '没有单号', value: 0 },
        { label: '还没收到', value: 1 },
        { label: '还没退款', value: 2 },
        { label: '等确认', value: 3 },
        { label: '其他异常', value: 4 },
        { label: '已完成', value: -1 }
      ],
      dataList: [],
      totalCount: 0,
      totalPage: 0,
      pageSize: 20,
      pageNo: 1
    }
  },
  mounted() {
    this.initData()
  },
  computed: {
    // 从全局导入Getter
    ...mapGetters(['userData'])
  },
  methods: {
    initData() {
      let that = this
      let params = this.searchForm
      params.pageNo = 1
      that.searchData(params)
    },
    searchData(params) {
      let that = this
      if (typeof params === 'undefined') {
        params = {}
      }
      let _xsrf = this.userData.xsrf_token
      params._xsrf = _xsrf
      params.api = 'returnslist'
      that.logining = true
      api.postApi(params).then(res => {
        that.logining = false
        if (res.data.haserror) {
          that.$notify.error({
            title: '错误',
            message: res.data.error
          })
        } else {
          that.dataList = res.data.datalist
          that.totalCount = res.data.totalCount
          that.totalPage = res.data.totalPage
          that.pageSize = res.data.pageSize
          that.pageNo = res.data.pageNo
        }
      })
    },
    tableRowClassName(row, rowIndex) {
      // console.log('xtableRowClassNamexx')
      if (row.row.state === -1) {
        return 'success-row'
      } else if (row.row.state === 1) {
        return 'info-row'
      } else if (row.row.state === 2) {
        return 'warning-row'
      } else if (row.row.state === 3) {
        return 'error-row'
      }
      return ''
    },
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      let params = this.searchForm
      params.pageNo = val
      this.searchData(params)
    },
    currentPage() {},
    onSubmit() {
      let that = this
      let params = this.searchForm
      params.pageNo = that.pageNo
      that.searchData(params)
    },
    handleClick(row) {
      console.log(row)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
