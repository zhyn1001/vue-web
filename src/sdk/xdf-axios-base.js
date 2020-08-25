/*
 * @Author: zhangyong
 * @Date: 2020-08-05 17:01:46
 * @LastEditTime: 2020-08-25 18:34:48
 * @LastEditors: zhangyong
 * @Description: axios拦截器
 */ 

import axios from 'axios'
// import CONFIG from '../config/config'
 
let _axios = axios.create({
  timeout: 30000
});
// 请求拦截器
_axios.interceptors.request.use(
  config => { 
    try {
      // config.headers = { 
      //   'accessToken': CONFIG['accessToken'],
      //   'schoolId': CONFIG['schoolId'],
      //   'operatorEmail': CONFIG['userMail']
      // }
    } catch (error) {
      console.log(error);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// 响应拦截器
_axios.interceptors.response.use(
  response => { 
    return response;
  },
  error => {
    return Promise.reject(error);
  }
)


export default _axios