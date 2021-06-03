import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';//引入elementUI
import 'element-ui/lib/theme-chalk/index.css';//引入elemnentUI样式
import store from '@/store/index'

Vue.config.productionTip = false;
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
