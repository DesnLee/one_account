<template>
  <ul class = "tabs">
    <li v-for = "data in dataList" :key = "data.value" :class = "{selected:value===data.value}" @click = "select(data)">
      {{ data.text }}
    </li>
  </ul>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tabs extends Vue {
    @Prop({required: true}) dataList!: { text: string, value: string }[];
    @Prop() value!: string;

    select(data) {
      console.log(data);
      this.$emit('update:value', data.value);
    }
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .tabs {
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
