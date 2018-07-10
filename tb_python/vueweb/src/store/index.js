/**
 * Created by ZhangKj on 2017/2/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/system'
import global from './modules/global'
import * as types from './mutation-types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    /*  第一级菜单目录的索引
     * 0：系统管理
     * 1：模型模板管理
     * 2：项目功能管理
     * */
    firstLevelMenuIndex: 0
  },
  getters: {},
  actions: {
    [types.FIRSTLEVELMENUINDEX] ({commit}, firstLevelMenuIndex) {
      commit(types.FIRSTLEVELMENUINDEX, firstLevelMenuIndex)
    }
  },
  mutations: {
    [types.FIRSTLEVELMENUINDEX] (state, firstLevelMenuIndex) {
      state.firstLevelMenuIndex = firstLevelMenuIndex
    }
  },
  modules: {
    system,
    global
  }
})
