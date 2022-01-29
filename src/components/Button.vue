<template>
    <button :style = "style">
      <slot/>
    </button>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {Prop} from 'vue-property-decorator';

  type Style = {
    'background': string
  }
  @Component
  export default class Button extends Vue {
    @Prop({default: {'background': '#2E64C9'}}) style!: Style;
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  button {
    border: none;
    padding: 0 16px;
    background: $color-highlight;
    color: #FFF;
    line-height: 36px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 6px;
  }
</style>
