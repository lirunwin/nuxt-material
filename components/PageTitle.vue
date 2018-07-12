<template lang="html">
  <div class="md-layout-item md-size-95 page-title"><slot>标题</slot></div>
</template>

<script>
export default {
  name: 'PageTitle'
}
</script>

<style lang="scss">
.page-title {
  font-size: $size4;
  font-weight: 600;
  padding: 1rem 20px;
}
</style>
