<template>
  <nav>
    <router-link active-class = "selected" class = "item" to = "/money">
      <Icon name = "money"/>
      记账
    </router-link>
    <router-link active-class = "selected" class = "item" to = "/labels">
      <Icon name = "labels"/>
      标签
    </router-link>
    <router-link active-class = "selected" class = "item" to = "/statistics">
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
  @import "~@/assets/styles/helper.scss";
  nav {
    @extend %outerShadow;
    display: flex;
    flex-direction: row;
    background: #F8F8F8;

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

    & > .item.selected {
      color: $color-highlight;
    }
  }
</style>
