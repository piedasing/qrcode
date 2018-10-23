import Vue from 'vue'
import App from './App.vue'
import store from './store'

// import VueQrcodeReader from 'vue-qrcode-reader'
import VueQrcode from '@xkeshi/vue-qrcode'

// Vue.use(VueQrcodeReader)
Vue.component(VueQrcode.name, VueQrcode)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
