<template lang='pug'>
  .MyQRcode
    //- 顯示掃描得到的內容
    p {{ content }}
    //- 掃描器
    QrcodeReader(@init="onInit" @decode="onDecode" :paused="paused" style="max-height: 50vh")
    //- 修改QRcode的內容
    span qrcode value：
    input(type="text" v-model="qrcode")
    br
    br
    //- QRcode 圖片
    qrcode(:value="qrcode" :options="options" tag="img")
    //- 對話框
    AlertDialog(:title="dialog.title" :body="dialog.body" :show="dialog.show" @btnClicked="btnClicked")
</template>

<script>
import AlertDialog from '@/components/AlertDialog'
import { QrcodeReader } from 'vue-qrcode-reader'
import 'vue-qrcode-reader/dist/vue-qrcode-reader.css'

export default {
  name: 'MyQRcode',
  components: {
    AlertDialog, QrcodeReader
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
        size: 100,
        level: 'L'
      },
      // ------------------------------------------------
      content: '',
      paused: false,
      dialog: {
        title: '',
        body: '',
        show: false
      }
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
      this.dialog = {
        title: '警告！您即將離開本站',
        body: `是否確定前往 ${content}`,
        show: true
      }
    },
    btnClicked (type) {
      if (type) {
        window.location.href = this.content
      } else {
        this.dialog = {
          title: '',
          body: '',
          show: false
        }
        this.paused = false
      }
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
