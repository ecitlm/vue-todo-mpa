<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/news.html">news</router-link>
    </div>
    <HelloWorld msg="多页应用news模块"/>
    <div class="list">
      <p v-for="(item,key) in list" :key="key" class="bb_1">{{item.title}}</p>
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
  #nav{
    font-size: 20px;
  }
  .list {
    p{
      font-size: 36px;
      border-bottom: 2px solid #e3e3e3;
    }
    .bb_1{
      border-bottom: 1px solid #e3e3e3;
    }
  }
</style>
