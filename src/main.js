import Vue from 'vue'
{{{ElementUI}}}
{{{ElementUILess}}}
{{{Vuex}}}
{{{importStore}}}

import router from './router';
import Service from './service';
import Filter from '@/util/filter';
import App from './App.vue';

{{useElement}}
{{useVuex}}
{{{store}}}

// 注册全局过滤器
Object.keys(Filter).forEach((key) => {
  Vue.filter(key, Filter[key]);
});
// 全局封装的axios
Vue.prototype.$Service = Service;
Vue.config.productionTip = false

new Vue({
  router,
  {{#if Vuex}}
  store,
  {{/if}}
  render: h => h(App),
}).$mount('#app')
