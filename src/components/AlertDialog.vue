<template lang="pug">
  .modal(role="dialog" v-if="show" style="display: block;")
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

<style lang='sass'>

</style>
