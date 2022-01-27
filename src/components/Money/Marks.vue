<template>
  <section>
    <label class = "marks"> <span class = "name">备注</span>
      <input v-model = "value" placeholder = "在此添加备注..." type = "text"/>
    </label>
  </section>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Marks extends Vue {
    @Prop(String) value: string;

    @Watch('value')
    onUpdateMarks(newValue: string): void {
      this.$emit('update:value', newValue);
    }

  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .marks {
    background-color: #F5F5F5;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
      color: $color-third;
    }

    input {
      line-height: 44px;
      border: none;
      background-color: transparent;
      flex-grow: 1;
      padding-right: 16px;
      color: $color-second;

      &::placeholder {
        color: $color-grey;
      }
    }
  }
</style>
