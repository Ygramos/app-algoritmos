<template>
  <div>
    <HeaderComponet /> 
    <div>
        <slot />
    </div>
  </div>
</template>

<script>
import HeaderComponet from "../components/HeaderComponent";
export default {
  components: {
    HeaderComponet,
  },
};
</script>

<style></style>
