<template>
  <div id="app">
    <router-view></router-view>
    <loading v-show="loading"></loading>
  </div>
</template>
<script>
  import loading from './components/Loading.vue'
  export default {
    components: {
      loading
    },
    computed: {
      loading () {
        return this.$store.state.loading
      }
    }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-shadow: #ff6a3e;
  border-radius: 2px;
  h1{
    font-size: 75px;
    box-shadow: #ff6a3e;
    display: flex;
    flex: 1;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
}
</style>
