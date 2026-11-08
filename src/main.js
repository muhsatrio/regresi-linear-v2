import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import store from './store/store'
import HighchartsVue from 'highcharts-vue'

createApp(App).use(store).use(HighchartsVue).mount('#app')
