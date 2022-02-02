<template>
    <div class = "titleBar-wrapper">
      <Icon class = "leftIcon" name = "leftArrow" @click.native = "goBack"/>
      <h1>
        {{ name }}
      </h1>
      <div class = "rightIcon"></div>
    </div>
</template>

<script lang = "ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class TitleBar extends Vue {
      @Prop(String) name: string | undefined;

      goBack(): void {
        this.$router.back();
      }
    }
</script>

<style lang = "scss" scoped>
  .titleBar-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: #FFF;

    .leftIcon {
      cursor: pointer;
    }

    .leftIcon, .rightIcon {
      width: 20px;
      height: 20px;
    }

    h1 {
      font-size: 18px;
      line-height: 1;
    }
  }
</style>
