<template>
  <div>
    <header class="info-top-bar bg-white">
      <div class="container h-100">
        <div class="md-layout h-100 md-alignment-center">
          <!-- <i class="iconfont icon-scout logo caption"></i> -->
          <img src="@/static/img/logo.png" alt="logo">
          <div class="spacer"></div>
          <div class="md-layout-item flex-0 md-layout md-alignment-center">
            <md-icon class="iconfont icon-tel md-layout-item flex-0"></md-icon>
            <div class="md-layout-item flex-0 size-1">
              <div class="caption">服务电话</div>
              <div class="index-tel">028-99212347</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="info-main-content">
      <nuxt />
    </div>
    <footer class="footer">
      <div class="container">
        <nuxt-link to="/info/about" class="text-white">关于我们</nuxt-link>
        <nuxt-link to="/info/contact" class="text-white">联系我们</nuxt-link>
        <nuxt-link to="/info/terms" class="text-white">用户协议</nuxt-link>
        <nuxt-link to="/info/privacy" class="text-white">隐私政策</nuxt-link>
        <nuxt-link to="/info/help" class="text-white">帮助中心</nuxt-link>
        <div class="pt-3">版权信息 成都荣梨信息咨询有限公司</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LayoutInfo"
};
</script>

<style lang="scss">
.info-top-bar {
  height: 4.5rem;
  position: fixed;
  left:0;
  top: 0;
  width: 100%;
  z-index: 999;
  .iconfont.icon-tel {
    background-color: $white;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 2px $primary-color solid;
    color: $primary-color;
    margin-right: 0.625rem;
  }
}

footer.footer {
  background: $black;
  color: $white;
  text-align: center;
  font-size: $size2;
  a + a {
    margin-left: 3rem;
  }
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.info-main-content {
  padding-top: 4.5rem;
  min-height: calc(100vh-9.5rem);
}
</style>
