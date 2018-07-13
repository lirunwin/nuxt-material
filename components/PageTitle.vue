<template lang="html">
  <div class="page-title"><slot>标题</slot></div>
</template>

<script>
export default {
  name: "PageTitle"
};
</script>

<style lang="scss">
.page-title {
  font-size: $size4;
  font-weight: 600;
  padding: 2rem 0;
}
</style>
