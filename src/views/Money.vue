<template>
  <Layout class-prefix="money">
    <Tags :value.sync="account.tags" class="tags" />
    <section class="marks-wrapper">
      <InputBar
        type="date"
        name="收支时间"
        placeholder="选择时间..."
        :value.sync="account.createAt"
      />
      <InputBar
        type="text"
        :value.sync="account.marks"
        name="备注"
        placeholder="请在此添加备注..."
      />
    </section>
    <Tabs :data-list="typeList" :value.sync="account.type" />
    <Keyboards :value.sync="account.count" @saveAccount="saveAccount" />
  </Layout>
</template>

<script lang="ts">
  import dayjs from 'dayjs'
  import { Component } from 'vue-property-decorator'
  import Tags from '@/components/Money/Tags.vue'
  import InputBar from '@/components/InputBar.vue'
  import Keyboards from '@/components/Money/Keyboards.vue'
  import Tabs from '@/components/Tabs.vue'
  import typeList from '@/constant/typeList'
  import InitPage from '@/mixins/InitPage'
  import { mixins } from 'vue-class-component'

  @Component({
    components: { Tabs, Keyboards, InputBar, Tags },
  })
  export default class Money extends mixins(InitPage) {
    typeList = typeList
    account: Account = {
      tags: [],
      marks: '',
      type: '-',
      count: 0,
      createAt: dayjs(new Date().toISOString()).format('YYYY-MM-DD'),
    }

    async saveAccount(): Promise<void> {
      if (this.account.tags.length === 0) {
        window.alert('请至少选择一项标签')
        return
      }
      const result = await this.$store.dispatch('accounts/create', this.account)
      window.alert(result.message)
      // 重置状态
      this.account.tags = []
      this.account.marks = ''
      this.account.count = 0
      this.account.createAt = dayjs(new Date().toISOString()).format(
        'YYYY-MM-DD'
      )
    }
  }
</script>

<style lang="scss">
  .tags {
    background: #fff;
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
