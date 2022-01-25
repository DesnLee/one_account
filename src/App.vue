<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/styles/color.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $orange;

    &.router-link-exact-active {
      color: $orange;
    }
  }
}
</style>
