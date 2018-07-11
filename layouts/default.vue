<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary navbar" md-elevation="0">
        <i class="iconfont icon-scout"></i>
        <h3 class="md-title">企业端管理系统</h3>
      </md-app-toolbar>
      <md-app-drawer md-permanent="clipped">
        <md-list class="sidebar">
          <md-list-item to="/post" class="sidebar-link">
            <md-icon class="iconfont icon-post"></md-icon>
            <span class="md-list-item-text">发布招聘</span>
          </md-list-item>
          <md-list-item to="/post/inprogress" class="sidebar-link">
            <md-icon class="iconfont icon-processing"></md-icon>
            <span class="md-list-item-text">进行中</span>
          </md-list-item>
          <md-list-item class="sidebar-link">
            <md-icon class="iconfont icon-done"></md-icon>
            <span class="md-list-item-text">已完成</span>
          </md-list-item>
          <md-list-item class="sidebar-link">
            <md-icon class="iconfont icon-cancel"></md-icon>
            <span class="md-list-item-text">已取消</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="main-content">
        <nuxt />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'PermanentClipped'
  }
</script>

<style lang="scss" scoped>
  .md-app {
    height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 260px;
    max-width: calc(100vw - 125px);
  }
.navbar {
  padding-left: 0;
  .iconfont.icon-scout {
    width: 260px;
    align-self: stretch;
      background: darken($primary-color, 5%);
    &::before {
      margin-left: 1rem;      
      font-size: 7.5rem;
      height: 100%;
      display: flex;
      align-items: center
    }
  }
  .md-title {
    padding-left: 1rem;
  }
}
.main-content {
    padding: 1rem 0;
    background-color: $bg-color;
    overflow-y: auto;
}
.md-list.md-theme-default .md-list-item-container:not(.md-list-item-default):not([disabled]):hover {
    background: none;
    color:$white;
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      height: 70%;
      width: 100%;
      left: 0;
      top: 15%;
      background: $primary-color;
      border-radius: 1rem;
    }
    i {      
      color:$white;
    }
}
.md-list-item-content>.md-icon:first-child {
    margin-right: 1rem;
}
.sidebar {
  padding-left: 2rem;
  padding-right: 2rem;
  .sidebar-link {
  }
}
</style>