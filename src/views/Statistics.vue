<template>
  <Layout class = "container">
    <div class = "tabs-container">
      <Tabs :data-list = "typeList" :value.sync = "typeValue" class-prefix = "type"/>
    </div>
    <ol v-if = "findByType.length > 0" class = "blockList">
      <li v-for = "(group, index) in finalList" :key = "index" class = "blockItem">
        <h3>{{ beautifyDate(group.title) }}</h3>
        <ol class = "accountList">
          <li v-for = "(item, index) in group.items" :key = "index" class = "accountItem">
            <div class = "accountItem-top">
              <div>
                <span>{{ formatTags(item.tags) }}</span>
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
      <h2 class = "notDataTips">暂无{{ currentTab }}数据</h2>
    </div>
  </Layout>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import typeList from '@/constant/typeList';
  import dayjs from 'dayjs';
  import deepClone from '@/lib/deepClone';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    typeList = typeList;
    typeValue = this.typeList[0].value;

    get currentTab() {
      return this.typeValue === '+' ? '收入' : '支出';
    }

    get accountList() {
      return this.$store.state.accounts.accountsData;
    }

    get finalList() {
      if (this.accountList.length === 0) return [];
      const sortedList = deepClone(this.findByType).sort((a, b) => dayjs(a.createAt) - dayjs(b.createAt));
      const resultList: AccountTable = [];
      for (const item of sortedList) {
        const formatDate = dayjs(item.createAt).format('YYYY-MM-DD');
        if (!resultList[0]) {
          resultList.push({title: formatDate, items: [item]});
          continue;
        }
        if (resultList[0].title === formatDate) {
          resultList[0].items.unshift(item);
        } else {
          resultList.unshift({title: formatDate, items: [item]});
        }
      }
      console.log(resultList);
      return resultList;
    }

    get findByType() {
      return this.accountList.filter((item: Account) => item.type === this.typeValue);
    }

    formatTags(tags: Tag[]) {
      return tags.length === 0 ? '无标签' : tags.map(tag => tag.name).join('，');
    }

    beautifyDate(str: string) {
      const targetDay = dayjs(str);
      const now = dayjs();
      if (now.isSame(targetDay, 'day')) {
        return '今天';
      } else if (now.isSame(targetDay.add(1, 'day'), 'day')) {
        return '昨天';
      } else if (now.isSame(targetDay.add(2, 'day'), 'day')) {
        return '前天';
      } else if (now.isSame(targetDay, 'year')) {
        return targetDay.format('M月D日');
      } else {
        return targetDay.format('YYYY年M月D日');
      }
    }

    created() {
      this.$store.commit('accounts/fetch');
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
      color: $color-third;
      background: #F8F8F8;

      > .type-tabs-item.selected {
        color: $color-highlight;
        background: #FFF;
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
