<template>
  <section class = "keyboards">
    <div class = "output">1000</div>
    <div class = "buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>退格</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class = "ok">OK</button>
      <button class = "zero">0</button>
      <button>.</button>
    </div>
  </section>
</template>

<script lang = "ts">
  export default {
    name: 'Keyboards'
  };
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
      }
    }
  }
</style>
