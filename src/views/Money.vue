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
  import {Component, Watch} from 'vue-property-decorator';
  import Tags from '@/components/Money/Tags.vue';
  import Marks from '@/components/Money/Marks.vue';
  import Types from '@/components/Money/Types.vue';
  import Keyboards from '@/components/Money/Keyboards.vue';
  import {deepClone, getAccountList, setAccountList, getTags, setTags} from '@/model';

  @Component({
    components: {Keyboards, Types, Marks, Tags}
  })
  export default class Money extends Vue {
    tags = getTags();
    accountList = getAccountList();
    account: Account = {
      tags: [],
      marks: '',
      type: '-',
      count: 0,
    };

    created(): void {
      if (this.tags.length === 0) {
        this.tags = ['衣', '食', '住', '行'];
      }
    }

    @Watch('tags')
    onTagsChanged(): void {
      setTags(this.tags);
    }

    saveAccount(): void {
      const newAccount = deepClone(this.account);
      newAccount.createAt = new Date();

      this.accountList.push(newAccount);
      setAccountList(this.accountList);

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
