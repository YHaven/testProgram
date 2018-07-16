/**
 * 
 */
import axios from 'axios'
import {appConfig} from '../common/appConfig'
export const returnsList = (params) => { return axios.post(appConfig.apihost + `mainvue`, {params}).then(res => res.data) }
