<template>
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
</template>

<script lang = "ts">
  export default {
    name: 'Tags'
  };
</script>

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
</style>
