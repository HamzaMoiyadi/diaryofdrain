<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>


<style lang="stylus">
#app {
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
