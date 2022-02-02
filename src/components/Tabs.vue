<template>
  <ul :class = "tabsClass()" class = "tabs">
    <li v-for = "data in dataList" :key = "data.value" :class = "itemClass(data)" @click = "select(data)">
      {{ data.text }}
    </li>
  </ul>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  interface Data {
    text: string;
    value: string;
  }

  @Component
  export default class Tabs extends Vue {
    @Prop({required: true}) dataList!: { text: string, value: string }[];
    @Prop({required: true}) value!: string;
    @Prop(String) classPrefix?: string;

    tabsClass() {
      return {
        [this.classPrefix + '-tabs']: this.classPrefix
      };
    }

    itemClass(data: Data) {
      return {
        [this.classPrefix + '-tabs-item']: this.classPrefix,
        selected: data.value === this.value
      };
    }

    select(data: Data) {
      this.$emit('update:value', data.value);
    }
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  ul {
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
      cursor: pointer;

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
