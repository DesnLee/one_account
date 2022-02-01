<template>
    <div>
      <TitleBar name = "编辑标签"/>
      <InputBar :value.sync = "tag.name" class = "input" name = "标签名" placeholder = "请输入标签名..."/>
      <div class = "btn-wrapper">
        <Button :customStyle = "{'background': '#C0C4CC'}" @click.native = "deleteTag">删除标签</Button>
        <Button @click.native = "updateTag">确认修改</Button>
      </div>
    </div>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import TitleBar from '@/components/TitleBar.vue';
  import InputBar from '@/components/InputBar.vue';
  import Button from '@/components/Button.vue';
  import deepClone from '@/lib/deepClone';

  @Component({
    components: {Button, InputBar, TitleBar}
  })
  export default class EditLabel extends Vue {
    get tag() {
      return deepClone(this.$store.state.tags.currentTag);
    }

    created(): void {
      this.$store.commit('tags/fetch');
      this.$store.commit('tags/getCurrentTag', this.$route.params.id);

      if (!this.tag) {
        this.$router.replace('/404');
      }
    }

    async deleteTag(): Promise<void> {
      const result = await this.$store.dispatch('tags/delete', this.tag);
      if (result.code === 1) {
        this.$router.back();
      }
    }

    async updateTag(): Promise<void> {
      const result = await this.$store.dispatch('tags/update', this.tag);
      if (result.code === 1) {
        this.$router.back();
      }
    }
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .input {
    background: #FFF;
    margin-top: 12px;
    padding: 8px 16px;
  }

  p {
    padding-left: 16px;
    margin-top: 12px;
    font-size: 12px;
    color: $color-third;
  }

  .btn-wrapper {
    text-align: center;
    padding: 24px 0;
    margin-top: 48px;

    > *:first-child {
      margin-right: 48px;
    }
  }
</style>
