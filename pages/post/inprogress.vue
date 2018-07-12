<template lang="html">
  <div class="md-layout md-alignment-center">
    <page-title>进行中</page-title>
    <form class="md-layout-item md-size-95">
    </form>
    <div class="md-layout-item md-size-95 md-layout md-gutter">
      <InProgressItem class="md-layout-item md-xlarge-size-50 md-large-size-100" v-for="(n, i) of 10" :key="i"></InProgressItem>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle';
import ToolBar from '@/components/ToolBar';
import InProgressItem from '@/components/InProgressItem';
export default {
  name: 'InProgress',
  components: {
    PageTitle,
    ToolBar,
    InProgressItem
  }
}
</script>
