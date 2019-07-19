<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
