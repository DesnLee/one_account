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
    tag?: Tag = undefined;
    id = this.$route.params.id;

    created(): void {
      this.tag = deepClone(window.findTag(this.id));
      if (!this.tag) {
        this.$router.replace('/404');
      }
    }

    deleteTag(): void {
      window.deleteTag(this.id);
      this.$router.back();
    }

    updateTag(): void {
      const result = window.updateTag(this.tag as Tag);
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
