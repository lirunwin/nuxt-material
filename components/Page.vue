<template lang="html">
  <div class="container page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Page'
}
</script>

<style lang="css">
.container.page {
  /* margin-left: 0; */
}
</style>
