/**
 * aaa
 */
import axios from 'axios'
import qs from 'qs'
import { appConfig } from '../common/appConfig'
axios.defaults.withCredentials = true
export const login = (params) => { return axios.get(appConfig.apihost + `mainvue?api=login`, { params }).then(res => res.data) }
export const postApi = (params) => { return axios.post(appConfig.apihost + `mainvue`, qs.stringify(params), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res => res.data) }
