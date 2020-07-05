import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import {BootstrapVueIcons} from 'bootstrap-vue'
import App from './App.vue'
import store from './store/store';
import VueMathjax from 'vue-mathjax';
import HighchartsVue from 'highcharts-vue';

Vue.config.productionTip = false
Vue.use(BootstrapVueIcons);
Vue.use(VueMathjax);
Vue.use(HighchartsVue);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
