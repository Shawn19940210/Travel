// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
// 1像素边框问题
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
// 将fastClick绑定到document.body，解决移动端click300ms网络延时问题
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
