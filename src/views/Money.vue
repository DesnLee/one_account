<template>
  <Layout>
    <section class = "tags">
      <ul class = "current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class = "new">
        <button>添加标签</button>
      </div>
    </section>
    <section>
      <label class = "marks"> <span class = "name">备注</span>
        <input type = "text" placeholder = "在此添加备注..."/>
      </label>
    </section>
    <ul class = "types">
      <li class = "selected">支出</li>
      <li>收入</li>
    </ul>
    <section class = "keyboard">
      <div class = "output">1000</div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
      <button>退格</button>
      <button>清空</button>
      <button>OK</button>
      <button>.</button>
    </section>
  </Layout>
</template>

<script lang = "ts">
  export default {
    name: 'Money',
  };
</script>

<style lang = "scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .tags {
    padding: 16px;

    > .current {
      display: flex;

      > li {
        background-color: #F0F0F0;
        $h: 24px;
        height: $h;
        border-radius: $h/2;
        padding: 0 12px;
        line-height: 24px;
      }
    }

    > .new {
      padding-top: 16px;

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

</style>
