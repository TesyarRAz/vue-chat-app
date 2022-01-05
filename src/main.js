import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import './plugins/vuefire'
import App from './views/App.vue'
import router from './router'
import store from './store'

import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
