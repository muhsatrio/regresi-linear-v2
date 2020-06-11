import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import {BootstrapVueIcons} from 'bootstrap-vue'
import App from './App.vue'
import store from './store/store';

Vue.config.productionTip = false
Vue.use(BootstrapVueIcons);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
