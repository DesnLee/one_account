<template>
  <Layout class-prefix = "money">
    <section class = "tags">
      <ul class = "current">
        <li>衣</li>
        <li class = "selected">食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li class = "selected">食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li class = "selected">食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class = "new">
        <button>添加标签</button>
      </div>
    </section>
    <section>
      <label class = "marks"> <span class = "name">备注</span>
        <input placeholder = "在此添加备注..." type = "text"/>
      </label>
    </section>
    <ul class = "types">
      <li class = "selected">支出</li>
      <li>收入</li>
    </ul>
    <section class = "keyboard">
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
  </Layout>
</template>

<script lang = "ts">
  export default {
    name: 'Money',
  };
</script>

<style lang = "scss">
  .money-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .tags {
    flex-grow: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 100px;

    > .current {
      display: flex;
      flex-wrap: wrap;
      margin-right: -10px;

      > li {
        font: {
          size: 18px;
          weight: bold;
        }
        color: $color-second;
        background-color: #F4F4F4;
        $h: 36px;
        height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        line-height: 36px;
        text-align: center;
        margin: 0 10px 12px 0;

        &.selected {
          color: $color-highlight;
          background-color: #2E64C924;
        }
      }
    }

    > .new {
      padding-top: 32px;

      button {
        background: transparent;
        border: none;
        color: $color-third;
        border-bottom: 1px solid $color-grey;
        padding: 0 4px;
      }
    }
  }

  .marks {
    background-color: #F5F5F5;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
      color: $color-third;
    }

    input {
      line-height: 44px;
      border: none;
      background-color: transparent;
      flex-grow: 1;
      padding-right: 16px;
      color: $color-second;

      &::placeholder {
        color: $color-grey;
      }
    }
  }

  .types {
    display: flex;
    text-align: center;
    font-size: 20px;
    background: #DDD;

    li {
      width: 50%;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;

      &.selected {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: $color-highlight;
        }

        color: $color-highlight;
      }
    }
  }

  .keyboard {
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
