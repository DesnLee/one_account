<template>
  <Layout>
    <div v-if = "tags.length > 0" class = "tags">
      <router-link v-for = "tag in tags" :key = "tag.id" :to = "`/labels/${tag.id}`" class = "tagItem">
        <span>{{ tag.name }}</span>
        <Icon name = "rightArrow"/>
      </router-link>
    </div>
    <div v-else class = "pic-wrapper">
      <Icon class = "pic" name = "noTags"/>
      <h2 class = "notTagsTips">还没有添加标签</h2>
    </div>
    <div class = "newTag-wrapper">
      <Button class = "newTag" @click.native = "createTag">新增标签</Button>
    </div>
  </Layout>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button},
  })
  export default class Labels extends Vue {
    get tags() {
      return this.$store.state.tags.tagsData;
    }

    created() {
      this.$store.commit('tags/fetch');
    }

    createTag(): void {
      this.$store.dispatch('tags/create');
    }
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .tags {
    line-height: 56px;
    padding-left: 16px;
    color: $color-main;

    .tagItem {
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

  .newTag-wrapper {
    text-align: center;
    padding: 24px 0;
    margin-top: 24px;
  }

  .pic {
    width: 200px !important;
    height: 200px !important;

    &-wrapper {
      text-align: center;
      margin-top: 48px;
    }
  }

  .notTagsTips {
    text-align: center;
    padding: 48px;
    color: $color-second;
  }
</style>
