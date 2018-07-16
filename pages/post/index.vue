<template lang="html">        
  <div class="md-layout md-alignment-center">
    <page-title class="md-layout-item md-size-80">发布招聘</page-title>
    <section class="md-layout-item md-size-80 md-layout md-alignment-center-center md-elevation-1 rounded post-index">        
      <nuxt-link :to="{path: '/post/parttime'}" class="post-shortcut md-elevation-1 rounded">
        <i class="iconfont icon-parttime"></i>
        <h6>发布兼职</h6>
      </nuxt-link>
      <nuxt-link :to="{path: '/post/train'}" class="post-shortcut md-elevation-1 rounded">
        <i class="iconfont icon-train"></i>
        <h6>发布实习</h6>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.post-index {
  min-height: calc(100vh - 12.5rem);
  background: $white;
  .post-shortcut {
    width: 35%;
    text-align: center;
    background: $primary-color-light;
    max-width: 300px;
    display: block;
    &:hover {
      text-decoration: none;
      color: inherit;
    }
    .iconfont {
      display: block;
      font-size: 5.5rem;
      color: $white;
      line-height: 1;
      padding-top: 1rem;
    }
    + .post-shortcut {
      margin-left: 10%;
    }
    h6 {
      color: $white;
      margin-bottom: 1.5rem;
      margin-top: 0;
    }
  }
}
</style>
