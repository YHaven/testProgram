/**
 * 
 */
import axios from 'axios'
import {appConfig} from '../common/appConfig'
export const login = (params) => { return axios.get(appConfig.apihost + `mainvue?api=login`, {params}).then(res => res.data) }
