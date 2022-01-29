<template>
  <Layout class-prefix = "money">
    <Tags class = "tags" :data-list.sync = "tags" :value.sync = "account.tags"/>
    <section class = "marks-wrapper">
      <InputBar :value.sync = "account.marks" name = "备注" placeholder = "请在此添加备注..."/>
    </section>
    <Types :value.sync = "account.type"/>
    <Keyboards :value.sync = "account.count" @saveAccount = "saveAccount"/>
  </Layout>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tags from '@/components/Money/Tags.vue';
  import InputBar from '@/components/InputBar.vue';
  import Types from '@/components/Money/Types.vue';
  import Keyboards from '@/components/Money/Keyboards.vue';
  import accountModel from '@/models/accountModel';
  import tagsModel from '@/models/tagsModel';

  // 同步 localStorage 账单和标签数据
  accountModel.getData();
  tagsModel.getData();

  @Component({
    components: {Keyboards, Types, InputBar, Tags}
  })
  export default class Money extends Vue {
    tags = tagsModel.data;
    account: Account = {
      tags: [],
      marks: '',
      type: '-',
      count: 0,
    };

    saveAccount(): void {
      const result = accountModel.create(this.account);
      window.alert(result.message);

      // 重置状态
      this.account.tags = [];
      this.account.marks = '';
    }
  }
</script>

<style lang = "scss">
  .tags {
    background: #FFF;
  }

  .money-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .marks-wrapper {
    padding: 8px 0;
  }
</style>
