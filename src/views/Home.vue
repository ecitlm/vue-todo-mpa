<template>
  <div class="home">
    <HelloWorld msg="Welcome to  Vue.js App"/>
    <div class="list">
      <p v-for="(item,key) in list" :key="key">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
data () {
  return {
    list: [],
    msg:'Welcome  use vue cli3'
  }
},
created() {
    this.$api.joke().then((res) => {
      window.console.log(res.data)
      this.list = res.data.data
    })
  }
}
</script>
<style lang="scss">
  .list {
    p{
      font-size: 36px;
    }
  }
</style>
