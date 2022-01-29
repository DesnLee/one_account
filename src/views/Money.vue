<template>
  <Layout class-prefix = "money">
    <Tags :data-list.sync = "tags" :value.sync = "account.tags"/>
    <Marks :value.sync = "account.marks"/>
    <Types :value.sync = "account.type"/>
    <Keyboards :value.sync = "account.count" @saveAccount = "saveAccount"/>
  </Layout>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tags from '@/components/Money/Tags.vue';
  import Marks from '@/components/Money/Marks.vue';
  import Types from '@/components/Money/Types.vue';
  import Keyboards from '@/components/Money/Keyboards.vue';
  import accountModel from '@/models/accountModel';
  import tagsModel from '@/models/tagsModel';

  // 同步 localStorage 账单和标签数据
  accountModel.getData();
  tagsModel.getData();

  @Component({
    components: {Keyboards, Types, Marks, Tags}
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
  .money-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>
