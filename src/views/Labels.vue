<template>
  <Layout>
    <ol class = "tags">
      <li v-for = "tag in tags" :key = "tag">
        <span>{{ tag }}</span>
        <Icon name = "rightArrow"/>
      </li>
    </ol>
    <div class = "newTag-wrapper">
      <button class = "newTag" @click = "createTag">新增标签</button>
    </div>
  </Layout>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagsModel from '@/models/tagsModel';

  @Component
  export default class Labels extends Vue {
    tags = tagsModel.getData();

    createTag(): void {
      const newTag = window.prompt('请输入标签名');
      const result = tagsModel.create(newTag);
      if (result.code !== 1001) {
        window.alert(result.message);
      }
    }
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .tags {
    line-height: 56px;
    padding-left: 16px;
    color: $color-main;

    li {
      border-bottom: 1px solid #F2F2F2;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        color: $color-grey;
        margin-right: 16px;
      }
    }
  }

  .newTag {
    border: none;
    padding: 0 16px;
    background: $color-highlight;
    color: #FFF;
    line-height: 36px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 6px;

    &-wrapper {
      text-align: center;
      padding: 24px 0;
      margin-top: 24px;
    }
  }
</style>
