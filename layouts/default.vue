<template>
  <div class="layout">
    <md-toolbar class="md-primary navbar" md-elevation="0">
      <i class="iconfont icon-scout"></i>
      <h3 class="md-title">企业端管理系统</h3>
    </md-toolbar>
    <md-drawer md-permanent="clipped" class="sidebar md-elevation-1">
      <md-list>
        <md-subheader class="text-bold">招聘信息</md-subheader>
        <md-list-item to="/post">
          <md-icon class="iconfont icon-post"></md-icon>
          <span class="md-list-item-text">发布招聘</span>
        </md-list-item>
        <md-list-item to="/post/inprogress">
          <md-icon class="iconfont icon-processing"></md-icon>
          <span class="md-list-item-text">进行中</span>
        </md-list-item>
        <md-list-item to="/post/done">
          <md-icon class="iconfont icon-done"></md-icon>
          <span class="md-list-item-text">已完成</span>
        </md-list-item>
        <md-list-item to="/post/cancel">
          <md-icon class="iconfont icon-cancel"></md-icon>
          <span class="md-list-item-text">已取消</span>
        </md-list-item>
        <md-divider></md-divider>

        <md-subheader class="text-bold">任务确认</md-subheader>
        <md-list-item to="/mission">
          <md-icon class="iconfont icon-mission"></md-icon>
          <span class="md-list-item-text">任务验收</span>
        </md-list-item>
        <md-list-item to="/post">
          <md-icon class="iconfont icon-reject"></md-icon>
          <span class="md-list-item-text">驳回任务</span>
        </md-list-item>
        <md-divider></md-divider>

        <md-subheader class="text-bold">任务评价</md-subheader>
        <md-list-item to="/post">
          <md-icon class="iconfont icon-comment"></md-icon>
          <span class="md-list-item-text">待评价</span>
        </md-list-item>
        <md-list-item to="/post">
          <md-icon class="iconfont icon-commented"></md-icon>
          <span class="md-list-item-text">已评价</span>
        </md-list-item>

        <md-subheader class="text-bold">财务管理</md-subheader>
        <md-list-item to="/post">
          <md-icon class="iconfont icon-salary"></md-icon>
          <span class="md-list-item-text">代发工资</span>
        </md-list-item>
        <md-list-item to="/post">
          <md-icon class="iconfont icon-log"></md-icon>
          <span class="md-list-item-text">发放记录</span>
        </md-list-item>
        <md-list-item to="/post">
          <md-icon class="iconfont icon-deposit"></md-icon>
          <span class="md-list-item-text">保证金</span>
        </md-list-item>
        <md-divider></md-divider>

        <md-subheader class="text-bold">账户信息</md-subheader>
        <md-list-item to="/post">
          <md-icon class="iconfont icon-corp_info"></md-icon>
          <span class="md-list-item-text">企业信息</span>
        </md-list-item>
        <md-list-item to="/post">
          <md-icon class="iconfont icon-safe"></md-icon>
          <span class="md-list-item-text">账户安全</span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style lang="scss" scoped>
.navbar {
  padding-left: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  .iconfont.icon-scout {
    width: $sidebar-width;
    align-self: stretch;
    background: darken($primary-color, 5%);
    &::before {
      margin-left: 1rem;
      font-size: 7.5rem;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .md-title {
    padding-left: 1rem;
  }
}
.sidebar {
  padding-left: 2rem;
  padding-right: 2rem;
  width: $sidebar-width;
  max-width: calc(100vw - 125px);
  position: fixed;
  left: 0;
  top: 70px;
  z-index: 9999;
  height: calc(100vh - 70px);
  .md-list.md-theme-default
    .md-list-item-container:not(.md-list-item-default):not([disabled]):hover {
    background: none;
    color: $white;
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
      color: $white;
    }
  }
  .md-list-item-content > .md-icon:first-child {
    margin-right: 1rem;
  }
}
.main-content {
  padding: 64px 0 3rem $sidebar-width;
  background-color: $bg-color;
  min-height: 100vh;
}
</style>
