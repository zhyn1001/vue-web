/*
 * @Author: zhangyong
 * @Date: 2020-08-25 18:03:31
 * @LastEditTime: 2020-08-25 18:45:11
 * @LastEditors: zhangyong
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import _axios from './sdk/xdf-axios'
import CONFIG from './config/config'

Vue.config.productionTip = false
Vue.use(ElementUI)

const PROTOTYPES = {_axios, CONFIG}

const VueAddition = {
  install: function (Vue) {
    Object.keys(PROTOTYPES).forEach(key => {
      Vue.prototype[key] = PROTOTYPES[key];
    });
  }
}

Vue.use(VueAddition)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
