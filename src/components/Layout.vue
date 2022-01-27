<template>
  <div class = "layout-wrapper" :class = "classPrefix && `${classPrefix}-wrapper`">
    <div class = "content" :class = "classPrefix && `${classPrefix}-content`">
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

<style scoped lang = "scss">
  .layout-wrapper {
    display: flex;
    flex-direction: column;
  }

  .content {
    overflow: hidden;
  }
</style>
