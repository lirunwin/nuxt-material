<template>
  <div class="md-layout comment-stars">
      <div class="md-layout-item md-size-20 text-center">
          <md-icon class="iconfont icon-star text-accent"></md-icon>
      </div>
      <div class="md-layout-item md-size-20 text-center">
          <md-icon class="iconfont icon-star text-accent"></md-icon>
      </div>
      <div class="md-layout-item md-size-20 text-center">
          <md-icon class="iconfont icon-star text-accent"></md-icon>
      </div>
      <div class="md-layout-item md-size-20 text-center">
          <md-icon class="iconfont icon-star text-accent"></md-icon>
      </div>
      <div class="md-layout-item md-size-20 text-center">
          <md-icon class="iconfont icon-star"></md-icon>
      </div>
  </div>
</template>
<script>
export default {
  name: "Stars"
};
</script>
<style lang="scss">
.comment-stars {
  .icon-star + .icon-star {
    margin-left: 3px;
  }
}
</style>
