<template>
  <ul class = "types">
    <li class = "selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script lang = "ts">
  export default {
    name: 'Types'
  };
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .types {
    display: flex;
    text-align: center;
    font-size: 20px;
    background: #DDD;

    li {
      width: 50%;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;

      &.selected {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: $color-highlight;
        }

        color: $color-highlight;
      }
    }
  }
</style>
