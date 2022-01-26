<template>
  <div id = "app">
    <router-view/>
  </div>
</template>

<style lang = "scss">
  @import "~@/assets/styles/reset.scss";
  @import "~@/assets/styles/helper.scss";

  #app {
    font-family: $font-hei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $color-main;
    line-height: 1.5;
  }
</style>
