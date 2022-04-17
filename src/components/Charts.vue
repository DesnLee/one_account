<template>
  <div class="chart" ref="chart"></div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Prop, Watch } from 'vue-property-decorator'
  // import VChart, { THEME_KEY } from 'vue-echarts'
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
        dataAxis.unshift(item.title.substring(5))
        data.unshift(item.total)
        yMax = item.total < yMax ? yMax : item.total
      }

      let dataShadow = []
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax)
      }

      return {
        grid: {
          right: 12,
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
            inside: true,
            color: '#fff',
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
  }
</style>
