<template>
  <page-container>
    <page-title>进行中</page-title>
    <form class="">
    </form>
    <div class="md-layout md-gutter">
      <InProgressItem class="md-layout-item md-xlarge-size-50 md-large-size-100" v-for="(n, i) of 10" :key="i"></InProgressItem>
    </div>
  </page-container>
</template>

<script>
import InProgressItem from "@/components/InProgressItem";
export default {
  name: "InProgress",
  components: {
    InProgressItem
  }
};
</script>
