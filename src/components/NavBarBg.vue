<template>
    <div class = "navbar-bg"></div>
</template>

<script lang = "ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NavBarBg extends Vue {
    }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .navbar-bg {
    height: $height-navbar;
    width: 100vw;
  }
</style>
