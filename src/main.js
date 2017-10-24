// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from  'vue-lazyload'
import axios from 'axios'  //异步请求
import vueInfinteScroll from  'vue-infinite-scroll' //滚动加载
import store from '../src/vuex/store'

//设置全局使用
Vue.use(vueInfinteScroll);

Vue.config.productionTip = false;
//设置全局axios方法
Vue.prototype.$http=axios;

Vue.use(VueLazyload,{
  //如果是图片路径，要加入require
  error:require('./assets/img/404.jpg'),//错误时的图片
  loading:require('./assets/img/loading.gif'),//loading时的图片
  try:5,//加载的数量
  attempt:5
  /**
   * attempt：尝试的次数
   * listenEvents:监听的事件
   * adapter:动态修改元素属性
   * filter:图片过滤器
   * lazyComponent:lazyload组件
   * */
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
