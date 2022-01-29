<template>
  <label class = "marks"> <span class = "name">{{ name }}</span>
    <input v-model.trim = "input" :placeholder = "placeholder" type = "text"/>
  </label>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Marks extends Vue {
    @Prop(String) readonly value!: string;
    @Prop({required: true}) name!: string;
    @Prop({required: true}) readonly placeholder!: string;

    input = '';

    created(): void {
      this.input = this.value;
    }

    @Watch('input')
    onUpdateMarks(): void {
      this.$emit('update:value', this.input);
    }

    @Watch('value')
    onUpdateValue(): void {
      this.input = this.value;
    }
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .marks {
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
