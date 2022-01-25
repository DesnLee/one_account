<template>
  <div>
    <router-link to = "/money">记账</router-link>
    ｜
    <router-link to = "/labels">标签</router-link>
    ｜
    <router-link to = "/statistics">统计</router-link>
  </div>
</template>

<script lang = "ts">
  // import {Component} from 'vue-property-decorator';

  @Component

  export default {
    name: 'navbar'
  };
</script>

<style lang = "scss" scoped>

</style>
