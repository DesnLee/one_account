<template>
  <nav>
    <router-link to = "/money" class = "item">
      <Icon name = "money"/>
      记账
    </router-link>
    <router-link to = "/labels" class = "item">
      <Icon name = "labels"/>
      标签
    </router-link>
    <router-link to = "/statistics" class = "item">
      <Icon name = "statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang = "ts">
  export default {
    name: 'Navbar'
  };
</script>

<style lang = "scss" scoped>
  nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, .24);
    flex-direction: row;
    background: #F0F0F0;

    & > .item {
      width: 33.333333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: .5em 0;
      font-size: 12px;

      & > .icon {
        width: 24px;
        height: 24px;
        margin-bottom: 4px;
      }
    }
  }
</style>
