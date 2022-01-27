<template>
  <ul class = "types">
    <li :class = "type === '-' && 'selected'" @click = "selectType('-')">支出
    </li>
    <li :class = "type === '+' && 'selected'" @click = "selectType('+')">收入
    </li>
  </ul>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    name = 'Types';
    type = '-';

    selectType(type: string): void {
      if (type !== '-' && type !== '+') {
        throw new Error('type is undefined');
      }
      this.type = type;
    }
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .types {
    display: flex;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    background: #DDD;
    color: $color-third;

    li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;

      &.selected {
        position: relative;
        color: $color-highlight;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: $color-highlight;
        }
      }
    }
  }
</style>
