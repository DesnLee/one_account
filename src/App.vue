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
    color: $color-main;
    line-height: 1.5;
    font-size: 14px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
