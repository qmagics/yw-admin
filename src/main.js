import Vue from 'vue';
import Cookies from 'js-cookie';
import App from './App';
import store from './store';
import router from './router';

//重置浏览器默认css样式
import 'normalize.css/normalize.css';

//使用ElementUI
import Element from 'element-ui';
import '@/styles/element-variables.scss';
Vue.use(Element, { size: Cookies.get('size') || 'medium' });

//全局样式
import '@/styles/index.scss';

//注册图标组件
import './icons';

//权限控制
import './permission';

//Vue错误日志处理
import './utils/error-log';

//注册全局filters
import * as filters from './filters';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

//关闭 Vue 的 productionTip
Vue.config.productionTip = false;

// // 生产环境下也使用mock (测试时使用)
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
