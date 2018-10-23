<template lang="pug">
  transition-group(name="fade" tag="div")
    .modal(role="dialog" v-if="show" style="display: block; transform: translateY(5rem)" key="modal")
      .modal-dialog(role="document")
        .modal-content
          .modal-header
            h5.modal-title {{ title }}
            button.close(type="button" data-dismiss="modal" aria-label="Close")
              span(aria-hidden="true") &times;
          .modal-body
            p {{ body }}
          .modal-footer
            button.btn.btn-secondary(type="button" data-dismiss="modal" @click="onClicked(false)") 取消
            button.btn.btn-primary(type="button" @click="onClicked(true)") 確定
</template>

<script>
export default {
  name: 'AlertDialog',
  props: {
    title: String,
    body: String,
    show: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
    onClicked (type = false) {
      this.$emit('btnClicked', type)
    }
  }
}
</script>

<style lang='scss'>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
