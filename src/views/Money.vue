<template>
  <Layout class-prefix = "money">
    <Tags/>
    <Marks/>
    <Types/>
    <Keyboards/>
  </Layout>
</template>

<script lang = "ts">
  import Tags from '@/components/Money/Tags.vue';
  import Marks from '@/components/Money/Marks.vue';
  import Types from '@/components/Money/Types.vue';
  import Keyboards from '@/components/Money/Keyboards.vue';

  export default {
    name: 'Money',
    components: {Keyboards, Types, Marks, Tags},
  };
</script>

<style lang = "scss">
  .money-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>
