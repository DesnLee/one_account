<template>
  <Layout>
    <Tabs :data-list = "typeList" :value.sync = "typeValue" class-prefix = "type"/>
    <Tabs :data-list = "intervalList" :value.sync = "intervalValue" class-prefix = "interval"/>
  </Layout>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import typeList from '@/constant/typeList';
  import intervalList from '@/constant/intervalList';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    typeList = typeList;
    intervalList = intervalList;

    typeValue = this.typeList[0].value;
    intervalValue = this.intervalList[0].value;
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  ::v-deep .type-tabs {
    background: #FFF;
    color: $color-second;

    > .type-tabs-item.selected {
      color: $color-highlight;
      background: #F4F4F4;

      &::after {
        height: 0;
      }
    }
  }

  ::v-deep .interval-tabs {
    background: #F4F4F4;
    color: $color-second;

    > .interval-tabs-item {
      font-size: 16px;
      font-weight: normal;
      height: 48px;
      color: $color-third;

      &.selected {
        color: $color-highlight;
        font-weight: bold;
        background: #F4F4F4;
      }
    }
  }
</style>
