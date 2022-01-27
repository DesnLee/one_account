<template>
  <section class = "keyboards">
    <div class = "output">{{ output }}</div>
    <div class = "buttons">
      <button @click = "inputNum">1</button>
      <button @click = "inputNum">2</button>
      <button @click = "inputNum">3</button>
      <button @click = "clearOne">退格</button>
      <button @click = "inputNum">4</button>
      <button @click = "inputNum">5</button>
      <button @click = "inputNum">6</button>
      <button @click = "clearAll">清空</button>
      <button @click = "inputNum">7</button>
      <button @click = "inputNum">8</button>
      <button @click = "inputNum">9</button>
      <button class = "ok" @click = "ok">OK</button>
      <button class = "zero" @click = "inputNum">0</button>
      <button @click = "inputNum">.</button>
    </div>
  </section>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Keyboards extends Vue {
    output = '0';

    inputNum(event: MouseEvent): void {
      const input = event.target.textContent;
      if (this.output === '0') {
        this.output = '0123456789'.indexOf(input) >= 0 ? input : this.output + input;
      } else {
        if (input === '.' && this.output.indexOf('.') > 0) { return; }
        this.output += input;
      }
    }

    clearOne(): void {
      if (this.output.length === 1) {
        this.output = '0';
        return;
      }
      this.output = this.output.slice(0, -1);
    }

    clearAll(): void {
      this.output = '0';
    }

    ok(): void {
      console.log('1');
    }
  }
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .keyboards {
    .output {
      @extend %innerShadow;
      font: {
        size: 40px;
        weight: bold;
        family: Consolas, monospace;
      }
      color: $color-highlight;
      text-align: right;
      padding: 0 16px;
      line-height: 80px;
      margin-bottom: 8px;
    }

    .buttons {
      display: grid;
      grid: {
        template-columns: repeat(4, 1fr);
        template-rows: repeat(4, 64px);
        row-gap: 8px;
        column-gap: 8px;
      }
      gap: 8px;
      padding: 0 8px 24px 8px;

      > button {
        background: #F4F4F4;
        color: $color-second;
        font-size: 18px;
        font-weight: bold;
        border: none;
        border-radius: 8px;

        &.ok {
          grid-column: 4 / 5;
          grid-row: 3 / 5;
        }

        &.zero {
          grid-column: 1 / 3;
          grid-row: 4 / 5;
        }

        &:active {
          background: $color-highlight-opacity;
        }
      }
    }
  }
</style>
