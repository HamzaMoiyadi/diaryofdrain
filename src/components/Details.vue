<template>
  <div>
    <h1>{{title}}</h1>
    <h6>{{ description }}</h6>
    <h6>{{ links }}</h6>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: ["title", "description", "links"]
};
</script>


<style lang="stylus" scoped>
</style>
