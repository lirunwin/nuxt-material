<template lang="html">
  <div class="md-layout md-alignment-center">
    <page-title>进行中</page-title>
    <form class="md-layout-item md-size-80">
    </form>
    <div class="md-layout-item md-size-80">
      <InProgressItem></InProgressItem>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle';
import ToolBar from '@/components/ToolBar';
import InProgressItem from '@/components/InProgressItem';
export default {
  components: {
    PageTitle,
    ToolBar,
    InProgressItem
  }
}
</script>

<style lang="scss">
</style>
