/*
 * @Author: zhangyong
 * @Date: 2020-08-05 16:41:46
 * @LastEditTime: 2020-08-25 18:17:51
 * @LastEditors: zhangyong
 * @Description: 全局axios请求
 */ 

import _axios from './xdf-axios-base'
import xdfLoading from './xdf-axios-loading'

const xdfAxios = function(config) {
  return new Promise((resolve, reject) => {
    xdfLoading.startLoading(config.isLoading)
    _axios(config)
    .then(function(response) { 
      xdfLoading.closeLoading(config.isLoading)
      
      resolve(response)
    })
    .catch(error => {
      xdfLoading.closeLoading(config.isLoading)
      reject(error);
    });
  })
}

export default xdfAxios