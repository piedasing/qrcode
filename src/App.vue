<template>
  <div id="app">
    <MyQRcode />
  </div>
</template>

<script>
import MyQRcode from './components/MyQRcode.vue'

export default {
  name: 'app',
  components: {
    MyQRcode
  }
}
</script>

<style lang="scss">
* {
  border: none;
  outline: none;
  appearance: none;
  overflow: hidden;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
