<template>
<div>
  <nav>
    <md-toolbar class="md-primary" md-elevation="0">
      <i class="iconfont icon-scout"></i>
      <h3 class="md-title">企业端管理系统</h3>
    </md-toolbar>
  </nav>
  <main class="main-content">
    <nuxt/>
  </main>
</div>
</template>

<style lang="scss">
nav {
  .iconfont.icon-scout {
    height: 100%;
    &::before {
      height: 100%;
      margin-left: 1rem;      
      font-size: 7.5rem;
      display: block;
    }
  }
}
.main-content {
    padding: 1rem 0;
    background-color: $bg-color;
    min-height: calc(100vh - 64px);
}
</style>
