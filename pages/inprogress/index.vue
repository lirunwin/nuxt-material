<template lang="html">
  <page>
    <page-title>进行中</page-title>
    <form>
      <tool-bar></tool-bar>
    </form>
    <InProgressItem></InProgressItem>
  </page>
</template>

<script>
import PageTitle from '@/components/PageTitle';
import Page from '@/components/Page';
import ToolBar from '@/components/ToolBar';
import InProgressItem from '@/components/InProgressItem';
export default {
  components: {
    PageTitle,
    Page,
    ToolBar,
    InProgressItem
  }
}
</script>

<style lang="scss">
</style>
