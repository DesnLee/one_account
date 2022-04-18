<template>
  <div class="chart" ref="chart"></div>
</template>

<script lang="ts">
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
      let dataAxis = []
      let data = []
      let yMax = 0

      for (const item of this.finalList) {
        if (dataAxis.length < 7) dataAxis.unshift(item.title.substring(5))
        if (data.length < 7) data.unshift(item.total)
        yMax = Math.max(yMax, item.total)
      }

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
          subtext:
            '计入有数据的日期，未展示代表当日数据为 0，点击可查看具体数值',
        },
        xAxis: {
          data: dataAxis,
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
