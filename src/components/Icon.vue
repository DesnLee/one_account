<template>
  <svg class = "icon">
    <use :href = "'#' + name"/>
  </svg>
</template>

<script lang = "ts">
  // 引入 icons 目录
  let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (e) {
    console.log('加载 icons 目录失败：' + e);
  }

  export default {
    props: ['name'],
    name: 'Icon'
  };
</script>

<style lang = "scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
