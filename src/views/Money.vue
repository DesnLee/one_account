<template>
  <Layout class-prefix = "money">
    <Tags :value.sync = "account.tags" class = "tags"/>
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

  @Component({
    components: {Keyboards, Types, InputBar, Tags}
  })
  export default class Money extends Vue {
    account: Account = {
      tags: [],
      marks: '',
      type: '-',
      count: 0,
    };

    created() {
      this.$store.commit('tags/fetch');
      this.$store.commit('accounts/fetch');
    }

    async saveAccount(): Promise<void> {
      const result = await this.$store.dispatch('accounts/create', this.account);
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
