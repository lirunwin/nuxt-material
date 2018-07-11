<template lang="html">
  <div>
    <div class="row">
      <h5 class="col s12 page-title">发布招聘</h5>
      <section class="col s12 valign-wrapper card post-index">
        <nuxt-link :to="{path: '/post/parttime'}" class="post-shortcut card">
          <i class="iconfont icon-parttime"></i>
          <h6>发布兼职</h6>
        </nuxt-link>
        <nuxt-link :to="{path: '/post/train'}" class="post-shortcut card">
          <i class="iconfont icon-train"></i>
          <h6>发布实习</h6>
        </nuxt-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.post-index {
    height: 60vh;
    margin: 0 auto !important;
    justify-content: center;
    .post-shortcut {
        width: 35%;
        text-align: center;
        background: $secondary-color;
        max-width: 300px;
        .iconfont {
            display: block;
            font-size: 5.5rem;
            color: $white;
            line-height: 1;
            padding-top: 1rem;
        }
        +.post-shortcut {
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
