<template>
  <div>
    <md-toolbar class="md-primary" id="navbar" md-elevation="0" v-if="!hideBars">
      <!-- <nuxt-link to="/" class="iconfont icon-scout"></nuxt-link> -->
      <nuxt-link to="/"><img src="@/static/img/logo_light.png" alt="logo"></nuxt-link>
      <h3 class="md-title">企业端管理系统</h3>
    </md-toolbar>
    <md-drawer md-permanent="clipped" id="sidebar" class="md-elevation-1 md-scrollbar" v-if="!hideBars">
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
        <md-list-item to="/mission/reject">
          <md-icon class="iconfont icon-reject"></md-icon>
          <span class="md-list-item-text">驳回任务</span>
        </md-list-item>
        <md-divider></md-divider>

        <md-subheader class="text-bold">任务评价</md-subheader>
        <md-list-item to="/comment">
          <md-icon class="iconfont icon-comment"></md-icon>
          <span class="md-list-item-text">待评价</span>
        </md-list-item>
        <md-list-item to="/comment/commented">
          <md-icon class="iconfont icon-commented"></md-icon>
          <span class="md-list-item-text">已评价</span>
        </md-list-item>

        <md-subheader class="text-bold">财务管理</md-subheader>
        <md-list-item to="/salary">
          <md-icon class="iconfont icon-salary"></md-icon>
          <span class="md-list-item-text">代发工资</span>
        </md-list-item>
        <md-list-item to="/salary/log">
          <md-icon class="iconfont icon-log"></md-icon>
          <span class="md-list-item-text">发放记录</span>
        </md-list-item>
        <md-list-item to="/salary/deposit">
          <md-icon class="iconfont icon-deposit"></md-icon>
          <span class="md-list-item-text">保证金</span>
        </md-list-item>
        <md-divider></md-divider>

        <md-subheader class="text-bold">账户信息</md-subheader>
        <md-list-item to="/company">
          <md-icon class="iconfont icon-corp_info"></md-icon>
          <span class="md-list-item-text">企业信息</span>
        </md-list-item>
        <md-list-item to="/company/safe">
          <md-icon class="iconfont icon-safe"></md-icon>
          <span class="md-list-item-text">账户安全</span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <div class="md-scrollbar" :class=" { 'main-content': !hideBars } ">
      <nuxt />
      <footer class="text-center footer-inner md-caption" v-if="!hideBars">
          版权所有：荣利信息咨询有限公司
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  mounted() {
    console.log(this.$route);
  },
  computed: {
    hideBars() {
      return this.$route.name === 'index' || this.$route.name === 'user-signup'
    }
  }
};
</script>

<style lang="scss">
body {
  height: 100%;
}
#navbar {
  padding-left: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  a.iconfont.icon-scout {
    width: $sidebar-width;
    align-self: stretch;
    background: darken($primary-color, 5%);
    color: $white;
    overflow: hidden;
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
#sidebar {
  padding-left: 2rem;
  padding-right: 2rem;
  width: $sidebar-width;
  max-width: calc(100vw - 125px);
  position: fixed;
  left: 0;
  top: 70px;
  z-index: 5;
  height: calc(100vh - 70px);
  .md-list.md-theme-default .md-list-item-container:not(.md-list-item-default):not([disabled]):hover,
  .active {
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
  .md-list-item .md-icon {
    transition-property: margin-left;
  }
}
.main-content {
  padding: 64px 0 3rem $sidebar-width;
  background-color: $bg-color;
  min-height: 100vh;
  position: relative;
}
footer.footer-inner {
  width: 100%;
  padding:1rem 0 1rem $sidebar-width;
  font-size: $size1;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
