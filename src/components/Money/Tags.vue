<template>
  <section class = "tags">
    <ul class = "current">
      <li v-for = "tag in dataList" :key = "tag" :class = "{selected : value.indexOf(tag) >= 0}" @click = "toggle(tag)">
        {{ tag }}
      </li>
    </ul>
    <div class = "new">
      <button @click = "create">添加标签</button>
    </div>
  </section>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import tagsModel from '@/models/tagsModel';

  @Component
  export default class Tags extends Vue {
    @Prop(Array) readonly dataList!: string[];
    @Prop(Array) readonly value!: string[];

    toggle(tag: string): void {
      const index = this.value.indexOf(tag);
      index < 0 ? this.value.push(tag) : this.value.splice(index, 1);
      this.$emit('update:value', this.value);
    }

    create(): void {
      const tag = window.prompt('请输入标签名');
      if (tag) {
        const result = tagsModel.create(tag);
        window.alert(result.message);
      }
    }
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .tags {
    flex-grow: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 100px;

    > .current {
      display: flex;
      flex-wrap: wrap;
      margin-right: -10px;

      > li {
        font: {
          size: 18px;
          weight: bold;
        }
        color: $color-second;
        background-color: #F4F4F4;
        $h: 36px;
        height: $h;
        border-radius: ($h/2);
        padding: 0 16px;
        line-height: 36px;
        text-align: center;
        margin: 0 10px 12px 0;

        &.selected {
          color: $color-highlight;
          background-color: $color-highlight-opacity;
        }
      }
    }

    > .new {
      padding-top: 32px;

      button {
        background: transparent;
        border: none;
        color: $color-third;
        border-bottom: 1px solid $color-grey;
        padding: 0 4px;
      }
    }
  }
</style>
