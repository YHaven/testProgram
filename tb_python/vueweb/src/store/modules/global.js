/**
 * Created by Yanglu on 2017/12/12.
 */
import * as types from '../mutation-types'
const state = {
  /* =============== 当前登录用户信息 ================ */
  userData: {
    userName: '',
    name: '',
    phone: '',
    userId: '',
    email: '',
    headImg: null
  }
}

const getters = {
  userData: function (state) {
    if (!state.userData || !state.userData.userId) {
      // 尝试从LocalStorge中获取
      try {
        let data = JSON.parse(localStorage.getItem(types.SYSTEM_USERDATA))
        if (data) {
          state.userData = data
        }
      } catch (e) {}
    }
    return state.userData
  }
}

const actions = {
  /* =======用户信息 ====== */
  [types.SYSTEM_USERDATA] ({commit}, userData) {
    localStorage.setItem(types.SYSTEM_USERDATA, JSON.stringify(userData))
    commit(types.SYSTEM_USERDATA, userData)
  }
}

const mutations = {
  /* ======= 用户信息 ======== */
  [types.SYSTEM_USERDATA] (state, userData) {
    state.userData = userData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
// 注： 命名  和 ProgUrl 相关  例  /system/account  =>  systemAccountVisible
