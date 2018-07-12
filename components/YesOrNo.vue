<template>
  <div class="yesorno">
    <md-button class="md-primary md-raised md-dense">同意</md-button>
    <md-button class="md-plain md-raised md-dense">拒绝</md-button>
  </div>
</template>
<script>
export default {
  name: "yesorno"
};
</script>

<style lang="scss">
.yesorno {
  display: inline-block;
  .md-button:first-child {
    border: 1px darken($primary-color, 15%) solid;
    background-color: $primary-color-light !important;
  }
  .md-button:last-child {
    border: 1px darken($border-color, 15%) solid;
  }
  .md-button {
    box-shadow: none !important;
  }
}
</style>

