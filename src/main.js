import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueQrcode from '@xkeshi/vue-qrcode'
import './registerServiceWorker'

Vue.component(VueQrcode.name, VueQrcode)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
