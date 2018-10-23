<template lang='pug'>
  .MyQRcode
    span qrcode value：
    input(type="text" v-model="qrcode")
    br
    br
    qrcode(:value="qrcode" :options="options" tag="img")
    QrcodeReader
</template>

<script>
import { QrcodeReader } from 'vue-qrcode-reader'
import 'vue-qrcode-reader/dist/vue-qrcode-reader.css'

export default {
  name: 'MyQRcode',
  components: {
    QrcodeReader
  },
  data () {
    return {
      qrcode: '',
      options: {
        background: 'white',
        backgroundAlpha: '1.0',
        foreground: 'black',
        foregroundAlpha: '1.0',
        mime: 'image/png',
        padding: '0',
        size: 150,
        level: 'L'
      }
    }
  },
  methods: {
  }
}
</script>

<style lang='sass'>

</style>
