<template>
  <div class="navbar">
    <!-- logo  -->
    <div class="logo">DIARYOFDRAIN</div>
    <div class="links">
      <router-link to="/first">First</router-link>|
      <router-link to="/second">Second</router-link>|
      <router-link to="/third">Third</router-link>|
      <router-link to="/fourth">Fourth</router-link>|
      <router-link to="/fifth">Fifth</router-link>
    </div>
  </div>
</template>


<style lang="stylus" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  box-shadow: 0px 5px 10px -4px rgba(0, 0, 0, 0.1);

  .logo {
  }
}
</style>

<script>
export default {};
</script>
