<template>
  <Layout class-prefix = "money">
    <Tags :data-list.sync = "tags" :value.sync = "result.tags"/>
    <Marks :value.sync = "result.marks"/>
    <Types :value.sync = "result.type"/>
    <Keyboards :value.sync = "result.count"/>
  </Layout>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tags from '@/components/Money/Tags.vue';
  import Marks from '@/components/Money/Marks.vue';
  import Types from '@/components/Money/Types.vue';
  import Keyboards from '@/components/Money/Keyboards.vue';

  type Result = {
    tags: string[]
    marks: string
    type: string
    count: number
  }

  @Component({
    components: {Keyboards, Types, Marks, Tags}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行', '哈哈'];
    result: Result = {
      tags: [],
      marks: '',
      type: '-',
      count: 0
    };
  }
</script>

<style lang = "scss">
  .money-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>
