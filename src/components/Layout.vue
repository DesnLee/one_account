<template>
  <div class = "nav-wrapper">
    <div class = "content">
      <slot/>
    </div>
    <Navbar/>
  </div>
</template>

<script lang = "ts">
  export default {
    name: 'Layout'
  };
</script>

<style scoped lang = "scss">
  .nav-wrapper {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    overflow: auto;
    flex-grow: 1;
  }
</style>
