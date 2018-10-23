<template lang='pug'>
  .MyQRcode
    span qrcode value：
    input(type="text" v-model="qrcode")
    br
    br
    qrcode(:value="qrcode" :options="options" tag="img")
    p {{ content }}
    QrcodeReader(@init="onInit" @decode="onDecode" :paused="paused")
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
      qrcode: 'https://piedasing.github.io/qrcode/dist/',
      options: {
        background: 'white',
        backgroundAlpha: '1.0',
        foreground: 'black',
        foregroundAlpha: '1.0',
        mime: 'image/png',
        padding: '0',
        size: 150,
        level: 'L'
      },
      // ------------------------------------------------
      content: '',
      paused: false
    }
  },
  methods: {
    onInit (promise) {
      promise.then(() => {
        console.log('Successfully initilized! Ready for scanning now!')
      }).catch(error => {
        if (error.name === 'NotAllowedError') {
          this.errorMessage = 'Hey! I need access to your camera'
        } else if (error.name === 'NotFoundError') {
          this.errorMessage = 'Do you even have a camera on your device?'
        } else if (error.name === 'NotSupportedError') {
          this.errorMessage = 'Seems like this page is served in non-secure context (HTTPS, localhost or file://)'
        } else if (error.name === 'NotReadableError') {
          this.errorMessage = 'Couldn\'t access your camera. Is it already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.errorMessage = 'Constraints don\'t match any installed camera. Did you asked for the front camera although there is none?'
        } else {
          this.errorMessage = 'UNKNOWN ERROR: ' + error.message
        }
      })
    },
    onDecode (content) {
      this.content = content
      this.paused = true
    }
  }
}
</script>

<style lang='sass'>
input
  width: 300px
  height: 30px
  text-align: center
  font-size: 1rem
  border: none
  border-bottom: 1px solid #666
</style>
