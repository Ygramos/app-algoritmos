<template>
  <div>
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />  
    </component>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style>
.nav {
  width: 100%;
  height: 50px;
  background-color: tomato;
  text-align: center;
}
body {
  font-family: sans-serif;
  background: white;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
