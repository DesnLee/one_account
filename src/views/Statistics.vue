<template>
  <Layout class="container">
    <div class="tabs-container">
      <Tabs :data-list="typeList" :value.sync="typeValue" class-prefix="type" />
    </div>
    <Charts
      v-show="findByType.length > 0"
      :current-tab="currentTab"
      :final-list="finalList"
    />
    <ol v-if="findByType.length > 0" class="blockList">
      <li v-for="(group, index) in finalList" :key="index" class="blockItem">
        <div class="titleBar">
          <h3>{{ beautifyDate(group.title) }}</h3>
          <h3>合计 ¥{{ group.total }}</h3>
        </div>
        <ol class="accountList">
          <li
            v-for="(item, index) in group.items"
            :key="index"
            class="accountItem"
          >
            <div class="accountItem-top">
              <div>
                <span>{{ formatTags(item.tags) }}</span>
              </div>
              <div class="right">
                <span class="cny">¥</span>
                <span class="count">{{ item.count }}</span>
              </div>
            </div>
            <p v-if="item.marks" class="accountItem-marks">{{ item.marks }}</p>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="pic-wrapper">
      <Icon class="pic" name="noData" />
      <h2 class="notDataTips">暂无{{ currentTab }}数据</h2>
    </div>
  </Layout>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import Tabs from '@/components/Tabs.vue'
  import Charts from '@/components/Charts.vue'
  import typeList from '@/constant/typeList'
  import dayjs from 'dayjs'
  import deepClone from '@/lib/deepClone'
  import InitPage from '@/mixins/InitPage'
  import { mixins } from 'vue-class-component'

  @Component({
    components: { Tabs, Charts },
  })
  export default class Statistics extends mixins(InitPage) {
    typeList = typeList
    typeValue = this.typeList[0].value

    get currentTab() {
      return this.typeValue === '+' ? '收入' : '支出'
    }

    get accountList() {
      return this.$store.state.accounts.accountsData
    }

    get finalList() {
      if (this.accountList.length <= 0) return this.accountList
      const sortedList = deepClone(this.findByType).sort(
        (a: Account, b: Account) =>
          dayjs(a.createAt).valueOf() - dayjs(b.createAt).valueOf()
      )
      const resultList: AccountTable[] = []
      for (const item of sortedList) {
        const formatDate = dayjs(item.createAt).format('YYYY-MM-DD')
        if (!resultList[0]) {
          resultList.push({
            title: formatDate,
            total: item.count,
            items: [item],
          })
          continue
        }
        if (resultList[0].title === formatDate) {
          resultList[0].total += item.count
          resultList[0].items.unshift(item)
        } else {
          resultList.unshift({
            title: formatDate,
            total: item.count,
            items: [item],
          })
        }
      }
      return resultList
    }

    get findByType() {
      return this.accountList.filter(
        (item: Account) => item.type === this.typeValue
      )
    }

    formatTags(tags: Tag[]) {
      return tags.length === 0 ? '无标签' : tags.map(tag => tag.name).join('，')
    }

    beautifyDate(str: string) {
      const targetDay = dayjs(str)
      const now = dayjs()
      if (now.isSame(targetDay, 'day')) {
        return '今天'
      } else if (now.isSame(targetDay.add(1, 'day'), 'day')) {
        return '昨天'
      } else if (now.isSame(targetDay.add(2, 'day'), 'day')) {
        return '前天'
      } else if (now.isSame(targetDay, 'year')) {
        return targetDay.format('M月D日')
      } else {
        return targetDay.format('YYYY年M月D日')
      }
    }

    beautifyNumber(num: number) {
      console.log(num)
      const [int, float] = num.toString().split('.')
      const afterInt = int.replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,')
      return float ? afterInt + '.' + float : afterInt
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/helper.scss';

  .container {
    background: #f4f4f4;
  }

  .tabs-container {
    @extend %outerShadow;
    position: sticky;
    background: #ffffff;
    top: 0;
    z-index: 10;
  }

  ::v-deep {
    .type-tabs {
      color: $color-third;
      background: #f8f8f8;

      > .type-tabs-item.selected {
        color: $color-highlight;
        background: #fff;
      }
    }

    .interval-tabs {
      background: #f8f8f8;
      color: $color-second;

      > .interval-tabs-item {
        font-size: 16px;
        font-weight: normal;
        height: 48px;
        color: $color-third;

        &.selected {
          color: $color-highlight;
          font-weight: bold;
          background: #f8f8f8;
        }
      }
    }
  }

  .blockList {
    > .blockItem {
      margin-top: 8px;

      > .titleBar {
        display: flex;
        justify-content: space-between;

        h3 {
          color: $color-grey;
          font-weight: normal;
          font-size: 14px;
          line-height: 2;
          padding: 0 16px;
        }
      }

      > .accountList {
        background: #fff;
        padding: 0 16px;

        > .accountItem {
          border-bottom: 1px solid #f4f4f4;
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
            margin-top: 4px;
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
