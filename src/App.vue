<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang = "scss">
  @import "~@/assets/styles/color.scss";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
  }
</style>
