<template>
  <Layout class = "container">
    <div class = "tabs-container">
      <Tabs :data-list = "typeList" :value.sync = "typeValue" class-prefix = "type"/>
      <Tabs :data-list = "intervalList" :value.sync = "intervalValue" class-prefix = "interval"/>
    </div>
    <ol v-if = "findByType.length > 0" class = "blockList" @click = "log">
      <li v-for = "(group, index) in resultList" :key = "index" class = "blockItem">
        <h3>{{ index }}</h3>
        <ol class = "accountList">
          <li v-for = "(item, index) in group" :key = "index" class = "accountItem">
            <div class = "accountItem-top">
              <div>
                <span>{{ itemTags(item.tags) }}</span>
              </div>
              <div class = "right">
                <span class = "cny">¥</span>
                <span class = "count">{{ item.count }}</span>
              </div>
            </div>
            <p v-if = "item.marks" class = "accountItem-marks">{{ item.marks }}</p>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class = "pic-wrapper">
      <Icon class = "pic" name = "noData"/>
      <h2 class = "notDataTips">暂无数据</h2>
    </div>
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
    hashTable: HashTable = {};

    get accountList() {
      return this.$store.state.accounts.accountsData;
    }

    get resultList() {
      for (const account of this.accountList) {
        const [date, time] = account.createAt?.split('T');
        if (!this.hashTable[date]) {
          this.hashTable[date] = [];
        }
        this.hashTable[date].push(account);
      }
      return this.hashTable;
    }

    get findByType() {
      return this.accountList.map((item: Account) => item.type === this.typeValue);
    }

    itemTags(tags: Tag[]) {
      return tags.length === 0 ? '无标签' : tags.map(tag => tag.name).join('，');
    }

    created() {
      this.$store.commit('accounts/fetch');
    }

    log() {
      console.log(this.typeValue);
    }
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .container {
    background: #F4F4F4;

  }

  .tabs-container {
    @extend %outerShadow;
    position: sticky;
    top: 0;
  }

  ::v-deep {
    .type-tabs {
      background: #FFF;
      color: $color-second;

      > .type-tabs-item.selected {
        color: $color-highlight;
        background: #F8F8F8;

        &::after {
          height: 0;
        }
      }
    }

    .interval-tabs {
      background: #F8F8F8;
      color: $color-second;

      > .interval-tabs-item {
        font-size: 16px;
        font-weight: normal;
        height: 48px;
        color: $color-third;

        &.selected {
          color: $color-highlight;
          font-weight: bold;
          background: #F8F8F8;
        }
      }
    }
  }

  .blockList {

    > .blockItem {
      margin-top: 8px;

      > h3 {
        color: $color-grey;
        font-weight: normal;
        font-size: 14px;
        line-height: 2;
        padding: 0 16px;
      }

      > .accountList {
        background: #FFF;
        padding: 0 16px;

        > .accountItem {
          border-bottom: 1px solid #F4F4F4;
          padding: 16px 0;

          > .accountItem-top {
            color: $color-main;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;

            > .right {
              display: flex;
              align-items: flex-end;

              > .cny {
                margin-left: auto;
                font-size: 12px;
                font-weight: normal;
                margin-bottom: 3px;
                color: $color-second;
              }

              > .count {
                margin-left: 4px;
                font-size: 20px;
              }
            }
          }

          > .accountItem-marks {
            color: $color-third;
            font-size: 12px;
            margin-top: 8px;
          }

        }
      }
    }
  }

  .pic {
    width: 200px !important;
    height: 200px !important;

    &-wrapper {
      text-align: center;
      margin-top: 48px;
    }
  }

  .notDataTips {
    text-align: center;
    padding: 48px;
    color: $color-second;
  }
</style>
