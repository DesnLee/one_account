<template>
  <div class="chart" ref="chart"></div>
</template>

<script lang="ts">
  import dayjs from 'dayjs'
  import _ from 'lodash'
  import Vue from 'vue'
  import { Component, Prop, Watch } from 'vue-property-decorator'
  import * as echarts from 'echarts'

  type Final = {
    items: Account[]
    title: string
    total: number
  }

  @Component
  export default class Charts extends Vue {
    @Prop(String) currentTab!: '收入' | '支出'
    @Prop(Array) finalList!: Final[]

    chart: echarts.ECharts | undefined

    @Watch('finalList')
    update() {
      this.chart?.setOption(this.option)
    }

    mounted() {
      this.chart = echarts.init(this.$refs.chart as HTMLDivElement)
      this.chart.setOption(this.option)
    }

    get option() {
      let xAxis: string[]
      let data: number[]
      let yMax = 0

      const today = new Date()
      const foundData = []
      for (let i = 0; i <= 6; i++) {
        const dateString = dayjs(today).subtract(i, 'day').format('YYYY-MM-DD')
        const result = _.find(this.finalList, { title: dateString })
        foundData.unshift({ dateString, result: result?.total || 0 })
        yMax = Math.max(yMax, result?.total || 0)
      }

      xAxis = foundData.map(({ dateString }) => dateString.substring(5))
      data = foundData.map(({ result }) => result)

      let dataShadow = []
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax)
      }

      return {
        grid: {
          top: '24%',
          left: 40,
          right: 16,
          bottom: 32,
        },
        title: {
          text: `近 7 天${this.currentTab}统计`,
          subtext: '无柱形代表当日数据为 0，点击柱形可查看具体数值',
        },
        xAxis: {
          data: xAxis,
          axisLabel: {
            color: '#909399',
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: '#999',
          },
        },
        tooltip: {
          show: true,
          position: 'top',
          formatter: `<div class="tooltip-content"><p class="date">{b}</p><span>合计：¥</span> <span class="total">{c}</span></div>`,
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' },
                ]),
              },
            },
            data: data,
          },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .chart {
    margin-top: 24px;
    height: 400px;

    ::v-deep .tooltip-content {
      font-size: 12px;
      color: #303133;

      .date {
        color: #909399;
        display: flex;
        align-items: center;
        &::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #188df0;
          margin-right: 8px;
        }
      }

      .total {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
</style>
