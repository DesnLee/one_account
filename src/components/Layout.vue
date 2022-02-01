<template>
  <div :class = "classPrefix && `${classPrefix}-wrapper`" class = "layout-wrapper">
    <div :class = "classPrefix && `${classPrefix}-content`" class = "content">
      <slot/>
    </div>
    <Navbar/>
    <NavBarBg/>
  </div>
</template>

<script lang = "ts">
  import NavBarBg from '@/components/NavBarBg.vue';

  export default {
    components: {NavBarBg},
    props: ['classPrefix'],
    name: 'Layout'
  };
</script>

<style lang = "scss" scoped>
  .layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex-grow: 1;
  }
</style>
