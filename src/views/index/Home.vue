<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <br>
      <router-link to="/about">About</router-link>
      <br>
      <a :href="'/news.html'">
        多页应用new.html
      </a>
    </div>
    <HelloWorld msg="多页应用index模块"/>
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
  #nav {
    font-size: 24px;
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
