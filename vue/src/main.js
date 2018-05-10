// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//获取后台后台接口的IP和端口号
import serverEnv from '../config/server'
//导入iview组件以及less并全局注册
import '../iview_theme/iview_theme.less';
//导入store文件
import store from './store/store'
//导入全局axios请求方法
import axios from 'axios'
axios.defaults.baseURL = serverEnv; //设置axios的IP和端口号

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
