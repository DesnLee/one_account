<template>
  <Layout>
    <div class = "tags">
      <router-link v-for = "tag in tags" :key = "tag.id" :to = "`/labels/${tag.id}`" class = "tagItem">
        <span>{{ tag.name }}</span>
        <Icon name = "rightArrow"/>
      </router-link>
    </div>
    <div class = "newTag-wrapper">
      <Button class = "newTag" @click.native = "createTag">新增标签</Button>
    </div>
  </Layout>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {mapState} from 'vuex';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button},
    computed: {
      ...mapState('tags', {
        tags: (state: any) => state.tagsData
      })
    }
  })
  export default class Labels extends Vue {
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
</style>
