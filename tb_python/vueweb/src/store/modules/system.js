/**
 * Created by ZhangKj on 2017/2/22.
 */
import * as types from '../mutation-types'
const state = {
  /* ======= getInfo过来的userBasic ====== */
  getInfoUserBasic: {
    UserId: '',
    Phone: '',
    Email: '',
    UserName: '',
    IsRealChecked: '',
    Name: '',
    NickName: '',
    IsMale: '',
    BirthDate: '',
    HeadImageUrl: ''
  },
  /* ======= 当前登录用户 ============= */
  currentAccount: {
    UserName: ''
  },
  /* ======= 用户 ============= */
  user_selectedData: {
    UserId: 0,
    UserAccount: '',
    UserName: '',
    Sex: '男',
    Email: '',
    MobilePhone: ''
  },
  user_isAdd: false,
  user_isModify: false,
  /* ======= 用户组 =========== */
  selectedData: {
    UserGroupID: 0,
    GroupName: '',
    Remark: '',
    Users: []
  },
  userGroup_isAdd: false,
  userGroup_isModify: false,
  /* ============= 角色 ================= */
  role_selectedData: {
    RoleId: 0,
    RoleName: '',
    IsRoot: false,
    Remark: ''
  },
  role_isAdd: false,
  role_isModify: false,
  /* ============ 菜单权限 =========== */
  prog_selectedData: {
    ProgId: 0,
    ProgCode: '',
    ProgName: '',
    ParentID: '',
    ProgType: '',
    ProgUrl: '',
    CanBeRead: false,
    CanBeAdd: false,
    CanBeUpdate: false,
    CanBeDelete: false,
    Remark: ''
  },
  prog_isAdd: false,
  prog_isModify: false
}

const getters = {

}

const actions = {
  /* ====== getInfoUserBasic =========== */
  [types.SYSTEM_GETINFOUSERBASIC] ({commit}, getInfoUserBasic) {
    commit(types.SYSTEM_GETINFOUSERBASIC, getInfoUserBasic)
  },
  /* ======= 当前登录用户 ============= */
  [types.SYSTEM_CURRENTACCOUNT] ({commit}, currentAccount) {
    commit(types.SYSTEM_CURRENTACCOUNT, currentAccount)
  },
  /* ======== 用户 ================== */
  [types.SYSTEM_USER_SELECTEDDATA] ({commit}, selectedData) {
    commit(types.SYSTEM_USER_SELECTEDDATA, selectedData)
  },
  [types.SYSTEM_USER_ISADD] ({commit}, userIsAdd) {
    commit(types.SYSTEM_USER_ISADD, userIsAdd)
  },
  [types.SYSTEM_USER_ISMODIFY] ({commit}, userIsModify) {
    commit(types.SYSTEM_USER_ISMODIFY, userIsModify)
  },
  /* ======= 用户组 =========== */
  [types.SYSTEM_USERGROUP_SELECTEDDATA] ({commit}, selectedData) {
    commit(types.SYSTEM_USERGROUP_SELECTEDDATA, selectedData)
  },
  [types.SYSTEM_USERGROUP_ISADD] ({commit}, userGroupIsAdd) {
    commit(types.SYSTEM_USERGROUP_ISADD, userGroupIsAdd)
  },
  [types.SYSTEM_USERGROUP_ISMODIFY] ({commit}, userGroupIsModify) {
    commit(types.SYSTEM_USERGROUP_ISMODIFY, userGroupIsModify)
  },
  /* ============= 角色 ================= */
  [types.SYSTEM_ROLE_SELECTEDDATA] ({commit}, roleSelectedData) {
    commit(types.SYSTEM_ROLE_SELECTEDDATA, roleSelectedData)
  },
  [types.SYSTEM_ROLE_ISADD] ({commit}, roleIsAdd) {
    commit(types.SYSTEM_ROLE_ISADD, roleIsAdd)
  },
  [types.SYSTEM_ROLE_ISMODIFY] ({commit}, roleIsModify) {
    commit(types.SYSTEM_ROLE_ISMODIFY, roleIsModify)
  },
  /* =========== 菜单权限 ============ */
  [types.SYSTEM_PROG_SELECTEDDATA] ({commit}, progSelectedData) {
    commit(types.SYSTEM_PROG_SELECTEDDATA, progSelectedData)
  },
  [types.SYSTEM_PROG_ISADD] ({commit}, progIsAdd) {
    commit(types.SYSTEM_PROG_ISADD, progIsAdd)
  },
  [types.SYSTEM_PROG_ISMODIFY] ({commit}, progIsModify) {
    commit(types.SYSTEM_PROG_ISMODIFY, progIsModify)
  }
}

const mutations = {
  /* ======= getInfoUserBasic ========= */
  [types.SYSTEM_GETINFOUSERBASIC] (state, getInfoUserBasic) {
    state.getInfoUserBasic = getInfoUserBasic
  },
  /* ======= 当前登录用户 ============= */
  [types.SYSTEM_CURRENTACCOUNT] (state, currentAccount) {
    state.currentAccount = currentAccount
  },

  /* ============= 用户 ================ */
  [types.SYSTEM_USER_SELECTEDDATA] (state, userSelectedData) {
    state.user_selectedData = userSelectedData
  },
  [types.SYSTEM_USER_ISADD] (state, userIsAdd) {
    state.user_isAdd = userIsAdd
  },
  [types.SYSTEM_USER_ISMODIFY] (state, userIsModify) {
    state.user_isModify = userIsModify
  },
  /* ============= 角色 ================= */
  [types.SYSTEM_ROLE_SELECTEDDATA] (state, roleSelectedData) {
    state.role_selectedData = roleSelectedData
  },
  [types.SYSTEM_ROLE_ISADD] (state, roleIsAdd) {
    state.role_isAdd = roleIsAdd
  },
  [types.SYSTEM_ROLE_ISMODIFY] (state, roleIsModify) {
    state.role_isModify = roleIsModify
  },
  /* ======= 用户组 =========== */
  [types.SYSTEM_USERGROUP_SELECTEDDATA] (state, selectedData) {
    state.selectedData = selectedData
  },
  [types.SYSTEM_USERGROUP_ISADD] (state, userGroupIsAdd) {
    state.userGroup_isAdd = userGroupIsAdd
  },
  [types.SYSTEM_USERGROUP_ISMODIFY] (state, userGroupIsModify) {
    state.userGroup_isModify = userGroupIsModify
  },
  /* =========== 菜单权限 ============= */
  [types.SYSTEM_PROG_SELECTEDDATA] (state, progSelectedData) {
    state.prog_selectedData = progSelectedData
  },
  [types.SYSTEM_PROG_ISADD] (state, progIsAdd) {
    state.prog_isAdd = progIsAdd
  },
  [types.SYSTEM_PROG_ISMODIFY] (state, progIsModify) {
    state.prog_isModify = progIsModify
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
