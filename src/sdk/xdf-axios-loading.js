/*
 * @Author: zhangyong
 * @Date: 2020-08-05 17:45:37
 * @LastEditTime: 2020-08-25 18:38:00
 * @LastEditors: zhangyong
 * @Description: axios-Loading
 */ 

import { Loading } from 'element-ui'

// isLoading  默认false
let loadingCount = 0 // 正在请求的接口数量
let toastLoading = null

function startLoading(isLoading){
  if(isLoading !== false){
    if (loadingCount === 0) {
      toastLoading =   Loading.service()
    }
    loadingCount++
  }
}

function closeLoading(isLoading){
  if(isLoading !== false){
    if (loadingCount <= 0) {
      return
    }
    loadingCount--
    if (loadingCount === 0) {
      toastLoading && toastLoading.close()
    }
  }
}

export default { startLoading, closeLoading }


  
      
  