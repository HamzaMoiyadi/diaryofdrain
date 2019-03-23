<template>
  <div id="app">
    <div id="nav">
      <router-link to="/first">First</router-link> |
      <router-link to="/second">Second</router-link> |
      <router-link to="/third">Third</router-link> |
      <router-link to="/fourth">Fourth</router-link> |
      <router-link to="/fifth">Fifth</router-link> 
    </div>
    <router-view/>
  </div>
</template>


<style lang="stylus">
#app {
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>