<template>
  <div>
    <HeaderPersonal />
    <slot />
  </div>
</template>

<script>
import HeaderPersonal from "../components/Personal/HeaderPersonal";
export default {
  components: {
    HeaderPersonal,
  },
};
</script>
<style>
* {
  font-family: "ABeeZee", sans-serif;
}
</style>
