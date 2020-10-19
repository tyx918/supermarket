import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

import toast from 'components/common/toast'

// 图片懒加载：用到时加载

Vue.config.productionTip = false


//安装taost插件
Vue.use(toast);

Vue.use(VueLazyLoad,{
    loading: require("./assets/img/common/placeholder.png")
});

/**
 * 非父子组件中的事件传递通信：
 * 1.子->父->子
 * 2.事件总线(这里使用)
 * 3.利用vuex
 */
Vue.prototype.$bus = new Vue();

// 解决移动端300ms延迟
FastClick.attach('body');

new Vue({
  render: h => h(App),
  router,
  App,
  store
}).$mount('#app')
